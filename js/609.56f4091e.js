"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[609],{9443:function(e,l,t){t.d(l,{r:function(){return n}});t(7658);function n(e,l){return e.reduce((function(e,t){return(e[t[l]]=e[t[l]]||[]).push(t),e}),{})}},5690:function(e,l,t){t.d(l,{Z:function(){return c}});t(7658);var n=t(6252),a=t(3577),u=t(2262);const o={class:"mb-6 last:mb-0"},i={key:0,class:"block font-bold mb-2"},r={key:1,class:"text-xs text-red-500 dark:text-red-400 mt-1"};var d={__name:"Field",props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,n.Rr)(),t=(0,n.Fl)((()=>{const e=[],t=l.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return(l,d)=>((0,n.wg)(),(0,n.iD)("div",o,[e.label?((0,n.wg)(),(0,n.iD)("label",i,(0,a.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,a.C_)((0,u.SU)(t))},[(0,n.WI)(l.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",r,(0,a.zw)(e.help[0].message),1)):(0,n.kq)("",!0)]))}};const s=d;var c=s},8609:function(e,l,t){t.r(l),t.d(l,{default:function(){return v}});var n=t(6252),a=t(2262),u=t(9963),o=t(5317),i=t(7315),r=t(9890),d=t(5690),s=t(2213),c=t(5693),m=t(1388),p=t(6373),f=t(7877),b=t(3002),h=t(9443),w={__name:"CreateFile",setup(e){const l=(0,b.pm)(),t=(0,a.qj)({name:"",code:"",description:""}),w=(0,a.iH)([]);function _(){t.name="",t.code="",t.description=""}function v(){w.value={}}async function Z(){try{v();const e=await f.Z.post("/files",t);l.success(e.message),_()}catch(e){e.errors?w.value=(0,h.r)(e.errors,"field"):l.error(e.detail)}}return(e,l)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r.Z,{title:"Create File",icon:(0,a.SU)(o.hjO),form:"",onSubmit:(0,u.iM)(Z,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Z,{label:"File Name",help:w.value.name},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t.name=e)},null,8,["modelValue"])])),_:1},8,["help"]),(0,n.Wm)(c.Z),(0,n.Wm)(d.Z,{label:"File Number",help:w.value.code},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:t.code,"onUpdate:modelValue":l[1]||(l[1]=e=>t.code=e)},null,8,["modelValue"])])),_:1},8,["help"]),(0,n.Wm)(c.Z),(0,n.Wm)(d.Z,{label:"File Description",help:w.value.description},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:t.description,"onUpdate:modelValue":l[2]||(l[2]=e=>t.description=e),row:"3",type:"textarea"},null,8,["modelValue"])])),_:1},8,["help"]),(0,n.Wm)(c.Z),(0,n.Wm)(p.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m.Z,{type:"submit",color:"info",label:"Send"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const _=w;var v=_}}]);
//# sourceMappingURL=609.56f4091e.js.map