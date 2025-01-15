(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var od={exports:{}},Ca={},ad={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function QE(){if(ag)return Pe;ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,$={};function z(L,K,he){this.props=L,this.context=K,this.refs=$,this.updater=he||V}z.prototype.isReactComponent={},z.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function W(){}W.prototype=z.prototype;function Y(L,K,he){this.props=L,this.context=K,this.refs=$,this.updater=he||V}var ne=Y.prototype=new W;ne.constructor=Y,F(ne,z.prototype),ne.isPureReactComponent=!0;var ce=Array.isArray,Ie=Object.prototype.hasOwnProperty,Ee={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(L,K,he){var Se,Ae={},xe=null,be=null;if(K!=null)for(Se in K.ref!==void 0&&(be=K.ref),K.key!==void 0&&(xe=""+K.key),K)Ie.call(K,Se)&&!N.hasOwnProperty(Se)&&(Ae[Se]=K[Se]);var Fe=arguments.length-2;if(Fe===1)Ae.children=he;else if(1<Fe){for(var $e=Array(Fe),yt=0;yt<Fe;yt++)$e[yt]=arguments[yt+2];Ae.children=$e}if(L&&L.defaultProps)for(Se in Fe=L.defaultProps,Fe)Ae[Se]===void 0&&(Ae[Se]=Fe[Se]);return{$$typeof:r,type:L,key:xe,ref:be,props:Ae,_owner:Ee.current}}function A(L,K){return{$$typeof:r,type:L.type,key:K,ref:L.ref,props:L.props,_owner:L._owner}}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function x(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return K[he]})}var O=/\/+/g;function P(L,K){return typeof L=="object"&&L!==null&&L.key!=null?x(""+L.key):K.toString(36)}function nt(L,K,he,Se,Ae){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case r:case e:be=!0}}if(be)return be=L,Ae=Ae(be),L=Se===""?"."+P(be,0):Se,ce(Ae)?(he="",L!=null&&(he=L.replace(O,"$&/")+"/"),nt(Ae,K,he,"",function(yt){return yt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,he+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+L)),K.push(Ae)),1;if(be=0,Se=Se===""?".":Se+":",ce(L))for(var Fe=0;Fe<L.length;Fe++){xe=L[Fe];var $e=Se+P(xe,Fe);be+=nt(xe,K,he,$e,Ae)}else if($e=R(L),typeof $e=="function")for(L=$e.call(L),Fe=0;!(xe=L.next()).done;)xe=xe.value,$e=Se+P(xe,Fe++),be+=nt(xe,K,he,$e,Ae);else if(xe==="object")throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return be}function Dt(L,K,he){if(L==null)return L;var Se=[],Ae=0;return nt(L,Se,"","",function(xe){return K.call(he,xe,Ae++)}),Se}function xt(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var je={current:null},te={transition:null},fe={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:te,ReactCurrentOwner:Ee};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Dt,forEach:function(L,K,he){Dt(L,function(){K.apply(this,arguments)},he)},count:function(L){var K=0;return Dt(L,function(){K++}),K},toArray:function(L){return Dt(L,function(K){return K})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Pe.Component=z,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Y,Pe.StrictMode=s,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Pe.act=ie,Pe.cloneElement=function(L,K,he){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Se=F({},L.props),Ae=L.key,xe=L.ref,be=L._owner;if(K!=null){if(K.ref!==void 0&&(xe=K.ref,be=Ee.current),K.key!==void 0&&(Ae=""+K.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for($e in K)Ie.call(K,$e)&&!N.hasOwnProperty($e)&&(Se[$e]=K[$e]===void 0&&Fe!==void 0?Fe[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Se.children=he;else if(1<$e){Fe=Array($e);for(var yt=0;yt<$e;yt++)Fe[yt]=arguments[yt+2];Se.children=Fe}return{$$typeof:r,type:L.type,key:Ae,ref:xe,props:Se,_owner:be}},Pe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Pe.createElement=I,Pe.createFactory=function(L){var K=I.bind(null,L);return K.type=L,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(L){return{$$typeof:f,render:L}},Pe.isValidElement=k,Pe.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:xt}},Pe.memo=function(L,K){return{$$typeof:y,type:L,compare:K===void 0?null:K}},Pe.startTransition=function(L){var K=te.transition;te.transition={};try{L()}finally{te.transition=K}},Pe.unstable_act=ie,Pe.useCallback=function(L,K){return je.current.useCallback(L,K)},Pe.useContext=function(L){return je.current.useContext(L)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(L){return je.current.useDeferredValue(L)},Pe.useEffect=function(L,K){return je.current.useEffect(L,K)},Pe.useId=function(){return je.current.useId()},Pe.useImperativeHandle=function(L,K,he){return je.current.useImperativeHandle(L,K,he)},Pe.useInsertionEffect=function(L,K){return je.current.useInsertionEffect(L,K)},Pe.useLayoutEffect=function(L,K){return je.current.useLayoutEffect(L,K)},Pe.useMemo=function(L,K){return je.current.useMemo(L,K)},Pe.useReducer=function(L,K,he){return je.current.useReducer(L,K,he)},Pe.useRef=function(L){return je.current.useRef(L)},Pe.useState=function(L){return je.current.useState(L)},Pe.useSyncExternalStore=function(L,K,he){return je.current.useSyncExternalStore(L,K,he)},Pe.useTransition=function(){return je.current.useTransition()},Pe.version="18.3.1",Pe}var lg;function Zd(){return lg||(lg=1,ad.exports=QE()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function YE(){if(ug)return Ca;ug=1;var r=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var w,T={},R=null,V=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(V=p.ref);for(w in p)s.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:f,key:R,ref:V,props:T,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=h,Ca.jsxs=h,Ca}var cg;function XE(){return cg||(cg=1,od.exports=YE()),od.exports}var Re=XE(),q=Zd(),Su={},ld={exports:{}},Jt={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function JE(){return hg||(hg=1,function(r){function e(te,fe){var ie=te.length;te.push(fe);e:for(;0<ie;){var L=ie-1>>>1,K=te[L];if(0<o(K,fe))te[L]=fe,te[ie]=K,ie=L;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var fe=te[0],ie=te.pop();if(ie!==fe){te[0]=ie;e:for(var L=0,K=te.length,he=K>>>1;L<he;){var Se=2*(L+1)-1,Ae=te[Se],xe=Se+1,be=te[xe];if(0>o(Ae,ie))xe<K&&0>o(be,Ae)?(te[L]=be,te[xe]=ie,L=xe):(te[L]=Ae,te[Se]=ie,L=Se);else if(xe<K&&0>o(be,ie))te[L]=be,te[xe]=ie,L=xe;else break e}}return fe}function o(te,fe){var ie=te.sortIndex-fe.sortIndex;return ie!==0?ie:te.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var p=[],y=[],w=1,T=null,R=3,V=!1,F=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(te){for(var fe=t(y);fe!==null;){if(fe.callback===null)s(y);else if(fe.startTime<=te)s(y),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(y)}}function ce(te){if($=!1,ne(te),!F)if(t(p)!==null)F=!0,xt(Ie);else{var fe=t(y);fe!==null&&je(ce,fe.startTime-te)}}function Ie(te,fe){F=!1,$&&($=!1,W(I),I=-1),V=!0;var ie=R;try{for(ne(fe),T=t(p);T!==null&&(!(T.expirationTime>fe)||te&&!x());){var L=T.callback;if(typeof L=="function"){T.callback=null,R=T.priorityLevel;var K=L(T.expirationTime<=fe);fe=r.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&s(p),ne(fe)}else s(p);T=t(p)}if(T!==null)var he=!0;else{var Se=t(y);Se!==null&&je(ce,Se.startTime-fe),he=!1}return he}finally{T=null,R=ie,V=!1}}var Ee=!1,N=null,I=-1,A=5,k=-1;function x(){return!(r.unstable_now()-k<A)}function O(){if(N!==null){var te=r.unstable_now();k=te;var fe=!0;try{fe=N(!0,te)}finally{fe?P():(Ee=!1,N=null)}}else Ee=!1}var P;if(typeof Y=="function")P=function(){Y(O)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=O,P=function(){Dt.postMessage(null)}}else P=function(){z(O,0)};function xt(te){N=te,Ee||(Ee=!0,P())}function je(te,fe){I=z(function(){te(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){F||V||(F=!0,xt(Ie))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(te){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var ie=R;R=fe;try{return te()}finally{R=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,fe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ie=R;R=te;try{return fe()}finally{R=ie}},r.unstable_scheduleCallback=function(te,fe,ie){var L=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?L+ie:L):ie=L,te){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ie+K,te={id:w++,callback:fe,priorityLevel:te,startTime:ie,expirationTime:K,sortIndex:-1},ie>L?(te.sortIndex=ie,e(y,te),t(p)===null&&te===t(y)&&($?(W(I),I=-1):$=!0,je(ce,ie-L))):(te.sortIndex=K,e(p,te),F||V||(F=!0,xt(Ie))),te},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(te){var fe=R;return function(){var ie=R;R=fe;try{return te.apply(this,arguments)}finally{R=ie}}}}(cd)),cd}var dg;function ZE(){return dg||(dg=1,ud.exports=JE()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function eT(){if(fg)return Jt;fg=1;var r=Zd(),e=ZE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(n){return p.call(T,n)?!0:p.call(w,n)?!1:y.test(n)?T[n]=!0:(w[n]=!0,!1)}function V(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function F(n,i,a,c){if(i===null||typeof i>"u"||V(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,g,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function Y(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(W,Y);z[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(W,Y);z[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(W,Y);z[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(F(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),te=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,L;function K(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var he=!1;function Se(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,S=g.length-1;1<=v&&0<=S&&d[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==g[S]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function Ae(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ee:return"Portal";case A:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case xt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cr(n){n._valueTracker||(n._valueTracker=yt(n))}function gs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ri(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ys(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Lo(n,i){i=i.checked,i!=null&&ne(n,"checked",i,!1)}function Oo(n,i){Lo(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?_s(n,i.type,a):i.hasOwnProperty("defaultValue")&&_s(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ul(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function _s(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function ws(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,Fo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ur(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pi=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){Pi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ai[i]=Ai[n]})});function Uo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+i).trim():i+"px"}function zo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Uo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var jo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,i){if(i){if(jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $o(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ts=null,hn=null,Bn=null;function Is(n){if(n=fa(n)){if(typeof Ts!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ul(i),Ts(n.stateNode,n.type,i))}}function $n(n){hn?Bn?Bn.push(n):Bn=[n]:hn=n}function qo(){if(hn){var n=hn,i=Bn;if(Bn=hn=null,Is(n),i)for(n=0;n<i.length;n++)Is(i[n])}}function ki(n,i){return n(i)}function Ho(){}var pr=!1;function Wo(n,i,a){if(pr)return n(i,a);pr=!0;try{return ki(n,i,a)}finally{pr=!1,(hn!==null||Bn!==null)&&(Ho(),qo())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Ul(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ss=!1;if(f)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ss=!1}function Ni(n,i,a,c,d,g,v,S,C){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var Di=!1,Rs=null,Rn=!1,Ko=null,Lc={onError:function(n){Di=!0,Rs=n}};function As(n,i,a,c,d,g,v,S,C){Di=!1,Rs=null,Ni.apply(Lc,arguments)}function cl(n,i,a,c,d,g,v,S,C){if(As.apply(this,arguments),Di){if(Di){var j=Rs;Di=!1,Rs=null}else throw Error(t(198));Rn||(Rn=!0,Ko=j)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function xi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(An(n)!==n)throw Error(t(188))}function hl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Pn(d),n;if(g===c)return Pn(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=g;break}if(S===c){v=!0,c=d,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=d;break}if(S===c){v=!0,c=g,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Go(n){return n=hl(n),n!==null?Ps(n):null}function Ps(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ps(n);if(i!==null)return i;n=n.sibling}return null}var Cs=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,dl=e.unstable_shouldYield,Oc=e.unstable_requestPaint,qe=e.unstable_now,fl=e.unstable_getCurrentPriorityLevel,Vi=e.unstable_ImmediatePriority,zr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,pl=e.unstable_IdlePriority,Li=null,tn=null;function ml(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:yl,Xo=Math.log,gl=Math.LN2;function yl(n){return n>>>=0,n===0?32:31-(Xo(n)/gl|0)|0}var ks=64,Ns=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Oi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=jr(S):(g&=v,g!==0&&(c=jr(g)))}else v=a&~d,v!==0?c=jr(v):g!==0&&(c=jr(g));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-jt(i),d=1<<a,c|=n[a],i&=~d;return c}function Mc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var v=31-jt(g),S=1<<v,C=d[v];C===-1?(!(S&a)||S&c)&&(d[v]=Mc(S,i)):C<=i&&(n.expiredLanes|=S),g&=~S}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mi(){var n=ks;return ks<<=1,!(ks&4194240)&&(ks=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-jt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ne=0;function Hr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _l,Ds,vl,wl,El,Jo=!1,qn=[],It=null,Cn=null,kn=null,Wr=new Map,fn=new Map,Hn=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tl(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Wr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(i.pointerId)}}function Ht(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&Ds(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Fc(n,i,a,c,d){switch(i){case"focusin":return It=Ht(It,n,i,a,c,d),!0;case"dragenter":return Cn=Ht(Cn,n,i,a,c,d),!0;case"mouseover":return kn=Ht(kn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Wr.set(g,Ht(Wr.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,fn.set(g,Ht(fn.get(g)||null,n,i,a,c,d)),!0}return!1}function Il(n){var i=ji(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=xi(a),i!==null){n.blockedOn=i,El(n.priority,function(){vl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return i=fa(a),i!==null&&Ds(i),n.blockedOn=a,!1;i.shift()}return!0}function bi(n,i,a){gr(n)&&a.delete(i)}function Sl(){Jo=!1,It!==null&&gr(It)&&(It=null),Cn!==null&&gr(Cn)&&(Cn=null),kn!==null&&gr(kn)&&(kn=null),Wr.forEach(bi),fn.forEach(bi)}function Nn(n,i){n.blockedOn===i&&(n.blockedOn=null,Jo||(Jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sl)))}function Dn(n){function i(d){return Nn(d,n)}if(0<qn.length){Nn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Nn(It,n),Cn!==null&&Nn(Cn,n),kn!==null&&Nn(kn,n),Wr.forEach(i),fn.forEach(i),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Il(a),a.blockedOn===null&&Hn.shift()}var yr=ce.ReactCurrentBatchConfig,Kr=!0;function Ge(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=1,Zo(n,i,a,c)}finally{Ne=d,yr.transition=g}}function Uc(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=4,Zo(n,i,a,c)}finally{Ne=d,yr.transition=g}}function Zo(n,i,a,c){if(Kr){var d=xs(n,i,a,c);if(d===null)Yc(n,i,c,Fi,a),Tl(n,c);else if(Fc(d,n,i,a,c))c.stopPropagation();else if(Tl(n,c),i&4&&-1<bc.indexOf(n)){for(;d!==null;){var g=fa(d);if(g!==null&&_l(g),g=xs(n,i,a,c),g===null&&Yc(n,i,c,Fi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Yc(n,i,c,null,a)}}var Fi=null;function xs(n,i,a,c){if(Fi=null,n=Es(c),n=ji(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=xi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fi=n,null}function ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fl()){case Vi:return 1;case zr:return 4;case dn:case Yo:return 16;case pl:return 536870912;default:return 16}default:return 16}}var rn=null,Vs=null,Wt=null;function ta(){if(Wt)return Wt;var n,i=Vs,a=i.length,c,d="value"in rn?rn.value:rn.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[g-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function Ls(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function na(){return!1}function St(n){function i(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Wn:na,this.isPropagationStopped=na,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=St(xn),Kn=ie({},xn,{view:0,detail:0}),zc=St(Kn),Ms,_r,Gr,Ui=ie({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gr&&(Gr&&n.type==="mousemove"?(Ms=n.screenX-Gr.screenX,_r=n.screenY-Gr.screenY):_r=Ms=0,Gr=n),Ms)},movementY:function(n){return"movementY"in n?n.movementY:_r}}),bs=St(Ui),ra=ie({},Ui,{dataTransfer:0}),Rl=St(ra),Fs=ie({},Kn,{relatedTarget:0}),Us=St(Fs),Al=ie({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),vr=St(Al),Pl=ie({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cl=St(Pl),kl=ie({},xn,{data:0}),ia=St(kl),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Nl[n])?!!i[n]:!1}function Gn(){return Dl}var u=ie({},Kn,{key:function(n){if(n.key){var i=zs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ls(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(n){return n.type==="keypress"?Ls(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ls(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m=St(u),_=ie({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=St(_),M=ie({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),B=St(M),ee=ie({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=St(ee),ht=ie({},Ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=St(ht),_t=[9,13,27,32],ot=f&&"CompositionEvent"in window,pn=null;f&&"documentMode"in document&&(pn=document.documentMode);var sn=f&&"TextEvent"in window&&!pn,zi=f&&(!ot||pn&&8<pn&&11>=pn),js=" ",tp=!1;function np(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function Kw(n,i){switch(n){case"compositionend":return rp(i);case"keypress":return i.which!==32?null:(tp=!0,js);case"textInput":return n=i.data,n===js&&tp?null:n;default:return null}}function Gw(n,i){if(Bs)return n==="compositionend"||!ot&&np(n,i)?(n=ta(),Wt=Vs=rn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zi&&i.locale!=="ko"?null:i.data;default:return null}}var Qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Qw[n.type]:i==="textarea"}function sp(n,i,a,c){$n(c),i=Ml(i,"onChange"),0<i.length&&(a=new Os("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function Yw(n){Ip(n,0)}function xl(n){var i=Ks(n);if(gs(i))return n}function Xw(n,i){if(n==="change")return i}var op=!1;if(f){var jc;if(f){var Bc="oninput"in document;if(!Bc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Bc=typeof ap.oninput=="function"}jc=Bc}else jc=!1;op=jc&&(!document.documentMode||9<document.documentMode)}function lp(){sa&&(sa.detachEvent("onpropertychange",up),oa=sa=null)}function up(n){if(n.propertyName==="value"&&xl(oa)){var i=[];sp(i,oa,n,Es(n)),Wo(Yw,i)}}function Jw(n,i,a){n==="focusin"?(lp(),sa=i,oa=a,sa.attachEvent("onpropertychange",up)):n==="focusout"&&lp()}function Zw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(oa)}function eE(n,i){if(n==="click")return xl(i)}function tE(n,i){if(n==="input"||n==="change")return xl(i)}function nE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Vn=typeof Object.is=="function"?Object.is:nE;function aa(n,i){if(Vn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!Vn(n[d],i[d]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hp(n,i){var a=cp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function dp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fp(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function $c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rE(n){var i=fp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(c!==null&&$c(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=hp(a,g);var v=hp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iE=f&&"documentMode"in document&&11>=document.documentMode,$s=null,qc=null,la=null,Hc=!1;function pp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||$s==null||$s!==Fr(c)||(c=$s,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Ml(qc,"onSelect"),0<c.length&&(i=new Os("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function Vl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Wc={},mp={};f&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ll(n){if(Wc[n])return Wc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mp)return Wc[n]=i[a];return n}var gp=Ll("animationend"),yp=Ll("animationiteration"),_p=Ll("animationstart"),vp=Ll("transitionend"),wp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){wp.set(n,i),l(i,[n])}for(var Kc=0;Kc<Ep.length;Kc++){var Gc=Ep[Kc],sE=Gc.toLowerCase(),oE=Gc[0].toUpperCase()+Gc.slice(1);Qr(sE,"on"+oE)}Qr(gp,"onAnimationEnd"),Qr(yp,"onAnimationIteration"),Qr(_p,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(vp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Tp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,cl(c,i,void 0,n),n.currentTarget=null}function Ip(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],C=S.instance,j=S.currentTarget;if(S=S.listener,C!==g&&d.isPropagationStopped())break e;Tp(d,S,j),g=C}else for(v=0;v<c.length;v++){if(S=c[v],C=S.instance,j=S.currentTarget,S=S.listener,C!==g&&d.isPropagationStopped())break e;Tp(d,S,j),g=C}}}if(Rn)throw n=Ko,Rn=!1,Ko=null,n}function We(n,i){var a=i[nh];a===void 0&&(a=i[nh]=new Set);var c=n+"__bubble";a.has(c)||(Sp(i,n,2,!1),a.add(c))}function Qc(n,i,a){var c=0;i&&(c|=4),Sp(a,n,c,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(aE.has(a)||Qc(a,!1,n),Qc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,Qc("selectionchange",!1,i))}}function Sp(n,i,a,c){switch(ea(i)){case 1:var d=Ge;break;case 4:d=Uc;break;default:d=Zo}a=d.bind(null,i,a,n),d=void 0,!Ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Yc(n,i,a,c,d){var g=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ji(S),v===null)return;if(C=v.tag,C===5||C===6){c=g=v;continue e}S=S.parentNode}}c=c.return}Wo(function(){var j=g,Q=Es(a),J=[];e:{var G=wp.get(n);if(G!==void 0){var re=Os,ae=n;switch(n){case"keypress":if(Ls(a)===0)break e;case"keydown":case"keyup":re=m;break;case"focusin":ae="focus",re=Us;break;case"focusout":ae="blur",re=Us;break;case"beforeblur":case"afterblur":re=Us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=B;break;case gp:case yp:case _p:re=vr;break;case vp:re=ze;break;case"scroll":re=zc;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=Cl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var le=(i&4)!==0,it=!le&&n==="scroll",b=le?G!==null?G+"Capture":null:G;le=[];for(var D=j,U;D!==null;){U=D;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,b!==null&&(Z=rt(D,b),Z!=null&&le.push(ha(D,Z,U)))),it)break;D=D.return}0<le.length&&(G=new re(G,ae,null,a,Q),J.push({event:G,listeners:le}))}}if(!(i&7)){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Ci&&(ae=a.relatedTarget||a.fromElement)&&(ji(ae)||ae[wr]))break e;if((re||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=j,ae=ae?ji(ae):null,ae!==null&&(it=An(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=j),re!==ae)){if(le=bs,Z="onMouseLeave",b="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,Z="onPointerLeave",b="onPointerEnter",D="pointer"),it=re==null?G:Ks(re),U=ae==null?G:Ks(ae),G=new le(Z,D+"leave",re,a,Q),G.target=it,G.relatedTarget=U,Z=null,ji(Q)===j&&(le=new le(b,D+"enter",ae,a,Q),le.target=U,le.relatedTarget=it,Z=le),it=Z,re&&ae)t:{for(le=re,b=ae,D=0,U=le;U;U=Hs(U))D++;for(U=0,Z=b;Z;Z=Hs(Z))U++;for(;0<D-U;)le=Hs(le),D--;for(;0<U-D;)b=Hs(b),U--;for(;D--;){if(le===b||b!==null&&le===b.alternate)break t;le=Hs(le),b=Hs(b)}le=null}else le=null;re!==null&&Rp(J,G,re,le,!1),ae!==null&&it!==null&&Rp(J,it,ae,le,!0)}}e:{if(G=j?Ks(j):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var ue=Xw;else if(ip(G))if(op)ue=tE;else{ue=Zw;var pe=Jw}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=eE);if(ue&&(ue=ue(n,j))){sp(J,ue,a,Q);break e}pe&&pe(n,G,j),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&_s(G,"number",G.value)}switch(pe=j?Ks(j):window,n){case"focusin":(ip(pe)||pe.contentEditable==="true")&&($s=pe,qc=j,la=null);break;case"focusout":la=qc=$s=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,pp(J,a,Q);break;case"selectionchange":if(iE)break;case"keydown":case"keyup":pp(J,a,Q)}var me;if(ot)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Bs?np(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(zi&&a.locale!=="ko"&&(Bs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Bs&&(me=ta()):(rn=Q,Vs="value"in rn?rn.value:rn.textContent,Bs=!0)),pe=Ml(j,ye),0<pe.length&&(ye=new ia(ye,n,null,a,Q),J.push({event:ye,listeners:pe}),me?ye.data=me:(me=rp(a),me!==null&&(ye.data=me)))),(me=sn?Kw(n,a):Gw(n,a))&&(j=Ml(j,"onBeforeInput"),0<j.length&&(Q=new ia("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:j}),Q.data=me))}Ip(J,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ml(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=rt(n,a),g!=null&&c.unshift(ha(n,g,d)),g=rt(n,i),g!=null&&c.push(ha(n,g,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rp(n,i,a,c,d){for(var g=i._reactName,v=[];a!==null&&a!==c;){var S=a,C=S.alternate,j=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&j!==null&&(S=j,d?(C=rt(a,g),C!=null&&v.unshift(ha(a,C,S))):d||(C=rt(a,g),C!=null&&v.push(ha(a,C,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(lE,`
`).replace(uE,"")}function bl(n,i,a){if(i=Ap(i),Ap(n)!==i&&a)throw Error(t(425))}function Fl(){}var Xc=null,Jc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,hE=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(dE)}:eh;function dE(n){setTimeout(function(){throw n})}function th(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(i)}function Yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ws,da="__reactProps$"+Ws,wr="__reactContainer$"+Ws,nh="__reactEvents$"+Ws,fE="__reactListeners$"+Ws,pE="__reactHandles$"+Ws;function ji(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wr]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Cp(n);n!==null;){if(a=n[Qn])return a;n=Cp(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Qn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ul(n){return n[da]||null}var rh=[],Gs=-1;function Xr(n){return{current:n}}function Ke(n){0>Gs||(n.current=rh[Gs],rh[Gs]=null,Gs--)}function He(n,i){Gs++,rh[Gs]=n.current,n.current=i}var Jr={},Vt=Xr(Jr),Kt=Xr(!1),Bi=Jr;function Qs(n,i){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function zl(){Ke(Kt),Ke(Vt)}function kp(n,i,a){if(Vt.current!==Jr)throw Error(t(168));He(Vt,i),He(Kt,a)}function Np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ie({},a,c)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Bi=Vt.current,He(Vt,n),He(Kt,Kt.current),!0}function Dp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Np(n,i,Bi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Kt),Ke(Vt),He(Vt,n)):Ke(Kt),He(Kt,a)}var Er=null,Bl=!1,ih=!1;function xp(n){Er===null?Er=[n]:Er.push(n)}function mE(n){Bl=!0,xp(n)}function Zr(){if(!ih&&Er!==null){ih=!0;var n=0,i=Ne;try{var a=Er;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Er=null,Bl=!1}catch(d){throw Er!==null&&(Er=Er.slice(n+1)),Cs(Vi,Zr),d}finally{Ne=i,ih=!1}}return null}var Ys=[],Xs=0,$l=null,ql=0,mn=[],gn=0,$i=null,Tr=1,Ir="";function qi(n,i){Ys[Xs++]=ql,Ys[Xs++]=$l,$l=n,ql=i}function Vp(n,i,a){mn[gn++]=Tr,mn[gn++]=Ir,mn[gn++]=$i,$i=n;var c=Tr;n=Ir;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var g=32-jt(i)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-jt(i)+d|a<<d|c,Ir=g+n}else Tr=1<<g|a<<d|c,Ir=n}function sh(n){n.return!==null&&(qi(n,1),Vp(n,1,0))}function oh(n){for(;n===$l;)$l=Ys[--Xs],Ys[Xs]=null,ql=Ys[--Xs],Ys[Xs]=null;for(;n===$i;)$i=mn[--gn],mn[gn]=null,Ir=mn[--gn],mn[gn]=null,Tr=mn[--gn],mn[gn]=null}var on=null,an=null,Qe=!1,Ln=null;function Lp(n,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Op(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$i!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lh(n){if(Qe){var i=an;if(i){var a=i;if(!Op(n,i)){if(ah(n))throw Error(t(418));i=Yr(a.nextSibling);var c=on;i&&Op(n,i)?Lp(c,a):(n.flags=n.flags&-4097|2,Qe=!1,on=n)}}else{if(ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,on=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Hl(n){if(n!==on)return!1;if(!Qe)return Mp(n),Qe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=an)){if(ah(n))throw bp(),Error(t(418));for(;i;)Lp(n,i),i=Yr(i.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Yr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=an;n;)n=Yr(n.nextSibling)}function Js(){an=on=null,Qe=!1}function uh(n){Ln===null?Ln=[n]:Ln.push(n)}var gE=ce.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(v){var S=d.refs;v===null?delete S[g]:S[g]=v},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fp(n){var i=n._init;return i(n._payload)}function Up(n){function i(b,D){if(n){var U=b.deletions;U===null?(b.deletions=[D],b.flags|=16):U.push(D)}}function a(b,D){if(!n)return null;for(;D!==null;)i(b,D),D=D.sibling;return null}function c(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function d(b,D){return b=ai(b,D),b.index=0,b.sibling=null,b}function g(b,D,U){return b.index=U,n?(U=b.alternate,U!==null?(U=U.index,U<D?(b.flags|=2,D):U):(b.flags|=2,D)):(b.flags|=1048576,D)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function S(b,D,U,Z){return D===null||D.tag!==6?(D=ed(U,b.mode,Z),D.return=b,D):(D=d(D,U),D.return=b,D)}function C(b,D,U,Z){var ue=U.type;return ue===N?Q(b,D,U.props.children,Z,U.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xt&&Fp(ue)===D.type)?(Z=d(D,U.props),Z.ref=pa(b,D,U),Z.return=b,Z):(Z=gu(U.type,U.key,U.props,null,b.mode,Z),Z.ref=pa(b,D,U),Z.return=b,Z)}function j(b,D,U,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=td(U,b.mode,Z),D.return=b,D):(D=d(D,U.children||[]),D.return=b,D)}function Q(b,D,U,Z,ue){return D===null||D.tag!==7?(D=Ji(U,b.mode,Z,ue),D.return=b,D):(D=d(D,U),D.return=b,D)}function J(b,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=ed(""+D,b.mode,U),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return U=gu(D.type,D.key,D.props,null,b.mode,U),U.ref=pa(b,null,D),U.return=b,U;case Ee:return D=td(D,b.mode,U),D.return=b,D;case xt:var Z=D._init;return J(b,Z(D._payload),U)}if(hr(D)||fe(D))return D=Ji(D,b.mode,U,null),D.return=b,D;Wl(b,D)}return null}function G(b,D,U,Z){var ue=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ue!==null?null:S(b,D,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:return U.key===ue?C(b,D,U,Z):null;case Ee:return U.key===ue?j(b,D,U,Z):null;case xt:return ue=U._init,G(b,D,ue(U._payload),Z)}if(hr(U)||fe(U))return ue!==null?null:Q(b,D,U,Z,null);Wl(b,U)}return null}function re(b,D,U,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return b=b.get(U)||null,S(D,b,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ie:return b=b.get(Z.key===null?U:Z.key)||null,C(D,b,Z,ue);case Ee:return b=b.get(Z.key===null?U:Z.key)||null,j(D,b,Z,ue);case xt:var pe=Z._init;return re(b,D,U,pe(Z._payload),ue)}if(hr(Z)||fe(Z))return b=b.get(U)||null,Q(D,b,Z,ue,null);Wl(D,Z)}return null}function ae(b,D,U,Z){for(var ue=null,pe=null,me=D,ye=D=0,Et=null;me!==null&&ye<U.length;ye++){me.index>ye?(Et=me,me=null):Et=me.sibling;var Me=G(b,me,U[ye],Z);if(Me===null){me===null&&(me=Et);break}n&&me&&Me.alternate===null&&i(b,me),D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me,me=Et}if(ye===U.length)return a(b,me),Qe&&qi(b,ye),ue;if(me===null){for(;ye<U.length;ye++)me=J(b,U[ye],Z),me!==null&&(D=g(me,D,ye),pe===null?ue=me:pe.sibling=me,pe=me);return Qe&&qi(b,ye),ue}for(me=c(b,me);ye<U.length;ye++)Et=re(me,b,ye,U[ye],Z),Et!==null&&(n&&Et.alternate!==null&&me.delete(Et.key===null?ye:Et.key),D=g(Et,D,ye),pe===null?ue=Et:pe.sibling=Et,pe=Et);return n&&me.forEach(function(li){return i(b,li)}),Qe&&qi(b,ye),ue}function le(b,D,U,Z){var ue=fe(U);if(typeof ue!="function")throw Error(t(150));if(U=ue.call(U),U==null)throw Error(t(151));for(var pe=ue=null,me=D,ye=D=0,Et=null,Me=U.next();me!==null&&!Me.done;ye++,Me=U.next()){me.index>ye?(Et=me,me=null):Et=me.sibling;var li=G(b,me,Me.value,Z);if(li===null){me===null&&(me=Et);break}n&&me&&li.alternate===null&&i(b,me),D=g(li,D,ye),pe===null?ue=li:pe.sibling=li,pe=li,me=Et}if(Me.done)return a(b,me),Qe&&qi(b,ye),ue;if(me===null){for(;!Me.done;ye++,Me=U.next())Me=J(b,Me.value,Z),Me!==null&&(D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me);return Qe&&qi(b,ye),ue}for(me=c(b,me);!Me.done;ye++,Me=U.next())Me=re(me,b,ye,Me.value,Z),Me!==null&&(n&&Me.alternate!==null&&me.delete(Me.key===null?ye:Me.key),D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me);return n&&me.forEach(function(GE){return i(b,GE)}),Qe&&qi(b,ye),ue}function it(b,D,U,Z){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:e:{for(var ue=U.key,pe=D;pe!==null;){if(pe.key===ue){if(ue=U.type,ue===N){if(pe.tag===7){a(b,pe.sibling),D=d(pe,U.props.children),D.return=b,b=D;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xt&&Fp(ue)===pe.type){a(b,pe.sibling),D=d(pe,U.props),D.ref=pa(b,pe,U),D.return=b,b=D;break e}a(b,pe);break}else i(b,pe);pe=pe.sibling}U.type===N?(D=Ji(U.props.children,b.mode,Z,U.key),D.return=b,b=D):(Z=gu(U.type,U.key,U.props,null,b.mode,Z),Z.ref=pa(b,D,U),Z.return=b,b=Z)}return v(b);case Ee:e:{for(pe=U.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(b,D.sibling),D=d(D,U.children||[]),D.return=b,b=D;break e}else{a(b,D);break}else i(b,D);D=D.sibling}D=td(U,b.mode,Z),D.return=b,b=D}return v(b);case xt:return pe=U._init,it(b,D,pe(U._payload),Z)}if(hr(U))return ae(b,D,U,Z);if(fe(U))return le(b,D,U,Z);Wl(b,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(b,D.sibling),D=d(D,U),D.return=b,b=D):(a(b,D),D=ed(U,b.mode,Z),D.return=b,b=D),v(b)):a(b,D)}return it}var Zs=Up(!0),zp=Up(!1),Kl=Xr(null),Gl=null,eo=null,ch=null;function hh(){ch=eo=Gl=null}function dh(n){var i=Kl.current;Ke(Kl),n._currentValue=i}function fh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){Gl=n,ch=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Qt=!0),n.firstContext=null)}function yn(n){var i=n._currentValue;if(ch!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(Gl===null)throw Error(t(308));eo=n,Gl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Hi=null;function ph(n){Hi===null?Hi=[n]:Hi.push(n)}function jp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ph(i)):(a.next=d.next,d.next=a),i.interleaved=a,Sr(n,c)}function Sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ti(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Sr(n,a)}return d=c.interleaved,d===null?(i.next=i,ph(c)):(i.next=d.next,d.next=i),c.interleaved=i,Sr(n,a)}function Ql(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}function $p(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yl(n,i,a,c){var d=n.updateQueue;ei=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var C=S,j=C.next;C.next=null,v===null?g=j:v.next=j,v=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=C))}if(g!==null){var J=d.baseState;v=0,Q=j=C=null,S=g;do{var G=S.lane,re=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,le=S;switch(G=i,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){J=ae.call(re,J,G);break e}J=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,G=typeof ae=="function"?ae.call(re,J,G):ae,G==null)break e;J=ie({},J,G);break e;case 2:ei=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else re={eventTime:re,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=re,C=J):Q=Q.next=re,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(C=J),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=J}}function qp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Yn=Xr(ma),ga=Xr(ma),ya=Xr(ma);function Wi(n){if(n===ma)throw Error(t(174));return n}function gh(n,i){switch(He(ya,i),He(ga,n),He(Yn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}Ke(Yn),He(Yn,i)}function no(){Ke(Yn),Ke(ga),Ke(ya)}function Hp(n){Wi(ya.current);var i=Wi(Yn.current),a=ct(i,n.type);i!==a&&(He(ga,n),He(Yn,a))}function yh(n){ga.current===n&&(Ke(Yn),Ke(ga))}var Xe=Xr(0);function Xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _h=[];function vh(){for(var n=0;n<_h.length;n++)_h[n]._workInProgressVersionPrimary=null;_h.length=0}var Jl=ce.ReactCurrentDispatcher,wh=ce.ReactCurrentBatchConfig,Ki=0,Je=null,dt=null,vt=null,Zl=!1,_a=!1,va=0,yE=0;function Lt(){throw Error(t(321))}function Eh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Vn(n[a],i[a]))return!1;return!0}function Th(n,i,a,c,d,g){if(Ki=g,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jl.current=n===null||n.memoizedState===null?EE:TE,n=a(c,d),_a){g=0;do{if(_a=!1,va=0,25<=g)throw Error(t(301));g+=1,vt=dt=null,i.updateQueue=null,Jl.current=IE,n=a(c,d)}while(_a)}if(Jl.current=nu,i=dt!==null&&dt.next!==null,Ki=0,vt=dt=Je=null,Zl=!1,i)throw Error(t(300));return n}function Ih(){var n=va!==0;return va=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=n:vt=vt.next=n,vt}function _n(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=vt===null?Je.memoizedState:vt.next;if(i!==null)vt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Je.memoizedState=vt=n:vt=vt.next=n}return vt}function wa(n,i){return typeof i=="function"?i(n):i}function Sh(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=v=null,C=null,j=g;do{var Q=j.lane;if((Ki&Q)===Q)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var J={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(S=C=J,v=c):C=C.next=J,Je.lanes|=Q,Gi|=Q}j=j.next}while(j!==null&&j!==g);C===null?v=c:C.next=S,Vn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Je.lanes|=g,Gi|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Rh(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=n(g,v.action),v=v.next;while(v!==d);Vn(g,i.memoizedState)||(Qt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Wp(){}function Kp(n,i){var a=Je,c=_n(),d=i(),g=!Vn(c.memoizedState,d);if(g&&(c.memoizedState=d,Qt=!0),c=c.queue,Ah(Yp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Qp.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));Ki&30||Gp(a,i,d)}return d}function Gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Qp(n,i,a,c){i.value=a,i.getSnapshot=c,Xp(i)&&Jp(n)}function Yp(n,i,a){return a(function(){Xp(i)&&Jp(n)})}function Xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Vn(n,a)}catch{return!0}}function Jp(n){var i=Sr(n,1);i!==null&&Fn(i,n,1,-1)}function Zp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},i.queue=n,n=n.dispatch=wE.bind(null,Je,n),[i.memoizedState,n]}function Ea(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function em(){return _n().memoizedState}function eu(n,i,a,c){var d=Xn();Je.flags|=n,d.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function tu(n,i,a,c){var d=_n();c=c===void 0?null:c;var g=void 0;if(dt!==null){var v=dt.memoizedState;if(g=v.destroy,c!==null&&Eh(c,v.deps)){d.memoizedState=Ea(i,a,g,c);return}}Je.flags|=n,d.memoizedState=Ea(1|i,a,g,c)}function tm(n,i){return eu(8390656,8,n,i)}function Ah(n,i){return tu(2048,8,n,i)}function nm(n,i){return tu(4,2,n,i)}function rm(n,i){return tu(4,4,n,i)}function im(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sm(n,i,a){return a=a!=null?a.concat([n]):null,tu(4,4,im.bind(null,i,n),a)}function Ph(){}function om(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function am(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function lm(n,i,a){return Ki&21?(Vn(a,i)||(a=Mi(),Je.lanes|=a,Gi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a)}function _E(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=wh.transition;wh.transition={};try{n(!1),i()}finally{Ne=a,wh.transition=c}}function um(){return _n().memoizedState}function vE(n,i,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cm(n))hm(i,a);else if(a=jp(n,i,a,c),a!==null){var d=qt();Fn(a,n,c,d),dm(a,i,c)}}function wE(n,i,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cm(n))hm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var v=i.lastRenderedState,S=g(v,a);if(d.hasEagerState=!0,d.eagerState=S,Vn(S,v)){var C=i.interleaved;C===null?(d.next=d,ph(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=jp(n,i,d,c),a!==null&&(d=qt(),Fn(a,n,c,d),dm(a,i,c))}}function cm(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function hm(n,i){_a=Zl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}var nu={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},EE={readContext:yn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:yn,useEffect:tm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,eu(4194308,4,im.bind(null,i,n),a)},useLayoutEffect:function(n,i){return eu(4194308,4,n,i)},useInsertionEffect:function(n,i){return eu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=vE.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Zp,useDebugValue:Ph,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Zp(!1),i=n[0];return n=_E.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Xn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));Ki&30||Gp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,tm(Yp.bind(null,c,g,n),[n]),c.flags|=2048,Ea(9,Qp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Xn(),i=wt.identifierPrefix;if(Qe){var a=Ir,c=Tr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},TE={readContext:yn,useCallback:om,useContext:yn,useEffect:Ah,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Sh,useRef:em,useState:function(){return Sh(wa)},useDebugValue:Ph,useDeferredValue:function(n){var i=_n();return lm(i,dt.memoizedState,n)},useTransition:function(){var n=Sh(wa)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Wp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1},IE={readContext:yn,useCallback:om,useContext:yn,useEffect:Ah,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Rh,useRef:em,useState:function(){return Rh(wa)},useDebugValue:Ph,useDeferredValue:function(n){var i=_n();return dt===null?i.memoizedState=n:lm(i,dt.memoizedState,n)},useTransition:function(){var n=Rh(wa)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Wp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ch(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ru={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=si(n),g=Rr(c,d);g.payload=i,a!=null&&(g.callback=a),i=ti(n,g,d),i!==null&&(Fn(i,n,d,c),Ql(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=si(n),g=Rr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ti(n,g,d),i!==null&&(Fn(i,n,d,c),Ql(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=si(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ti(n,d,c),i!==null&&(Fn(i,n,c,a),Ql(i,n,c))}};function fm(n,i,a,c,d,g,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,g):!0}function pm(n,i,a){var c=!1,d=Jr,g=i.contextType;return typeof g=="object"&&g!==null?g=yn(g):(d=Gt(i)?Bi:Vt.current,c=i.contextTypes,g=(c=c!=null)?Qs(n,d):Jr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function mm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ru.enqueueReplaceState(i,i.state,null)}function kh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},mh(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=yn(g):(g=Gt(i)?Bi:Vt.current,d.context=Qs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ch(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ru.enqueueReplaceState(d,d.state,null),Yl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Nh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Dh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function gm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cu||(cu=!0,Wh=c),Dh(n,i)},a}function ym(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Dh(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Dh(n,i),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function _m(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new SE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=FE.bind(null,n,i,a),i.then(n,n))}function vm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ti(a,i,1))),a.lanes|=1),n)}var RE=ce.ReactCurrentOwner,Qt=!1;function $t(n,i,a,c){i.child=n===null?zp(i,null,a,c):Zs(i,n.child,a,c)}function Em(n,i,a,c,d){a=a.render;var g=i.ref;return to(i,d),c=Th(n,i,a,c,g,d),a=Ih(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&a&&sh(i),i.flags|=1,$t(n,i,c,d),i.child)}function Tm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Zh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Im(n,i,g,c,d)):(n=gu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return Ar(n,i,d)}return i.flags|=1,n=ai(g,c),n.ref=i.ref,n.return=i,i.child=n}function Im(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(aa(g,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=g,(n.lanes&d)!==0)n.flags&131072&&(Qt=!0);else return i.lanes=n.lanes,Ar(n,i,d)}return xh(n,i,a,c,d)}function Sm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(so,ln),ln|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(so,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(so,ln),ln|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,He(so,ln),ln|=c;return $t(n,i,d,a),i.child}function Rm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xh(n,i,a,c,d){var g=Gt(a)?Bi:Vt.current;return g=Qs(i,g),to(i,d),a=Th(n,i,a,c,g,d),c=Ih(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&c&&sh(i),i.flags|=1,$t(n,i,a,d),i.child)}function Am(n,i,a,c,d){if(Gt(a)){var g=!0;jl(i)}else g=!1;if(to(i,d),i.stateNode===null)su(n,i),pm(i,a,c),kh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var C=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=yn(j):(j=Gt(a)?Bi:Vt.current,j=Qs(i,j));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||C!==j)&&mm(i,v,c,j),ei=!1;var G=i.memoizedState;v.state=G,Yl(i,c,v,d),C=i.memoizedState,S!==c||G!==C||Kt.current||ei?(typeof Q=="function"&&(Ch(i,a,Q,c),C=i.memoizedState),(S=ei||fm(i,a,S,c,G,C,j))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Bp(n,i),S=i.memoizedProps,j=i.type===i.elementType?S:On(i.type,S),v.props=j,J=i.pendingProps,G=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=yn(C):(C=Gt(a)?Bi:Vt.current,C=Qs(i,C));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||G!==C)&&mm(i,v,c,C),ei=!1,G=i.memoizedState,v.state=G,Yl(i,c,v,d);var ae=i.memoizedState;S!==J||G!==ae||Kt.current||ei?(typeof re=="function"&&(Ch(i,a,re,c),ae=i.memoizedState),(j=ei||fm(i,a,j,c,G,ae,C)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=C,c=j):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Vh(n,i,a,c,g,d)}function Vh(n,i,a,c,d,g){Rm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Dp(i,a,!1),Ar(n,i,g);c=i.stateNode,RE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,g),i.child=Zs(i,null,S,g)):$t(n,i,S,g),i.memoizedState=c.state,d&&Dp(i,a,!0),i.child}function Pm(n){var i=n.stateNode;i.pendingContext?kp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kp(n,i.context,!1),gh(n,i.containerInfo)}function Cm(n,i,a,c,d){return Js(),uh(d),i.flags|=256,$t(n,i,a,c),i.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function km(n,i,a){var c=i.pendingProps,d=Xe.current,g=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return lh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,g?(c=i.mode,g=i.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=yu(v,c,0,null),n=Ji(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Oh(a),i.memoizedState=Lh,n):Mh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return AE(n,i,v,c,S,d,a);if(g){g=c.fallback,v=i.mode,d=n.child,S=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=ai(d,C),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=ai(S,g):(g=Ji(g,v,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,v=n.child.memoizedState,v=v===null?Oh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=n.childLanes&~a,i.memoizedState=Lh,c}return g=n.child,n=g.sibling,c=ai(g,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Mh(n,i){return i=yu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function iu(n,i,a,c){return c!==null&&uh(c),Zs(i,n.child,null,a),n=Mh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function AE(n,i,a,c,d,g,v){if(a)return i.flags&256?(i.flags&=-257,c=Nh(Error(t(422))),iu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=yu({mode:"visible",children:c.children},d,0,null),g=Ji(g,d,v,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,i.mode&1&&Zs(i,n.child,null,v),i.child.memoizedState=Oh(v),i.memoizedState=Lh,g);if(!(i.mode&1))return iu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=Nh(g,c,void 0),iu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Qt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Sr(n,d),Fn(c,n,d,-1))}return Jh(),c=Nh(Error(t(421))),iu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=UE.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,an=Yr(d.nextSibling),on=i,Qe=!0,Ln=null,n!==null&&(mn[gn++]=Tr,mn[gn++]=Ir,mn[gn++]=$i,Tr=n.id,Ir=n.overflow,$i=i),i=Mh(i,c.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fh(n.return,i,a)}function bh(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Dm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if($t(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),bh(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}bh(i,!0,a,null,g);break;case"together":bh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function su(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ai(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function PE(n,i,a){switch(i.tag){case 3:Pm(i),Js();break;case 5:Hp(i);break;case 1:Gt(i.type)&&jl(i);break;case 4:gh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?km(n,i,a):(He(Xe,Xe.current&1),n=Ar(n,i,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Dm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Sm(n,i,a)}return Ar(n,i,a)}var xm,Fh,Vm,Lm;xm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fh=function(){},Vm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Wi(Yn.current);var g=null;switch(a){case"input":d=Ri(n,d),c=Ri(n,c),g=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),g=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fl)}Bo(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var C=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&C!==S&&(C!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&S[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(g||(g=[]),g.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(g=g||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&We("scroll",n),g||S===C||(g=[])):(g=g||[]).push(j,C))}a&&(g=g||[]).push("style",a);var j=g;(i.updateQueue=j)&&(i.flags|=4)}},Lm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function CE(n,i,a){var c=i.pendingProps;switch(oh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Gt(i.type)&&zl(),Ot(i),null;case 3:return c=i.stateNode,no(),Ke(Kt),Ke(Vt),vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Hl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ln!==null&&(Qh(Ln),Ln=null))),Fh(n,i),Ot(i),null;case 5:yh(i);var d=Wi(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)Vm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Wi(Yn.current),Hl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Qn]=i,c[da]=g,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)We(ua[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ys(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":vs(c,g),We("invalid",c)}Bo(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&bl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&bl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":cr(c),ul(c,g,!0);break;case"textarea":cr(c),bo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Fl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[da]=c,xm(n,i,!1,!1),i.stateNode=n;e:{switch(v=$o(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)We(ua[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ys(n,c),d=Ri(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),We("invalid",n);break;case"textarea":vs(n,c),d=Mo(n,c),We("invalid",n);break;default:d=c}Bo(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var C=S[g];g==="style"?zo(n,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Fo(n,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Ur(n,C):typeof C=="number"&&Ur(n,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&We("scroll",n):C!=null&&ne(n,g,C,v))}switch(a){case"input":cr(n),ul(n,c,!1);break;case"textarea":cr(n),bo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?dr(n,!!c.multiple,g,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)Lm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wi(ya.current),Wi(Yn.current),Hl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(g=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&an!==null&&i.mode&1&&!(i.flags&128))bp(),Js(),i.flags|=98560,g=!1;else if(g=Hl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qn]=i}else Js(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ot(i),g=!1}else Ln!==null&&(Qh(Ln),Ln=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?ft===0&&(ft=3):Jh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return no(),Fh(n,i),n===null&&ca(i.stateNode.containerInfo),Ot(i),null;case 10:return dh(i.type._context),Ot(i),null;case 17:return Gt(i.type)&&zl(),Ot(i),null;case 19:if(Ke(Xe),g=i.memoizedState,g===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=g.rendering,v===null)if(c)Ta(g,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=Xl(n),v!==null){for(i.flags|=128,Ta(g,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,n=v.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),i.child}n=n.sibling}g.tail!==null&&qe()>oo&&(i.flags|=128,c=!0,Ta(g,!1),i.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Ot(i),null}else 2*qe()-g.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ta(g,!1),i.lanes=4194304);g.isBackwards?(v.sibling=i.child,i.child=v):(a=g.last,a!==null?a.sibling=v:i.child=v,g.last=v)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return Xh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?ln&1073741824&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function kE(n,i){switch(oh(i),i.tag){case 1:return Gt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Ke(Kt),Ke(Vt),vh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return yh(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return no(),null;case 10:return dh(i.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var ou=!1,Mt=!1,NE=typeof WeakSet=="function"?WeakSet:Set,oe=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Uh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Om=!1;function DE(n,i){if(Xc=Kr,n=fp(),$c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,C=-1,j=0,Q=0,J=n,G=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(S=v+d),J!==g||c!==0&&J.nodeType!==3||(C=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(re=J.firstChild)!==null;)G=J,J=re;for(;;){if(J===n)break t;if(G===a&&++j===d&&(S=v),G===g&&++Q===c&&(C=v),(re=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=re}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:n,selectionRange:a},Kr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,b=i.stateNode,D=b.getSnapshotBeforeUpdate(i.elementType===i.type?le:On(i.type,le),it);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=Om,Om=!1,ae}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Uh(i,a,g)}d=d.next}while(d!==c)}}function au(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function zh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Mm(n){var i=n.alternate;i!==null&&(n.alternate=null,Mm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[da],delete i[nh],delete i[fE],delete i[pE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fl));else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,a),n=n.sibling;n!==null;)jh(n,i,a),n=n.sibling}function Bh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Bh(n,i,a),n=n.sibling;n!==null;)Bh(n,i,a),n=n.sibling}var Rt=null,Mn=!1;function ni(n,i,a){for(a=a.child;a!==null;)Um(n,i,a),a=a.sibling}function Um(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:Mt||io(a,i);case 6:var c=Rt,d=Mn;Rt=null,ni(n,i,a),Rt=c,Mn=d,Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?th(n.parentNode,a):n.nodeType===1&&th(n,a),Dn(n)):th(Rt,a.stateNode));break;case 4:c=Rt,d=Mn,Rt=a.stateNode.containerInfo,Mn=!0,ni(n,i,a),Rt=c,Mn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Uh(a,i,v),d=d.next}while(d!==c)}ni(n,i,a);break;case 1:if(!Mt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}ni(n,i,a);break;case 21:ni(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ni(n,i,a),Mt=c):ni(n,i,a);break;default:ni(n,i,a)}}function zm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new NE),i.forEach(function(c){var d=zE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,Mn=!1;break e;case 3:Rt=S.stateNode.containerInfo,Mn=!0;break e;case 4:Rt=S.stateNode.containerInfo,Mn=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));Um(g,v,d),Rt=null,Mn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(j){tt(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jm(i,n),i=i.sibling}function jm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(i,n),Jn(n),c&4){try{Ia(3,n,n.return),au(3,n)}catch(le){tt(n,n.return,le)}try{Ia(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:bn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(bn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{Ur(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,v=a!==null?a.memoizedProps:g,S=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&Lo(d,g),$o(S,v);var j=$o(S,g);for(v=0;v<C.length;v+=2){var Q=C[v],J=C[v+1];Q==="style"?zo(d,J):Q==="dangerouslySetInnerHTML"?Fo(d,J):Q==="children"?Ur(d,J):ne(d,Q,J,j)}switch(S){case"input":Oo(d,g);break;case"textarea":ws(d,g);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var re=g.value;re!=null?dr(d,!!g.multiple,re,!1):G!==!!g.multiple&&(g.defaultValue!=null?dr(d,!!g.multiple,g.defaultValue,!0):dr(d,!!g.multiple,g.multiple?[]:"",!1))}d[da]=g}catch(le){tt(n,n.return,le)}}break;case 6:if(bn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(le){tt(n,n.return,le)}}break;case 3:if(bn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:bn(i,n),Jn(n);break;case 13:bn(i,n),Jn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Hh=qe())),c&4&&zm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||Q,bn(i,n),Mt=j):bn(i,n),Jn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&n.mode&1)for(oe=n,Q=n.child;Q!==null;){for(J=oe=Q;oe!==null;){switch(G=oe,re=G.child,G.tag){case 0:case 11:case 14:case 15:Ia(4,G,G.return);break;case 1:io(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:io(G,G.return);break;case 22:if(G.memoizedState!==null){qm(J);continue}}re!==null?(re.return=G,oe=re):qm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,j?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=J.stateNode,C=J.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=Uo("display",v))}catch(le){tt(n,n.return,le)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=j?"":J.memoizedProps}catch(le){tt(n,n.return,le)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:bn(i,n),Jn(n),c&4&&zm(n);break;case 21:break;default:bn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ur(d,""),c.flags&=-33);var g=Fm(n);Bh(n,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Fm(n);jh(n,S,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function xE(n,i,a){oe=n,Bm(n)}function Bm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ou;if(!v){var S=d.alternate,C=S!==null&&S.memoizedState!==null||Mt;S=ou;var j=Mt;if(ou=v,(Mt=C)&&!j)for(oe=d;oe!==null;)v=oe,C=v.child,v.tag===22&&v.memoizedState!==null?Hm(d):C!==null?(C.return=v,oe=C):Hm(d);for(;g!==null;)oe=g,Bm(g),g=g.sibling;oe=d,ou=S,Mt=j}$m(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,oe=g):$m(n)}}function $m(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Mt||au(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&qp(i,g,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qp(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&zh(i)}catch(G){tt(i,i.return,G)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function qm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Hm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{au(4,i)}catch(C){tt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){tt(i,d,C)}}var g=i.return;try{zh(i)}catch(C){tt(i,g,C)}break;case 5:var v=i.return;try{zh(i)}catch(C){tt(i,v,C)}}}catch(C){tt(i,i.return,C)}if(i===n){oe=null;break}var S=i.sibling;if(S!==null){S.return=i.return,oe=S;break}oe=i.return}}var VE=Math.ceil,lu=ce.ReactCurrentDispatcher,$h=ce.ReactCurrentOwner,vn=ce.ReactCurrentBatchConfig,Oe=0,wt=null,at=null,At=0,ln=0,so=Xr(0),ft=0,Sa=null,Gi=0,uu=0,qh=0,Ra=null,Yt=null,Hh=0,oo=1/0,Pr=null,cu=!1,Wh=null,ri=null,hu=!1,ii=null,du=0,Aa=0,Kh=null,fu=-1,pu=0;function qt(){return Oe&6?qe():fu!==-1?fu:fu=qe()}function si(n){return n.mode&1?Oe&2&&At!==0?At&-At:gE.transition!==null?(pu===0&&(pu=Mi()),pu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ea(n.type)),n):1}function Fn(n,i,a,c){if(50<Aa)throw Aa=0,Kh=null,Error(t(185));$r(n,a,c),(!(Oe&2)||n!==wt)&&(n===wt&&(!(Oe&2)&&(uu|=a),ft===4&&oi(n,At)),Xt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(oo=qe()+500,Bl&&Zr()))}function Xt(n,i){var a=n.callbackNode;mr(n,i);var c=Oi(n,n===wt?At:0);if(c===0)a!==null&&Qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qo(a),i===1)n.tag===0?mE(Km.bind(null,n)):xp(Km.bind(null,n)),hE(function(){!(Oe&6)&&Zr()}),a=null;else{switch(Hr(c)){case 1:a=Vi;break;case 4:a=zr;break;case 16:a=dn;break;case 536870912:a=pl;break;default:a=dn}a=tg(a,Wm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Wm(n,i){if(fu=-1,pu=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=Oi(n,n===wt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=mu(n,c);else{i=c;var d=Oe;Oe|=2;var g=Qm();(wt!==n||At!==i)&&(Pr=null,oo=qe()+500,Yi(n,i));do try{ME();break}catch(S){Gm(n,S)}while(!0);hh(),lu.current=g,Oe=d,at!==null?i=0:(wt=null,At=0,i=ft)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=Gh(n,d))),i===1)throw a=Sa,Yi(n,0),oi(n,c),Xt(n,qe()),a;if(i===6)oi(n,c);else{if(d=n.current.alternate,!(c&30)&&!LE(d)&&(i=mu(n,c),i===2&&(g=nn(n),g!==0&&(c=g,i=Gh(n,g))),i===1))throw a=Sa,Yi(n,0),oi(n,c),Xt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Xi(n,Yt,Pr);break;case 3:if(oi(n,c),(c&130023424)===c&&(i=Hh+500-qe(),10<i)){if(Oi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=eh(Xi.bind(null,n,Yt,Pr),i);break}Xi(n,Yt,Pr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-jt(c);g=1<<v,v=i[v],v>d&&(d=v),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*VE(c/1960))-c,10<c){n.timeoutHandle=eh(Xi.bind(null,n,Yt,Pr),c);break}Xi(n,Yt,Pr);break;case 5:Xi(n,Yt,Pr);break;default:throw Error(t(329))}}}return Xt(n,qe()),n.callbackNode===a?Wm.bind(null,n):null}function Gh(n,i){var a=Ra;return n.current.memoizedState.isDehydrated&&(Yi(n,i).flags|=256),n=mu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&Qh(i)),n}function Qh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function LE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Vn(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function oi(n,i){for(i&=~qh,i&=~uu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-jt(i),c=1<<a;n[a]=-1,i&=~c}}function Km(n){if(Oe&6)throw Error(t(327));ao();var i=Oi(n,0);if(!(i&1))return Xt(n,qe()),null;var a=mu(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=Gh(n,c))}if(a===1)throw a=Sa,Yi(n,0),oi(n,i),Xt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xi(n,Yt,Pr),Xt(n,qe()),null}function Yh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(oo=qe()+500,Bl&&Zr())}}function Qi(n){ii!==null&&ii.tag===0&&!(Oe&6)&&ao();var i=Oe;Oe|=1;var a=vn.transition,c=Ne;try{if(vn.transition=null,Ne=1,n)return n()}finally{Ne=c,vn.transition=a,Oe=i,!(Oe&6)&&Zr()}}function Xh(){ln=so.current,Ke(so)}function Yi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,cE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(oh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:no(),Ke(Kt),Ke(Vt),vh();break;case 5:yh(c);break;case 4:no();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:dh(c.type._context);break;case 22:case 23:Xh()}a=a.return}if(wt=n,at=n=ai(n.current,null),At=ln=i,ft=0,Sa=null,qh=uu=Gi=0,Yt=Ra=null,Hi!==null){for(i=0;i<Hi.length;i++)if(a=Hi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Hi=null}return n}function Gm(n,i){do{var a=at;try{if(hh(),Jl.current=nu,Zl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Zl=!1}if(Ki=0,vt=dt=Je=null,_a=!1,va=0,$h.current=null,a===null||a.return===null){ft=1,Sa=i,at=null;break}e:{var g=n,v=a.return,S=a,C=i;if(i=At,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,Q=S,J=Q.tag;if(!(Q.mode&1)&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=vm(v);if(re!==null){re.flags&=-257,wm(re,v,S,g,i),re.mode&1&&_m(g,j,i),i=re,C=j;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(C),i.updateQueue=le}else ae.add(C);break e}else{if(!(i&1)){_m(g,j,i),Jh();break e}C=Error(t(426))}}else if(Qe&&S.mode&1){var it=vm(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),wm(it,v,S,g,i),uh(ro(C,S));break e}}g=C=ro(C,S),ft!==4&&(ft=2),Ra===null?Ra=[g]:Ra.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var b=gm(g,C,i);$p(g,b);break e;case 1:S=C;var D=g.type,U=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ri===null||!ri.has(U)))){g.flags|=65536,i&=-i,g.lanes|=i;var Z=ym(g,S,i);$p(g,Z);break e}}g=g.return}while(g!==null)}Xm(a)}catch(ue){i=ue,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Qm(){var n=lu.current;return lu.current=nu,n===null?nu:n}function Jh(){(ft===0||ft===3||ft===2)&&(ft=4),wt===null||!(Gi&268435455)&&!(uu&268435455)||oi(wt,At)}function mu(n,i){var a=Oe;Oe|=2;var c=Qm();(wt!==n||At!==i)&&(Pr=null,Yi(n,i));do try{OE();break}catch(d){Gm(n,d)}while(!0);if(hh(),Oe=a,lu.current=c,at!==null)throw Error(t(261));return wt=null,At=0,ft}function OE(){for(;at!==null;)Ym(at)}function ME(){for(;at!==null&&!dl();)Ym(at)}function Ym(n){var i=eg(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Xm(n):at=i,$h.current=null}function Xm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=kE(a,i),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}else if(a=CE(a,i,ln),a!==null){at=a;return}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);ft===0&&(ft=5)}function Xi(n,i,a){var c=Ne,d=vn.transition;try{vn.transition=null,Ne=1,bE(n,i,a,c)}finally{vn.transition=d,Ne=c}return null}function bE(n,i,a,c){do ao();while(ii!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(n,g),n===wt&&(at=wt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||hu||(hu=!0,tg(dn,function(){return ao(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=vn.transition,vn.transition=null;var v=Ne;Ne=1;var S=Oe;Oe|=4,$h.current=null,DE(n,a),jm(a,n),rE(Jc),Kr=!!Xc,Jc=Xc=null,n.current=a,xE(a),Oc(),Oe=S,Ne=v,vn.transition=g}else n.current=a;if(hu&&(hu=!1,ii=n,du=d),g=n.pendingLanes,g===0&&(ri=null),ml(a.stateNode),Xt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cu)throw cu=!1,n=Wh,Wh=null,n;return du&1&&n.tag!==0&&ao(),g=n.pendingLanes,g&1?n===Kh?Aa++:(Aa=0,Kh=n):Aa=0,Zr(),null}function ao(){if(ii!==null){var n=Hr(du),i=vn.transition,a=Ne;try{if(vn.transition=null,Ne=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,du=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,oe=n.current;oe!==null;){var g=oe,v=g.child;if(oe.flags&16){var S=g.deletions;if(S!==null){for(var C=0;C<S.length;C++){var j=S[C];for(oe=j;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ia(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,oe=J;else for(;oe!==null;){Q=oe;var G=Q.sibling,re=Q.return;if(Mm(Q),Q===j){oe=null;break}if(G!==null){G.return=re,oe=G;break}oe=re}}}var ae=g.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}oe=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,oe=v;else e:for(;oe!==null;){if(g=oe,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ia(9,g,g.return)}var b=g.sibling;if(b!==null){b.return=g.return,oe=b;break e}oe=g.return}}var D=n.current;for(oe=D;oe!==null;){v=oe;var U=v.child;if(v.subtreeFlags&2064&&U!==null)U.return=v,oe=U;else e:for(v=D;oe!==null;){if(S=oe,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:au(9,S)}}catch(ue){tt(S,S.return,ue)}if(S===v){oe=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,oe=Z;break e}oe=S.return}}if(Oe=d,Zr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Li,n)}catch{}c=!0}return c}finally{Ne=a,vn.transition=i}}return!1}function Jm(n,i,a){i=ro(a,i),i=gm(n,i,1),n=ti(n,i,1),i=qt(),n!==null&&($r(n,1,i),Xt(n,i))}function tt(n,i,a){if(n.tag===3)Jm(n,n,a);else for(;i!==null;){if(i.tag===3){Jm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=ro(a,n),n=ym(i,n,1),i=ti(i,n,1),n=qt(),i!==null&&($r(i,1,n),Xt(i,n));break}}i=i.return}}function FE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>qe()-Hh?Yi(n,0):qh|=a),Xt(n,i)}function Zm(n,i){i===0&&(n.mode&1?(i=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):i=1);var a=qt();n=Sr(n,i),n!==null&&($r(n,i,a),Xt(n,a))}function UE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zm(n,a)}function zE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zm(n,a)}var eg;eg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Qt=!1,PE(n,i,a);Qt=!!(n.flags&131072)}else Qt=!1,Qe&&i.flags&1048576&&Vp(i,ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;su(n,i),n=i.pendingProps;var d=Qs(i,Vt.current);to(i,a),d=Th(null,i,c,n,d,a);var g=Ih();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(g=!0,jl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mh(i),d.updater=ru,i.stateNode=d,d._reactInternals=i,kh(i,c,n,a),i=Vh(null,i,c,!0,g,a)):(i.tag=0,Qe&&g&&sh(i),$t(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(su(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=BE(c),n=On(c,n),d){case 0:i=xh(null,i,c,n,a);break e;case 1:i=Am(null,i,c,n,a);break e;case 11:i=Em(null,i,c,n,a);break e;case 14:i=Tm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),xh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Am(n,i,c,d,a);case 3:e:{if(Pm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Bp(n,i),Yl(i,c,null,a);var v=i.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=ro(Error(t(423)),i),i=Cm(n,i,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),i),i=Cm(n,i,c,a,d);break e}else for(an=Yr(i.stateNode.containerInfo.firstChild),on=i,Qe=!0,Ln=null,a=zp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){i=Ar(n,i,a);break e}$t(n,i,c,a)}i=i.child}return i;case 5:return Hp(i),n===null&&lh(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,v=d.children,Zc(c,d)?v=null:g!==null&&Zc(c,g)&&(i.flags|=32),Rm(n,i),$t(n,i,v,a),i.child;case 6:return n===null&&lh(i),null;case 13:return km(n,i,a);case 4:return gh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):$t(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Em(n,i,c,d,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,v=d.value,He(Kl,c._currentValue),c._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===d.children&&!Kt.current){i=Ar(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(g.tag===1){C=Rr(-1,a&-a),C.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),j.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),fh(g.return,a,i),S.lanes|=a;break}C=C.next}}else if(g.tag===10)v=g.type===i.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),fh(v,a,i),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===i){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}$t(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,to(i,a),d=yn(d),c=c(d),i.flags|=1,$t(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),Tm(n,i,c,d,a);case 15:return Im(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),su(n,i),i.tag=1,Gt(c)?(n=!0,jl(i)):n=!1,to(i,a),pm(i,c,d),kh(i,c,d,a),Vh(null,i,c,!0,n,a);case 19:return Dm(n,i,a);case 22:return Sm(n,i,a)}throw Error(t(156,i.tag))};function tg(n,i){return Cs(n,i)}function jE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,c){return new jE(n,i,a,c)}function Zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function BE(n){if(typeof n=="function")return Zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Dt)return 14}return 2}function ai(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gu(n,i,a,c,d,g){var v=2;if(c=n,typeof n=="function")Zh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Ji(a.children,d,g,i);case I:v=8,d|=8;break;case A:return n=wn(12,a,i,d|2),n.elementType=A,n.lanes=g,n;case P:return n=wn(13,a,i,d),n.elementType=P,n.lanes=g,n;case nt:return n=wn(19,a,i,d),n.elementType=nt,n.lanes=g,n;case je:return yu(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case x:v=9;break e;case O:v=11;break e;case Dt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function Ji(n,i,a,c){return n=wn(7,n,c,i),n.lanes=a,n}function yu(n,i,a,c){return n=wn(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function ed(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function td(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $E(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nd(n,i,a,c,d,g,v,S,C){return n=new $E(n,i,a,S,C),i===1?(i=1,g===!0&&(i|=8)):i=0,g=wn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(g),n}function qE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ng(n){if(!n)return Jr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return Np(n,a,i)}return i}function rg(n,i,a,c,d,g,v,S,C){return n=nd(a,c,!0,n,d,g,v,S,C),n.context=ng(null),a=n.current,c=qt(),d=si(a),g=Rr(c,d),g.callback=i??null,ti(a,g,d),n.current.lanes=d,$r(n,d,c),Xt(n,c),n}function _u(n,i,a,c){var d=i.current,g=qt(),v=si(d);return a=ng(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(g,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ti(d,i,v),n!==null&&(Fn(n,d,v,g),Ql(n,d,v)),v}function vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rd(n,i){ig(n,i),(n=n.alternate)&&ig(n,i)}var sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}wu.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_u(n,i,null,null)},wu.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qi(function(){_u(null,n,null,null)}),i[wr]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=wl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Hn.length&&i!==0&&i<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Il(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function HE(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var j=vu(v);g.call(j)}}var v=rg(i,c,n,0,null,!1,!1,"",og);return n._reactRootContainer=v,n[wr]=v.current,ca(n.nodeType===8?n.parentNode:n),Qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=vu(C);S.call(j)}}var C=nd(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=C,n[wr]=C.current,ca(n.nodeType===8?n.parentNode:n),Qi(function(){_u(i,C,a,c)}),C}function Tu(n,i,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var S=d;d=function(){var C=vu(v);S.call(C)}}_u(i,v,n,d)}else v=HE(a,i,n,d,c);return vu(v)}_l=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=jr(i.pendingLanes);a!==0&&(qr(i,a|1),Xt(i,qe()),!(Oe&6)&&(oo=qe()+500,Zr()))}break;case 13:Qi(function(){var c=Sr(n,1);if(c!==null){var d=qt();Fn(c,n,1,d)}}),rd(n,1)}},Ds=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var a=qt();Fn(i,n,134217728,a)}rd(n,134217728)}},vl=function(n){if(n.tag===13){var i=si(n),a=Sr(n,i);if(a!==null){var c=qt();Fn(a,n,i,c)}rd(n,i)}},wl=function(){return Ne},El=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},Ts=function(n,i,a){switch(i){case"input":if(Oo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ul(c);if(!d)throw Error(t(90));gs(c),Oo(c,d)}}}break;case"textarea":ws(n,a);break;case"select":i=a.value,i!=null&&dr(n,!!a.multiple,i,!1)}},ki=Yh,Ho=Qi;var WE={usingClientEntryPoint:!1,Events:[fa,Ks,Ul,$n,qo,Yh]},Pa={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KE={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Go(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Li=Iu.inject(KE),tn=Iu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WE,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(i))throw Error(t(200));return qE(n,i,null,a)},Jt.createRoot=function(n,i){if(!sd(n))throw Error(t(299));var a=!1,c="",d=sg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nd(n,1,!1,null,null,a,!1,c,d),n[wr]=i.current,ca(n.nodeType===8?n.parentNode:n),new id(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Go(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Qi(n)},Jt.hydrate=function(n,i,a){if(!Eu(i))throw Error(t(200));return Tu(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!sd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=sg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=rg(i,null,n,1,a??null,d,!1,g,v),n[wr]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wu(i)},Jt.render=function(n,i,a){if(!Eu(i))throw Error(t(200));return Tu(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!Eu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){Tu(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Yh,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tu(n,i,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var pg;function tT(){if(pg)return ld.exports;pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=eT(),ld.exports}var mg;function nT(){if(mg)return Su;mg=1;var r=tT();return Su.createRoot=r.createRoot,Su.hydrateRoot=r.hydrateRoot,Su}var rT=nT(),ka={},gg;function iT(){if(gg)return ka;gg=1,Object.defineProperty(ka,"__esModule",{value:!0}),ka.parse=h,ka.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,V){const F=new l,$=R.length;if($<2)return F;const z=(V==null?void 0:V.decode)||w;let W=0;do{const Y=R.indexOf("=",W);if(Y===-1)break;const ne=R.indexOf(";",W),ce=ne===-1?$:ne;if(Y>ce){W=R.lastIndexOf(";",Y-1)+1;continue}const Ie=f(R,W,Y),Ee=p(R,Y,Ie),N=R.slice(Ie,Ee);if(F[N]===void 0){let I=f(R,Y+1,ce),A=p(R,ce,I);const k=z(R.slice(I,A));F[N]=k}W=ce+1}while(W<$);return F}function f(R,V,F){do{const $=R.charCodeAt(V);if($!==32&&$!==9)return V}while(++V<F);return F}function p(R,V,F){for(;V>F;){const $=R.charCodeAt(--V);if($!==32&&$!==9)return V+1}return F}function y(R,V,F){const $=(F==null?void 0:F.encode)||encodeURIComponent;if(!r.test(R))throw new TypeError(`argument name is invalid: ${R}`);const z=$(V);if(!e.test(z))throw new TypeError(`argument val is invalid: ${V}`);let W=R+"="+z;if(!F)return W;if(F.maxAge!==void 0){if(!Number.isInteger(F.maxAge))throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);W+="; Max-Age="+F.maxAge}if(F.domain){if(!t.test(F.domain))throw new TypeError(`option domain is invalid: ${F.domain}`);W+="; Domain="+F.domain}if(F.path){if(!s.test(F.path))throw new TypeError(`option path is invalid: ${F.path}`);W+="; Path="+F.path}if(F.expires){if(!T(F.expires)||!Number.isFinite(F.expires.valueOf()))throw new TypeError(`option expires is invalid: ${F.expires}`);W+="; Expires="+F.expires.toUTCString()}if(F.httpOnly&&(W+="; HttpOnly"),F.secure&&(W+="; Secure"),F.partitioned&&(W+="; Partitioned"),F.priority)switch(typeof F.priority=="string"?F.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${F.priority}`)}if(F.sameSite)switch(typeof F.sameSite=="string"?F.sameSite.toLowerCase():F.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${F.sameSite}`)}return W}function w(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function T(R){return o.call(R)==="[object Date]"}return ka}iT();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var yg="popstate";function sT(r={}){function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Cd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ja(o)}return aT(e,t,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ir(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oT(){return Math.random().toString(36).substring(2,10)}function _g(r,e){return{usr:r.state,key:r.key,idx:e}}function Cd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ao(e):e,state:t,key:e&&e.key||s||oT()}}function ja({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ao(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function aT(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f="POP",p=null,y=w();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function w(){return(h.state||{idx:null}).idx}function T(){f="POP";let z=w(),W=z==null?null:z-y;y=z,p&&p({action:f,location:$.location,delta:W})}function R(z,W){f="PUSH";let Y=Cd($.location,z,W);y=w()+1;let ne=_g(Y,y),ce=$.createHref(Y);try{h.pushState(ne,"",ce)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(ce)}l&&p&&p({action:f,location:$.location,delta:1})}function V(z,W){f="REPLACE";let Y=Cd($.location,z,W);y=w();let ne=_g(Y,y),ce=$.createHref(Y);h.replaceState(ne,"",ce),l&&p&&p({action:f,location:$.location,delta:0})}function F(z){let W=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof z=="string"?z:ja(z);return Y=Y.replace(/ $/,"%20"),Ze(W,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,W)}let $={get action(){return f},get location(){return r(o,h)},listen(z){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(yg,T),p=z,()=>{o.removeEventListener(yg,T),p=null}},createHref(z){return e(o,z)},createURL:F,encodeLocation(z){let W=F(z);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:R,replace:V,go(z){return h.go(z)}};return $}function Hy(r,e,t="/"){return lT(r,e,t,!1)}function lT(r,e,t,s){let o=typeof e=="string"?Ao(e):e,l=vi(o.pathname||"/",t);if(l==null)return null;let h=Wy(r);uT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=wT(l);f=_T(h[p],y,s)}return f}function Wy(r,e=[],t=[],s=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Dr([s,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Wy(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:gT(y,l.index),routesMeta:w})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of Ky(l.path))o(l,h,p)}),e}function Ky(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=Ky(s.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function uT(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:yT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var cT=/^:[\w-]+$/,hT=3,dT=2,fT=1,pT=10,mT=-2,vg=r=>r==="*";function gT(r,e){let t=r.split("/"),s=t.length;return t.some(vg)&&(s+=mT),e&&(s+=dT),t.filter(o=>!vg(o)).reduce((o,l)=>o+(cT.test(l)?hT:l===""?fT:pT),s)}function yT(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function _T(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let p=s[f],y=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=Hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),R=p.route;if(!T&&y&&t&&!s[s.length-1].route.index&&(T=Hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Dr([l,T.pathname]),pathnameBase:ST(Dr([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Dr([l,T.pathnameBase]))}return h}function Hu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=vT(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,{paramName:w,isOptional:T},R)=>{if(w==="*"){let F=f[R]||"";h=l.slice(0,l.length-F.length).replace(/(.)\/+$/,"$1")}const V=f[R];return T&&!V?y[w]=void 0:y[w]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function vT(r,e=!1,t=!0){ir(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function wT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ir(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function vi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function ET(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Ao(r):r;return{pathname:t?t.startsWith("/")?t:TT(t,e):e,search:RT(s),hash:AT(o)}}function TT(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Gy(r){let e=IT(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Qy(r,e,t,s=!1){let o;typeof r=="string"?o=Ao(r):(o={...r},Ze(!o.pathname||!o.pathname.includes("?"),hd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),hd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),hd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}f=T>=0?e[T]:"/"}let p=ET(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var Dr=r=>r.join("/").replace(/\/\/+/g,"/"),ST=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),RT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,AT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function PT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yy=["POST","PUT","PATCH","DELETE"];new Set(Yy);var CT=["GET",...Yy];new Set(CT);var Po=q.createContext(null);Po.displayName="DataRouter";var dc=q.createContext(null);dc.displayName="DataRouterState";var Xy=q.createContext({isTransitioning:!1});Xy.displayName="ViewTransition";var kT=q.createContext(new Map);kT.displayName="Fetchers";var NT=q.createContext(null);NT.displayName="Await";var lr=q.createContext(null);lr.displayName="Navigation";var Xa=q.createContext(null);Xa.displayName="Location";var ur=q.createContext({outlet:null,matches:[],isDataRoute:!1});ur.displayName="Route";var ef=q.createContext(null);ef.displayName="RouteError";function DT(r,{relative:e}={}){Ze(Ja(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=q.useContext(lr),{hash:o,pathname:l,search:h}=Za(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Dr([t,l])),s.createHref({pathname:f,search:h,hash:o})}function Ja(){return q.useContext(Xa)!=null}function us(){return Ze(Ja(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Xa).location}var Jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zy(r){q.useContext(lr).static||q.useLayoutEffect(r)}function tf(){let{isDataRoute:r}=q.useContext(ur);return r?HT():xT()}function xT(){Ze(Ja(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Po),{basename:e,navigator:t}=q.useContext(lr),{matches:s}=q.useContext(ur),{pathname:o}=us(),l=JSON.stringify(Gy(s)),h=q.useRef(!1);return Zy(()=>{h.current=!0}),q.useCallback((p,y={})=>{if(ir(h.current,Jy),!h.current)return;if(typeof p=="number"){t.go(p);return}let w=Qy(p,JSON.parse(l),o,y.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Dr([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,r])}q.createContext(null);function VT(){let{matches:r}=q.useContext(ur),e=r[r.length-1];return e?e.params:{}}function Za(r,{relative:e}={}){let{matches:t}=q.useContext(ur),{pathname:s}=us(),o=JSON.stringify(Gy(t));return q.useMemo(()=>Qy(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function LT(r,e){return e_(r,e)}function e_(r,e,t,s){var W;Ze(Ja(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=q.useContext(lr),{matches:l}=q.useContext(ur),h=l[l.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",w=h&&h.route;{let Y=w&&w.path||"";t_(p,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=us(),R;if(e){let Y=typeof e=="string"?Ao(e):e;Ze(y==="/"||((W=Y.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),R=Y}else R=T;let V=R.pathname||"/",F=V;if(y!=="/"){let Y=y.replace(/^\//,"").split("/");F="/"+V.replace(/^\//,"").split("/").slice(Y.length).join("/")}let $=Hy(r,{pathname:F});ir(w||$!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ir($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=UT($&&$.map(Y=>Object.assign({},Y,{params:Object.assign({},f,Y.params),pathname:Dr([y,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?y:Dr([y,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),l,t,s);return e&&z?q.createElement(Xa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},z):z}function OT(){let r=qT(),e=PT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,h)}var MT=q.createElement(OT,null),bT=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?q.createElement(ur.Provider,{value:this.props.routeContext},q.createElement(ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FT({routeContext:r,match:e,children:t}){let s=q.useContext(Po);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(ur.Provider,{value:r},t)}function UT(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:w,errors:T}=t,R=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||R){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let T,R=!1,V=null,F=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,V=y.route.errorElement||MT,h&&(f<0&&w===0?(t_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,F=null):f===w&&(R=!0,F=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,w+1)),z=()=>{let W;return T?W=V:R?W=F:y.route.Component?W=q.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,q.createElement(FT,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?q.createElement(bT,{location:t.location,revalidation:t.revalidation,component:V,error:T,children:z(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):z()},null)}function nf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zT(r){let e=q.useContext(Po);return Ze(e,nf(r)),e}function jT(r){let e=q.useContext(dc);return Ze(e,nf(r)),e}function BT(r){let e=q.useContext(ur);return Ze(e,nf(r)),e}function rf(r){let e=BT(r),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function $T(){return rf("useRouteId")}function qT(){var s;let r=q.useContext(ef),e=jT("useRouteError"),t=rf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function HT(){let{router:r}=zT("useNavigate"),e=rf("useNavigate"),t=q.useRef(!1);return Zy(()=>{t.current=!0}),q.useCallback(async(o,l={})=>{ir(t.current,Jy),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var wg={};function t_(r,e,t){!e&&!wg[r]&&(wg[r]=!0,ir(!1,t))}q.memo(WT);function WT({routes:r,future:e,state:t}){return e_(r,void 0,t,e)}function xu(r){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KT({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Ze(!Ja(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=q.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Ao(t));let{pathname:p="/",search:y="",hash:w="",state:T=null,key:R="default"}=t,V=q.useMemo(()=>{let F=vi(p,h);return F==null?null:{location:{pathname:F,search:y,hash:w,state:T,key:R},navigationType:s}},[h,p,y,w,T,R,s]);return ir(V!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:q.createElement(lr.Provider,{value:f},q.createElement(Xa.Provider,{children:e,value:V}))}function GT({children:r,location:e}){return LT(kd(r),e)}function kd(r,e=[]){let t=[];return q.Children.forEach(r,(s,o)=>{if(!q.isValidElement(s))return;let l=[...e,o];if(s.type===q.Fragment){t.push.apply(t,kd(s.props.children,l));return}Ze(s.type===xu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=kd(s.props.children,l)),t.push(h)}),t}var Vu="get",Lu="application/x-www-form-urlencoded";function fc(r){return r!=null&&typeof r.tagName=="string"}function QT(r){return fc(r)&&r.tagName.toLowerCase()==="button"}function YT(r){return fc(r)&&r.tagName.toLowerCase()==="form"}function XT(r){return fc(r)&&r.tagName.toLowerCase()==="input"}function JT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ZT(r,e){return r.button===0&&(!e||e==="_self")&&!JT(r)}var Ru=null;function eI(){if(Ru===null)try{new FormData(document.createElement("form"),0),Ru=!1}catch{Ru=!0}return Ru}var tI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(r){return r!=null&&!tI.has(r)?(ir(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`),null):r}function nI(r,e){let t,s,o,l,h;if(YT(r)){let f=r.getAttribute("action");s=f?vi(f,e):null,t=r.getAttribute("method")||Vu,o=dd(r.getAttribute("enctype"))||Lu,l=new FormData(r)}else if(QT(r)||XT(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?vi(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Vu,o=dd(r.getAttribute("formenctype"))||dd(f.getAttribute("enctype"))||Lu,l=new FormData(f,r),!eI()){let{name:y,type:w,value:T}=r;if(w==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,T)}}else{if(fc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Vu,s=null,o=Lu,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}function sf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function rI(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iI(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function sI(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await rI(l,t);return h.links?h.links():[]}return[]}));return uI(s.flat(1).filter(iI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Eg(r,e,t,s,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let w=s.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function oI(r,e){return aI(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function aI(r){return[...new Set(r)]}function lI(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function uI(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(lI(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function cI(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function hI(){let r=q.useContext(Po);return sf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function dI(){let r=q.useContext(dc);return sf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var of=q.createContext(void 0);of.displayName="FrameworkContext";function n_(){let r=q.useContext(of);return sf(r,"You must render this element inside a <HydratedRouter> element"),r}function fI(r,e){let t=q.useContext(of),[s,o]=q.useState(!1),[l,h]=q.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:T}=e,R=q.useRef(null);q.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=W=>{W.forEach(Y=>{h(Y.isIntersecting)})},z=new IntersectionObserver($,{threshold:.5});return R.current&&z.observe(R.current),()=>{z.disconnect()}}},[r]),q.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let V=()=>{o(!0)},F=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,R,{}]:[l,R,{onFocus:Na(f,V),onBlur:Na(p,F),onMouseEnter:Na(y,V),onMouseLeave:Na(w,F),onTouchStart:Na(T,V)}]:[!1,R,{}]}function Na(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function pI({page:r,...e}){let{router:t}=hI(),s=q.useMemo(()=>Hy(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?q.createElement(gI,{page:r,matches:s,...e}):null}function mI(r){let{manifest:e,routeModules:t}=n_(),[s,o]=q.useState([]);return q.useEffect(()=>{let l=!1;return sI(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function gI({page:r,matches:e,...t}){let s=us(),{manifest:o,routeModules:l}=n_(),{loaderData:h,matches:f}=dI(),p=q.useMemo(()=>Eg(r,e,f,o,s,"data"),[r,e,f,o,s]),y=q.useMemo(()=>Eg(r,e,f,o,s,"assets"),[r,e,f,o,s]),w=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let V=new Set,F=!1;if(e.forEach(z=>{var Y;let W=o.routes[z.route.id];!W||!W.hasLoader||(!p.some(ne=>ne.route.id===z.route.id)&&z.route.id in h&&((Y=l[z.route.id])!=null&&Y.shouldRevalidate)||W.hasClientLoader?F=!0:V.add(z.route.id))}),V.size===0)return[];let $=cI(r);return F&&V.size>0&&$.searchParams.set("_routes",e.filter(z=>V.has(z.route.id)).map(z=>z.route.id).join(",")),[$.pathname+$.search]},[h,s,o,p,e,r,l]),T=q.useMemo(()=>oI(y,o),[y,o]),R=mI(y);return q.createElement(q.Fragment,null,w.map(V=>q.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...t})),T.map(V=>q.createElement("link",{key:V,rel:"modulepreload",href:V,...t})),R.map(({key:V,link:F})=>q.createElement("link",{key:V,...F})))}function yI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var r_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r_&&(window.__reactRouterVersion="7.1.1")}catch{}function _I({basename:r,children:e,window:t}){let s=q.useRef();s.current==null&&(s.current=sT({window:t,v5Compat:!0}));let o=s.current,[l,h]=q.useState({action:o.action,location:o.location}),f=q.useCallback(p=>{q.startTransition(()=>h(p))},[h]);return q.useLayoutEffect(()=>o.listen(f),[o,f]),q.createElement(KT,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var i_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wu=q.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:w,viewTransition:T,...R},V){let{basename:F}=q.useContext(lr),$=typeof y=="string"&&i_.test(y),z,W=!1;if(typeof y=="string"&&$&&(z=y,r_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),x=vi(k.pathname,F);k.origin===A.origin&&x!=null?y=x+k.search+k.hash:W=!0}catch{ir(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=DT(y,{relative:o}),[ne,ce,Ie]=fI(s,R),Ee=TI(y,{replace:h,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||Ee(A)}let I=q.createElement("a",{...R,...Ie,href:z||Y,onClick:W||l?e:N,ref:yI(V,ce),target:p,"data-discover":!$&&t==="render"?"true":void 0});return ne&&!$?q.createElement(q.Fragment,null,I,q.createElement(pI,{page:Y})):I});Wu.displayName="Link";var vI=q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},w){let T=Za(h,{relative:y.relative}),R=us(),V=q.useContext(dc),{navigator:F,basename:$}=q.useContext(lr),z=V!=null&&PI(T)&&f===!0,W=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,Y=R.pathname,ne=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),ne=ne?ne.toLowerCase():null,W=W.toLowerCase()),ne&&$&&(ne=vi(ne,$)||ne);const ce=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ie=Y===W||!o&&Y.startsWith(W)&&Y.charAt(ce)==="/",Ee=ne!=null&&(ne===W||!o&&ne.startsWith(W)&&ne.charAt(W.length)==="/"),N={isActive:Ie,isPending:Ee,isTransitioning:z},I=Ie?e:void 0,A;typeof s=="function"?A=s(N):A=[s,Ie?"active":null,Ee?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return q.createElement(Wu,{...y,"aria-current":I,className:A,ref:w,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});vI.displayName="NavLink";var wI=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=Vu,action:f,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:T,...R},V)=>{let F=RI(),$=AI(f,{relative:y}),z=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&i_.test(f),Y=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let ce=ne.nativeEvent.submitter,Ie=(ce==null?void 0:ce.getAttribute("formmethod"))||h;F(ce||ne.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:T})};return q.createElement("form",{ref:V,method:z,action:$,onSubmit:s?p:Y,...R,"data-discover":!W&&r==="render"?"true":void 0})});wI.displayName="Form";function EI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s_(r){let e=q.useContext(Po);return Ze(e,EI(r)),e}function TI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=tf(),p=us(),y=Za(r,{relative:l});return q.useCallback(w=>{if(ZT(w,e)){w.preventDefault();let T=t!==void 0?t:ja(p)===ja(y);f(r,{replace:T,state:s,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,s,e,r,o,l,h])}var II=0,SI=()=>`__${String(++II)}__`;function RI(){let{router:r}=s_("useSubmit"),{basename:e}=q.useContext(lr),t=$T();return q.useCallback(async(s,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=nI(s,e);if(o.navigate===!1){let w=o.fetcherKey||SI();await r.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function AI(r,{relative:e}={}){let{basename:t}=q.useContext(lr),s=q.useContext(ur);Ze(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Za(r||".",{relative:e})},h=us();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(w=>w==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let w=f.toString();l.search=w?`?${w}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Dr([t,l.pathname])),ja(l)}function PI(r,e={}){let t=q.useContext(Xy);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=s_("useViewTransitionState"),o=Za(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=vi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=vi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Hu(o.pathname,h)!=null||Hu(o.pathname,l)!=null}new TextEncoder;function CI(){return Re.jsx("nav",{children:Re.jsxs("ul",{children:[Re.jsx("li",{children:Re.jsx(Wu,{to:"/",children:"View All Products"})}),Re.jsx("li",{children:Re.jsx(Wu,{to:"/create",children:"Create Product"})})]})})}var Tg={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const o_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},kI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,V=y&63;p||(V=64,h||(R=64)),s.push(t[w],t[T],t[R],t[V])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(o_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):kI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new NI;const R=l<<2|f>>4;if(s.push(R),y!==64){const V=f<<4&240|y>>2;if(s.push(V),T!==64){const F=y<<6&192|T;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class NI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(r){const e=o_(r);return a_.encodeByteArray(e,!0)},Ku=function(r){return DI(r).replace(/\./g,"")},l_=function(r){try{return a_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const VI=()=>xI().__FIREBASE_DEFAULTS__,LI=()=>{if(typeof process>"u"||typeof Tg>"u")return;const r=Tg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},OI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&l_(r[1]);return e&&JSON.parse(e)},pc=()=>{try{return VI()||LI()||OI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},u_=r=>{var e,t;return(t=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},MI=r=>{const e=u_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},c_=()=>{var r;return(r=pc())===null||r===void 0?void 0:r.config},h_=r=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function FI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function zI(){var r;const e=(r=pc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function BI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $I(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function qI(){return!zI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f_(){try{return typeof indexedDB=="object"}catch{return!1}}function p_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function HI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const WI="FirebaseError";class jn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=WI,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?KI(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new jn(o,f,s)}}function KI(r,e){return r.replace(GI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const GI=/\{\$([^}]+)}/g;function QI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ba(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Ig(l)&&Ig(h)){if(!Ba(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ig(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function el(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function YI(r,e){const t=new XI(r,e);return t.subscribe.bind(t)}class XI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");JI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=fd),o.error===void 0&&(o.error=fd),o.complete===void 0&&(o.complete=fd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function fd(){}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ZI=1e3,eS=2,tS=4*60*60*1e3,nS=.5;function Sg(r,e=ZI,t=eS){const s=e*Math.pow(t,r),o=Math.round(nS*s*(Math.random()-.5)*2);return Math.min(tS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function cn(r){return r&&r._delegate?r._delegate:r}class zn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new bI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sS(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iS(r){return r===Zi?void 0:r}function sS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const aS={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},lS=Ce.INFO,uS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},cS=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=uS[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=lS,this._logHandler=cS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const hS=(r,e)=>e.some(t=>r instanceof t);let Rg,Ag;function dS(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fS(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Nd=new WeakMap,g_=new WeakMap,pd=new WeakMap,af=new WeakMap;function pS(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(gi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&m_.set(t,r)}).catch(()=>{}),af.set(e,r),e}function mS(r){if(Nd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Nd.set(r,e)}let Dd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Nd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||g_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function gS(r){Dd=r(Dd)}function yS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(md(this),e,...t);return g_.set(s,e.sort?e.sort():[e]),gi(s)}:fS().includes(r)?function(...e){return r.apply(md(this),e),gi(m_.get(this))}:function(...e){return gi(r.apply(md(this),e))}}function _S(r){return typeof r=="function"?yS(r):(r instanceof IDBTransaction&&mS(r),hS(r,dS())?new Proxy(r,Dd):r)}function gi(r){if(r instanceof IDBRequest)return pS(r);if(pd.has(r))return pd.get(r);const e=_S(r);return e!==r&&(pd.set(r,e),af.set(e,r)),e}const md=r=>af.get(r);function y_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=gi(h);return s&&h.addEventListener("upgradeneeded",p=>{s(gi(h.result),p.oldVersion,p.newVersion,gi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const vS=["get","getKey","getAll","getAllKeys","count"],wS=["put","add","delete","clear"],gd=new Map;function Pg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(gd.get(e))return gd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=wS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vS.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return gd.set(e,l),l}gS(r=>({...r,get:(e,t,s)=>Pg(e,t)||r.get(e,t,s),has:(e,t)=>!!Pg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ES{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function TS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xd="@firebase/app",Cg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vr=new mc("@firebase/app"),IS="@firebase/app-compat",SS="@firebase/analytics-compat",RS="@firebase/analytics",AS="@firebase/app-check-compat",PS="@firebase/app-check",CS="@firebase/auth",kS="@firebase/auth-compat",NS="@firebase/database",DS="@firebase/data-connect",xS="@firebase/database-compat",VS="@firebase/functions",LS="@firebase/functions-compat",OS="@firebase/installations",MS="@firebase/installations-compat",bS="@firebase/messaging",FS="@firebase/messaging-compat",US="@firebase/performance",zS="@firebase/performance-compat",jS="@firebase/remote-config",BS="@firebase/remote-config-compat",$S="@firebase/storage",qS="@firebase/storage-compat",HS="@firebase/firestore",WS="@firebase/vertexai",KS="@firebase/firestore-compat",GS="firebase",QS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vd="[DEFAULT]",YS={[xd]:"fire-core",[IS]:"fire-core-compat",[RS]:"fire-analytics",[SS]:"fire-analytics-compat",[PS]:"fire-app-check",[AS]:"fire-app-check-compat",[CS]:"fire-auth",[kS]:"fire-auth-compat",[NS]:"fire-rtdb",[DS]:"fire-data-connect",[xS]:"fire-rtdb-compat",[VS]:"fire-fn",[LS]:"fire-fn-compat",[OS]:"fire-iid",[MS]:"fire-iid-compat",[bS]:"fire-fcm",[FS]:"fire-fcm-compat",[US]:"fire-perf",[zS]:"fire-perf-compat",[jS]:"fire-rc",[BS]:"fire-rc-compat",[$S]:"fire-gcs",[qS]:"fire-gcs-compat",[HS]:"fire-fst",[KS]:"fire-fst-compat",[WS]:"fire-vertex","fire-js":"fire-js",[GS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Gu=new Map,XS=new Map,Ld=new Map;function kg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function sr(r){const e=r.name;if(Ld.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,r);for(const t of Gu.values())kg(t,r);for(const t of XS.values())kg(t,r);return!0}function hs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function pi(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const JS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new cs("app","Firebase",JS);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ZS{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Co=QS;function __(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=c_()),!t)throw yi.create("no-options");const l=Gu.get(o);if(l){if(Ba(t,l.options)&&Ba(s,l.config))return l;throw yi.create("duplicate-app",{appName:o})}const h=new oS(o);for(const p of Ld.values())h.addComponent(p);const f=new ZS(t,s,h);return Gu.set(o,f),f}function lf(r=Vd){const e=Gu.get(r);if(!e&&r===Vd&&c_())return __();if(!e)throw yi.create("no-app",{appName:r});return e}function Tn(r,e,t){var s;let o=(s=YS[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(f.join(" "));return}sr(new zn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const e0="firebase-heartbeat-database",t0=1,$a="firebase-heartbeat-store";let yd=null;function v_(){return yd||(yd=y_(e0,t0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),yd}async function n0(r){try{const t=(await v_()).transaction($a),s=await t.objectStore($a).get(w_(r));return await t.done,s}catch(e){if(e instanceof jn)Vr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function Ng(r,e){try{const s=(await v_()).transaction($a,"readwrite");await s.objectStore($a).put(e,w_(r)),await s.done}catch(t){if(t instanceof jn)Vr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function w_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const r0=1024,i0=30*24*60*60*1e3;class s0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new a0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Dg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=i0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dg(),{heartbeatsToSend:s,unsentEntries:o}=o0(this._heartbeatsCache.heartbeats),l=Ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function Dg(){return new Date().toISOString().substring(0,10)}function o0(r,e=r0){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),xg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),xg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await n0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xg(r){return Ku(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function l0(r){sr(new zn("platform-logger",e=>new ES(e),"PRIVATE")),sr(new zn("heartbeat",e=>new s0(e),"PRIVATE")),Tn(xd,Cg,r),Tn(xd,Cg,"esm2017"),Tn("fire-js","")}l0("");var u0="firebase",c0="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Tn(u0,c0,"app");const E_="@firebase/installations",uf="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const T_=1e4,I_=`w:${uf}`,S_="FIS_v2",h0="https://firebaseinstallations.googleapis.com/v1",d0=60*60*1e3,f0="installations",p0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const m0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new cs(f0,p0,m0);function R_(r){return r instanceof jn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function A_({projectId:r}){return`${h0}/projects/${r}/installations`}function P_(r){return{token:r.token,requestStatus:2,expiresIn:y0(r.expiresIn),creationTime:Date.now()}}async function C_(r,e){const s=(await e.json()).error;return is.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function k_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function g0(r,{refreshToken:e}){const t=k_(r);return t.append("Authorization",_0(e)),t}async function N_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function y0(r){return Number(r.replace("s","000"))}function _0(r){return`${S_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function v0({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=A_(r),o=k_(r),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:S_,appId:r.appId,sdkVersion:I_},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await N_(()=>fetch(s,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:P_(y.authToken)}}else throw await C_("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function D_(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function w0(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const E0=/^[cdef][\w-]{21}$/,Od="";function T0(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=I0(r);return E0.test(t)?t:Od}catch{return Od}}function I0(r){return w0(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function gc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const x_=new Map;function V_(r,e){const t=gc(r);L_(t,e),S0(t,e)}function L_(r,e){const t=x_.get(r);if(t)for(const s of t)s(e)}function S0(r,e){const t=R0();t&&t.postMessage({key:r,fid:e}),A0()}let es=null;function R0(){return!es&&"BroadcastChannel"in self&&(es=new BroadcastChannel("[Firebase] FID Change"),es.onmessage=r=>{L_(r.data.key,r.data.fid)}),es}function A0(){x_.size===0&&es&&(es.close(),es=null)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const P0="firebase-installations-database",C0=1,ss="firebase-installations-store";let _d=null;function cf(){return _d||(_d=y_(P0,C0,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ss)}}})),_d}async function Qu(r,e){const t=gc(r),o=(await cf()).transaction(ss,"readwrite"),l=o.objectStore(ss),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&V_(r,e.fid),e}async function O_(r){const e=gc(r),s=(await cf()).transaction(ss,"readwrite");await s.objectStore(ss).delete(e),await s.done}async function yc(r,e){const t=gc(r),o=(await cf()).transaction(ss,"readwrite"),l=o.objectStore(ss),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&V_(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function hf(r){let e;const t=await yc(r.appConfig,s=>{const o=k0(s),l=N0(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Od?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function k0(r){const e=r||{fid:T0(),registrationStatus:0};return M_(e)}function N0(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=D0(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:x0(r)}:{installationEntry:e}}async function D0(r,e){try{const t=await v0(r,e);return Qu(r.appConfig,t)}catch(t){throw R_(t)&&t.customData.serverCode===409?await O_(r.appConfig):await Qu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function x0(r){let e=await Vg(r.appConfig);for(;e.registrationStatus===1;)await D_(100),e=await Vg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await hf(r);return s||t}return e}function Vg(r){return yc(r,e=>{if(!e)throw is.create("installation-not-found");return M_(e)})}function M_(r){return V0(r)?{fid:r.fid,registrationStatus:0}:r}function V0(r){return r.registrationStatus===1&&r.registrationTime+T_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function L0({appConfig:r,heartbeatServiceProvider:e},t){const s=O0(r,t),o=g0(r,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:I_,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await N_(()=>fetch(s,f));if(p.ok){const y=await p.json();return P_(y)}else throw await C_("Generate Auth Token",p)}function O0(r,{fid:e}){return`${A_(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function df(r,e=!1){let t;const s=await yc(r.appConfig,l=>{if(!b_(l))throw is.create("not-registered");const h=l.authToken;if(!e&&F0(h))return l;if(h.requestStatus===1)return t=M0(r,e),l;{if(!navigator.onLine)throw is.create("app-offline");const f=z0(l);return t=b0(r,f),f}});return t?await t:s.authToken}async function M0(r,e){let t=await Lg(r.appConfig);for(;t.authToken.requestStatus===1;)await D_(100),t=await Lg(r.appConfig);const s=t.authToken;return s.requestStatus===0?df(r,e):s}function Lg(r){return yc(r,e=>{if(!b_(e))throw is.create("not-registered");const t=e.authToken;return j0(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function b0(r,e){try{const t=await L0(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Qu(r.appConfig,s),t}catch(t){if(R_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await O_(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qu(r.appConfig,s)}throw t}}function b_(r){return r!==void 0&&r.registrationStatus===2}function F0(r){return r.requestStatus===2&&!U0(r)}function U0(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+d0}function z0(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function j0(r){return r.requestStatus===1&&r.requestTime+T_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function B0(r){const e=r,{installationEntry:t,registrationPromise:s}=await hf(e);return s?s.catch(console.error):df(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function $0(r,e=!1){const t=r;return await q0(t),(await df(t,e)).token}async function q0(r){const{registrationPromise:e}=await hf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function H0(r){if(!r||!r.options)throw vd("App Configuration");if(!r.name)throw vd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw vd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function vd(r){return is.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const F_="installations",W0="installations-internal",K0=r=>{const e=r.getProvider("app").getImmediate(),t=H0(e),s=hs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},G0=r=>{const e=r.getProvider("app").getImmediate(),t=hs(e,F_).getImmediate();return{getId:()=>B0(t),getToken:o=>$0(t,o)}};function Q0(){sr(new zn(F_,K0,"PUBLIC")),sr(new zn(W0,G0,"PRIVATE"))}Q0();Tn(E_,uf);Tn(E_,uf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Yu="analytics",Y0="firebase_id",X0="origin",J0=60*1e3,Z0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ff="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const en=new mc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const eR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new cs("analytics","Analytics",eR);/**
 * @license
 * Copyright 2019 Google LLC
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
 */function tR(r){if(!r.startsWith(ff)){const e=un.create("invalid-gtag-resource",{gtagURL:r});return en.warn(e.message),""}return r}function U_(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function nR(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function rR(r,e){const t=nR("firebase-js-sdk-policy",{createScriptURL:tR}),s=document.createElement("script"),o=`${ff}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function iR(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function sR(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const p=(await U_(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(f){en.error(f)}r("config",o,l)}async function oR(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await U_(t);for(const p of h){const y=f.find(T=>T.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){en.error(l)}}function aR(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,p]=h;await oR(r,e,t,f,p)}else if(l==="config"){const[f,p]=h;await sR(r,e,t,s,f,p)}else if(l==="consent"){const[f,p]=h;r("consent",f,p)}else if(l==="get"){const[f,p,y]=h;r("get",f,p,y)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){en.error(f)}}return o}function lR(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=aR(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function uR(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ff)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const cR=30,hR=1e3;class dR{constructor(e={},t=hR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const z_=new dR;function fR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function pR(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:fR(s)},l=Z0.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function mR(r,e=z_,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw un.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw un.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new _R;return setTimeout(async()=>{f.abort()},J0),j_({appId:s,apiKey:o,measurementId:l},h,f,e)}async function j_(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=z_){var l;const{appId:h,measurementId:f}=r;try{await gR(s,e)}catch(p){if(f)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:f};throw p}try{const p=await pR(r);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!yR(y)){if(o.deleteThrottleMetadata(h),f)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:f};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Sg(t,o.intervalMillis,cR):Sg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,T),en.debug(`Calling attemptFetch again in ${w} millis`),j_(r,T,s,o)}}function gR(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yR(r){if(!(r instanceof jn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class _R{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vR(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function wR(){if(f_())try{await p_()}catch(r){return en.warn(un.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return en.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ER(r,e,t,s,o,l,h){var f;const p=mR(r);p.then(V=>{t[V.measurementId]=V.appId,r.options.measurementId&&V.measurementId!==r.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>en.error(V)),e.push(p);const y=wR().then(V=>{if(V)return s.getId()}),[w,T]=await Promise.all([p,y]);uR(l)||rR(l,w.measurementId),o("js",new Date);const R=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return R[X0]="firebase",R.update=!0,T!=null&&(R[Y0]=T),o("config",w.measurementId,R),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class TR{constructor(e){this.app=e}_delete(){return delete Oa[this.app.options.appId],Promise.resolve()}}let Oa={},Og=[];const Mg={};let wd="dataLayer",IR="gtag",bg,B_,Fg=!1;function SR(){const r=[];if(d_()&&r.push("This is a browser extension environment."),HI()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=un.create("invalid-analytics-context",{errorInfo:e});en.warn(t.message)}}function RR(r,e,t){SR();const s=r.options.appId;if(!s)throw un.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if(Oa[s]!=null)throw un.create("already-exists",{id:s});if(!Fg){iR(wd);const{wrappedGtag:l,gtagCore:h}=lR(Oa,Og,Mg,wd,IR);B_=l,bg=h,Fg=!0}return Oa[s]=ER(r,Og,Mg,e,bg,wd,t),new TR(r)}function AR(r=lf()){r=cn(r);const e=hs(r,Yu);return e.isInitialized()?e.getImmediate():PR(r)}function PR(r,e={}){const t=hs(r,Yu);if(t.isInitialized()){const o=t.getImmediate();if(Ba(e,t.getOptions()))return o;throw un.create("already-initialized")}return t.initialize({options:e})}function CR(r,e,t,s){r=cn(r),vR(B_,Oa[r.app.options.appId],e,t,s).catch(o=>en.error(o))}const Ug="@firebase/analytics",zg="0.10.10";function kR(){sr(new zn(Yu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return RR(s,o,t)},"PUBLIC")),sr(new zn("analytics-internal",r,"PRIVATE")),Tn(Ug,zg),Tn(Ug,zg,"esm2017");function r(e){try{const t=e.getProvider(Yu).getImmediate();return{logEvent:(s,o,l)=>CR(t,s,o,l)}}catch(t){throw un.create("interop-component-reg-failed",{reason:t})}}}kR();var jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,$_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,x,O){for(var P=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)P[nt-2]=arguments[nt];return I.prototype[x].apply(k,P)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)k[x]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(x=0;16>x;++x)k[x]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],x=N.g[2];var O=N.g[3],P=I+(O^A&(x^O))+k[0]+3614090360&4294967295;I=A+(P<<7&4294967295|P>>>25),P=O+(x^I&(A^x))+k[1]+3905402710&4294967295,O=I+(P<<12&4294967295|P>>>20),P=x+(A^O&(I^A))+k[2]+606105819&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(I^x&(O^I))+k[3]+3250441966&4294967295,A=x+(P<<22&4294967295|P>>>10),P=I+(O^A&(x^O))+k[4]+4118548399&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(x^I&(A^x))+k[5]+1200080426&4294967295,O=I+(P<<12&4294967295|P>>>20),P=x+(A^O&(I^A))+k[6]+2821735955&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(I^x&(O^I))+k[7]+4249261313&4294967295,A=x+(P<<22&4294967295|P>>>10),P=I+(O^A&(x^O))+k[8]+1770035416&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(x^I&(A^x))+k[9]+2336552879&4294967295,O=I+(P<<12&4294967295|P>>>20),P=x+(A^O&(I^A))+k[10]+4294925233&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(I^x&(O^I))+k[11]+2304563134&4294967295,A=x+(P<<22&4294967295|P>>>10),P=I+(O^A&(x^O))+k[12]+1804603682&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(x^I&(A^x))+k[13]+4254626195&4294967295,O=I+(P<<12&4294967295|P>>>20),P=x+(A^O&(I^A))+k[14]+2792965006&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(I^x&(O^I))+k[15]+1236535329&4294967295,A=x+(P<<22&4294967295|P>>>10),P=I+(x^O&(A^x))+k[1]+4129170786&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(I^A))+k[6]+3225465664&4294967295,O=I+(P<<9&4294967295|P>>>23),P=x+(I^A&(O^I))+k[11]+643717713&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(x^O))+k[0]+3921069994&4294967295,A=x+(P<<20&4294967295|P>>>12),P=I+(x^O&(A^x))+k[5]+3593408605&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(I^A))+k[10]+38016083&4294967295,O=I+(P<<9&4294967295|P>>>23),P=x+(I^A&(O^I))+k[15]+3634488961&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(x^O))+k[4]+3889429448&4294967295,A=x+(P<<20&4294967295|P>>>12),P=I+(x^O&(A^x))+k[9]+568446438&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(I^A))+k[14]+3275163606&4294967295,O=I+(P<<9&4294967295|P>>>23),P=x+(I^A&(O^I))+k[3]+4107603335&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(x^O))+k[8]+1163531501&4294967295,A=x+(P<<20&4294967295|P>>>12),P=I+(x^O&(A^x))+k[13]+2850285829&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(I^A))+k[2]+4243563512&4294967295,O=I+(P<<9&4294967295|P>>>23),P=x+(I^A&(O^I))+k[7]+1735328473&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(x^O))+k[12]+2368359562&4294967295,A=x+(P<<20&4294967295|P>>>12),P=I+(A^x^O)+k[5]+4294588738&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^x)+k[8]+2272392833&4294967295,O=I+(P<<11&4294967295|P>>>21),P=x+(O^I^A)+k[11]+1839030562&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^I)+k[14]+4259657740&4294967295,A=x+(P<<23&4294967295|P>>>9),P=I+(A^x^O)+k[1]+2763975236&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^x)+k[4]+1272893353&4294967295,O=I+(P<<11&4294967295|P>>>21),P=x+(O^I^A)+k[7]+4139469664&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^I)+k[10]+3200236656&4294967295,A=x+(P<<23&4294967295|P>>>9),P=I+(A^x^O)+k[13]+681279174&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^x)+k[0]+3936430074&4294967295,O=I+(P<<11&4294967295|P>>>21),P=x+(O^I^A)+k[3]+3572445317&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^I)+k[6]+76029189&4294967295,A=x+(P<<23&4294967295|P>>>9),P=I+(A^x^O)+k[9]+3654602809&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^x)+k[12]+3873151461&4294967295,O=I+(P<<11&4294967295|P>>>21),P=x+(O^I^A)+k[15]+530742520&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^I)+k[2]+3299628645&4294967295,A=x+(P<<23&4294967295|P>>>9),P=I+(x^(A|~O))+k[0]+4096336452&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~x))+k[7]+1126891415&4294967295,O=I+(P<<10&4294967295|P>>>22),P=x+(I^(O|~A))+k[14]+2878612391&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~I))+k[5]+4237533241&4294967295,A=x+(P<<21&4294967295|P>>>11),P=I+(x^(A|~O))+k[12]+1700485571&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~x))+k[3]+2399980690&4294967295,O=I+(P<<10&4294967295|P>>>22),P=x+(I^(O|~A))+k[10]+4293915773&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~I))+k[1]+2240044497&4294967295,A=x+(P<<21&4294967295|P>>>11),P=I+(x^(A|~O))+k[8]+1873313359&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~x))+k[15]+4264355552&4294967295,O=I+(P<<10&4294967295|P>>>22),P=x+(I^(O|~A))+k[6]+2734768916&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~I))+k[13]+1309151649&4294967295,A=x+(P<<21&4294967295|P>>>11),P=I+(x^(A|~O))+k[4]+4149444226&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~x))+k[11]+3174756917&4294967295,O=I+(P<<10&4294967295|P>>>22),P=x+(I^(O|~A))+k[2]+718787259&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(x+(P<<21&4294967295|P>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,x=this.h,O=0;O<I;){if(x==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(k[x++]=N.charCodeAt(O++),x==this.blockSize){o(this,k),x=0;break}}else for(;O<I;)if(k[x++]=N[O++],x==this.blockSize){o(this,k),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function l(N,I){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,x=N.length-1;0<=x;x--){var O=N[x]|0;k&&O==I||(A[x]=O,k=!1)}this.g=A}var f={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return z(y(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return z(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),k=T,x=0;x<N.length;x+=8){var O=Math.min(8,N.length-x),P=parseInt(N.substring(x,x+O),I);8>O?(O=y(Math.pow(I,O)),k=k.j(O).add(y(P))):(k=k.j(A),k=k.add(y(P)))}return k}var T=p(0),R=p(1),V=p(16777216);r=h.prototype,r.m=function(){if($(this))return-z(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if($(this))return"-"+z(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,k="";;){var x=ce(A,I).g;A=W(A,x.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=x,F(A))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function $(N){return N.h==-1}r.l=function(N){return N=W(this,N),$(N)?-1:F(N)?0:1};function z(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(R)}r.abs=function(){return $(this)?z(this):this},r.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,x=0;x<=I;x++){var O=k+(this.i(x)&65535)+(N.i(x)&65535),P=(O>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);k=P>>>16,O&=65535,P&=65535,A[x]=P<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(N,I){return N.add(z(I))}r.j=function(N){if(F(this)||F(N))return T;if($(this))return $(N)?z(this).j(z(N)):z(z(this).j(N));if($(N))return z(this.j(z(N)));if(0>this.l(V)&&0>N.l(V))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<N.g.length;x++){var O=this.i(k)>>>16,P=this.i(k)&65535,nt=N.i(x)>>>16,Dt=N.i(x)&65535;A[2*k+2*x]+=P*Dt,Y(A,2*k+2*x),A[2*k+2*x+1]+=O*Dt,Y(A,2*k+2*x+1),A[2*k+2*x+1]+=P*nt,Y(A,2*k+2*x+1),A[2*k+2*x+2]+=O*nt,Y(A,2*k+2*x+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function Y(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ne(N,I){this.g=N,this.h=I}function ce(N,I){if(F(I))throw Error("division by zero");if(F(N))return new ne(T,T);if($(N))return I=ce(z(N),I),new ne(z(I.g),z(I.h));if($(I))return I=ce(N,z(I)),new ne(z(I.g),I.h);if(30<N.g.length){if($(N)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=I;0>=k.l(N);)A=Ie(A),k=Ie(k);var x=Ee(A,1),O=Ee(k,1);for(k=Ee(k,2),A=Ee(A,2);!F(k);){var P=O.add(k);0>=P.l(N)&&(x=x.add(A),O=P),k=Ee(k,1),A=Ee(A,1)}return I=W(N,x.j(I)),new ne(x,I)}for(x=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=y(A),P=O.j(I);$(P)||0<P.l(N);)A-=k,O=y(A),P=O.j(I);F(O)&&(O=R),x=x.add(O),N=W(N,P)}return new ne(x,N)}r.A=function(N){return ce(this,N).h},r.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},r.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},r.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Ie(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function Ee(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,x=[],O=0;O<k;O++)x[O]=0<I?N.i(O+A)>>>I|N.i(O+A+1)<<32-I:N.i(O+A);return new h(x,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,$_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,ns=h}).apply(typeof jg<"u"?jg:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q_,Da,H_,Ou,Md,W_,K_,G_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,M={next:function(){if(!E&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,R.apply(null,arguments)}function V(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,M,B){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return m.prototype[M].apply(E,ee)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function z(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const M=u.length||0,B=E.length||0;u.length=M+B;for(let ee=0;ee<B;ee++)u[M+ee]=E[ee]}else u.push(E)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ee(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let B=0;B<A.length;B++)_=A[B],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function x(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function O(u){f.setTimeout(()=>{throw u},0)}function P(){var u=fe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const E=Dt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new W(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,te=!1,fe=new nt,ie=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(L)}};var L=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(_){O(_)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}te=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{ce(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}F(Ae,he);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,m,_,E,M){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ee=Fr(u,m,E,M);return-1<ee?(m=u[ee],_||(m.fa=!1)):(m=new $e(m,this.src,B,!!E,M),m.fa=_,u.push(m)),m};function gs(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,m,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(yt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Fr(u,m,_,E){for(var M=0;M<u.length;++M){var B=u[M];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==E)return M}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),ys={};function Lo(u,m,_,E,M){if(Array.isArray(m)){for(var B=0;B<m.length;B++)Lo(u,m[B],_,E,M);return null}return _=bo(_),u&&u[be]?u.K(m,_,y(E)?!!E.capture:!1,M):Oo(u,m,_,!1,E,M)}function Oo(u,m,_,E,M,B){if(!m)throw Error("Invalid event type");var ee=y(M)?!!M.capture:!!M,ze=vs(u);if(ze||(u[Ri]=ze=new cr(u)),_=ze.add(m,_,E,ee,B),_.proxy)return _;if(E=ul(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Se||(M=ee),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent(dr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ul(){function u(_){return m.call(u.src,u.listener,_)}const m=Mo;return u}function _s(u,m,_,E,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)_s(u,m[B],_,E,M);else E=y(E)?!!E.capture:!!E,_=bo(_),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=Fr(B,_,E,M),-1<_&&(yt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Fr(m,_,E,M)),(_=-1<u?m[u]:null)&&hr(_))}function hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])gs(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(dr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=vs(m))?(gs(_,u),_.h==0&&(_.src=null,m[Ri]=null)):yt(u)}}}function dr(u){return u in ys?ys[u]:ys[u]="on"+u}function Mo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&hr(u),u=_.call(E,m)}return u}function vs(u){return u=u[Ri],u instanceof cr?u:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(u){return typeof u=="function"?u:(u[ws]||(u[ws]=function(m){return u.handleEvent(m)}),u[ws])}function ut(){K.call(this),this.i=new cr(this),this.M=this,this.F=null}F(ut,K),ut.prototype[be]=!0,ut.prototype.removeEventListener=function(u,m,_,E){_s(this,u,m,_,E)};function ct(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new he(m,u);else if(m instanceof he)m.target=m.target||u;else{var M=m;m=new he(E,u),k(m,M)}if(M=!0,_)for(var B=_.length-1;0<=B;B--){var ee=m.g=_[B];M=fr(ee,E,!0,m)&&M}if(ee=m.g=u,M=fr(ee,E,!0,m)&&M,M=fr(ee,E,!1,m)&&M,_)for(B=0;B<_.length;B++)ee=m.g=_[B],M=fr(ee,E,!1,m)&&M}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)yt(_[E]);delete u.g[m],u.h--}}this.F=null},ut.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ut.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function fr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,B=0;B<m.length;++B){var ee=m[B];if(ee&&!ee.da&&ee.capture==_){var ze=ee.listener,ht=ee.ha||ee.src;ee.fa&&gs(u.i,ee),M=ze.call(ht,E)!==!1&&M}}return M&&!E.defaultPrevented}function Fo(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Ur(u){u.g=Fo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ai extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(u){K.call(this),this.h=u,this.g={}}F(Pi,K);var Uo=[];function zo(u){Ee(u.g,function(m,_){this.g.hasOwnProperty(_)&&hr(m)},u),u.g={}}Pi.prototype.N=function(){Pi.aa.N.call(this),zo(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=f.JSON.stringify,Bo=f.JSON.parse,$o=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ci(){}Ci.prototype.h=null;function Es(u){return u.h||(u.h=u.i())}function Ts(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){he.call(this,"d")}F(Bn,he);function Is(){he.call(this,"c")}F(Is,he);var $n={},qo=null;function ki(){return qo=qo||new ut}$n.La="serverreachability";function Ho(u){he.call(this,$n.La,u)}F(Ho,he);function pr(u){const m=ki();ct(m,new Ho(m))}$n.STAT_EVENT="statevent";function Wo(u,m){he.call(this,$n.STAT_EVENT,u),this.stat=m}F(Wo,he);function rt(u){const m=ki();ct(m,new Wo(m,u))}$n.Ma="timingevent";function Ss(u,m){he.call(this,$n.Ma,u),this.size=m}F(Ss,he);function Sn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Di(u,m,_,E,M,B){u.info(function(){if(u.g)if(B)for(var ee="",ze=B.split("&"),ht=0;ht<ze.length;ht++){var Ve=ze[ht].split("=");if(1<Ve.length){var _t=Ve[0];Ve=Ve[1];var ot=_t.split("_");ee=2<=ot.length&&ot[1]=="type"?ee+(_t+"="+Ve+"&"):ee+(_t+"=redacted&")}}else ee=null;else ee=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+_+`
`+ee})}function Rs(u,m,_,E,M,B,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+_+`
`+B+" "+ee})}function Rn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Lc(u,_)+(E?" "+E:"")})}function Ko(u,m){u.info(function(){return"TIMEOUT: "+m})}Ni.prototype.info=function(){};function Lc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return jo(_)}catch{return m}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function xi(){}F(xi,Ci),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},An=new xi;function Pn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var Go={},Ps={};function Cs(u,m,_){u.L=1,u.v=qr(nn(m)),u.m=_,u.P=!0,Qo(u,null)}function Qo(u,m){u.F=Date.now(),qe(u),u.A=nn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Wr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new hl,u.g=kl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ai(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Uo[0]=M.toString()),M=Uo);for(var B=0;B<M.length;B++){var ee=Lo(_,M[B],E||m.handleEvent,!1,m.h||m);if(!ee)break;m.g[ee.key]=ee}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),pr(),Di(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Wt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Wt(this.g);var m=this.g.Ba();const pn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||ot!=4||m==7||(m==8||0>=pn?pr(3):pr(2)),Vi(this);var _=this.g.Z();this.X=_;t:if(dl(this)){var E=ta(this.g);u="";var M=E.length,B=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),zr(this);var ee="";break t}this.h.i=new f.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(B&&m==M-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=_==200,Rs(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,ht=this.g;if((ze=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(ze)){var Ve=ze;break t}}Ve=null}if(_=Ve)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,_);else{this.o=!1,this.s=3,rt(12),dn(this),zr(this);break e}}if(this.P){_=!0;let sn;for(;!this.J&&this.C<ee.length;)if(sn=Oc(this,ee),sn==Ps){ot==4&&(this.s=4,rt(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Go){this.s=4,rt(15),Rn(this.i,this.l,ee,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,sn,null),Yo(this,sn);if(dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ee.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,ee,"[Invalid Chunked Response]"),dn(this),zr(this);else if(0<ee.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ra(_t),_t.M=!0,rt(11))}}else Rn(this.i,this.l,ee,null),Yo(this,ee);ot==4&&dn(this),this.o&&!this.J&&(ot==4?Us(this.j,this):(this.o=!1,qe(this)))}else Ls(this.g),_==400&&0<ee.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),zr(this)}}}catch{}finally{}};function dl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Oc(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Ps:(_=Number(m.substring(_,E)),isNaN(_)?Go:(E+=1,E+_>m.length?Ps:(m=m.slice(E,E+_),u.C=E+_,m)))}Pn.prototype.cancel=function(){this.J=!0,dn(this)};function qe(u){u.S=Date.now()+u.I,fl(u,u.I)}function fl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Sn(R(u.ba,u),m)}function Vi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ko(this.i,this.A),this.L!=2&&(pr(),rt(17)),dn(this),this.s=2,zr(this)):fl(this,this.S-u)};function zr(u){u.j.G==0||u.J||Us(u.j,u)}function dn(u){Vi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,zo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Yo(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||jt(_.h,u))){if(!u.K&&jt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Fs(_),xn(_);else break e;bs(_),rt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Sn(R(_.Za,_),6e3));if(1>=ml(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else vr(_,11)}else if((u.K||_.g==u)&&Fs(_),!Y(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Ve=M[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const _t=Ve[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const ot=Ve[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const pn=Ve[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const sn=u.g;if(sn){const zi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var B=E.h;B.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Xo(B,B.h),B.h=null))}if(E.D){const js=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(E.ya=js,Be(E.I,E.D,js))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ee=u;if(E.qa=Cl(E,E.J?E.ia:null,E.W),ee.K){gl(E.h,ee);var ze=ee,ht=E.L;ht&&(ze.I=ht),ze.B&&(Vi(ze),qe(ze)),E.g=ee}else Ui(E);0<_.i.length&&Kn(_)}else Ve[0]!="stop"&&Ve[0]!="close"||vr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?vr(_,7):St(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}pr(4)}catch{}}var pl=class{constructor(u,m){this.g=u,this.map=m}};function Li(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ml(u){return u.h?1:u.g?u.g.size:0}function jt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Xo(u,m){u.g?u.g.add(m):u.h=m}function gl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Li.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function yl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Ns(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function jr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ns(u),E=ks(u),M=E.length,B=0;B<M;B++)m.call(void 0,E[B],_&&_[B],u)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),M=null;if(0<=E){var B=u[_].substring(0,E);M=u[_].substring(E+1)}else B=u[_];m(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,Mi(this,u.j),this.o=u.o,this.g=u.g,Br(this,u.s),this.l=u.l;var m=u.i,_=new qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),$r(this,_),this.m=u.m}else u&&(m=String(u).match(Oi))?(this.h=!1,Mi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Br(this,m[4]),this.l=Ne(m[5]||"",!0),$r(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}mr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Hr(m,Ds,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Hr(m,Ds,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Hr(_,_.charAt(0)=="/"?wl:vl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Hr(_,Jo)),u.join("")};function nn(u){return new mr(u)}function Mi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Br(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function $r(u,m,_){m instanceof qn?(u.i=m,Hn(u.i,u.h)):(_||(m=Hr(m,El)),u.i=new qn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function qr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Hr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,_l),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function _l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ds=/[#\/\?@]/g,vl=/[#\?:]/g,wl=/[#\?]/g,El=/[#\?@]/g,Jo=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&Mc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=qn.prototype,r.add=function(u,m){It(this),this.i=null,u=fn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Cn(u,m){It(u),m=fn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function kn(u,m){return It(u),m=fn(u,m),u.g.has(m)}r.forEach=function(u,m){It(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(m,M,E,this)},this)},this)},r.na=function(){It(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const M=u[E];for(let B=0;B<M.length;B++)_.push(m[E])}return _},r.V=function(u){It(this);let m=[];if(typeof u=="string")kn(this,u)&&(m=m.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return It(this),this.i=null,u=fn(this,u),kn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Wr(u,m,_){Cn(u,m),0<_.length&&(u.i=null,u.g.set(fn(u,m),$(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const B=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=B;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),u.push(M)}}return this.i=u.join("&")};function fn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Hn(u,m){m&&!u.j&&(It(u),u.i=null,u.g.forEach(function(_,E){var M=E.toLowerCase();E!=M&&(Cn(this,E),Wr(this,M,_))},u)),u.j=m}function bc(u,m){const _=new Ni;if(f.Image){const E=new Image;E.onload=V(Ht,_,"TestLoadImage: loaded",!0,m,E),E.onerror=V(Ht,_,"TestLoadImage: error",!1,m,E),E.onabort=V(Ht,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=V(Ht,_,"TestLoadImage: timeout",!1,m,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Tl(u,m){const _=new Ni,E=new AbortController,M=setTimeout(()=>{E.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function Fc(){this.g=new $o}function Il(u,m,_){const E=_||"";try{jr(u,function(M,B){let ee=M;y(M)&&(ee=jo(M)),m.push(E+B+"="+encodeURIComponent(ee))})}catch(M){throw m.push(E+"type="+encodeURIComponent("_badmap")),M}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}F(gr,Ci),gr.prototype.g=function(){return new bi(this.l,this.j)},gr.prototype.i=function(u){return function(){return u}}({});function bi(u,m){ut.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(bi,ut),r=bi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Nn(this):Dn(this),this.readyState==3&&Sl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},r.Qa=function(u){this.g&&(this.response=u,Nn(this))},r.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let m="";return Ee(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Kr(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=yr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Ge(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ge,ut);var Uc=/^https?$/i,Zo=["POST","PUT"];r=Ge.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?Es(this.o):Es(An),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){Fi(this,B);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())_.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Zo,m,void 0))||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ee]of _)this.g.setRequestHeader(B,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Fi(this,B)}};function Fi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,xs(u),rn(u)}function xs(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Wt(u)!=4||u.Z()!=2)){if(u.u&&Wt(u)==4)Fo(u.Ea,0,u);else if(ct(u,"readystatechange"),Wt(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ee===0){var M=String(u.D).match(Oi)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!Uc.test(M?M.toLowerCase():"")}_=E}if(_)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var B=2<Wt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",xs(u)}}finally{rn(u)}}}}function rn(u,m){if(u.g){Vs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ct(u,"ready");try{_.onreadystatechange=E}catch{}}}function Vs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Wt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Bo(m)}};function ta(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ls(u){const m={};u=(u.g&&2<=Wt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(Y(u[E]))continue;var _=x(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[M]||[];m[M]=B,B.push(_)}N(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function na(u){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,u),this.cb=Wn("retryDelaySeedMs",1e4,u),this.Wa=Wn("forwardChannelMaxRetries",2,u),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(u&&u.concurrentRequestLimit),this.Da=new Fc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,E){rt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=Cl(this,null,this.W),Kn(this)};function St(u){if(Os(u),u.G==3){var m=u.U++,_=nn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),_r(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=qr(nn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=kl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Pl(u)}function xn(u){u.g&&(ra(u),u.g.cancel(),u.g=null)}function Os(u){xn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Fs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Kn(u){if(!tn(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||ie(),te||(je(),te=!0),fe.add(m,u),u.B=0}}function zc(u,m){return ml(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Sn(R(u.Ga,u,m),Al(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Pn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=I(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Gr(this,M,m),_=nn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),_r(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(yr(B)))+"&"+m:this.m&&Kr(_,this.m,B)),Xo(this.h,M),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),M.T=!0,Cs(M,_,null)):Cs(M,_,m),this.G=2}}else this.G==3&&(u?Ms(this,u):this.i.length==0||tn(this.h)||Ms(this))};function Ms(u,m){var _;m?_=m.l:_=u.U++;const E=nn(u.I);Be(E,"SID",u.K),Be(E,"RID",_),Be(E,"AID",u.T),_r(u,E),u.m&&u.o&&Kr(E,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Gr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Xo(u.h,_),Cs(_,E,m)}function _r(u,m){u.H&&Ee(u.H,function(_,E){Be(m,E,_)}),u.l&&jr({},function(_,E){Be(m,E,_)})}function Gr(u,m,_){_=Math.min(u.i.length,_);var E=u.l?R(u.l.Na,u.l,u):null;e:{var M=u.i;let B=-1;for(;;){const ee=["count="+_];B==-1?0<_?(B=M[0].g,ee.push("ofs="+B)):B=0:ee.push("ofs="+B);let ze=!0;for(let ht=0;ht<_;ht++){let Ve=M[ht].g;const _t=M[ht].map;if(Ve-=B,0>Ve)B=Math.max(0,M[ht].g-100),ze=!1;else try{Il(_t,ee,"req"+Ve+"_")}catch{E&&E(_t)}}if(ze){E=ee.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function Ui(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||ie(),te||(je(),te=!0),fe.add(m,u),u.v=0}}function bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Sn(R(u.Fa,u),Al(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Sn(R(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),xn(this),Rl(this))};function ra(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Rl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=nn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),_r(u,m),u.m&&u.o&&Kr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=qr(nn(m)),_.m=null,_.P=!0,Qo(_,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),bs(this),rt(19))};function Fs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Us(u,m){var _=null;if(u.g==m){Fs(u),ra(u),u.g=null;var E=2}else if(jt(u.h,m))_=m.D,gl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;E=ki(),ct(E,new Ss(E,_)),Kn(u)}else Ui(u);else if(M=m.s,M==3||M==0&&0<m.X||!(E==1&&zc(u,m)||E==2&&bs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:vr(u,5);break;case 4:vr(u,10);break;case 3:vr(u,6);break;default:vr(u,2)}}}function Al(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function vr(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),E=u.Xa;const M=!E;E=new mr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Mi(E,"https"),qr(E),M?bc(E.toString(),_):Tl(E.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),Pl(u),Os(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Pl(u){if(u.G=0,u.ka=[],u.l){const m=yl(u.h);(m.length!=0||u.i.length!=0)&&(z(u.ka,m),z(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Cl(u,m,_){var E=_ instanceof mr?nn(_):new mr(_);if(E.g!="")m&&(E.g=m+"."+E.g),Br(E,E.s);else{var M=f.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var B=new mr(null);E&&Mi(B,E),m&&(B.g=m),M&&Br(B,M),_&&(B.l=_),E=B}return _=u.D,m=u.ya,_&&m&&Be(E,_,m),Be(E,"VER",u.la),_r(u,E),E}function kl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new gr({eb:_})):new Ge(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}r=ia.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zs(){}zs.prototype.g=function(u,m){return new Bt(u,m)};function Bt(u,m){ut.call(this),this.g=new na(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Y(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Gn(this)}F(Bt,ut),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){St(this.g)},Bt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=jo(u),u=_);m.i.push(new pl(m.Ya++,u)),m.G==3&&Kn(m)},Bt.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,Bt.aa.N.call(this)};function Nl(u){Bn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(Nl,Bn);function Dl(){Is.call(this),this.status=1}F(Dl,Is);function Gn(u){this.g=u}F(Gn,ia),Gn.prototype.ua=function(){ct(this.g,"a")},Gn.prototype.ta=function(u){ct(this.g,new Nl(u))},Gn.prototype.sa=function(u){ct(this.g,new Dl)},Gn.prototype.ra=function(){ct(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,G_=function(){return new zs},K_=function(){return ki()},W_=$n,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Ou=As,cl.COMPLETE="complete",H_=cl,Ts.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Da=Ts,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,q_=Ge}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const Bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ko="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const os=new mc("@firebase/firestore");function lo(){return os.logLevel}function se(r,...e){if(os.logLevel<=Ce.DEBUG){const t=e.map(pf);os.debug(`Firestore (${ko}): ${r}`,...t)}}function Lr(r,...e){if(os.logLevel<=Ce.ERROR){const t=e.map(pf);os.error(`Firestore (${ko}): ${r}`,...t)}}function _o(r,...e){if(os.logLevel<=Ce.WARN){const t=e.map(pf);os.warn(`Firestore (${ko}): ${r}`,...t)}}function pf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function _e(r="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+r;throw Lr(e),new Error(e)}function Ue(r,e){r||_e()}function Te(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xR{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new Q_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class VR{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class LR{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new VR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const s=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new OR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Y_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=bR(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function vo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new de(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new mt(0,0))}static max(){return new we(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qa{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(),s===void 0?s=e.length-t:s>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends qa{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const FR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends qa{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return FR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new de(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new de(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new de(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function UR(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new wi(o,ge.empty(),e)}function zR(r){return new wi(r.readTime,r.key,-1)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(we.min(),ge.empty(),-1)}static max(){return new wi(we.max(),ge.empty(),-1)}}function jR(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const BR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function No(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==BR)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,s)=>{t(e)})}static reject(e){return new H((t,s)=>{s(e)})}static waitFor(e){return new H((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>s(p))}),h=!0,l===o&&t()})}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next(o=>o?H.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new H((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++f,f===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new H((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function qR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class _c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_c.oe=-1;function vc(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function HR(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function WR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=$g(e)),e=KR(r.get(t),e);return $g(e)}function KR(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function $g(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function qg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ds(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function X_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Un{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new gt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new J_("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const GR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=GR.exec(r);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ti(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function mf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wc(r){const e=r.mapValue.fields.__previous_value__;return mf(e)?wc(e):e}function Ha(r){const e=Ei(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QR{constructor(e,t,s,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class Wa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Cu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?mf(r)?4:XR(r)?9007199254740991:YR(r)?10:11:_e()}function or(r,e){if(r===e)return!0;const t=Ii(r);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ha(r).isEqual(Ha(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ei(o.timestampValue),f=Ei(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ti(o.bytesValue).isEqual(Ti(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Xu(h)===Xu(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(qg(h)!==qg(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!or(h[p],f[p])))return!1;return!0}(r,e);default:return _e()}}function Ka(r,e){return(r.values||[]).find(t=>or(t,e))!==void 0}function wo(r,e){if(r===e)return 0;const t=Ii(r),s=Ii(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(r,e);case 3:return Wg(r.timestampValue,e.timestampValue);case 4:return Wg(Ha(r),Ha(e));case 5:return De(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Ti(l),p=Ti(h);return f.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=De(f[y],p[y]);if(w!==0)return w}return De(f.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=De(st(l.latitude),st(h.latitude));return f!==0?f:De(st(l.longitude),st(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Kg(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,w;const T=l.fields||{},R=h.fields||{},V=(f=T.value)===null||f===void 0?void 0:f.arrayValue,F=(p=R.value)===null||p===void 0?void 0:p.arrayValue,$=De(((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0,((w=F==null?void 0:F.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:Kg(V,F)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Cu.mapValue&&h===Cu.mapValue)return 0;if(l===Cu.mapValue)return 1;if(h===Cu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const R=De(p[T],w[T]);if(R!==0)return R;const V=wo(f[p[T]],y[w[T]]);if(V!==0)return V}return De(p.length,w.length)}(r.mapValue,e.mapValue);default:throw _e()}}function Wg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ei(r),s=Ei(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function Kg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=wo(t[o],s[o]);if(l)return l}return De(t.length,s.length)}function Eo(r){return bd(r)}function bd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ti(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ge.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=bd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${bd(t.fields[h])}`;return o+"}"}(r.mapValue):_e()}function Mu(r){switch(Ii(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wc(r);return e?16+Mu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ti(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Mu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ds(s.fields,(l,h)=>{o+=l.length+Mu(h)}),o}(r.mapValue);default:throw _e()}}function Fd(r){return!!r&&"integerValue"in r}function gf(r){return!!r&&"arrayValue"in r}function Gg(r){return!!r&&"nullValue"in r}function Qg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bu(r){return!!r&&"mapValue"in r}function YR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ma(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ds(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ma(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ma(r.arrayValue.values[t]);return e}return Object.assign({},r)}function XR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!bu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ma(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());bu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];bu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ds(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new En(Ma(this.value))}}function Z_(r){const e=[];return ds(r.fields,(t,s)=>{const o=new kt([t]);if(bu(s)){const l=Z_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ut{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),En.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ju{constructor(e,t){this.position=e,this.inclusive=t}}function Yg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function JR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ev{}class pt extends ev{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new eA(e,t,s):t==="array-contains"?new rA(e,s):t==="in"?new iA(e,s):t==="not-in"?new sA(e,s):t==="array-contains-any"?new oA(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new tA(e,s):new nA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends ev{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ar(e,t)}matches(e){return tv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tv(r){return r.op==="and"}function nv(r){return ZR(r)&&tv(r)}function ZR(r){for(const e of r.filters)if(e instanceof ar)return!1;return!0}function Ud(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+Eo(r.value);if(nv(r))return r.filters.map(e=>Ud(e)).join(",");{const e=r.filters.map(t=>Ud(t)).join(",");return`${r.op}(${e})`}}function rv(r,e){return r instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)}(r,e):r instanceof ar?function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&rv(h,o.filters[f]),!0):!1}(r,e):void _e()}function iv(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`}(r):r instanceof ar?function(t){return t.op.toString()+" {"+t.getFilters().map(iv).join(" ,")+"}"}(r):"Filter"}class eA extends pt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class tA extends pt{constructor(e,t){super(e,"in",t),this.keys=sv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nA extends pt{constructor(e,t){super(e,"not-in",t),this.keys=sv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class rA extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gf(t)&&Ka(t.arrayValue,this.value)}}class iA extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class sA extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ka(this.value.arrayValue,t)}}class oA extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class aA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function Jg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new aA(r,e,t,s,o,l,h)}function yf(r){const e=Te(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ud(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Eo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Eo(s)).join(",")),e.ue=t}return e.ue}function _f(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!JR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!rv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Xg(r.startAt,e.startAt)&&Xg(r.endAt,e.endAt)}function zd(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ec{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lA(r,e,t,s,o,l,h,f){return new Ec(r,e,t,s,o,l,h,f)}function vf(r){return new Ec(r)}function Zg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uA(r){return r.collectionGroup!==null}function ba(r){const e=Te(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new gt(kt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Zu(l,s))}),t.has(kt.keyField().canonicalString())||e.ce.push(new Zu(kt.keyField(),s))}return e.ce}function Zn(r){const e=Te(r);return e.le||(e.le=cA(e,ba(r))),e.le}function cA(r,e){if(r.limitType==="F")return Jg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Zu(o.field,l)});const t=r.endAt?new Ju(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ju(r.startAt.position,r.startAt.inclusive):null;return Jg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function jd(r,e,t){return new Ec(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Tc(r,e){return _f(Zn(r),Zn(e))&&r.limitType===e.limitType}function ov(r){return`${yf(Zn(r))}|lt:${r.limitType}`}function uo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>iv(o)).join(", ")}]`),vc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Eo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Eo(o)).join(",")),`Target(${s})`}(Zn(r))}; limitType=${r.limitType})`}function Ic(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ge.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of ba(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,p){const y=Yg(h,f,p);return h.inclusive?y<=0:y<0}(s.startAt,ba(s),o)||s.endAt&&!function(h,f,p){const y=Yg(h,f,p);return h.inclusive?y>=0:y>0}(s.endAt,ba(s),o))}(r,e)}function hA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function av(r){return(e,t)=>{let s=!1;for(const o of ba(r)){const l=dA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function dA(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?wo(p,y):_e()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return X_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fA=new et(ge.comparator);function Or(){return fA}const lv=new et(ge.comparator);function xa(...r){let e=lv;for(const t of r)e=e.insert(t.key,t);return e}function uv(r){let e=lv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ts(){return Fa()}function cv(){return Fa()}function Fa(){return new fs(r=>r.toString(),(r,e)=>r.isEqual(e))}const pA=new et(ge.comparator),mA=new gt(ge.comparator);function ke(...r){let e=mA;for(const t of r)e=e.add(t);return e}const gA=new gt(De);function yA(){return gA}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function wf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function hv(r){return{integerValue:""+r}}function _A(r,e){return HR(e)?hv(e):wf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Sc{constructor(){this._=void 0}}function vA(r,e,t){return r instanceof ec?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&mf(l)&&(l=wc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Ga?fv(r,e):r instanceof Qa?pv(r,e):function(o,l){const h=dv(o,l),f=ey(h)+ey(o.Pe);return Fd(h)&&Fd(o.Pe)?hv(f):wf(o.serializer,f)}(r,e)}function wA(r,e,t){return r instanceof Ga?fv(r,e):r instanceof Qa?pv(r,e):t}function dv(r,e){return r instanceof tc?function(s){return Fd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class ec extends Sc{}class Ga extends Sc{constructor(e){super(),this.elements=e}}function fv(r,e){const t=mv(e);for(const s of r.elements)t.some(o=>or(o,s))||t.push(s);return{arrayValue:{values:t}}}class Qa extends Sc{constructor(e){super(),this.elements=e}}function pv(r,e){let t=mv(e);for(const s of r.elements)t=t.filter(o=>!or(o,s));return{arrayValue:{values:t}}}class tc extends Sc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ey(r){return st(r.integerValue||r.doubleValue)}function mv(r){return gf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function EA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ga&&o instanceof Ga||s instanceof Qa&&o instanceof Qa?vo(s.elements,o.elements,or):s instanceof tc&&o instanceof tc?or(s.Pe,o.Pe):s instanceof ec&&o instanceof ec}(r.transform,e.transform)}class TA{constructor(e,t){this.version=e,this.transformResults=t}}class er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rc{}function gv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ef(r.key,er.none()):new tl(r.key,r.data,er.none());{const t=r.data,s=En.empty();let o=new gt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new ps(r.key,s,new Un(o.toArray()),er.none())}}function IA(r,e,t){r instanceof tl?function(o,l,h){const f=o.value.clone(),p=ny(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof ps?function(o,l,h){if(!Fu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=ny(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(yv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ua(r,e,t,s){return r instanceof tl?function(l,h,f,p){if(!Fu(l.precondition,h))return f;const y=l.value.clone(),w=ry(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,e,t,s):r instanceof ps?function(l,h,f,p){if(!Fu(l.precondition,h))return f;const y=ry(l.fieldTransforms,p,h),w=h.data;return w.setAll(yv(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,f){return Fu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function SA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=dv(s.transform,o||null);l!=null&&(t===null&&(t=En.empty()),t.set(s.field,l))}return t||null}function ty(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,(l,h)=>EA(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class tl extends Rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends Rc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function ny(r,e,t){const s=new Map;Ue(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,wA(h,f,t[o]))}return s}function ry(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,vA(l,h,e))}return s}class Ef extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RA extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class AA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&IA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=gv(h,f);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(t,s)=>ty(t,s))&&vo(this.baseMutations,e.baseMutations,(t,s)=>ty(t,s))}}class Tf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=function(){return pA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Tf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class PA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class CA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var lt,Le;function kA(r){switch(r){default:return _e();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function _v(r){if(r===void 0)return Lr("GRPC error has no .code"),X.UNKNOWN;switch(r){case lt.OK:return X.OK;case lt.CANCELLED:return X.CANCELLED;case lt.UNKNOWN:return X.UNKNOWN;case lt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case lt.INTERNAL:return X.INTERNAL;case lt.UNAVAILABLE:return X.UNAVAILABLE;case lt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case lt.NOT_FOUND:return X.NOT_FOUND;case lt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case lt.ABORTED:return X.ABORTED;case lt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case lt.DATA_LOSS:return X.DATA_LOSS;default:return _e()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function NA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const DA=new ns([4294967295,4294967295],0);function iy(r){const e=NA().encode(r),t=new $_;return t.update(e),new Uint8Array(t.digest())}function sy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ns([t,s],0),new ns([o,l],0)]}class If{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(s<0)throw new Va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ns.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(ns.fromNumber(s)));return o.compare(DA)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=iy(e),[s,o]=sy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new If(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=iy(e),[s,o]=sy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ac{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ac(we.min(),o,new et(De),Or(),ke())}}class nl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nl(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Uu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class vv{constructor(e,t){this.targetId=e,this.me=t}}class wv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class oy{constructor(){this.fe=0,this.ge=ay(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),s=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e()}}),new nl(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=ay()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Or(),this.qe=ku(),this.Qe=ku(),this.Ke=new et(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(zd(l))if(s===0){const h=new ge(l.path);this.We(t,h,Ut.newNoDocument(h,we.min()))}else Ue(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ti(s).toUint8Array()}catch(p){if(p instanceof J_)return _o("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new If(h,o,l)}catch(p){return _o(p instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&zd(f.target)){const p=new ge(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=ke();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Ac(e,t,this.Ke,this.ke,s);return this.ke=Or(),this.qe=ku(),this.Qe=ku(),this.Ke=new et(De),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new oy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new oy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ku(){return new et(ge.comparator)}function ay(){return new et(ge.comparator)}const VA={asc:"ASCENDING",desc:"DESCENDING"},LA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OA={and:"AND",or:"OR"};class MA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bd(r,e){return r.useProto3Json||vc(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ev(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function bA(r,e){return nc(r,e.toTimestamp())}function tr(r){return Ue(!!r),we.fromTimestamp(function(t){const s=Ei(t);return new mt(s.seconds,s.nanos)}(r))}function Sf(r,e){return $d(r,e).canonicalString()}function $d(r,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Tv(r){const e=Ye.fromString(r);return Ue(Pv(e)),e}function qd(r,e){return Sf(r.databaseId,e.path)}function Ed(r,e){const t=Tv(e);if(t.get(1)!==r.databaseId.projectId)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ge(Sv(t))}function Iv(r,e){return Sf(r.databaseId,e)}function FA(r){const e=Tv(r);return e.length===4?Ye.emptyPath():Sv(e)}function Hd(r){return new Ye(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Sv(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ly(r,e,t){return{name:qd(r,e),fields:t.value.mapValue.fields}}function UA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Ue(w===void 0||typeof w=="string"),Nt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Nt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const w=y.code===void 0?X.UNKNOWN:_v(y.code);return new de(w,y.message||"")}(h);t=new wv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ed(r,s.document.name),l=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):we.min(),f=new En({mapValue:{fields:s.document.fields}}),p=Ut.newFoundDocument(o,l,h,f),y=s.targetIds||[],w=s.removedTargetIds||[];t=new Uu(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Ed(r,s.document),l=s.readTime?tr(s.readTime):we.min(),h=Ut.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Uu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Ed(r,s.document),l=s.removedTargetIds||[];t=new Uu([],l,o,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new CA(o,l),f=s.targetId;t=new vv(f,h)}}return t}function zA(r,e){let t;if(e instanceof tl)t={update:ly(r,e.key,e.value)};else if(e instanceof Ef)t={delete:qd(r,e.key)};else if(e instanceof ps)t={update:ly(r,e.key,e.data),updateMask:QA(e.fieldMask)};else{if(!(e instanceof RA))return _e();t={verify:qd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof tc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw _e()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:bA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e()}(r,e.precondition)),t}function jA(r,e){return r&&r.length>0?(Ue(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?tr(o.updateTime):tr(l);return h.isEqual(we.min())&&(h=tr(l)),new TA(h,o.transformResults||[])}(t,e))):[]}function BA(r,e){return{documents:[Iv(r,e.path)]}}function $A(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Iv(r,o);const l=function(y){if(y.length!==0)return Av(ar.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(R){return{field:co(R.field),direction:WA(R.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Bd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function qA(r){let e=FA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const R=Rv(T);return R instanceof ar&&nv(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(F){return new Zu(ho(F.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(R))}(t.orderBy));let f=null;t.limit&&(f=function(T){let R;return R=typeof T=="object"?T.value:T,vc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,V=T.values||[];return new Ju(V,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,V=T.values||[];return new Ju(V,R)}(t.endAt)),lA(e,o,h,l,f,"F",p,y)}function HA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ho(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(r):r.fieldFilter!==void 0?function(t){return pt.create(ho(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ar.create(t.compositeFilter.filters.map(s=>Rv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e()}}(t.compositeFilter.op))}(r):_e()}function WA(r){return VA[r]}function KA(r){return LA[r]}function GA(r){return OA[r]}function co(r){return{fieldPath:r.canonicalString()}}function ho(r){return kt.fromServerFormat(r.fieldPath)}function Av(r){return r instanceof pt?function(t){if(t.op==="=="){if(Qg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(Gg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(Gg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:KA(t.op),value:t.value}}}(r):r instanceof ar?function(t){const s=t.getFilters().map(o=>Av(o));return s.length===1?s[0]:{compositeFilter:{op:GA(t.op),filters:s}}}(r):_e()}function QA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mi{constructor(e,t,s,o,l=we.min(),h=we.min(),f=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class YA{constructor(e){this.ht=e}}function XA(r){const e=qA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?jd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class JA{constructor(){this.ln=new ZA}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(wi.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class ZA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(Ye.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const uy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class To{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new To(0)}static Qn(){return new To(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function cy([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class eP{constructor(e){this.Gn=e,this.buffer=new gt(cy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();cy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tP{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Yn(3e5)})}}class nP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return H.resolve(_c.oe);const s=new eP(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(uy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,l,h,f,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,f=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(y=Date.now(),lo()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function rP(r,e){return new nP(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class iP{constructor(){this.changes=new fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class sP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oP{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ua(s.mutation,o,Un.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=ts();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=xa();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ts();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=Or();const h=Fa(),f=function(){return Fa()}();return t.forEach((p,y)=>{const w=s.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof ps)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),Ua(w.mutation,y,w.mutation.getFieldMask(),mt.now())):h.set(y.key,Un.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var T;return f.set(y,new sP(w,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Fa();let o=new et((h,f)=>h-f),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=s.get(p)||Un.empty();w=f.applyToLocalView(y,w),s.set(p,w);const T=(o.get(f.batchId)||ke()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,T=cv();w.forEach(R=>{if(!l.has(R)){const V=gv(t.get(R),s.get(R));V!==null&&T.set(R,V),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(ts());let f=-1,p=l;return h.next(y=>H.forEach(y,(w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(R=>{p=p.insert(w,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(w=>({batchId:f,changes:uv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let o=xa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=xa();return this.indexManager.getCollectionParents(e,l).next(f=>H.forEach(f,p=>{const y=function(T,R){return new Ec(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(w=>{w.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let f=xa();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&Ua(w.mutation,y,Un.empty(),mt.now()),Ic(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class aP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:XA(o.bundledQuery),readTime:tr(o.readTime)}}(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lP{constructor(){this.overlays=new et(ge.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ts();return H.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Tt(e,t,l)}),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ts(),l=t.length+1,h=new ge(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let w=l.get(y.largestBatchId);w===null&&(w=ts(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ts(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>f.set(y,w)),!(f.size()>=o)););return H.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new PA(t,s));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class uP{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rf{constructor(){this.dr=new gt(Tt.Ar),this.Rr=new gt(Tt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Tt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ge(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1);let l=ke();return this.Rr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Tt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(Tt.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new AA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Tt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);l.push(f)}),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(De);return t.forEach(o=>{const l=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{s=s.add(f.br)})}),H.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ge.isDocumentKey(l)||(l=l.child(""));const h=new Tt(new ge(l),0);let f=new gt(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),H.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return H.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Tt(t,0),o=this.vr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hP{constructor(e){this.Nr=e,this.docs=function(){return new et(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Or();const h=t.path,f=new ge(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||jR(zR(w),s)<=0||(o.has(w.key)||Ic(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e()}Lr(e,t){return H.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new dP(this)}getSize(e){return H.resolve(this.size)}}class dP extends iP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fP{constructor(e){this.persistence=e,this.Br=new fs(t=>yf(t),_f),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Rf,this.targetCount=0,this.Qr=To.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new To(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),H.waitFor(l).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new _c(0),this.Ur=!1,this.Ur=!0,this.Wr=new uP,this.referenceDelegate=e(this),this.Gr=new fP(this),this.indexManager=new JA,this.remoteDocumentCache=function(o){return new hP(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new YA(t),this.jr=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new cP(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new pP(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return H.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class pP extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.Zr=new Rf,this.Xr=null}static ei(e){return new Af(e)}get ti(){if(this.Xr)return this.Xr;throw _e()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,s=>{const o=ge.fromPath(s);return this.ni(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.ri=new fs(s=>WR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=rP(this,t)}static ei(e,t){return new rc(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(l=>l?H.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mu(e.data.value)),t}ir(e,t,s){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Pf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class gP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return qI()?8:qR(zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new mP;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(lo()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(lo()<=Ce.DEBUG&&se("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(lo()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):H.resolve())}Xi(e,t){if(Zg(t))return H.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=jd(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,jd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,s,o){return Zg(t)||o.isEqual(we.min())?H.resolve(null):this.Zi.getDocuments(e,s).next(l=>{const h=this.rs(t,l);return this.ss(t,h,s,o)?H.resolve(null):(lo()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.os(e,h,t,UR(o,-1)).next(f=>f))})}rs(e,t){let s=new gt(av(e));return t.forEach((o,l)=>{Ic(e,l)&&(s=s.add(l))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,s){return lo()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",uo(t)),this.Zi.getDocumentsMatchingQuery(e,t,wi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class yP{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(De),this.cs=new fs(l=>yf(l),_f),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function _P(r,e,t,s){return new yP(r,e,t,s)}async function kv(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let p=ke();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(s,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function vP(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,w){const T=y.batch,R=T.keys();let V=H.resolve();return R.forEach(F=>{V=V.next(()=>w.getEntry(p,F)).next($=>{const z=y.docVersions.get(F);Ue(z!==null),$.version.compareTo(z)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),w.addEntry($)))})}),V.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=ke();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Nv(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function wP(r,e){const t=Te(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((w,T)=>{const R=o.get(T);if(!R)return;f.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,T)));let V=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(w.resumeToken,s)),o=o.insert(T,V),function($,z,W){return $.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(R,V,w)&&f.push(t.Gr.updateTargetData(l,V))});let p=Or(),y=ke();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(EP(l,h,e.documentUpdates).next(w=>{p=w.Is,y=w.Es})),!s.isEqual(we.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(w)}return H.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function EP(r,e,t){let s=ke(),o=ke();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Or();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):se("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function TP(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function IP(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(l=>l?(o=l,H.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Wd(r,e,t){const s=Te(r),o=s.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Do(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function hy(r,e,t){const s=Te(r);let o=we.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,w){const T=Te(p),R=T.cs.get(w);return R!==void 0?H.resolve(T.us.get(R)):T.Gr.getTargetData(y,w)}(s,h,Zn(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke())).next(f=>(SP(s,hA(e),f),{documents:f,ds:l})))}function SP(r,e,t){let s=r.ls.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.ls.set(e,s)}class dy{constructor(){this.activeTargetIds=yA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this._o=new dy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new dy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class AP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class fy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Nu=null;function Td(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const PP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class CP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bt="WebChannelConnection";class kP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,s,o,l,h){const f=Td(),p=this.No(t,s.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(w=>(se("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw _o("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",o),w})}ko(t,s,o,l,h,f){return this.Oo(t,s,o,l,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,s){const o=PP[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const l=Td();return new Promise((h,f)=>{const p=new q_;p.setWithCredentials(!0),p.listenOnce(H_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Ou.NO_ERROR:const w=p.getResponseJson();se(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Ou.TIMEOUT:se(bt,`RPC '${e}' ${l} timed out`),f(new de(X.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const T=p.getStatus();if(se(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const F=function(z){const W=z.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(W)>=0?W:X.UNKNOWN}(V.status);f(new de(F,V.message))}else f(new de(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new de(X.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{se(bt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);se(bt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,s,15)})}qo(e,t,s){const o=Td(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=G_(),f=K_(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const w=l.join("");se(bt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let R=!1,V=!1;const F=new CP({Eo:z=>{V?se(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(R||(se(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),se(bt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Ao:()=>T.close()}),$=(z,W,Y)=>{z.listen(W,ne=>{try{Y(ne)}catch(ce){setTimeout(()=>{throw ce},0)}})};return $(T,Da.EventType.OPEN,()=>{V||(se(bt,`RPC '${e}' stream ${o} transport opened.`),F.So())}),$(T,Da.EventType.CLOSE,()=>{V||(V=!0,se(bt,`RPC '${e}' stream ${o} transport closed`),F.Do())}),$(T,Da.EventType.ERROR,z=>{V||(V=!0,_o(bt,`RPC '${e}' stream ${o} transport errored:`,z),F.Do(new de(X.UNAVAILABLE,"The operation could not be completed")))}),$(T,Da.EventType.MESSAGE,z=>{var W;if(!V){const Y=z.data[0];Ue(!!Y);const ne=Y,ce=(ne==null?void 0:ne.error)||((W=ne[0])===null||W===void 0?void 0:W.error);if(ce){se(bt,`RPC '${e}' stream ${o} received error:`,ce);const Ie=ce.status;let Ee=function(A){const k=lt[A];if(k!==void 0)return _v(k)}(Ie),N=ce.message;Ee===void 0&&(Ee=X.INTERNAL,N="Unknown error status: "+Ie+" with message "+ce.message),V=!0,F.Do(new de(Ee,N)),T.close()}else se(bt,`RPC '${e}' stream ${o} received:`,Y),F.vo(Y)}}),$(f,W_.STAT_EVENT,z=>{z.stat===Md.PROXY?se(bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Md.NOPROXY&&se(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.bo()},0),F}}function Id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Pc(r){return new MA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xv{constructor(e,t,s,o,l,h,f,p){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Dv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new de(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NP extends xv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=UA(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?tr(h.readTime):we.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Hd(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=zd(p)?{documents:BA(l,p)}:{query:$A(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Ev(l,h.resumeToken);const y=Bd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=nc(l,h.snapshotVersion.toTimestamp());const y=Bd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const s=HA(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Hd(this.serializer),t.removeTarget=e,this.c_(t)}}class DP extends xv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=jA(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Hd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>zA(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xP extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,$d(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(X.UNKNOWN,l.toString())})}ko(e,t,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,$d(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(X.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class VP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Lr(t),this.C_=!1):se("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LP{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ms(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Te(p);y.k_.add(4),await rl(y),y.K_.set("Unknown"),y.k_.delete(4),await Cc(y)}(this))})}),this.K_=new VP(s,o)}}async function Cc(r){if(ms(r))for(const e of r.q_)await e(!0)}async function rl(r){for(const e of r.q_)await e(!1)}function Vv(r,e){const t=Te(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Df(t)?Nf(t):xo(t).s_()&&kf(t,e))}function Cf(r,e){const t=Te(r),s=xo(t);t.B_.delete(e),s.s_()&&Lv(t,e),t.B_.size===0&&(s.s_()?s.a_():ms(t)&&t.K_.set("Unknown"))}function kf(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(r).V_(e)}function Lv(r,e){r.U_.xe(e),xo(r).m_(e)}function Nf(r){r.U_=new xA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.K_.F_()}function Df(r){return ms(r)&&!xo(r).i_()&&r.B_.size>0}function ms(r){return Te(r).k_.size===0}function Ov(r){r.U_=void 0}async function OP(r){r.K_.set("Online")}async function MP(r){r.B_.forEach((e,t)=>{kf(r,e)})}async function bP(r,e){Ov(r),Df(r)?(r.K_.O_(e),Nf(r)):r.K_.set("Unknown")}async function FP(r,e,t){if(r.K_.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(r,s)}else if(e instanceof Uu?r.U_.$e(e):e instanceof vv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(we.min()))try{const s=await Nv(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.B_.get(y);w&&l.B_.set(y,w.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const w=l.B_.get(p);if(!w)return;l.B_.set(p,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Lv(l,p);const T=new mi(w.target,p,y,w.sequenceNumber);kf(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await ic(r,s)}}async function ic(r,e,t){if(!Do(e))throw e;r.k_.add(1),await rl(r),r.K_.set("Offline"),t||(t=()=>Nv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await Cc(r)})}function Mv(r,e){return e().catch(t=>ic(r,t,e))}async function kc(r){const e=Te(r),t=Si(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;UP(e);)try{const o=await TP(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,zP(e,o)}catch(o){await ic(e,o)}bv(e)&&Fv(e)}function UP(r){return ms(r)&&r.L_.length<10}function zP(r,e){r.L_.push(e);const t=Si(r);t.s_()&&t.f_&&t.g_(e.mutations)}function bv(r){return ms(r)&&!Si(r).i_()&&r.L_.length>0}function Fv(r){Si(r).start()}async function jP(r){Si(r).w_()}async function BP(r){const e=Si(r);for(const t of r.L_)e.g_(t.mutations)}async function $P(r,e,t){const s=r.L_.shift(),o=Tf.from(s,e,t);await Mv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await kc(r)}async function qP(r,e){e&&Si(r).f_&&await async function(s,o){if(function(h){return kA(h)&&h!==X.ABORTED}(o.code)){const l=s.L_.shift();Si(s).__(),await Mv(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await kc(s)}}(r,e),bv(r)&&Fv(r)}async function py(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=ms(t);t.k_.add(3),await rl(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Cc(t)}async function HP(r,e){const t=Te(r);e?(t.k_.delete(2),await Cc(t)):e||(t.k_.add(2),await rl(t),t.K_.set("Unknown"))}function xo(r){return r.W_||(r.W_=function(t,s,o){const l=Te(t);return l.b_(),new NP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:OP.bind(null,r),mo:MP.bind(null,r),po:bP.bind(null,r),R_:FP.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Df(r)?Nf(r):r.K_.set("Unknown")):(await r.W_.stop(),Ov(r))})),r.W_}function Si(r){return r.G_||(r.G_=function(t,s,o){const l=Te(t);return l.b_(),new DP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:jP.bind(null,r),po:qP.bind(null,r),p_:BP.bind(null,r),y_:$P.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await kc(r)):(await r.G_.stop(),r.L_.length>0&&(se("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new xf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),Do(r))return new de(X.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=xa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class my{constructor(){this.z_=new et(ge.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):_e():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Io{constructor(e,t,s,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Io(e,t,po.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class KP{constructor(){this.queries=gy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Te(t),l=o.queries;o.queries=gy(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(s)})})(this,new de(X.ABORTED,"Firestore shutting down"))}}function gy(){return new fs(r=>ov(r),Tc)}async function Uv(r,e){const t=Te(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(s=2):(l=new WP,s=e.Z_()?0:1);try{switch(s){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Vf(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Lf(t)}async function zv(r,e){const t=Te(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function GP(r,e){const t=Te(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&Lf(t)}function QP(r,e,t){const s=Te(r),o=s.queries.get(e);if(o)for(const l of o.J_)l.onError(t);s.queries.delete(e)}function Lf(r){r.X_.forEach(e=>{e.next()})}var Kd,yy;(yy=Kd||(Kd={})).na="default",yy.Cache="cache";class jv{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Kd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bv{constructor(e){this.key=e}}class $v{constructor(e){this.key=e}}class YP{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=av(e),this.ma=new po(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new my,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const R=o.get(w),V=Ic(this.query,T)?T:null,F=!!R&&this.mutatedKeys.has(R.key),$=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let z=!1;R&&V?R.data.isEqual(V.data)?F!==$&&(s.track({type:3,doc:V}),z=!0):this.ya(R,V)||(s.track({type:2,doc:V}),z=!0,(p&&this.Va(V,p)>0||y&&this.Va(V,y)<0)&&(f=!0)):!R&&V?(s.track({type:0,doc:V}),z=!0):R&&!V&&(s.track({type:1,doc:R}),z=!0,(p||y)&&(f=!0)),z&&(V?(h=h.add(V),l=$?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,T)=>function(V,F){const $=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return $(V)-$(F)}(w.type,T.type)||this.Va(w.doc,T.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Io(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new my,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new $v(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new Bv(s))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Io.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class XP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class JP{constructor(e){this.key=e,this.Fa=!1}}class ZP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new fs(f=>ov(f),Tc),this.Oa=new Map,this.Na=new Set,this.La=new et(ge.comparator),this.Ba=new Map,this.ka=new Rf,this.qa={},this.Qa=new Map,this.Ka=To.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function eC(r,e,t=!0){const s=Qv(r);let o;const l=s.xa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await qv(s,e,t,!0),o}async function tC(r,e){const t=Qv(r);await qv(t,e,!0,!1)}async function qv(r,e,t,s){const o=await IP(r.localStore,Zn(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await nC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Vv(r.remoteStore,o),f}async function nC(r,e,t,s,o){r.Ua=(T,R,V)=>async function($,z,W,Y){let ne=z.view.ga(W);ne.ss&&(ne=await hy($.localStore,z.query,!1).then(({documents:N})=>z.view.ga(N,ne)));const ce=Y&&Y.targetChanges.get(z.targetId),Ie=Y&&Y.targetMismatches.get(z.targetId)!=null,Ee=z.view.applyChanges(ne,$.isPrimaryClient,ce,Ie);return vy($,z.targetId,Ee.ba),Ee.snapshot}(r,T,R,V);const l=await hy(r.localStore,e,!0),h=new YP(e,l.ds),f=h.ga(l.documents),p=nl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,p);vy(r,t,y.ba);const w=new XP(e,t,h);return r.xa.set(e,w),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),y.snapshot}async function rC(r,e,t){const s=Te(r),o=s.xa.get(e),l=s.Oa.get(o.targetId);if(l.length>1)return s.Oa.set(o.targetId,l.filter(h=>!Tc(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Wd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Cf(s.remoteStore,o.targetId),Gd(s,o.targetId)}).catch(No)):(Gd(s,o.targetId),await Wd(s.localStore,o.targetId,!0))}async function iC(r,e){const t=Te(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Cf(t.remoteStore,s.targetId))}async function sC(r,e,t){const s=dC(r);try{const o=await function(h,f){const p=Te(h),y=mt.now(),w=f.reduce((V,F)=>V.add(F.key),ke());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",V=>{let F=Or(),$=ke();return p.hs.getEntries(V,w).next(z=>{F=z,F.forEach((W,Y)=>{Y.isValidDocument()||($=$.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(V,F)).next(z=>{T=z;const W=[];for(const Y of f){const ne=SA(Y,T.get(Y.key).overlayedDocument);ne!=null&&W.push(new ps(Y.key,ne,Z_(ne.value.mapValue),er.exists(!0)))}return p.mutationQueue.addMutationBatch(V,y,W,f)}).next(z=>{R=z;const W=z.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(V,z.batchId,W)})}).then(()=>({batchId:R.batchId,changes:uv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(De)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(s,o.batchId,t),await il(s,o.changes),await kc(s.remoteStore)}catch(o){const l=Vf(o,"Failed to persist write");t.reject(l)}}async function Hv(r,e){const t=Te(r);try{const s=await wP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await il(t,s,e)}catch(s){await No(s)}}function _y(r,e,t){const s=Te(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Te(h);p.onlineState=f;let y=!1;p.queries.forEach((w,T)=>{for(const R of T.J_)R.ea(f)&&(y=!0)}),y&&Lf(p)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function oC(r,e,t){const s=Te(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),l=o&&o.key;if(l){let h=new et(ge.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const f=ke().add(l),p=new Ac(we.min(),new Map,new et(De),h,f);await Hv(s,p),s.La=s.La.remove(l),s.Ba.delete(e),Of(s)}else await Wd(s.localStore,e,!1).then(()=>Gd(s,e,t)).catch(No)}async function aC(r,e){const t=Te(r),s=e.batch.batchId;try{const o=await vP(t.localStore,e);Kv(t,s,null),Wv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await il(t,o)}catch(o){await No(o)}}async function lC(r,e,t){const s=Te(r);try{const o=await function(h,f){const p=Te(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Ue(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(s.localStore,e);Kv(s,e,t),Wv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await il(s,o)}catch(o){await No(o)}}function Wv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Kv(r,e,t){const s=Te(r);let o=s.qa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Gd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||Gv(r,s)})}function Gv(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Cf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),Of(r))}function vy(r,e,t){for(const s of t)s instanceof Bv?(r.ka.addReference(s.key,e),uC(r,s)):s instanceof $v?(se("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||Gv(r,s.key)):_e()}function uC(r,e){const t=e.key,s=t.path.canonicalString();r.La.get(t)||r.Na.has(s)||(se("SyncEngine","New document in limbo: "+t),r.Na.add(s),Of(r))}function Of(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new ge(Ye.fromString(e)),s=r.Ka.next();r.Ba.set(s,new JP(t)),r.La=r.La.insert(t,s),Vv(r.remoteStore,new mi(Zn(vf(t.path)),s,"TargetPurposeLimboResolution",_c.oe))}}async function il(r,e,t){const s=Te(r),o=[],l=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,p)=>{h.push(s.Ua(p,e,t).then(y=>{var w;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Pf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(p,y){const w=Te(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>H.forEach(y,R=>H.forEach(R.Wi,V=>w.persistence.referenceDelegate.addReference(T,R.targetId,V)).next(()=>H.forEach(R.Gi,V=>w.persistence.referenceDelegate.removeReference(T,R.targetId,V)))))}catch(T){if(!Do(T))throw T;se("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const V=w.us.get(R),F=V.snapshotVersion,$=V.withLastLimboFreeSnapshotVersion(F);w.us=w.us.insert(R,$)}}}(s.localStore,l))}async function cC(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await kv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new de(X.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await il(t,s.Ts)}}function hC(r,e){const t=Te(r),s=t.Ba.get(e);if(s&&s.Fa)return ke().add(s.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function Qv(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oC.bind(null,e),e.Ma.R_=GP.bind(null,e.eventManager),e.Ma.Wa=QP.bind(null,e.eventManager),e}function dC(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lC.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return _P(this.persistence,new gP,e.initialUser,this.serializer)}ja(e){return new Cv(Af.ei,this.serializer)}za(e){return new RP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class fC extends sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof rc);const s=this.persistence.referenceDelegate.garbageCollector;return new tP(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Cv(s=>rc.ei(s,t),this.serializer)}}class Qd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_y(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cC.bind(null,this.syncEngine),await HP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KP}()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),s=function(l){return new kP(l)}(e.databaseInfo);return function(l,h,f,p){return new xP(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new LP(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>_y(this.syncEngine,t,0),function(){return fy.p()?new fy:new AP}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,w){const T=new ZP(o,l,h,f,p,y);return w&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);se("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await rl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qd.provider={build:()=>new Qd};/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Y_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Sd(r,e){r.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await kv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function wy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await mC(r);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>py(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>py(e.remoteStore,o)),r._onlineComponents=e}async function mC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;_o("Error using user provided cache. Falling back to memory cache: "+t),await Sd(r,new sc)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Sd(r,new fC(void 0));return r._offlineComponents}async function Xv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await wy(r,r._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await wy(r,new Qd))),r._onlineComponents}function gC(r){return Xv(r).then(e=>e.syncEngine)}async function Jv(r){const e=await Xv(r),t=e.eventManager;return t.onListen=eC.bind(null,e.syncEngine),t.onUnlisten=rC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iC.bind(null,e.syncEngine),t}function yC(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const w=new Yv({next:R=>{w.eu(),h.enqueueAndForget(()=>zv(l,T));const V=R.docs.has(f);!V&&R.fromCache?y.reject(new de(X.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&p&&p.source==="server"?y.reject(new de(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new jv(vf(f.path),w,{includeMetadataChanges:!0,ua:!0});return Uv(l,T)}(await Jv(r),r.asyncQueue,e,t,s)),s.promise}function _C(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const w=new Yv({next:R=>{w.eu(),h.enqueueAndForget(()=>zv(l,T)),R.fromCache&&p.source==="server"?y.reject(new de(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new jv(f,w,{includeMetadataChanges:!0,ua:!0});return Uv(l,T)}(await Jv(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Zv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ey=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ew(r,e,t){if(!t)throw new de(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vC(r,e,t,s){if(e===!0&&s===!0)throw new de(X.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ty(r){if(!ge.isDocumentKey(r))throw new de(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Iy(r){if(ge.isDocumentKey(r))throw new de(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Mf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e()}function as(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mf(r);throw new de(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Sy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new NR;switch(s.type){case"firstParty":return new LR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ey.get(t);s&&(se("ComponentProvider","Removing Datastore"),Ey.delete(t),s.terminate())}(this),Promise.resolve()}}function wC(r,e,t,s={}){var o;const l=(r=as(r,Nc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Ft.MOCK_USER;else{f=FI(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new de(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}r._authCredentials=new DR(new Q_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Dc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dc(this.firestore,e,this._query)}}class In{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class _i extends Dc{constructor(e,t,s){super(e,t,vf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new ge(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function EC(r,e,...t){if(r=cn(r),ew("collection","path",e),r instanceof Nc){const s=Ye.fromString(e,...t);return Iy(s),new _i(r,null,s)}{if(!(r instanceof In||r instanceof _i))throw new de(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Iy(s),new _i(r.firestore,null,s)}}function bf(r,e,...t){if(r=cn(r),arguments.length===1&&(e=Y_.newId()),ew("doc","path",e),r instanceof Nc){const s=Ye.fromString(e,...t);return Ty(s),new In(r,null,new ge(s))}{if(!(r instanceof In||r instanceof _i))throw new de(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Ty(s),new In(r.firestore,r instanceof _i?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ry{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Dv(this,"async_queue_retry"),this.fu=()=>{const s=Id();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new xr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Do(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Lr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=xf.createAndSchedule(this,e,t,s,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&_e()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class sl extends Nc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Ry,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ry(e),this._firestoreClient=void 0,await e}}}function TC(r,e){const t=typeof r=="object"?r:lf(),s=typeof r=="string"?r:"(default)",o=hs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=MI("firestore");l&&wC(o,...l)}return o}function Ff(r){if(r._terminated)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||IC(r),r._firestoreClient}function IC(r){var e,t,s;const o=r._freezeSettings(),l=function(f,p,y,w){return new QR(f,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Zv(w.experimentalLongPollingOptions),w.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new pC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class So{constructor(e){this._byteString=e}static fromBase64String(e){try{return new So(Nt.fromBase64String(e))}catch(t){throw new de(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new So(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Uf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class tw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const SC=/^__.*__$/;class RC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new tl(e,this.data,t,this.fieldTransforms)}}function nw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Bf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(nw(this.Mu)&&SC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class AC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Pc(e)}$u(e,t,s,o=!1){return new Bf({Mu:e,methodName:t,Ku:s,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PC(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new AC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function CC(r,e,t,s,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);ow("Data must be an object, but it was:",h,s);const f=iw(s,h);let p,y;if(l.merge)p=new Un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const R=kC(e,T,t);if(!h.contains(R))throw new de(X.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);DC(w,R)||w.push(R)}p=new Un(w),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new RC(new En(f),p,y)}function rw(r,e){if(sw(r=cn(r)))return ow("Unsupported field value:",e,r),iw(r,e);if(r instanceof tw)return function(s,o){if(!nw(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let p=rw(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=cn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return _A(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=mt.fromDate(s);return{timestampValue:nc(o.serializer,l)}}if(s instanceof mt){const l=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(s instanceof zf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof So)return{bytesValue:Ev(o.serializer,s._byteString)};if(s instanceof In){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Sf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return wf(f.serializer,p)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Mf(s)}`)}(r,e)}function iw(r,e){const t={};return X_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(r,(s,o)=>{const l=rw(o,e.Ou(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function sw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof zf||r instanceof So||r instanceof In||r instanceof tw||r instanceof jf)}function ow(r,e,t){if(!sw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Mf(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function kC(r,e,t){if((e=cn(e))instanceof Uf)return e._internalPath;if(typeof e=="string")return aw(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const NC=new RegExp("[~\\*/\\[\\]]");function aw(r,e,t){if(e.search(NC)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Uf(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new de(X.INVALID_ARGUMENT,f+r+p)}function DC(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class lw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(uw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xC extends lw{data(){return super.data()}}function uw(r,e){return typeof e=="string"?aw(r,e):e instanceof Uf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function VC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new de(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class LC{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ds(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new jf(l)}convertGeoPoint(e){return new zf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=wc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Ue(Pv(s));const o=new Wa(s.get(1),s.get(3)),l=new ge(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function OC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cw extends lw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(uw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class zu extends cw{data(e={}){return super.data(e)}}class MC{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new zu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new La(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new La(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:bC(f.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function FC(r){r=as(r,In);const e=as(r.firestore,sl);return yC(Ff(e),r._key).then(t=>BC(e,r,t))}class hw extends LC{constructor(e){super(),this.firestore=e}convertBytes(e){return new So(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new In(this.firestore,null,t)}}function UC(r){r=as(r,Dc);const e=as(r.firestore,sl),t=Ff(e),s=new hw(e);return VC(r._query),_C(t,r._query).then(o=>new MC(e,s,r,o))}function zC(r){return dw(as(r.firestore,sl),[new Ef(r._key,er.none())])}function jC(r,e){const t=as(r.firestore,sl),s=bf(r),o=OC(r.converter,e);return dw(t,[CC(PC(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,er.exists(!1))]).then(()=>s)}function dw(r,e){return function(s,o){const l=new xr;return s.asyncQueue.enqueueAndForget(async()=>sC(await gC(s),o,l)),l.promise}(Ff(r),e)}function BC(r,e,t){const s=t.docs.get(e._key),o=new hw(r);return new cw(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){ko=o})(Co),sr(new zn("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new sl(new xR(s.getProvider("auth-internal")),new MR(s.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new de(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Tn(Bg,"4.7.5",e),Tn(Bg,"4.7.5","esm2017")})();function $f(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $C=fw,pw=new cs("auth","Firebase",fw());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ac=new mc("@firebase/auth");function qC(r,...e){ac.logLevel<=Ce.WARN&&ac.warn(`Auth (${Co}): ${r}`,...e)}function ju(r,...e){ac.logLevel<=Ce.ERROR&&ac.error(`Auth (${Co}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Mr(r,...e){throw qf(r,...e)}function nr(r,...e){return qf(r,...e)}function mw(r,e,t){const s=Object.assign(Object.assign({},$C()),{[e]:t});return new cs("auth","Firebase",s).create(e,{appName:r.name})}function rs(r){return mw(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return pw.create(r,...e)}function ve(r,e,...t){if(!r)throw qf(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ju(e),new Error(e)}function br(r,e){r||Cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Yd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function HC(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function WC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HC()||d_()||"connection"in navigator)?navigator.onLine:!0}function KC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=UI()||BI()}get(){return WC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Hf(r,e){br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const GC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const QC=new ol(3e4,6e4);function Wf(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Vo(r,e,t,s,o={}){return yw(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=el(Object.assign({key:r.config.apiKey},h)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},l);return jI()||(y.referrerPolicy="no-referrer"),gw.fetch()(_w(r,r.config.apiHost,t,f),y)})}async function yw(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},GC),e);try{const o=new XC(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Du(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(r,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Du(r,"email-already-in-use",h);if(p==="USER_DISABLED")throw Du(r,"user-disabled",h);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw mw(r,w,y);Mr(r,w)}}catch(o){if(o instanceof jn)throw o;Mr(r,"network-request-failed",{message:String(o)})}}async function YC(r,e,t,s,o={}){const l=await Vo(r,e,t,s,o);return"mfaPendingCredential"in l&&Mr(r,"multi-factor-auth-required",{_serverResponse:l}),l}function _w(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Hf(r.config,o):`${r.config.apiScheme}://${o}`}class XC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),QC.get())})}}function Du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function JC(r,e){return Vo(r,"POST","/v1/accounts:delete",e)}async function vw(r,e){return Vo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZC(r,e=!1){const t=cn(r),s=await t.getIdToken(e),o=Kf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:za(Rd(o.auth_time)),issuedAtTime:za(Rd(o.iat)),expirationTime:za(Rd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Rd(r){return Number(r)*1e3}function Kf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=l_(t);return o?JSON.parse(o):(ju("Failed to decode base64 JWT payload"),null)}catch(o){return ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Py(r){const e=Kf(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ya(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof jn&&ek(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ek({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function lc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Ya(r,vw(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?ww(l.providerUserInfo):[],f=rk(r.providerData,h),p=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Xd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function nk(r){const e=cn(r);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rk(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ww(r){return r.map(e=>{var{providerId:t}=e,s=$f(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ik(r,e){const t=await yw(r,{},async()=>{const s=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=_w(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",gw.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sk(r,e){return Vo(r,"POST","/v2/accounts:revokeToken",Wf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await ik(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new mo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ui(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Xd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZC(this,e)}reload(){return nk(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pi(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await Ya(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,p,y,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,z=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Y=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ne,emailVerified:ce,isAnonymous:Ie,providerData:Ee,stsTokenManager:N}=t;ve(ne&&N,e,"internal-error");const I=mo.fromJSON(this.name,N);ve(typeof ne=="string",e,"internal-error"),ui(T,e.name),ui(R,e.name),ve(typeof ce=="boolean",e,"internal-error"),ve(typeof Ie=="boolean",e,"internal-error"),ui(V,e.name),ui(F,e.name),ui($,e.name),ui(z,e.name),ui(W,e.name),ui(Y,e.name);const A=new kr({uid:ne,auth:e,email:R,emailVerified:ce,displayName:T,isAnonymous:Ie,photoURL:F,phoneNumber:V,tenantId:$,stsTokenManager:I,createdAt:W,lastLoginAt:Y});return Ee&&Array.isArray(Ee)&&(A.providerData=Ee.map(k=>Object.assign({},k))),z&&(A._redirectEventId=z),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new mo;o.updateFromServerResponse(t);const l=new kr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await lc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?ww(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new mo;f.updateFromIdToken(s);const p=new kr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Cy=new Map;function Nr(r){br(r instanceof Function,"Expected a class definition");let e=Cy.get(r);return e?(br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Cy.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ew.type="NONE";const ky=Ew;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Bu(r,e,t){return`firebase:${r}:${e}:${t}`}class go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Bu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Bu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new go(Nr(ky),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Nr(ky);const h=Bu(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){const T=kr._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new go(l,e,s):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new go(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ny(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pw(e))return"Blackberry";if(Cw(e))return"Webos";if(Iw(e))return"Safari";if((e.includes("chrome/")||Sw(e))&&!e.includes("edge/"))return"Chrome";if(Aw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tw(r=zt()){return/firefox\//i.test(r)}function Iw(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sw(r=zt()){return/crios\//i.test(r)}function Rw(r=zt()){return/iemobile/i.test(r)}function Aw(r=zt()){return/android/i.test(r)}function Pw(r=zt()){return/blackberry/i.test(r)}function Cw(r=zt()){return/webos/i.test(r)}function Gf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ok(r=zt()){var e;return Gf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ak(){return $I()&&document.documentMode===10}function kw(r=zt()){return Gf(r)||Aw(r)||Cw(r)||Pw(r)||/windows phone/i.test(r)||Rw(r)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Nw(r,e=[]){let t;switch(r){case"Browser":t=Ny(zt());break;case"Worker":t=`${Ny(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function uk(r,e={}){return Vo(r,"GET","/v2/passwordPolicy",Wf(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const ck=6;class hk{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:ck,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class dk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vw(this,{idToken:e}),s=await kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pi(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pi(this.app))return Promise.reject(rs(this));const t=e?cn(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pi(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pi(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uk(this),t=new hk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await sk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qf(r){return cn(r)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=YI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let Yf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fk(r){Yf=r}function pk(r){return Yf.loadJS(r)}function mk(){return Yf.gapiScript}function gk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function yk(r,e){const t=hs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ba(l,e??{}))return o;Mr(o,"already-initialized")}return t.initialize({options:e})}function _k(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Nr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vk(r,e,t){const s=Qf(r);ve(s._canInitEmulator,s,"emulator-config-failed"),ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Dw(e),{host:h,port:f}=wk(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),Ek()}function Dw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wk(r){const e=Dw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:xy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:xy(h)}}}function xy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ek(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function yo(r,e){return YC(r,"POST","/v1/accounts:signInWithIdp",Wf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Tk="http://localhost";class ls extends xw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=$f(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ls(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:Tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class al extends Vw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ci extends al{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class hi extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class di extends al{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fi extends al{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await kr._fromIdTokenResponse(e,s,o),h=Vy(s);return new Ro({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vy(s);return new Ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class uc extends jn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new uc(e,t,s,o)}}function Lw(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(r,l,e,s):l})}async function Ik(r,e,t=!1){const s=await Ya(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ro._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Sk(r,e,t=!1){const{auth:s}=r;if(pi(s.app))return Promise.reject(rs(s));const o="reauthenticate";try{const l=await Ya(r,Lw(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=Kf(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),Ro._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Mr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Rk(r,e,t=!1){if(pi(r.app))return Promise.reject(rs(r));const s="signIn",o=await Lw(r,s,e),l=await Ro._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function Ak(r,e,t,s){return cn(r).onIdTokenChanged(e,t,s)}function Pk(r,e,t){return cn(r).beforeAuthStateChanged(e,t)}const cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ow{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ck=1e3,kk=10;class Mw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);ak()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,kk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mw.type="LOCAL";const Nk=Mw;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class bw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bw.type="SESSION";const Fw=bw;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Dk(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new xc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await Dk(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Xf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=Xf("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function rr(){return window}function Vk(r){rr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Uw(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function Lk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ok(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Mk(){return Uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const zw="firebaseLocalStorageDb",bk=1,hc="firebaseLocalStorage",jw="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vc(r,e){return r.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function Fk(){const r=indexedDB.deleteDatabase(zw);return new ll(r).toPromise()}function Jd(){const r=indexedDB.open(zw,bk);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(hc,{keyPath:jw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(hc)?e(s):(s.close(),await Fk(),e(await Jd()))})})}async function Ly(r,e,t){const s=Vc(r,!0).put({[jw]:e,value:t});return new ll(s).toPromise()}async function Uk(r,e){const t=Vc(r,!1).get(e),s=await new ll(t).toPromise();return s===void 0?null:s.value}function Oy(r,e){const t=Vc(r,!0).delete(e);return new ll(t).toPromise()}const zk=800,jk=3;class Bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(Mk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lk(),!this.activeServiceWorker)return;this.sender=new xk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await Ly(e,cc,"1"),await Oy(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ly(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Uk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Vc(o,!1).getAll();return new ll(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bw.type="LOCAL";const Bk=Bw;new ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function $k(r,e){return e?Nr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Jf extends xw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qk(r){return Rk(r.auth,new Jf(r),r.bypassAuthState)}function Hk(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),Sk(t,new Jf(r),r.bypassAuthState)}async function Wk(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),Ik(t,new Jf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class $w{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qk;case"linkViaPopup":case"linkViaRedirect":return Wk;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:Mr(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Kk=new ol(2e3,1e4);class fo extends $w{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kk.get())};e()}}fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Gk="pendingRedirect",$u=new Map;class Qk extends $w{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const s=await Yk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yk(r,e){const t=Zk(e),s=Jk(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Xk(r,e){$u.set(r._key(),e)}function Jk(r){return Nr(r._redirectPersistence)}function Zk(r){return Bu(Gk,r.config.apiKey,r.name)}async function e1(r,e,t=!1){if(pi(r.app))return Promise.reject(rs(r));const s=Qf(r),o=$k(s,e),h=await new Qk(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const t1=10*60*1e3;class n1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qw(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t1&&this.cachedEventUids.clear(),this.cachedEventUids.has(My(e))}saveEventToCache(e){this.cachedEventUids.add(My(e)),this.lastProcessedEventTime=Date.now()}}function My(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function qw({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qw(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function i1(r,e={}){return Vo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const s1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o1=/^https?/;async function a1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await i1(r);for(const t of e)try{if(l1(t))return}catch{}Mr(r,"unauthorized-domain")}function l1(r){const e=Yd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!o1.test(t))return!1;if(s1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const u1=new ol(3e4,6e4);function by(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function c1(r){return new Promise((e,t)=>{var s,o,l;function h(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(nr(r,"network-request-failed"))},timeout:u1.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rr().gapi)===null||l===void 0)&&l.load)h();else{const f=gk("iframefcb");return rr()[f]=()=>{gapi.load?h():t(nr(r,"network-request-failed"))},pk(`${mk()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw qu=null,e})}let qu=null;function h1(r){return qu=qu||c1(r),qu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const d1=new ol(5e3,15e3),f1="__/auth/iframe",p1="emulator/auth/iframe",m1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Hf(e,p1):`https://${r.config.authDomain}/${f1}`,s={apiKey:e.apiKey,appName:r.name,v:Co},o=g1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${el(s).slice(1)}`}async function _1(r){const e=await h1(r),t=rr().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:y1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=nr(r,"network-request-failed"),f=rr().setTimeout(()=>{l(h)},d1.get());function p(){rr().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const v1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w1=500,E1=600,T1="_blank",I1="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S1(r,e,t,s=w1,o=E1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},v1),{width:s.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(f=Sw(y)?T1:t),Tw(y)&&(e=e||I1,p.scrollbars="yes");const w=Object.entries(p).reduce((R,[V,F])=>`${R}${V}=${F},`,"");if(ok(y)&&f!=="_self")return R1(e||"",f),new Fy(null);const T=window.open(e||"",f,w);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new Fy(T)}function R1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const A1="__/auth/handler",P1="emulator/auth/handler",C1=encodeURIComponent("fac");async function Uy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof Vw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",QI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof al){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),y=p?`#${C1}=${encodeURIComponent(p)}`:"";return`${k1(r)}?${el(f).slice(1)}${y}`}function k1({config:r}){return r.emulator?Hf(r,P1):`https://${r.authDomain}/${A1}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ad="webStorageSupport";class N1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fw,this._completeRedirectFn=e1,this._overrideRedirectResult=Xk}async _openPopup(e,t,s,o){var l;br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Uy(e,t,s,Yd(),o);return S1(e,h,Xf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Uy(e,t,s,Yd(),o);return Vk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(br(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _1(e),s=new n1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ad,{type:Ad},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ad];h!==void 0&&t(!!h),Mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=a1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kw()||Iw()||Gf()}}const D1=N1;var zy="@firebase/auth",jy="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class x1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function V1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L1(r){sr(new zn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nw(r)},y=new dk(s,o,l,p);return _k(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),sr(new zn("auth-internal",e=>{const t=Qf(e.getProvider("auth").getImmediate());return(s=>new x1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(zy,jy,V1(r)),Tn(zy,jy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const O1=5*60,M1=h_("authIdTokenMaxAge")||O1;let By=null;const b1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>M1)return;const o=t==null?void 0:t.token;By!==o&&(By=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function F1(r=lf()){const e=hs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=yk(r,{popupRedirectResolver:D1,persistence:[Bk,Nk,Fw]}),s=h_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=b1(l.toString());Pk(t,h,()=>h(t.currentUser)),Ak(t,f=>h(f))}}const o=u_("auth");return o&&vk(t,`http://${o}`),t}function U1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}fk({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",U1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L1("Browser");const z1={apiKey:"AIzaSyCpBWqyXUXXFbxUQ-BX6Fo7_wYzee-pf6I",authDomain:"hydrojugassessment.firebaseapp.com",projectId:"hydrojugassessment",storageBucket:"hydrojugassessment.firebasestorage.app",messagingSenderId:"1063232022331",appId:"1:1063232022331:web:655dceab106076c53df91e",measurementId:"G-YVC2GTPTZ4"},Zf=__(z1);AR(Zf);const ep=TC(Zf);F1(Zf);const Hw=EC(ep,"products");async function j1(r){try{return(await jC(Hw,r)).id}catch(e){throw console.error("Error creating product:",e),e}}async function $y(){try{return(await UC(Hw)).docs.map(e=>({id:e.id,...e.data()}))}catch(r){throw console.error("Error fetching products:",r),r}}async function B1(r){try{const e=bf(ep,"products",r),t=await FC(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){throw console.error("Error fetching product:",e),e}}async function $1(r){try{const e=bf(ep,"products",r);await zC(e)}catch(e){throw console.error("Error deleting product:",e),e}}const q1=()=>{const[r,e]=q.useState([]),t=tf();q.useEffect(()=>{(async()=>{const h=await $y();e(h)})()},[]);const s=l=>{t(`/edit/${l}`)};async function o(l){try{await $1(l),alert("Product deleted successfully!");const h=await $y();e(h)}catch(h){alert("Error deleting product:",h.message)}}return Re.jsxs("div",{children:[Re.jsx("h1",{children:"Product List"}),Re.jsx("ul",{children:r.map(l=>Re.jsxs("li",{children:[Re.jsx("p",{children:l.ProductName}),Re.jsx("p",{children:l.ProductDesc}),Re.jsx("p",{children:l.ProductPrice}),Re.jsx("button",{onClick:()=>s(l.id),children:"Edit"}),Re.jsx("button",{onClick:()=>o(l.id),children:"Delete"})]},l.id))})]})},Pt=[];for(let r=0;r<256;++r)Pt.push((r+256).toString(16).slice(1));function H1(r,e=0){return(Pt[r[e+0]]+Pt[r[e+1]]+Pt[r[e+2]]+Pt[r[e+3]]+"-"+Pt[r[e+4]]+Pt[r[e+5]]+"-"+Pt[r[e+6]]+Pt[r[e+7]]+"-"+Pt[r[e+8]]+Pt[r[e+9]]+"-"+Pt[r[e+10]]+Pt[r[e+11]]+Pt[r[e+12]]+Pt[r[e+13]]+Pt[r[e+14]]+Pt[r[e+15]]).toLowerCase()}let Pd;const W1=new Uint8Array(16);function K1(){if(!Pd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Pd=crypto.getRandomValues.bind(crypto)}return Pd(W1)}const G1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),qy={randomUUID:G1};function Q1(r,e,t){var o;if(qy.randomUUID&&!r)return qy.randomUUID();r=r||{};const s=r.random??((o=r.rng)==null?void 0:o.call(r))??K1();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,H1(s)}class Ww{constructor(e,t,s,o){this.ProductID=e||Q1(),this.ProductName=t,this.ProductDesc=s||"No description provided.",this.ProductPrice=o||0}validate(){if(!this.ProductID)throw new Error("ProductID is required.");if(!this.ProductName)throw new Error("ProductName is required.");if(typeof this.ProductPrice!="number"||this.ProductPrice<0)throw new Error("ProductPrice must be a positive number.");return!0}}function Y1(){const r=tf(),[e,t]=q.useState({ProductID:"",ProductName:"",ProductDesc:"",ProductPrice:""}),s=l=>{const{name:h,value:f}=l.target;t(p=>({...p,[h]:f}))},o=async l=>{l.preventDefault();try{const h=new Ww(e.ProductID,e.ProductName,e.ProductDesc,parseFloat(e.ProductPrice));h.validate(),await j1({...h}),alert("Product created successfully!"),r("/")}catch(h){alert(h.message)}};return Re.jsxs("form",{onSubmit:o,children:[Re.jsx("input",{type:"text",name:"ProductName",placeholder:"Product Name",value:e.ProductName,onChange:s}),Re.jsx("input",{type:"text",name:"ProductDesc",placeholder:"Product Description",value:e.ProductDesc,onChange:s}),Re.jsx("input",{type:"number",name:"ProductPrice",placeholder:"Product Price",value:e.ProductPrice,onChange:s}),Re.jsx("button",{type:"submit",children:"Create Product"})]})}function X1(){const{id:r}=VT(),[e,t]=q.useState({ProductID:"",ProductName:"",ProductDesc:"",ProductPrice:""});q.useEffect(()=>{async function l(){const h=await B1(r);h?t(h):alert("Product not found")}l()},[r]);const s=l=>{const{name:h,value:f}=l.target;t(p=>({...p,[h]:f}))},o=async l=>{l.preventDefault();try{const h=new Ww(e.ProductID,e.ProductName,e.ProductDesc,parseFloat(e.ProductPrice));h.validate(),await createProduct({...h}),alert("Product created successfully!")}catch(h){alert(h.message)}};return Re.jsxs("form",{onSubmit:o,children:[Re.jsx("input",{type:"text",name:"ProductName",placeholder:"Product Name",value:e.ProductName,onChange:s}),Re.jsx("input",{type:"text",name:"ProductDesc",placeholder:"Product Description",value:e.ProductDesc,onChange:s}),Re.jsx("input",{type:"number",name:"ProductPrice",placeholder:"Product Price",value:e.ProductPrice,onChange:s}),Re.jsx("button",{type:"submit",children:"Create Product"})]})}const J1=()=>Re.jsx(Re.Fragment,{children:Re.jsx(_I,{children:Re.jsxs("div",{children:[Re.jsx(CI,{}),Re.jsxs(GT,{children:[Re.jsx(xu,{path:"/",element:Re.jsx(q1,{})}),Re.jsx(xu,{path:"/create",element:Re.jsx(Y1,{})}),Re.jsx(xu,{path:"/edit/:id",element:Re.jsx(X1,{})})]})]})})});rT.createRoot(document.getElementById("root")).render(Re.jsx(q.StrictMode,{children:Re.jsx(J1,{})}));
