parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=4,r=4,t=0,n="field-cell",a=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],o=document.querySelector(".game-field"),i=o.children[0].children,c=document.querySelector(".game-score"),s=document.querySelector(".button"),d=document.querySelector(".message-start"),f=document.querySelector(".message-win"),u=document.querySelector(".message-lose");function l(){for(var o=function(r){for(var t=function(e){var t=function(){i[r].children[e].classList=n},o=function(t){i[r].children[e].innerText=t};0===a[r][e]?(t(),o("")):(a[r][e]>=2048&&f.classList.remove("hidden"),t(),o(a[r][e]),i[r].children[e].classList.add("field-cell--".concat(a[r][e])))},o=0;o<e;o++)t(o)},s=0;s<r;s++)o(s);c.innerText=t}function v(){for(var t=0;t<r;t++)for(var n=0;n<e;n++)if(0===a[t][n])return!0;return!1}function h(){if(v())for(var t=!1;!t;){var n=Math.floor(Math.random()*r),o=Math.floor(Math.random()*e);0===a[n][o]&&(Math.floor(10*Math.random())<9?a[n][o]=2:a[n][o]=4,l(),t=!0)}else y()||u.classList.remove("hidden")}function m(e){return e.filter(function(e){return 0!==e})}function g(r){for(var n=m(r),a=0;a<n.length;a++)n[a]===n[a+1]&&(n[a]*=2,n[a+1]=0,t+=n[a]);for(n=m(n);n.length<e;)n.push(0);return n}function L(){for(var e=0;e<r;e++){var t=a[e];t=g(t),a[e]=t,l()}}function S(){for(var e=0;e<r;e++){var t=a[e];t.reverse(),(t=g(t)).reverse(),a[e]=t,l()}}function w(){for(var t=0;t<e;t++){var n=[a[0][t],a[1][t],a[2][t],a[3][t]];n=g(n);for(var o=0;o<r;o++)a[o][t]=n[o];l()}}function x(){for(var t=0;t<e;t++){var n=[a[0][t],a[1][t],a[2][t],a[3][t]];n.reverse(),(n=g(n)).reverse();for(var o=0;o<r;o++)a[o][t]=n[o];l()}}function y(){for(var t=1;t<r;t++)for(var n=1;n<e;n++){if(a[t-1][n-1]===a[t-1][n])return!0;if(a[n-1][t-1]===a[n][t-1])return!0}return!1}s.addEventListener("click",function(e){"Start"===e.target.innerText?(h(),h(),l(),f.classList.add("hidden"),d.hidden=!0,e.target.innerText="Reset",e.target.classList.replace("start","restart")):"Reset"===e.target.innerText&&(t=0,a=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l(),u.classList.add("hidden"),d.hidden=!1,f.classList.add("hidden"),e.target.innerText="Start",e.target.classList.replace("restart","start"))}),document.addEventListener("keyup",function(e){if("Reset"===s.innerText)switch(e.code){case"ArrowLeft":L(),h();break;case"ArrowRight":S(),h();break;case"ArrowUp":w(),h();break;case"ArrowDown":x(),h()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e1f42c73.js.map