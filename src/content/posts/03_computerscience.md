---
slug: "03_computerscience"
title: '电脑小白的学习记录'
pubDate: 2025-12-25
tags: ["学习笔记"]
---
## 卸载Anaconda

打美赛时安装的，笔者最后也没来得及搞明白怎么用。出于对冗杂应用的厌恶（例如微信），宁愿自己在vscode捣鼓，终于熬了个大夜清完。

参考卸载步骤：<a href="https://blog.csdn.net/SHIE_Ww/article/details/132839599">Anaconda彻底卸载及重安装</a>，大体与官网提供的方式相同，但避免了卡在Solving environment这一步——依靠搭建虚拟环境解决。好玩的是，这一次编辑环境变量，我才知道一直没删干净学校自研的垃圾教学软件的原因是编辑后没点“确定”...与教程略有不同的是，我最后下载了<a href="https://www.ccleaner.com/zh-cn">CCleaner</a>来清除注册表，也没有逃过被捆绑下载Avast的命运，最后（不知走了多少弯路）终于成功卸载：
- 首先关闭Avast的自动保护功能（在软件菜单找）
- 接着在任务管理器结束它的进程（有一个没法操作，但最后没有影响）
- 在CCleaner中把它卸载

## 不通过Anaconda安装torch

1. 查看显卡信息

    打开cmd输入`nvidia-smi`，将得到电脑显卡信息和CUDA版本：
    <div align="center">
        <img src="/img/cslearning1.png" alt="nvidia-smi命令输出" width="100%" />
    </div>
- 是否安装CUDA Toolkit：因为我暂时不太需要而没有装
2. pip本地安装

    进入<a href="https://pytorch.org/get-started/locally/">Pytorch官网</a>，选择对应的操作系统，选择使用pip安装、python语言，如果要安装GPU版本在下面还需要勾选自己显卡CUDA的版本。复制下面的Command在cmd运行即可。
    <div align="center">
        <img src="/img/cslearning2.png" alt="nvidia-smi命令输出" width="100%" />
    </div>
    但是可能会timeout，可以使用代理/VPN来解决。（也可以通过镜像网站）

3. 验证是否成功--运行python，打印张量
    ```
    >>> import torch
    >>> a=torch.rand(5,3)
    >>> print(a)
    tensor([[0.0667, 0.8214, 0.6395],
        [0.1441, 0.7907, 0.9169],
        [0.7605, 0.7214, 0.5392],
        [0.3890, 0.3703, 0.8774],
        [0.3571, 0.8875, 0.3948]])
    ```
4. 在vscode中选择合适的解释器