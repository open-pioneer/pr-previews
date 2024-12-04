var se=Object.defineProperty;var $=t=>{throw TypeError(t)};var re=(t,e,s)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>re(t,typeof e!="symbol"?e+"":e,s),A=(t,e,s)=>e.has(t)||$("Cannot "+s);var h=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),S=(t,e,s,r)=>(A(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),y=(t,e,s)=>(A(t,e,"access private method"),s);import{c as oe,i as B,r as p,j as m}from"./Mxtq6FG0Aq1_.js";import{G as H,T as q}from"./o-9C2XpeebWf.js";import{b as ae,az as ne,b0 as ie,u as ce,aZ as z,i as Z,b3 as T,e as ue,r as le,j as fe,V as de}from"./BciFiJuAZjih.js";import{a as he,b as me,c as we,d as ge,e as be}from"./IfrtfJ9Ep93o.js";import{u as pe}from"./BFn4bgt9XpQY.js";const ve="next";function ye(t,e,s,r){const o=new URL(t),n=o.searchParams;return n.set("bbox",e.join(",")),n.set("bbox-crs",s),n.set("crs",s),n.set("f","json"),r?.(new URL(o))??o}function Re(t,e,s){const r=new URL(t),o=r.searchParams;return o.set("offset",e.toString()),o.set("limit",s.toString()),r.toString()}function G(t){if(!Array.isArray(t))return;const s=t.filter(r=>r.rel===ve);if(s.length===1)return s[0]?.href}async function K(t,e,s,r){let o=[];const n={headers:{Accept:"application/geo+json"},signal:r},a=await s.fetch(t,n);if(a.status!==200)throw new Error(`Failed to query features from service (status code ${a.status})`);const i=await a.json();e&&(o=e.readFeatures(i));const c=G(i.links);return{features:o,numberMatched:i.numberMatched,nextURL:c}}async function xe(t,e){const s={supportsOffsetStrategy:!1},r=new URL(t);r.searchParams.set("limit","1"),r.searchParams.set("f","json");const o=await e.fetch(r.toString(),{headers:{Accept:"application/geo+json"}});if(o.status!==200)throw new Error(`Failed to probe collection information (status code ${o.status})`);const n=await o.json(),a=G(n.links);if(!a)return s;const c=new URL(a).searchParams.has("offset");return s.supportsOffsetStrategy=c,s}async function Fe(t){const{fullURL:e,featureFormat:s,signal:r,addFeatures:o,queryFeatures:n}=t,a=t.limit,i=t.maxConcurrentRequests;let c=0,l=e;const f=[];let u;for(;l;){let g;u==null?g=i:g=Math.ceil((u-c)/a),g=Math.max(1,Math.min(g,i));const R=[];for(let F=0;F<g;++F)R.push(Re(e,c,a)),c+=a;const d=await J(R,s,t.httpService,r,o,n);f.push(...d.features),l=d.nextURL,d.numberMatched!=null&&(u=d.numberMatched)}return f}const U=oe("ogc-features:OgcFeatureSourceFactory"),Le=5e3,Se=6;function Ie(t,e){return Ue(t,{httpService:e})}function Ue(t,e){const s=e.httpService,r=`${t.baseUrl}/collections/${t.collectionId}/items?`,o=new ae({format:new H,strategy:ne,attributions:t.attributions,...t.additionalOptions}),n=e.queryFeaturesParam??K,a=e.getCollectionInfosParam??xe,i=e.addFeaturesParam||function(u){U.debug(`Adding ${u.length} features`),o.addFeatures(u)};let c,l;const f=async(u,g,R,d,F)=>{l??=a(r,s);let I;try{I=await l}catch(L){U.error("Failed to retrieve collection information",L),F?.(),l=void 0;return}c?.abort("Extent changed"),c=new AbortController;const te=ye(r,u,t.crs,t.rewriteUrl);let N=t?.strategy||(I?.supportsOffsetStrategy?"offset":"next");N==="offset"&&!I?.supportsOffsetStrategy&&(N="next");try{const L=await Me(N,{fullURL:te.toString(),httpService:s,featureFormat:o.getFormat(),queryFeatures:n,addFeatures:i,limit:t.limit??Le,maxConcurrentRequests:t.maxConcurrentRequests??Se,signal:c.signal,collectionInfos:I});d?.(L),U.debug("Finished loading features for extent:",u)}catch(L){B(L)?(U.debug("Query-Feature-Request aborted",L),o.removeLoadedExtent(u),F?.()):U.error("Failed to load features",L)}};return o.setLoader(f),o}function Me(t,e){switch(t){case"next":return Pe(e);case"offset":return Fe(e)}}async function Pe(t){const e=t.limit;let s=new URL(t.fullURL);s.searchParams.set("limit",e.toString());let r=[];do{const o=await J([s.toString()],t.featureFormat,t.httpService,t.signal,t.addFeatures,t.queryFeatures);if(r=r.concat(o.features),!o.nextURL)break;s=new URL(o.nextURL)}while(!0);return r}async function J(t,e,s,r,o,n=K){const a={nextURL:void 0,numberMatched:void 0,features:[]},i=t.map(async(c,l)=>{const f=l===t.length-1,u=await n(c,e,s,r);o(u.features),U.debug(`NextURL for index = ${l} (isLast = ${f}): ${u.nextURL||"No Next URL"}`),a.features.push(...u.features),f&&(a.numberMatched=u.numberMatched,a.nextURL=u.nextURL)});return await Promise.all(i),a}var b,P,V,C,M,W,X;class Ve{constructor(e,s){v(this,M);x(this,"label");v(this,b);v(this,P);v(this,V);v(this,C);this.label=e.label,S(this,b,e),S(this,P,s);const{baseUrl:r,params:o}=je(e.baseUrl);S(this,V,r),S(this,C,o)}async search(e,{mapProjection:s,maxResults:r,signal:o}){const n=y(this,M,X).call(this,e,r),a=new H({dataProjection:"EPSG:4326",featureProjection:s});return(await Ce(h(this,P),n,o)).features.map(c=>y(this,M,W).call(this,c,a))}}b=new WeakMap,P=new WeakMap,V=new WeakMap,C=new WeakMap,M=new WeakSet,W=function(e,s){const r=h(this,b).renderLabel?.(e),o=e.properties[h(this,b).labelProperty],n=e.properties[h(this,b).searchProperty],a=r||(o!==void 0?String(o):n!==void 0?String(n):"");return{id:e.id??ie(),label:a,geometry:s.readGeometry(e.geometry),properties:e.properties}},X=function(e,s){const r=new URL(`${h(this,V)}/collections/${h(this,b).collectionId}/items`);for(const[o,n]of h(this,C))r.searchParams.append(o,n);return r.searchParams.set(h(this,b).searchProperty,`*${e}*`),r.searchParams.set("limit",String(s)),r.searchParams.set("f","json"),h(this,b).rewriteUrl?.(new URL(r))??r};async function Ce(t,e,s){try{const r=await t.fetch(e,{signal:s,headers:{Accept:"application/json"}});if(!r.ok)throw new Error("Request failed with status "+r.status);return await r.json()}catch(r){throw B(r)?r:new Error("Failed to search on OGC API Features service",{cause:r})}}function je(t){const e=new URL(t),s=new URLSearchParams(e.searchParams);return e.search="",{baseUrl:e.href.replace(/\/+$/,""),params:s}}var j;class He{constructor({references:e}){v(this,j);S(this,j,e.httpService)}createVectorSource(e){return Ie(e,h(this,j))}}j=new WeakMap;var E;class Te{constructor({references:e}){v(this,E);S(this,E,e.httpService)}createSearchSource(e){return new Ve(e,h(this,E))}}E=new WeakMap;const Ee="@open-pioneer/map-navigation",D=ce.bind(void 0,Ee),Ge=p.forwardRef(function(e,s){const{containerProps:r}=z("initial-extent",e),{map:o}=Z(e),n=D();function a(){const i=o?.initialExtent;if(i){const c=[i.xMin,i.yMin,i.xMax,i.yMax];o.olView.fit(c,{duration:200})}}return m.jsx(q,{ref:s,label:n.formatMessage({id:"initial-extent.title"}),icon:m.jsx(he,{}),onClick:a,...r})}),Ke=p.forwardRef(function(e,s){return m.jsx(Q,{zoomDirection:"in",ref:s,...e})}),Je=p.forwardRef(function(e,s){return m.jsx(Q,{zoomDirection:"out",ref:s,...e})}),Q=p.forwardRef(function(e,s){const{zoomDirection:r}=e,{map:o}=Z(e),n=D(),[a,i]=p.useState(!1),{defaultClassName:c,buttonLabel:l,buttonIcon:f}=ke(n,r),{containerProps:u}=z(T("zoom",c),e);function g(){if(a)return;i(!0);const R=o?.olView;let d=o?.zoomLevel;const F=R?.getMaxZoom()||Number.MAX_SAFE_INTEGER,I=R?.getMinZoom()||0;R&&d!==void 0&&(r==="in"&&d<F?++d:r==="out"&&d>I&&--d,R.animate({zoom:d,duration:200},()=>i(!1)))}return m.jsx(q,{ref:s,label:l,icon:f,onClick:g,...u})});function ke(t,e){switch(e){case"in":return{defaultClassName:"zoom-in",buttonLabel:t.formatMessage({id:"zoom-in.title"}),buttonIcon:m.jsx(we,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:t.formatMessage({id:"zoom-out.title"}),buttonIcon:m.jsx(me,{})}}}const Ne=200;var w,_,k,Y;class Ae{constructor(e){v(this,w);x(this,"olMap");x(this,"handle");x(this,"_mapViews",ue());x(this,"_activeViewId",le(0));x(this,"backward",()=>{if(this.canBackward)y(this,w,k).call(this,this.activeViewId-1),y(this,w,_).call(this,this.activeViewId);else throw new Error("Backward is not possible at the moment")});x(this,"forward",()=>{if(this.canForward)y(this,w,k).call(this,this.activeViewId+1),y(this,w,_).call(this,this.activeViewId);else throw new Error("Forward is not possible at the moment")});this.olMap=e.olMap,this.handle=y(this,w,Y).call(this)}destroy(){this.handle&&fe(this.handle),this.handle=void 0}get activeViewId(){return this._activeViewId.value}get mapViews(){return this._mapViews}get canBackward(){return this.mapViews.get(this.activeViewId-1)!=null}get canForward(){return this.mapViews.get(this.activeViewId+1)!=null}}w=new WeakSet,_=function(e){const s=this.olMap.getView();this.olMap.setView(new de({center:this.mapViews.get(e).center,resolution:this.mapViews.get(e).resolution,projection:s.getProjection()}))},k=function(e){this._activeViewId.value=e},Y=function(){const e=this.olMap.on("moveend",()=>{s()}),s=()=>{const r=this.olMap,o=this.mapViews,n=r.getView(),a=n.getResolution(),i=n.getCenter();if(a!=null&&i!=null&&(i!==o.get(this.activeViewId)?.center||a!==o.get(this.activeViewId)?.resolution)){const c={resolution:a,center:i},l=this.activeViewId+1;for(const f of o.keys())f>l&&o.delete(f);for(const f of o.keys()){if(o.size<Ne)break;o.delete(f)}y(this,w,k).call(this,l),o.set(l,c)}};return e};const O=new WeakMap;function Oe(t){const[e,s]=p.useState();return p.useEffect(()=>{if(!t)return;let r=O.get(t);return r==null?(r={vm:new Ae(t),useCount:1},O.set(t,r)):r.useCount++,s(r.vm),()=>{s(void 0),r.useCount--,r.useCount===0&&(r.vm.destroy(),O.delete(t))}},[t]),e}const We=p.forwardRef(function(e,s){return m.jsx(ee,{viewDirection:"forward",ref:s,...e})}),Xe=p.forwardRef(function(e,s){return m.jsx(ee,{viewDirection:"backward",ref:s,...e})}),ee=p.forwardRef(function(e,s){const r=D(),{viewDirection:o}=e,{map:n}=Z(e),a=Oe(n),{defaultClassName:i,buttonLabel:c,buttonIcon:l}=_e(r,o),{containerProps:f}=z(T("view",i),e),u=pe(()=>a?o==="forward"?a.canForward:a.canBackward:!1,[a,o]),g=()=>{a&&(o==="forward"?a.forward():a.backward())};return a&&m.jsx(q,{ref:s,...f,label:c,icon:l,onClick:g,isDisabled:!u})});function _e(t,e){switch(e){case"forward":return{defaultClassName:"view-forward",buttonLabel:t.formatMessage({id:"view-forward.title"}),buttonIcon:m.jsx(be,{})};case"backward":return{defaultClassName:"view-backward",buttonLabel:t.formatMessage({id:"view-backward.title"}),buttonIcon:m.jsx(ge,{})}}}export{Xe as H,Ge as I,Te as S,He as V,Ke as Z,Je as a,We as b};
