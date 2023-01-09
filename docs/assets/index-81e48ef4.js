(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function m(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Q=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),D=function(){return Math.random().toString(36).substring(7).split("").join(".")},J={INIT:"@@redux/INIT"+D(),REPLACE:"@@redux/REPLACE"+D(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+D()}};function Tt(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ht(e,t,n){var i;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(m(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(m(1));return n(ht)(e,t)}if(typeof e!="function")throw new Error(m(2));var r=e,o=t,s=[],d=s,l=!1;function c(){d===s&&(d=s.slice())}function g(){if(l)throw new Error(m(3));return o}function u(v){if(typeof v!="function")throw new Error(m(4));if(l)throw new Error(m(5));var x=!0;return c(),d.push(v),function(){if(x){if(l)throw new Error(m(6));x=!1,c();var b=d.indexOf(v);d.splice(b,1),s=null}}}function h(v){if(!Tt(v))throw new Error(m(7));if(typeof v.type>"u")throw new Error(m(8));if(l)throw new Error(m(9));try{l=!0,o=r(o,v)}finally{l=!1}for(var x=s=d,M=0;M<x.length;M++){var b=x[M];b()}return v}function $(v){if(typeof v!="function")throw new Error(m(10));r=v,h({type:J.REPLACE})}function T(){var v,x=u;return v={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(m(11));function Y(){b.next&&b.next(g())}Y();var Et=x(Y);return{unsubscribe:Et}}},v[Q]=function(){return this},v}return h({type:J.INIT}),i={dispatch:h,subscribe:u,getState:g,replaceReducer:$},i[Q]=T,i}var bt=ht;const f={TOGGLE_THEME:"TOGGLE_THEME",SET_ORIENTATION:"SET_ORIENTATION",SET_GROUP:"SET_GROUP",SET_VARIANT:"SET_VARIANT",SET_VARIANT_PANEL:"SET_VARIANT_PANEL",RESET:"RESET"},Nt=e=>({type:f.SET_ORIENTATION,payload:e}),wt=e=>({type:f.SET_VARIANT,payload:e}),xt=e=>({type:f.SET_VARIANT_PANEL,payload:e}),St=e=>({type:f.SET_GROUP,payload:e}),It=()=>({type:f.TOGGLE_THEME}),Ot=e=>{switch(e){case f.SET_ORIENTATION:return Nt;case f.TOGGLE_THEME:return It;case f.SET_GROUP:return St;case f.SET_VARIANT:return wt;case f.SET_VARIANT_PANEL:return xt;default:return()=>({})}},Pt={lightTheme:!0,orientation:"landscape",group:"panel",variant:"pic",variantPanel:"actions"};function E(e,t,n){const i=Ot(t);e.dispatch(i(n))}function Ct(e=Pt,t){switch(t.type){case f.TOGGLE_THEME:return{...e,lightTheme:!e.lightTheme};case f.SET_ORIENTATION:return{...e,orientation:t.payload};case f.SET_GROUP:return{...e,group:t.payload};case f.SET_VARIANT:return{...e,variant:t.payload};case f.SET_VARIANT_PANEL:return{...e,variantPanel:t.payload};default:return e}}const y=bt(Ct);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const z=window,P=z.trustedTypes,tt=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,ft="?"+N,Rt=`<${ft}>`,C=document,G=(e="")=>C.createComment(e),U=e=>e===null||typeof e!="object"&&typeof e!="function",vt=Array.isArray,Lt=e=>vt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,nt=/>/g,S=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,pt=/^(?:script|style|textarea|title)$/i,$t=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),a=$t(1),ot=$t(2),R=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),st=new WeakMap,O=C.createTreeWalker(C,129,null,!1),Ht=(e,t)=>{const n=e.length-1,i=[];let r,o=t===2?"<svg>":"",s=V;for(let l=0;l<n;l++){const c=e[l];let g,u,h=-1,$=0;for(;$<c.length&&(s.lastIndex=$,u=s.exec(c),u!==null);)$=s.lastIndex,s===V?u[1]==="!--"?s=et:u[1]!==void 0?s=nt:u[2]!==void 0?(pt.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=S):u[3]!==void 0&&(s=S):s===S?u[0]===">"?(s=r??V,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,g=u[1],s=u[3]===void 0?S:u[3]==='"'?rt:it):s===rt||s===it?s=S:s===et||s===nt?s=V:(s=S,r=void 0);const T=s===S&&e[l+1].startsWith("/>")?" ":"";o+=s===V?c+Rt:h>=0?(i.push(g),c.slice(0,h)+"$lit$"+c.slice(h)+N+T):c+N+(h===-2?(i.push(void 0),l):T)}const d=o+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tt!==void 0?tt.createHTML(d):d,i]};class j{constructor({strings:t,_$litType$:n},i){let r;this.parts=[];let o=0,s=0;const d=t.length-1,l=this.parts,[c,g]=Ht(t,n);if(this.el=j.createElement(c,i),O.currentNode=this.el.content,n===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(r=O.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const u=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(N)){const $=g[s++];if(u.push(h),$!==void 0){const T=r.getAttribute($.toLowerCase()+"$lit$").split(N),v=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:v[2],strings:T,ctor:v[1]==="."?Vt:v[1]==="?"?Gt:v[1]==="@"?Ut:q})}else l.push({type:6,index:o})}for(const h of u)r.removeAttribute(h)}if(pt.test(r.tagName)){const u=r.textContent.split(N),h=u.length-1;if(h>0){r.textContent=P?P.emptyScript:"";for(let $=0;$<h;$++)r.append(u[$],G()),O.nextNode(),l.push({type:2,index:++o});r.append(u[h],G())}}}else if(r.nodeType===8)if(r.data===ft)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(N,u+1))!==-1;)l.push({type:7,index:o}),u+=N.length-1}o++}}static createElement(t,n){const i=C.createElement("template");return i.innerHTML=t,i}}function L(e,t,n=e,i){var r,o,s,d;if(t===R)return t;let l=i!==void 0?(r=n._$Co)===null||r===void 0?void 0:r[i]:n._$Cl;const c=U(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,n,i)),i!==void 0?((s=(d=n)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(t=L(e,l._$AS(e,t.values),l,i)),t}class Mt{constructor(t,n){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var n;const{el:{content:i},parts:r}=this._$AD,o=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:C).importNode(i,!0);O.currentNode=o;let s=O.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let g;c.type===2?g=new k(s,s.nextSibling,this,t):c.type===1?g=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(g=new jt(s,this,t)),this.u.push(g),c=r[++l]}d!==(c==null?void 0:c.index)&&(s=O.nextNode(),d++)}return o}p(t){let n=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class k{constructor(t,n,i,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=L(this,t,n),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==R&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this.g(t)}O(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var n;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=j.createElement(r.h,this.options)),r);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.p(i);else{const s=new Mt(o,this),d=s.v(this.options);s.p(i),this.T(d),this._$AH=s}}_$AC(t){let n=st.get(t.strings);return n===void 0&&st.set(t.strings,n=new j(t)),n}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const o of t)r===n.length?n.push(i=new k(this.O(G()),this.O(G()),this,this.options)):i=n[r],i._$AI(o),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this._$Cm=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class q{constructor(t,n,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,i,r){const o=this.strings;let s=!1;if(o===void 0)t=L(this,t,n,0),s=!U(t)||t!==this._$AH&&t!==R,s&&(this._$AH=t);else{const d=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=L(this,d[i+l],n,l),c===R&&(c=this._$AH[l]),s||(s=!U(c)||c!==this._$AH[l]),c===p?t=p:t!==p&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Bt=P?P.emptyScript:"";class Gt extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}}class Ut extends q{constructor(t,n,i,r,o){super(t,n,i,r,o),this.type=5}_$AI(t,n=this){var i;if((t=(i=L(this,t,n,0))!==null&&i!==void 0?i:p)===R)return;const r=this._$AH,o=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const at=z.litHtmlPolyfillSupport;at==null||at(j,k),((W=z.litHtmlVersions)!==null&&W!==void 0?W:z.litHtmlVersions=[]).push("2.5.0");const H=(e,t,n)=>{var i,r;const o=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const d=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=s=new k(t.insertBefore(G(),d),d,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=e=>(...t)=>({_$litDirective$:e,values:t});let qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=zt(class extends qt{constructor(e){var t;if(super(e),e.type!==kt.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?n.removeProperty(i):n[i]="")});for(const i in t){const r=t[i];r!=null&&(this.vt.add(i),i.includes("-")?n.setProperty(i,r):n[i]=r)}return R}});function w(e){const{vertices:t,size:n,fill:i,label:r,transforms:o,children:s=!1}=e;return Kt({children:s,vertices:t,size:n,fill:i,label:r,transforms:o})}let At=function(e){return Math.PI*e/180},Wt=function(e,t,n){return n+e*Math.cos(At(t))},Zt=function(e,t,n){return n+e*Math.sin(At(t))},lt=function(e){return e<1e-7?0:e};const Kt=e=>{let t=e.size||96,n=t/2,i=1*t/2,r=360/e.vertices,o=90,s=e.fill||"red",d=[0,0,t,t].join(" ");const c=[function(g){for(var u=[],h=0;h<g;h++){var $=r*h-o,T=[h===0?"M":"L",lt(Wt(i,$,n)),lt(Zt(i,$,n))].join(" ");u.push(T)}return u.join(" ")}(e.vertices)].join(" ");return e.children?a`
      <div class="col-center align-center shape-with-label">
        ${Z(t,d,s,c,e.transforms)} ${e.children}
      </div>
    `:e.label?a`
      <div class="col-center align-center shape-with-label">
        ${Z(t,d,s,c,e.transforms)}
        <p class="-win" style="font-size:55px;font-weight:bold">
          ${e.label}
        </p>
      </div>
    `:a` ${Z(t,d,s,c,e.transforms)} `};function Z(e,t,n,i,r){if(r){let o={transformOrigin:"center",transform:`${r}`};return ot`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${n}
    style="${Dt(o)}"
  >
    <path d=${i} />
  </svg>`}else return ot`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${n}
  >
    <path d=${i} />
  </svg>`}function Xt(){return w({vertices:22,size:100,fill:"var(--group-actions-bg)"})}function gt(){return a`<h2 class="headline" />`}function I(e=1,t){return a` ${[...Array(e)].map(n=>a`<p class="text ${t?"text-short":""}" />`)}`}function F(){return a` <button>${I()}</button> `}function Ft(e,t){return a`
    <div class="gap:md ${e?"reorder:top":""}">
      ${_.HeadLine()} ${_.Line(3)}
      ${t?a` <label class="text-input">
            <input type="text" placeholder="Write it" />
          </label>`:a``}
    </div>
  `}function Yt(e){return a`
    <div class="${e?"reorder:top":""}">
      ${I(1,!0)}
      <div>${F()}${F()}</div>
    </div>
  `}const _={};_.Content=Ft;_.HeadLine=gt;_.Line=I;_.Actions=Yt;function Qt(e){H(Jt(e),document.querySelector("article"))}function Jt(e){return a` <div class="group panel">${te(e)}</div> `}function te(e){switch(e){case"actions":return a` ${_.Content()} ${_.Actions()} `;case"actions-reorder":return a` ${_.Content()}${_.Actions(!0)} `;case"input":return a` ${_.Content(!0,!0)} ${_.Actions()} `;default:return a` ${_.Content()}`}}function ee(){return a`
    <picture>
      <img
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      />
    </picture>
  `}function ne(e){return a`
    <div class="gap:md ${e?"reorder:top":""}">
      ${A.HeadLine()} ${A.Line(3)}
    </div>
  `}function ie(e){return a` <div class="${e?"reorder:top":""}">${F()}</div> `}const A={};A.Pic=ee;A.Content=ne;A.Avatar=Xt;A.HeadLine=gt;A.Line=I;A.Actions=ie;function re(e,t){H(_t(e,t),document.querySelector("article"))}function _t(e,t){return a` <div
    class="${e==="portrait"?"fix-portrait-card-height":""}"
  >
    <div class="group card card:${e}">${oe(t)}</div>
  </div>`}function oe(e){switch(e){case"actions":return a` ${A.Content()} ${A.Actions()} `;case"pic":return a` ${A.Pic()}
        <div class="pin-avatar">${A.Avatar()}</div>`;case"pic-content":return a` ${A.Pic()} ${A.Content()} `;case"pic-reorder":return a` ${A.Pic()} ${A.Content(!0)} `;default:return a``}}function se(e){H(ae(e),document.querySelector("article"))}function ae(e){return le(e)}function le(e){return a`
    <ul role="list" aria-label=${e} class="group list">
      ${K()} ${K(!0)}${K(!1,!0)}
      ${[...Array(3)].map((t,n)=>B(n))} ${B(1e4,!0)}
      ${[...Array(3)].map((t,n)=>B(n+4))} ${B(1e4,!0)}
      ${[...Array(2)].map((t,n)=>B(n+8))}
    </ul>
  `}function mt(){return a`<p class="headline headline-short" />`}function K(e,t){return a` <li
    class="list-item${e?"-start":""}${t?"-end":""}"
  >
    ${e?a`<div class="start">
          ${w({vertices:8,size:24,fill:"rgba(0,0,0,.4)"})}
        </div>`:a``}
    <div>${mt()} ${I()}</div>
    ${t?a`<div class="end">
          ${w({vertices:8,size:24,fill:"rgba(0,0,0,.4)"})}
        </div>`:a``}
  </li>`}function B(e,t){const n=[1,5],i=[1,2,3,5,7];return t!==void 0?a`
      <li>
        <div>
          <div class="list:divider">${I(1,!0)}</div>
        </div>
      </li>
    `:a` <li class="list-item-start-end">
    ${a`<div class="start">
      ${w({vertices:8,size:24,fill:n.includes(e)?"var(--accent-error)":"rgba(0,0,0,.4)"})}
    </div>`}
    <div>${mt()} ${I()}</div>

    ${a`<div class="end">
      ${w({vertices:4,size:24,fill:[...i,...n].includes(e)?"var(--accent)":"rgba(0,0,0,.4)"})}
    </div>`}
  </li>`}function ce(e){const t=n=>{const i=n.target.dataset.nav,r=n.target.dataset.option;i==="group"&&E(y,f.SET_GROUP,r)};return a`
    <div class="subnav group gap:md">
      <button
        data-side="bottom"
        data-nav="group"
        data-option="card"
        @click=${{handleEvent:t}}
      >
        ${w({vertices:3,size:45,transforms:"translateX(10px)",fill:e==="card"?"var(--accent-error)":"var(--group-actions-color)"})}
      </button>
      <button
        data-side="bottom"
        data-nav="group"
        data-option="panel"
        @click=${{handleEvent:t}}
      >
        ${w({vertices:4,size:45,transforms:"translateX(10px)",fill:e==="panel"?"var(--accent-error)":"var(--group-actions-color)"})}
      </button>
      <button
        data-side="bottom"
        data-nav="group"
        data-option="list"
        @click=${{handleEvent:t}}
      >
        ${w({vertices:22,size:45,transforms:"translateX(10px)",fill:e==="list"?"var(--accent-error)":"var(--group-actions-color)"})}
      </button>
    </div>
  `}function ct(e,t){const n=r=>{const o=Number(r.target.value);if(o===0)return E(y,f.SET_VARIANT,"pic");if(o===5)return E(y,f.SET_VARIANT,"pic-content");if(o===10)return E(y,f.SET_VARIANT,"pic-reorder");if(o===15)return E(y,f.SET_VARIANT,"actions")},i=r=>({pic:0,"pic-content":5,"pic-reorder":10,actions:15})[r];return t?a``:a`
    <label>
      <input
        type="range"
        min="0"
        max="15"
        value="${i(e)}"
        step="5"
        id="range"
        @input=${{handleEvent:n}}
        list="markers"
      />
    </label>
    <datalist id="markers">
      <option value="0"></option>
      <option value="5"></option>
      <option value="10"></option>
      <option value="15"></option>
      <option value="20"></option>
    </datalist>
  `}function ut(e,t){const n=r=>{const o=Number(r.target.value);if(o===0)return E(y,f.SET_VARIANT_PANEL,"actions");if(o===10)return E(y,f.SET_VARIANT_PANEL,"actions-reorder");if(o===20)return E(y,f.SET_VARIANT_PANEL,"input")},i=r=>({actions:0,"actions-reorder":5,input:10})[r];return t?a``:a`
    <label>
      <input
        type="range"
        min="0"
        max="20"
        value="${i(e)}"
        step="10"
        id="range"
        @input=${{handleEvent:n}}
        list="markers"
      />
    </label>
    <datalist id="markers">
      <option value="0"></option>
      <option value="10"></option>
      <option value="20"></option>
    </datalist>
  `}function dt(e,t){const n=i=>{const r=i.target.dataset.nav,o=i.target.dataset.option;r==="ratio"&&E(y,f.SET_ORIENTATION,o)};return t?a``:a`
    <div class="subnav group gap:md">
      <button
        data-nav="ratio"
        data-option="square"
        @click=${{handleEvent:n}}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="10"
            y="10"
            width="44"
            height="44"
            fill="${e==="square"?"var(--accent-error)":"var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>

      <button
        data-nav="ratio"
        data-option="portrait"
        @click=${{handleEvent:n}}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="10"
            y="6"
            width="44"
            height="52"
            fill="${e==="portrait"?"var(--accent-error)":"var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>

      <button
        data-nav="ratio"
        data-option="landscape"
        @click=${{handleEvent:n}}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="6"
            y="14"
            width="52"
            height="38"
            fill="${e==="landscape"?"var(--accent-error)":"var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>
    </div>
  `}function ue(e){H(de(e),document.querySelector("nav"))}function de(e){const t=e.group==="card",n=e.group==="panel";return a`
    ${ce(e.group)}
    ${t?ct(e.variant):ct(e.variant,!0)}
    ${t?dt(e.orientation):dt(e.orientation,!0)}
    ${n?ut(e.variantPanel):ut(e.variantPanel,!0)}
  `}function he(e){H(fe(e),document.querySelector("#title"))}function fe(e){const t=e==="card"?"content with ratio":e==="list"?"items with prefix/sufix actions":"interactive elements";return a` <strong>${`${e}:`}</strong> groups ${t}`}function X(e,t,n){H(ve(e,t,n),document.querySelector("aside"))}function ve(e,t,n){const i=e==="portrait";return n?a``:a`
    <div class="group grid${i?"":":md"} gap:md">
      ${[...Array(4)].map(r=>_t(e,t))}
    </div>
  `}y.subscribe(yt);function yt(){const{orientation:e,group:t,variant:n,variantPanel:i}=y.getState();he(t),ue({orientation:e,group:t,variant:n,variantPanel:i}),t==="card"&&(re(e,n),X(e,n)),t==="panel"&&(X(e,n,!0),Qt(i)),t==="list"&&(X(e,n,!0),se("list-label"))}document.addEventListener("DOMContentLoaded",function(){yt()});
