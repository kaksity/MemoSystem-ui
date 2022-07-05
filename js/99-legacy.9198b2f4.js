"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[99],{5690:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n(6252),u=n(3577),a=n(2262),l={class:"mb-6 last:mb-0"},o={key:0,class:"block font-bold mb-2"},s={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},i={props:{label:{type:String,default:null},help:{type:String,default:null}},setup:function(e){var r=(0,t.Rr)(),n=(0,t.Fl)((function(){var e=[],n=r.default().length;return n>1&&e.push("grid grid-cols-1 gap-3"),2===n&&e.push("md:grid-cols-2"),e}));return function(r,i){return(0,t.wg)(),(0,t.iD)("div",l,[e.label?((0,t.wg)(),(0,t.iD)("label",o,(0,u.zw)(e.label),1)):(0,t.kq)("",!0),(0,t._)("div",{class:(0,u.C_)((0,a.SU)(n))},[(0,t.WI)(r.$slots,"default")],2),e.help?((0,t.wg)(),(0,t.iD)("div",s,(0,u.zw)(e.help),1)):(0,t.kq)("",!0)])}}};const m=i;var c=m},4116:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(8534),u=(n(5666),n(6252)),a=n(2262),l=n(9963),o=n(5317),s=n(7315),i=n(9890),m=n(5690),c=n(2213),d=n(5693),f=n(1388),p=n(8146),w=n(8400),h=n(3002),b={setup:function(e){var r=(0,a.iH)([]),n=(0,h.pm)(),b=(0,a.qj)({fullName:"",username:"",password:"",role:""});function g(){b.fullName="",b.username="",b.password="",b.role=""}function v(){return Z.apply(this,arguments)}function Z(){return Z=(0,t.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.get("/roles");case 3:t=e.sent,r.value=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),Z.apply(this,arguments)}(0,u.bv)((0,t.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:case"end":return e.stop()}}),e)}))));var U=function(){""===b.fullName||b.fullName.length<8?n.error("Full Name is required and must be 5 or more characters"):""===b.username||b.username.length<5?n.error("Username is required and must be 5 or more characters"):""===b.password||b.password.length<8?n.error("Password is required and must 8 or more characters"):(b.role=b.role.id,w.Z.post("/users",b).then((function(e){n.success(e.message),g()})).catch((function(e){n.error(e.message)})))};return function(e,n){return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(s.Z,null,{default:(0,u.w5)((function(){return[(0,u.Wm)(i.Z,{title:"Forms",icon:(0,a.SU)(o.hjO),form:"",onSubmit:(0,l.iM)(U,["prevent"])},{default:(0,u.w5)((function(){return[(0,u.Wm)(m.Z,{label:"Full Name"},{default:(0,u.w5)((function(){return[(0,u.Wm)(c.Z,{modelValue:(0,a.SU)(b).fullName,"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,a.SU)(b).fullName=e})},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(m.Z,{label:"Role"},{default:(0,u.w5)((function(){return[(0,u.Wm)(c.Z,{modelValue:(0,a.SU)(b).role,"onUpdate:modelValue":n[1]||(n[1]=function(e){return(0,a.SU)(b).role=e}),options:r.value},null,8,["modelValue","options"])]})),_:1}),(0,u.Wm)(m.Z,{label:"Username"},{default:(0,u.w5)((function(){return[(0,u.Wm)(c.Z,{modelValue:(0,a.SU)(b).username,"onUpdate:modelValue":n[2]||(n[2]=function(e){return(0,a.SU)(b).username=e}),name:"username",autocomplete:"username"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(m.Z,{label:"Password"},{default:(0,u.w5)((function(){return[(0,u.Wm)(c.Z,{modelValue:(0,a.SU)(b).password,"onUpdate:modelValue":n[3]||(n[3]=function(e){return(0,a.SU)(b).password=e}),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(d.Z),(0,u.Wm)(p.Z,null,{default:(0,u.w5)((function(){return[(0,u.Wm)(f.Z,{type:"submit",color:"info",label:"Submit"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1})])}}};const g=b;var v=g}}]);
//# sourceMappingURL=99-legacy.9198b2f4.js.map