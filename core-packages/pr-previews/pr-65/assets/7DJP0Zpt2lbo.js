import{h as N,l as C,r as s,j as e,n as E,a as k,b as B}from"./TPYeaapTGx7_.js";import{N as R,a as T}from"./CfuNDmIQ5OgW.js";import{u as _}from"./DhqDjCx3KfSo.js";import{T as I,C as z}from"./SJyQKD_ZfzJs.js";import{a as A,B as x}from"./DNWYN7eJVXnX.js";import{C as M,H as q}from"./D1Sci3GlWtRv.js";import{S as m}from"./DgA7AagU4KUc.js";import{T as w}from"./C_n2VYN17ba7.js";import{B as F}from"./CNRzintQbXCF.js";import{F as h}from"./DvvZma9Rlx3X.js";import{F as v}from"./LSHbVwbN1RK9.js";import{I as G}from"./CS4DoGJKqW3U.js";import{S as H}from"./BDQ-NOMY2w20.js";import"./CS84EUs3PvWx.js";import"./Bux-xGeHLEc6.js";const D={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},L={horizontal:o=>({"& > *:not(style) ~ *:not(style)":{marginStart:o}}),vertical:o=>({"& > *:not(style) ~ *:not(style)":{marginTop:o}})},g=N(function(a,u){const{size:r,colorScheme:c,variant:n,className:d,spacing:l="0.5rem",isAttached:p,isDisabled:f,orientation:i="horizontal",...t}=a,y=C("chakra-button__group",d),j=s.useMemo(()=>({size:r,colorScheme:c,variant:n,isDisabled:f}),[r,c,n,f]);let S={display:"inline-flex",...p?D[i]:L[i](l)};const b=i==="vertical";return e.jsx(A,{value:j,children:e.jsx(E.div,{ref:u,role:"group",__css:S,className:y,"data-attached":p?"":void 0,"data-orientation":i,flexDir:b?"column":void 0,...t})})});g.displayName="ButtonGroup";const P={"notify-app":{name:"notify-app",services:{},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:R,provides:[{name:"notifier.NotificationService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}}},U="",O=[];function K(o){throw new Error(`Unsupported locale: '${o}'`)}const V=k(U),W=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:K,locales:O,packages:P,styles:V},Symbol.toStringTag,{value:"Module"})),$="notify-app",J=_.bind(void 0,$);function Q(){const o=J("notifier.NotificationService"),[a,u]=s.useState(""),[r,c]=s.useState("info"),[n,d]=s.useState(""),[l,p]=s.useState(!1),f=()=>{const t={title:a,level:r,message:n,displayDuration:l?5e3:void 0};if(!t.title){o.notify({title:"Title is required",level:"error"});return}o.notify(t)},i=()=>{o.closeAll()};return e.jsxs(e.Fragment,{children:[e.jsx(T,{position:"top-right"}),e.jsx(M,{p:5,children:e.jsxs(m,{spacing:8,children:[e.jsxs(m,{align:"center",children:[e.jsx(q,{as:"h1",children:"Notify Sample"}),e.jsx(w,{children:"Use the form below to emit notifications."})]}),e.jsx(F,{rounded:"lg",boxShadow:"lg",p:8,children:e.jsxs(m,{spacing:4,children:[e.jsxs(h,{isRequired:!0,children:[e.jsx(v,{children:"Title"}),e.jsx(G,{type:"text",value:a,onChange:t=>u(t.target.value)})]}),e.jsxs(h,{isRequired:!0,children:[e.jsx(v,{children:"Level"}),e.jsxs(H,{value:r,onChange:t=>{c(t.target.value)},children:[e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"info",children:"Info"}),e.jsx("option",{value:"warning",children:"Warning"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs(h,{children:[e.jsx(v,{children:"Message"}),e.jsx(I,{placeholder:"Enter additional message",value:n,onChange:t=>d(t.target.value)})]}),e.jsx(z,{isChecked:l,onChange:t=>p(t.target.checked),children:"Hide after 5 seconds"}),e.jsxs(g,{justifyContent:"center",children:[e.jsx(x,{flex:"1",onClick:f,children:"Emit Notification"}),e.jsx(x,{flex:"1",variant:"cancel",onClick:i,children:"Clear notifications"})]})]})})]})})]})}const X=B({component:Q,appMetadata:W});customElements.define("notify-app",X);
