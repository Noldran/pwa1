(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,o){},13:function(e,n,o){},14:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),a=o(2),i=o.n(a);o(12),o(13);var c=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"THIS IS A PWA APP"),r.a.createElement("a",{className:"App-link",href:"https://noldran.github.io/nopwa",target:"_blank",rel:"noopener noreferrer"},"Link to another App on same domain")))},s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c,null))),function(e){if("serviceWorker"in navigator){if(new URL("/pwa1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa1","/service-worker.js");s?(function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):l(n,e)})}}()},3:function(e,n,o){e.exports=o(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.caa9c217.chunk.js.map