function t(t,n,e,r){Object.defineProperty(t,n,{get:e,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var r={},i={},o=n.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var n=i[t];delete i[t];var e={id:t,exports:{}};return r[t]=e,n.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){i[t]=n},n.parcelRequire3a11=o),o.register("27Lyk",(function(n,e){var r,i;t(n.exports,"register",(()=>r),(t=>r=t)),t(n.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)o[n[e]]=t[n[e]]},i=function(t){var n=o[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.9db102ee.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(t){return t&&t.Math==Math&&t};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof n&&n)||function(){return this}()||Function("return this")();var f,l;f=!(l=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var h,p={};h=!l((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;p=h?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);d=m?function(t){var n=y(this,t);return!!n&&n.enumerable}:g;var b;b=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}};var w,_,N,O={},E={},j=Function.prototype,S=j.call,L=h&&j.bind.bind(S,S),M=(E=h?L:function(t){return function(){return S.apply(t,arguments)}})({}.toString),k=E("".slice);N=function(t){return k(M(t),8,-1)},_=function(t){if("Function"===N(t))return E(t)};var P=Object,x=_("".split);O=l((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==N(t)?x(t,""):P(t)}:P;var T,I;I=function(t){return null==t};var F=TypeError;T=function(t){if(I(t))throw F("Can't call method on "+t);return t},w=function(t){return O(T(t))};var $,D,R,C={},A={},H="object"==typeof document&&document.all,G=(R={all:H,IS_HTMLDDA:void 0===H&&void 0!==H}).all;A=R.IS_HTMLDDA?function(t){return"function"==typeof t||t===G}:function(t){return"function"==typeof t};var q=R.all;C=R.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:A(t)||t===q}:function(t){return"object"==typeof t?null!==t:A(t)};var U,z={},B=function(t){return A(t)?t:void 0};U=function(t,n){return arguments.length<2?B(c[t]):c[t]&&c[t][n]};var Z={};Z=_({}.isPrototypeOf);var W,Y,V,J={};J=U("navigator","userAgent")||"";var K,X,Q=c.process,tt=c.Deno,nt=Q&&Q.versions||tt&&tt.version,et=nt&&nt.v8;et&&(X=(K=et.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&J&&(!(K=J.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=J.match(/Chrome\/(\d+)/))&&(X=+K[1]),V=X,Y=!!Object.getOwnPropertySymbols&&!l((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V&&V<41})),W=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var rt=Object;z=W?function(t){return"symbol"==typeof t}:function(t){var n=U("Symbol");return A(n)&&Z(n.prototype,rt(t))};var it,ot,at,st=String;at=function(t){try{return st(t)}catch(t){return"Object"}};var ct=TypeError;ot=function(t){if(A(t))return t;throw ct(at(t)+" is not a function")},it=function(t,n){var e=t[n];return I(e)?void 0:ot(e)};var ut,ft=TypeError;ut=function(t,n){var e,r;if("string"===n&&A(e=t.toString)&&!C(r=p(e,t)))return r;if(A(e=t.valueOf)&&!C(r=p(e,t)))return r;if("string"!==n&&A(e=t.toString)&&!C(r=p(e,t)))return r;throw ft("Can't convert object to primitive value")};var lt;var ht,pt={},dt=Object.defineProperty;ht=function(t,n){try{dt(c,t,{value:n,configurable:!0,writable:!0})}catch(e){c[t]=n}return n};var vt=c["__core-js_shared__"]||ht("__core-js_shared__",{});pt=vt,(lt=function(t,n){return pt[t]||(pt[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var gt,yt={},mt=Object;gt=function(t){return mt(T(t))};var bt=_({}.hasOwnProperty);yt=Object.hasOwn||function(t,n){return bt(gt(t),n)};var wt,_t=0,Nt=Math.random(),Ot=_(1..toString);wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ot(++_t+Nt,36)};var Et=lt("wks"),jt=c.Symbol,St=jt&&jt.for,Lt=W?jt:jt&&jt.withoutSetter||wt,Mt=TypeError,kt=function(t){if(!yt(Et,t)||!Y&&"string"!=typeof Et[t]){var n="Symbol."+t;Y&&yt(jt,t)?Et[t]=jt[t]:Et[t]=W&&St?St(n):Lt(n)}return Et[t]}("toPrimitive");D=function(t,n){if(!C(t)||z(t))return t;var e,r=it(t,kt);if(r){if(void 0===n&&(n="default"),e=p(r,t,n),!C(e)||z(e))return e;throw Mt("Can't convert object to primitive value")}return void 0===n&&(n="number"),ut(t,n)},$=function(t){var n=D(t,"string");return z(n)?n:n+""};var Pt,xt,Tt=c.document,It=C(Tt)&&C(Tt.createElement);xt=function(t){return It?Tt.createElement(t):{}},Pt=!f&&!l((function(){return 7!=Object.defineProperty(xt("div"),"a",{get:function(){return 7}}).a}));var Ft,$t,Dt=Object.getOwnPropertyDescriptor,Rt=s=f?Dt:function(t,n){if(t=w(t),n=$(n),Pt)try{return Dt(t,n)}catch(t){}if(yt(t,n))return b(!p(d,t,n),t[n])},Ct={};$t=f&&l((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var At,Ht=String,Gt=TypeError;At=function(t){if(C(t))return t;throw Gt(Ht(t)+" is not an object")};var qt=TypeError,Ut=Object.defineProperty,zt=Object.getOwnPropertyDescriptor;Ft=f?$t?function(t,n,e){if(At(t),n=$(n),At(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=zt(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return Ut(t,n,e)}:Ut:function(t,n,e){if(At(t),n=$(n),At(e),Pt)try{return Ut(t,n,e)}catch(t){}if("get"in e||"set"in e)throw qt("Accessors not supported");return"value"in e&&(t[n]=e.value),t},Ct=f?function(t,n,e){return Ft(t,n,b(1,e))}:function(t,n,e){return t[n]=e,t};var Bt,Zt,Wt=Function.prototype,Yt=f&&Object.getOwnPropertyDescriptor,Vt=yt(Wt,"name"),Jt={EXISTS:Vt,PROPER:Vt&&"something"===function(){}.name,CONFIGURABLE:Vt&&(!f||f&&Yt(Wt,"name").configurable)}.CONFIGURABLE,Kt={},Xt=_(Function.toString);A(pt.inspectSource)||(pt.inspectSource=function(t){return Xt(t)}),Kt=pt.inspectSource;var Qt,tn,nn=c.WeakMap;tn=A(nn)&&/native code/.test(String(nn));var en,rn=lt("keys");en=function(t){return rn[t]||(rn[t]=wt(t))};var on={};on={};var an,sn,cn,un=c.TypeError,fn=c.WeakMap;if(tn||pt.state){var ln=pt.state||(pt.state=new fn);ln.get=ln.get,ln.has=ln.has,ln.set=ln.set,an=function(t,n){if(ln.has(t))throw un("Object already initialized");return n.facade=t,ln.set(t,n),n},sn=function(t){return ln.get(t)||{}},cn=function(t){return ln.has(t)}}else{var hn=en("state");on[hn]=!0,an=function(t,n){if(yt(t,hn))throw un("Object already initialized");return n.facade=t,Ct(t,hn,n),n},sn=function(t){return yt(t,hn)?t[hn]:{}},cn=function(t){return yt(t,hn)}}var pn=(Qt={set:an,get:sn,has:cn,enforce:function(t){return cn(t)?sn(t):an(t,{})},getterFor:function(t){return function(n){var e;if(!C(n)||(e=sn(n)).type!==t)throw un("Incompatible receiver, "+t+" required");return e}}}).enforce,dn=Qt.get,vn=Object.defineProperty,gn=f&&!l((function(){return 8!==vn((function(){}),"length",{value:8}).length})),yn=String(String).split("String"),mn=Zt=function(t,n,e){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!yt(t,"name")||Jt&&t.name!==n)&&(f?vn(t,"name",{value:n,configurable:!0}):t.name=n),gn&&e&&yt(e,"arity")&&t.length!==e.arity&&vn(t,"length",{value:e.arity});try{e&&yt(e,"constructor")&&e.constructor?f&&vn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=pn(t);return yt(r,"source")||(r.source=yn.join("string"==typeof n?n:"")),t};Function.prototype.toString=mn((function(){return A(this)&&dn(this).source||Kt(this)}),"toString"),Bt=function(t,n,e,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:n;if(A(e)&&Zt(e,o,r),r.global)i?t[n]=e:ht(n,e);else{try{r.unsafe?t[n]&&(i=!0):delete t[n]}catch(t){}i?t[n]=e:Ft(t,n,{value:e,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var bn,wn,_n,Nn,On,En={},jn={},Sn=Math.ceil,Ln=Math.floor;jn=Math.trunc||function(t){var n=+t;return(n>0?Ln:Sn)(n)},On=function(t){var n=+t;return n!=n||0===n?0:jn(n)};var Mn=Math.max,kn=Math.min;Nn=function(t,n){var e=On(t);return e<0?Mn(e+n,0):kn(e,n)};var Pn,xn,Tn=Math.min;xn=function(t){return t>0?Tn(On(t),9007199254740991):0},Pn=function(t){return xn(t.length)};var In=function(t){return function(n,e,r){var i,o=w(n),a=Pn(o),s=Nn(r,a);if(t&&e!=e){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===e)return t||s||0;return!t&&-1}},Fn={includes:In(!0),indexOf:In(!1)}.indexOf,$n=_([].push);_n=function(t,n){var e,r=w(t),i=0,o=[];for(e in r)!yt(on,e)&&yt(r,e)&&$n(o,e);for(;n.length>i;)yt(r,e=n[i++])&&(~Fn(o,e)||$n(o,e));return o};var Dn,Rn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");wn=Object.getOwnPropertyNames||function(t){return _n(t,Rn)},Dn=Object.getOwnPropertySymbols;var Cn=_([].concat);En=U("Reflect","ownKeys")||function(t){var n=wn(At(t));return Dn?Cn(n,Dn(t)):n},bn=function(t,n,e){for(var r=En(n),i=Ft,o=s,a=0;a<r.length;a++){var c=r[a];yt(t,c)||e&&yt(e,c)||i(t,c,o(n,c))}};var An={},Hn=/#|\.prototype\./,Gn=function(t,n){var e=Un[qn(t)];return e==Bn||e!=zn&&(A(n)?l(n):!!n)},qn=Gn.normalize=function(t){return String(t).replace(Hn,".").toLowerCase()},Un=Gn.data={},zn=Gn.NATIVE="N",Bn=Gn.POLYFILL="P";An=Gn,a=function(t,n){var e,r,i,o,a,s=t.target,u=t.global,f=t.stat;if(e=u?c:f?c[s]||ht(s,{}):(c[s]||{}).prototype)for(r in n){if(o=n[r],i=t.dontCallGetSet?(a=Rt(e,r))&&a.value:e[r],!An(u?r:s+(f?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;bn(o,i)}(t.sham||i&&i.sham)&&Ct(o,"sham",!0),Bt(e,r,o,t)}};var Zn,Wn={},Yn=Function.prototype,Vn=Yn.apply,Jn=Yn.call;Wn="object"==typeof Reflect&&Reflect.apply||(h?Jn.bind(Vn):function(){return Jn.apply(Vn,arguments)});var Kn,Xn=_(_.bind);Kn=function(t,n){return ot(t),void 0===n?t:h?Xn(t,n):function(){return t.apply(n,arguments)}};var Qn={};Qn=U("document","documentElement");var te={};te=_([].slice);var ne,ee=TypeError;ne=function(t,n){if(t<n)throw ee("Not enough arguments");return t};var re;re=/(?:ipad|iphone|ipod).*applewebkit/i.test(J);var ie;ie="process"==N(c.process);var oe,ae,se,ce,ue=c.setImmediate,fe=c.clearImmediate,le=c.process,he=c.Dispatch,pe=c.Function,de=c.MessageChannel,ve=c.String,ge=0,ye={};try{oe=c.location}catch(t){}var me=function(t){if(yt(ye,t)){var n=ye[t];delete ye[t],n()}},be=function(t){return function(){me(t)}},we=function(t){me(t.data)},_e=function(t){c.postMessage(ve(t),oe.protocol+"//"+oe.host)};ue&&fe||(ue=function(t){ne(arguments.length,1);var n=A(t)?t:pe(t),e=te(arguments,1);return ye[++ge]=function(){Wn(n,void 0,e)},ae(ge),ge},fe=function(t){delete ye[t]},ie?ae=function(t){le.nextTick(be(t))}:he&&he.now?ae=function(t){he.now(be(t))}:de&&!re?(ce=(se=new de).port2,se.port1.onmessage=we,ae=Kn(ce.postMessage,ce)):c.addEventListener&&A(c.postMessage)&&!c.importScripts&&oe&&"file:"!==oe.protocol&&!l(_e)?(ae=_e,c.addEventListener("message",we,!1)):ae="onreadystatechange"in xt("script")?function(t){Qn.appendChild(xt("script")).onreadystatechange=function(){Qn.removeChild(this),me(t)}}:function(t){setTimeout(be(t),0)});var Ne=(Zn={set:ue,clear:fe}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==Ne},{clearImmediate:Ne});var Oe=Zn.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==Oe},{setImmediate:Oe});var Ee=function(t){var n,e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof g?n:g,a=Object.create(o.prototype),s=new k(r||[]);return i(a,"_invoke",{value:j(t,e,s)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(P([])));_&&_!==e&&r.call(_,a)&&(b=_);var N=m.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,a,s)}),(function(t){e("throw",t,a,s)})):n.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new n((function(n,i){e(t,r,n,i)}))}return o=o?o.then(i,i):i()}})}function j(t,n,e){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return x()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var s=S(a,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===h)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var c=l(t,n,e);if("normal"===c.type){if(r=e.done?d:"suspendedYield",c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=d,e.method="throw",e.arg=c.arg)}}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function M(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:n,done:!0}}return y.prototype=m,i(N,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(N),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,s,(function(){return this})),t.AsyncIterator=E,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new E(f(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(N),u(N,c,"Generator"),u(N,a,(function(){return this})),u(N,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;M(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}({});try{regeneratorRuntime=Ee}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Ee:Function("r","regeneratorRuntime = r")(Ee)}const je=async function(t){try{const e=await Promise.race([fetch(t),(n=10,new Promise((function(t,e){setTimeout((function(){e(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),r=await e.json();if(!e.ok)throw new Error(`${r.message}`);return r}catch(t){throw t}var n},Se={recipe:{}},Le=async function(t){try{const n=await je(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:e}=n.data;Se.recipe={id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients},console.log(Se.recipe)}catch(t){console.log(`${t} 💥`)}};var Me;Me=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var ke={};
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/!function(t){var n={s:1,n:0,d:1};function e(t,n){if(isNaN(t=parseInt(t,10)))throw s.InvalidParameter;return t*n}function r(t,n){if(0===n)throw s.DivisionByZero;var e=Object.create(s.prototype);e.s=t<0?-1:1;var r=a(t=t<0?-t:t,n);return e.n=t/r,e.d=n/r,e}function i(t){for(var n={},e=t,r=2,i=4;i<=e;){for(;e%r==0;)e/=r,n[r]=(n[r]||0)+1;i+=1+2*r++}return e!==t?e>1&&(n[e]=(n[e]||0)+1):n[t]=(n[t]||0)+1,n}var o=function(t,r){var i,o=0,a=1,c=1,u=0,f=0,l=0,h=1,p=1,d=0,v=1,g=1,y=1,m=1e7;if(null==t);else if(void 0!==r){if(c=(o=t)*(a=r),o%1!=0||a%1!=0)throw s.NonIntegerParameter}else switch(typeof t){case"object":if("d"in t&&"n"in t)o=t.n,a=t.d,"s"in t&&(o*=t.s);else{if(!(0 in t))throw s.InvalidParameter;o=t[0],1 in t&&(a=t[1])}c=o*a;break;case"number":if(t<0&&(c=t,t=-t),t%1==0)o=t;else if(t>0){for(t>=1&&(t/=p=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));v<=m&&y<=m;){if(t===(i=(d+g)/(v+y))){v+y<=m?(o=d+g,a=v+y):y>v?(o=g,a=y):(o=d,a=v);break}t>i?(d+=g,v+=y):(g+=d,y+=v),v>m?(o=g,a=y):(o=d,a=v)}o*=p}else(isNaN(t)||isNaN(r))&&(a=o=NaN);break;case"string":if(null===(v=t.match(/\d+|./g)))throw s.InvalidParameter;if("-"===v[d]?(c=-1,d++):"+"===v[d]&&d++,v.length===d+1?f=e(v[d++],c):"."===v[d+1]||"."===v[d]?("."!==v[d]&&(u=e(v[d++],c)),(++d+1===v.length||"("===v[d+1]&&")"===v[d+3]||"'"===v[d+1]&&"'"===v[d+3])&&(f=e(v[d],c),h=Math.pow(10,v[d].length),d++),("("===v[d]&&")"===v[d+2]||"'"===v[d]&&"'"===v[d+2])&&(l=e(v[d+1],c),p=Math.pow(10,v[d+1].length)-1,d+=3)):"/"===v[d+1]||":"===v[d+1]?(f=e(v[d],c),h=e(v[d+2],1),d+=3):"/"===v[d+3]&&" "===v[d+1]&&(u=e(v[d],c),f=e(v[d+2],c),h=e(v[d+4],1),d+=5),v.length<=d){c=o=l+(a=h*p)*u+p*f;break}default:throw s.InvalidParameter}if(0===a)throw s.DivisionByZero;n.s=c<0?-1:1,n.n=Math.abs(o),n.d=Math.abs(a)};function a(t,n){if(!t)return n;if(!n)return t;for(;;){if(!(t%=n))return n;if(!(n%=t))return t}}function s(t,e){if(o(t,e),!(this instanceof s))return r(n.s*n.n,n.d);t=a(n.d,n.n),this.s=n.s,this.n=n.n/t,this.d=n.d/t}s.DivisionByZero=new Error("Division by Zero"),s.InvalidParameter=new Error("Invalid argument"),s.NonIntegerParameter=new Error("Parameters must be integer"),s.prototype={s:1,n:0,d:1,abs:function(){return r(this.n,this.d)},neg:function(){return r(-this.s*this.n,this.d)},add:function(t,e){return o(t,e),r(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(t,e){return o(t,e),r(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(t,e){return o(t,e),r(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(t,e){return o(t,e),r(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return r(this.s*this.n,this.d)},mod:function(t,e){if(isNaN(this.n)||isNaN(this.d))return new s(NaN);if(void 0===t)return r(this.s*this.n%this.d,1);if(o(t,e),0===n.n&&0===this.d)throw s.DivisionByZero;return r(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(t,e){return o(t,e),r(a(n.n,this.n)*a(n.d,this.d),n.d*this.d)},lcm:function(t,e){return o(t,e),0===n.n&&0===this.n?r(0,1):r(n.n*this.n,a(n.n,this.n)*a(n.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):r(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return r(this.s*this.d,this.n)},pow:function(t,e){if(o(t,e),1===n.d)return n.s<0?r(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):r(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var a=i(this.n),s=i(this.d),c=1,u=1;for(var f in a)if("1"!==f){if("0"===f){c=0;break}if(a[f]*=n.n,a[f]%n.d!=0)return null;a[f]/=n.d,c*=Math.pow(f,a[f])}for(var f in s)if("1"!==f){if(s[f]*=n.n,s[f]%n.d!=0)return null;s[f]/=n.d,u*=Math.pow(f,s[f])}return n.s<0?r(u,c):r(c,u)},equals:function(t,e){return o(t,e),this.s*this.n*n.d==n.s*n.n*this.d},compare:function(t,e){o(t,e);var r=this.s*this.n*n.d-n.s*n.n*this.d;return(0<r)-(r<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;t=t||.001;for(var n=this.abs(),e=n.toContinued(),i=1;i<e.length;i++){for(var o=r(e[i-1],1),a=i-2;a>=0;a--)o=o.inverse().add(e[a]);if(o.sub(n).abs().valueOf()<t)return o.mul(this.s)}return this},divisible:function(t,e){return o(t,e),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var n,e="",r=this.n,i=this.d;return this.s<0&&(e+="-"),1===i?e+=r:(t&&(n=Math.floor(r/i))>0&&(e+=n,e+=" ",r%=i),e+=r,e+="/",e+=i),e},toLatex:function(t){var n,e="",r=this.n,i=this.d;return this.s<0&&(e+="-"),1===i?e+=r:(t&&(n=Math.floor(r/i))>0&&(e+=n,r%=i),e+="\\frac{",e+=r,e+="}{",e+=i,e+="}"),e},toContinued:function(){var t,n=this.n,e=this.d,r=[];if(isNaN(n)||isNaN(e))return r;do{r.push(Math.floor(n/e)),t=n%e,n=e,e=t}while(1!==n);return r},toString:function(t){var n=this.n,e=this.d;if(isNaN(n)||isNaN(e))return"NaN";t=t||15;var r=function(t,n){for(;n%2==0;n/=2);for(;n%5==0;n/=5);if(1===n)return 0;for(var e=10%n,r=1;1!==e;r++)if(e=10*e%n,r>2e3)return 0;return r}(0,e),i=function(t,n,e){for(var r=1,i=function(t,n,e){for(var r=1;n>0;t=t*t%e,n>>=1)1&n&&(r=r*t%e);return r}(10,e,n),o=0;o<300;o++){if(r===i)return o;r=10*r%n,i=10*i%n}return 0}(0,e,r),o=this.s<0?"-":"";if(o+=n/e|0,n%=e,(n*=10)&&(o+="."),r){for(var a=i;a--;)o+=n/e|0,n%=e,n*=10;o+="(";for(a=r;a--;)o+=n/e|0,n%=e,n*=10;o+=")"}else for(a=t;n&&a--;)o+=n/e|0,n%=e,n*=10;return o}},"function"==typeof define&&define.amd?define([],(function(){return s})):(Object.defineProperty(s,"__esModule",{value:!0}),s.default=s,s.Fraction=s,ke=s)}(),console.log(ke.Fraction);var Pe=new class{#t=document.querySelector(".recipe");#n;render(t){this.#n=t;const n=this.#e();this.#r(),this.#t.insertAdjacentHTML("afterbegin",n)}#r(){this.#t.innerHTML=""}renderSpinner=function(){const t=`\n          <div class="spinner">\n            <svg>\n              <use href="${e(Me)}#icon-loader"></use>\n            </svg>\n          </div> \n      `;this.#t.innerHTML="",this.#t.insertAdjacentHTML("afterbegin",t)};addHandlerRender(t){["hashchange","load"].forEach((n=>window.addEventListener(n,t)))}#e(){return`\n        <figure class="recipe__fig">\n          <img src="${this.#n.image}" alt="${this.#n.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this.#n.title}</span>\n          </h1>\n        </figure>\n  \n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${e(Me)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this.#n.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${e(Me)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this.#n.servings}</span>\n            <span class="recipe__info-text">servings</span>\n  \n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${e(Me)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${e(Me)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n  \n          <div class="recipe__user-generated">\n            <svg>\n              <use href="${e(Me)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round">\n            <svg class="">\n              <use href="${e(Me)}#icon-bookmark-fill"></use>\n            </svg>\n          </button>\n        </div>\n  \n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n  \n          ${this.#n.ingredients.map(this.#i).join("")}\n            \n          </ul>\n        </div>\n  \n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this.#n.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this.#n.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${e(Me)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n        `}#i(t){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${e(Me)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${t.quantity?t.quantity:""}\n      </div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.description}\n      </div>\n    </li>\n  `}};document.querySelector(".recipe");const xe=async function(){try{const t=window.location.hash.slice(1);if(!t)return;Pe.renderSpinner(),await Le(t),Pe.render(Se.recipe)}catch(t){console.log(t)}};Pe.addHandlerRender(xe);
//# sourceMappingURL=index.9db102ee.js.map
