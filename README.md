# <p align="center">![示例](asset/1.webp)<br/>影之诗点击特效 For 网页</span>

## 简述

在网页中模拟影之诗（SZB）的点击特效。就这么简单。

## 安装 / 应用

下载 `click-effect.css` 与 `click-effect.js` 两个源文件（或者下载 release 中的 `Source code.zip` 并解压），将其引入您的 HTML文件中。

代码示例：

```html
<link rel="stylesheet" type="text/css" href="./click-effect.css">

<script type="text/javascript" src="./click-effect.js"></script>
```

然后预览您的网页，可以查看效果。


## 部分源码说明

在 `click-effect.css` 文件中，前几行的代码（此处附加了注释）如下：

```css
:root {
    /* 主要颜色 */
    --click-effect-main-color: yellow;
    
    /* 阴影颜色 */
    --click-effect-shadow-color: gold;
    
    /* 点状图形颜色 */
    --click-effect-dot-color: white;
}
```
