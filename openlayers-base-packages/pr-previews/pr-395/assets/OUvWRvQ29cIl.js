import{a as E,r as n,j as e,B as N,a5 as g,b as s,F,V as U,q as A,g as D,f as H}from"./CUSQ3tpKRBWk.js";import{t as B}from"./BetFYcN-W0Tq.js";import{S as V,T as q,O as W,M as $,H as X,k as y,g as Y,h as Z,l as J,m as j}from"./B9tXXDeauyCZ.js";import{_ as S}from"./CmsKOCeNyeyo.js";import{F as z,a as C,b as u,R as K}from"./CI5PcWinLFAL.js";import{a as Q,b as ee,C as oe,c as re,M as p}from"./C5tPS2gg5_OL.js";import{T as L,U as te,a as c}from"./CNtzVuFuKbXE.js";import{F as I,C as ie}from"./C4KDaKCkFISv.js";import"./B9n9qdE-9a7K.js";import"./BW9FRFOH0_53.js";const G="main";class le{mapId=G;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new V({title:"OSM",isBaseLayer:!0,olLayer:new q({source:new W})})]}}}const ne={"result-list-app":{name:"result-list-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:le,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:$,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/result-list":{name:"@open-pioneer/result-list",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:X,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},ae=':root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}.result-list-no-data-message{text-align:center;margin-top:50px;font-weight:700;font-size:larger}.result-list-table th,.result-list-table td{overflow-wrap:break-word}.result-list-table.result-list-table--is-resizing *{cursor:col-resize}.result-list-table thead{position:sticky;top:0;z-index:1;background:var(--chakra-colors-background_body)}.result-list-table th{position:relative;border-right-width:thin}.result-list-table tbody tr:hover{background:var(--chakra-colors-background_light)}.result-list-table .result-list-resizer{position:absolute;top:0;height:100%;right:0;width:8px;background:var(--chakra-colors-trails-100);transform:scaleX(.25);cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none;padding-left:0}.result-list-table th:last-child .result-list-resizer{width:8px;transform:translate(50%) scaleX(.25)}.result-list-table th .result-list-resizer.result-list-resizer--is-resizing{background:var(--chakra-colors-trails-500);transform:scale(1)}.result-list-table th .result-list-resizer:hover{transform:scale(1)}',se=["en","de"];function pe(o){switch(o){case"en":return S(()=>import("./CWewJjE-xeCE.js"),[],import.meta.url).then(i=>i.default);case"de":return S(()=>import("./BbSw8Fldfnox.js"),[],import.meta.url).then(i=>i.default)}throw new Error(`Unsupported locale: '${o}'`)}const ce=E(ae),de=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:pe,locales:se,packages:ne,styles:ce},Symbol.toStringTag,{value:"Module"})),M=400;function ue(){const[o,i]=n.useState(0),[r,x]=n.useState(),[T,m]=n.useState(!1),[d,R]=n.useState(!1),[h,_]=n.useState("multi"),[v,f]=n.useState("checkbox"),w=!!r&&T,a=l=>{x(l),m(!0),i(o+1)},k=n.useMemo(()=>{if(!r||!d)return r;const l=r.columns.filter((b,P)=>P%2==1);return{...r,columns:l}},[d,r]);return e.jsx(y,{height:"100%",direction:"column",overflow:"hidden",children:e.jsx(Y,{title:e.jsx(N,{textAlign:"center",py:1,children:e.jsx(Z,{size:"md",children:"OpenLayers Base Packages - Result List"})}),children:e.jsxs(y,{flex:"1",direction:"column",position:"relative",children:[e.jsxs(J,{mapId:G,viewPadding:{bottom:w?M:0},children:[e.jsx(j,{position:"top-left",horizontalGap:10,verticalGap:10,children:e.jsx(N,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:e.jsxs(g,{children:[e.jsx(L,{align:"center",children:"Test Controls:"}),e.jsxs(Q,{placement:"right-end",children:[e.jsx(ee,{as:s,rightIcon:e.jsx(oe,{}),children:"Fill result list"}),e.jsx(F,{children:e.jsxs(re,{children:[e.jsx(p,{onClick:()=>a(he),children:"Persons"}),e.jsx(p,{onClick:()=>a(Ne),children:"Custom render"}),e.jsx(p,{onClick:()=>a(be),children:"Generated"}),e.jsx(p,{onClick:()=>a(Le),children:"Long Strings"}),e.jsx(p,{onClick:()=>a(Oe),children:"Many Columns"})]})})]}),e.jsxs(s,{onClick:()=>R(!d),children:[d?"Show":"Hide"," even columns"]}),e.jsx(s,{isDisabled:r===void 0,onClick:()=>m(!0),children:"Show result list"}),e.jsx(s,{onClick:()=>m(!1),children:"Hide result list"}),e.jsx(s,{isDisabled:r===void 0,onClick:()=>x(void 0),children:"Close result list"}),e.jsxs(I,{children:[e.jsx(z,{children:"Selection mode"}),e.jsx(C,{value:h,onChange:l=>{const b=l;_(b),f(b==="single"?"radio":"checkbox")},children:e.jsxs(g,{direction:"row",children:[e.jsx(u,{value:"single",children:"Single"}),e.jsx(u,{value:"multi",children:"Multi"})]})})]}),e.jsxs(I,{children:[e.jsx(z,{children:"Selection style"}),e.jsx(C,{value:v,onChange:l=>{f(l)},children:e.jsxs(g,{direction:"row",children:[e.jsx(u,{value:"radio",isDisabled:h==="multi",children:"Radio"}),e.jsx(u,{value:"checkbox",children:"Checkbox"})]})})]})]})})}),e.jsx(j,{position:"top-right",horizontalGap:10,verticalGap:10,children:e.jsxs(U,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",maxHeight:"300px",overflow:"auto",children:[e.jsx(L,{as:"b",children:"Description"}),e.jsx(L,{children:"This application can be used to test the result list component. Internally, this application keeps track of the current result list input and displays it when the component shall be shown."}),e.jsxs(te,{children:[e.jsx(c,{children:"If the result list has been filled, it can be hidden and shown again while preserving the state (selection, sort, scroll, ...)."}),e.jsx(c,{children:"The result list is embedded with a fixed height (with internal scrolling) above the map (using view padding). Showing or hiding the component will animate the view."}),e.jsx(c,{children:"Toggling columns will preserve the state of the result list."}),e.jsx(c,{children:"Filling the result list again resets the state (even when using equal data)."}),e.jsx(c,{children:"Fully closing the result list drops all state."})]})]})})]}),k&&e.jsx(N,{position:"absolute",visibility:w?"visible":"hidden",bottom:"0",backgroundColor:"white",width:"100%",height:`${M}px`,borderTop:"2px solid",borderColor:"trails.500",zIndex:1,children:e.jsx(K,{mapId:G,input:k,selectionMode:h,selectionStyle:v},String(o))})]})})})}let me=1;function t(o,i,r){return{id:String(me++),properties:{name:o,age:i,city:r}}}const he={data:[t("Test User A",21,"Cologne"),t("Test User B",33,"Berlin"),t("Test User C",44,"New York"),t("Test User D",55,"London"),t("Test User E",8,"Rome"),t("Test User F",14,"Vienna"),t("Test User G",17,"Paris"),t("Test User H",27,"Brussels"),t("Test User I",19,"Warsaw")],columns:[{displayName:"id",getPropertyValue(o){return o.id}},{propertyName:"name"},{propertyName:"age"},{propertyName:"city"}]},be={data:Array.from(Array(100).keys()).map(o=>({id:o,properties:{boolean:o%2==0,empty:o%2==0?null:void 0,number:o,float:o/7,string:`Item ${o}`,date:new Date}})),columns:[{propertyName:"boolean"},{propertyName:"number"},{propertyName:"float"},{propertyName:"string"},{propertyName:"date"},{propertyName:"empty"}],formatOptions:{numberOptions:{maximumFractionDigits:2},dateOptions:{timeStyle:"full",dateStyle:"full",timeZone:"UTC"}}},Ne={data:[{id:1,properties:{bool:!0}},{id:2,properties:{bool:!1}},{id:3,properties:{bool:void 0}}],columns:[{displayName:"id (with tooltip)",getPropertyValue(o){return o.id},renderCell({feature:o}){return e.jsx(ge,{id:o.id})}},{displayName:"boolean as checkbox (read only)",propertyName:"bool",renderCell({value:o}){return e.jsx(ie,{isIndeterminate:o===void 0,isChecked:!!o})}}]};function ge(o){return e.jsx(A,{label:`tooltip for feature ${o.id}`,placement:"top",children:e.jsx(D.span,{children:o.id})})}const Le={data:[{id:1,properties:{short:"Short 1",long:"LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG "}},{id:2,properties:{short:"Short 2",long:"LONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONG"}}],columns:[{propertyName:"short"},{propertyName:"long",width:300}]},Oe={columns:[{propertyName:"a"},{propertyName:"b"},{propertyName:"c"},{propertyName:"d"},{propertyName:"e"},{propertyName:"f"},{propertyName:"g"},{propertyName:"h"},{propertyName:"i"}],data:[{id:0,properties:{a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1}}]},Ge=new URLSearchParams(window.location.search),O=Ge.get("lang"),xe=H({component:ue,theme:B,appMetadata:de,config:{locale:O==="de"||O==="en"?O:void 0}});customElements.define("result-list-app",xe);
