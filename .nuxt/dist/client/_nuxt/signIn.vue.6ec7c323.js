import{u as r}from"./squareStore.4896160c.js";import{a as v,b as C}from"./api.5d75f8ba.js";import{a as k,r as u,o as w,e as x,f as l,w as c,q as p,F as b}from"./entry.8cc5d05e.js";import{u as S,_ as B}from"./use-message.b9be53ef.js";import{_ as I}from"./Button.f7a6571a.js";import{_ as N}from"./Input.445e887b.js";const T=k({__name:"signIn",setup(h){const n=S(),s=u(!1),m=r().action.actionId,a=u(null);function _(){const e=new FormData;e.append("SinginCode",a.value),e.append("id",m),v.post(C+"/User/singinActivity",e,{headers:{"Content-Type":"multipart/form-data",token:sessionStorage.getItem("token")}}).then(o=>{console.log(o);const i=!0;r().Boolean=i,n.success("签到成功！666")}).catch(o=>{console.log(o),n.error("签到失败，请联系管理员！")})}function d(){n.success("111111")}return(e,o)=>{const i=I,f=N,g=B;return w(),x(b,null,[l(i,{onClick:o[0]||(o[0]=t=>s.value=!0),type:"info",class:"mt-3"},{default:c(()=>[p(" 签到活动 ")]),_:1}),l(g,{show:s.value,"onUpdate:show":o[2]||(o[2]=t=>s.value=t),preset:"dialog",title:"签到",content:"你确认签到?","positive-text":"确认","negative-text":"取消",onPositiveClick:_,onNegativeClick:d},{default:c(()=>[p(" 请让管理员给你签到验证码："),l(f,{value:a.value,"onUpdate:value":o[1]||(o[1]=t=>a.value=t)},null,8,["value"])]),_:1},8,["show"])],64)}}});export{T as _};