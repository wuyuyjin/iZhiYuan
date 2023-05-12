import{q as d,F as f,V as b,h as a,a as h,t as p}from"./entry.8cc5d05e.js";import{r as g,d as y,e as l,b as t,o as v,ap as C,v as L}from"./browser.6edf931c.js";function z(o=8){return Math.random().toString(16).slice(2,2+o)}function M(o,n){const r=[];for(let e=0;e<o;++e)r.push(n);return r}function i(o,n=!0,r=[]){return o.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&r.push(d(String(e)));return}if(Array.isArray(e)){i(e,n,r);return}if(e.type===f){if(e.children===null)return;Array.isArray(e.children)&&i(e.children,n,r)}else e.type!==b&&r.push(e)}}),r}function T(o){return Object.keys(o)}const k=g("close",a("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),m=y("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[l("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),v("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[t("&::before",`
 border-radius: 50%;
 `)])]),A=h({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(o){return C("-base-close",m,p(o,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:e,round:c,isButtonTag:s}=o;return a(s?"button":"div",{type:s?"button":void 0,tabindex:r||!o.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:s?void 0:"button",disabled:r,class:[`${n}-base-close`,e&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,c&&`${n}-base-close--round`],onMousedown:u=>{o.focusable||u.preventDefault()},onClick:o.onClick},a(L,{clsPrefix:n},{default:()=>a(k,null)}))}}});export{A as N,z as c,i as f,T as k,M as r};
