import{j as e,a as o,b as r}from"./CxFa1ww1TkZU.js";function t(){return e.jsxs("div",{className:"sample-component-with-css",children:["The text in this div should be ",e.jsx("strong",{children:"RED"})," because it is styled using external css."]})}const p={"styling-app":{name:"styling-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"styling-sample-components":{name:"styling-sample-components",services:{},ui:{references:[]},properties:{}}},i=".sample-component-with-css{color:red;font-size:1.25em}",c=[];function a(n){throw new Error(`Unsupported locale: '${n}'`)}const s=o(i),l=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:a,locales:c,packages:p,styles:s},Symbol.toStringTag,{value:"Module"})),m=r({component:t,appMetadata:l});console.log(`CSS:

${s.value}`);customElements.define("styling-app",m);
