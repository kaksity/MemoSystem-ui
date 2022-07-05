"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[99],{5690:function(e,l,a){a.d(l,{Z:function(){return i}});var r=a(6252),s=a(3577),t=a(2262);const o={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},n={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var m={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,r.Rr)(),a=(0,r.Fl)((()=>{const e=[],a=l.default().length;return a>1&&e.push("grid grid-cols-1 gap-3"),2===a&&e.push("md:grid-cols-2"),e}));return(l,m)=>((0,r.wg)(),(0,r.iD)("div",o,[e.label?((0,r.wg)(),(0,r.iD)("label",u,(0,s.zw)(e.label),1)):(0,r.kq)("",!0),(0,r._)("div",{class:(0,s.C_)((0,t.SU)(a))},[(0,r.WI)(l.$slots,"default")],2),e.help?((0,r.wg)(),(0,r.iD)("div",n,(0,s.zw)(e.help),1)):(0,r.kq)("",!0)]))}};const d=m;var i=d},4116:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var r=a(6252),s=a(2262),t=a(9963),o=a(5317),u=a(7315),n=a(9890),m=a(5690),d=a(2213),i=a(5693),c=a(1388),p=a(6373),w=a(8400),f=a(3002),b={setup(e){const l=(0,s.iH)([]),a=(0,f.pm)(),b=(0,s.qj)({fullName:"",username:"",password:"",role:""});function g(){b.fullName="",b.username="",b.password="",b.role=""}async function h(){try{const e=await w.Z.get("/roles");l.value=e.data}catch(e){a.error(e.message)}}(0,r.bv)((async()=>{await h()}));const U=()=>{""===b.fullName||b.fullName.length<8?a.error("Full Name is required and must be 5 or more characters"):""===b.username||b.username.length<5?a.error("Username is required and must be 5 or more characters"):""===b.password||b.password.length<8?a.error("Password is required and must 8 or more characters"):(b.role=b.role.id,w.Z.post("/users",b).then((e=>{a.success(e.message),g()})).catch((e=>{a.error(e.message)})))};return(e,a)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n.Z,{title:"Forms",icon:(0,s.SU)(o.hjO),form:"",onSubmit:(0,t.iM)(U,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Wm)(m.Z,{label:"Full Name"},{default:(0,r.w5)((()=>[(0,r.Wm)(d.Z,{modelValue:(0,s.SU)(b).fullName,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,s.SU)(b).fullName=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(m.Z,{label:"Role"},{default:(0,r.w5)((()=>[(0,r.Wm)(d.Z,{modelValue:(0,s.SU)(b).role,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(b).role=e),options:l.value},null,8,["modelValue","options"])])),_:1}),(0,r.Wm)(m.Z,{label:"Username"},{default:(0,r.w5)((()=>[(0,r.Wm)(d.Z,{modelValue:(0,s.SU)(b).username,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,s.SU)(b).username=e),name:"username",autocomplete:"username"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(m.Z,{label:"Password"},{default:(0,r.w5)((()=>[(0,r.Wm)(d.Z,{modelValue:(0,s.SU)(b).password,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,s.SU)(b).password=e),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(i.Z),(0,r.Wm)(p.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c.Z,{type:"submit",color:"info",label:"Submit"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const g=b;var h=g}}]);
//# sourceMappingURL=99.2b24fb1f.js.map