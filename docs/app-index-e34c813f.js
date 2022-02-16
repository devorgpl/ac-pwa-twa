/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new r(i,n)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new r("string"==typeof t?t:t+"",n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},c=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const i=this._$Eh(n,e);void 0!==i&&(this._$Eu.set(i,n),t.push(i))}),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,n;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{e?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(e=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$Eg(t,e,n=d){var i,r;const o=this.constructor._$Eh(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(r=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:h.toAttribute)(e,n.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var n,i,r;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(r=null!==(i=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==r?r:h.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach((t,e)=>this._$Eg(e,this[e],t)),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:p}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.1");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,_="?"+g,v=`<${_}>`,y=document,w=(t="")=>y.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,C=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,k=/"/g,P=/^(?:script|style|textarea)$/i,N=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),T=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),O=new WeakMap,U=y.createTreeWalker(y,129,null,!1);class B{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,h]=((t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=S;for(let e=0;e<n;e++){const n=t[e];let a,l,h=-1,c=0;for(;c<n.length&&(s.lastIndex=c,l=s.exec(n),null!==l);)c=s.lastIndex,s===S?"!--"===l[1]?s=$:void 0!==l[1]?s=C:void 0!==l[2]?(P.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=A):void 0!==l[3]&&(s=A):s===A?">"===l[0]?(s=null!=r?r:S,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?A:'"'===l[3]?k:E):s===k||s===E?s=A:s===$||s===C?s=S:(s=A,r=void 0);const d=s===A&&t[e+1].startsWith("/>")?" ":"";o+=s===S?n+v:h>=0?(i.push(a),n.slice(0,h)+"$lit$"+n.slice(h)+g+d):n+g+(-2===h?(i.push(void 0),e):d)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,i]})(t,e);if(this.el=B.createElement(l,n),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const n=h[o++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?H:"@"===e[1]?z:I})}else a.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(P.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=f?f.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],w()),U.nextNode(),a.push({type:2,index:++r});i.append(t[e],w())}}}else if(8===i.nodeType)if(i.data===_)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)a.push({type:7,index:r}),t+=g.length-1}r++}}static createElement(t,e){const n=y.createElement("template");return n.innerHTML=t,n}}function M(t,e,n=t,i){var r,o,s,a;if(e===T)return e;let l=void 0!==i?null===(r=n._$Cl)||void 0===r?void 0:r[i]:n._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,n,i)),void 0!==i?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=l:n._$Cu=l),void 0!==l&&(e=M(t,l._$AS(t,e.values),l,i)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(n,!0);U.currentNode=r;let o=U.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new L(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new D(o,this,t)),this.v.push(e),l=i[++a]}s!==(null==l?void 0:l.index)&&(o=U.nextNode(),s++)}return r}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class L{constructor(t,e,n,i){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),b(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==R&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(n);else{const t=new j(r,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new B(t)),e}M(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new L(this.A(w()),this.A(w()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,n,i,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=M(this,t,e,0),o=!b(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=M(this,i[n+s],e,s),a===T&&(a=this._$AH[s]),o||(o=!b(a)||a!==this._$AH[s]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.k(t)}k(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends I{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===R?void 0:t}}class H extends I{constructor(){super(...arguments),this.type=4}k(t){t&&t!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class z extends I{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=M(this,t,e,0))&&void 0!==n?n:R)===T)return;const i=this._$AH,r=t===R&&i!==R||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==R&&(i===R||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,q;null==F||F(B,L),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class J extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new L(e.insertBefore(w(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}J.finalized=!0,J._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:J});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:J}),(null!==(q=globalThis.litElementVersions)&&void 0!==q?q:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Z(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):G(t,e)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const Q="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,X=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},tt=`{{lit-${String(Math.random()).slice(2)}}}`,et=`\x3c!--${tt}--\x3e`,nt=new RegExp(`${tt}|${et}`);class it{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=r.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)rt(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[a],n=at.exec(e)[2],i=n.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(nt);this.parts.push({type:"attribute",index:s,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(tt)>=0){const i=t.parentNode,r=e.split(nt),o=r.length-1;for(let e=0;e<o;e++){let n,o=r[e];if(""===o)n=st();else{const t=at.exec(o);null!==t&&rt(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}i.insertBefore(n,t),this.parts.push({type:"node",index:++s})}""===r[o]?(i.insertBefore(st(),t),n.push(t)):t.data=r[o],a+=o}}else if(8===t.nodeType)if(t.data===tt){const e=t.parentNode;null!==t.previousSibling&&s!==o||(s++,e.insertBefore(st(),t)),o=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(n.push(t),s--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(tt,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const rt=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},ot=t=>-1!==t.index,st=()=>document.createComment(""),at=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function lt(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,133,null,!1);let o=ct(i),s=i[o],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,o=ct(i,o),s=i[o]}h.forEach(t=>t.parentNode.removeChild(t))}const ht=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},ct=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(ot(e))return n}return-1},dt=new WeakMap,pt=t=>"function"==typeof t&&dt.has(t),ut={},ft={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class mt{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=Q?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,s=0,a=i.nextNode();for(;o<n.length;)if(r=n[o],ot(r)){for(;s<r.index;)s++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return Q&&(document.adoptNode(t),customElements.upgrade(t)),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const gt=` ${tt} `;class _t{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const o=at.exec(t);e+=null===o?t+(n?gt:et):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+tt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const vt=t=>null===t||!("object"==typeof t||"function"==typeof t),yt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class wt{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new bt(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(vt(t)||!yt(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class bt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===ut||vt(t)&&t===this.value||(this.value=t,pt(t)||(this.committer.dirty=!0))}commit(){for(;pt(this.value);){const t=this.value;this.value=ut,t(this)}this.value!==ut&&this.committer.commit()}}class xt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(st()),this.endNode=t.appendChild(st())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=st()),t.__insert(this.endNode=st())}insertAfterPart(t){t.__insert(this.startNode=st()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;pt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ut,t(this)}const t=this.__pendingValue;t!==ut&&(vt(t)?t!==this.value&&this.__commitText(t):t instanceof _t?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):yt(t)?this.__commitIterable(t):t===ft?(this.value=ft,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof mt&&this.value.template===e)this.value.update(t.values);else{const n=new mt(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)n=e[i],void 0===n&&(n=new xt(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){X(this.startNode.parentNode,t.nextSibling,this.endNode)}}class St{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;pt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ut,t(this)}if(this.__pendingValue===ut)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=ut}}class $t extends wt{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Ct(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ct extends bt{}let At=!1;(()=>{try{const t={get capture(){return At=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Et{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;pt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ut,t(this)}if(this.__pendingValue===ut)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=kt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=ut}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const kt=t=>t&&(At?{capture:t.capture,passive:t.passive,once:t.once}:t.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function Pt(t){let e=Nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Nt.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(tt);return n=e.keyString.get(i),void 0===n&&(n=new it(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const Nt=new Map,Tt=new WeakMap,Rt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const r=e[0];return"."===r?new $t(t,e.slice(1),n).parts:"@"===r?[new Et(t,e.slice(1),i.eventContext)]:"?"===r?[new St(t,e.slice(1),n)]:new wt(t,e,n).parts}handleTextExpression(t){return new xt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Ot=(t,...e)=>new _t(t,e,"html",Rt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Ut=(t,e)=>`${t}--${e}`;let Bt=!0;void 0===window.ShadyCSS?Bt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Bt=!1);const Mt=t=>e=>{const n=Ut(e.type,t);let i=Nt.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Nt.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(tt);if(r=i.keyString.get(o),void 0===r){const n=e.getTemplateElement();Bt&&window.ShadyCSS.prepareTemplateDom(n,t),r=new it(e,n),i.keyString.set(o,r)}return i.stringsArray.set(e.strings,r),r},jt=["html","svg"],Lt=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const It={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Vt=(t,e)=>e!==t&&(e==e||t==t),Ht={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:Vt};class zt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Ht){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Ht}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Vt){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||It,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||It.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Ht){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,r=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}zt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ft(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Dt(t,e)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const Wt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol();class Jt{constructor(t,e){if(e!==qt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Wt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Kt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof Jt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new Jt(n,qt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Yt={};class Gt extends zt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Wt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Yt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Yt}}Gt.finalized=!0,Gt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=Tt.has(e),o=Bt&&11===e.nodeType&&!!e.host,s=o&&!Lt.has(i),a=s?document.createDocumentFragment():e;if(((t,e,n)=>{let i=Tt.get(e);void 0===i&&(X(e,e.firstChild),Tt.set(e,i=new xt(Object.assign({templateFactory:Pt},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:Mt(i)},n)),s){const t=Tt.get(a);Tt.delete(a);((t,e,n)=>{Lt.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{jt.forEach(e=>{const n=Nt.get(Ut(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),lt(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let s=ct(r),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(a=ht(e),n.parentNode.insertBefore(e,n));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=ct(r,s);return}s=ct(r,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),lt(n,t)}})(i,a,t.value instanceof mt?t.value.template:void 0),X(e,e.firstChild),e.appendChild(a),Tt.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var Zt=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Qt=class extends Gt{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",t=>this.handleInstallPromptEvent(t)),document.addEventListener("keyup",t=>{"Escape"===t.key&&this.cancel()})}static get styles(){return Kt`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(t){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(t){this.deferredprompt=t,this.hasprompt=!0,t.preventDefault()}checkManifest(t){t.icons&&t.icons[0]?t.name?t.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const t=await fetch(this.manifestpath),e=await t.json();if(this.manifestdata=e,this.manifestdata)return this.checkManifest(this.manifestdata),e}catch(t){return null}}scrollToLeft(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:-t.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:t.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let t=new CustomEvent("show");this.dispatchEvent(t)}closePrompt(){this.openmodal=!1;let t=new CustomEvent("hide");this.dispatchEvent(t)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let t=new CustomEvent("show");if(this.dispatchEvent(t),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((t,e)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let n=new CustomEvent("hide");this.dispatchEvent(n),t()})}render(){return Ot`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?Ot`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?Ot`<div id="installModalWrapper">${this.openmodal?Ot`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?Ot`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(t=>Ot`<li>${t}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?Ot`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(t=>Ot`<div><img alt="App Screenshot" src="${t.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?Ot`<p id="iosText">${this.iosinstallinfotext}</p>`:Ot`<div id="buttonsContainer">${this.deferredprompt?Ot`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:Ot`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};Zt([Ft({type:String})],Qt.prototype,"manifestpath",void 0),Zt([Ft({type:String})],Qt.prototype,"iconpath",void 0),Zt([Ft({type:Object})],Qt.prototype,"manifestdata",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"openmodal",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"showopen",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"isSupportingBrowser",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"isIOS",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"installed",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"hasprompt",void 0),Zt([Ft({type:Boolean})],Qt.prototype,"usecustom",void 0),Zt([Ft({type:Array})],Qt.prototype,"relatedApps",void 0),Zt([Ft({type:String})],Qt.prototype,"explainer",void 0),Zt([Ft({type:String})],Qt.prototype,"featuresheader",void 0),Zt([Ft({type:String})],Qt.prototype,"descriptionheader",void 0),Zt([Ft({type:String})],Qt.prototype,"installbuttontext",void 0),Zt([Ft({type:String})],Qt.prototype,"cancelbuttontext",void 0),Zt([Ft({type:String})],Qt.prototype,"iosinstallinfotext",void 0),Zt([Ft()],Qt.prototype,"deferredprompt",void 0),Qt=Zt([("pwa-install",t=>"function"==typeof t?((t,e)=>(window.customElements.define("pwa-install",e),e))(0,t):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(t){window.customElements.define("pwa-install",t)}}})(0,t))],Qt);let Xt=class extends J{constructor(){super(),this.message="Welcome!"}static get styles(){return o`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }


      #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
          width: 54%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }
    `}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return N`
      <app-header></app-header>

      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <fluent-anchor
                href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started
                appearance="hypertext"
                >Documentation on Github</fluent-anchor
              >.
            </p>

            <p id="mainInfo">
              Welcome to the
              <fluent-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fluent-anchor
              >
              pwa-starter! Be sure to head back to
              <fluent-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fluent-anchor
              >
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?N`<fluent-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fluent-button
                >`:null}
          </fluent-card>

          <fluent-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <fluent-anchor
                  href="https://www.typescriptlang.org/"
                  appearance="hypertext"
                  >TypeScript</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://lit.dev"
                  appearance="hypertext"
                  >lit</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://docs.microsoft.com/en-us/fluent-ui/web-components/"
                  appearance="hypertext"
                  >Fluent Web Components</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  appearance="hypertext"
                  >Vaadin Router</fluent-anchor
                >
              </li>
            </ul>
          </fluent-card>

          <fluent-anchor href="about" appearance="accent">Navigate to About</fluent-anchor>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}};function te(t){return t=t||[],Array.isArray(t)?t:[t]}function ee(t){return"[Vaadin.Router] "+t}t([Z()],Xt.prototype,"message",void 0),Xt=t([Y("app-home")],Xt);const ne=["module","nomodule"];function ie(t){if(!t.match(/.+\.[m]?js$/))throw new Error(ee(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function re(t){if(!t||!ce(t.path))throw new Error(ee('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!(he(t.action)||Array.isArray(t.children)||he(t.children)||le(e)||n.some(e=>ce(t[e]))))throw new Error(ee(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(ce(e))ie(e);else{if(!ne.some(t=>t in e))throw new Error(ee('Expected route bundle to include either "nomodule" or "module" keys, or both'));ne.forEach(t=>t in e&&ie(e[t]))}t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(ee(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function oe(t){te(t).forEach(t=>re(t))}function se(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),"module"===e?n.setAttribute("type","module"):"nomodule"===e&&n.setAttribute("nomodule",""),n.async=!0),new Promise((t,e)=>{n.onreadystatechange=n.onload=e=>{n.__dynamicImportLoaded=!0,t(e)},n.onerror=t=>{n.parentNode&&n.parentNode.removeChild(n),e(t)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&t()})}function ae(t,e){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+t,{cancelable:"go"===t,detail:e}))}function le(t){return"object"==typeof t&&!!t}function he(t){return"function"==typeof t}function ce(t){return"string"==typeof t}function de(t){const e=new Error(ee(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const pe=new class{};function ue(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<n.length;t++){const i=n[t];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){e=i;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;if((e.origin||function(t){const e=t.port,n=t.protocol;return`${n}//${"http:"===n&&"80"===e||"https:"===n&&"443"===e?t.hostname:t.host}`}(e))!==window.location.origin)return;const{pathname:i,search:r,hash:o}=e;ae("go",{pathname:i,search:r,hash:o})&&(t.preventDefault(),t&&"click"===t.type&&window.scrollTo(0,0))}const fe={activate(){window.document.addEventListener("click",ue)},inactivate(){window.document.removeEventListener("click",ue)}};function me(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:n,hash:i}=window.location;ae("go",{pathname:e,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!he(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ge={activate(){window.addEventListener("popstate",me)},inactivate(){window.removeEventListener("popstate",me)}};var _e=Pe,ve=Se,ye=function(t,e){return $e(Se(t,e))},we=$e,be=ke,xe=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Se(t,e){for(var n,i=[],r=0,o=0,s="",a=e&&e.delimiter||"/",l=e&&e.delimiters||"./",h=!1;null!==(n=xe.exec(t));){var c=n[0],d=n[1],p=n.index;if(s+=t.slice(o,p),o=p+c.length,d)s+=d[1],h=!0;else{var u="",f=t[o],m=n[2],g=n[3],_=n[4],v=n[5];if(!h&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(u=s[y],s=s.slice(0,y))}s&&(i.push(s),s="",h=!1);var w=""!==u&&void 0!==f&&f!==u,b="+"===v||"*"===v,x="?"===v||"*"===v,S=u||a,$=g||_;i.push({name:m||r++,prefix:u,delimiter:S,optional:x,repeat:b,partial:w,pattern:$?Ae($):"[^"+Ce(S)+"]+?"})}}return(s||o<t.length)&&i.push(s+t.substr(o)),i}function $e(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,i){for(var r="",o=i&&i.encode||encodeURIComponent,s=0;s<t.length;s++){var a=t[s];if("string"!=typeof a){var l,h=n?n[a.name]:void 0;if(Array.isArray(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<h.length;c++){if(l=o(h[c],a),!e[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===c?a.prefix:a.delimiter)+l}}else if("string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(l=o(String(h),a),!e[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');r+=a.prefix+l}}else r+=a}return r}}function Ce(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ae(t){return t.replace(/([=!:$/()])/g,"\\$1")}function Ee(t){return t&&t.sensitive?"":"i"}function ke(t,e,n){for(var i=(n=n||{}).strict,r=!1!==n.start,o=!1!==n.end,s=Ce(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(Ce).concat("$").join("|"),h=r?"^":"",c=0===t.length,d=0;d<t.length;d++){var p=t[d];if("string"==typeof p)h+=Ce(p),c=d===t.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+Ce(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?h+=Ce(p.prefix)+"("+u+")?":h+="(?:"+Ce(p.prefix)+"("+u+"))?":h+=Ce(p.prefix)+"("+u+")"}}return o?(i||(h+="(?:"+s+")?"),h+="$"===l?"$":"(?="+l+")"):(i||(h+="(?:"+s+"(?="+l+"))?"),c||(h+="(?="+s+"|"+l+")")),new RegExp(h,Ee(n))}function Pe(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(Pe(t[r],e,n).source);return new RegExp("(?:"+i.join("|")+")",Ee(n))}(t,e,n):function(t,e,n){return ke(Se(t,n),e,n)}(t,e,n)}_e.parse=ve,_e.compile=ye,_e.tokensToFunction=we,_e.tokensToRegExp=be;const{hasOwnProperty:Ne}=Object.prototype,Te=new Map;function Re(t){try{return decodeURIComponent(t)}catch(e){return t}}function Oe(t,e,n,i,r){let o,s,a=0,l=t.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(h){if(t===h)return{done:!0};const c=t.__children=t.__children||t.children;if(!o&&(o=function(t,e,n,i,r){const o=`${t}|${n=!!n}`;let s=Te.get(o);if(!s){const e=[];s={keys:e,pattern:_e(t,e,{end:n,strict:""===t})},Te.set(o,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},r);for(let t=1;t<a.length;t++){const e=s.keys[t-1],n=e.name,i=a[t];void 0===i&&Ne.call(l,n)||(e.repeat?l[n]=i?i.split(e.delimiter).map(Re):[]:l[n]=i?Re(i):i)}return{path:a[0],keys:(i||[]).concat(s.keys),params:l}}(l,e,!c,i,r),o))return{done:!1,value:{route:t,keys:o.keys,params:o.params,path:o.path}};if(o&&c)for(;a<c.length;){if(!s){const i=c[a];i.parent=t;let r=o.path.length;r>0&&"/"===e.charAt(r)&&(r+=1),s=Oe(i,e.substr(r),n,o.keys,o.params)}const i=s.next(h);if(!i.done)return{done:!1,value:i.value};s=null,a++}return{done:!0}}}}function Ue(t){if(he(t.route.action))return t.route.action(t)}Te.set("|false",{keys:[],pattern:/(?:)/});class Be{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||Ue,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){oe(t);const e=[...te(t)];this.root.__children=e}addRoutes(t){return oe(t),this.root.__children.push(...te(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,ce(t)?{pathname:t}:t),n=Oe(this.root,this.__normalizePathname(e.pathname),this.baseUrl),i=this.resolveRoute;let r=null,o=null,s=e;function a(t,l=r.value.route,h){const c=null===h&&r.value.route;return r=o||n.next(c),o=null,t||!r.done&&function(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}(l,r.value.route)?r.done?Promise.reject(de(e)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},e,r.value),function(t,e){const{route:n,path:i}=e;if(n&&!n.__synthetic){const e={path:i,route:n};if(t.chain){if(n.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==n.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(s,r.value),Promise.resolve(i(s)).then(e=>null!=e&&e!==pe?(s.result=e.result||e,s):a(t,l,e))):(o=r,Promise.resolve(pe))}return e.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}(s);if(t?console.warn(e):t=new Error(e),t.context=t.context||s,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return s.result=this.errorHandler(t),s;throw t})}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,e).href;return n.slice(0,e.length)===e?n.slice(e.length):void 0}}Be.pathToRegexp=_e;const{pathToRegexp:Me}=Be,je=new Map;function Le(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function Ie(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function Ve(t,e={}){if(!(t instanceof Be))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let o=Le(n,i);if(!o&&(n.clear(),function t(e,n,i){const r=n.name||n.component;if(r&&(e.has(r)?e.get(r).push(n):e.set(r,[n])),Array.isArray(i))for(let r=0;r<i.length;r++){const o=i[r];o.parent=n,t(e,o,o.__children||o.children)}}(n,t.root,t.root.__children),o=Le(n,i),!o))throw new Error(`Route "${i}" not found`);let s=je.get(o.fullPath);if(!s){let t=Ie(o),e=o.parent;for(;e;){const n=Ie(e);n&&(t=n.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const n=Me.parse(t),i=Me.tokensToFunction(n),r=Object.create(null);for(let t=0;t<n.length;t++)ce(n[t])||(r[n[t].name]=!0);s={toPath:i,keys:r},je.set(t,s),o.fullPath=t}let a=s.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const t={},n=Object.keys(r);for(let e=0;e<n.length;e++){const i=n[e];s.keys[i]||(t[i]=r[i])}const i=e.stringifyQueryParams(t);i&&(a+="?"===i.charAt(0)?i:"?"+i)}return a}}let He=[];function ze(t){He.forEach(t=>t.inactivate()),t.forEach(t=>t.activate()),He=t}function De(t,e){return t.classList.add(e),new Promise(n=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const i=t.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style","position: absolute; "+r),((t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)})(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}function Fe(t){return null!=t}function We({pathname:t="",search:e="",hash:n="",chain:i=[],params:r={},redirectFrom:o,resolver:s},a){const l=i.map(t=>t.route);return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:r,redirectFrom:o,getUrl:(t={})=>Ge(Qe.pathToRegexp.compile(Ze(l))(Object.assign({},r,t)),s)}}function qe(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function Je(t,e,n){if(he(t))return t.apply(n,e)}function Ke(t,e,n){return i=>i&&(i.cancel||i.redirect)?i:n?Je(n[t],e,n):void 0}function Ye(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function Ge(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function Ze(t){return t.map(t=>t.path).reduce((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t,"")}class Qe extends Be{constructor(t,e){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&Be.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const r=Qe.NavigationTrigger;Qe.setTriggers.apply(Qe,Object.keys(r).map(t=>r[t])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=We({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let n=Promise.resolve();he(e.children)&&(n=n.then(()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t))).then(t=>{Fe(t)||he(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!le(t))throw new Error(ee(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=te(t);for(let t=0;t<n.length;t++)re(n[t]),e.__children.push(n[t])}(t,e)}));const i={redirect:e=>qe(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return n.then(()=>{if(this.__isLatestRender(t))return Je(e.action,[t,i],e)}).then(t=>{return Fe(t)&&(t instanceof HTMLElement||t.redirect||t===pe)?t:ce(e.redirect)?i.redirect(e.redirect):e.bundle?(n=e.bundle,ce(n)?se(n):Promise.race(ne.filter(t=>t in n).map(t=>se(n[t],t)))).then(()=>{},()=>{throw new Error(ee(`Bundle not found: ${e.bundle}. Check if the file name is correct`))}):void 0;var n}).then(t=>Fe(t)?t:ce(e.component)?i.component(e.component):void 0)}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},ce(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(i).then(t=>this.__fullyResolveChain(t)).then(t=>{if(this.__isLatestRender(t)){const i=this.__previousContext;if(t===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=We(t),e&&this.__updateBrowserHistory(t,1===n),ae("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,i),this.__previousContext=t,this.location;this.__addAppearingContent(t,i);const r=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,i),r.then(()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location})}}).catch(t=>{if(n===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(i),Ye(this.__outlet&&this.__outlet.children),this.location=We(Object.assign(i,{resolver:this})),ae("error",Object.assign({router:this,error:t},i)),t}),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then(n=>{const i=n!==e?n:t,r=Ge(Ze(n.chain),n.resolver)===n.pathname,o=(t,e=t.route,n)=>t.next(void 0,e,n).then(n=>null===n||n===pe?r?t:null!==e.parent?o(t,e.parent,n):n:n);return o(n).then(t=>{if(null===t||t===pe)throw de(i);return t&&t!==pe&&t!==n?this.__fullyResolveChain(i,t):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=We(t);const n=t.chain.map(t=>t.route).indexOf(t.route);t.chain[n].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then(t=>this.__findComponentContextAfterAllRedirects(t)):e instanceof Error?Promise.reject(e):Promise.reject(new Error(ee(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},n=e.chain||[],i=t.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),s=e=>qe(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let e=0;e<Math.min(n.length,i.length)&&(n[e].route===i[e].route&&(n[e].path===i[e].path||n[e].element===i[e].element)&&this.__isReusableElement(n[e].element,i[e].element));e=++t.__divergedChainIndex);if(t.__skipAttach=i.length===n.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=i.length-1;e>=0;e--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:o},n[e]);for(let e=0;e<i.length;e++)r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:o,redirect:s},i[e]),n[e].element.location=We(t,n[e].route)}else for(let e=n.length-1;e>=t.__divergedChainIndex;e--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:o},n[e])}if(!t.__skipAttach)for(let e=0;e<i.length;e++)e<t.__divergedChainIndex?e<n.length&&n[e].element&&(n[e].element.location=We(t,n[e].route)):(r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:o,redirect:s},i[e]),i[e].element&&(i[e].element.location=We(t,i[e].route)));return r.then(e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,e,n,i){const r=We(e);return t.then(t=>{if(this.__isLatestRender(e)){return Ke("onBeforeLeave",[r,n,this],i.element)(t)}}).then(t=>{if(!(t||{}).redirect)return t})}__runOnBeforeEnterCallbacks(t,e,n,i){const r=We(e,i.route);return t.then(t=>{if(this.__isLatestRender(e)){return Ke("onBeforeEnter",[r,n,this],i.element)(t)}})}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,n){if(e>256)throw new Error(ee("Too many redirects when rendering "+t.from));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ee(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:n=""},i){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==n){const r=i?"replaceState":"pushState";window.history[r](null,document.title,t+e+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let n=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const r=e&&e.chain[i].element;if(r){if(r.parentNode!==n)break;t.chain[i].element=r,n=r}}return n}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(e=>this.__addedByRouter.get(e)&&e!==t.result);let i=n;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const r=t.chain[e].element;r&&(i.appendChild(r),this.__addedByRouter.set(r,!0),i===n&&this.__appearingContent.push(r),i=r)}}__removeDisappearingContent(){this.__disappearingContent&&Ye(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ye(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let n=e.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const i=e.chain[n].element;if(i)try{const n=We(t);Je(i.onAfterLeave,[n,{},e.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Ye(i.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const n=t.chain[e].element||{},i=We(t,t.chain[e].route);Je(n.onAfterEnter,[i,{},t.resolver],n)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],r=t.chain;let o;for(let t=r.length;t>0;t--)if(r[t-1].route.animate){o=r[t-1].route.animate;break}if(e&&n&&o){const t=le(o)&&o.leave||"leaving",r=le(o)&&o.enter||"entering";i.push(De(e,t)),i.push(De(n,r))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:n,hash:i}=t?t.detail:window.location;ce(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:n,hash:i},!0))}static setTriggers(...t){ze(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=Ve(this)),Ge(this.__urlForName(t,e),this)}urlForPath(t,e){return Ge(Qe.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:n,hash:i}=ce(t)?this.__createUrl(t,"http://a"):t;return ae("go",{pathname:e,search:n,hash:i})}}const Xe=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,tn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function en(t,e){if("function"!=typeof t)return;const n=Xe.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){}return t(e)}window.Vaadin=window.Vaadin||{};const nn=function(t,e){if(window.Vaadin.developmentMode)return en(t,e)};function rn(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(tn?!(tn&&Object.keys(tn).map(t=>tn[t]).filter(t=>t.productionMode).length>0):!en((function(){return!0})))}catch(t){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),nn(rn),Qe.NavigationTrigger={POPSTATE:ge,CLICK:fe};let on=class extends J{constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return o`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav fluent-anchor {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 11em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav fluent-anchor::part(control) {
          color: initial;
        }
      }
    `}updated(t){t.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return N`
      <header>
        <div id="back-button-block">
          ${this.enableBack?N`<fluent-anchor appearance="accent" href="">
            Back
          </fluent-anchor>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};t([Z({type:String})],on.prototype,"title",void 0),t([Z()],on.prototype,"enableBack",void 0),on=t([Y("app-header")],on);let sn=class extends J{static get styles(){return o`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new Qe(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#routerOutlet"),{baseUrl:"/ac-pwa-twa/"}).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/about",component:"app-about",action:async()=>{await import("./app-about-e701cf7e.js")}}]}])}render(){return N`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};sn=t([Y("app-index")],sn);export{sn as A,t as _,Y as n,N as p,o as r,J as s};
