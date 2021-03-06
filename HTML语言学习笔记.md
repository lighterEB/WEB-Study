# HTML语言学习笔记

## 第一天总结

### 1.熟悉HTML文件结构，并练习基本标签使用。

```html
<!DOCTYPE HTML>
<html>
	<head>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta name="keywords" content="..." />
        <meta name="description" content="..." />
        <link rel="shortcut icon" href="图标路径+文件名" type="image/x-icon" />
        <title>...</title>
        <link rel="styleesheet" href="外部样式文件名" />
        <style type="text/css">
            样式设置...
        </style>
    </head>
    <body>
        网页主体内容
        <p>
            段落
        </p>
    </body>
    <script language="javascript" type="text/javascript">
    	脚本代码
    </script>
</html>
```

### 2.熟悉W3C规范，熟悉语义化标签，整理每个标签对应的语义环境。

```
W3C标准由结构（HTML）、表现（CSS）和行为（JavaScript）三部分组成。
W3C常见规范有：
	1.定义语言编码
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		或
		<meta charset="utf-8" />
	2.JavaScript定义
		<script language="javascript" type="text/javascript">
			脚本代码
		</script>
	3.CSS定义
		<style type="text/css">
			样式设置
		</style>
		为了保证各浏览器的兼容性，在写CSS时请带上计量单位。
	4.不要在注释内容中使用“--”
	5.所有标签和属性的名称必须用小写。
	6.所有的属性值必须用双引号引起来
	7.如果文档中要输出'>','<',和'&'等，请使用实体转义符实现
	8.要给所有的属性赋一个值，如果不赋值，默认它的属性就是属性名本身
	9.所有的标签都必须要有一个相应的结束标记（标签必须要闭合）
		<p>.....</p>
		<hr />
		<br />
	10.所有的标签必须合理嵌套，不能出现嵌套交叉的情况。
	11.图片要添加有意义的alt属性。
	12.在form表单中增加label，以增加用户体验度
```

## 第二天总结

### 1.HTML 元素

<table class="reference" style="font-size:110%">
<tbody><tr>
<th width="34%">开始标签 *</th>
<th width="34%">元素内容</th>
<th width="34%">结束标签 *</th>
</tr>
<tr>
<td>&lt;p&gt;</td>
<td>这是一个段落</td>
<td>&lt;/p&gt;</td>
</tr>
<tr>
<td>&lt;a href="default.htm"&gt;</td>
<td>这是一个链接</td>
<td>&lt;/a&gt;</td>
</tr>
<tr>
<td>&lt;br&gt;</td>
<td>换行</td>
<td>&nbsp;</td>
</tr>
</tbody></table>

*****开始标签常被称为**起始标签（opening tag）**，结束标签常称为**闭合标签（closing tag）**

### 2.HTML 元素语法

- HTML 元素以**开始标签**起始
- HTML 元素以**结束标签**终止
- **元素的内容**是开始标签与结束标签之间的内容
- 某些 HTML 元素具有**空内容（empty content）**
- 空元素**在开始标签中进行关闭**（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有**属性**

### 3.嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（HTML 元素可以包含其他 HTML 元素）。

HTML 文档由相互嵌套的 HTML 元素构成。

**文档实例**

```html
<!DOCTYPE html>
<html>
    <body>
        <p>这是一个段落</p>
    </body>
</html>
```

以上实例包含了三个 HTML 元素。

### 注意：使用小写标签

HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。

菜鸟教程使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中**推荐**使用小写，而在未来 (X)HTML 版本中**强制**使用小写。



## 第三天总结

### 1.CSS（层叠样式表）基本语法

```
选择器{
	属性：属性值；
}
```

### 2.CSS引用方式：行间样式、内部样式、外部样式、导入外部样式。

​	行间样式：直接在标签上书写样式。

​	内部样式：在文件的内部书写格式	

```html
<style>
    样式内容
</style>
```

​	外部样式：

```
1.创建CSS文件。
2.link标签引入CSS文件。
```

​	导入外部样式：

```
1.创建CSS文件。
2.在style标签中用import导入这个样式文件
```

以上四种CSS引用方式区别：

​		行间样式只作用于当前标签；而内部样式作用于当前文件；外部样式可以被多个HTML文件引用。外部样式引入link和import区别：

```
1.link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；import属于CSS范畴，只能加载CSS。
2.link引用CSS时，在页面载入时同时加载；@import需要在网页页面完全加载后加载。
3.link无兼容问题（属于XHTML）;@import是在CSS2.1提出，低版本浏览器不支持。
4.link支持使用Javascript控制DOM去改变样式；@import不支持。
```

### 3.CSS选择器

```
1. *：匹配HTML中所有元素（性能差，实际运用中不建议使用）
2.标签选择器：用来匹配标签
3.类选择器：用来选择class命名的标签
4.ID选择器：用来选择id命名的标签
5.派出选择器：根据上下文确定要选择的标签
6.伪类选择器
```

### 4.选择器分组

让多个选择器（元素）具有相同的样式，一般用于设置公共样式。

### 5.选择器的继承

子元素可以继承父元素的样式，反之🙅‍♂️🙅

### 6.样式权重

```
!important(10000)>内联样式(1000)>id选择器(100)>类、伪类选择器(10)>标签选择器(1)
```
### 7.CSS字体
```
1.font-size:字体大小
2.font-family:字体
3.font-style:文字样式（normal/italic/oblique）
4.font-weight:文字加粗(normal/bold/bolder/lighter/100-900)
5.line-height:行高
6.color:文字的颜色
7.text-decoration:文字修饰
8.text-align:文本对齐方式
9.text-transform:字母大小写
10.text-indent:文本缩进

Tip:
		font复合属性
		font:font-style font-variant font-weight font-size/line-height font-family;
		注意：
			1.属性值的位置顺序
			2.除了font-size和font-family之外，其他任何一个属性值都可以省略
```



### 8.CSS背景

```
1.background-color：背景色（transparent/color）
2.background-image：背景图（none/url）
3.background-repeat：背景图像铺排方式（repeat/no-repeat/repeat-x/repeat-y）
4.background-position：设置对象的背景图像位置（{x-number | top | center | bottom}{y-number | left | center | right}）
5.background-attachment：背景图像滚动位置（scroll/fixed）
6.background：设置背景图像的复合写法
```



### 9.CSS伪类选择器

​	伪类：专门用来表示元素的一种特殊状态。

​	常用伪类选择器：

```
1.a标签的伪类（:link/:visited/:hover/:active）
2.:focus 获得焦点
3.:first-child/:last-child/:nth-child(number)
```



### 10.属性选择器

​	[属性名]：包含有指定属性名的元素

​	[属性名=值]：属性名的值为指定值的元素

​	[属性名~=值]：属性名的值包含指定值的元素

​	[属性名^=值]：属性名的值以指定值的开头的元素

​	[属性名$=值]：属性名的值以指定值的结尾的元素

### 11.关系选择器

```
1.空格：后代选择器
2.>:只选择儿子元素
3.+:兄弟选择
```



## 第四天总结

### 1.CSS浮动

<table>
  <tr align="center">
    <th>值</th>
    <th>描述</th>
  </tr>
  <tr align="center">
    <td>left</td>
    <td>元素向左浮动。</td>
  </tr>
  <tr align="center">
    <td>right</td>
  	<td>元素向右浮动。</td>
  </tr>
  <tr align="center">
    <td>none</td>
    <td>默认值。元素不浮动，并会显示其在文本中出现的位置。</td>
  </tr>
  <tr align="center">
    <td>inherit</td>
    <td>规定应该从父元素继承float属性的值</td>
  </tr>
</table>

​	实现

```
<!--HTML-->
<div class="left"></div>
<div><>
```



#### 1.1什么是浮动？

​	浮动就是让块级标签不独占一行。目的（使用场景）：把块级标签元素可以排在一行上。



#### 1.2 浮动原理

​	就是让元素脱离文档流，不占用标准流。

#### 1.3 float的属性值

```
left:左浮动
right：右浮动
none：默认值，不浮动。
```

浮动后，后面的元素不管是块级还是行级元素，不会显示在下一行。

#### 1.4 清除浮动

目的：让后面的元素自动掉到下一行。

方法：

​	1.添加空标签，并设置样式：clear:both;

​		clear:left;	清除左浮动

​		clear:right;	清除右浮动

​		clear:both;	清除左右浮动

​		clear:none;	左右浮动都不清除

​	2.在要清除浮动的父级添加样式：overflow:hidden;(超出部分隐藏，也可用来清除浮动)

​	3.在要清除浮动的父级添加伪元素，并设定样式：

```
父元素：after{
	content:"";
    display: block;
    clear: both;
}
```

### 2.盒子模型

每个元素都是一个盒子，一个盒子由margin（外边距），border（边框线），padding（内边距）和content（内容）组成。

区别外边距和内边距是以边框参照。

系统默认外边距为8px。

1）外边距（margin）：指元素边框线之外的距离。

​		margin-left：左边距

​		margin-right：右边距

​		margin-top：上边距

​		margin-bottom：下边距

​		margin：可用来设置任意一个边的边距，可以带1至4个参数。

​				1个（apx）: 表示上下左右边距都有这样的外边距apx

​				2个（apx bpx）：表示上下外边距为apx，左右外边距为bpx

​				3个（apx bpx cpx）： 表示上外边距为apx，下外边距为cpx，左右外边距为bpx

​				4个（apx bpx cpx dpx）：表示上为apx，右为bpx，下为cpx，左为dpx

2）内边距（padding）：指元素的文本内容与边框之间的距离，用法与外边距完全一致。



### 3.display属性

用来设置元素的显示方式（none，block，inline，inline-block）

### 4.table样式

​	table一般不用来布局，主要用来格式化数据。

​	属性：

​			width：

​			height：

​			border-collapse : collapse; 单线边框

### 5.无序列表

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。

无序列表使用 <ul> 标签

```
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```

### 6.有序列表

有序列表也是一列项目，列表项目使用数字进行标记。 有序列表始于 <ol> 标签。每个列表项始于 <li> 标签。

列表项使用数字来标记。

```
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```

