// ==UserScript==
// @name        simpson-stream-avoid-adblock
// @namespace   http://userscripts.org
// @include     http://hstv.over-blog.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(window) {
	const xpathQuerry = '//table//h2//iframe/@src';
	let i = 0;
	let html = '';
  
	let xpathResult = document.evaluate(xpathQuerry, document, null, XPathResult.ANY_TYPE, null);
	let xpath = xpathResult.iterateNext();
	while (xpath) {
		console.log(xpath.textContent);
		html += '<a href ="' + xpath.textContent + '">Lecteur ' + i + '</a></br>';
		xpath = xpathResult.iterateNext();
		i++;
	}
  
	document.body.innerHTML = html;
})(window);
