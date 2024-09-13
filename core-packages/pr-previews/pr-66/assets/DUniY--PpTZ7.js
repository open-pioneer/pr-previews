var x=t=>{throw TypeError(t)};var g=(t,e,n)=>e.has(t)||x("Cannot "+n);var f=(t,e,n)=>(g(t,e,"read from private field"),n?n.call(t):e.get(t)),m=(t,e,n)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),d=(t,e,n,i)=>(g(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),b=(t,e,n)=>(g(t,e,"access private method"),n);import{r as u,q as E,j as h,a0 as L,c as j}from"./BDSkedxQL-YV.js";import{H as C}from"./5stHmKxIU7Tc.js";import{u as I}from"./B0WlhuaTcrRe.js";import{u as T}from"./B1KWF3RB_0ND.js";function M(t){const{viewBox:e="0 0 24 24",d:n,displayName:i,defaultProps:s={}}=t,r=u.Children.toArray(t.path),o=E((a,c)=>h.jsx(L,{ref:c,viewBox:e,...s,...a,children:r.length?r:h.jsx("path",{fill:"currentColor",d:n})}));return o.displayName=i,o}const w=j("notifier:NotificationService");var l,p,y,v,N,R;class K{constructor(){m(this,v);m(this,l);m(this,p);m(this,y)}destroy(){clearTimeout(f(this,y)),d(this,y,void 0)}notify(e){b(this,v,N).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}closeAll(){b(this,v,N).call(this,"closeAll")}registerHandler(e){if(f(this,l))return w.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};d(this,l,e);const n=f(this,p);if(d(this,p,void 0),n)for(const[s,...r]of n)e[s](...r);let i=!1;return{destroy:()=>{i||(i=!0,f(this,l)===e&&d(this,l,void 0))}}}}l=new WeakMap,p=new WeakMap,y=new WeakMap,v=new WeakSet,N=function(e,...n){if(f(this,l))f(this,l)[e](...n);else{const i=f(this,p)??d(this,p,[]);if(i.length>=1024){w.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:n});return}i.push([e,...n])}},R=function(){f(this,l)||w.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};function A(t){const e=u.useRef(null);return u.useLayoutEffect(()=>{e.current=t}),u.useCallback((...i)=>{const s=e.current;return s(...i)},[])}const D=1,H=u.createContext(D);H.displayName="LevelContext";u.forwardRef(function(e,n){const{children:i,...s}=e,r=k(),o=O(r);return h.jsx(C,{as:o,ref:n,...s,children:i})});function k(){const t=u.useContext(H);return Math.min(t,6)}function O(t){return`h${t}`}var P={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(r=s(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var a in r)e.call(r,a)&&r[a]&&(o=s(o,a));return o}function s(r,o){return o?r?r+" "+o:r+o:r}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(P);const Z="@open-pioneer/notifier",F=I.bind(void 0,Z);var G=M({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});const U=!1;function $(t){const{position:e="top-right"}=t,n=T(),i=F("notifier.NotificationService"),[s,r]=u.useState(!U),o=A(c=>{const S=c.level==="error"?h.jsx(G,{h:"100%",w:"100%"}):void 0;n({position:e,title:c.title,description:c.message||null,status:c.level,isClosable:!0,duration:c.displayDuration??null,icon:S})}),a=A(()=>{n.closeAll()});return u.useEffect(()=>{const c=i.registerHandler({showNotification:o,closeAll:a});return()=>c.destroy()},[s,i,o,a]),h.jsx(h.Fragment,{})}export{K as N,$ as a};