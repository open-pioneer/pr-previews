import{r as a,z as Y,J as K,a2 as oe,s as ue,a1 as z,a3 as ve,a0 as Ee,y as ae,$ as xe,a4 as Ce,D as Ie,G as ye,K as G,o as Me,p as De,L as ge,j as V,M as Oe,q as ee,f as ke}from"./Bh0CuZ3gy5tC.js";var we=Object.defineProperty,Pe=(e,n,t)=>n in e?we(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n,t)=>(Pe(e,typeof n!="symbol"?n+"":n,t),t);function ne(e){return e.sort((n,t)=>{const s=n.compareDocumentPosition(t);if(s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(s&Node.DOCUMENT_POSITION_DISCONNECTED||s&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var Ne=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function te(e,n,t){let s=e+1;return t&&s>=n&&(s=0),s}function se(e,n,t){let s=e-1;return t&&s<0&&(s=n),s}var J=typeof window<"u"?a.useLayoutEffect:a.useEffect,j=e=>e,Se=class{constructor(){p(this,"descendants",new Map),p(this,"register",e=>{if(e!=null)return Ne(e)?this.registerNode(e):n=>{this.registerNode(n,e)}}),p(this,"unregister",e=>{this.descendants.delete(e);const n=ne(Array.from(this.descendants.keys()));this.assignIndex(n)}),p(this,"destroy",()=>{this.descendants.clear()}),p(this,"assignIndex",e=>{this.descendants.forEach(n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})}),p(this,"count",()=>this.descendants.size),p(this,"enabledCount",()=>this.enabledValues().length),p(this,"values",()=>Array.from(this.descendants.values()).sort((n,t)=>n.index-t.index)),p(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),p(this,"item",e=>{if(this.count()!==0)return this.values()[e]}),p(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]}),p(this,"first",()=>this.item(0)),p(this,"firstEnabled",()=>this.enabledItem(0)),p(this,"last",()=>this.item(this.descendants.size-1)),p(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)}),p(this,"indexOf",e=>{var n,t;return e&&(t=(n=this.descendants.get(e))==null?void 0:n.index)!=null?t:-1}),p(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(e))),p(this,"next",(e,n=!0)=>{const t=te(e,this.count(),n);return this.item(t)}),p(this,"nextEnabled",(e,n=!0)=>{const t=this.item(e);if(!t)return;const s=this.enabledIndexOf(t.node),r=te(s,this.enabledCount(),n);return this.enabledItem(r)}),p(this,"prev",(e,n=!0)=>{const t=se(e,this.count()-1,n);return this.item(t)}),p(this,"prevEnabled",(e,n=!0)=>{const t=this.item(e);if(!t)return;const s=this.enabledIndexOf(t.node),r=se(s,this.enabledCount()-1,n);return this.enabledItem(r)}),p(this,"registerNode",(e,n)=>{if(!e||this.descendants.has(e))return;const t=Array.from(this.descendants.keys()).concat(e),s=ne(t);n?.disabled&&(n.disabled=!!n.disabled);const r={node:e,index:-1,...n};this.descendants.set(e,r),this.assignIndex(s)})}};function Te(){const e=a.useRef(new Se);return J(()=>()=>e.current.destroy()),e.current}var[_e,ie]=Y({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function Fe(e){const n=ie(),[t,s]=a.useState(-1),r=a.useRef(null);J(()=>()=>{r.current&&n.unregister(r.current)},[]),J(()=>{if(!r.current)return;const i=Number(r.current.dataset.index);t!=i&&!Number.isNaN(i)&&s(i)});const o=j(e?n.register(e):n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(r.current),register:K(o,r)}}function Ae(){return[j(_e),()=>j(ie()),()=>Te(),r=>Fe(r)]}var ce=e=>e.hasAttribute("tabindex"),Le=e=>ce(e)&&e.tabIndex===-1;function Re(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function le(e){return e.parentElement&&le(e.parentElement)?!0:e.hidden}function Ue(e){const n=e.getAttribute("contenteditable");return n!=="false"&&n!=null}function de(e){if(!oe(e)||le(e)||Re(e))return!1;const{localName:n}=e;if(["input","select","textarea","button"].indexOf(n)>=0)return!0;const s={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return n in s?s[n]():Ue(e)?!0:ce(e)}function Ke(e){return e?oe(e)&&de(e)&&!Le(e):!1}var Be=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Ve=Be.join(),je=e=>e.offsetWidth>0&&e.offsetHeight>0;function ze(e){const n=Array.from(e.querySelectorAll(Ve));return n.unshift(e),n.filter(t=>de(t)&&je(t))}function He(e){const{key:n}=e;return n.length===1||n.length>1&&/[^a-zA-Z0-9]/.test(n)}function $e(e={}){const{timeout:n=300,preventDefault:t=()=>!0}=e,[s,r]=a.useState([]),o=a.useRef(),i=()=>{o.current&&(clearTimeout(o.current),o.current=null)},c=()=>{i(),o.current=setTimeout(()=>{r([]),o.current=null},n)};a.useEffect(()=>i,[]);function f(b){return l=>{if(l.key==="Backspace"){const d=[...s];d.pop(),r(d);return}if(He(l)){const d=s.concat(l.key);t(l)&&(l.preventDefault(),l.stopPropagation()),r(d),b(d.join("")),c()}}}return f}function qe(e,n,t,s){if(n==null)return s;if(!s)return e.find(i=>t(i).toLowerCase().startsWith(n.toLowerCase()));const r=e.filter(o=>t(o).toLowerCase().startsWith(n.toLowerCase()));if(r.length>0){let o;return r.includes(s)?(o=r.indexOf(s)+1,o===r.length&&(o=0),r[o]):(o=e.indexOf(r[0]),e[o])}return s}function We(){const e=a.useRef(new Map),n=e.current,t=a.useCallback((r,o,i,c)=>{e.current.set(i,{type:o,el:r,options:c}),r.addEventListener(o,i,c)},[]),s=a.useCallback((r,o,i,c)=>{r.removeEventListener(o,i,c),e.current.delete(i)},[]);return a.useEffect(()=>()=>{n.forEach((r,o)=>{s(r.el,r.type,o,r.options)})},[s,n]),{add:t,remove:s}}function q(e){const n=e.target,{tagName:t,isContentEditable:s}=n;return t!=="INPUT"&&t!=="TEXTAREA"&&s!==!0}function Ge(e={}){const{ref:n,isDisabled:t,isFocusable:s,clickOnEnter:r=!0,clickOnSpace:o=!0,onMouseDown:i,onMouseUp:c,onClick:f,onKeyDown:b,onKeyUp:l,tabIndex:d,onMouseOver:D,onMouseLeave:I,...N}=e,[E,g]=a.useState(!0),[m,v]=a.useState(!1),y=We(),M=u=>{u&&u.tagName!=="BUTTON"&&g(!1)},w=E?d:d||0,C=t&&!s,h=a.useCallback(u=>{if(t){u.stopPropagation(),u.preventDefault();return}u.currentTarget.focus(),f?.(u)},[t,f]),x=a.useCallback(u=>{m&&q(u)&&(u.preventDefault(),u.stopPropagation(),v(!1),y.remove(document,"keyup",x,!1))},[m,y]),P=a.useCallback(u=>{if(b?.(u),t||u.defaultPrevented||u.metaKey||!q(u.nativeEvent)||E)return;const F=r&&u.key==="Enter";o&&u.key===" "&&(u.preventDefault(),v(!0)),F&&(u.preventDefault(),u.currentTarget.click()),y.add(document,"keyup",x,!1)},[t,E,b,r,o,y,x]),S=a.useCallback(u=>{if(l?.(u),t||u.defaultPrevented||u.metaKey||!q(u.nativeEvent)||E)return;o&&u.key===" "&&(u.preventDefault(),v(!1),u.currentTarget.click())},[o,E,t,l]),T=a.useCallback(u=>{u.button===0&&(v(!1),y.remove(document,"mouseup",T,!1))},[y]),A=a.useCallback(u=>{if(u.button!==0)return;if(t){u.stopPropagation(),u.preventDefault();return}E||v(!0),u.currentTarget.focus({preventScroll:!0}),y.add(document,"mouseup",T,!1),i?.(u)},[t,E,i,y,T]),_=a.useCallback(u=>{u.button===0&&(E||v(!1),c?.(u))},[c,E]),L=a.useCallback(u=>{if(t){u.preventDefault();return}D?.(u)},[t,D]),U=a.useCallback(u=>{m&&(u.preventDefault(),v(!1)),I?.(u)},[m,I]),R=K(n,M);return E?{...N,ref:R,type:"button","aria-disabled":C?void 0:t,disabled:C,onClick:h,onMouseDown:i,onMouseUp:c,onKeyUp:l,onKeyDown:b,onMouseOver:D,onMouseLeave:I}:{...N,ref:R,role:"button","data-active":ue(m),"aria-disabled":t?"true":void 0,tabIndex:C?void 0:w,onClick:h,onMouseDown:A,onMouseUp:_,onKeyUp:S,onKeyDown:P,onMouseOver:L,onMouseLeave:U}}function Je(e){const n=e.current;if(!n)return!1;const t=ve(n);return!t||n.contains(t)?!1:!!Ke(t)}function Xe(e,n){const{shouldFocus:t,visible:s,focusRef:r}=n,o=t&&!s;z(()=>{if(!o||Je(e))return;const i=r?.current||e.current;let c;if(i)return c=requestAnimationFrame(()=>{i.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(c)}},[o,e,r])}var Ye={preventScroll:!0,shouldFocus:!1};function En(e,n=Ye){const{focusRef:t,preventScroll:s,shouldFocus:r,visible:o}=n,i=Ze(e)?e.current:e,c=r&&o,f=a.useRef(c),b=a.useRef(o);Ee(()=>{!b.current&&o&&(f.current=c),b.current=o},[o,c]);const l=a.useCallback(()=>{if(!(!o||!i||!f.current)&&(f.current=!1,!i.contains(document.activeElement)))if(t?.current)requestAnimationFrame(()=>{var d;(d=t.current)==null||d.focus({preventScroll:s})});else{const d=ze(i);d.length>0&&requestAnimationFrame(()=>{d[0].focus({preventScroll:s})})}},[o,s,i,t]);z(()=>{l()},[l]),ae(i,"transitionend",l)}function Ze(e){return"current"in e}function Qe(e){const{ref:n,handler:t,enabled:s=!0}=e,r=xe(t),i=a.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;a.useEffect(()=>{if(!s)return;const c=d=>{W(d,n)&&(i.isPointerDown=!0)},f=d=>{if(i.ignoreEmulatedMouseEvents){i.ignoreEmulatedMouseEvents=!1;return}i.isPointerDown&&t&&W(d,n)&&(i.isPointerDown=!1,r(d))},b=d=>{i.ignoreEmulatedMouseEvents=!0,t&&i.isPointerDown&&W(d,n)&&(i.isPointerDown=!1,r(d))},l=fe(n.current);return l.addEventListener("mousedown",c,!0),l.addEventListener("mouseup",f,!0),l.addEventListener("touchstart",c,!0),l.addEventListener("touchend",b,!0),()=>{l.removeEventListener("mousedown",c,!0),l.removeEventListener("mouseup",f,!0),l.removeEventListener("touchstart",c,!0),l.removeEventListener("touchend",b,!0)}},[t,n,r,i,s])}function W(e,n){var t;const s=e.target;return s&&!fe(s).contains(s)?!1:!((t=n.current)!=null&&e.composedPath().includes(t))}function fe(e){var n;return(n=e?.ownerDocument)!=null?n:document}function en(e){const{isOpen:n,ref:t}=e,[s,r]=a.useState(n),[o,i]=a.useState(!1);return a.useEffect(()=>{o||(r(n),i(!0))},[n,o,s]),ae(()=>t.current,"animationend",()=>{r(n)}),{present:!(n?!1:!s),onComplete(){var f;const b=Ce(t.current),l=new b.CustomEvent("animationend",{bubbles:!0});(f=t.current)==null||f.dispatchEvent(l)}}}function nn(e){const{wasSelected:n,enabled:t,isSelected:s,mode:r="unmount"}=e;return!!(!t||s||r==="keepMounted"&&n)}var[tn,sn,rn,on]=Ae(),[un,H]=Y({strict:!1,name:"MenuContext"});function an(e,...n){const t=a.useId(),s=e||t;return a.useMemo(()=>n.map(r=>`${r}-${s}`),[s,n])}function be(e){var n;return(n=e?.ownerDocument)!=null?n:document}function re(e){return be(e).activeElement===e}function cn(e={}){const{id:n,closeOnSelect:t=!0,closeOnBlur:s=!0,initialFocusRef:r,autoSelect:o=!0,isLazy:i,isOpen:c,defaultIsOpen:f,onClose:b,onOpen:l,placement:d="bottom-start",lazyBehavior:D="unmount",direction:I,computePositionOnMount:N=!1,...E}=e,g=a.useRef(null),m=a.useRef(null),v=rn(),y=a.useCallback(()=>{requestAnimationFrame(()=>{var O;(O=g.current)==null||O.focus({preventScroll:!1})})},[]),M=a.useCallback(()=>{const O=setTimeout(()=>{var k;if(r)(k=r.current)==null||k.focus();else{const B=v.firstEnabled();B&&_(B.index)}});F.current.add(O)},[v,r]),w=a.useCallback(()=>{const O=setTimeout(()=>{const k=v.lastEnabled();k&&_(k.index)});F.current.add(O)},[v]),C=a.useCallback(()=>{l?.(),o?M():y()},[o,M,y,l]),{isOpen:h,onOpen:x,onClose:P,onToggle:S}=Ie({isOpen:c,defaultIsOpen:f,onClose:b,onOpen:C});Qe({enabled:h&&s,ref:g,handler:O=>{var k;(k=m.current)!=null&&O.composedPath().includes(k)||P()}});const T=ye({...E,enabled:h||N,placement:d,direction:I}),[A,_]=a.useState(-1);z(()=>{h||_(-1)},[h]),Xe(g,{focusRef:m,visible:h,shouldFocus:!0});const L=en({isOpen:h,ref:g}),[U,R]=an(n,"menu-button","menu-list"),u=a.useCallback(()=>{x(),y()},[x,y]),F=a.useRef(new Set([]));a.useEffect(()=>{const O=F.current;return()=>{O.forEach(k=>clearTimeout(k)),O.clear()}},[]);const $=a.useCallback(()=>{x(),M()},[M,x]),Z=a.useCallback(()=>{x(),w()},[x,w]),me=a.useCallback(()=>{var O,k;const B=be(g.current),he=(O=g.current)==null?void 0:O.contains(B.activeElement);if(!(h&&!he))return;const Q=(k=v.item(A))==null?void 0:k.node;Q?.focus({preventScroll:!0})},[h,A,v]),pe=a.useRef(null);return{openAndFocusMenu:u,openAndFocusFirstItem:$,openAndFocusLastItem:Z,onTransitionEnd:me,unstable__animationState:L,descendants:v,popper:T,buttonId:U,menuId:R,forceUpdate:T.forceUpdate,orientation:"vertical",isOpen:h,onToggle:S,onOpen:x,onClose:P,menuRef:g,buttonRef:m,focusedIndex:A,closeOnSelect:t,closeOnBlur:s,autoSelect:o,setFocusedIndex:_,isLazy:i,lazyBehavior:D,initialFocusRef:r,rafId:pe}}function xn(e={},n=null){const t=H(),{onToggle:s,popper:r,openAndFocusFirstItem:o,openAndFocusLastItem:i}=t,c=a.useCallback(f=>{const b=f.key,d={Enter:o,ArrowDown:o,ArrowUp:i}[b];d&&(f.preventDefault(),f.stopPropagation(),d(f))},[o,i]);return{...e,ref:K(t.buttonRef,n,r.referenceRef),id:t.buttonId,"data-active":ue(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:G(e.onClick,s),onKeyDown:G(e.onKeyDown,c)}}function X(e){var n;return ln(e)&&!!((n=e?.getAttribute("role"))!=null&&n.startsWith("menuitem"))}function Cn(e={},n=null){const t=H();if(!t)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:s,setFocusedIndex:r,menuRef:o,isOpen:i,onClose:c,menuId:f,isLazy:b,lazyBehavior:l,unstable__animationState:d}=t,D=sn(),I=$e({preventDefault:m=>m.key!==" "&&X(m.target)}),N=a.useCallback(m=>{if(!m.currentTarget.contains(m.target))return;const v=m.key,M={Tab:C=>C.preventDefault(),Escape:c,ArrowDown:()=>{const C=D.nextEnabled(s);C&&r(C.index)},ArrowUp:()=>{const C=D.prevEnabled(s);C&&r(C.index)}}[v];if(M){m.preventDefault(),M(m);return}const w=I(C=>{const h=qe(D.values(),C,x=>{var P,S;return(S=(P=x?.node)==null?void 0:P.textContent)!=null?S:""},D.item(s));if(h){const x=D.indexOf(h.node);r(x)}});X(m.target)&&w(m)},[D,s,I,c,r]),E=a.useRef(!1);i&&(E.current=!0);const g=nn({wasSelected:E.current,enabled:b,mode:l,isSelected:d.present});return{...e,ref:K(o,n),children:g?e.children:null,tabIndex:-1,role:"menu",id:f,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:G(e.onKeyDown,N)}}function In(e={}){const{popper:n,isOpen:t}=H();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function yn(e={},n=null){const{onMouseEnter:t,onMouseMove:s,onMouseLeave:r,onClick:o,onFocus:i,isDisabled:c,isFocusable:f,closeOnSelect:b,type:l,...d}=e,D=H(),{setFocusedIndex:I,focusedIndex:N,closeOnSelect:E,onClose:g,menuRef:m,isOpen:v,menuId:y,rafId:M}=D,w=a.useRef(null),C=`${y}-menuitem-${a.useId()}`,{index:h,register:x}=on({disabled:c&&!f}),P=a.useCallback(u=>{t?.(u),!c&&I(h)},[I,h,c,t]),S=a.useCallback(u=>{s?.(u),w.current&&!re(w.current)&&P(u)},[P,s]),T=a.useCallback(u=>{r?.(u),!c&&I(-1)},[I,c,r]),A=a.useCallback(u=>{o?.(u),X(u.currentTarget)&&(b??E)&&g()},[g,o,E,b]),_=a.useCallback(u=>{i?.(u),I(h)},[I,i,h]),L=h===N,U=c&&!f;z(()=>{if(v)return L&&!U&&w.current?(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{var u;(u=w.current)==null||u.focus({preventScroll:!0}),M.current=null})):m.current&&!re(m.current)&&m.current.focus({preventScroll:!0}),()=>{M.current&&cancelAnimationFrame(M.current)}},[L,U,m,v]);const R=Ge({onClick:A,onFocus:_,onMouseEnter:P,onMouseMove:S,onMouseLeave:T,ref:K(x,w,n),isDisabled:c,isFocusable:f});return{...d,...R,type:l??R.type,id:C,role:"menuitem",tabIndex:L?0:-1}}function ln(e){var n;if(!dn(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function dn(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}var[fn,bn]=Y({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),mn=e=>{const{children:n}=e,t=Me("Menu",e),s=De(e),{direction:r}=ge(),{descendants:o,...i}=cn({...s,direction:r}),c=a.useMemo(()=>i,[i]),{isOpen:f,onClose:b,forceUpdate:l}=c;return V.jsx(tn,{value:o,children:V.jsx(un,{value:c,children:V.jsx(fn,{value:t,children:Oe(n,{isOpen:f,onClose:b,forceUpdate:l})})})})};mn.displayName="Menu";var pn=e=>{const{className:n,children:t,...s}=e,r=bn(),o=a.Children.only(t),i=a.isValidElement(o)?a.cloneElement(o,{focusable:"false","aria-hidden":!0,className:ee("chakra-menu__icon",o.props.className)}):null,c=ee("chakra-menu__icon-wrapper",n);return V.jsx(ke.span,{className:c,...s,__css:r.icon,children:i})};pn.displayName="MenuIcon";export{mn as M,Xe as a,En as b,pn as c,bn as d,yn as e,H as f,Cn as g,In as h,xn as i,nn as l,en as u};
