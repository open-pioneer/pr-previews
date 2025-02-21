import{d as I,r as d,f as c,j as e,u as M,O as ce,P as ue,Q as he,R as pe,N as xe,T as me,v as N,t as V,a as fe,H as h,S as p,b as je}from"./DBb57a8xxaPh.js";import{P as be}from"./WF0lxOQ8kW2y.js";import{T as ge,b as we,c as Se,d as ve,e as Ce,f as Pe,L as Re}from"./C1f0seUiZNkh.js";import{C as ke,a as ye,b as Te,c as Ie,d as Ne,T as Ae}from"./C4n7SKk8T7kY.js";import{F as $e,a as Le,b as Me,c as Ve,d as ze}from"./DNGMJQ8JYeib.js";import{N as Fe,a as He,b as C}from"./nGEdrQDd5CNI.js";import{d as z}from"./C3JtgmrzhVmr.js";import{a as u}from"./C23-Qsk0aWup.js";import{c as w,u as F}from"./CTmu5FOTgAZp.js";import{u as H,n as E}from"./DeAMCPDw6n1O.js";import{u as G,a as P}from"./CGYFjWM1GJDq.js";import{R as Ee,a as Ge,b as Oe,c as Be,d as _e}from"./2ZSJ21mpxvvw.js";import{H as De}from"./jQOwKM-t_NEg.js";import{C as qe}from"./6OIWzFDoy4aD.js";import{F as We}from"./CeIrtYwTWi0f.js";import{B as $}from"./CDr2ho-JFUK6.js";import{B as x}from"./BvPxN-9qARCE.js";import{S as g}from"./CM8lvDV1lpMx.js";import{I as k}from"./DsV84GucKffH.js";import{G as Ue}from"./KWheKUqYoZai.js";import"./DUcDfQnPu_4C.js";const[O,m]=I({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),B=d.forwardRef((n,o)=>{const t=m(),r=c(t.getControlProps(),n);return e.jsx(u.div,{...r,ref:o})});B.displayName="SliderControl";const[Ye,_]=I({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),D=d.forwardRef((n,o)=>{const t=m(),{index:r}=_(),s=c(t.getDraggingIndicatorProps({index:r}),n);return e.jsx(u.span,{...s,ref:o,children:n.children||t.getThumbValue(r)})});D.displayName="SliderDraggingIndicator";const q=d.forwardRef((n,o)=>{const t=m(),r=_(),s=c(t.getHiddenInputProps(r),n);return e.jsx(u.input,{...s,ref:o})});q.displayName="SliderHiddenInput";const W=d.forwardRef((n,o)=>{const t=m(),r=c(t.getLabelProps(),n);return e.jsx(u.label,{...r,ref:o})});W.displayName="SliderLabel";const U=d.forwardRef((n,o)=>{const[t,r]=w()(n,["value"]),s=m(),i=c(s.getMarkerProps(t),r);return e.jsx(u.span,{...i,ref:o})});U.displayName="SliderMarker";const Y=d.forwardRef((n,o)=>{const t=m(),r=c(t.getMarkerGroupProps(),n);return e.jsx(u.div,{...r,ref:o})});Y.displayName="SliderMarkerGroup";const Q=d.forwardRef((n,o)=>{const t=m(),r=c(t.getRangeProps(),n);return e.jsx(u.div,{...r,ref:o})});Q.displayName="SliderRange";const Qe=(n={})=>{const{getRootNode:o}=M(),{dir:t}=G(),r={id:d.useId(),dir:t,getRootNode:o,value:n.defaultValue,...n},s={...r,value:n.value,onValueChange:P(n.onValueChange,{sync:!0}),onValueChangeEnd:P(n.onValueChangeEnd),onFocusChange:P(n.onFocusChange)},[i,l]=H(ce(r),{context:s});return ue(i,l,E)},J=d.forwardRef((n,o)=>{const[t,r]=w()(n,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),s=Qe(t),i=c(s.getRootProps(),r);return e.jsx(O,{value:s,children:e.jsx(u.div,{...i,ref:o})})});J.displayName="SliderRoot";const K=d.forwardRef((n,o)=>{const[{value:t},r]=w()(n,["value"]),s=c(t.getRootProps(),r);return e.jsx(O,{value:t,children:e.jsx(u.div,{...s,ref:o})})});K.displayName="SliderRootProvider";const X=d.forwardRef((n,o)=>{const[t,r]=w()(n,["index","name"]),s=m(),i=c(s.getThumbProps(t),r);return e.jsx(Ye,{value:t,children:e.jsx(u.div,{...i,ref:o})})});X.displayName="SliderThumb";const Z=d.forwardRef((n,o)=>{const t=m(),r=c(t.getTrackProps(),n);return e.jsx(u.div,{...r,ref:o})});Z.displayName="SliderTrack";const ee=d.forwardRef((n,o)=>{const{children:t,...r}=n,s=m(),i=c(s.getValueTextProps(),r);return e.jsx(u.span,{...i,ref:o,children:t||s.value.join(", ")})});ee.displayName="SliderValueText";const[re,S]=I({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),te=d.forwardRef((n,o)=>{const t=S(),r=c(t.getControlProps(),n);return e.jsx(u.span,{...r,ref:o})});te.displayName="SwitchControl";const oe=d.forwardRef((n,o)=>{const t=S(),r=c(t.getHiddenInputProps(),n),s=F();return e.jsx(u.input,{"aria-describedby":s?.ariaDescribedby,...r,ref:o})});oe.displayName="SwitchHiddenInput";const ne=d.forwardRef((n,o)=>{const t=S(),r=c(t.getLabelProps(),n);return e.jsx(u.span,{...r,ref:o})});ne.displayName="SwitchLabel";const Je=(n={})=>{const{getRootNode:o}=M(),{dir:t}=G(),r=F(),s={id:d.useId(),ids:{label:r?.ids.label,hiddenInput:r?.ids.control},dir:t,disabled:r?.disabled,readOnly:r?.readOnly,invalid:r?.invalid,required:r?.required,getRootNode:o,checked:n.defaultChecked,...n},i={...s,checked:n.checked,onCheckedChange:P(n.onCheckedChange,{sync:!0})},[l,a]=H(he(s),{context:i});return pe(l,a,E)},se=d.forwardRef((n,o)=>{const[t,r]=w()(n,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),s=Je(t),i=c(s.getRootProps(),r);return e.jsx(re,{value:s,children:e.jsx(u.label,{...i,ref:o})})});se.displayName="SwitchRoot";const ie=d.forwardRef((n,o)=>{const[{value:t},r]=w()(n,["value"]),s=c(t.getRootProps(),r);return e.jsx(re,{value:t,children:e.jsx(u.label,{...s,ref:o})})});ie.displayName="SwitchRootProvider";const de=d.forwardRef((n,o)=>{const t=S(),r=c(t.getThumbProps(),n);return e.jsx(u.span,{...r,ref:o})});de.displayName="SwitchThumb";function Ke(n){const{each:o,fallback:t,children:r}=n;return o?.length===0?t||null:o?.map(r)}const Xe=d.forwardRef(function({unstyled:o,...t},r){const s=xe({key:"inputAddon",recipe:t.recipe}),[i,l]=s.splitVariantProps(t),a=o?me:s(i);return e.jsx(N.div,{ref:r,...l,css:[a,t.css]})}),{withProvider:ae,withContext:f}=V({key:"slider"});ae(K,"root",{forwardAsChild:!0});const Ze=ae(J,"root",{forwardAsChild:!0}),er=f(B,"control",{forwardAsChild:!0}),rr=f(Z,"track",{forwardAsChild:!0}),tr=f(Q,"range",{forwardAsChild:!0}),or=f(X,"thumb",{forwardAsChild:!0}),nr=f(ee,"valueText",{forwardAsChild:!0}),L=f(W,"label",{forwardAsChild:!0}),sr=f(Y,"markerGroup",{forwardAsChild:!0}),ir=f(U,"marker",{forwardAsChild:!0}),dr=f("div","markerIndicator");f(D,"draggingIndicator",{forwardAsChild:!0});const ar=q,{withProvider:le,withContext:A,useStyles:lr}=V({key:"switch"});le(ie,"root",{forwardAsChild:!0});const cr=le(se,"root",{forwardAsChild:!0}),ur=A(ne,"label",{forwardAsChild:!0}),hr=A(te,"control",{forwardAsChild:!0}),pr=A(de,"thumb",{forwardAsChild:!0}),xr=d.forwardRef(function(o,t){const r=S(),s=lr(),{fallback:i,children:l,...a}=o;return e.jsx(N.span,{ref:t,"data-checked":z(r.checked),...a,css:[s.indicator,o.css],children:r.checked?l:i})}),mr=d.forwardRef(function(o,t){const r=S(),{fallback:s,children:i,...l}=o;return e.jsx(N.span,{ref:t,"data-checked":z(r.checked),...l,children:r.checked?i:s})}),fr=oe,jr={"theming-app":{name:"theming-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}}},br="",gr=[];function wr(n){throw new Error(`Unsupported locale: '${n}'`)}const Sr=fe(br),vr=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:wr,locales:gr,packages:jr,styles:Sr},Symbol.toStringTag,{value:"Module"})),Cr=d.forwardRef(function(o,t){const{showArrow:r,children:s,disabled:i,portalled:l=!0,content:a,contentProps:j,portalRef:R,...b}=o;return i?s:e.jsxs(ge,{...b,children:[e.jsx(we,{asChild:!0,children:s}),e.jsx(be,{disabled:!l,container:R,children:e.jsx(Se,{children:e.jsxs(ve,{ref:t,...j,children:[r&&e.jsx(Ce,{children:e.jsx(Pe,{})}),a]})})})]})}),v=d.forwardRef(function(o,t){const{icon:r,children:s,inputProps:i,rootRef:l,...a}=o;return e.jsxs(ke,{ref:l,...a,children:[e.jsx(ye,{ref:t,...i}),e.jsx(Te,{children:r||e.jsx(Ie,{})}),s!=null&&e.jsx(Ne,{children:s})]})}),Pr=d.forwardRef(function(o,t){const{label:r,children:s,helperText:i,errorText:l,optionalText:a,...j}=o;return e.jsxs($e,{ref:t,...j,children:[r&&e.jsxs(Le,{children:[r,e.jsx(Me,{fallback:a})]}),s,i&&e.jsx(Ve,{children:i}),l&&e.jsx(ze,{children:l})]})}),y=d.forwardRef(function(o,t){const{icon:r,children:s,...i}=o;return e.jsxs(Fe,{ref:t,...i,children:[s,e.jsx(He,{children:r})]})});d.forwardRef(function(o,t){const{items:r,children:s,...i}=o,l=d.useMemo(()=>r?.map(a=>typeof a=="string"?{label:a,value:a}:a),[r]);return e.jsxs(C,{ref:t,...i,children:[s,l?.map(a=>e.jsx("option",{value:a.value,disabled:a.disabled,children:a.label},a.value))]})});const Rr=d.forwardRef(function(o,t){const{inputProps:r,children:s,rootRef:i,trackLabel:l,thumbLabel:a,...j}=o;return e.jsxs(cr,{ref:i,...j,children:[e.jsx(fr,{ref:t,...r}),e.jsxs(hr,{children:[e.jsx(pr,{children:a&&e.jsx(mr,{fallback:a?.off,children:a?.on})}),l&&e.jsx(xr,{fallback:l.off,children:l.on})]}),s!=null&&e.jsx(ur,{children:s})]})}),T=d.forwardRef(function(o,t){const{children:r,inputProps:s,rootRef:i,...l}=o;return e.jsxs(Ee,{ref:i,...l,children:[e.jsx(Ge,{ref:t,...s}),e.jsx(Oe,{}),r&&e.jsx(Be,{children:r})]})}),kr=_e,yr=d.forwardRef(function(o,t){const{marks:r,label:s,showValue:i,...l}=o,a=o.defaultValue??o.value,j=r?.map(b=>typeof b=="number"?{value:b,label:void 0}:b),R=!!j?.some(b=>b.label);return e.jsxs(Ze,{ref:t,thumbAlignment:"center",...l,children:[s&&!i&&e.jsx(L,{children:s}),s&&i&&e.jsxs(De,{justify:"space-between",children:[e.jsx(L,{children:s}),e.jsx(nr,{})]}),e.jsxs(er,{"data-has-mark-label":R||void 0,children:[e.jsx(rr,{children:e.jsx(tr,{})}),e.jsx(Tr,{value:a}),e.jsx(Ir,{marks:j})]})]})});function Tr(n){const{value:o}=n;return e.jsx(Ke,{each:o,children:(t,r)=>e.jsx(or,{index:r,children:e.jsx(ar,{})},r)})}const Ir=d.forwardRef(function(o,t){const{marks:r}=o;return r?.length?e.jsx(sr,{ref:t,children:r.map((s,i)=>{const l=typeof s=="number"?s:s.value,a=typeof s=="number"?void 0:s.label;return e.jsxs(ir,{value:l,children:[e.jsx(dr,{}),a]},i)})}):null});function Nr(){return e.jsxs(qe,{children:[e.jsx(h,{size:"md",py:2,children:'Demo page based on color scheme "trails"'}),e.jsxs(We,{justifyContent:"center",children:[e.jsxs($,{bg:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",margin:3,minW:"400px",children:[e.jsx(h,{size:"md",children:"Button"}),e.jsx(h,{size:"xs",children:"default with tooltip"}),e.jsx(p,{direction:"row",my:2,children:e.jsx(Cr,{content:"Default button",lazyMount:!0,unmountOnExit:!0,openDelay:500,children:e.jsx(x,{children:"default"})})}),e.jsx(h,{size:"xs",children:"Chakra UI variants"}),e.jsxs(p,{direction:"row",my:2,children:[e.jsx(x,{variant:"solid",children:"solid"}),e.jsx(x,{variant:"outline",children:"outline"}),e.jsx(x,{variant:"ghost",children:"ghost"}),e.jsx(x,{variant:"surface",children:"surface"}),e.jsx(x,{variant:"plain",children:"plain"})]}),e.jsx(h,{size:"xs",children:"Button states"}),e.jsxs(p,{direction:"row",my:2,children:[e.jsx(x,{disabled:!0,children:"disabled"}),e.jsx(x,{loading:!0,children:"loading"}),e.jsx(x,{loading:!0,loadingText:"loading...",children:"loading with text"})]}),e.jsx(h,{size:"xs",children:"colorPalette"}),e.jsxs(p,{direction:"row",my:2,children:[e.jsx(x,{colorPalette:"blue",children:"blue"}),e.jsx(x,{colorPalette:"red",children:"red"})]}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Checkbox"}),e.jsxs(p,{direction:"column",my:2,gap:1,children:[e.jsx(v,{defaultChecked:!0,children:"defaultChecked1"}),e.jsx(v,{defaultChecked:!0,children:"defaultChecked2"}),e.jsx(v,{disabled:!0,children:"disabled"}),e.jsx(v,{invalid:!0,children:"invalid"})]}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Input"}),e.jsxs(p,{direction:"column",my:2,children:[e.jsx(Pr,{invalid:!1,children:e.jsx(k,{placeholder:"outline (default)"})}),e.jsx(k,{variant:"subtle",placeholder:"subtle"}),e.jsxs(Ue,{attached:!0,children:[e.jsx(Xe,{}),e.jsx(k,{placeholder:"input with left addon"})]})]})]}),e.jsxs($,{bg:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",margin:3,minW:"400px",children:[e.jsx(h,{size:"md",children:"Link"}),e.jsx(p,{direction:"column",my:2,children:e.jsx(Re,{href:"https://github.com/open-pioneer",target:"_blank",children:"https://github.com/open-pioneer"})}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Radio"}),e.jsx(kr,{defaultValue:"0",children:e.jsxs(p,{direction:"column",my:2,gap:1,children:[e.jsx(T,{value:"0",children:"defaultChecked"}),e.jsx(T,{disabled:!0,value:"1",children:"disabled"}),e.jsx(T,{invalid:!0,value:"2",children:"invalid"})]})}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Select"}),e.jsxs(p,{direction:"column",my:2,children:[e.jsx(y,{variant:"outline",children:e.jsxs(C,{children:[e.jsx("option",{value:"option1",children:"outline1 (default)"}),e.jsx("option",{value:"option2",children:"outline2 (default)"})]})}),e.jsx(y,{variant:"subtle",children:e.jsxs(C,{children:[e.jsx("option",{value:"option1",children:"subtle1"}),e.jsx("option",{value:"option2",children:"subtle2"})]})}),e.jsx(y,{disabled:!0,children:e.jsx(C,{children:e.jsx("option",{value:"option1",children:"disabled"})})})]}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Slider"}),e.jsx(p,{direction:"column",my:2,children:e.jsx(yr,{defaultValue:[30]})}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Switch"}),e.jsx(p,{direction:"column",my:2,children:e.jsx(Rr,{checked:!0})}),e.jsx(g,{my:5}),e.jsx(h,{size:"md",children:"Textarea"}),e.jsx(p,{direction:"column",my:2,children:e.jsx(Ae,{placeholder:"Here is a sample placeholder"})})]})]})]})}const Ar=je({component:Nr,appMetadata:vr});customElements.define("theming-app",Ar);
