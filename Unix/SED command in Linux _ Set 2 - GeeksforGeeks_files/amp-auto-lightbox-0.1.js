;
(self.AMP=self.AMP||[]).push({m:0,v:"2402231941000",n:"amp-auto-lightbox",ev:"0.1",l:!0,f:function(n,r){!function(){var r="load-end";function t(n){return n?Array.prototype.slice.call(n):[]}Array.isArray;var u=Object.prototype;function o(n,r,t,u,o,i,e,a,c,f,l){return n}function i(n){return(n.ownerDocument||n).defaultView}function e(n,r){return n.closest?n.closest(r):function(n,r,t){var u;for(u=n;u&&void 0!==u;u=u.parentElement)if(r(u))return u;return null}(n,(function(n){return function(n,r){var t=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return!!t&&t.call(n,r)}(n,r)}))}u.hasOwnProperty,u.toString;var a,c=!0,f=!0;function l(n){return n.parent&&n.parent!=n}var v,s,p=function(){var n=this;this.promise=new Promise((function(r,t){n.resolve=r,n.reject=t}))};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function d(n,r){throw new Error("failed to call initLogConstructor")}function h(n){return d()}function g(){return m.dev||(m.dev=d())}function b(n,r,t,u,o,i,e,a,c,f,l){return n}function w(n,r){return x(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),r)}function y(n,r){return x(M(P(n)),r)}function P(n){return n.nodeType?(r=i(n),w(r,"ampdoc")).getAmpDoc(n):n;var r}function M(n){var r=P(n);return r.isSingleDoc()?r.win:r}function x(n,r){b(A(n,r));var t=function(n){var r=n.__AMP_SERVICES;return r||(r=n.__AMP_SERVICES={}),r}(n)[r];return t.obj||(b(t.ctor),b(t.context),t.obj=new t.ctor(t.context),b(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}function A(n,r){var t=n.__AMP_SERVICES&&n.__AMP_SERVICES[r];return!(!t||!t.ctor)}var I,D=function(n){return y(n,"mutator")};function O(n,r,t,u){var o=t,i=function(n,r,t,u){var o=n,i=t,e=function(n){try{return i(n)}catch(n){var r,t;throw null===(r=(t=self).__AMP_REPORT_ERROR)||void 0===r||r.call(t,n),n}},a=function(){if(void 0!==I)return I;I=!1;try{var n={get capture(){return I=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return I}(),c=!(null==u||!u.capture);return o.addEventListener(r,e,a?u:c),function(){null==o||o.removeEventListener(r,e,a?u:c),i=null,o=null,e=null}}(n,r,(function(n){try{o(n)}finally{o=null,i()}}),u);return i}function E(n){return"AUDIO"===n.tagName||"VIDEO"===n.tagName}/nochunking=1/.test(self.location.hash),a||(a=Promise.resolve(void 0));var B="amp-auto-lightbox",S="amp-lightbox-gallery",G="lightbox",W="i-amphtml-auto-lightbox-visited",k={"Article":!0,"NewsArticle":!0,"BlogPosting":!0,"LiveBlogPosting":!0,"DiscussionForumPosting":!0},C=["[placeholder]","[data-amp-auto-lightbox-disable]","amp-selector [option]","[subscriptions-action]"].join(","),F=["a[href]","amp-script","amp-story","button","amp-lightbox","amp-carousel"].join(","),N=function(){},j=function(){function n(){}return n.meetsAll=function(r,t,u,o){return n.meetsSizingCriteria(r,t,u,o)&&n.meetsTreeShapeCriteria(r,t)},n.meetsTreeShapeCriteria=function(n,r){return!("IMG"===n.tagName&&e(n,"amp-img")||e(n,"".concat(F,",").concat(C))||function(n){return r="action",A(t=M(P(n)),r)?x(t,r):null;var r,t}(r||n).hasResolvableAction(n,"tap"))},n.meetsSizingCriteria=function(n,r,t,u){var o,i=function(n){var r=n.naturalHeight,t=n.naturalWidth,u=t/r,o=function(n){var r,t=-1,u=n.getAttribute("srcset");if(u)for(;r=H.exec(u);){var o=parseInt(r[1],10);o>t&&(t=o)}return t}(n);return o>t?{naturalWidth:o,naturalHeight:o/u}:{naturalWidth:t,naturalHeight:r}}(n.querySelector("img")||n),e=i.naturalHeight,a=i.naturalWidth,c=(o=r,y(o,"viewport")).getSize(),f=c.height;return function(n,r,t,u,o,i){var e=n*r;return t*u/e>=1.2||t>o||u>i||e/(o*i)>=.25}(t,u,a,e,c.width,f)},n}(),H=/\s+([0-9]+)w(,|[\S\s]*$)/g;function L(n){return D(n).mutateElement(n,(function(){n.setAttribute(W,"")}))}var R=function(){function n(){}return n.getCandidates=function(n){var r=["amp-img","img"].map((function(n){return"".concat(n,":not([").concat(G,"]):not([").concat(W,"])")})).join(","),u=t(n.querySelectorAll(r));return u.forEach(L),u},n}(),T=function(){function n(){}return n.getOgType=function(n){var r=n.getRootNode().querySelector('meta[property="og:type"]');if(r)return r.getAttribute("content")},n.hasValidOgType=function(r){return"article"==n.getOgType(r)},n.getAllLdJsonTypes=function(n){return t(n.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map((function(n){return(function(n,r){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null}}(n.textContent)||{})["@type"]})).filter(Boolean)},n.hasValidLdJsonType=function(r){return n.getAllLdJsonTypes(r).some((function(n){return k[n]}))},n}(),U=0;function Y(n,t){return t.map((function(t){return(u=t,"IMG"===u.tagName?function(n){var r,t;if(function(n){return!!(n.complete||"complete"==n.readyState||E(n)&&n.readyState>0||n.document&&"complete"==n.document.readyState)}(n))return Promise.resolve(n);var u=E(n);return u&&n.__AMP_MEDIA_LOAD_FAILURE_SRC===n.currentSrc?Promise.reject(n):new Promise((function(o,i){if(r=u?O(n,"loadedmetadata",o,{capture:!0}):O(n,"load",o),n.tagName){var e=n;if(u&&!n.hasAttribute("src")&&!(e=function(n,r){for(var t=n.lastElementChild;t;t=t.previousElementSibling)if(r(t))return t;return null}(n,(function(n){return"SOURCE"===n.tagName}))))return i(new Error("Media has no source."));t=O(e,"error",i)}})).then((function(){return t&&t(),n}),(function(){r&&r(),function(n){E(n)&&(n.__AMP_MEDIA_LOAD_FAILURE_SRC=n.currentSrc||!0);var r=n;throw r&&r.src&&(r=r.src),(m.user||(m.user=h()),void m.user.win?m.userForEmbed||(m.userForEmbed=h()):m.user).createError("Failed to load:",r)}(n)}))}(u):function(n){if(o(function(n){var r=n.tagName;return r.startsWith("AMP-")&&!("AMP-STICKY-AD-TOP-PADDING"==r||"AMP-BODY"==r)}(n)),n.createdCallback)return Promise.resolve(n);if(!n.__AMP_UPG_PRM){var r=new p;n.__AMP_UPG_PRM=r.promise,n.__AMP_UPG_RES=r.resolve}var t=n.__AMP_UPG_PRM;return o(t),t}(u).then((function(n){return n.signals().whenSignal(r)}))).then((function(){return function(n){var r,t=null===(r=v)||void 0===r?void 0:r.get(n);if(!t){var u=function(n){v||(v=new WeakMap,s=new WeakMap),o(s);var r=s.get(n);return r||(r=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=t.needsRootBounds,o=t.rootMargin,i=t.threshold,e=l(r)&&(u||o)?r.document:void 0;return new r.IntersectionObserver(n,{threshold:i,root:e,rootMargin:o})}((function(n){for(var t=new Set,u=n.length-1;u>=0;u--){var i,e=n[u].target;t.has(e)||(t.add(e),o(r),r.unobserve(e),o(v),null===(i=v.get(e))||void 0===i||i.resolve(n[u]),v.delete(e))}}),n,{needsRootBounds:!1}),s.set(n,r)),r}(i(n));o(v),u.observe(n),t=new p,v.set(n,t)}return t.promise}(t).then((function(u){var i=u.boundingClientRect;if("IMG"===t.tagName||t.signals().get(r)){var e=i.height,a=i.width;if(j.meetsAll(t,n,a,e))return g().info(B,"apply",t),function(n,r){return D(n).mutateElement(r,(function(){r.setAttribute(G,"i-amphtml-auto-lightbox-".concat(U++))})).then((function(){return(t=n.win,w(t,"extensions")).installExtensionForDoc(n,S),function(n,r,t,u){o(n.ownerDocument);var i=new MessageEvent("amp-auto-lightbox:newly-set",{data:{},bubbles:c,cancelable:f});n.dispatchEvent(i)}(r),r;var t}))}(n,t)}}))}),N);var u}))}function J(n,r){if(function(n){return!function(n){var r='script[custom-element="'.concat(S,'"]'),t="[".concat(G,"]:not([").concat(W,"])"),u=function(r){return!!n.getRootNode().querySelector(r)};return u(r)&&u(t)}(n)&&(T.hasValidOgType(n)||T.hasValidLdJsonType(n))}(n)){var t=r||n.win.document;return Y(n,R.getCandidates(t))}g().info(B,"disabled")}var K=n.ampdoc;K.whenReady().then((function(){K.getRootNode().addEventListener("amp:dom-update",(function(n){var r=n.target;J(K,r)})),J(K)}))}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-auto-lightbox-0.1.js.map