(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var dd={exports:{}},ka={},fd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function eT(){if(pg)return Pe;pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,$={};function z(L,K,de){this.props=L,this.context=K,this.refs=$,this.updater=de||V}z.prototype.isReactComponent={},z.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function W(){}W.prototype=z.prototype;function X(L,K,de){this.props=L,this.context=K,this.refs=$,this.updater=de||V}var ne=X.prototype=new W;ne.constructor=X,F(ne,z.prototype),ne.isPureReactComponent=!0;var ce=Array.isArray,Ie=Object.prototype.hasOwnProperty,Ee={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(L,K,de){var Se,Ae={},xe=null,be=null;if(K!=null)for(Se in K.ref!==void 0&&(be=K.ref),K.key!==void 0&&(xe=""+K.key),K)Ie.call(K,Se)&&!N.hasOwnProperty(Se)&&(Ae[Se]=K[Se]);var Fe=arguments.length-2;if(Fe===1)Ae.children=de;else if(1<Fe){for(var $e=Array(Fe),yt=0;yt<Fe;yt++)$e[yt]=arguments[yt+2];Ae.children=$e}if(L&&L.defaultProps)for(Se in Fe=L.defaultProps,Fe)Ae[Se]===void 0&&(Ae[Se]=Fe[Se]);return{$$typeof:r,type:L,key:xe,ref:be,props:Ae,_owner:Ee.current}}function A(L,K){return{$$typeof:r,type:L.type,key:K,ref:L.ref,props:L.props,_owner:L._owner}}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function x(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(de){return K[de]})}var O=/\/+/g;function P(L,K){return typeof L=="object"&&L!==null&&L.key!=null?x(""+L.key):K.toString(36)}function nt(L,K,de,Se,Ae){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case r:case e:be=!0}}if(be)return be=L,Ae=Ae(be),L=Se===""?"."+P(be,0):Se,ce(Ae)?(de="",L!=null&&(de=L.replace(O,"$&/")+"/"),nt(Ae,K,de,"",function(yt){return yt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,de+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+L)),K.push(Ae)),1;if(be=0,Se=Se===""?".":Se+":",ce(L))for(var Fe=0;Fe<L.length;Fe++){xe=L[Fe];var $e=Se+P(xe,Fe);be+=nt(xe,K,de,$e,Ae)}else if($e=I(L),typeof $e=="function")for(L=$e.call(L),Fe=0;!(xe=L.next()).done;)xe=xe.value,$e=Se+P(xe,Fe++),be+=nt(xe,K,de,$e,Ae);else if(xe==="object")throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return be}function Dt(L,K,de){if(L==null)return L;var Se=[],Ae=0;return nt(L,Se,"","",function(xe){return K.call(de,xe,Ae++)}),Se}function xt(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(de){(L._status===0||L._status===-1)&&(L._status=1,L._result=de)},function(de){(L._status===0||L._status===-1)&&(L._status=2,L._result=de)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var je={current:null},te={transition:null},fe={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:te,ReactCurrentOwner:Ee};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Dt,forEach:function(L,K,de){Dt(L,function(){K.apply(this,arguments)},de)},count:function(L){var K=0;return Dt(L,function(){K++}),K},toArray:function(L){return Dt(L,function(K){return K})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Pe.Component=z,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=X,Pe.StrictMode=s,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Pe.act=ie,Pe.cloneElement=function(L,K,de){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Se=F({},L.props),Ae=L.key,xe=L.ref,be=L._owner;if(K!=null){if(K.ref!==void 0&&(xe=K.ref,be=Ee.current),K.key!==void 0&&(Ae=""+K.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for($e in K)Ie.call(K,$e)&&!N.hasOwnProperty($e)&&(Se[$e]=K[$e]===void 0&&Fe!==void 0?Fe[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Se.children=de;else if(1<$e){Fe=Array($e);for(var yt=0;yt<$e;yt++)Fe[yt]=arguments[yt+2];Se.children=Fe}return{$$typeof:r,type:L.type,key:Ae,ref:xe,props:Se,_owner:be}},Pe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Pe.createElement=S,Pe.createFactory=function(L){var K=S.bind(null,L);return K.type=L,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(L){return{$$typeof:f,render:L}},Pe.isValidElement=k,Pe.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:xt}},Pe.memo=function(L,K){return{$$typeof:y,type:L,compare:K===void 0?null:K}},Pe.startTransition=function(L){var K=te.transition;te.transition={};try{L()}finally{te.transition=K}},Pe.unstable_act=ie,Pe.useCallback=function(L,K){return je.current.useCallback(L,K)},Pe.useContext=function(L){return je.current.useContext(L)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(L){return je.current.useDeferredValue(L)},Pe.useEffect=function(L,K){return je.current.useEffect(L,K)},Pe.useId=function(){return je.current.useId()},Pe.useImperativeHandle=function(L,K,de){return je.current.useImperativeHandle(L,K,de)},Pe.useInsertionEffect=function(L,K){return je.current.useInsertionEffect(L,K)},Pe.useLayoutEffect=function(L,K){return je.current.useLayoutEffect(L,K)},Pe.useMemo=function(L,K){return je.current.useMemo(L,K)},Pe.useReducer=function(L,K,de){return je.current.useReducer(L,K,de)},Pe.useRef=function(L){return je.current.useRef(L)},Pe.useState=function(L){return je.current.useState(L)},Pe.useSyncExternalStore=function(L,K,de){return je.current.useSyncExternalStore(L,K,de)},Pe.useTransition=function(){return je.current.useTransition()},Pe.version="18.3.1",Pe}var mg;function af(){return mg||(mg=1,fd.exports=eT()),fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function tT(){if(gg)return ka;gg=1;var r=af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var w,T={},I=null,V=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(V=p.ref);for(w in p)s.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:f,key:I,ref:V,props:T,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var yg;function nT(){return yg||(yg=1,dd.exports=tT()),dd.exports}var Re=nT(),q=af(),Su={},pd={exports:{}},Zt={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function rT(){return _g||(_g=1,function(r){function e(te,fe){var ie=te.length;te.push(fe);e:for(;0<ie;){var L=ie-1>>>1,K=te[L];if(0<o(K,fe))te[L]=fe,te[ie]=K,ie=L;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var fe=te[0],ie=te.pop();if(ie!==fe){te[0]=ie;e:for(var L=0,K=te.length,de=K>>>1;L<de;){var Se=2*(L+1)-1,Ae=te[Se],xe=Se+1,be=te[xe];if(0>o(Ae,ie))xe<K&&0>o(be,Ae)?(te[L]=be,te[xe]=ie,L=xe):(te[L]=Ae,te[Se]=ie,L=Se);else if(xe<K&&0>o(be,ie))te[L]=be,te[xe]=ie,L=xe;else break e}}return fe}function o(te,fe){var ie=te.sortIndex-fe.sortIndex;return ie!==0?ie:te.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var p=[],y=[],w=1,T=null,I=3,V=!1,F=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(te){for(var fe=t(y);fe!==null;){if(fe.callback===null)s(y);else if(fe.startTime<=te)s(y),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(y)}}function ce(te){if($=!1,ne(te),!F)if(t(p)!==null)F=!0,xt(Ie);else{var fe=t(y);fe!==null&&je(ce,fe.startTime-te)}}function Ie(te,fe){F=!1,$&&($=!1,W(S),S=-1),V=!0;var ie=I;try{for(ne(fe),T=t(p);T!==null&&(!(T.expirationTime>fe)||te&&!x());){var L=T.callback;if(typeof L=="function"){T.callback=null,I=T.priorityLevel;var K=L(T.expirationTime<=fe);fe=r.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&s(p),ne(fe)}else s(p);T=t(p)}if(T!==null)var de=!0;else{var Se=t(y);Se!==null&&je(ce,Se.startTime-fe),de=!1}return de}finally{T=null,I=ie,V=!1}}var Ee=!1,N=null,S=-1,A=5,k=-1;function x(){return!(r.unstable_now()-k<A)}function O(){if(N!==null){var te=r.unstable_now();k=te;var fe=!0;try{fe=N(!0,te)}finally{fe?P():(Ee=!1,N=null)}}else Ee=!1}var P;if(typeof X=="function")P=function(){X(O)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=O,P=function(){Dt.postMessage(null)}}else P=function(){z(O,0)};function xt(te){N=te,Ee||(Ee=!0,P())}function je(te,fe){S=z(function(){te(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){F||V||(F=!0,xt(Ie))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(te){switch(I){case 1:case 2:case 3:var fe=3;break;default:fe=I}var ie=I;I=fe;try{return te()}finally{I=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,fe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ie=I;I=te;try{return fe()}finally{I=ie}},r.unstable_scheduleCallback=function(te,fe,ie){var L=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?L+ie:L):ie=L,te){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ie+K,te={id:w++,callback:fe,priorityLevel:te,startTime:ie,expirationTime:K,sortIndex:-1},ie>L?(te.sortIndex=ie,e(y,te),t(p)===null&&te===t(y)&&($?(W(S),S=-1):$=!0,je(ce,ie-L))):(te.sortIndex=K,e(p,te),F||V||(F=!0,xt(Ie))),te},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(te){var fe=I;return function(){var ie=I;I=fe;try{return te.apply(this,arguments)}finally{I=ie}}}}(gd)),gd}var vg;function iT(){return vg||(vg=1,md.exports=rT()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function sT(){if(wg)return Zt;wg=1;var r=af(),e=iT();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(n){return p.call(T,n)?!0:p.call(w,n)?!1:y.test(n)?T[n]=!0:(w[n]=!0,!1)}function V(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function F(n,i,a,c){if(i===null||typeof i>"u"||V(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,g,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function X(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(W,X);z[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(W,X);z[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(W,X);z[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(F(i,a,d,c)&&(a=null),c||d===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),te=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,L;function K(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var de=!1;function Se(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,R=g.length-1;1<=v&&0<=R&&d[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==g[R]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=R);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function Ae(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ee:return"Portal";case A:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case xt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cr(n){n._valueTracker||(n._valueTracker=yt(n))}function gs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ur(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ci(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ys(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Oo(n,i){i=i.checked,i!=null&&ne(n,"checked",i,!1)}function Mo(n,i){Oo(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?_s(n,i.type,a):i.hasOwnProperty("defaultValue")&&_s(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ul(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function _s(n,i,a){(i!=="number"||Ur(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function bo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function ws(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,Uo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function zr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(n){Ni.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ki[i]=ki[n]})});function zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ki.hasOwnProperty(n)&&ki[n]?(""+i).trim():i+"px"}function jo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,i){if(i){if(Bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function qo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ts=null,pn=null,$n=null;function Is(n){if(n=pa(n)){if(typeof Ts!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ul(i),Ts(n.stateNode,n.type,i))}}function qn(n){pn?$n?$n.push(n):$n=[n]:pn=n}function Ho(){if(pn){var n=pn,i=$n;if($n=pn=null,Is(n),i)for(n=0;n<i.length;n++)Is(i[n])}}function xi(n,i){return n(i)}function Wo(){}var pr=!1;function Ko(n,i,a){if(pr)return n(i,a);pr=!0;try{return xi(n,i,a)}finally{pr=!1,(pn!==null||$n!==null)&&(Wo(),Ho())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Ul(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ss=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ss=!1}function Vi(n,i,a,c,d,g,v,R,C){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var Li=!1,Rs=null,An=!1,Go=null,zc={onError:function(n){Li=!0,Rs=n}};function As(n,i,a,c,d,g,v,R,C){Li=!1,Rs=null,Vi.apply(zc,arguments)}function cl(n,i,a,c,d,g,v,R,C){if(As.apply(this,arguments),Li){if(Li){var j=Rs;Li=!1,Rs=null}else throw Error(t(198));An||(An=!0,Go=j)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Oi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Cn(n){if(Pn(n)!==n)throw Error(t(188))}function hl(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Cn(d),n;if(g===c)return Cn(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=g;break}if(R===c){v=!0,c=d,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,c=d;break}if(R===c){v=!0,c=g,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Qo(n){return n=hl(n),n!==null?Ps(n):null}function Ps(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ps(n);if(i!==null)return i;n=n.sibling}return null}var Cs=e.unstable_scheduleCallback,Yo=e.unstable_cancelCallback,dl=e.unstable_shouldYield,jc=e.unstable_requestPaint,qe=e.unstable_now,fl=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,pl=e.unstable_IdlePriority,bi=null,rn=null;function ml(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:yl,Jo=Math.log,gl=Math.LN2;function yl(n){return n>>>=0,n===0?32:31-(Jo(n)/gl|0)|0}var ks=64,Ns=4194304;function Br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Fi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Br(R):(g&=v,g!==0&&(c=Br(g)))}else v=a&~d,v!==0?c=Br(v):g!==0&&(c=Br(g));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Bc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var v=31-Bt(g),R=1<<v,C=d[v];C===-1?(!(R&a)||R&c)&&(d[v]=Bc(R,i)):C<=i&&(n.expiredLanes|=R),g&=~R}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ui(){var n=ks;return ks<<=1,!(ks&4194240)&&(ks=64),n}function $r(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Hr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ne=0;function Wr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _l,Ds,vl,wl,El,Zo=!1,Hn=[],It=null,kn=null,Nn=null,Kr=new Map,gn=new Map,Wn=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tl(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Kr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(i.pointerId)}}function Wt(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=pa(i),i!==null&&Ds(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function qc(n,i,a,c,d){switch(i){case"focusin":return It=Wt(It,n,i,a,c,d),!0;case"dragenter":return kn=Wt(kn,n,i,a,c,d),!0;case"mouseover":return Nn=Wt(Nn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Kr.set(g,Wt(Kr.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Wt(gn.get(g)||null,n,i,a,c,d)),!0}return!1}function Il(n){var i=qi(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=Oi(a),i!==null){n.blockedOn=i,El(n.priority,function(){vl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Di=c,a.target.dispatchEvent(c),Di=null}else return i=pa(a),i!==null&&Ds(i),n.blockedOn=a,!1;i.shift()}return!0}function zi(n,i,a){gr(n)&&a.delete(i)}function Sl(){Zo=!1,It!==null&&gr(It)&&(It=null),kn!==null&&gr(kn)&&(kn=null),Nn!==null&&gr(Nn)&&(Nn=null),Kr.forEach(zi),gn.forEach(zi)}function Dn(n,i){n.blockedOn===i&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sl)))}function xn(n){function i(d){return Dn(d,n)}if(0<Hn.length){Dn(Hn[0],n);for(var a=1;a<Hn.length;a++){var c=Hn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Dn(It,n),kn!==null&&Dn(kn,n),Nn!==null&&Dn(Nn,n),Kr.forEach(i),gn.forEach(i),a=0;a<Wn.length;a++)c=Wn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)Il(a),a.blockedOn===null&&Wn.shift()}var yr=ce.ReactCurrentBatchConfig,Gr=!0;function Ge(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=1,ea(n,i,a,c)}finally{Ne=d,yr.transition=g}}function Hc(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=4,ea(n,i,a,c)}finally{Ne=d,yr.transition=g}}function ea(n,i,a,c){if(Gr){var d=xs(n,i,a,c);if(d===null)nh(n,i,c,ji,a),Tl(n,c);else if(qc(d,n,i,a,c))c.stopPropagation();else if(Tl(n,c),i&4&&-1<$c.indexOf(n)){for(;d!==null;){var g=pa(d);if(g!==null&&_l(g),g=xs(n,i,a,c),g===null&&nh(n,i,c,ji,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else nh(n,i,c,null,a)}}var ji=null;function xs(n,i,a,c){if(ji=null,n=Es(c),n=qi(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Oi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ji=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fl()){case Mi:return 1;case jr:return 4;case mn:case Xo:return 16;case pl:return 536870912;default:return 16}default:return 16}}var on=null,Vs=null,Kt=null;function na(){if(Kt)return Kt;var n,i=Vs,a=i.length,c,d="value"in on?on.value:on.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[g-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function Ls(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function ra(){return!1}function St(n){function i(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in n)n.hasOwnProperty(R)&&(a=n[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Kn:ra,this.isPropagationStopped=ra,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=St(Vn),Gn=ie({},Vn,{view:0,detail:0}),Wc=St(Gn),Ms,_r,Qr,Bi=ie({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(Ms=n.screenX-Qr.screenX,_r=n.screenY-Qr.screenY):_r=Ms=0,Qr=n),Ms)},movementY:function(n){return"movementY"in n?n.movementY:_r}}),bs=St(Bi),ia=ie({},Bi,{dataTransfer:0}),Rl=St(ia),Fs=ie({},Gn,{relatedTarget:0}),Us=St(Fs),Al=ie({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),vr=St(Al),Pl=ie({},Vn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cl=St(Pl),kl=ie({},Vn,{data:0}),sa=St(kl),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Nl[n])?!!i[n]:!1}function Qn(){return Dl}var u=ie({},Gn,{key:function(n){if(n.key){var i=zs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ls(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(n){return n.type==="keypress"?Ls(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ls(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m=St(u),_=ie({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=St(_),M=ie({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn}),B=St(M),ee=ie({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=St(ee),ht=ie({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=St(ht),_t=[9,13,27,32],ot=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var an=f&&"TextEvent"in window&&!yn,$i=f&&(!ot||yn&&8<yn&&11>=yn),js=" ",lp=!1;function up(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function Jw(n,i){switch(n){case"compositionend":return cp(i);case"keypress":return i.which!==32?null:(lp=!0,js);case"textInput":return n=i.data,n===js&&lp?null:n;default:return null}}function Zw(n,i){if(Bs)return n==="compositionend"||!ot&&up(n,i)?(n=na(),Kt=Vs=on=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $i&&i.locale!=="ko"?null:i.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!eE[n.type]:i==="textarea"}function dp(n,i,a,c){qn(c),i=Ml(i,"onChange"),0<i.length&&(a=new Os("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var oa=null,aa=null;function tE(n){Np(n,0)}function xl(n){var i=Ks(n);if(gs(i))return n}function nE(n,i){if(n==="change")return i}var fp=!1;if(f){var Kc;if(f){var Gc="oninput"in document;if(!Gc){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),Gc=typeof pp.oninput=="function"}Kc=Gc}else Kc=!1;fp=Kc&&(!document.documentMode||9<document.documentMode)}function mp(){oa&&(oa.detachEvent("onpropertychange",gp),aa=oa=null)}function gp(n){if(n.propertyName==="value"&&xl(aa)){var i=[];dp(i,aa,n,Es(n)),Ko(tE,i)}}function rE(n,i,a){n==="focusin"?(mp(),oa=i,aa=a,oa.attachEvent("onpropertychange",gp)):n==="focusout"&&mp()}function iE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(aa)}function sE(n,i){if(n==="click")return xl(i)}function oE(n,i){if(n==="input"||n==="change")return xl(i)}function aE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ln=typeof Object.is=="function"?Object.is:aE;function la(n,i){if(Ln(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!Ln(n[d],i[d]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _p(n,i){var a=yp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function vp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wp(){for(var n=window,i=Ur();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ur(n.document)}return i}function Qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lE(n){var i=wp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&vp(a.ownerDocument.documentElement,a)){if(c!==null&&Qc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=_p(a,g);var v=_p(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uE=f&&"documentMode"in document&&11>=document.documentMode,$s=null,Yc=null,ua=null,Xc=!1;function Ep(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||$s==null||$s!==Ur(c)||(c=$s,"selectionStart"in c&&Qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Ml(Yc,"onSelect"),0<c.length&&(i=new Os("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function Vl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Jc={},Tp={};f&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ll(n){if(Jc[n])return Jc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Tp)return Jc[n]=i[a];return n}var Ip=Ll("animationend"),Sp=Ll("animationiteration"),Rp=Ll("animationstart"),Ap=Ll("transitionend"),Pp=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){Pp.set(n,i),l(i,[n])}for(var Zc=0;Zc<Cp.length;Zc++){var eh=Cp[Zc],cE=eh.toLowerCase(),hE=eh[0].toUpperCase()+eh.slice(1);Yr(cE,"on"+hE)}Yr(Ip,"onAnimationEnd"),Yr(Sp,"onAnimationIteration"),Yr(Rp,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function kp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,cl(c,i,void 0,n),n.currentTarget=null}function Np(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var v=c.length-1;0<=v;v--){var R=c[v],C=R.instance,j=R.currentTarget;if(R=R.listener,C!==g&&d.isPropagationStopped())break e;kp(d,R,j),g=C}else for(v=0;v<c.length;v++){if(R=c[v],C=R.instance,j=R.currentTarget,R=R.listener,C!==g&&d.isPropagationStopped())break e;kp(d,R,j),g=C}}}if(An)throw n=Go,An=!1,Go=null,n}function We(n,i){var a=i[lh];a===void 0&&(a=i[lh]=new Set);var c=n+"__bubble";a.has(c)||(Dp(i,n,2,!1),a.add(c))}function th(n,i,a){var c=0;i&&(c|=4),Dp(a,n,c,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(dE.has(a)||th(a,!1,n),th(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,th("selectionchange",!1,i))}}function Dp(n,i,a,c){switch(ta(i)){case 1:var d=Ge;break;case 4:d=Hc;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!Ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function nh(n,i,a,c,d){var g=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;R!==null;){if(v=qi(R),v===null)return;if(C=v.tag,C===5||C===6){c=g=v;continue e}R=R.parentNode}}c=c.return}Ko(function(){var j=g,Q=Es(a),J=[];e:{var G=Pp.get(n);if(G!==void 0){var re=Os,ae=n;switch(n){case"keypress":if(Ls(a)===0)break e;case"keydown":case"keyup":re=m;break;case"focusin":ae="focus",re=Us;break;case"focusout":ae="blur",re=Us;break;case"beforeblur":case"afterblur":re=Us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=B;break;case Ip:case Sp:case Rp:re=vr;break;case Ap:re=ze;break;case"scroll":re=Wc;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=Cl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var le=(i&4)!==0,it=!le&&n==="scroll",b=le?G!==null?G+"Capture":null:G;le=[];for(var D=j,U;D!==null;){U=D;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,b!==null&&(Z=rt(D,b),Z!=null&&le.push(da(D,Z,U)))),it)break;D=D.return}0<le.length&&(G=new re(G,ae,null,a,Q),J.push({event:G,listeners:le}))}}if(!(i&7)){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Di&&(ae=a.relatedTarget||a.fromElement)&&(qi(ae)||ae[wr]))break e;if((re||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=j,ae=ae?qi(ae):null,ae!==null&&(it=Pn(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=j),re!==ae)){if(le=bs,Z="onMouseLeave",b="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,Z="onPointerLeave",b="onPointerEnter",D="pointer"),it=re==null?G:Ks(re),U=ae==null?G:Ks(ae),G=new le(Z,D+"leave",re,a,Q),G.target=it,G.relatedTarget=U,Z=null,qi(Q)===j&&(le=new le(b,D+"enter",ae,a,Q),le.target=U,le.relatedTarget=it,Z=le),it=Z,re&&ae)t:{for(le=re,b=ae,D=0,U=le;U;U=Hs(U))D++;for(U=0,Z=b;Z;Z=Hs(Z))U++;for(;0<D-U;)le=Hs(le),D--;for(;0<U-D;)b=Hs(b),U--;for(;D--;){if(le===b||b!==null&&le===b.alternate)break t;le=Hs(le),b=Hs(b)}le=null}else le=null;re!==null&&xp(J,G,re,le,!1),ae!==null&&it!==null&&xp(J,it,ae,le,!0)}}e:{if(G=j?Ks(j):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var ue=nE;else if(hp(G))if(fp)ue=oE;else{ue=iE;var pe=rE}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=sE);if(ue&&(ue=ue(n,j))){dp(J,ue,a,Q);break e}pe&&pe(n,G,j),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&_s(G,"number",G.value)}switch(pe=j?Ks(j):window,n){case"focusin":(hp(pe)||pe.contentEditable==="true")&&($s=pe,Yc=j,ua=null);break;case"focusout":ua=Yc=$s=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Ep(J,a,Q);break;case"selectionchange":if(uE)break;case"keydown":case"keyup":Ep(J,a,Q)}var me;if(ot)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Bs?up(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&($i&&a.locale!=="ko"&&(Bs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Bs&&(me=na()):(on=Q,Vs="value"in on?on.value:on.textContent,Bs=!0)),pe=Ml(j,ye),0<pe.length&&(ye=new sa(ye,n,null,a,Q),J.push({event:ye,listeners:pe}),me?ye.data=me:(me=cp(a),me!==null&&(ye.data=me)))),(me=an?Jw(n,a):Zw(n,a))&&(j=Ml(j,"onBeforeInput"),0<j.length&&(Q=new sa("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:j}),Q.data=me))}Np(J,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ml(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=rt(n,a),g!=null&&c.unshift(da(n,g,d)),g=rt(n,i),g!=null&&c.push(da(n,g,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xp(n,i,a,c,d){for(var g=i._reactName,v=[];a!==null&&a!==c;){var R=a,C=R.alternate,j=R.stateNode;if(C!==null&&C===c)break;R.tag===5&&j!==null&&(R=j,d?(C=rt(a,g),C!=null&&v.unshift(da(a,C,R))):d||(C=rt(a,g),C!=null&&v.push(da(a,C,R)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var fE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function Vp(n){return(typeof n=="string"?n:""+n).replace(fE,`
`).replace(pE,"")}function bl(n,i,a){if(i=Vp(i),Vp(n)!==i&&a)throw Error(t(425))}function Fl(){}var rh=null,ih=null;function sh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(yE)}:oh;function yE(n){setTimeout(function(){throw n})}function ah(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),xn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);xn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Op(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ws,fa="__reactProps$"+Ws,wr="__reactContainer$"+Ws,lh="__reactEvents$"+Ws,_E="__reactListeners$"+Ws,vE="__reactHandles$"+Ws;function qi(n){var i=n[Yn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wr]||a[Yn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Op(n);n!==null;){if(a=n[Yn])return a;n=Op(n)}return i}n=a,a=n.parentNode}return null}function pa(n){return n=n[Yn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ul(n){return n[fa]||null}var uh=[],Gs=-1;function Jr(n){return{current:n}}function Ke(n){0>Gs||(n.current=uh[Gs],uh[Gs]=null,Gs--)}function He(n,i){Gs++,uh[Gs]=n.current,n.current=i}var Zr={},Vt=Jr(Zr),Gt=Jr(!1),Hi=Zr;function Qs(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function zl(){Ke(Gt),Ke(Vt)}function Mp(n,i,a){if(Vt.current!==Zr)throw Error(t(168));He(Vt,i),He(Gt,a)}function bp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ie({},a,c)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Hi=Vt.current,He(Vt,n),He(Gt,Gt.current),!0}function Fp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=bp(n,i,Hi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Gt),Ke(Vt),He(Vt,n)):Ke(Gt),He(Gt,a)}var Er=null,Bl=!1,ch=!1;function Up(n){Er===null?Er=[n]:Er.push(n)}function wE(n){Bl=!0,Up(n)}function ei(){if(!ch&&Er!==null){ch=!0;var n=0,i=Ne;try{var a=Er;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Er=null,Bl=!1}catch(d){throw Er!==null&&(Er=Er.slice(n+1)),Cs(Mi,ei),d}finally{Ne=i,ch=!1}}return null}var Ys=[],Xs=0,$l=null,ql=0,_n=[],vn=0,Wi=null,Tr=1,Ir="";function Ki(n,i){Ys[Xs++]=ql,Ys[Xs++]=$l,$l=n,ql=i}function zp(n,i,a){_n[vn++]=Tr,_n[vn++]=Ir,_n[vn++]=Wi,Wi=n;var c=Tr;n=Ir;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var g=32-Bt(i)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-Bt(i)+d|a<<d|c,Ir=g+n}else Tr=1<<g|a<<d|c,Ir=n}function hh(n){n.return!==null&&(Ki(n,1),zp(n,1,0))}function dh(n){for(;n===$l;)$l=Ys[--Xs],Ys[Xs]=null,ql=Ys[--Xs],Ys[Xs]=null;for(;n===Wi;)Wi=_n[--vn],_n[vn]=null,Ir=_n[--vn],_n[vn]=null,Tr=_n[--vn],_n[vn]=null}var ln=null,un=null,Qe=!1,On=null;function jp(n,i){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Bp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wi!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function fh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ph(n){if(Qe){var i=un;if(i){var a=i;if(!Bp(n,i)){if(fh(n))throw Error(t(418));i=Xr(a.nextSibling);var c=ln;i&&Bp(n,i)?jp(c,a):(n.flags=n.flags&-4097|2,Qe=!1,ln=n)}}else{if(fh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,ln=n}}}function $p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Hl(n){if(n!==ln)return!1;if(!Qe)return $p(n),Qe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!sh(n.type,n.memoizedProps)),i&&(i=un)){if(fh(n))throw qp(),Error(t(418));for(;i;)jp(n,i),i=Xr(i.nextSibling)}if($p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=Xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?Xr(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=un;n;)n=Xr(n.nextSibling)}function Js(){un=ln=null,Qe=!1}function mh(n){On===null?On=[n]:On.push(n)}var EE=ce.ReactCurrentBatchConfig;function ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(v){var R=d.refs;v===null?delete R[g]:R[g]=v},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hp(n){var i=n._init;return i(n._payload)}function Wp(n){function i(b,D){if(n){var U=b.deletions;U===null?(b.deletions=[D],b.flags|=16):U.push(D)}}function a(b,D){if(!n)return null;for(;D!==null;)i(b,D),D=D.sibling;return null}function c(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function d(b,D){return b=li(b,D),b.index=0,b.sibling=null,b}function g(b,D,U){return b.index=U,n?(U=b.alternate,U!==null?(U=U.index,U<D?(b.flags|=2,D):U):(b.flags|=2,D)):(b.flags|=1048576,D)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function R(b,D,U,Z){return D===null||D.tag!==6?(D=od(U,b.mode,Z),D.return=b,D):(D=d(D,U),D.return=b,D)}function C(b,D,U,Z){var ue=U.type;return ue===N?Q(b,D,U.props.children,Z,U.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xt&&Hp(ue)===D.type)?(Z=d(D,U.props),Z.ref=ma(b,D,U),Z.return=b,Z):(Z=gu(U.type,U.key,U.props,null,b.mode,Z),Z.ref=ma(b,D,U),Z.return=b,Z)}function j(b,D,U,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=ad(U,b.mode,Z),D.return=b,D):(D=d(D,U.children||[]),D.return=b,D)}function Q(b,D,U,Z,ue){return D===null||D.tag!==7?(D=ts(U,b.mode,Z,ue),D.return=b,D):(D=d(D,U),D.return=b,D)}function J(b,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=od(""+D,b.mode,U),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return U=gu(D.type,D.key,D.props,null,b.mode,U),U.ref=ma(b,null,D),U.return=b,U;case Ee:return D=ad(D,b.mode,U),D.return=b,D;case xt:var Z=D._init;return J(b,Z(D._payload),U)}if(hr(D)||fe(D))return D=ts(D,b.mode,U,null),D.return=b,D;Wl(b,D)}return null}function G(b,D,U,Z){var ue=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ue!==null?null:R(b,D,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:return U.key===ue?C(b,D,U,Z):null;case Ee:return U.key===ue?j(b,D,U,Z):null;case xt:return ue=U._init,G(b,D,ue(U._payload),Z)}if(hr(U)||fe(U))return ue!==null?null:Q(b,D,U,Z,null);Wl(b,U)}return null}function re(b,D,U,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return b=b.get(U)||null,R(D,b,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ie:return b=b.get(Z.key===null?U:Z.key)||null,C(D,b,Z,ue);case Ee:return b=b.get(Z.key===null?U:Z.key)||null,j(D,b,Z,ue);case xt:var pe=Z._init;return re(b,D,U,pe(Z._payload),ue)}if(hr(Z)||fe(Z))return b=b.get(U)||null,Q(D,b,Z,ue,null);Wl(D,Z)}return null}function ae(b,D,U,Z){for(var ue=null,pe=null,me=D,ye=D=0,Et=null;me!==null&&ye<U.length;ye++){me.index>ye?(Et=me,me=null):Et=me.sibling;var Me=G(b,me,U[ye],Z);if(Me===null){me===null&&(me=Et);break}n&&me&&Me.alternate===null&&i(b,me),D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me,me=Et}if(ye===U.length)return a(b,me),Qe&&Ki(b,ye),ue;if(me===null){for(;ye<U.length;ye++)me=J(b,U[ye],Z),me!==null&&(D=g(me,D,ye),pe===null?ue=me:pe.sibling=me,pe=me);return Qe&&Ki(b,ye),ue}for(me=c(b,me);ye<U.length;ye++)Et=re(me,b,ye,U[ye],Z),Et!==null&&(n&&Et.alternate!==null&&me.delete(Et.key===null?ye:Et.key),D=g(Et,D,ye),pe===null?ue=Et:pe.sibling=Et,pe=Et);return n&&me.forEach(function(ui){return i(b,ui)}),Qe&&Ki(b,ye),ue}function le(b,D,U,Z){var ue=fe(U);if(typeof ue!="function")throw Error(t(150));if(U=ue.call(U),U==null)throw Error(t(151));for(var pe=ue=null,me=D,ye=D=0,Et=null,Me=U.next();me!==null&&!Me.done;ye++,Me=U.next()){me.index>ye?(Et=me,me=null):Et=me.sibling;var ui=G(b,me,Me.value,Z);if(ui===null){me===null&&(me=Et);break}n&&me&&ui.alternate===null&&i(b,me),D=g(ui,D,ye),pe===null?ue=ui:pe.sibling=ui,pe=ui,me=Et}if(Me.done)return a(b,me),Qe&&Ki(b,ye),ue;if(me===null){for(;!Me.done;ye++,Me=U.next())Me=J(b,Me.value,Z),Me!==null&&(D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me);return Qe&&Ki(b,ye),ue}for(me=c(b,me);!Me.done;ye++,Me=U.next())Me=re(me,b,ye,Me.value,Z),Me!==null&&(n&&Me.alternate!==null&&me.delete(Me.key===null?ye:Me.key),D=g(Me,D,ye),pe===null?ue=Me:pe.sibling=Me,pe=Me);return n&&me.forEach(function(ZE){return i(b,ZE)}),Qe&&Ki(b,ye),ue}function it(b,D,U,Z){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:e:{for(var ue=U.key,pe=D;pe!==null;){if(pe.key===ue){if(ue=U.type,ue===N){if(pe.tag===7){a(b,pe.sibling),D=d(pe,U.props.children),D.return=b,b=D;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xt&&Hp(ue)===pe.type){a(b,pe.sibling),D=d(pe,U.props),D.ref=ma(b,pe,U),D.return=b,b=D;break e}a(b,pe);break}else i(b,pe);pe=pe.sibling}U.type===N?(D=ts(U.props.children,b.mode,Z,U.key),D.return=b,b=D):(Z=gu(U.type,U.key,U.props,null,b.mode,Z),Z.ref=ma(b,D,U),Z.return=b,b=Z)}return v(b);case Ee:e:{for(pe=U.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(b,D.sibling),D=d(D,U.children||[]),D.return=b,b=D;break e}else{a(b,D);break}else i(b,D);D=D.sibling}D=ad(U,b.mode,Z),D.return=b,b=D}return v(b);case xt:return pe=U._init,it(b,D,pe(U._payload),Z)}if(hr(U))return ae(b,D,U,Z);if(fe(U))return le(b,D,U,Z);Wl(b,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(b,D.sibling),D=d(D,U),D.return=b,b=D):(a(b,D),D=od(U,b.mode,Z),D.return=b,b=D),v(b)):a(b,D)}return it}var Zs=Wp(!0),Kp=Wp(!1),Kl=Jr(null),Gl=null,eo=null,gh=null;function yh(){gh=eo=Gl=null}function _h(n){var i=Kl.current;Ke(Kl),n._currentValue=i}function vh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){Gl=n,gh=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Yt=!0),n.firstContext=null)}function wn(n){var i=n._currentValue;if(gh!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(Gl===null)throw Error(t(308));eo=n,Gl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Gi=null;function wh(n){Gi===null?Gi=[n]:Gi.push(n)}function Gp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,wh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Sr(n,c)}function Sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function Eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Sr(n,a)}return d=c.interleaved,d===null?(i.next=i,wh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Sr(n,a)}function Ql(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}function Yp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yl(n,i,a,c){var d=n.updateQueue;ti=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var C=R,j=C.next;C.next=null,v===null?g=j:v.next=j,v=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,R=Q.lastBaseUpdate,R!==v&&(R===null?Q.firstBaseUpdate=j:R.next=j,Q.lastBaseUpdate=C))}if(g!==null){var J=d.baseState;v=0,Q=j=C=null,R=g;do{var G=R.lane,re=R.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ae=n,le=R;switch(G=i,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){J=ae.call(re,J,G);break e}J=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,G=typeof ae=="function"?ae.call(re,J,G):ae,G==null)break e;J=ie({},J,G);break e;case 2:ti=!0}}R.callback!==null&&R.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[R]:G.push(R))}else re={eventTime:re,lane:G,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Q===null?(j=Q=re,C=J):Q=Q.next=re,v|=G;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;G=R,R=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(C=J),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=J}}function Xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},Xn=Jr(ga),ya=Jr(ga),_a=Jr(ga);function Qi(n){if(n===ga)throw Error(t(174));return n}function Th(n,i){switch(He(_a,i),He(ya,n),He(Xn,ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}Ke(Xn),He(Xn,i)}function no(){Ke(Xn),Ke(ya),Ke(_a)}function Jp(n){Qi(_a.current);var i=Qi(Xn.current),a=ct(i,n.type);i!==a&&(He(ya,n),He(Xn,a))}function Ih(n){ya.current===n&&(Ke(Xn),Ke(ya))}var Xe=Jr(0);function Xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sh=[];function Rh(){for(var n=0;n<Sh.length;n++)Sh[n]._workInProgressVersionPrimary=null;Sh.length=0}var Jl=ce.ReactCurrentDispatcher,Ah=ce.ReactCurrentBatchConfig,Yi=0,Je=null,dt=null,vt=null,Zl=!1,va=!1,wa=0,TE=0;function Lt(){throw Error(t(321))}function Ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ln(n[a],i[a]))return!1;return!0}function Ch(n,i,a,c,d,g){if(Yi=g,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jl.current=n===null||n.memoizedState===null?AE:PE,n=a(c,d),va){g=0;do{if(va=!1,wa=0,25<=g)throw Error(t(301));g+=1,vt=dt=null,i.updateQueue=null,Jl.current=CE,n=a(c,d)}while(va)}if(Jl.current=nu,i=dt!==null&&dt.next!==null,Yi=0,vt=dt=Je=null,Zl=!1,i)throw Error(t(300));return n}function kh(){var n=wa!==0;return wa=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=n:vt=vt.next=n,vt}function En(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=vt===null?Je.memoizedState:vt.next;if(i!==null)vt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Je.memoizedState=vt=n:vt=vt.next=n}return vt}function Ea(n,i){return typeof i=="function"?i(n):i}function Nh(n){var i=En(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var R=v=null,C=null,j=g;do{var Q=j.lane;if((Yi&Q)===Q)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var J={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(R=C=J,v=c):C=C.next=J,Je.lanes|=Q,Xi|=Q}j=j.next}while(j!==null&&j!==g);C===null?v=c:C.next=R,Ln(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Je.lanes|=g,Xi|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Dh(n){var i=En(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=n(g,v.action),v=v.next;while(v!==d);Ln(g,i.memoizedState)||(Yt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Zp(){}function em(n,i){var a=Je,c=En(),d=i(),g=!Ln(c.memoizedState,d);if(g&&(c.memoizedState=d,Yt=!0),c=c.queue,xh(rm.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Ta(9,nm.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));Yi&30||tm(a,i,d)}return d}function tm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function nm(n,i,a,c){i.value=a,i.getSnapshot=c,im(i)&&sm(n)}function rm(n,i,a){return a(function(){im(i)&&sm(n)})}function im(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ln(n,a)}catch{return!0}}function sm(n){var i=Sr(n,1);i!==null&&Un(i,n,1,-1)}function om(n){var i=Jn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=RE.bind(null,Je,n),[i.memoizedState,n]}function Ta(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function am(){return En().memoizedState}function eu(n,i,a,c){var d=Jn();Je.flags|=n,d.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function tu(n,i,a,c){var d=En();c=c===void 0?null:c;var g=void 0;if(dt!==null){var v=dt.memoizedState;if(g=v.destroy,c!==null&&Ph(c,v.deps)){d.memoizedState=Ta(i,a,g,c);return}}Je.flags|=n,d.memoizedState=Ta(1|i,a,g,c)}function lm(n,i){return eu(8390656,8,n,i)}function xh(n,i){return tu(2048,8,n,i)}function um(n,i){return tu(4,2,n,i)}function cm(n,i){return tu(4,4,n,i)}function hm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dm(n,i,a){return a=a!=null?a.concat([n]):null,tu(4,4,hm.bind(null,i,n),a)}function Vh(){}function fm(n,i){var a=En();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pm(n,i){var a=En();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mm(n,i,a){return Yi&21?(Ln(a,i)||(a=Ui(),Je.lanes|=a,Xi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a)}function IE(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Ah.transition;Ah.transition={};try{n(!1),i()}finally{Ne=a,Ah.transition=c}}function gm(){return En().memoizedState}function SE(n,i,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ym(n))_m(i,a);else if(a=Gp(n,i,a,c),a!==null){var d=Ht();Un(a,n,c,d),vm(a,i,c)}}function RE(n,i,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ym(n))_m(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var v=i.lastRenderedState,R=g(v,a);if(d.hasEagerState=!0,d.eagerState=R,Ln(R,v)){var C=i.interleaved;C===null?(d.next=d,wh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Gp(n,i,d,c),a!==null&&(d=Ht(),Un(a,n,c,d),vm(a,i,c))}}function ym(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function _m(n,i){va=Zl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function vm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}var nu={readContext:wn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},AE={readContext:wn,useCallback:function(n,i){return Jn().memoizedState=[n,i===void 0?null:i],n},useContext:wn,useEffect:lm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,eu(4194308,4,hm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return eu(4194308,4,n,i)},useInsertionEffect:function(n,i){return eu(4,2,n,i)},useMemo:function(n,i){var a=Jn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Jn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=SE.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Jn();return n={current:n},i.memoizedState=n},useState:om,useDebugValue:Vh,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=om(!1),i=n[0];return n=IE.bind(null,n[1]),Jn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Jn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));Yi&30||tm(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,lm(rm.bind(null,c,g,n),[n]),c.flags|=2048,Ta(9,nm.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Jn(),i=wt.identifierPrefix;if(Qe){var a=Ir,c=Tr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=TE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},PE={readContext:wn,useCallback:fm,useContext:wn,useEffect:xh,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Nh,useRef:am,useState:function(){return Nh(Ea)},useDebugValue:Vh,useDeferredValue:function(n){var i=En();return mm(i,dt.memoizedState,n)},useTransition:function(){var n=Nh(Ea)[0],i=En().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1},CE={readContext:wn,useCallback:fm,useContext:wn,useEffect:xh,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Dh,useRef:am,useState:function(){return Dh(Ea)},useDebugValue:Vh,useDeferredValue:function(n){var i=En();return dt===null?i.memoizedState=n:mm(i,dt.memoizedState,n)},useTransition:function(){var n=Dh(Ea)[0],i=En().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1};function Mn(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Lh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ru={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),g=Rr(c,d);g.payload=i,a!=null&&(g.callback=a),i=ni(n,g,d),i!==null&&(Un(i,n,d,c),Ql(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),g=Rr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ni(n,g,d),i!==null&&(Un(i,n,d,c),Ql(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=oi(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ni(n,d,c),i!==null&&(Un(i,n,c,a),Ql(i,n,c))}};function wm(n,i,a,c,d,g,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,v):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(d,g):!0}function Em(n,i,a){var c=!1,d=Zr,g=i.contextType;return typeof g=="object"&&g!==null?g=wn(g):(d=Qt(i)?Hi:Vt.current,c=i.contextTypes,g=(c=c!=null)?Qs(n,d):Zr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Tm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ru.enqueueReplaceState(i,i.state,null)}function Oh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Eh(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=wn(g):(g=Qt(i)?Hi:Vt.current,d.context=Qs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Lh(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ru.enqueueReplaceState(d,d.state,null),Yl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kE=typeof WeakMap=="function"?WeakMap:Map;function Im(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cu||(cu=!0,Jh=c),bh(n,i)},a}function Sm(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){bh(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){bh(n,i),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Rm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=$E.bind(null,n,i,a),i.then(n,n))}function Am(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Pm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ni(a,i,1))),a.lanes|=1),n)}var NE=ce.ReactCurrentOwner,Yt=!1;function qt(n,i,a,c){i.child=n===null?Kp(i,null,a,c):Zs(i,n.child,a,c)}function Cm(n,i,a,c,d){a=a.render;var g=i.ref;return to(i,d),c=Ch(n,i,a,c,g,d),a=kh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&a&&hh(i),i.flags|=1,qt(n,i,c,d),i.child)}function km(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!sd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Nm(n,i,g,c,d)):(n=gu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(v,c)&&n.ref===i.ref)return Ar(n,i,d)}return i.flags|=1,n=li(g,c),n.ref=i.ref,n.return=i,i.child=n}function Nm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(la(g,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=g,(n.lanes&d)!==0)n.flags&131072&&(Yt=!0);else return i.lanes=n.lanes,Ar(n,i,d)}return Fh(n,i,a,c,d)}function Dm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(so,cn),cn|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(so,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(so,cn),cn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,He(so,cn),cn|=c;return qt(n,i,d,a),i.child}function xm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Fh(n,i,a,c,d){var g=Qt(a)?Hi:Vt.current;return g=Qs(i,g),to(i,d),a=Ch(n,i,a,c,g,d),c=kh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&c&&hh(i),i.flags|=1,qt(n,i,a,d),i.child)}function Vm(n,i,a,c,d){if(Qt(a)){var g=!0;jl(i)}else g=!1;if(to(i,d),i.stateNode===null)su(n,i),Em(i,a,c),Oh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,R=i.memoizedProps;v.props=R;var C=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=wn(j):(j=Qt(a)?Hi:Vt.current,j=Qs(i,j));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||C!==j)&&Tm(i,v,c,j),ti=!1;var G=i.memoizedState;v.state=G,Yl(i,c,v,d),C=i.memoizedState,R!==c||G!==C||Gt.current||ti?(typeof Q=="function"&&(Lh(i,a,Q,c),C=i.memoizedState),(R=ti||wm(i,a,R,c,G,C,j))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=j,c=R):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Qp(n,i),R=i.memoizedProps,j=i.type===i.elementType?R:Mn(i.type,R),v.props=j,J=i.pendingProps,G=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=wn(C):(C=Qt(a)?Hi:Vt.current,C=Qs(i,C));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==J||G!==C)&&Tm(i,v,c,C),ti=!1,G=i.memoizedState,v.state=G,Yl(i,c,v,d);var ae=i.memoizedState;R!==J||G!==ae||Gt.current||ti?(typeof re=="function"&&(Lh(i,a,re,c),ae=i.memoizedState),(j=ti||wm(i,a,j,c,G,ae,C)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=C,c=j):(typeof v.componentDidUpdate!="function"||R===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Uh(n,i,a,c,g,d)}function Uh(n,i,a,c,d,g){xm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Fp(i,a,!1),Ar(n,i,g);c=i.stateNode,NE.current=i;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,g),i.child=Zs(i,null,R,g)):qt(n,i,R,g),i.memoizedState=c.state,d&&Fp(i,a,!0),i.child}function Lm(n){var i=n.stateNode;i.pendingContext?Mp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mp(n,i.context,!1),Th(n,i.containerInfo)}function Om(n,i,a,c,d){return Js(),mh(d),i.flags|=256,qt(n,i,a,c),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function jh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mm(n,i,a){var c=i.pendingProps,d=Xe.current,g=!1,v=(i.flags&128)!==0,R;if((R=v)||(R=n!==null&&n.memoizedState===null?!1:(d&2)!==0),R?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return ph(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,g?(c=i.mode,g=i.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=yu(v,c,0,null),n=ts(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=jh(a),i.memoizedState=zh,n):Bh(i,v));if(d=n.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return DE(n,i,v,c,R,d,a);if(g){g=c.fallback,v=i.mode,d=n.child,R=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=li(d,C),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?g=li(R,g):(g=ts(g,v,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,v=n.child.memoizedState,v=v===null?jh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=n.childLanes&~a,i.memoizedState=zh,c}return g=n.child,n=g.sibling,c=li(g,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Bh(n,i){return i=yu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function iu(n,i,a,c){return c!==null&&mh(c),Zs(i,n.child,null,a),n=Bh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function DE(n,i,a,c,d,g,v){if(a)return i.flags&256?(i.flags&=-257,c=Mh(Error(t(422))),iu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=yu({mode:"visible",children:c.children},d,0,null),g=ts(g,d,v,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,i.mode&1&&Zs(i,n.child,null,v),i.child.memoizedState=jh(v),i.memoizedState=zh,g);if(!(i.mode&1))return iu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,g=Error(t(419)),c=Mh(g,c,void 0),iu(n,i,v,c)}if(R=(v&n.childLanes)!==0,Yt||R){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Sr(n,d),Un(c,n,d,-1))}return id(),c=Mh(Error(t(421))),iu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=qE.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,un=Xr(d.nextSibling),ln=i,Qe=!0,On=null,n!==null&&(_n[vn++]=Tr,_n[vn++]=Ir,_n[vn++]=Wi,Tr=n.id,Ir=n.overflow,Wi=i),i=Bh(i,c.children),i.flags|=4096,i)}function bm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),vh(n.return,i,a)}function $h(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Fm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(qt(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,a,i);else if(n.tag===19)bm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),$h(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}$h(i,!0,a,null,g);break;case"together":$h(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function su(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=li(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function xE(n,i,a){switch(i.tag){case 3:Lm(i),Js();break;case 5:Jp(i);break;case 1:Qt(i.type)&&jl(i);break;case 4:Th(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?Mm(n,i,a):(He(Xe,Xe.current&1),n=Ar(n,i,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Fm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Dm(n,i,a)}return Ar(n,i,a)}var Um,qh,zm,jm;Um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qh=function(){},zm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Qi(Xn.current);var g=null;switch(a){case"input":d=Ci(n,d),c=Ci(n,c),g=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),g=[];break;case"textarea":d=bo(n,d),c=bo(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fl)}$o(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var R=d[j];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var C=c[j];if(R=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&C!==R&&(C!=null||R!=null))if(j==="style")if(R){for(v in R)!R.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&R[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(g||(g=[]),g.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,R=R?R.__html:void 0,C!=null&&R!==C&&(g=g||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&We("scroll",n),g||R===C||(g=[])):(g=g||[]).push(j,C))}a&&(g=g||[]).push("style",a);var j=g;(i.updateQueue=j)&&(i.flags|=4)}},jm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ia(n,i){if(!Qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function VE(n,i,a){var c=i.pendingProps;switch(dh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Qt(i.type)&&zl(),Ot(i),null;case 3:return c=i.stateNode,no(),Ke(Gt),Ke(Vt),Rh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Hl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,On!==null&&(td(On),On=null))),qh(n,i),Ot(i),null;case 5:Ih(i);var d=Qi(_a.current);if(a=i.type,n!==null&&i.stateNode!=null)zm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Qi(Xn.current),Hl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Yn]=i,c[fa]=g,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ys(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":vs(c,g),We("invalid",c)}$o(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?c.textContent!==R&&(g.suppressHydrationWarning!==!0&&bl(c.textContent,R,n),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&bl(c.textContent,R,n),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":cr(c),ul(c,g,!0);break;case"textarea":cr(c),Fo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Fl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=i,n[fa]=c,Um(n,i,!1,!1),i.stateNode=n;e:{switch(v=qo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ys(n,c),d=Ci(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),We("invalid",n);break;case"textarea":vs(n,c),d=bo(n,c),We("invalid",n);break;default:d=c}$o(a,d),R=d;for(g in R)if(R.hasOwnProperty(g)){var C=R[g];g==="style"?jo(n,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Uo(n,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&zr(n,C):typeof C=="number"&&zr(n,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&We("scroll",n):C!=null&&ne(n,g,C,v))}switch(a){case"input":cr(n),ul(n,c,!1);break;case"textarea":cr(n),Fo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?dr(n,!!c.multiple,g,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)jm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qi(_a.current),Qi(Xn.current),Hl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yn]=i,(g=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&un!==null&&i.mode&1&&!(i.flags&128))qp(),Js(),i.flags|=98560,g=!1;else if(g=Hl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Yn]=i}else Js(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ot(i),g=!1}else On!==null&&(td(On),On=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?ft===0&&(ft=3):id())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return no(),qh(n,i),n===null&&ha(i.stateNode.containerInfo),Ot(i),null;case 10:return _h(i.type._context),Ot(i),null;case 17:return Qt(i.type)&&zl(),Ot(i),null;case 19:if(Ke(Xe),g=i.memoizedState,g===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=g.rendering,v===null)if(c)Ia(g,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=Xl(n),v!==null){for(i.flags|=128,Ia(g,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,n=v.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),i.child}n=n.sibling}g.tail!==null&&qe()>oo&&(i.flags|=128,c=!0,Ia(g,!1),i.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Ot(i),null}else 2*qe()-g.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ia(g,!1),i.lanes=4194304);g.isBackwards?(v.sibling=i.child,i.child=v):(a=g.last,a!==null?a.sibling=v:i.child=v,g.last=v)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return rd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?cn&1073741824&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function LE(n,i){switch(dh(i),i.tag){case 1:return Qt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Ke(Gt),Ke(Vt),Rh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Ih(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return no(),null;case 10:return _h(i.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var ou=!1,Mt=!1,OE=typeof WeakSet=="function"?WeakSet:Set,oe=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Hh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Bm=!1;function ME(n,i){if(rh=Gr,n=wp(),Qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,C=-1,j=0,Q=0,J=n,G=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(R=v+d),J!==g||c!==0&&J.nodeType!==3||(C=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(re=J.firstChild)!==null;)G=J,J=re;for(;;){if(J===n)break t;if(G===a&&++j===d&&(R=v),G===g&&++Q===c&&(C=v),(re=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=re}a=R===-1||C===-1?null:{start:R,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:n,selectionRange:a},Gr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,b=i.stateNode,D=b.getSnapshotBeforeUpdate(i.elementType===i.type?le:Mn(i.type,le),it);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=Bm,Bm=!1,ae}function Sa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Hh(i,a,g)}d=d.next}while(d!==c)}}function au(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Wh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function $m(n){var i=n.alternate;i!==null&&(n.alternate=null,$m(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yn],delete i[fa],delete i[lh],delete i[_E],delete i[vE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fl));else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}function Gh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Gh(n,i,a),n=n.sibling;n!==null;)Gh(n,i,a),n=n.sibling}var Rt=null,bn=!1;function ri(n,i,a){for(a=a.child;a!==null;)Wm(n,i,a),a=a.sibling}function Wm(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Mt||io(a,i);case 6:var c=Rt,d=bn;Rt=null,ri(n,i,a),Rt=c,bn=d,Rt!==null&&(bn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(bn?(n=Rt,a=a.stateNode,n.nodeType===8?ah(n.parentNode,a):n.nodeType===1&&ah(n,a),xn(n)):ah(Rt,a.stateNode));break;case 4:c=Rt,d=bn,Rt=a.stateNode.containerInfo,bn=!0,ri(n,i,a),Rt=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Hh(a,i,v),d=d.next}while(d!==c)}ri(n,i,a);break;case 1:if(!Mt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){tt(a,i,R)}ri(n,i,a);break;case 21:ri(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ri(n,i,a),Mt=c):ri(n,i,a);break;default:ri(n,i,a)}}function Km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new OE),i.forEach(function(c){var d=HE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,v=i,R=v;e:for(;R!==null;){switch(R.tag){case 5:Rt=R.stateNode,bn=!1;break e;case 3:Rt=R.stateNode.containerInfo,bn=!0;break e;case 4:Rt=R.stateNode.containerInfo,bn=!0;break e}R=R.return}if(Rt===null)throw Error(t(160));Wm(g,v,d),Rt=null,bn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(j){tt(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gm(i,n),i=i.sibling}function Gm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(i,n),Zn(n),c&4){try{Sa(3,n,n.return),au(3,n)}catch(le){tt(n,n.return,le)}try{Sa(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:Fn(i,n),Zn(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Fn(i,n),Zn(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{zr(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,v=a!==null?a.memoizedProps:g,R=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&Oo(d,g),qo(R,v);var j=qo(R,g);for(v=0;v<C.length;v+=2){var Q=C[v],J=C[v+1];Q==="style"?jo(d,J):Q==="dangerouslySetInnerHTML"?Uo(d,J):Q==="children"?zr(d,J):ne(d,Q,J,j)}switch(R){case"input":Mo(d,g);break;case"textarea":ws(d,g);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var re=g.value;re!=null?dr(d,!!g.multiple,re,!1):G!==!!g.multiple&&(g.defaultValue!=null?dr(d,!!g.multiple,g.defaultValue,!0):dr(d,!!g.multiple,g.multiple?[]:"",!1))}d[fa]=g}catch(le){tt(n,n.return,le)}}break;case 6:if(Fn(i,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(le){tt(n,n.return,le)}}break;case 3:if(Fn(i,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(i.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:Fn(i,n),Zn(n);break;case 13:Fn(i,n),Zn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Xh=qe())),c&4&&Km(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||Q,Fn(i,n),Mt=j):Fn(i,n),Zn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&n.mode&1)for(oe=n,Q=n.child;Q!==null;){for(J=oe=Q;oe!==null;){switch(G=oe,re=G.child,G.tag){case 0:case 11:case 14:case 15:Sa(4,G,G.return);break;case 1:io(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:io(G,G.return);break;case 22:if(G.memoizedState!==null){Xm(J);continue}}re!==null?(re.return=G,oe=re):Xm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,j?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=J.stateNode,C=J.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,R.style.display=zo("display",v))}catch(le){tt(n,n.return,le)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=j?"":J.memoizedProps}catch(le){tt(n,n.return,le)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fn(i,n),Zn(n),c&4&&Km(n);break;case 21:break;default:Fn(i,n),Zn(n)}}function Zn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zr(d,""),c.flags&=-33);var g=Hm(n);Gh(n,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=Hm(n);Kh(n,R,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function bE(n,i,a){oe=n,Qm(n)}function Qm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ou;if(!v){var R=d.alternate,C=R!==null&&R.memoizedState!==null||Mt;R=ou;var j=Mt;if(ou=v,(Mt=C)&&!j)for(oe=d;oe!==null;)v=oe,C=v.child,v.tag===22&&v.memoizedState!==null?Jm(d):C!==null?(C.return=v,oe=C):Jm(d);for(;g!==null;)oe=g,Qm(g),g=g.sibling;oe=d,ou=R,Mt=j}Ym(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,oe=g):Ym(n)}}function Ym(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Mt||au(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Xp(i,g,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xp(i,v,a)}break;case 5:var R=i.stateNode;if(a===null&&i.flags&4){a=R;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&xn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Wh(i)}catch(G){tt(i,i.return,G)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Xm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Jm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{au(4,i)}catch(C){tt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){tt(i,d,C)}}var g=i.return;try{Wh(i)}catch(C){tt(i,g,C)}break;case 5:var v=i.return;try{Wh(i)}catch(C){tt(i,v,C)}}}catch(C){tt(i,i.return,C)}if(i===n){oe=null;break}var R=i.sibling;if(R!==null){R.return=i.return,oe=R;break}oe=i.return}}var FE=Math.ceil,lu=ce.ReactCurrentDispatcher,Qh=ce.ReactCurrentOwner,Tn=ce.ReactCurrentBatchConfig,Oe=0,wt=null,at=null,At=0,cn=0,so=Jr(0),ft=0,Ra=null,Xi=0,uu=0,Yh=0,Aa=null,Xt=null,Xh=0,oo=1/0,Pr=null,cu=!1,Jh=null,ii=null,hu=!1,si=null,du=0,Pa=0,Zh=null,fu=-1,pu=0;function Ht(){return Oe&6?qe():fu!==-1?fu:fu=qe()}function oi(n){return n.mode&1?Oe&2&&At!==0?At&-At:EE.transition!==null?(pu===0&&(pu=Ui()),pu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n):1}function Un(n,i,a,c){if(50<Pa)throw Pa=0,Zh=null,Error(t(185));qr(n,a,c),(!(Oe&2)||n!==wt)&&(n===wt&&(!(Oe&2)&&(uu|=a),ft===4&&ai(n,At)),Jt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(oo=qe()+500,Bl&&ei()))}function Jt(n,i){var a=n.callbackNode;mr(n,i);var c=Fi(n,n===wt?At:0);if(c===0)a!==null&&Yo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Yo(a),i===1)n.tag===0?wE(eg.bind(null,n)):Up(eg.bind(null,n)),gE(function(){!(Oe&6)&&ei()}),a=null;else{switch(Wr(c)){case 1:a=Mi;break;case 4:a=jr;break;case 16:a=mn;break;case 536870912:a=pl;break;default:a=mn}a=lg(a,Zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zm(n,i){if(fu=-1,pu=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=Fi(n,n===wt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=mu(n,c);else{i=c;var d=Oe;Oe|=2;var g=ng();(wt!==n||At!==i)&&(Pr=null,oo=qe()+500,Zi(n,i));do try{jE();break}catch(R){tg(n,R)}while(!0);yh(),lu.current=g,Oe=d,at!==null?i=0:(wt=null,At=0,i=ft)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=ed(n,d))),i===1)throw a=Ra,Zi(n,0),ai(n,c),Jt(n,qe()),a;if(i===6)ai(n,c);else{if(d=n.current.alternate,!(c&30)&&!UE(d)&&(i=mu(n,c),i===2&&(g=sn(n),g!==0&&(c=g,i=ed(n,g))),i===1))throw a=Ra,Zi(n,0),ai(n,c),Jt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Xt,Pr);break;case 3:if(ai(n,c),(c&130023424)===c&&(i=Xh+500-qe(),10<i)){if(Fi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=oh(es.bind(null,n,Xt,Pr),i);break}es(n,Xt,Pr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);g=1<<v,v=i[v],v>d&&(d=v),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*FE(c/1960))-c,10<c){n.timeoutHandle=oh(es.bind(null,n,Xt,Pr),c);break}es(n,Xt,Pr);break;case 5:es(n,Xt,Pr);break;default:throw Error(t(329))}}}return Jt(n,qe()),n.callbackNode===a?Zm.bind(null,n):null}function ed(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(Zi(n,i).flags|=256),n=mu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&td(i)),n}function td(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function UE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Ln(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i){for(i&=~Yh,i&=~uu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function eg(n){if(Oe&6)throw Error(t(327));ao();var i=Fi(n,0);if(!(i&1))return Jt(n,qe()),null;var a=mu(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=ed(n,c))}if(a===1)throw a=Ra,Zi(n,0),ai(n,i),Jt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Xt,Pr),Jt(n,qe()),null}function nd(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(oo=qe()+500,Bl&&ei())}}function Ji(n){si!==null&&si.tag===0&&!(Oe&6)&&ao();var i=Oe;Oe|=1;var a=Tn.transition,c=Ne;try{if(Tn.transition=null,Ne=1,n)return n()}finally{Ne=c,Tn.transition=a,Oe=i,!(Oe&6)&&ei()}}function rd(){cn=so.current,Ke(so)}function Zi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:no(),Ke(Gt),Ke(Vt),Rh();break;case 5:Ih(c);break;case 4:no();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:_h(c.type._context);break;case 22:case 23:rd()}a=a.return}if(wt=n,at=n=li(n.current,null),At=cn=i,ft=0,Ra=null,Yh=uu=Xi=0,Xt=Aa=null,Gi!==null){for(i=0;i<Gi.length;i++)if(a=Gi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Gi=null}return n}function tg(n,i){do{var a=at;try{if(yh(),Jl.current=nu,Zl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Zl=!1}if(Yi=0,vt=dt=Je=null,va=!1,wa=0,Qh.current=null,a===null||a.return===null){ft=1,Ra=i,at=null;break}e:{var g=n,v=a.return,R=a,C=i;if(i=At,R.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,Q=R,J=Q.tag;if(!(Q.mode&1)&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=Am(v);if(re!==null){re.flags&=-257,Pm(re,v,R,g,i),re.mode&1&&Rm(g,j,i),i=re,C=j;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(C),i.updateQueue=le}else ae.add(C);break e}else{if(!(i&1)){Rm(g,j,i),id();break e}C=Error(t(426))}}else if(Qe&&R.mode&1){var it=Am(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),Pm(it,v,R,g,i),mh(ro(C,R));break e}}g=C=ro(C,R),ft!==4&&(ft=2),Aa===null?Aa=[g]:Aa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var b=Im(g,C,i);Yp(g,b);break e;case 1:R=C;var D=g.type,U=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ii===null||!ii.has(U)))){g.flags|=65536,i&=-i,g.lanes|=i;var Z=Sm(g,R,i);Yp(g,Z);break e}}g=g.return}while(g!==null)}ig(a)}catch(ue){i=ue,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function ng(){var n=lu.current;return lu.current=nu,n===null?nu:n}function id(){(ft===0||ft===3||ft===2)&&(ft=4),wt===null||!(Xi&268435455)&&!(uu&268435455)||ai(wt,At)}function mu(n,i){var a=Oe;Oe|=2;var c=ng();(wt!==n||At!==i)&&(Pr=null,Zi(n,i));do try{zE();break}catch(d){tg(n,d)}while(!0);if(yh(),Oe=a,lu.current=c,at!==null)throw Error(t(261));return wt=null,At=0,ft}function zE(){for(;at!==null;)rg(at)}function jE(){for(;at!==null&&!dl();)rg(at)}function rg(n){var i=ag(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?ig(n):at=i,Qh.current=null}function ig(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=LE(a,i),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}else if(a=VE(a,i,cn),a!==null){at=a;return}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);ft===0&&(ft=5)}function es(n,i,a){var c=Ne,d=Tn.transition;try{Tn.transition=null,Ne=1,BE(n,i,a,c)}finally{Tn.transition=d,Ne=c}return null}function BE(n,i,a,c){do ao();while(si!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(n,g),n===wt&&(at=wt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||hu||(hu=!0,lg(mn,function(){return ao(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Tn.transition,Tn.transition=null;var v=Ne;Ne=1;var R=Oe;Oe|=4,Qh.current=null,ME(n,a),Gm(a,n),lE(ih),Gr=!!rh,ih=rh=null,n.current=a,bE(a),jc(),Oe=R,Ne=v,Tn.transition=g}else n.current=a;if(hu&&(hu=!1,si=n,du=d),g=n.pendingLanes,g===0&&(ii=null),ml(a.stateNode),Jt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cu)throw cu=!1,n=Jh,Jh=null,n;return du&1&&n.tag!==0&&ao(),g=n.pendingLanes,g&1?n===Zh?Pa++:(Pa=0,Zh=n):Pa=0,ei(),null}function ao(){if(si!==null){var n=Wr(du),i=Tn.transition,a=Ne;try{if(Tn.transition=null,Ne=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,du=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,oe=n.current;oe!==null;){var g=oe,v=g.child;if(oe.flags&16){var R=g.deletions;if(R!==null){for(var C=0;C<R.length;C++){var j=R[C];for(oe=j;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Sa(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,oe=J;else for(;oe!==null;){Q=oe;var G=Q.sibling,re=Q.return;if($m(Q),Q===j){oe=null;break}if(G!==null){G.return=re,oe=G;break}oe=re}}}var ae=g.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}oe=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,oe=v;else e:for(;oe!==null;){if(g=oe,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Sa(9,g,g.return)}var b=g.sibling;if(b!==null){b.return=g.return,oe=b;break e}oe=g.return}}var D=n.current;for(oe=D;oe!==null;){v=oe;var U=v.child;if(v.subtreeFlags&2064&&U!==null)U.return=v,oe=U;else e:for(v=D;oe!==null;){if(R=oe,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:au(9,R)}}catch(ue){tt(R,R.return,ue)}if(R===v){oe=null;break e}var Z=R.sibling;if(Z!==null){Z.return=R.return,oe=Z;break e}oe=R.return}}if(Oe=d,ei(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{Ne=a,Tn.transition=i}}return!1}function sg(n,i,a){i=ro(a,i),i=Im(n,i,1),n=ni(n,i,1),i=Ht(),n!==null&&(qr(n,1,i),Jt(n,i))}function tt(n,i,a){if(n.tag===3)sg(n,n,a);else for(;i!==null;){if(i.tag===3){sg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=ro(a,n),n=Sm(i,n,1),i=ni(i,n,1),n=Ht(),i!==null&&(qr(i,1,n),Jt(i,n));break}}i=i.return}}function $E(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>qe()-Xh?Zi(n,0):Yh|=a),Jt(n,i)}function og(n,i){i===0&&(n.mode&1?(i=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):i=1);var a=Ht();n=Sr(n,i),n!==null&&(qr(n,i,a),Jt(n,a))}function qE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),og(n,a)}function HE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),og(n,a)}var ag;ag=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)Yt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Yt=!1,xE(n,i,a);Yt=!!(n.flags&131072)}else Yt=!1,Qe&&i.flags&1048576&&zp(i,ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;su(n,i),n=i.pendingProps;var d=Qs(i,Vt.current);to(i,a),d=Ch(null,i,c,n,d,a);var g=kh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(g=!0,jl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Eh(i),d.updater=ru,i.stateNode=d,d._reactInternals=i,Oh(i,c,n,a),i=Uh(null,i,c,!0,g,a)):(i.tag=0,Qe&&g&&hh(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(su(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=KE(c),n=Mn(c,n),d){case 0:i=Fh(null,i,c,n,a);break e;case 1:i=Vm(null,i,c,n,a);break e;case 11:i=Cm(null,i,c,n,a);break e;case 14:i=km(null,i,c,Mn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Fh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Vm(n,i,c,d,a);case 3:e:{if(Lm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Qp(n,i),Yl(i,c,null,a);var v=i.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=ro(Error(t(423)),i),i=Om(n,i,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),i),i=Om(n,i,c,a,d);break e}else for(un=Xr(i.stateNode.containerInfo.firstChild),ln=i,Qe=!0,On=null,a=Kp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){i=Ar(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Jp(i),n===null&&ph(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,v=d.children,sh(c,d)?v=null:g!==null&&sh(c,g)&&(i.flags|=32),xm(n,i),qt(n,i,v,a),i.child;case 6:return n===null&&ph(i),null;case 13:return Mm(n,i,a);case 4:return Th(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Cm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,v=d.value,He(Kl,c._currentValue),c._currentValue=v,g!==null)if(Ln(g.value,v)){if(g.children===d.children&&!Gt.current){i=Ar(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var C=R.firstContext;C!==null;){if(C.context===c){if(g.tag===1){C=Rr(-1,a&-a),C.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),j.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),vh(g.return,a,i),R.lanes|=a;break}C=C.next}}else if(g.tag===10)v=g.type===i.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),vh(v,a,i),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===i){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,to(i,a),d=wn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=Mn(c,i.pendingProps),d=Mn(c.type,d),km(n,i,c,d,a);case 15:return Nm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),su(n,i),i.tag=1,Qt(c)?(n=!0,jl(i)):n=!1,to(i,a),Em(i,c,d),Oh(i,c,d,a),Uh(null,i,c,!0,n,a);case 19:return Fm(n,i,a);case 22:return Dm(n,i,a)}throw Error(t(156,i.tag))};function lg(n,i){return Cs(n,i)}function WE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,i,a,c){return new WE(n,i,a,c)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function KE(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Dt)return 14}return 2}function li(n,i){var a=n.alternate;return a===null?(a=In(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gu(n,i,a,c,d,g){var v=2;if(c=n,typeof n=="function")sd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ts(a.children,d,g,i);case S:v=8,d|=8;break;case A:return n=In(12,a,i,d|2),n.elementType=A,n.lanes=g,n;case P:return n=In(13,a,i,d),n.elementType=P,n.lanes=g,n;case nt:return n=In(19,a,i,d),n.elementType=nt,n.lanes=g,n;case je:return yu(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case x:v=9;break e;case O:v=11;break e;case Dt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=In(v,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ts(n,i,a,c){return n=In(7,n,c,i),n.lanes=a,n}function yu(n,i,a,c){return n=In(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,i,a){return n=In(6,n,null,i),n.lanes=a,n}function ad(n,i,a){return i=In(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function GE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ld(n,i,a,c,d,g,v,R,C){return n=new GE(n,i,a,R,C),i===1?(i=1,g===!0&&(i|=8)):i=0,g=In(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(g),n}function QE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ug(n){if(!n)return Zr;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return bp(n,a,i)}return i}function cg(n,i,a,c,d,g,v,R,C){return n=ld(a,c,!0,n,d,g,v,R,C),n.context=ug(null),a=n.current,c=Ht(),d=oi(a),g=Rr(c,d),g.callback=i??null,ni(a,g,d),n.current.lanes=d,qr(n,d,c),Jt(n,c),n}function _u(n,i,a,c){var d=i.current,g=Ht(),v=oi(d);return a=ug(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(g,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ni(d,i,v),n!==null&&(Un(n,d,v,g),Ql(n,d,v)),v}function vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ud(n,i){hg(n,i),(n=n.alternate)&&hg(n,i)}var dg=typeof reportError=="function"?reportError:function(n){console.error(n)};function cd(n){this._internalRoot=n}wu.prototype.render=cd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_u(n,i,null,null)},wu.prototype.unmount=cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ji(function(){_u(null,n,null,null)}),i[wr]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=wl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Wn.length&&i!==0&&i<Wn[a].priority;a++);Wn.splice(a,0,n),a===0&&Il(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fg(){}function YE(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var j=vu(v);g.call(j)}}var v=cg(i,c,n,0,null,!1,!1,"",fg);return n._reactRootContainer=v,n[wr]=v.current,ha(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var j=vu(C);R.call(j)}}var C=ld(n,0,!1,null,null,!1,!1,"",fg);return n._reactRootContainer=C,n[wr]=C.current,ha(n.nodeType===8?n.parentNode:n),Ji(function(){_u(i,C,a,c)}),C}function Tu(n,i,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var R=d;d=function(){var C=vu(v);R.call(C)}}_u(i,v,n,d)}else v=YE(a,i,n,d,c);return vu(v)}_l=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Br(i.pendingLanes);a!==0&&(Hr(i,a|1),Jt(i,qe()),!(Oe&6)&&(oo=qe()+500,ei()))}break;case 13:Ji(function(){var c=Sr(n,1);if(c!==null){var d=Ht();Un(c,n,1,d)}}),ud(n,1)}},Ds=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var a=Ht();Un(i,n,134217728,a)}ud(n,134217728)}},vl=function(n){if(n.tag===13){var i=oi(n),a=Sr(n,i);if(a!==null){var c=Ht();Un(a,n,i,c)}ud(n,i)}},wl=function(){return Ne},El=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},Ts=function(n,i,a){switch(i){case"input":if(Mo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ul(c);if(!d)throw Error(t(90));gs(c),Mo(c,d)}}}break;case"textarea":ws(n,a);break;case"select":i=a.value,i!=null&&dr(n,!!a.multiple,i,!1)}},xi=nd,Wo=Ji;var XE={usingClientEntryPoint:!1,Events:[pa,Ks,Ul,qn,Ho,nd]},Ca={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{bi=Iu.inject(JE),rn=Iu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XE,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(i))throw Error(t(200));return QE(n,i,null,a)},Zt.createRoot=function(n,i){if(!hd(n))throw Error(t(299));var a=!1,c="",d=dg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ld(n,1,!1,null,null,a,!1,c,d),n[wr]=i.current,ha(n.nodeType===8?n.parentNode:n),new cd(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Ji(n)},Zt.hydrate=function(n,i,a){if(!Eu(i))throw Error(t(200));return Tu(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!hd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=dg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=cg(i,null,n,1,a??null,d,!1,g,v),n[wr]=i.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wu(i)},Zt.render=function(n,i,a){if(!Eu(i))throw Error(t(200));return Tu(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Eu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){Tu(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Zt.unstable_batchedUpdates=nd,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tu(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Eg;function oT(){if(Eg)return pd.exports;Eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=sT(),pd.exports}var Tg;function aT(){if(Tg)return Su;Tg=1;var r=oT();return Su.createRoot=r.createRoot,Su.hydrateRoot=r.hydrateRoot,Su}var lT=aT(),Na={},Ig;function uT(){if(Ig)return Na;Ig=1,Object.defineProperty(Na,"__esModule",{value:!0}),Na.parse=h,Na.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function h(I,V){const F=new l,$=I.length;if($<2)return F;const z=(V==null?void 0:V.decode)||w;let W=0;do{const X=I.indexOf("=",W);if(X===-1)break;const ne=I.indexOf(";",W),ce=ne===-1?$:ne;if(X>ce){W=I.lastIndexOf(";",X-1)+1;continue}const Ie=f(I,W,X),Ee=p(I,X,Ie),N=I.slice(Ie,Ee);if(F[N]===void 0){let S=f(I,X+1,ce),A=p(I,ce,S);const k=z(I.slice(S,A));F[N]=k}W=ce+1}while(W<$);return F}function f(I,V,F){do{const $=I.charCodeAt(V);if($!==32&&$!==9)return V}while(++V<F);return F}function p(I,V,F){for(;V>F;){const $=I.charCodeAt(--V);if($!==32&&$!==9)return V+1}return F}function y(I,V,F){const $=(F==null?void 0:F.encode)||encodeURIComponent;if(!r.test(I))throw new TypeError(`argument name is invalid: ${I}`);const z=$(V);if(!e.test(z))throw new TypeError(`argument val is invalid: ${V}`);let W=I+"="+z;if(!F)return W;if(F.maxAge!==void 0){if(!Number.isInteger(F.maxAge))throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);W+="; Max-Age="+F.maxAge}if(F.domain){if(!t.test(F.domain))throw new TypeError(`option domain is invalid: ${F.domain}`);W+="; Domain="+F.domain}if(F.path){if(!s.test(F.path))throw new TypeError(`option path is invalid: ${F.path}`);W+="; Path="+F.path}if(F.expires){if(!T(F.expires)||!Number.isFinite(F.expires.valueOf()))throw new TypeError(`option expires is invalid: ${F.expires}`);W+="; Expires="+F.expires.toUTCString()}if(F.httpOnly&&(W+="; HttpOnly"),F.secure&&(W+="; Secure"),F.partitioned&&(W+="; Partitioned"),F.priority)switch(typeof F.priority=="string"?F.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${F.priority}`)}if(F.sameSite)switch(typeof F.sameSite=="string"?F.sameSite.toLowerCase():F.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${F.sameSite}`)}return W}function w(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Na}uT();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sg="popstate";function cT(r={}){function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Ld("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ba(o)}return dT(e,t,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ir(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(){return Math.random().toString(36).substring(2,10)}function Rg(r,e){return{usr:r.state,key:r.key,idx:e}}function Ld(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ao(e):e,state:t,key:e&&e.key||s||hT()}}function Ba({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ao(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function dT(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f="POP",p=null,y=w();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function w(){return(h.state||{idx:null}).idx}function T(){f="POP";let z=w(),W=z==null?null:z-y;y=z,p&&p({action:f,location:$.location,delta:W})}function I(z,W){f="PUSH";let X=Ld($.location,z,W);y=w()+1;let ne=Rg(X,y),ce=$.createHref(X);try{h.pushState(ne,"",ce)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(ce)}l&&p&&p({action:f,location:$.location,delta:1})}function V(z,W){f="REPLACE";let X=Ld($.location,z,W);y=w();let ne=Rg(X,y),ce=$.createHref(X);h.replaceState(ne,"",ce),l&&p&&p({action:f,location:$.location,delta:0})}function F(z){let W=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof z=="string"?z:Ba(z);return X=X.replace(/ $/,"%20"),Ze(W,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,W)}let $={get action(){return f},get location(){return r(o,h)},listen(z){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Sg,T),p=z,()=>{o.removeEventListener(Sg,T),p=null}},createHref(z){return e(o,z)},createURL:F,encodeLocation(z){let W=F(z);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:I,replace:V,go(z){return h.go(z)}};return $}function Jy(r,e,t="/"){return fT(r,e,t,!1)}function fT(r,e,t,s){let o=typeof e=="string"?Ao(e):e,l=wi(o.pathname||"/",t);if(l==null)return null;let h=Zy(r);pT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=RT(l);f=IT(h[p],y,s)}return f}function Zy(r,e=[],t=[],s=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Dr([s,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Zy(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:ET(y,l.index),routesMeta:w})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of e_(l.path))o(l,h,p)}),e}function e_(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=e_(s.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function pT(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:TT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var mT=/^:[\w-]+$/,gT=3,yT=2,_T=1,vT=10,wT=-2,Ag=r=>r==="*";function ET(r,e){let t=r.split("/"),s=t.length;return t.some(Ag)&&(s+=wT),e&&(s+=yT),t.filter(o=>!Ag(o)).reduce((o,l)=>o+(mT.test(l)?gT:l===""?_T:vT),s)}function TT(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function IT(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let p=s[f],y=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=Hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),I=p.route;if(!T&&y&&t&&!s[s.length-1].route.index&&(T=Hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Dr([l,T.pathname]),pathnameBase:kT(Dr([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Dr([l,T.pathnameBase]))}return h}function Hu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=ST(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,{paramName:w,isOptional:T},I)=>{if(w==="*"){let F=f[I]||"";h=l.slice(0,l.length-F.length).replace(/(.)\/+$/,"$1")}const V=f[I];return T&&!V?y[w]=void 0:y[w]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function ST(r,e=!1,t=!0){ir(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function RT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ir(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function wi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function AT(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Ao(r):r;return{pathname:t?t.startsWith("/")?t:PT(t,e):e,search:NT(s),hash:DT(o)}}function PT(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function t_(r){let e=CT(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function n_(r,e,t,s=!1){let o;typeof r=="string"?o=Ao(r):(o={...r},Ze(!o.pathname||!o.pathname.includes("?"),yd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),yd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),yd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let p=AT(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var Dr=r=>r.join("/").replace(/\/\/+/g,"/"),kT=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),NT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,DT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function xT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var r_=["POST","PUT","PATCH","DELETE"];new Set(r_);var VT=["GET",...r_];new Set(VT);var Po=q.createContext(null);Po.displayName="DataRouter";var dc=q.createContext(null);dc.displayName="DataRouterState";var i_=q.createContext({isTransitioning:!1});i_.displayName="ViewTransition";var LT=q.createContext(new Map);LT.displayName="Fetchers";var OT=q.createContext(null);OT.displayName="Await";var lr=q.createContext(null);lr.displayName="Navigation";var Ja=q.createContext(null);Ja.displayName="Location";var ur=q.createContext({outlet:null,matches:[],isDataRoute:!1});ur.displayName="Route";var lf=q.createContext(null);lf.displayName="RouteError";function MT(r,{relative:e}={}){Ze(Za(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=q.useContext(lr),{hash:o,pathname:l,search:h}=el(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Dr([t,l])),s.createHref({pathname:f,search:h,hash:o})}function Za(){return q.useContext(Ja)!=null}function hs(){return Ze(Za(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Ja).location}var s_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function o_(r){q.useContext(lr).static||q.useLayoutEffect(r)}function fc(){let{isDataRoute:r}=q.useContext(ur);return r?YT():bT()}function bT(){Ze(Za(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Po),{basename:e,navigator:t}=q.useContext(lr),{matches:s}=q.useContext(ur),{pathname:o}=hs(),l=JSON.stringify(t_(s)),h=q.useRef(!1);return o_(()=>{h.current=!0}),q.useCallback((p,y={})=>{if(ir(h.current,s_),!h.current)return;if(typeof p=="number"){t.go(p);return}let w=n_(p,JSON.parse(l),o,y.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Dr([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,r])}q.createContext(null);function FT(){let{matches:r}=q.useContext(ur),e=r[r.length-1];return e?e.params:{}}function el(r,{relative:e}={}){let{matches:t}=q.useContext(ur),{pathname:s}=hs(),o=JSON.stringify(t_(t));return q.useMemo(()=>n_(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function UT(r,e){return a_(r,e)}function a_(r,e,t,s){var W;Ze(Za(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=q.useContext(lr),{matches:l}=q.useContext(ur),h=l[l.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",w=h&&h.route;{let X=w&&w.path||"";l_(p,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=hs(),I;if(e){let X=typeof e=="string"?Ao(e):e;Ze(y==="/"||((W=X.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),I=X}else I=T;let V=I.pathname||"/",F=V;if(y!=="/"){let X=y.replace(/^\//,"").split("/");F="/"+V.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=Jy(r,{pathname:F});ir(w||$!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),ir($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=qT($&&$.map(X=>Object.assign({},X,{params:Object.assign({},f,X.params),pathname:Dr([y,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:Dr([y,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,s);return e&&z?q.createElement(Ja.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},z):z}function zT(){let r=QT(),e=xT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,h)}var jT=q.createElement(zT,null),BT=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?q.createElement(ur.Provider,{value:this.props.routeContext},q.createElement(lf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $T({routeContext:r,match:e,children:t}){let s=q.useContext(Po);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(ur.Provider,{value:r},t)}function qT(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:w,errors:T}=t,I=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let T,I=!1,V=null,F=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,V=y.route.errorElement||jT,h&&(f<0&&w===0?(l_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,F=null):f===w&&(I=!0,F=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,w+1)),z=()=>{let W;return T?W=V:I?W=F:y.route.Component?W=q.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,q.createElement($T,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?q.createElement(BT,{location:t.location,revalidation:t.revalidation,component:V,error:T,children:z(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):z()},null)}function uf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function HT(r){let e=q.useContext(Po);return Ze(e,uf(r)),e}function WT(r){let e=q.useContext(dc);return Ze(e,uf(r)),e}function KT(r){let e=q.useContext(ur);return Ze(e,uf(r)),e}function cf(r){let e=KT(r),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function GT(){return cf("useRouteId")}function QT(){var s;let r=q.useContext(lf),e=WT("useRouteError"),t=cf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function YT(){let{router:r}=HT("useNavigate"),e=cf("useNavigate"),t=q.useRef(!1);return o_(()=>{t.current=!0}),q.useCallback(async(o,l={})=>{ir(t.current,s_),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Pg={};function l_(r,e,t){!e&&!Pg[r]&&(Pg[r]=!0,ir(!1,t))}q.memo(XT);function XT({routes:r,future:e,state:t}){return a_(r,void 0,t,e)}function xu(r){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function JT({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Ze(!Za(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=q.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Ao(t));let{pathname:p="/",search:y="",hash:w="",state:T=null,key:I="default"}=t,V=q.useMemo(()=>{let F=wi(p,h);return F==null?null:{location:{pathname:F,search:y,hash:w,state:T,key:I},navigationType:s}},[h,p,y,w,T,I,s]);return ir(V!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:q.createElement(lr.Provider,{value:f},q.createElement(Ja.Provider,{children:e,value:V}))}function ZT({children:r,location:e}){return UT(Od(r),e)}function Od(r,e=[]){let t=[];return q.Children.forEach(r,(s,o)=>{if(!q.isValidElement(s))return;let l=[...e,o];if(s.type===q.Fragment){t.push.apply(t,Od(s.props.children,l));return}Ze(s.type===xu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Od(s.props.children,l)),t.push(h)}),t}var Vu="get",Lu="application/x-www-form-urlencoded";function pc(r){return r!=null&&typeof r.tagName=="string"}function eI(r){return pc(r)&&r.tagName.toLowerCase()==="button"}function tI(r){return pc(r)&&r.tagName.toLowerCase()==="form"}function nI(r){return pc(r)&&r.tagName.toLowerCase()==="input"}function rI(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function iI(r,e){return r.button===0&&(!e||e==="_self")&&!rI(r)}var Ru=null;function sI(){if(Ru===null)try{new FormData(document.createElement("form"),0),Ru=!1}catch{Ru=!0}return Ru}var oI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!oI.has(r)?(ir(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`),null):r}function aI(r,e){let t,s,o,l,h;if(tI(r)){let f=r.getAttribute("action");s=f?wi(f,e):null,t=r.getAttribute("method")||Vu,o=_d(r.getAttribute("enctype"))||Lu,l=new FormData(r)}else if(eI(r)||nI(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?wi(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Vu,o=_d(r.getAttribute("formenctype"))||_d(f.getAttribute("enctype"))||Lu,l=new FormData(f,r),!sI()){let{name:y,type:w,value:T}=r;if(w==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(pc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Vu,s=null,o=Lu,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}function hf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function lI(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uI(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function cI(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await lI(l,t);return h.links?h.links():[]}return[]}));return pI(s.flat(1).filter(uI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Cg(r,e,t,s,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let w=s.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function hI(r,e){return dI(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function dI(r){return[...new Set(r)]}function fI(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function pI(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(fI(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function mI(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function gI(){let r=q.useContext(Po);return hf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function yI(){let r=q.useContext(dc);return hf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var df=q.createContext(void 0);df.displayName="FrameworkContext";function u_(){let r=q.useContext(df);return hf(r,"You must render this element inside a <HydratedRouter> element"),r}function _I(r,e){let t=q.useContext(df),[s,o]=q.useState(!1),[l,h]=q.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:T}=e,I=q.useRef(null);q.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=W=>{W.forEach(X=>{h(X.isIntersecting)})},z=new IntersectionObserver($,{threshold:.5});return I.current&&z.observe(I.current),()=>{z.disconnect()}}},[r]),q.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let V=()=>{o(!0)},F=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,I,{}]:[l,I,{onFocus:Da(f,V),onBlur:Da(p,F),onMouseEnter:Da(y,V),onMouseLeave:Da(w,F),onTouchStart:Da(T,V)}]:[!1,I,{}]}function Da(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function vI({page:r,...e}){let{router:t}=gI(),s=q.useMemo(()=>Jy(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?q.createElement(EI,{page:r,matches:s,...e}):null}function wI(r){let{manifest:e,routeModules:t}=u_(),[s,o]=q.useState([]);return q.useEffect(()=>{let l=!1;return cI(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function EI({page:r,matches:e,...t}){let s=hs(),{manifest:o,routeModules:l}=u_(),{loaderData:h,matches:f}=yI(),p=q.useMemo(()=>Cg(r,e,f,o,s,"data"),[r,e,f,o,s]),y=q.useMemo(()=>Cg(r,e,f,o,s,"assets"),[r,e,f,o,s]),w=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let V=new Set,F=!1;if(e.forEach(z=>{var X;let W=o.routes[z.route.id];!W||!W.hasLoader||(!p.some(ne=>ne.route.id===z.route.id)&&z.route.id in h&&((X=l[z.route.id])!=null&&X.shouldRevalidate)||W.hasClientLoader?F=!0:V.add(z.route.id))}),V.size===0)return[];let $=mI(r);return F&&V.size>0&&$.searchParams.set("_routes",e.filter(z=>V.has(z.route.id)).map(z=>z.route.id).join(",")),[$.pathname+$.search]},[h,s,o,p,e,r,l]),T=q.useMemo(()=>hI(y,o),[y,o]),I=wI(y);return q.createElement(q.Fragment,null,w.map(V=>q.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...t})),T.map(V=>q.createElement("link",{key:V,rel:"modulepreload",href:V,...t})),I.map(({key:V,link:F})=>q.createElement("link",{key:V,...F})))}function TI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var c_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c_&&(window.__reactRouterVersion="7.1.1")}catch{}function II({basename:r,children:e,window:t}){let s=q.useRef();s.current==null&&(s.current=cT({window:t,v5Compat:!0}));let o=s.current,[l,h]=q.useState({action:o.action,location:o.location}),f=q.useCallback(p=>{q.startTransition(()=>h(p))},[h]);return q.useLayoutEffect(()=>o.listen(f),[o,f]),q.createElement(JT,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var h_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wu=q.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:w,viewTransition:T,...I},V){let{basename:F}=q.useContext(lr),$=typeof y=="string"&&h_.test(y),z,W=!1;if(typeof y=="string"&&$&&(z=y,c_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),x=wi(k.pathname,F);k.origin===A.origin&&x!=null?y=x+k.search+k.hash:W=!0}catch{ir(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=MT(y,{relative:o}),[ne,ce,Ie]=_I(s,I),Ee=PI(y,{replace:h,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||Ee(A)}let S=q.createElement("a",{...I,...Ie,href:z||X,onClick:W||l?e:N,ref:TI(V,ce),target:p,"data-discover":!$&&t==="render"?"true":void 0});return ne&&!$?q.createElement(q.Fragment,null,S,q.createElement(vI,{page:X})):S});Wu.displayName="Link";var SI=q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},w){let T=el(h,{relative:y.relative}),I=hs(),V=q.useContext(dc),{navigator:F,basename:$}=q.useContext(lr),z=V!=null&&xI(T)&&f===!0,W=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,X=I.pathname,ne=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;t||(X=X.toLowerCase(),ne=ne?ne.toLowerCase():null,W=W.toLowerCase()),ne&&$&&(ne=wi(ne,$)||ne);const ce=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ie=X===W||!o&&X.startsWith(W)&&X.charAt(ce)==="/",Ee=ne!=null&&(ne===W||!o&&ne.startsWith(W)&&ne.charAt(W.length)==="/"),N={isActive:Ie,isPending:Ee,isTransitioning:z},S=Ie?e:void 0,A;typeof s=="function"?A=s(N):A=[s,Ie?"active":null,Ee?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return q.createElement(Wu,{...y,"aria-current":S,className:A,ref:w,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});SI.displayName="NavLink";var RI=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=Vu,action:f,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:T,...I},V)=>{let F=NI(),$=DI(f,{relative:y}),z=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&h_.test(f),X=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let ce=ne.nativeEvent.submitter,Ie=(ce==null?void 0:ce.getAttribute("formmethod"))||h;F(ce||ne.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:T})};return q.createElement("form",{ref:V,method:z,action:$,onSubmit:s?p:X,...I,"data-discover":!W&&r==="render"?"true":void 0})});RI.displayName="Form";function AI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d_(r){let e=q.useContext(Po);return Ze(e,AI(r)),e}function PI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=fc(),p=hs(),y=el(r,{relative:l});return q.useCallback(w=>{if(iI(w,e)){w.preventDefault();let T=t!==void 0?t:Ba(p)===Ba(y);f(r,{replace:T,state:s,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,s,e,r,o,l,h])}var CI=0,kI=()=>`__${String(++CI)}__`;function NI(){let{router:r}=d_("useSubmit"),{basename:e}=q.useContext(lr),t=GT();return q.useCallback(async(s,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=aI(s,e);if(o.navigate===!1){let w=o.fetcherKey||kI();await r.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function DI(r,{relative:e}={}){let{basename:t}=q.useContext(lr),s=q.useContext(ur);Ze(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...el(r||".",{relative:e})},h=hs();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(w=>w==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let w=f.toString();l.search=w?`?${w}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Dr([t,l.pathname])),Ba(l)}function xI(r,e={}){let t=q.useContext(i_);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=d_("useViewTransitionState"),o=el(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=wi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=wi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Hu(o.pathname,h)!=null||Hu(o.pathname,l)!=null}new TextEncoder;function VI(){return Re.jsx("nav",{children:Re.jsxs("ul",{children:[Re.jsx("li",{children:Re.jsx(Wu,{to:"/",children:"View All Products"})}),Re.jsx("li",{children:Re.jsx(Wu,{to:"/create",children:"Create Product"})})]})})}var kg={};/**
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
 */const f_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},LI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,V=y&63;p||(V=64,h||(I=64)),s.push(t[w],t[T],t[I],t[V])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(f_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):LI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new OI;const I=l<<2|f>>4;if(s.push(I),y!==64){const V=f<<4&240|y>>2;if(s.push(V),T!==64){const F=y<<6&192|T;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class OI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MI=function(r){const e=f_(r);return p_.encodeByteArray(e,!0)},Ku=function(r){return MI(r).replace(/\./g,"")},m_=function(r){try{return p_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>bI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof kg>"u")return;const r=kg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&m_(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return FI()||UI()||zI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},g_=r=>{var e,t;return(t=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},jI=r=>{const e=g_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},y_=()=>{var r;return(r=mc())===null||r===void 0?void 0:r.config},__=r=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function $I(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function HI(){var r;const e=(r=mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function v_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function QI(){return!HI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w_(){try{return typeof indexedDB=="object"}catch{return!1}}function E_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function YI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const XI="FirebaseError";class Bn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=XI,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?JI(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Bn(o,f,s)}}function JI(r,e){return r.replace(ZI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ZI=/\{\$([^}]+)}/g;function eS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $a(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Ng(l)&&Ng(h)){if(!$a(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ng(r){return r!==null&&typeof r=="object"}/**
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
 */function tl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tS(r,e){const t=new nS(r,e);return t.subscribe.bind(t)}class nS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
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
 */const iS=1e3,sS=2,oS=4*60*60*1e3,aS=.5;function Dg(r,e=iS,t=sS){const s=e*Math.pow(t,r),o=Math.round(aS*s*(Math.random()-.5)*2);return Math.min(oS,s+o)}/**
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
 */function jt(r){return r&&r._delegate?r._delegate:r}class jn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class lS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new BI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cS(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uS(r){return r===ns?void 0:r}function cS(r){return r.instantiationMode==="EAGER"}/**
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
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const dS={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},fS=Ce.INFO,pS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},mS=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=pS[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const gS=(r,e)=>e.some(t=>r instanceof t);let xg,Vg;function yS(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _S(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,Md=new WeakMap,I_=new WeakMap,wd=new WeakMap,ff=new WeakMap;function vS(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&T_.set(t,r)}).catch(()=>{}),ff.set(e,r),e}function wS(r){if(Md.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Md.set(r,e)}let bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Md.get(r);if(e==="objectStoreNames")return r.objectStoreNames||I_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ES(r){bd=r(bd)}function TS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Ed(this),e,...t);return I_.set(s,e.sort?e.sort():[e]),yi(s)}:_S().includes(r)?function(...e){return r.apply(Ed(this),e),yi(T_.get(this))}:function(...e){return yi(r.apply(Ed(this),e))}}function IS(r){return typeof r=="function"?TS(r):(r instanceof IDBTransaction&&wS(r),gS(r,yS())?new Proxy(r,bd):r)}function yi(r){if(r instanceof IDBRequest)return vS(r);if(wd.has(r))return wd.get(r);const e=IS(r);return e!==r&&(wd.set(r,e),ff.set(e,r)),e}const Ed=r=>ff.get(r);function S_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=yi(h);return s&&h.addEventListener("upgradeneeded",p=>{s(yi(h.result),p.oldVersion,p.newVersion,yi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const SS=["get","getKey","getAll","getAllKeys","count"],RS=["put","add","delete","clear"],Td=new Map;function Lg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=RS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||SS.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Td.set(e,l),l}ES(r=>({...r,get:(e,t,s)=>Lg(e,t)||r.get(e,t,s),has:(e,t)=>!!Lg(e,t)||r.has(e,t)}));/**
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
 */class AS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function PS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",Og="0.10.17";/**
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
 */const Vr=new gc("@firebase/app"),CS="@firebase/app-compat",kS="@firebase/analytics-compat",NS="@firebase/analytics",DS="@firebase/app-check-compat",xS="@firebase/app-check",VS="@firebase/auth",LS="@firebase/auth-compat",OS="@firebase/database",MS="@firebase/data-connect",bS="@firebase/database-compat",FS="@firebase/functions",US="@firebase/functions-compat",zS="@firebase/installations",jS="@firebase/installations-compat",BS="@firebase/messaging",$S="@firebase/messaging-compat",qS="@firebase/performance",HS="@firebase/performance-compat",WS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/vertexai",JS="@firebase/firestore-compat",ZS="firebase",e0="11.1.0";/**
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
 */const Ud="[DEFAULT]",t0={[Fd]:"fire-core",[CS]:"fire-core-compat",[NS]:"fire-analytics",[kS]:"fire-analytics-compat",[xS]:"fire-app-check",[DS]:"fire-app-check-compat",[VS]:"fire-auth",[LS]:"fire-auth-compat",[OS]:"fire-rtdb",[MS]:"fire-data-connect",[bS]:"fire-rtdb-compat",[FS]:"fire-fn",[US]:"fire-fn-compat",[zS]:"fire-iid",[jS]:"fire-iid-compat",[BS]:"fire-fcm",[$S]:"fire-fcm-compat",[qS]:"fire-perf",[HS]:"fire-perf-compat",[WS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const Gu=new Map,n0=new Map,zd=new Map;function Mg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function sr(r){const e=r.name;if(zd.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;zd.set(e,r);for(const t of Gu.values())Mg(t,r);for(const t of n0.values())Mg(t,r);return!0}function fs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mi(r){return r.settings!==void 0}/**
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
 */const r0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new ds("app","Firebase",r0);/**
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
 */class i0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=e0;function R_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ud,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=y_()),!t)throw _i.create("no-options");const l=Gu.get(o);if(l){if($a(t,l.options)&&$a(s,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new hS(o);for(const p of zd.values())h.addComponent(p);const f=new i0(t,s,h);return Gu.set(o,f),f}function pf(r=Ud){const e=Gu.get(r);if(!e&&r===Ud&&y_())return R_();if(!e)throw _i.create("no-app",{appName:r});return e}function Sn(r,e,t){var s;let o=(s=t0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(f.join(" "));return}sr(new jn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const s0="firebase-heartbeat-database",o0=1,qa="firebase-heartbeat-store";let Id=null;function A_(){return Id||(Id=S_(s0,o0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(qa)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),Id}async function a0(r){try{const t=(await A_()).transaction(qa),s=await t.objectStore(qa).get(P_(r));return await t.done,s}catch(e){if(e instanceof Bn)Vr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function bg(r,e){try{const s=(await A_()).transaction(qa,"readwrite");await s.objectStore(qa).put(e,P_(r)),await s.done}catch(t){if(t instanceof Bn)Vr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function P_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const l0=1024,u0=30*24*60*60*1e3;class c0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new d0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Fg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=u0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fg(),{heartbeatsToSend:s,unsentEntries:o}=h0(this._heartbeatsCache.heartbeats),l=Ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function h0(r,e=l0){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Ug(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ug(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class d0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w_()?E_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await a0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ug(r){return Ku(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function f0(r){sr(new jn("platform-logger",e=>new AS(e),"PRIVATE")),sr(new jn("heartbeat",e=>new c0(e),"PRIVATE")),Sn(Fd,Og,r),Sn(Fd,Og,"esm2017"),Sn("fire-js","")}f0("");var p0="firebase",m0="11.1.0";/**
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
 */Sn(p0,m0,"app");const C_="@firebase/installations",mf="0.6.11";/**
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
 */const k_=1e4,N_=`w:${mf}`,D_="FIS_v2",g0="https://firebaseinstallations.googleapis.com/v1",y0=60*60*1e3,_0="installations",v0="Installations";/**
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
 */const w0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},as=new ds(_0,v0,w0);function x_(r){return r instanceof Bn&&r.code.includes("request-failed")}/**
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
 */function V_({projectId:r}){return`${g0}/projects/${r}/installations`}function L_(r){return{token:r.token,requestStatus:2,expiresIn:T0(r.expiresIn),creationTime:Date.now()}}async function O_(r,e){const s=(await e.json()).error;return as.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function M_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function E0(r,{refreshToken:e}){const t=M_(r);return t.append("Authorization",I0(e)),t}async function b_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function T0(r){return Number(r.replace("s","000"))}function I0(r){return`${D_} ${r}`}/**
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
 */async function S0({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=V_(r),o=M_(r),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:D_,appId:r.appId,sdkVersion:N_},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await b_(()=>fetch(s,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:L_(y.authToken)}}else throw await O_("Create Installation",p)}/**
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
 */function F_(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function R0(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const A0=/^[cdef][\w-]{21}$/,jd="";function P0(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=C0(r);return A0.test(t)?t:jd}catch{return jd}}function C0(r){return R0(r).substr(0,22)}/**
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
 */function yc(r){return`${r.appName}!${r.appId}`}/**
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
 */const U_=new Map;function z_(r,e){const t=yc(r);j_(t,e),k0(t,e)}function j_(r,e){const t=U_.get(r);if(t)for(const s of t)s(e)}function k0(r,e){const t=N0();t&&t.postMessage({key:r,fid:e}),D0()}let rs=null;function N0(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=r=>{j_(r.data.key,r.data.fid)}),rs}function D0(){U_.size===0&&rs&&(rs.close(),rs=null)}/**
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
 */const x0="firebase-installations-database",V0=1,ls="firebase-installations-store";let Sd=null;function gf(){return Sd||(Sd=S_(x0,V0,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ls)}}})),Sd}async function Qu(r,e){const t=yc(r),o=(await gf()).transaction(ls,"readwrite"),l=o.objectStore(ls),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&z_(r,e.fid),e}async function B_(r){const e=yc(r),s=(await gf()).transaction(ls,"readwrite");await s.objectStore(ls).delete(e),await s.done}async function _c(r,e){const t=yc(r),o=(await gf()).transaction(ls,"readwrite"),l=o.objectStore(ls),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&z_(r,f.fid),f}/**
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
 */async function yf(r){let e;const t=await _c(r.appConfig,s=>{const o=L0(s),l=O0(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===jd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function L0(r){const e=r||{fid:P0(),registrationStatus:0};return $_(e)}function O0(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(as.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=M0(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b0(r)}:{installationEntry:e}}async function M0(r,e){try{const t=await S0(r,e);return Qu(r.appConfig,t)}catch(t){throw x_(t)&&t.customData.serverCode===409?await B_(r.appConfig):await Qu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function b0(r){let e=await zg(r.appConfig);for(;e.registrationStatus===1;)await F_(100),e=await zg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await yf(r);return s||t}return e}function zg(r){return _c(r,e=>{if(!e)throw as.create("installation-not-found");return $_(e)})}function $_(r){return F0(r)?{fid:r.fid,registrationStatus:0}:r}function F0(r){return r.registrationStatus===1&&r.registrationTime+k_<Date.now()}/**
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
 */async function U0({appConfig:r,heartbeatServiceProvider:e},t){const s=z0(r,t),o=E0(r,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:N_,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await b_(()=>fetch(s,f));if(p.ok){const y=await p.json();return L_(y)}else throw await O_("Generate Auth Token",p)}function z0(r,{fid:e}){return`${V_(r)}/${e}/authTokens:generate`}/**
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
 */async function _f(r,e=!1){let t;const s=await _c(r.appConfig,l=>{if(!q_(l))throw as.create("not-registered");const h=l.authToken;if(!e&&$0(h))return l;if(h.requestStatus===1)return t=j0(r,e),l;{if(!navigator.onLine)throw as.create("app-offline");const f=H0(l);return t=B0(r,f),f}});return t?await t:s.authToken}async function j0(r,e){let t=await jg(r.appConfig);for(;t.authToken.requestStatus===1;)await F_(100),t=await jg(r.appConfig);const s=t.authToken;return s.requestStatus===0?_f(r,e):s}function jg(r){return _c(r,e=>{if(!q_(e))throw as.create("not-registered");const t=e.authToken;return W0(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B0(r,e){try{const t=await U0(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Qu(r.appConfig,s),t}catch(t){if(x_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await B_(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qu(r.appConfig,s)}throw t}}function q_(r){return r!==void 0&&r.registrationStatus===2}function $0(r){return r.requestStatus===2&&!q0(r)}function q0(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+y0}function H0(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function W0(r){return r.requestStatus===1&&r.requestTime+k_<Date.now()}/**
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
 */async function K0(r){const e=r,{installationEntry:t,registrationPromise:s}=await yf(e);return s?s.catch(console.error):_f(e).catch(console.error),t.fid}/**
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
 */async function G0(r,e=!1){const t=r;return await Q0(t),(await _f(t,e)).token}async function Q0(r){const{registrationPromise:e}=await yf(r);e&&await e}/**
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
 */function Y0(r){if(!r||!r.options)throw Rd("App Configuration");if(!r.name)throw Rd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Rd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Rd(r){return as.create("missing-app-config-values",{valueName:r})}/**
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
 */const H_="installations",X0="installations-internal",J0=r=>{const e=r.getProvider("app").getImmediate(),t=Y0(e),s=fs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Z0=r=>{const e=r.getProvider("app").getImmediate(),t=fs(e,H_).getImmediate();return{getId:()=>K0(t),getToken:o=>G0(t,o)}};function eR(){sr(new jn(H_,J0,"PUBLIC")),sr(new jn(X0,Z0,"PRIVATE"))}eR();Sn(C_,mf);Sn(C_,mf,"esm2017");/**
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
 */const Yu="analytics",tR="firebase_id",nR="origin",rR=60*1e3,iR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vf="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new gc("@firebase/analytics");/**
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
 */const sR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ds("analytics","Analytics",sR);/**
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
 */function oR(r){if(!r.startsWith(vf)){const e=dn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(e.message),""}return r}function W_(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function aR(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function lR(r,e){const t=aR("firebase-js-sdk-policy",{createScriptURL:oR}),s=document.createElement("script"),o=`${vf}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function uR(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function cR(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const p=(await W_(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(f){nn.error(f)}r("config",o,l)}async function hR(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await W_(t);for(const p of h){const y=f.find(T=>T.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){nn.error(l)}}function dR(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,p]=h;await hR(r,e,t,f,p)}else if(l==="config"){const[f,p]=h;await cR(r,e,t,s,f,p)}else if(l==="consent"){const[f,p]=h;r("consent",f,p)}else if(l==="get"){const[f,p,y]=h;r("get",f,p,y)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){nn.error(f)}}return o}function fR(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=dR(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function pR(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(vf)&&t.src.includes(r))return t;return null}/**
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
 */const mR=30,gR=1e3;class yR{constructor(e={},t=gR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K_=new yR;function _R(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function vR(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:_R(s)},l=iR.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function wR(r,e=K_,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw dn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new IR;return setTimeout(async()=>{f.abort()},rR),G_({appId:s,apiKey:o,measurementId:l},h,f,e)}async function G_(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=K_){var l;const{appId:h,measurementId:f}=r;try{await ER(s,e)}catch(p){if(f)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:f};throw p}try{const p=await vR(r);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!TR(y)){if(o.deleteThrottleMetadata(h),f)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:f};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Dg(t,o.intervalMillis,mR):Dg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,T),nn.debug(`Calling attemptFetch again in ${w} millis`),G_(r,T,s,o)}}function ER(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function TR(r){if(!(r instanceof Bn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class IR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function SR(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
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
 */async function RR(){if(w_())try{await E_()}catch(r){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AR(r,e,t,s,o,l,h){var f;const p=wR(r);p.then(V=>{t[V.measurementId]=V.appId,r.options.measurementId&&V.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>nn.error(V)),e.push(p);const y=RR().then(V=>{if(V)return s.getId()}),[w,T]=await Promise.all([p,y]);pR(l)||lR(l,w.measurementId),o("js",new Date);const I=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return I[nR]="firebase",I.update=!0,T!=null&&(I[tR]=T),o("config",w.measurementId,I),w.measurementId}/**
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
 */class PR{constructor(e){this.app=e}_delete(){return delete Ma[this.app.options.appId],Promise.resolve()}}let Ma={},Bg=[];const $g={};let Ad="dataLayer",CR="gtag",qg,Q_,Hg=!1;function kR(){const r=[];if(v_()&&r.push("This is a browser extension environment."),YI()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function NR(r,e,t){kR();const s=r.options.appId;if(!s)throw dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Ma[s]!=null)throw dn.create("already-exists",{id:s});if(!Hg){uR(Ad);const{wrappedGtag:l,gtagCore:h}=fR(Ma,Bg,$g,Ad,CR);Q_=l,qg=h,Hg=!0}return Ma[s]=AR(r,Bg,$g,e,qg,Ad,t),new PR(r)}function DR(r=pf()){r=jt(r);const e=fs(r,Yu);return e.isInitialized()?e.getImmediate():xR(r)}function xR(r,e={}){const t=fs(r,Yu);if(t.isInitialized()){const o=t.getImmediate();if($a(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function VR(r,e,t,s){r=jt(r),SR(Q_,Ma[r.app.options.appId],e,t,s).catch(o=>nn.error(o))}const Wg="@firebase/analytics",Kg="0.10.10";function LR(){sr(new jn(Yu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return NR(s,o,t)},"PUBLIC")),sr(new jn("analytics-internal",r,"PRIVATE")),Sn(Wg,Kg),Sn(Wg,Kg,"esm2017");function r(e){try{const t=e.getProvider(Yu).getImmediate();return{logEvent:(s,o,l)=>VR(t,s,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}LR();var Gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,Y_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,x,O){for(var P=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)P[nt-2]=arguments[nt];return S.prototype[x].apply(k,P)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,A){A||(A=0);var k=Array(16);if(typeof S=="string")for(var x=0;16>x;++x)k[x]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(x=0;16>x;++x)k[x]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],x=N.g[2];var O=N.g[3],P=S+(O^A&(x^O))+k[0]+3614090360&4294967295;S=A+(P<<7&4294967295|P>>>25),P=O+(x^S&(A^x))+k[1]+3905402710&4294967295,O=S+(P<<12&4294967295|P>>>20),P=x+(A^O&(S^A))+k[2]+606105819&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(S^x&(O^S))+k[3]+3250441966&4294967295,A=x+(P<<22&4294967295|P>>>10),P=S+(O^A&(x^O))+k[4]+4118548399&4294967295,S=A+(P<<7&4294967295|P>>>25),P=O+(x^S&(A^x))+k[5]+1200080426&4294967295,O=S+(P<<12&4294967295|P>>>20),P=x+(A^O&(S^A))+k[6]+2821735955&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(S^x&(O^S))+k[7]+4249261313&4294967295,A=x+(P<<22&4294967295|P>>>10),P=S+(O^A&(x^O))+k[8]+1770035416&4294967295,S=A+(P<<7&4294967295|P>>>25),P=O+(x^S&(A^x))+k[9]+2336552879&4294967295,O=S+(P<<12&4294967295|P>>>20),P=x+(A^O&(S^A))+k[10]+4294925233&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(S^x&(O^S))+k[11]+2304563134&4294967295,A=x+(P<<22&4294967295|P>>>10),P=S+(O^A&(x^O))+k[12]+1804603682&4294967295,S=A+(P<<7&4294967295|P>>>25),P=O+(x^S&(A^x))+k[13]+4254626195&4294967295,O=S+(P<<12&4294967295|P>>>20),P=x+(A^O&(S^A))+k[14]+2792965006&4294967295,x=O+(P<<17&4294967295|P>>>15),P=A+(S^x&(O^S))+k[15]+1236535329&4294967295,A=x+(P<<22&4294967295|P>>>10),P=S+(x^O&(A^x))+k[1]+4129170786&4294967295,S=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(S^A))+k[6]+3225465664&4294967295,O=S+(P<<9&4294967295|P>>>23),P=x+(S^A&(O^S))+k[11]+643717713&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^S&(x^O))+k[0]+3921069994&4294967295,A=x+(P<<20&4294967295|P>>>12),P=S+(x^O&(A^x))+k[5]+3593408605&4294967295,S=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(S^A))+k[10]+38016083&4294967295,O=S+(P<<9&4294967295|P>>>23),P=x+(S^A&(O^S))+k[15]+3634488961&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^S&(x^O))+k[4]+3889429448&4294967295,A=x+(P<<20&4294967295|P>>>12),P=S+(x^O&(A^x))+k[9]+568446438&4294967295,S=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(S^A))+k[14]+3275163606&4294967295,O=S+(P<<9&4294967295|P>>>23),P=x+(S^A&(O^S))+k[3]+4107603335&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^S&(x^O))+k[8]+1163531501&4294967295,A=x+(P<<20&4294967295|P>>>12),P=S+(x^O&(A^x))+k[13]+2850285829&4294967295,S=A+(P<<5&4294967295|P>>>27),P=O+(A^x&(S^A))+k[2]+4243563512&4294967295,O=S+(P<<9&4294967295|P>>>23),P=x+(S^A&(O^S))+k[7]+1735328473&4294967295,x=O+(P<<14&4294967295|P>>>18),P=A+(O^S&(x^O))+k[12]+2368359562&4294967295,A=x+(P<<20&4294967295|P>>>12),P=S+(A^x^O)+k[5]+4294588738&4294967295,S=A+(P<<4&4294967295|P>>>28),P=O+(S^A^x)+k[8]+2272392833&4294967295,O=S+(P<<11&4294967295|P>>>21),P=x+(O^S^A)+k[11]+1839030562&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^S)+k[14]+4259657740&4294967295,A=x+(P<<23&4294967295|P>>>9),P=S+(A^x^O)+k[1]+2763975236&4294967295,S=A+(P<<4&4294967295|P>>>28),P=O+(S^A^x)+k[4]+1272893353&4294967295,O=S+(P<<11&4294967295|P>>>21),P=x+(O^S^A)+k[7]+4139469664&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^S)+k[10]+3200236656&4294967295,A=x+(P<<23&4294967295|P>>>9),P=S+(A^x^O)+k[13]+681279174&4294967295,S=A+(P<<4&4294967295|P>>>28),P=O+(S^A^x)+k[0]+3936430074&4294967295,O=S+(P<<11&4294967295|P>>>21),P=x+(O^S^A)+k[3]+3572445317&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^S)+k[6]+76029189&4294967295,A=x+(P<<23&4294967295|P>>>9),P=S+(A^x^O)+k[9]+3654602809&4294967295,S=A+(P<<4&4294967295|P>>>28),P=O+(S^A^x)+k[12]+3873151461&4294967295,O=S+(P<<11&4294967295|P>>>21),P=x+(O^S^A)+k[15]+530742520&4294967295,x=O+(P<<16&4294967295|P>>>16),P=A+(x^O^S)+k[2]+3299628645&4294967295,A=x+(P<<23&4294967295|P>>>9),P=S+(x^(A|~O))+k[0]+4096336452&4294967295,S=A+(P<<6&4294967295|P>>>26),P=O+(A^(S|~x))+k[7]+1126891415&4294967295,O=S+(P<<10&4294967295|P>>>22),P=x+(S^(O|~A))+k[14]+2878612391&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~S))+k[5]+4237533241&4294967295,A=x+(P<<21&4294967295|P>>>11),P=S+(x^(A|~O))+k[12]+1700485571&4294967295,S=A+(P<<6&4294967295|P>>>26),P=O+(A^(S|~x))+k[3]+2399980690&4294967295,O=S+(P<<10&4294967295|P>>>22),P=x+(S^(O|~A))+k[10]+4293915773&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~S))+k[1]+2240044497&4294967295,A=x+(P<<21&4294967295|P>>>11),P=S+(x^(A|~O))+k[8]+1873313359&4294967295,S=A+(P<<6&4294967295|P>>>26),P=O+(A^(S|~x))+k[15]+4264355552&4294967295,O=S+(P<<10&4294967295|P>>>22),P=x+(S^(O|~A))+k[6]+2734768916&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~S))+k[13]+1309151649&4294967295,A=x+(P<<21&4294967295|P>>>11),P=S+(x^(A|~O))+k[4]+4149444226&4294967295,S=A+(P<<6&4294967295|P>>>26),P=O+(A^(S|~x))+k[11]+3174756917&4294967295,O=S+(P<<10&4294967295|P>>>22),P=x+(S^(O|~A))+k[2]+718787259&4294967295,x=O+(P<<15&4294967295|P>>>17),P=A+(O^(x|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(x+(P<<21&4294967295|P>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,k=this.B,x=this.h,O=0;O<S;){if(x==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<S;)if(k[x++]=N.charCodeAt(O++),x==this.blockSize){o(this,k),x=0;break}}else for(;O<S;)if(k[x++]=N[O++],x==this.blockSize){o(this,k),x=0;break}}this.h=x,this.o+=S},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var k=0;32>k;k+=8)N[A++]=this.g[S]>>>k&255;return N};function l(N,S){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function h(N,S){this.h=S;for(var A=[],k=!0,x=N.length-1;0<=x;x--){var O=N[x]|0;k&&O==S||(A[x]=O,k=!1)}this.g=A}var f={};function p(N){return-128<=N&&128>N?l(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return z(y(-N));for(var S=[],A=1,k=0;N>=A;k++)S[k]=N/A|0,A*=4294967296;return new h(S,0)}function w(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return z(w(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),k=T,x=0;x<N.length;x+=8){var O=Math.min(8,N.length-x),P=parseInt(N.substring(x,x+O),S);8>O?(O=y(Math.pow(S,O)),k=k.j(O).add(y(P))):(k=k.j(A),k=k.add(y(P)))}return k}var T=p(0),I=p(1),V=p(16777216);r=h.prototype,r.m=function(){if($(this))return-z(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if($(this))return"-"+z(this).toString(N);for(var S=y(Math.pow(N,6)),A=this,k="";;){var x=ce(A,S).g;A=W(A,x.j(S));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=x,F(A))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function $(N){return N.h==-1}r.l=function(N){return N=W(this,N),$(N)?-1:F(N)?0:1};function z(N){for(var S=N.g.length,A=[],k=0;k<S;k++)A[k]=~N.g[k];return new h(A,~N.h).add(I)}r.abs=function(){return $(this)?z(this):this},r.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0,x=0;x<=S;x++){var O=k+(this.i(x)&65535)+(N.i(x)&65535),P=(O>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);k=P>>>16,O&=65535,P&=65535,A[x]=P<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(N,S){return N.add(z(S))}r.j=function(N){if(F(this)||F(N))return T;if($(this))return $(N)?z(this).j(z(N)):z(z(this).j(N));if($(N))return z(this.j(z(N)));if(0>this.l(V)&&0>N.l(V))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],k=0;k<2*S;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<N.g.length;x++){var O=this.i(k)>>>16,P=this.i(k)&65535,nt=N.i(x)>>>16,Dt=N.i(x)&65535;A[2*k+2*x]+=P*Dt,X(A,2*k+2*x),A[2*k+2*x+1]+=O*Dt,X(A,2*k+2*x+1),A[2*k+2*x+1]+=P*nt,X(A,2*k+2*x+1),A[2*k+2*x+2]+=O*nt,X(A,2*k+2*x+2)}for(k=0;k<S;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=S;k<2*S;k++)A[k]=0;return new h(A,0)};function X(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ne(N,S){this.g=N,this.h=S}function ce(N,S){if(F(S))throw Error("division by zero");if(F(N))return new ne(T,T);if($(N))return S=ce(z(N),S),new ne(z(S.g),z(S.h));if($(S))return S=ce(N,z(S)),new ne(z(S.g),S.h);if(30<N.g.length){if($(N)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,k=S;0>=k.l(N);)A=Ie(A),k=Ie(k);var x=Ee(A,1),O=Ee(k,1);for(k=Ee(k,2),A=Ee(A,2);!F(k);){var P=O.add(k);0>=P.l(N)&&(x=x.add(A),O=P),k=Ee(k,1),A=Ee(A,1)}return S=W(N,x.j(S)),new ne(x,S)}for(x=T;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=y(A),P=O.j(S);$(P)||0<P.l(N);)A-=k,O=y(A),P=O.j(S);F(O)&&(O=I),x=x.add(O),N=W(N,P)}return new ne(x,N)}r.A=function(N){return ce(this,N).h},r.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},r.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},r.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Ie(N){for(var S=N.g.length+1,A=[],k=0;k<S;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function Ee(N,S){var A=S>>5;S%=32;for(var k=N.g.length-A,x=[],O=0;O<k;O++)x[O]=0<S?N.i(O+A)>>>S|N.i(O+A+1)<<32-S:N.i(O+A);return new h(x,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Y_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,ss=h}).apply(typeof Gg<"u"?Gg:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X_,xa,J_,Ou,Bd,Z_,ev,tv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,M={next:function(){if(!E&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,I.apply(null,arguments)}function V(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,M,B){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return m.prototype[M].apply(E,ee)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function z(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const M=u.length||0,B=E.length||0;u.length=M+B;for(let ee=0;ee<B;ee++)u[M+ee]=E[ee]}else u.push(E)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ee(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let B=0;B<A.length;B++)_=A[B],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function x(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function O(u){f.setTimeout(()=>{throw u},0)}function P(){var u=fe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const E=Dt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new W(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,te=!1,fe=new nt,ie=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(L)}};var L=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(_){O(_)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}te=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{ce(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}F(Ae,de);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,m,_,E,M){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ee=Ur(u,m,E,M);return-1<ee?(m=u[ee],_||(m.fa=!1)):(m=new $e(m,this.src,B,!!E,M),m.fa=_,u.push(m)),m};function gs(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,m,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(yt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ur(u,m,_,E){for(var M=0;M<u.length;++M){var B=u[M];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==E)return M}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),ys={};function Oo(u,m,_,E,M){if(Array.isArray(m)){for(var B=0;B<m.length;B++)Oo(u,m[B],_,E,M);return null}return _=Fo(_),u&&u[be]?u.K(m,_,y(E)?!!E.capture:!1,M):Mo(u,m,_,!1,E,M)}function Mo(u,m,_,E,M,B){if(!m)throw Error("Invalid event type");var ee=y(M)?!!M.capture:!!M,ze=vs(u);if(ze||(u[Ci]=ze=new cr(u)),_=ze.add(m,_,E,ee,B),_.proxy)return _;if(E=ul(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Se||(M=ee),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent(dr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ul(){function u(_){return m.call(u.src,u.listener,_)}const m=bo;return u}function _s(u,m,_,E,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)_s(u,m[B],_,E,M);else E=y(E)?!!E.capture:!!E,_=Fo(_),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=Ur(B,_,E,M),-1<_&&(yt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ur(m,_,E,M)),(_=-1<u?m[u]:null)&&hr(_))}function hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])gs(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(dr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=vs(m))?(gs(_,u),_.h==0&&(_.src=null,m[Ci]=null)):yt(u)}}}function dr(u){return u in ys?ys[u]:ys[u]="on"+u}function bo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&hr(u),u=_.call(E,m)}return u}function vs(u){return u=u[Ci],u instanceof cr?u:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[ws]||(u[ws]=function(m){return u.handleEvent(m)}),u[ws])}function ut(){K.call(this),this.i=new cr(this),this.M=this,this.F=null}F(ut,K),ut.prototype[be]=!0,ut.prototype.removeEventListener=function(u,m,_,E){_s(this,u,m,_,E)};function ct(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var M=m;m=new de(E,u),k(m,M)}if(M=!0,_)for(var B=_.length-1;0<=B;B--){var ee=m.g=_[B];M=fr(ee,E,!0,m)&&M}if(ee=m.g=u,M=fr(ee,E,!0,m)&&M,M=fr(ee,E,!1,m)&&M,_)for(B=0;B<_.length;B++)ee=m.g=_[B],M=fr(ee,E,!1,m)&&M}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)yt(_[E]);delete u.g[m],u.h--}}this.F=null},ut.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ut.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function fr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,B=0;B<m.length;++B){var ee=m[B];if(ee&&!ee.da&&ee.capture==_){var ze=ee.listener,ht=ee.ha||ee.src;ee.fa&&gs(u.i,ee),M=ze.call(ht,E)!==!1&&M}}return M&&!E.defaultPrevented}function Uo(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function zr(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,zr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class ki extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(u){K.call(this),this.h=u,this.g={}}F(Ni,K);var zo=[];function jo(u){Ee(u.g,function(m,_){this.g.hasOwnProperty(_)&&hr(m)},u),u.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),jo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bo=f.JSON.stringify,$o=f.JSON.parse,qo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Di(){}Di.prototype.h=null;function Es(u){return u.h||(u.h=u.i())}function Ts(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $n(){de.call(this,"d")}F($n,de);function Is(){de.call(this,"c")}F(Is,de);var qn={},Ho=null;function xi(){return Ho=Ho||new ut}qn.La="serverreachability";function Wo(u){de.call(this,qn.La,u)}F(Wo,de);function pr(u){const m=xi();ct(m,new Wo(m))}qn.STAT_EVENT="statevent";function Ko(u,m){de.call(this,qn.STAT_EVENT,u),this.stat=m}F(Ko,de);function rt(u){const m=xi();ct(m,new Ko(m,u))}qn.Ma="timingevent";function Ss(u,m){de.call(this,qn.Ma,u),this.size=m}F(Ss,de);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function Li(u,m,_,E,M,B){u.info(function(){if(u.g)if(B)for(var ee="",ze=B.split("&"),ht=0;ht<ze.length;ht++){var Ve=ze[ht].split("=");if(1<Ve.length){var _t=Ve[0];Ve=Ve[1];var ot=_t.split("_");ee=2<=ot.length&&ot[1]=="type"?ee+(_t+"="+Ve+"&"):ee+(_t+"=redacted&")}}else ee=null;else ee=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+_+`
`+ee})}function Rs(u,m,_,E,M,B,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+_+`
`+B+" "+ee})}function An(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+zc(u,_)+(E?" "+E:"")})}function Go(u,m){u.info(function(){return"TIMEOUT: "+m})}Vi.prototype.info=function(){};function zc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Bo(_)}catch{return m}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function Oi(){}F(Oi,Di),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},Pn=new Oi;function Cn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var Qo={},Ps={};function Cs(u,m,_){u.L=1,u.v=Hr(sn(m)),u.m=_,u.P=!0,Yo(u,null)}function Yo(u,m){u.F=Date.now(),qe(u),u.A=sn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Kr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new hl,u.g=kl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new ki(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(zo[0]=M.toString()),M=zo);for(var B=0;B<M.length;B++){var ee=Oo(_,M[B],E||m.handleEvent,!1,m.h||m);if(!ee)break;m.g[ee.key]=ee}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),pr(),Li(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Kt(u)==3?m.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Kt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||ot!=4||m==7||(m==8||0>=yn?pr(3):pr(2)),Mi(this);var _=this.g.Z();this.X=_;t:if(dl(this)){var E=na(this.g);u="";var M=E.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),jr(this);var ee="";break t}this.h.i=new f.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(B&&m==M-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=_==200,Rs(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,ht=this.g;if((ze=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(ze)){var Ve=ze;break t}}Ve=null}if(_=Ve)An(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,_);else{this.o=!1,this.s=3,rt(12),mn(this),jr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<ee.length;)if(an=jc(this,ee),an==Ps){ot==4&&(this.s=4,rt(14),_=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Qo){this.s=4,rt(15),An(this.i,this.l,ee,"[Invalid Chunk]"),_=!1;break}else An(this.i,this.l,an,null),Xo(this,an);if(dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ee.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)An(this.i,this.l,ee,"[Invalid Chunked Response]"),mn(this),jr(this);else if(0<ee.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ia(_t),_t.M=!0,rt(11))}}else An(this.i,this.l,ee,null),Xo(this,ee);ot==4&&mn(this),this.o&&!this.J&&(ot==4?Us(this.j,this):(this.o=!1,qe(this)))}else Ls(this.g),_==400&&0<ee.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mn(this),jr(this)}}}catch{}finally{}};function dl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jc(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Ps:(_=Number(m.substring(_,E)),isNaN(_)?Qo:(E+=1,E+_>m.length?Ps:(m=m.slice(E,E+_),u.C=E+_,m)))}Cn.prototype.cancel=function(){this.J=!0,mn(this)};function qe(u){u.S=Date.now()+u.I,fl(u,u.I)}function fl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(I(u.ba,u),m)}function Mi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Go(this.i,this.A),this.L!=2&&(pr(),rt(17)),mn(this),this.s=2,jr(this)):fl(this,this.S-u)};function jr(u){u.j.G==0||u.J||Us(u.j,u)}function mn(u){Mi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,jo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Xo(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Bt(_.h,u))){if(!u.K&&Bt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Fs(_),Vn(_);else break e;bs(_),rt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Rn(I(_.Za,_),6e3));if(1>=ml(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else vr(_,11)}else if((u.K||_.g==u)&&Fs(_),!X(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Ve=M[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const _t=Ve[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const ot=Ve[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const yn=Ve[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const an=u.g;if(an){const $i=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var B=E.h;B.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Jo(B,B.h),B.h=null))}if(E.D){const js=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(E.ya=js,Be(E.I,E.D,js))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ee=u;if(E.qa=Cl(E,E.J?E.ia:null,E.W),ee.K){gl(E.h,ee);var ze=ee,ht=E.L;ht&&(ze.I=ht),ze.B&&(Mi(ze),qe(ze)),E.g=ee}else Bi(E);0<_.i.length&&Gn(_)}else Ve[0]!="stop"&&Ve[0]!="close"||vr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?vr(_,7):St(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}pr(4)}catch{}}var pl=class{constructor(u,m){this.g=u,this.map=m}};function bi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ml(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Jo(u,m){u.g?u.g.add(m):u.h=m}function gl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}bi.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function yl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Ns(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function Br(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ns(u),E=ks(u),M=E.length,B=0;B<M;B++)m.call(void 0,E[B],_&&_[B],u)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),M=null;if(0<=E){var B=u[_].substring(0,E);M=u[_].substring(E+1)}else B=u[_];m(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,Ui(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var m=u.i,_=new Hn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),qr(this,_),this.m=u.m}else u&&(m=String(u).match(Fi))?(this.h=!1,Ui(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),$r(this,m[4]),this.l=Ne(m[5]||"",!0),qr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}mr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Wr(m,Ds,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Wr(m,Ds,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Wr(_,_.charAt(0)=="/"?wl:vl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Wr(_,Zo)),u.join("")};function sn(u){return new mr(u)}function Ui(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function qr(u,m,_){m instanceof Hn?(u.i=m,Wn(u.i,u.h)):(_||(m=Wr(m,El)),u.i=new Hn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Hr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,_l),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function _l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ds=/[#\/\?@]/g,vl=/[#\?:]/g,wl=/[#\?]/g,El=/[#\?@]/g,Zo=/#/g;function Hn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&Bc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Hn.prototype,r.add=function(u,m){It(this),this.i=null,u=gn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function kn(u,m){It(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return It(u),m=gn(u,m),u.g.has(m)}r.forEach=function(u,m){It(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(m,M,E,this)},this)},this)},r.na=function(){It(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const M=u[E];for(let B=0;B<M.length;B++)_.push(m[E])}return _},r.V=function(u){It(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return It(this),this.i=null,u=gn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Kr(u,m,_){kn(u,m),0<_.length&&(u.i=null,u.g.set(gn(u,m),$(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const B=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=B;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),u.push(M)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Wn(u,m){m&&!u.j&&(It(u),u.i=null,u.g.forEach(function(_,E){var M=E.toLowerCase();E!=M&&(kn(this,E),Kr(this,M,_))},u)),u.j=m}function $c(u,m){const _=new Vi;if(f.Image){const E=new Image;E.onload=V(Wt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=V(Wt,_,"TestLoadImage: error",!1,m,E),E.onabort=V(Wt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=V(Wt,_,"TestLoadImage: timeout",!1,m,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Tl(u,m){const _=new Vi,E=new AbortController,M=setTimeout(()=>{E.abort(),Wt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Wt(_,"TestPingServer: ok",!0,m):Wt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Wt(_,"TestPingServer: error",!1,m)})}function Wt(u,m,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function qc(){this.g=new qo}function Il(u,m,_){const E=_||"";try{Br(u,function(M,B){let ee=M;y(M)&&(ee=Bo(M)),m.push(E+B+"="+encodeURIComponent(ee))})}catch(M){throw m.push(E+"type="+encodeURIComponent("_badmap")),M}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}F(gr,Di),gr.prototype.g=function(){return new zi(this.l,this.j)},gr.prototype.i=function(u){return function(){return u}}({});function zi(u,m){ut.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(zi,ut),r=zi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,xn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):xn(this),this.readyState==3&&Sl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},r.Qa=function(u){this.g&&(this.response=u,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,xn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let m="";return Ee(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Gr(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=yr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Ge(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ge,ut);var Hc=/^https?$/i,ea=["POST","PUT"];r=Ge.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Es(this.o):Es(Pn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){ji(this,B);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())_.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ea,m,void 0))||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ee]of _)this.g.setRequestHeader(B,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){ji(this,B)}};function ji(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,xs(u),on(u)}function xs(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Uo(u.Ea,0,u);else if(ct(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ee===0){var M=String(u.D).match(Fi)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!Hc.test(M?M.toLowerCase():"")}_=E}if(_)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",xs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Vs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ct(u,"ready");try{_.onreadystatechange=E}catch{}}}function Vs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),$o(m)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ls(u){const m={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(X(u[E]))continue;var _=x(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[M]||[];m[M]=B,B.push(_)}N(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ra(u){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,u),this.cb=Kn("retryDelaySeedMs",1e4,u),this.Wa=Kn("forwardChannelMaxRetries",2,u),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(u&&u.concurrentRequestLimit),this.Da=new qc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,E){rt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=Cl(this,null,this.W),Gn(this)};function St(u){if(Os(u),u.G==3){var m=u.U++,_=sn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),_r(u,_),m=new Cn(u,u.j,m),m.L=2,m.v=Hr(sn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=kl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Pl(u)}function Vn(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Os(u){Vn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Fs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Gn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||ie(),te||(je(),te=!0),fe.add(m,u),u.B=0}}function Wc(u,m){return ml(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(I(u.Ga,u,m),Al(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Cn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Qr(this,M,m),_=sn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),_r(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(yr(B)))+"&"+m:this.m&&Gr(_,this.m,B)),Jo(this.h,M),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),M.T=!0,Cs(M,_,null)):Cs(M,_,m),this.G=2}}else this.G==3&&(u?Ms(this,u):this.i.length==0||rn(this.h)||Ms(this))};function Ms(u,m){var _;m?_=m.l:_=u.U++;const E=sn(u.I);Be(E,"SID",u.K),Be(E,"RID",_),Be(E,"AID",u.T),_r(u,E),u.m&&u.o&&Gr(E,u.m,u.o),_=new Cn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Qr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jo(u.h,_),Cs(_,E,m)}function _r(u,m){u.H&&Ee(u.H,function(_,E){Be(m,E,_)}),u.l&&Br({},function(_,E){Be(m,E,_)})}function Qr(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var M=u.i;let B=-1;for(;;){const ee=["count="+_];B==-1?0<_?(B=M[0].g,ee.push("ofs="+B)):B=0:ee.push("ofs="+B);let ze=!0;for(let ht=0;ht<_;ht++){let Ve=M[ht].g;const _t=M[ht].map;if(Ve-=B,0>Ve)B=Math.max(0,M[ht].g-100),ze=!1;else try{Il(_t,ee,"req"+Ve+"_")}catch{E&&E(_t)}}if(ze){E=ee.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function Bi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||ie(),te||(je(),te=!0),fe.add(m,u),u.v=0}}function bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(I(u.Fa,u),Al(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Vn(this),Rl(this))};function ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Rl(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),_r(u,m),u.m&&u.o&&Gr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Hr(sn(m)),_.m=null,_.P=!0,Yo(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Vn(this),bs(this),rt(19))};function Fs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Us(u,m){var _=null;if(u.g==m){Fs(u),ia(u),u.g=null;var E=2}else if(Bt(u.h,m))_=m.D,gl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;E=xi(),ct(E,new Ss(E,_)),Gn(u)}else Bi(u);else if(M=m.s,M==3||M==0&&0<m.X||!(E==1&&Wc(u,m)||E==2&&bs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:vr(u,5);break;case 4:vr(u,10);break;case 3:vr(u,6);break;default:vr(u,2)}}}function Al(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function vr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const M=!E;E=new mr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ui(E,"https"),Hr(E),M?$c(E.toString(),_):Tl(E.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),Pl(u),Os(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Pl(u){if(u.G=0,u.ka=[],u.l){const m=yl(u.h);(m.length!=0||u.i.length!=0)&&(z(u.ka,m),z(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Cl(u,m,_){var E=_ instanceof mr?sn(_):new mr(_);if(E.g!="")m&&(E.g=m+"."+E.g),$r(E,E.s);else{var M=f.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var B=new mr(null);E&&Ui(B,E),m&&(B.g=m),M&&$r(B,M),_&&(B.l=_),E=B}return _=u.D,m=u.ya,_&&m&&Be(E,_,m),Be(E,"VER",u.la),_r(u,E),E}function kl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new gr({eb:_})):new Ge(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}r=sa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zs(){}zs.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ut.call(this),this.g=new ra(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Qn(this)}F($t,ut),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){St(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Bo(u),u=_);m.i.push(new pl(m.Ya++,u)),m.G==3&&Gn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,$t.aa.N.call(this)};function Nl(u){$n.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(Nl,$n);function Dl(){Is.call(this),this.status=1}F(Dl,Is);function Qn(u){this.g=u}F(Qn,sa),Qn.prototype.ua=function(){ct(this.g,"a")},Qn.prototype.ta=function(u){ct(this.g,new Nl(u))},Qn.prototype.sa=function(u){ct(this.g,new Dl)},Qn.prototype.ra=function(){ct(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,tv=function(){return new zs},ev=function(){return xi()},Z_=qn,Bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Ou=As,cl.COMPLETE="complete",J_=cl,Ts.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,xa=Ts,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,X_=Ge}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore";/**
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
 */const us=new gc("@firebase/firestore");function lo(){return us.logLevel}function se(r,...e){if(us.logLevel<=Ce.DEBUG){const t=e.map(wf);us.debug(`Firestore (${ko}): ${r}`,...t)}}function Lr(r,...e){if(us.logLevel<=Ce.ERROR){const t=e.map(wf);us.error(`Firestore (${ko}): ${r}`,...t)}}function _o(r,...e){if(us.logLevel<=Ce.WARN){const t=e.map(wf);us.warn(`Firestore (${ko}): ${r}`,...t)}}function wf(r){if(typeof r=="string")return r;try{/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class MR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bR{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new nv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class FR{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UR{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new FR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const s=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new zR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function BR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=BR(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function vo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ha{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(),s===void 0?s=e.length-t:s>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ha.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ha?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends Ha{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const $R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Ha{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return $R.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new he(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new he(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new he(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function qR(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new Ei(o,ge.empty(),e)}function HR(r){return new Ei(r.readTime,r.key,-1)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(we.min(),ge.empty(),-1)}static max(){return new Ei(we.max(),ge.empty(),-1)}}function WR(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
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
 */const KR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function No(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==KR)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,s)=>{t(e)})}static reject(e){return new H((t,s)=>{s(e)})}static waitFor(e){return new H((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>s(p))}),h=!0,l===o&&t()})}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next(o=>o?H.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new H((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++f,f===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new H((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function QR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vc.oe=-1;function wc(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function YR(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function XR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Yg(e)),e=JR(r.get(t),e);return Yg(e)}function JR(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Yg(r){return r+""}/**
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
 */function Xg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ai(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function iv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jg(this.data.getIterator())}getIteratorFrom(e){return new Jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new gt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class sv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new sv("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const ZR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=ZR.exec(r);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ii(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */function Ef(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ec(r){const e=r.mapValue.fields.__previous_value__;return Ef(e)?Ec(e):e}function Wa(r){const e=Ti(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class eA{constructor(e,t,s,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class Ka{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Si(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ef(r)?4:nA(r)?9007199254740991:tA(r)?10:11:_e()}function or(r,e){if(r===e)return!0;const t=Si(r);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ti(o.timestampValue),f=Ti(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ii(o.bytesValue).isEqual(Ii(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Xu(h)===Xu(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Xg(h)!==Xg(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!or(h[p],f[p])))return!1;return!0}(r,e);default:return _e()}}function Ga(r,e){return(r.values||[]).find(t=>or(t,e))!==void 0}function wo(r,e){if(r===e)return 0;const t=Si(r),s=Si(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(r,e);case 3:return Zg(r.timestampValue,e.timestampValue);case 4:return Zg(Wa(r),Wa(e));case 5:return De(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Ii(l),p=Ii(h);return f.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=De(f[y],p[y]);if(w!==0)return w}return De(f.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=De(st(l.latitude),st(h.latitude));return f!==0?f:De(st(l.longitude),st(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ey(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,w;const T=l.fields||{},I=h.fields||{},V=(f=T.value)===null||f===void 0?void 0:f.arrayValue,F=(p=I.value)===null||p===void 0?void 0:p.arrayValue,$=De(((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0,((w=F==null?void 0:F.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:ey(V,F)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Cu.mapValue&&h===Cu.mapValue)return 0;if(l===Cu.mapValue)return 1;if(h===Cu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const I=De(p[T],w[T]);if(I!==0)return I;const V=wo(f[p[T]],y[w[T]]);if(V!==0)return V}return De(p.length,w.length)}(r.mapValue,e.mapValue);default:throw _e()}}function Zg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ti(r),s=Ti(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function ey(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=wo(t[o],s[o]);if(l)return l}return De(t.length,s.length)}function Eo(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ti(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ii(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ge.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=$d(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${$d(t.fields[h])}`;return o+"}"}(r.mapValue):_e()}function Mu(r){switch(Si(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ec(r);return e?16+Mu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ii(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Mu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ai(s.fields,(l,h)=>{o+=l.length+Mu(h)}),o}(r.mapValue);default:throw _e()}}function qd(r){return!!r&&"integerValue"in r}function Tf(r){return!!r&&"arrayValue"in r}function ty(r){return!!r&&"nullValue"in r}function ny(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bu(r){return!!r&&"mapValue"in r}function tA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ba(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ai(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ba(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ba(r.arrayValue.values[t]);return e}return Object.assign({},r)}function nA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!bu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=ba(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());bu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];bu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ai(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new tn(ba(this.value))}}function ov(r){const e=[];return Ai(r.fields,(t,s)=>{const o=new kt([t]);if(bu(s)){const l=ov(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new hn(e)}/**
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
 */class Ut{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ju{constructor(e,t){this.position=e,this.inclusive=t}}function ry(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function iy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function rA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class av{}class pt extends av{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sA(e,t,s):t==="array-contains"?new lA(e,s):t==="in"?new uA(e,s):t==="not-in"?new cA(e,s):t==="array-contains-any"?new hA(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new oA(e,s):new aA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wo(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends av{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ar(e,t)}matches(e){return lv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lv(r){return r.op==="and"}function uv(r){return iA(r)&&lv(r)}function iA(r){for(const e of r.filters)if(e instanceof ar)return!1;return!0}function Hd(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+Eo(r.value);if(uv(r))return r.filters.map(e=>Hd(e)).join(",");{const e=r.filters.map(t=>Hd(t)).join(",");return`${r.op}(${e})`}}function cv(r,e){return r instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)}(r,e):r instanceof ar?function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&cv(h,o.filters[f]),!0):!1}(r,e):void _e()}function hv(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`}(r):r instanceof ar?function(t){return t.op.toString()+" {"+t.getFilters().map(hv).join(" ,")+"}"}(r):"Filter"}class sA extends pt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class oA extends pt{constructor(e,t){super(e,"in",t),this.keys=dv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aA extends pt{constructor(e,t){super(e,"not-in",t),this.keys=dv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class lA extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tf(t)&&Ga(t.arrayValue,this.value)}}class uA extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ga(this.value.arrayValue,t)}}class cA extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ga(this.value.arrayValue,t)}}class hA extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ga(this.value.arrayValue,s))}}/**
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
 */class dA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function sy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new dA(r,e,t,s,o,l,h)}function If(r){const e=Te(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Hd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),wc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Eo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Eo(s)).join(",")),e.ue=t}return e.ue}function Sf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!rA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!cv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!iy(r.startAt,e.startAt)&&iy(r.endAt,e.endAt)}function Wd(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Tc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fA(r,e,t,s,o,l,h,f){return new Tc(r,e,t,s,o,l,h,f)}function Rf(r){return new Tc(r)}function oy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pA(r){return r.collectionGroup!==null}function Fa(r){const e=Te(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new gt(kt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Zu(l,s))}),t.has(kt.keyField().canonicalString())||e.ce.push(new Zu(kt.keyField(),s))}return e.ce}function er(r){const e=Te(r);return e.le||(e.le=mA(e,Fa(r))),e.le}function mA(r,e){if(r.limitType==="F")return sy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Zu(o.field,l)});const t=r.endAt?new Ju(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ju(r.startAt.position,r.startAt.inclusive):null;return sy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Kd(r,e,t){return new Tc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ic(r,e){return Sf(er(r),er(e))&&r.limitType===e.limitType}function fv(r){return`${If(er(r))}|lt:${r.limitType}`}function uo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>hv(o)).join(", ")}]`),wc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Eo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Eo(o)).join(",")),`Target(${s})`}(er(r))}; limitType=${r.limitType})`}function Sc(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ge.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of Fa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,p){const y=ry(h,f,p);return h.inclusive?y<=0:y<0}(s.startAt,Fa(s),o)||s.endAt&&!function(h,f,p){const y=ry(h,f,p);return h.inclusive?y>=0:y>0}(s.endAt,Fa(s),o))}(r,e)}function gA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function pv(r){return(e,t)=>{let s=!1;for(const o of Fa(r)){const l=yA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function yA(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?wo(p,y):_e()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
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
 */class ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return iv(this.inner)}size(){return this.innerSize}}/**
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
 */const _A=new et(ge.comparator);function Or(){return _A}const mv=new et(ge.comparator);function Va(...r){let e=mv;for(const t of r)e=e.insert(t.key,t);return e}function gv(r){let e=mv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function is(){return Ua()}function yv(){return Ua()}function Ua(){return new ps(r=>r.toString(),(r,e)=>r.isEqual(e))}const vA=new et(ge.comparator),wA=new gt(ge.comparator);function ke(...r){let e=wA;for(const t of r)e=e.add(t);return e}const EA=new gt(De);function TA(){return EA}/**
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
 */function Af(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function _v(r){return{integerValue:""+r}}function IA(r,e){return YR(e)?_v(e):Af(r,e)}/**
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
 */class Rc{constructor(){this._=void 0}}function SA(r,e,t){return r instanceof ec?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Ef(l)&&(l=Ec(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Qa?wv(r,e):r instanceof Ya?Ev(r,e):function(o,l){const h=vv(o,l),f=ay(h)+ay(o.Pe);return qd(h)&&qd(o.Pe)?_v(f):Af(o.serializer,f)}(r,e)}function RA(r,e,t){return r instanceof Qa?wv(r,e):r instanceof Ya?Ev(r,e):t}function vv(r,e){return r instanceof tc?function(s){return qd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class ec extends Rc{}class Qa extends Rc{constructor(e){super(),this.elements=e}}function wv(r,e){const t=Tv(e);for(const s of r.elements)t.some(o=>or(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ya extends Rc{constructor(e){super(),this.elements=e}}function Ev(r,e){let t=Tv(e);for(const s of r.elements)t=t.filter(o=>!or(o,s));return{arrayValue:{values:t}}}class tc extends Rc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ay(r){return st(r.integerValue||r.doubleValue)}function Tv(r){return Tf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function AA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Qa&&o instanceof Qa||s instanceof Ya&&o instanceof Ya?vo(s.elements,o.elements,or):s instanceof tc&&o instanceof tc?or(s.Pe,o.Pe):s instanceof ec&&o instanceof ec}(r.transform,e.transform)}class PA{constructor(e,t){this.version=e,this.transformResults=t}}class zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ac{}function Iv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Pf(r.key,zn.none()):new nl(r.key,r.data,zn.none());{const t=r.data,s=tn.empty();let o=new gt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Pi(r.key,s,new hn(o.toArray()),zn.none())}}function CA(r,e,t){r instanceof nl?function(o,l,h){const f=o.value.clone(),p=uy(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof Pi?function(o,l,h){if(!Fu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=uy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Sv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function za(r,e,t,s){return r instanceof nl?function(l,h,f,p){if(!Fu(l.precondition,h))return f;const y=l.value.clone(),w=cy(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,e,t,s):r instanceof Pi?function(l,h,f,p){if(!Fu(l.precondition,h))return f;const y=cy(l.fieldTransforms,p,h),w=h.data;return w.setAll(Sv(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,f){return Fu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function kA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=vv(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function ly(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,(l,h)=>AA(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nl extends Ac{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Pi extends Ac{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Sv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function uy(r,e,t){const s=new Map;Ue(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,RA(h,f,t[o]))}return s}function cy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,SA(l,h,e))}return s}class Pf extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NA extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&CA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=yv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Iv(h,f);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(t,s)=>ly(t,s))&&vo(this.baseMutations,e.baseMutations,(t,s)=>ly(t,s))}}class Cf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=function(){return vA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Cf(e,t,s,o)}}/**
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
 */class xA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Le;function LA(r){switch(r){default:return _e();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function Rv(r){if(r===void 0)return Lr("GRPC error has no .code"),Y.UNKNOWN;switch(r){case lt.OK:return Y.OK;case lt.CANCELLED:return Y.CANCELLED;case lt.UNKNOWN:return Y.UNKNOWN;case lt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case lt.INTERNAL:return Y.INTERNAL;case lt.UNAVAILABLE:return Y.UNAVAILABLE;case lt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case lt.NOT_FOUND:return Y.NOT_FOUND;case lt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case lt.ABORTED:return Y.ABORTED;case lt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case lt.DATA_LOSS:return Y.DATA_LOSS;default:return _e()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function OA(){return new TextEncoder}/**
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
 */const MA=new ss([4294967295,4294967295],0);function hy(r){const e=OA().encode(r),t=new Y_;return t.update(e),new Uint8Array(t.digest())}function dy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ss([t,s],0),new ss([o,l],0)]}class kf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new La(`Invalid padding: ${t}`);if(s<0)throw new La(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new La(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ss.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(ss.fromNumber(s)));return o.compare(MA)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=hy(e),[s,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new kf(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=hy(e),[s,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Pc(we.min(),o,new et(De),Or(),ke())}}class rl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new rl(s,t,ke(),ke(),ke())}}/**
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
 */class Uu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Av{constructor(e,t){this.targetId=e,this.me=t}}class Pv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class fy{constructor(){this.fe=0,this.ge=py(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),s=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e()}}),new rl(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=py()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Or(),this.qe=ku(),this.Qe=ku(),this.Ke=new et(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Wd(l))if(s===0){const h=new ge(l.path);this.We(t,h,Ut.newNoDocument(h,we.min()))}else Ue(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ii(s).toUint8Array()}catch(p){if(p instanceof sv)return _o("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new kf(h,o,l)}catch(p){return _o(p instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Wd(f.target)){const p=new ge(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=ke();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Pc(e,t,this.Ke,this.ke,s);return this.ke=Or(),this.qe=ku(),this.Qe=ku(),this.Ke=new et(De),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new fy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new fy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ku(){return new et(ge.comparator)}function py(){return new et(ge.comparator)}const FA={asc:"ASCENDING",desc:"DESCENDING"},UA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zA={and:"AND",or:"OR"};class jA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gd(r,e){return r.useProto3Json||wc(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function BA(r,e){return nc(r,e.toTimestamp())}function tr(r){return Ue(!!r),we.fromTimestamp(function(t){const s=Ti(t);return new mt(s.seconds,s.nanos)}(r))}function Nf(r,e){return Qd(r,e).canonicalString()}function Qd(r,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function kv(r){const e=Ye.fromString(r);return Ue(Lv(e)),e}function Yd(r,e){return Nf(r.databaseId,e.path)}function Pd(r,e){const t=kv(e);if(t.get(1)!==r.databaseId.projectId)throw new he(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ge(Dv(t))}function Nv(r,e){return Nf(r.databaseId,e)}function $A(r){const e=kv(r);return e.length===4?Ye.emptyPath():Dv(e)}function Xd(r){return new Ye(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Dv(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function my(r,e,t){return{name:Yd(r,e),fields:t.value.mapValue.fields}}function qA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Ue(w===void 0||typeof w=="string"),Nt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Nt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const w=y.code===void 0?Y.UNKNOWN:Rv(y.code);return new he(w,y.message||"")}(h);t=new Pv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Pd(r,s.document.name),l=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):we.min(),f=new tn({mapValue:{fields:s.document.fields}}),p=Ut.newFoundDocument(o,l,h,f),y=s.targetIds||[],w=s.removedTargetIds||[];t=new Uu(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Pd(r,s.document),l=s.readTime?tr(s.readTime):we.min(),h=Ut.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Uu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Pd(r,s.document),l=s.removedTargetIds||[];t=new Uu([],l,o,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new VA(o,l),f=s.targetId;t=new Av(f,h)}}return t}function HA(r,e){let t;if(e instanceof nl)t={update:my(r,e.key,e.value)};else if(e instanceof Pf)t={delete:Yd(r,e.key)};else if(e instanceof Pi)t={update:my(r,e.key,e.data),updateMask:eP(e.fieldMask)};else{if(!(e instanceof NA))return _e();t={verify:Yd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof tc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw _e()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:BA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e()}(r,e.precondition)),t}function WA(r,e){return r&&r.length>0?(Ue(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?tr(o.updateTime):tr(l);return h.isEqual(we.min())&&(h=tr(l)),new PA(h,o.transformResults||[])}(t,e))):[]}function KA(r,e){return{documents:[Nv(r,e.path)]}}function GA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Nv(r,o);const l=function(y){if(y.length!==0)return Vv(ar.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(I){return{field:co(I.field),direction:XA(I.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Gd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function QA(r){let e=$A(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const I=xv(T);return I instanceof ar&&uv(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(F){return new Zu(ho(F.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(I))}(t.orderBy));let f=null;t.limit&&(f=function(T){let I;return I=typeof T=="object"?T.value:T,wc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,V=T.values||[];return new Ju(V,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,V=T.values||[];return new Ju(V,I)}(t.endAt)),fA(e,o,h,l,f,"F",p,y)}function YA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ho(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(r):r.fieldFilter!==void 0?function(t){return pt.create(ho(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ar.create(t.compositeFilter.filters.map(s=>xv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e()}}(t.compositeFilter.op))}(r):_e()}function XA(r){return FA[r]}function JA(r){return UA[r]}function ZA(r){return zA[r]}function co(r){return{fieldPath:r.canonicalString()}}function ho(r){return kt.fromServerFormat(r.fieldPath)}function Vv(r){return r instanceof pt?function(t){if(t.op==="=="){if(ny(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(ty(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ny(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(ty(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:JA(t.op),value:t.value}}}(r):r instanceof ar?function(t){const s=t.getFilters().map(o=>Vv(o));return s.length===1?s[0]:{compositeFilter:{op:ZA(t.op),filters:s}}}(r):_e()}function eP(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,s,o,l=we.min(),h=we.min(),f=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tP{constructor(e){this.ht=e}}function nP(r){const e=QA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Kd(e,e.limit,"L"):e}/**
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
 */class rP{constructor(){this.ln=new iP}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ei.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class iP{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(Ye.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(Ye.comparator)).toArray()}}/**
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
 */const gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */function yy([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class sP{constructor(e){this.Gn=e,this.buffer=new gt(yy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oP{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Yn(3e5)})}}class aP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return H.resolve(vc.oe);const s=new sP(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(gy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,l,h,f,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,f=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(y=Date.now(),lo()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function lP(r,e){return new aP(r,e)}/**
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
 */class uP{constructor(){this.changes=new ps(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hP{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&za(s.mutation,o,hn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=is();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Va();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=is();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=Or();const h=Ua(),f=function(){return Ua()}();return t.forEach((p,y)=>{const w=s.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Pi)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),za(w.mutation,y,w.mutation.getFieldMask(),mt.now())):h.set(y.key,hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var T;return f.set(y,new cP(w,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Ua();let o=new et((h,f)=>h-f),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=s.get(p)||hn.empty();w=f.applyToLocalView(y,w),s.set(p,w);const T=(o.get(f.batchId)||ke()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,T=yv();w.forEach(I=>{if(!l.has(I)){const V=Iv(t.get(I),s.get(I));V!==null&&T.set(I,V),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(is());let f=-1,p=l;return h.next(y=>H.forEach(y,(w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(I=>{p=p.insert(w,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(w=>({batchId:f,changes:gv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,l).next(f=>H.forEach(f,p=>{const y=function(T,I){return new Tc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(w=>{w.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let f=Va();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&za(w.mutation,y,hn.empty(),mt.now()),Sc(t,y)&&(f=f.insert(p,y))}),f})}}/**
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
 */class dP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:nP(o.bundledQuery),readTime:tr(o.readTime)}}(t)),H.resolve()}}/**
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
 */class fP{constructor(){this.overlays=new et(ge.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=is();return H.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Tt(e,t,l)}),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=is(),l=t.length+1,h=new ge(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let w=l.get(y.largestBatchId);w===null&&(w=is(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=is(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>f.set(y,w)),!(f.size()>=o)););return H.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new xA(t,s));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(s.key))}}/**
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
 */class pP{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Df{constructor(){this.dr=new gt(Tt.Ar),this.Rr=new gt(Tt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Tt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ge(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1);let l=ke();return this.Rr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Tt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
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
 */class mP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(Tt.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new DA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Tt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);l.push(f)}),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(De);return t.forEach(o=>{const l=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{s=s.add(f.br)})}),H.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ge.isDocumentKey(l)||(l=l.child(""));const h=new Tt(new ge(l),0);let f=new gt(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),H.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return H.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Tt(t,0),o=this.vr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gP{constructor(e){this.Nr=e,this.docs=function(){return new et(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Or();const h=t.path,f=new ge(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||WR(HR(w),s)<=0||(o.has(w.key)||Sc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e()}Lr(e,t){return H.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new yP(this)}getSize(e){return H.resolve(this.size)}}class yP extends uP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class _P{constructor(e){this.persistence=e,this.Br=new ps(t=>If(t),Sf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Df,this.targetCount=0,this.Qr=To.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new To(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),H.waitFor(l).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
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
 */class Ov{constructor(e,t){this.Kr={},this.overlays={},this.$r=new vc(0),this.Ur=!1,this.Ur=!0,this.Wr=new pP,this.referenceDelegate=e(this),this.Gr=new _P(this),this.indexManager=new rP,this.remoteDocumentCache=function(o){return new gP(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new tP(t),this.jr=new dP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new mP(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new vP(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return H.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class vP extends GR{constructor(e){super(),this.currentSequenceNumber=e}}class xf{constructor(e){this.persistence=e,this.Zr=new Df,this.Xr=null}static ei(e){return new xf(e)}get ti(){if(this.Xr)return this.Xr;throw _e()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,s=>{const o=ge.fromPath(s);return this.ni(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.ri=new ps(s=>XR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=lP(this,t)}static ei(e,t){return new rc(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(l=>l?H.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mu(e.data.value)),t}ir(e,t,s){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Vf(e,t.fromCache,s,o)}}/**
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
 */class wP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return QI()?8:QR(zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new wP;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(lo()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(lo()<=Ce.DEBUG&&se("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(lo()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):H.resolve())}Xi(e,t){if(oy(t))return H.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Kd(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,Kd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,s,o){return oy(t)||o.isEqual(we.min())?H.resolve(null):this.Zi.getDocuments(e,s).next(l=>{const h=this.rs(t,l);return this.ss(t,h,s,o)?H.resolve(null):(lo()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.os(e,h,t,qR(o,-1)).next(f=>f))})}rs(e,t){let s=new gt(pv(e));return t.forEach((o,l)=>{Sc(e,l)&&(s=s.add(l))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,s){return lo()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",uo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ei.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class TP{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(De),this.cs=new ps(l=>If(l),Sf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function IP(r,e,t,s){return new TP(r,e,t,s)}async function Mv(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let p=ke();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(s,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function SP(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,w){const T=y.batch,I=T.keys();let V=H.resolve();return I.forEach(F=>{V=V.next(()=>w.getEntry(p,F)).next($=>{const z=y.docVersions.get(F);Ue(z!==null),$.version.compareTo(z)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),w.addEntry($)))})}),V.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=ke();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function bv(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function RP(r,e){const t=Te(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((w,T)=>{const I=o.get(T);if(!I)return;f.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,T)));let V=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(w.resumeToken,s)),o=o.insert(T,V),function($,z,W){return $.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,V,w)&&f.push(t.Gr.updateTargetData(l,V))});let p=Or(),y=ke();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(AP(l,h,e.documentUpdates).next(w=>{p=w.Is,y=w.Es})),!s.isEqual(we.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(w)}return H.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function AP(r,e,t){let s=ke(),o=ke();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Or();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):se("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function PP(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CP(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(l=>l?(o=l,H.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Jd(r,e,t){const s=Te(r),o=s.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Do(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function _y(r,e,t){const s=Te(r);let o=we.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,w){const T=Te(p),I=T.cs.get(w);return I!==void 0?H.resolve(T.us.get(I)):T.Gr.getTargetData(y,w)}(s,h,er(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke())).next(f=>(kP(s,gA(e),f),{documents:f,ds:l})))}function kP(r,e,t){let s=r.ls.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.ls.set(e,s)}class vy{constructor(){this.activeTargetIds=TA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NP{constructor(){this._o=new vy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new vy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DP{uo(e){}shutdown(){}}/**
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
 */class wy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function Cd(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
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
 */const xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class VP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const bt="WebChannelConnection";class LP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,s,o,l,h){const f=Cd(),p=this.No(t,s.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(w=>(se("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw _o("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",o),w})}ko(t,s,o,l,h,f){return this.Oo(t,s,o,l,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,s){const o=xP[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const l=Cd();return new Promise((h,f)=>{const p=new X_;p.setWithCredentials(!0),p.listenOnce(J_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Ou.NO_ERROR:const w=p.getResponseJson();se(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Ou.TIMEOUT:se(bt,`RPC '${e}' ${l} timed out`),f(new he(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const T=p.getStatus();if(se(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const V=I==null?void 0:I.error;if(V&&V.status&&V.message){const F=function(z){const W=z.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(W)>=0?W:Y.UNKNOWN}(V.status);f(new he(F,V.message))}else f(new he(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new he(Y.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{se(bt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);se(bt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,s,15)})}qo(e,t,s){const o=Cd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=tv(),f=ev(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const w=l.join("");se(bt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let I=!1,V=!1;const F=new VP({Eo:z=>{V?se(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(I||(se(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),se(bt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Ao:()=>T.close()}),$=(z,W,X)=>{z.listen(W,ne=>{try{X(ne)}catch(ce){setTimeout(()=>{throw ce},0)}})};return $(T,xa.EventType.OPEN,()=>{V||(se(bt,`RPC '${e}' stream ${o} transport opened.`),F.So())}),$(T,xa.EventType.CLOSE,()=>{V||(V=!0,se(bt,`RPC '${e}' stream ${o} transport closed`),F.Do())}),$(T,xa.EventType.ERROR,z=>{V||(V=!0,_o(bt,`RPC '${e}' stream ${o} transport errored:`,z),F.Do(new he(Y.UNAVAILABLE,"The operation could not be completed")))}),$(T,xa.EventType.MESSAGE,z=>{var W;if(!V){const X=z.data[0];Ue(!!X);const ne=X,ce=(ne==null?void 0:ne.error)||((W=ne[0])===null||W===void 0?void 0:W.error);if(ce){se(bt,`RPC '${e}' stream ${o} received error:`,ce);const Ie=ce.status;let Ee=function(A){const k=lt[A];if(k!==void 0)return Rv(k)}(Ie),N=ce.message;Ee===void 0&&(Ee=Y.INTERNAL,N="Unknown error status: "+Ie+" with message "+ce.message),V=!0,F.Do(new he(Ee,N)),T.close()}else se(bt,`RPC '${e}' stream ${o} received:`,X),F.vo(X)}}),$(f,Z_.STAT_EVENT,z=>{z.stat===Bd.PROXY?se(bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Bd.NOPROXY&&se(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.bo()},0),F}}function kd(){return typeof document<"u"?document:null}/**
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
 */function Cc(r){return new jA(r,!0)}/**
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
 */class Fv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Uv{constructor(e,t,s,o,l,h,f,p){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Fv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new he(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OP extends Uv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=qA(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?tr(h.readTime):we.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Xd(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=Wd(p)?{documents:KA(l,p)}:{query:GA(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Cv(l,h.resumeToken);const y=Gd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=nc(l,h.snapshotVersion.toTimestamp());const y=Gd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const s=YA(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Xd(this.serializer),t.removeTarget=e,this.c_(t)}}class MP extends Uv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=WA(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Xd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>HA(this.serializer,s))};this.c_(t)}}/**
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
 */class bP extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new he(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Qd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(Y.UNKNOWN,l.toString())})}ko(e,t,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Qd(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(Y.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class FP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class UP{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ms(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Te(p);y.k_.add(4),await il(y),y.K_.set("Unknown"),y.k_.delete(4),await kc(y)}(this))})}),this.K_=new FP(s,o)}}async function kc(r){if(ms(r))for(const e of r.q_)await e(!0)}async function il(r){for(const e of r.q_)await e(!1)}function zv(r,e){const t=Te(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),bf(t)?Mf(t):xo(t).s_()&&Of(t,e))}function Lf(r,e){const t=Te(r),s=xo(t);t.B_.delete(e),s.s_()&&jv(t,e),t.B_.size===0&&(s.s_()?s.a_():ms(t)&&t.K_.set("Unknown"))}function Of(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(r).V_(e)}function jv(r,e){r.U_.xe(e),xo(r).m_(e)}function Mf(r){r.U_=new bA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.K_.F_()}function bf(r){return ms(r)&&!xo(r).i_()&&r.B_.size>0}function ms(r){return Te(r).k_.size===0}function Bv(r){r.U_=void 0}async function zP(r){r.K_.set("Online")}async function jP(r){r.B_.forEach((e,t)=>{Of(r,e)})}async function BP(r,e){Bv(r),bf(r)?(r.K_.O_(e),Mf(r)):r.K_.set("Unknown")}async function $P(r,e,t){if(r.K_.set("Online"),e instanceof Pv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(r,s)}else if(e instanceof Uu?r.U_.$e(e):e instanceof Av?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(we.min()))try{const s=await bv(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.B_.get(y);w&&l.B_.set(y,w.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const w=l.B_.get(p);if(!w)return;l.B_.set(p,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),jv(l,p);const T=new gi(w.target,p,y,w.sequenceNumber);Of(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await ic(r,s)}}async function ic(r,e,t){if(!Do(e))throw e;r.k_.add(1),await il(r),r.K_.set("Offline"),t||(t=()=>bv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await kc(r)})}function $v(r,e){return e().catch(t=>ic(r,t,e))}async function Nc(r){const e=Te(r),t=Ri(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;qP(e);)try{const o=await PP(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,HP(e,o)}catch(o){await ic(e,o)}qv(e)&&Hv(e)}function qP(r){return ms(r)&&r.L_.length<10}function HP(r,e){r.L_.push(e);const t=Ri(r);t.s_()&&t.f_&&t.g_(e.mutations)}function qv(r){return ms(r)&&!Ri(r).i_()&&r.L_.length>0}function Hv(r){Ri(r).start()}async function WP(r){Ri(r).w_()}async function KP(r){const e=Ri(r);for(const t of r.L_)e.g_(t.mutations)}async function GP(r,e,t){const s=r.L_.shift(),o=Cf.from(s,e,t);await $v(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Nc(r)}async function QP(r,e){e&&Ri(r).f_&&await async function(s,o){if(function(h){return LA(h)&&h!==Y.ABORTED}(o.code)){const l=s.L_.shift();Ri(s).__(),await $v(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Nc(s)}}(r,e),qv(r)&&Hv(r)}async function Ey(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=ms(t);t.k_.add(3),await il(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await kc(t)}async function YP(r,e){const t=Te(r);e?(t.k_.delete(2),await kc(t)):e||(t.k_.add(2),await il(t),t.K_.set("Unknown"))}function xo(r){return r.W_||(r.W_=function(t,s,o){const l=Te(t);return l.b_(),new OP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:zP.bind(null,r),mo:jP.bind(null,r),po:BP.bind(null,r),R_:$P.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),bf(r)?Mf(r):r.K_.set("Unknown")):(await r.W_.stop(),Bv(r))})),r.W_}function Ri(r){return r.G_||(r.G_=function(t,s,o){const l=Te(t);return l.b_(),new MP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:WP.bind(null,r),po:QP.bind(null,r),p_:KP.bind(null,r),y_:GP.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Nc(r)):(await r.G_.stop(),r.L_.length>0&&(se("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class Ff{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Ff(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uf(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),Do(r))return new he(Y.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ty{constructor(){this.z_=new et(ge.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):_e():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Io{constructor(e,t,s,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Io(e,t,po.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class XP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class JP{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Te(t),l=o.queries;o.queries=Iy(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(s)})})(this,new he(Y.ABORTED,"Firestore shutting down"))}}function Iy(){return new ps(r=>fv(r),Ic)}async function Wv(r,e){const t=Te(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(s=2):(l=new XP,s=e.Z_()?0:1);try{switch(s){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Uf(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&zf(t)}async function Kv(r,e){const t=Te(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ZP(r,e){const t=Te(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&zf(t)}function eC(r,e,t){const s=Te(r),o=s.queries.get(e);if(o)for(const l of o.J_)l.onError(t);s.queries.delete(e)}function zf(r){r.X_.forEach(e=>{e.next()})}var Zd,Sy;(Sy=Zd||(Zd={})).na="default",Sy.Cache="cache";class Gv{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Zd.Cache}}/**
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
 */class Qv{constructor(e){this.key=e}}class Yv{constructor(e){this.key=e}}class tC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=pv(e),this.ma=new po(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Ty,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const I=o.get(w),V=Sc(this.query,T)?T:null,F=!!I&&this.mutatedKeys.has(I.key),$=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let z=!1;I&&V?I.data.isEqual(V.data)?F!==$&&(s.track({type:3,doc:V}),z=!0):this.ya(I,V)||(s.track({type:2,doc:V}),z=!0,(p&&this.Va(V,p)>0||y&&this.Va(V,y)<0)&&(f=!0)):!I&&V?(s.track({type:0,doc:V}),z=!0):I&&!V&&(s.track({type:1,doc:I}),z=!0,(p||y)&&(f=!0)),z&&(V?(h=h.add(V),l=$?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,T)=>function(V,F){const $=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return $(V)-$(F)}(w.type,T.type)||this.Va(w.doc,T.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Io(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ty,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Yv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new Qv(s))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Io.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class nC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class rC{constructor(e){this.key=e,this.Fa=!1}}class iC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ps(f=>fv(f),Ic),this.Oa=new Map,this.Na=new Set,this.La=new et(ge.comparator),this.Ba=new Map,this.ka=new Df,this.qa={},this.Qa=new Map,this.Ka=To.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function sC(r,e,t=!0){const s=nw(r);let o;const l=s.xa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await Xv(s,e,t,!0),o}async function oC(r,e){const t=nw(r);await Xv(t,e,!0,!1)}async function Xv(r,e,t,s){const o=await CP(r.localStore,er(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await aC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&zv(r.remoteStore,o),f}async function aC(r,e,t,s,o){r.Ua=(T,I,V)=>async function($,z,W,X){let ne=z.view.ga(W);ne.ss&&(ne=await _y($.localStore,z.query,!1).then(({documents:N})=>z.view.ga(N,ne)));const ce=X&&X.targetChanges.get(z.targetId),Ie=X&&X.targetMismatches.get(z.targetId)!=null,Ee=z.view.applyChanges(ne,$.isPrimaryClient,ce,Ie);return Ay($,z.targetId,Ee.ba),Ee.snapshot}(r,T,I,V);const l=await _y(r.localStore,e,!0),h=new tC(e,l.ds),f=h.ga(l.documents),p=rl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,p);Ay(r,t,y.ba);const w=new nC(e,t,h);return r.xa.set(e,w),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),y.snapshot}async function lC(r,e,t){const s=Te(r),o=s.xa.get(e),l=s.Oa.get(o.targetId);if(l.length>1)return s.Oa.set(o.targetId,l.filter(h=>!Ic(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Lf(s.remoteStore,o.targetId),ef(s,o.targetId)}).catch(No)):(ef(s,o.targetId),await Jd(s.localStore,o.targetId,!0))}async function uC(r,e){const t=Te(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Lf(t.remoteStore,s.targetId))}async function cC(r,e,t){const s=yC(r);try{const o=await function(h,f){const p=Te(h),y=mt.now(),w=f.reduce((V,F)=>V.add(F.key),ke());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",V=>{let F=Or(),$=ke();return p.hs.getEntries(V,w).next(z=>{F=z,F.forEach((W,X)=>{X.isValidDocument()||($=$.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(V,F)).next(z=>{T=z;const W=[];for(const X of f){const ne=kA(X,T.get(X.key).overlayedDocument);ne!=null&&W.push(new Pi(X.key,ne,ov(ne.value.mapValue),zn.exists(!0)))}return p.mutationQueue.addMutationBatch(V,y,W,f)}).next(z=>{I=z;const W=z.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(V,z.batchId,W)})}).then(()=>({batchId:I.batchId,changes:gv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(De)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(s,o.batchId,t),await sl(s,o.changes),await Nc(s.remoteStore)}catch(o){const l=Uf(o,"Failed to persist write");t.reject(l)}}async function Jv(r,e){const t=Te(r);try{const s=await RP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await sl(t,s,e)}catch(s){await No(s)}}function Ry(r,e,t){const s=Te(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Te(h);p.onlineState=f;let y=!1;p.queries.forEach((w,T)=>{for(const I of T.J_)I.ea(f)&&(y=!0)}),y&&zf(p)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hC(r,e,t){const s=Te(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),l=o&&o.key;if(l){let h=new et(ge.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const f=ke().add(l),p=new Pc(we.min(),new Map,new et(De),h,f);await Jv(s,p),s.La=s.La.remove(l),s.Ba.delete(e),jf(s)}else await Jd(s.localStore,e,!1).then(()=>ef(s,e,t)).catch(No)}async function dC(r,e){const t=Te(r),s=e.batch.batchId;try{const o=await SP(t.localStore,e);ew(t,s,null),Zv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await sl(t,o)}catch(o){await No(o)}}async function fC(r,e,t){const s=Te(r);try{const o=await function(h,f){const p=Te(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Ue(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(s.localStore,e);ew(s,e,t),Zv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await sl(s,o)}catch(o){await No(o)}}function Zv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function ew(r,e,t){const s=Te(r);let o=s.qa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function ef(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||tw(r,s)})}function tw(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Lf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),jf(r))}function Ay(r,e,t){for(const s of t)s instanceof Qv?(r.ka.addReference(s.key,e),pC(r,s)):s instanceof Yv?(se("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||tw(r,s.key)):_e()}function pC(r,e){const t=e.key,s=t.path.canonicalString();r.La.get(t)||r.Na.has(s)||(se("SyncEngine","New document in limbo: "+t),r.Na.add(s),jf(r))}function jf(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new ge(Ye.fromString(e)),s=r.Ka.next();r.Ba.set(s,new rC(t)),r.La=r.La.insert(t,s),zv(r.remoteStore,new gi(er(Rf(t.path)),s,"TargetPurposeLimboResolution",vc.oe))}}async function sl(r,e,t){const s=Te(r),o=[],l=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,p)=>{h.push(s.Ua(p,e,t).then(y=>{var w;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Vf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(p,y){const w=Te(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>H.forEach(y,I=>H.forEach(I.Wi,V=>w.persistence.referenceDelegate.addReference(T,I.targetId,V)).next(()=>H.forEach(I.Gi,V=>w.persistence.referenceDelegate.removeReference(T,I.targetId,V)))))}catch(T){if(!Do(T))throw T;se("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const V=w.us.get(I),F=V.snapshotVersion,$=V.withLastLimboFreeSnapshotVersion(F);w.us=w.us.insert(I,$)}}}(s.localStore,l))}async function mC(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await Mv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new he(Y.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sl(t,s.Ts)}}function gC(r,e){const t=Te(r),s=t.Ba.get(e);if(s&&s.Fa)return ke().add(s.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function nw(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hC.bind(null,e),e.Ma.R_=ZP.bind(null,e.eventManager),e.Ma.Wa=eC.bind(null,e.eventManager),e}function yC(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fC.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return IP(this.persistence,new EP,e.initialUser,this.serializer)}ja(e){return new Ov(xf.ei,this.serializer)}za(e){return new NP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class _C extends sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof rc);const s=this.persistence.referenceDelegate.garbageCollector;return new oP(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Ov(s=>rc.ei(s,t),this.serializer)}}class tf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mC.bind(null,this.syncEngine),await YP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JP}()}createDatastore(e){const t=Cc(e.databaseInfo.databaseId),s=function(l){return new LP(l)}(e.databaseInfo);return function(l,h,f,p){return new bP(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new UP(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Ry(this.syncEngine,t,0),function(){return wy.p()?new wy:new DP}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,w){const T=new iC(o,l,h,f,p,y);return w&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);se("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await il(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}tf.provider={build:()=>new tf};/**
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
 */class rw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class vC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=rv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Uf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Nd(r,e){r.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Mv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Py(r,e){r.asyncQueue.verifyOperationInProgress();const t=await wC(r);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Ey(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Ey(e.remoteStore,o)),r._onlineComponents=e}async function wC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;_o("Error using user provided cache. Falling back to memory cache: "+t),await Nd(r,new sc)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Nd(r,new _C(void 0));return r._offlineComponents}async function iw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(r,r._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Py(r,new tf))),r._onlineComponents}function EC(r){return iw(r).then(e=>e.syncEngine)}async function sw(r){const e=await iw(r),t=e.eventManager;return t.onListen=sC.bind(null,e.syncEngine),t.onUnlisten=lC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uC.bind(null,e.syncEngine),t}function TC(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const w=new rw({next:I=>{w.eu(),h.enqueueAndForget(()=>Kv(l,T));const V=I.docs.has(f);!V&&I.fromCache?y.reject(new he(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&p&&p.source==="server"?y.reject(new he(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Gv(Rf(f.path),w,{includeMetadataChanges:!0,ua:!0});return Wv(l,T)}(await sw(r),r.asyncQueue,e,t,s)),s.promise}function IC(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const w=new rw({next:I=>{w.eu(),h.enqueueAndForget(()=>Kv(l,T)),I.fromCache&&p.source==="server"?y.reject(new he(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Gv(f,w,{includeMetadataChanges:!0,ua:!0});return Wv(l,T)}(await sw(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function ow(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Cy=new Map;/**
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
 */function aw(r,e,t){if(!t)throw new he(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function SC(r,e,t,s){if(e===!0&&s===!0)throw new he(Y.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ky(r){if(!ge.isDocumentKey(r))throw new he(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ny(r){if(ge.isDocumentKey(r))throw new he(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Bf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e()}function Mr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bf(r);throw new he(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Dy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ow((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new OR;switch(s.type){case"firstParty":return new UR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Cy.get(t);s&&(se("ComponentProvider","Removing Datastore"),Cy.delete(t),s.terminate())}(this),Promise.resolve()}}function RC(r,e,t,s={}){var o;const l=(r=Mr(r,Dc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Ft.MOCK_USER;else{f=$I(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new he(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}r._authCredentials=new MR(new nv(f,p))}}/**
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
 */class xc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xc(this.firestore,e,this._query)}}class fn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class vi extends xc{constructor(e,t,s){super(e,t,Rf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ge(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function AC(r,e,...t){if(r=jt(r),aw("collection","path",e),r instanceof Dc){const s=Ye.fromString(e,...t);return Ny(s),new vi(r,null,s)}{if(!(r instanceof fn||r instanceof vi))throw new he(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Ny(s),new vi(r.firestore,null,s)}}function Vc(r,e,...t){if(r=jt(r),arguments.length===1&&(e=rv.newId()),aw("doc","path",e),r instanceof Dc){const s=Ye.fromString(e,...t);return ky(s),new fn(r,null,new ge(s))}{if(!(r instanceof fn||r instanceof vi))throw new he(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return ky(s),new fn(r.firestore,r instanceof vi?r.converter:null,new ge(s))}}/**
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
 */class xy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fv(this,"async_queue_retry"),this.fu=()=>{const s=kd();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=kd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=kd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new xr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Do(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Lr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Ff.createAndSchedule(this,e,t,s,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&_e()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Vo extends Dc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function PC(r,e){const t=typeof r=="object"?r:pf(),s=typeof r=="string"?r:"(default)",o=fs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=jI("firestore");l&&RC(o,...l)}return o}function $f(r){if(r._terminated)throw new he(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||CC(r),r._firestoreClient}function CC(r){var e,t,s;const o=r._freezeSettings(),l=function(f,p,y,w){return new eA(f,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,ow(w.experimentalLongPollingOptions),w.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new vC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class So{constructor(e){this._byteString=e}static fromBase64String(e){try{return new So(Nt.fromBase64String(e))}catch(t){throw new he(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new So(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qf{constructor(e){this._methodName=e}}/**
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
 */class Hf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class Wf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const kC=/^__.*__$/;class NC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new nl(e,this.data,t,this.fieldTransforms)}}class lw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Kf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Kf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(uw(this.Mu)&&kC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Cc(e)}$u(e,t,s,o=!1){return new Kf({Mu:e,methodName:t,Ku:s,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cw(r){const e=r._freezeSettings(),t=Cc(r._databaseId);return new DC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function xC(r,e,t,s,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);Gf("Data must be an object, but it was:",h,s);const f=hw(s,h);let p,y;if(l.merge)p=new hn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const I=nf(e,T,t);if(!h.contains(I))throw new he(Y.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);fw(w,I)||w.push(I)}p=new hn(w),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new NC(new tn(f),p,y)}class Oc extends qf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}function VC(r,e,t,s){const o=r.$u(1,e,t);Gf("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();Ai(s,(p,y)=>{const w=Qf(e,p,t);y=jt(y);const T=o.Bu(w);if(y instanceof Oc)l.push(w);else{const I=Mc(y,T);I!=null&&(l.push(w),h.set(w,I))}});const f=new hn(l);return new lw(h,f,o.fieldTransforms)}function LC(r,e,t,s,o,l){const h=r.$u(1,e,t),f=[nf(e,s,t)],p=[o];if(l.length%2!=0)throw new he(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(nf(e,l[I])),p.push(l[I+1]);const y=[],w=tn.empty();for(let I=f.length-1;I>=0;--I)if(!fw(y,f[I])){const V=f[I];let F=p[I];F=jt(F);const $=h.Bu(V);if(F instanceof Oc)y.push(V);else{const z=Mc(F,$);z!=null&&(y.push(V),w.set(V,z))}}const T=new hn(y);return new lw(w,T,h.fieldTransforms)}function Mc(r,e){if(dw(r=jt(r)))return Gf("Unsupported field value:",e,r),hw(r,e);if(r instanceof qf)return function(s,o){if(!uw(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let p=Mc(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return IA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=mt.fromDate(s);return{timestampValue:nc(o.serializer,l)}}if(s instanceof mt){const l=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(s instanceof Hf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof So)return{bytesValue:Cv(o.serializer,s._byteString)};if(s instanceof fn){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Nf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Wf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return Af(f.serializer,p)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Bf(s)}`)}(r,e)}function hw(r,e){const t={};return iv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(r,(s,o)=>{const l=Mc(o,e.Ou(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function dw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof Hf||r instanceof So||r instanceof fn||r instanceof qf||r instanceof Wf)}function Gf(r,e,t){if(!dw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Bf(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function nf(r,e,t){if((e=jt(e))instanceof Lc)return e._internalPath;if(typeof e=="string")return Qf(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const OC=new RegExp("[~\\*/\\[\\]]");function Qf(r,e,t){if(e.search(OC)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Lc(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new he(Y.INVALID_ARGUMENT,f+r+p)}function fw(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class pw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MC extends pw{data(){return super.data()}}function mw(r,e){return typeof e=="string"?Qf(r,e):e instanceof Lc?e._internalPath:e._delegate._internalPath}/**
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
 */function bC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FC{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ai(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new Wf(l)}convertGeoPoint(e){return new Hf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ec(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Ue(Lv(s));const o=new Ka(s.get(1),s.get(3)),l=new ge(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function UC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
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
 */class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gw extends pw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(mw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class zu extends gw{data(e={}){return super.data(e)}}class zC{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new zu(this._firestore,this._userDataWriter,s.key,s,new Oa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Oa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new zu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Oa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:jC(f.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function jC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
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
 */function BC(r){r=Mr(r,fn);const e=Mr(r.firestore,Vo);return TC($f(e),r._key).then(t=>KC(e,r,t))}class yw extends FC{constructor(e){super(),this.firestore=e}convertBytes(e){return new So(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function $C(r){r=Mr(r,xc);const e=Mr(r.firestore,Vo),t=$f(e),s=new yw(e);return bC(r._query),IC(t,r._query).then(o=>new zC(e,s,r,o))}function qC(r,e,t,...s){r=Mr(r,fn);const o=Mr(r.firestore,Vo),l=cw(o);let h;return h=typeof(e=jt(e))=="string"||e instanceof Lc?LC(l,"updateDoc",r._key,e,t,s):VC(l,"updateDoc",r._key,e),Yf(o,[h.toMutation(r._key,zn.exists(!0))])}function HC(r){return Yf(Mr(r.firestore,Vo),[new Pf(r._key,zn.none())])}function WC(r,e){const t=Mr(r.firestore,Vo),s=Vc(r),o=UC(r.converter,e);return Yf(t,[xC(cw(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,zn.exists(!1))]).then(()=>s)}function Yf(r,e){return function(s,o){const l=new xr;return s.asyncQueue.enqueueAndForget(async()=>cC(await EC(s),o,l)),l.promise}($f(r),e)}function KC(r,e,t){const s=t.docs.get(e._key),o=new yw(r);return new gw(r,o,e._key,s,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){ko=o})(Co),sr(new jn("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Vo(new bR(s.getProvider("auth-internal")),new jR(s.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new he(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Sn(Qg,"4.7.5",e),Sn(Qg,"4.7.5","esm2017")})();function Xf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function _w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GC=_w,vw=new ds("auth","Firebase",_w());/**
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
 */const ac=new gc("@firebase/auth");function QC(r,...e){ac.logLevel<=Ce.WARN&&ac.warn(`Auth (${Co}): ${r}`,...e)}function ju(r,...e){ac.logLevel<=Ce.ERROR&&ac.error(`Auth (${Co}): ${r}`,...e)}/**
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
 */function br(r,...e){throw Jf(r,...e)}function nr(r,...e){return Jf(r,...e)}function ww(r,e,t){const s=Object.assign(Object.assign({},GC()),{[e]:t});return new ds("auth","Firebase",s).create(e,{appName:r.name})}function os(r){return ww(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return vw.create(r,...e)}function ve(r,e,...t){if(!r)throw Jf(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ju(e),new Error(e)}function Fr(r,e){r||Cr(e)}/**
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
 */function rf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function YC(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function XC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YC()||v_()||"connection"in navigator)?navigator.onLine:!0}function JC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=qI()||KI()}get(){return XC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ew{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ek=new ol(3e4,6e4);function ep(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Lo(r,e,t,s,o={}){return Tw(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=tl(Object.assign({key:r.config.apiKey},h)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},l);return WI()||(y.referrerPolicy="no-referrer"),Ew.fetch()(Iw(r,r.config.apiHost,t,f),y)})}async function Tw(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZC),e);try{const o=new nk(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Du(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(r,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Du(r,"email-already-in-use",h);if(p==="USER_DISABLED")throw Du(r,"user-disabled",h);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw ww(r,w,y);br(r,w)}}catch(o){if(o instanceof Bn)throw o;br(r,"network-request-failed",{message:String(o)})}}async function tk(r,e,t,s,o={}){const l=await Lo(r,e,t,s,o);return"mfaPendingCredential"in l&&br(r,"multi-factor-auth-required",{_serverResponse:l}),l}function Iw(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Zf(r.config,o):`${r.config.apiScheme}://${o}`}class nk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),ek.get())})}}function Du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function rk(r,e){return Lo(r,"POST","/v1/accounts:delete",e)}async function Sw(r,e){return Lo(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ja(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(r,e=!1){const t=jt(r),s=await t.getIdToken(e),o=tp(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:ja(Dd(o.auth_time)),issuedAtTime:ja(Dd(o.iat)),expirationTime:ja(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dd(r){return Number(r)*1e3}function tp(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=m_(t);return o?JSON.parse(o):(ju("Failed to decode base64 JWT payload"),null)}catch(o){return ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ly(r){const e=tp(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bn&&sk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function sk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Xa(r,Sw(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Rw(l.providerUserInfo):[],f=lk(r.providerData,h),p=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new sf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function ak(r){const e=jt(r);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lk(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Rw(r){return r.map(e=>{var{providerId:t}=e,s=Xf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uk(r,e){const t=await Tw(r,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=Iw(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Ew.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ck(r,e){return Lo(r,"POST","/v2/accounts:revokeToken",ep(r,e))}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Ly(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await uk(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new mo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function ci(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new sf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ik(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mi(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Xa(this,rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,p,y,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,z=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ne,emailVerified:ce,isAnonymous:Ie,providerData:Ee,stsTokenManager:N}=t;ve(ne&&N,e,"internal-error");const S=mo.fromJSON(this.name,N);ve(typeof ne=="string",e,"internal-error"),ci(T,e.name),ci(I,e.name),ve(typeof ce=="boolean",e,"internal-error"),ve(typeof Ie=="boolean",e,"internal-error"),ci(V,e.name),ci(F,e.name),ci($,e.name),ci(z,e.name),ci(W,e.name),ci(X,e.name);const A=new kr({uid:ne,auth:e,email:I,emailVerified:ce,displayName:T,isAnonymous:Ie,photoURL:F,phoneNumber:V,tenantId:$,stsTokenManager:S,createdAt:W,lastLoginAt:X});return Ee&&Array.isArray(Ee)&&(A.providerData=Ee.map(k=>Object.assign({},k))),z&&(A._redirectEventId=z),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new mo;o.updateFromServerResponse(t);const l=new kr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await lc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Rw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new mo;f.updateFromIdToken(s);const p=new kr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new sf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Oy=new Map;function Nr(r){Fr(r instanceof Function,"Expected a class definition");let e=Oy.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Oy.set(r,e),e)}/**
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
 */class Aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Aw.type="NONE";const My=Aw;/**
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
 */function Bu(r,e,t){return`firebase:${r}:${e}:${t}`}class go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Bu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Bu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new go(Nr(My),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Nr(My);const h=Bu(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){const T=kr._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new go(l,e,s):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new go(l,e,s))}}/**
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
 */function by(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xw(e))return"Blackberry";if(Vw(e))return"Webos";if(Cw(e))return"Safari";if((e.includes("chrome/")||kw(e))&&!e.includes("edge/"))return"Chrome";if(Dw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pw(r=zt()){return/firefox\//i.test(r)}function Cw(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kw(r=zt()){return/crios\//i.test(r)}function Nw(r=zt()){return/iemobile/i.test(r)}function Dw(r=zt()){return/android/i.test(r)}function xw(r=zt()){return/blackberry/i.test(r)}function Vw(r=zt()){return/webos/i.test(r)}function np(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function hk(r=zt()){var e;return np(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dk(){return GI()&&document.documentMode===10}function Lw(r=zt()){return np(r)||Dw(r)||Vw(r)||xw(r)||/windows phone/i.test(r)||Nw(r)}/**
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
 */function Ow(r,e=[]){let t;switch(r){case"Browser":t=by(zt());break;case"Worker":t=`${by(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
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
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function pk(r,e={}){return Lo(r,"GET","/v2/passwordPolicy",ep(r,e))}/**
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
 */const mk=6;class gk{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:mk,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class yk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fy(this),this.idTokenSubscription=new Fy(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sw(this,{idToken:e}),s=await kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mi(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mi(this.app))return Promise.reject(os(this));const t=e?jt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mi(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mi(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),t=new gk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ck(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rp(r){return jt(r)}class Fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ip={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _k(r){ip=r}function vk(r){return ip.loadJS(r)}function wk(){return ip.gapiScript}function Ek(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Tk(r,e){const t=fs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if($a(l,e??{}))return o;br(o,"already-initialized")}return t.initialize({options:e})}function Ik(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Nr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Sk(r,e,t){const s=rp(r);ve(s._canInitEmulator,s,"emulator-config-failed"),ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Mw(e),{host:h,port:f}=Rk(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),Ak()}function Mw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Rk(r){const e=Mw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Uy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Uy(h)}}}function Uy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ak(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class bw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}/**
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
 */async function yo(r,e){return tk(r,"POST","/v1/accounts:signInWithIdp",ep(r,e))}/**
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
 */const Pk="http://localhost";class cs extends bw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Xf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new cs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:Pk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
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
 */class Fw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class al extends Fw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends al{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class di extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends al{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends al{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await kr._fromIdTokenResponse(e,s,o),h=zy(s);return new Ro({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=zy(s);return new Ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function zy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class uc extends Bn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new uc(e,t,s,o)}}function Uw(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(r,l,e,s):l})}async function Ck(r,e,t=!1){const s=await Xa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ro._forOperation(r,"link",s)}/**
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
 */async function kk(r,e,t=!1){const{auth:s}=r;if(mi(s.app))return Promise.reject(os(s));const o="reauthenticate";try{const l=await Xa(r,Uw(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=tp(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),Ro._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&br(s,"user-mismatch"),l}}/**
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
 */async function Nk(r,e,t=!1){if(mi(r.app))return Promise.reject(os(r));const s="signIn",o=await Uw(r,s,e),l=await Ro._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function Dk(r,e,t,s){return jt(r).onIdTokenChanged(e,t,s)}function xk(r,e,t){return jt(r).beforeAuthStateChanged(e,t)}const cc="__sak";/**
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
 */class zw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vk=1e3,Lk=10;class jw extends zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);dk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Lk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jw.type="LOCAL";const Ok=jw;/**
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
 */class Bw extends zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bw.type="SESSION";const $w=Bw;/**
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
 */function Mk(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await Mk(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
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
 */function sp(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=sp("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function rr(){return window}function Fk(r){rr().location.href=r}/**
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
 */function qw(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zk(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function jk(){return qw()?self:null}/**
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
 */const Hw="firebaseLocalStorageDb",Bk=1,hc="firebaseLocalStorage",Ww="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fc(r,e){return r.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function $k(){const r=indexedDB.deleteDatabase(Hw);return new ll(r).toPromise()}function of(){const r=indexedDB.open(Hw,Bk);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(hc,{keyPath:Ww})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(hc)?e(s):(s.close(),await $k(),e(await of()))})})}async function jy(r,e,t){const s=Fc(r,!0).put({[Ww]:e,value:t});return new ll(s).toPromise()}async function qk(r,e){const t=Fc(r,!1).get(e),s=await new ll(t).toPromise();return s===void 0?null:s.value}function By(r,e){const t=Fc(r,!0).delete(e);return new ll(t).toPromise()}const Hk=800,Wk=3;class Kw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Wk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await jy(e,cc,"1"),await By(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>qk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>By(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Fc(o,!1).getAll();return new ll(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kw.type="LOCAL";const Kk=Kw;new ol(3e4,6e4);/**
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
 */function Gk(r,e){return e?Nr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class op extends bw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qk(r){return Nk(r.auth,new op(r),r.bypassAuthState)}function Yk(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),kk(t,new op(r),r.bypassAuthState)}async function Xk(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),Ck(t,new op(r),r.bypassAuthState)}/**
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
 */class Gw{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Xk;case"reauthViaPopup":case"reauthViaRedirect":return Yk;default:br(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jk=new ol(2e3,1e4);class fo extends Gw{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jk.get())};e()}}fo.currentPopupAction=null;/**
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
 */const Zk="pendingRedirect",$u=new Map;class e1 extends Gw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const s=await t1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t1(r,e){const t=i1(e),s=r1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function n1(r,e){$u.set(r._key(),e)}function r1(r){return Nr(r._redirectPersistence)}function i1(r){return Bu(Zk,r.config.apiKey,r.name)}async function s1(r,e,t=!1){if(mi(r.app))return Promise.reject(os(r));const s=rp(r),o=Gk(s,e),h=await new e1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const o1=10*60*1e3;class a1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Qw(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o1&&this.cachedEventUids.clear(),this.cachedEventUids.has($y(e))}saveEventToCache(e){this.cachedEventUids.add($y(e)),this.lastProcessedEventTime=Date.now()}}function $y(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Qw({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qw(r);default:return!1}}/**
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
 */async function u1(r,e={}){return Lo(r,"GET","/v1/projects",e)}/**
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
 */const c1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h1=/^https?/;async function d1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await u1(r);for(const t of e)try{if(f1(t))return}catch{}br(r,"unauthorized-domain")}function f1(r){const e=rf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!h1.test(t))return!1;if(c1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const p1=new ol(3e4,6e4);function qy(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function m1(r){return new Promise((e,t)=>{var s,o,l;function h(){qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qy(),t(nr(r,"network-request-failed"))},timeout:p1.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rr().gapi)===null||l===void 0)&&l.load)h();else{const f=Ek("iframefcb");return rr()[f]=()=>{gapi.load?h():t(nr(r,"network-request-failed"))},vk(`${wk()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw qu=null,e})}let qu=null;function g1(r){return qu=qu||m1(r),qu}/**
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
 */const y1=new ol(5e3,15e3),_1="__/auth/iframe",v1="emulator/auth/iframe",w1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zf(e,v1):`https://${r.config.authDomain}/${_1}`,s={apiKey:e.apiKey,appName:r.name,v:Co},o=E1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function I1(r){const e=await g1(r),t=rr().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:T1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=nr(r,"network-request-failed"),f=rr().setTimeout(()=>{l(h)},y1.get());function p(){rr().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R1=500,A1=600,P1="_blank",C1="http://localhost";class Hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k1(r,e,t,s=R1,o=A1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},S1),{width:s.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(f=kw(y)?P1:t),Pw(y)&&(e=e||C1,p.scrollbars="yes");const w=Object.entries(p).reduce((I,[V,F])=>`${I}${V}=${F},`,"");if(hk(y)&&f!=="_self")return N1(e||"",f),new Hy(null);const T=window.open(e||"",f,w);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new Hy(T)}function N1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const D1="__/auth/handler",x1="emulator/auth/handler",V1=encodeURIComponent("fac");async function Wy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof Fw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",eS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof al){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),y=p?`#${V1}=${encodeURIComponent(p)}`:"";return`${L1(r)}?${tl(f).slice(1)}${y}`}function L1({config:r}){return r.emulator?Zf(r,x1):`https://${r.authDomain}/${D1}`}/**
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
 */const xd="webStorageSupport";class O1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$w,this._completeRedirectFn=s1,this._overrideRedirectResult=n1}async _openPopup(e,t,s,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Wy(e,t,s,rf(),o);return k1(e,h,sp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Wy(e,t,s,rf(),o);return Fk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await I1(e),s=new a1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xd,{type:xd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[xd];h!==void 0&&t(!!h),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lw()||Cw()||np()}}const M1=O1;var Ky="@firebase/auth",Gy="1.8.1";/**
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
 */class b1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U1(r){sr(new jn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ow(r)},y=new yk(s,o,l,p);return Ik(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),sr(new jn("auth-internal",e=>{const t=rp(e.getProvider("auth").getImmediate());return(s=>new b1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Ky,Gy,F1(r)),Sn(Ky,Gy,"esm2017")}/**
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
 */const z1=5*60,j1=__("authIdTokenMaxAge")||z1;let Qy=null;const B1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>j1)return;const o=t==null?void 0:t.token;Qy!==o&&(Qy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $1(r=pf()){const e=fs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Tk(r,{popupRedirectResolver:M1,persistence:[Kk,Ok,$w]}),s=__("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=B1(l.toString());xk(t,h,()=>h(t.currentUser)),Dk(t,f=>h(f))}}const o=g_("auth");return o&&Sk(t,`http://${o}`),t}function q1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}_k({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",q1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U1("Browser");const H1={apiKey:"AIzaSyCpBWqyXUXXFbxUQ-BX6Fo7_wYzee-pf6I",authDomain:"hydrojugassessment.firebaseapp.com",projectId:"hydrojugassessment",storageBucket:"hydrojugassessment.firebasestorage.app",messagingSenderId:"1063232022331",appId:"1:1063232022331:web:655dceab106076c53df91e",measurementId:"G-YVC2GTPTZ4"},ap=R_(H1);DR(ap);const Uc=PC(ap);$1(ap);const Yw=AC(Uc,"products");async function W1(r){try{return(await WC(Yw,r)).id}catch(e){throw console.error("Error creating product:",e),e}}async function Yy(){try{return(await $C(Yw)).docs.map(e=>({id:e.id,...e.data()}))}catch(r){throw console.error("Error fetching products:",r),r}}async function K1(r){try{const e=Vc(Uc,"products",r),t=await BC(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){throw console.error("Error fetching product:",e),e}}async function G1(r,e){try{const t=Vc(Uc,"products",r);await qC(t,e)}catch(t){throw console.error("Error updating product:",t),t}}async function Q1(r){try{const e=Vc(Uc,"products",r);await HC(e)}catch(e){throw console.error("Error deleting product:",e),e}}const Y1=()=>{const[r,e]=q.useState([]),t=fc();q.useEffect(()=>{(async()=>{const h=await Yy();e(h)})()},[]);const s=l=>{t(`/edit/${l}`)};async function o(l){try{await Q1(l),alert("Product deleted successfully!");const h=await Yy();e(h)}catch(h){alert("Error deleting product:",h.message)}}return Re.jsxs("div",{children:[Re.jsx("h1",{children:"Product List"}),Re.jsx("ul",{children:r.map(l=>Re.jsxs("li",{children:[Re.jsx("p",{children:l.ProductName}),Re.jsx("p",{children:l.ProductDesc}),Re.jsx("p",{children:l.ProductPrice}),Re.jsx("button",{onClick:()=>s(l.id),children:"Edit"}),Re.jsx("button",{onClick:()=>o(l.id),children:"Delete"})]},l.id))})]})},Pt=[];for(let r=0;r<256;++r)Pt.push((r+256).toString(16).slice(1));function X1(r,e=0){return(Pt[r[e+0]]+Pt[r[e+1]]+Pt[r[e+2]]+Pt[r[e+3]]+"-"+Pt[r[e+4]]+Pt[r[e+5]]+"-"+Pt[r[e+6]]+Pt[r[e+7]]+"-"+Pt[r[e+8]]+Pt[r[e+9]]+"-"+Pt[r[e+10]]+Pt[r[e+11]]+Pt[r[e+12]]+Pt[r[e+13]]+Pt[r[e+14]]+Pt[r[e+15]]).toLowerCase()}let Vd;const J1=new Uint8Array(16);function Z1(){if(!Vd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Vd=crypto.getRandomValues.bind(crypto)}return Vd(J1)}const eN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Xy={randomUUID:eN};function tN(r,e,t){var o;if(Xy.randomUUID&&!r)return Xy.randomUUID();r=r||{};const s=r.random??((o=r.rng)==null?void 0:o.call(r))??Z1();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,X1(s)}class Xw{constructor(e,t,s,o){this.ProductID=e||tN(),this.ProductName=t,this.ProductDesc=s||"No description provided.",this.ProductPrice=o||0}validate(){if(!this.ProductID)throw new Error("ProductID is required.");if(!this.ProductName)throw new Error("ProductName is required.");if(typeof this.ProductPrice!="number"||this.ProductPrice<0)throw new Error("ProductPrice must be a positive number.");return!0}}function nN(){const r=fc(),[e,t]=q.useState({ProductID:"",ProductName:"",ProductDesc:"",ProductPrice:""}),s=l=>{const{name:h,value:f}=l.target;t(p=>({...p,[h]:f}))},o=async l=>{l.preventDefault();try{const h=new Xw(e.ProductID,e.ProductName,e.ProductDesc,parseFloat(e.ProductPrice));h.validate(),await W1({...h}),alert("Product created successfully!"),r("/")}catch(h){alert(h.message)}};return Re.jsxs("form",{onSubmit:o,children:[Re.jsx("input",{type:"text",name:"ProductName",placeholder:"Product Name",value:e.ProductName,onChange:s}),Re.jsx("input",{type:"text",name:"ProductDesc",placeholder:"Product Description",value:e.ProductDesc,onChange:s}),Re.jsx("input",{type:"number",name:"ProductPrice",placeholder:"Product Price",value:e.ProductPrice,onChange:s}),Re.jsx("button",{type:"submit",children:"Create Product"})]})}function rN(){const r=fc(),{id:e}=FT(),[t,s]=q.useState({ProductID:"",ProductName:"",ProductDesc:"",ProductPrice:""});q.useEffect(()=>{async function h(){const f=await K1(e);f?s(f):alert("Product not found")}h()},[e]);const o=h=>{const{name:f,value:p}=h.target;s(y=>({...y,[f]:p}))},l=async h=>{h.preventDefault();try{const f=new Xw(t.ProductID,t.ProductName,t.ProductDesc,parseFloat(t.ProductPrice));f.validate(),await G1(e,{...f}),alert("Product updated successfully!"),r("/")}catch(f){alert(f.message)}};return Re.jsxs("form",{onSubmit:l,children:[Re.jsx("input",{type:"text",name:"ProductName",placeholder:"Product Name",value:t.ProductName,onChange:o}),Re.jsx("input",{type:"text",name:"ProductDesc",placeholder:"Product Description",value:t.ProductDesc,onChange:o}),Re.jsx("input",{type:"number",name:"ProductPrice",placeholder:"Product Price",value:t.ProductPrice,onChange:o}),Re.jsx("button",{type:"submit",children:"Edit Product"})]})}const iN=()=>Re.jsx(Re.Fragment,{children:Re.jsx(II,{children:Re.jsxs("div",{children:[Re.jsx(VI,{}),Re.jsxs(ZT,{children:[Re.jsx(xu,{path:"/",element:Re.jsx(Y1,{})}),Re.jsx(xu,{path:"/create",element:Re.jsx(nN,{})}),Re.jsx(xu,{path:"/edit/:id",element:Re.jsx(rN,{})})]})]})})});lT.createRoot(document.getElementById("root")).render(Re.jsx(q.StrictMode,{children:Re.jsx(iN,{})}));
