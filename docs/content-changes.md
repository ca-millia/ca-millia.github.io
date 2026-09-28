# 文章修改参考表

仅修复语法及迁移配置；不改写标题、正文措辞、标点和段落。位置为旧源文件行号。完整机器可读记录见 content-changes.json。

|文章／行|修改前|修改后|原因／展示影响|
|---|---|---|---|
|01_post-1.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "01_post-1"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|01_post-1.md:4|pubDate: Dec 05, 2025|pubDate: 2025-12-05|统一日期格式，原日期不变|
|02_eng-learn.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "02_eng-learn"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|02_eng-learn.md:4|pubDate: Dec 05, 2025|pubDate: 2025-12-05|统一日期格式，原日期不变|
|02_eng-learn.md:25|1. 离开音标寸步难行，故可以了解一下拼读能力：&lt;a herf="https://www.bilibili.com/video/BV1SN411B7ok/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795"&gt;自然拼读&lt;/a&gt;和&lt;a herf="https://www.bilibili.com/video/BV14b421Y7Jt?spm_id_from=333.788.player.switch&amp;vd_source=df06049d05b00776488d26321b357795&amp;p=2"&gt;sight words&lt;/a&gt;|1. 离开音标寸步难行，故可以了解一下拼读能力：&lt;a href="https://www.bilibili.com/video/BV1SN411B7ok/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795"&gt;自然拼读&lt;/a&gt;和&lt;a href="https://www.bilibili.com/video/BV14b421Y7Jt?spm_id_from=333.788.player.switch&amp;vd_source=df06049d05b00776488d26321b357795&amp;p=2"&gt;sight words&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|02_eng-learn.md:26|2. 科普向视频&lt;a herf="https://youtu.be/Di5vJwH0VZ8?si=plwqMaUtQWO5JdT3"&gt;Crash Course Geography&lt;/a&gt; |2. 科普向视频&lt;a href="https://youtu.be/Di5vJwH0VZ8?si=plwqMaUtQWO5JdT3"&gt;Crash Course Geography&lt;/a&gt; |修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|02_eng-learn.md:27|3. 阅读材料：&lt;a herf="https://weread.qq.com/web/reader/1a632f507192ad0e1a61eb1"&gt;写给学生的世界地理: A CHILD’S GEOGRAPHY OF THE WORLD(英文版)&lt;/a&gt;|3. 阅读材料：&lt;a href="https://weread.qq.com/web/reader/1a632f507192ad0e1a61eb1"&gt;写给学生的世界地理: A CHILD’S GEOGRAPHY OF THE WORLD(英文版)&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|02_eng-learn.md:28|4. 订阅&lt;a herf="https://www.rundown.ai/"&gt;Rundown AI&lt;/a&gt;，不仅能了解行业前沿讯息还能学表达|4. 订阅&lt;a href="https://www.rundown.ai/"&gt;Rundown AI&lt;/a&gt;，不仅能了解行业前沿讯息还能学表达|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|03_computerscience.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "03_computerscience"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|03_computerscience.md:4|pubDate: Dec 25, 2025|pubDate: 2025-12-25|统一日期格式，原日期不变|
|03_computerscience.md:11|参考卸载步骤：&lt;a herf="https://blog.csdn.net/SHIE_Ww/article/details/132839599"&gt;Anaconda彻底卸载及重安装&lt;/a&gt;，大体与官网提供的方式相同，但避免了卡在Solving environment这一步——依靠搭建虚拟环境解决。好玩的是，这一次编辑环境变量，我才知道一直没删干净学校自研的垃圾教学软件的原因是编辑后没点“确定”...与教程略有不同的是，我最后下载了&lt;a herf="https://www.ccleaner.com/zh-cn"&gt;CCleaner&lt;/a&gt;来清除注册表，也没有逃过被捆绑下载Avast的命运，最后（不知走了多少弯路）终于成功卸载：|参考卸载步骤：&lt;a href="https://blog.csdn.net/SHIE_Ww/article/details/132839599"&gt;Anaconda彻底卸载及重安装&lt;/a&gt;，大体与官网提供的方式相同，但避免了卡在Solving environment这一步——依靠搭建虚拟环境解决。好玩的是，这一次编辑环境变量，我才知道一直没删干净学校自研的垃圾教学软件的原因是编辑后没点“确定”...与教程略有不同的是，我最后下载了&lt;a href="https://www.ccleaner.com/zh-cn"&gt;CCleaner&lt;/a&gt;来清除注册表，也没有逃过被捆绑下载Avast的命运，最后（不知走了多少弯路）终于成功卸载：|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|03_computerscience.md:27|    进入&lt;a herf="https://pytorch.org/get-started/locally/"&gt;Pytorch官网&lt;/a&gt;，选择对应的操作系统，选择使用pip安装、python语言，如果要安装GPU版本在下面还需要勾选自己显卡CUDA的版本。复制下面的Command在cmd运行即可。|    进入&lt;a href="https://pytorch.org/get-started/locally/"&gt;Pytorch官网&lt;/a&gt;，选择对应的操作系统，选择使用pip安装、python语言，如果要安装GPU版本在下面还需要勾选自己显卡CUDA的版本。复制下面的Command在cmd运行即可。|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|04_202601 遍历山东·一.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "04_202601 遍历山东·一"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|04_202601 遍历山东·一.md:4|pubDate: Jan 26, 2026|pubDate: 2026-01-26|统一日期格式，原日期不变|
|05_Python学习笔记.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "05_Python学习笔记"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|05_Python学习笔记.md:4|pubDate: Jan 27, 2026|pubDate: 2026-01-27|统一日期格式，原日期不变|
|05_Python学习笔记.md:15|cd即change directory的缩写，后可接驱动器符号（D:）、完整路径和相对路径，本部分主要参考&lt;a herf="https://blog.csdn.net/zdy219727/article/details/98605287"&gt;Windows命令行cmd之cd命令用法&lt;/a&gt;中的总结。|cd即change directory的缩写，后可接驱动器符号（D:）、完整路径和相对路径，本部分主要参考&lt;a href="https://blog.csdn.net/zdy219727/article/details/98605287"&gt;Windows命令行cmd之cd命令用法&lt;/a&gt;中的总结。|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "06_火箭发动机研究"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|06_火箭发动机研究.md:4|pubDate: Mar 19, 2026|pubDate: 2026-03-19|统一日期格式，原日期不变|
|06_火箭发动机研究.md:23|1. &lt;a herf='https://space.bilibili.com/442706857'&gt;ASPT-航天科普小组&lt;/a&gt;的专栏：&lt;a herf='https://www.bilibili.com/read/cv8353366/?opus_fallback=1'&gt;液体火箭发动机循环&lt;/a&gt;等文章|1. &lt;a href='https://space.bilibili.com/442706857'&gt;ASPT-航天科普小组&lt;/a&gt;的专栏：&lt;a href='https://www.bilibili.com/read/cv8353366/?opus_fallback=1'&gt;液体火箭发动机循环&lt;/a&gt;等文章|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:24|2. 19年的文章&lt;a herf='https://www.kechuang.org/t/83750'&gt;说说液体火箭发动机的循环方式&lt;/a&gt;|2. 19年的文章&lt;a href='https://www.kechuang.org/t/83750'&gt;说说液体火箭发动机的循环方式&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:30|   - &lt;a herf='https://zhuanlan.zhihu.com/p/1993328606970139376'&gt;SpaceX猛禽发动机：甲烷燃料的全流量分级燃烧循环&lt;/a&gt;|   - &lt;a href='https://zhuanlan.zhihu.com/p/1993328606970139376'&gt;SpaceX猛禽发动机：甲烷燃料的全流量分级燃烧循环&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:31|   - &lt;a herf='https://www.zhihu.com/question/362695118'&gt;火箭发动机的全流量分级燃烧循环什么缺点都没有吗？&lt;/a&gt;|   - &lt;a href='https://www.zhihu.com/question/362695118'&gt;火箭发动机的全流量分级燃烧循环什么缺点都没有吗？&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:40|&lt;span class=smalltalk&gt;&lt;a herf='https://www.bilibili.com/video/BV1Kh4y147sc/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795'&gt;马赫环：&lt;/a&gt;在火箭发射（甚至地面测试）时，因为喷出的气体速度远超音速，其底部会有非常壮观的形似“肌肉”的马赫环产生。&lt;/span&gt;|&lt;span class=smalltalk&gt;&lt;a href='https://www.bilibili.com/video/BV1Kh4y147sc/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795'&gt;马赫环：&lt;/a&gt;在火箭发射（甚至地面测试）时，因为喷出的气体速度远超音速，其底部会有非常壮观的形似“肌肉”的马赫环产生。&lt;/span&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:50|【参考】知乎文章：&lt;a herf='https://zhuanlan.zhihu.com/p/348707512'&gt;运载火箭的性能参数（科普）&lt;/a&gt;和维基百科：&lt;a herf='https://en.wikipedia.org/wiki/Comparison_of_orbital_rocket_engines'&gt;Comparison of orbital rocket engines&lt;/a&gt;|【参考】知乎文章：&lt;a href='https://zhuanlan.zhihu.com/p/348707512'&gt;运载火箭的性能参数（科普）&lt;/a&gt;和维基百科：&lt;a href='https://en.wikipedia.org/wiki/Comparison_of_orbital_rocket_engines'&gt;Comparison of orbital rocket engines&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:61|    &lt;img src="\img\rocket1.png" alt="火箭发动机示意图" width="100%" /&gt;|    &lt;img src="/img/rocket1.png" alt="火箭发动机示意图" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:65|见灰机百科，写的很全面：&lt;a herf='https://sat.huijiwiki.com/wiki/%E5%9B%BA%E4%BD%93%E7%81%AB%E7%AE%AD%E5%8F%91%E5%8A%A8%E6%9C%BA'&gt;固体火箭发动机&lt;/a&gt;|见灰机百科，写的很全面：&lt;a href='https://sat.huijiwiki.com/wiki/%E5%9B%BA%E4%BD%93%E7%81%AB%E7%AE%AD%E5%8F%91%E5%8A%A8%E6%9C%BA'&gt;固体火箭发动机&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:69|液体火箭发动机循环的介绍见灰机百科，写的很全面：&lt;a herf='https://sat.huijiwiki.com/wiki/%E5%9B%BA%E4%BD%93%E7%81%AB%E7%AE%AD%E5%8F%91%E5%8A%A8%E6%9C%BA'&gt;固体火箭发动机&lt;/a&gt;，并且了解了很多有趣的火箭|液体火箭发动机循环的介绍见灰机百科，写的很全面：&lt;a href='https://sat.huijiwiki.com/wiki/%E5%9B%BA%E4%BD%93%E7%81%AB%E7%AE%AD%E5%8F%91%E5%8A%A8%E6%9C%BA'&gt;固体火箭发动机&lt;/a&gt;，并且了解了很多有趣的火箭|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:97|参考文献：&lt;a herf='https://tjjs.cbpt.cnki.net/WKC/WebPublication/paperDigest.aspx?paperID=0682593a-ee49-4824-b7c6-d937e82688ea'&gt;姚照辉,范家璇.变推力液体火箭发动机推力调节技术研究综述及发展趋势[J].推进技术,2022,v.43;No.303(09):6-19&lt;/a&gt;|参考文献：&lt;a href='https://tjjs.cbpt.cnki.net/WKC/WebPublication/paperDigest.aspx?paperID=0682593a-ee49-4824-b7c6-d937e82688ea'&gt;姚照辉,范家璇.变推力液体火箭发动机推力调节技术研究综述及发展趋势[J].推进技术,2022,v.43;No.303(09):6-19&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:104|参考文献：&lt;a herf='https://doi.org/10.3390/aerospace12060519'&gt;Cardenas, I.R.; Laín, S.; Lopez, O.D. A Review of Aerospike Nozzles: Current Trends in Aerospace Applications. Aerospace 2025, 12, 519. &lt;/a&gt;|参考文献：&lt;a href='https://doi.org/10.3390/aerospace12060519'&gt;Cardenas, I.R.; Laín, S.; Lopez, O.D. A Review of Aerospike Nozzles: Current Trends in Aerospace Applications. Aerospace 2025, 12, 519. &lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|06_火箭发动机研究.md:107|另外一个很有趣的事情是，我发现2025年国内有新公开的&lt;a herf='https://www.patent9.com/PatentDetails.aspx'&gt;用于液体火箭发动机的气动塞式喷管及其制造方法&lt;/a&gt;的新专利，虽然一点资料都没查到，虽然该公司的其他专利看着都不像与之有关的样子。&lt;/span&gt;|另外一个很有趣的事情是，我发现2025年国内有新公开的&lt;a href='https://www.patent9.com/PatentDetails.aspx'&gt;用于液体火箭发动机的气动塞式喷管及其制造方法&lt;/a&gt;的新专利，虽然一点资料都没查到，虽然该公司的其他专利看着都不像与之有关的样子。&lt;/span&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "07_Obsidian使用分享"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|07_Obsidian使用分享.md:4|pubDate: June 02, 2026|pubDate: 2026-06-02|统一日期格式，原日期不变|
|07_Obsidian使用分享.md:19|参考&lt;a her="https://www.bilibili.com/video/BV1Xi4y1h76C/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795"&gt;Obsidian入门保姆级教程：20分钟轻松上手Obsidian！&lt;/a&gt;|参考&lt;a href="https://www.bilibili.com/video/BV1Xi4y1h76C/?spm_id_from=333.337.search-card.all.click&amp;vd_source=df06049d05b00776488d26321b357795"&gt;Obsidian入门保姆级教程：20分钟轻松上手Obsidian！&lt;/a&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:33|    &lt;img src="\img\Obsidian01.png" alt="创建日记" width="100%" /&gt;|    &lt;img src="/img/Obsidian01.png" alt="创建日记" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:36|    &lt;img src="\img\Obsidian02.png" alt="设置日记" width="100%" /&gt;|    &lt;img src="/img/Obsidian02.png" alt="设置日记" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:42|    &lt;img src="\img\Obsidian03.png" alt="安装日历" width="100%" /&gt;|    &lt;img src="/img/Obsidian03.png" alt="安装日历" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:45|    &lt;img src="\img\Obsidian04.png" alt="设置日历" width="100%" /&gt;|    &lt;img src="/img/Obsidian04.png" alt="设置日历" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:49|    &lt;img src="\img\Obsidian05.png" alt="使用日历" width="100%" /&gt;|    &lt;img src="/img/Obsidian05.png" alt="使用日历" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:55|在basic页面设置调用的API（可以考虑性价比很高的&lt;a herf="https://platform.deepseek.com/api_keys"&gt;deepseek&lt;/a&gt;）|在basic页面设置调用的API（可以考虑性价比很高的&lt;a href="https://platform.deepseek.com/api_keys"&gt;deepseek&lt;/a&gt;）|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:57|    &lt;img src="\img\Obsidian06.png" alt="设置API" width="100%" /&gt;|    &lt;img src="/img/Obsidian06.png" alt="设置API" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:61|    &lt;img src="\img\Obsidian07.png" alt="设置sysytem prompt" width="100%" /&gt;|    &lt;img src="/img/Obsidian07.png" alt="设置sysytem prompt" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|07_Obsidian使用分享.md:65|    &lt;img src="\img\Obsidian09.png" alt="聊天" width="100%" /&gt;|    &lt;img src="/img/Obsidian09.png" alt="聊天" width="100%" /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|08_我心目中理想的AI.md:2|layout: ../../layouts/MarkdownPostLayout.astro|slug: "08_我心目中理想的AI"|用稳定 URL 替代旧布局引用，文章交给统一详情页渲染|
|08_我心目中理想的AI.md:4|pubDate: June 15, 2026|pubDate: 2026-06-15|统一日期格式，原日期不变|
|08_我心目中理想的AI.md:25|于是我开始思考，如何用AI完成这一伟大的跨越。得益于之前配置Obsidian copliot的过程——这是我首次接触system prompt、skill等等概念，结合平时对话大模型的亲身体验和对openClaw、&lt;a herf='https://kuan-er.github.io/sjtu-agent/'&gt;SJTU Agent&lt;/a&gt;的道听途说，我先畅想了自己理解下的Agent。|于是我开始思考，如何用AI完成这一伟大的跨越。得益于之前配置Obsidian copliot的过程——这是我首次接触system prompt、skill等等概念，结合平时对话大模型的亲身体验和对openClaw、&lt;a href='https://kuan-er.github.io/sjtu-agent/'&gt;SJTU Agent&lt;/a&gt;的道听途说，我先畅想了自己理解下的Agent。|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|
|08_我心目中理想的AI.md:121|    &lt;br&gt;&lt;/br&gt;|    &lt;br /&gt;&lt;br /&gt;|修正链接属性、图片路径或无效换行闭合标签；保留全部文字与目标|

## 其他页面与资源

- 关于页：兴趣数组中的多余逗号删除，仅移除空列表项；原有文字保留。
- 日期显示使用 YYYY/MM/DD；原始发布日期不变。
- 图片优化发生于 dist 构建产物，源图片原样保存。
- Category / Tag：采用用户确认的八篇对应关系，见 src/data/organization.json。旧 tags 保留于文章 frontmatter，仅前台展示由索引覆盖。
- Collection：未添加；等待实际选编。

## 未擅自修复的内容

- 部分参考链接的名称与目标可能不一致（例如火箭文章的固体/液体链接），无法确定作者意图，保持原样。
- 内容中的拼写、事实与措辞不作编辑；原有手写目录保留。
