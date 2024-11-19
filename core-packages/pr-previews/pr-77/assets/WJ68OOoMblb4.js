import{h as N,l as C,r as s,j as e,n as E,a as k,S as m,H as R,O as T,b as _}from"./BbD1ObBocF77.js";import{N as B,a as I}from"./Bk5Lz2At5WtH.js";import{u as z}from"./BG7f7T4POdrF.js";import{T as A,C as M}from"./DiI0-Y_JDvy-.js";import{a as q,B as x}from"./C9L897yljxNO.js";import{C as w}from"./C9CafZahHNwS.js";import{T as F}from"./Ddf4mYqhSsPi.js";import{F as h}from"./DCmbPgooq4UU.js";import{F as v}from"./Di3rdG8Xs0Gt.js";import{I as G}from"./DUWS-ykArEfP.js";import{S as H}from"./X2feasIkX6s8.js";import"./UN9yAB02F1-Z.js";import"./Bux-xGeHLEc6.js";const D={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},L={horizontal:o=>({"& > *:not(style) ~ *:not(style)":{marginStart:o}}),vertical:o=>({"& > *:not(style) ~ *:not(style)":{marginTop:o}})},g=N(function(a,u){const{size:r,colorScheme:c,variant:n,className:d,spacing:l="0.5rem",isAttached:p,isDisabled:f,orientation:i="horizontal",...t}=a,y=C("chakra-button__group",d),j=s.useMemo(()=>({size:r,colorScheme:c,variant:n,isDisabled:f}),[r,c,n,f]);let S={display:"inline-flex",...p?D[i]:L[i](l)};const b=i==="vertical";return e.jsx(q,{value:j,children:e.jsx(E.div,{ref:u,role:"group",__css:S,className:y,"data-attached":p?"":void 0,"data-orientation":i,flexDir:b?"column":void 0,...t})})});g.displayName="ButtonGroup";const O={"notify-app":{name:"notify-app",services:{},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:B,provides:[{name:"notifier.NotificationService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}}},P="",U=[];function K(o){throw new Error(`Unsupported locale: '${o}'`)}const V=k(P),W=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:K,locales:U,packages:O,styles:V},Symbol.toStringTag,{value:"Module"})),$="notify-app",J=z.bind(void 0,$);function Q(){const o=J("notifier.NotificationService"),[a,u]=s.useState(""),[r,c]=s.useState("info"),[n,d]=s.useState(""),[l,p]=s.useState(!1),f=()=>{const t={title:a,level:r,message:n,displayDuration:l?5e3:void 0};if(!t.title){o.notify({title:"Title is required",level:"error"});return}o.notify(t)},i=()=>{o.closeAll()};return e.jsxs(e.Fragment,{children:[e.jsx(I,{position:"top-right"}),e.jsx(w,{p:5,children:e.jsxs(m,{spacing:8,children:[e.jsxs(m,{align:"center",children:[e.jsx(R,{as:"h1",children:"Notify Sample"}),e.jsx(F,{children:"Use the form below to emit notifications."})]}),e.jsx(T,{rounded:"lg",boxShadow:"lg",p:8,children:e.jsxs(m,{spacing:4,children:[e.jsxs(h,{isRequired:!0,children:[e.jsx(v,{children:"Title"}),e.jsx(G,{type:"text",value:a,onChange:t=>u(t.target.value)})]}),e.jsxs(h,{isRequired:!0,children:[e.jsx(v,{children:"Level"}),e.jsxs(H,{value:r,onChange:t=>{c(t.target.value)},children:[e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"info",children:"Info"}),e.jsx("option",{value:"warning",children:"Warning"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs(h,{children:[e.jsx(v,{children:"Message"}),e.jsx(A,{placeholder:"Enter additional message",value:n,onChange:t=>d(t.target.value)})]}),e.jsx(M,{isChecked:l,onChange:t=>p(t.target.checked),children:"Hide after 5 seconds"}),e.jsxs(g,{justifyContent:"center",children:[e.jsx(x,{flex:"1",onClick:f,children:"Emit Notification"}),e.jsx(x,{flex:"1",variant:"cancel",onClick:i,children:"Clear notifications"})]})]})})]})})]})}const X=_({component:Q,appMetadata:W});customElements.define("notify-app",X);
