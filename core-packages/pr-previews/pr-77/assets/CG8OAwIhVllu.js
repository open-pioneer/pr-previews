var u=e=>{throw TypeError(e)};var f=(e,t,r)=>t.has(e)||u("Cannot "+r);var p=(e,t,r)=>(f(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),w=(e,t,r,o)=>(f(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),g=(e,t,r)=>(f(e,t,"access private method"),r);import{ae as v,af as q}from"./BbD1ObBocF77.js";var c,i,b;class I{constructor(t){d(this,i);d(this,c);w(this,c,t.references.interceptors.map((r,o)=>[t.referencesMeta.interceptors[o].serviceId,r]))}async fetch(t,r){const o=r?.signal??void 0,n=Object.assign({},r?.context),s=A(r);h(o);let a=y(t);{const l={target:a,signal:o??new AbortController().signal,context:n,options:s};h(o),await g(this,i,b).call(this,l),a=l.target}const m=new Request(a,{...s,signal:o});return await window.fetch(m)}}c=new WeakMap,i=new WeakSet,b=async function(t){const{signal:r}=t;for(const[o,n]of p(this,c))if(h(r),n.beforeRequest)try{await n.beforeRequest(t)}catch(s){throw v(s),new Error(`Interceptor '${o}' failed with an error`,{cause:s})}};function y(e){return typeof e=="string"?new URL(e,window.location.href):e}function A(e){const t=e?.method??"GET",r=new Headers(e?.headers??{}),o={...e,method:t,headers:r};for(const n in o)R[n]&&delete o[n];return o}const R={context:1,signal:1};function h(e){e?.aborted&&q()}export{I as H};
