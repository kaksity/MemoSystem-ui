"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[213],{6291:function(e,l,a){a.d(l,{Z:function(){return r}});var t=a(6252),n=a(3577),u={__name:"DataTable",props:{theads:Array},setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("table",null,[(0,t._)("thead",null,[(0,t._)("tr",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.theads,((e,l)=>((0,t.wg)(),(0,t.iD)("th",{key:l},(0,n.zw)(e),1)))),128))])]),(0,t._)("tbody",null,[(0,t.WI)(l.$slots,"default")])]))}};const o=u;var r=o},7841:function(e,l,a){a.d(l,{Z:function(){return b}});var t=a(6252),n=a(2262),u=a(3577),o=a(9963),r=a(5317),i=a(1388),s=a(6373),d=a(9890),c=a(5693),m=a(7689);const f={class:"space-y-3"},w={key:0,class:"text-2xl"};var _={__name:"ModalBox",props:{title:{type:String,default:null},largeTitle:{type:String,default:null},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:l}){const a=e,_=(0,t.Fl)({get:()=>a.modelValue,set:e=>l("update:modelValue",e)}),g=e=>{_.value=!1,l(e)},b=()=>g("confirm"),p=()=>g("cancel");return(l,a)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(m.Z,{onOverlayClick:p},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(d.Z,{title:e.title,class:"shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50",rounded:"rounded-lg","header-icon":(0,n.SU)(r.r5M),modal:"",onHeaderIconClick:p},{default:(0,t.w5)((()=>[(0,t._)("div",f,[e.largeTitle?((0,t.wg)(),(0,t.iD)("h1",w,(0,u.zw)(e.largeTitle),1)):(0,t.kq)("",!0),(0,t.WI)(l.$slots,"default")]),(0,t.Wm)(c.Z),(0,t.Wm)(s.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:e.buttonLabel,color:e.button,onClick:b},null,8,["label","color"]),e.hasCancel?((0,t.wg)(),(0,t.j4)(i.Z,{key:0,label:"Cancel",color:e.button,outline:"",onClick:p},null,8,["color"])):(0,t.kq)("",!0)])),_:1})])),_:3},8,["title","header-icon"]),[[o.F8,(0,n.SU)(_)]])])),_:3},512)),[[o.F8,(0,n.SU)(_)]])}};const g=_;var b=g},9213:function(e,l,a){a.r(l),a.d(l,{default:function(){return k}});var t=a(6252),n=a(3577),u=a(2262),o=a(7315),r=a(6291),i=a(9890),s=a(7877),d=a(7841),c=a(6373),m=a(1388),f=a(5317),w=a(3002);const _={"data-label":"Full Name"},g={"data-label":"Username"},b={"data-label":"Role"},p={class:"actions-cell"},h=(0,t._)("p",null,"Do you wish to delete this record?",-1);var v={__name:"Index",setup(e){const l=["Full Name","Username","Role Name","Action"],a=(0,u.iH)([]),v=(0,w.pm)(),y=(0,u.iH)(!1),k=(0,u.iH)("");async function Z(){try{const{data:e}=await s.Z.get("/users");a.value=e}catch(e){v.error(e.message)}}function C(e){s.Z["delete"](`/users/${e}`).then((({message:e})=>{v.success(e),Z()})).catch((e=>{v.error(e.detail)}))}return(0,t.bv)((async()=>{await Z()})),(e,s)=>((0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(o.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{class:"mb-6",title:"List of Users","has-table":""},{default:(0,t.w5)((()=>[(0,t.Wm)(r.Z,{theads:l},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,(e=>((0,t.wg)(),(0,t.iD)("tr",{key:e.id},[(0,t._)("td",_,(0,n.zw)(e.fullName),1),(0,t._)("td",g,(0,n.zw)(e.username),1),(0,t._)("td",b,(0,n.zw)(e.role.name),1),(0,t._)("td",p,[(0,t.Wm)(c.Z,{type:"justify-start lg:justify-center","no-wrap":""},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{color:"danger",icon:(0,u.SU)(f.QGK),small:"",onClick:l=>(y.value=!0,k.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(d.Z,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=e=>y.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:s[1]||(s[1]=e=>C(k.value))},{default:(0,t.w5)((()=>[h])),_:1},8,["modelValue"])]))}};const y=v;var k=y}}]);
//# sourceMappingURL=213.d7328631.js.map