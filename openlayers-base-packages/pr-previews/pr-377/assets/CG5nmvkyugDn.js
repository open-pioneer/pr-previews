import{k as ye,j as f,g as x,a8 as ve,a9 as z,r as s,aa as X,ab as Ce,t as o,Q as d,P as re,$ as Y,h as ge,u as xe,o as we,U as Ee,n as Se,l as Ie}from"./B60Dx_GOYdnk.js";import{c as Pe}from"./vepZWq5kkQUw.js";const[et,Le]=ye({name:"CheckboxGroupContext",strict:!1});function De(e){return f.jsx(x.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:f.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function Ae(e){return f.jsx(x.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:f.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Fe(e){const{isIndeterminate:r,isChecked:n,...a}=e,h=r?Ae:De;return n||r?f.jsx(x.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:f.jsx(h,{...a})}):null}var Me=()=>typeof document<"u",ie=!1,B=null,y=!1,Q=!1,J=new Set;function Z(e,r){J.forEach(n=>n(e,r))}var Be=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function je(e){return!(e.metaKey||!Be&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ce(e){y=!0,je(e)&&(B="keyboard",Z("keyboard",e))}function g(e){if(B="pointer",e.type==="mousedown"||e.type==="pointerdown"){y=!0;const r=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=r.matches(":focus-visible")}catch{}if(n)return;Z("pointer",e)}}function Re(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function _e(e){Re(e)&&(y=!0,B="virtual")}function Ke(e){e.target===window||e.target===document||e.target instanceof Element&&e.target.hasAttribute("tabindex")||(!y&&!Q&&(B="virtual",Z("virtual",e)),y=!1,Q=!1)}function Ne(){y=!1,Q=!0}function le(){return B!=="pointer"}function Te(){if(!Me()||ie)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){y=!0,e.apply(this,n)},document.addEventListener("keydown",ce,!0),document.addEventListener("keyup",ce,!0),document.addEventListener("click",_e,!0),window.addEventListener("focus",Ke,!0),window.addEventListener("blur",Ne,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",g,!0),document.addEventListener("pointermove",g,!0),document.addEventListener("pointerup",g,!0)):(document.addEventListener("mousedown",g,!0),document.addEventListener("mousemove",g,!0),document.addEventListener("mouseup",g,!0)),ie=!0}function Ue(e){Te(),e(le());const r=()=>e(le());return J.add(r),()=>{J.delete(r)}}const He={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function Ve(e={}){const r=Pe(e),{isDisabled:n,isReadOnly:a,isRequired:h,isInvalid:i,id:b,onBlur:H,onFocus:V,"aria-describedby":w}=r,{defaultChecked:E,isChecked:S,isFocusable:W,onChange:q,isIndeterminate:u,name:I,value:j,tabIndex:R=void 0,"aria-label":P,"aria-labelledby":L,"aria-invalid":p,...G}=e,D=ve(G,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),_=z(q),K=z(H),A=z(V),[v,O]=s.useState(!1),[k,N]=s.useState(!1),[F,ee]=s.useState(!1),[M,C]=s.useState(!1);s.useEffect(()=>Ue(O),[]);const m=s.useRef(null),[te,ue]=s.useState(!0),[de,T]=s.useState(!!E),$=S!==void 0,c=$?S:de,ne=s.useCallback(t=>{if(a||n){t.preventDefault();return}$||T(c?t.currentTarget.checked:u?!0:t.currentTarget.checked),_?.(t)},[a,n,c,$,u,_]);X(()=>{m.current&&(m.current.indeterminate=!!u)},[u]),Ce(()=>{n&&N(!1)},[n,N]),X(()=>{const t=m.current;if(!t?.form)return;const l=()=>{T(!!E)};return t.form.addEventListener("reset",l),()=>t.form?.removeEventListener("reset",l)},[]);const oe=n&&!W,ae=s.useCallback(t=>{t.key===" "&&C(!0)},[C]),se=s.useCallback(t=>{t.key===" "&&C(!1)},[C]);X(()=>{if(!m.current)return;m.current.checked!==c&&T(m.current.checked)},[m.current]);const fe=s.useCallback((t={},l=null)=>{const U=be=>{k&&be.preventDefault(),C(!0)};return{...t,ref:l,"data-active":o(M),"data-hover":o(F),"data-checked":o(c),"data-focus":o(k),"data-focus-visible":o(k&&v),"data-indeterminate":o(u),"data-disabled":o(n),"data-invalid":o(i),"data-readonly":o(a),"aria-hidden":!0,onMouseDown:d(t.onMouseDown,U),onMouseUp:d(t.onMouseUp,()=>C(!1)),onMouseEnter:d(t.onMouseEnter,()=>ee(!0)),onMouseLeave:d(t.onMouseLeave,()=>ee(!1))}},[M,c,n,k,v,F,u,i,a]),me=s.useCallback((t={},l=null)=>({...t,ref:l,"data-active":o(M),"data-hover":o(F),"data-checked":o(c),"data-focus":o(k),"data-focus-visible":o(k&&v),"data-indeterminate":o(u),"data-disabled":o(n),"data-invalid":o(i),"data-readonly":o(a)}),[M,c,n,k,v,F,u,i,a]),he=s.useCallback((t={},l=null)=>({...D,...t,ref:re(l,U=>{U&&ue(U.tagName==="LABEL")}),onClick:d(t.onClick,()=>{te||(m.current?.click(),requestAnimationFrame(()=>{m.current?.focus({preventScroll:!0})}))}),"data-disabled":o(n),"data-checked":o(c),"data-invalid":o(i)}),[D,n,c,i,te]),pe=s.useCallback((t={},l=null)=>({...t,ref:re(m,l),type:"checkbox",name:I,value:j,id:b,tabIndex:R,onChange:d(t.onChange,ne),onBlur:d(t.onBlur,K,()=>N(!1)),onFocus:d(t.onFocus,A,()=>N(!0)),onKeyDown:d(t.onKeyDown,ae),onKeyUp:d(t.onKeyUp,se),required:h,checked:c,disabled:oe,readOnly:a,"aria-label":P,"aria-labelledby":L,"aria-invalid":p?!!p:i,"aria-describedby":w,"aria-disabled":n,style:He}),[I,j,b,ne,K,A,ae,se,h,c,oe,a,P,L,p,i,w,n,R]),ke=s.useCallback((t={},l=null)=>({...t,ref:l,onMouseDown:d(t.onMouseDown,We),"data-disabled":o(n),"data-checked":o(c),"data-invalid":o(i)}),[c,n,i]);return{state:{isInvalid:i,isFocused:k,isChecked:c,isActive:M,isHovered:F,isIndeterminate:u,isDisabled:n,isReadOnly:a,isRequired:h},getRootProps:he,getCheckboxProps:fe,getIndicatorProps:me,getInputProps:pe,getLabelProps:ke,htmlProps:D}}function We(e){e.preventDefault(),e.stopPropagation()}function qe(e){const[r,n]=s.useState(e),[a,h]=s.useState(!1);return e!==r&&(h(!0),n(e)),a}const Ge={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Oe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},$e=Y({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),ze=Y({from:{opacity:0},to:{opacity:1}}),Xe=Y({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Qe=ge(function(r,n){const a=Le(),h={...a,...r},i=xe("Checkbox",h),b=we(r),{spacing:H="0.5rem",className:V,children:w,iconColor:E,iconSize:S,icon:W=f.jsx(Fe,{}),isChecked:q,isDisabled:u=a?.isDisabled,onChange:I,inputProps:j,...R}=b;let P=q;a?.value&&b.value&&(P=a.value.includes(b.value));let L=I;a?.onChange&&b.value&&(L=Ee(a.onChange,I));const{state:p,getInputProps:G,getCheckboxProps:D,getLabelProps:_,getRootProps:K}=Ve({...R,isDisabled:u,isChecked:P,onChange:L}),A=qe(p.isChecked),v=s.useMemo(()=>({animation:A?p.isIndeterminate?`${ze} 20ms linear, ${Xe} 200ms linear`:`${$e} 200ms linear`:void 0,...i.icon,...Se({fontSize:S,color:E})}),[E,S,A,p.isIndeterminate,i.icon]),O=s.cloneElement(W,{__css:v,isIndeterminate:p.isIndeterminate,isChecked:p.isChecked});return f.jsxs(x.label,{__css:{...Oe,...i.container},className:Ie("chakra-checkbox",V),...K(),children:[f.jsx("input",{className:"chakra-checkbox__input",...G(j,n)}),f.jsx(x.span,{__css:{...Ge,...i.control},className:"chakra-checkbox__control",...D(),children:O}),w&&f.jsx(x.span,{className:"chakra-checkbox__label",..._(),__css:{marginStart:H,...i.label},children:w})]})});Qe.displayName="Checkbox";export{Qe as C,Ue as t,He as v};