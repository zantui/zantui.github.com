webpackJsonp([139],{1051:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-book"},[e._m(0),e._v(" "),r("div",{staticClass:"steps"},[r("Steps",{attrs:{current:e.steps}},[r("Step",{attrs:{title:"填写订单"}}),e._v(" "),r("Step",{attrs:{title:"付款"}}),e._v(" "),r("Step",{attrs:{title:"完成"}})],1)],1),e._v(" "),0===e.steps?r("div",{staticClass:"order"},[r("i-form",{attrs:{model:e.formItem,rules:e.ruleValidate,"label-width":80}},[r("Form-item",{attrs:{prop:"name",label:"姓名"}},[r("i-input",{attrs:{placeholder:"请输入收货人真实姓名，例如：梁灏"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),e._v(" "),r("Form-item",{attrs:{prop:"phone",label:"电话"}},[r("i-input",{attrs:{placeholder:"请输入收货人联系电话，例如：18500000000"},model:{value:e.formItem.phone,callback:function(t){e.$set(e.formItem,"phone",t)},expression:"formItem.phone"}})],1),e._v(" "),r("Form-item",{attrs:{prop:"address",label:"收货地址"}},[r("i-input",{attrs:{type:"textarea",placeholder:"请填写完整的收货地址，例如：北京市东城区东直门外大街39号院京投快轨大厦608室"},model:{value:e.formItem.address,callback:function(t){e.$set(e.formItem,"address",t)},expression:"formItem.address"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"center",margin:"16px 0"}},[r("Button",{attrs:{type:"primary",size:"large"},on:{click:e.handleOrder}},[e._v("提交订单")])],1)],1):e._e(),e._v(" "),1===e.steps?r("div",{staticClass:"order"},[r("h2",[e._v("付款步骤：")]),e._v(" "),r("div",{staticStyle:{"font-size":"16px"}},[e._m(1),e._v(" "),r("p",[e._v("2. 将你的订单号 "),r("strong",{staticStyle:{color:"#ed4014"}},[e._v(e._s(e.order_id))]),e._v(" 发送给 talkingcoder")]),e._v(" "),r("p",[e._v("3. 管理员稍后会确认订单，并加你到预购群，等待发货")])]),e._v(" "),e._m(2),e._v(" "),r("div",{staticStyle:{"text-align":"center",margin:"16px 0"}},[r("Button",{attrs:{type:"primary",size:"large"},on:{click:e.handleFinish}},[e._v("完成付款，并已发送订单号")])],1)]):e._e(),e._v(" "),2===e.steps?r("div",{staticClass:"order"},[r("h2",[e._v("订购完成！")]),e._v(" "),r("div",{staticStyle:{"font-size":"16px"}},[e._v("\n            稍后管理员确认订单后，会加您到预购微信群。\n        ")])]):e._e()])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main ivu-article"},[r("h1",[e._v("《Vue.js 实战》预购")]),e._v(" "),r("blockquote",[r("p",[e._v("《Vue.js 实战》一书将在 10 月由清华大学出版社出版，现可预购 "),r("strong",[e._v("签名版")]),e._v("。")]),e._v(" "),r("p",[e._v("图书介绍：本书以 Vue.js 2.0 为基础，以项目实战的方式来引导读者渐进式学习 Vue.js。通过本书的学习，读者能够掌握 Vue.js 框架主要 API 的使用方法、自定义指令、组件开发、单文件组件、Render 函数、使用 Webpack 开发可复用的单页面富应用等。本书特点是示例丰富，侧重实战，适用于刚接触或即将接触 Vue.js 的开发者，也适用于对 Vue.js 有过开发经验，但需要进一步提升的开发者。")]),e._v(" "),r("p",[e._v("作者简介：梁灏（Aresn），基于 Vue.js 的开源组件库 iView 作者，程序员社区 TalkingCoder 创办者。现工作于 TalkingData，负责大数据可视化基础架构。")]),e._v(" "),r("p",[e._v("本书由 Vue.js 作者 "),r("strong",[e._v("尤雨溪")]),e._v(" 作推荐序"),r("a",{attrs:{href:"https://i.loli.net/2017/08/07/5987de0f8d841.png",target:"_blank"}},[e._v("查看")]),e._v("，大漠、justjavac 等老师作推荐语"),r("a",{attrs:{href:"https://i.loli.net/2017/08/07/5987df18c2a41.png",target:"_blank"}},[e._v("查看")]),e._v("。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://i.loli.net/2017/08/07/5987e087b025b.png",target:"_blank"}},[e._v("查看本书目录")])]),e._v(" "),r("p",[e._v("图书定价："),r("strong",{staticStyle:{color:"#ed4014"}},[e._v("79 元")]),e._v("（包邮）。")]),e._v(" "),r("p",[e._v("发货日期：出版后即发货，大概在 10 月份。")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("1. 添加个人微信 "),r("strong",[e._v("talkingcoder")]),e._v("，并转账 "),r("strong",{staticStyle:{color:"#ed4014"}},[e._v("79 元")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-top":"16px"}},[r("p",[e._v("扫码二维码添加微信，或搜索 talkingcoder")]),e._v(" "),r("img",{staticStyle:{width:"160px",height:"160px"},attrs:{src:"https://i.loli.net/2017/08/07/5988010701dce.jpeg"}})])}];n._withStripped=!0;var s={render:n,staticRenderFns:o};t.default=s},1148:function(e,t){},554:function(e,t,r){"use strict";function n(e){c||r(1148)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(931),s=r.n(o);for(var i in o)["default","default"].indexOf(i)<0&&function(e){r.d(t,e,function(){return o[e]})}(i);var a=r(1051),u=r.n(a),c=!1,f=r(71),p=n,l=f(s.a,u.a,!1,p,"data-v-a9e6262c",null);l.options.__file="src/views/vue-book.vue",t.default=l.exports},644:function(e,t,r){"use strict";function n(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===C.call(e)}function l(e){return"[object File]"===C.call(e)}function d(e){return"[object Blob]"===C.call(e)}function h(e){return"[object Function]"===C.call(e)}function m(e){return f(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function _(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)_(arguments[r],e);return t}function x(e,t,r){return _(t,function(t,n){e[n]=r&&"function"==typeof t?b(t,r):t}),e}var b=r(657),S=r(761),C=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:S,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:_,merge:w,extend:x,trim:g}},648:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(644),s=r(681),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(653):void 0!==t&&(e=r(653)),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a}).call(t,r(181))},653:function(e,t,r){"use strict";var n=r(644),o=r(673),s=r(676),i=r(682),a=r(680),u=r(656),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(675);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;n.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";l.Authorization="Basic "+c(v+":"+g)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,s),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=r(678),_=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;_&&(l[e.xsrfHeaderName]=_)}if("setRequestHeader"in d&&n.forEach(l,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},654:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},655:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},656:function(e,t,r){"use strict";var n=r(672);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},657:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},666:function(e,t,r){e.exports=r(667)},667:function(e,t,r){"use strict";function n(e){var t=new i(e),r=s(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(644),s=r(657),i=r(669),a=r(648),u=n(a);u.Axios=i,u.create=function(e){return n(o.merge(a,e))},u.Cancel=r(654),u.CancelToken=r(668),u.isCancel=r(655),u.all=function(e){return Promise.all(e)},u.spread=r(683),e.exports=u,e.exports.default=u},668:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(654);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},669:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(648),s=r(644),i=r(670),a=r(671),u=r(679),c=r(677);n.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},670:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(644);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},671:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(644),s=r(674),i=r(655),a=r(648);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},672:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},673:function(e,t,r){"use strict";var n=r(656);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},674:function(e,t,r){"use strict";var n=r(644);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},675:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),i="",a=0,u=s;o.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},676:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(644);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},677:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},678:function(e,t,r){"use strict";var n=r(644);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},679:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},680:function(e,t,r){"use strict";var n=r(644);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},681:function(e,t,r){"use strict";var n=r(644);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},682:function(e,t,r){"use strict";var n=r(644);e.exports=function(e){var t,r,o,s={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+r:r)}),s):s}},683:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},761:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},931:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(666),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={props:{},data:function(){return{order_id:0,steps:0,formItem:{name:"",phone:"",address:""},ruleValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],phone:[{required:!0,message:"电话不能为空",trigger:"blur"}],address:[{required:!0,message:"收货地址不能为空",trigger:"blur"}]}}},methods:{handleOrder:function(){var e=this;return""===this.formItem.name?(this.$Notice.warning({title:"请输入姓名"}),!1):""===this.formItem.phone?(this.$Notice.warning({title:"请输入联系电话"}),!1):""===this.formItem.address?(this.$Notice.warning({title:"请输入收获地址"}),!1):void this.$Modal.confirm({title:"收获信息确认",content:"<p>姓名："+this.formItem.name+"</p><p>电话："+this.formItem.phone+"</p><p>地址："+this.formItem.address+'</p><p><strong style="color: #ed4014;font-size: 12px;">目前 100 本签名版已售罄，您将要购买的是普通版（无纪念品），请知晓，感谢您的支持。</strong></p>',onOk:function(){var t=new URLSearchParams;t.append("name",e.formItem.name),t.append("phone",e.formItem.phone),t.append("address",e.formItem.address),(0,o.default)({method:"post",url:"https://www.iviewui.com/order/buy",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(t){"0"===t.data.status_code&&(e.order_id=t.data.data.order.id,e.steps=1)})},onCancel:function(){}})},handleFinish:function(){var e=this;this.$Modal.confirm({title:"付款确认",content:"<p>确认已完成付费并发送订单号后，请点击确定按钮。</p>",onOk:function(){e.steps=2},onCancel:function(){}})}},mounted:function(){document.body.style.background="#f8f8f9",document.body.style.height="100%",document.getElementsByTagName("html")[0].style.height="100%",document.getElementsByTagName("div")[0].style.height="100%"}}}});