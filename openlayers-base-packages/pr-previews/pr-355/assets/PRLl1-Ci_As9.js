import{a as c,j as e,B as a,e as l}from"./CzUo6bX8-UUU.js";import{C as p}from"./DfjlrXSmDfH9.js";import{C as m}from"./CdXIVWNpc0nj.js";import{H as u}from"./_YjaCHRtWzU8.js";import{V as h,T as r,U as d,a as t}from"./CovJx79h1x39.js";import{M as x}from"./C41Ku2EWcQEd.js";import{a as f,b as j,M as s}from"./DgJGd2MHfhXI.js";import"./SSUBJAaBGB7g.js";const k={"menu-fix-app":{name:"menu-fix-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},g="",M=[];function b(n){throw new Error(`Unsupported locale: '${n}'`)}const C=c(g),v=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:b,locales:M,packages:k,styles:C},Symbol.toStringTag,{value:"Module"}));function S(){return e.jsx(e.Fragment,{children:e.jsxs(m,{p:5,children:[e.jsxs(u,{children:[o({title:"Closes on select",closeOnSelect:!0}),o({title:"Does not close on select",closeOnSelect:!1})]}),e.jsxs(h,{mt:5,align:"start",spacing:2,children:[e.jsx(r,{as:"b",children:"Description"}),e.jsxs(r,{children:["This application is used to test Chakra-UI menus inside a Shadow DOM. Patches against Chakra","'","s ",e.jsx("code",{children:"Menu"})," component and"," ",e.jsx("code",{children:"useOutsideClick()"})," hooks ensure that the component behaves as expected:"]}),e.jsxs(d,{children:[e.jsx(t,{children:"Both menu buttons should behave normally when clicking them multiple times (first click on button opens menu; second click hides it again)."}),e.jsx(t,{children:"Both menus close when the user clicks outside."}),e.jsx(t,{children:"The first menu should close by itself if some menu item is clicked."}),e.jsxs(t,{children:["The second menu should ",e.jsx("em",{children:"not"})," close itself if an item is clicked."]})]})]})]})})}function o(n){const i=()=>{};return e.jsxs(x,{closeOnSelect:n.closeOnSelect??!0,onClose:i,children:[e.jsx(f,{as:a,rightIcon:e.jsx(p,{}),children:n.title}),e.jsxs(j,{children:[e.jsx(s,{children:"Download"}),e.jsx(s,{children:"Create a Copy"}),e.jsx(s,{children:"Mark as Draft"}),e.jsx(s,{children:"Delete"}),e.jsx(s,{children:"Attend a Workshop"})]})]})}const O=l({component:S,appMetadata:v});customElements.define("menu-fix-app",O);
