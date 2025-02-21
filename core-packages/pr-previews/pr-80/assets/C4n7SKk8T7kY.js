import{d as w,r as l,f as b,j as d,a3 as W,u as $,a4 as H,a5 as M,a6 as D,a7 as F,a8 as q,N as B,a0 as Y,v as f,t as U,Z}from"./DBb57a8xxaPh.js";import{d as _}from"./C3JtgmrzhVmr.js";import{a as p,c as J}from"./C23-Qsk0aWup.js";import{c as g,u as y}from"./CTmu5FOTgAZp.js";import{u as K,n as Q}from"./DeAMCPDw6n1O.js";import{a as j,u as X}from"./CGYFjWM1GJDq.js";const[V,m]=w({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),O=l.forwardRef((t,o)=>{const e=m(),n=b(e.getControlProps(),t);return d.jsx(p.div,{...n,ref:o})});O.displayName="CheckboxControl";function ee(t){const{value:o,onChange:e,defaultValue:n}=t,[r,a]=l.useState(n),s=o!==void 0,c=s?o:r,u=l.useCallback(h=>(s||a(h),e?.(h)),[s,e]);return[c,u]}function te(t={}){const{defaultValue:o,value:e,onValueChange:n,disabled:r,readOnly:a,name:s,invalid:c}=t,u=!(r||a),h=j(n,{sync:!0}),[x,k]=ee({value:e,defaultValue:o||[],onChange:h}),C=i=>x.some(v=>String(v)===String(i)),P=i=>{C(i)?A(i):R(i)},R=i=>{u&&(C(i)||k(x.concat(i)))},A=i=>{u&&k(x.filter(v=>String(v)!==String(i)))};return{isChecked:C,value:x,name:s,disabled:!!r,readOnly:!!a,invalid:!!c,setValue:k,addValue:R,toggleValue:P,getItemProps:i=>({checked:i.value!=null?C(i.value):void 0,onCheckedChange(){i.value!=null&&P(i.value)},name:s,disabled:r,readOnly:a,invalid:c})}}const[oe,re]=w({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),I=l.forwardRef((t,o)=>{const[e,n]=g()(t,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),r=te(e);return d.jsx(oe,{value:r,children:d.jsx(p.div,{ref:o,role:"group",...n,...W.build().group.attrs})})});I.displayName="CheckboxGroup";const N=l.forwardRef((t,o)=>{const e=m(),n=b(e.getHiddenInputProps(),t),r=y();return d.jsx(p.input,{"aria-describedby":r?.ariaDescribedby,...n,ref:o})});N.displayName="CheckboxHiddenInput";const S=l.forwardRef((t,o)=>{const e=m(),n=b(e.getLabelProps(),t);return d.jsx(p.span,{...n,ref:o})});S.displayName="CheckboxLabel";const ne=(t={})=>{const o=re(),e=y(),n=l.useMemo(()=>b(t,o?.getItemProps({value:t.value})??{}),[t,o]),{getRootNode:r}=$(),{dir:a}=X(),s={id:l.useId(),ids:{label:e?.ids.label,hiddenInput:e?.ids.control},dir:a,disabled:e?.disabled,readOnly:e?.readOnly,invalid:e?.invalid,required:e?.required,getRootNode:r,checked:n.defaultChecked,...n},c={...s,checked:n.checked,onCheckedChange:j(n.onCheckedChange,{sync:!0})},[u,h]=K(H(s),{context:c});return M(u,h,Q)},L=l.forwardRef((t,o)=>{const[e,n]=g()(t,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),r=ne(e),a=b(r.getRootProps(),n);return d.jsx(V,{value:r,children:d.jsx(p.label,{...a,ref:o})})});L.displayName="CheckboxRoot";const E=l.forwardRef((t,o)=>{const[{value:e},n]=g()(t,["value"]),r=b(e.getRootProps(),n);return d.jsx(V,{value:e,children:d.jsx(p.label,{...r,ref:o})})});E.displayName="CheckboxRootProvider";var se=t=>{if(!t)return;const o=D(t),e=F(t),n=q(t),r=()=>{t.style.height="auto";const h=parseInt(o.borderTopWidth,10),x=parseInt(o.borderBottomWidth,10);t.style.height=`${t.scrollHeight+h+x}px`};t.addEventListener("input",r);const a=Object.getPrototypeOf(t),s=Object.getOwnPropertyDescriptor(a,"value");Object.defineProperty(t,"value",{...s,set(){s?.set?.apply(this,arguments),r()}});const c=new e.ResizeObserver(()=>r());c.observe(t);const u=new e.MutationObserver(()=>r());return u.observe(t,{attributes:!0,attributeFilter:["rows","placeholder"]}),n.fonts?.addEventListener("loadingdone",r),()=>{t.removeEventListener("input",r),n.fonts?.removeEventListener("loadingdone",r),c.disconnect(),u.disconnect()}};const G=l.forwardRef((t,o)=>{const{autoresize:e,...n}=t,r=l.useRef(null),a=y(),s=b(a?.getTextareaProps(),{style:{resize:e?"none":void 0}},n);return l.useEffect(()=>{if(e)return se(r.current)},[e]),d.jsx(p.textarea,{...s,ref:J(o,r)})});G.displayName="FieldTextarea";const ae=l.forwardRef(function(o,e){const n=B({key:"checkmark",recipe:o.recipe}),[r,a]=n.splitVariantProps(o),{checked:s,indeterminate:c,disabled:u,unstyled:h,children:x,...k}=a,C=h?Y:n(r);return d.jsx(f.svg,{ref:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3px",strokeLinecap:"round",strokeLinejoin:"round","data-state":c?"indeterminate":s?"checked":"unchecked","data-disabled":_(u),css:[C,o.css],...k,children:c?d.jsx("path",{d:"M5 12h14"}):s?d.jsx("polyline",{points:"20 6 9 17 4 12"}):null})}),{withProvider:T,withContext:z,useStyles:ce}=U({key:"checkbox"});T(E,"root",{forwardAsChild:!0});const Ce=T(L,"root",{forwardAsChild:!0}),ke=z(S,"label",{forwardAsChild:!0}),fe=z(O,"control",{forwardAsChild:!0}),me=l.forwardRef(function(o,e){const{checked:n,indeterminate:r,...a}=o,s=m(),c=ce();return n&&s.checked?d.jsx(f.svg,{ref:e,asChild:!0,...a,css:[c.indicator,o.css],children:n}):r&&s.indeterminate?d.jsx(f.svg,{ref:e,asChild:!0,...a,css:[c.indicator,o.css],children:r}):d.jsx(ae,{ref:e,checked:s.checked,indeterminate:s.indeterminate,disabled:s.disabled,unstyled:!0,...a,css:[c.indicator,o.css]})});f(I,{base:{display:"flex",flexDirection:"column",gap:"1.5"}},{forwardAsChild:!0});const ve=N,{withContext:de}=Z({key:"textarea"}),ge=de(G);export{Ce as C,ge as T,ve as a,fe as b,me as c,ke as d};
