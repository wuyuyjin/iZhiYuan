import{d as c,e as d,f as o,b as n,o as I,j as h,A as u,u as O,h as H,k as T,D as V}from"./browser.6edf931c.js";import{a as L,s as M,r as N}from"./RadioGroup.507c37ab.js";import{a as W,b as v,h as l}from"./entry.8cc5d05e.js";const K=c("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[d("checked",[o("dot",`
 background-color: var(--n-color-active);
 `)]),o("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),c("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),o("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[n("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),d("checked",{boxShadow:"var(--n-box-shadow-active)"},[n("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),o("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),I("disabled",`
 cursor: pointer;
 `,[n("&:hover",[o("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),d("focus",[n("&:not(:active)",[o("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),d("disabled",`
 cursor: not-allowed;
 `,[o("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[n("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),d("checked",`
 opacity: 1;
 `)]),o("label",{color:"var(--n-text-color-disabled)"}),c("radio-input",`
 cursor: not-allowed;
 `)])]),J=W({name:"Radio",props:Object.assign(Object.assign({},h.props),L),setup(a){const e=M(a),i=h("Radio","-radio",K,N,a,e.mergedClsPrefix),s=v(()=>{const{mergedSize:{value:b}}=e,{common:{cubicBezierEaseInOut:x},self:{boxShadow:m,boxShadowActive:w,boxShadowDisabled:z,boxShadowFocus:k,boxShadowHover:C,color:S,colorDisabled:R,colorActive:_,textColor:y,textColorDisabled:$,dotColorActive:D,dotColorDisabled:A,labelPadding:E,labelLineHeight:P,labelFontWeight:j,[u("fontSize",b)]:B,[u("radioSize",b)]:F}}=i.value;return{"--n-bezier":x,"--n-label-line-height":P,"--n-label-font-weight":j,"--n-box-shadow":m,"--n-box-shadow-active":w,"--n-box-shadow-disabled":z,"--n-box-shadow-focus":k,"--n-box-shadow-hover":C,"--n-color":S,"--n-color-active":_,"--n-color-disabled":R,"--n-dot-color-active":D,"--n-dot-color-disabled":A,"--n-font-size":B,"--n-radio-size":F,"--n-text-color":y,"--n-text-color-disabled":$,"--n-label-padding":E}}),{inlineThemeDisabled:t,mergedClsPrefixRef:f,mergedRtlRef:p}=O(a),g=H("Radio",p,f),r=t?T("radio",v(()=>e.mergedSize.value[0]),s,a):void 0;return Object.assign(e,{rtlEnabled:g,cssVars:t?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender})},render(){const{$slots:a,mergedClsPrefix:e,onRender:i,label:s}=this;return i==null||i(),l("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},l("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),l("div",{class:`${e}-radio__dot-wrapper`}," ",l("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),V(a.default,t=>!t&&!s?null:l("div",{ref:"labelRef",class:`${e}-radio__label`},t||s)))}});export{J as _};
