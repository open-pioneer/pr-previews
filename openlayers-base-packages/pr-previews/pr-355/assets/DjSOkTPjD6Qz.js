import{c as ye,r as s,j as f,b as w,$ as X,a0 as J,a1 as be,t as a,K as d,J as ie,S as Z,f as Ce,u as ge,o as xe,O as we,a as Ee}from"./CD-18dKV5pkg.js";import{c as Se}from"./33trO6j0Jpx2.js";var[Ze,Ie]=ye({name:"CheckboxGroupContext",strict:!1});function Pe(e){const[r,n]=s.useState(e),[o,v]=s.useState(!1);return e!==r&&(v(!0),n(e)),o}function Le(e){return f.jsx(w.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:f.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function De(e){return f.jsx(w.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:f.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Fe(e){const{isIndeterminate:r,isChecked:n,...o}=e,v=r?De:Le;return n||r?f.jsx(w.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:f.jsx(v,{...o})}):null}var Me={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},_e=()=>typeof document<"u",ce=!1,B=null,b=!1,Q=!1,Y=new Set;function ee(e,r){Y.forEach(n=>n(e,r))}var je=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Ae(e){return!(e.metaKey||!je&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function le(e){b=!0,Ae(e)&&(B="keyboard",ee("keyboard",e))}function x(e){if(B="pointer",e.type==="mousedown"||e.type==="pointerdown"){b=!0;const r=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=r.matches(":focus-visible")}catch{}if(n)return;ee("pointer",e)}}function Be(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Re(e){Be(e)&&(b=!0,B="virtual")}function Ke(e){e.target===window||e.target===document||(!b&&!Q&&(B="virtual",ee("virtual",e)),b=!1,Q=!1)}function Ne(){b=!1,Q=!0}function ue(){return B!=="pointer"}function He(){if(!_e()||ce)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){b=!0,e.apply(this,n)},document.addEventListener("keydown",le,!0),document.addEventListener("keyup",le,!0),document.addEventListener("click",Re,!0),window.addEventListener("focus",Ke,!0),window.addEventListener("blur",Ne,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",x,!0),document.addEventListener("pointermove",x,!0),document.addEventListener("pointerup",x,!0)):(document.addEventListener("mousedown",x,!0),document.addEventListener("mousemove",x,!0),document.addEventListener("mouseup",x,!0)),ce=!0}function Oe(e){He(),e(ue());const r=()=>e(ue());return Y.add(r),()=>{Y.delete(r)}}function Ue(e,r=[]){const n=Object.assign({},e);for(const o of r)o in n&&delete n[o];return n}function Ve(e={}){const r=Se(e),{isDisabled:n,isReadOnly:o,isRequired:v,isInvalid:i,id:y,onBlur:V,onFocus:T,"aria-describedby":E}=r,{defaultChecked:S,isChecked:I,isFocusable:W,onChange:q,isIndeterminate:u,name:P,value:R,tabIndex:K=void 0,"aria-label":L,"aria-labelledby":D,"aria-invalid":p,...G}=e,F=Ue(G,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),M=X(q),N=X(V),_=X(T),[C,$]=s.useState(!1),[k,H]=s.useState(!1),[j,te]=s.useState(!1),[A,g]=s.useState(!1);s.useEffect(()=>Oe($),[]);const m=s.useRef(null),[ne,de]=s.useState(!0),[fe,O]=s.useState(!!S),z=I!==void 0,c=z?I:fe,oe=s.useCallback(t=>{if(o||n){t.preventDefault();return}z||O(c?t.target.checked:u?!0:t.target.checked),M?.(t)},[o,n,c,z,u,M]);J(()=>{m.current&&(m.current.indeterminate=!!u)},[u]),be(()=>{n&&H(!1)},[n,H]),J(()=>{const t=m.current;if(!t?.form)return;const l=()=>{O(!!S)};return t.form.addEventListener("reset",l),()=>{var h;return(h=t.form)==null?void 0:h.removeEventListener("reset",l)}},[]);const ae=n&&!W,se=s.useCallback(t=>{t.key===" "&&g(!0)},[g]),re=s.useCallback(t=>{t.key===" "&&g(!1)},[g]);J(()=>{if(!m.current)return;m.current.checked!==c&&O(m.current.checked)},[m.current]);const me=s.useCallback((t={},l=null)=>{const h=U=>{k&&U.preventDefault(),g(!0)};return{...t,ref:l,"data-active":a(A),"data-hover":a(j),"data-checked":a(c),"data-focus":a(k),"data-focus-visible":a(k&&C),"data-indeterminate":a(u),"data-disabled":a(n),"data-invalid":a(i),"data-readonly":a(o),"aria-hidden":!0,onMouseDown:d(t.onMouseDown,h),onMouseUp:d(t.onMouseUp,()=>g(!1)),onMouseEnter:d(t.onMouseEnter,()=>te(!0)),onMouseLeave:d(t.onMouseLeave,()=>te(!1))}},[A,c,n,k,C,j,u,i,o]),he=s.useCallback((t={},l=null)=>({...t,ref:l,"data-active":a(A),"data-hover":a(j),"data-checked":a(c),"data-focus":a(k),"data-focus-visible":a(k&&C),"data-indeterminate":a(u),"data-disabled":a(n),"data-invalid":a(i),"data-readonly":a(o)}),[A,c,n,k,C,j,u,i,o]),ve=s.useCallback((t={},l=null)=>({...F,...t,ref:ie(l,h=>{h&&de(h.tagName==="LABEL")}),onClick:d(t.onClick,()=>{var h;ne||((h=m.current)==null||h.click(),requestAnimationFrame(()=>{var U;(U=m.current)==null||U.focus({preventScroll:!0})}))}),"data-disabled":a(n),"data-checked":a(c),"data-invalid":a(i)}),[F,n,c,i,ne]),pe=s.useCallback((t={},l=null)=>({...t,ref:ie(m,l),type:"checkbox",name:P,value:R,id:y,tabIndex:K,onChange:d(t.onChange,oe),onBlur:d(t.onBlur,N,()=>H(!1)),onFocus:d(t.onFocus,_,()=>H(!0)),onKeyDown:d(t.onKeyDown,se),onKeyUp:d(t.onKeyUp,re),required:v,checked:c,disabled:ae,readOnly:o,"aria-label":L,"aria-labelledby":D,"aria-invalid":p?!!p:i,"aria-describedby":E,"aria-disabled":n,style:Me}),[P,R,y,oe,N,_,se,re,v,c,ae,o,L,D,p,i,E,n,K]),ke=s.useCallback((t={},l=null)=>({...t,ref:l,onMouseDown:d(t.onMouseDown,Te),"data-disabled":a(n),"data-checked":a(c),"data-invalid":a(i)}),[c,n,i]);return{state:{isInvalid:i,isFocused:k,isChecked:c,isActive:A,isHovered:j,isIndeterminate:u,isDisabled:n,isReadOnly:o,isRequired:v},getRootProps:ve,getCheckboxProps:me,getIndicatorProps:he,getInputProps:pe,getLabelProps:ke,htmlProps:F}}function Te(e){e.preventDefault(),e.stopPropagation()}var We={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},qe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ge=Z({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),$e=Z({from:{opacity:0},to:{opacity:1}}),ze=Z({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Xe=Ce(function(r,n){const o=Ie(),v={...o,...r},i=ge("Checkbox",v),y=xe(r),{spacing:V="0.5rem",className:T,children:E,iconColor:S,iconSize:I,icon:W=f.jsx(Fe,{}),isChecked:q,isDisabled:u=o?.isDisabled,onChange:P,inputProps:R,...K}=y;let L=q;o?.value&&y.value&&(L=o.value.includes(y.value));let D=P;o?.onChange&&y.value&&(D=we(o.onChange,P));const{state:p,getInputProps:G,getCheckboxProps:F,getLabelProps:M,getRootProps:N}=Ve({...K,isDisabled:u,isChecked:L,onChange:D}),_=Pe(p.isChecked),C=s.useMemo(()=>({animation:_?p.isIndeterminate?`${$e} 20ms linear, ${ze} 200ms linear`:`${Ge} 200ms linear`:void 0,fontSize:I,color:S,...i.icon}),[S,I,_,p.isIndeterminate,i.icon]),$=s.cloneElement(W,{__css:C,isIndeterminate:p.isIndeterminate,isChecked:p.isChecked});return f.jsxs(w.label,{__css:{...qe,...i.container},className:Ee("chakra-checkbox",T),...N(),children:[f.jsx("input",{className:"chakra-checkbox__input",...G(R,n)}),f.jsx(w.span,{__css:{...We,...i.control},className:"chakra-checkbox__control",...F(),children:$}),E&&f.jsx(w.span,{className:"chakra-checkbox__label",...M(),__css:{marginStart:V,...i.label},children:E})]})});Xe.displayName="Checkbox";export{Xe as C,Oe as t};
