import{a as k,c as y,r as p,j as e,B as c,S as z,b as m,V as g,f as S}from"./BeGW3nmX4tO2.js";import{t as j}from"./BITOzfKCAZEE.js";import{S as I,T as C,O as M,M as P,H as L,f as R,i as _,k as b,g as E,h as A,l as T,m as s}from"./q4MLRk0u7kxl.js";import{P as H,N as q,I as N}from"./BMa7TTlUnkcm.js";import{_ as v}from"./CmsKOCeNyeyo.js";import{T as i,U,a as h}from"./DM7y0OoBz9e5.js";import"./UlulYB4e5zqK.js";import"./D3gFeNVkNTAB.js";const d="main";class O{mapId=d;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new I({title:"OSM",isBaseLayer:!0,olLayer:new C({source:new M})})]}}}const F={"printing-api-app":{name:"printing-api-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:O,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"printing.PrintingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:P,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:L,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/printing":{name:"@open-pioneer/printing",services:{PrintingServiceImpl:{name:"PrintingServiceImpl",clazz:H,provides:[{name:"printing.PrintingService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1},{name:"printing.PrintingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:q,provides:[{name:"notifier.NotificationService",qualifier:"notifier.NotificationService"}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}}},G=':root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}.printing-overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;-webkit-user-select:none;user-select:none;pointer-events:all;cursor:wait;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#b4b4b4cc}.printing-overlay-status{flex:1 1 auto;font-size:1.5em;text-align:center}.printing-scale-bar.ol-scale-bar{left:var(--printing-scale-bar-left);bottom:var(--printing-scale-bar-bottom)}',D=["en","de"];function B(o){switch(o){case"en":return v(()=>import("./-jAncdI_g-d4.js"),[],import.meta.url).then(r=>r.default);case"de":return v(()=>import("./1YhbJ59n8_2l.js"),[],import.meta.url).then(r=>r.default)}throw new Error(`Unsupported locale: '${o}'`)}const V=k(G),W=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:B,locales:D,packages:F,styles:V},Symbol.toStringTag,{value:"Module"})),K="printing-api-app",$=R.bind(void 0,K),J=y("printing");function Q(){const{map:o}=_(d),r=$("printing.PrintingService"),[t,n]=p.useState(void 0),f=async()=>{u("canvas")},x=async()=>{u("png")},u=async w=>{o&&await r.printMap(o.olMap).then(a=>{const l=a.getCanvas();w==="canvas"?(l.style.width="100%",l.style.height="100%",n(l)):n(a.getPNGDataURL(.6))},a=>{J.error(a)})};return e.jsx(b,{height:"100%",direction:"column",overflow:"hidden",children:e.jsx(E,{title:e.jsx(c,{textAlign:"center",py:1,children:e.jsx(A,{size:"md",children:"OpenLayers Base Packages - Printing API"})}),children:e.jsx(b,{flex:"1",direction:"column",position:"relative",children:e.jsxs(T,{mapId:d,children:[e.jsx(s,{position:"top-left",horizontalGap:10,verticalGap:10,children:e.jsx(c,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:e.jsxs(z,{pt:5,children:[e.jsx(i,{align:"center",children:"Test Controls:"}),e.jsx(m,{onClick:()=>f(),children:"Canvas"}),e.jsx(m,{onClick:()=>x(),children:"Image data URL"})]})})}),e.jsx(s,{position:"top-right",horizontalGap:10,verticalGap:10,children:e.jsxs(g,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",maxHeight:"300px",overflow:"auto",children:[e.jsx(i,{as:"b",children:"Description"}),e.jsx(i,{children:"This application can be used to test the printing service. The service provides the screenshot of the given map view in a form of HTMLCanvasElement or a data url."}),e.jsxs(U,{children:[e.jsxs(h,{children:["Clicking on the ","'Canvas'"," button shows the HTMLCanvasElement of the map view embedded in another HTMLElement."]}),e.jsxs(h,{children:["Clicking on the ","'Image data URL'"," button shows the data url of the map view image used as source for HTMLImageElement."]})]})]})}),e.jsx(s,{position:"top-right",horizontalGap:450,verticalGap:10,children:t&&e.jsx(g,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",className:"result-display",maxWidth:"600",maxHeight:"500",children:e.jsx(X,{input:t})})})]})})})})}function X(o){const r=typeof o.input=="string"?o.input:void 0,t=r&&e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"b",children:"Image from data URL"}),e.jsx(N,{src:r})]}),n=typeof o.input!="string"?e.jsx(Y,{canvas:o.input}):void 0;return t||n}function Y(o){const r=p.useRef(null);return p.useEffect(()=>{if(!r.current)return;const t=r.current;return t.appendChild(o.canvas),()=>{t.removeChild(o.canvas)}},[o.canvas]),e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"b",children:"Image from canvas"}),e.jsx(c,{ref:r})]})}const Z=new URLSearchParams(window.location.search),ee=Z.get("lang"),oe=S({component:Q,config:{locale:ee??void 0},theme:j,appMetadata:W});customElements.define("printing-api-app",oe);
