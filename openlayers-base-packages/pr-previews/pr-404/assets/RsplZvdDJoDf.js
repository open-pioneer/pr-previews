import{j as e,a as _,S as w,r as p,b as I,p as k,B as u,D as B,f as R}from"./D3OchF5tz_JL.js";import{t as T}from"./D9QYJF_czqWA.js";import{S as O,T as N,O as F,H,M as q,u as D,k as m,i as Z,D as $,g as V,l as W,m as G,h as U}from"./B_v8iqUKZusO.js";import{_ as K}from"./CmsKOCeNyeyo.js";import{c as C}from"./ICvFkUXNF0VB.js";import{I as y,S as j,g as J}from"./CU8oifTzXOca.js";const Q=C({displayName:"ArrowRightIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),e.jsx("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})}),X=C({displayName:"ArrowLeftIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),e.jsx("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})}),A="main";class Y{mapId=A;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new O({title:"OSM",isBaseLayer:!0,olLayer:new N({source:new F})})]}}}const ee={"sidebar-app":{name:"sidebar-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:Y,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:q,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/experimental-layout-sidebar":{name:"@open-pioneer/experimental-layout-sidebar",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:H,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/reactivity":{name:"@open-pioneer/reactivity",services:{},ui:{references:[]},properties:{}}},oe='.layout-sidebar{z-index:99}:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}.layout-sidebar{height:100%;position:absolute;top:0}.layout-sidebar[data-theme=light]{background-color:var(--chakra-colors-whiteAlpha-700)}.layout-sidebar[data-theme=dark]{background-color:var(--chakra-colors-blackAlpha-700)}.layout-sidebar .layout-sidebar-main{transition:width .3s ease-out 0s;border-right:1px solid var(--chakra-colors-chakra-border-color)}.layout-sidebar .layout-sidebar-content{overflow:auto;transition:width .3s ease-out 0s}.layout-sidebar .layout-sidebar-content .content-section .content-header{font-size:1.5em;background-color:var(--chakra-colors-blackAlpha-500);padding:.5rem 1rem}.layout-sidebar .layout-sidebar-content .content-section .content-body{padding:1rem}',re=["en"];function te(l){switch(l){case"en":return K(()=>import("./BIbDu0DJPL_e.js"),[],import.meta.url).then(s=>s.default)}throw new Error(`Unsupported locale: '${l}'`)}const ae=_(oe),ie=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:te,locales:re,packages:ee,styles:ae},Symbol.toStringTag,{value:"Module"})),le="@open-pioneer/experimental-layout-sidebar",ne=D.bind(void 0,le),z=60,S=180,M=300;function se({defaultExpanded:l,expandedChanged:s,sidebarWidthChanged:n,items:c}){const t=ne(),[i,{toggle:a}]=ce(c),{isOpen:r,onToggle:b}=w({defaultIsOpen:l,onOpen(){s?.(!0)},onClose(){s?.(!1)}}),{isOpen:d,onToggle:h}=w(),g=i.size>0;p.useEffect(()=>{g&&!d&&h(),!g&&d&&h()},[g]),p.useEffect(()=>{if(n){let o=z;r&&(o=S),d&&(o+=M),n(o)}},[r,d]);const E=c?.map((o,P)=>{const v="white",f=i.has(o.id)?"outline":"ghost";return e.jsx("div",{children:r?e.jsx(I,{leftIcon:o.icon,variant:f,colorScheme:v,onClick:()=>a(o),children:o.label},o.id):e.jsx(k,{hasArrow:!0,label:o.label,placement:"right",children:e.jsx(y,{"aria-label":o.label,variant:f,colorScheme:v,icon:o.icon,onClick:()=>a(o)})},o.id)},P)}),L=c?.filter(o=>i.has(o.id)).map(o=>e.jsxs("div",{className:"content-section",children:[e.jsxs(m,{className:"content-header",alignItems:"center",children:[e.jsx(u,{children:o.label}),e.jsx(j,{}),e.jsx(B,{onClick:()=>a(o)})]}),e.jsx("div",{className:"content-body",children:o.content})]},o.id)),x=t.formatMessage({id:r?"toggle.collapse":"toggle.expand"});return e.jsxs(m,{className:"layout-sidebar",children:[e.jsxs(u,{className:"layout-sidebar-main",display:"flex",flexDirection:"column",width:r?`${S}px`:`${z}px`,padding:"10px",gap:"10px",children:[E,e.jsx(j,{}),e.jsx(k,{label:x,hasArrow:!0,placement:"right",children:e.jsx(y,{"aria-label":x,variant:"ghost",icon:r?e.jsx(X,{}):e.jsx(Q,{}),onClick:b})})]}),e.jsx(u,{className:"layout-sidebar-content",width:d?`${M}px`:"0px",children:L})]})}function ce(l){const[s,n]=p.useReducer((t,i)=>{switch(i.type){case"toggle":{const a=new Set(t);return a.has(i.id)?a.delete(i.id):a.add(i.id),a}case"retain":{const a=new Set(i.ids),r=new Set(t);for(const b of r)a.has(b)||r.delete(b);return r}}},void 0,()=>new Set),c=p.useCallback(t=>{n({type:"toggle",id:t.id})},[n]);return p.useEffect(()=>{n({type:"retain",ids:l?.map(t=>t.id)??[]})},[l,n]),[s,{toggle:c}]}const pe=[796987,5827477,796987,5827477];function de(){const[l,s]=p.useState(),[n,c]=p.useState(!0),{map:t}=Z(A),i=()=>{const r=t?.olMap;r&&r?.getView().fit(pe,{maxZoom:13})},a=[{id:"sandbox",icon:e.jsx(J,{}),label:"Sandbox",content:e.jsx(I,{onClick:i,children:"Center Berlin"})}];return t&&e.jsx($,{map:t,children:e.jsx(m,{height:"100%",direction:"column",overflow:"hidden",children:e.jsx(V,{title:e.jsx(u,{textAlign:"center",py:1,px:1,children:e.jsx(U,{size:"md",children:"Sidebar sample"})}),children:e.jsxs(m,{flex:"1",direction:"column",position:"relative",children:[e.jsx(se,{defaultExpanded:n,expandedChanged:r=>c(r),sidebarWidthChanged:r=>s({left:r}),items:a}),e.jsx(W,{viewPadding:l,viewPaddingChangeBehavior:"preserve-extent",children:e.jsx(G,{position:"top-left",horizontalGap:10,verticalGap:10,children:e.jsx(u,{backgroundColor:"whiteAlpha.800",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:"This is a sample for a sidebar component."})})})]})})})})}const ue=R({component:de,theme:T,appMetadata:ie});customElements.define("sidebar-app",ue);
