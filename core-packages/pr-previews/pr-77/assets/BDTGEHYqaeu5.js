var A=n=>{throw TypeError(n)};var b=(n,e,t)=>e.has(n)||A("Cannot "+t);var u=(n,e,t)=>(b(n,e,"read from private field"),t?t.call(n):e.get(n)),y=(n,e,t)=>e.has(n)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),p=(n,e,t,i)=>(b(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),h=(n,e,t)=>(b(n,e,"access private method"),t);import{r as d,h as L,j as v,a3 as j,c as C,H as I}from"./BbD1ObBocF77.js";import{u as T}from"./BG7f7T4POdrF.js";import{u as M}from"./UN9yAB02F1-Z.js";function R(n){const{viewBox:e="0 0 24 24",d:t,displayName:i,defaultProps:o={}}=n,r=d.Children.toArray(n.path),s=L((a,f)=>v.jsx(j,{ref:f,viewBox:e,...o,...a,children:r.length?r:v.jsx("path",{fill:"currentColor",d:t})}));return s.displayName=i,s}const N=C("notifier:NotificationService");var l,m,w,c,g,x,D;class ${constructor(){y(this,c);y(this,l);y(this,m);y(this,w)}destroy(){clearTimeout(u(this,w)),p(this,w,void 0)}notify(e){h(this,c,x).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}success(e){h(this,c,g).call(this,"success",e)}info(e){h(this,c,g).call(this,"info",e)}warning(e){h(this,c,g).call(this,"warning",e)}error(e){h(this,c,g).call(this,"error",e)}closeAll(){h(this,c,x).call(this,"closeAll")}registerHandler(e){if(u(this,l))return N.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};p(this,l,e);const t=u(this,m);if(p(this,m,void 0),t)for(const[o,...r]of t)e[o](...r);let i=!1;return{destroy:()=>{i||(i=!0,u(this,l)===e&&p(this,l,void 0))}}}}l=new WeakMap,m=new WeakMap,w=new WeakMap,c=new WeakSet,g=function(e,t){typeof t=="string"&&(t={message:t}),this.notify({...t,level:e})},x=function(e,...t){if(u(this,l))u(this,l)[e](...t);else{const i=u(this,m)??p(this,m,[]);if(i.length>=1024){N.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:t});return}i.push([e,...t])}},D=function(){u(this,l)||N.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};function H(n){const e=d.useRef(null);return d.useLayoutEffect(()=>{e.current=n}),d.useCallback((...i)=>{const o=e.current;return o(...i)},[])}const k=1,S=d.createContext(k);S.displayName="LevelContext";d.forwardRef(function(e,t){const{children:i,...o}=e,r=O(),s=P(r);return v.jsx(I,{as:s,ref:t,...o,children:i})});function O(){const n=d.useContext(S);return Math.min(n,6)}function P(n){return`h${n}`}var Z={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var r="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(r=o(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var a in r)e.call(r,a)&&r[a]&&(s=o(s,a));return s}function o(r,s){return s?r?r+" "+s:r+s:r}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Z);const F="@open-pioneer/notifier",G=T.bind(void 0,F),U=R({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"}),V=!1;function q(n){const{position:e="top-right"}=n,t=M(),i=G("notifier.NotificationService"),[o,r]=d.useState(!V),s=H(f=>{const E=f.level==="error"?v.jsx(U,{h:"100%",w:"100%"}):void 0;t({position:e,title:f.title,description:f.message||null,status:f.level,isClosable:!0,duration:f.displayDuration??null,icon:E})}),a=H(()=>{t.closeAll()});return d.useEffect(()=>{const f=i.registerHandler({showNotification:s,closeAll:a});return()=>f.destroy()},[o,i,s,a]),v.jsx(v.Fragment,{})}export{$ as N,q as a};