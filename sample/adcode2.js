        (function(){var b={f:"content-snap-width-1",h:"content-snap-width-2",j:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}function g(a){var c=f().concat(["guide-pinned","show-guide"]),d=c.length,e=[];a.replace(/\S+/g,function(a){for(var k=0;k<d;k++)if(a==c[k])return;e.push(a)});return e};function l(a,c,d){var e=document.getElementsByTagName("html")[0],h=g(e.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(h.push("guide-pinned"),c&&h.push("show-guide"));d&&(d=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(d-=230),h.push(1262<=d?"content-snap-width-3":1056<=d?"content-snap-width-2":"content-snap-width-1"));e.className=h.join(" ")}
var m=["yt","www","masthead","sizing","runBeforeBodyIsReady"],n=this;m[0]in n||!n.execScript||n.execScript("var "+m[0]);for(var p;m.length&&(p=m.shift());)m.length||void 0===l?n[p]?n=n[p]:n=n[p]={}:n[p]=l;})();

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);
