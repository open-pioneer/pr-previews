import{j as o,g as I,a as O,r as v,B as f,S as w,b as t,V as W,f as F}from"./BeGW3nmX4tO2.js";import{S as U,T as G,O as T,M as B,H as N,c as i,aB as k,ax as l,F as y,i as Q,an as h,am as m,k as A,g as E,h as V,l as K,m as z}from"./q4MLRk0u7kxl.js";import{L as j}from"./D3gFeNVkNTAB.js";import{T as u,U as q,a}from"./DM7y0OoBz9e5.js";import{C as Y}from"./ElmKiM7bxWM_.js";import{H as d}from"./D1wuBnUV5g92.js";import"./BMuX_dt1qyjL.js";const M=r=>o.jsx(I.div,{className:"chakra-stack__divider",...r,__css:{...r.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});M.displayName="StackDivider";const b="main";class J{mapId=b;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new U({title:"OSM",isBaseLayer:!0,olLayer:new G({source:new T})})]}}}const X={"highlight-and-zoom-app":{name:"highlight-and-zoom-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:J,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:B,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:N,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},_=':root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}',$=[];function oo(r){throw new Error(`Unsupported locale: '${r}'`)}const eo=O(_),ro=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:oo,locales:$,packages:X,styles:eo},Symbol.toStringTag,{value:"Module"})),C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM6SURBVGhD7Zn7TtRAFMZn2l2MRuWuBg2aGEX/MMLCC5iUx/UJ6CNw0WiiRBFBJaLAilyMbNvxO8tpgkDbM9MxarK/ZNPvdJfpt6dnznQW1aOHDM1Hb1x9PrvYSEx/YNQlijOtDpOG3v3+eK7V/YAnvBgfWozeKKPGYbCPT51LMzE/8UXW2634Pp9yppbxgaXZl4ExE0moG3xKRCM1nSzQy98m5x7xKWucjQ8vRO87DX2bQydwB9a2p+M7HFrhZHxkPto8auprHNair2O+bs3E1mMFfBSDTH/wZZrAWKMYc41DMVbGBxejZZTHLQ69gTHHB5eiVxyKsDKOCXWPpXeM1hMsRYiN02Q02n/fz0Gb1HQNDisRG88CZVUiYWYyenEoAubF1xBlkFZDHKaOo3KaHbOxPRPf5LDL8Hz0qdPUYxyWghVW5EmUcZgZZVkKlvp3p00TdI56NoelDC1EqyxLERlHCgZYFoLVMNmZju9yeAZaaMLUpBwWgmecIZaliIwblCzLQoJMHbIsJMzUD5aFSK5FiCengA4fyzjiYxn+ahwjVZpCq7zMshB0jcrP4FoJy1KkGa+8xVj9LrAspOqxl0CpHLAsRWQczxMbLEtBRygsBTyzS8pEoW1+ZlmKqJ4I9HIkQwae+DbTULUhdZiqAXzx68fvVOO1jxO0e2FZCRlNA/0Arwkb01gvKksyR2wck+8jyz9GFqp1lpWIS4WwKRcXpGVCiDNOoHb3WHoHY++wFGFlHPW6wtI72L4NsxRhZRy3cgqZ2efQGxhzi6UYqxrP8V3rNrWdY5XxHGToC8vaoM2KO8lJnDJO9D+bzepu5fCYm7RbcZNDK5wyTgSZecvSmTTUL1haUytj2JId4tniIodWUPuz7SQnqWWccJmo2iizOznnfLeJWn9M0D6TpRhtjNWPP+dRO+PEyHy0h8WpcpNAoEQ2USI3OHTGi3FCUjLdDbVjFzlN7VLJCTPzmmUhT1ux00Q+D2/G21PxQyoDDs+AubDyRLiflOCtVHLQIg/QIrv//8nBF3L6DbwM78aJwaUowe6n+/sITO/D9JXuG/8DNFmxeRZv9/4ZNsbGfiuXHj3+Ckr9AhPaF/aBpAV7AAAAAElFTkSuQmCC";function io(){const{map:r}=Q(b),n=v.useRef(new Map),[S,R]=v.useState(!1),H=[new h([852011.307424,6788511322702e-6]),new h([829800.379064,6809086916672e-6])],P=[new j([[851890.680238,6788133616293e-6],[851298.293269,6790235634571e-6],[853419.420804,6790407617885e-6]]),new j([[848107.047338,6790579601198e-6],[849081.619449,6793197569417e-6]])],L=[new m([[[851728.251553,6788384425292e-6],[851518.049725,6788651954891e-6],[852182.096409,6788881265976e-6],[851728.251553,6788384425292e-6]]]),new m([[[845183.331006,6794496998898e-6],[850132.628588,6794764528497e-6],[850629.469272,6791707047365e-6],[844399.851466,6791229315939e-6],[845183.331006,6794496998898e-6]]])],D=[new h([852011.307424,6788511322702e-6]),new m([[[845183.331006,6794496998898e-6],[850132.628588,6794764528497e-6],[850629.469272,6791707047365e-6],[844399.851466,6791229315939e-6],[845183.331006,6794496998898e-6]]])];function c(e,x,g){if(e&&!n.current.has(g))if(S){const s=e.highlightAndZoom(x,{highlightStyle:to});s&&n.current.set(g,s)}else{const s=e.highlightAndZoom(x,{});s&&n.current.set(g,s)}}function p(e){n.current.has(e)&&(n.current.get(e)?.destroy(),n.current.delete(e))}function Z(e){e&&(e.removeHighlights(),n.current=new Map)}return o.jsx(A,{height:"100%",direction:"column",overflow:"hidden",children:o.jsx(E,{title:o.jsx(f,{textAlign:"center",py:1,children:o.jsx(V,{size:"md",children:"OpenLayers Base Packages - Highlight and Zoom"})}),children:o.jsx(A,{flex:"1",direction:"column",position:"relative",children:o.jsxs(K,{mapId:b,children:[o.jsx(z,{position:"top-left",horizontalGap:10,verticalGap:10,children:o.jsxs(f,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:[o.jsx(u,{align:"center",children:"Test Controls:"}),o.jsx(w,{align:"center",divider:o.jsx(M,{borderColor:"gray.200"}),pt:5,children:o.jsx(Y,{onChange:e=>{R(e.target.checked)},children:"Own Style"})}),o.jsxs(w,{pt:5,children:[o.jsxs(d,{align:"center",children:[o.jsx(t,{width:105,onClick:()=>c(r,H,"point"),children:"Points"}),o.jsx(t,{onClick:()=>p("point"),children:"Remove"})]}),o.jsxs(d,{children:[o.jsx(t,{width:105,onClick:()=>c(r,P,"line"),children:"LineString"}),o.jsx(t,{onClick:()=>p("line"),children:"Remove"})]}),o.jsxs(d,{children:[o.jsx(t,{width:105,onClick:()=>c(r,L,"polygon"),children:"Polygons"}),o.jsx(t,{onClick:()=>p("polygon"),children:"Remove"})]}),o.jsxs(d,{children:[o.jsx(t,{width:105,onClick:()=>c(r,D,"mix"),children:"Mixed"}),o.jsx(t,{onClick:()=>p("mix"),children:"Remove"})]}),o.jsx(t,{onClick:()=>Z(r),children:"Reset All"})]})]})}),o.jsx(z,{position:"top-right",horizontalGap:10,verticalGap:10,children:o.jsxs(W,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[o.jsx(u,{as:"b",children:"Description"}),o.jsx(u,{children:"This application can be used to test adding highlight or marker, zoom to their extent, and removing highlight and marker. The highlight and zoom for point, line string and polygon geometries in two different styles can be tested."}),o.jsxs(q,{children:[o.jsxs(a,{children:["Clicking on ","'Points'"," adds markers for point geometries."]}),o.jsxs(a,{children:["Clicking on ","'LineString'"," adds highlight for linestring geometries."]}),o.jsxs(a,{children:["Clicking on ","'Polygon'"," adds highlight for polygon geometries."]}),o.jsxs(a,{children:["Clicking on ","'Mixed'"," adds highlight for geometries of different types."]}),o.jsxs(a,{children:["Clicking on ","'Remove'"," will remove the marker or highlight added by the button on the left."]}),o.jsxs(a,{children:["Clicking on ","'Reset All'"," removes all highlights and markers from the map."]}),o.jsxs(a,{children:["Clicking on ","'Own Style'"," activates highlighting with customstyle."]})]})]})})]})})})})}const to={Point:new i({image:new k({anchor:[.5,1],src:C})}),MultiPoint:new i({image:new k({anchor:[.5,1],src:C})}),LineString:[new i({stroke:new l({color:"#ff0000",width:5})}),new i({stroke:new l({color:"#ff0000",width:3})})],MultiLineString:[new i({stroke:new l({color:"#ff0000",width:5})}),new i({stroke:new l({color:"#ff0000",width:3})})],Polygon:[new i({stroke:new l({color:"#ff0000",width:5})}),new i({stroke:new l({color:"#ff0000",width:3}),fill:new y({color:"rgba(51, 171, 71,0.35)"})})],MultiPolygon:[new i({stroke:new l({color:"#ff0000",width:5})}),new i({stroke:new l({color:"#ff0000",width:3}),fill:new y({color:"rgba(51, 171, 71,0.35)"})})]},lo=F({component:io,appMetadata:ro});customElements.define("highlight-and-zoom-app",lo);
