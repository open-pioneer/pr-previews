var _t=Object.defineProperty;var ht=e=>{throw TypeError(e)};var $t=(e,t,r)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var dt=(e,t,r)=>$t(e,typeof t!="symbol"?t+"":t,r),nt=(e,t,r)=>t.has(e)||ht("Cannot "+r);var i=(e,t,r)=>(nt(e,t,"read from private field"),r?r.call(e):t.get(e)),E=(e,t,r)=>t.has(e)?ht("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),F=(e,t,r,s)=>(nt(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r),a=(e,t,r)=>(nt(e,t,"access private method"),r);import{c as zt,i as pt,r as g,j as R}from"./CzUo6bX8-UUU.js";import{G as mt,T as ot}from"./C1o_VwAkx5Nm.js";import{b as Tt,aA as Zt,b2 as Vt,u as Gt,a_ as at,g as yt,b5 as gt}from"./B36mctiVgF5V.js";import{a as Bt,b as Jt,c as Wt,d as Kt,e as Qt}from"./CkG3hRXjrvfc.js";var Xt=Symbol.for("preact-signals");function rt(){if(P>1)P--;else{for(var e,t=!1;V!==void 0;){var r=V;for(V=void 0,it++;r!==void 0;){var s=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&bt(r))try{r.c()}catch(n){t||(e=n,t=!0)}r=s}}if(it=0,P--,t)throw e}}function Yt(e){if(P>0)return e();P++;try{return e()}finally{rt()}}var u=void 0;function ct(e){var t=u;u=void 0;try{return e()}finally{u=t}}var V=void 0,P=0,it=0,et=0;function wt(e){if(u!==void 0){var t=e.n;if(t===void 0||t.t!==u)return t={i:0,S:e,p:u.s,n:void 0,t:u,e:void 0,x:void 0,r:t},u.s!==void 0&&(u.s.n=t),u.s=t,e.n=t,32&u.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=u.s,t.n=void 0,u.s.n=t,u.s=t),t}}function x(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}x.prototype.brand=Xt;x.prototype.h=function(){return!0};x.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};x.prototype.U=function(e){if(this.t!==void 0){var t=e.e,r=e.x;t!==void 0&&(t.x=r,e.e=void 0),r!==void 0&&(r.e=t,e.x=void 0),e===this.t&&(this.t=r)}};x.prototype.subscribe=function(e){var t=this;return Lt(function(){var r=t.value,s=u;u=void 0;try{e(r)}finally{u=s}})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var e=u;u=void 0;try{return this.value}finally{u=e}};Object.defineProperty(x.prototype,"value",{get:function(){var e=wt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(it>100)throw new Error("Cycle detected");this.v=e,this.i++,et++,P++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{rt()}}}});function te(e){return new x(e)}function bt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function xt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function St(e){for(var t=e.s,r=void 0;t!==void 0;){var s=t.p;t.i===-1?(t.S.U(t),s!==void 0&&(s.n=t.n),t.n!==void 0&&(t.n.p=s)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=s}e.s=r}function T(e){x.call(this,void 0),this.x=e,this.s=void 0,this.g=et-1,this.f=4}(T.prototype=new x).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===et))return!0;if(this.g=et,this.f|=1,this.i>0&&!bt(this))return this.f&=-2,!0;var e=u;try{xt(this),u=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return u=e,St(this),this.f&=-2,!0};T.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}x.prototype.S.call(this,e)};T.prototype.U=function(e){if(this.t!==void 0&&(x.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};T.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(T.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=wt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Et(e){return new T(e)}function Rt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){P++;var r=u;u=void 0;try{t()}catch(s){throw e.f&=-2,e.f|=8,ut(e),s}finally{u=r,rt()}}}function ut(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Rt(e)}function ee(e){if(u!==this)throw new Error("Out-of-order effect");St(this),u=e,this.f&=-2,8&this.f&&ut(this),rt()}function X(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}X.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};X.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Rt(this),xt(this),P++;var e=u;return u=this,ee.bind(this,e)};X.prototype.N=function(){2&this.f||(this.f|=2,this.o=V,V=this)};X.prototype.d=function(){this.f|=8,1&this.f||ut(this)};function Lt(e){var t=new X(e);try{t.c()}catch(r){throw t.d(),r}return t.d.bind(t)}function k(e,t){return new ne(e,t?.equal)}function re(e,t){return new se(e,t?.equal)}function Be(e){return Yt(e)}function lt(e){return ct(e)}var N=Symbol("signal"),G=Symbol("equals"),It=class{[N];constructor(e){this[N]=e}get value(){return this[N].value}set value(e){throw new Error("Cannot update a readonly reactive object.")}trigger(){throw new Error("Cannot trigger this reactive object.")}peek(){return this[N].peek()}toJSON(){return this.value}toString(){return`Reactive[value=${oe(this[N].value)}]`}},se=class extends It{[G];constructor(e,t){const r=Et(t?ie(e,t):e);super(r),this[G]=t}},ne=class extends It{[G];constructor(e,t){super(te(e)),this[G]=t}get value(){return super.value}set value(e){ct(()=>this[G]?.(this.value,e))||(this[N].value=e)}};function ie(e,t){let r=!0,s;return function(){const o=e();return ct(()=>((r||!t(s,o))&&(s=o,r=!1),s))}}function oe(e){return typeof e=="string"?JSON.stringify(e):String(e)}function ae(e,t){return e===t?!0:e.length===t.length&&e.every((r,s)=>r===t[s])}function ce(e,t,r,s){const n=Et(t),o=s?.immediate??!1,l=s?.equal??ue;let f=!0,h,p;function S(){const w=p;p=void 0;try{w?.()}catch(m){throw L.destroy(),m}}const v=e(()=>{const w=n.value;lt(()=>{const m=h,C=f&&o||!f&&!l(m,w);(C||f)&&(h=w,f=!1),C&&(S(),p=r(w,m))})}),L={destroy(){try{S()}finally{v.destroy()}}};return L}function ue(e,t){return e===t}function le(e){return{destroy:Lt(e)}}function fe(e,t){let r=0,s=!0,n;return n=le(()=>{const o=r++;if(o===0)return e();o===1&&lt(()=>{try{t()}finally{s?Promise.resolve().then(()=>n?.destroy()):n?.destroy()}})}),s=!1,n}function Ct(e){Promise.reject(new Error("Error in effect or watch callback",{cause:e}))}var he=class{queue=[];channel=new MessageChannel;constructor(){this.channel.port2.start()}enqueue(e){const t={fn:e,destroyed:!1};return this.queue.push(t),this.queue.length===1&&this.scheduleIteration(),{destroy(){t.destroyed||(t.destroyed=!0)}}}messageHandler=()=>this.runIteration();scheduleIteration(){const e=this.channel;e.port2.addEventListener("message",this.messageHandler),e.port1.postMessage("")}runIteration(){this.channel.port2.removeEventListener("message",this.messageHandler);const e=this.queue;this.queue=[];for(const t of e)if(!t.destroyed)try{t.fn()}catch(r){Ct(r)}}};function de(e){const t=new ve(e);return{destroy:t.destroy.bind(t)}}var ve=class{callback;cleanup;effectHandle;scheduledExecution;isDestroyed=!1;initialExecution=!0;isExecuting=!1;constructor(e){this.callback=e,this.execute(),this.initialExecution=!1}destroy(){if(!this.isDestroyed){this.isDestroyed=!0;try{this.triggerCleanup()}finally{this.effectHandle?.destroy(),this.effectHandle=void 0,this.scheduledExecution?.destroy(),this.scheduledExecution=void 0}}}execute(){this.isExecuting=!0;try{const e=fe(()=>{if(this.initialExecution)this.triggerCallback();else try{this.triggerCallback()}catch(t){Ct(t)}},()=>this.scheduleExecution());this.isDestroyed?e.destroy():this.effectHandle=e}finally{this.isExecuting=!1}}triggerCallback(){this.triggerCleanup(),this.isDestroyed||(this.cleanup=this.callback())}triggerCleanup(){const e=this.cleanup;this.cleanup=void 0;try{e&&lt(e)}catch(t){throw this.destroy(),t}}scheduleExecution(){if(!this.isDestroyed){if(this.effectHandle?.destroy(),this.effectHandle=void 0,this.isExecuting)throw new Error("Cycle detected");this.scheduledExecution||(this.scheduledExecution=ye(()=>{try{this.execute()}finally{this.scheduledExecution=void 0}}))}}};function pe(e,t,r){return ce(de,e,t,{equal:ae,...r})}var me=new he;function ye(e){return me.enqueue(e)}function Je(e){return new ge(e)}var b,H,y,j,Y,Ut,Ft,vt,ge=(vt=class{constructor(e){E(this,y);E(this,b,new Map);E(this,H,k(!1));if(e)for(const[t,r]of e)i(this,b).set(t,k(r))}get size(){return a(this,y,j).call(this),i(this,b).size}entries(){return a(this,y,j).call(this),a(this,y,Ut).call(this)}keys(){return a(this,y,j).call(this),i(this,b).keys()}values(){return a(this,y,j).call(this),a(this,y,Ft).call(this)}[Symbol.iterator](){return this.entries()}clear(){const e=!!i(this,b).size;i(this,b).clear(),e&&a(this,y,Y).call(this)}delete(e){const t=i(this,b).delete(e);return t&&a(this,y,Y).call(this),t}get(e){return a(this,y,j).call(this),i(this,b).get(e)?.value}has(e){return a(this,y,j).call(this),i(this,b).has(e)}set(e,t){const r=i(this,b).get(e);return r?r.value=t:(i(this,b).set(e,k(t)),a(this,y,Y).call(this)),this}},b=new WeakMap,H=new WeakMap,y=new WeakSet,j=function(){i(this,H).value},Y=function(){i(this,H).value=!i(this,H).peek()},Ut=function*(){const e=i(this,b).entries();for(const[t,r]of e)yield[t,r.value]},Ft=function*(){const e=i(this,b).values();for(const t of e)yield t.value},vt);function Z(e){return new we(e)}var d,_,c,q,tt,kt,Pt,I,A,$,we=($=class{constructor(t){E(this,c);E(this,d);E(this,_,k(!1));F(this,d,t?Array.from(t).map(r=>k(r)):[])}get length(){return a(this,c,I).call(this),i(this,d).length}push(...t){i(this,d).push(...t.map(r=>k(r))),a(this,c,A).call(this)}pop(){if(i(this,d).length===0)return;const t=i(this,d).pop();return a(this,c,A).call(this),t.value}unshift(...t){i(this,d).unshift(...t.map(r=>k(r))),a(this,c,A).call(this)}shift(){if(i(this,d).length===0)return;const t=i(this,d).shift();return a(this,c,A).call(this),t.value}splice(t,r,...s){const n=i(this,d).splice(t,r??i(this,d).length,...s.map(o=>k(o)));return(s!=null&&s.length!==0||n.length!==0)&&a(this,c,A).call(this),n.map(o=>o.value)}sort(t){i(this,d).sort((r,s)=>t(r.value,s.value)),a(this,c,A).call(this)}getItems(){return a(this,c,I).call(this),i(this,d).map(t=>t.value)}at(t){return a(this,c,I).call(this),i(this,d).at(t)?.value}get(t){return a(this,c,I).call(this),i(this,d)[t]?.value}set(t,r){if(t<0||t>=i(this,d).length)throw new Error("index out of bounds");const s=i(this,d)[t];s.value=r}slice(...t){a(this,c,I).call(this);const r=i(this,d).slice(...t).map(s=>s.value);return Z(r)}concat(...t){const r=this.getItems().concat(...t.map(s=>s instanceof $?s.getItems():s));return Z(r)}includes(t,r){return a(this,c,q).call(this,s=>s===t,r)!==-1}indexOf(t,r){return a(this,c,q).call(this,s=>s===t,r)}lastIndexOf(t){return a(this,c,tt).call(this,r=>r===t)}find(t){const r=a(this,c,q).call(this,t);return this.get(r)}findLast(t){const r=a(this,c,tt).call(this,t);return this.get(r)}findIndex(t){return a(this,c,q).call(this,t)}findLastIndex(t){return a(this,c,tt).call(this,t)}some(t){return a(this,c,q).call(this,t)!==-1}every(t){return a(this,c,q).call(this,(r,s)=>!t(r,s))===-1}forEach(t){for(const[r,s]of this.entries())t(s,r)}filter(t){return Z(this.getItems().filter((r,s)=>t(r,s)))}map(t){return Z(this.getItems().map((r,s)=>t(r,s)))}flatMap(t){return Z(this.getItems().flatMap((r,s)=>t(r,s)))}reduce(t,...r){return a(this,c,I).call(this),i(this,d).reduce((s,n,o)=>t(s,n.value,o),...r)}reduceRight(t,...r){return a(this,c,I).call(this),i(this,d).reduceRight((s,n,o)=>t(s,n.value,o),...r)}keys(){return a(this,c,I).call(this),i(this,d).keys()}values(){return a(this,c,I).call(this),a(this,c,kt).call(this)}entries(){return a(this,c,I).call(this),a(this,c,Pt).call(this)}[Symbol.iterator](){return this.values()}},d=new WeakMap,_=new WeakMap,c=new WeakSet,q=function(t,r){for(let s=r??0,n=this.length;s<n;++s){const o=this.get(s);if(t(o,s))return s}return-1},tt=function(t){for(let r=this.length;r-- >0;){const s=this.get(r);if(t(s,r))return r}return-1},kt=function*(){for(const t of i(this,d))yield t.value},Pt=function*(){for(const[t,r]of i(this,d).entries())yield[t,r.value]},I=function(){i(this,_).value},A=function(){i(this,_).value=!i(this,_).peek()},$);const be="next";function xe(e,t,r,s){const n=new URL(e),o=n.searchParams;return o.set("bbox",t.join(",")),o.set("bbox-crs",r),o.set("crs",r),o.set("f","json"),s?.(new URL(n))??n}function Se(e,t,r){const s=new URL(e),n=s.searchParams;return n.set("offset",t.toString()),n.set("limit",r.toString()),s.toString()}function Mt(e){if(!Array.isArray(e))return;const r=e.filter(s=>s.rel===be);if(r.length===1)return r[0]?.href}async function jt(e,t,r,s){let n=[];const o={headers:{Accept:"application/geo+json"},signal:s},l=await r.fetch(e,o);if(l.status!==200)throw new Error(`Failed to query features from service (status code ${l.status})`);const f=await l.json();t&&(n=t.readFeatures(f));const h=Mt(f.links);return{features:n,numberMatched:f.numberMatched,nextURL:h}}async function Ee(e,t){const r={supportsOffsetStrategy:!1},s=new URL(e);s.searchParams.set("limit","1"),s.searchParams.set("f","json");const n=await t.fetch(s.toString(),{headers:{Accept:"application/geo+json"}});if(n.status!==200)throw new Error(`Failed to probe collection information (status code ${n.status})`);const o=await n.json(),l=Mt(o.links);if(!l)return r;const h=new URL(l).searchParams.has("offset");return r.supportsOffsetStrategy=h,r}async function Re(e){const{fullURL:t,featureFormat:r,signal:s,addFeatures:n,queryFeatures:o}=e,l=e.limit,f=e.maxConcurrentRequests;let h=0,p=t;const S=[];let v;for(;p;){let L;v==null?L=f:L=Math.ceil((v-h)/l),L=Math.max(1,Math.min(L,f));const w=[];for(let C=0;C<L;++C)w.push(Se(t,h,l)),h+=l;const m=await qt(w,r,e.httpService,s,n,o);S.push(...m.features),p=m.nextURL,m.numberMatched!=null&&(v=m.numberMatched)}return S}const D=zt("ogc-features:OgcFeatureSourceFactory"),Le=5e3,Ie=6;function Ce(e,t){return Ue(e,{httpService:t})}function Ue(e,t){const r=t.httpService,s=`${e.baseUrl}/collections/${e.collectionId}/items?`,n=new Tt({format:new mt,strategy:Zt,attributions:e.attributions,...e.additionalOptions}),o=t.queryFeaturesParam??jt,l=t.getCollectionInfosParam??Ee,f=t.addFeaturesParam||function(v){D.debug(`Adding ${v.length} features`),n.addFeatures(v)};let h,p;const S=async(v,L,w,m,C)=>{p??=l(s,r);let O;try{O=await p}catch(M){D.error("Failed to retrieve collection information",M),C?.(),p=void 0;return}h?.abort("Extent changed"),h=new AbortController;const Ht=xe(s,v,e.crs,e.rewriteUrl);let st=e?.strategy||(O?.supportsOffsetStrategy?"offset":"next");st==="offset"&&!O?.supportsOffsetStrategy&&(st="next");try{const M=await Fe(st,{fullURL:Ht.toString(),httpService:r,featureFormat:n.getFormat(),queryFeatures:o,addFeatures:f,limit:e.limit??Le,maxConcurrentRequests:e.maxConcurrentRequests??Ie,signal:h.signal,collectionInfos:O});m?.(M),D.debug("Finished loading features for extent:",v)}catch(M){pt(M)?(D.debug("Query-Feature-Request aborted",M),n.removeLoadedExtent(v),C?.()):D.error("Failed to load features",M)}};return n.setLoader(S),n}function Fe(e,t){switch(e){case"next":return ke(t);case"offset":return Re(t)}}async function ke(e){const t=e.limit;let r=new URL(e.fullURL);r.searchParams.set("limit",t.toString());let s=[];do{const n=await qt([r.toString()],e.featureFormat,e.httpService,e.signal,e.addFeatures,e.queryFeatures);if(s=s.concat(n.features),!n.nextURL)break;r=new URL(n.nextURL)}while(!0);return s}async function qt(e,t,r,s,n,o=jt){const l={nextURL:void 0,numberMatched:void 0,features:[]},f=e.map(async(h,p)=>{const S=p===e.length-1,v=await o(h,t,r,s);n(v.features),D.debug(`NextURL for index = ${p} (isLast = ${S}): ${v.nextURL||"No Next URL"}`),l.features.push(...v.features),S&&(l.numberMatched=v.numberMatched,l.nextURL=v.nextURL)});return await Promise.all(f),l}var U,B,J,W,z,At,Ot;class Pe{constructor(t,r){E(this,z);dt(this,"label");E(this,U);E(this,B);E(this,J);E(this,W);this.label=t.label,F(this,U,t),F(this,B,r);const{baseUrl:s,params:n}=je(t.baseUrl);F(this,J,s),F(this,W,n)}async search(t,{mapProjection:r,maxResults:s,signal:n}){const o=a(this,z,Ot).call(this,t,s),l=new mt({dataProjection:"EPSG:4326",featureProjection:r});return(await Me(i(this,B),o,n)).features.map(h=>a(this,z,At).call(this,h,l))}}U=new WeakMap,B=new WeakMap,J=new WeakMap,W=new WeakMap,z=new WeakSet,At=function(t,r){const s=i(this,U).renderLabel?.(t),n=t.properties[i(this,U).labelProperty],o=t.properties[i(this,U).searchProperty],l=s||(n!==void 0?String(n):o!==void 0?String(o):"");return{id:t.id??Vt(),label:l,geometry:r.readGeometry(t.geometry),properties:t.properties}},Ot=function(t,r){const s=new URL(`${i(this,J)}/collections/${i(this,U).collectionId}/items`);for(const[n,o]of i(this,W))s.searchParams.append(n,o);return s.searchParams.set(i(this,U).searchProperty,`*${t}*`),s.searchParams.set("limit",String(r)),s.searchParams.set("f","json"),i(this,U).rewriteUrl?.(new URL(s))??s};async function Me(e,t,r){try{const s=await e.fetch(t,{signal:r,headers:{Accept:"application/json"}});if(!s.ok)throw new Error("Request failed with status "+s.status);return await s.json()}catch(s){throw pt(s)?s:new Error("Failed to search on OGC API Features service",{cause:s})}}function je(e){const t=new URL(e),r=new URLSearchParams(t.searchParams);return t.search="",{baseUrl:t.href.replace(/\/+$/,""),params:r}}var K;class We{constructor({references:t}){E(this,K);F(this,K,t.httpService)}createVectorSource(t){return Ce(t,i(this,K))}}K=new WeakMap;var Q;class Ke{constructor({references:t}){E(this,Q);F(this,Q,t.httpService)}createSearchSource(t){return new Pe(t,i(this,Q))}}Q=new WeakMap;function qe(e,t){const r=g.useRef(e);r.current=e;const s=Ne(t);return g.useMemo(()=>re(()=>r.current()),[s])}function Ae(e){const t=g.useCallback(()=>e.peek(),[e]),r=g.useCallback(n=>{const o=pe(()=>[e.value],n);return()=>o.destroy()},[e]),s=g.useSyncExternalStore(r,t);return g.useDebugValue(s),s}function Oe(e,t){const r=qe(e,t),s=Ae(r);return g.useDebugValue(s),s}function Ne(e){const t=g.useRef();return(t.current==null||!De(t.current,e))&&(t.current=e??[]),t.current}function De(e,t){return e===t?!0:e.length===(t?.length??0)&&e.every((r,s)=>r===t[s])}const He="@open-pioneer/map-navigation",ft=Gt.bind(void 0,He),Qe=g.forwardRef(function(t,r){const{containerProps:s}=at("initial-extent",t),{map:n}=yt(t),o=ft();function l(){const f=n?.initialExtent,h=n?.olMap;if(f&&h){const p=[f.xMin,f.yMin,f.xMax,f.yMax];h.getView().fit(p,{duration:200})}}return R.jsx(ot,{ref:r,label:o.formatMessage({id:"initial-extent.title"}),icon:R.jsx(Bt,{}),onClick:l,...s})}),Xe=g.forwardRef(function(t,r){return R.jsx(Nt,{zoomDirection:"in",ref:r,...t})}),Ye=g.forwardRef(function(t,r){return R.jsx(Nt,{zoomDirection:"out",ref:r,...t})}),Nt=g.forwardRef(function(t,r){const{zoomDirection:s}=t,{map:n}=yt(t),o=ft(),[l,f]=g.useState(!1),{defaultClassName:h,buttonLabel:p,buttonIcon:S}=_e(o,s),{containerProps:v}=at(gt("zoom",h),t);function L(){if(l)return;f(!0);const w=n?.olMap.getView();let m=w?.getZoom();const C=w?.getMaxZoom()||Number.MAX_SAFE_INTEGER,O=w?.getMinZoom()||0;w&&m!==void 0&&(s==="in"&&m<C?++m:s==="out"&&m>O&&--m,w.animate({zoom:m,duration:200},()=>f(!1)))}return R.jsx(ot,{ref:r,label:p,icon:S,onClick:L,...v})});function _e(e,t){switch(t){case"in":return{defaultClassName:"zoom-in",buttonLabel:e.formatMessage({id:"zoom-in.title"}),buttonIcon:R.jsx(Wt,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:e.formatMessage({id:"zoom-out.title"}),buttonIcon:R.jsx(Jt,{})}}}const tr=g.forwardRef(function(t,r){return R.jsx(Dt,{viewDirection:"forward",ref:r,...t})}),er=g.forwardRef(function(t,r){return R.jsx(Dt,{viewDirection:"backward",ref:r,...t})}),Dt=g.forwardRef(function(t,r){const{viewDirection:s,viewModel:n}=t,o=ft(),{defaultClassName:l,buttonLabel:f,buttonIcon:h}=$e(o,s),{containerProps:p}=at(gt("view",l),t),{isDisabled:S}=Oe(()=>({isDisabled:s=="forward"?!n.canForward:!n.canBackward}),[n]);return R.jsx(ot,{ref:r,label:f,icon:h,onClick:s=="forward"?n.forward:n.backward,...p,isDisabled:S})});function $e(e,t){switch(t){case"forward":return{defaultClassName:"view-forward",buttonLabel:e.formatMessage({id:"view-forward.title"}),buttonIcon:R.jsx(Qt,{})};case"backward":return{defaultClassName:"view-backward",buttonLabel:e.formatMessage({id:"view-backward.title"}),buttonIcon:R.jsx(Kt,{})}}}export{er as H,Qe as I,Ke as S,We as V,Xe as Z,Z as a,Je as b,Ye as c,tr as d,re as e,Be as f,k as r,Oe as u,pe as w};
