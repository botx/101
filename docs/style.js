// override the style of the search plugin
// should just make a PR here: https://github.com/docsifyjs/docsify/blob/develop/src/plugins/search/component.js

setTimeout(() => {

	var css = `
		.search input:focus {
			box-shadow: none;
		}
		.search .input-wrap:focus-within {
			box-shadow: 0 0 5px var(--theme-color, #42b983);
		}
		`,
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	head.append(style);

	style.type = 'text/css';
	if (style.styleSheet){
		// This is required for IE8 and below.
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

}, 1000)