import{j as t,B as d,c as q,a as B,r as p,b as I,i as U,d as K,e as A,F as $,f as Z}from"./BeGW3nmX4tO2.js";import{V as Y,S as j,T as J,O as X,a as C,b as N,c as Q,C as ee,F as te,r as T,d as D,e as oe,w as re,H as ie,M as ne,u as ae,f as se,g as v,h as x,i as z,j as M,k as y,D as le,l as ce,m as pe}from"./q4MLRk0u7kxl.js";import{W as V,P as de,a as ue,b as me,c as ge,d as he,e as fe,f as be,g as ve,h as xe}from"./DKlkM3Rq-R3t.js";import{W as R,E as we,V as Se,S as ye,O as ke,C as Me,a as je,b as Ce,L as ze,T as Le,c as _e,M as Pe,d as Ie,e as Ae,P as Te,N as De}from"./DGhUv0o7O6Gy.js";import{G as O,u as Re,T as h,P as Ee,a as Fe,b as qe,c as Ne,d as Ve,e as Oe}from"./Bh6kFNuDWsIw.js";import{T as L}from"./DM7y0OoBz9e5.js";import{N as He,P as Ge}from"./BMa7TTlUnkcm.js";import{V as We,S as Be,I as Ue,Z as Ke,a as $e}from"./DTvtLMAVxi8t.js";import{_ as E}from"./CmsKOCeNyeyo.js";import{u as b,D as Ze}from"./BOXMyqr06QWb.js";import{H}from"./D1wuBnUV5g92.js";import{R as Ye}from"./BknMP--fbInd.js";import{C as Je}from"./DVoKYMLD67a4.js";import"./N6gwA50uHdd6.js";import"./UlulYB4e5zqK.js";import"./D3gFeNVkNTAB.js";import"./39a3VBatk_eA.js";import"./Dc3xe-fbgKeJ.js";import"./BMuX_dt1qyjL.js";import"./cMbQJw1ZoqBe.js";import"./uLM-EaCyc6aA.js";import"./ElmKiM7bxWM_.js";import"./Gw82v5PUNK8h.js";import"./B3on_k3411E6.js";const Xe={height:"25px",width:"25px",borderColor:"#4cb3ff",borderWidth:"3px",borderRadius:"50%",display:"inline-block "};function Qe(r){return t.jsxs(d,{children:[t.jsx(L,{children:r.layer.title}),t.jsx(d,{style:Xe})]})}const _="main";class et{mapId=_;vectorSourceFactory;constructor(e){this.vectorSourceFactory=e.references.vectorSourceFactory}async getMapConfig(){return{advanced:{view:new Y({center:[404747,5757920],zoom:13,constrainResolution:!0,projection:"EPSG:25832"})},layers:[...tt(),it(),ot(this.vectorSourceFactory),rt(),nt()]}}}function tt(){return[new R({isBaseLayer:!0,title:"Topplus grau",url:"https://www.wmts.nrw.de/topplus_open/1.0.0/WMTSCapabilities.xml",name:"topplus_grau",matrixSet:"EPSG_25832_14",visible:!1,sourceOptions:{attributions:`Kartendarstellung und Präsentationsgraphiken: &copy; Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a title="Datenquellen öffnen" aria-label="Datenquellen öffnen" href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html " target="_blank">Datenquellen</a>`}}),new R({isBaseLayer:!0,title:"Topplus farbig",url:"https://www.wmts.nrw.de/topplus_open/1.0.0/WMTSCapabilities.xml",name:"topplus_col",matrixSet:"EPSG_25832_14",visible:!0,sourceOptions:{attributions:`Kartendarstellung und Präsentationsgraphiken: &copy; Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a title="Datenquellen öffnen" aria-label="Datenquellen öffnen" href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html " target="_blank">Datenquellen</a>`}}),new j({title:"OpenStreetMaps",visible:!1,isBaseLayer:!0,olLayer:new J({source:new X})})]}function ot(r){const e="https://ogc-api-test.nrw.de/inspire-us-krankenhaus/v1",o="governmentalservice",i=r.createVectorSource({strategy:"next",baseUrl:e,collectionId:o,limit:1e3,crs:"http://www.opengis.net/def/crs/EPSG/0/25832",attributions:`Land NRW (${new Date().getFullYear()}), <a href='https://www.govdata.de/dl-de/by-2-0'>Datenlizenz Deutschland - Namensnennung - Version 2.0</a>, <a href='https://ogc-api-test.nrw.de/inspire-us-krankenhaus/v1'>Datenquelle</a>`}),n=new C({source:i});return new j({id:"krankenhaus",title:"Krankenhäuser",visible:!1,olLayer:n,attributes:{collectionURL:e+"/collections/"+o}})}function rt(){return new V({title:"Schulstandorte",description:"Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.",visible:!0,url:"https://www.wms.nrw.de/wms/wms_nw_inspire-schulen",sublayers:[{name:"US.education",title:"INSPIRE - WMS Schulstandorte NRW",attributes:{legend:{}}}],sourceOptions:{ratio:1}})}function it(){return new V({title:"Straßennetz Landesbetrieb Straßenbau NRW",url:"https://www.wms.nrw.de/wms/strassen_nrw_wms",visible:!0,sublayers:[{name:"1",title:"Verwaltungen",attributes:{legend:{imageUrl:"https://www.wms.nrw.de/legends/wms/strassen_nrw_wms/1.png"}}},{name:"4",title:"Abschnitte und Äste"},{name:"6",title:"Unfälle"}]})}function nt(){const r={Component:Qe},e=new N({url:"https://ogc-api.nrw.de/inspire-us-kindergarten/v1/collections/governmentalservice/items?f=json&limit=10000",format:new O,attributions:'&copy; <a href="http://www.bkg.bund.de" target="_blank">Bundesamt f&uuml;r Kartographie und Geod&auml;sie</a> 2017, <a href="http://sg.geodatenzentrum.de/web_public/Datenquellen_TopPlus_Open.pdf" target="_blank">Datenquellen</a>'}),o=new C({source:e,style:new Q({image:new ee({fill:new te({color:"blue"}),radius:4})})});return new j({id:"ogc_kitas",title:"Kindertagesstätten",visible:!0,olLayer:o,attributes:{legend:r,resultListMetadata:[{id:"id",displayName:"ID",width:100,getPropertyValue(i){return i.id}},{propertyName:"pointOfContact.address.postCode",displayName:"PLZ",width:120},{propertyName:"name",displayName:"Name"},{propertyName:"inspireId",displayName:"inspireID"},{displayName:"Gefördert",width:160,getPropertyValue(i){switch(i.properties?.gefoerdert){case"ja":return!0;case"nein":return!1;default:return i.properties?.gefoerdert}}}]}})}class at{label;filteredTypes;httpService;constructor(e,o,i){this.label=e,this.filteredTypes=o,this.httpService=i}async search(e,{mapProjection:o,signal:i}){const n=await this.request(e,100,i),a=new O({dataProjection:"EPSG:4326",featureProjection:o});return n.features.filter(s=>this.filteredTypes.includes(s.properties.type)).map((s,l)=>{const c=a.readGeometry(s.geometry);return{id:s.properties.osm_id||l,label:this.createLabel(s),geometry:c,properties:s.properties}})}async request(e,o,i){const n=new URL("https://photon.komoot.io/api?");n.searchParams.set("q",e),n.searchParams.set("lang","de"),n.searchParams.set("lat","51.961563"),n.searchParams.set("lon","7.628202"),n.searchParams.set("limit",o.toString());const a=await this.httpService.fetch(n,{signal:i});if(!a.ok)throw new Error("Request failed: "+a.status);return await a.json()}createLabel(e){return`${e.properties.name} (${e.properties.osm_value?e.properties.osm_value+", ":""}${e.properties.postcode?e.properties.postcode+", ":""}${e.properties.city?e.properties.city+", ":""}${e.properties.country?e.properties.country+")":")"}`}}const st=q("ol-app:AppModel");function k(r){return r==="selection"||r==="measurement"||r.startsWith("editing-")}class lt{_mapRegistry;_vectorSelectionSourceFactory;_httpService;_resources=[];_featureHighlight=void 0;_mainContent=T(["toc"]);_searchSources=D();_selectionSources=D();_sourceMetadata=oe();_resultListState=T({key:0,open:!1,input:void 0});constructor({references:e}){this._mapRegistry=e.mapRegistry,this._vectorSelectionSourceFactory=e.vectorSelectionSourceFactory,this._httpService=e.httpService,this.initSearchSources(),this.initSelectionSources().catch(o=>{st.error("Failed to initialize selection sources",o)})}destroy(){this.clearHighlight(),this._resources.forEach(e=>e.destroy())}get mainContent(){return this._mainContent.value}get searchSources(){return this._searchSources}get selectionSources(){return this._selectionSources}get sourceMetadata(){return this._sourceMetadata}get resultListState(){return this._resultListState.value}toggleMainContent(e){const o=this._mainContent.value;if(o.includes(e)){this._mainContent.value=o.filter(n=>n!==e);return}let i;k(e)?(i=[e],this.clearHighlight()):(i=o.filter(n=>!k(n)),i.push(e)),this._mainContent.value=i}hideContent(e){this._mainContent.value=this._mainContent.value.filter(o=>o!==e)}clearInteractions(){this._mainContent.value=this._mainContent.value.filter(e=>!k(e))}setResultListInput(e){const o=this._resultListState.value;this._resultListState.value={open:!0,key:o.key+1,input:e}}setResultListVisibility(e){this._resultListState.value={...this._resultListState.value,open:e}}highlightAndZoom(e,o){const i=e.olMap.getViewport();this.clearHighlight(),this._featureHighlight=e.highlightAndZoom(o,{viewPadding:i&&i.offsetWidth<1e3?{top:150,right:75,bottom:50,left:75}:{top:150,right:400,bottom:50,left:400}})}zoom(e,o){const i=e.olMap.getViewport();e.zoom(o,{viewPadding:i&&i.offsetWidth<1e3?{top:150,right:75,bottom:50,left:75}:{top:150,right:400,bottom:50,left:400}})}clearHighlight(){this._featureHighlight&&(this._featureHighlight.destroy(),this._featureHighlight=void 0)}initSearchSources(){const e=new at("Photon Geocoder",["city","street"],this._httpService);this._searchSources.push(e)}async initSelectionSources(){const e=["ogc_kitas","ogc_kataster"],i=(await this._mapRegistry.expectMapModel(_)).layers.getOperationalLayers({sortByDisplayOrder:!0});for(const n of i){if(!e.includes(n.id)||!ct(n.olLayer))continue;const a=this._vectorSelectionSourceFactory.createSelectionSource({vectorLayer:n.olLayer,label:n.title}),s=re(()=>[a.status],([l])=>{l!=="available"&&(l==="unavailable"||l?.kind==="unavailable")&&this.clearHighlight()});this._resources.push(s,a),this._selectionSources.unshift(a),this._sourceMetadata.set(a,n.attributes.resultListMetadata)}}}function ct(r){return r instanceof C&&r.getSource()instanceof N}const pt={"ol-map":{name:"ol-map",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:et,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{vectorSourceFactory:{name:"ogc-features.VectorSourceFactory",qualifier:void 0,all:!1}}},AppModel:{name:"AppModel",clazz:lt,provides:[{name:"ol-app.AppModel",qualifier:void 0}],references:{vectorSelectionSourceFactory:{name:"selection.VectorSelectionSourceFactory",qualifier:void 0,all:!1},httpService:{name:"http.HttpService",qualifier:void 0,all:!1},mapRegistry:{name:"map.MapRegistry",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1},{name:"ol-app.AppModel",qualifier:void 0,all:!1},{name:"notifier.NotificationService",qualifier:void 0,all:!1},{name:"editing.EditingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:ie,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:He,provides:[{name:"notifier.NotificationService",qualifier:"notifier.NotificationService"}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/reactivity":{name:"@open-pioneer/reactivity",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:ne,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/ogc-features":{name:"@open-pioneer/ogc-features",services:{VectorSourceFactory:{name:"VectorSourceFactory",clazz:We,provides:[{name:"ogc-features.VectorSourceFactory",qualifier:void 0}],references:{httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}},SearchSourceFactory:{name:"SearchSourceFactory",clazz:Be,provides:[{name:"ogc-features.SearchSourceFactory",qualifier:void 0}],references:{httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/coordinate-viewer":{name:"@open-pioneer/coordinate-viewer",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map-ui-components":{name:"@open-pioneer/map-ui-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/scale-bar":{name:"@open-pioneer/scale-bar",services:{},ui:{references:[]},properties:{}},"@open-pioneer/scale-viewer":{name:"@open-pioneer/scale-viewer",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map-navigation":{name:"@open-pioneer/map-navigation",services:{},ui:{references:[]},properties:{}},"@open-pioneer/toc":{name:"@open-pioneer/toc",services:{},ui:{references:[]},properties:{}},"@open-pioneer/printing":{name:"@open-pioneer/printing",services:{PrintingServiceImpl:{name:"PrintingServiceImpl",clazz:Ge,provides:[{name:"printing.PrintingService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1},{name:"printing.PrintingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/editing":{name:"@open-pioneer/editing",services:{EditingServiceImpl:{name:"EditingServiceImpl",clazz:we,provides:[{name:"editing.EditingService",qualifier:void 0}],references:{mapRegistry:{name:"map.MapRegistry",qualifier:void 0,all:!1},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{polygonStyle:{value:{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"red","stroke-width":1.25,"circle-radius":3,"circle-fill-color":"red","circle-stroke-width":1.25,"circle-stroke-color":"red"},required:!1},vertexStyle:{value:{"circle-radius":3,"circle-fill-color":"red","circle-stroke-width":1.25,"circle-stroke-color":"red"},required:!1}}},"@open-pioneer/legend":{name:"@open-pioneer/legend",services:{},ui:{references:[]},properties:{}},"@open-pioneer/measurement":{name:"@open-pioneer/measurement",services:{},ui:{references:[]},properties:{}},"@open-pioneer/result-list":{name:"@open-pioneer/result-list",services:{},ui:{references:[]},properties:{}},"@open-pioneer/search":{name:"@open-pioneer/search",services:{},ui:{references:[]},properties:{}},"@open-pioneer/selection":{name:"@open-pioneer/selection",services:{VectorSelectionSourceFactory:{name:"VectorSelectionSourceFactory",clazz:Se,provides:[{name:"selection.VectorSelectionSourceFactory",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}}},dt='.search-box{position:absolute;width:500px;max-width:100%;z-index:1}:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.ol-overviewmap .ol-viewport:hover{cursor:pointer}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}.printing-overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;-webkit-user-select:none;user-select:none;pointer-events:all;cursor:wait;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#b4b4b4cc}.printing-overlay-status{flex:1 1 auto;font-size:1.5em;text-align:center}.printing-scale-bar.ol-scale-bar{left:var(--printing-scale-bar-left);bottom:var(--printing-scale-bar-bottom)}.editing-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.editing-tooltip-hidden{visibility:hidden}.measurement-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.measurement-active-tooltip{background:#000000e6;border-radius:4px;border-color:#000000e6;opacity:.9;color:#fff}.measurement-finished-tooltip{background-color:#4cb3ffe6;color:#000;border:1px solid white}.measurement-active-tooltip:before,.measurement-finished-tooltip:before{border-top:6px solid rgba(0,0,0,.9);border-right:6px solid transparent;border-left:6px solid transparent;content:"";position:absolute;bottom:-6px;margin-left:-7px;left:50%}.measurement-finished-tooltip:before{border-top-color:#4cb3ff}.search-component .chakra-divider{display:none}.search-component .search-highlighted-match{font-weight:700}.search-component .search-value-container{cursor:text;padding-left:30px!important}.search-component .search-invisible{display:none}.selection-drag-box{background-color:#ffffff4d!important;border:3px solid var(--chakra-colors-background_primary)!important}.selection-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.selection .react-select{cursor:default}.map-container .selection-active{cursor:crosshair}.map-container .selection-inactive{cursor:no-drop}.selection-source-value.selection-source-value--disabled{opacity:.4}.selection-source-value.selection-source-value--disabled span{margin:0 6px 0 0}.scale-bar .ol-scale-bar{margin-bottom:8px;margin-right:8px}.scale-bar .ol-scale-bar,.scale-bar .ol-scale-line{position:relative;bottom:0;left:0;background:none}.scale-bar .ol-scale-bar .ol-scale-bar-inner,.scale-bar .ol-scale-bar .ol-scale-line-inner,.scale-bar .ol-scale-line .ol-scale-bar-inner,.scale-bar .ol-scale-line .ol-scale-line-inner{color:var(--chakra-white);border-color:var(--chakra-white)}.result-list-no-data-message{text-align:center;margin-top:50px;font-weight:700;font-size:larger}.result-list-table th,.result-list-table td{overflow-wrap:break-word}.result-list-table.result-list-table--is-resizing *{cursor:col-resize}.result-list-table thead{position:sticky;top:0;z-index:1;background:var(--chakra-colors-background_body)}.result-list-table th{position:relative;border-right-width:thin}.result-list-table tbody tr:hover{background:var(--chakra-colors-background_light)}.result-list-table .result-list-resizer{position:absolute;top:0;height:100%;right:0;width:8px;background:var(--chakra-colors-trails-100);transform:scaleX(.25);cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none;padding-left:0}.result-list-table th:last-child .result-list-resizer{width:8px;transform:translate(50%) scaleX(.25)}.result-list-table th .result-list-resizer.result-list-resizer--is-resizing{background:var(--chakra-colors-trails-500);transform:scale(1)}.result-list-table th .result-list-resizer:hover{transform:scale(1)}',ut=["en","de"];function mt(r){switch(r){case"en":return E(()=>import("./gZhlS8QzAo13.js"),[],import.meta.url).then(e=>e.default);case"de":return E(()=>import("./Bf6dMy3l5eLy.js"),[],import.meta.url).then(e=>e.default)}throw new Error(`Unsupported locale: '${r}'`)}const gt=B(dt),ht=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:mt,locales:ut,packages:pt,styles:gt},Symbol.toStringTag,{value:"Module"})),G="ol-map",g=se.bind(void 0,G),u=ae.bind(void 0,G),ft=q("ol-app:Editing");function F(r){const e=bt(r.kind),o=p.useId(),i=u();return t.jsx(d,{role:"dialog","aria-labelledby":o,children:t.jsx(v,{title:t.jsx(x,{id:o,size:"md",mb:2,children:i.formatMessage({id:"editing.title"})}),children:t.jsxs(d,{overflowY:"auto",maxHeight:300,children:[t.jsx(L,{textAlign:"center",children:i.formatMessage({id:"editing.active"})}),t.jsxs(H,{mt:4,align:"center",justify:"center",children:[t.jsx(I,{onClick:()=>{e?.reset()},children:i.formatMessage({id:"editing.resetGeometry"})}),t.jsx(I,{onClick:()=>{e?.destroy()},children:i.formatMessage({id:"editing.abort"})})]})]})})})}function bt(r){const e=g("notifier.NotificationService"),o=g("editing.EditingService"),i=u(),n=g("ol-app.AppModel"),{map:a}=z(),[s,l]=p.useState();return p.useEffect(()=>{if(!a)return;const c=new vt(e,o,a,i,n,r);return l(c),()=>{c.destroy(),l(void 0)}},[n,o,i,a,e,r]),s}class vt{notificationService;editingService;map;intl;appModel;kind;job;constructor(e,o,i,n,a,s){this.notificationService=e,this.editingService=o,this.map=i,this.intl=n,this.appModel=a,this.kind=s;let l;switch(s){case"create":l=this.createJob();break;case"update":l=this.updateJob();break}this.job=l,this.job.run().catch(c=>{U(c)||(ft.error("Edit operation failed",c),this.notificationService.notify({level:"error",message:this.intl.formatMessage({id:"editing.error"})}))}).finally(()=>{this.destroy()})}destroy(){this.job?.destroy(),this.job=void 0,this.appModel.hideContent(`editing-${this.kind}`)}reset(){this.job?.reset()}createJob(){let e;return{destroy(){e?.stop(),e=void 0},reset(){e?.reset()},run:async()=>{const o=this.findLayer(),i=new URL(o.attributes.collectionURL+"/items");e=this.editingService.createFeature(this.map,i);const n=await e.whenComplete();if(e=void 0,!n)return;this.notificationService.notify({level:"info",message:this.intl.formatMessage({id:"editing.create.featureCreated"},{featureId:n.featureId})}),(o?.olLayer).getSource()?.refresh()}}}updateJob(){const e=this.map,o=new AbortController,i=o.signal;let n,a,s;function l(){a&&e.olMap.removeInteraction(a),a&&a.dispose(),n&&n.destroy(),o.abort(),a=void 0,n=void 0}return{destroy(){l(),s?.stop(),s=void 0},reset(){s?.reset()},run:async()=>{const c=this.findLayer(),m=c.olLayer,w=new URL(c.attributes.collectionURL+"/items");a=new ye({layers:[m]}),e.olMap.addInteraction(a),n=xt(this.intl,e.olMap),n.element.classList.remove("editing-tooltip-hidden");let f;for(;;){const{selected:P,deselected:W}=await wt(a,i);if(P.length===1&&W.length===0){l(),f=P[0];break}}if(!f)throw Error("Feature is undefined");s=this.editingService.updateFeature(e,w,f);const S=await s.whenComplete();S&&(this.notificationService.notify({level:"info",message:this.intl.formatMessage({id:"editing.update.featureModified"},{featureId:S.featureId})}),m.getSource()?.refresh())}}}findLayer(){const e=this.map.layers.getLayerById("krankenhaus");if(!e)throw new Error("Layer not found");return e}}function xt(r,e){const o=document.createElement("div");o.className="editing-tooltip editing-tooltip-hidden",o.textContent=r.formatMessage({id:"editing.update.tooltip.select"});const i=new ke({element:o,offset:[15,0],positioning:"center-left"}),n=e.on("pointermove",a=>{a.dragging||i.setPosition(a.coordinate)});return e.addOverlay(i),{overlay:i,element:o,destroy(){M(n),e.removeOverlay(i)}}}function wt(r,e){let o;const{promise:i,resolve:n,reject:a}=K();if(e.aborted)return a(A()),i;const s=()=>{o&&M(o),o=void 0,a(A())};return e.addEventListener("abort",s),o=r.on("select",l=>{e.removeEventListener("abort",s),o&&M(o),o=void 0,n(l)}),i}function St(){const r=u();return t.jsxs(y,{role:"region","aria-label":r.formatMessage({id:"ariaLabel.footer"}),gap:3,alignItems:"center",justifyContent:"center",children:[t.jsx(Me,{precision:2,displayProjectionCode:"EPSG:4326"}),t.jsx(je,{}),t.jsx(Ce,{})]})}function yt(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"legendTitle"})}),children:t.jsx(d,{overflowY:"auto",maxHeight:300,children:t.jsx(ze,{showBaseLayers:!0})})})})}function kt(){const r=u(),e=g("ol-app.AppModel"),o=b(()=>e.resultListState,[e]),i=o.open,{isTocActive:n,isLegendActive:a,isPrintingActive:s}=b(()=>({isTocActive:e.mainContent.includes("toc"),isLegendActive:e.mainContent.includes("legend"),isPrintingActive:e.mainContent.includes("printing")}),[e]);return t.jsxs(y,{role:"toolbar","aria-label":r.formatMessage({id:"ariaLabel.toolbar"}),direction:"column",gap:1,padding:1,children:[t.jsx(Mt,{}),o.input&&t.jsx(h,{label:r.formatMessage({id:"resultListTitle"}),icon:t.jsx(ue,{}),isActive:o.open,onClick:()=>e.setResultListVisibility(!i)}),t.jsx(h,{label:r.formatMessage({id:"tocTitle"}),icon:t.jsx(me,{}),isActive:n,onClick:()=>e.toggleMainContent("toc")}),t.jsx(h,{label:r.formatMessage({id:"legendTitle"}),icon:t.jsx(ge,{}),isActive:a,onClick:()=>e.toggleMainContent("legend")}),t.jsx(h,{label:r.formatMessage({id:"printingTitle"}),icon:t.jsx(he,{}),isActive:s,onClick:()=>e.toggleMainContent("printing")}),t.jsx(Ue,{}),t.jsx(Ke,{}),t.jsx($e,{})]})}function Mt(){const r=u(),e=g("ol-app.AppModel"),[o,i]=p.useState(!1),{isSelectionActive:n,isMeasurementActive:a,isEditingCreateActive:s,isEditingUpdateActive:l}=b(()=>({isSelectionActive:e.mainContent.includes("selection"),isMeasurementActive:e.mainContent.includes("measurement"),isEditingCreateActive:e.mainContent.includes("editing-create"),isEditingUpdateActive:e.mainContent.includes("editing-update")}),[e]),c=f=>()=>{f(),i(!1)},m={placement:"top"},w=t.jsxs(t.Fragment,{children:[t.jsx(h,{label:s?r.formatMessage({id:"editing.stopTitle"}):r.formatMessage({id:"editing.create.startTitle"}),icon:s?t.jsx(Le,{}):t.jsx(_e,{}),isActive:s,onClick:c(()=>e.toggleMainContent("editing-create")),tooltipProps:m}),t.jsx(h,{label:l?r.formatMessage({id:"editing.stopTitle"}):r.formatMessage({id:"editing.update.startTitle"}),icon:l?t.jsx(fe,{}):t.jsx(be,{}),isActive:l,onClick:c(()=>e.toggleMainContent("editing-update")),tooltipProps:m}),t.jsx(h,{label:r.formatMessage({id:"measurementTitle"}),icon:t.jsx(ve,{}),isActive:a,onClick:c(()=>e.toggleMainContent("measurement")),tooltipProps:m}),t.jsx(h,{label:r.formatMessage({id:"selectionTitle"}),icon:t.jsx(xe,{}),isActive:n,onClick:c(()=>e.toggleMainContent("selection")),tooltipProps:m})]});return t.jsxs(Ee,{placement:"left",isLazy:!0,onOpen:()=>i(!0),onClose:()=>i(!1),isOpen:o,children:[t.jsx(Fe,{children:t.jsx(jt,{})}),t.jsx($,{children:t.jsxs(qe,{width:"auto",children:[t.jsx(Ne,{}),t.jsx(Ve,{children:t.jsx(H,{spacing:2,children:w})})]})})]})}const jt=p.forwardRef(function(e,o){const i=u(),n=Re(),{onClick:a,...s}=n.getTriggerProps();return t.jsx(h,{ref:o,label:i.formatMessage({id:"mapInteractions.title"}),icon:t.jsx(de,{}),onClick:a,buttonProps:s})});function Ct(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"measurementTitle"})}),children:t.jsx(Pe,{})})})}function zt(){const r=g("ol-app.AppModel"),e=b(()=>r.resultListState,[r]),[o,i]=p.useState([]),[n,a]=p.useState([]),s=p.useCallback(l=>{i(l.features),a(l.getFeatureIds())},[]);return p.useEffect(()=>{console.log("Anzahl Features: "+o.length),console.log("SelectedIds: "+n.toString())},[o,n]),e.input&&t.jsx(d,{className:"result-list-container",position:"absolute",visibility:e.open?"visible":"hidden",bottom:"0",backgroundColor:"white",width:"100%",height:"400px",zIndex:1,borderTop:"2px solid",borderBottom:"2px solid",borderColor:"trails.100",children:t.jsx(Ye,{input:e.input,onSelectionChange:s},e.key)})}function Lt(){const{map:r}=z(),e=g("ol-app.AppModel"),o=b(()=>e.searchSources.getItems(),[e]);function i(a){if(console.debug("The user selected the following item: ",a.result),!r)return;const s=a.result.geometry;s&&e.highlightAndZoom(r,[s])}function n(){console.debug("The user cleared the search"),e.clearHighlight()}return t.jsx(d,{backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",mt:5,className:"search-box",children:t.jsx(Ie,{sources:o,maxResultsPerGroup:10,onSelect:i,onClear:n})})}function _t(){const r=u(),e=g("notifier.NotificationService"),o=p.useId(),{map:i}=z(),n=g("ol-app.AppModel"),a=b(()=>n.selectionSources.getItems(),[n]),s={numberOptions:{maximumFractionDigits:3},dateOptions:{dateStyle:"medium",timeStyle:"medium",timeZone:"UTC"}};function l(m){const{source:w,results:f}=m;if(!i){console.debug("Map not ready");return}const S=n.sourceMetadata.get(w);if(!S){console.warn("Can not show results because no metadata could be found");return}n.setResultListInput({columns:S,data:f,formatOptions:s}),e.notify({level:"info",message:r.formatMessage({id:"foundResults"},{resultsCount:f.length}),displayDuration:4e3})}function c(m){n.clearHighlight()}return t.jsx(d,{role:"dialog","aria-labelledby":o,children:t.jsx(v,{title:t.jsx(x,{id:o,size:"md",mb:2,children:r.formatMessage({id:"selectionTitle"})}),children:t.jsx(Ae,{sources:a,availableSelectionMethods:["point","extent"],onSelectionComplete:l,onSelectionSourceChanged:c})})})}function Pt(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:t.jsx(L,{children:e.formatMessage({id:"tocTitle"})})}),children:t.jsx(d,{overflowY:"auto",maxHeight:300,children:t.jsx(Oe,{showTools:!0,basemapSwitcherProps:{allowSelectingEmptyBasemap:!0}})})})})}function It(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"printingTitle"})}),children:t.jsx(Te,{})})})}function At(){const r=u(),e=g("ol-app.AppModel"),{resultListState:o,mainContent:i}=b(()=>({resultListState:e.resultListState,mainContent:e.mainContent}),[e]),n=o.input&&o.open;return t.jsx(le,{mapId:_,children:t.jsxs(y,{height:"100%",direction:"column",overflow:"hidden",children:[t.jsx(De,{position:"top-right"}),t.jsxs(v,{title:t.jsx(d,{role:"region","aria-label":r.formatMessage({id:"ariaLabel.header"}),textAlign:"center",py:1,children:t.jsx(x,{size:"md",children:"Sample Application"})}),children:[t.jsx(y,{flex:"1",direction:"column",position:"relative",children:t.jsxs(ce,{role:"main","aria-label":r.formatMessage({id:"ariaLabel.map"}),viewPadding:n?{bottom:400}:void 0,children:[t.jsx(Je,{centerContent:!0,children:t.jsx(Lt,{})}),t.jsx(Tt,{mainContent:i}),t.jsx(pe,{position:"bottom-right",horizontalGap:10,verticalGap:45,children:t.jsx(kt,{})}),t.jsx(zt,{})]})}),t.jsx(St,{})]})]})})}function Tt(r){const{mainContent:e}=r,o=p.useMemo(()=>{const i=n=>{switch(n){case"toc":return t.jsx(Pt,{},n);case"legend":return t.jsx(yt,{},n);case"printing":return t.jsx(It,{},n);case"selection":return t.jsx(_t,{},n);case"measurement":return t.jsx(Ct,{},n);case"editing-create":return t.jsx(F,{kind:"create"},n);case"editing-update":return t.jsx(F,{kind:"update"},n)}};return e.map(n=>i(n))},[e]);return t.jsx(Dt,{children:o})}function Dt(r){const e=r.children,o=[];for(const i of e)i&&(o.length&&o.push(t.jsx(Ze,{mt:4,mb:4},o.length)),o.push(i));if(o.length!==0)return t.jsx(d,{position:"absolute",top:"100px",left:4,maxHeight:"calc(100% - 140px)",width:350,maxWidth:350,zIndex:1,backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",overflow:"auto",children:o})}const Rt=new URLSearchParams(window.location.search),Et=Rt.get("lang")||void 0,Ft=Z({component:At,appMetadata:ht,config:{locale:Et,properties:{"@open-pioneer/local-storage":{storageId:"ol-app-state"}}}});customElements.define("ol-map-app",Ft);
