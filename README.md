# poetry-workflow

poetry-workflow 是一个随机生成一句古诗的 alfred workflow。基于[古诗词·一言API](https://gushi.ci/)。

![poetry-workflow](https://s2.ax1x.com/2019/09/16/nRW8YQ.png)

## 安装

0. 安装 nodejs

1. 在[这里](https://github.com/zeronight/poetry-workflow/releases)下载最新的 poety-workflow

2. 当你导入 poety-workflow 时，设置 alfred 环境变量 **NODE_PATH** ，说明如下：

* **NODE_PATH**: nodejs 的绝对地址，用于执行 js 脚本，默认值是 **/usr/local/bin/node**

## 使用

`ccp`（classical chinese poetry）自动生成一句古诗，点击时会拷贝到剪切板并粘贴到最顶层的应用。
