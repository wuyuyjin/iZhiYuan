import{c as U,b as t,d as h,H as X,e as a,f as d,i as Y,g as Z,u as oo,j as _,h as eo,k as ro,D as m,w as to,A as w,O as no}from"./browser.6edf931c.js";import{N as ao,k as lo}from"./Close.921ce76f.js";import{a as io,b as $,h as l}from"./entry.8cc5d05e.js";const so={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},co=r=>{const{primaryColor:v,borderRadius:c,lineHeight:o,fontSize:i,cardColor:s,textColor2:f,textColor1:b,dividerColor:n,fontWeightStrong:e,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:p}=r;return Object.assign(Object.assign({},so),{lineHeight:o,color:s,colorModal:S,colorPopover:k,colorTarget:v,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:f,titleTextColor:b,borderColor:n,actionColor:p,titleFontWeight:e,closeColorHover:z,closeColorPressed:C,closeBorderRadius:c,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:y,borderRadius:c})},bo={name:"Card",common:U,self:co},go=bo,po=t([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[X({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Y(h("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(h("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),P={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},uo=lo(P),mo=Object.assign(Object.assign({},_.props),P),xo=io({name:"Card",props:mo,setup(r){const v=()=>{const{onClose:e}=r;e&&to(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:i}=oo(r),s=_("Card","-card",po,go,r,o),f=eo("Card",i,o),b=$(()=>{const{size:e}=r,{self:{color:g,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:p,lineHeight:T,closeIconColor:R,closeIconColorHover:B,closeIconColorPressed:E,closeColorHover:O,closeColorPressed:H,closeBorderRadius:M,closeIconSize:j,closeSize:F,boxShadow:I,colorPopover:L,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:A,[w("padding",e)]:D,[w("fontSize",e)]:K,[w("titleFontSize",e)]:N},common:{cubicBezierEaseInOut:q}}=s.value,{top:G,left:J,bottom:Q}=no(D);return{"--n-bezier":q,"--n-border-radius":p,"--n-color":g,"--n-color-modal":u,"--n-color-popover":L,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":A,"--n-color-target":x,"--n-text-color":z,"--n-line-height":T,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":R,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":E,"--n-close-color-hover":O,"--n-close-color-pressed":H,"--n-border-color":y,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":K,"--n-title-font-size":N,"--n-close-size":F,"--n-close-icon-size":j,"--n-close-border-radius":M}}),n=c?ro("card",$(()=>r.size[0]),b,r):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:v,cssVars:c?void 0:b,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{segmented:r,bordered:v,hoverable:c,mergedClsPrefix:o,rtlEnabled:i,onRender:s,embedded:f,tag:b,$slots:n}=this;return s==null||s(),l(b,{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:i,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:v,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},m(n.cover,e=>e&&l("div",{class:`${o}-card-cover`,role:"none"},e)),m(n.header,e=>e||this.title||this.closable?l("div",{class:`${o}-card-header`,style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),m(n["header-extra"],g=>g&&l("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},g)),this.closable?l(ao,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(n.default,e=>e&&l("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},e)),m(n.footer,e=>e&&[l("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},e)]),m(n.action,e=>e&&l("div",{class:`${o}-card__action`,role:"none"},e)))}});export{xo as _,P as a,uo as b,go as c};
