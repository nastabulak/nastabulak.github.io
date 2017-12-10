webpackJsonp([0],{329:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.page=void 0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(330),r(125);var i=n(r(331)),a=n(r(332)),s=n(r(334)),u=r(124),c=r(336),f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sources=["BBC News","Financial Times","Metro","the Economist","the Telegraph","Independent","Daily Mail"]}return o(e,[{key:"getNews",value:function(){var e=this;return this.getCheckedChannels().forEach(function(t){e.getChannelNews(t)})}},{key:"getChannelNews",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new i.default(t),e.next=4,r.getData();case 4:n=e.sent,this.renderArticleSection(n),u.logger.getMessage("info","loaded: "+t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c.notification.getMessage("Что-то пошло не так, не удалось загрузить новости."),u.logger.getMessage("warn","error during loading news from "+t);case 13:case 14:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},{key:"renderArticleSection",value:function(e){new a.default(e).addArticlesSectionToView()}},{key:"renderCheckBoxSection",value:function(){new s.default(this.sources).addSourcesSectionToView()}},{key:"getCheckedChannels",value:function(){var e=Array.from(document.forms[0].elements).filter(function(e){return e.checked}).map(function(e){return e.value});return u.logger.getMessage("info","checked channels: "+e),e}}]),e}();t.page=new f},330:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return d.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(d.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(d.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(d.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(d.arrayBuffer&&d.blob&&y(e))this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!d.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!b(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=u(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):d.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},d.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e,t){var r=(t=t||{}).body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=function(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function l(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function h(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var d={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(d.arrayBuffer)var p=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=function(e){return e&&DataView.prototype.isPrototypeOf(e)},b=ArrayBuffer.isView||function(e){return e&&p.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},d.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},c.call(f.prototype),c.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];h.redirect=function(e,t){if(-1===m.indexOf(t))throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=f,e.Response=h,e.fetch=function(e,t){return new Promise(function(r,n){var i=new f(e,t),a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:function(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;r(new h(t,e))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&d.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.channel=t,this.request=new Request("https://newsapi.org/v2/top-headlines?sources="+t+"&apiKey=ec5df01b8bcb4e0fb2e831c378846e2b")}return n(e,[{key:"getData",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.request);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.articles);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}();t.default=o},332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(333)),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t}return n(e,[{key:"prepareInnerText",value:function(){return this.data.map(function(e){return new o.default(e).createArticle()}).join("")}},{key:"createArticlesSection",value:function(){var e=document.createElement("div");return e.innerHTML=this.prepareInnerText(),e}},{key:"addArticlesSectionToView",value:function(){document.getElementById("articles").appendChild(this.createArticlesSection())}}]),e}();t.default=i},333:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(t){var r=t.author,n=t.description,o=void 0===n?"No details":n,i=t.publishedAt,a=t.title,s=t.url,u=t.urlToImage,c=t.source.name;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.author=r||c,this.description=o,this.publishedAt=i,this.sourceName=c,this.title=a,this.articleUrl=s,this.imageUrl=u}return n(e,[{key:"createArticle",value:function(){return'<div class="card bg-light mb-3">\n                <img class="card-img-top" src='+this.imageUrl+' alt="No image to show">\n                <div class="card-body">\n                    <div class="card-title">\n                        <h5 class="card-title">'+this.title+'</h5>\n                        <h6 class="card-title">'+this.author+"</h6>\n                        <a href="+this.articleUrl+">"+this.sourceName+'</a>\n                    </div>\n                    <p class="card-text">'+this.publishedAt+'</p>\n                    <p class="card-text">'+this.description+"</p>\n                 </div>\n            </div>"}}]),e}();t.default=o},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(335)),i=r(329),a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sources=t}return n(e,[{key:"createSourcesList",value:function(){return this.sources.map(function(e){return new o.default(e).createCheckBox()}).join("")}},{key:"createSourcesSection",value:function(){return"<form>"+this.createSourcesList()+" </form> "+this.createGetNewsButton()}},{key:"addSourcesSectionToView",value:function(){document.getElementById("resources").innerHTML=this.createSourcesSection(),this.addHandlersToGetNewsButton()}},{key:"createGetNewsButton",value:function(){return'<button class="btn btn-primary" id="getNews">Get Your News</button>'}},{key:"addHandlersToGetNewsButton",value:function(){var e=document.getElementById("getNews");e.addEventListener("click",function(){return document.getElementById("articles").innerHTML=""}),e.addEventListener("click",i.page.getNews.bind(i.page))}}]),e}();t.default=a},335:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.value=this.title.toLowerCase().split(" ").join("-")}return n(e,[{key:"createCheckBox",value:function(){return'<div class="form-check">\n        <label class="form-check-label">\n        <input class="form-check-input" type="checkbox" value='+this.value+">"+this.title+"\n        </label>\n        </div>"}}]),e}();t.default=o},336:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"getMessage",value:function(e){alert(e)}}]),e}();t.default=o;t.notification=new o}});