import{E as $e,F as He,U as Pe,X as Re,Y as Tt,Z as Nt,_ as Ye,$ as Ot,a0 as ce,a1 as ue,a2 as Lo,a3 as Fe,a4 as $t,a5 as vo,a6 as Ht,a7 as ho,a8 as po,a9 as we,aa as _t,ab as mo,ac as kt,ad as Et,ae as Bt,af as Mt,ag as Lt,ah as Kt,ai as Ft,c as pe,b as _,d as I,o as oe,f as z,e as E,aj as Dt,u as me,j as X,k as ge,x as go,ak as bo,D as _e,al as Ko,q as jt,B as te,w as U,m as Te,a as De,n as Ce,l as re,z as Gt,A as ie,s as Wt,am as Fo,N as Do,v as jo}from"./browser.3909655e.js";import{r as F,A as Xe,b as H,a as D,h as f,i as Y,E as Se,v as Ut,K as Vt,t as V,p as q,T as Go,M as Ze,m as Wo,F as Je,L as qt,q as Yt,o as Xt,e as Zt,l as Uo}from"./entry.23c03e9b.js";import{f as de}from"./format-length.c9d165c6.js";import{a as he}from"./Input.18ea4f6e.js";import{c as yo,p as Qe,d as Vo,a as qo,F as Jt,g as xo,z as Qt,k as ve,r as J,f as er}from"./fade-in-scale-up.cssr.7f8153a0.js";import{c as or,t as eo,i as Yo,g as tr,b as rr}from"./get.bec29ee2.js";import{a as Ie,c as Xo,b as Zo,V as Jo,h as wo,u as nr}from"./Follower.b634ca7e.js";import{N as ir}from"./navigationBar.vue.4773e2b6.js";import{N as lr}from"./Button.8c0c91a9.js";import{k as oo}from"./Close.49903972.js";import{f as ar}from"./fade-in-height-expand.cssr.2ce29ded.js";function sr(e){return o=>{o?e.value=o.$el:e.value=null}}let ke;function dr(){return ke===void 0&&(ke=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),ke}function cr(e,o,t){if(!o)return e;const r=F(e.value);let n=null;return Xe(e,i=>{n!==null&&window.clearTimeout(n),i===!0?t&&!t.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Qo(e,o){return H(()=>{for(const t of o)if(e[t]!==void 0)return e[t];return e[o[o.length-1]]})}const se="@@mmoContext",ur={mounted(e,{value:o}){e[se]={handler:void 0},typeof o=="function"&&(e[se].handler=o,$e("mousemoveoutside",e,o))},updated(e,{value:o}){const t=e[se];typeof o=="function"?t.handler?t.handler!==o&&(He("mousemoveoutside",e,t.handler),t.handler=o,$e("mousemoveoutside",e,o)):(e[se].handler=o,$e("mousemoveoutside",e,o)):t.handler&&(He("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:o}=e[se];o&&He("mousemoveoutside",e,o),e[se].handler=void 0}},fr=ur;var vr=Pe(Re,"WeakMap");const je=vr;var hr=Tt(Object.keys,Object);const pr=hr;var mr=Object.prototype,gr=mr.hasOwnProperty;function br(e){if(!Nt(e))return pr(e);var o=[];for(var t in Object(e))gr.call(e,t)&&t!="constructor"&&o.push(t);return o}function to(e){return Ye(e)?Ot(e):br(e)}function yr(e,o){for(var t=-1,r=o.length,n=e.length;++t<r;)e[n+t]=o[t];return e}function xr(e,o){for(var t=-1,r=e==null?0:e.length,n=0,i=[];++t<r;){var l=e[t];o(l,t,e)&&(i[n++]=l)}return i}function wr(){return[]}var Cr=Object.prototype,Sr=Cr.propertyIsEnumerable,Co=Object.getOwnPropertySymbols,Ir=Co?function(e){return e==null?[]:(e=Object(e),xr(Co(e),function(o){return Sr.call(e,o)}))}:wr;const Ar=Ir;function zr(e,o,t){var r=o(e);return ce(e)?r:yr(r,t(e))}function So(e){return zr(e,to,Ar)}var Pr=Pe(Re,"DataView");const Ge=Pr;var Rr=Pe(Re,"Promise");const We=Rr;var Tr=Pe(Re,"Set");const Ue=Tr;var Io="[object Map]",Nr="[object Object]",Ao="[object Promise]",zo="[object Set]",Po="[object WeakMap]",Ro="[object DataView]",Or=ue(Ge),$r=ue(Fe),Hr=ue(We),_r=ue(Ue),kr=ue(je),ae=Lo;(Ge&&ae(new Ge(new ArrayBuffer(1)))!=Ro||Fe&&ae(new Fe)!=Io||We&&ae(We.resolve())!=Ao||Ue&&ae(new Ue)!=zo||je&&ae(new je)!=Po)&&(ae=function(e){var o=Lo(e),t=o==Nr?e.constructor:void 0,r=t?ue(t):"";if(r)switch(r){case Or:return Ro;case $r:return Io;case Hr:return Ao;case _r:return zo;case kr:return Po}return o});const To=ae;var Er="__lodash_hash_undefined__";function Br(e){return this.__data__.set(e,Er),this}function Mr(e){return this.__data__.has(e)}function Ae(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new $t;++o<t;)this.add(e[o])}Ae.prototype.add=Ae.prototype.push=Br;Ae.prototype.has=Mr;function Lr(e,o){for(var t=-1,r=e==null?0:e.length;++t<r;)if(o(e[t],t,e))return!0;return!1}function Kr(e,o){return e.has(o)}var Fr=1,Dr=2;function et(e,o,t,r,n,i){var l=t&Fr,a=e.length,d=o.length;if(a!=d&&!(l&&d>a))return!1;var c=i.get(e),p=i.get(o);if(c&&p)return c==o&&p==e;var v=-1,h=!0,O=t&Dr?new Ae:void 0;for(i.set(e,o),i.set(o,e);++v<a;){var C=e[v],g=o[v];if(r)var P=l?r(g,C,v,o,e,i):r(C,g,v,e,o,i);if(P!==void 0){if(P)continue;h=!1;break}if(O){if(!Lr(o,function(T,B){if(!Kr(O,B)&&(C===T||n(C,T,t,r,i)))return O.push(B)})){h=!1;break}}else if(!(C===g||n(C,g,t,r,i))){h=!1;break}}return i.delete(e),i.delete(o),h}function jr(e){var o=-1,t=Array(e.size);return e.forEach(function(r,n){t[++o]=[n,r]}),t}function Gr(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}var Wr=1,Ur=2,Vr="[object Boolean]",qr="[object Date]",Yr="[object Error]",Xr="[object Map]",Zr="[object Number]",Jr="[object RegExp]",Qr="[object Set]",en="[object String]",on="[object Symbol]",tn="[object ArrayBuffer]",rn="[object DataView]",No=vo?vo.prototype:void 0,Ee=No?No.valueOf:void 0;function nn(e,o,t,r,n,i,l){switch(t){case rn:if(e.byteLength!=o.byteLength||e.byteOffset!=o.byteOffset)return!1;e=e.buffer,o=o.buffer;case tn:return!(e.byteLength!=o.byteLength||!i(new ho(e),new ho(o)));case Vr:case qr:case Zr:return Ht(+e,+o);case Yr:return e.name==o.name&&e.message==o.message;case Jr:case en:return e==o+"";case Xr:var a=jr;case Qr:var d=r&Wr;if(a||(a=Gr),e.size!=o.size&&!d)return!1;var c=l.get(e);if(c)return c==o;r|=Ur,l.set(e,o);var p=et(a(e),a(o),r,n,i,l);return l.delete(e),p;case on:if(Ee)return Ee.call(e)==Ee.call(o)}return!1}var ln=1,an=Object.prototype,sn=an.hasOwnProperty;function dn(e,o,t,r,n,i){var l=t&ln,a=So(e),d=a.length,c=So(o),p=c.length;if(d!=p&&!l)return!1;for(var v=d;v--;){var h=a[v];if(!(l?h in o:sn.call(o,h)))return!1}var O=i.get(e),C=i.get(o);if(O&&C)return O==o&&C==e;var g=!0;i.set(e,o),i.set(o,e);for(var P=l;++v<d;){h=a[v];var T=e[h],B=o[h];if(r)var L=l?r(B,T,h,o,e,i):r(T,B,h,e,o,i);if(!(L===void 0?T===B||n(T,B,t,r,i):L)){g=!1;break}P||(P=h=="constructor")}if(g&&!P){var y=e.constructor,m=o.constructor;y!=m&&"constructor"in e&&"constructor"in o&&!(typeof y=="function"&&y instanceof y&&typeof m=="function"&&m instanceof m)&&(g=!1)}return i.delete(e),i.delete(o),g}var cn=1,Oo="[object Arguments]",$o="[object Array]",ye="[object Object]",un=Object.prototype,Ho=un.hasOwnProperty;function fn(e,o,t,r,n,i){var l=ce(e),a=ce(o),d=l?$o:To(e),c=a?$o:To(o);d=d==Oo?ye:d,c=c==Oo?ye:c;var p=d==ye,v=c==ye,h=d==c;if(h&&po(e)){if(!po(o))return!1;l=!0,p=!1}if(h&&!p)return i||(i=new we),l||_t(e)?et(e,o,t,r,n,i):nn(e,o,d,t,r,n,i);if(!(t&cn)){var O=p&&Ho.call(e,"__wrapped__"),C=v&&Ho.call(o,"__wrapped__");if(O||C){var g=O?e.value():e,P=C?o.value():o;return i||(i=new we),n(g,P,t,r,i)}}return h?(i||(i=new we),dn(e,o,t,r,n,i)):!1}function ro(e,o,t,r,n){return e===o?!0:e==null||o==null||!mo(e)&&!mo(o)?e!==e&&o!==o:fn(e,o,t,r,ro,n)}var vn=1,hn=2;function pn(e,o,t,r){var n=t.length,i=n,l=!r;if(e==null)return!i;for(e=Object(e);n--;){var a=t[n];if(l&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++n<i;){a=t[n];var d=a[0],c=e[d],p=a[1];if(l&&a[2]){if(c===void 0&&!(d in e))return!1}else{var v=new we;if(r)var h=r(c,p,d,e,o,v);if(!(h===void 0?ro(p,c,vn|hn,r,v):h))return!1}}return!0}function ot(e){return e===e&&!kt(e)}function mn(e){for(var o=to(e),t=o.length;t--;){var r=o[t],n=e[r];o[t]=[r,n,ot(n)]}return o}function tt(e,o){return function(t){return t==null?!1:t[e]===o&&(o!==void 0||e in Object(t))}}function gn(e){var o=mn(e);return o.length==1&&o[0][2]?tt(o[0][0],o[0][1]):function(t){return t===e||pn(t,e,o)}}function bn(e,o){return e!=null&&o in Object(e)}function yn(e,o,t){o=or(o,e);for(var r=-1,n=o.length,i=!1;++r<n;){var l=eo(o[r]);if(!(i=e!=null&&t(e,l)))break;e=e[l]}return i||++r!=n?i:(n=e==null?0:e.length,!!n&&Et(n)&&Bt(l,n)&&(ce(e)||Mt(e)))}function xn(e,o){return e!=null&&yn(e,o,bn)}var wn=1,Cn=2;function Sn(e,o){return Yo(e)&&ot(o)?tt(eo(e),o):function(t){var r=tr(t,e);return r===void 0&&r===o?xn(t,e):ro(o,r,wn|Cn)}}function In(e){return function(o){return o==null?void 0:o[e]}}function An(e){return function(o){return rr(o,e)}}function zn(e){return Yo(e)?In(eo(e)):An(e)}function Pn(e){return typeof e=="function"?e:e==null?Lt:typeof e=="object"?ce(e)?Sn(e[0],e[1]):gn(e):zn(e)}function Rn(e,o){return e&&Kt(e,o,to)}function Tn(e,o){return function(t,r){if(t==null)return t;if(!Ye(t))return e(t,r);for(var n=t.length,i=o?n:-1,l=Object(t);(o?i--:++i<n)&&r(l[i],i,l)!==!1;);return t}}var Nn=Tn(Rn);const On=Nn;function $n(e,o){var t=-1,r=Ye(e)?Array(e.length):[];return On(e,function(n,i,l){r[++t]=o(n,i,l)}),r}function Hn(e,o){var t=ce(e)?Ft:$n;return t(e,Pn(o))}const rt=D({name:"ChevronRight",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),_n=D({name:"ChevronDownFilled",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function _o(e){return Array.isArray(e)?e:[e]}const Ve={STOP:"STOP"};function nt(e,o){const t=o(e);e.children!==void 0&&t!==Ve.STOP&&e.children.forEach(r=>nt(r,o))}function kn(e,o={}){const{preserveGroup:t=!1}=o,r=[],n=t?l=>{l.isLeaf||(r.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||r.push(l.key),i(l.children))};function i(l){l.forEach(n)}return i(e),r}function En(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function Bn(e){return e.children}function Mn(e){return e.key}function Ln(){return!1}function Kn(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Fn(e){return e.disabled===!0}function Dn(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Be(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Me(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function jn(e,o){const t=new Set(e);return o.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function Gn(e,o){const t=new Set(e);return o.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function Wn(e){return(e==null?void 0:e.type)==="group"}function ml(e){const o=new Map;return e.forEach((t,r)=>{o.set(t.key,r)}),t=>{var r;return(r=o.get(t))!==null&&r!==void 0?r:null}}class Un extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Vn(e,o,t,r){return ze(o.concat(e),t,r,!1)}function qn(e,o){const t=new Set;return e.forEach(r=>{const n=o.treeNodeMap.get(r);if(n!==void 0){let i=n.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Yn(e,o,t,r){const n=ze(o,t,r,!1),i=ze(e,t,r,!0),l=qn(e,t),a=[];return n.forEach(d=>{(i.has(d)||l.has(d))&&a.push(d)}),a.forEach(d=>n.delete(d)),n}function Le(e,o){const{checkedKeys:t,keysToCheck:r,keysToUncheck:n,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:d,allowNotLoaded:c}=e;if(!l)return r!==void 0?{checkedKeys:jn(t,r),indeterminateKeys:Array.from(i)}:n!==void 0?{checkedKeys:Gn(t,n),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:p}=o;let v;n!==void 0?v=Yn(n,t,o,c):r!==void 0?v=Vn(r,t,o,c):v=ze(t,o,c,!1);const h=d==="parent",O=d==="child"||a,C=v,g=new Set,P=Math.max.apply(null,Array.from(p.keys()));for(let T=P;T>=0;T-=1){const B=T===0,L=p.get(T);for(const y of L){if(y.isLeaf)continue;const{key:m,shallowLoaded:N}=y;if(O&&N&&y.children.forEach(s=>{!s.disabled&&!s.isLeaf&&s.shallowLoaded&&C.has(s.key)&&C.delete(s.key)}),y.disabled||!N)continue;let x=!0,w=!1,S=!0;for(const s of y.children){const R=s.key;if(!s.disabled){if(S&&(S=!1),C.has(R))w=!0;else if(g.has(R)){w=!0,x=!1;break}else if(x=!1,w)break}}x&&!S?(h&&y.children.forEach(s=>{!s.disabled&&C.has(s.key)&&C.delete(s.key)}),C.add(m)):w&&g.add(m),B&&O&&C.has(m)&&C.delete(m)}}return{checkedKeys:Array.from(C),indeterminateKeys:Array.from(g)}}function ze(e,o,t,r){const{treeNodeMap:n,getChildren:i}=o,l=new Set,a=new Set(e);return e.forEach(d=>{const c=n.get(d);c!==void 0&&nt(c,p=>{if(p.disabled)return Ve.STOP;const{key:v}=p;if(!l.has(v)&&(l.add(v),a.add(v),Dn(p.rawNode,i))){if(r)return Ve.STOP;if(!t)throw new Un}})}),a}function Xn(e,{includeGroup:o=!1,includeSelf:t=!0},r){var n;const i=r.treeNodeMap;let l=e==null?null:(n=i.get(e))!==null&&n!==void 0?n:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(o||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(d=>d.key),a}function Zn(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Jn(e,o){const t=e.siblings,r=t.length,{index:n}=e;return o?t[(n+1)%r]:n===t.length-1?null:t[n+1]}function ko(e,o,{loop:t=!1,includeDisabled:r=!1}={}){const n=o==="prev"?Qn:Jn,i={reverse:o==="prev"};let l=!1,a=null;function d(c){if(c!==null){if(c===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const p=no(c,i);p!==null?a=p:d(n(c,t))}else{const p=n(c,!1);if(p!==null)d(p);else{const v=ei(c);v!=null&&v.isGroup?d(n(v,t)):t&&d(n(c,!0))}}}}return d(e),a}function Qn(e,o){const t=e.siblings,r=t.length,{index:n}=e;return o?t[(n-1+r)%r]:n===0?null:t[n-1]}function ei(e){return e.parent}function no(e,o={}){const{reverse:t=!1}=o,{children:r}=e;if(r){const{length:n}=r,i=t?n-1:0,l=t?-1:n,a=t?-1:1;for(let d=i;d!==l;d+=a){const c=r[d];if(!c.disabled&&!c.ignored)if(c.isGroup){const p=no(c,o);if(p!==null)return p}else return c}}return null}const oi={getChild(){return this.ignored?null:no(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ko(this,"next",e)},getPrev(e={}){return ko(this,"prev",e)}};function ti(e,o){const t=o?new Set(o):void 0,r=[];function n(i){i.forEach(l=>{r.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&n(l.children)})}return n(e),r}function ri(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function it(e,o,t,r,n,i=null,l=0){const a=[];return e.forEach((d,c)=>{var p;const v=Object.create(r);if(v.rawNode=d,v.siblings=a,v.level=l,v.index=c,v.isFirstChild=c===0,v.isLastChild=c+1===e.length,v.parent=i,!v.ignored){const h=n(d);Array.isArray(h)&&(v.children=it(h,o,t,r,n,v,l+1))}a.push(v),o.set(v.key,v),t.has(l)||t.set(l,[]),(p=t.get(l))===null||p===void 0||p.push(v)}),a}function lt(e,o={}){var t;const r=new Map,n=new Map,{getDisabled:i=Fn,getIgnored:l=Ln,getIsGroup:a=Wn,getKey:d=Mn}=o,c=(t=o.getChildren)!==null&&t!==void 0?t:Bn,p=o.ignoreEmptyChildren?y=>{const m=c(y);return Array.isArray(m)?m.length?m:null:m}:c,v=Object.assign({get key(){return d(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return En(this.rawNode,p)},get shallowLoaded(){return Kn(this.rawNode,p)},get ignored(){return l(this.rawNode)},contains(y){return ri(this,y)}},oi),h=it(e,r,n,v,p);function O(y){if(y==null)return null;const m=r.get(y);return m&&!m.isGroup&&!m.ignored?m:null}function C(y){if(y==null)return null;const m=r.get(y);return m&&!m.ignored?m:null}function g(y,m){const N=C(y);return N?N.getPrev(m):null}function P(y,m){const N=C(y);return N?N.getNext(m):null}function T(y){const m=C(y);return m?m.getParent():null}function B(y){const m=C(y);return m?m.getChild():null}const L={treeNodes:h,treeNodeMap:r,levelTreeNodeMap:n,maxLevel:Math.max(...n.keys()),getChildren:p,getFlattenedNodes(y){return ti(h,y)},getNode:O,getPrev:g,getNext:P,getParent:T,getChild:B,getFirstAvailableNode(){return Zn(h)},getPath(y,m={}){return Xn(y,m,L)},getCheckedKeys(y,m={}){const{cascade:N=!0,leafOnly:x=!1,checkStrategy:w="all",allowNotLoaded:S=!1}=m;return Le({checkedKeys:Be(y),indeterminateKeys:Me(y),cascade:N,leafOnly:x,checkStrategy:w,allowNotLoaded:S},L)},check(y,m,N={}){const{cascade:x=!0,leafOnly:w=!1,checkStrategy:S="all",allowNotLoaded:s=!1}=N;return Le({checkedKeys:Be(m),indeterminateKeys:Me(m),keysToCheck:y==null?[]:_o(y),cascade:x,leafOnly:w,checkStrategy:S,allowNotLoaded:s},L)},uncheck(y,m,N={}){const{cascade:x=!0,leafOnly:w=!1,checkStrategy:S="all",allowNotLoaded:s=!1}=N;return Le({checkedKeys:Be(m),indeterminateKeys:Me(m),keysToUncheck:y==null?[]:_o(y),cascade:x,leafOnly:w,checkStrategy:S,allowNotLoaded:s},L)},getNonLeafKeys(y={}){return kn(h,y)}};return L}const ni={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},ii=e=>{const{boxShadow2:o,popoverColor:t,textColor2:r,borderRadius:n,fontSize:i,dividerColor:l}=e;return Object.assign(Object.assign({},ni),{fontSize:i,borderRadius:n,color:t,dividerColor:l,textColor:r,boxShadow:o})},li={name:"Popover",common:pe,self:ii},io=li,Ke={top:"bottom",bottom:"top",left:"right",right:"left"},W="var(--n-arrow-height) * 1.414",ai=_([I("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[_(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),oe("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[oe("scrollable",[oe("show-header-or-footer","padding: var(--n-padding);")])]),z("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),z("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),E("scrollable, show-header-or-footer",[z("content",`
 padding: var(--n-padding);
 `)])]),I("popover-shared",`
 transform-origin: inherit;
 `,[I("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[I("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${W});
 height: calc(${W});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),_("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),_("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),_("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),_("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Z("top-start",`
 top: calc(${W} / -2);
 left: calc(${ee("top-start")} - var(--v-offset-left));
 `),Z("top",`
 top: calc(${W} / -2);
 transform: translateX(calc(${W} / -2)) rotate(45deg);
 left: 50%;
 `),Z("top-end",`
 top: calc(${W} / -2);
 right: calc(${ee("top-end")} + var(--v-offset-left));
 `),Z("bottom-start",`
 bottom: calc(${W} / -2);
 left: calc(${ee("bottom-start")} - var(--v-offset-left));
 `),Z("bottom",`
 bottom: calc(${W} / -2);
 transform: translateX(calc(${W} / -2)) rotate(45deg);
 left: 50%;
 `),Z("bottom-end",`
 bottom: calc(${W} / -2);
 right: calc(${ee("bottom-end")} + var(--v-offset-left));
 `),Z("left-start",`
 left: calc(${W} / -2);
 top: calc(${ee("left-start")} - var(--v-offset-top));
 `),Z("left",`
 left: calc(${W} / -2);
 transform: translateY(calc(${W} / -2)) rotate(45deg);
 top: 50%;
 `),Z("left-end",`
 left: calc(${W} / -2);
 bottom: calc(${ee("left-end")} + var(--v-offset-top));
 `),Z("right-start",`
 right: calc(${W} / -2);
 top: calc(${ee("right-start")} - var(--v-offset-top));
 `),Z("right",`
 right: calc(${W} / -2);
 transform: translateY(calc(${W} / -2)) rotate(45deg);
 top: 50%;
 `),Z("right-end",`
 right: calc(${W} / -2);
 bottom: calc(${ee("right-end")} + var(--v-offset-top));
 `),...Hn({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,o)=>{const t=["right","left"].includes(o),r=t?"width":"height";return e.map(n=>{const i=n.split("-")[1]==="end",a=`calc((${`var(--v-target-${r}, 0px)`} - ${W}) / 2)`,d=ee(n);return _(`[v-placement="${n}"] >`,[I("popover-shared",[E("center-arrow",[I("popover-arrow",`${o}: calc(max(${a}, ${d}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function ee(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Z(e,o){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return _(`[v-placement="${e}"] >`,[I("popover-shared",`
 margin-${Ke[t]}: var(--n-space);
 `,[E("show-arrow",`
 margin-${Ke[t]}: var(--n-space-arrow);
 `),E("overlap",`
 margin: 0;
 `),Dt("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${Ke[t]}: auto;
 ${r}
 `,[I("popover-arrow",o)])])])}const at=Object.assign(Object.assign({},X.props),{to:Ie.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),st=({arrowStyle:e,clsPrefix:o})=>f("div",{key:"__popover-arrow__",class:`${o}-popover-arrow-wrapper`},f("div",{class:`${o}-popover-arrow`,style:e})),si=D({name:"PopoverBody",inheritAttrs:!1,props:at,setup(e,{slots:o,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:i}=me(e),l=X("Popover","-popover",ai,io,e,n),a=F(null),d=Y("NPopover"),c=F(null),p=F(e.show),v=F(!1);Se(()=>{const{show:x}=e;x&&!dr()&&!e.internalDeactivateImmediately&&(v.value=!0)});const h=H(()=>{const{trigger:x,onClickoutside:w}=e,S=[],{positionManuallyRef:{value:s}}=d;return s||(x==="click"&&!w&&S.push([yo,y,void 0,{capture:!0}]),x==="hover"&&S.push([fr,L])),w&&S.push([yo,y,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&v.value)&&S.push([Ut,e.show]),S}),O=H(()=>{const x=e.width==="trigger"?void 0:de(e.width),w=[];x&&w.push({width:x});const{maxWidth:S,minWidth:s}=e;return S&&w.push({maxWidth:de(S)}),s&&w.push({maxWidth:de(s)}),i||w.push(C.value),w}),C=H(()=>{const{common:{cubicBezierEaseInOut:x,cubicBezierEaseIn:w,cubicBezierEaseOut:S},self:{space:s,spaceArrow:R,padding:A,fontSize:M,textColor:b,dividerColor:$,color:u,boxShadow:k,borderRadius:K,arrowHeight:G,arrowOffset:Q,arrowOffsetVertical:fe}}=l.value;return{"--n-box-shadow":k,"--n-bezier":x,"--n-bezier-ease-in":w,"--n-bezier-ease-out":S,"--n-font-size":M,"--n-text-color":b,"--n-color":u,"--n-divider-color":$,"--n-border-radius":K,"--n-arrow-height":G,"--n-arrow-offset":Q,"--n-arrow-offset-vertical":fe,"--n-padding":A,"--n-space":s,"--n-space-arrow":R}}),g=i?ge("popover",void 0,C,e):void 0;d.setBodyInstance({syncPosition:P}),Vt(()=>{d.setBodyInstance(null)}),Xe(V(e,"show"),x=>{e.animated||(x?p.value=!0:p.value=!1)});function P(){var x;(x=a.value)===null||x===void 0||x.syncPosition()}function T(x){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(x)}function B(x){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(x)}function L(x){e.trigger==="hover"&&!m().contains(go(x))&&d.handleMouseMoveOutside(x)}function y(x){(e.trigger==="click"&&!m().contains(go(x))||e.onClickoutside)&&d.handleClickOutside(x)}function m(){return d.getTriggerElement()}q(Qe,c),q(Vo,null),q(qo,null);function N(){if(g==null||g.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&v.value))return null;let w;const S=d.internalRenderBodyRef.value,{value:s}=n;if(S)w=S([`${s}-popover-shared`,g==null?void 0:g.themeClass.value,e.overlap&&`${s}-popover-shared--overlap`,e.showArrow&&`${s}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${s}-popover-shared--center-arrow`],c,O.value,T,B);else{const{value:R}=d.extraClassRef,{internalTrapFocus:A}=e,M=!bo(o.header)||!bo(o.footer),b=()=>{var $;const u=M?f(Je,null,_e(o.header,G=>G?f("div",{class:`${s}-popover__header`,style:e.headerStyle},G):null),_e(o.default,G=>G?f("div",{class:`${s}-popover__content`,style:e.contentStyle},o):null),_e(o.footer,G=>G?f("div",{class:`${s}-popover__footer`,style:e.footerStyle},G):null)):e.scrollable?($=o.default)===null||$===void 0?void 0:$.call(o):f("div",{class:`${s}-popover__content`,style:e.contentStyle},o),k=e.scrollable?f(Ko,{contentClass:M?void 0:`${s}-popover__content`,contentStyle:M?void 0:e.contentStyle},{default:()=>u}):u,K=e.showArrow?st({arrowStyle:e.arrowStyle,clsPrefix:s}):null;return[k,K]};w=f("div",Ze({class:[`${s}-popover`,`${s}-popover-shared`,g==null?void 0:g.themeClass.value,R.map($=>`${s}-${$}`),{[`${s}-popover--scrollable`]:e.scrollable,[`${s}-popover--show-header-or-footer`]:M,[`${s}-popover--raw`]:e.raw,[`${s}-popover-shared--overlap`]:e.overlap,[`${s}-popover-shared--show-arrow`]:e.showArrow,[`${s}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:O.value,onKeydown:d.handleKeydown,onMouseenter:T,onMouseleave:B},t),A?f(Jt,{active:e.show,autoFocus:!0},{default:b}):b())}return Wo(w,h.value)}return{displayed:v,namespace:r,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:a,adjustedTo:Ie(e),followerEnabled:p,renderContentNode:N}},render(){return f(Xo,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Ie.tdkey},{default:()=>this.animated?f(Go,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),di=Object.keys(at),ci={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function ui(e,o,t){ci[o].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const n=e.props[r],i=t[r];n?e.props[r]=(...l)=>{n(...l),i(...l)}:e.props[r]=i})}const fi=Yt("").type,Ne={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Ie.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},vi=Object.assign(Object.assign(Object.assign({},X.props),Ne),{internalOnAfterLeave:Function,internalRenderBody:Function}),dt=D({name:"Popover",inheritAttrs:!1,props:vi,__popover__:!0,setup(e){const o=jt(),t=F(null),r=H(()=>e.show),n=F(e.defaultShow),i=he(r,n),l=te(()=>e.disabled?!1:i.value),a=()=>{if(e.disabled)return!0;const{getDisabled:b}=e;return!!(b!=null&&b())},d=()=>a()?!1:i.value,c=Qo(e,["arrow","showArrow"]),p=H(()=>e.overlap?!1:c.value);let v=null;const h=F(null),O=F(null),C=te(()=>e.x!==void 0&&e.y!==void 0);function g(b){const{"onUpdate:show":$,onUpdateShow:u,onShow:k,onHide:K}=e;n.value=b,$&&U($,b),u&&U(u,b),b&&k&&U(k,!0),b&&K&&U(K,!1)}function P(){v&&v.syncPosition()}function T(){const{value:b}=h;b&&(window.clearTimeout(b),h.value=null)}function B(){const{value:b}=O;b&&(window.clearTimeout(b),O.value=null)}function L(){const b=a();if(e.trigger==="focus"&&!b){if(d())return;g(!0)}}function y(){const b=a();if(e.trigger==="focus"&&!b){if(!d())return;g(!1)}}function m(){const b=a();if(e.trigger==="hover"&&!b){if(B(),h.value!==null||d())return;const $=()=>{g(!0),h.value=null},{delay:u}=e;u===0?$():h.value=window.setTimeout($,u)}}function N(){const b=a();if(e.trigger==="hover"&&!b){if(T(),O.value!==null||!d())return;const $=()=>{g(!1),O.value=null},{duration:u}=e;u===0?$():O.value=window.setTimeout($,u)}}function x(){N()}function w(b){var $;d()&&(e.trigger==="click"&&(T(),B(),g(!1)),($=e.onClickoutside)===null||$===void 0||$.call(e,b))}function S(){if(e.trigger==="click"&&!a()){T(),B();const b=!d();g(b)}}function s(b){e.internalTrapFocus&&b.key==="Escape"&&(T(),B(),g(!1))}function R(b){n.value=b}function A(){var b;return(b=t.value)===null||b===void 0?void 0:b.targetRef}function M(b){v=b}return q("NPopover",{getTriggerElement:A,handleKeydown:s,handleMouseEnter:m,handleMouseLeave:N,handleClickOutside:w,handleMouseMoveOutside:x,setBodyInstance:M,positionManuallyRef:C,isMountedRef:o,zIndexRef:V(e,"zIndex"),extraClassRef:V(e,"internalExtraClass"),internalRenderBodyRef:V(e,"internalRenderBody")}),Se(()=>{i.value&&a()&&g(!1)}),{binderInstRef:t,positionManually:C,mergedShowConsideringDisabledProp:l,uncontrolledShow:n,mergedShowArrow:p,getMergedShow:d,setShow:R,handleClick:S,handleMouseEnter:m,handleMouseLeave:N,handleFocus:L,handleBlur:y,syncPosition:P}},render(){var e;const{positionManually:o,$slots:t}=this;let r,n=!1;if(!o&&(t.activator?r=xo(t,"activator"):r=xo(t,"trigger"),r)){r=qt(r),r=r.type===fi?f("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)n=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:l}=this,a=[i,...l],d={onBlur:c=>{a.forEach(p=>{p.onBlur(c)})},onFocus:c=>{a.forEach(p=>{p.onFocus(c)})},onClick:c=>{a.forEach(p=>{p.onClick(c)})},onMouseenter:c=>{a.forEach(p=>{p.onMouseenter(c)})},onMouseleave:c=>{a.forEach(p=>{p.onMouseleave(c)})}};ui(r,l?"nested":o?"manual":this.trigger,d)}}return f(Jo,{ref:"binderInstRef",syncTarget:!n,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Wo(f("div",{style:{position:"fixed",inset:0}}),[[Qt,{enabled:i,zIndex:this.zIndex}]]):null,o?null:f(Zo,null,{default:()=>r}),f(si,ve(this.$props,di,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var l,a;return(a=(l=this.$slots).default)===null||a===void 0?void 0:a.call(l)},header:()=>{var l,a;return(a=(l=this.$slots).header)===null||a===void 0?void 0:a.call(l)},footer:()=>{var l,a;return(a=(l=this.$slots).footer)===null||a===void 0?void 0:a.call(l)}})]}})}}),hi={padding:"8px 14px"},pi=e=>{const{borderRadius:o,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},hi),{borderRadius:o,boxShadow:t,color:De(r,"rgba(0, 0, 0, .85)"),textColor:r})},mi=Te({name:"Tooltip",common:pe,peers:{Popover:io},self:pi}),ct=mi,gi={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},bi=e=>{const{primaryColor:o,textColor2:t,dividerColor:r,hoverColor:n,popoverColor:i,invertedColor:l,borderRadius:a,fontSizeSmall:d,fontSizeMedium:c,fontSizeLarge:p,fontSizeHuge:v,heightSmall:h,heightMedium:O,heightLarge:C,heightHuge:g,textColor3:P,opacityDisabled:T}=e;return Object.assign(Object.assign({},gi),{optionHeightSmall:h,optionHeightMedium:O,optionHeightLarge:C,optionHeightHuge:g,borderRadius:a,fontSizeSmall:d,fontSizeMedium:c,fontSizeLarge:p,fontSizeHuge:v,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:o,optionTextColorChildActive:o,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:n,optionColorActive:Ce(o,{alpha:.1}),groupHeaderTextColor:P,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:T})},yi=Te({name:"Dropdown",common:pe,peers:{Popover:io},self:bi}),ut=yi,xi=Object.assign(Object.assign({},Ne),X.props),wi=D({name:"Tooltip",props:xi,__popover__:!0,setup(e){const o=X("Tooltip","-tooltip",void 0,ct,e),t=F(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(n){t.value.setShow(n)}}),{popoverRef:t,mergedTheme:o,popoverThemeOverrides:H(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return f(dt,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ft=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return f("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),lo=re("n-dropdown-menu"),Oe=re("n-dropdown"),Eo=re("n-dropdown-option");function qe(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Ci(e){return e.type==="group"}function vt(e){return e.type==="divider"}function Si(e){return e.type==="render"}const ht=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=Y(Oe),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:d,renderLabelRef:c,renderIconRef:p,labelFieldRef:v,childrenFieldRef:h,renderOptionRef:O,nodePropsRef:C,menuPropsRef:g}=o,P=Y(Eo,null),T=Y(lo),B=Y(Qe),L=H(()=>e.tmNode.rawNode),y=H(()=>{const{value:k}=h;return qe(e.tmNode.rawNode,k)}),m=H(()=>{const{disabled:k}=e.tmNode;return k}),N=H(()=>{if(!y.value)return!1;const{key:k,disabled:K}=e.tmNode;if(K)return!1;const{value:G}=t,{value:Q}=r,{value:fe}=n,{value:ne}=i;return G!==null?ne.includes(k):Q!==null?ne.includes(k)&&ne[ne.length-1]!==k:fe!==null?ne.includes(k):!1}),x=H(()=>r.value===null&&!a.value),w=cr(N,300,x),S=H(()=>!!(P!=null&&P.enteringSubmenuRef.value)),s=F(!1);q(Eo,{enteringSubmenuRef:s});function R(){s.value=!0}function A(){s.value=!1}function M(){const{parentKey:k,tmNode:K}=e;K.disabled||d.value&&(n.value=k,r.value=null,t.value=K.key)}function b(){const{tmNode:k}=e;k.disabled||d.value&&t.value!==k.key&&M()}function $(k){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:K}=k;K&&!wo({target:K},"dropdownOption")&&!wo({target:K},"scrollbarRail")&&(t.value=null)}function u(){const{value:k}=y,{tmNode:K}=e;d.value&&!k&&!K.disabled&&(o.doSelect(K.key,K.rawNode),o.doUpdateShow(!1))}return{labelField:v,renderLabel:c,renderIcon:p,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:g,popoverBody:B,animated:a,mergedShowSubmenu:H(()=>w.value&&!S.value),rawNode:L,hasSubmenu:y,pending:te(()=>{const{value:k}=i,{key:K}=e.tmNode;return k.includes(K)}),childActive:te(()=>{const{value:k}=l,{key:K}=e.tmNode,G=k.findIndex(Q=>K===Q);return G===-1?!1:G<k.length-1}),active:te(()=>{const{value:k}=l,{key:K}=e.tmNode,G=k.findIndex(Q=>K===Q);return G===-1?!1:G===k.length-1}),mergedDisabled:m,renderOption:O,nodeProps:C,handleClick:u,handleMouseMove:b,handleMouseEnter:M,handleMouseLeave:$,handleSubmenuBeforeEnter:R,handleSubmenuAfterEnter:A}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:d,renderIcon:c,renderOption:p,nodeProps:v,props:h,scrollable:O}=this;let C=null;if(n){const B=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=f(pt,Object.assign({},B,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},P=v==null?void 0:v(r),T=f("div",Object.assign({class:[`${i}-dropdown-option`,P==null?void 0:P.class],"data-dropdown-option":!0},P),f("div",Ze(g,h),[f("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(r):J(r.icon)]),f("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},d?d(r):J((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),f("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?f(ir,null,{default:()=>f(rt,null)}):null)]),this.hasSubmenu?f(Jo,null,{default:()=>[f(Zo,null,{default:()=>f("div",{class:`${i}-dropdown-offset-container`},f(Xo,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>f("div",{class:`${i}-dropdown-menu-wrapper`},t?f(Go,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return p?p({node:T,option:r}):T}}),Ii=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=Y(lo),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:n,renderOptionRef:i}=Y(Oe);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:n,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:n,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,d=f("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(a)),f("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},f("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},J(a.icon)),f("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):J((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),f("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:d,option:a}):d}}),Ai=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return f(Je,null,f(Ii,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:i}=n;return i.show===!1?null:vt(i)?f(ft,{clsPrefix:t,key:n.key}):n.isGroup?(Gt("dropdown","`group` node is not allowed to be put in `group` node."),null):f(ht,{clsPrefix:t,tmNode:n,parentKey:o,key:n.key})}))}}),zi=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return f("div",o,[e==null?void 0:e()])}}),pt=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=Y(Oe);q(lo,{showIconRef:H(()=>{const n=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>n?n(d):d.icon);const{rawNode:a}=i;return n?n(a):a.icon})}),hasSubmenuRef:H(()=>{const{value:n}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>qe(d,n));const{rawNode:a}=i;return qe(a,n)})})});const r=F(null);return q(qo,null),q(Vo,null),q(Qe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(n=>{const{rawNode:i}=n;return i.show===!1?null:Si(i)?f(zi,{tmNode:n,key:n.key}):vt(i)?f(ft,{clsPrefix:o,key:n.key}):Ci(i)?f(Ai,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):f(ht,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:i.props,scrollable:t})});return f("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?f(Ko,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?st({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Pi=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[er(),I("dropdown-option",`
 position: relative;
 `,[_("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[_("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),oe("disabled",[E("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),_("&::before","background-color: var(--n-option-color-hover);")]),E("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),_("&::before","background-color: var(--n-option-color-active);")]),E("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),E("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),E("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[E("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[E("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[E("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),_(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),oe("scrollable",`
 padding: var(--n-padding);
 `),E("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),Ri={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ti=Object.keys(Ne),Ni=Object.assign(Object.assign(Object.assign({},Ne),Ri),X.props),Oi=D({name:"Dropdown",inheritAttrs:!1,props:Ni,setup(e){const o=F(!1),t=he(V(e,"show"),o),r=H(()=>{const{keyField:A,childrenField:M}=e;return lt(e.options,{getKey(b){return b[A]},getDisabled(b){return b.disabled===!0},getIgnored(b){return b.type==="divider"||b.type==="render"},getChildren(b){return b[M]}})}),n=H(()=>r.value.treeNodes),i=F(null),l=F(null),a=F(null),d=H(()=>{var A,M,b;return(b=(M=(A=i.value)!==null&&A!==void 0?A:l.value)!==null&&M!==void 0?M:a.value)!==null&&b!==void 0?b:null}),c=H(()=>r.value.getPath(d.value).keyPath),p=H(()=>r.value.getPath(e.value).keyPath),v=te(()=>e.keyboard&&t.value);nr({keydown:{ArrowUp:{prevent:!0,handler:m},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:L},Enter:{prevent:!0,handler:x},Escape:B}},v);const{mergedClsPrefixRef:h,inlineThemeDisabled:O}=me(e),C=X("Dropdown","-dropdown",Pi,ut,e,h);q(Oe,{labelFieldRef:V(e,"labelField"),childrenFieldRef:V(e,"childrenField"),renderLabelRef:V(e,"renderLabel"),renderIconRef:V(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:c,activeKeyPathRef:p,animatedRef:V(e,"animated"),mergedShowRef:t,nodePropsRef:V(e,"nodeProps"),renderOptionRef:V(e,"renderOption"),menuPropsRef:V(e,"menuProps"),doSelect:g,doUpdateShow:P}),Xe(t,A=>{!e.animated&&!A&&T()});function g(A,M){const{onSelect:b}=e;b&&U(b,A,M)}function P(A){const{"onUpdate:show":M,onUpdateShow:b}=e;M&&U(M,A),b&&U(b,A),o.value=A}function T(){i.value=null,l.value=null,a.value=null}function B(){P(!1)}function L(){S("left")}function y(){S("right")}function m(){S("up")}function N(){S("down")}function x(){const A=w();A!=null&&A.isLeaf&&t.value&&(g(A.key,A.rawNode),P(!1))}function w(){var A;const{value:M}=r,{value:b}=d;return!M||b===null?null:(A=M.getNode(b))!==null&&A!==void 0?A:null}function S(A){const{value:M}=d,{value:{getFirstAvailableNode:b}}=r;let $=null;if(M===null){const u=b();u!==null&&($=u.key)}else{const u=w();if(u){let k;switch(A){case"down":k=u.getNext();break;case"up":k=u.getPrev();break;case"right":k=u.getChild();break;case"left":k=u.getParent();break}k&&($=k.key)}}$!==null&&(i.value=null,l.value=$)}const s=H(()=>{const{size:A,inverted:M}=e,{common:{cubicBezierEaseInOut:b},self:$}=C.value,{padding:u,dividerColor:k,borderRadius:K,optionOpacityDisabled:G,[ie("optionIconSuffixWidth",A)]:Q,[ie("optionSuffixWidth",A)]:fe,[ie("optionIconPrefixWidth",A)]:ne,[ie("optionPrefixWidth",A)]:At,[ie("fontSize",A)]:zt,[ie("optionHeight",A)]:Pt,[ie("optionIconSize",A)]:Rt}=$,j={"--n-bezier":b,"--n-font-size":zt,"--n-padding":u,"--n-border-radius":K,"--n-option-height":Pt,"--n-option-prefix-width":At,"--n-option-icon-prefix-width":ne,"--n-option-suffix-width":fe,"--n-option-icon-suffix-width":Q,"--n-option-icon-size":Rt,"--n-divider-color":k,"--n-option-opacity-disabled":G};return M?(j["--n-color"]=$.colorInverted,j["--n-option-color-hover"]=$.optionColorHoverInverted,j["--n-option-color-active"]=$.optionColorActiveInverted,j["--n-option-text-color"]=$.optionTextColorInverted,j["--n-option-text-color-hover"]=$.optionTextColorHoverInverted,j["--n-option-text-color-active"]=$.optionTextColorActiveInverted,j["--n-option-text-color-child-active"]=$.optionTextColorChildActiveInverted,j["--n-prefix-color"]=$.prefixColorInverted,j["--n-suffix-color"]=$.suffixColorInverted,j["--n-group-header-text-color"]=$.groupHeaderTextColorInverted):(j["--n-color"]=$.color,j["--n-option-color-hover"]=$.optionColorHover,j["--n-option-color-active"]=$.optionColorActive,j["--n-option-text-color"]=$.optionTextColor,j["--n-option-text-color-hover"]=$.optionTextColorHover,j["--n-option-text-color-active"]=$.optionTextColorActive,j["--n-option-text-color-child-active"]=$.optionTextColorChildActive,j["--n-prefix-color"]=$.prefixColor,j["--n-suffix-color"]=$.suffixColor,j["--n-group-header-text-color"]=$.groupHeaderTextColor),j}),R=O?ge("dropdown",H(()=>`${e.size[0]}${e.inverted?"i":""}`),s,e):void 0;return{mergedClsPrefix:h,mergedTheme:C,tmNodes:n,mergedShow:t,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:P,cssVars:O?void 0:s,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const e=(r,n,i,l,a)=>{var d;const{mergedClsPrefix:c,menuProps:p}=this;(d=this.onRender)===null||d===void 0||d.call(this);const v=(p==null?void 0:p(void 0,this.tmNodes.map(O=>O.rawNode)))||{},h={ref:sr(n),class:[r,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return f(pt,Ze(this.$attrs,h,v))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return f(dt,Object.assign({},ve(this.$props,Ti),t),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),$i=e=>{const{baseColor:o,textColor2:t,bodyColor:r,cardColor:n,dividerColor:i,actionColor:l,scrollbarColor:a,scrollbarColorHover:d,invertedColor:c}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:n,headerColorInverted:c,footerColor:l,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:n,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:De(r,a),siderToggleBarColorHover:De(r,d),__invertScrollbar:"true"}},Hi=Te({name:"Layout",common:pe,peers:{Scrollbar:Wt},self:$i}),mt=Hi;function _i(e,o,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:o,itemColorActiveHoverInverted:o,itemColorActiveCollapsedInverted:o,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}const ki=e=>{const{borderRadius:o,textColor3:t,primaryColor:r,textColor2:n,textColor1:i,fontSize:l,dividerColor:a,hoverColor:d,primaryColorHover:c}=e;return Object.assign({borderRadius:o,color:"#0000",groupTextColor:t,itemColorHover:d,itemColorActive:Ce(r,{alpha:.1}),itemColorActiveHover:Ce(r,{alpha:.1}),itemColorActiveCollapsed:Ce(r,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:l,dividerColor:a},_i("#BBB",r,"#FFF","#AAA"))},Ei=Te({name:"Menu",common:pe,peers:{Tooltip:ct,Dropdown:ut},self:ki}),Bi=Ei,gt=re("n-layout-sider"),bt={type:String,default:"static"},Mi=I("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[I("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),E("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Li={embedded:Boolean,position:bt,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},yt=re("n-layout");function Ki(e){return D({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},X.props),Li),setup(o){const t=F(null),r=F(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=me(o),l=X("Layout","-layout",Mi,mt,o,n);function a(g,P){if(o.nativeScrollbar){const{value:T}=t;T&&(P===void 0?T.scrollTo(g):T.scrollTo(g,P))}else{const{value:T}=r;T&&T.scrollTo(g,P)}}q(yt,o);let d=0,c=0;const p=g=>{var P;const T=g.target;d=T.scrollLeft,c=T.scrollTop,(P=o.onScroll)===null||P===void 0||P.call(o,g)};Fo(()=>{if(o.nativeScrollbar){const g=t.value;g&&(g.scrollTop=c,g.scrollLeft=d)}});const v={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:a},O=H(()=>{const{common:{cubicBezierEaseInOut:g},self:P}=l.value;return{"--n-bezier":g,"--n-color":o.embedded?P.colorEmbedded:P.color,"--n-text-color":P.textColor}}),C=i?ge("layout",H(()=>o.embedded?"e":""),O,o):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:v,mergedTheme:l,handleNativeElScroll:p,cssVars:i?void 0:O,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},h)},render(){var o;const{mergedClsPrefix:t,hasSider:r}=this;(o=this.onRender)===null||o===void 0||o.call(this);const n=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return f("div",{class:i,style:this.cssVars},this.nativeScrollbar?f("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):f(Do,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const gl=Ki(!1),Fi=I("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[E("bordered",[z("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),z("left-placement",[E("bordered",[z("border",`
 right: 0;
 `)])]),E("right-placement",`
 justify-content: flex-start;
 `,[E("bordered",[z("border",`
 left: 0;
 `)]),E("collapsed",[I("layout-toggle-button",[I("base-icon",`
 transform: rotate(180deg);
 `)]),I("layout-toggle-bar",[_("&:hover",[z("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),I("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[I("base-icon",`
 transform: rotate(0);
 `)]),I("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[_("&:hover",[z("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),E("collapsed",[I("layout-toggle-bar",[_("&:hover",[z("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),I("layout-toggle-button",[I("base-icon",`
 transform: rotate(0);
 `)])]),I("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[I("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),I("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[z("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),z("bottom",`
 position: absolute;
 top: 34px;
 `),_("&:hover",[z("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),z("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),_("&:hover",[z("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),z("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),I("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),E("show-content",[I("layout-sider-scroll-container",{opacity:1})]),E("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Di=D({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return f("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},f(jo,{clsPrefix:e},{default:()=>f(rt,null)}))}}),ji=D({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return f("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},f("div",{class:`${e}-layout-toggle-bar__top`}),f("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Gi={position:bt,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},bl=D({name:"LayoutSider",props:Object.assign(Object.assign({},X.props),Gi),setup(e){const o=Y(yt),t=F(null),r=F(null),n=H(()=>de(d.value?e.collapsedWidth:e.width)),i=H(()=>e.collapseMode!=="transform"?{}:{minWidth:de(e.width)}),l=H(()=>o?o.siderPlacement:"left"),a=F(e.defaultCollapsed),d=he(V(e,"collapsed"),a);function c(m,N){if(e.nativeScrollbar){const{value:x}=t;x&&(N===void 0?x.scrollTo(m):x.scrollTo(m,N))}else{const{value:x}=r;x&&x.scrollTo(m,N)}}function p(){const{"onUpdate:collapsed":m,onUpdateCollapsed:N,onExpand:x,onCollapse:w}=e,{value:S}=d;N&&U(N,!S),m&&U(m,!S),a.value=!S,S?x&&U(x):w&&U(w)}let v=0,h=0;const O=m=>{var N;const x=m.target;v=x.scrollLeft,h=x.scrollTop,(N=e.onScroll)===null||N===void 0||N.call(e,m)};Fo(()=>{if(e.nativeScrollbar){const m=t.value;m&&(m.scrollTop=h,m.scrollLeft=v)}}),q(gt,{collapsedRef:d,collapseModeRef:V(e,"collapseMode")});const{mergedClsPrefixRef:C,inlineThemeDisabled:g}=me(e),P=X("Layout","-layout-sider",Fi,mt,e,C);function T(m){var N,x;m.propertyName==="max-width"&&(d.value?(N=e.onAfterLeave)===null||N===void 0||N.call(e):(x=e.onAfterEnter)===null||x===void 0||x.call(e))}const B={scrollTo:c},L=H(()=>{const{common:{cubicBezierEaseInOut:m},self:N}=P.value,{siderToggleButtonColor:x,siderToggleButtonBorder:w,siderToggleBarColor:S,siderToggleBarColorHover:s}=N,R={"--n-bezier":m,"--n-toggle-button-color":x,"--n-toggle-button-border":w,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":s};return e.inverted?(R["--n-color"]=N.siderColorInverted,R["--n-text-color"]=N.textColorInverted,R["--n-border-color"]=N.siderBorderColorInverted,R["--n-toggle-button-icon-color"]=N.siderToggleButtonIconColorInverted,R.__invertScrollbar=N.__invertScrollbar):(R["--n-color"]=N.siderColor,R["--n-text-color"]=N.textColor,R["--n-border-color"]=N.siderBorderColor,R["--n-toggle-button-icon-color"]=N.siderToggleButtonIconColor),R}),y=g?ge("layout-sider",H(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:C,mergedTheme:P,styleMaxWidth:n,mergedCollapsed:d,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:O,handleTransitionend:T,handleTriggerClick:p,inlineThemeDisabled:g,cssVars:L,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},B)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:de(this.width)}]},this.nativeScrollbar?f("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):f(Do,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?f(ji,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):f(Di,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?f("div",{class:`${o}-layout-sider__border`}):null)}}),be=re("n-menu"),ao=re("n-submenu"),so=re("n-menu-item-group"),xe=8;function co(e){const o=Y(be),{props:t,mergedCollapsedRef:r}=o,n=Y(ao,null),i=Y(so,null),l=H(()=>t.mode==="horizontal"),a=H(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=H(()=>{var h;return Math.max((h=t.collapsedIconSize)!==null&&h!==void 0?h:t.iconSize,t.iconSize)}),c=H(()=>{var h;return!l.value&&e.root&&r.value&&(h=t.collapsedIconSize)!==null&&h!==void 0?h:t.iconSize}),p=H(()=>{if(l.value)return;const{collapsedWidth:h,indent:O,rootIndent:C}=t,{root:g,isGroup:P}=e,T=C===void 0?O:C;if(g)return r.value?h/2-d.value/2:T;if(i)return O/2+i.paddingLeftRef.value;if(n)return(P?O/2:O)+n.paddingLeftRef.value}),v=H(()=>{const{collapsedWidth:h,indent:O,rootIndent:C}=t,{value:g}=d,{root:P}=e;return l.value||!P||!r.value?xe:(C===void 0?O:C)+g+xe-(h+g)/2});return{dropdownPlacement:a,activeIconSize:c,maxIconSize:d,paddingLeft:p,iconMarginRight:v,NMenu:o,NSubmenu:n}}const uo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},xt=Object.assign(Object.assign({},uo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Wi=D({name:"MenuOptionGroup",props:xt,setup(e){q(ao,null);const o=co(e);q(so,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:r}=Y(be);return function(){const{value:n}=t,i=o.paddingLeft.value,{nodeProps:l}=r,a=l==null?void 0:l(e.tmNode.rawNode);return f("div",{class:`${n}-menu-item-group`,role:"group"},f("div",Object.assign({},a,{class:[`${n}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),J(e.title),e.extra?f(Je,null," ",J(e.extra)):null),f("div",null,e.tmNodes.map(d=>fo(d,r))))}}}),wt=D({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=Y(be);return{menuProps:o,style:H(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:H(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:n}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:r,renderExtra:n,expandIcon:i}}=this,l=t?t(o.rawNode):J(this.icon);return f("div",{onClick:a=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&f("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),f("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(o.rawNode):J(this.title),this.extra||n?f("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(o.rawNode):J(this.extra)):null),this.showArrow?f(jo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):f(_n,null)}):null)}}),Ct=Object.assign(Object.assign({},uo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ui=D({name:"Submenu",props:Ct,setup(e){const o=co(e),{NMenu:t,NSubmenu:r}=o,{props:n,mergedCollapsedRef:i,mergedThemeRef:l}=t,a=H(()=>{const{disabled:h}=e;return r!=null&&r.mergedDisabledRef.value||n.disabled?!0:h}),d=F(!1);q(ao,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:a}),q(so,null);function c(){const{onClick:h}=e;h&&h()}function p(){a.value||(i.value||t.toggleExpand(e.internalKey),c())}function v(h){d.value=h}return{menuProps:n,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:d,paddingLeft:o.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:te(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:H(()=>n.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:H(()=>!a.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:v,handleClick:p}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:r}}=this,n=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:d,mergedDisabled:c,maxIconSize:p,activeIconSize:v,title:h,childActive:O,icon:C,handleClick:g,menuProps:{nodeProps:P},dropdownShow:T,iconMarginRight:B,tmNode:L,mergedClsPrefix:y}=this,m=P==null?void 0:P(L.rawNode);return f("div",Object.assign({},m,{class:[`${y}-menu-item`,m==null?void 0:m.class],role:"menuitem"}),f(wt,{tmNode:L,paddingLeft:a,collapsed:d,disabled:c,iconMarginRight:B,maxIconSize:p,activeIconSize:v,title:h,extra:this.extra,showArrow:!l,childActive:O,clsPrefix:y,icon:C,hover:T,onClick:g}))},i=()=>f(lr,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:f("div",{class:`${o}-submenu-children`,role:"menu"},l.map(d=>fo(d,this.menuProps)))}});return this.root?f(Oi,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>f("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):f("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),St=Object.assign(Object.assign({},uo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Vi=D({name:"MenuOption",props:St,setup(e){const o=co(e),{NSubmenu:t,NMenu:r}=o,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:l}=r,a=t?t.mergedDisabledRef:{value:!1},d=H(()=>a.value||e.disabled);function c(v){const{onClick:h}=e;h&&h(v)}function p(v){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),c(v))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:te(()=>e.root&&l.value&&n.mode!=="horizontal"&&!d.value),selected:te(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:p}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:r,nodeProps:n}}=this,i=n==null?void 0:n(t.rawNode);return f("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),f(wi,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):J(this.title),trigger:()=>f(wt,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),qi=D({name:"MenuDivider",setup(){const e=Y(be),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:f("div",{class:`${o.value}-menu-divider`})}}),Yi=oo(xt),Xi=oo(St),Zi=oo(Ct);function It(e){return e.type==="divider"||e.type==="render"}function Ji(e){return e.type==="divider"}function fo(e,o){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(It(t))return Ji(t)?f(qi,Object.assign({key:e.key},t.props)):null;const{labelField:n}=o,{key:i,level:l,isGroup:a}=e,d=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?f(Wi,ve(d,Yi,{tmNode:e,tmNodes:e.children,key:i})):f(Ui,ve(d,Zi,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):f(Vi,ve(d,Xi,{key:i,tmNode:e}))}const Bo=[_("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[_("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Mo=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Qi=_([I("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[E("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[I("submenu","margin: 0;"),I("menu-item","margin: 0;"),I("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),E("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),I("menu-item-content",[E("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),E("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),oe("disabled",[oe("selected, child-active",[_("&:focus-within",Mo)]),E("selected",[le(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),E("child-active",[le(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),le("border-bottom: 2px solid var(--n-border-color-horizontal);",Mo)]),I("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),E("collapsed",[I("menu-item-content",[E("selected",[_("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),I("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),I("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),I("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[_("> *","z-index: 1;"),_("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),E("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),E("collapsed",[z("arrow","transform: rotate(0);")]),E("selected",[_("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),E("child-active",[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),oe("disabled",[oe("selected, child-active",[_("&:focus-within",Bo)]),E("selected",[le(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),E("child-active",[le(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[_("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),E("selected",[le(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),le(null,Bo)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),I("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[_("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),I("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[I("menu-item-content",`
 height: var(--n-item-height);
 `),I("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ar({duration:".2s"})])]),I("menu-item-group",[I("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),I("menu-tooltip",[_("a",`
 color: inherit;
 text-decoration: none;
 `)]),I("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function le(e,o){return[E("hover",e,o),_("&:hover",e,o)]}const el=Object.assign(Object.assign({},X.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),yl=D({name:"Menu",props:el,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=me(e),r=X("Menu","-menu",Qi,Bi,e,o),n=Y(gt,null),i=H(()=>{var w;const{collapsed:S}=e;if(S!==void 0)return S;if(n){const{collapseModeRef:s,collapsedRef:R}=n;if(s.value==="width")return(w=R.value)!==null&&w!==void 0?w:!1}return!1}),l=H(()=>{const{keyField:w,childrenField:S,disabledField:s}=e;return lt(e.items||e.options,{getIgnored(R){return It(R)},getChildren(R){return R[S]},getDisabled(R){return R[s]},getKey(R){var A;return(A=R[w])!==null&&A!==void 0?A:R.name}})}),a=H(()=>new Set(l.value.treeNodes.map(w=>w.key))),{watchProps:d}=e,c=F(null);d!=null&&d.includes("defaultValue")?Se(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const p=V(e,"value"),v=he(p,c),h=F([]),O=()=>{h.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(v.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?Se(O):O();const C=Qo(e,["expandedNames","expandedKeys"]),g=he(C,h),P=H(()=>l.value.treeNodes),T=H(()=>l.value.getPath(v.value).keyPath);q(be,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:v,mergedExpandedKeysRef:g,activePathRef:T,mergedClsPrefixRef:o,isHorizontalRef:H(()=>e.mode==="horizontal"),invertedRef:V(e,"inverted"),doSelect:B,toggleExpand:y});function B(w,S){const{"onUpdate:value":s,onUpdateValue:R,onSelect:A}=e;R&&U(R,w,S),s&&U(s,w,S),A&&U(A,w,S),c.value=w}function L(w){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:s,onExpandedNamesChange:R,onOpenNamesChange:A}=e;S&&U(S,w),s&&U(s,w),R&&U(R,w),A&&U(A,w),h.value=w}function y(w){const S=Array.from(g.value),s=S.findIndex(R=>R===w);if(~s)S.splice(s,1);else{if(e.accordion&&a.value.has(w)){const R=S.findIndex(A=>a.value.has(A));R>-1&&S.splice(R,1)}S.push(w)}L(S)}const m=w=>{const S=l.value.getPath(w??v.value,{includeSelf:!1}).keyPath;if(!S.length)return;const s=Array.from(g.value),R=new Set([...s,...S]);e.accordion&&a.value.forEach(A=>{R.has(A)&&!S.includes(A)&&R.delete(A)}),L(Array.from(R))},N=H(()=>{const{inverted:w}=e,{common:{cubicBezierEaseInOut:S},self:s}=r.value,{borderRadius:R,borderColorHorizontal:A,fontSize:M,itemHeight:b,dividerColor:$}=s,u={"--n-divider-color":$,"--n-bezier":S,"--n-font-size":M,"--n-border-color-horizontal":A,"--n-border-radius":R,"--n-item-height":b};return w?(u["--n-group-text-color"]=s.groupTextColorInverted,u["--n-color"]=s.colorInverted,u["--n-item-text-color"]=s.itemTextColorInverted,u["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,u["--n-item-text-color-active"]=s.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=s.itemIconColorInverted,u["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=s.arrowColorInverted,u["--n-arrow-color-hover"]=s.arrowColorHoverInverted,u["--n-arrow-color-active"]=s.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=s.itemColorHoverInverted,u["--n-item-color-active"]=s.itemColorActiveInverted,u["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=s.groupTextColor,u["--n-color"]=s.color,u["--n-item-text-color"]=s.itemTextColor,u["--n-item-text-color-hover"]=s.itemTextColorHover,u["--n-item-text-color-active"]=s.itemTextColorActive,u["--n-item-text-color-child-active"]=s.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,u["--n-item-icon-color"]=s.itemIconColor,u["--n-item-icon-color-hover"]=s.itemIconColorHover,u["--n-item-icon-color-active"]=s.itemIconColorActive,u["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=s.arrowColor,u["--n-arrow-color-hover"]=s.arrowColorHover,u["--n-arrow-color-active"]=s.arrowColorActive,u["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,u["--n-arrow-color-child-active"]=s.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,u["--n-item-color-hover"]=s.itemColorHover,u["--n-item-color-active"]=s.itemColorActive,u["--n-item-color-active-hover"]=s.itemColorActiveHover,u["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),u}),x=t?ge("menu",H(()=>e.inverted?"a":"b"),N,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:C,uncontrolledExpanededKeys:h,mergedExpandedKeys:g,uncontrolledValue:c,mergedValue:v,activePath:T,tmNodes:P,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:N,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,showOption:m}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:r}=this;return r==null||r(),f("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>fo(n,this.$props)))}}),ol={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tl=Uo("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),rl=Uo("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1),nl=[tl,rl],xl=D({name:"BookOutline",render:function(o,t){return Xt(),Zt("svg",ol,nl)}});export{xl as B,rt as C,dt as N,yl as _,bl as a,gl as b,ml as c,lt as d,sr as e,Ne as f,ut as g,wi as h,Oi as i,io as p,ct as t,Qo as u};
