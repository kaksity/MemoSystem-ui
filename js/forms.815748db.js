"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{6291:function(e,t,l){l.d(t,{Z:function(){return u}});var a=l(6252),n=l(3577),o={props:{theads:Array},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.theads,((e,t)=>((0,a.wg)(),(0,a.iD)("th",{key:t},(0,n.zw)(e),1)))),128))])]),(0,a._)("tbody",null,[(0,a.WI)(t.$slots,"default")])]))}};const i=o;var u=i},5690:function(e,t,l){l.d(t,{Z:function(){return s}});var a=l(6252),n=l(3577),o=l(2262);const i={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},r={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var c={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const t=(0,a.Rr)(),l=(0,a.Fl)((()=>{const e=[],l=t.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return(t,c)=>((0,a.wg)(),(0,a.iD)("div",i,[e.label?((0,a.wg)(),(0,a.iD)("label",u,(0,n.zw)(e.label),1)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,n.C_)((0,o.SU)(l))},[(0,a.WI)(t.$slots,"default")],2),e.help?((0,a.wg)(),(0,a.iD)("div",r,(0,n.zw)(e.help),1)):(0,a.kq)("",!0)]))}};const d=c;var s=d},7841:function(e,t,l){l.d(t,{Z:function(){return p}});var a=l(6252),n=l(2262),o=l(3577),i=l(9963),u=l(5317),r=l(1388),c=l(6373),d=l(9890),s=l(5693),m=l(7689);const f={class:"space-y-3"},w={key:0,class:"text-2xl"};var v={props:{title:{type:String,default:null},largeTitle:{type:String,default:null},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:t}){const l=e,v=(0,a.Fl)({get:()=>l.modelValue,set:e=>t("update:modelValue",e)}),y=e=>{v.value=!1,t(e)},p=()=>y("confirm"),g=()=>y("cancel");return(t,l)=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(m.Z,{onOverlayClick:g},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(d.Z,{title:e.title,class:"shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50",rounded:"rounded-lg","header-icon":(0,n.SU)(u.r5M),modal:"",onHeaderIconClick:g},{default:(0,a.w5)((()=>[(0,a._)("div",f,[e.largeTitle?((0,a.wg)(),(0,a.iD)("h1",w,(0,o.zw)(e.largeTitle),1)):(0,a.kq)("",!0),(0,a.WI)(t.$slots,"default")]),(0,a.Wm)(s.Z),(0,a.Wm)(c.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{label:e.buttonLabel,color:e.button,onClick:p},null,8,["label","color"]),e.hasCancel?((0,a.wg)(),(0,a.j4)(r.Z,{key:0,label:"Cancel",color:e.button,outline:"",onClick:g},null,8,["color"])):(0,a.kq)("",!0)])),_:1})])),_:3},8,["title","header-icon"]),[[i.F8,(0,n.SU)(v)]])])),_:3},512)),[[i.F8,(0,n.SU)(v)]])}};const y=v;var p=y},2580:function(e,t,l){l.r(t);const a={},n=a;t["default"]=n},9433:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(6252),n=l(2262),o=l(3577),i=l(5317),u=l(7315),r=l(9890),c=l(5690),d=l(5693),s=l(8400),m=l(3002),f=l(2119);const w=(0,a._)("div",{id:"fileContent"},null,-1);var v={setup(e){const t=(0,f.yj)(),l=(0,n.iH)({}),v=(0,m.pm)();async function y(e){try{const t=await s.Z.get(`/files/${e}`);l.value=t.data.file,document.getElementById("fileContent").innerHTML=l.value.description}catch(t){v.error(t.message)}}return(0,a.bv)((async()=>{const e=t.params.fileId;await y(e)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{title:"File Details",icon:(0,n.SU)(i.hjO)},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{label:"File Name"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value.name),1)])),_:1}),(0,a.Wm)(d.Z),(0,a.Wm)(c.Z,{label:"File Number"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value.code),1)])),_:1}),(0,a.Wm)(d.Z),(0,a.Wm)(c.Z,{label:"File Description"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(d.Z)])),_:1},8,["icon"])])),_:1})]))}};const y=v;var p=y},4265:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var a=l(6252),n=l(3577),o=l(2262),i=l(7315),u=l(6291),r=l(9890),c=l(8400),d=l(7841),s=l(6373),m=l(1388),f=l(5317),w=l(3002),v=l(2119);const y={"data-label":"File Name"},p={"data-label":"File Number"},g={"data-label":"Created On"},Z=["title"],b={class:"actions-cell"},_=(0,a._)("p",null,"Do you wish to delete this record?",-1);var W={setup(e){const t=["File Name","File Number","Created On"],l=(0,v.tv)(),W=(0,o.iH)([]),h=(0,w.pm)(),k=(0,o.iH)(!1),C=(0,o.iH)("");async function S(){try{const e=await c.Z.get("/files");W.value=e.data.files}catch(e){h.error(e.message)}}function U(e){c.Z["delete"](`/files/${e}`).then((e=>{h.success(e.message),S()})).catch((e=>{h.error(e.message)}))}return(0,a.bv)((async()=>{await S()})),(e,c)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{class:"mb-6",title:"List of Files","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{theads:t},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",y,(0,n.zw)(e.name),1),(0,a._)("td",p,(0,n.zw)(e.code),1),(0,a._)("td",g,[(0,a._)("small",{class:"text-gray-500 dark:text-gray-400",title:e.createdAt},(0,n.zw)(e.createdAt),9,Z)]),(0,a._)("td",b,[(0,a.Wm)(s.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{color:"info",icon:(0,o.SU)(f.rgx),small:"",onClick:t=>(0,o.SU)(l).push(`/file/${e.id}/view`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"primary",icon:(0,o.SU)(f.xyB),small:"",onClick:t=>(0,o.SU)(l).push(`/file/${e.id}/upload`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(f.QGK),small:"",onClick:t=>(k.value=!0,C.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d.Z,{modelValue:k.value,"onUpdate:modelValue":c[0]||(c[0]=e=>k.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:c[1]||(c[1]=e=>U(C.value))},{default:(0,a.w5)((()=>[_])),_:1},8,["modelValue"])]))}};const h=W;var k=h},5200:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(6252),n=l(2262),o=l(9963),i=l(3577),u=l(7315),r=l(6291),c=l(9890),d=l(8400),s=l(7841),m=l(5690),f=l(2213),w=l(5693),v=l(6373),y=l(1388),p=l(5317),g=l(3002),Z=l(2119);const b={"data-label":"Document"},_={"data-label":"Created On"},W=["title"],h={class:"actions-cell"},k=(0,a._)("p",null,"Do you wish to delete this record?",-1);var C={setup(e){const t=(0,Z.yj)(),l=["Document","Created On"],C=(0,n.iH)([]),S=(0,g.pm)(),U=(0,n.iH)(""),D=(0,n.iH)(!1),I=(0,n.iH)(t.params.fileId),V=(0,n.qj)({documentName:"",fileId:I,file:null});async function q(e){try{const t=await d.Z.get(`/files/${e}/documents`);C.value=t.data.fileDocuments}catch(t){S.error(t.message)}}function H(e){V.file=e.target.files||e.dataTransfer.files}function j(){V.documentName="",V.file=null}async function N(){if(""!==V.documentName)if(null!==V.file)try{const e=new FormData;e.append("fileId",V.fileId),e.append("documentName",V.documentName),e.append("file",V.file[0]);const t=await d.Z.post("/files/documents",e);S.success(t.message),await q(I.value),j()}catch(e){S.error(e.message)}else S.error("Document is required");else S.error("Document Name is required")}function x(e){window.open(e)}async function z(e){try{const t=await d.Z["delete"](`/files/documents/${e}`);S.success(t.message),await q(I.value)}catch(t){S.error(t.message)}}return(0,a.bv)((async()=>{await q(I.value)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{title:"Create File",icon:(0,n.SU)(p.hjO),form:"",onSubmit:(0,o.iM)(N,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{label:"Document Name"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{modelValue:(0,n.SU)(V).documentName,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.SU)(V).documentName=e),placeholder:"Enter the name of document"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w.Z),(0,a.Wm)(m.Z,{label:"Document"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{type:"file",placeholder:"Enter the name of document",onChange:H})])),_:1}),(0,a.Wm)(w.Z),(0,a.Wm)(w.Z),(0,a.Wm)(v.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y.Z,{type:"submit",color:"info",label:"Send"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1}),(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{class:"mb-6",title:"List of Documents","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{theads:l},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(C.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",b,(0,i.zw)(e.name),1),(0,a._)("td",_,[(0,a._)("small",{class:"text-gray-500 dark:text-gray-400",title:e.createdAt},(0,i.zw)(e.createdAt),9,W)]),(0,a._)("td",h,[(0,a.Wm)(v.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(y.Z,{color:"info",icon:(0,n.SU)(p.rgx),small:"",onClick:t=>x(e.url)},null,8,["icon","onClick"]),(0,a.Wm)(y.Z,{color:"danger",icon:(0,n.SU)(p.QGK),small:"",onClick:t=>(D.value=!0,U.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(s.Z,{modelValue:D.value,"onUpdate:modelValue":t[1]||(t[1]=e=>D.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:t[2]||(t[2]=e=>z(U.value))},{default:(0,a.w5)((()=>[k])),_:1},8,["modelValue"])]))}};const S=C;var U=S},3412:function(e,t,l){l.r(t),l.d(t,{default:function(){return Z}});var a=l(6252),n=l(2262),o=l(9963),i=l(5317),u=l(7315),r=l(9890),c=l(5690),d=l(2213),s=l(5693),m=l(1388),f=l(6373),w=l(8400),v=l(3002),y=l(2119),p={setup(e){const t=(0,v.pm)(),l=(0,y.yj)(),p=(0,n.qj)({article:"",quantity:"",code:""});async function g(e){try{const{data:t}=await w.Z.get(`/inventories/${e}`);p.article=t.article,p.quantity=t.quantity,p.code=t.code}catch(l){t.error(l.message)}}async function Z(){try{if(""===p.article)return void t.error("Inventory Article is required");if(""===p.code)return void t.error("Inventory Code is required");if(""===p.quantity)return void t.error("Inventory Quantity is required");const e=await w.Z.put(`/inventories/${l.params.inventoryId}`,p);await g(l.params.inventoryId),t.success(e.message)}catch(e){t.error(e.message)}}return(0,a.bv)((async()=>{await g(l.params.inventoryId)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{title:"Update Inventory",icon:(0,n.SU)(i.hjO),form:"",onSubmit:(0,o.iM)(Z,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{label:"Inventory Article"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.Z,{modelValue:(0,n.SU)(p).article,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.SU)(p).article=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(s.Z),(0,a.Wm)(c.Z,{label:"Inventory Code"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.Z,{modelValue:(0,n.SU)(p).code,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,n.SU)(p).code=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(s.Z),(0,a.Wm)(c.Z,{label:"Inventory Quantity"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.Z,{modelValue:(0,n.SU)(p).quantity,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,n.SU)(p).quantity=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(s.Z),(0,a.Wm)(f.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{type:"submit",color:"info",label:"Update"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const g=p;var Z=g},731:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(6252),n=l(3577),o=l(2262),i=l(7315),u=l(6291),r=l(9890),c=l(8400),d=l(7841),s=l(6373),m=l(1388),f=l(5317),w=l(3002),v=l(2119);const y={"data-label":"Inventory Article"},p={"data-label":"Inventory Code"},g={"data-label":"Inventory Quantity"},Z={class:"actions-cell"},b=(0,a._)("p",null,"Do you wish to delete this record?",-1);var _={setup(e){const t=["Inventory Article","Inventory Code","Inventory Quantity"],l=(0,v.tv)(),_=(0,o.iH)([]),W=(0,w.pm)(),h=(0,o.iH)(!1),k=(0,o.iH)("");async function C(){try{const e=await c.Z.get("/inventories");_.value=e.data}catch(e){W.error(e.message)}}function S(e){c.Z["delete"](`/inventories/${e}`).then((e=>{W.success(e.message),C()})).catch((e=>{W.error(e.message)}))}return(0,a.bv)((async()=>{await C()})),(e,c)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{class:"mb-6",title:"List of Inventories","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{theads:t},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",y,(0,n.zw)(e.article),1),(0,a._)("td",p,(0,n.zw)(e.code),1),(0,a._)("td",g,(0,n.zw)(e.quantity),1),(0,a._)("td",Z,[(0,a.Wm)(s.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{color:"info",icon:(0,o.SU)(f.rgx),small:"",onClick:t=>(0,o.SU)(l).push(`/inventory/${e.id}/view`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(f.QGK),small:"",onClick:t=>(h.value=!0,k.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d.Z,{modelValue:h.value,"onUpdate:modelValue":c[0]||(c[0]=e=>h.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:c[1]||(c[1]=e=>S(k.value))},{default:(0,a.w5)((()=>[b])),_:1},8,["modelValue"])]))}};const W=_;var h=W}}]);
//# sourceMappingURL=forms.815748db.js.map