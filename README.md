# 山洞

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

旧文章基线与迁移记录见 `docs/`。重构时旧站正文只允许语法及迁移修复，不改写文字。

## 音频

首页音乐：在 `src/config.ts` 将 homeMusic 的 null 改为 `{ title: '曲名', src: '/audio/your-track.mp3' }`，将文件放进 `public/audio/`。默认不自动播放，离开首页停止。未配置时不显示。

文章可直接插入以下 HTML（将文件名换成实际音频；不要放进代码围栏）：

```html
<figure>
  <figcaption>音频标题或说明</figcaption>
  <audio controls preload="none" src="/audio/your-recording.mp3"></audio>
  <a href="/audio/your-recording.mp3">打开音频</a>
</figure>
```

## 搜索、评论与目录

搜索索引在 `npm run build` 时生成，用 `npm run preview` 验证；开发模式不生成索引。
文章的二、三级标题自动进入目录。手机端默认折叠，桌面端显示于左侧。
评论使用 giscus；在目标仓库安装 GitHub App 并启用 Discussions 后，填写 `src/config.ts` 的 comments，设 enabled 为 true。文章路径用于关联评论，因此发布后不要随意修改 slug。
评论加载失败时可以通过 GitHub Discussions 链接交流。

## 内容保护

`npm run verify:content` 会把已登记的迁移修改逆向还原，再与旧文逐字比较。修改参考表在 `docs/content-changes.md`；机器可读记录在同目录 JSON 中。
原始图片存于 public，JPEG 仅在构建产物中缩小。`npm run check` 执行类型检查。

## 发布与回退

GitHub Pages 正式地址：https://ca-millia.github.io/

仓库 Settings → Pages → Source 选择 **GitHub Actions**。
推送 main 后，`.github/workflows/deploy.yml` 自动安装依赖、类型检查、构建并发布。Pull Request 只验证，不部署。
日常写作推荐新建分支，验证完成后合并 main。不要直接提交 dist 或 node_modules。

回退：用 `git log --oneline` 找到有问题的提交，通过 `git revert <提交号>` 创建反向提交并推送 main，Actions 会重新部署。若仅需恢复某次部署，可在 Actions 中重新运行对应的成功发布工作流。旧 Netlify 站点保持不变。

迁移修改参考表：[docs/content-changes.md](docs/content-changes.md)
验证记录：[docs/validation.md](docs/validation.md)
