import{j as e,a as r,b as o}from"./BbD1ObBocF77.js";function t(){return e.jsxs("div",{className:"sample-component-with-css",children:["The text in this div should be ",e.jsx("strong",{children:"RED"})," because it is styled using external css."]})}const i={"styling-app":{name:"styling-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"styling-sample-components":{name:"styling-sample-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},p=".sample-component-with-css{color:red;font-size:1.25em}",c=[];function a(s){throw new Error(`Unsupported locale: '${s}'`)}const n=r(p),l=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:a,locales:c,packages:i,styles:n},Symbol.toStringTag,{value:"Module"})),m=o({component:t,appMetadata:l});console.log(`CSS:

${n.value}`);customElements.define("styling-app",m);
