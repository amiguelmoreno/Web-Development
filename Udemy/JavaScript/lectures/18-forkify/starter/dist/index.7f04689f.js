function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,n){var r,i;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.7f04689f.js","eyyUD":"icons.c14567a0.svg"}'));var a,c,u={},s=function(t){return t&&t.Math==Math&&t};u=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var v,d=Function.prototype.call;h=p?d.bind(d):function(){return d.apply(d,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,b=y&&!g.call({1:2},1);v=b?function(t){var e=y(this,t);return!!e&&e.enumerable}:g;var m;m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var w,_,O,S={},E={},j=Function.prototype,L=j.call,x=p&&j.bind.bind(L,L),k=(E=p?x:function(t){return function(){return L.apply(t,arguments)}})({}.toString),T=E("".slice);O=function(t){return T(k(t),8,-1)},_=function(t){if("Function"===O(t))return E(t)};var P=Object,M=_("".split);S=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?M(t,""):P(t)}:P;var I,$;$=function(t){return null==t};var F=TypeError;I=function(t){if($(t))throw F("Can't call method on "+t);return t},w=function(t){return S(I(t))};var D,N,R,C={},A={},H="object"==typeof document&&document.all,G=(R={all:H,IS_HTMLDDA:void 0===H&&void 0!==H}).all;A=R.IS_HTMLDDA?function(t){return"function"==typeof t||t===G}:function(t){return"function"==typeof t};var U=R.all;C=R.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:A(t)||t===U}:function(t){return"object"==typeof t?null!==t:A(t)};var q,z={},W=function(t){return A(t)?t:void 0};q=function(t,e){return arguments.length<2?W(u[t]):u[t]&&u[t][e]};var Y={};Y=_({}.isPrototypeOf);var B,V,J,K={};K=q("navigator","userAgent")||"";var X,Q,Z=u.process,tt=u.Deno,et=Z&&Z.versions||tt&&tt.version,nt=et&&et.v8;nt&&(Q=(X=nt.split("."))[0]>0&&X[0]<4?1:+(X[0]+X[1])),!Q&&K&&(!(X=K.match(/Edge\/(\d+)/))||X[1]>=74)&&(X=K.match(/Chrome\/(\d+)/))&&(Q=+X[1]),J=Q,V=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&J&&J<41})),B=V&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var rt=Object;z=B?function(t){return"symbol"==typeof t}:function(t){var e=q("Symbol");return A(e)&&Y(e.prototype,rt(t))};var it,ot,at,ct=String;at=function(t){try{return ct(t)}catch(t){return"Object"}};var ut=TypeError;ot=function(t){if(A(t))return t;throw ut(at(t)+" is not a function")},it=function(t,e){var n=t[e];return $(n)?void 0:ot(n)};var st,lt=TypeError;st=function(t,e){var n,r;if("string"===e&&A(n=t.toString)&&!C(r=h(n,t)))return r;if(A(n=t.valueOf)&&!C(r=h(n,t)))return r;if("string"!==e&&A(n=t.toString)&&!C(r=h(n,t)))return r;throw lt("Can't convert object to primitive value")};var ft;var pt,ht={},vt=Object.defineProperty;pt=function(t,e){try{vt(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e};var dt=u["__core-js_shared__"]||pt("__core-js_shared__",{});ht=dt,(ft=function(t,e){return ht[t]||(ht[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var gt,yt={},bt=Object;gt=function(t){return bt(I(t))};var mt=_({}.hasOwnProperty);yt=Object.hasOwn||function(t,e){return mt(gt(t),e)};var wt,_t=0,Ot=Math.random(),St=_(1..toString);wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+St(++_t+Ot,36)};var Et=ft("wks"),jt=u.Symbol,Lt=jt&&jt.for,xt=B?jt:jt&&jt.withoutSetter||wt,kt=TypeError,Tt=function(t){if(!yt(Et,t)||!V&&"string"!=typeof Et[t]){var e="Symbol."+t;V&&yt(jt,t)?Et[t]=jt[t]:Et[t]=B&&Lt?Lt(e):xt(e)}return Et[t]}("toPrimitive");N=function(t,e){if(!C(t)||z(t))return t;var n,r=it(t,Tt);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!C(n)||z(n))return n;throw kt("Can't convert object to primitive value")}return void 0===e&&(e="number"),st(t,e)},D=function(t){var e=N(t,"string");return z(e)?e:e+""};var Pt,Mt,It=u.document,$t=C(It)&&C(It.createElement);Mt=function(t){return $t?It.createElement(t):{}},Pt=!l&&!f((function(){return 7!=Object.defineProperty(Mt("div"),"a",{get:function(){return 7}}).a}));var Ft,Dt,Nt=Object.getOwnPropertyDescriptor,Rt=c=l?Nt:function(t,e){if(t=w(t),e=D(e),Pt)try{return Nt(t,e)}catch(t){}if(yt(t,e))return m(!h(v,t,e),t[e])},Ct={};Dt=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var At,Ht=String,Gt=TypeError;At=function(t){if(C(t))return t;throw Gt(Ht(t)+" is not an object")};var Ut=TypeError,qt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor;Ft=l?Dt?function(t,e,n){if(At(t),e=D(e),At(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=zt(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return qt(t,e,n)}:qt:function(t,e,n){if(At(t),e=D(e),At(n),Pt)try{return qt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ut("Accessors not supported");return"value"in n&&(t[e]=n.value),t},Ct=l?function(t,e,n){return Ft(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t};var Wt,Yt,Bt=Function.prototype,Vt=l&&Object.getOwnPropertyDescriptor,Jt=yt(Bt,"name"),Kt={EXISTS:Jt,PROPER:Jt&&"something"===function(){}.name,CONFIGURABLE:Jt&&(!l||l&&Vt(Bt,"name").configurable)}.CONFIGURABLE,Xt={},Qt=_(Function.toString);A(ht.inspectSource)||(ht.inspectSource=function(t){return Qt(t)}),Xt=ht.inspectSource;var Zt,te,ee=u.WeakMap;te=A(ee)&&/native code/.test(String(ee));var ne,re=ft("keys");ne=function(t){return re[t]||(re[t]=wt(t))};var ie={};ie={};var oe,ae,ce,ue=u.TypeError,se=u.WeakMap;if(te||ht.state){var le=ht.state||(ht.state=new se);le.get=le.get,le.has=le.has,le.set=le.set,oe=function(t,e){if(le.has(t))throw ue("Object already initialized");return e.facade=t,le.set(t,e),e},ae=function(t){return le.get(t)||{}},ce=function(t){return le.has(t)}}else{var fe=ne("state");ie[fe]=!0,oe=function(t,e){if(yt(t,fe))throw ue("Object already initialized");return e.facade=t,Ct(t,fe,e),e},ae=function(t){return yt(t,fe)?t[fe]:{}},ce=function(t){return yt(t,fe)}}var pe=(Zt={set:oe,get:ae,has:ce,enforce:function(t){return ce(t)?ae(t):oe(t,{})},getterFor:function(t){return function(e){var n;if(!C(e)||(n=ae(e)).type!==t)throw ue("Incompatible receiver, "+t+" required");return n}}}).enforce,he=Zt.get,ve=Object.defineProperty,de=l&&!f((function(){return 8!==ve((function(){}),"length",{value:8}).length})),ge=String(String).split("String"),ye=Yt=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!yt(t,"name")||Kt&&t.name!==e)&&(l?ve(t,"name",{value:e,configurable:!0}):t.name=e),de&&n&&yt(n,"arity")&&t.length!==n.arity&&ve(t,"length",{value:n.arity});try{n&&yt(n,"constructor")&&n.constructor?l&&ve(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=pe(t);return yt(r,"source")||(r.source=ge.join("string"==typeof e?e:"")),t};Function.prototype.toString=ye((function(){return A(this)&&he(this).source||Xt(this)}),"toString"),Wt=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(A(n)&&Yt(n,o,r),r.global)i?t[e]=n:pt(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:Ft(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var be,me,we,_e,Oe,Se={},Ee={},je=Math.ceil,Le=Math.floor;Ee=Math.trunc||function(t){var e=+t;return(e>0?Le:je)(e)},Oe=function(t){var e=+t;return e!=e||0===e?0:Ee(e)};var xe=Math.max,ke=Math.min;_e=function(t,e){var n=Oe(t);return n<0?xe(n+e,0):ke(n,e)};var Te,Pe,Me=Math.min;Pe=function(t){return t>0?Me(Oe(t),9007199254740991):0},Te=function(t){return Pe(t.length)};var Ie=function(t){return function(e,n,r){var i,o=w(e),a=Te(o),c=_e(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},$e={includes:Ie(!0),indexOf:Ie(!1)}.indexOf,Fe=_([].push);we=function(t,e){var n,r=w(t),i=0,o=[];for(n in r)!yt(ie,n)&&yt(r,n)&&Fe(o,n);for(;e.length>i;)yt(r,n=e[i++])&&(~$e(o,n)||Fe(o,n));return o};var De,Ne=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");me=Object.getOwnPropertyNames||function(t){return we(t,Ne)},De=Object.getOwnPropertySymbols;var Re=_([].concat);Se=q("Reflect","ownKeys")||function(t){var e=me(At(t));return De?Re(e,De(t)):e},be=function(t,e,n){for(var r=Se(e),i=Ft,o=c,a=0;a<r.length;a++){var u=r[a];yt(t,u)||n&&yt(n,u)||i(t,u,o(e,u))}};var Ce={},Ae=/#|\.prototype\./,He=function(t,e){var n=Ue[Ge(t)];return n==ze||n!=qe&&(A(e)?f(e):!!e)},Ge=He.normalize=function(t){return String(t).replace(Ae,".").toLowerCase()},Ue=He.data={},qe=He.NATIVE="N",ze=He.POLYFILL="P";Ce=He,a=function(t,e){var n,r,i,o,a,c=t.target,s=t.global,l=t.stat;if(n=s?u:l?u[c]||pt(c,{}):(u[c]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(a=Rt(n,r))&&a.value:n[r],!Ce(s?r:c+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;be(o,i)}(t.sham||i&&i.sham)&&Ct(o,"sham",!0),Wt(n,r,o,t)}};var We,Ye={},Be=Function.prototype,Ve=Be.apply,Je=Be.call;Ye="object"==typeof Reflect&&Reflect.apply||(p?Je.bind(Ve):function(){return Je.apply(Ve,arguments)});var Ke,Xe=_(_.bind);Ke=function(t,e){return ot(t),void 0===e?t:p?Xe(t,e):function(){return t.apply(e,arguments)}};var Qe={};Qe=q("document","documentElement");var Ze={};Ze=_([].slice);var tn,en=TypeError;tn=function(t,e){if(t<e)throw en("Not enough arguments");return t};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(K);var rn;rn="process"==O(u.process);var on,an,cn,un,sn=u.setImmediate,ln=u.clearImmediate,fn=u.process,pn=u.Dispatch,hn=u.Function,vn=u.MessageChannel,dn=u.String,gn=0,yn={};try{on=u.location}catch(t){}var bn=function(t){if(yt(yn,t)){var e=yn[t];delete yn[t],e()}},mn=function(t){return function(){bn(t)}},wn=function(t){bn(t.data)},_n=function(t){u.postMessage(dn(t),on.protocol+"//"+on.host)};sn&&ln||(sn=function(t){tn(arguments.length,1);var e=A(t)?t:hn(t),n=Ze(arguments,1);return yn[++gn]=function(){Ye(e,void 0,n)},an(gn),gn},ln=function(t){delete yn[t]},rn?an=function(t){fn.nextTick(mn(t))}:pn&&pn.now?an=function(t){pn.now(mn(t))}:vn&&!nn?(un=(cn=new vn).port2,cn.port1.onmessage=wn,an=Ke(un.postMessage,un)):u.addEventListener&&A(u.postMessage)&&!u.importScripts&&on&&"file:"!==on.protocol&&!f(_n)?(an=_n,u.addEventListener("message",wn,!1)):an="onreadystatechange"in Mt("script")?function(t){Qe.appendChild(Mt("script")).onreadystatechange=function(){Qe.removeChild(this),bn(t)}}:function(t){setTimeout(mn(t),0)});var On=(We={set:sn,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:u.clearImmediate!==On},{clearImmediate:On});var Sn=We.set;a({global:!0,bind:!0,enumerable:!0,forced:u.setImmediate!==Sn},{setImmediate:Sn});var En=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new T(r||[]);return i(a,"_invoke",{value:j(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",v="completed",d={};function g(){}function y(){}function b(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(P([])));_&&_!==n&&r.call(_,a)&&(m=_);var O=b.prototype=g.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,a,c){var u=f(t[i],t,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}})}function j(t,e,n){var r=p;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?v:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=f(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:e,done:!0}}return y.prototype=b,i(O,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},S(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(O),s(O,u,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}({});try{regeneratorRuntime=En}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=En:Function("r","regeneratorRuntime = r")(En)}const jn={recipe:{}};var Ln;Ln=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var xn=new class{#t=document.querySelector(".recipe");#e;render(t){this.#e=t;const e=this.#n();this.#r(),this.#t.insertAdjacentHTML("afterbegin",e)}#r(){this.#t.innerHTML=""}renderSpinner=function(){const t=`\n          <div class="spinner">\n            <svg>\n              <use href="${n(Ln)}#icon-loader"></use>\n            </svg>\n          </div> \n      `;this.#t.innerHTML="",this.#t.insertAdjacentHTML("afterbegin",t)};#n(){return`\n        <figure class="recipe__fig">\n          <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this.#e.title}</span>\n          </h1>\n        </figure>\n  \n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Ln)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this.#e.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Ln)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this.#e.servings}</span>\n            <span class="recipe__info-text">servings</span>\n  \n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${n(Ln)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${n(Ln)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n  \n          <div class="recipe__user-generated">\n            <svg>\n              <use href="${n(Ln)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round">\n            <svg class="">\n              <use href="${n(Ln)}#icon-bookmark-fill"></use>\n            </svg>\n          </button>\n        </div>\n  \n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n  \n          ${this.#e.ingredients.map(this.#i).join("")}\n            \n          </ul>\n        </div>\n  \n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this.#e.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this.#e.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(Ln)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n        `}#i(t){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(Ln)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${t.quantity}\n      </div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.description}\n      </div>\n    </li>\n  `}};document.querySelector(".recipe");const kn=async function(){try{const t=window.location.hash.slice(1);if(!t)return;xn.renderSpinner(),await async function(t){try{const e=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),n=await e.json();if(!e.ok)throw new Error(`${n.message}`);const{recipe:r}=n.data;jn.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},console.log(jn.recipe)}catch(t){alert(t)}}(t),xn.render(jn.recipe)}catch(t){alert(t)}};kn(),["hashchange","load"].forEach((t=>window.addEventListener(t,kn)));
//# sourceMappingURL=index.7f04689f.js.map