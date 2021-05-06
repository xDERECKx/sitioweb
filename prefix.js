(function(){function m(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix=
{link:function(a){var b=a.href||a.getAttribute("data-href");try{if(!b||"stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(p)
{return}var d=b.replace(/[^\/]+$/,""),f=(/^[a-z]{3,10}:/.exec(d)||[""])[0],h=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(d)||[""])[0],k=/^([^?]*)\??/.exec(b)
[1],g=a.parentNode,c=new XMLHttpRequest,l;c.onreadystatechange=function(){4===c.readyState&&
l()};l=function(){var b=c.responseText;if(b&&a.parentNode&&(!c.status||400>c.status||600<c.status)){if((b=e.fix(b,!0,a))&&d)var b=b.replace
(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return/^([a-z]{3,10}:|#)/i.test(c)?b:/^\/\//.test(c)?'url("'+f+c+'")':/^\//.test(c)?'url
("'+h+c+'")':/^\?/.test(c)?'url("'+k+c+'")':'url("'+d+c+'")'}),n=d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),b=b.replace(RegExp
("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1");n=document.createElement("style");n.textContent=
"/*#
