(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"62e4f2bc","chunk-3f0e0aaa":"8a1ff5cf"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3f0e0aaa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-3f0e0aaa":"f162dbd1"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("eb18"),n("aa20"),n("737b"),n("f8cd");var r=n("d8bb"),a=n("aa61"),o=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("4787")),s={},l=Object(c["a"])(s,u,i,!1,null,null,null),p=l.exports,f=n("719f");r["a"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"main",component:function(){return n.e("chunk-3f0e0aaa").then(n.bind(null,"cd56"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),b=n("a32a"),m=n("4a78"),h=(n("86ea"),n("a77d")),g=n("22e1"),v=n.n(g),w=(n("3335"),n("8255"),"production"),x="development"===w,k={name:"GiBlog Alpha"},y={color:{primary:"#8a2be2"}},O={example:"./config.example.json",file:"./config.json"},j="NOT_FOUND_CONFIG",_="CONNECT_API_ERROR",R="NOT_FOUND_ANY_ISSUES",A=(n("5ea4"),function(){var e="font-family:sans-serif;display:inline-block;padding-bottom:.5px;",t=["%c  ".concat(k.name,"  %c  ").concat(w,"  "),"".concat(e,"border-radius:3px 0 0 3px;background:").concat(y.color.primary,";color:#f7f7f7;"),"".concat(e,"border-radius:0 3px 3px 0;background:#505050;color:#9f9f9f;font-style:italic;")],n=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log",r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return r||x?(e=console[n]).bind.apply(e,[window.console].concat(t)):function(){}};return{log:n("log",!1),warn:n("warn"),err:n("error"),info:n("info")}}());function N(){return P.apply(this,arguments)}function P(){return P=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=O.file,e.prev=1,e.next=4,fetch(t);case 4:if(n=e.sent,!1!==n.ok||!["404","401"].includes(status)){e.next=7;break}throw j;case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",[null,r]);case 13:return e.prev=13,e.t0=e["catch"](1),A.err(e.t0),e.abrupt("return",[j]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),P.apply(this,arguments)}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.avatar_url,n=e.bio,r=e.blog,a=e.email,o=e.followers,u=e.following,i=e.id,c=e.name,s=e.updated_at;return{avatar:t,description:n,home:r,email:a,followers:o,following:u,id:i,name:c,updated:s}}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.title,n=e.body,r=e.comments,a=e.created_at,o=e.html_url,u=e.id,i=e.number,c=e.state,s=e.updated_at,l=e.labels;return{title:t,content:n,excerpt:(n||"").slice(0,20),comments:r,created:a,url:o,id:u,number:i,state:c,updated:s,tags:S(l)}}))}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.color,n=e.id,r=e.name,a=e.url;return{color:t,id:n,name:r,url:a}}))}var T={init:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,u,i,c,s,l,p,f,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,N();case 3:if(a=e.sent,o=Object(m["a"])(a,2),u=o[0],i=Object(m["a"])(o[1],1),c=i[0],null===u){e.next=10;break}return e.abrupt("return",[u]);case 10:return A.info("Read Config: ",c),n("updateConfig",c),s=null,e.next=15,r("getProfile");case 15:if(l=e.sent,p=Object(m["a"])(l,1),s=p[0],null===s){e.next=20;break}return e.abrupt("return",[s]);case 20:return e.next=22,r("getIssues");case 22:if(f=e.sent,d=Object(m["a"])(f,1),s=d[0],null===s){e.next=27;break}return e.abrupt("return",[s]);case 27:return e.abrupt("return",[s]);case 28:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),genApi:I,getProfile:L,getIssues:B,getMarkdown:D};function I(e){return F.apply(this,arguments)}function F(){return F=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,t.dispatch,r=n.username,a=n.password,o=n.token,u=null,i=new v.a({username:r,password:a,token:o}),e.abrupt("return",[u,i]);case 5:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return M=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,u,i,c,s,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,r("genApi");case 3:return a=e.sent,o=Object(m["a"])(a,2),u=o[1],e.next=8,u.getUser().getProfile();case 8:if(i=e.sent,c=i.status,s=i.data,l=void 0===s?[]:s,200===c){e.next=14;break}return e.abrupt("return",[_]);case 14:return p=C(l),n("updateProfile",p),e.abrupt("return",[null]);case 17:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function B(e){return U.apply(this,arguments)}function U(){return U=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,u,i,c,s,l,p,f,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,a=t.dispatch,e.next=3,a("genApi");case 3:return o=e.sent,u=Object(m["a"])(o,2),i=u[1],c=n.username,s=n.repo,l=i.getIssues(c,s),p=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.listIssues();case 2:if(t=e.sent,n=t.status,a=t.data,o=void 0===a?[]:a,200===n){e.next=8;break}return e.abrupt("return",_);case 8:if(o.length){e.next=10;break}return e.abrupt("return",R);case 10:u=E(o),r("updateArticles",u);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.listLabels();case 2:if(t=e.sent,n=t.status,a=t.data,o=void 0===a?[]:a,200===n){e.next=8;break}return e.abrupt("return",_);case 8:if(o.length){e.next=10;break}return e.abrupt("return",R);case 10:u=S(o),r("updateTags",u);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=null,e.next=13,p();case 13:if(e.t0=e.sent,e.t0){e.next=16;break}e.t0=null;case 16:return d=e.t0,e.next=19,f();case 19:if(e.t1=e.sent,e.t1){e.next=22;break}e.t1=null;case 22:return d=e.t1,e.abrupt("return",[d]);case 24:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function D(e){return q.apply(this,arguments)}function q(){return q=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,u,i,c,s,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.dispatch,r=l.length>1&&void 0!==l[1]?l[1]:"",r){e.next=4;break}return e.abrupt("return",["text is blank"]);case 4:return e.next=6,n("genApi");case 6:return a=e.sent,o=Object(m["a"])(a,2),u=o[1],e.next=11,u.getMarkdown().render({text:r});case 11:if(i=e.sent,c=i.status,s=i.data,200===c){e.next=16;break}return e.abrupt("return",[_]);case 16:return e.abrupt("return",[null,s]);case 17:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var G={updateConfig:function(e,t){var n=t.oauth_token,r=t.username,a=t.theme,o=t.repos;e.token=atob(n),e.username=r,e.repo=o[0],e.theme=a},updateProfile:function(e,t){Object.assign(e.profile,t)},updateArticles:function(e,t){e.articles=t},updateTags:function(e,t){e.tags=t},updateComments:function(e,t){e.comments=t}};r["a"].use(b["a"]);var J={repo:null,username:null,password:null,token:null,theme:null,profile:{id:null,name:null,email:null,home:null,avatar:null,description:null,followers:null,following:null,updated:null},articles:null,tags:null,article:null,comments:null,test:!0},$=new b["a"].Store({state:J,mutations:G,actions:T}),H=n("0717");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].use(o.a),$.dispatch("init"),new r["a"]({router:d,store:$,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("b9b9"),a=n.n(r);a.a},b9b9:function(e,t,n){}});
//# sourceMappingURL=app.8c1d982b.js.map