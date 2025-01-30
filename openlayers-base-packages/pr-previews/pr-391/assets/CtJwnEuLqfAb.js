var w=t=>{throw TypeError(t)};var x=(t,e,o)=>e.has(t)||w("Cannot "+o);var l=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),u=(t,e,o,r)=>(x(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);import{a as j,r as y,j as n,B as g,V as R,f as A}from"./B60Dx_GOYdnk.js";import{bO as T,at as G,bP as E,S as s,T as M,O,bM as W,bN as q,b as I,a as P,M as B,H,u as N,k as b,g as k,h as S,l as U,m as h}from"./j0mck_Meu7Xh.js";import{W as C,b as V}from"./BLfEaHvmX9OI.js";import{G as D,e as F,T as K}from"./D0_7QMwEwHiI.js";import{_}from"./CmsKOCeNyeyo.js";import{T as z}from"./BKR6R-cAnIXt.js";import"./2C0geDG_OBHU.js";import"./BWf1FusGPLsb.js";import"./ajAX9OmvUsbZ.js";import"./DSjrbd_eKbZM.js";import"./BpQSjk0kyblh.js";import"./vepZWq5kkQUw.js";import"./C9VJq5Ka7299.js";import"./BXfBNJYYR7xb.js";import"./CMfwYEDRd35m.js";import"./BlACKGYldMfy.js";import"./CG5nmvkyugDn.js";var d;class $ extends T{constructor(o){const r=o.layers,c=new G({layers:r.map(i=>i.olLayer)});super({...o,olLayer:c});m(this,d);u(this,d,new J(r,this))}get type(){return"group"}get legend(){}get layers(){return l(this,d)}get sublayers(){}get olLayer(){return super.olLayer}__attachToMap(o){super.__attachToMap(o),this.layers.__getRawLayers().forEach(r=>r.__attachToMap(o))}}d=new WeakMap;var a,p;class J{constructor(e,o){m(this,a);m(this,p);e=e.slice();for(const r of e)if(r instanceof T)r.__attachToGroup(o);else throw new Error(`Layer '${r.id}' of group '${o.id}' does not implement abstract class '${E.name}`);u(this,a,e),u(this,p,o)}destroy(){for(const e of l(this,a))e.__detachFromGroup(),e.destroy();u(this,a,[])}getItems(e){return this.getLayers(e)}getLayers(e){return l(this,a).slice()}getAllChildLayers(e=l(this,p)){if(e.type!=="group")return[e];if(e.layers.getLayers().length===0)return[];let o=[];return e.layers.getLayers().forEach(r=>o=o.concat(this.getAllChildLayers(r))),o}__getRawLayers(){return l(this,a)}__getParent(){return l(this,p)}}a=new WeakMap,p=new WeakMap;const L=$,f="main";class Y{mapId=f;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},projection:"EPSG:25832",layers:[new s({id:"topplus_open",title:"TopPlus Open",isBaseLayer:!0,visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_openERROR/1.0.0/WMTSCapabilities.xml",olLayer:v("web")}),new s({id:"topplus_open_grau",title:"TopPlus Open (Grau)",isBaseLayer:!0,visible:!1,healthCheck:async()=>{function e(o){return new Promise(r=>setTimeout(r,o))}return await e(2e3),"error"},olLayer:v("web_grau")}),new s({id:"topplus_open_light",title:"TopPlus Open (Light)",isBaseLayer:!0,visible:!1,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:v("web_light")}),new s({title:"OSM",visible:!1,isBaseLayer:!0,olLayer:new M({source:new O})}),new L({id:"group_edu",title:"Bildung",layers:[new s({title:"Kindertagesstätten",id:"kitas",visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:Q()}),X()]}),new L({title:"Verkehr",id:"group_transport",layers:[new s({title:"Haltestellen Stadt Rostock",id:"bustops",visible:!0,description:"Haltestellen des öffentlichen Personenverkehrs in der Hanse- und Universitätsstadt Rostock.",olLayer:Z()}),ee()]})]}}}function v(t){const e=[-380316598427299e-8,880590808284866e-8],o=[4891.96981025128,2445.98490512564,1222.99245256282,611.49622628141,305.748113140705,152.874056570353,76.4370282851763,38.2185141425881,19.1092570712941,9.55462853564703,4.77731426782352,2.38865713391176,1.19432856695588,.59716428347794],r=new Array(o.length);for(let i=0;i<o.length;i++)r[i]=i;const c=new W({url:`https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/${t}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png`,layer:"web_grau",matrixSet:"EU_EPSG_25832_TOPPLUS",format:"image/png",projection:"EPSG:25832",requestEncoding:"REST",tileGrid:new q({origin:e,resolutions:o,matrixIds:r}),style:"default",attributions:`Kartendarstellung und Präsentationsgraphiken: © Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html" target="_blank">Datenquellen</a>`});return new M({source:c})}function Z(){const t=new I({url:"https://geo.sv.rostock.de/download/opendata/haltestellen/haltestellen.json",format:new D,attributions:"Haltestellen Stadt Rostock, Creative Commons CC Zero License (cc-zero)"});return new P({source:t})}function Q(){const t=new I({url:"https://ogc-api.nrw.de/inspire-us-kindergarten/v1/collections/governmentalservice/items?f=json&limit=10000",format:new D,attributions:'&copy; <a href="http://www.bkg.bund.de" target="_blank">Bundesamt f&uuml;r Kartographie und Geod&auml;sie</a> 2017, <a href="http://sg.geodatenzentrum.de/web_public/Datenquellen_TopPlus_Open.pdf" target="_blank">Datenquellen</a>'});return new P({source:t})}function X(){return new C({title:"Schulstandorte",id:"schools",description:"Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.",visible:!0,healthCheck:async()=>{function t(e){return new Promise(o=>setTimeout(o,e))}return await t(3e3),"error"},url:"https://www.wms.nrw.de/wms/wms_nw_inspire-schulen",sublayers:[{name:"US.education",title:"INSPIRE - WMS Schulstandorte NRW"}],sourceOptions:{ratio:1}})}function ee(){return new C({title:"Straßennetz Landesbetrieb Straßenbau NRW",url:"https://www.wms.nrw.de/wms/strassen_nrw_wms",sublayers:[{name:"1",title:"Verwaltungen"},{name:"4",title:"Abschnitte und Äste"},{name:"6",title:"Unfälle"}]})}const oe={"toc-map":{name:"toc-map",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:Y,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:B,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/map-ui-components":{name:"@open-pioneer/map-ui-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:H,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/toc":{name:"@open-pioneer/toc",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/reactivity":{name:"@open-pioneer/reactivity",services:{},ui:{references:[]},properties:{}}},te=':root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}',re=["en","de"];function ne(t){switch(t){case"en":return _(()=>import("./fVMMSzaG1pJC.js"),[],import.meta.url).then(e=>e.default);case"de":return _(()=>import("./B4zYxydVGHQe.js"),[],import.meta.url).then(e=>e.default)}throw new Error(`Unsupported locale: '${t}'`)}const ae=j(te),le=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ne,locales:re,packages:oe,styles:ae},Symbol.toStringTag,{value:"Module"})),ie="toc-map",se=N.bind(void 0,ie);function pe(){const t=se(),e=y.useId(),[o,r]=y.useState(!0);function c(){r(!o)}return n.jsx(b,{height:"100%",direction:"column",overflow:"hidden",children:n.jsx(k,{title:n.jsx(g,{role:"region","aria-label":t.formatMessage({id:"ariaLabel.header"}),textAlign:"center",py:1,children:n.jsx(S,{size:"md",children:"OpenLayers Base Packages - TOC and Health Check Sample"})}),children:n.jsx(b,{flex:"1",direction:"column",children:n.jsxs(U,{mapId:f,role:"main","aria-label":t.formatMessage({id:"ariaLabel.map"}),children:[n.jsx(h,{position:"top-left",horizontalGap:10,verticalGap:10,children:o&&n.jsx(g,{backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",width:350,children:o&&n.jsx(g,{role:"dialog","aria-labelledby":e,children:n.jsx(k,{title:n.jsx(S,{id:e,size:"md",mb:2,children:t.formatMessage({id:"tocTitle"})}),children:n.jsx(F,{mapId:f,showTools:!0,basemapSwitcherProps:{allowSelectingEmptyBasemap:!0},collapsibleGroups:!0,initiallyCollapsed:!0})})})})}),n.jsx(h,{position:"top-right",horizontalGap:10,verticalGap:10,children:n.jsxs(R,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[n.jsx(z,{as:"b",children:"Description"}),n.jsxs(z,{children:["This application can be used to test the TOC, including health checks for configured layers. Two base layers (",'"',"TopPlus Open",'"'," and ",'"',"TopPlus Open (Grau)",'"',") and one operational layer (",'"',"Schulstandorte",'"',") will be unavailable and should be marked as such by the UI."]})]})}),n.jsx(h,{position:"bottom-right",horizontalGap:10,verticalGap:45,children:n.jsx(b,{role:"toolbar","aria-label":t.formatMessage({id:"ariaLabel.toolbar"}),direction:"column",gap:1,padding:1,children:n.jsx(K,{label:t.formatMessage({id:"tocTitle"}),icon:n.jsx(V,{}),isActive:o,onClick:c})})})]})})})})}const ce=A({component:pe,appMetadata:le,async resolveConfig(t){const e=t.getAttribute("forced-locale");if(e)return{locale:e}}});customElements.define("toc-map-app",ce);const ue=document.getElementsByTagName("body")[0];de();function de(){const t=window.location.search,o=new URLSearchParams(t).get("lang"),r=document.createElement("toc-map-app");r.classList.add("full-height"),r.classList.add("app"),r.setAttribute("id","test"),o&&r.setAttribute("forced-locale",o),ue.appendChild(r)}
