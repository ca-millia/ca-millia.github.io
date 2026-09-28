import rss from '@astrojs/rss';
import { allPosts, postUrl } from '../lib/posts';
import { site } from '../config';

export async function GET() {
  return rss({
    title: site.title,
    description: site.description,
    site: site.url,
    items: (await allPosts()).map(post => ({ title: post.data.title, pubDate: post.data.pubDate, link: postUrl(post), description: post.data.description })),
    customData: '<language>zh-CN</language>',
  });
}
