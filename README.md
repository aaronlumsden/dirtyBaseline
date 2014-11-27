dirtyBaseline
=============

A Javascript plugin to help create beautiful baseline typography.

[View Demo](http://codepen.io/aaronlumsden/full/RNPqwa)

![dirtyBaseline.js](http://i59.tinypic.com/5v0g2v.gif)

Setting a baseline grid for online typography has always been a problem due to the way that CSS handles text. dirtyBaseline steps in to solve this problem by offering a helper that allows you to create better typography for the web.

dirtyBaseline is the perfect starting point for blogs or online magazine's where the online reading experience is integral to the user experience.

## How to use dirtyBaseline:

### Include the Relevant Files

Simply include the following in your html file before the closing body tag.

```js
<script type="text/javascript" src="dirtyBaseline.js"></script>

<script type="text/javascript">
dirtyBaseline();
</script>
```

### dirtyBaseline Options

| Option        | Required           | Default |
| ------------- |:------------------:| --------:
| Height	    | No		 		 | 	12px   |
| Color      	| No      	 		 |  #0ff   |

### Example
```js
\\ Creates a new baseline grid with 24px height that is black.

new dirtyBaseline(24,'#000');
```

### Keyboard Options

  - **shift + up arrow** - Increase the size of the baseline (in pixels)
  - **shift + down arrow** - Decrease the size of the baseline (in pixels)
  - **shift + t** - Toggles the baseline grid on or off

## Browser Support

 - Chrome
 - Safari
 - Firefox
 - ie10+
