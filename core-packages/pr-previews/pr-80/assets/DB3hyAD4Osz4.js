import{d as R,b as s,f,ac as F,ad as H,J as $,ae as S,af as z,ag as B,j as i,u as K,ah as D,ai as U,w as C,aj as Y,ak as J,v as Q}from"./hj3oFzJmyE5K.js";const[je,X]=R({name:"LocaleContext",hookName:"useLocaleContext",providerName:"<LocaleProvider />",strict:!1,defaultValue:{dir:"ltr",locale:"en-US"}});function Z(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ee(...e){return t=>{for(const r of e)Z(r,t)}}function te(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const g=e=>{const t=s.memo(s.forwardRef((r,o)=>{const{asChild:n,children:a,...c}=r;if(!n)return s.createElement(e,{...c,ref:o},a);const u=s.Children.only(a);if(!s.isValidElement(u))return null;const d=te(u);return s.cloneElement(u,{...f(c,u.props),ref:o?ee(o,d):d})}));return t.displayName=e.displayName||e.name,t},re=()=>{const e=new Map;return new Proxy(g,{apply(t,r,o){return g(o[0])},get(t,r){const o=r;return e.has(o)||e.set(o,g(o)),e.get(o)}})},p=re(),G=()=>(e,t)=>t.reduce((r,o)=>{const[n,a]=r,c=o;return a[c]!==void 0&&(n[c]=a[c]),delete a[c],[n,a]},[{},{...e}]);var oe=F(e=>e),E=e=>e?.constructor.name==="Array",ne=(e,t)=>{if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!I(e[r],t[r]))return!1;return!0},I=(e,t)=>{if(Object.is(e,t))return!0;if(e==null&&t!=null||e!=null&&t==null)return!1;if(typeof e?.isEqual=="function"&&typeof t?.isEqual=="function")return e.isEqual(t);if(typeof e=="function"&&typeof t=="function")return e.toString()===t.toString();if(E(e)&&E(t))return ne(Array.from(e),Array.from(t));if(typeof e!="object"||typeof t!="object")return!1;const r=Object.keys(t??Object.create(null)),o=r.length;for(let n=0;n<o;n++)if(!Reflect.has(e,r[n]))return!1;for(let n=0;n<o;n++){const a=r[n];if(!I(e[a],t[a]))return!1}return!0},se=Function.prototype.toString;se.call(Object);function b(e){if(!ae(e)||e===void 0)return e;const t=Reflect.ownKeys(e).filter(o=>typeof o=="string"),r={};for(const o of t){const n=e[o];n!==void 0&&(r[o]=b(n))}return r}var ae=e=>e&&typeof e=="object"&&e.constructor===Object;function ce(e,t){const r=s.useRef(!1),o=s.useRef(!1);s.useEffect(()=>{if(r.current&&o.current)return e();o.current=!0},t),s.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[])}var ie=H("__zag__targetCache",()=>new WeakMap);function A(e,t){const{actions:r,context:o,sync:n}=t??{},a=s.useRef(void 0),c=s.useRef(void 0),u=s.useSyncExternalStore(s.useCallback(l=>$(e.state,l,n),[n]),()=>{const l=S(e.state);try{if(a.current&&c.current&&!z(a.current,l,c.current,new WeakMap))return a.current}catch{}return l},()=>S(e.state));e.setOptions({actions:r});const d=s.useMemo(()=>b(o??{}),[o]);ce(()=>{const l=Object.entries(d),y=e.contextSnapshot??{};l.map(([m,j])=>({key:m,curr:j,prev:y[m],equal:I(y[m],j)})).every(({equal:m})=>m)||e.setContext(d)},[d]);const P=new WeakMap;s.useEffect(()=>{a.current=u,c.current=P});const v=s.useMemo(()=>new WeakMap,[]);return B(u,P,v,ie)}function Se(e){return[A(e),e.send]}function ue(e){const t=s.useRef(void 0);return t.current||(t.current={v:e()}),t.current.v}var de=typeof document<"u"?s.useLayoutEffect:s.useEffect;function le(e,t){const{state:r,context:o}=t??{},n=ue(()=>{const c=typeof e=="function"?e():e;return o&&c.setContext(o),c._created(),c}),a=s.useRef(void 0);return de(()=>{const c=r??a.current;return n.start(c),()=>{n.stop()}},[]),n}function fe(e,t){const r=le(e,t);return[A(r,t),r.send,r]}function pe(e,t={}){const{sync:r=!1}=t,o=me(e);return s.useCallback((...n)=>r?queueMicrotask(()=>o.current?.(...n)):o.current?.(...n),[r,o])}function me(e){const t=s.useRef(e);return t.current=e,t}const[Ee,Ne]=R({name:"FieldContext",hookName:"useFieldContext",providerName:"<FieldProvider />",strict:!1}),[L,h]=R({name:"RadioGroupContext",hookName:"useRadioGroupContext",providerName:"<RadioGroupProvider />"}),[Re,he]=R({name:"RadioGroupItemContext",hookName:"useRadioGroupItemContext",providerName:"<RadioGroupItemProvider />"}),[ye,k]=R({name:"RadioGroupItemPropsContext",hookName:"useRadioGroupItemPropsContext",providerName:"<RadioGroupItemPropsProvider />"}),O=s.forwardRef((e,t)=>{const[r,o]=G()(e,["value","disabled","invalid"]),n=h(),a=f(n.getItemProps(r),o),c=n.getItemState(r);return i.jsx(Re,{value:c,children:i.jsx(ye,{value:r,children:i.jsx(p.label,{...a,ref:t})})})});O.displayName="RadioGroupItem";const xe=e=>e.children(he()),w=s.forwardRef((e,t)=>{const r=h(),o=k(),n=f(r.getItemControlProps(o),e);return i.jsx(p.div,{...n,ref:t})});w.displayName="RadioGroupItemControl";const q=s.forwardRef((e,t)=>{const r=h(),o=k(),n=f(r.getItemHiddenInputProps(o),e);return i.jsx(p.input,{...n,ref:t})});q.displayName="RadioGroupItemHiddenInput";const M=s.forwardRef((e,t)=>{const r=h(),o=k(),n=f(r.getItemTextProps(o),e);return i.jsx(p.span,{...n,ref:t})});M.displayName="RadioGroupItemText";const W=s.forwardRef((e,t)=>{const r=h(),o=f(r.getLabelProps(),e);return i.jsx(p.label,{...o,ref:t})});W.displayName="RadioGroupLabel";const Pe=(e={})=>{const{getRootNode:t}=K(),{dir:r}=X(),o={id:s.useId(),dir:r,getRootNode:t,value:e.defaultValue,...e},n={...o,value:e.value,onValueChange:pe(e.onValueChange,{sync:!0})},[a,c]=fe(D(o),{context:n});return U(a,c,oe)},_=s.forwardRef((e,t)=>{const[r,o]=G()(e,["defaultValue","disabled","form","id","ids","name","onValueChange","orientation","readOnly","value"]),n=Pe(r),a=f(n.getRootProps(),o);return i.jsx(L,{value:n,children:i.jsx(p.div,{...a,ref:t})})});_.displayName="RadioGroupRoot";const T=s.forwardRef((e,t)=>{const[{value:r},o]=G()(e,["value"]),n=f(r.getRootProps(),o);return i.jsx(L,{value:r,children:i.jsx(p.div,{...n,ref:t})})});T.displayName="RadioGroupRootProvider";const ve=C("div");ve.displayName="Box";const N=e=>e?"":void 0,ge=s.forwardRef(function(t,r){const o=Y({key:"radiomark",recipe:t.recipe}),[n,a]=o.splitVariantProps(t),{checked:c,disabled:u,unstyled:d,children:P,...v}=a,l=d?J:o(n),y={ref:r,"data-checked":N(c),"data-disabled":N(u),...v,css:[l,t.css]};return i.jsx(C.span,{...y,children:c&&i.jsx("span",{className:"dot"})})}),{withProvider:V,withContext:x,useStyles:Ce,PropsProvider:be}=Q({key:"radioGroup"});V(T,"root",{forwardAsChild:!0});const Ae=V(_,"root",{forwardAsChild:!0});x(W,"label",{forwardAsChild:!0});const Le=x(O,"item",{forwardAsChild:!0}),Oe=x(M,"itemText",{forwardAsChild:!0});x(w,"itemControl",{forwardAsChild:!0});const qe=s.forwardRef(function(t,r){const o=Ce();return i.jsx(xe,{children:n=>i.jsx(w,{asChild:!0,children:i.jsx(ge,{ref:r,unstyled:!0,...t,checked:n.checked,disabled:n.disabled,css:[o.itemControl,t.css]})})})}),Me=q,Ge=C("div",{base:{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});Ge.displayName="StackSeparator";export{ve as B,Le as R,Ge as S,fe as a,X as b,G as c,p as d,ee as e,Ne as f,N as g,Se as h,Me as i,qe as j,Oe as k,Ae as l,oe as n,pe as u};
