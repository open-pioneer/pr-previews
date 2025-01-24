import{r as e,i as b,j as u,g as Z,X as z,a2 as c,a3 as n,a4 as W,y as X,z as G,D as J}from"./dwMeHYNn9Hg1.js";import{I as K}from"./CqrxYxSjEfsI.js";import{u as F,c as Q,F as U}from"./niYztYDFB8w-.js";import{a as g,c as V}from"./Bf0SoCkPJ6sg.js";const N=e.forwardRef((d,o)=>{const s=F(),t=b(s.getErrorTextProps(),d);return s?.invalid?u.jsx(g.span,{...t,ref:o}):null});N.displayName="FieldErrorText";const j=e.forwardRef((d,o)=>{const s=F(),t=b(s?.getHelperTextProps(),d);return u.jsx(g.span,{...t,ref:o})});j.displayName="FieldHelperText";const A=e.forwardRef((d,o)=>{const s=F(),t=b(s?.getLabelProps(),d);return u.jsx(g.label,{...t,ref:o})});A.displayName="FieldLabel";const Y=typeof window<"u"?e.useLayoutEffect:e.useEffect,[ne,_]=Z({name:"FieldsetContext",hookName:"useFieldsetContext",providerName:"<FieldsetProvider />",strict:!1}),ee=d=>{const o=_(),{ids:s,disabled:t=!!o?.disabled,invalid:r=!1,readOnly:a=!1,required:i=!1}=d,m=e.useRef(!1),h=e.useRef(!1),l=d.id??e.useId(),y=e.useRef(null),T=s?.control??`field::${l}`,f=s?.errorText??`field::${l}::error-text`,p=s?.helperText??`field::${l}::helper-text`,v=s?.label??`field::${l}::label`;Y(()=>{const x=y.current;if(!x)return;const I=z(x),C=I.document,E=()=>{m.current=!!C.getElementById(f),h.current=!!C.getElementById(p)};E();const M=new I.MutationObserver(E);return M.observe(x,{childList:!0,subtree:!0}),()=>M.disconnect()},[f,p]);const R=e.useMemo(()=>{const x=[];return m.current&&r&&x.push(f),h.current&&x.push(p),x.join(" ")||void 0},[r,f,p]),L=e.useMemo(()=>()=>({...c.root.attrs,id:T,ref:y,role:"group","data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a)}),[t,r,a,T]),$=e.useMemo(()=>()=>({...c.label.attrs,id:v,"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a),htmlFor:l}),[t,r,a,l,v]),P=e.useMemo(()=>()=>({"aria-describedby":R,"aria-invalid":W(r),"data-invalid":n(r),"data-required":n(i),"data-readonly":n(a),id:l,required:i,disabled:t,readOnly:a}),[R,r,i,a,l,t]),k=e.useMemo(()=>()=>({...P(),...c.input.attrs}),[P]),H=e.useMemo(()=>()=>({...P(),...c.textarea.attrs}),[P]),S=e.useMemo(()=>()=>({...P(),...c.select.attrs}),[P]),B=e.useMemo(()=>()=>({id:p,...c.helperText.attrs}),[p]),D=e.useMemo(()=>()=>({id:f,...c.errorText.attrs,"aria-live":"polite"}),[f]),O=e.useMemo(()=>()=>({"aria-hidden":!0,...c.requiredIndicator.attrs}),[]);return{ariaDescribedby:R,ids:{root:T,control:l,label:v,errorText:f,helperText:p},refs:{rootRef:y},disabled:t,invalid:r,readOnly:a,required:i,getLabelProps:$,getRootProps:L,getInputProps:k,getTextareaProps:H,getSelectProps:S,getHelperTextProps:B,getErrorTextProps:D,getRequiredIndicatorProps:O}},q=e.forwardRef((d,o)=>{const[s,t]=Q()(d,["id","ids","disabled","invalid","readOnly","required"]),r=ee(s),a=b(r.getRootProps(),t);return u.jsx(U,{value:r,children:u.jsx(g.div,{...a,ref:V(o,r.refs.rootRef)})})});q.displayName="FieldRoot";function te(d){const{viewBox:o="0 0 24 24",d:s,displayName:t,defaultProps:r={}}=d,a=e.Children.toArray(d.path),i=e.forwardRef((m,h)=>u.jsx(K,{ref:h,asChild:!1,viewBox:o,...r,...m,children:a.length?a:u.jsx("path",{fill:"currentColor",d:s})}));return i.displayName=t,i}const{withProvider:re,withContext:w,useStyles:se,useClassNames:oe,PropsProvider:ce}=X({key:"field"}),ue=re(q,"root",{forwardAsChild:!0}),fe=w(A,"label",{forwardAsChild:!0}),pe=w(j,"helperText",{forwardAsChild:!0}),xe=w(N,"errorText",{forwardAsChild:!0});te({d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"});const me=e.forwardRef(function(o,s){const{fallback:t,children:r="*",...a}=o,i=F(),m=oe(),h=se();return i?.required?u.jsx(G.span,{ref:s,"aria-hidden":"true",...a,className:J(m.requiredIndicator,o.className),css:[h.requiredIndicator,o.css],children:r}):t});export{ue as F,fe as a,me as b,pe as c,xe as d};
