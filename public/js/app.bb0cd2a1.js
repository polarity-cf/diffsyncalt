(function(e){function t(t){for(var n,a,c=t[0],u=t[1],l=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({codepair:"codepair"}[e]||e)+"."+{codepair:"e87ee932"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={codepair:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({codepair:"codepair"}[e]||e)+"."+{codepair:"6ec96cae"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===n||p===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],p=l.getAttribute("data-href");if(p===n||p===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],s.parentNode.removeChild(s),r(i)},s.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=c(e);var f=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=p;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-card-text",[e._v(" DiffSyncAlt ")]),r("v-btn",{attrs:{href:"https://github.com/polarity-cf/diffsyncalt/blob/main/README.md",target:"_blank"}},[e._v(" Help ")]),r("v-btn",{attrs:{href:"https://github.com/polarity-cf/diffsyncalt",target:"_blank"}},[e._v(" Github ")]),r("v-btn",{attrs:{href:"https://github.com/google/diff-match-patch",target:"_blank"}},[e._v(" diff-match-patch ")]),r("v-btn",{attrs:{href:"https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35605.pdf",target:"_blank"}},[e._v(" Differential Synchronization ")])],1),r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},c=i,u=r("2877"),l=r("6544"),p=r.n(l),f=r("7496"),s=r("40dc"),d=r("8336"),h=r("99d9"),v=r("f6c4"),m=Object(u["a"])(c,a,o,!1,null,null,null),g=m.exports;p()(m,{VApp:f["a"],VAppBar:s["a"],VBtn:d["a"],VCardText:h["a"],VMain:v["a"]});r("d3b7"),r("3ca3"),r("ddb0");var b=r("8c4f");n["a"].use(b["a"]);var y=[{path:"/",name:"DiffSyncAlter",component:function(){return r.e("codepair").then(r.bind(null,"785f"))},props:!0,meta:{title:"DiffSyncAlter"}}],_=new b["a"]({routes:y}),w=_,k=r("f309");n["a"].use(k["a"]);var A=new k["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:w,vuetify:A,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.bb0cd2a1.js.map