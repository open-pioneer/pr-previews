var T=t=>{throw TypeError(t)};var q=(t,e,i)=>e.has(t)||T("Cannot "+i);var u=(t,e,i)=>(q(t,e,"read from private field"),i?i.call(t):e.get(t)),E=(t,e,i)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),l=(t,e,i,r)=>(q(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),_=(t,e,i)=>(q(t,e,"access private method"),i);import{ak as rt,ad as nt,al as st,c as ot,r as c,j as d,O as ut}from"./CHZyiO-hoVbm.js";import{u as at,a as ct}from"./Ckh078_tvAp5.js";var ht=Symbol.for("preact-signals");function R(){if(p>1)p--;else{for(var t,e=!1;m!==void 0;){var i=m;for(m=void 0,j++;i!==void 0;){var r=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&B(i))try{i.c()}catch(o){e||(t=o,e=!0)}i=r}}if(j=0,p--,e)throw t}}var n=void 0;function N(t){var e=n;n=void 0;try{return t()}finally{n=e}}var m=void 0,p=0,j=0,A=0;function W(t){if(n!==void 0){var e=t.n;if(e===void 0||e.t!==n)return e={i:0,S:t,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:e},n.s!==void 0&&(n.s.n=e),n.s=e,t.n=e,32&n.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=n.s,e.n=void 0,n.s.n=e,n.s=e),e}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=ht;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};s.prototype.subscribe=function(t){var e=this;return O(function(){var i=e.value,r=n;n=void 0;try{t(i)}finally{n=r}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){var t=n;n=void 0;try{return this.value}finally{n=t}};Object.defineProperty(s.prototype,"value",{get:function(){var t=W(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(j>100)throw new Error("Cycle detected");this.v=t,this.i++,A++,p++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{R()}}}});function ft(t){return new s(t)}function B(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function $(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function G(t){for(var e=t.s,i=void 0;e!==void 0;){var r=e.p;e.i===-1?(e.S.U(e),r!==void 0&&(r.n=e.n),e.n!==void 0&&(e.n.p=r)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=r}t.s=i}function g(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=A-1,this.f=4}(g.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===A))return!0;if(this.g=A,this.f|=1,this.i>0&&!B(this))return this.f&=-2,!0;var t=n;try{$(this),n=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return n=t,G(this),this.f&=-2,!0};g.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}s.prototype.S.call(this,t)};g.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(g.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=W(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function J(t){return new g(t)}function Q(t){var e=t.u;if(t.u=void 0,typeof e=="function"){p++;var i=n;n=void 0;try{e()}catch(r){throw t.f&=-2,t.f|=8,D(t),r}finally{n=i,R()}}}function D(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Q(t)}function lt(t){if(n!==this)throw new Error("Out-of-order effect");G(this),n=t,this.f&=-2,8&this.f&&D(this),R()}function b(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}b.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};b.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Q(this),$(this),p++;var t=n;return n=this,lt.bind(this,t)};b.prototype.N=function(){2&this.f||(this.f|=2,this.o=m,m=this)};b.prototype.d=function(){this.f|=8,1&this.f||D(this)};function O(t){var e=new b(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}function dt(t){let e;return{destroy:O(function(){this[vt]=t.bind(void 0),e=this[pt].bind(this)}),start:e}}var vt="N",pt="S";function Ht(t,e){return new St(t,e?.equal)}function yt(t,e){return new gt(t,e?.equal)}function K(t){return N(t)}var v=Symbol("signal"),x=Symbol("equals"),V=class{[v];constructor(t){this[v]=t}get value(){return this[v].value}set value(t){throw new Error("Cannot update a readonly reactive object.")}trigger(){throw new Error("Cannot trigger this reactive object.")}peek(){return this[v].peek()}toJSON(){return this.value}toString(){return`Reactive[value=${mt(this[v].value)}]`}},gt=class extends V{[x];constructor(t,e){const i=J(e?Et(t,e):t);super(i),this[x]=e}},St=class extends V{[x];constructor(t,e){super(ft(t)),this[x]=e}get value(){return super.value}set value(t){N(()=>this[x]?.(this.value,t))||(this[v].value=t)}};function Et(t,e){let i=!0,r;return function(){const h=t();return N(()=>((i||!e(r,h))&&(r=h,i=!1),r))}}function mt(t){return typeof t=="string"?JSON.stringify(t):String(t)}function Y(t,e){return t===e?!0:t.length===e.length&&t.every((i,r)=>i===e[r])}function z(t,e,i,r){const o=J(e),h=r?.immediate??!1,et=r?.equal??xt;let k=!0,L,I;function P(){const S=I;I=void 0;try{S?.()}catch(w){throw U.destroy(),w}}const it=t(()=>{const S=o.value;K(()=>{const w=L,M=k&&h||!k&&!et(w,S);(M||k)&&(L=S,k=!1),M&&(P(),I=i(S,w))})}),U={destroy(){try{P()}finally{it.destroy()}}};return U}function xt(t,e){return t===e}function bt(t){return{destroy:O(t)}}function kt(t,e,i){return z(bt,t,e,{equal:Y,...i})}function X(t){Promise.reject(new Error("Error in effect or watch callback",{cause:t}))}var wt=class{queue=[];channel=new MessageChannel;constructor(){this.channel.port2.start()}enqueue(t){const e={fn:t,destroyed:!1};return this.queue.push(e),this.queue.length===1&&this.scheduleIteration(),{destroy(){e.destroyed||(e.destroyed=!0)}}}messageHandler=()=>this.runIteration();scheduleIteration(){const t=this.channel;t.port2.addEventListener("message",this.messageHandler),t.port1.postMessage("")}runIteration(){this.channel.port2.removeEventListener("message",this.messageHandler);const t=this.queue;this.queue=[];for(const e of t)if(!e.destroyed)try{e.fn()}catch(i){X(i)}}};function At(t){const e=new Ct(t);return{destroy:e.destroy.bind(e)}}var Ct=class{callback;cleanup;watcher;scheduledExecution;isDestroyed=!1;initialExecution=!0;isExecuting=!1;constructor(t){this.callback=t,this.watcher=dt(this.scheduleExecution),this.execute(),this.initialExecution=!1}destroy(){if(!this.isDestroyed){this.isDestroyed=!0;try{this.triggerCleanup()}finally{this.watcher?.destroy(),this.watcher=void 0,this.scheduledExecution?.destroy(),this.scheduledExecution=void 0}}}execute(){const t=this.watcher;if(!t)return;this.isExecuting=!0;const e=t.start();try{if(this.initialExecution)try{this.triggerCallback()}catch(i){throw this.destroy(),i}else try{this.triggerCallback()}catch(i){X(i)}}finally{e(),this.isExecuting=!1}this.isDestroyed&&this.triggerCleanup()}triggerCallback(){if(!this.isDestroyed){this.triggerCleanup();const t=this.callback();typeof t=="function"&&(this.cleanup=t)}}triggerCleanup(){const t=this.cleanup;this.cleanup=void 0;try{t&&K(t)}catch(e){throw this.destroy(),e}}scheduleExecution=()=>{if(!this.isDestroyed){if(this.isExecuting)throw new Error("Cycle detected");this.scheduledExecution||(this.scheduledExecution=Ft(()=>{try{this.execute()}finally{this.scheduledExecution=void 0}}))}}};function It(t,e,i){return z(At,t,e,{equal:Y,...i})}var qt=new wt;function Ft(t){return qt.enqueue(t)}const F=ot("authentication:AuthService");var f,a,y,C,Z;class Wt{constructor(e){E(this,C);E(this,f);E(this,a);E(this,y);l(this,f,e.references.plugin),l(this,y,kt(()=>[u(this,f).getAuthState()],([i])=>{_(this,C,Z).call(this,i)},{immediate:!1})),F.debug(`Constructed with initial auth state '${this.getAuthState().kind}'`,this.getAuthState())}destroy(){u(this,a)?.reject(rt()),l(this,a,void 0),l(this,y,nt(u(this,y)))}getAuthState(){return u(this,f).getAuthState()}getSessionInfo(){return this.getAuthState().kind!=="pending"?Promise.resolve(H(this.getAuthState())):(u(this,a)||l(this,a,st()),u(this,a).promise)}getLoginBehavior(){return u(this,f).getLoginBehavior()}logout(){F.debug("Triggering logout"),u(this,f).logout()}}f=new WeakMap,a=new WeakMap,y=new WeakMap,C=new WeakSet,Z=function(e){e.kind!=="pending"&&u(this,a)&&(u(this,a).resolve(H(e)),l(this,a,void 0)),F.debug(`Auth state changed to '${e.kind}'`,e)};function H(t){return t.kind==="authenticated"?t.sessionInfo:void 0}const tt="@open-pioneer/authentication",jt=at.bind(void 0,tt),Rt=ct.bind(void 0,tt);function Nt(t,e){const i=c.useRef(t);i.current=t;const r=Lt(e);return c.useMemo(()=>yt(()=>i.current()),[r])}function Dt(t){const e=c.useCallback(()=>t.peek(),[t]),i=c.useCallback(o=>{const h=It(()=>[t.value],o);return()=>h.destroy()},[t]),r=c.useSyncExternalStore(i,e);return c.useDebugValue(r),r}function Ot(t,e){const i=Nt(t,e),r=Dt(i);return c.useDebugValue(r),r}function Lt(t){const e=c.useRef();return(e.current==null||!Pt(e.current,t))&&(e.current=t??[]),e.current}function Pt(t,e){return t===e?!0:t.length===(e?.length??0)&&t.every((i,r)=>i===e[r])}function Ut(t){return Ot(()=>t.getAuthState(),[t])}const Bt=t=>{const e=jt("authentication.AuthService"),i=Ut(e),r=Rt(),o=c.useMemo(()=>{if(i.kind==="not-authenticated")return e.getLoginBehavior()},[e,i.kind]);switch(c.useEffect(()=>{i.kind==="not-authenticated"&&o?.kind==="effect"&&o.login()},[o,i.kind]),i.kind){case"pending":return null;case"not-authenticated":{if(!o||o.kind!=="fallback")return null;const h=o.Fallback;return t.renderFallback?d.jsx(d.Fragment,{children:t.renderFallback(h)}):d.jsx(h,{...t.fallbackProps})}case"error":return t.renderErrorFallback?t.renderErrorFallback(i.error):t.errorFallback?d.jsx(t.errorFallback,{error:i.error}):d.jsx(ut,{className:"authentication-error",children:r.formatMessage({id:"auth-error"})});case"authenticated":return d.jsx(d.Fragment,{children:t.children})}};export{Wt as A,Bt as F,Ht as r,Ut as u};
