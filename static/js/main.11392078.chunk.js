(this.webpackJsonpsida_watch=this.webpackJsonpsida_watch||[]).push([[0],{33:function(e,n,t){},37:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),c=t(9),r=t.n(c),a=(t(33),t(12)),s=t.p+"static/media/logo.103b5fa1.svg",l=t(27),d=t(28),u=t(18),h=t(1);var f=function(e){return Object(h.jsx)(u.a,{defaultActiveKey:"1",children:Object(h.jsxs)(u.a.Item,{eventKey:"0",children:[Object(h.jsx)(u.a.Header,{children:e.desc}),Object(h.jsx)(u.a.Body,{children:e.stato})]})})};t(37),t(38);var g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(o.useEffect)((function(){fetch("https://check.patente.it/vpnstatus?json").then((function(e){return e.json()})).then((function(e){return i(e._container[0]._container)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(l.a.Brand,{href:"#home",children:[Object(h.jsx)("img",{alt:"",src:s,width:"30",height:"30",className:"d-inline-block align-top"})," ","Sida Watch"]})})}),t.map((function(e,n){return Object(h.jsx)(f,{desc:e.descrizione,stato:e.stato})}))]})},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"));!function(e){if("serviceWorker"in navigator){if(new URL("/formazione_watch",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/formazione_watch","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(n,e)}))}}({onSuccess:function(e){console.log(e),e.pushManager.getSubscription().then((function(e){null!==e?console.log("User IS subscribed."):console.log("User is NOT subscribed.")}))}}),j()}},[[39,1,2]]]);
//# sourceMappingURL=main.11392078.chunk.js.map