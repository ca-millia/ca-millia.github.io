# 第六轮：GitHub Pages 部署

- 目标仓库：ca-millia/ca-millia.github.io
- 目标地址：https://ca-millia.github.io/
- 来源：GitHub Actions；构建 Node.js 24，npm ci 使用锁文件。
- 工作流：Verify and deploy writing site。
- 只有 main 发布；PR 仅校验。构建成功和测试通过后才上传 dist。
- 部署权限仅赋予 deploy job：pages:write、id-token:write；不在源码存放令牌。
- 六轮提交保留，main 通过 fast-forward 接收，不 squash。

## 线上验收

检查首页、8 篇文章、中文与空格路径、分类/标签/合集、搜索索引、RSS、sitemap、图片及 404。
浏览器检查搜索结果、文章评论框和响应式布局。正式曲目未提供，首页音乐保持隐藏；文章音频能力已用临时音频验证，测试素材不发布。

## 复用

修改 src/config.ts 中站点信息，并同步 astro.config.mjs 的 site 与 public/robots.txt 的 Sitemap 地址。替换文章与 public 资源；为自己的仓库重新填写 giscus 配置。使用现有内容模板、组织索引与独立合集数据，不需要后台。

## 回退

使用 git revert 创建反向提交后推送 main，或重新运行先前成功版本的 Pages 工作流。不要强制推送覆盖历史。旧博客仓库和 Netlify 部署不作修改。
