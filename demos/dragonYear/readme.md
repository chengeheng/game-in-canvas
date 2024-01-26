# 相关知识点

## stroke-dasharray

- 为一个参数时，表示虚线长度和每段虚线之间的间距相同
- 为两个参数时，第一个表示实线长度，第二个表示虚线长度

## stroke-dashoffset

相对于起始点的偏移

## blend-mode(css)

blend-mode 是 css 的一种类型值，用来描述当元素重叠时，颜色应该如何展示

1. 变暗：multiply，darken，color-burn

2. 变亮：screen，lighten，color-dodge

3. 调整对比度：overlay，hard-light，soft-light

4. 反差：difference，exclusion

5. 颜色组成：hue，saturation，color，luminosity

### background-blend-mode

通过 background-blend-mode，我们可以将背景图片混合到一起，也可以将背景图片与背景颜色混合。

### mix-blend-mode

mix-blend-mode 可以设置元素的内容如何和父元素以及元素背景混合。

## isolation (css)

isolation 属性定义元素是否必须创建新的堆叠内容。

默认情况下，mix-blend-mode 会混合 z 轴所有层叠在下面的元素，要是我们不希望某个层叠的元素参与混合怎么办呢？就是使用 isolation:isolate。
