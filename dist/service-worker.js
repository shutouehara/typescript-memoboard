if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>i(e,o),l={module:{uri:o},exports:r,require:c};t[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"b44176f637281a69e07c7e86b92e3a0a"},{url:"main.js",revision:"4e42e4c6502297e47a1fc4759945ad56"}],{})}));
