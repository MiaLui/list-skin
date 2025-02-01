(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function C0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yt={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),A0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),k0=Symbol.for("react.memo"),z0=Symbol.for("react.lazy"),Zf=Symbol.iterator;function O0(n){return n===null||typeof n!="object"?null:(n=Zf&&n[Zf]||n["@@iterator"],typeof n=="function"?n:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Np={};function xs(n,e,t){this.props=n,this.context=e,this.refs=Np,this.updater=t||Dp}xs.prototype.isReactComponent={};xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Fp(){}Fp.prototype=xs.prototype;function Wc(n,e,t){this.props=n,this.context=e,this.refs=Np,this.updater=t||Dp}var jc=Wc.prototype=new Fp;jc.constructor=Wc;Ip(jc,xs.prototype);jc.isPureReactComponent=!0;var Qf=Array.isArray,kp=Object.prototype.hasOwnProperty,Xc={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Op(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kp.call(e,i)&&!zp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wo,type:n,key:s,ref:o,props:r,_owner:Xc.current}}function U0(n,e){return{$$typeof:wo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function qc(n){return typeof n=="object"&&n!==null&&n.$$typeof===wo}function B0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Kf=/\/+/g;function Dl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?B0(""+n.key):e.toString(36)}function ya(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case wo:case A0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Dl(o,0):i,Qf(r)?(t="",n!=null&&(t=n.replace(Kf,"$&/")+"/"),ya(r,e,t,"",function(u){return u})):r!=null&&(qc(r)&&(r=U0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Dl(s,a);o+=ya(s,e,t,l,r)}else if(l=O0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Dl(s,a++),o+=ya(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ro(n,e,t){if(n==null)return n;var i=[],r=0;return ya(n,i,"","",function(s){return e.call(t,s,r++)}),i}function V0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Nt={current:null},Sa={transition:null},G0={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Xc};Ae.Children={map:Ro,forEach:function(n,e,t){Ro(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ro(n,function(){e++}),e},toArray:function(n){return Ro(n,function(e){return e})||[]},only:function(n){if(!qc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ae.Component=xs;Ae.Fragment=L0;Ae.Profiler=R0;Ae.PureComponent=Wc;Ae.StrictMode=P0;Ae.Suspense=F0;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0;Ae.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ip({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)kp.call(e,l)&&!zp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:wo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(n){return n={$$typeof:I0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:D0,_context:n},n.Consumer=n};Ae.createElement=Op;Ae.createFactory=function(n){var e=Op.bind(null,n);return e.type=n,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(n){return{$$typeof:N0,render:n}};Ae.isValidElement=qc;Ae.lazy=function(n){return{$$typeof:z0,_payload:{_status:-1,_result:n},_init:V0}};Ae.memo=function(n,e){return{$$typeof:k0,type:n,compare:e===void 0?null:e}};Ae.startTransition=function(n){var e=Sa.transition;Sa.transition={};try{n()}finally{Sa.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(n,e){return Nt.current.useCallback(n,e)};Ae.useContext=function(n){return Nt.current.useContext(n)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(n){return Nt.current.useDeferredValue(n)};Ae.useEffect=function(n,e){return Nt.current.useEffect(n,e)};Ae.useId=function(){return Nt.current.useId()};Ae.useImperativeHandle=function(n,e,t){return Nt.current.useImperativeHandle(n,e,t)};Ae.useInsertionEffect=function(n,e){return Nt.current.useInsertionEffect(n,e)};Ae.useLayoutEffect=function(n,e){return Nt.current.useLayoutEffect(n,e)};Ae.useMemo=function(n,e){return Nt.current.useMemo(n,e)};Ae.useReducer=function(n,e,t){return Nt.current.useReducer(n,e,t)};Ae.useRef=function(n){return Nt.current.useRef(n)};Ae.useState=function(n){return Nt.current.useState(n)};Ae.useSyncExternalStore=function(n,e,t){return Nt.current.useSyncExternalStore(n,e,t)};Ae.useTransition=function(){return Nt.current.useTransition()};Ae.version="18.2.0";(function(n){n.exports=Ae})(Yt);const Up=C0(Yt.exports);var Bu={},Bp={exports:{}},Jt={},Vp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,I){var F=D.length;D.push(I);e:for(;0<F;){var X=F-1>>>1,j=D[X];if(0<r(j,I))D[X]=I,D[F]=j,F=X;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var I=D[0],F=D.pop();if(F!==I){D[0]=F;e:for(var X=0,j=D.length,Z=j>>>1;X<Z;){var ce=2*(X+1)-1,he=D[ce],G=ce+1,Ge=D[G];if(0>r(he,F))G<j&&0>r(Ge,he)?(D[X]=Ge,D[G]=F,X=G):(D[X]=he,D[ce]=F,X=ce);else if(G<j&&0>r(Ge,F))D[X]=Ge,D[G]=F,X=G;else break e}}return I}function r(D,I){var F=D.sortIndex-I.sortIndex;return F!==0?F:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=D)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function w(D){if(h=!1,x(D),!_)if(t(l)!==null)_=!0,V(S);else{var I=t(u);I!==null&&W(w,I.startTime-D)}}function S(D,I){_=!1,h&&(h=!1,m(y),y=-1),g=!0;var F=f;try{for(x(I),d=t(l);d!==null&&(!(d.expirationTime>I)||D&&!O());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var j=X(d.expirationTime<=I);I=n.unstable_now(),typeof j=="function"?d.callback=j:d===t(l)&&i(l),x(I)}else i(l);d=t(l)}if(d!==null)var Z=!0;else{var ce=t(u);ce!==null&&W(w,ce.startTime-I),Z=!1}return Z}finally{d=null,f=F,g=!1}}var C=!1,P=null,y=-1,A=5,N=-1;function O(){return!(n.unstable_now()-N<A)}function te(){if(P!==null){var D=n.unstable_now();N=D;var I=!0;try{I=P(!0,D)}finally{I?K():(C=!1,P=null)}}else C=!1}var K;if(typeof v=="function")K=function(){v(te)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=te,K=function(){Y.postMessage(null)}}else K=function(){p(te,0)};function V(D){P=D,C||(C=!0,K())}function W(D,I){y=p(function(){D(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||g||(_=!0,V(S))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var F=f;f=I;try{return D()}finally{f=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=f;f=D;try{return I()}finally{f=F}},n.unstable_scheduleCallback=function(D,I,F){var X=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=F+j,D={id:c++,callback:I,priorityLevel:D,startTime:F,expirationTime:j,sortIndex:-1},F>X?(D.sortIndex=F,e(u,D),t(l)===null&&D===t(u)&&(h?(m(y),y=-1):h=!0,W(w,F-X))):(D.sortIndex=j,e(l,D),_||g||(_=!0,V(S))),D},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(D){var I=f;return function(){var F=f;f=I;try{return D.apply(this,arguments)}finally{f=F}}}})(Gp);(function(n){n.exports=Gp})(Vp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=Yt.exports,Kt=Vp.exports;function Q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,io={};function hr(n,e){ls(n,e),ls(n+"Capture",e)}function ls(n,e){for(io[n]=e,n=0;n<e.length;n++)Wp.add(e[n])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,H0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},ed={};function W0(n){return Vu.call(ed,n)?!0:Vu.call(Jf,n)?!1:H0.test(n)?ed[n]=!0:(Jf[n]=!0,!1)}function j0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X0(n,e,t,i){if(e===null||typeof e>"u"||j0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new Ft(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new Ft(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new Ft(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new Ft(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new Ft(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new Ft(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new Ft(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new Ft(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new Ft(n,5,!1,n.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function $c(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Yc,$c);yt[e]=new Ft(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Yc,$c);yt[e]=new Ft(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Yc,$c);yt[e]=new Ft(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new Ft(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new Ft(n,1,!1,n.toLowerCase(),null,!0,!0)});function Zc(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X0(e,t,r,i)&&(t=null),i||r===null?W0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ai=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),qp=Symbol.for("react.offscreen"),td=Symbol.iterator;function bs(n){return n===null||typeof n!="object"?null:(n=td&&n[td]||n["@@iterator"],typeof n=="function"?n:null)}var $e=Object.assign,Il;function Gs(n){if(Il===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||""}return`
`+Il+n}var Nl=!1;function Fl(n,e){if(!n||Nl)return"";Nl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Gs(n):""}function q0(n){switch(n.tag){case 5:return Gs(n.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return n=Fl(n.type,!1),n;case 11:return n=Fl(n.type.render,!1),n;case 1:return n=Fl(n.type,!0),n;default:return""}}function ju(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Gr:return"Fragment";case Vr:return"Portal";case Gu:return"Profiler";case Qc:return"StrictMode";case Hu:return"Suspense";case Wu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Xp:return(n.displayName||"Context")+".Consumer";case jp:return(n._context.displayName||"Context")+".Provider";case Kc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jc:return e=n.displayName||null,e!==null?e:ju(n.type)||"Memo";case vi:e=n._payload,n=n._init;try{return ju(n(e))}catch{}}return null}function Y0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ni(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $0(n){var e=Yp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Io(n){n._valueTracker||(n._valueTracker=$0(n))}function $p(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Yp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Fa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xu(n,e){var t=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function nd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ni(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(n,e){e=e.checked,e!=null&&Zc(n,"checked",e,!1)}function qu(n,e){Zp(n,e);var t=Ni(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Yu(n,e.type,Ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function id(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Yu(n,e,t){(e!=="number"||Fa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Hs=Array.isArray;function es(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ni(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $u(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Q(92));if(Hs(t)){if(1<t.length)throw Error(Q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ni(t)}}function Qp(n,e){var t=Ni(e.value),i=Ni(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Kp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Kp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var No,Jp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(n){Z0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ys[e]=Ys[n]})});function em(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ys.hasOwnProperty(n)&&Ys[n]?(""+e).trim():e+"px"}function tm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=em(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Q0=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(n,e){if(e){if(Q0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Ku(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function ef(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ec=null,ts=null,ns=null;function od(n){if(n=bo(n)){if(typeof ec!="function")throw Error(Q(280));var e=n.stateNode;e&&(e=dl(e),ec(n.stateNode,n.type,e))}}function nm(n){ts?ns?ns.push(n):ns=[n]:ts=n}function im(){if(ts){var n=ts,e=ns;if(ns=ts=null,od(n),e)for(n=0;n<e.length;n++)od(e[n])}}function rm(n,e){return n(e)}function sm(){}var kl=!1;function om(n,e,t){if(kl)return n(e,t);kl=!0;try{return rm(n,e,t)}finally{kl=!1,(ts!==null||ns!==null)&&(sm(),im())}}function so(n,e){var t=n.stateNode;if(t===null)return null;var i=dl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Q(231,e,typeof t));return t}var tc=!1;if(ei)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{tc=!1}function K0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var $s=!1,ka=null,za=!1,nc=null,J0={onError:function(n){$s=!0,ka=n}};function ev(n,e,t,i,r,s,o,a,l){$s=!1,ka=null,K0.apply(J0,arguments)}function tv(n,e,t,i,r,s,o,a,l){if(ev.apply(this,arguments),$s){if($s){var u=ka;$s=!1,ka=null}else throw Error(Q(198));za||(za=!0,nc=u)}}function pr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function am(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ad(n){if(pr(n)!==n)throw Error(Q(188))}function nv(n){var e=n.alternate;if(!e){if(e=pr(n),e===null)throw Error(Q(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ad(r),n;if(s===i)return ad(r),e;s=s.sibling}throw Error(Q(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(t.alternate!==i)throw Error(Q(190))}if(t.tag!==3)throw Error(Q(188));return t.stateNode.current===t?n:e}function lm(n){return n=nv(n),n!==null?um(n):null}function um(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=um(n);if(e!==null)return e;n=n.sibling}return null}var cm=Kt.unstable_scheduleCallback,ld=Kt.unstable_cancelCallback,iv=Kt.unstable_shouldYield,rv=Kt.unstable_requestPaint,tt=Kt.unstable_now,sv=Kt.unstable_getCurrentPriorityLevel,tf=Kt.unstable_ImmediatePriority,fm=Kt.unstable_UserBlockingPriority,Oa=Kt.unstable_NormalPriority,ov=Kt.unstable_LowPriority,dm=Kt.unstable_IdlePriority,ll=null,Un=null;function av(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(ll,n,void 0,(n.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:cv,lv=Math.log,uv=Math.LN2;function cv(n){return n>>>=0,n===0?32:31-(lv(n)/uv|0)|0}var Fo=64,ko=4194304;function Ws(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ua(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=t&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-wn(e),r=1<<t,i|=n[t],e&=~r;return i}function fv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=fv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ic(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function hm(){var n=Fo;return Fo<<=1,(Fo&4194240)===0&&(Fo=64),n}function zl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Eo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-wn(e),n[e]=t}function hv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-wn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function nf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-wn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ue=0;function pm(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mm,rf,gm,vm,_m,rc=!1,zo=[],Ei=null,Ti=null,bi=null,oo=new Map,ao=new Map,xi=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(n,e){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function As(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=bo(e),e!==null&&rf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function mv(n,e,t,i,r){switch(e){case"focusin":return Ei=As(Ei,n,e,t,i,r),!0;case"dragenter":return Ti=As(Ti,n,e,t,i,r),!0;case"mouseover":return bi=As(bi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,As(oo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,As(ao.get(s)||null,n,e,t,i,r)),!0}return!1}function xm(n){var e=$i(n.target);if(e!==null){var t=pr(e);if(t!==null){if(e=t.tag,e===13){if(e=am(t),e!==null){n.blockedOn=e,_m(n.priority,function(){gm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ma(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ju=i,t.target.dispatchEvent(i),Ju=null}else return e=bo(t),e!==null&&rf(e),n.blockedOn=t,!1;e.shift()}return!0}function cd(n,e,t){Ma(n)&&t.delete(e)}function gv(){rc=!1,Ei!==null&&Ma(Ei)&&(Ei=null),Ti!==null&&Ma(Ti)&&(Ti=null),bi!==null&&Ma(bi)&&(bi=null),oo.forEach(cd),ao.forEach(cd)}function Ls(n,e){n.blockedOn===e&&(n.blockedOn=null,rc||(rc=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,gv)))}function lo(n){function e(r){return Ls(r,n)}if(0<zo.length){Ls(zo[0],n);for(var t=1;t<zo.length;t++){var i=zo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ei!==null&&Ls(Ei,n),Ti!==null&&Ls(Ti,n),bi!==null&&Ls(bi,n),oo.forEach(e),ao.forEach(e),t=0;t<xi.length;t++)i=xi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xi.length&&(t=xi[0],t.blockedOn===null);)xm(t),t.blockedOn===null&&xi.shift()}var is=ai.ReactCurrentBatchConfig,Ba=!0;function vv(n,e,t,i){var r=Ue,s=is.transition;is.transition=null;try{Ue=1,sf(n,e,t,i)}finally{Ue=r,is.transition=s}}function _v(n,e,t,i){var r=Ue,s=is.transition;is.transition=null;try{Ue=4,sf(n,e,t,i)}finally{Ue=r,is.transition=s}}function sf(n,e,t,i){if(Ba){var r=sc(n,e,t,i);if(r===null)ql(n,e,i,Va,t),ud(n,i);else if(mv(r,n,e,t,i))i.stopPropagation();else if(ud(n,i),e&4&&-1<pv.indexOf(n)){for(;r!==null;){var s=bo(r);if(s!==null&&mm(s),s=sc(n,e,t,i),s===null&&ql(n,e,i,Va,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(n,e,i,null,t)}}var Va=null;function sc(n,e,t,i){if(Va=null,n=ef(i),n=$i(n),n!==null)if(e=pr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=am(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Va=n,null}function ym(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case tf:return 1;case fm:return 4;case Oa:case ov:return 16;case dm:return 536870912;default:return 16}default:return 16}}var Si=null,of=null,wa=null;function Sm(){if(wa)return wa;var n,e=of,t=e.length,i,r="value"in Si?Si.value:Si.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return wa=r.slice(n,1<i?1-i:void 0)}function Ea(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function fd(){return!1}function en(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:fd,this.isPropagationStopped=fd,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=en(ys),To=$e({},ys,{view:0,detail:0}),xv=en(To),Ol,Ul,Ps,ul=$e({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ps&&(Ps&&n.type==="mousemove"?(Ol=n.screenX-Ps.screenX,Ul=n.screenY-Ps.screenY):Ul=Ol=0,Ps=n),Ol)},movementY:function(n){return"movementY"in n?n.movementY:Ul}}),dd=en(ul),yv=$e({},ul,{dataTransfer:0}),Sv=en(yv),Mv=$e({},To,{relatedTarget:0}),Bl=en(Mv),wv=$e({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=en(wv),Tv=$e({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bv=en(Tv),Cv=$e({},ys,{data:0}),hd=en(Cv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Pv[n])?!!e[n]:!1}function lf(){return Rv}var Dv=$e({},To,{key:function(n){if(n.key){var e=Av[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Lv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iv=en(Dv),Nv=$e({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=en(Nv),Fv=$e({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),kv=en(Fv),zv=$e({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=en(zv),Uv=$e({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=en(Uv),Vv=[9,13,27,32],uf=ei&&"CompositionEvent"in window,Zs=null;ei&&"documentMode"in document&&(Zs=document.documentMode);var Gv=ei&&"TextEvent"in window&&!Zs,Mm=ei&&(!uf||Zs&&8<Zs&&11>=Zs),md=String.fromCharCode(32),gd=!1;function wm(n,e){switch(n){case"keyup":return Vv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hr=!1;function Hv(n,e){switch(n){case"compositionend":return Em(e);case"keypress":return e.which!==32?null:(gd=!0,md);case"textInput":return n=e.data,n===md&&gd?null:n;default:return null}}function Wv(n,e){if(Hr)return n==="compositionend"||!uf&&wm(n,e)?(n=Sm(),wa=of=Si=null,Hr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mm&&e.locale!=="ko"?null:e.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jv[n.type]:e==="textarea"}function Tm(n,e,t,i){nm(i),e=Ga(e,"onChange"),0<e.length&&(t=new af("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Qs=null,uo=null;function Xv(n){km(n,0)}function cl(n){var e=Xr(n);if($p(e))return n}function qv(n,e){if(n==="change")return e}var bm=!1;if(ei){var Vl;if(ei){var Gl="oninput"in document;if(!Gl){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Gl=typeof _d.oninput=="function"}Vl=Gl}else Vl=!1;bm=Vl&&(!document.documentMode||9<document.documentMode)}function xd(){Qs&&(Qs.detachEvent("onpropertychange",Cm),uo=Qs=null)}function Cm(n){if(n.propertyName==="value"&&cl(uo)){var e=[];Tm(e,uo,n,ef(n)),om(Xv,e)}}function Yv(n,e,t){n==="focusin"?(xd(),Qs=e,uo=t,Qs.attachEvent("onpropertychange",Cm)):n==="focusout"&&xd()}function $v(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cl(uo)}function Zv(n,e){if(n==="click")return cl(e)}function Qv(n,e){if(n==="input"||n==="change")return cl(e)}function Kv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var An=typeof Object.is=="function"?Object.is:Kv;function co(n,e){if(An(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Vu.call(e,r)||!An(n[r],e[r]))return!1}return!0}function yd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sd(n,e){var t=yd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yd(t)}}function Am(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Am(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var n=window,e=Fa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fa(n.document)}return e}function cf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Jv(n){var e=Lm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Am(t.ownerDocument.documentElement,t)){if(i!==null&&cf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sd(t,s);var o=Sd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var e_=ei&&"documentMode"in document&&11>=document.documentMode,Wr=null,oc=null,Ks=null,ac=!1;function Md(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ac||Wr==null||Wr!==Fa(i)||(i=Wr,"selectionStart"in i&&cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&co(Ks,i)||(Ks=i,i=Ga(oc,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Wr)))}function Uo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var jr={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Hl={},Pm={};ei&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function fl(n){if(Hl[n])return Hl[n];if(!jr[n])return n;var e=jr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Pm)return Hl[n]=e[t];return n}var Rm=fl("animationend"),Dm=fl("animationiteration"),Im=fl("animationstart"),Nm=fl("transitionend"),Fm=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(n,e){Fm.set(n,e),hr(e,[n])}for(var Wl=0;Wl<wd.length;Wl++){var jl=wd[Wl],t_=jl.toLowerCase(),n_=jl[0].toUpperCase()+jl.slice(1);ki(t_,"on"+n_)}ki(Rm,"onAnimationEnd");ki(Dm,"onAnimationIteration");ki(Im,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(Nm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i_=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Ed(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,tv(i,e,void 0,n),n.currentTarget=null}function km(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}}}if(za)throw n=nc,za=!1,nc=null,n}function He(n,e){var t=e[dc];t===void 0&&(t=e[dc]=new Set);var i=n+"__bubble";t.has(i)||(zm(e,n,2,!1),t.add(i))}function Xl(n,e,t){var i=0;e&&(i|=4),zm(t,n,i,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function fo(n){if(!n[Bo]){n[Bo]=!0,Wp.forEach(function(t){t!=="selectionchange"&&(i_.has(t)||Xl(t,!1,n),Xl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,Xl("selectionchange",!1,e))}}function zm(n,e,t,i){switch(ym(e)){case 1:var r=vv;break;case 4:r=_v;break;default:r=sf}t=r.bind(null,e,t,n),r=void 0,!tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ql(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}om(function(){var u=s,c=ef(t),d=[];e:{var f=Fm.get(n);if(f!==void 0){var g=af,_=n;switch(n){case"keypress":if(Ea(t)===0)break e;case"keydown":case"keyup":g=Iv;break;case"focusin":_="focus",g=Bl;break;case"focusout":_="blur",g=Bl;break;case"beforeblur":case"afterblur":g=Bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kv;break;case Rm:case Dm:case Im:g=Ev;break;case Nm:g=Ov;break;case"scroll":g=xv;break;case"wheel":g=Bv;break;case"copy":case"cut":case"paste":g=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pd}var h=(e&4)!==0,p=!h&&n==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=so(v,m),w!=null&&h.push(ho(v,w,x)))),p)break;v=v.return}0<h.length&&(f=new g(f,_,null,t,c),d.push({event:f,listeners:h}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",f&&t!==Ju&&(_=t.relatedTarget||t.fromElement)&&($i(_)||_[ti]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=t.relatedTarget||t.toElement,g=u,_=_?$i(_):null,_!==null&&(p=pr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(h=dd,w="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(h=pd,w="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:Xr(g),x=_==null?f:Xr(_),f=new h(w,v+"leave",g,t,c),f.target=p,f.relatedTarget=x,w=null,$i(c)===u&&(h=new h(m,v+"enter",_,t,c),h.target=x,h.relatedTarget=p,w=h),p=w,g&&_)t:{for(h=g,m=_,v=0,x=h;x;x=xr(x))v++;for(x=0,w=m;w;w=xr(w))x++;for(;0<v-x;)h=xr(h),v--;for(;0<x-v;)m=xr(m),x--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=xr(h),m=xr(m)}h=null}else h=null;g!==null&&Td(d,f,g,h,!1),_!==null&&p!==null&&Td(d,p,_,h,!0)}}e:{if(f=u?Xr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=qv;else if(vd(f))if(bm)S=Qv;else{S=$v;var C=Yv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Zv);if(S&&(S=S(n,u))){Tm(d,S,t,c);break e}C&&C(n,f,u),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Yu(f,"number",f.value)}switch(C=u?Xr(u):window,n){case"focusin":(vd(C)||C.contentEditable==="true")&&(Wr=C,oc=u,Ks=null);break;case"focusout":Ks=oc=Wr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Md(d,t,c);break;case"selectionchange":if(e_)break;case"keydown":case"keyup":Md(d,t,c)}var P;if(uf)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hr?wm(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Mm&&t.locale!=="ko"&&(Hr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hr&&(P=Sm()):(Si=c,of="value"in Si?Si.value:Si.textContent,Hr=!0)),C=Ga(u,y),0<C.length&&(y=new hd(y,n,null,t,c),d.push({event:y,listeners:C}),P?y.data=P:(P=Em(t),P!==null&&(y.data=P)))),(P=Gv?Hv(n,t):Wv(n,t))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(c=new hd("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=P))}km(d,e)})}function ho(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ga(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(n,t),s!=null&&i.unshift(ho(n,s,r)),s=so(n,e),s!=null&&i.push(ho(n,s,r))),n=n.return}return i}function xr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Td(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=so(t,s),l!=null&&o.unshift(ho(t,l,a))):r||(l=so(t,s),l!=null&&o.push(ho(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var r_=/\r\n?/g,s_=/\u0000|\uFFFD/g;function bd(n){return(typeof n=="string"?n:""+n).replace(r_,`
`).replace(s_,"")}function Vo(n,e,t){if(e=bd(e),bd(n)!==e&&t)throw Error(Q(425))}function Ha(){}var lc=null,uc=null;function cc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,o_=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,a_=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(n){return Cd.resolve(null).then(n).catch(l_)}:fc;function l_(n){setTimeout(function(){throw n})}function Yl(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lo(e)}function Ci(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ad(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ss,po="__reactProps$"+Ss,ti="__reactContainer$"+Ss,dc="__reactEvents$"+Ss,u_="__reactListeners$"+Ss,c_="__reactHandles$"+Ss;function $i(n){var e=n[kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ti]||t[kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ad(n);n!==null;){if(t=n[kn])return t;n=Ad(n)}return e}n=t,t=n.parentNode}return null}function bo(n){return n=n[kn]||n[ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Q(33))}function dl(n){return n[po]||null}var hc=[],qr=-1;function zi(n){return{current:n}}function je(n){0>qr||(n.current=hc[qr],hc[qr]=null,qr--)}function Ve(n,e){qr++,hc[qr]=n.current,n.current=e}var Fi={},bt=zi(Fi),Ut=zi(!1),rr=Fi;function us(n,e){var t=n.type.contextTypes;if(!t)return Fi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Bt(n){return n=n.childContextTypes,n!=null}function Wa(){je(Ut),je(bt)}function Ld(n,e,t){if(bt.current!==Fi)throw Error(Q(168));Ve(bt,e),Ve(Ut,t)}function Om(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,Y0(n)||"Unknown",r));return $e({},t,i)}function ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fi,rr=bt.current,Ve(bt,n),Ve(Ut,Ut.current),!0}function Pd(n,e,t){var i=n.stateNode;if(!i)throw Error(Q(169));t?(n=Om(n,e,rr),i.__reactInternalMemoizedMergedChildContext=n,je(Ut),je(bt),Ve(bt,n)):je(Ut),Ve(Ut,t)}var $n=null,hl=!1,$l=!1;function Um(n){$n===null?$n=[n]:$n.push(n)}function f_(n){hl=!0,Um(n)}function Oi(){if(!$l&&$n!==null){$l=!0;var n=0,e=Ue;try{var t=$n;for(Ue=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$n=null,hl=!1}catch(r){throw $n!==null&&($n=$n.slice(n+1)),cm(tf,Oi),r}finally{Ue=e,$l=!1}}return null}var Yr=[],$r=0,Xa=null,qa=0,on=[],an=0,sr=null,Zn=1,Qn="";function Wi(n,e){Yr[$r++]=qa,Yr[$r++]=Xa,Xa=n,qa=e}function Bm(n,e,t){on[an++]=Zn,on[an++]=Qn,on[an++]=sr,sr=n;var i=Zn;n=Qn;var r=32-wn(i)-1;i&=~(1<<r),t+=1;var s=32-wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zn=1<<32-wn(e)+r|t<<r|i,Qn=s+n}else Zn=1<<s|t<<r|i,Qn=n}function ff(n){n.return!==null&&(Wi(n,1),Bm(n,1,0))}function df(n){for(;n===Xa;)Xa=Yr[--$r],Yr[$r]=null,qa=Yr[--$r],Yr[$r]=null;for(;n===sr;)sr=on[--an],on[an]=null,Qn=on[--an],on[an]=null,Zn=on[--an],on[an]=null}var Qt=null,Zt=null,Xe=!1,Sn=null;function Vm(n,e){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Rd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qt=n,Zt=Ci(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qt=n,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=sr!==null?{id:Zn,overflow:Qn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qt=n,Zt=null,!0):!1;default:return!1}}function pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mc(n){if(Xe){var e=Zt;if(e){var t=e;if(!Rd(n,e)){if(pc(n))throw Error(Q(418));e=Ci(t.nextSibling);var i=Qt;e&&Rd(n,e)?Vm(i,t):(n.flags=n.flags&-4097|2,Xe=!1,Qt=n)}}else{if(pc(n))throw Error(Q(418));n.flags=n.flags&-4097|2,Xe=!1,Qt=n}}}function Dd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qt=n}function Go(n){if(n!==Qt)return!1;if(!Xe)return Dd(n),Xe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!cc(n.type,n.memoizedProps)),e&&(e=Zt)){if(pc(n))throw Gm(),Error(Q(418));for(;e;)Vm(n,e),e=Ci(e.nextSibling)}if(Dd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Zt=Ci(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Zt=null}}else Zt=Qt?Ci(n.stateNode.nextSibling):null;return!0}function Gm(){for(var n=Zt;n;)n=Ci(n.nextSibling)}function cs(){Zt=Qt=null,Xe=!1}function hf(n){Sn===null?Sn=[n]:Sn.push(n)}var d_=ai.ReactCurrentBatchConfig;function xn(n,e){if(n&&n.defaultProps){e=$e({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ya=zi(null),$a=null,Zr=null,pf=null;function mf(){pf=Zr=$a=null}function gf(n){var e=Ya.current;je(Ya),n._currentValue=e}function gc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function rs(n,e){$a=n,pf=Zr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ot=!0),n.firstContext=null)}function dn(n){var e=n._currentValue;if(pf!==n)if(n={context:n,memoizedValue:e,next:null},Zr===null){if($a===null)throw Error(Q(308));Zr=n,$a.dependencies={lanes:0,firstContext:n}}else Zr=Zr.next=n;return e}var Zi=null;function vf(n){Zi===null?Zi=[n]:Zi.push(n)}function Hm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,vf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ni(n,i)}function ni(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _i=!1;function _f(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Pe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ni(n,t)}return r=i.interleaved,r===null?(e.next=e,vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ni(n,t)}function Ta(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,nf(n,t)}}function Id(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Za(n,e,t,i){var r=n.updateQueue;_i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,h=a;switch(f=e,g=t,h.tag){case 1:if(_=h.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=$e({},d,f);break e;case 2:_i=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ar|=o,n.lanes=o,n.memoizedState=d}}function Nd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var jm=new Hp.Component().refs;function vc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:$e({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var pl={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Rt(),r=Pi(n),s=Kn(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(En(e,n,r,i),Ta(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Rt(),r=Pi(n),s=Kn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(En(e,n,r,i),Ta(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Rt(),i=Pi(n),r=Kn(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(n,r,i),e!==null&&(En(e,n,i,t),Ta(e,n,i))}};function Fd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(t,i)||!co(r,s):!0}function Xm(n,e,t){var i=!1,r=Fi,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(r=Bt(e)?rr:bt.current,i=e.contextTypes,s=(i=i!=null)?us(n,r):Fi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function kd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&pl.enqueueReplaceState(e,e.state,null)}function _c(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=jm,_f(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=dn(s):(s=Bt(e)?rr:bt.current,r.context=us(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pl.enqueueReplaceState(r,r.state,null),Za(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Q(309));var i=t.stateNode}if(!i)throw Error(Q(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===jm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Q(284));if(!t._owner)throw Error(Q(290,n))}return n}function Ho(n,e){throw n=Object.prototype.toString.call(e),Error(Q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function zd(n){var e=n._init;return e(n._payload)}function qm(n){function e(m,v){if(n){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Ri(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,n?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,w){return v===null||v.tag!==6?(v=nu(x,m.mode,w),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,w){var S=x.type;return S===Gr?c(m,v,x.props.children,w,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vi&&zd(S)===v.type)?(w=r(v,x.props),w.ref=Rs(m,v,x),w.return=m,w):(w=Ra(x.type,x.key,x.props,null,m.mode,w),w.ref=Rs(m,v,x),w.return=m,w)}function u(m,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=iu(x,m.mode,w),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,w,S){return v===null||v.tag!==7?(v=tr(x,m.mode,w,S),v.return=m,v):(v=r(v,x),v.return=m,v)}function d(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nu(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Do:return x=Ra(v.type,v.key,v.props,null,m.mode,x),x.ref=Rs(m,null,v),x.return=m,x;case Vr:return v=iu(v,m.mode,x),v.return=m,v;case vi:var w=v._init;return d(m,w(v._payload),x)}if(Hs(v)||bs(v))return v=tr(v,m.mode,x,null),v.return=m,v;Ho(m,v)}return null}function f(m,v,x,w){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:return x.key===S?l(m,v,x,w):null;case Vr:return x.key===S?u(m,v,x,w):null;case vi:return S=x._init,f(m,v,S(x._payload),w)}if(Hs(x)||bs(x))return S!==null?null:c(m,v,x,w,null);Ho(m,x)}return null}function g(m,v,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(v,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return m=m.get(w.key===null?x:w.key)||null,l(v,m,w,S);case Vr:return m=m.get(w.key===null?x:w.key)||null,u(v,m,w,S);case vi:var C=w._init;return g(m,v,x,C(w._payload),S)}if(Hs(w)||bs(w))return m=m.get(x)||null,c(v,m,w,S,null);Ho(v,w)}return null}function _(m,v,x,w){for(var S=null,C=null,P=v,y=v=0,A=null;P!==null&&y<x.length;y++){P.index>y?(A=P,P=null):A=P.sibling;var N=f(m,P,x[y],w);if(N===null){P===null&&(P=A);break}n&&P&&N.alternate===null&&e(m,P),v=s(N,v,y),C===null?S=N:C.sibling=N,C=N,P=A}if(y===x.length)return t(m,P),Xe&&Wi(m,y),S;if(P===null){for(;y<x.length;y++)P=d(m,x[y],w),P!==null&&(v=s(P,v,y),C===null?S=P:C.sibling=P,C=P);return Xe&&Wi(m,y),S}for(P=i(m,P);y<x.length;y++)A=g(P,m,y,x[y],w),A!==null&&(n&&A.alternate!==null&&P.delete(A.key===null?y:A.key),v=s(A,v,y),C===null?S=A:C.sibling=A,C=A);return n&&P.forEach(function(O){return e(m,O)}),Xe&&Wi(m,y),S}function h(m,v,x,w){var S=bs(x);if(typeof S!="function")throw Error(Q(150));if(x=S.call(x),x==null)throw Error(Q(151));for(var C=S=null,P=v,y=v=0,A=null,N=x.next();P!==null&&!N.done;y++,N=x.next()){P.index>y?(A=P,P=null):A=P.sibling;var O=f(m,P,N.value,w);if(O===null){P===null&&(P=A);break}n&&P&&O.alternate===null&&e(m,P),v=s(O,v,y),C===null?S=O:C.sibling=O,C=O,P=A}if(N.done)return t(m,P),Xe&&Wi(m,y),S;if(P===null){for(;!N.done;y++,N=x.next())N=d(m,N.value,w),N!==null&&(v=s(N,v,y),C===null?S=N:C.sibling=N,C=N);return Xe&&Wi(m,y),S}for(P=i(m,P);!N.done;y++,N=x.next())N=g(P,m,y,N.value,w),N!==null&&(n&&N.alternate!==null&&P.delete(N.key===null?y:N.key),v=s(N,v,y),C===null?S=N:C.sibling=N,C=N);return n&&P.forEach(function(te){return e(m,te)}),Xe&&Wi(m,y),S}function p(m,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Gr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:e:{for(var S=x.key,C=v;C!==null;){if(C.key===S){if(S=x.type,S===Gr){if(C.tag===7){t(m,C.sibling),v=r(C,x.props.children),v.return=m,m=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vi&&zd(S)===C.type){t(m,C.sibling),v=r(C,x.props),v.ref=Rs(m,C,x),v.return=m,m=v;break e}t(m,C);break}else e(m,C);C=C.sibling}x.type===Gr?(v=tr(x.props.children,m.mode,w,x.key),v.return=m,m=v):(w=Ra(x.type,x.key,x.props,null,m.mode,w),w.ref=Rs(m,v,x),w.return=m,m=w)}return o(m);case Vr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=iu(x,m.mode,w),v.return=m,m=v}return o(m);case vi:return C=x._init,p(m,v,C(x._payload),w)}if(Hs(x))return _(m,v,x,w);if(bs(x))return h(m,v,x,w);Ho(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,x),v.return=m,m=v):(t(m,v),v=nu(x,m.mode,w),v.return=m,m=v),o(m)):t(m,v)}return p}var fs=qm(!0),Ym=qm(!1),Co={},Bn=zi(Co),mo=zi(Co),go=zi(Co);function Qi(n){if(n===Co)throw Error(Q(174));return n}function xf(n,e){switch(Ve(go,e),Ve(mo,n),Ve(Bn,Co),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Zu(e,n)}je(Bn),Ve(Bn,e)}function ds(){je(Bn),je(mo),je(go)}function $m(n){Qi(go.current);var e=Qi(Bn.current),t=Zu(e,n.type);e!==t&&(Ve(mo,n),Ve(Bn,t))}function yf(n){mo.current===n&&(je(Bn),je(mo))}var qe=zi(0);function Qa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function Sf(){for(var n=0;n<Zl.length;n++)Zl[n]._workInProgressVersionPrimary=null;Zl.length=0}var ba=ai.ReactCurrentDispatcher,Ql=ai.ReactCurrentBatchConfig,or=0,Ye=null,ut=null,ht=null,Ka=!1,Js=!1,vo=0,h_=0;function St(){throw Error(Q(321))}function Mf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!An(n[t],e[t]))return!1;return!0}function wf(n,e,t,i,r,s){if(or=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=n===null||n.memoizedState===null?v_:__,n=t(i,r),Js){s=0;do{if(Js=!1,vo=0,25<=s)throw Error(Q(301));s+=1,ht=ut=null,e.updateQueue=null,ba.current=x_,n=t(i,r)}while(Js)}if(ba.current=Ja,e=ut!==null&&ut.next!==null,or=0,ht=ut=Ye=null,Ka=!1,e)throw Error(Q(300));return n}function Ef(){var n=vo!==0;return vo=0,n}function Nn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ye.memoizedState=ht=n:ht=ht.next=n,ht}function hn(){if(ut===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ut.next;var e=ht===null?Ye.memoizedState:ht.next;if(e!==null)ht=e,ut=n;else{if(n===null)throw Error(Q(310));ut=n,n={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ht===null?Ye.memoizedState=ht=n:ht=ht.next=n}return ht}function _o(n,e){return typeof e=="function"?e(n):e}function Kl(n){var e=hn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ye.lanes|=c,ar|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,An(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ye.lanes|=s,ar|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Jl(n){var e=hn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);An(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Zm(){}function Qm(n,e){var t=Ye,i=hn(),r=e(),s=!An(i.memoizedState,r);if(s&&(i.memoizedState=r,Ot=!0),i=i.queue,Tf(eg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(t.flags|=2048,xo(9,Jm.bind(null,t,i,r,e),void 0,null),pt===null)throw Error(Q(349));(or&30)!==0||Km(t,e,r)}return r}function Km(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Jm(n,e,t,i){e.value=t,e.getSnapshot=i,tg(e)&&ng(n)}function eg(n,e,t){return t(function(){tg(e)&&ng(n)})}function tg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!An(n,t)}catch{return!0}}function ng(n){var e=ni(n,1);e!==null&&En(e,n,1,-1)}function Od(n){var e=Nn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:n},e.queue=n,n=n.dispatch=g_.bind(null,Ye,n),[e.memoizedState,n]}function xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ig(){return hn().memoizedState}function Ca(n,e,t,i){var r=Nn();Ye.flags|=n,r.memoizedState=xo(1|e,t,void 0,i===void 0?null:i)}function ml(n,e,t,i){var r=hn();i=i===void 0?null:i;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,i!==null&&Mf(i,o.deps)){r.memoizedState=xo(e,t,s,i);return}}Ye.flags|=n,r.memoizedState=xo(1|e,t,s,i)}function Ud(n,e){return Ca(8390656,8,n,e)}function Tf(n,e){return ml(2048,8,n,e)}function rg(n,e){return ml(4,2,n,e)}function sg(n,e){return ml(4,4,n,e)}function og(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ag(n,e,t){return t=t!=null?t.concat([n]):null,ml(4,4,og.bind(null,e,n),t)}function bf(){}function lg(n,e){var t=hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ug(n,e){var t=hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function cg(n,e,t){return(or&21)===0?(n.baseState&&(n.baseState=!1,Ot=!0),n.memoizedState=t):(An(t,e)||(t=hm(),Ye.lanes|=t,ar|=t,n.baseState=!0),e)}function p_(n,e){var t=Ue;Ue=t!==0&&4>t?t:4,n(!0);var i=Ql.transition;Ql.transition={};try{n(!1),e()}finally{Ue=t,Ql.transition=i}}function fg(){return hn().memoizedState}function m_(n,e,t){var i=Pi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},dg(n))hg(e,t);else if(t=Hm(n,e,t,i),t!==null){var r=Rt();En(t,n,i,r),pg(t,e,i)}}function g_(n,e,t){var i=Pi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(dg(n))hg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,An(a,o)){var l=e.interleaved;l===null?(r.next=r,vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Hm(n,e,r,i),t!==null&&(r=Rt(),En(t,n,i,r),pg(t,e,i))}}function dg(n){var e=n.alternate;return n===Ye||e!==null&&e===Ye}function hg(n,e){Js=Ka=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function pg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,nf(n,t)}}var Ja={readContext:dn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},v_={readContext:dn,useCallback:function(n,e){return Nn().memoizedState=[n,e===void 0?null:e],n},useContext:dn,useEffect:Ud,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ca(4194308,4,og.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ca(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ca(4,2,n,e)},useMemo:function(n,e){var t=Nn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Nn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=m_.bind(null,Ye,n),[i.memoizedState,n]},useRef:function(n){var e=Nn();return n={current:n},e.memoizedState=n},useState:Od,useDebugValue:bf,useDeferredValue:function(n){return Nn().memoizedState=n},useTransition:function(){var n=Od(!1),e=n[0];return n=p_.bind(null,n[1]),Nn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ye,r=Nn();if(Xe){if(t===void 0)throw Error(Q(407));t=t()}else{if(t=e(),pt===null)throw Error(Q(349));(or&30)!==0||Km(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ud(eg.bind(null,i,s,n),[n]),i.flags|=2048,xo(9,Jm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Nn(),e=pt.identifierPrefix;if(Xe){var t=Qn,i=Zn;t=(i&~(1<<32-wn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=h_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},__={readContext:dn,useCallback:lg,useContext:dn,useEffect:Tf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:Kl,useRef:ig,useState:function(){return Kl(_o)},useDebugValue:bf,useDeferredValue:function(n){var e=hn();return cg(e,ut.memoizedState,n)},useTransition:function(){var n=Kl(_o)[0],e=hn().memoizedState;return[n,e]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:fg,unstable_isNewReconciler:!1},x_={readContext:dn,useCallback:lg,useContext:dn,useEffect:Tf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:Jl,useRef:ig,useState:function(){return Jl(_o)},useDebugValue:bf,useDeferredValue:function(n){var e=hn();return ut===null?e.memoizedState=n:cg(e,ut.memoizedState,n)},useTransition:function(){var n=Jl(_o)[0],e=hn().memoizedState;return[n,e]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:fg,unstable_isNewReconciler:!1};function hs(n,e){try{var t="",i=e;do t+=q0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function eu(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function xc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var y_=typeof WeakMap=="function"?WeakMap:Map;function mg(n,e,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){tl||(tl=!0,Lc=i),xc(n,e)},t}function gg(n,e,t){t=Kn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xc(n,e),typeof i!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Bd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new y_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=N_.bind(null,n,e,t),e.then(n,n))}function Vd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Gd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Kn(-1,1),e.tag=2,Ai(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var S_=ai.ReactCurrentOwner,Ot=!1;function Pt(n,e,t,i){e.child=n===null?Ym(e,null,t,i):fs(e,n.child,t,i)}function Hd(n,e,t,i,r){t=t.render;var s=e.ref;return rs(e,r),i=wf(n,e,t,i,s,r),t=Ef(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(Xe&&t&&ff(e),e.flags|=1,Pt(n,e,i,r),e.child)}function Wd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,vg(n,e,s,i,r)):(n=Ra(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:co,t(o,i)&&n.ref===e.ref)return ii(n,e,r)}return e.flags|=1,n=Ri(s,i),n.ref=e.ref,n.return=e,e.child=n}function vg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(co(s,i)&&n.ref===e.ref)if(Ot=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ot=!0);else return e.lanes=n.lanes,ii(n,e,r)}return yc(n,e,t,i,r)}function _g(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Kr,qt),qt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(Kr,qt),qt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(Kr,qt),qt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(Kr,qt),qt|=i;return Pt(n,e,r,t),e.child}function xg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yc(n,e,t,i,r){var s=Bt(t)?rr:bt.current;return s=us(e,s),rs(e,r),t=wf(n,e,t,i,s,r),i=Ef(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(Xe&&i&&ff(e),e.flags|=1,Pt(n,e,t,r),e.child)}function jd(n,e,t,i,r){if(Bt(t)){var s=!0;ja(e)}else s=!1;if(rs(e,r),e.stateNode===null)Aa(n,e),Xm(e,t,i),_c(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Bt(t)?rr:bt.current,u=us(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&kd(e,o,i,u),_i=!1;var f=e.memoizedState;o.state=f,Za(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Ut.current||_i?(typeof c=="function"&&(vc(e,t,c,i),l=e.memoizedState),(a=_i||Fd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Bt(t)?rr:bt.current,l=us(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&kd(e,o,i,l),_i=!1,f=e.memoizedState,o.state=f,Za(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Ut.current||_i?(typeof g=="function"&&(vc(e,t,g,i),_=e.memoizedState),(u=_i||Fd(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Sc(n,e,t,i,s,r)}function Sc(n,e,t,i,r,s){xg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pd(e,t,!1),ii(n,e,s);i=e.stateNode,S_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=fs(e,n.child,null,s),e.child=fs(e,null,a,s)):Pt(n,e,a,s),e.memoizedState=i.state,r&&Pd(e,t,!0),e.child}function yg(n){var e=n.stateNode;e.pendingContext?Ld(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(n,e.context,!1),xf(n,e.containerInfo)}function Xd(n,e,t,i,r){return cs(),hf(r),e.flags|=256,Pt(n,e,t,i),e.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sg(n,e,t){var i=e.pendingProps,r=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve(qe,r&1),n===null)return mc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_l(o,i,0,null),n=tr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=wc(t),e.memoizedState=Mc,n):Cf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return M_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ri(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ri(a,s):(s=tr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?wc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Mc,i}return s=n.child,n=s.sibling,i=Ri(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Cf(n,e){return e=_l({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Wo(n,e,t,i){return i!==null&&hf(i),fs(e,n.child,null,t),n=Cf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function M_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=eu(Error(Q(422))),Wo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_l({mode:"visible",children:i.children},r,0,null),s=tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&fs(e,n.child,null,o),e.child.memoizedState=wc(o),e.memoizedState=Mc,s);if((e.mode&1)===0)return Wo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=eu(s,i,void 0),Wo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ot||a){if(i=pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ni(n,r),En(i,n,r,-1))}return If(),i=eu(Error(Q(421))),Wo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=F_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Zt=Ci(r.nextSibling),Qt=e,Xe=!0,Sn=null,n!==null&&(on[an++]=Zn,on[an++]=Qn,on[an++]=sr,Zn=n.id,Qn=n.overflow,sr=e),e=Cf(e,i.children),e.flags|=4096,e)}function qd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),gc(n.return,e,t)}function tu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Mg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Pt(n,e,i.children,t),i=qe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qd(n,t,e);else if(n.tag===19)qd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve(qe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Qa(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),tu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Qa(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}tu(e,!0,t,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ar|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Q(153));if(e.child!==null){for(n=e.child,t=Ri(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ri(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function w_(n,e,t){switch(e.tag){case 3:yg(e),cs();break;case 5:$m(e);break;case 1:Bt(e.type)&&ja(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Ya,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(qe,qe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Sg(n,e,t):(Ve(qe,qe.current&1),n=ii(n,e,t),n!==null?n.sibling:null);Ve(qe,qe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Mg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(qe,qe.current),i)break;return null;case 22:case 23:return e.lanes=0,_g(n,e,t)}return ii(n,e,t)}var wg,Ec,Eg,Tg;wg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ec=function(){};Eg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qi(Bn.current);var s=null;switch(t){case"input":r=Xu(n,r),i=Xu(n,i),s=[];break;case"select":r=$e({},r,{value:void 0}),i=$e({},i,{value:void 0}),s=[];break;case"textarea":r=$u(n,r),i=$u(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ha)}Qu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&He("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ds(n,e){if(!Xe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function E_(n,e,t){var i=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Bt(e.type)&&Wa(),Mt(e),null;case 3:return i=e.stateNode,ds(),je(Ut),je(bt),Sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Go(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Sn!==null&&(Dc(Sn),Sn=null))),Ec(n,e),Mt(e),null;case 5:yf(e);var r=Qi(go.current);if(t=e.type,n!==null&&e.stateNode!=null)Eg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Mt(e),null}if(n=Qi(Bn.current),Go(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[kn]=e,i[po]=s,n=(e.mode&1)!==0,t){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(r=0;r<js.length;r++)He(js[r],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":nd(i,s),He("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},He("invalid",i);break;case"textarea":rd(i,s),He("invalid",i)}Qu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,n),r=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",i)}switch(t){case"input":Io(i),id(i,s,!0);break;case"textarea":Io(i),sd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ha)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Kp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[kn]=e,n[po]=i,wg(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ku(t,i),t){case"dialog":He("cancel",n),He("close",n),r=i;break;case"iframe":case"object":case"embed":He("load",n),r=i;break;case"video":case"audio":for(r=0;r<js.length;r++)He(js[r],n);r=i;break;case"source":He("error",n),r=i;break;case"img":case"image":case"link":He("error",n),He("load",n),r=i;break;case"details":He("toggle",n),r=i;break;case"input":nd(n,i),r=Xu(n,i),He("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=$e({},i,{value:void 0}),He("invalid",n);break;case"textarea":rd(n,i),r=$u(n,i),He("invalid",n);break;default:r=i}Qu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ro(n,l):typeof l=="number"&&ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&He("scroll",n):l!=null&&Zc(n,s,l,o))}switch(t){case"input":Io(n),id(n,i,!1);break;case"textarea":Io(n),sd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ni(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?es(n,!!i.multiple,s,!1):i.defaultValue!=null&&es(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ha)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(n&&e.stateNode!=null)Tg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=Qi(go.current),Qi(Bn.current),Go(e)){if(i=e.stateNode,t=e.memoizedProps,i[kn]=e,(s=i.nodeValue!==t)&&(n=Qt,n!==null))switch(n.tag){case 3:Vo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[kn]=e,e.stateNode=i}return Mt(e),null;case 13:if(je(qe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&Zt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Gm(),cs(),e.flags|=98560,s=!1;else if(s=Go(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[kn]=e}else cs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else Sn!==null&&(Dc(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(qe.current&1)!==0?ct===0&&(ct=3):If())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return ds(),Ec(n,e),n===null&&fo(e.stateNode.containerInfo),Mt(e),null;case 10:return gf(e.type._context),Mt(e),null;case 17:return Bt(e.type)&&Wa(),Mt(e),null;case 19:if(je(qe),s=e.memoizedState,s===null)return Mt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ds(s,!1);else{if(ct!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Qa(n),o!==null){for(e.flags|=128,Ds(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&tt()>ps&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304)}else{if(!i)if(n=Qa(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xe)return Mt(e),null}else 2*tt()-s.renderingStartTime>ps&&t!==1073741824&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,t=qe.current,Ve(qe,i?t&1|2:t&1),e):(Mt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(qt&1073741824)!==0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function T_(n,e){switch(df(e),e.tag){case 1:return Bt(e.type)&&Wa(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ds(),je(Ut),je(bt),Sf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return yf(e),null;case 13:if(je(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));cs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return je(qe),null;case 4:return ds(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var jo=!1,Tt=!1,b_=typeof WeakSet=="function"?WeakSet:Set,de=null;function Qr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ke(n,e,i)}else t.current=null}function Tc(n,e,t){try{t()}catch(i){Ke(n,e,i)}}var Yd=!1;function C_(n,e){if(lc=Ba,n=Lm(),cf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(uc={focusedElem:n,selectionRange:t},Ba=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:xn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(w){Ke(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return _=Yd,Yd=!1,_}function eo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tc(e,t,s)}r=r.next}while(r!==i)}}function gl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function bc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function bg(n){var e=n.alternate;e!==null&&(n.alternate=null,bg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[kn],delete e[po],delete e[dc],delete e[u_],delete e[c_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cg(n){return n.tag===5||n.tag===3||n.tag===4}function $d(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ha));else if(i!==4&&(n=n.child,n!==null))for(Cc(n,e,t),n=n.sibling;n!==null;)Cc(n,e,t),n=n.sibling}function Ac(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ac(n,e,t),n=n.sibling;n!==null;)Ac(n,e,t),n=n.sibling}var vt=null,yn=!1;function ui(n,e,t){for(t=t.child;t!==null;)Ag(n,e,t),t=t.sibling}function Ag(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(ll,t)}catch{}switch(t.tag){case 5:Tt||Qr(t,e);case 6:var i=vt,r=yn;vt=null,ui(n,e,t),vt=i,yn=r,vt!==null&&(yn?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(yn?(n=vt,t=t.stateNode,n.nodeType===8?Yl(n.parentNode,t):n.nodeType===1&&Yl(n,t),lo(n)):Yl(vt,t.stateNode));break;case 4:i=vt,r=yn,vt=t.stateNode.containerInfo,yn=!0,ui(n,e,t),vt=i,yn=r;break;case 0:case 11:case 14:case 15:if(!Tt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Tc(t,e,o),r=r.next}while(r!==i)}ui(n,e,t);break;case 1:if(!Tt&&(Qr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ke(t,e,a)}ui(n,e,t);break;case 21:ui(n,e,t);break;case 22:t.mode&1?(Tt=(i=Tt)||t.memoizedState!==null,ui(n,e,t),Tt=i):ui(n,e,t);break;default:ui(n,e,t)}}function Zd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new b_),e.forEach(function(i){var r=k_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function pn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,yn=!1;break e;case 3:vt=a.stateNode.containerInfo,yn=!0;break e;case 4:vt=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(vt===null)throw Error(Q(160));Ag(s,o,r),vt=null,yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ke(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,n),e=e.sibling}function Lg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pn(e,n),In(n),i&4){try{eo(3,n,n.return),gl(3,n)}catch(h){Ke(n,n.return,h)}try{eo(5,n,n.return)}catch(h){Ke(n,n.return,h)}}break;case 1:pn(e,n),In(n),i&512&&t!==null&&Qr(t,t.return);break;case 5:if(pn(e,n),In(n),i&512&&t!==null&&Qr(t,t.return),n.flags&32){var r=n.stateNode;try{ro(r,"")}catch(h){Ke(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zp(r,s),Ku(a,o);var u=Ku(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?tm(r,d):c==="dangerouslySetInnerHTML"?Jp(r,d):c==="children"?ro(r,d):Zc(r,c,d,u)}switch(a){case"input":qu(r,s);break;case"textarea":Qp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?es(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(h){Ke(n,n.return,h)}}break;case 6:if(pn(e,n),In(n),i&4){if(n.stateNode===null)throw Error(Q(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){Ke(n,n.return,h)}}break;case 3:if(pn(e,n),In(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(h){Ke(n,n.return,h)}break;case 4:pn(e,n),In(n);break;case 13:pn(e,n),In(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=tt())),i&4&&Zd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Tt=(u=Tt)||c,pn(e,n),Tt=u):pn(e,n),In(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(de=n,c=n.child;c!==null;){for(d=de=c;de!==null;){switch(f=de,g=f.child,f.tag){case 0:case 11:case 14:case 15:eo(4,f,f.return);break;case 1:Qr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){Ke(i,t,h)}}break;case 5:Qr(f,f.return);break;case 22:if(f.memoizedState!==null){Kd(d);continue}}g!==null?(g.return=f,de=g):Kd(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=em("display",o))}catch(h){Ke(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){Ke(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pn(e,n),In(n),i&4&&Zd(n);break;case 21:break;default:pn(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Cg(t)){var i=t;break e}t=t.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=$d(n);Ac(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$d(n);Cc(n,a,o);break;default:throw Error(Q(161))}}catch(l){Ke(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function A_(n,e,t){de=n,Pg(n)}function Pg(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=jo;var u=Tt;if(jo=o,(Tt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Jd(r):l!==null?(l.return=o,de=l):Jd(r);for(;s!==null;)de=s,Pg(s),s=s.sibling;de=r,jo=a,Tt=u}Qd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):Qd(n)}}function Qd(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Tt||gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:xn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&lo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Tt||e.flags&512&&bc(e)}catch(f){Ke(e,e.return,f)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Kd(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Jd(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gl(4,e)}catch(l){Ke(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ke(e,r,l)}}var s=e.return;try{bc(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{bc(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var L_=Math.ceil,el=ai.ReactCurrentDispatcher,Af=ai.ReactCurrentOwner,fn=ai.ReactCurrentBatchConfig,Pe=0,pt=null,st=null,xt=0,qt=0,Kr=zi(0),ct=0,yo=null,ar=0,vl=0,Lf=0,to=null,kt=null,Pf=0,ps=1/0,qn=null,tl=!1,Lc=null,Li=null,Xo=!1,Mi=null,nl=0,no=0,Pc=null,La=-1,Pa=0;function Rt(){return(Pe&6)!==0?tt():La!==-1?La:La=tt()}function Pi(n){return(n.mode&1)===0?1:(Pe&2)!==0&&xt!==0?xt&-xt:d_.transition!==null?(Pa===0&&(Pa=hm()),Pa):(n=Ue,n!==0||(n=window.event,n=n===void 0?16:ym(n.type)),n)}function En(n,e,t,i){if(50<no)throw no=0,Pc=null,Error(Q(185));Eo(n,t,i),((Pe&2)===0||n!==pt)&&(n===pt&&((Pe&2)===0&&(vl|=t),ct===4&&yi(n,xt)),Vt(n,i),t===1&&Pe===0&&(e.mode&1)===0&&(ps=tt()+500,hl&&Oi()))}function Vt(n,e){var t=n.callbackNode;dv(n,e);var i=Ua(n,n===pt?xt:0);if(i===0)t!==null&&ld(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ld(t),e===1)n.tag===0?f_(eh.bind(null,n)):Um(eh.bind(null,n)),a_(function(){(Pe&6)===0&&Oi()}),t=null;else{switch(pm(i)){case 1:t=tf;break;case 4:t=fm;break;case 16:t=Oa;break;case 536870912:t=dm;break;default:t=Oa}t=Og(t,Rg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Rg(n,e){if(La=-1,Pa=0,(Pe&6)!==0)throw Error(Q(327));var t=n.callbackNode;if(ss()&&n.callbackNode!==t)return null;var i=Ua(n,n===pt?xt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=il(n,i);else{e=i;var r=Pe;Pe|=2;var s=Ig();(pt!==n||xt!==e)&&(qn=null,ps=tt()+500,er(n,e));do try{D_();break}catch(a){Dg(n,a)}while(1);mf(),el.current=s,Pe=r,st!==null?e=0:(pt=null,xt=0,e=ct)}if(e!==0){if(e===2&&(r=ic(n),r!==0&&(i=r,e=Rc(n,r))),e===1)throw t=yo,er(n,0),yi(n,i),Vt(n,tt()),t;if(e===6)yi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!P_(r)&&(e=il(n,i),e===2&&(s=ic(n),s!==0&&(i=s,e=Rc(n,s))),e===1))throw t=yo,er(n,0),yi(n,i),Vt(n,tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:ji(n,kt,qn);break;case 3:if(yi(n,i),(i&130023424)===i&&(e=Pf+500-tt(),10<e)){if(Ua(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Rt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=fc(ji.bind(null,n,kt,qn),e);break}ji(n,kt,qn);break;case 4:if(yi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L_(i/1960))-i,10<i){n.timeoutHandle=fc(ji.bind(null,n,kt,qn),i);break}ji(n,kt,qn);break;case 5:ji(n,kt,qn);break;default:throw Error(Q(329))}}}return Vt(n,tt()),n.callbackNode===t?Rg.bind(null,n):null}function Rc(n,e){var t=to;return n.current.memoizedState.isDehydrated&&(er(n,e).flags|=256),n=il(n,e),n!==2&&(e=kt,kt=t,e!==null&&Dc(e)),n}function Dc(n){kt===null?kt=n:kt.push.apply(kt,n)}function P_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!An(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(n,e){for(e&=~Lf,e&=~vl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-wn(e),i=1<<t;n[t]=-1,e&=~i}}function eh(n){if((Pe&6)!==0)throw Error(Q(327));ss();var e=Ua(n,0);if((e&1)===0)return Vt(n,tt()),null;var t=il(n,e);if(n.tag!==0&&t===2){var i=ic(n);i!==0&&(e=i,t=Rc(n,i))}if(t===1)throw t=yo,er(n,0),yi(n,e),Vt(n,tt()),t;if(t===6)throw Error(Q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ji(n,kt,qn),Vt(n,tt()),null}function Rf(n,e){var t=Pe;Pe|=1;try{return n(e)}finally{Pe=t,Pe===0&&(ps=tt()+500,hl&&Oi())}}function lr(n){Mi!==null&&Mi.tag===0&&(Pe&6)===0&&ss();var e=Pe;Pe|=1;var t=fn.transition,i=Ue;try{if(fn.transition=null,Ue=1,n)return n()}finally{Ue=i,fn.transition=t,Pe=e,(Pe&6)===0&&Oi()}}function Df(){qt=Kr.current,je(Kr)}function er(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,o_(t)),st!==null)for(t=st.return;t!==null;){var i=t;switch(df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wa();break;case 3:ds(),je(Ut),je(bt),Sf();break;case 5:yf(i);break;case 4:ds();break;case 13:je(qe);break;case 19:je(qe);break;case 10:gf(i.type._context);break;case 22:case 23:Df()}t=t.return}if(pt=n,st=n=Ri(n.current,null),xt=qt=e,ct=0,yo=null,Lf=vl=ar=0,kt=to=null,Zi!==null){for(e=0;e<Zi.length;e++)if(t=Zi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Zi=null}return n}function Dg(n,e){do{var t=st;try{if(mf(),ba.current=Ja,Ka){for(var i=Ye.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ka=!1}if(or=0,ht=ut=Ye=null,Js=!1,vo=0,Af.current=null,t===null||t.return===null){ct=1,yo=e,st=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Vd(o);if(g!==null){g.flags&=-257,Gd(g,o,a,s,e),g.mode&1&&Bd(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){Bd(s,u,e),If();break e}l=Error(Q(426))}}else if(Xe&&a.mode&1){var p=Vd(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Gd(p,o,a,s,e),hf(hs(l,a));break e}}s=l=hs(l,a),ct!==4&&(ct=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=mg(s,l,e);Id(s,m);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Li===null||!Li.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=gg(s,a,e);Id(s,w);break e}}s=s.return}while(s!==null)}Fg(t)}catch(S){e=S,st===t&&t!==null&&(st=t=t.return);continue}break}while(1)}function Ig(){var n=el.current;return el.current=Ja,n===null?Ja:n}function If(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||(ar&268435455)===0&&(vl&268435455)===0||yi(pt,xt)}function il(n,e){var t=Pe;Pe|=2;var i=Ig();(pt!==n||xt!==e)&&(qn=null,er(n,e));do try{R_();break}catch(r){Dg(n,r)}while(1);if(mf(),Pe=t,el.current=i,st!==null)throw Error(Q(261));return pt=null,xt=0,ct}function R_(){for(;st!==null;)Ng(st)}function D_(){for(;st!==null&&!iv();)Ng(st)}function Ng(n){var e=zg(n.alternate,n,qt);n.memoizedProps=n.pendingProps,e===null?Fg(n):st=e,Af.current=null}function Fg(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=E_(t,e,qt),t!==null){st=t;return}}else{if(t=T_(t,e),t!==null){t.flags&=32767,st=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ct=6,st=null;return}}if(e=e.sibling,e!==null){st=e;return}st=e=n}while(e!==null);ct===0&&(ct=5)}function ji(n,e,t){var i=Ue,r=fn.transition;try{fn.transition=null,Ue=1,I_(n,e,t,i)}finally{fn.transition=r,Ue=i}return null}function I_(n,e,t,i){do ss();while(Mi!==null);if((Pe&6)!==0)throw Error(Q(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(hv(n,s),n===pt&&(st=pt=null,xt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Xo||(Xo=!0,Og(Oa,function(){return ss(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=fn.transition,fn.transition=null;var o=Ue;Ue=1;var a=Pe;Pe|=4,Af.current=null,C_(n,t),Lg(t,n),Jv(uc),Ba=!!lc,uc=lc=null,n.current=t,A_(t),rv(),Pe=a,Ue=o,fn.transition=s}else n.current=t;if(Xo&&(Xo=!1,Mi=n,nl=r),s=n.pendingLanes,s===0&&(Li=null),av(t.stateNode),Vt(n,tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(tl)throw tl=!1,n=Lc,Lc=null,n;return(nl&1)!==0&&n.tag!==0&&ss(),s=n.pendingLanes,(s&1)!==0?n===Pc?no++:(no=0,Pc=n):no=0,Oi(),null}function ss(){if(Mi!==null){var n=pm(nl),e=fn.transition,t=Ue;try{if(fn.transition=null,Ue=16>n?16:n,Mi===null)var i=!1;else{if(n=Mi,Mi=null,nl=0,(Pe&6)!==0)throw Error(Q(331));var r=Pe;for(Pe|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:eo(8,c,s)}var d=c.child;if(d!==null)d.return=c,de=d;else for(;de!==null;){c=de;var f=c.sibling,g=c.return;if(bg(c),c===u){de=null;break}if(f!==null){f.return=g,de=f;break}de=g}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var v=n.current;for(de=v;de!==null;){o=de;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,de=x;else e:for(o=v;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:gl(9,a)}}catch(S){Ke(a,a.return,S)}if(a===o){de=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,de=w;break e}de=a.return}}if(Pe=r,Oi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(ll,n)}catch{}i=!0}return i}finally{Ue=t,fn.transition=e}}return!1}function th(n,e,t){e=hs(t,e),e=mg(n,e,1),n=Ai(n,e,1),e=Rt(),n!==null&&(Eo(n,1,e),Vt(n,e))}function Ke(n,e,t){if(n.tag===3)th(n,n,t);else for(;e!==null;){if(e.tag===3){th(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Li===null||!Li.has(i))){n=hs(t,n),n=gg(e,n,1),e=Ai(e,n,1),n=Rt(),e!==null&&(Eo(e,1,n),Vt(e,n));break}}e=e.return}}function N_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Rt(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(xt&t)===t&&(ct===4||ct===3&&(xt&130023424)===xt&&500>tt()-Pf?er(n,0):Lf|=t),Vt(n,e)}function kg(n,e){e===0&&((n.mode&1)===0?e=1:(e=ko,ko<<=1,(ko&130023424)===0&&(ko=4194304)));var t=Rt();n=ni(n,e),n!==null&&(Eo(n,e,t),Vt(n,t))}function F_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),kg(n,t)}function k_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),kg(n,t)}var zg;zg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ut.current)Ot=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ot=!1,w_(n,e,t);Ot=(n.flags&131072)!==0}else Ot=!1,Xe&&(e.flags&1048576)!==0&&Bm(e,qa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Aa(n,e),n=e.pendingProps;var r=us(e,bt.current);rs(e,t),r=wf(null,e,i,n,r,t);var s=Ef();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(i)?(s=!0,ja(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e),r.updater=pl,e.stateNode=r,r._reactInternals=e,_c(e,i,n,t),e=Sc(null,e,i,!0,s,t)):(e.tag=0,Xe&&s&&ff(e),Pt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Aa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=O_(i),n=xn(i,n),r){case 0:e=yc(null,e,i,n,t);break e;case 1:e=jd(null,e,i,n,t);break e;case 11:e=Hd(null,e,i,n,t);break e;case 14:e=Wd(null,e,i,xn(i.type,n),t);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),yc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),jd(n,e,i,r,t);case 3:e:{if(yg(e),n===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wm(n,e),Za(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(Q(423)),e),e=Xd(n,e,i,t,r);break e}else if(i!==r){r=hs(Error(Q(424)),e),e=Xd(n,e,i,t,r);break e}else for(Zt=Ci(e.stateNode.containerInfo.firstChild),Qt=e,Xe=!0,Sn=null,t=Ym(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(cs(),i===r){e=ii(n,e,t);break e}Pt(n,e,i,t)}e=e.child}return e;case 5:return $m(e),n===null&&mc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,cc(i,r)?o=null:s!==null&&cc(i,s)&&(e.flags|=32),xg(n,e),Pt(n,e,o,t),e.child;case 6:return n===null&&mc(e),null;case 13:return Sg(n,e,t);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=fs(e,null,i,t):Pt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),Hd(n,e,i,r,t);case 7:return Pt(n,e,e.pendingProps,t),e.child;case 8:return Pt(n,e,e.pendingProps.children,t),e.child;case 12:return Pt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(Ya,i._currentValue),i._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===r.children&&!Ut.current){e=ii(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Kn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),gc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),gc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,t),r=dn(r),i=i(r),e.flags|=1,Pt(n,e,i,t),e.child;case 14:return i=e.type,r=xn(i,e.pendingProps),r=xn(i.type,r),Wd(n,e,i,r,t);case 15:return vg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),Aa(n,e),e.tag=1,Bt(i)?(n=!0,ja(e)):n=!1,rs(e,t),Xm(e,i,r),_c(e,i,r,t),Sc(null,e,i,!0,n,t);case 19:return Mg(n,e,t);case 22:return _g(n,e,t)}throw Error(Q(156,e.tag))};function Og(n,e){return cm(n,e)}function z_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(n,e,t,i){return new z_(n,e,t,i)}function Nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O_(n){if(typeof n=="function")return Nf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Kc)return 11;if(n===Jc)return 14}return 2}function Ri(n,e){var t=n.alternate;return t===null?(t=un(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ra(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Nf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Gr:return tr(t.children,r,s,e);case Qc:o=8,r|=8;break;case Gu:return n=un(12,t,e,r|2),n.elementType=Gu,n.lanes=s,n;case Hu:return n=un(13,t,e,r),n.elementType=Hu,n.lanes=s,n;case Wu:return n=un(19,t,e,r),n.elementType=Wu,n.lanes=s,n;case qp:return _l(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jp:o=10;break e;case Xp:o=9;break e;case Kc:o=11;break e;case Jc:o=14;break e;case vi:o=16,i=null;break e}throw Error(Q(130,n==null?n:typeof n,""))}return e=un(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function tr(n,e,t,i){return n=un(7,n,i,e),n.lanes=t,n}function _l(n,e,t,i){return n=un(22,n,i,e),n.elementType=qp,n.lanes=t,n.stateNode={isHidden:!1},n}function nu(n,e,t){return n=un(6,n,null,e),n.lanes=t,n}function iu(n,e,t){return e=un(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function U_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(n,e,t,i,r,s,o,a,l){return n=new U_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),n}function B_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ug(n){if(!n)return Fi;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(Q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(n.tag===1){var t=n.type;if(Bt(t))return Om(n,t,e)}return e}function Bg(n,e,t,i,r,s,o,a,l){return n=Ff(t,i,!0,n,r,s,o,a,l),n.context=Ug(null),t=n.current,i=Rt(),r=Pi(t),s=Kn(i,r),s.callback=e!=null?e:null,Ai(t,s,r),n.current.lanes=r,Eo(n,r,i),Vt(n,i),n}function xl(n,e,t,i){var r=e.current,s=Rt(),o=Pi(r);return t=Ug(t),e.context===null?e.context=t:e.pendingContext=t,e=Kn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ai(r,e,o),n!==null&&(En(n,r,o,s),Ta(n,r,o)),o}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function kf(n,e){nh(n,e),(n=n.alternate)&&nh(n,e)}function V_(){return null}var Vg=typeof reportError=="function"?reportError:function(n){console.error(n)};function zf(n){this._internalRoot=n}yl.prototype.render=zf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Q(409));xl(n,e,null,null)};yl.prototype.unmount=zf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;lr(function(){xl(null,n,null,null)}),e[ti]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var e=vm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xi.length&&e!==0&&e<xi[t].priority;t++);xi.splice(t,0,n),t===0&&xm(n)}};function Of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ih(){}function G_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=rl(o);s.call(u)}}var o=Bg(e,i,n,0,null,!1,!1,"",ih);return n._reactRootContainer=o,n[ti]=o.current,fo(n.nodeType===8?n.parentNode:n),lr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=rl(l);a.call(u)}}var l=Ff(n,0,!1,null,null,!1,!1,"",ih);return n._reactRootContainer=l,n[ti]=l.current,fo(n.nodeType===8?n.parentNode:n),lr(function(){xl(e,l,t,i)}),l}function Ml(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rl(o);a.call(l)}}xl(e,o,n,r)}else o=G_(t,e,n,r,i);return rl(o)}mm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ws(e.pendingLanes);t!==0&&(nf(e,t|1),Vt(e,tt()),(Pe&6)===0&&(ps=tt()+500,Oi()))}break;case 13:lr(function(){var i=ni(n,1);if(i!==null){var r=Rt();En(i,n,1,r)}}),kf(n,1)}};rf=function(n){if(n.tag===13){var e=ni(n,134217728);if(e!==null){var t=Rt();En(e,n,134217728,t)}kf(n,134217728)}};gm=function(n){if(n.tag===13){var e=Pi(n),t=ni(n,e);if(t!==null){var i=Rt();En(t,n,e,i)}kf(n,e)}};vm=function(){return Ue};_m=function(n,e){var t=Ue;try{return Ue=n,e()}finally{Ue=t}};ec=function(n,e,t){switch(e){case"input":if(qu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=dl(i);if(!r)throw Error(Q(90));$p(i),qu(i,r)}}}break;case"textarea":Qp(n,t);break;case"select":e=t.value,e!=null&&es(n,!!t.multiple,e,!1)}};rm=Rf;sm=lr;var H_={usingClientEntryPoint:!1,Events:[bo,Xr,dl,nm,im,Rf]},Is={findFiberByHostInstance:$i,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lm(n),n===null?null:n.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||V_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{ll=qo.inject(W_),Un=qo}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;Jt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(Q(200));return B_(n,e,null,t)};Jt.createRoot=function(n,e){if(!Of(n))throw Error(Q(299));var t=!1,i="",r=Vg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(n,1,!1,null,null,t,!1,i,r),n[ti]=e.current,fo(n.nodeType===8?n.parentNode:n),new zf(e)};Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Q(188)):(n=Object.keys(n).join(","),Error(Q(268,n)));return n=lm(e),n=n===null?null:n.stateNode,n};Jt.flushSync=function(n){return lr(n)};Jt.hydrate=function(n,e,t){if(!Sl(e))throw Error(Q(200));return Ml(null,n,e,!0,t)};Jt.hydrateRoot=function(n,e,t){if(!Of(n))throw Error(Q(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Vg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Bg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[ti]=e.current,fo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new yl(e)};Jt.render=function(n,e,t){if(!Sl(e))throw Error(Q(200));return Ml(null,n,e,!1,t)};Jt.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(Q(40));return n._reactRootContainer?(lr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[ti]=null})}),!0):!1};Jt.unstable_batchedUpdates=Rf;Jt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Sl(t))throw Error(Q(200));if(n==null||n._reactInternals===void 0)throw Error(Q(38));return Ml(n,e,t,!1,i)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Jt})(Bp);var rh=Bp.exports;Bu.createRoot=rh.createRoot,Bu.hydrateRoot=rh.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="142",yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j_=0,sh=1,X_=2,Gg=1,q_=2,Xs=3,ur=0,Tn=1,ri=2,Y_=1,Di=0,os=1,oh=2,ah=3,lh=4,$_=5,Br=100,Z_=101,Q_=102,uh=103,ch=104,K_=200,J_=201,ex=202,tx=203,Hg=204,Wg=205,nx=206,ix=207,rx=208,sx=209,ox=210,ax=0,lx=1,ux=2,Ic=3,cx=4,fx=5,dx=6,hx=7,jg=0,px=1,mx=2,Jn=0,gx=1,vx=2,_x=3,xx=4,yx=5,Xg=300,ms=301,gs=302,sl=303,Nc=304,wl=306,Fc=1e3,Mn=1001,kc=1002,Je=1003,fh=1004,dh=1005,ln=1006,Sx=1007,El=1008,cr=1009,Mx=1010,wx=1011,qg=1012,Ex=1013,Ki=1014,wi=1015,So=1016,Tx=1017,bx=1018,as=1020,Cx=1021,Ax=1022,On=1023,Lx=1024,Px=1025,nr=1026,vs=1027,Rx=1028,Dx=1029,Ix=1030,Nx=1031,Fx=1033,ru=33776,su=33777,ou=33778,au=33779,hh=35840,ph=35841,mh=35842,gh=35843,kx=36196,vh=37492,_h=37496,xh=37808,yh=37809,Sh=37810,Mh=37811,wh=37812,Eh=37813,Th=37814,bh=37815,Ch=37816,Ah=37817,Lh=37818,Ph=37819,Rh=37820,Dh=37821,Ih=36492,fr=3e3,Qe=3001,zx=3200,Ox=3201,Yg=0,Ux=1,Yn="srgb",Ji="srgb-linear",lu=7680,Bx=519,zc=35044,Nh="300 es",Oc=1035;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,Fh=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Vx(n,e){return(n%e+e)%e}function cu(n,e,t){return(1-t)*n+t*e}function kh(n){return(n&n-1)===0&&n!==0}function Uc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],_=i[8],h=r[0],p=r[3],m=r[6],v=r[1],x=r[4],w=r[7],S=r[2],C=r[5],P=r[8];return s[0]=o*h+a*v+l*S,s[3]=o*p+a*x+l*C,s[6]=o*m+a*w+l*P,s[1]=u*h+c*v+d*S,s[4]=u*p+c*x+d*C,s[7]=u*m+c*w+d*P,s[2]=f*h+g*v+_*S,s[5]=f*p+g*x+_*C,s[8]=f*m+g*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,_=t*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=g*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function $g(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function ol(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fu={[Yn]:{[Ji]:ir},[Ji]:{[Yn]:Da}},mn={legacyMode:!0,get workingColorSpace(){return Ji},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(fu[e]&&fu[e][t]!==void 0){const i=fu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},gn={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function $o(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ji){return this.r=e,this.g=t,this.b=i,mn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ji){if(e=Vx(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=du(o,s,e+1/3),this.g=du(o,s,e),this.b=du(o,s,e-1/3)}return mn.toWorkingColorSpace(this,r),this}setStyle(e,t=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,mn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,mn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,mn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,mn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Yn){const i=Zg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return mn.fromWorkingColorSpace($o(this,lt),e),zt(lt.r*255,0,255)<<16^zt(lt.g*255,0,255)<<8^zt(lt.b*255,0,255)<<0}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ji){mn.fromWorkingColorSpace($o(this,lt),t);const i=lt.r,r=lt.g,s=lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ji){return mn.fromWorkingColorSpace($o(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Yn){return mn.fromWorkingColorSpace($o(this,lt),e),e!==Yn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(gn),gn.h+=e,gn.s+=t,gn.l+=i,this.setHSL(gn.h,gn.s,gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Yo);const i=cu(gn.h,Yo.h,t),r=cu(gn.s,Yo.s,t),s=cu(gn.l,Yo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=Zg;let Mr;class Qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=ol("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ol("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kg{constructor(e=null){this.isSource=!0,this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hu(r[o].image)):s.push(hu(r[o]))}else s=hu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function hu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gx=0;class Gt extends mr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Mn,r=Mn,s=ln,o=El,a=On,l=cr,u=1,c=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ii(),this.name="",this.source=new Kg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Xg;class We{constructor(e=0,t=0,i=0,r=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],_=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,w=(g+1)/2,S=(m+1)/2,C=(c+f)/4,P=(d+h)/4,y=(_+p)/4;return x>w&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=P/i):w>S?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=P/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class si extends mr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jg extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hx extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=h;return}if(d!==h||l!==f||u!==g||c!==_){let p=1-a;const m=l*f+u*g+c*_+d*h,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,m*v);p=Math.sin(p*C)/S,a=Math.sin(a*C)/S}const w=a*v;if(l=l*p+f*w,u=u*p+g*w,c=c*p+_*w,d=d*p+h*w,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*g-u*f,e[t+1]=l*_+c*f+u*d-a*g,e[t+2]=u*_+c*g+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"YXZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"ZXY":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"ZYX":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"YZX":this._x=f*c*d+u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d-f*g*_;break;case"XZY":this._x=f*c*d-u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new R,zh=new dr;class Ao{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else i.boundingBox===null&&i.computeBoundingBox(),mu.copy(i.boundingBox),mu.applyMatrix4(e.matrixWorld),this.union(mu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Zo.subVectors(this.max,Ns),wr.subVectors(e.a,Ns),Er.subVectors(e.b,Ns),Tr.subVectors(e.c,Ns),ci.subVectors(Er,wr),fi.subVectors(Tr,Er),Vi.subVectors(wr,Tr);let t=[0,-ci.z,ci.y,0,-fi.z,fi.y,0,-Vi.z,Vi.y,ci.z,0,-ci.x,fi.z,0,-fi.x,Vi.z,0,-Vi.x,-ci.y,ci.x,0,-fi.y,fi.x,0,-Vi.y,Vi.x,0];return!gu(t,wr,Er,Tr,Zo)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,wr,Er,Tr,Zo))?!1:(Qo.crossVectors(ci,fi),t=[Qo.x,Qo.y,Qo.z],gu(t,wr,Er,Tr,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new R,new R,new R,new R,new R,new R,new R,new R],Bi=new R,mu=new Ao,wr=new R,Er=new R,Tr=new R,ci=new R,fi=new R,Vi=new R,Ns=new R,Zo=new R,Qo=new R,Gi=new R;function gu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gi.fromArray(n,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),u=t.dot(Gi),c=i.dot(Gi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Wx=new Ao,Oh=new R,Ko=new R,vu=new R;class Bf{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){vu.subVectors(e,this.center);const t=vu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(vu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Ko.set(0,0,1).multiplyScalar(e.radius):Ko.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Oh.copy(e.center).add(Ko)),this.expandByPoint(Oh.copy(e.center).sub(Ko)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new R,_u=new R,Jo=new R,di=new R,xu=new R,ea=new R,yu=new R;class jx{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.direction).multiplyScalar(t).add(this.origin),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_u.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),di.copy(this.origin).sub(_u);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=di.dot(this.direction),l=-di.dot(Jo),u=di.lengthSq(),c=Math.abs(1-o*o);let d,f,g,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Jo).multiplyScalar(f).add(_u),g}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,s){xu.subVectors(t,e),ea.subVectors(i,e),yu.crossVectors(xu,ea);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(di,ea));if(l<0)return null;const u=a*this.direction.dot(xu.cross(di));if(u<0||l+u>o)return null;const c=-a*di.dot(yu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u,c,d,f,g,_,h,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=_,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,_=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=g+_*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,_=u*c,h=u*d;t[0]=f+h*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-_,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,_=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,_=a*c,h=a*d;t[0]=l*c,t[4]=_*u-g,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=g*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,_=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=_*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*d+_,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,_=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=g*d-_,t[2]=_*d-g,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xx,e,qx)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),hi.crossVectors(i,jt),hi.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),hi.crossVectors(i,jt)),hi.normalize(),ta.crossVectors(jt,hi),r[0]=hi.x,r[4]=ta.x,r[8]=jt.x,r[1]=hi.y,r[5]=ta.y,r[9]=jt.y,r[2]=hi.z,r[6]=ta.z,r[10]=jt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],_=i[2],h=i[6],p=i[10],m=i[14],v=i[3],x=i[7],w=i[11],S=i[15],C=r[0],P=r[4],y=r[8],A=r[12],N=r[1],O=r[5],te=r[9],K=r[13],k=r[2],Y=r[6],V=r[10],W=r[14],D=r[3],I=r[7],F=r[11],X=r[15];return s[0]=o*C+a*N+l*k+u*D,s[4]=o*P+a*O+l*Y+u*I,s[8]=o*y+a*te+l*V+u*F,s[12]=o*A+a*K+l*W+u*X,s[1]=c*C+d*N+f*k+g*D,s[5]=c*P+d*O+f*Y+g*I,s[9]=c*y+d*te+f*V+g*F,s[13]=c*A+d*K+f*W+g*X,s[2]=_*C+h*N+p*k+m*D,s[6]=_*P+h*O+p*Y+m*I,s[10]=_*y+h*te+p*V+m*F,s[14]=_*A+h*K+p*W+m*X,s[3]=v*C+x*N+w*k+S*D,s[7]=v*P+x*O+w*Y+S*I,s[11]=v*y+x*te+w*V+S*F,s[15]=v*A+x*K+w*W+S*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],_=e[3],h=e[7],p=e[11],m=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+t*l*g-t*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+t*u*d-t*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],_=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,x=_*f*u-c*p*u-_*l*g+o*p*g+c*l*m-o*f*m,w=c*h*u-_*d*u+_*a*g-o*h*g-c*a*m+o*d*m,S=_*d*l-c*h*l-_*a*f+o*h*f+c*a*p-o*d*p,C=t*v+i*x+r*w+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=v*P,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*P,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*P,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*P,e[4]=x*P,e[5]=(c*p*s-_*f*s+_*r*g-t*p*g-c*r*m+t*f*m)*P,e[6]=(_*l*s-o*p*s-_*r*u+t*p*u+o*r*m-t*l*m)*P,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*g+t*l*g)*P,e[8]=w*P,e[9]=(_*d*s-c*h*s-_*i*g+t*h*g+c*i*m-t*d*m)*P,e[10]=(o*h*s-_*a*s+_*i*u-t*h*u-o*i*m+t*a*m)*P,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*g-t*a*g)*P,e[12]=S*P,e[13]=(c*h*r-_*d*r+_*i*f-t*h*f-c*i*p+t*d*p)*P,e[14]=(_*a*r-o*h*r-_*i*l+t*h*l+o*i*p-t*a*p)*P,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,_=s*d,h=o*c,p=o*d,m=a*d,v=l*u,x=l*c,w=l*d,S=i.x,C=i.y,P=i.z;return r[0]=(1-(h+m))*S,r[1]=(g+w)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(g-w)*C,r[5]=(1-(f+m))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*P,r[9]=(p-v)*P,r[10]=(1-(f+h))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const u=1/s,c=1/o,d=1/a;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new R,vn=new nt,Xx=new R(0,0,0),qx=new R(1,1,1),hi=new R,ta=new R,jt=new R,Uh=new nt,Bh=new dr;class Lo{constructor(e=0,t=0,i=0,r=Lo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lo.DefaultOrder="XYZ";Lo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class e0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yx=0;const Vh=new R,Cr=new dr,Wn=new nt,na=new R,Fs=new R,$x=new R,Zx=new dr,Gh=new R(1,0,0),Hh=new R(0,1,0),Wh=new R(0,0,1),Qx={type:"added"},jh={type:"removed"};class Ht extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DefaultUp.clone();const e=new R,t=new Lo,i=new dr,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new cn}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new e0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Fs,na,this.up):Wn.lookAt(na,Fs,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(Wn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DefaultUp=new R(0,1,0);Ht.DefaultMatrixAutoUpdate=!0;const _n=new R,jn=new R,Su=new R,Xn=new R,Ar=new R,Lr=new R,Xh=new R,Mu=new R,wu=new R,Eu=new R;class zn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),jn.subVectors(i,t),Su.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(jn),l=_n.dot(Su),u=jn.dot(jn),c=jn.dot(Su),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xn),Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Xn),l.set(0,0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),jn.subVectors(e,t),_n.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),_n.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,i),Lr.subVectors(s,i),Mu.subVectors(e,i);const l=Ar.dot(Mu),u=Lr.dot(Mu);if(l<=0&&u<=0)return t.copy(i);wu.subVectors(e,r);const c=Ar.dot(wu),d=Lr.dot(wu);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ar,o);Eu.subVectors(e,s);const g=Ar.dot(Eu),_=Lr.dot(Eu);if(_>=0&&g<=_)return t.copy(s);const h=g*u-l*_;if(h<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Lr,a);const p=c*_-g*d;if(p<=0&&d-c>=0&&g-_>=0)return Xh.subVectors(s,r),a=(d-c)/(d-c+(g-_)),t.copy(r).addScaledVector(Xh,a);const m=1/(p+h+f);return o=h*m,a=f*m,t.copy(i).addScaledVector(Ar,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kx=0;class Ms extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=os,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hg,this.blendDst=Wg,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Y_;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t0 extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new R,ia=new pe;class bn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=zc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ie),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new pe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new R),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new We),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class n0 extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class i0 extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cn extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jx=0;const rn=new nt,Tu=new Ht,Pr=new R,Xt=new Ao,ks=new Ao,dt=new R;class Vn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?i0:n0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Xt.min,ks.min),Xt.expandByPoint(dt),dt.addVectors(Xt.max,ks.max),Xt.expandByPoint(dt)):(Xt.expandByPoint(ks.min),Xt.expandByPoint(ks.max))}Xt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dt.fromBufferAttribute(a,u),l&&(Pr.fromBufferAttribute(e,u),dt.add(Pr)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let N=0;N<a;N++)u[N]=new R,c[N]=new R;const d=new R,f=new R,g=new R,_=new pe,h=new pe,p=new pe,m=new R,v=new R;function x(N,O,te){d.fromArray(r,N*3),f.fromArray(r,O*3),g.fromArray(r,te*3),_.fromArray(o,N*2),h.fromArray(o,O*2),p.fromArray(o,te*2),f.sub(d),g.sub(d),h.sub(_),p.sub(_);const K=1/(h.x*p.y-p.x*h.y);!isFinite(K)||(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(K),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(K),u[N].add(m),u[O].add(m),u[te].add(m),c[N].add(v),c[O].add(v),c[te].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let N=0,O=w.length;N<O;++N){const te=w[N],K=te.start,k=te.count;for(let Y=K,V=K+k;Y<V;Y+=3)x(i[Y+0],i[Y+1],i[Y+2])}const S=new R,C=new R,P=new R,y=new R;function A(N){P.fromArray(s,N*3),y.copy(P);const O=u[N];S.copy(O),S.sub(P.multiplyScalar(P.dot(O))).normalize(),C.crossVectors(y,O);const K=C.dot(c[N])<0?-1:1;l[N*4]=S.x,l[N*4+1]=S.y,l[N*4+2]=S.z,l[N*4+3]=K}for(let N=0,O=w.length;N<O;++N){const te=w[N],K=te.start,k=te.count;for(let Y=K,V=K+k;Y<V;Y+=3)A(i[Y+0]),A(i[Y+1]),A(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,c=new R,d=new R;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let d=0,f=u;d<c;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[_++]=u[g++]}return new bn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new nt,Rr=new jx,bu=new Bf,pi=new R,mi=new R,gi=new R,Cu=new R,Au=new R,Lu=new R,ra=new R,sa=new R,oa=new R,aa=new pe,la=new pe,ua=new pe,Pu=new R,ca=new R;class Be extends Ht{constructor(e=new Vn,t=new t0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(s),e.ray.intersectsSphere(bu)===!1)||(qh.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(qh),i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=g.length;h<p;h++){const m=g[h],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=w;S<C;S+=3){const P=a.getX(S),y=a.getX(S+1),A=a.getX(S+2);o=fa(this,v,e,Rr,l,u,c,d,f,P,y,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let m=h,v=p;m<v;m+=3){const x=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);o=fa(this,r,e,Rr,l,u,c,d,f,x,w,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=g.length;h<p;h++){const m=g[h],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=w;S<C;S+=3){const P=S,y=S+1,A=S+2;o=fa(this,v,e,Rr,l,u,c,d,f,P,y,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let m=h,v=p;m<v;m+=3){const x=m,w=m+1,S=m+2;o=fa(this,r,e,Rr,l,u,c,d,f,x,w,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function ey(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ri,a),l===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ca);return u<t.near||u>t.far?null:{distance:u,point:ca.clone(),object:n}}function fa(n,e,t,i,r,s,o,a,l,u,c,d){pi.fromBufferAttribute(r,u),mi.fromBufferAttribute(r,c),gi.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){ra.set(0,0,0),sa.set(0,0,0),oa.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=f[_],m=s[_];p!==0&&(Cu.fromBufferAttribute(m,u),Au.fromBufferAttribute(m,c),Lu.fromBufferAttribute(m,d),o?(ra.addScaledVector(Cu,p),sa.addScaledVector(Au,p),oa.addScaledVector(Lu,p)):(ra.addScaledVector(Cu.sub(pi),p),sa.addScaledVector(Au.sub(mi),p),oa.addScaledVector(Lu.sub(gi),p)))}pi.add(ra),mi.add(sa),gi.add(oa)}n.isSkinnedMesh&&(n.boneTransform(u,pi),n.boneTransform(c,mi),n.boneTransform(d,gi));const g=ey(n,e,t,i,pi,mi,gi,Pu);if(g){a&&(aa.fromBufferAttribute(a,u),la.fromBufferAttribute(a,c),ua.fromBufferAttribute(a,d),g.uv=zn.getUV(Pu,pi,mi,gi,aa,la,ua,new pe)),l&&(aa.fromBufferAttribute(l,u),la.fromBufferAttribute(l,c),ua.fromBufferAttribute(l,d),g.uv2=zn.getUV(Pu,pi,mi,gi,aa,la,ua,new pe));const _={a:u,b:c,c:d,normal:new R,materialIndex:0};zn.getNormal(pi,mi,gi,_.normal),g.face=_}return g}class et extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(u,3)),this.setAttribute("normal",new Cn(c,3)),this.setAttribute("uv",new Cn(d,2));function _(h,p,m,v,x,w,S,C,P,y,A){const N=w/P,O=S/y,te=w/2,K=S/2,k=C/2,Y=P+1,V=y+1;let W=0,D=0;const I=new R;for(let F=0;F<V;F++){const X=F*O-K;for(let j=0;j<Y;j++){const Z=j*N-te;I[h]=Z*v,I[p]=X*x,I[m]=k,u.push(I.x,I.y,I.z),I[h]=0,I[p]=0,I[m]=C>0?1:-1,c.push(I.x,I.y,I.z),d.push(j/P),d.push(1-F/y),W+=1}}for(let F=0;F<y;F++)for(let X=0;X<P;X++){const j=f+X+Y*F,Z=f+X+Y*(F+1),ce=f+(X+1)+Y*(F+1),he=f+(X+1)+Y*F;l.push(j,Z,he),l.push(Z,ce,he),D+=6}a.addGroup(g,D,A),g+=D,f+=W}}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}const r0={clone:_s,merge:Et};var ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ty,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class s0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends s0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=90,Ir=1;class iy extends Ht{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new $t(Dr,Ir,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new $t(Dr,Ir,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new $t(Dr,Ir,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new $t(Dr,Ir,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new $t(Dr,Ir,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const u=new $t(Dr,Ir,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Jn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class o0 extends Gt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ry extends si{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new o0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new et(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Di});s.uniforms.tEquirect.value=t;const o=new Be(r,s),a=t.minFilter;return t.minFilter===El&&(t.minFilter=ln),new iy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ru=new R,sy=new R,oy=new cn;class Xi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ru.subVectors(i,t).cross(sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oy.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Bf,da=new R;class Vf{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],_=i[10],h=i[11],p=i[12],m=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,d-l,h-f,x-p).normalize(),t[1].setComponents(a+r,d+l,h+f,x+p).normalize(),t[2].setComponents(a+s,d+u,h+g,x+m).normalize(),t[3].setComponents(a-s,d-u,h-g,x-m).normalize(),t[4].setComponents(a-o,d-c,h-_,x-v).normalize(),t[5].setComponents(a+o,d+c,h+_,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ay(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;n.bindBuffer(d,u),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Gf extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,g=[],_=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-o;for(let x=0;x<u;x++){const w=x*d-s;_.push(w,-v,0),h.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+u*m,w=v+u*(m+1),S=v+1+u*(m+1),C=v+1+u*m;g.push(x,w,C),g.push(w,S,C)}this.setIndex(g),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(p,2))}static fromJSON(e){return new Gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py="vec3 transformed = vec3( position );",my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vy=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Xy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,$y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,n1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,o1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,S1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,U1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,V1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Q1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,K1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,J1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,eS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,nS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,iS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,FS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:ly,alphamap_pars_fragment:uy,alphatest_fragment:cy,alphatest_pars_fragment:fy,aomap_fragment:dy,aomap_pars_fragment:hy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:vy,bumpmap_pars_fragment:_y,clipping_planes_fragment:xy,clipping_planes_pars_fragment:yy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:wy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:by,common:Cy,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Py,displacementmap_vertex:Ry,emissivemap_fragment:Dy,emissivemap_pars_fragment:Iy,encodings_fragment:Ny,encodings_pars_fragment:Fy,envmap_fragment:ky,envmap_common_pars_fragment:zy,envmap_pars_fragment:Oy,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:Vy,fog_pars_vertex:Gy,fog_fragment:Hy,fog_pars_fragment:Wy,gradientmap_pars_fragment:jy,lightmap_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_vertex:Yy,lights_pars_begin:$y,lights_toon_fragment:Qy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Jy,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:s1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:u1,map_fragment:c1,map_pars_fragment:f1,map_particle_fragment:d1,map_particle_pars_fragment:h1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphcolor_vertex:g1,morphnormal_vertex:v1,morphtarget_pars_vertex:_1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:S1,normal_pars_fragment:M1,normal_pars_vertex:w1,normal_vertex:E1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:L1,output_fragment:P1,packing:R1,premultiplied_alpha_fragment:D1,project_vertex:I1,dithering_fragment:N1,dithering_pars_fragment:F1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:U1,shadowmap_vertex:B1,shadowmask_pars_fragment:V1,skinbase_vertex:G1,skinning_pars_vertex:H1,skinning_vertex:W1,skinnormal_vertex:j1,specularmap_fragment:X1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:$1,transmission_fragment:Z1,transmission_pars_fragment:Q1,uv_pars_fragment:K1,uv_pars_vertex:J1,uv_vertex:eS,uv2_pars_fragment:tS,uv2_pars_vertex:nS,uv2_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:uS,depth_frag:cS,distanceRGBA_vert:fS,distanceRGBA_frag:dS,equirect_vert:hS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:vS,meshbasic_frag:_S,meshlambert_vert:xS,meshlambert_frag:yS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:wS,meshnormal_frag:ES,meshphong_vert:TS,meshphong_frag:bS,meshphysical_vert:CS,meshphysical_frag:AS,meshtoon_vert:LS,meshtoon_frag:PS,points_vert:RS,points_frag:DS,shadow_vert:IS,shadow_frag:NS,sprite_vert:FS,sprite_frag:kS},ae={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},Fn={basic:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Et([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Et([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Et([ae.points,ae.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Et([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Et([ae.common,ae.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Et([ae.sprite,ae.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:Et([ae.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Et([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Et([ae.lights,ae.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Fn.physical={uniforms:Et([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function zS(n,e,t,i,r,s){const o=new Ie(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function g(h,p){let m=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wl)?(u===void 0&&(u=new Be(new et(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:_s(Fn.cube.uniforms),vertexShader:Fn.cube.vertexShader,fragmentShader:Fn.cube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Be(new Gf(2,2),new oi({name:"BackgroundMaterial",uniforms:_s(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){t.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:g}}function OS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(k,Y,V,W,D){let I=!1;if(o){const F=h(W,V,Y);u!==F&&(u=F,g(u.object)),I=m(k,W,V,D),I&&v(k,W,V,D)}else{const F=Y.wireframe===!0;(u.geometry!==W.id||u.program!==V.id||u.wireframe!==F)&&(u.geometry=W.id,u.program=V.id,u.wireframe=F,I=!0)}D!==null&&t.update(D,34963),(I||c)&&(c=!1,y(k,Y,V,W),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,Y,V){const W=V.wireframe===!0;let D=a[k.id];D===void 0&&(D={},a[k.id]=D);let I=D[Y.id];I===void 0&&(I={},D[Y.id]=I);let F=I[W];return F===void 0&&(F=p(f()),I[W]=F),F}function p(k){const Y=[],V=[],W=[];for(let D=0;D<r;D++)Y[D]=0,V[D]=0,W[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:W,object:k,attributes:{},index:null}}function m(k,Y,V,W){const D=u.attributes,I=Y.attributes;let F=0;const X=V.getAttributes();for(const j in X)if(X[j].location>=0){const ce=D[j];let he=I[j];if(he===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(he=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(he=k.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;F++}return u.attributesNum!==F||u.index!==W}function v(k,Y,V,W){const D={},I=Y.attributes;let F=0;const X=V.getAttributes();for(const j in X)if(X[j].location>=0){let ce=I[j];ce===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),D[j]=he,F++}u.attributes=D,u.attributesNum=F,u.index=W}function x(){const k=u.newAttributes;for(let Y=0,V=k.length;Y<V;Y++)k[Y]=0}function w(k){S(k,0)}function S(k,Y){const V=u.newAttributes,W=u.enabledAttributes,D=u.attributeDivisors;V[k]=1,W[k]===0&&(n.enableVertexAttribArray(k),W[k]=1),D[k]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),D[k]=Y)}function C(){const k=u.newAttributes,Y=u.enabledAttributes;for(let V=0,W=Y.length;V<W;V++)Y[V]!==k[V]&&(n.disableVertexAttribArray(V),Y[V]=0)}function P(k,Y,V,W,D,I){i.isWebGL2===!0&&(V===5124||V===5125)?n.vertexAttribIPointer(k,Y,V,D,I):n.vertexAttribPointer(k,Y,V,W,D,I)}function y(k,Y,V,W){if(i.isWebGL2===!1&&(k.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=W.attributes,I=V.getAttributes(),F=Y.defaultAttributeValues;for(const X in I){const j=I[X];if(j.location>=0){let Z=D[X];if(Z===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),Z!==void 0){const ce=Z.normalized,he=Z.itemSize,G=t.get(Z);if(G===void 0)continue;const Ge=G.buffer,Ee=G.type,Se=G.bytesPerElement;if(Z.isInterleavedBufferAttribute){const fe=Z.data,De=fe.stride,be=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let ve=0;ve<j.locationSize;ve++)S(j.location+ve,fe.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ve=0;ve<j.locationSize;ve++)w(j.location+ve);n.bindBuffer(34962,Ge);for(let ve=0;ve<j.locationSize;ve++)P(j.location+ve,he/j.locationSize,Ee,ce,De*Se,(be+he/j.locationSize*ve)*Se)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)S(j.location+fe,Z.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<j.locationSize;fe++)w(j.location+fe);n.bindBuffer(34962,Ge);for(let fe=0;fe<j.locationSize;fe++)P(j.location+fe,he/j.locationSize,Ee,ce,he*Se,he/j.locationSize*fe*Se)}}else if(F!==void 0){const ce=F[X];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(j.location,ce);break;case 3:n.vertexAttrib3fv(j.location,ce);break;case 4:n.vertexAttrib4fv(j.location,ce);break;default:n.vertexAttrib1fv(j.location,ce)}}}}C()}function A(){te();for(const k in a){const Y=a[k];for(const V in Y){const W=Y[V];for(const D in W)_(W[D].object),delete W[D];delete Y[V]}delete a[k]}}function N(k){if(a[k.id]===void 0)return;const Y=a[k.id];for(const V in Y){const W=Y[V];for(const D in W)_(W[D].object),delete W[D];delete Y[V]}delete a[k.id]}function O(k){for(const Y in a){const V=a[Y];if(V[k.id]===void 0)continue;const W=V[k.id];for(const D in W)_(W[D].object),delete W[D];delete V[k.id]}}function te(){K(),c=!0,u!==l&&(u=l,g(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:K,dispose:A,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function US(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function BS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),_=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),x=f>0,w=o||e.has("OES_texture_float"),S=x&&w,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:C}}function VS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xi,a=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const _=d.length!==0||f||i!==0||r;return r=f,t=c(d,g,0),i=d.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const _=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,x=v*4;let w=m.clippingState||null;l.value=w,w=c(_,f,x,g);for(let S=0;S!==x;++S)w[S]=t[S];m.clippingState=w,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,_){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,w=g;x!==h;++x,w+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function GS(n){let e=new WeakMap;function t(o,a){return a===sl?o.mapping=ms:a===Nc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sl||a===Nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ry(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hf extends s0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,Yh=[.125,.215,.35,.446,.526,.582],Yi=20,Du=new Hf,$h=new Ie;let Iu=null;const qi=(1+Math.sqrt(5))/2,Fr=1/qi,Zh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qi,Fr),new R(0,qi,-Fr),new R(Fr,0,qi),new R(-Fr,0,qi),new R(qi,Fr,0),new R(-qi,Fr,0)];class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Iu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:So,format:On,encoding:fr,depthBuffer:!1},r=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(s)),this._blurMaterial=WS(s,e,t)}return r}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Du)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor($h),c.toneMapping=Jn,c.autoClear=!1;const g=new t0({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new Be(new et,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy($h),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;ha(r,v*x,m>2?x:0,x,x),c.setRenderTarget(r),h&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Du)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zh[(r-1)%Zh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Be(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yi-1),h=s/_,p=isFinite(s)?1+Math.floor(c*h):Yi;p>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const m=[];let v=0;for(let P=0;P<Yi;++P){const y=P/h,A=Math.exp(-y*y/2);m.push(A),P===0?v+=A:P<p&&(v+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const w=this._sizeLods[r],S=3*w*(r>x-Jr?r-x+Jr:0),C=4*(this._cubeSize-w);ha(t,S,C,3*w,2*w),l.setRenderTarget(t),l.render(d,Du)}}function HS(n){const e=[],t=[],i=[];let r=n;const s=n-Jr+1+Yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Jr?l=Yh[o-n+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,_=6,h=3,p=2,m=1,v=new Float32Array(h*_*g),x=new Float32Array(p*_*g),w=new Float32Array(m*_*g);for(let C=0;C<g;C++){const P=C%3*2/3-1,y=C>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(A,h*_*C),x.set(f,p*_*C);const N=[C,C,C,C,C,C];w.set(N,m*_*C)}const S=new Vn;S.setAttribute("position",new bn(v,h)),S.setAttribute("uv",new bn(x,p)),S.setAttribute("faceIndex",new bn(w,m)),e.push(S),r>Jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kh(n,e,t){const i=new si(n,e,t);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function WS(n,e,t){const i=new Float32Array(Yi),r=new R(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Jh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ep(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===sl||l===Nc,c=l===ms||l===gs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Qh(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Qh(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function XS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qS(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const g=d.morphAttributes;for(const _ in g){const h=g[_];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,_=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let x=0,w=v.length;x<w;x+=3){const S=v[x+0],C=v[x+1],P=v[x+2];f.push(S,C,C,P,P,S)}}else{const v=_.array;h=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const S=x+0,C=x+1,P=x+2;f.push(S,C,C,P,P,S)}}const p=new($g(f)?i0:n0)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function YS(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,_){if(_===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,_),t.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function $S(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ZS(n,e){return n[0]-e[0]}function QS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nu(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function KS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new We,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let V=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const w=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let N=0;w===!0&&(N=1),S===!0&&(N=2),C===!0&&(N=3);let O=c.attributes.position.count*N,te=1;O>e.maxTextureSize&&(te=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const K=new Float32Array(O*te*4*p),k=new Jg(K,O,te,p);k.type=wi,k.needsUpdate=!0;const Y=N*4;for(let W=0;W<p;W++){const D=P[W],I=y[W],F=A[W],X=O*te*4*W;for(let j=0;j<D.count;j++){const Z=j*Y;w===!0&&(o.fromBufferAttribute(D,j),D.normalized===!0&&Nu(o,D),K[X+Z+0]=o.x,K[X+Z+1]=o.y,K[X+Z+2]=o.z,K[X+Z+3]=0),S===!0&&(o.fromBufferAttribute(I,j),I.normalized===!0&&Nu(o,I),K[X+Z+4]=o.x,K[X+Z+5]=o.y,K[X+Z+6]=o.z,K[X+Z+7]=0),C===!0&&(o.fromBufferAttribute(F,j),F.normalized===!0&&Nu(o,F),K[X+Z+8]=o.x,K[X+Z+9]=o.y,K[X+Z+10]=o.z,K[X+Z+11]=F.itemSize===4?o.w:1)}}m={count:p,texture:k,size:new pe(O,te)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let w=0;w<g.length;w++)v+=g[w];const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",g),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const C=p[S];C[0]=S,C[1]=g[S]}p.sort(QS);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(ZS);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],P=C[0],y=C[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[P]&&c.setAttribute("morphTarget"+S,m[P]),v&&c.getAttribute("morphNormal"+S)!==v[P]&&c.setAttribute("morphNormal"+S,v[P]),r[S]=y,x+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const w=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function JS(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const l0=new Gt,u0=new Jg,c0=new Hx,f0=new o0,tp=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tp[r];if(s===void 0&&(s=new Float32Array(r),tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;sp.set(i),n.uniformMatrix2fv(this.addr,!1,sp),It(t,i)}}function sM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),It(t,i)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;ip.set(i),n.uniformMatrix4fv(this.addr,!1,ip),It(t,i)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;Dt(t,e)||(n.uniform2iv(this.addr,e),It(t,e))}function uM(n,e){const t=this.cache;Dt(t,e)||(n.uniform3iv(this.addr,e),It(t,e))}function cM(n,e){const t=this.cache;Dt(t,e)||(n.uniform4iv(this.addr,e),It(t,e))}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;Dt(t,e)||(n.uniform2uiv(this.addr,e),It(t,e))}function hM(n,e){const t=this.cache;Dt(t,e)||(n.uniform3uiv(this.addr,e),It(t,e))}function pM(n,e){const t=this.cache;Dt(t,e)||(n.uniform4uiv(this.addr,e),It(t,e))}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||l0,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||c0,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||f0,r)}function _M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||u0,r)}function xM(n){switch(n){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return cM;case 5125:return fM;case 36294:return dM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function yM(n,e){n.uniform1fv(this.addr,e)}function SM(n,e){const t=ws(e,this.size,2);n.uniform2fv(this.addr,t)}function MM(n,e){const t=ws(e,this.size,3);n.uniform3fv(this.addr,t)}function wM(n,e){const t=ws(e,this.size,4);n.uniform4fv(this.addr,t)}function EM(n,e){const t=ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TM(n,e){const t=ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bM(n,e){const t=ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CM(n,e){n.uniform1iv(this.addr,e)}function AM(n,e){n.uniform2iv(this.addr,e)}function LM(n,e){n.uniform3iv(this.addr,e)}function PM(n,e){n.uniform4iv(this.addr,e)}function RM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function IM(n,e){n.uniform3uiv(this.addr,e)}function NM(n,e){n.uniform4uiv(this.addr,e)}function FM(n,e,t){const i=e.length,r=Tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||l0,r[s])}function kM(n,e,t){const i=e.length,r=Tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||c0,r[s])}function zM(n,e,t){const i=e.length,r=Tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||f0,r[s])}function OM(n,e,t){const i=e.length,r=Tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||u0,r[s])}function UM(n){switch(n){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return bM;case 5124:case 35670:return CM;case 35667:case 35671:return AM;case 35668:case 35672:return LM;case 35669:case 35673:return PM;case 5125:return RM;case 36294:return DM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xM(t.type)}}class VM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=UM(t.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function op(n,e){n.seq.push(e),n.map[e.id]=e}function HM(n,e,t){const i=n.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){op(t,u===void 0?new BM(a,n,e):new VM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new GM(a),op(t,d)),t=d}}}class Ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ap(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let WM=0;function jM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function XM(n){switch(n){case fr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function lp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),o)}else return r}function qM(n,e){const t=XM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function YM(n,e){let t;switch(e){case gx:t="Linear";break;case vx:t="Reinhard";break;case _x:t="OptimizedCineon";break;case xx:t="ACESFilmic";break;case yx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $M(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function ZM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qs(n){return n!==""}function up(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(KM,JM)}function JM(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bc(t)}const ew=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(tw,d0).replace(ew,nw)}function nw(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),d0(n,e,t,i)}function d0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xs&&(e="SHADOWMAP_TYPE_VSM"),e}function rw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function ow(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jg:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function aw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=iw(t),u=rw(t),c=sw(t),d=ow(t),f=aw(t),g=t.isWebGL2?"":$M(t),_=ZM(s),h=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(qs).join(`
`),p.length>0&&(p+=`
`),m=[g,_].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(p=[dp(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[g,dp(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Jn?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,qM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=Bc(o),o=up(o,t),o=cp(o,t),a=Bc(a),a=up(a,t),a=cp(a,t),o=fp(o),a=fp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+p+o,w=v+m+a,S=ap(r,35633,x),C=ap(r,35632,w);if(r.attachShader(h,S),r.attachShader(h,C),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(h).trim(),N=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(C).trim();let te=!0,K=!0;if(r.getProgramParameter(h,35714)===!1){te=!1;const k=lp(r,S,"vertex"),Y=lp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+A+`
`+k+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(N===""||O==="")&&(K=!1);K&&(this.diagnostics={runnable:te,programLog:A,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Ia(r,h)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=QM(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}let uw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new fw(e);t.set(e,i)}return t.get(e)}}class fw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function dw(n,e,t,i,r,s,o){const a=new e0,l=new cw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,A,N,O,te){const K=O.fog,k=te.geometry,Y=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),W=!!V&&V.mapping===wl?V.image.height:null,D=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const I=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=I!==void 0?I.length:0;let X=0;k.morphAttributes.position!==void 0&&(X=1),k.morphAttributes.normal!==void 0&&(X=2),k.morphAttributes.color!==void 0&&(X=3);let j,Z,ce,he;if(D){const De=Fn[D];j=De.vertexShader,Z=De.fragmentShader}else j=y.vertexShader,Z=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const G=n.getRenderTarget(),Ge=y.alphaTest>0,Ee=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:y.type,vertexShader:j,fragmentShader:Z,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:fr,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:W,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ux,tangentSpaceNormalMap:y.normalMapType===Yg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qe,clearcoat:Ee,clearcoatMap:Ee&&!!y.clearcoatMap,clearcoatRoughnessMap:Ee&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===os,alphaMap:!!y.alphaMap,alphaTest:Ge,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!K,useFog:y.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Jn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===Tn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(A,y),v(A,y),A.push(n.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),y.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),y.push(a.mask)}function x(y){const A=_[y.type];let N;if(A){const O=Fn[A];N=r0.clone(O.uniforms)}else N=y.uniforms;return N}function w(y,A){let N;for(let O=0,te=u.length;O<te;O++){const K=u[O];if(K.cacheKey===A){N=K,++N.usedTimes;break}}return N===void 0&&(N=new lw(n,A,y,s),u.push(N)),N}function S(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function P(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:P}}function hw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function pw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,g,_,h,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:h,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,_,h,p){const m=o(d,f,g,_,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(d,f,g,_,h,p){const m=o(d,f,g,_,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||pw),i.length>1&&i.sort(f||hp),r.length>1&&r.sort(f||hp)}function c(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function mw(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new pp,n.set(i,[s])):r>=n.get(i).length?(s=new pp,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function gw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ie};break;case"SpotLight":t={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function vw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _w=0;function xw(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function yw(n,e){const t=new gw,i=vw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new nt,a=new nt;function l(c,d){let f=0,g=0,_=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let h=0,p=0,m=0,v=0,x=0,w=0,S=0,C=0;c.sort(xw);const P=d!==!0?Math.PI:1;for(let A=0,N=c.length;A<N;A++){const O=c[A],te=O.color,K=O.intensity,k=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=te.r*K*P,g+=te.g*K*P,_+=te.b*K*P;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],K);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*P),O.castShadow){const W=O.shadow,D=i.get(O);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,r.directionalShadow[h]=D,r.directionalShadowMap[h]=Y,r.directionalShadowMatrix[h]=O.shadow.matrix,w++}r.directional[h]=V,h++}else if(O.isSpotLight){const V=t.get(O);if(V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(te).multiplyScalar(K*P),V.distance=k,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,O.castShadow){const W=O.shadow,D=i.get(O);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,r.spotShadow[m]=D,r.spotShadowMap[m]=Y,r.spotShadowMatrix[m]=O.shadow.matrix,C++}r.spot[m]=V,m++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(te).multiplyScalar(K),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=V,v++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*P),V.distance=O.distance,V.decay=O.decay,O.castShadow){const W=O.shadow,D=i.get(O);D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,r.pointShadow[p]=D,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=O.shadow.matrix,S++}r.point[p]=V,p++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(K*P),V.groundColor.copy(O.groundColor).multiplyScalar(K*P),r.hemi[x]=V,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==w||y.numPointShadows!==S||y.numSpotShadows!==C)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=C,y.directionalLength=h,y.pointLength=p,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=w,y.numPointShadows=S,y.numSpotShadows=C,r.version=_w++)}function u(c,d){let f=0,g=0,_=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const w=c[v];if(w.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(w.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(w.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function mp(n,e){const t=new yw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Sw(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new mp(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new mp(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Mw extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bw(n,e,t){let i=new Vf;const r=new pe,s=new pe,o=new We,a=new Mw({depthPacking:Ox}),l=new ww,u={},c=t.maxTextureSize,d={0:Tn,1:ur,2:ri},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Ew,fragmentShader:Tw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Be(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg,this.render=function(w,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,te=w.length;O<te;O++){const K=w[O],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();if(r.multiply(Y),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null){const W=this.type!==Xs?{minFilter:Je,magFilter:Je}:{};k.map=new si(r.x,r.y,W),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const V=k.getViewportCount();for(let W=0;W<V;W++){const D=k.getViewport(W);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),N.viewport(o),k.updateMatrices(K,W),i=k.getFrustum(),x(S,C,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Xs&&m(k,C),k.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(P,y,A)};function m(w,S){const C=e.update(h);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,C,f,h,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,C,g,h,null)}function v(w,S,C,P,y,A){let N=null;const O=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0?N=O:N=C.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const te=N.uuid,K=S.uuid;let k=u[te];k===void 0&&(k={},u[te]=k);let Y=k[K];Y===void 0&&(Y=N.clone(),k[K]=Y),N=Y}return N.visible=S.visible,N.wireframe=S.wireframe,A===Xs?N.side=S.shadowSide!==null?S.shadowSide:S.side:N.side=S.shadowSide!==null?S.shadowSide:d[S.side],N.alphaMap=S.alphaMap,N.alphaTest=S.alphaTest,N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.displacementMap=S.displacementMap,N.displacementScale=S.displacementScale,N.displacementBias=S.displacementBias,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(C.matrixWorld),N.nearDistance=P,N.farDistance=y),N}function x(w,S,C,P,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Xs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),te=w.material;if(Array.isArray(te)){const K=O.groups;for(let k=0,Y=K.length;k<Y;k++){const V=K[k],W=te[V.materialIndex];if(W&&W.visible){const D=v(w,W,P,C.near,C.far,y);n.renderBufferDirect(C,null,O,D,w,V)}}}else if(te.visible){const K=v(w,te,P,C.near,C.far,y);n.renderBufferDirect(C,null,O,K,w,null)}}const N=w.children;for(let O=0,te=N.length;O<te;O++)x(N[O],S,C,P,y)}}function Cw(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const ie=new We;let ee=null;const ge=new We(0,0,0,0);return{setMask:function(le){ee!==le&&!L&&(n.colorMask(le,le,le,le),ee=le)},setLocked:function(le){L=le},setClear:function(le,me,re,ye,ke){ke===!0&&(le*=ye,me*=ye,re*=ye),ie.set(le,me,re,ye),ge.equals(ie)===!1&&(n.clearColor(le,me,re,ye),ge.copy(ie))},reset:function(){L=!1,ee=null,ge.set(-1,0,0,0)}}}function s(){let L=!1,ie=null,ee=null,ge=null;return{setTest:function(le){le?he(2929):G(2929)},setMask:function(le){ie!==le&&!L&&(n.depthMask(le),ie=le)},setFunc:function(le){if(ee!==le){if(le)switch(le){case ax:n.depthFunc(512);break;case lx:n.depthFunc(519);break;case ux:n.depthFunc(513);break;case Ic:n.depthFunc(515);break;case cx:n.depthFunc(514);break;case fx:n.depthFunc(518);break;case dx:n.depthFunc(516);break;case hx:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ee=le}},setLocked:function(le){L=le},setClear:function(le){ge!==le&&(n.clearDepth(le),ge=le)},reset:function(){L=!1,ie=null,ee=null,ge=null}}}function o(){let L=!1,ie=null,ee=null,ge=null,le=null,me=null,re=null,ye=null,ke=null;return{setTest:function(ze){L||(ze?he(2960):G(2960))},setMask:function(ze){ie!==ze&&!L&&(n.stencilMask(ze),ie=ze)},setFunc:function(ze,Ct,Ln){(ee!==ze||ge!==Ct||le!==Ln)&&(n.stencilFunc(ze,Ct,Ln),ee=ze,ge=Ct,le=Ln)},setOp:function(ze,Ct,Ln){(me!==ze||re!==Ct||ye!==Ln)&&(n.stencilOp(ze,Ct,Ln),me=ze,re=Ct,ye=Ln)},setLocked:function(ze){L=ze},setClear:function(ze){ke!==ze&&(n.clearStencil(ze),ke=ze)},reset:function(){L=!1,ie=null,ee=null,ge=null,le=null,me=null,re=null,ye=null,ke=null}}}const a=new r,l=new s,u=new o;let c={},d={},f=new WeakMap,g=[],_=null,h=!1,p=null,m=null,v=null,x=null,w=null,S=null,C=null,P=!1,y=null,A=null,N=null,O=null,te=null;const K=n.getParameter(35661);let k=!1,Y=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Y>=2);let W=null,D={};const I=n.getParameter(3088),F=n.getParameter(2978),X=new We().fromArray(I),j=new We().fromArray(F);function Z(L,ie,ee){const ge=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let me=0;me<ee;me++)n.texImage2D(ie+me,0,6408,1,1,0,6408,5121,ge);return le}const ce={};ce[3553]=Z(3553,3553,1),ce[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(2929),l.setFunc(Ic),ot(!1),ft(sh),he(2884),be(Di);function he(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function G(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Ge(L,ie){return d[L]!==ie?(n.bindFramebuffer(L,ie),d[L]=ie,i&&(L===36009&&(d[36160]=ie),L===36160&&(d[36009]=ie)),!0):!1}function Ee(L,ie){let ee=g,ge=!1;if(L)if(ee=f.get(ie),ee===void 0&&(ee=[],f.set(ie,ee)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(ee.length!==le.length||ee[0]!==36064){for(let me=0,re=le.length;me<re;me++)ee[me]=36064+me;ee.length=le.length,ge=!0}}else ee[0]!==36064&&(ee[0]=36064,ge=!0);else ee[0]!==1029&&(ee[0]=1029,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Se(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const fe={[Br]:32774,[Z_]:32778,[Q_]:32779};if(i)fe[uh]=32775,fe[ch]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(fe[uh]=L.MIN_EXT,fe[ch]=L.MAX_EXT)}const De={[K_]:0,[J_]:1,[ex]:768,[Hg]:770,[ox]:776,[rx]:774,[nx]:772,[tx]:769,[Wg]:771,[sx]:775,[ix]:773};function be(L,ie,ee,ge,le,me,re,ye){if(L===Di){h===!0&&(G(3042),h=!1);return}if(h===!1&&(he(3042),h=!0),L!==$_){if(L!==p||ye!==P){if((m!==Br||w!==Br)&&(n.blendEquation(32774),m=Br,w=Br),ye)switch(L){case os:n.blendFuncSeparate(1,771,1,771);break;case oh:n.blendFunc(1,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:n.blendFuncSeparate(770,771,1,771);break;case oh:n.blendFunc(770,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,x=null,S=null,C=null,p=L,P=ye}return}le=le||ie,me=me||ee,re=re||ge,(ie!==m||le!==w)&&(n.blendEquationSeparate(fe[ie],fe[le]),m=ie,w=le),(ee!==v||ge!==x||me!==S||re!==C)&&(n.blendFuncSeparate(De[ee],De[ge],De[me],De[re]),v=ee,x=ge,S=me,C=re),p=L,P=null}function ve(L,ie){L.side===ri?G(2884):he(2884);let ee=L.side===Tn;ie&&(ee=!ee),ot(ee),L.blending===os&&L.transparent===!1?be(Di):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ge=L.stencilWrite;u.setTest(ge),ge&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(32926):G(32926)}function ot(L){y!==L&&(L?n.frontFace(2304):n.frontFace(2305),y=L)}function ft(L){L!==j_?(he(2884),L!==A&&(L===sh?n.cullFace(1029):L===X_?n.cullFace(1028):n.cullFace(1032))):G(2884),A=L}function mt(L){L!==N&&(k&&n.lineWidth(L),N=L)}function Wt(L,ie,ee){L?(he(32823),(O!==ie||te!==ee)&&(n.polygonOffset(ie,ee),O=ie,te=ee)):G(32823)}function at(L){L?he(3089):G(3089)}function Fe(L){L===void 0&&(L=33984+K-1),W!==L&&(n.activeTexture(L),W=L)}function tn(L,ie){W===null&&Fe();let ee=D[W];ee===void 0&&(ee={type:void 0,texture:void 0},D[W]=ee),(ee.type!==L||ee.texture!==ie)&&(n.bindTexture(L,ie||ce[L]),ee.type=L,ee.texture=ie)}function nn(){const L=D[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(L){X.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),X.copy(L))}function oe(L){j.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,D={},d={},f=new WeakMap,g=[],_=null,h=!1,p=null,m=null,v=null,x=null,w=null,S=null,C=null,P=!1,y=null,A=null,N=null,O=null,te=null,X.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:he,disable:G,bindFramebuffer:Ge,drawBuffers:Ee,useProgram:Se,setBlending:be,setMaterial:ve,setFlipSided:ot,setCullFace:ft,setLineWidth:mt,setPolygonOffset:Wt,setScissorTest:at,activeTexture:Fe,bindTexture:tn,unbindTexture:nn,compressedTexImage2D:b,texImage2D:_e,texImage3D:E,texStorage2D:se,texStorage3D:ue,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:J,scissor:$,viewport:oe,reset:ne}}function Aw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):ol("canvas")}function x(b,M,H,J){let se=1;if((b.width>J||b.height>J)&&(se=J/Math.max(b.width,b.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ue=M?Uc:Math.floor,_e=ue(se*b.width),E=ue(se*b.height);h===void 0&&(h=v(_e,E));const $=H?v(_e,E):h;return $.width=_e,$.height=E,$.getContext("2d").drawImage(b,0,0,_e,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+E+")."),$}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function w(b){return kh(b.width)&&kh(b.height)}function S(b){return a?!1:b.wrapS!==Mn||b.wrapT!==Mn||b.minFilter!==Je&&b.minFilter!==ln}function C(b,M){return b.generateMipmaps&&M&&b.minFilter!==Je&&b.minFilter!==ln}function P(b){n.generateMipmap(b)}function y(b,M,H,J,se=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=M;return M===6403&&(H===5126&&(ue=33326),H===5131&&(ue=33325),H===5121&&(ue=33321)),M===33319&&(H===5126&&(ue=33328),H===5131&&(ue=33327),H===5121&&(ue=33323)),M===6408&&(H===5126&&(ue=34836),H===5131&&(ue=34842),H===5121&&(ue=J===Qe&&se===!1?35907:32856),H===32819&&(ue=32854),H===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function A(b,M,H){return C(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Je&&b.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function N(b){return b===Je||b===fh||b===dh?9728:9729}function O(b){const M=b.target;M.removeEventListener("dispose",O),K(M),M.isVideoTexture&&_.delete(M)}function te(b){const M=b.target;M.removeEventListener("dispose",te),Y(M)}function K(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,J=p.get(H);if(J){const se=J[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(b),Object.keys(J).length===0&&p.delete(H)}i.remove(b)}function k(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const H=b.source,J=p.get(H);delete J[M.__cacheKey],o.memory.textures--}function Y(b){const M=b.texture,H=i.get(b),J=i.get(M);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(H.__webglFramebuffer[se]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[se]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let se=0;se<H.__webglColorRenderbuffer.length;se++)H.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[se]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,ue=M.length;se<ue;se++){const _e=i.get(M[se]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(b)}let V=0;function W(){V=0}function D(){const b=V;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),V+=1,b}function I(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function F(b,M){const H=i.get(b);if(b.isVideoTexture&&tn(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,b,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,H.__webglTexture)}function X(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ee(H,b,M);return}t.activeTexture(33984+M),t.bindTexture(35866,H.__webglTexture)}function j(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ee(H,b,M);return}t.activeTexture(33984+M),t.bindTexture(32879,H.__webglTexture)}function Z(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Se(H,b,M);return}t.activeTexture(33984+M),t.bindTexture(34067,H.__webglTexture)}const ce={[Fc]:10497,[Mn]:33071,[kc]:33648},he={[Je]:9728,[fh]:9984,[dh]:9986,[ln]:9729,[Sx]:9985,[El]:9987};function G(b,M,H){if(H?(n.texParameteri(b,10242,ce[M.wrapS]),n.texParameteri(b,10243,ce[M.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ce[M.wrapR]),n.texParameteri(b,10240,he[M.magFilter]),n.texParameteri(b,10241,he[M.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(M.wrapS!==Mn||M.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,N(M.magFilter)),n.texParameteri(b,10241,N(M.minFilter)),M.minFilter!==Je&&M.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===So&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ge(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",O));const J=M.source;let se=p.get(J);se===void 0&&(se={},p.set(J,se));const ue=I(M);if(ue!==b.__cacheKey){se[ue]===void 0&&(se[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),se[ue].usedTimes++;const _e=se[b.__cacheKey];_e!==void 0&&(se[b.__cacheKey].usedTimes--,_e.usedTimes===0&&k(M)),b.__cacheKey=ue,b.__webglTexture=se[ue].texture}return H}function Ee(b,M,H){let J=3553;M.isDataArrayTexture&&(J=35866),M.isData3DTexture&&(J=32879);const se=Ge(b,M),ue=M.source;if(t.activeTexture(33984+H),t.bindTexture(J,b.__webglTexture),ue.version!==ue.__currentVersion||se===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const _e=S(M)&&w(M.image)===!1;let E=x(M.image,_e,!1,c);E=nn(M,E);const $=w(E)||a,oe=s.convert(M.format,M.encoding);let ne=s.convert(M.type),L=y(M.internalFormat,oe,ne,M.encoding,M.isVideoTexture);G(J,M,$);let ie;const ee=M.mipmaps,ge=a&&M.isVideoTexture!==!0,le=ue.__currentVersion===void 0||se===!0,me=A(M,E,$);if(M.isDepthTexture)L=6402,a?M.type===wi?L=36012:M.type===Ki?L=33190:M.type===as?L=35056:L=33189:M.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===nr&&L===6402&&M.type!==qg&&M.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ki,ne=s.convert(M.type)),M.format===vs&&L===6402&&(L=34041,M.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=as,ne=s.convert(M.type))),le&&(ge?t.texStorage2D(3553,1,L,E.width,E.height):t.texImage2D(3553,0,L,E.width,E.height,0,oe,ne,null));else if(M.isDataTexture)if(ee.length>0&&$){ge&&le&&t.texStorage2D(3553,me,L,ee[0].width,ee[0].height);for(let re=0,ye=ee.length;re<ye;re++)ie=ee[re],ge?t.texSubImage2D(3553,re,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,re,L,ie.width,ie.height,0,oe,ne,ie.data);M.generateMipmaps=!1}else ge?(le&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,oe,ne,E.data)):t.texImage2D(3553,0,L,E.width,E.height,0,oe,ne,E.data);else if(M.isCompressedTexture){ge&&le&&t.texStorage2D(3553,me,L,ee[0].width,ee[0].height);for(let re=0,ye=ee.length;re<ye;re++)ie=ee[re],M.format!==On?oe!==null?ge?t.compressedTexSubImage2D(3553,re,0,0,ie.width,ie.height,oe,ie.data):t.compressedTexImage2D(3553,re,L,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(3553,re,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,re,L,ie.width,ie.height,0,oe,ne,ie.data)}else if(M.isDataArrayTexture)ge?(le&&t.texStorage3D(35866,me,L,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,oe,ne,E.data)):t.texImage3D(35866,0,L,E.width,E.height,E.depth,0,oe,ne,E.data);else if(M.isData3DTexture)ge?(le&&t.texStorage3D(32879,me,L,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,oe,ne,E.data)):t.texImage3D(32879,0,L,E.width,E.height,E.depth,0,oe,ne,E.data);else if(M.isFramebufferTexture){if(le)if(ge)t.texStorage2D(3553,me,L,E.width,E.height);else{let re=E.width,ye=E.height;for(let ke=0;ke<me;ke++)t.texImage2D(3553,ke,L,re,ye,0,oe,ne,null),re>>=1,ye>>=1}}else if(ee.length>0&&$){ge&&le&&t.texStorage2D(3553,me,L,ee[0].width,ee[0].height);for(let re=0,ye=ee.length;re<ye;re++)ie=ee[re],ge?t.texSubImage2D(3553,re,0,0,oe,ne,ie):t.texImage2D(3553,re,L,oe,ne,ie);M.generateMipmaps=!1}else ge?(le&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,oe,ne,E)):t.texImage2D(3553,0,L,oe,ne,E);C(M,$)&&P(J),ue.__currentVersion=ue.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Se(b,M,H){if(M.image.length!==6)return;const J=Ge(b,M),se=M.source;if(t.activeTexture(33984+H),t.bindTexture(34067,b.__webglTexture),se.version!==se.__currentVersion||J===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,E=[];for(let re=0;re<6;re++)!ue&&!_e?E[re]=x(M.image[re],!1,!0,u):E[re]=_e?M.image[re].image:M.image[re],E[re]=nn(M,E[re]);const $=E[0],oe=w($)||a,ne=s.convert(M.format,M.encoding),L=s.convert(M.type),ie=y(M.internalFormat,ne,L,M.encoding),ee=a&&M.isVideoTexture!==!0,ge=se.__currentVersion===void 0||J===!0;let le=A(M,$,oe);G(34067,M,oe);let me;if(ue){ee&&ge&&t.texStorage2D(34067,le,ie,$.width,$.height);for(let re=0;re<6;re++){me=E[re].mipmaps;for(let ye=0;ye<me.length;ye++){const ke=me[ye];M.format!==On?ne!==null?ee?t.compressedTexSubImage2D(34069+re,ye,0,0,ke.width,ke.height,ne,ke.data):t.compressedTexImage2D(34069+re,ye,ie,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?t.texSubImage2D(34069+re,ye,0,0,ke.width,ke.height,ne,L,ke.data):t.texImage2D(34069+re,ye,ie,ke.width,ke.height,0,ne,L,ke.data)}}}else{me=M.mipmaps,ee&&ge&&(me.length>0&&le++,t.texStorage2D(34067,le,ie,E[0].width,E[0].height));for(let re=0;re<6;re++)if(_e){ee?t.texSubImage2D(34069+re,0,0,0,E[re].width,E[re].height,ne,L,E[re].data):t.texImage2D(34069+re,0,ie,E[re].width,E[re].height,0,ne,L,E[re].data);for(let ye=0;ye<me.length;ye++){const ze=me[ye].image[re].image;ee?t.texSubImage2D(34069+re,ye+1,0,0,ze.width,ze.height,ne,L,ze.data):t.texImage2D(34069+re,ye+1,ie,ze.width,ze.height,0,ne,L,ze.data)}}else{ee?t.texSubImage2D(34069+re,0,0,0,ne,L,E[re]):t.texImage2D(34069+re,0,ie,ne,L,E[re]);for(let ye=0;ye<me.length;ye++){const ke=me[ye];ee?t.texSubImage2D(34069+re,ye+1,0,0,ne,L,ke.image[re]):t.texImage2D(34069+re,ye+1,ie,ne,L,ke.image[re])}}}C(M,oe)&&P(34067),se.__currentVersion=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function fe(b,M,H,J,se){const ue=s.convert(H.format,H.encoding),_e=s.convert(H.type),E=y(H.internalFormat,ue,_e,H.encoding);i.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,E,M.width,M.height,M.depth,0,ue,_e,null):t.texImage2D(se,0,E,M.width,M.height,0,ue,_e,null)),t.bindFramebuffer(36160,b),Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,J,se,i.get(H).__webglTexture,0,at(M)):n.framebufferTexture2D(36160,J,se,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(b,M,H){if(n.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(H||Fe(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===wi?J=36012:se.type===Ki&&(J=33190));const ue=at(M);Fe(M)?f.renderbufferStorageMultisampleEXT(36161,ue,J,M.width,M.height):n.renderbufferStorageMultisample(36161,ue,J,M.width,M.height)}else n.renderbufferStorage(36161,J,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){const J=at(M);H&&Fe(M)===!1?n.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):Fe(M)?f.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<J.length;se++){const ue=J[se],_e=s.convert(ue.format,ue.encoding),E=s.convert(ue.type),$=y(ue.internalFormat,_e,E,ue.encoding),oe=at(M);H&&Fe(M)===!1?n.renderbufferStorageMultisample(36161,oe,$,M.width,M.height):Fe(M)?f.renderbufferStorageMultisampleEXT(36161,oe,$,M.width,M.height):n.renderbufferStorage(36161,$,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function be(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,se=at(M);if(M.depthTexture.format===nr)Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,se):n.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===vs)Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,se):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ve(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=n.createRenderbuffer(),De(M.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),De(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function ot(b,M,H){const J=i.get(b);M!==void 0&&fe(J.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&ve(b)}function ft(b){const M=b.texture,H=i.get(b),J=i.get(M);b.addEventListener("dispose",te),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,_e=w(b)||a;if(se){H.__webglFramebuffer=[];for(let E=0;E<6;E++)H.__webglFramebuffer[E]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const E=b.texture;for(let $=0,oe=E.length;$<oe;$++){const ne=i.get(E[$]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Fe(b)===!1){const E=ue?M:[M];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let $=0;$<E.length;$++){const oe=E[$];H.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[$]);const ne=s.convert(oe.format,oe.encoding),L=s.convert(oe.type),ie=y(oe.internalFormat,ne,L,oe.encoding),ee=at(b);n.renderbufferStorageMultisample(36161,ee,ie,b.width,b.height),n.framebufferRenderbuffer(36160,36064+$,36161,H.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),De(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,J.__webglTexture),G(34067,M,_e);for(let E=0;E<6;E++)fe(H.__webglFramebuffer[E],b,M,36064,34069+E);C(M,_e)&&P(34067),t.unbindTexture()}else if(ue){const E=b.texture;for(let $=0,oe=E.length;$<oe;$++){const ne=E[$],L=i.get(ne);t.bindTexture(3553,L.__webglTexture),G(3553,ne,_e),fe(H.__webglFramebuffer,b,ne,36064+$,3553),C(ne,_e)&&P(3553)}t.unbindTexture()}else{let E=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?E=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,J.__webglTexture),G(E,M,_e),fe(H.__webglFramebuffer,b,M,36064,E),C(M,_e)&&P(E),t.unbindTexture()}b.depthBuffer&&ve(b)}function mt(b){const M=w(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,se=H.length;J<se;J++){const ue=H[J];if(C(ue,M)){const _e=b.isWebGLCubeRenderTarget?34067:3553,E=i.get(ue).__webglTexture;t.bindTexture(_e,E),P(_e),t.unbindTexture()}}}function Wt(b){if(a&&b.samples>0&&Fe(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,J=b.height;let se=16384;const ue=[],_e=b.stencilBuffer?33306:36096,E=i.get(b),$=b.isWebGLMultipleRenderTargets===!0;if($)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){ue.push(36064+oe),b.depthBuffer&&ue.push(_e);const ne=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ne===!1&&(b.depthBuffer&&(se|=256),b.stencilBuffer&&(se|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[oe]),ne===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),$){const L=i.get(M[oe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,L,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,se,9728),g&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+oe,36161,E.__webglColorRenderbuffer[oe]);const ne=i.get(M[oe]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+oe,3553,ne,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function at(b){return Math.min(d,b.samples)}function Fe(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tn(b){const M=o.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function nn(b,M){const H=b.encoding,J=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Oc||H!==fr&&(H===Qe?a===!1?e.has("EXT_sRGB")===!0&&J===On?(b.format=Oc,b.minFilter=ln,b.generateMipmaps=!1):M=Qg.sRGBToLinear(M):(J!==On||se!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Fe}function Lw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===cr)return 5121;if(s===Tx)return 32819;if(s===bx)return 32820;if(s===Mx)return 5120;if(s===wx)return 5122;if(s===qg)return 5123;if(s===Ex)return 5124;if(s===Ki)return 5125;if(s===wi)return 5126;if(s===So)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cx)return 6406;if(s===On)return 6408;if(s===Lx)return 6409;if(s===Px)return 6410;if(s===nr)return 6402;if(s===vs)return 34041;if(s===Rx)return 6403;if(s===Ax)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Oc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Dx)return 36244;if(s===Ix)return 33319;if(s===Nx)return 33320;if(s===Fx)return 36249;if(s===ru||s===su||s===ou||s===au)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hh||s===ph||s===mh||s===gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===_h)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vh)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_h)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===yh||s===Sh||s===Mh||s===wh||s===Eh||s===Th||s===bh||s===Ch||s===Ah||s===Lh||s===Ph||s===Rh||s===Dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ah)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ph)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ih)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ih)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===as?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Pw extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _t extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rw={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i);if(u.joints[h.jointName]===void 0){const v=new _t;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[h.jointName]=v,u.add(v)}const m=u.joints[h.jointName];p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class h0 extends Gt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:nr,c!==nr&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===nr&&(i=Ki),i===void 0&&c===vs&&(i=as),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1}}class Dw extends mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const _=t.getContextAttributes();let h=null,p=null;const m=[],v=[],x=new $t;x.layers.enable(1),x.viewport=new We;const w=new $t;w.layers.enable(2),w.viewport=new We;const S=[x,w],C=new Pw;C.layers.enable(1),C.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=m[I];return F===void 0&&(F=new ku,m[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=m[I];return F===void 0&&(F=new ku,m[I]=F),F.getGripSpace()},this.getHand=function(I){let F=m[I];return F===void 0&&(F=new ku,m[I]=F),F.getHandSpace()};function A(I){const F=v.indexOf(I.inputSource);if(F===-1)return;const X=m[F];X!==void 0&&X.dispatchEvent({type:I.type,data:I.inputSource})}function N(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let I=0;I<m.length;I++){const F=v[I];F!==null&&(v[I]=null,m[I].disconnect(F))}P=null,y=null,e.setRenderTarget(h),f=null,d=null,c=null,r=null,p=null,D.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:f}),p=new si(f.framebufferWidth,f.framebufferHeight,{format:On,type:cr,encoding:e.outputEncoding})}else{let F=null,X=null,j=null;_.depth&&(j=_.stencil?35056:33190,F=_.stencil?vs:nr,X=_.stencil?as:Ki);const Z={colorFormat:32856,depthFormat:j,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(Z),r.updateRenderState({layers:[d]}),p=new si(d.textureWidth,d.textureHeight,{format:On,type:cr,depthTexture:new h0(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(I){for(let F=0;F<I.removed.length;F++){const X=I.removed[F],j=v.indexOf(X);j>=0&&(v[j]=null,m[j].dispatchEvent({type:"disconnected",data:X}))}for(let F=0;F<I.added.length;F++){const X=I.added[F];let j=v.indexOf(X);if(j===-1){for(let ce=0;ce<m.length;ce++)if(ce>=v.length){v.push(X),j=ce;break}else if(v[ce]===null){v[ce]=X,j=ce;break}if(j===-1)break}const Z=m[j];Z&&Z.dispatchEvent({type:"connected",data:X})}}const te=new R,K=new R;function k(I,F,X){te.setFromMatrixPosition(F.matrixWorld),K.setFromMatrixPosition(X.matrixWorld);const j=te.distanceTo(K),Z=F.projectionMatrix.elements,ce=X.projectionMatrix.elements,he=Z[14]/(Z[10]-1),G=Z[14]/(Z[10]+1),Ge=(Z[9]+1)/Z[5],Ee=(Z[9]-1)/Z[5],Se=(Z[8]-1)/Z[0],fe=(ce[8]+1)/ce[0],De=he*Se,be=he*fe,ve=j/(-Se+fe),ot=ve*-Se;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ot),I.translateZ(ve),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ft=he+ve,mt=G+ve,Wt=De-ot,at=be+(j-ot),Fe=Ge*G/mt*ft,tn=Ee*G/mt*ft;I.projectionMatrix.makePerspective(Wt,at,Fe,tn,ft,mt)}function Y(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;C.near=w.near=x.near=I.near,C.far=w.far=x.far=I.far,(P!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,y=C.far);const F=I.parent,X=C.cameras;Y(C,F);for(let Z=0;Z<X.length;Z++)Y(X[Z],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),I.position.copy(C.position),I.quaternion.copy(C.quaternion),I.scale.copy(C.scale),I.matrix.copy(C.matrix),I.matrixWorld.copy(C.matrixWorld);const j=I.children;for(let Z=0,ce=j.length;Z<ce;Z++)j[Z].updateMatrixWorld(!0);X.length===2?k(C,x,w):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let V=null;function W(I,F){if(u=F.getViewerPose(l||o),g=F,u!==null){const X=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let j=!1;X.length!==C.cameras.length&&(C.cameras.length=0,j=!0);for(let Z=0;Z<X.length;Z++){const ce=X[Z];let he=null;if(f!==null)he=f.getViewport(ce);else{const Ge=c.getViewSubImage(d,ce);he=Ge.viewport,Z===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let G=S[Z];G===void 0&&(G=new $t,G.layers.enable(Z),G.viewport=new We,S[Z]=G),G.matrix.fromArray(ce.transform.matrix),G.projectionMatrix.fromArray(ce.projectionMatrix),G.viewport.set(he.x,he.y,he.width,he.height),Z===0&&C.matrix.copy(G.matrix),j===!0&&C.cameras.push(G)}}for(let X=0;X<m.length;X++){const j=v[X],Z=m[X];j!==null&&Z!==void 0&&Z.update(j,F,l||o)}V&&V(I,F),g=null}const D=new a0;D.setAnimationLoop(W),this.setAnimationLoop=function(I){V=I},this.dispose=function(){}}}function Iw(n,e){function t(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Tn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Tn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Tn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Nw(){const n=ol("canvas");return n.style.display="block",n}function p0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Nw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,m=0,v=0,x=null,w=-1,S=null;const C=new We,P=new We;let y=null,A=e.width,N=e.height,O=1,te=null,K=null;const k=new We(0,0,A,N),Y=new We(0,0,A,N);let V=!1;const W=new Vf;let D=!1,I=!1,F=null;const X=new nt,j=new pe,Z=new R,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?O:1}let G=t;function Ge(T,z){for(let B=0;B<T.length;B++){const U=T[B],q=e.getContext(U,z);if(q!==null)return q}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uf}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",ee,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),G=Ge(z,T),G===null)throw Ge(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Se,fe,De,be,ve,ot,ft,mt,Wt,at,Fe,tn,nn,b,M,H,J,se,ue,_e,E,$;function oe(){Ee=new XS(G),Se=new BS(G,Ee,n),Ee.init(Se),E=new Lw(G,Ee,Se),fe=new Cw(G,Ee,Se),De=new $S,be=new hw,ve=new Aw(G,Ee,fe,be,Se,E,De),ot=new GS(h),ft=new jS(h),mt=new ay(G,Se),$=new OS(G,Ee,mt,Se),Wt=new qS(G,mt,De,$),at=new JS(G,Wt,mt,De),se=new KS(G,Se,ve),M=new VS(be),Fe=new dw(h,ot,ft,Ee,Se,$,M),tn=new Iw(h,be),nn=new mw,b=new Sw(Ee,Se),J=new zS(h,ot,fe,at,c,o),H=new bw(h,at,Se),ue=new US(G,Ee,De,Se),_e=new YS(G,Ee,De,Se),De.programs=Fe.programs,h.capabilities=Se,h.extensions=Ee,h.properties=be,h.renderLists=nn,h.shadowMap=H,h.state=fe,h.info=De}oe();const ne=new Dw(h,G);this.xr=ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(A,N,!1))},this.getSize=function(T){return T.set(A,N)},this.setSize=function(T,z,B){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,N=z,e.width=Math.floor(T*O),e.height=Math.floor(z*O),B!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(A*O,N*O).floor()},this.setDrawingBufferSize=function(T,z,B){A=T,N=z,O=B,e.width=Math.floor(T*B),e.height=Math.floor(z*B),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,z,B,U){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,z,B,U),fe.viewport(C.copy(k).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,z,B,U){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,z,B,U),fe.scissor(P.copy(Y).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){fe.setScissorTest(V=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(T=!0,z=!0,B=!0){let U=0;T&&(U|=16384),z&&(U|=256),B&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),nn.dispose(),b.dispose(),be.dispose(),ot.dispose(),ft.dispose(),at.dispose(),$.dispose(),Fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ke),ne.removeEventListener("sessionend",ze),F&&(F.dispose(),F=null),Ct.stop()};function L(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=De.autoReset,z=H.enabled,B=H.autoUpdate,U=H.needsUpdate,q=H.type;oe(),De.autoReset=T,H.enabled=z,H.autoUpdate=B,H.needsUpdate=U,H.type=q}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){const z=T.target;z.removeEventListener("dispose",ge),le(z)}function le(T){me(T),be.remove(T)}function me(T){const z=be.get(T).programs;z!==void 0&&(z.forEach(function(B){Fe.releaseProgram(B)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,B,U,q,xe){z===null&&(z=ce);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Te=E0(T,z,B,U,q);fe.setMaterial(U,Me);let we=B.index;const Oe=B.attributes.position;if(we===null){if(Oe===void 0||Oe.count===0)return}else if(we.count===0)return;let Le=1;U.wireframe===!0&&(we=Wt.getWireframeAttribute(B),Le=2),$.setup(q,U,Te,B,we);let Re,Ze=ue;we!==null&&(Re=mt.get(we),Ze=_e,Ze.setIndex(Re));const Ui=we!==null?we.count:Oe.count,gr=B.drawRange.start*Le,vr=B.drawRange.count*Le,Pn=xe!==null?xe.start*Le:0,Ne=xe!==null?xe.count*Le:1/0,_r=Math.max(gr,Pn),it=Math.min(Ui,gr+vr,Pn+Ne)-1,Rn=Math.max(0,it-_r+1);if(Rn!==0){if(q.isMesh)U.wireframe===!0?(fe.setLineWidth(U.wireframeLinewidth*he()),Ze.setMode(1)):Ze.setMode(4);else if(q.isLine){let li=U.linewidth;li===void 0&&(li=1),fe.setLineWidth(li*he()),q.isLineSegments?Ze.setMode(1):q.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else q.isPoints?Ze.setMode(0):q.isSprite&&Ze.setMode(4);if(q.isInstancedMesh)Ze.renderInstances(_r,Rn,q.count);else if(B.isInstancedBufferGeometry){const li=Math.min(B.instanceCount,B._maxInstanceCount);Ze.renderInstances(_r,Rn,li)}else Ze.render(_r,Rn)}},this.compile=function(T,z){f=b.get(T),f.init(),_.push(f),T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(h.physicallyCorrectLights),T.traverse(function(B){const U=B.material;if(U)if(Array.isArray(U))for(let q=0;q<U.length;q++){const xe=U[q];Ll(xe,T,B)}else Ll(U,T,B)}),_.pop(),f=null};let re=null;function ye(T){re&&re(T)}function ke(){Ct.stop()}function ze(){Ct.start()}const Ct=new a0;Ct.setAnimationLoop(ye),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){re=T,ne.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},ne.addEventListener("sessionstart",ke),ne.addEventListener("sessionend",ze),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,z,x),f=b.get(T,_.length),f.init(),_.push(f),X.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(X),I=this.localClippingEnabled,D=M.init(this.clippingPlanes,I,z),d=nn.get(T,g.length),d.init(),g.push(d),Ln(T,z,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(te,K),D===!0&&M.beginShadows();const B=f.state.shadowsArray;if(H.render(B,T,z),D===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(d,T),f.setupLights(h.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let q=0,xe=U.length;q<xe;q++){const Me=U[q];Yf(d,T,Me,Me.viewport)}}else Yf(d,T,z);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(h,T,z),$.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ln(T,z,B,U){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){U&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Me=at.update(T),Te=T.material;Te.visible&&d.push(T,Me,Te,B,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==De.render.frame&&(T.skeleton.update(),T.skeleton.frame=De.render.frame),!T.frustumCulled||W.intersectsObject(T))){U&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Me=at.update(T),Te=T.material;if(Array.isArray(Te)){const we=Me.groups;for(let Oe=0,Le=we.length;Oe<Le;Oe++){const Re=we[Oe],Ze=Te[Re.materialIndex];Ze&&Ze.visible&&d.push(T,Me,Ze,B,Z.z,Re)}}else Te.visible&&d.push(T,Me,Te,B,Z.z,null)}}const xe=T.children;for(let Me=0,Te=xe.length;Me<Te;Me++)Ln(xe[Me],z,B,U)}function Yf(T,z,B,U){const q=T.opaque,xe=T.transmissive,Me=T.transparent;f.setupLightsView(B),xe.length>0&&M0(q,z,B),U&&fe.viewport(C.copy(U)),q.length>0&&Po(q,z,B),xe.length>0&&Po(xe,z,B),Me.length>0&&Po(Me,z,B),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function M0(T,z,B){const U=Se.isWebGL2;F===null&&(F=new si(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?So:cr,minFilter:El,samples:U&&s===!0?4:0})),h.getDrawingBufferSize(j),U?F.setSize(j.x,j.y):F.setSize(Uc(j.x),Uc(j.y));const q=h.getRenderTarget();h.setRenderTarget(F),h.clear();const xe=h.toneMapping;h.toneMapping=Jn,Po(T,z,B),h.toneMapping=xe,ve.updateMultisampleRenderTarget(F),ve.updateRenderTargetMipmap(F),h.setRenderTarget(q)}function Po(T,z,B){const U=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xe=T.length;q<xe;q++){const Me=T[q],Te=Me.object,we=Me.geometry,Oe=U===null?Me.material:U,Le=Me.group;Te.layers.test(B.layers)&&w0(Te,z,B,we,Oe,Le)}}function w0(T,z,B,U,q,xe){T.onBeforeRender(h,z,B,U,q,xe),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(h,z,B,U,T,xe),q.transparent===!0&&q.side===ri?(q.side=Tn,q.needsUpdate=!0,h.renderBufferDirect(B,z,U,q,T,xe),q.side=ur,q.needsUpdate=!0,h.renderBufferDirect(B,z,U,q,T,xe),q.side=ri):h.renderBufferDirect(B,z,U,q,T,xe),T.onAfterRender(h,z,B,U,q,xe)}function Ll(T,z,B){z.isScene!==!0&&(z=ce);const U=be.get(T),q=f.state.lights,xe=f.state.shadowsArray,Me=q.state.version,Te=Fe.getParameters(T,q.state,xe,z,B),we=Fe.getProgramCacheKey(Te);let Oe=U.programs;U.environment=T.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(T.isMeshStandardMaterial?ft:ot).get(T.envMap||U.environment),Oe===void 0&&(T.addEventListener("dispose",ge),Oe=new Map,U.programs=Oe);let Le=Oe.get(we);if(Le!==void 0){if(U.currentProgram===Le&&U.lightsStateVersion===Me)return $f(T,Te),Le}else Te.uniforms=Fe.getUniforms(T),T.onBuild(B,Te,h),T.onBeforeCompile(Te,h),Le=Fe.acquireProgram(Te,we),Oe.set(we,Le),U.uniforms=Te.uniforms;const Re=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=M.uniform),$f(T,Te),U.needsLights=b0(T),U.lightsStateVersion=Me,U.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.directionalShadowMap.value=q.state.directionalShadowMap,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotShadowMap.value=q.state.spotShadowMap,Re.spotShadowMatrix.value=q.state.spotShadowMatrix,Re.pointShadowMap.value=q.state.pointShadowMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ze=Le.getUniforms(),Ui=Ia.seqWithValue(Ze.seq,Re);return U.currentProgram=Le,U.uniformsList=Ui,Le}function $f(T,z){const B=be.get(T);B.outputEncoding=z.outputEncoding,B.instancing=z.instancing,B.skinning=z.skinning,B.morphTargets=z.morphTargets,B.morphNormals=z.morphNormals,B.morphColors=z.morphColors,B.morphTargetsCount=z.morphTargetsCount,B.numClippingPlanes=z.numClippingPlanes,B.numIntersection=z.numClipIntersection,B.vertexAlphas=z.vertexAlphas,B.vertexTangents=z.vertexTangents,B.toneMapping=z.toneMapping}function E0(T,z,B,U,q){z.isScene!==!0&&(z=ce),ve.resetTextureUnits();const xe=z.fog,Me=U.isMeshStandardMaterial?z.environment:null,Te=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:fr,we=(U.isMeshStandardMaterial?ft:ot).get(U.envMap||Me),Oe=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!U.normalMap&&!!B.attributes.tangent,Re=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,Ui=!!B.morphAttributes.color,gr=U.toneMapped?h.toneMapping:Jn,vr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pn=vr!==void 0?vr.length:0,Ne=be.get(U),_r=f.state.lights;if(D===!0&&(I===!0||T!==S)){const Dn=T===S&&U.id===w;M.setState(U,T,Dn)}let it=!1;U.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_r.state.version||Ne.outputEncoding!==Te||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==we||U.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==M.numPlanes||Ne.numIntersection!==M.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Le||Ne.morphTargets!==Re||Ne.morphNormals!==Ze||Ne.morphColors!==Ui||Ne.toneMapping!==gr||Se.isWebGL2===!0&&Ne.morphTargetsCount!==Pn)&&(it=!0):(it=!0,Ne.__version=U.version);let Rn=Ne.currentProgram;it===!0&&(Rn=Ll(U,z,q));let li=!1,Es=!1,Pl=!1;const At=Rn.getUniforms(),Ts=Ne.uniforms;if(fe.useProgram(Rn.program)&&(li=!0,Es=!0,Pl=!0),U.id!==w&&(w=U.id,Es=!0),li||S!==T){if(At.setValue(G,"projectionMatrix",T.projectionMatrix),Se.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Es=!0,Pl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Dn=At.map.cameraPosition;Dn!==void 0&&Dn.setValue(G,Z.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&At.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||q.isSkinnedMesh)&&At.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){At.setOptional(G,q,"bindMatrix"),At.setOptional(G,q,"bindMatrixInverse");const Dn=q.skeleton;Dn&&(Se.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),At.setValue(G,"boneTexture",Dn.boneTexture,ve),At.setValue(G,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rl=B.morphAttributes;return(Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0&&Se.isWebGL2===!0)&&se.update(q,B,U,Rn),(Es||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,At.setValue(G,"receiveShadow",q.receiveShadow)),Es&&(At.setValue(G,"toneMappingExposure",h.toneMappingExposure),Ne.needsLights&&T0(Ts,Pl),xe&&U.fog===!0&&tn.refreshFogUniforms(Ts,xe),tn.refreshMaterialUniforms(Ts,U,O,N,F),Ia.upload(G,Ne.uniformsList,Ts,ve)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ia.upload(G,Ne.uniformsList,Ts,ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&At.setValue(G,"center",q.center),At.setValue(G,"modelViewMatrix",q.modelViewMatrix),At.setValue(G,"normalMatrix",q.normalMatrix),At.setValue(G,"modelMatrix",q.matrixWorld),Rn}function T0(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function b0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,z,B){be.get(T.texture).__webglTexture=z,be.get(T.depthTexture).__webglTexture=B;const U=be.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=B===void 0,U.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const B=be.get(T);B.__webglFramebuffer=z,B.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,B=0){x=T,m=z,v=B;let U=!0;if(T){const we=be.get(T);we.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),U=!1):we.__webglFramebuffer===void 0?ve.setupRenderTarget(T):we.__hasExternalTextures&&ve.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture)}let q=null,xe=!1,Me=!1;if(T){const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Me=!0);const Oe=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Oe[z],xe=!0):Se.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?q=be.get(T).__webglMultisampledFramebuffer:q=Oe,C.copy(T.viewport),P.copy(T.scissor),y=T.scissorTest}else C.copy(k).multiplyScalar(O).floor(),P.copy(Y).multiplyScalar(O).floor(),y=V;if(fe.bindFramebuffer(36160,q)&&Se.drawBuffers&&U&&fe.drawBuffers(T,q),fe.viewport(C),fe.scissor(P),fe.setScissorTest(y),xe){const we=be.get(T.texture);G.framebufferTexture2D(36160,36064,34069+z,we.__webglTexture,B)}else if(Me){const we=be.get(T.texture),Oe=z||0;G.framebufferTextureLayer(36160,36064,we.__webglTexture,B||0,Oe)}w=-1},this.readRenderTargetPixels=function(T,z,B,U,q,xe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){fe.bindFramebuffer(36160,Te);try{const we=T.texture,Oe=we.format,Le=we.type;if(Oe!==On&&E.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===So&&(Ee.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==cr&&E.convert(Le)!==G.getParameter(35738)&&!(Le===wi&&(Se.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-U&&B>=0&&B<=T.height-q&&G.readPixels(z,B,U,q,E.convert(Oe),E.convert(Le),xe)}finally{const we=x!==null?be.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(T,z,B=0){const U=Math.pow(2,-B),q=Math.floor(z.image.width*U),xe=Math.floor(z.image.height*U);ve.setTexture2D(z,0),G.copyTexSubImage2D(3553,B,0,0,T.x,T.y,q,xe),fe.unbindTexture()},this.copyTextureToTexture=function(T,z,B,U=0){const q=z.image.width,xe=z.image.height,Me=E.convert(B.format),Te=E.convert(B.type);ve.setTexture2D(B,0),G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,U,T.x,T.y,q,xe,Me,Te,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,U,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):G.texSubImage2D(3553,U,T.x,T.y,Me,Te,z.image),U===0&&B.generateMipmaps&&G.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,B,U,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,we=E.convert(U.format),Oe=E.convert(U.type);let Le;if(U.isData3DTexture)ve.setTexture3D(U,0),Le=32879;else if(U.isDataArrayTexture)ve.setTexture2DArray(U,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Re=G.getParameter(3314),Ze=G.getParameter(32878),Ui=G.getParameter(3316),gr=G.getParameter(3315),vr=G.getParameter(32877),Pn=B.isCompressedTexture?B.mipmaps[0]:B.image;G.pixelStorei(3314,Pn.width),G.pixelStorei(32878,Pn.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),B.isDataTexture||B.isData3DTexture?G.texSubImage3D(Le,q,z.x,z.y,z.z,xe,Me,Te,we,Oe,Pn.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Le,q,z.x,z.y,z.z,xe,Me,Te,we,Pn.data)):G.texSubImage3D(Le,q,z.x,z.y,z.z,xe,Me,Te,we,Oe,Pn),G.pixelStorei(3314,Re),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Ui),G.pixelStorei(3315,gr),G.pixelStorei(32877,vr),q===0&&U.generateMipmaps&&G.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,fe.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Fw extends p0{}Fw.prototype.isWebGL1Renderer=!0;class kw extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new R;class al{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new al(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class m0 extends Ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let kr;const zs=new R,zr=new R,Or=new R,Ur=new pe,Os=new pe,g0=new nt,pa=new R,Us=new R,ma=new R,gp=new pe,zu=new pe,vp=new pe;class Ow extends Ht{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new Vn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zw(t,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new al(i,3,0,!1)),kr.setAttribute("uv",new al(i,2,3,!1))}this.geometry=kr,this.material=e!==void 0?e:new m0,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),g0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Or.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ga(pa.set(-.5,-.5,0),Or,o,zr,r,s),ga(Us.set(.5,-.5,0),Or,o,zr,r,s),ga(ma.set(.5,.5,0),Or,o,zr,r,s),gp.set(0,0),zu.set(1,0),vp.set(1,1);let a=e.ray.intersectTriangle(pa,Us,ma,!1,zs);if(a===null&&(ga(Us.set(-.5,.5,0),Or,o,zr,r,s),zu.set(0,1),a=e.ray.intersectTriangle(pa,ma,Us,!1,zs),a===null))return;const l=e.ray.origin.distanceTo(zs);l<e.near||l>e.far||t.push({distance:l,point:zs.clone(),uv:zn.getUV(zs,pa,Us,ma,gp,zu,vp,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ga(n,e,t,i,r,s){Ur.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Os.x=s*Ur.x-r*Ur.y,Os.y=r*Ur.x+s*Ur.y):Os.copy(Ur),n.copy(e),n.x+=Os.x,n.y+=Os.y,n.applyMatrix4(g0)}class Na extends Gt{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mo extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v0 extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _p=new nt,xp=new R,yp=new R;class Uw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vf,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(xp),yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yp),t.updateMatrixWorld(),_p.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_p),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sp=new nt,Bs=new R,Ou=new R;class Bw extends Uw{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bs),Ou.copy(i.position),Ou.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ou),i.updateMatrixWorld(),r.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Sp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp)}}class Vw extends v0{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gw extends v0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mp(){return(typeof performance>"u"?Date:performance).now()}class wp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);function jf(n,e,t,i,r,s,o,a){const l=(p,m,v,x)=>[new pe(p/o,1-x/a),new pe(v/o,1-x/a),new pe(v/o,1-m/a),new pe(p/o,1-m/a)],u=l(e+s,t,e+i+s,t+s),c=l(e+i+s,t,e+i*2+s,t+s),d=l(e,t+s,e+s,t+s+r),f=l(e+s,t+s,e+i+s,t+s+r),g=l(e+i+s,t+s,e+i+s*2,t+r+s),_=l(e+i+s*2,t+s,e+i*2+s*2,t+r+s),h=n.attributes.uv;h.copyVector2sArray([g[3],g[2],g[0],g[1],d[3],d[2],d[0],d[1],u[3],u[2],u[0],u[1],c[0],c[1],c[3],c[2],f[3],f[2],f[0],f[1],_[3],_[2],_[0],_[1]]),h.needsUpdate=!0}function sn(n,e,t,i,r,s){jf(n,e,t,i,r,s,64,64)}function Vc(n,e,t,i,r,s){jf(n,e,t,i,r,s,64,32)}class Hi extends _t{constructor(e,t){super(),this.innerLayer=e,this.outerLayer=t,e.name="inner",t.name="outer"}}class Hw extends _t{constructor(){super(),this.modelListeners=[],this.slim=!1,this._map=null,this.layer1Material=new Mo({side:ur}),this.layer2Material=new Mo({side:ri,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new et(8,8,8);sn(e,0,0,8,8,8);const t=new Be(e,this.layer1Material),i=new et(9,9,9);sn(i,32,0,8,8,8);const r=new Be(i,this.layer2Material);this.head=new Hi(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const s=new et(8,12,4);sn(s,16,16,8,12,4);const o=new Be(s,this.layer1Material),a=new et(8.5,12.5,4.5);sn(a,16,32,8,12,4);const l=new Be(a,this.layer2Material);this.body=new Hi(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const u=new et,c=new Be(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{c.scale.x=this.slim?3:4,c.scale.y=12,c.scale.z=4,sn(u,40,16,this.slim?3:4,12,4)});const d=new et,f=new Be(d,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,sn(d,40,32,this.slim?3:4,12,4)});const g=new _t;g.add(c,f),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new Hi(c,f),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new et,h=new Be(_,this.layer1MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3:4,h.scale.y=12,h.scale.z=4,sn(_,32,48,this.slim?3:4,12,4)});const p=new et,m=new Be(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{m.scale.x=this.slim?3.5:4.5,m.scale.y=12.5,m.scale.z=4.5,sn(p,48,48,this.slim?3:4,12,4)});const v=new _t;v.add(h,m),this.modelListeners.push(()=>{v.position.x=this.slim?.5:1}),v.position.y=-4,this.leftArm=new Hi(h,m),this.leftArm.name="leftArm",this.leftArm.add(v),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const x=new et(4,12,4);sn(x,0,16,4,12,4);const w=new Be(x,this.layer1MaterialBiased),S=new et(4.5,12.5,4.5);sn(S,0,32,4,12,4);const C=new Be(S,this.layer2MaterialBiased),P=new _t;P.add(w,C),P.position.y=-6,this.rightLeg=new Hi(w,C),this.rightLeg.name="rightLeg",this.rightLeg.add(P),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const y=new et(4,12,4);sn(y,16,48,4,12,4);const A=new Be(y,this.layer1MaterialBiased),N=new et(4.5,12.5,4.5);sn(N,0,48,4,12,4);const O=new Be(N,this.layer2MaterialBiased),te=new _t;te.add(A,O),te.position.y=-6,this.leftLeg=new Hi(A,O),this.leftLeg.name="leftLeg",this.leftLeg.add(te),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof Hi)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0)}}class Ww extends _t{constructor(){super(),this.material=new Mo({side:ri,transparent:!0,alphaTest:1e-5});const e=new et(10,16,1);Vc(e,0,0,10,16,1),this.cape=new Be(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class jw extends _t{constructor(){super(),this.material=new Mo({side:ri,transparent:!0,alphaTest:1e-5});const e=new et(12,22,4);Vc(e,22,0,10,20,2);const t=new Be(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new _t,this.leftWing.add(t),this.add(this.leftWing);const i=new et(12,22,4);Vc(i,22,0,10,20,2);const r=new Be(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new _t,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Xw extends _t{constructor(){super(),this.material=new Mo({side:ur});const e=new et(8,8,4/3);jf(e,0,0,6,6,1,14,7),this.rightEar=new Be(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Be(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Ep=10.8*Math.PI/180;class qw extends _t{constructor(){super(),this.skin=new Hw,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Ww,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Ep,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new jw,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Xw,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Ep,this.elytra.resetJoints()}}function va(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function Yw(n,e,t,i,r,s,o,a){const l=n.getImageData(e,t,i,r);if(a)for(let u=0;u<r;u++)for(let c=0;c<i/2;c++){const d=(c+u*i)*4,f=(i-c-1+u*i)*4,g=l.data[d],_=l.data[d+1],h=l.data[d+2],p=l.data[d+3],m=l.data[f],v=l.data[f+1],x=l.data[f+2],w=l.data[f+3];l.data[d]=m,l.data[d+1]=v,l.data[d+2]=x,l.data[d+3]=w,l.data[f]=g,l.data[f+1]=_,l.data[f+2]=h,l.data[f+3]=p}n.putImageData(l,s,o)}function Gc(n,e,t,i,r){const s=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(s.data[l+3]!==255)return!0}return!1}function bl(n){return n/64}function Tp(n,e,t){if(t){if(Gc(n,0,0,e,e))return}else if(Gc(n,0,0,e,e/2))return;const i=bl(e),r=(s,o,a,l)=>n.clearRect(s*i,o*i,a*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function $w(n,e){const t=bl(e),i=(r,s,o,a,l,u,c)=>Yw(n,r*t,s*t,o*t,a*t,l*t,u*t,c);i(4,16,4,4,20,48,!0),i(8,16,4,4,24,48,!0),i(0,20,4,12,24,52,!0),i(4,20,4,12,20,52,!0),i(8,20,4,12,16,52,!0),i(12,20,4,12,28,52,!0),i(44,16,4,4,36,48,!0),i(48,16,4,4,40,48,!0),i(40,20,4,12,40,52,!0),i(44,20,4,12,36,52,!0),i(48,20,4,12,32,52,!0),i(52,20,4,12,44,52,!0)}function Zw(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d");if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),$w(i,r),Tp(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Tp(i,n.width,!0)}function Qw(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function Kw(n,e){const t=Qw(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Jw(n,e,t,i,r){const s=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function eE(n,e,t,i,r){const s=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function tE(n){const e=bl(n.width),t=n.getContext("2d"),i=(a,l,u,c)=>Gc(t,a*e,l*e,u*e,c*e),r=(a,l,u,c)=>Jw(t,a*e,l*e,u*e,c*e),s=(a,l,u,c)=>eE(t,a*e,l*e,u*e,c*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function nE(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function iE(n,e){const t=nE(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function bp(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=bl(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const s=n.getContext("2d");s.clearRect(0,0,i,r),s.drawImage(e,24*t,0,i,r,0,0,i,r)}async function _a(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const Cp={type:"change"},Uu={type:"start"},Ap={type:"end"};class rE extends mr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",nn),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Cp),i.update(),s=r.NONE},this.update=function(){const E=new R,$=new dr().setFromUnitVectors(e.up,new R(0,1,0)),oe=$.clone().invert(),ne=new R,L=new dr,ie=2*Math.PI;return function(){const ge=i.object.position;E.copy(ge).sub(i.target),E.applyQuaternion($),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&A(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,me=i.maxAzimuthAngle;return isFinite(le)&&isFinite(me)&&(le<-Math.PI?le+=ie:le>Math.PI&&(le-=ie),me<-Math.PI?me+=ie:me>Math.PI&&(me-=ie),le<=me?a.theta=Math.max(le,Math.min(me,a.theta)):a.theta=a.theta>(le+me)/2?Math.max(le,a.theta):Math.min(me,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),E.setFromSpherical(a),E.applyQuaternion(oe),ge.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||ne.distanceToSquared(i.object.position)>o||8*(1-L.dot(i.object.quaternion))>o?(i.dispatchEvent(Cp),ne.copy(i.object.position),L.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",ot),i.domElement.removeEventListener("pointercancel",Wt),i.domElement.removeEventListener("wheel",tn),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",mt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",nn)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new wp,l=new wp;let u=1;const c=new R;let d=!1;const f=new pe,g=new pe,_=new pe,h=new pe,p=new pe,m=new pe,v=new pe,x=new pe,w=new pe,S=[],C={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function A(E){l.theta-=E}function N(E){l.phi-=E}const O=function(){const E=new R;return function(oe,ne){E.setFromMatrixColumn(ne,0),E.multiplyScalar(-oe),c.add(E)}}(),te=function(){const E=new R;return function(oe,ne){i.screenSpacePanning===!0?E.setFromMatrixColumn(ne,1):(E.setFromMatrixColumn(ne,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(oe),c.add(E)}}(),K=function(){const E=new R;return function(oe,ne){const L=i.domElement;if(i.object.isPerspectiveCamera){const ie=i.object.position;E.copy(ie).sub(i.target);let ee=E.length();ee*=Math.tan(i.object.fov/2*Math.PI/180),O(2*oe*ee/L.clientHeight,i.object.matrix),te(2*ne*ee/L.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(oe*(i.object.right-i.object.left)/i.object.zoom/L.clientWidth,i.object.matrix),te(ne*(i.object.top-i.object.bottom)/i.object.zoom/L.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(E){i.object.isPerspectiveCamera?u/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(E){i.object.isPerspectiveCamera?u*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(E){f.set(E.clientX,E.clientY)}function W(E){v.set(E.clientX,E.clientY)}function D(E){h.set(E.clientX,E.clientY)}function I(E){g.set(E.clientX,E.clientY),_.subVectors(g,f).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*_.x/$.clientHeight),N(2*Math.PI*_.y/$.clientHeight),f.copy(g),i.update()}function F(E){x.set(E.clientX,E.clientY),w.subVectors(x,v),w.y>0?k(y()):w.y<0&&Y(y()),v.copy(x),i.update()}function X(E){p.set(E.clientX,E.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),K(m.x,m.y),h.copy(p),i.update()}function j(E){E.deltaY<0?Y(y()):E.deltaY>0&&k(y()),i.update()}function Z(E){let $=!1;switch(E.code){case i.keys.UP:K(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:K(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:K(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:K(-i.keyPanSpeed,0),$=!0;break}$&&(E.preventDefault(),i.update())}function ce(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),$=.5*(S[0].pageY+S[1].pageY);f.set(E,$)}}function he(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),$=.5*(S[0].pageY+S[1].pageY);h.set(E,$)}}function G(){const E=S[0].pageX-S[1].pageX,$=S[0].pageY-S[1].pageY,oe=Math.sqrt(E*E+$*$);v.set(0,oe)}function Ge(){i.enableZoom&&G(),i.enablePan&&he()}function Ee(){i.enableZoom&&G(),i.enableRotate&&ce()}function Se(E){if(S.length==1)g.set(E.pageX,E.pageY);else{const oe=_e(E),ne=.5*(E.pageX+oe.x),L=.5*(E.pageY+oe.y);g.set(ne,L)}_.subVectors(g,f).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*_.x/$.clientHeight),N(2*Math.PI*_.y/$.clientHeight),f.copy(g)}function fe(E){if(S.length===1)p.set(E.pageX,E.pageY);else{const $=_e(E),oe=.5*(E.pageX+$.x),ne=.5*(E.pageY+$.y);p.set(oe,ne)}m.subVectors(p,h).multiplyScalar(i.panSpeed),K(m.x,m.y),h.copy(p)}function De(E){const $=_e(E),oe=E.pageX-$.x,ne=E.pageY-$.y,L=Math.sqrt(oe*oe+ne*ne);x.set(0,L),w.set(0,Math.pow(x.y/v.y,i.zoomSpeed)),k(w.y),v.copy(x)}function be(E){i.enableZoom&&De(E),i.enablePan&&fe(E)}function ve(E){i.enableZoom&&De(E),i.enableRotate&&Se(E)}function ot(E){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",ft),i.domElement.addEventListener("pointerup",mt)),J(E),E.pointerType==="touch"?b(E):at(E))}function ft(E){i.enabled!==!1&&(E.pointerType==="touch"?M(E):Fe(E))}function mt(E){se(E),S.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",mt)),i.dispatchEvent(Ap),s=r.NONE}function Wt(E){se(E)}function at(E){let $;switch(E.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case yr.DOLLY:if(i.enableZoom===!1)return;W(E),s=r.DOLLY;break;case yr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;D(E),s=r.PAN}else{if(i.enableRotate===!1)return;V(E),s=r.ROTATE}break;case yr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;V(E),s=r.ROTATE}else{if(i.enablePan===!1)return;D(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uu)}function Fe(E){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;I(E);break;case r.DOLLY:if(i.enableZoom===!1)return;F(E);break;case r.PAN:if(i.enablePan===!1)return;X(E);break}}function tn(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(Uu),j(E),i.dispatchEvent(Ap))}function nn(E){i.enabled===!1||i.enablePan===!1||Z(E)}function b(E){switch(ue(E),S.length){case 1:switch(i.touches.ONE){case Sr.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Sr.PAN:if(i.enablePan===!1)return;he(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Sr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(),s=r.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uu)}function M(E){switch(ue(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(E),i.update();break;default:s=r.NONE}}function H(E){i.enabled!==!1&&E.preventDefault()}function J(E){S.push(E)}function se(E){delete C[E.pointerId];for(let $=0;$<S.length;$++)if(S[$].pointerId==E.pointerId){S.splice($,1);return}}function ue(E){let $=C[E.pointerId];$===void 0&&($=new pe,C[E.pointerId]=$),$.set(E.pageX,E.pageY)}function _e(E){const $=E.pointerId===S[0].pointerId?S[1]:S[0];return C[$.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",ot),i.domElement.addEventListener("pointercancel",Wt),i.domElement.addEventListener("wheel",tn,{passive:!1}),this.update()}}const Lp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Cl{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const sE=new Hf(-1,1,1,-1,0,1),Xf=new Vn;Xf.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3));Xf.setAttribute("uv",new Cn([0,2,0,0,2,0],2));class oE{constructor(e){this._mesh=new Be(Xf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hc extends Cl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof oi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=r0.clone(e.uniforms),this.material=new oi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new oE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Pp extends Cl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class aE extends Cl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lE{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new pe);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Lp===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Hc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Hc(Lp),this.clock=new _0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pp!==void 0&&(o instanceof Pp?i=!0:o instanceof aE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Hf(-1,1,1,-1,0,1);const x0=new Vn;x0.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3));x0.setAttribute("uv",new Cn([0,2,0,0,2,0],2));class uE extends Cl{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const cE={uniforms:{tDiffuse:{value:null},resolution:{value:new pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class fE extends Ow{constructor(e="",t={}){const i=new m0({transparent:!0,alphaTest:1e-5});super(i),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Na(e);r.magFilter=Je,r.minFilter=Je,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class dE{constructor(e={}){this.globalLight=new Gw(16777215,.4),this.cameraLight=new Vw(16777215,.6),this.skinTexture=null,this.capeTexture=null,this.earsTexture=null,this.backgroundTexture=null,this._disposed=!1,this._renderPaused=!1,this.autoRotate=!1,this.autoRotateSpeed=1,this._nameTag=null,this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new kw,this.camera=new $t,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),this.renderer=new p0({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new si(0,0,{depthTexture:new h0(0,0,wi)})),this.composer=new lE(this.renderer,t),this.renderPass=new uE(this.scene,this.camera),this.fxaaPass=new Hc(cE),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new qw,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new _t,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new rE(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new _0,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Na(this.skinCanvas),this.skinTexture.magFilter=Je,this.skinTexture.minFilter=Je,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Na(this.capeCanvas),this.capeTexture.magFilter=Je,this.capeTexture.minFilter=Je,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Na(this.earsCanvas),this.earsTexture.magFilter=Je,this.earsTexture.minFilter=Je,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(va(e))Zw(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=tE(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(bp(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0));else return _a(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(va(e))Kw(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return _a(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(va(e))t.textureType==="skin"?bp(this.earsCanvas,e):iE(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return _a(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,sl)}loadBackground(e,t){if(va(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Gt,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return _a(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new pe).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new pe).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Ie||e instanceof Gt?this.scene.background=e:this.scene.background=new Ie(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Ht||(e=new fE(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}var Rp,y0={exports:{}},Vs={};/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/y0.exports=function(){if(Rp)return Vs;Rp=1;var n=Up,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(a,l,u){var c,d={},f=null,g=null;for(c in u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)i.call(l,c)&&!s.hasOwnProperty(c)&&(d[c]=l[c]);if(a&&a.defaultProps)for(c in l=a.defaultProps)d[c]===void 0&&(d[c]=l[c]);return{$$typeof:e,type:a,key:f,ref:g,props:d,_owner:r.current}}return Vs.Fragment=t,Vs.jsx=o,Vs.jsxs=o,Vs}();var hE=y0.exports;const pE=({className:n,width:e,height:t,skinUrl:i,capeUrl:r,onReady:s,options:o})=>{const a=Yt.exports.useRef(),l=Yt.exports.useRef();return Yt.exports.useEffect(()=>{const u=new dE(Object.assign({canvas:a.current,width:Number(e),height:Number(t)},o));i&&u.loadSkin(i),r&&u.loadCape(r),l.current=u,s&&s({viewer:l.current,canvasRef:a.current})},[]),Yt.exports.useEffect(()=>{i?l.current.loadSkin(i):l.current.resetSkin()},[i]),Yt.exports.useEffect(()=>{r?l.current.loadCape(r):l.current.resetCape()},[r]),Yt.exports.useEffect(()=>{l.current.setSize(Number(e),Number(t))},[e,t]),hE.jsx("canvas",{className:n,ref:a})};var qf={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE=Yt.exports,gE=Symbol.for("react.element"),vE=Symbol.for("react.fragment"),_E=Object.prototype.hasOwnProperty,xE=mE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yE={key:!0,ref:!0,__self:!0,__source:!0};function S0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_E.call(e,i)&&!yE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gE,type:n,key:s,ref:o,props:r,_owner:xE.current}}Al.Fragment=vE;Al.jsx=S0;Al.jsxs=S0;(function(n){n.exports=Al})(qf);const gt=qf.exports.jsx,xa=qf.exports.jsxs,SE=()=>{const t=[];for(let _=1;_<=242;_++)t.push(`/textures/skin/${_}.png`);const[i,r]=Yt.exports.useState(1),[s,o]=Yt.exports.useState(""),[a,l]=Yt.exports.useState(Array(242).fill(!1)),u=Math.ceil(t.length/8),d=t.filter(_=>{var p;return(((p=_.split("/").pop())==null?void 0:p.replace(".png","").toLowerCase())||"").includes(s.toLowerCase())}).slice((i-1)*8,i*8),f=_=>{_>=1&&_<=u&&r(_)},g=_=>{const h=parseInt(_.target.value);!isNaN(h)&&h>=1&&h<=u&&r(h)};return xa("div",{className:"app-container",children:[gt("img",{src:"/textures/page/bg.1f1e1cd2bf13917f60f8.png",alt:"Top Image",className:"top-image"}),gt("img",{src:"/textures/page/lp-banner-left-right.gif",alt:"Left Image",className:"side-images left-image"}),gt("img",{src:"/textures/page/lp-banner-left-right.gif",alt:"Right Image",className:"side-images right-image"}),gt("img",{src:"/textures/page/lp-banner-cat.gif",alt:"Cat Image",className:"small-image"}),gt("div",{className:"mia-skin-btn",children:"MIA-SKIN"}),xa("div",{className:"container-box",children:[gt("img",{src:"/textures/page/lp-content-swimming-dog.gif",alt:"Swimming Dog",className:"top-left-image"}),gt("div",{className:"search-input-container",children:gt("input",{type:"text",value:s,onChange:_=>o(_.target.value),placeholder:"T\xECm ki\u1EBFm t\xEAn h\xECnh \u1EA3nh...",className:"search-input",onFocus:_=>_.target.style.borderColor="#FF7E5F",onBlur:_=>_.target.style.borderColor="#ffb94b"})}),gt("div",{className:"image-grid",children:d.map((_,h)=>{var m;const p=(m=_.split("/").pop())==null?void 0:m.replace(".png","");return xa("div",{className:"image-item",children:[gt(pE,{skinUrl:_,width:120,height:300,capeUrl:a[(i-1)*8+h]?`/textures/cape/${(i-1)*8+h+1}.png`:""}),gt("a",{href:_,download:`skin-${h+1}.png`,className:"download-btn",children:"Download"}),gt("div",{className:"image-name",children:p})]},h)})}),xa("div",{className:"pagination",children:[gt("button",{onClick:()=>f(i-1),children:"\xAB"}),gt("input",{type:"number",value:i,onChange:g,min:1,max:u}),gt("button",{onClick:()=>f(i+1),children:"\xBB"})]})]})]})};Bu.createRoot(document.getElementById("root")).render(gt(Up.StrictMode,{children:gt(SE,{})}));
