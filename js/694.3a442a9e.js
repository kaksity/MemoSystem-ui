"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[694],{9443:function(e,l,s){s.d(l,{r:function(){return o}});s(7658);function o(e,l){return e.reduce((function(e,s){return(e[s[l]]=e[s[l]]||[]).push(s),e}),{})}},5690:function(e,l,s){s.d(l,{Z:function(){return i}});s(7658);var o=s(6252),a=s(3577),n=s(2262);const r={class:"mb-6 last:mb-0"},d={key:0,class:"block font-bold mb-2"},t={key:1,class:"text-xs text-red-500 dark:text-red-400 mt-1"};var u={__name:"Field",props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,o.Rr)(),s=(0,o.Fl)((()=>{const e=[],s=l.default().length;return s>1&&e.push("grid grid-cols-1 gap-3"),2===s&&e.push("md:grid-cols-2"),e}));return(l,u)=>((0,o.wg)(),(0,o.iD)("div",r,[e.label?((0,o.wg)(),(0,o.iD)("label",d,(0,a.zw)(e.label),1)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,a.C_)((0,n.SU)(s))},[(0,o.WI)(l.$slots,"default")],2),e.help?((0,o.wg)(),(0,o.iD)("div",t,(0,a.zw)(e.help[0].message),1)):(0,o.kq)("",!0)]))}};const w=u;var i=w},9694:function(e,l,s){s.r(l),s.d(l,{default:function(){return _}});var o=s(6252),a=s(2262),n=s(9963),r=s(5317),d=s(7315),t=s(9890),u=s(5690),w=s(2213),i=s(5693),m=s(1388),c=s(6373),p=s(7877),f=s(3002),P=s(9443),h={__name:"ChangePassword",setup(e){const l=(0,f.pm)(),s=(0,a.iH)([]),h=(0,a.qj)({oldPassword:"",newPassword:"",confirmPassword:""});function b(){s.value={}}function _(){h.oldPassword="",h.newPassword="",h.confirmPassword=""}const v=()=>{b();const e={oldPassword:h.oldPassword,newPassword:h.newPassword,confirmPassword:h.confirmPassword};p.Z.post("/auth/change-password",e).then((e=>{l.success(e.message),_()})).catch((e=>{e.errors?s.value=(0,P.r)(e.errors,"field"):l.error(e.detail)}))};return(e,l)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(d.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(t.Z,{title:"Change Passowrd",icon:(0,a.SU)(r.hjO),form:"",onSubmit:(0,n.iM)(v,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(u.Z,{label:"Old Password",help:s.value.oldPassword},{default:(0,o.w5)((()=>[(0,o.Wm)(w.Z,{modelValue:h.oldPassword,"onUpdate:modelValue":l[0]||(l[0]=e=>h.oldPassword=e),type:"password"},null,8,["modelValue"])])),_:1},8,["help"]),(0,o.Wm)(u.Z,{label:"New Password",help:s.value.newPassword},{default:(0,o.w5)((()=>[(0,o.Wm)(w.Z,{modelValue:h.newPassword,"onUpdate:modelValue":l[1]||(l[1]=e=>h.newPassword=e),type:"password"},null,8,["modelValue"])])),_:1},8,["help"]),(0,o.Wm)(u.Z,{label:"Confirm Password",help:s.value.confirmPassword},{default:(0,o.w5)((()=>[(0,o.Wm)(w.Z,{modelValue:h.confirmPassword,"onUpdate:modelValue":l[2]||(l[2]=e=>h.confirmPassword=e),type:"password"},null,8,["modelValue"])])),_:1},8,["help"]),(0,o.Wm)(i.Z),(0,o.Wm)(c.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m.Z,{type:"submit",color:"info",label:"Submit"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const b=h;var _=b}}]);
//# sourceMappingURL=694.3a442a9e.js.map