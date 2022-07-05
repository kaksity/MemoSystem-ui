(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[747],{8533:function(e,t,n){"use strict";var r=n(2092).forEach,u=n(9341),a=u("forEach");e.exports=a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},9826:function(e,t,n){"use strict";var r=n(2109),u=n(2092).find,a=n(1223),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},4747:function(e,t,n){var r=n(7854),u=n(8324),a=n(8509),i=n(8533),l=n(8880),o=function(e){if(e&&e.forEach!==i)try{l(e,"forEach",i)}catch(t){e.forEach=i}};for(var s in u)u[s]&&o(r[s]&&r[s].prototype);o(a)},5690:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6252),u=n(3577),a=n(2262),i={class:"mb-6 last:mb-0"},l={key:0,class:"block font-bold mb-2"},o={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},s={props:{label:{type:String,default:null},help:{type:String,default:null}},setup:function(e){var t=(0,r.Rr)(),n=(0,r.Fl)((function(){var e=[],n=t.default().length;return n>1&&e.push("grid grid-cols-1 gap-3"),2===n&&e.push("md:grid-cols-2"),e}));return function(t,s){return(0,r.wg)(),(0,r.iD)("div",i,[e.label?((0,r.wg)(),(0,r.iD)("label",l,(0,u.zw)(e.label),1)):(0,r.kq)("",!0),(0,r._)("div",{class:(0,u.C_)((0,a.SU)(n))},[(0,r.WI)(t.$slots,"default")],2),e.help?((0,r.wg)(),(0,r.iD)("div",o,(0,u.zw)(e.help),1)):(0,r.kq)("",!0)])}}};const c=s;var f=c},3221:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(8534),u=(n(9826),n(1539),n(4747),n(8309),n(5666),n(6252)),a=n(2262),i=n(9963),l=n(3577),o=n(5317),s=n(7315),c=n(9890),f=n(5690),p=n(2213),d=n(5693),m=n(1388),v=n(8146),g=n(8400),h=n(3002),b={key:0,class:"bg-opacity-50 p-3 dark:bg-gray-800"},w=["onClick"],k={setup:function(e){var t=(0,a.iH)([]),n=(0,h.pm)(),k=(0,a.iH)(null),y=(0,a.iH)([]),x=(0,a.iH)({}),Z=(0,a.qj)({receipients:null,message:"",title:""});function _(){y.value=[],Z.message="",Z.title="",k.value.setHTML("")}function W(){var e=y.value.find((function(e){return e.receipient===x.value.id}));e||y.value.push({receipient:x.value.id,name:x.value.label})}function S(e){var t=[];y.value.forEach((function(n){n.receipient!==e&&t.push(n)})),y.value=t}function U(){return C.apply(this,arguments)}function C(){return C=(0,r.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("/users");case 3:r=e.sent,r.data.forEach((function(e){t.value.push({id:e.id,label:e.fullName})})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),C.apply(this,arguments)}(0,u.bv)((0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:case"end":return e.stop()}}),e)}))));var E=function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,0!==y.value.length){e.next=6;break}return n.error("You must select atleast 1 receipient"),e.abrupt("return");case 6:if(""!==Z.title){e.next=11;break}return n.error("Message Title is required"),e.abrupt("return");case 11:if(""!==Z.message){e.next=14;break}return n.error("Message Content is required"),e.abrupt("return");case 14:return Z.receipients=y,e.next=17,g.Z.post("/messages",Z);case 17:t=e.sent,n.success(t.message),_(),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),n.error(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}();return function(e,n){var r=(0,u.up)("QuillEditor");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(s.Z,null,{default:(0,u.w5)((function(){return[(0,u.Wm)(c.Z,{title:"Create Message",icon:(0,a.SU)(o.hjO),form:"",onSubmit:(0,i.iM)(E,["prevent"])},{default:(0,u.w5)((function(){return[(0,u.Wm)(f.Z,{label:"Receipient"},{default:(0,u.w5)((function(){return[(0,u.Wm)(p.Z,{modelValue:x.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return x.value=e}),options:t.value,onChange:W},null,8,["modelValue","options"])]})),_:1}),y.value.length?((0,u.wg)(),(0,u.iD)("div",b,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(y.value,(function(e){return(0,u.wg)(),(0,u.iD)("span",{key:e.receipient,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm dark:bg-gray-700 light:bg-gray-300"},[(0,u.Uk)((0,l.zw)(e.name)+" ",1),(0,u._)("span",null,[(0,u._)("button",{class:"inline-block bg-red-700 p-1 rounded-sm mr-2 text-white-700",onClick:function(t){return S(e.receipient)}},"X",8,w)])])})),128))])):(0,u.kq)("",!0),(0,u.Wm)(d.Z),(0,u.Wm)(f.Z,{label:"Message Title"},{default:(0,u.w5)((function(){return[(0,u.Wm)(p.Z,{modelValue:(0,a.SU)(Z).title,"onUpdate:modelValue":n[1]||(n[1]=function(e){return(0,a.SU)(Z).title=e})},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(d.Z),(0,u.Wm)(f.Z,{label:"Message Content"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r,{ref_key:"editor",ref:k,content:(0,a.SU)(Z).message,"onUpdate:content":n[2]||(n[2]=function(e){return(0,a.SU)(Z).message=e}),theme:"snow","content-type":"html",toolbar:"full"},null,8,["content"])]})),_:1}),(0,u.Wm)(d.Z),(0,u.Wm)(v.Z,null,{default:(0,u.w5)((function(){return[(0,u.Wm)(m.Z,{type:"submit",color:"info",label:"Send"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1})])}}};const y=k;var x=y}}]);
//# sourceMappingURL=747-legacy.e951066c.js.map