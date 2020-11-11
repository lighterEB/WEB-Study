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

