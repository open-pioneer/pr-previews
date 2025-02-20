var w=o=>{throw TypeError(o)};var x=(o,e,t)=>e.has(o)||w("Cannot "+t);var i=(o,e,t)=>(x(o,e,"read from private field"),t?t.call(o):e.get(o)),m=(o,e,t)=>e.has(o)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),c=(o,e,t,r)=>(x(o,e,"write to private field"),r?r.call(o,t):e.set(o,t),t);import{a as R,r as y,j as n,B as g,V as j,f as G}from"./J_WxYcBzn5mw.js";import{bT as T,at as A,bU as E,bV as O,S as s,T as M,O as B,bR as W,bS as q,b as I,a as P,M as H,H as N,u as U,k as b,g as k,h as S,l as V,m as h}from"./DxJrGzLGIgSO.js";import{W as D}from"./D5KP_VBhLzE-.js";import{G as C,T as F}from"./DVfhPCZEmrQW.js";import{_}from"./CmsKOCeNyeyo.js";import{T as $}from"./DKgfFDX81OcI.js";import{b as K}from"./Bqgh0cxm7WgE.js";import{T as z}from"./D3XN4wcwGfw6.js";import"./B6iw593KCf_N.js";import"./B-tmLLQVIv8F.js";import"./C8eT9SIUWJMh.js";import"./D5SQLjy-_82v.js";import"./BYfhXZxVx1YD.js";import"./Bsm_k7AFhNln.js";import"./BWb0wtYlb2uY.js";import"./LWD6knZ_CBe3.js";import"./B2FYvygtgI3E.js";import"./lrHVDRQRo2nL.js";import"./CH-qNRSPhMHS.js";import"./C8cP88sgBYZM.js";import"./uuuD2LZFgwH5.js";import"./CejOUL_G37Oz.js";import"./XBL9D10fr7gH.js";var u;class J extends T{constructor(t){const r=t.layers,p=new A({layers:r.map(l=>l.olLayer)});super({...t,olLayer:p});m(this,u);c(this,u,new Y(r,this))}get type(){return"group"}get legend(){}get layers(){return i(this,u)}get sublayers(){}get olLayer(){return super.olLayer}__attachToMap(t){super.__attachToMap(t),this.layers.__getRawLayers().forEach(r=>r.__attachToMap(t))}}u=new WeakMap;var a,d;class Y{constructor(e,t){m(this,a);m(this,d);e=e.slice();for(const r of e)if(r instanceof T){if(r.isBaseLayer)throw new Error(`Layer '${r.id}' of group '${t.id}' is marked as base layer. Layers that belong to a group layer cannot be a base layer.`);r.__attachToGroup(t)}else throw new Error(`Layer '${r.id}' of group '${t.id}' does not implement abstract class '${E.name}`);c(this,a,e),c(this,d,t)}destroy(){for(const e of i(this,a))e.__detachFromGroup(),e.destroy();c(this,a,[])}getItems(e){return this.getLayers(e)}getLayers(e){return i(this,a).slice()}getRecursiveLayers(e){return O({from:this,sortByDisplayOrder:e?.sortByDisplayOrder,filter:e?.filter})}__getRawLayers(){return i(this,a)}__getParent(){return i(this,d)}}a=new WeakMap,d=new WeakMap;const L=J,f="main";class Z{mapId=f;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},projection:"EPSG:25832",layers:[new s({id:"topplus_open",title:"TopPlus Open",isBaseLayer:!0,visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_openERROR/1.0.0/WMTSCapabilities.xml",olLayer:v("web")}),new s({id:"topplus_open_grau",title:"TopPlus Open (Grau)",isBaseLayer:!0,visible:!1,healthCheck:async()=>{function e(t){return new Promise(r=>setTimeout(r,t))}return await e(2e3),"error"},olLayer:v("web_grau")}),new s({id:"topplus_open_light",title:"TopPlus Open (Light)",isBaseLayer:!0,visible:!1,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:v("web_light")}),new s({title:"OSM",visible:!1,isBaseLayer:!0,olLayer:new M({source:new B})}),new L({id:"group_edu",title:"Bildung",layers:[new s({title:"Kindertagesstätten",id:"kitas",visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:X()}),ee()]}),new L({title:"Verkehr",id:"group_transport",layers:[new s({title:"Haltestellen Stadt Rostock",id:"bustops",visible:!0,description:"Haltestellen des öffentlichen Personenverkehrs in der Hanse- und Universitätsstadt Rostock.",olLayer:Q(),isBaseLayer:!1}),oe()]})]}}}function v(o){const e=[-380316598427299e-8,880590808284866e-8],t=[4891.96981025128,2445.98490512564,1222.99245256282,611.49622628141,305.748113140705,152.874056570353,76.4370282851763,38.2185141425881,19.1092570712941,9.55462853564703,4.77731426782352,2.38865713391176,1.19432856695588,.59716428347794],r=new Array(t.length);for(let l=0;l<t.length;l++)r[l]=l;const p=new W({url:`https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/${o}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png`,layer:"web_grau",matrixSet:"EU_EPSG_25832_TOPPLUS",format:"image/png",projection:"EPSG:25832",requestEncoding:"REST",tileGrid:new q({origin:e,resolutions:t,matrixIds:r}),style:"default",attributions:`Kartendarstellung und Präsentationsgraphiken: © Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html" target="_blank">Datenquellen</a>`});return new M({source:p})}function Q(){const o=new I({url:"https://geo.sv.rostock.de/download/opendata/haltestellen/haltestellen.json",format:new C,attributions:"Haltestellen Stadt Rostock, Creative Commons CC Zero License (cc-zero)"});return new P({source:o})}function X(){const o=new I({url:"https://ogc-api.nrw.de/inspire-us-kindergarten/v1/collections/governmentalservice/items?f=json&limit=10000",format:new C,attributions:'&copy; <a href="http://www.bkg.bund.de" target="_blank">Bundesamt f&uuml;r Kartographie und Geod&auml;sie</a> 2017, <a href="http://sg.geodatenzentrum.de/web_public/Datenquellen_TopPlus_Open.pdf" target="_blank">Datenquellen</a>'});return new P({source:o})}function ee(){return new D({title:"Schulstandorte",id:"schools",description:"Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.",visible:!0,healthCheck:async()=>{function o(e){return new Promise(t=>setTimeout(t,e))}return await o(3e3),"error"},url:"https://www.wms.nrw.de/wms/wms_nw_inspire-schulen",sublayers:[{name:"US.education",title:"INSPIRE - WMS Schulstandorte NRW"}],sourceOptions:{ratio:1}})}function oe(){return new D({title:"Straßennetz Landesbetrieb Straßenbau NRW",url:"https://www.wms.nrw.de/wms/strassen_nrw_wms",sublayers:[{name:"1",title:"Verwaltungen"},{name:"4",title:"Abschnitte und Äste"},{name:"6",title:"Unfälle"}]})}const te={"toc-map":{name:"toc-map",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:Z,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:H,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/map-ui-components":{name:"@open-pioneer/map-ui-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:N,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/toc":{name:"@open-pioneer/toc",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/reactivity":{name:"@open-pioneer/reactivity",services:{},ui:{references:[]},properties:{}}},re=':root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}',ne=["en","de"];function ae(o){switch(o){case"en":return _(()=>import("./fVMMSzaG1pJC.js"),[],import.meta.url).then(e=>e.default);case"de":return _(()=>import("./B4zYxydVGHQe.js"),[],import.meta.url).then(e=>e.default)}throw new Error(`Unsupported locale: '${o}'`)}const le=R(re),ie=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ae,locales:ne,packages:te,styles:le},Symbol.toStringTag,{value:"Module"})),se="toc-map",pe=U.bind(void 0,se);function ce(){const o=pe(),e=y.useId(),[t,r]=y.useState(!0);function p(){r(!t)}return n.jsx(b,{height:"100%",direction:"column",overflow:"hidden",children:n.jsx(k,{title:n.jsx(g,{role:"region","aria-label":o.formatMessage({id:"ariaLabel.header"}),textAlign:"center",py:1,children:n.jsx(S,{size:"md",children:"OpenLayers Base Packages - TOC and Health Check Sample"})}),children:n.jsx(b,{flex:"1",direction:"column",children:n.jsxs(V,{mapId:f,role:"main","aria-label":o.formatMessage({id:"ariaLabel.map"}),children:[n.jsx(h,{position:"top-left",horizontalGap:10,verticalGap:10,children:t&&n.jsx(g,{backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",width:350,children:t&&n.jsx(g,{role:"dialog","aria-labelledby":e,children:n.jsx(k,{title:n.jsx(S,{id:e,size:"md",mb:2,children:o.formatMessage({id:"tocTitle"})}),children:n.jsx($,{mapId:f,showTools:!0,basemapSwitcherProps:{allowSelectingEmptyBasemap:!0},collapsibleGroups:!0,initiallyCollapsed:!0})})})})}),n.jsx(h,{position:"top-right",horizontalGap:10,verticalGap:10,children:n.jsxs(j,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[n.jsx(z,{as:"b",children:"Description"}),n.jsxs(z,{children:["This application can be used to test the TOC, including health checks for configured layers. Two base layers (",'"',"TopPlus Open",'"'," and ",'"',"TopPlus Open (Grau)",'"',") and one operational layer (",'"',"Schulstandorte",'"',") will be unavailable and should be marked as such by the UI."]})]})}),n.jsx(h,{position:"bottom-right",horizontalGap:10,verticalGap:45,children:n.jsx(b,{role:"toolbar","aria-label":o.formatMessage({id:"ariaLabel.toolbar"}),direction:"column",gap:1,padding:1,children:n.jsx(F,{label:o.formatMessage({id:"tocTitle"}),icon:n.jsx(K,{}),isActive:t,onClick:p})})})]})})})})}const ue=G({component:ce,appMetadata:ie,async resolveConfig(o){const e=o.getAttribute("forced-locale");if(e)return{locale:e}}});customElements.define("toc-map-app",ue);const de=document.getElementsByTagName("body")[0];me();function me(){const o=window.location.search,t=new URLSearchParams(o).get("lang"),r=document.createElement("toc-map-app");r.classList.add("full-height"),r.classList.add("app"),r.setAttribute("id","test"),t&&r.setAttribute("forced-locale",t),de.appendChild(r)}
