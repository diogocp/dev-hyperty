(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for Syncher.js 
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,n="performChange",o="_original",i="splice",s={push:function a(e){var t=arguments,s=a[o].apply(this,t);return r(this)[n](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[o].apply(this,t);return r(this)[n](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,c=d[o].apply(this,s);return(c.length||s.length>2)&&r(this)[n](i,function(){return{index:e,addedCount:s.length-2,removed:c}},this),c}};for(var c in s)s[c][o]=t.prototype[c],t.prototype[c]=s[c];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":18}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":19}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":20}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":21}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":22}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":23}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":24}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":25}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":26}],11:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":27}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"babel-runtime/core-js/object/define-property":4}],14:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/get-prototype-of"),i=n(o),s=e("babel-runtime/core-js/object/get-own-property-descriptor"),c=n(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var n=(0,c["default"])(e,t);if(void 0===n){var o=(0,i["default"])(e);return null===o?void 0:a(o,t,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)}},{"babel-runtime/core-js/object/get-own-property-descriptor":5,"babel-runtime/core-js/object/get-prototype-of":6}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/set-prototype-of"),i=n(o),s=e("babel-runtime/core-js/object/create"),c=n(s),a=e("babel-runtime/helpers/typeof"),u=n(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"babel-runtime/core-js/object/create":3,"babel-runtime/core-js/object/set-prototype-of":8,"babel-runtime/helpers/typeof":17}],16:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/helpers/typeof"),i=n(o);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i["default"])(t))&&"function"!=typeof t?e:t}},{"babel-runtime/helpers/typeof":17}],17:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/symbol/iterator"),i=n(o),s=e("babel-runtime/core-js/symbol"),c=n(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"babel-runtime/core-js/symbol":10,"babel-runtime/core-js/symbol/iterator":11}],18:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":35}],19:[function(e,t,r){e("../../modules/es6.object.create");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.create(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.create":100}],20:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":35,"../../modules/es6.object.define-property":101}],21:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.get-own-property-descriptor":102}],22:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":103}],23:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":35,"../../modules/es6.object.keys":104}],24:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":105}],25:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":35,"../modules/es6.object.to-string":106,"../modules/es6.promise":107,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],26:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":35,"../../modules/es6.object.to-string":106,"../../modules/es6.symbol":109,"../../modules/es7.symbol.async-iterator":110,"../../modules/es7.symbol.observable":111}],27:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":96,"../../modules/es6.string.iterator":108,"../../modules/web.dom.iterable":112}],28:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],29:[function(e,t,r){t.exports=function(){}},{}],30:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],31:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":54}],32:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=n(t),u=o(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l||0;return!e&&-1}}},{"./_to-index":88,"./_to-iobject":90,"./_to-length":91}],33:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":34,"./_wks":97}],34:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],35:[function(e,t,r){var n=t.exports={version:"2.3.0"};"number"==typeof __e&&(__e=n)},{}],36:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":28}],37:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],38:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":43}],39:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":45,"./_is-object":54}],40:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],41:[function(e,t,r){var n=e("./_object-keys"),o=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=n(e),r=o.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],42:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,d=e&a.F,p=e&a.G,_=e&a.S,b=e&a.P,h=e&a.B,y=e&a.W,v=p?o:o[t]||(o[t]={}),j=v[c],m=p?n:_?n[t]:(n[t]||{})[c];p&&(r=t);for(u in r)l=!d&&m&&void 0!==m[u],l&&u in v||(f=l?m[u]:r[u],v[u]=p&&"function"!=typeof m[u]?r[u]:h&&l?i(f,n):y&&m[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],44:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method");t.exports=function(e,t,r,u,l){var f,d,p,_=l?function(){return e}:a(e),b=n(r,u,t?2:1),h=0;if("function"!=typeof _)throw TypeError(e+" is not iterable!");if(i(_))for(f=c(e.length);f>h;h++)t?b(s(d=e[h])[0],d[1]):b(e[h]);else for(p=_.call(e);!(d=p.next()).done;)o(p,b,d.value,t)}},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":91,"./core.get-iterator-method":98}],45:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],46:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],47:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":38,"./_object-dp":66,"./_property-desc":77}],48:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":45}],49:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],51:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":34}],52:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":60,"./_wks":97}],53:[function(e,t,r){var n=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./_cof":34}],54:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],55:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./_an-object":31}],56:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":47,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":82,"./_wks":97}],57:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),d=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),_="@@iterator",b="keys",h="values",y=function(){return this};t.exports=function(e,t,r,v,j,m,g){u(r,t,v);var w,O,k,x=function(e){if(!p&&e in T)return T[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",E=j==h,S=!1,T=e.prototype,M=T[d]||T[_]||j&&T[j],R=M||x(j),N=j?E?x("entries"):R:void 0,P="Array"==t?T.entries||M:M;if(P&&(k=f(P.call(new e)),k!==Object.prototype&&(l(k,C,!0),n||c(k,d)||s(k,d,y))),E&&M&&M.name!==h&&(S=!0,R=function(){return M.call(this)}),n&&!g||!p&&!S&&T[d]||s(T,d,R),a[t]=R,a[C]=y,j)if(w={values:E?R:x(h),keys:m?R:x(b),entries:N},g)for(O in w)O in T||i(T,O,w[O]);else o(o.P+o.F*(p||S),t,w);return w}},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":79,"./_set-to-string-tag":82,"./_wks":97}],58:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":97}],59:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],60:[function(e,t,r){t.exports={}},{}],61:[function(e,t,r){var n=e("./_object-keys"),o=e("./_to-iobject");t.exports=function(e,t){for(var r,i=o(e),s=n(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":74,"./_to-iobject":90}],62:[function(e,t,r){t.exports=!0},{}],63:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,n,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[n].i},d=function(e,t){if(!i(e,n)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[n].w},p=function(e){return u&&_.NEED&&a(e)&&!i(e,n)&&l(e),e},_=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":66,"./_uid":94}],64:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,c=n.Promise,a="process"==e("./_cof")(s);t.exports=function(){var e,t,r,u=function(){var n,o;for(a&&(n=s.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(i){throw e?r():t=void 0,i}}t=void 0,n&&n.enter()};if(a)r=function(){s.nextTick(u)};else if(i){var l=!0,f=document.createTextNode("");new i(u).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(c&&c.resolve){var d=c.resolve();r=function(){d.then(u)}}else r=function(){o.call(n,u)};return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":34,"./_global":45,"./_task":87}],65:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),u=t.F;n--;)delete u[a][i[n]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=n(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:o(r,t)}},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":67,"./_shared-key":83}],66:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":93}],67:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,a=0;c>a;)n.f(e,r=s[a++],t[r]);return e}},{"./_an-object":31,"./_descriptors":38,"./_object-dp":66,"./_object-keys":74}],68:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}return c(e,t)?o(!n.f.call(e,t),e[t]):void 0}},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":90,"./_to-primitive":93}],69:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):o(n(e))}},{"./_object-gopn":70,"./_to-iobject":90}],70:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],71:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],72:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":46,"./_shared-key":83,"./_to-object":92}],73:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),a=0,u=[];for(r in c)r!=s&&n(c,r)&&u.push(r);for(;t.length>a;)n(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":32,"./_has":46,"./_shared-key":83,"./_to-iobject":90}],74:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],75:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],76:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":35,"./_export":42,"./_fails":43}],77:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],78:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":47}],79:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":47}],80:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":68}],81:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":66,"./_wks":97}],82:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":46,"./_object-dp":66,"./_wks":97}],83:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":84,"./_uid":94}],84:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":45}],85:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./_a-function":28,"./_an-object":31,"./_wks":97}],86:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),a=n(r),u=c.length;return 0>a||a>=u?e?"":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":37,"./_to-integer":89}],87:[function(e,t,r){var n,o,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,d=l.setImmediate,p=l.clearImmediate,_=l.MessageChannel,b=0,h={},y="onreadystatechange",v=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},j=function(e){v.call(e.data)};d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++b]=function(){c("function"==typeof e?e:Function(e),t)},n(b),b},p=function(e){delete h[e]},"process"==e("./_cof")(f)?n=function(e){f.nextTick(s(v,e,1))}:_?(o=new _,i=o.port2,o.port1.onmessage=j,n=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):n=y in u("script")?function(e){a.appendChild(u("script"))[y]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:d,clear:p}},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],88:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),0>e?o(e+t,0):i(e,t)}},{"./_to-integer":89}],89:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],90:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":37,"./_iobject":51}],91:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":89}],92:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":37}],93:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":54}],94:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],95:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_library"),s=e("./_wks-ext"),c=e("./_object-dp").f;t.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:s.f(e)})}},{"./_core":35,"./_global":45,"./_library":62,"./_object-dp":66,"./_wks-ext":96}],96:[function(e,t,r){r.f=e("./_wks")},{"./_wks":97}],97:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))};c.store=n},{"./_global":45,"./_shared":84,"./_uid":94}],98:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":97}],99:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":90}],100:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{create:e("./_object-create")})},{"./_export":42,"./_object-create":65}],101:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":38,"./_export":42,"./_object-dp":66}],102:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return o(n(e),t)}})},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":90}],103:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return o(n(e))}})},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":92}],104:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":74,"./_object-sap":76,"./_to-object":92}],105:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":42,"./_set-proto":80}],106:[function(e,t,r){},{}],107:[function(e,t,r){"use strict";var n,o,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),d=(e("./_an-object"),e("./_a-function")),p=e("./_an-instance"),_=e("./_for-of"),b=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask")(),v="Promise",j=c.TypeError,m=c.process,g=c[v],m=c.process,w="process"==u(m),O=function(){},k=!!function(){try{var t=g.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(O,O)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof r}catch(n){}}(),x=function(e,t){return e===t||e===g&&t===i},C=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},E=function(e){return x(g,e)?new S(e):new o(e)},S=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=n}),this.resolve=d(t),this.reject=d(r)},T=function(e){try{e()}catch(t){return{error:t}}},M=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var n=e._v,o=1==e._s,i=0,s=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(o||(2==e._h&&P(e),e._h=1),s===!0?r=n:(u&&u.enter(),r=s(n),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(n)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&R(e)})}},R=function(e){h.call(c,function(){var t,r,n,o=e._v;if(N(e)&&(t=T(function(){w?m.emit("unhandledRejection",o,e):(r=c.onunhandledrejection)?r({promise:e,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=w||N(e)?2:1),e._a=void 0,t)throw t.error})},N=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!N(t.promise))return!1;return!0},P=function(e){h.call(c,function(){var t;w?m.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},D=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),M(t,!0))},A=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=C(e))?y(function(){var n={_w:r,_d:!1};try{t.call(e,a(A,n,1),a(D,n,1))}catch(o){D.call(n,o)}}):(r._v=e,r._s=1,M(r,!1))}catch(n){D.call({_w:r,_d:!1},n)}}};k||(g=function(e){p(this,g,v,"_h"),d(e),n.call(this);try{e(a(A,this,1),a(D,this,1))}catch(t){D.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(g.prototype,{then:function(e,t){var r=E(b(this,g));return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,r.domain=w?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&M(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new n;this.promise=e,this.resolve=a(A,e,1),this.reject=a(D,e,1)}),l(l.G+l.W+l.F*!k,{Promise:g}),e("./_set-to-string-tag")(g,v),
e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!k,v,{reject:function(e){var t=E(this),r=t.reject;return r(e),t.promise}}),l(l.S+l.F*(s||!k),v,{resolve:function(e){if(e instanceof g&&x(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(k&&e("./_iter-detect")(function(e){g.all(e)["catch"](O)})),v,{all:function(e){var t=this,r=E(t),n=r.resolve,o=r.reject,i=T(function(){var r=[],i=0,s=1;_(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||n(r))},o)}),--s||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=E(t),n=r.reject,o=T(function(){_(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":28,"./_an-instance":30,"./_an-object":31,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":62,"./_microtask":64,"./_redefine-all":78,"./_set-proto":80,"./_set-species":81,"./_set-to-string-tag":82,"./_species-constructor":85,"./_task":87,"./_wks":97}],108:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":57,"./_string-at":86}],109:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_has"),i=e("./_descriptors"),s=e("./_export"),c=e("./_redefine"),a=e("./_meta").KEY,u=e("./_fails"),l=e("./_shared"),f=e("./_set-to-string-tag"),d=e("./_uid"),p=e("./_wks"),_=e("./_wks-ext"),b=e("./_wks-define"),h=e("./_keyof"),y=e("./_enum-keys"),v=e("./_is-array"),j=e("./_an-object"),m=e("./_to-iobject"),g=e("./_to-primitive"),w=e("./_property-desc"),O=e("./_object-create"),k=e("./_object-gopn-ext"),x=e("./_object-gopd"),C=e("./_object-dp"),E=e("./_object-keys"),S=x.f,T=C.f,M=k.f,R=n.Symbol,N=n.JSON,P=N&&N.stringify,D="prototype",A=p("_hidden"),L=p("toPrimitive"),F={}.propertyIsEnumerable,I=l("symbol-registry"),V=l("symbols"),z=Object[D],U="function"==typeof R,H=n.QObject,B=!H||!H[D]||!H[D].findChild,W=i&&u(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=S(z,t);n&&delete z[t],T(e,t,r),n&&e!==z&&T(z,t,n)}:T,J=function(e){var t=V[e]=O(R[D]);return t._k=e,t},Y=U&&"symbol"==typeof R.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof R},q=function(e,t,r){return j(e),t=g(t,!0),j(r),o(V,t)?(r.enumerable?(o(e,A)&&e[A][t]&&(e[A][t]=!1),r=O(r,{enumerable:w(0,!1)})):(o(e,A)||T(e,A,w(1,{})),e[A][t]=!0),W(e,t,r)):T(e,t,r)},K=function(e,t){j(e);for(var r,n=y(t=m(t)),o=0,i=n.length;i>o;)q(e,r=n[o++],t[r]);return e},G=function(e,t){return void 0===t?O(e):K(O(e),t)},Z=function(e){var t=F.call(this,e=g(e,!0));return t||!o(this,e)||!o(V,e)||o(this,A)&&this[A][e]?t:!0},X=function(e,t){var r=S(e=m(e),t=g(t,!0));return!r||!o(V,t)||o(e,A)&&e[A][t]||(r.enumerable=!0),r},$=function(e){for(var t,r=M(m(e)),n=[],i=0;r.length>i;)o(V,t=r[i++])||t==A||t==a||n.push(t);return n},Q=function(e){for(var t,r=M(m(e)),n=[],i=0;r.length>i;)o(V,t=r[i++])&&n.push(V[t]);return n};U||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0);return i&&B&&W(z,e,{configurable:!0,set:function(t){o(this,A)&&o(this[A],e)&&(this[A][e]=!1),W(this,e,w(1,t))}}),J(e)},c(R[D],"toString",function(){return this._k}),x.f=X,C.f=q,e("./_object-gopn").f=k.f=$,e("./_object-pie").f=Z,e("./_object-gops").f=Q,i&&!e("./_library")&&c(z,"propertyIsEnumerable",Z,!0),_.f=function(e){return J(p(e))}),s(s.G+s.W+s.F*!U,{Symbol:R});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var ee=E(p.store),te=0;ee.length>te;)b(ee[te++]);s(s.S+s.F*!U,"Symbol",{"for":function(e){return o(I,e+="")?I[e]:I[e]=R(e)},keyFor:function(e){if(Y(e))return h(I,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){B=!0},useSimple:function(){B=!1}}),s(s.S+s.F*!U,"Object",{create:G,defineProperty:q,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:Q}),N&&s(s.S+s.F*(!U||u(function(){var e=R();return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!Y(e)){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&v(t)||(t=function(e,t){return r&&(t=r.call(this,e,t)),Y(t)?void 0:t}),n[1]=t,P.apply(N,n)}}}),R[D][L]||e("./_hide")(R[D],L,R[D].valueOf),f(R,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},{"./_an-object":31,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":77,"./_redefine":79,"./_set-to-string-tag":82,"./_shared":84,"./_to-iobject":90,"./_to-primitive":93,"./_uid":94,"./_wks":97,"./_wks-define":95,"./_wks-ext":96}],110:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":95}],111:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":95}],112:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var u=c[a],l=n[u],f=l&&l.prototype;f&&!f[s]&&o(f,s,u),i[u]=i.Array}},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":97,"./es6.array.iterator":99}],113:[function(e,t,r){window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(e){function t(e){this.g=[],this.k=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e.k(n,e),e.f=setTimeout(r,t._period)}()}function n(t){var r,n={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(r in t)n[r]!==e&&t[r]!==e&&(n[r]=t[r]);return n}function o(e,t){var r=c(e,t);return function(n){var o,a=n.length;t.a&&r.a&&i(n,e,r.a,t.d),(t.b||t.e)&&(o=s(n,e,r,t)),(o||n.length!==a)&&(r=c(e,t))}}function i(t,r,o,i){for(var s,c,a={},u=r.attributes,l=u.length;l--;)s=u[l],c=s.name,i&&i[c]===e||(s.value!==o[c]&&t.push(n({type:"attributes",target:r,attributeName:c,oldValue:o[c],attributeNamespace:s.namespaceURI})),a[c]=!0);for(c in o)a[c]||t.push(n({target:r,type:"attributes",attributeName:c,oldValue:o[c]}))}function s(t,r,o,s){function c(e,r,o,c,a){var l=e.length-1;a=-~((l-a)/2);for(var f,d,p;p=e.pop();)f=o[p.h],d=c[p.i],s.b&&a&&Math.abs(p.h-p.i)>=l&&(t.push(n({type:"childList",target:r,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),a--),s.a&&d.a&&i(t,f,d.a,s.d),s.c&&3===f.nodeType&&f.nodeValue!==d.c&&t.push(n({type:"characterData",target:f})),s.e&&u(f,d)}function u(r,o){for(var d,p,_,b,h,y=r.childNodes,v=o.b,j=y.length,m=v?v.length:0,g=0,w=0,O=0;j>w||m>O;)b=y[w],h=(_=v[O])&&_.j,b===h?(s.a&&_.a&&i(t,b,_.a,s.d),s.c&&_.c!==e&&b.nodeValue!==_.c&&t.push(n({type:"characterData",target:b})),p&&c(p,r,y,v,g),s.e&&(b.childNodes.length||_.b&&_.b.length)&&u(b,_),w++,O++):(l=!0,d||(d={},p=[]),b&&(d[_=a(b)]||(d[_]=!0,-1===(_=f(v,b,O,"j"))?s.b&&(t.push(n({type:"childList",target:r,addedNodes:[b],nextSibling:b.nextSibling,previousSibling:b.previousSibling})),g++):p.push({h:w,i:_})),w++),h&&h!==y[w]&&(d[_=a(h)]||(d[_]=!0,-1===(_=f(y,h,w))?s.b&&(t.push(n({type:"childList",target:o.j,removedNodes:[h],nextSibling:v[O+1],previousSibling:v[O-1]})),g--):p.push({h:_,i:O})),O++));p&&c(p,r,y,v,g)}var l;return u(r,o),l}function c(e,t){var r=!0;return function n(e){var o={j:e};return!t.c||3!==e.nodeType&&8!==e.nodeType?(t.a&&r&&1===e.nodeType&&(o.a=l(e.attributes,function(e,r){return t.d&&!t.d[r.name]||(e[r.name]=r.value),e})),r&&(t.b||t.c||t.a&&t.e)&&(o.b=u(e.childNodes,n)),r=t.e):o.c=e.nodeValue,o}(e)}function a(e){try{return e.id||(e.mo_id=e.mo_id||d++)}catch(t){try{return e.nodeValue}catch(r){return d++}}}function u(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}function l(e,t){for(var r={},n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function f(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}t._period=30,t.prototype={observe:function(e,t){for(var n={a:!!(t.attributes||t.attributeFilter||t.attributeOldValue),b:!!t.childList,e:!!t.subtree,c:!(!t.characterData&&!t.characterDataOldValue)},i=this.g,s=0;s<i.length;s++)i[s].m===e&&i.splice(s,1);t.attributeFilter&&(n.d=l(t.attributeFilter,function(e,t){return e[t]=!0,e})),i.push({m:e,l:o(e,n)}),this.f||r(this)},takeRecords:function(){for(var e=[],t=this.g,r=0;r<t.length;r++)t[r].l(e);return e},disconnect:function(){this.g=[],clearTimeout(this.f),this.f=null}};var d=1;return t}(void 0)},{}],114:[function(e,t,r){Object.observe||function(e,t,r,n){"use strict";var o,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],c=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),a=t.prototype.indexOf?t.indexOf||function(e,r,n){return t.prototype.indexOf.call(e,r,n)}:function(e,t,r){for(var n=r||0;n<e.length;n++)if(e[n]===t)return n;return-1},u=r.Map!==n&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return a(e,t)>-1},get:function(r){return t[a(e,r)]},set:function(r,n){var o=a(e,r);-1===o?(e.push(r),t.push(n),this.size++):t[o]=n},"delete":function(r){var n=a(e,r);n>-1&&(e.splice(n,1),t.splice(n,1),this.size--)},forEach:function(r){for(var n=0;n<e.length;n++)r.call(arguments[1],t[n],e[n],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var n=(t(a).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");n.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var o,i=0;i<n.length;)(o=a(r,n[i++]))>-1&&r.splice(o,1);return r})}return t}():function(t){var r,n,o=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&o.push(r);else{n=e.hasOwnProperty;for(r in t)n.call(t,r)&&o.push(r)}return c(t)&&o.push("length"),o},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,p=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),_=function(e,t,r){var n=o.get(e);n?(h(n,e),m(e,n,t,r)):(n=b(e),m(e,n,t,r),1===o.size&&p(y))},b=function(t,r){var n,i=l(t),s=[],c=0,r={handlers:u(),frozen:e.isFrozen?e.isFrozen(t):!1,extensible:e.isExtensible?e.isExtensible(t):!0,proto:f&&f(t),properties:i,values:s,notifier:j(t,r)};if(d)for(n=r.descriptors=[];c<i.length;)n[c]=d(t,i[c]),s[c]=t[i[c++]];else for(;c<i.length;)s[c]=t[i[c++]];return o.set(t,r),r},h=function(){var t=d?function(e,t,r,n,o){var i=t.properties[r],s=e[i],c=t.values[r],a=t.descriptors[r];"value"in o&&(c===s?0===c&&1/c!==1/s:c===c||s===s)&&(g(e,t,{name:i,type:"update",object:e,oldValue:c},n),t.values[r]=s),!a.configurable||o.configurable&&o.writable===a.writable&&o.enumerable===a.enumerable&&o.get===a.get&&o.set===a.set||(g(e,t,{name:i,type:"reconfigure",object:e,oldValue:c},n),t.descriptors[r]=o)}:function(e,t,r,n){var o=t.properties[r],i=e[o],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(g(e,t,{name:o,type:"update",object:e,oldValue:s},n),t.values[r]=i)},r=d?function(e,r,n,o,i){for(var s,c=r.length;n&&c--;)null!==r[c]&&(s=d(e,r[c]),n--,s?t(e,o,c,i,s):(g(e,o,{name:r[c],type:"delete",object:e,oldValue:o.values[c]},i),o.properties.splice(c,1),o.values.splice(c,1),o.descriptors.splice(c,1)))}:function(e,t,r,n,o){for(var i=t.length;r&&i--;)null!==t[i]&&(g(e,n,{name:t[i],type:"delete",object:e,oldValue:n.values[i]},o),n.properties.splice(i,1),n.values.splice(i,1),r--)};return function(n,o,i){if(n.handlers.size&&!n.frozen){var s,c,u,p,_,b,h,y,v=n.values,j=n.descriptors,m=0;if(n.extensible)if(s=n.properties.slice(),c=s.length,u=l(o),j){for(;m<u.length;)_=u[m++],p=a(s,_),y=d(o,_),-1===p?(g(o,n,{name:_,type:"add",object:o},i),n.properties.push(_),v.push(o[_]),j.push(y)):(s[p]=null,c--,t(o,n,p,i,y));r(o,s,c,n,i),e.isExtensible(o)||(n.extensible=!1,g(o,n,{type:"preventExtensions",object:o},i),n.frozen=e.isFrozen(o))}else{for(;m<u.length;)_=u[m++],p=a(s,_),b=o[_],-1===p?(g(o,n,{name:_,type:"add",object:o},i),n.properties.push(_),v.push(b)):(s[p]=null,c--,t(o,n,p,i));r(o,s,c,n,i)}else if(!n.frozen){for(;m<s.length;m++)_=s[m],t(o,n,m,i,d(o,_));e.isFrozen(o)&&(n.frozen=!0)}f&&(h=f(o),h!==n.proto&&(g(o,n,{type:"setPrototype",name:"__proto__",object:o,oldValue:n.proto}),n.proto=h))}}}(),y=function(){o.size&&(o.forEach(h),i.forEach(v),p(y))},v=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},j=function(e,t){return arguments.length<2&&(t=o.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=o.get(e);if(r){var n,i={object:e};for(n in t)"object"!==n&&(i[n]=t[n]);g(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,c=o.get(e),a=arguments[2],u=a===n?r():r.call(a);if(c&&h(c,e,t),c&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);g(e,c,s)}}}},m=function(e,t,r,n){var o=i.get(r);o||i.set(r,o={observed:u(),changeRecords:[]}),o.observed.set(e,{acceptList:n.slice(),data:t}),t.handlers.set(r,o)},g=function(e,t,r,n){t.handlers.forEach(function(t){var o=t.observed.get(e).acceptList;("string"!=typeof n||-1===a(o,n))&&a(o,r.type)>-1&&t.changeRecords.push(r)})};o=u(),i=u(),e.observe=function(t,r,o){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(o===n)o=s;else if(!o||"object"!=typeof o)throw new TypeError("Third argument to Object.observe must be an array of strings.");return _(t,r,o),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,n=i.get(t);return n&&(r=n.observed.get(e))&&(n.observed.forEach(function(e,t){h(e.data,t)}),p(function(){v(n,t)}),1===n.observed.size&&n.observed.has(e)?i["delete"](t):n.observed["delete"](e),1===r.data.handlers.size?o["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:j(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){h(e.data,t)}),v(t,e))}}(Object,Array,this)},{}],115:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.DataObjectObserver=r.DataObjectReporter=r.Syncher=void 0,e("mutationobserver-shim"),e("object.observe"),e("array.observe");var o=e("./syncher/Syncher"),i=n(o),s=e("./syncher/DataObjectReporter"),c=n(s),a=e("./syncher/DataObjectObserver"),u=n(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":118,"./syncher/DataObjectReporter":119,"./syncher/Syncher":122,"array.observe":1,"mutationobserver-shim":113,"object.observe":114}],116:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/core-js/object/keys"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("./SyncObject"),p=n(d),_=e("./DataObjectChild"),b=n(_),h=e("../utils/utils.js"),y=function(){function e(t,r,n,o,i,s){(0,u["default"])(this,e);var c=this;c._syncher=t,c._url=r,c._schema=n,c._status=o,c._syncObj=new p["default"](i),c._childrens=s,c._version=0,c._childId=0,c._childrenObjects={},c._childrenListeners=[],c._owner=t._owner,c._bus=t._bus}return(0,f["default"])(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(n){var o=r+n,i=t._bus.addListener(o,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),(0,c["default"])(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChild",value:function(e,t){var r=this;r._childId++;var n=r._owner+"#"+r._childId,o=r._url+"/children/"+e,s={type:"create",from:r._owner,to:o,body:{resource:n,value:t}};return new i["default"](function(e){var i=r._bus.postMessage(s);console.log("create-reporter-child( "+r._owner+" ): ",s);var c=new b["default"](r,n,t,r._owner,i);c.onChange(function(e){r._onChange(e,{path:o,childId:n})}),r._childrenObjects[n]=c,e(c)})}},{key:"onAddChild",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var n=new b["default"](t,r,e.body.value);t._childrenObjects[r]=n,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r,identity:e.body.identity};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",o),t._onAddChildrenHandler(o))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var n={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===d.ObjectType.OBJECT?e.cType!==d.ChangeType.REMOVE&&(n.body.value=e.data):(n.body.attributeType=e.oType,n.body.value=e.data,e.cType!==d.ChangeType.UPDATE&&(n.body.operation=e.cType)),t&&(n.to=t.path,n.body.resource=t.childId),r._bus.postMessage(n)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var n=t.body.attribute,o=(0,h.deepClone)(t.body.value),i=e.findBefore(n);if(t.body.attributeType===d.ObjectType.ARRAY)if(t.body.operation===d.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(o))}else if(t.body.operation===d.ChangeType.REMOVE){var a=i.obj,u=i.last;a.splice(u,o)}else i.obj[i.last]=o;else t.body.value?i.obj[i.last]=o:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,n=t._childrenObjects[r];n?t._changeObject(n._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=y,t.exports=r["default"]},{"../utils/utils.js":123,"./DataObjectChild":117,"./SyncObject":121,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],117:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),c=n(s),a=e("./SyncObject"),u=n(a),l=function(){function e(t,r,n,o,s){(0,i["default"])(this,e);var c=this;c._parent=t,c._childId=r,c._owner=o,c._msgId=s,c._syncObj=new u["default"](n),c._bus=t._bus,c._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=l,t.exports=r["default"]},{"./SyncObject":121,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],118:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),_=e("babel-runtime/helpers/get"),b=n(_),h=e("babel-runtime/helpers/inherits"),y=n(h),v=e("./DataObject"),j=n(v),m=e("./DataObjectChild"),g=n(m),w={ANY:"any",START:"start",EXACT:"exact"},O=function(e){function t(e,r,n,o,s,a,l){(0,u["default"])(this,t);var f=(0,p["default"])(this,(0,c["default"])(t).call(this,e,r,n,o,s.data,a)),d=f;return d._version=l,d._filters={},d._syncObj.observe(function(e){d._onFilter(e)}),(0,i["default"])(s.childrens).forEach(function(e){var t=s.childrens[e];d._childrenObjects[e]=new g["default"](d,e,t)}),d._allocateListeners(),f}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,n={type:w.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?n.type=w.ANY:(n.type=w.START,r=e.substr(0,e.length-1))),this._filters[r]=n}},{key:"_onFilter",value:function(e){var t=this;(0,i["default"])(t._filters).forEach(function(r){var n=t._filters[r];n.type===w.ANY?n.callback(e):n.type===w.START?0===e.field.indexOf(r)&&n.callback(e):n.type===w.EXACT&&e.field===r&&n.callback(e)})}}]),t}(j["default"]);r["default"]=O,t.exports=r["default"]},{"./DataObject":116,"./DataObjectChild":117,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],119:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),_=e("babel-runtime/helpers/get"),b=n(_),h=e("babel-runtime/helpers/inherits"),y=n(h),v=e("./DataObject"),j=n(v),m=e("../utils/utils.js"),g=function(e){function t(e,r,n,o,i,s){(0,u["default"])(this,t);var a=(0,p["default"])(this,(0,c["default"])(t).call(this,e,r,n,o,i,s)),l=a;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),a}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._responseListener=e._bus.addListener(e._url,function(t){"response"===t.type&&e._onResponse(t)})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._responseListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,r={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(r)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,n={type:e.body.type,url:r,accept:function(){var n={url:r,status:"on"};t._subscriptions[r]=n;var o={};return(0,i["default"])(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;o[e]=(0,m.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,m.deepClone)(t.data),childrens:o}}}),n},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,n=t._subscriptions[r];delete t._subscriptions[r];var o={type:e.body.type,url:r,object:n};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(j["default"]);r["default"]=g,t.exports=r["default"]},{"../utils/utils.js":123,"./DataObject":116,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],120:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),c=n(s),a=function(){function e(t,r,n,o){(0,i["default"])(this,e);var s=this;s._owner=t,s._url=r,s._bus=n,s._children=o,s._changes=[],s._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=a,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.ObjectType=r.ChangeType=void 0;var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),a=e("babel-runtime/helpers/createClass"),u=n(a),l=e("../utils/utils.js"),f=function(){function e(t){(0,c["default"])(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,l.deepClone)(t):r._data={},r._internalObserve(new d,r._data)}return(0,u["default"])(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var n=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,n);for(var o in t)r._isObservable(t[o])&&r._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,n);for(var i in t)if(r._isObservable(t[i])){var s=e["new"](new p(t[i],i));r._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var n in t){var o=t[n].object,i=void 0;if(o.constructor===Object&&(i=b.OBJECT),o.constructor===Array&&(i=b.ARRAY),"splice"===t[n].type)!function(){var s=t[n].index,c=e["new"](""+s),a=c.toString(),u=t[n].removed.length;if(0!==u){var f=t[n].removed;f.forEach(function(t,n){r._isObservable(t)&&e.removeIndex(s+n)}),r._fireEvent({cType:_.REMOVE,oType:i,field:a,data:u})}var d=t[n].addedCount;if(0!==d){var b=o.slice(s,s+d);b.forEach(function(t,n){if(r._isObservable(t)){var o=e["new"](new p(t,s+n));r._internalObserve(o,t)}}),r._fireEvent({cType:_.ADD,oType:i,field:a,data:(0,l.deepClone)(b)})}s!==o.length-1&&e.reIndexFrom(o)}();else{var s=e["new"](t[n].name),c=s.toString();if(-1!==c.indexOf("Symbol"))continue;var a=o[t[n].name];"update"===t[n].type&&this._fireEvent({cType:_.UPDATE,oType:i,field:c,data:(0,l.deepClone)(a)}),"add"===t[n].type&&(this._internalObserve(s,a),this._fireEvent({cType:_.ADD,oType:i,field:c,data:(0,l.deepClone)(a)})),"delete"===t[n].type&&this._fireEvent({cType:_.REMOVE,oType:i,field:c})}}}},{key:"data",get:function(){return this._data}}]),e}(),d=function(){function e(){(0,c["default"])(this,e),this._path=[],this._observables={}}return(0,u["default"])(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;(0,i["default"])(this._observables).forEach(function(r){var n=t._observables[r],o=e.indexOf(n.obj);n.idx!=o&&(n.idx=o,delete t._observables[r],
t._observables[o]=n)})}},{key:"new",value:function(e){e.constructor==p&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),p=function(){function e(t,r){(0,c["default"])(this,e),this.obj=t,this.idx=r}return(0,u["default"])(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),_=r.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},b=r.ObjectType={OBJECT:"object",ARRAY:"array"};r["default"]=f},{"../utils/utils.js":123,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],122:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),a=e("babel-runtime/helpers/createClass"),u=n(a),l=e("./DataObjectReporter"),f=n(l),d=e("./DataObjectObserver"),p=n(d),_=e("./DataProvisional"),b=n(_),h=function(){function e(t,r,n){(0,c["default"])(this,e);var o=this;o._owner=t,o._bus=r,o._subURL=n.runtimeURL+"/sm",o._reporters={},o._observers={},o._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":o._onForward(e);break;case"create":o._onRemoteCreate(e);break;case"delete":o._onRemoteDelete(e)}})}return(0,u["default"])(e,[{key:"create",value:function(e,t,r){var n=this;r.reporter=n._owner,r.schema=e;var o={type:"create",from:n._owner,to:n._subURL,body:{schema:e,value:r,authorise:t}};return new i["default"](function(t,i){n._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var s=o.body.resource,c=new f["default"](n,s,e,"on",r,o.body.childrenResources);n._reporters[s]=c,t(c)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,n={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i["default"](function(o,i){r._bus.postMessage(n,function(n){console.log("subscribe-response: ",n);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),n.body.code<200)s=new b["default"](r._owner,t,r._bus,n.body.childrenResources),r._provisionals[t]=s;else if(200===n.body.code){var c=new p["default"](r,t,e,"on",n.body.value,s.children,n.body.version);r._observers[t]=c,o(c),s.apply(c)}else i(n.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),n={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.identity,ack:function(r){var n=200;r&&(n=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,n=t._observers[r];if(n){var o={type:e.type,url:r,identity:e.body.identity,ack:function(r){var o=200;r&&(o=r),200===o&&n["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=h,t.exports=r["default"]},{"./DataObjectObserver":118,"./DataObjectReporter":119,"./DataProvisional":120,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],123:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){return e?JSON.parse((0,c["default"])(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0});var s=e("babel-runtime/core-js/json/stringify"),c=n(s);r.divideURL=o,r.deepClone=i},{"babel-runtime/core-js/json/stringify":2}]},{},[115])(115)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

var _Syncher = require('service-framework/dist/Syncher');

var _utils = require('../utils/utils');

var _EventEmitter2 = require('../utils/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint undef: true */

var RoomUIObserver = function (_EventEmitter) {
    _inherits(RoomUIObserver, _EventEmitter);

    /**
     * Create a new RoomUIObserver
     * @param  {Syncher} syncher - Syncher provided from the runtime core
     */

    function RoomUIObserver(hypertyURL, bus, configuration) {
        _classCallCheck(this, RoomUIObserver);

        if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
        if (!bus) throw new Error('The MiniBus is a needed parameter');
        if (!configuration) throw new Error('The configuration is a needed parameter');

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RoomUIObserver).call(this));

        var _this = _this2;
        _this._domain = (0, _utils.divideURL)(hypertyURL).domain;

        _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/RoomUIDataSchema';

        var domain = (0, _utils.divideURL)(hypertyURL).domain;

        console.log("My hyperty URL: ", hypertyURL);
        _this.hypertyURL = hypertyURL;
        var syncher = new _Syncher.Syncher(hypertyURL, bus, configuration);
        syncher.onNotification(function (event) {
            _this._onNotification(event);
        });

        _this._syncher = syncher;
        return _this2;
    }

    _createClass(RoomUIObserver, [{
        key: 'subscribe',
        value: function subscribe(objectURL) {
            var _this = this;
            _this._syncher.subscribe(_this._objectDescURL, objectURL).then(function (roomObjtObserver) {

                console.info("subscribed roomObjtObserver:", roomObjtObserver);

                //roomObjtReporter.onAddChild((child) => {
                //    console.warn("child added:", child);
                //    let childData = child.data ? child.data : child.value;
                //    console.warn("child data:", childData);
                //});

                _this.observer = roomObjtObserver;
                roomObjtObserver.onChange('*', function (event) {

                    // Hello World Object was changed
                    console.info('message received:', event);
                    // lets notify the App about the change
                    _this.trigger('onChange', event);
                });
            }).catch(function (reason) {
                console.error(reason);
            });
        }
    }, {
        key: '_onNotification',
        value: function _onNotification(event) {
            var _this = this;
            console.info('Event Received: ', event);
        }
    }, {
        key: 'addChild',
        value: function addChild() {
            var _this = this;
            console.warn("adding child");
            _this.observer.addChild('toggleLight', { "status": "off" });
        }
    }]);

    return RoomUIObserver;
}(_EventEmitter3.default);

function activate(hypertyURL, bus, configuration) {

    return {
        name: 'RoomUIObserver',
        instance: new RoomUIObserver(hypertyURL, bus, configuration)
    };
}
module.exports = exports['default'];

},{"../utils/EventEmitter":3,"../utils/utils":4,"service-framework/dist/Syncher":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

/**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
  }

  _createClass(EventEmitter, [{
    key: "addEventListener",


    /**
     * addEventListener listen for an eventType
     * @param  {string}         eventType - listening for this type of event
     * @param  {Function}       cb        - callback function will be executed when the event it is invoked
     */
    value: function addEventListener(eventType, cb) {
      var _this = this;
      _this[eventType] = cb;
    }

    /**
     * Invoke the eventType
     * @param  {string} eventType - event will be invoked
     * @param  {object} params - parameters will be passed to the addEventListener
     */

  }, {
    key: "trigger",
    value: function trigger(eventType, params) {
      var _this = this;

      if (_this[eventType]) {
        _this[eventType](params);
      }
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divideURL = divideURL;
exports.deepClone = deepClone;
exports.getConfig = getConfig;
exports.getUserMedia = getUserMedia;
exports.serialize = serialize;
exports.getTemplate = getTemplate;
/**
 * Copyright 2016 PT Inovação e Sistemas SA
 * Copyright 2016 INESC-ID
 * Copyright 2016 QUOBIS NETWORKS SL
 * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
 * Copyright 2016 ORANGE SA
 * Copyright 2016 Deutsche Telekom AG
 * Copyright 2016 Apizee
 * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// jshint browser:true, jquery: true
// jshint varstmt: true
/* global Handlebars */

/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
function divideURL(url) {

  // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
  var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
  var subst = '$1,$2,$3';
  var parts = url.replace(re, subst).split(',');

  // If the url has no protocol, the default protocol set is https
  if (parts[0] === url) {
    parts[0] = 'https';
    parts[1] = url;
  }

  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse(JSON.stringify(obj));
}

/**
 * Get the configuration from an json file;
 * @param  {JSONObject} jsonFile
 * @return {object}
 */
function getConfig(JSONObject) {
  console.log('development');
  return JSONObject['development'];
}

/**
 * Get WebRTC API resources
 * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
 * @return {Promise}
 */
function getUserMedia(constraints) {

  return new Promise(function (resolve, reject) {

    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
      resolve(mediaStream);
    }).catch(function (reason) {
      reject(reason);
    });
  });
}

function serialize() {

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }

        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });

    return o;
  };

  $.fn.serializeObjectArray = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }

        o[this.name].push(this.value || '');
      } else {
        if (!o[this.name]) o[this.name] = [];
        o[this.name].push(this.value || '');
      }
    });

    return o;
  };
}

function getTemplate(path, script) {

  return new Promise(function (resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    var templateFile = $.ajax({
      url: path + '.hbs',
      success: function success(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
      },

      fail: function fail(reason) {
        return reason;
      }
    });

    var scriptFile = $.getScript(script);

    var requests = [];
    if (path) requests.push(templateFile);
    if (script) requests.push(scriptFile);

    Promise.all(requests).then(function (result) {
      resolve(Handlebars.templates[name]);
    }).catch(function (reason) {
      reject(reason);
    });
  });
}

},{}]},{},[2])(2)
});