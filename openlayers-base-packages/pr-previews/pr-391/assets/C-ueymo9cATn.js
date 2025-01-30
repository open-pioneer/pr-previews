var se=Object.defineProperty;var B=t=>{throw TypeError(t)};var re=(t,e,s)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>re(t,typeof e!="symbol"?e+"":e,s),O=(t,e,s)=>e.has(t)||B("Cannot "+s);var h=(t,e,s)=>(O(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),S=(t,e,s,r)=>(O(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),R=(t,e,s)=>(O(t,e,"access private method"),s);import{c as oe,i as H,r as v,j as m}from"./B60Dx_GOYdnk.js";import{G as T,T as z}from"./D0_7QMwEwHiI.js";import{b as ae,az as ne,b0 as ie,u as ce,aZ as Z,i as D,b3 as G,e as ue,r as le,j as fe,V as de}from"./j0mck_Meu7Xh.js";import{a as he,b as me,c as we,d as ge,e as be}from"./2C0geDG_OBHU.js";import{u as pe}from"./DSjrbd_eKbZM.js";const ve="next";function ye(t,e,s,r){const o=new URL(t),a=o.searchParams;return a.set("bbox",e.join(",")),a.set("bbox-crs",s),a.set("crs",s),a.set("f","json"),r?.(new URL(o))??o}function Re(t,e,s){const r=new URL(t),o=r.searchParams;return o.set("offset",e.toString()),o.set("limit",s.toString()),r.toString()}function K(t){if(!Array.isArray(t))return;const s=t.filter(r=>r.rel===ve);if(s.length===1)return s[0]?.href}async function J(t,e,s,r){let o=[];const a={headers:{Accept:"application/geo+json"},signal:r},n=await s.fetch(t,a);if(n.status!==200)throw new Error(`Failed to query features from service (status code ${n.status})`);const i=await n.json();e&&(o=e.readFeatures(i));const c=K(i.links);return{features:o,numberMatched:i.numberMatched,nextURL:c}}async function xe(t,e){const s={supportsOffsetStrategy:!1},r=new URL(t);r.searchParams.set("limit","1"),r.searchParams.set("f","json");const o=await e.fetch(r.toString(),{headers:{Accept:"application/geo+json"}});if(o.status!==200)throw new Error(`Failed to probe collection information (status code ${o.status})`);const a=await o.json(),n=K(a.links);if(!n)return s;const c=new URL(n).searchParams.has("offset");return s.supportsOffsetStrategy=c,s}async function Fe(t){const{fullURL:e,featureFormat:s,signal:r,addFeatures:o,queryFeatures:a}=t,n=t.limit,i=t.maxConcurrentRequests;let c=0,l=e;const f=[];let u;for(;l;){let b;u==null?b=i:b=Math.ceil((u-c)/n),b=Math.max(1,Math.min(b,i));const F=[];for(let d=0;d<b;++d)F.push(Re(e,c,n)),c+=n;const w=await W(F,s,t.httpService,r,o,a);f.push(...w.features),l=w.nextURL,w.numberMatched!=null&&(u=w.numberMatched)}return f}const U=oe("ogc-features:OgcFeatureSourceFactory"),Le=5e3,Se=6;function Ie(t,e){return Ue(t,{httpService:e})}function Ue(t,e){const s=e.httpService,r=`${t.baseUrl}/collections/${t.collectionId}/items?`,o=new ae({format:new T,strategy:ne,attributions:t.attributions,...t.additionalOptions}),a=e.queryFeaturesParam??J,n=e.getCollectionInfosParam??xe,i=e.addFeaturesParam||function(u){U.debug(`Adding ${u.length} features`),o.addFeatures(u)};let c,l;const f=async(u,b,F,w,d)=>{l??=n(r,s);let I;try{I=await l}catch(L){U.error("Failed to retrieve collection information",L),d?.(),l=void 0;return}c?.abort("Extent changed"),c=new AbortController;const N=ye(r,u,t.crs,t.rewriteUrl);let A=t?.strategy||(I?.supportsOffsetStrategy?"offset":"next");A==="offset"&&!I?.supportsOffsetStrategy&&(A="next");try{const L=await Pe(A,{fullURL:N.toString(),httpService:s,featureFormat:o.getFormat(),queryFeatures:a,addFeatures:i,limit:t.limit??Le,maxConcurrentRequests:t.maxConcurrentRequests??Se,signal:c.signal,collectionInfos:I});w?.(L),U.debug("Finished loading features for extent:",u)}catch(L){H(L)?(U.debug("Query-Feature-Request aborted",L),o.removeLoadedExtent(u),d?.()):U.error("Failed to load features",L)}};return o.setLoader(f),o}function Pe(t,e){switch(t){case"next":return Me(e);case"offset":return Fe(e)}}async function Me(t){const e=t.limit;let s=new URL(t.fullURL);s.searchParams.set("limit",e.toString());let r=[];do{const o=await W([s.toString()],t.featureFormat,t.httpService,t.signal,t.addFeatures,t.queryFeatures);if(r=r.concat(o.features),!o.nextURL)break;s=new URL(o.nextURL)}while(!0);return r}async function W(t,e,s,r,o,a=J){const n={nextURL:void 0,numberMatched:void 0,features:[]},i=t.map(async(c,l)=>{const f=l===t.length-1,u=await a(c,e,s,r);o(u.features),U.debug(`NextURL for index = ${l} (isLast = ${f}): ${u.nextURL||"No Next URL"}`),n.features.push(...u.features),f&&(n.numberMatched=u.numberMatched,n.nextURL=u.nextURL)});return await Promise.all(i),n}var p,M,V,C,P,X,Q;class Ve{constructor(e,s){y(this,P);x(this,"label");y(this,p);y(this,M);y(this,V);y(this,C);this.label=e.label,S(this,p,e),S(this,M,s);const{baseUrl:r,params:o}=je(e.baseUrl);S(this,V,r),S(this,C,o)}async search(e,{mapProjection:s,maxResults:r,signal:o}){const a=R(this,P,Q).call(this,e,r),n=new T({dataProjection:"EPSG:4326",featureProjection:s});return(await Ce(h(this,M),a,o)).features.map(c=>R(this,P,X).call(this,c,n))}}p=new WeakMap,M=new WeakMap,V=new WeakMap,C=new WeakMap,P=new WeakSet,X=function(e,s){const r=h(this,p).renderLabel?.(e),o=e.properties[h(this,p).labelProperty],a=e.properties[h(this,p).searchProperty],n=r||(o!==void 0?String(o):a!==void 0?String(a):"");return{id:e.id??ie(),label:n,geometry:s.readGeometry(e.geometry),properties:e.properties}},Q=function(e,s){const r=new URL(`${h(this,V)}/collections/${h(this,p).collectionId}/items`);for(const[o,a]of h(this,C))r.searchParams.append(o,a);return r.searchParams.set(h(this,p).searchProperty,`*${e}*`),r.searchParams.set("limit",String(s)),r.searchParams.set("f","json"),h(this,p).rewriteUrl?.(new URL(r))??r};async function Ce(t,e,s){try{const r=await t.fetch(e,{signal:s,headers:{Accept:"application/json"}});if(!r.ok)throw new Error("Request failed with status "+r.status);return await r.json()}catch(r){throw H(r)?r:new Error("Failed to search on OGC API Features service",{cause:r})}}function je(t){const e=new URL(t),s=new URLSearchParams(e.searchParams);return e.search="",{baseUrl:e.href.replace(/\/+$/,""),params:s}}var j;class He{constructor({references:e}){y(this,j);S(this,j,e.httpService)}createVectorSource(e){return Ie(e,h(this,j))}}j=new WeakMap;var E;class Te{constructor({references:e}){y(this,E);S(this,E,e.httpService)}createSearchSource(e){return new Ve(e,h(this,E))}}E=new WeakMap;const Ee="@open-pioneer/map-navigation",$=ce.bind(void 0,Ee),Ge=v.forwardRef(function(e,s){const{containerProps:r}=Z("initial-extent",e),{map:o}=D(e),a=$(),{buttonProps:n}=e;function i(){const c=o?.initialExtent;if(c){const l=[c.xMin,c.yMin,c.xMax,c.yMax];o.olView.fit(l,{duration:200})}}return m.jsx(z,{ref:s,buttonProps:n,label:a.formatMessage({id:"initial-extent.title"}),icon:m.jsx(he,{}),onClick:i,...r})}),Ke=v.forwardRef(function(e,s){return m.jsx(Y,{zoomDirection:"in",ref:s,...e})}),Je=v.forwardRef(function(e,s){return m.jsx(Y,{zoomDirection:"out",ref:s,...e})}),Y=v.forwardRef(function(e,s){const{buttonProps:r,zoomDirection:o}=e,{map:a}=D(e),n=$(),[i,c]=v.useState(!1),{defaultClassName:l,buttonLabel:f,buttonIcon:u}=ke(n,o),{containerProps:b}=Z(G("zoom",l),e);function F(){if(i)return;c(!0);const w=a?.olView;let d=a?.zoomLevel;const I=w?.getMaxZoom()||Number.MAX_SAFE_INTEGER,N=w?.getMinZoom()||0;w&&d!==void 0&&(o==="in"&&d<I?++d:o==="out"&&d>N&&--d,w.animate({zoom:d,duration:200},()=>c(!1)))}return m.jsx(z,{ref:s,buttonProps:r,label:f,icon:u,onClick:F,...b})});function ke(t,e){switch(e){case"in":return{defaultClassName:"zoom-in",buttonLabel:t.formatMessage({id:"zoom-in.title"}),buttonIcon:m.jsx(we,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:t.formatMessage({id:"zoom-out.title"}),buttonIcon:m.jsx(me,{})}}}const Ne=200;var g,q,k,ee;class Ae{constructor(e){y(this,g);x(this,"olMap");x(this,"handle");x(this,"_mapViews",ue());x(this,"_activeViewId",le(0));x(this,"backward",()=>{if(this.canBackward)R(this,g,k).call(this,this.activeViewId-1),R(this,g,q).call(this,this.activeViewId);else throw new Error("Backward is not possible at the moment")});x(this,"forward",()=>{if(this.canForward)R(this,g,k).call(this,this.activeViewId+1),R(this,g,q).call(this,this.activeViewId);else throw new Error("Forward is not possible at the moment")});this.olMap=e.olMap,this.handle=R(this,g,ee).call(this)}destroy(){this.handle&&fe(this.handle),this.handle=void 0}get activeViewId(){return this._activeViewId.value}get mapViews(){return this._mapViews}get canBackward(){return this.mapViews.get(this.activeViewId-1)!=null}get canForward(){return this.mapViews.get(this.activeViewId+1)!=null}}g=new WeakSet,q=function(e){const s=this.olMap.getView();this.olMap.setView(new de({center:this.mapViews.get(e).center,resolution:this.mapViews.get(e).resolution,projection:s.getProjection()}))},k=function(e){this._activeViewId.value=e},ee=function(){const e=this.olMap.on("moveend",()=>{s()}),s=()=>{const r=this.olMap,o=this.mapViews,a=r.getView(),n=a.getResolution(),i=a.getCenter();if(n!=null&&i!=null&&(i!==o.get(this.activeViewId)?.center||n!==o.get(this.activeViewId)?.resolution)){const c={resolution:n,center:i},l=this.activeViewId+1;for(const f of o.keys())f>l&&o.delete(f);for(const f of o.keys()){if(o.size<Ne)break;o.delete(f)}R(this,g,k).call(this,l),o.set(l,c)}};return e};const _=new WeakMap;function Oe(t){const[e,s]=v.useState();return v.useEffect(()=>{if(!t)return;let r=_.get(t);return r==null?(r={vm:new Ae(t),useCount:1},_.set(t,r)):r.useCount++,s(r.vm),()=>{s(void 0),r.useCount--,r.useCount===0&&(r.vm.destroy(),_.delete(t))}},[t]),e}const We=v.forwardRef(function(e,s){return m.jsx(te,{viewDirection:"forward",ref:s,...e})}),Xe=v.forwardRef(function(e,s){return m.jsx(te,{viewDirection:"backward",ref:s,...e})}),te=v.forwardRef(function(e,s){const r=$(),{buttonProps:o,viewDirection:a}=e,{map:n}=D(e),i=Oe(n),{defaultClassName:c,buttonLabel:l,buttonIcon:f}=_e(r,a),{containerProps:u}=Z(G("view",c),e),b=pe(()=>i?a==="forward"?i.canForward:i.canBackward:!1,[i,a]),F=()=>{i&&(a==="forward"?i.forward():i.backward())};return i&&m.jsx(z,{ref:s,...u,buttonProps:o,label:l,icon:f,onClick:F,isDisabled:!b})});function _e(t,e){switch(e){case"forward":return{defaultClassName:"view-forward",buttonLabel:t.formatMessage({id:"view-forward.title"}),buttonIcon:m.jsx(be,{})};case"backward":return{defaultClassName:"view-backward",buttonLabel:t.formatMessage({id:"view-backward.title"}),buttonIcon:m.jsx(ge,{})}}}export{Xe as H,Ge as I,Te as S,He as V,Ke as Z,Je as a,We as b};
