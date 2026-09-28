# 山石的小站

知识分享 / 个人记录 / 文章创作。Astro 静态个人写作站。

## 开发

需要 Node.js 22.12+，推荐 Node.js 24。

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## 写作

复制 `templates/post.md` 到 `src/content/posts/`，填写标题、日期和唯一的 slug。发布后保持文件名（文章 ID）和 slug 稳定。
图片放在 `public/img/`，正文使用 `/img/文件名`。站点资料在 `src/config.ts`。

分类和展示标签在 `src/data/organization.json`，键为不含扩展名的文章文件名，值为 `{ "category": "笔记", "tags": ["Astro"] }`。
未单独配置时保留文章原 tags，不推断分类。

人工合集在 `src/data/collections.json`：每项包含 slug、title、description、posts（有序文章 ID 数组）。合集不会由标签自动生成。

旧文章基线与迁移记录见 `docs/`。旧站正文只允许语法及迁移修复，不改写文字。
