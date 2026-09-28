import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parseHTML, DOMParser } from 'linkedom';

const root = path.resolve('dist');
const baseline = JSON.parse(fs.readFileSync('docs/migration-baseline.json', 'utf8'));
const organization = JSON.parse(fs.readFileSync('src/data/organization.json', 'utf8'));
const collections = JSON.parse(fs.readFileSync('src/data/collections.json', 'utf8'));
const articleCount = fs.readdirSync('src/content/posts', { recursive: true }).filter(file => file.endsWith('.md')).length;
const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html') && !file.startsWith('pagefind'));
const load = file => parseHTML(fs.readFileSync(path.join(root, file), 'utf8')).document;
const errors = [];
for (const file of files) {
  const document = load(file);
  assert.equal(document.documentElement.lang, 'zh-CN', `${file}: language`);
  assert.ok(document.querySelector('h1'), `${file}: main heading`);
  for (const element of document.querySelectorAll('a[href], img[src], audio[src], source[src]')) {
    const value = element.getAttribute('href') ?? element.getAttribute('src');
    if (!value || /^(?:https?:|mailto:|data:)/.test(value)) continue;
    const pagePath = '/' + file.replaceAll('\\', '/').replace(/index\.html$/, '');
    const url = new URL(value, `https://ca-millia.github.io${pagePath}`);
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) { errors.push(`${file}: missing ${value}`); continue; }
    if (url.hash && target.endsWith('.html')) {
      const destination = load(path.relative(root, target));
      if (!destination.getElementById(decodeURIComponent(url.hash.slice(1)))) errors.push(`${file}: broken anchor ${value}`);
    }
  }
  if (!file.startsWith('posts')) assert.equal(document.querySelectorAll('[data-pagefind-body]').length, 0, `${file}: non-article search entry`);
}
assert.deepEqual(errors, [], 'Internal links, anchors and media must resolve');
for (const entry of baseline) {
  const id = entry.file.replace(/\.md$/, '');
  const document = load(`posts/${id}/index.html`);
  const title = entry.original.match(/^title: ['"](.*)['"]$/m)[1];
  assert.equal(document.querySelector('h1').textContent, title);
  const headings = document.querySelectorAll('.prose h2, .prose h3');
  assert.equal(document.querySelectorAll('.toc a').length, headings.length, `${id}: TOC count`);
  assert.ok(document.querySelector('[data-pagefind-body]'));
  assert.equal(document.querySelector('#home-music'), null, `${id}: home music leaked into article`);
  assert.deepEqual([...document.querySelectorAll('.article-header .tag')].map(a => a.textContent), organization[id].tags);
}
assert.ok(load('posts/06_火箭发动机研究/index.html').querySelector('.katex'), 'Math must render');
const blog = load('blog/index.html');
const dates = [...blog.querySelectorAll('time')].map(node => Date.parse(node.getAttribute('datetime')));
assert.equal(dates.length, articleCount);
assert.deepEqual(dates, [...dates].sort((a,b) => b-a));
for (const collection of collections) {
  const doc = load(`collections/${collection.slug}/index.html`);
  assert.equal(doc.querySelectorAll('.post-list > li').length, collection.posts.length);
}
const rss = new DOMParser().parseFromString(fs.readFileSync('dist/rss.xml', 'utf8'), 'text/xml');
assert.equal(rss.querySelectorAll('item').length, articleCount);
assert.equal(rss.querySelector('language').textContent, 'zh-CN');
for (const item of rss.querySelectorAll('item')) assert.ok(item.querySelector('link').textContent.startsWith('https://ca-millia.github.io/posts/'));
assert.ok(fs.existsSync('dist/sitemap-index.xml'));
assert.ok(fs.existsSync('dist/pagefind/pagefind.js'));
assert.ok(fs.existsSync('dist/404.html'));
console.log(`Verified ${files.length} pages: links, media, anchors, titles, taxonomy, TOC, math, RSS, search artifacts and legacy routes.`);
