import{x as u,v as y,y as _,b as d,j as e,aa as m,ab as C,z as b,Z as P,U as S,X as k,Y as R,W as p,_ as E}from"./CJq6SW5weRuF.js";import{_ as l,a as M,u as f}from"./BMsyZnFybHIZ.js";import{H as L,B as A}from"./Cyb-6CZS67cp.js";const h=u("div",{base:{display:"flex",alignItems:"center",justifyContent:"center"},variants:{inline:{true:{display:"inline-flex"}}}});h.displayName="Center";const{withProvider:I,withContext:x,useStyles:J,PropsProvider:Q}=y({key:"list"}),T=I("ul","root",{defaultProps:{role:"list"}}),s=x("li","item");x("span","indicator");const{useRecipeResult:w,PropsProvider:ee}=_({key:"separator"}),N=d.forwardRef(function(n,o){const{styles:a,className:i,props:r}=w(n),c=n.orientation||"horizontal";return e.jsx(u.span,{ref:o,role:m(c)?"separator":"presentation","aria-orientation":m(c)?c:void 0,...C(r,["orientation"]),className:b(i,n.className),css:[a,n.css]})}),G=d.forwardRef(function(n,o){return e.jsx(P,{align:"center",...n,direction:"column",ref:o})}),D={"i18n-app":{name:"i18n-app",services:{},ui:{references:[{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"i18n-sample-package":{name:"i18n-sample-package",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}}},H="",O=["de","en","de-simple"];function U(t){switch(t){case"de":return l(()=>import("./CVEPn1OX0dMY.js"),[],import.meta.url).then(n=>n.default);case"en":return l(()=>import("./CpxcYkkJOozD.js"),[],import.meta.url).then(n=>n.default);case"de-simple":return l(()=>import("./D02xQxr8Ohom.js"),[],import.meta.url).then(n=>n.default)}throw new Error(`Unsupported locale: '${t}'`)}const V=S(H),z=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:U,locales:O,packages:D,styles:V},Symbol.toStringTag,{value:"Module"})),g="i18n-app",j=M.bind(void 0,g),v=f.bind(void 0,g),B="i18n-sample-package",$=f.bind(void 0,B);function K(){const t=$();return e.jsxs("div",{children:["Greeting: ",t.formatMessage({id:"greeting"})]})}function q(){const t=v(),n=j("runtime.ApplicationContext"),o=n.getLocale(),a=n.getSupportedLocales(),i="Müller",r=["Hans","Peter","Hape"];return e.jsxs(k,{children:[e.jsx(R,{size:"lg",mb:4,children:t.formatMessage({id:"content.header"})}),e.jsx(p,{mb:4,children:t.formatMessage({id:"content.description"})}),e.jsxs(T,{mb:4,children:[e.jsxs(s,{children:["Current locale: ",o]}),e.jsxs(s,{children:["Supported locales: ",a.join(", ")]}),e.jsxs(s,{children:["Current date and time:"," ",t.formatDate(new Date,{dateStyle:"full",timeStyle:"short"})]}),e.jsxs(s,{children:["Relative Time - 1:"," ",t.formatRelativeTime(1,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(s,{children:["Relative Time - 15:"," ",t.formatRelativeTime(15,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(s,{children:["Relative Time - 0:"," ",t.formatRelativeTime(0,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(s,{children:["Large number (Currency):"," ",t.formatNumber(123456789e-2,{style:"currency",currency:"EUR"})]}),e.jsxs(s,{children:["Large number (Unit):"," ",t.formatNumber(123456789e-2,{style:"unit",unit:"kilogram-per-second"})]}),e.jsxs(s,{children:["Plural - Count 0: ",t.formatMessage({id:"content.testplural"},{n:0})]}),e.jsxs(s,{children:["Plural - Count 1: ",t.formatMessage({id:"content.testplural"},{n:1})]}),e.jsxs(s,{children:["Plural - Count 2: ",t.formatMessage({id:"content.testplural"},{n:2})]}),e.jsxs(s,{children:["List: ",t.formatList(r,{type:"conjunction"})]}),e.jsxs(s,{children:["Gender - female:"," ",t.formatMessage({id:"content.testgender"},{gender:"female",name:i})]}),e.jsxs(s,{children:["Gender - male:"," ",t.formatMessage({id:"content.testgender"},{gender:"male",name:i})]}),e.jsxs(s,{children:["Gender - other:"," ",t.formatMessage({id:"content.testgender"},{gender:"other",name:i})]})]}),e.jsx(h,{mb:4,children:e.jsx(W,{})}),e.jsx(N,{my:4}),e.jsxs(p,{mb:4,children:["This component is from another package which does ",e.jsx("em",{children:"not"})," support de-simple by itself:"]}),e.jsx(K,{})]})}function W(){const t=j("runtime.ApplicationContext"),n=v(),o=t.getSupportedLocales(),a=r=>e.jsx(A,{onClick:()=>t.setLocale(r),children:r??n.formatMessage({id:"picker.default"})},r??""),i=o.map(r=>a(r));return i.unshift(a(void 0)),e.jsxs(G,{children:[e.jsx(p,{children:n.formatMessage({id:"picker.choose"})}),e.jsx(L,{gap:2,children:i})]})}const X=E({component:q,appMetadata:z});customElements.define("i18n-app",X);
