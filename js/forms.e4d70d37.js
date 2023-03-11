"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{9443:function(e,t,l){l.d(t,{r:function(){return a}});l(7658);function a(e,t){return e.reduce((function(e,l){return(e[l[t]]=e[l[t]]||[]).push(l),e}),{})}},6291:function(e,t,l){l.d(t,{Z:function(){return r}});var a=l(6252),n=l(3577),o={__name:"DataTable",props:{theads:Array},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.theads,((e,t)=>((0,a.wg)(),(0,a.iD)("th",{key:t},(0,n.zw)(e),1)))),128))])]),(0,a._)("tbody",null,[(0,a.WI)(t.$slots,"default")])]))}};const i=o;var r=i},7701:function(e,t,l){l.d(t,{Z:function(){return D}});var a=l(6252),n=l(3577);const o={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"};function i(e,t,l,i,r,u){const s=(0,a.up)("BaseButton"),c=(0,a.up)("BaseButtons"),d=(0,a.up)("BaseLevel");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{disabled:l.currentPage-1===0,label:"<<",small:"",color:e.page===l.currentPage?"lightDark":"whiteDark",onClick:t[0]||(t[0]=t=>e.$emit("goToFirstPage"))},null,8,["disabled","color"]),(0,a.Wm)(s,{disabled:l.currentPage-1===0,label:"<",small:"",color:e.page===l.currentPage?"lightDark":"whiteDark",onClick:t[1]||(t[1]=t=>e.$emit("goToPreviousPage"))},null,8,["disabled","color"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.totalNumberOfPages,(t=>((0,a.wg)(),(0,a.j4)(s,{key:t,active:t===l.currentPage,label:t,small:"",color:t===l.currentPage?"info":"whiteDark",onClick:l=>e.$emit("goToCurrentPage",t)},null,8,["active","label","color","onClick"])))),128)),(0,a.Wm)(s,{label:">",disabled:l.currentPage+1>l.totalNumberOfPages,small:"",color:e.page===l.currentPage?"lightDark":"whiteDark",onClick:t[2]||(t[2]=t=>e.$emit("goToNextPage"))},null,8,["disabled","color"]),(0,a.Wm)(s,{label:">>",disabled:l.currentPage+1>l.totalNumberOfPages,small:"",color:e.page===l.currentPage?"lightDark":"whiteDark",onClick:t[3]||(t[3]=t=>e.$emit("goToLastPage"))},null,8,["disabled","color"])])),_:1}),(0,a._)("small",null,"Page "+(0,n.zw)(l.currentPage)+" of "+(0,n.zw)(l.totalNumberOfPages),1)])),_:1})])}var r=(0,a.aZ)({name:"BaseLevel",props:{mobile:Boolean,type:{type:String,default:"justify-between"}},render(){const e=[this.type,"items-center"],t=["flex"],l=["block","md:flex"],n=["flex","items-center","justify-center"];return(0,a.h)("div",{class:e.concat(this.mobile?t:l)},this.$slots.default().map(((e,t)=>{const l=!this.mobile&&this.$slots.default().length>t+1?n.concat(["mb-6","md:mb-0"]):n;return(0,a.h)("div",{class:l},[e])})))}});const u=r;var s=u,c=(l(7658),(0,a.aZ)({name:"BaseButtons",props:{noWrap:Boolean,type:{type:String,default:"justify-start"},classAddon:{type:String,default:"mr-3 last:mr-0 mb-3"},mb:{type:String,default:"-mb-3"}},render(){const e=this.$slots&&this.$slots.default,t=["flex","items-center",this.type,this.noWrap?"flex-nowrap":"flex-wrap"];return this.mb&&t.push(this.mb),(0,a.h)("div",{class:t},e?this.$slots.default().map((e=>e&&e.children&&"object"===typeof e.children?(0,a.h)(e,{},e.children.map((e=>(0,a.h)(e,{class:[this.classAddon]})))):(0,a.h)(e,{class:[this.classAddon]}))):null)}}));const d=c;var m=d,f=l(2262),p=l(2201),g=l(1088);const w=["width","height"],v=["d"];var y={__name:"BaseIcon",props:{path:{type:String,required:!0},w:{type:String,default:"w-6"},h:{type:String,default:"h-6"},size:{type:[String,Number],default:null}},setup(e){const t=e,l=(0,a.Fl)((()=>`inline-flex justify-center items-center ${t.w} ${t.h}`)),o=(0,a.Fl)((()=>t.size??16));return(t,i)=>((0,a.wg)(),(0,a.iD)("span",{class:(0,n.C_)((0,f.SU)(l))},[((0,a.wg)(),(0,a.iD)("svg",{viewBox:"0 0 24 24",width:(0,f.SU)(o),height:(0,f.SU)(o),class:"inline-block"},[(0,a._)("path",{fill:"currentColor",d:e.path},null,8,v)],8,w)),(0,a.WI)(t.$slots,"default")],2))}};const h=y;var b=h,_={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(e){const t=e,l=(0,a.Fl)((()=>t.as?t.as:t.to?p.rH:t.href?"a":"button")),o=(0,a.Fl)((()=>"button"===l.value?t.type??"button":null)),i=(0,a.Fl)((()=>t.small&&t.icon?"px-1":"px-2")),r=(0,a.Fl)((()=>{const e=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",t.disabled?"cursor-not-allowed":"cursor-pointer",t.roundedFull?"rounded-full":"rounded",(0,g.pQ)(t.color,t.outline,!t.disabled,t.active)];return!t.label&&t.icon?e.push("p-1"):t.small?e.push("text-sm",t.roundedFull?"px-3 py-1":"p-1"):e.push("py-2",t.roundedFull?"px-6":"px-3"),t.disabled&&e.push(t.outline?"opacity-50":"opacity-70"),e}));return(t,u)=>((0,a.wg)(),(0,a.j4)((0,a.LL)((0,f.SU)(l)),{class:(0,n.C_)((0,f.SU)(r)),href:e.href,type:(0,f.SU)(o),to:e.to,target:e.target,disabled:e.disabled},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(b,{key:0,path:e.icon,size:e.iconSize},null,8,["path","size"])):(0,a.kq)("",!0),e.label?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,n.C_)((0,f.SU)(i))},(0,n.zw)(e.label),3)):(0,a.kq)("",!0)])),_:1},8,["class","href","type","to","target","disabled"]))}};const Z=_;var W=Z,k={components:{BaseLevel:s,BaseButton:W,BaseButtons:m},props:{totalNumberOfPages:{type:Number},currentPage:{type:Number}},setup(){return{}}},S=l(3744);const C=(0,S.Z)(k,[["render",i]]);var D=C},5690:function(e,t,l){l.d(t,{Z:function(){return d}});l(7658);var a=l(6252),n=l(3577),o=l(2262);const i={class:"mb-6 last:mb-0"},r={key:0,class:"block font-bold mb-2"},u={key:1,class:"text-xs text-red-500 dark:text-red-400 mt-1"};var s={__name:"Field",props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const t=(0,a.Rr)(),l=(0,a.Fl)((()=>{const e=[],l=t.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return(t,s)=>((0,a.wg)(),(0,a.iD)("div",i,[e.label?((0,a.wg)(),(0,a.iD)("label",r,(0,n.zw)(e.label),1)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,n.C_)((0,o.SU)(l))},[(0,a.WI)(t.$slots,"default")],2),e.help?((0,a.wg)(),(0,a.iD)("div",u,(0,n.zw)(e.help[0].message),1)):(0,a.kq)("",!0)]))}};const c=s;var d=c},7841:function(e,t,l){l.d(t,{Z:function(){return v}});var a=l(6252),n=l(2262),o=l(3577),i=l(9963),r=l(5317),u=l(1388),s=l(6373),c=l(9890),d=l(5693),m=l(7689);const f={class:"space-y-3"},p={key:0,class:"text-2xl"};var g={__name:"ModalBox",props:{title:{type:String,default:null},largeTitle:{type:String,default:null},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:t}){const l=e,g=(0,a.Fl)({get:()=>l.modelValue,set:e=>t("update:modelValue",e)}),w=e=>{g.value=!1,t(e)},v=()=>w("confirm"),y=()=>w("cancel");return(t,l)=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(m.Z,{onOverlayClick:y},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(c.Z,{title:e.title,class:"shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50",rounded:"rounded-lg","header-icon":(0,n.SU)(r.r5M),modal:"",onHeaderIconClick:y},{default:(0,a.w5)((()=>[(0,a._)("div",f,[e.largeTitle?((0,a.wg)(),(0,a.iD)("h1",p,(0,o.zw)(e.largeTitle),1)):(0,a.kq)("",!0),(0,a.WI)(t.$slots,"default")]),(0,a.Wm)(d.Z),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{label:e.buttonLabel,color:e.button,onClick:v},null,8,["label","color"]),e.hasCancel?((0,a.wg)(),(0,a.j4)(u.Z,{key:0,label:"Cancel",color:e.button,outline:"",onClick:y},null,8,["color"])):(0,a.kq)("",!0)])),_:1})])),_:3},8,["title","header-icon"]),[[i.F8,(0,n.SU)(g)]])])),_:3},512)),[[i.F8,(0,n.SU)(g)]])}};const w=g;var v=w},6227:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=l(6252);function n(e,t){return(0,a.wg)(),(0,a.iD)("div",null,"Dashboard")}var o=l(3744);const i={},r=(0,o.Z)(i,[["render",n]]);var u=r},9433:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var a=l(6252),n=l(2262),o=l(3577),i=l(5317),r=l(7315),u=l(9890),s=l(5690),c=l(5693),d=l(7877),m=l(3002),f=l(2201);const p=(0,a._)("div",{id:"fileContent"},null,-1);var g={__name:"FileDetails",setup(e){const t=(0,f.yj)(),l=(0,n.iH)({}),g=(0,m.pm)();async function w(e){try{const{data:t}=await d.Z.get(`/files/${e}`);l.value=t,document.getElementById("fileContent").innerHTML=l.value.description}catch(t){g.error(t.message)}}return(0,a.bv)((async()=>{const e=t.params.fileId;await w(e)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{title:"File Details",icon:(0,n.SU)(i.hjO)},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{label:"File Name"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value.name),1)])),_:1}),(0,a.Wm)(c.Z),(0,a.Wm)(s.Z,{label:"File Number"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value.code),1)])),_:1}),(0,a.Wm)(c.Z),(0,a.Wm)(s.Z,{label:"File Description"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(c.Z)])),_:1},8,["icon"])])),_:1})]))}};const w=g;var v=w},4265:function(e,t,l){l.r(t),l.d(t,{default:function(){return S}});l(7658);var a=l(6252),n=l(3577),o=l(2262),i=l(7315),r=l(6291),u=l(9890),s=l(7877),c=l(7841),d=l(6373),m=l(1388),f=l(7701),p=l(5317),g=l(3002),w=l(2201);const v={"data-label":"File Name"},y={"data-label":"File Number"},h={"data-label":"Created On"},b=["title"],_={class:"actions-cell"},Z=(0,a._)("p",null,"Do you wish to delete this record?",-1);var W={__name:"ListFile",setup(e){const t=["File Name","File Number","Created On"],l=(0,w.tv)(),W=(0,o.iH)([]),k=(0,g.pm)(),S=(0,o.iH)(!1),C=(0,o.iH)("");async function D(){try{const{data:e,meta:t}=await s.Z.get("/files",{params:j});W.value=e,$.value=t}catch(e){k.error(e.detail)}}async function U(){j.page++,await D()}async function x(){j.page--,await D()}async function P(e){j.page=e,await D()}async function F(){j.page=$.value.first_page,await D()}async function B(){j.page=$.value.last_page,await D()}const $=(0,o.iH)({}),j=(0,o.qj)({page:1,limit:100}),I=(0,o.iH)(1);function V(e){s.Z["delete"](`/files/${e}`).then((e=>{k.success(e.message),D()})).catch((e=>{k.error(e.detail)}))}return(0,a.bv)((async()=>{await D()})),(e,s)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{class:"mb-6",title:"List of Files","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{theads:t},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",v,(0,n.zw)(e.name),1),(0,a._)("td",y,(0,n.zw)(e.code),1),(0,a._)("td",h,[(0,a._)("small",{class:"text-gray-500 dark:text-gray-400",title:e.createdAt},(0,n.zw)(e.createdOn),9,b)]),(0,a._)("td",_,[(0,a.Wm)(d.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{color:"info",icon:(0,o.SU)(p.rgx),small:"",onClick:t=>(0,o.SU)(l).push(`/file/${e.id}/view`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"primary",icon:(0,o.SU)(p.xyB),small:"",onClick:t=>(0,o.SU)(l).push(`/file/${e.id}/upload`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(p.QGK),small:"",onClick:t=>(S.value=!0,C.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1}),(0,a.Wm)(f.Z,{"total-number-of-pages":$.value.last_page,"current-page":I.value,onGoToFirstPage:F,onGoToLastPage:B,onGoToNextPage:U,onGoToPreviousPage:x,onGoToCurrentPage:P},null,8,["total-number-of-pages","current-page"])])),_:1})])),_:1}),(0,a.Wm)(c.Z,{modelValue:S.value,"onUpdate:modelValue":s[0]||(s[0]=e=>S.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:s[1]||(s[1]=e=>V(C.value))},{default:(0,a.w5)((()=>[Z])),_:1},8,["modelValue"])]))}};const k=W;var S=k},5200:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(6252),n=l(2262),o=l(9963),i=l(3577),r=l(7315),u=l(6291),s=l(9890),c=l(7877),d=l(7841),m=l(5690),f=l(2213),p=l(5693),g=l(6373),w=l(1388),v=l(5317),y=l(3002),h=l(2201),b=l(9443);const _={"data-label":"Document"},Z={"data-label":"Created On"},W=["title"],k={class:"actions-cell"},S=(0,a._)("p",null,"Do you wish to delete this record?",-1);var C={__name:"UploadFile",setup(e){const t=(0,h.yj)(),l=["Document","Created On"],C=(0,n.iH)([]),D=(0,y.pm)(),U=(0,n.iH)([]),x=(0,n.iH)(""),P=(0,n.iH)(!1),F=(0,n.iH)(t.params.fileId),B=(0,n.qj)({name:"",file:null});async function $(e){try{const{data:t}=await c.Z.get(`/files/${e}/documents`);C.value=t}catch(t){D.error(t.message)}}function j(e){B.file=e.target.files||e.dataTransfer.files}function I(){B.name="",B.file=null}function V(){U.value={}}async function z(){try{if(V(),!B.file)return;const e=new FormData;e.append("name",B.name),e.append("file",null==B.file[0]?null:B.file[0]);const{message:t}=await c.Z.post(`/files/${F.value}/documents`,e);D.success(t),await $(F.value),I()}catch(e){e.errors?U.value=(0,b.r)(e.errors,""):D.error(e.detail)}}function H(e){window.open(e)}async function N(e){try{const t=await c.Z["delete"](`/files/${F.value}/documents/${e}`);D.success(t.message),await $(F.value)}catch(t){D.error(t.detail)}}return(0,a.bv)((async()=>{await $(F.value)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{title:"Create File",icon:(0,n.SU)(v.hjO),form:"",onSubmit:(0,o.iM)(z,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{label:"Document Name",help:U.value.name},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{modelValue:B.name,"onUpdate:modelValue":t[0]||(t[0]=e=>B.name=e),placeholder:"Enter the name of document"},null,8,["modelValue"])])),_:1},8,["help"]),(0,a.Wm)(p.Z),(0,a.Wm)(m.Z,{label:"Document",help:U.value.file},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{type:"file",placeholder:"Enter the name of document",onChange:j})])),_:1},8,["help"]),(0,a.Wm)(p.Z),(0,a.Wm)(p.Z),(0,a.Wm)(g.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w.Z,{type:"submit",color:"info",label:"Send"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1}),(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{class:"mb-6",title:"List of Documents","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{theads:l},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(C.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",_,(0,i.zw)(e.name),1),(0,a._)("td",Z,[(0,a._)("small",{class:"text-gray-500 dark:text-gray-400",title:e.created_on},(0,i.zw)(e.created_on),9,W)]),(0,a._)("td",k,[(0,a.Wm)(g.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(w.Z,{color:"info",icon:(0,n.SU)(v.rgx),small:"",onClick:t=>H(e.url)},null,8,["icon","onClick"]),(0,a.Wm)(w.Z,{color:"danger",icon:(0,n.SU)(v.QGK),small:"",onClick:t=>(P.value=!0,x.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d.Z,{modelValue:P.value,"onUpdate:modelValue":t[1]||(t[1]=e=>P.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:t[2]||(t[2]=e=>N(x.value))},{default:(0,a.w5)((()=>[S])),_:1},8,["modelValue"])]))}};const D=C;var U=D},3412:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});var a=l(6252),n=l(2262),o=l(9963),i=l(5317),r=l(7315),u=l(9890),s=l(5690),c=l(2213),d=l(5693),m=l(1388),f=l(6373),p=l(7877),g=l(3002),w=l(2201),v=l(9443),y={__name:"InventoryDetails",setup(e){const t=(0,g.pm)(),l=(0,w.yj)(),y=(0,n.qj)({article:"",quantity:"",code:""}),h=(0,n.iH)([]);async function b(e){try{const{data:t}=await p.Z.get(`/inventories/${e}`);y.article=t.article,y.quantity=t.quantity,y.code=t.code}catch(l){t.error(l.detail)}}function _(){h.value={}}async function Z(){try{_();const e=await p.Z.put(`/inventories/${l.params.inventoryId}`,y);await b(l.params.inventoryId),t.success(e.message)}catch(e){e.errors?h.value=(0,v.r)(e.errors,"field"):t.error(e.detail)}}return(0,a.bv)((async()=>{await b(l.params.inventoryId)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{title:"Update Inventory",icon:(0,n.SU)(i.hjO),form:"",onSubmit:(0,o.iM)(Z,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{label:"Inventory Article",help:h.value.article},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{modelValue:y.article,"onUpdate:modelValue":t[0]||(t[0]=e=>y.article=e)},null,8,["modelValue"])])),_:1},8,["help"]),(0,a.Wm)(d.Z),(0,a.Wm)(s.Z,{label:"Inventory Code",help:h.value.code},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{modelValue:y.code,"onUpdate:modelValue":t[1]||(t[1]=e=>y.code=e),disabled:""},null,8,["modelValue"])])),_:1},8,["help"]),(0,a.Wm)(d.Z),(0,a.Wm)(s.Z,{label:"Inventory Quantity",help:h.value.quantity},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{modelValue:y.quantity,"onUpdate:modelValue":t[2]||(t[2]=e=>y.quantity=e)},null,8,["modelValue"])])),_:1},8,["help"]),(0,a.Wm)(d.Z),(0,a.Wm)(f.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{type:"submit",color:"info",label:"Update"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1})]))}};const h=y;var b=h},731:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});l(7658);var a=l(6252),n=l(3577),o=l(2262),i=l(7315),r=l(6291),u=l(9890),s=l(7877),c=l(7841),d=l(6373),m=l(1388),f=l(5317),p=l(3002),g=l(2201);const w={"data-label":"Inventory Article"},v={"data-label":"Inventory Code"},y={"data-label":"Inventory Quantity"},h={class:"actions-cell"},b=(0,a._)("p",null,"Do you wish to delete this record?",-1);var _={__name:"ListInventory",setup(e){const t=["Inventory Article","Inventory Code","Inventory Quantity"],l=(0,g.tv)(),_=(0,o.iH)([]),Z=(0,p.pm)(),W=(0,o.iH)(!1),k=(0,o.iH)("");async function S(){try{const{data:e}=await s.Z.get("/inventories");_.value=e}catch(e){Z.error(e.detail)}}function C(e){s.Z["delete"](`/inventories/${e}`).then((({message:e})=>{Z.success(e),S()})).catch((e=>{Z.error(e.detail)}))}return(0,a.bv)((async()=>{await S()})),(e,s)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{class:"mb-6",title:"List of Inventories","has-table":""},{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{theads:t},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",w,(0,n.zw)(e.article),1),(0,a._)("td",v,(0,n.zw)(e.code),1),(0,a._)("td",y,(0,n.zw)(e.quantity),1),(0,a._)("td",h,[(0,a.Wm)(d.Z,{type:"justify-start lg:justify-end","no-wrap":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{color:"info",icon:(0,o.SU)(f.rgx),small:"",onClick:t=>(0,o.SU)(l).push(`/inventory/${e.id}/view`)},null,8,["icon","onClick"]),(0,a.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(f.QGK),small:"",onClick:t=>(W.value=!0,k.value=e.id)},null,8,["icon","onClick"])])),_:2},1024)])])))),128))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c.Z,{modelValue:W.value,"onUpdate:modelValue":s[0]||(s[0]=e=>W.value=e),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:s[1]||(s[1]=e=>C(k.value))},{default:(0,a.w5)((()=>[b])),_:1},8,["modelValue"])]))}};const Z=_;var W=Z}}]);
//# sourceMappingURL=forms.e4d70d37.js.map