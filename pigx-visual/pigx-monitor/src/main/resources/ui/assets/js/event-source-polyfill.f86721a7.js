(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["event-source-polyfill"],{5075:function(t,e,n){var o,r,i;
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
(function(n){"use strict";var s=n.setTimeout,a=n.clearTimeout,d=n.XMLHttpRequest,c=n.XDomainRequest,u=n.EventSource,h=n.document,p=n.Promise,f=n.fetch,v=n.Response,l=n.TextDecoder,y=n.TextEncoder,g=n.AbortController;if(void 0==Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),void 0!=p&&void 0==p.prototype["finally"]&&(p.prototype["finally"]=function(t){return this.then(function(e){return p.resolve(t()).then(function(){return e})},function(e){return p.resolve(t()).then(function(){throw e})})}),void 0!=f){var w=f;f=function(t,e){return p.resolve(w(t,e))}}if(void 0==g){var T=f;f=function(t,e){var n=e.signal;return T(t,{headers:e.headers,credentials:e.credentials,cache:e.cache}).then(function(t){var e=t.body.getReader();return n._reader=e,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return e}}}})},g=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function C(){this.bitsNeeded=0,this.codePoint=0}C.prototype.decode=function(t){function e(t,e,n){if(1===n)return t>=128>>e&&t<<e<=2047;if(2===n)return t>=2048>>e&&t<<e<=55295||t>=57344>>e&&t<<e<=65535;if(3===n)return t>=65536>>e&&t<<e<=1114111;throw new Error}function n(t,e){if(6===t)return e>>6>15?3:e>31?2:1;if(12===t)return e>15?3:2;if(18===t)return 3;throw new Error}for(var o=65533,r="",i=this.bitsNeeded,s=this.codePoint,a=0;a<t.length;a+=1){var d=t[a];0!==i&&(d<128||d>191||!e(s<<6|63&d,i-6,n(i,s)))&&(i=0,s=o,r+=String.fromCharCode(s)),0===i?(d>=0&&d<=127?(i=0,s=d):d>=192&&d<=223?(i=6,s=31&d):d>=224&&d<=239?(i=12,s=15&d):d>=240&&d<=247?(i=18,s=7&d):(i=0,s=o),0===i||e(s,i,n(i,s))||(i=0,s=o)):(i-=6,s=s<<6|63&d),0===i&&(s<=65535?r+=String.fromCharCode(s):(r+=String.fromCharCode(55296+(s-65535-1>>10)),r+=String.fromCharCode(56320+(s-65535-1&1023))))}return this.bitsNeeded=i,this.codePoint=s,r};var b=function(){try{return"test"===(new l).decode((new y).encode("test"),{stream:!0})}catch(t){console.log(t)}return!1};void 0!=l&&void 0!=y&&b()||(l=C);var m=function(){};function _(t){this.withCredentials=!1,this.responseType="",this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=m,this.onreadystatechange=m,this._contentType="",this._xhr=t,this._sendTimeout=0,this._abort=m}function S(t){return t.replace(/[A-Z]/g,function(t){return String.fromCharCode(t.charCodeAt(0)+32)})}function x(t){for(var e=Object.create(null),n=t.split("\r\n"),o=0;o<n.length;o+=1){var r=n[o],i=r.split(": "),s=i.shift(),a=i.join(": ");e[S(s)]=a}this._map=e}function E(){}function A(t){this._headers=t}function O(){}function R(){this._listeners=Object.create(null)}function N(t){s(function(){throw t},0)}function H(t){this.type=t,this.target=void 0}function j(t,e){H.call(this,t),this.data=e.data,this.lastEventId=e.lastEventId}function P(t,e){H.call(this,t),this.status=e.status,this.statusText=e.statusText,this.headers=e.headers}_.prototype.open=function(t,e){this._abort(!0);var n=this,o=this._xhr,r=1,i=0;this._abort=function(t){0!==n._sendTimeout&&(a(n._sendTimeout),n._sendTimeout=0),1!==r&&2!==r&&3!==r||(r=4,o.onload=m,o.onerror=m,o.onabort=m,o.onprogress=m,o.onreadystatechange=m,o.abort(),0!==i&&(a(i),i=0),t||(n.readyState=4,n.onreadystatechange())),r=0};var c=function(){if(1===r){var t=0,e="",i=void 0;if("contentType"in o)t=200,e="OK",i=o.contentType;else try{t=o.status,e=o.statusText,i=o.getResponseHeader("Content-Type")}catch(s){t=0,e="",i=void 0}0!==t&&(r=2,n.readyState=2,n.status=t,n.statusText=e,n._contentType=i,n.onreadystatechange())}},u=function(){if(c(),2===r||3===r){r=3;var t="";try{t=o.responseText}catch(e){}n.readyState=3,n.responseText=t,n.onprogress()}},h=function(){u(),1!==r&&2!==r&&3!==r||(r=4,0!==i&&(a(i),i=0),n.readyState=4,n.onreadystatechange())},p=function(){void 0!=o&&(4===o.readyState?h():3===o.readyState?u():2===o.readyState&&c())},f=function(){i=s(function(){f()},500),3===o.readyState&&u()};o.onload=h,o.onerror=h,o.onabort=h,"sendAsBinary"in d.prototype||"mozAnon"in d.prototype||(o.onprogress=u),o.onreadystatechange=p,"contentType"in o&&(e+=(-1===e.indexOf("?")?"?":"&")+"padding=true"),o.open(t,e,!0),"readyState"in o&&(i=s(function(){f()},0))},_.prototype.abort=function(){this._abort(!1)},_.prototype.getResponseHeader=function(t){return this._contentType},_.prototype.setRequestHeader=function(t,e){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(t,e)},_.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders?this._xhr.getAllResponseHeaders():""},_.prototype.send=function(){if("ontimeout"in d.prototype||void 0==h||void 0==h.readyState||"complete"===h.readyState){var t=this._xhr;t.withCredentials=this.withCredentials,t.responseType=this.responseType;try{t.send(void 0)}catch(n){throw n}}else{var e=this;e._sendTimeout=s(function(){e._sendTimeout=0,e.send()},4)}},x.prototype.get=function(t){return this._map[S(t)]},E.prototype.open=function(t,e,n,o,r,i,s){t.open("GET",r);var a=0;for(var d in t.onprogress=function(){var e=t.responseText,o=e.slice(a);a+=o.length,n(o)},t.onreadystatechange=function(){if(2===t.readyState){var n=t.status,r=t.statusText,i=t.getResponseHeader("Content-Type"),s=t.getAllResponseHeaders();e(n,r,i,new x(s))}else 4===t.readyState&&o()},t.withCredentials=i,t.responseType="text",s)Object.prototype.hasOwnProperty.call(s,d)&&t.setRequestHeader(d,s[d]);return t.send(),t},A.prototype.get=function(t){return this._headers.get(t)},O.prototype.open=function(t,e,n,o,r,i,s){var a=new g,d=a.signal,c=new l;return f(r,{headers:s,credentials:i?"include":"same-origin",signal:d,cache:"no-store"}).then(function(t){var o=t.body.getReader();return e(t.status,t.statusText,t.headers.get("Content-Type"),new A(t.headers)),new p(function(t,e){var r=function(){o.read().then(function(e){if(e.done)t(void 0);else{var o=c.decode(e.value,{stream:!0});n(o),r()}})["catch"](function(n){"AbortError"===n.name?t(void 0):e(n)})};r()})})["finally"](function(){o()}),a},R.prototype.dispatchEvent=function(t){t.target=this;var e=this._listeners[t.type];if(void 0!=e)for(var n=e.length,o=0;o<n;o+=1){var r=e[o];try{"function"===typeof r.handleEvent?r.handleEvent(t):r.call(this,t)}catch(i){N(i)}}},R.prototype.addEventListener=function(t,e){t=String(t);var n=this._listeners,o=n[t];void 0==o&&(o=[],n[t]=o);for(var r=!1,i=0;i<o.length;i+=1)o[i]===e&&(r=!0);r||o.push(e)},R.prototype.removeEventListener=function(t,e){t=String(t);var n=this._listeners,o=n[t];if(void 0!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==e&&r.push(o[i]);0===r.length?delete n[t]:n[t]=r}},j.prototype=Object.create(H.prototype),P.prototype=Object.create(H.prototype);var I=-1,q=0,L=1,D=2,J=-1,M=0,G=1,k=2,B=3,X=/^text\/event\-stream;?(\s*charset\=utf\-8)?$/i,z=1e3,K=18e6,U=function(t,e){var n=parseInt(t,10);return n!==n&&(n=e),Z(n)},Z=function(t){return Math.min(Math.max(t,z),K)},$=function(t,e,n){try{"function"===typeof e&&e.call(t,n)}catch(o){N(o)}};function F(t,e){R.call(this),this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this._close=void 0,W(this,t,e)}function Q(){return void 0!=d&&"withCredentials"in d.prototype||void 0==c?d:c}var V=void 0!=f&&void 0!=v&&"body"in v.prototype;function W(t,e,n){e=String(e);var o=void 0!=n&&Boolean(n.withCredentials),r=Z(1e3),i=void 0!=n&&void 0!=n.heartbeatTimeout?U(n.heartbeatTimeout,45e3):Z(45e3),d="",c=r,u=!1,h=void 0!=n&&void 0!=n.headers?JSON.parse(JSON.stringify(n.headers)):void 0,p=void 0!=n&&void 0!=n.Transport?n.Transport:Q(),f=!V||void 0!=n&&void 0!=n.Transport?new _(new p):void 0,v=void 0==f?new O:new E,l=void 0,y=0,g=I,w="",T="",C="",b="",m=M,S=0,x=0,A=function(e,n,o,i){if(g===q)if(200===e&&void 0!=o&&X.test(o)){g=L,u=!0,c=r,t.readyState=L;var s=new P("open",{status:e,statusText:n,headers:i});t.dispatchEvent(s),$(t,t.onopen,s)}else{var a="";200!==e?(n&&(n=n.replace(/\s+/g," ")),a="EventSource's response has a status "+e+" "+n+" that is not 200. Aborting the connection."):a="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==o?"-":o.replace(/\s+/g," "))+". Aborting the connection.",N(new Error(a)),K();s=new P("error",{status:e,statusText:n,headers:i});t.dispatchEvent(s),$(t,t.onerror,s)}},R=function(e){if(g===L){for(var n=-1,o=0;o<e.length;o+=1){var h=e.charCodeAt(o);h!=="\n".charCodeAt(0)&&h!=="\r".charCodeAt(0)||(n=o)}var p=(-1!==n?b:"")+e.slice(0,n+1);b=(-1===n?b:"")+e.slice(n+1),""!==p&&(u=!0);for(var f=0;f<p.length;f+=1){h=p.charCodeAt(f);if(m===J&&h==="\n".charCodeAt(0))m=M;else if(m===J&&(m=M),h==="\r".charCodeAt(0)||h==="\n".charCodeAt(0)){if(m!==M){m===G&&(x=f+1);var v=p.slice(S,x-1),l=p.slice(x+(x<f&&p.charCodeAt(x)===" ".charCodeAt(0)?1:0),f);"data"===v?(w+="\n",w+=l):"id"===v?T=l:"event"===v?C=l:"retry"===v?(r=U(l,r),c=r):"heartbeatTimeout"===v&&(i=U(l,i),0!==y&&(a(y),y=s(function(){F()},i)))}if(m===M){if(""!==w){d=T,""===C&&(C="message");var _=new j(C,{data:w.slice(1),lastEventId:T});if(t.dispatchEvent(_),"message"===C&&$(t,t.onmessage,_),g===D)return}w="",C=""}m=h==="\r".charCodeAt(0)?J:M}else m===M&&(S=f,m=G),m===G?h===":".charCodeAt(0)&&(x=f+1,m=k):m===k&&(m=B)}}},z=function(){if(g===L||g===q){g=I,0!==y&&(a(y),y=0),y=s(function(){F()},c),c=Z(Math.min(16*r,2*c)),t.readyState=q;var e=new H("error");t.dispatchEvent(e),$(t,t.onerror,e)}},K=function(){g=D,void 0!=l&&(l.abort(),l=void 0),0!==y&&(a(y),y=0),t.readyState=D},F=function(){if(y=0,g===I){u=!1,y=s(function(){F()},i),g=q,w="",C="",T=d,b="",S=0,x=0,m=M;var t=e;"data:"!==e.slice(0,5)&&"blob:"!==e.slice(0,5)&&""!==d&&(t+=(-1===e.indexOf("?")?"?":"&")+"lastEventId="+encodeURIComponent(d));var n={Accept:"text/event-stream"};if(void 0!=h)for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(n[r]=h[r]);try{l=v.open(f,A,R,z,t,o,n)}catch(a){throw K(),a}}else u||void 0==l?(u=!1,y=s(function(){F()},i)):(N(new Error("No activity within "+i+" milliseconds. Reconnecting.")),l.abort(),l=void 0)};t.url=e,t.readyState=q,t.withCredentials=o,t._close=K,F()}F.prototype=Object.create(R.prototype),F.prototype.CONNECTING=q,F.prototype.OPEN=L,F.prototype.CLOSED=D,F.prototype.close=function(){this._close()},F.CONNECTING=q,F.OPEN=L,F.CLOSED=D,F.prototype.withCredentials=void 0,function(n){if("object"===typeof t.exports){var s=n(e);void 0!==s&&(t.exports=s)}else r=[e],o=n,i="function"===typeof o?o.apply(e,r):o,void 0===i||(t.exports=i)}(function(t){t.EventSourcePolyfill=F,t.NativeEventSource=u,void 0==d||void 0!=u&&"withCredentials"in u.prototype||(t.EventSource=F)})})("undefined"!==typeof window?window:"undefined"!==typeof self?self:this)}}]);
//# sourceMappingURL=event-source-polyfill.f86721a7.js.map