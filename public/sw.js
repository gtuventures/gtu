if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>a(e,i),r={module:{uri:i},exports:t,require:f};s[i]=Promise.all(c.map((e=>r[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-f3bada0b4e8a974b.js",revision:"f3bada0b4e8a974b"},{url:"/_next/static/chunks/1bfc9850-c16bf92f4f0de64c.js",revision:"c16bf92f4f0de64c"},{url:"/_next/static/chunks/460-b67b65bf1e21050f.js",revision:"b67b65bf1e21050f"},{url:"/_next/static/chunks/664-0356555cfd50fb3d.js",revision:"0356555cfd50fb3d"},{url:"/_next/static/chunks/719-d66b1d05a43cd44b.js",revision:"d66b1d05a43cd44b"},{url:"/_next/static/chunks/7779ef99-b3ec3637b1d5fbb1.js",revision:"b3ec3637b1d5fbb1"},{url:"/_next/static/chunks/d7eeaac4-07bf1be696a6f34e.js",revision:"07bf1be696a6f34e"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-b1d090fd959ac9c5.js",revision:"b1d090fd959ac9c5"},{url:"/_next/static/chunks/pages/404-6971ff4d0460eca4.js",revision:"6971ff4d0460eca4"},{url:"/_next/static/chunks/pages/_app-0648b68497c824ff.js",revision:"0648b68497c824ff"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/aboutus-a1e2ef96c67f0ba6.js",revision:"a1e2ef96c67f0ba6"},{url:"/_next/static/chunks/pages/addimage-ec0df4908b17be4d.js",revision:"ec0df4908b17be4d"},{url:"/_next/static/chunks/pages/checkmail-af53e46bdbf4073c.js",revision:"af53e46bdbf4073c"},{url:"/_next/static/chunks/pages/contactus-fcee1de8d7f6443a.js",revision:"fcee1de8d7f6443a"},{url:"/_next/static/chunks/pages/deleteimg-796dbabf12827b13.js",revision:"796dbabf12827b13"},{url:"/_next/static/chunks/pages/foreign-f8957b15a8fad748.js",revision:"f8957b15a8fad748"},{url:"/_next/static/chunks/pages/greymarket-cf30f06a3ae054f3.js",revision:"cf30f06a3ae054f3"},{url:"/_next/static/chunks/pages/index-ff6459bf2a22eafb.js",revision:"ff6459bf2a22eafb"},{url:"/_next/static/chunks/pages/indices-4ebc5465677c81b4.js",revision:"4ebc5465677c81b4"},{url:"/_next/static/chunks/pages/login-919060b5107ed46e.js",revision:"919060b5107ed46e"},{url:"/_next/static/chunks/pages/magicLink-fb365ee9af099fe0.js",revision:"fb365ee9af099fe0"},{url:"/_next/static/chunks/pages/otherservices-247d1ad404cf3ca7.js",revision:"247d1ad404cf3ca7"},{url:"/_next/static/chunks/pages/privacypolicy-8fd6c6af6eaf661a.js",revision:"8fd6c6af6eaf661a"},{url:"/_next/static/chunks/pages/signout-b435986c6ec41395.js",revision:"b435986c6ec41395"},{url:"/_next/static/chunks/pages/signup-b92980480585d00c.js",revision:"b92980480585d00c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-975f6a13f6da10a1.js",revision:"975f6a13f6da10a1"},{url:"/_next/static/css/412630b3bea823eb.css",revision:"412630b3bea823eb"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/yNzzBcS6rH3vrtL0BRA8a/_buildManifest.js",revision:"11ad3dedbe44765ec51fa7b3c1a707b4"},{url:"/_next/static/yNzzBcS6rH3vrtL0BRA8a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/consultancy.webp",revision:"c51951030272c9ee5207663297603d50"},{url:"/favicon.ico",revision:"5fb674117cc62494f8f271597d08466e"},{url:"/icon-384x384.png",revision:"4171bcfc743f86720f278dd4fe5443ea"},{url:"/icon512_maskable.png",revision:"f4f139d4e53dd443b19d29ca13e00515"},{url:"/manifest.json",revision:"96f8683fd6de182fdd0be3d0f5d9f121"},{url:"/ramyantra.png",revision:"9d1bc33d6e23265a9ccb7662db00c8c5"},{url:"/x0jWYq6aSku1T9dV2CFF7w.webp",revision:"c7cc6cf6ae6da4ca70ba82106f233ca6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));