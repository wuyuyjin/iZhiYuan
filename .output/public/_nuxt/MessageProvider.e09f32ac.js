import{b as P,I as U,S as X,W as Y,E as Z,a as ee}from"./context.ee3e8cc9.js";import{c as oe,b as C,d as x,f as I,e as b,Q as ne,u as j,h as re,j as z,A as p,k as se,R as te,P as ie,v as le}from"./browser.3909655e.js";import{f as ae}from"./fade-in-height-expand.cssr.2ce29ded.js";import{r as ce}from"./fade-in-scale-up.cssr.7f8153a0.js";import{N as de,c as ue}from"./Close.49903972.js";import{a as w,i as ge,b as O,h as c,r as y,C as fe,Q as ve,F as me,p as S,R as he}from"./entry.23c03e9b.js";import{N as pe}from"./Button.8c0c91a9.js";function be(r,n=[],l){const o={};return Object.getOwnPropertyNames(r).forEach(a=>{n.includes(a)||(o[a]=r[a])}),Object.assign(o,l)}const Ce={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},xe=r=>{const{textColor2:n,closeIconColor:l,closeIconColorHover:o,closeIconColorPressed:i,infoColor:a,successColor:u,errorColor:g,warningColor:s,popoverColor:e,boxShadow2:t,primaryColor:d,lineHeight:v,borderRadius:f,closeColorHover:m,closeColorPressed:h}=r;return Object.assign(Object.assign({},Ce),{closeBorderRadius:f,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:e,colorInfo:e,colorSuccess:e,colorError:e,colorWarning:e,colorLoading:e,boxShadow:t,boxShadowInfo:t,boxShadowSuccess:t,boxShadowError:t,boxShadowWarning:t,boxShadowLoading:t,iconColor:n,iconColorInfo:a,iconColorSuccess:u,iconColorWarning:s,iconColorError:g,iconColorLoading:d,closeColorHover:m,closeColorPressed:h,closeIconColor:l,closeIconColorHover:o,closeIconColorPressed:i,closeColorHoverInfo:m,closeColorPressedInfo:h,closeIconColorInfo:l,closeIconColorHoverInfo:o,closeIconColorPressedInfo:i,closeColorHoverSuccess:m,closeColorPressedSuccess:h,closeIconColorSuccess:l,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:i,closeColorHoverError:m,closeColorPressedError:h,closeIconColorError:l,closeIconColorHoverError:o,closeIconColorPressedError:i,closeColorHoverWarning:m,closeColorPressedWarning:h,closeIconColorWarning:l,closeIconColorHoverWarning:o,closeIconColorPressedWarning:i,closeColorHoverLoading:m,closeColorPressedLoading:h,closeIconColorLoading:l,closeIconColorHoverLoading:o,closeIconColorPressedLoading:i,loadingColor:d,lineHeight:v,borderRadius:f})},Ie={name:"Message",common:oe,self:xe},ye=Ie,H={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},we=C([x("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[ae({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),x("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[I("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),I("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(r=>b(`${r}-type`,[C("> *",`
 color: var(--n-icon-color-${r});
 transition: color .3s var(--n-bezier);
 `)])),C("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ne()])]),I("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[C("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),C("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),x("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[b("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),b("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),b("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),b("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),b("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),b("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),Oe={info:()=>c(U,null),success:()=>c(X,null),warning:()=>c(Y,null),error:()=>c(Z,null),default:()=>null},Se=w({name:"Message",props:Object.assign(Object.assign({},H),{render:Function}),setup(r){const{inlineThemeDisabled:n,mergedRtlRef:l}=j(r),{props:o,mergedClsPrefixRef:i}=ge(P),a=re("Message",l,i),u=z("Message","-message",we,ye,o,i),g=O(()=>{const{type:e}=r,{common:{cubicBezierEaseInOut:t},self:{padding:d,margin:v,maxWidth:f,iconMargin:m,closeMargin:h,closeSize:L,iconSize:M,fontSize:A,lineHeight:E,borderRadius:R,iconColorInfo:k,iconColorSuccess:_,iconColorWarning:$,iconColorError:T,iconColorLoading:W,closeIconSize:N,closeBorderRadius:F,[p("textColor",e)]:B,[p("boxShadow",e)]:K,[p("color",e)]:V,[p("closeColorHover",e)]:Q,[p("closeColorPressed",e)]:q,[p("closeIconColor",e)]:D,[p("closeIconColorPressed",e)]:G,[p("closeIconColorHover",e)]:J}}=u.value;return{"--n-bezier":t,"--n-margin":v,"--n-padding":d,"--n-max-width":f,"--n-font-size":A,"--n-icon-margin":m,"--n-icon-size":M,"--n-close-icon-size":N,"--n-close-border-radius":F,"--n-close-size":L,"--n-close-margin":h,"--n-text-color":B,"--n-color":V,"--n-box-shadow":K,"--n-icon-color-info":k,"--n-icon-color-success":_,"--n-icon-color-warning":$,"--n-icon-color-error":T,"--n-icon-color-loading":W,"--n-close-color-hover":Q,"--n-close-color-pressed":q,"--n-close-icon-color":D,"--n-close-icon-color-pressed":G,"--n-close-icon-color-hover":J,"--n-line-height":E,"--n-border-radius":R}}),s=n?se("message",O(()=>r.type[0]),g,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:a,messageProviderProps:o,handleClose(){var e;(e=r.onClose)===null||e===void 0||e.call(r)},cssVars:n?void 0:g,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,placement:o.placement}},render(){const{render:r,type:n,closable:l,content:o,mergedClsPrefix:i,cssVars:a,themeClass:u,onRender:g,icon:s,handleClose:e,showIcon:t}=this;g==null||g();let d;return c("div",{class:[`${i}-message-wrapper`,u],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},a]},r?r(this.$props):c("div",{class:[`${i}-message ${i}-message--${n}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(d=Pe(s,n,i))&&t?c("div",{class:`${i}-message__icon ${i}-message__icon--${n}-type`},c(te,null,{default:()=>d})):null,c("div",{class:`${i}-message__content`},ce(o)),l?c(de,{clsPrefix:i,class:`${i}-message__close`,onClick:e,absolute:!0}):null))}});function Pe(r,n,l){if(typeof r=="function")return r();{const o=n==="loading"?c(ie,{clsPrefix:l,strokeWidth:24,scale:.85}):Oe[n]();return o?c(le,{clsPrefix:l,key:n},{default:()=>o}):null}}const je=w({name:"MessageEnvironment",props:Object.assign(Object.assign({},H),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(r){let n=null;const l=y(!0);fe(()=>{o()});function o(){const{duration:t}=r;t&&(n=window.setTimeout(u,t))}function i(t){t.currentTarget===t.target&&n!==null&&(window.clearTimeout(n),n=null)}function a(t){t.currentTarget===t.target&&o()}function u(){const{onHide:t}=r;l.value=!1,n&&(window.clearTimeout(n),n=null),t&&t()}function g(){const{onClose:t}=r;t&&t(),u()}function s(){const{onAfterLeave:t,onInternalAfterLeave:d,onAfterHide:v,internalKey:f}=r;t&&t(),d&&d(f),v&&v()}function e(){u()}return{show:l,hide:u,handleClose:g,handleAfterLeave:s,handleMouseleave:a,handleMouseenter:i,deactivate:e}},render(){return c(pe,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?c(Se,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),ze=Object.assign(Object.assign({},z.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),_e=w({name:"MessageProvider",props:ze,setup(r){const{mergedClsPrefixRef:n}=j(r),l=y([]),o=y({}),i={create(s,e){return a(s,Object.assign({type:"default"},e))},info(s,e){return a(s,Object.assign(Object.assign({},e),{type:"info"}))},success(s,e){return a(s,Object.assign(Object.assign({},e),{type:"success"}))},warning(s,e){return a(s,Object.assign(Object.assign({},e),{type:"warning"}))},error(s,e){return a(s,Object.assign(Object.assign({},e),{type:"error"}))},loading(s,e){return a(s,Object.assign(Object.assign({},e),{type:"loading"}))},destroyAll:g};S(P,{props:r,mergedClsPrefixRef:n}),S(ee,i);function a(s,e){const t=ue(),d=he(Object.assign(Object.assign({},e),{content:s,key:t,destroy:()=>{var f;(f=o.value[t])===null||f===void 0||f.hide()}})),{max:v}=r;return v&&l.value.length>=v&&l.value.shift(),l.value.push(d),d}function u(s){l.value.splice(l.value.findIndex(e=>e.key===s),1),delete o.value[s]}function g(){Object.values(o.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:n,messageRefs:o,messageList:l,handleAfterLeave:u},i)},render(){var r,n,l;return c(me,null,(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r),this.messageList.length?c(ve,{to:(l=this.to)!==null&&l!==void 0?l:"body"},c("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(o=>c(je,Object.assign({ref:i=>{i&&(this.messageRefs[o.key]=i)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},be(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});export{_e as _,be as o};
