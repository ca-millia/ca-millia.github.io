---
slug: "07_Obsidian使用分享"
title: 'Obsidian使用分享'
pubDate: 2026-06-02
tags: ["日常生活","项目记录"]
---
用法摘要：还在开发中。非常好用，一片宝藏。
- [安装](#安装)
- [基础教程](#基础教程)
- [日记-2026/06/02](#日记-20260602)
  - [step 1:设置日记模板](#step-1设置日记模板)
  - [step 2: 插入可视化日历并设置周记模板](#step-2-插入可视化日历并设置周记模板)
  - [step 3: 调用AI（copilot）](#step-3-调用aicopilot)
  - [step 4: 云同步](#step-4-云同步)

## 安装

## 基础教程
参考<a href="https://www.bilibili.com/video/BV1Xi4y1h76C/?spm_id_from=333.337.search-card.all.click&vd_source=df06049d05b00776488d26321b357795">Obsidian入门保姆级教程：20分钟轻松上手Obsidian！</a>
## 日记-2026/06/02
如果你也是日记爱好者的话，如果你也想尝试电子日记的话，如果你也总想写一点日记就扔给AI讨论一下的话……请一定要来试一试Obisidian！

通常，我的记日记流程是这样的：
1. 点击左侧的“打开/创建今天的日记”，会自动按照模板生成一个.md文件
2. 劈里啪啦写一通，然后在右侧工作区调用AI进行复盘和讨论
3. 如果是周日，点击日历的当周周数，从周记模板生成一个.md文件
4. 重新阅读过去一周的日记，或者直接把过去一段时间的日记发给AI让它帮我复盘

接下来我就按照这个顺序写怎么设置吧。（其实是记不到当初的设置过程了
### step 1:设置日记模板
首先，我们要点击右下角的“设置”，在核心插件里的“日记”板块中设置名称格式、日记位置、模板位置（我分开放在了不同的文件夹里），随后点击“打开/创建今天的日记”就over啦。
<div align="center">
    <img src="/img/Obsidian01.png" alt="创建日记" width="100%" />
</div>
<div align="center">
    <img src="/img/Obsidian02.png" alt="设置日记" width="100%" />
</div>

### step 2: 插入可视化日历并设置周记模板
Obsidian并不自带日历，但是我们可以使用第三方插件。步骤为：设置-第三方插件-关闭安全模式-社区插件市场-搜索Calender-安装-启用。然后回退到前一页，点击该插件旁边的设置，设置周记模板。
<div align="center">
    <img src="/img/Obsidian03.png" alt="安装日历" width="100%" />
</div>
<div align="center">
    <img src="/img/Obsidian04.png" alt="设置日历" width="100%" />
</div>
之后只需要点击右侧工作区的日历图标就能打开日历，点击周数标记可以创建周记，点击某一天可以跳转该天。
<div align="center">
    <img src="/img/Obsidian05.png" alt="使用日历" width="100%" />
</div>

### step 3: 调用AI（copilot）
接下来是最有趣的地方！AI agent真是一个伟大的解放生产力的概念。
在第三方插件市场下载Copilot，进入设置.
在basic页面设置调用的API（可以考虑性价比很高的<a href="https://platform.deepseek.com/api_keys">deepseek</a>）
<div align="center">
    <img src="/img/Obsidian06.png" alt="设置API" width="100%" />
</div>
在advanced页面设置system prompt，即模型最基本的设定，默认输入。
<div align="center">
    <img src="/img/Obsidian07.png" alt="设置sysytem prompt" width="100%" />
</div>
在command页面设置custom commands，适合一些特定的任务，在使用时仅需要在聊天框输入/就可以调用。
<div align="center">
    <img src="/img/Obsidian09.png" alt="聊天" width="100%" />
</div>

### step 4: 云同步
官方云存储需要money，因此有很多利用坚果云、Git存储的方法~我比较直接，直接整个文件夹同步到学校的云盘，因此参考价值不大（但是真的很好用！可惜安利不了）