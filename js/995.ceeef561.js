"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[995],{5690:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(6252),r=l(3577),a=l(2262);const u={class:"mb-6 last:mb-0"},o={key:0,class:"block font-bold mb-2"},i={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var d={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const t=(0,n.Rr)(),l=(0,n.Fl)((()=>{const e=[],l=t.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return(t,d)=>((0,n.wg)(),(0,n.iD)("div",u,[e.label?((0,n.wg)(),(0,n.iD)("label",o,(0,r.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,r.C_)((0,a.SU)(l))},[(0,n.WI)(t.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",i,(0,r.zw)(e.help),1)):(0,n.kq)("",!0)]))}};const s=d;var c=s},1502:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var n=l(6252),r=l(2262),a=l(9963),u=l(5317),o=l(7315),i=l(9890),d=l(5690),s=l(2213),c=l(5693),m=l(1388),f=l(6373),v=l(8400),y=l(3002),p={setup(e){const t=(0,y.pm)(),l=(0,r.qj)({article:"",quantity:"",code:""});function p(){l.article="",l.quantity="",l.code=""}async function b(){try{if(""===l.article)return void t.error("Inventory Article is required");if(""===l.code)return void t.error("Inventory Code is required");if(""===l.quantity)return void t.error("Inventory Quantity is required");const e=await v.Z.post("/inventories",l);t.success(e.message),p()}catch(e){t.error(e.message)}}return(e,t)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(o.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.Z,{title:"Create Inventory",icon:(0,r.SU)(u.hjO),form:"",onSubmit:(0,a.iM)(b,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Z,{label:"Inventory Article"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:(0,r.SU)(l).article,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.SU)(l).article=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.Z),(0,n.Wm)(d.Z,{label:"Inventory Code"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:(0,r.SU)(l).code,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.SU)(l).code=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.Z),(0,n.Wm)(d.Z,{label:"Inventory Quantity"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{modelValue:(0,r.SU)(l).quantity,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,r.SU)(l).quantity=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.Z),(0,n.Wm)(f.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m.Z,{type:"submit",color:"info",label:"Send"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const b=p;var w=b}}]);
//# sourceMappingURL=995.ceeef561.js.map