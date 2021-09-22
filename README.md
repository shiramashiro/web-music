# 开发说明

小组：404 not found
成员：郑人滏、刘昱辰、徐硕阳、李和坤、王嘉睿
代码：郑人滏、刘昱辰
UI 设计：刘昱辰、李和坤、徐硕阳
JS、HTML、CSS：郑人滏、刘昱辰
资源：王嘉睿

## 分支说明

main 为主分支，dev 分支开发完成之后合并到 main 分支。

github：https://github.com/shiramashiro/notfound404-music-app
gitee: https://gitee.com/shiramashiro/notfound404-music-app

# 分工说明

程序员在写 js 代码时，需要在每个变量、函数前添加一段注释。注释内容包含作用、描述、作者。

写 css 样式时，需要在每一个样式前添加一段注释，注释内容包含作者、描述。

写 html 时，需要为每一段节点添加一段注释，主要用于描述这一段节点内是包含什么内容。

```js
/**
 *  主要用于...
 *
 *  @description 描述
 *  @author 程序员a
 */
function example() {
  // ...
}
```

```css
/*
描述：改变xx节点的字体大小、设置为弹性布局。
作者：程序员a
*/
.example {
  font-size: 10px;
  display: flex;
}
```

```html
<!-- 顶部栏 -->
<div class="top-bar">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

# 目录结构

css 文件、js 文件、html 文件都存于 src 文件夹。

1. index.html 文件是主页。
2. common.css 文件是公共样式。
3. common.js 文件是公共 js 代码。

audio 存放音频、img 存放图片、video 存放视频，static 文件夹是它们的父文件夹。

1. img 下的 common 存放公共图片，icon 存放图标。
