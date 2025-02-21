import{r as c,d as f,u as $,m as go,e as fo,f as a,j as e,s as Po,g as jo,h as vo,i as Co,L as wo,k as bo,l as So,n as Ro,o as To,p as Io,q as yo,t as N,v as _,C as Ao,w as Do,x as $o,a as No,y as ko,z as Oo,H as ve,S as F,A as Eo,B as Go,D as Bo,E as Fo,F as Vo,b as zo}from"./DBb57a8xxaPh.js";import{u as ae,L as de,I as Ho,a as Lo}from"./IiHiI8raHj-U.js";import{H as Mo}from"./jQOwKM-t_NEg.js";import{a as p,c as U}from"./C23-Qsk0aWup.js";import{c as S,u as Ce}from"./CTmu5FOTgAZp.js";import{u as V,n as z}from"./DeAMCPDw6n1O.js";import{u as H,a as P}from"./CGYFjWM1GJDq.js";import{P as I}from"./WF0lxOQ8kW2y.js";import{u as D,a as y,s as k,P as O,T as _o,b as Uo,c as Wo,d as qo,e as Ko,f as Xo,L as Jo}from"./C1f0seUiZNkh.js";import{R as Qo,a as Yo,b as Zo,c as et,d as ot}from"./2ZSJ21mpxvvw.js";import{N as tt,a as rt,b as nt}from"./nGEdrQDd5CNI.js";import{T as W}from"./DWyNlQRbL6ea.js";import{S as we,B as j}from"./BvPxN-9qARCE.js";import{C as st}from"./6OIWzFDoy4aD.js";import{c as it,T as ct,a as lt,b as at,d as dt,e as pt,f as ut,g as mt}from"./Co7RuFEIvuRH.js";import{B as g}from"./CDr2ho-JFUK6.js";import{S as ht}from"./DnSYRr1zsfSu.js";import"./Y4lXb-GqqLil.js";import"./C3JtgmrzhVmr.js";function xt(o={}){const r=ae(o.onOpen),t=ae(o.onClose),[n,s]=c.useState(o.defaultOpen||!1),i=o.open!==void 0?o.open:n,l=o.open!==void 0,d=c.useCallback(()=>{l||s(!1),t?.()},[l,t]),h=c.useCallback(()=>{l||s(!0),r?.()},[l,r]),A=c.useCallback(()=>{i?d():h()},[i,h,d]);return{open:i,onOpen:h,onClose:d,onToggle:A,setOpen:s}}const[be,q]=f({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[gt,ls]=f({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),ft=o=>S()(o,["defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]),Pt=(o={})=>{const{lazyMount:r,unmountOnExit:t,...n}=o,s=c.useRef(!1),{dir:i}=H(),{getRootNode:l}=$(),d={id:c.useId(),dir:i,getRootNode:l,open:o.defaultOpen,"open.controlled":o.open!==void 0,...n},h={...d,open:o.open,onOpenChange:P(o.onOpenChange,{sync:!0})},[A,E]=V(go(d),{context:h}),G=fo(A,E,z);G.visible&&(s.current=!0);const Q=!G.visible&&!s.current&&r||t&&!G.visible&&s.current;return{...G,isUnmounted:Q}},[jt,Se]=f({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),Re=c.forwardRef((o,r)=>{const[t,n]=ft(o),s=Pt(t),i=a(s.getRootProps(),n);return e.jsx(jt,{value:s,children:e.jsx(p.div,{...i,ref:r})})});Re.displayName="CollapsibleRoot";const[K,Te]=f({name:"RenderStrategyContext",hookName:"useRenderStrategyContext",providerName:"<RenderStrategyPropsProvider />"}),X=o=>S()(o,["lazyMount","unmountOnExit"]),[vt,oe]=f({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),Ie=c.forwardRef((o,r)=>{const[t,n]=Po(o),s=q(),i=Te(),l=a(s.getItemProps(t),n),d=s.getItemState(t),h=s.getItemContentProps(t);return e.jsx(vt,{value:t,children:e.jsx(gt,{value:d,children:e.jsx(Re,{ref:r,open:d.expanded,ids:{content:h.id},...i,...l})})})});Ie.displayName="AccordionItem";const ye=c.forwardRef((o,r)=>{const t=Se();if(t.isUnmounted)return null;const n=a(t.getContentProps(),o);return e.jsx(p.div,{...n,ref:r})});ye.displayName="CollapsibleContent";const Ct=S(),Ae=c.forwardRef((o,r)=>{const t=q(),n=oe(),s=t.getItemContentProps(n),[,i]=Ct(s,["hidden","data-state"]),l=a(i,o);return e.jsx(ye,{ref:r,...l})});Ae.displayName="AccordionItemContent";const De=c.forwardRef((o,r)=>{const t=q(),n=oe(),s=a(t.getItemIndicatorProps(n),o);return e.jsx(p.div,{...s,ref:r})});De.displayName="AccordionItemIndicator";const $e=c.forwardRef((o,r)=>{const t=q(),n=oe(),s=Se(),i=t.getItemTriggerProps(n),l=a({...i,"aria-controls":s.isUnmounted?void 0:i["aria-controls"]},o);return e.jsx(p.button,{...l,ref:r})});$e.displayName="AccordionItemTrigger";const wt=(o={})=>{const{getRootNode:r}=$(),{dir:t}=H(),n={id:c.useId(),dir:t,getRootNode:r,value:o.defaultValue,...o},s={...n,value:o.value,onFocusChange:P(o.onFocusChange),onValueChange:P(o.onValueChange)},[i,l]=V(jo(n),{context:s});return vo(i,l,z)},Ne=c.forwardRef((o,r)=>{const[t,n]=X(o),[s,i]=S()(n,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),l=wt(s),d=a(l.getRootProps(),i);return e.jsx(be,{value:l,children:e.jsx(K,{value:t,children:e.jsx(p.div,{...d,ref:r})})})});Ne.displayName="AccordionRoot";const ke=c.forwardRef((o,r)=>{const[t,n]=X(o),[{value:s},i]=S()(n,["value"]),l=a(s.getRootProps(),i);return e.jsx(be,{value:s,children:e.jsx(K,{value:t,children:e.jsx(p.div,{...l,ref:r})})})});ke.displayName="AccordionRootProvider";const bt=o=>Co(new wo(o)),[Oe,R]=f({name:"DialogContext",hookName:"useDialogContext",providerName:"<DialogProvider />"}),te=c.forwardRef((o,r)=>{const t=R(),n=Te(),s=D({...n,present:t.open}),i=a(t.getBackdropProps(),s.getPresenceProps(),o);return s.unmounted?null:e.jsx(p.div,{...i,ref:U(s.ref,r)})});te.displayName="DialogBackdrop";const re=c.forwardRef((o,r)=>{const t=R(),n=a(t.getCloseTriggerProps(),o);return e.jsx(p.button,{...n,ref:r})});re.displayName="DialogCloseTrigger";const ne=c.forwardRef((o,r)=>{const t=R(),n=y(),s=a(t.getContentProps(),n.getPresenceProps(),o);return n.unmounted?null:e.jsx(p.div,{...s,ref:U(n.ref,r)})});ne.displayName="DialogContent";const se=c.forwardRef((o,r)=>{const t=R(),n=a(t.getDescriptionProps(),o);return e.jsx(p.div,{...n,ref:r})});se.displayName="DialogDescription";const ie=c.forwardRef((o,r)=>{const t=R(),n=a(t.getPositionerProps(),o);return y().unmounted?null:e.jsx(p.div,{...n,ref:r})});ie.displayName="DialogPositioner";const St=(o={})=>{const{getRootNode:r}=$(),{dir:t}=H(),n={id:c.useId(),getRootNode:r,dir:t,open:o.defaultOpen,"open.controlled":o.open!==void 0,...o},s={...n,open:o.open,onOpenChange:P(o.onOpenChange,{sync:!0}),onEscapeKeyDown:P(o.onEscapeKeyDown),onInteractOutside:P(o.onInteractOutside)},[i,l]=V(bo(n),{context:s});return So(i,l,z)},Ee=o=>{const[r,{children:t,...n}]=k(o),[s]=X(r),i=St(n),l=D(a({present:i.open},r));return e.jsx(Oe,{value:i,children:e.jsx(K,{value:s,children:e.jsx(O,{value:l,children:t})})})},Ge=o=>{const[r,{value:t,children:n}]=k(o),[s]=X(r),i=D(a({present:t.open},r));return e.jsx(Oe,{value:t,children:e.jsx(K,{value:s,children:e.jsx(O,{value:i,children:n})})})},ce=c.forwardRef((o,r)=>{const t=R(),n=a(t.getTitleProps(),o);return e.jsx(p.h2,{...n,ref:r})});ce.displayName="DialogTitle";const le=c.forwardRef((o,r)=>{const t=R(),n=y(),s=a({...t.getTriggerProps(),"aria-controls":n.unmounted?void 0:t.getTriggerProps()["aria-controls"]},o);return e.jsx(p.button,{...s,ref:r})});le.displayName="DialogTrigger";const[Be,v]=f({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),Fe=c.forwardRef((o,r)=>{const t=v(),n=a(t.getAnchorProps(),o);return e.jsx(p.div,{...n,ref:r})});Fe.displayName="PopoverAnchor";const Ve=c.forwardRef((o,r)=>{const t=v(),n=a(t.getArrowProps(),o);return e.jsx(p.div,{...n,ref:r})});Ve.displayName="PopoverArrow";const ze=c.forwardRef((o,r)=>{const t=v(),n=a(t.getArrowTipProps(),o);return e.jsx(p.div,{...n,ref:r})});ze.displayName="PopoverArrowTip";const He=c.forwardRef((o,r)=>{const t=v(),n=a(t.getCloseTriggerProps(),o);return e.jsx(p.button,{...n,ref:r})});He.displayName="PopoverCloseTrigger";const Le=c.forwardRef((o,r)=>{const t=v(),n=y(),s=a(t.getContentProps(),n.getPresenceProps(),o);return n.unmounted?null:e.jsx(p.div,{...s,ref:U(n.ref,r)})});Le.displayName="PopoverContent";const Me=c.forwardRef((o,r)=>{const t=v(),n=a(t.getDescriptionProps(),o);return e.jsx(p.div,{...n,ref:r})});Me.displayName="PopoverDescription";const _e=c.forwardRef((o,r)=>{const t=v(),n=a(t.getIndicatorProps(),o);return e.jsx(p.div,{...n,ref:r})});_e.displayName="PopoverIndicator";const Ue=c.forwardRef((o,r)=>{const t=v(),n=y(),s=a(t.getPositionerProps(),o);return n.unmounted?null:e.jsx(p.div,{...s,ref:r})});Ue.displayName="PopoverPositioner";const Rt=(o={})=>{const{getRootNode:r}=$(),{dir:t}=H(),n={id:c.useId(),dir:t,getRootNode:r,open:o.defaultOpen,"open.controlled":o.open!==void 0,...o},s={...n,open:o.open,onOpenChange:P(o.onOpenChange,{sync:!0})},[i,l]=V(Ro(n),{context:s});return To(i,l,z)},Tt=o=>{const[r,{children:t,...n}]=k(o),s=Rt(n),i=D(a({present:s.open},r));return e.jsx(Be,{value:s,children:e.jsx(O,{value:i,children:t})})},It=o=>{const[r,{value:t,children:n}]=k(o),s=D(a({present:t.open},r));return e.jsx(Be,{value:t,children:e.jsx(O,{value:s,children:n})})},We=c.forwardRef((o,r)=>{const t=v(),n=a(t.getTitleProps(),o);return e.jsx(p.div,{...n,ref:r})});We.displayName="PopoverTitle";const qe=c.forwardRef((o,r)=>{const t=v(),n=y(),s=a({...t.getTriggerProps(),"aria-controls":n.unmounted?void 0:t.getTriggerProps()["aria-controls"]},o);return e.jsx(p.button,{...s,ref:r})});qe.displayName="PopoverTrigger";const[Ke,u]=f({name:"SelectContext",hookName:"useSelectContext",providerName:"<SelectProvider />"}),Xe=c.forwardRef((o,r)=>{const t=u(),n=a(t.getClearTriggerProps(),o);return e.jsx(p.button,{...n,ref:r})});Xe.displayName="SelectClearTrigger";const Je=c.forwardRef((o,r)=>{const t=u(),n=y(),s=a(t.getContentProps(),n.getPresenceProps(),o);return n.unmounted?null:e.jsx(p.div,{...s,ref:U(n.ref,r)})});Je.displayName="SelectContent";const yt=o=>o.children(u()),Qe=c.forwardRef((o,r)=>{const t=u(),n=a(t.getControlProps(),o);return e.jsx(p.div,{...n,ref:r})});Qe.displayName="SelectControl";const Ye=c.forwardRef((o,r)=>{const t=u(),n=a(t.getHiddenSelectProps(),o),s=t.value.length===0,i=Ce();return e.jsxs(p.select,{"aria-describedby":i?.ariaDescribedby,...n,ref:r,children:[s&&e.jsx("option",{value:""}),t.collection.items.map((l,d)=>e.jsx("option",{value:t.collection.getItemValue(l)??"",disabled:t.collection.getItemDisabled(l)},d))]})});Ye.displayName="SelectHiddenSelect";const Ze=c.forwardRef((o,r)=>{const t=u(),n=a(t.getIndicatorProps(),o);return e.jsx(p.div,{...n,ref:r})});Ze.displayName="SelectIndicator";const[At,as]=f({name:"SelectItemContext",hookName:"useSelectItemContext",providerName:"<SelectItemProvider />"}),[Dt,eo]=f({name:"SelectItemPropsContext",hookName:"useSelectItemPropsContext",providerName:"<SelectItemPropsProvider />"}),oo=c.forwardRef((o,r)=>{const[t,n]=S()(o,["item","persistFocus"]),s=u(),i=a(s.getItemProps(t),n),l=s.getItemState(t);return e.jsx(Dt,{value:t,children:e.jsx(At,{value:l,children:e.jsx(p.div,{...i,ref:r})})})});oo.displayName="SelectItem";const[$t,Nt]=f({name:"SelectItemGroupPropsContext",hookName:"useSelectItemGroupPropsContext",providerName:"<SelectItemGroupPropsProvider />"}),to=c.forwardRef((o,r)=>{const t=c.useId(),[n,s]=S()(o,["id"]),i={id:t,...n},l=u(),d=a(l.getItemGroupProps(i),s);return e.jsx($t,{value:i,children:e.jsx(p.div,{...d,ref:r})})});to.displayName="SelectItemGroup";const ro=c.forwardRef((o,r)=>{const t=u(),n=Nt(),s=a(t.getItemGroupLabelProps({htmlFor:n.id}),o);return e.jsx(p.div,{...s,ref:r})});ro.displayName="SelectItemGroupLabel";const no=c.forwardRef((o,r)=>{const t=u(),n=eo(),s=a(t.getItemIndicatorProps(n),o);return e.jsx(p.div,{...s,ref:r})});no.displayName="SelectItemIndicator";const so=c.forwardRef((o,r)=>{const t=u(),n=eo(),s=a(t.getItemTextProps(n),o);return e.jsx(p.span,{...s,ref:r})});so.displayName="SelectItemText";const io=c.forwardRef((o,r)=>{const t=u(),n=a(t.getLabelProps(),o);return e.jsx(p.label,{...n,ref:r})});io.displayName="SelectLabel";const co=c.forwardRef((o,r)=>{const t=u(),n=a(t.getPositionerProps(),o);return y().unmounted?null:e.jsx(p.div,{...n,ref:r})});co.displayName="SelectPositioner";const kt=o=>{const{collection:r,...t}=o,n=H(),s=$(),i=Ce(),l={id:c.useId(),ids:{label:i?.ids.label,hiddenSelect:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,invalid:i?.invalid,required:i?.required,dir:n.dir,getRootNode:s.getRootNode,collection:r,open:o.defaultOpen,value:o.defaultValue,"open.controlled":o.open!==void 0,...t},d=(()=>{const{collection:G,...Q}=l;return{...Q,value:o.value,onValueChange:P(o.onValueChange,{sync:!0}),onHighlightChange:P(o.onHighlightChange),onOpenChange:P(o.onOpenChange)}})(),[h,A,E]=V(Io(l),{context:d});return c.useEffect(()=>{E.setContext({collection:r})},[r]),yo(h,A,z)},Ot=(o,r)=>{const[t,n]=k(o),[s,i]=S()(n,["closeOnSelect","collection","composite","defaultOpen","defaultValue","deselectable","disabled","form","highlightedValue","id","ids","invalid","loopFocus","multiple","name","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onValueChange","open","positioning","readOnly","required","scrollToIndexFn","value"]),l=kt(s),d=D(a({present:l.open},t)),h=a(l.getRootProps(),i);return e.jsx(Ke,{value:l,children:e.jsx(O,{value:d,children:e.jsx(p.div,{...h,ref:r})})})},Et=c.forwardRef(Ot),Gt=(o,r)=>{const[t,n]=k(o),[{value:s},i]=S()(n,["value"]),l=D(a({present:s.open},t)),d=a(s.getRootProps(),i);return e.jsx(Ke,{value:s,children:e.jsx(O,{value:l,children:e.jsx(p.div,{...d,ref:r})})})},Bt=c.forwardRef(Gt),lo=c.forwardRef((o,r)=>{const t=u(),n=a(t.getTriggerProps(),o);return e.jsx(p.button,{...n,ref:r})});lo.displayName="SelectTrigger";const ao=c.forwardRef((o,r)=>{const{children:t,placeholder:n,...s}=o,i=u(),l=a(i.getValueTextProps(),s);return e.jsx(p.span,{...l,ref:r,children:t||i.valueAsString||n})});ao.displayName="SelectValueText";const{withProvider:po,withContext:L}=N({key:"accordion"});po(ke,"root",{forwardAsChild:!0});const Ft=po(Ne,"root",{forwardAsChild:!0}),Vt=L(Ie,"item",{forwardAsChild:!0}),zt=L(Ae,"itemContent",{forwardAsChild:!0}),Ht=L("div","itemBody"),Lt=L($e,"itemTrigger",{forwardAsChild:!0}),pe=L(De,"itemIndicator",{forwardAsChild:!0}),{withRootProvider:uo,withContext:C}=N({key:"dialog"});uo(Ge,{defaultProps:{unmountOnExit:!0,lazyMount:!0}});const Mt=uo(Ee,{defaultProps:{unmountOnExit:!0,lazyMount:!0}}),_t=C(le,"trigger",{forwardAsChild:!0}),Ut=C(ie,"positioner",{forwardAsChild:!0}),Wt=C(ne,"content",{forwardAsChild:!0});C(se,"description",{forwardAsChild:!0});const qt=C(ce,"title",{forwardAsChild:!0}),Kt=C(re,"closeTrigger",{forwardAsChild:!0}),Xt=c.forwardRef(function(r,t){const n=R();return e.jsx(_.button,{...r,ref:t,onClick:()=>n.setOpen(!1)})}),Jt=C(te,"backdrop",{forwardAsChild:!0}),Qt=C("div","body"),Yt=C("div","footer"),Zt=C("div","header"),{withRootProvider:mo,withContext:w}=N({key:"drawer"});mo(Ge,{defaultProps:{unmountOnExit:!0,lazyMount:!0}});const er=mo(Ee,{defaultProps:{unmountOnExit:!0,lazyMount:!0}});w(le,"trigger",{forwardAsChild:!0});const or=w(ie,"positioner",{forwardAsChild:!0}),tr=w(ne,"content",{forwardAsChild:!0});w(se,"description",{forwardAsChild:!0});w(ce,"title",{forwardAsChild:!0});const rr=w(re,"closeTrigger",{forwardAsChild:!0}),nr=c.forwardRef(function(r,t){const n=R();return e.jsx(_.button,{...r,ref:t,onClick:()=>n.setOpen(!1)})}),sr=w(te,"backdrop",{forwardAsChild:!0}),ir=w("div","body"),cr=w("div","footer"),lr=w("div","header"),{withRootProvider:ho,withContext:x}=N({key:"popover"});ho(It);const ar=ho(Tt),dr=x(qe,"trigger",{forwardAsChild:!0}),pr=x(Ue,"positioner",{forwardAsChild:!0}),ur=x(Le,"content",{forwardAsChild:!0}),mr=x(Ve,"arrow",{forwardAsChild:!0}),hr=x(ze,"arrowTip",{forwardAsChild:!0}),xr=x(He,"closeTrigger",{forwardAsChild:!0});x(_e,"indicator",{forwardAsChild:!0});x(We,"title",{forwardAsChild:!0});x(Me,"description",{forwardAsChild:!0});const gr=x("footer","footer"),fr=x("header","header"),Pr=x("div","body");x(Fe,void 0,{forwardAsChild:!0});const{withProvider:xo,withContext:m}=N({key:"select"});xo(Bt,"root",{forwardAsChild:!0});const jr=xo(Et,"root",{forwardAsChild:!0}),vr=m(lo,"trigger",{forwardAsChild:!0}),Cr=m(co,"positioner",{forwardAsChild:!0}),wr=m(Je,"content",{forwardAsChild:!0}),br=m(ao,"valueText",{forwardAsChild:!0}),Sr=m(Xe,"clearTrigger",{forwardAsChild:!0}),Rr=m(to,"itemGroup",{forwardAsChild:!0}),Tr=m(ro,"itemGroupLabel",{forwardAsChild:!0}),Ir=m(oo,"item",{forwardAsChild:!0});m(so,"itemText",{forwardAsChild:!0});const yr=m(no,"itemIndicator",{forwardAsChild:!0,defaultProps:{children:e.jsx(Do,{})}}),Ar=m("div","indicatorGroup"),Dr=m(Ze,"indicator",{forwardAsChild:!0,defaultProps:{children:e.jsx(Ao,{})}}),$r=m(Qe,"control",{forwardAsChild:!0}),Nr=m(io,"label",{forwardAsChild:!0}),kr=yt,Or=Ye,{StylesProvider:Er,ClassNamesProvider:Gr,useRecipeResult:Br,withContext:T}=N({key:"table"}),Fr=c.forwardRef(function({native:r,...t},n){const{styles:s,props:i,classNames:l}=Br(t),d=c.useMemo(()=>r?{...s.root,"& thead":s.header,"& tbody":s.body,"& tfoot":s.footer,"& thead th":s.columnHeader,"& tr":s.row,"& td":s.cell,"& caption":s.caption}:s.root,[s,r]);return e.jsx(Gr,{value:l,children:e.jsx(Er,{value:s,children:e.jsx(_.table,{ref:n,...i,css:[d,t.css],className:$o(l?.root,t.className)})})})}),M=T("tr","row");_("div",{base:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflow:"auto",maxWidth:"100%"}});const Vr=T("thead","header");T("tfoot","footer");const Y=T("th","columnHeader"),b=T("td","cell"),zr=T("caption","caption",{defaultProps:{captionSide:"bottom"}}),Hr=T("tbody","body");T("colgroup");T("col");const Lr={"chakra-app":{name:"chakra-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},Mr=".portal-content{position:fixed;bottom:20px;left:20px}",_r=[];function Ur(o){throw new Error(`Unsupported locale: '${o}'`)}const Wr=No(Mr),qr=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:Ur,locales:_r,packages:Lr,styles:Wr},Symbol.toStringTag,{value:"Module"})),Kr=ko(Oo,{globalCss:{html:{colorPalette:"primary"}},theme:{tokens:{colors:{primary:{50:"#defffd",100:"#b3fffa",200:"#86feee",300:"#61fbdc",400:"#3efec9",500:"#32e5a6",600:"#23b277",700:"#147f4c",800:"#004d23",900:"#001b0a",950:"#000b06"}}},semanticTokens:{colors:{primary:{solid:{value:"{colors.primary.500}"},contrast:{value:"{colors.primary.100}"},fg:{value:"{colors.primary.700}"},muted:{value:"{colors.primary.100}"},subtle:{value:"{colors.primary.200}"},emphasized:{value:"{colors.primary.300}"},focusRing:{value:"{colors.primary.500}"}}}}}}),Xr=c.forwardRef(function(r,t){const{children:n,indicatorPlacement:s="end",...i}=r;return e.jsxs(Lt,{...i,ref:t,children:[s==="start"&&e.jsx(pe,{rotate:{base:"-90deg",_open:"0deg"},children:e.jsx(de,{})}),e.jsx(Mo,{gap:"4",flex:"1",textAlign:"start",width:"full",children:n}),s==="end"&&e.jsx(pe,{children:e.jsx(de,{})})]})}),Jr=c.forwardRef(function(r,t){return e.jsx(zt,{children:e.jsx(Ht,{...r,ref:t})})}),Qr=Ft,Yr=Vt,J=c.forwardRef(function(r,t){return e.jsx(Ho,{variant:"ghost","aria-label":"Close",ref:t,...r,children:r.children??e.jsx(Lo,{})})}),Zr=c.forwardRef(function(r,t){const{children:n,portalled:s=!0,portalRef:i,backdrop:l=!0,...d}=r;return e.jsxs(I,{disabled:!s,container:i,children:[l&&e.jsx(Jt,{}),e.jsx(Ut,{children:e.jsx(Wt,{ref:t,...d,asChild:!1,children:n})})]})}),en=c.forwardRef(function(r,t){return e.jsx(Kt,{position:"absolute",top:"2",insetEnd:"2",...r,asChild:!0,children:e.jsx(J,{size:"sm",ref:t,children:r.children})})}),on=Mt,tn=Yt,rn=Zt,nn=Qt,sn=qt,cn=_t,ln=Xt,an=c.forwardRef(function(r,t){const{showArrow:n,children:s,disabled:i,portalled:l=!0,content:d,contentProps:h,portalRef:A,...E}=r;return i?s:e.jsxs(_o,{...E,children:[e.jsx(Uo,{asChild:!0,children:s}),e.jsx(I,{disabled:!l,container:A,children:e.jsx(Wo,{children:e.jsxs(qo,{ref:t,...h,children:[n&&e.jsx(Ko,{children:e.jsx(Xo,{})}),d]})})})]})}),dn=c.forwardRef(function(r,t){const{children:n,portalled:s=!0,portalRef:i,offset:l,...d}=r;return e.jsx(I,{disabled:!s,container:i,children:e.jsx(or,{padding:l,children:e.jsx(tr,{ref:t,...d,asChild:!1,children:n})})})}),pn=c.forwardRef(function(r,t){return e.jsx(rr,{position:"absolute",top:"2",insetEnd:"2",...r,asChild:!0,children:e.jsx(J,{size:"sm",ref:t})})}),un=er,mn=cr,hn=lr,xn=ir,gn=nr,ue=c.forwardRef(function(r,t){const{portalled:n=!0,portalRef:s,...i}=r;return e.jsx(I,{disabled:!n,container:s,children:e.jsx(pr,{children:e.jsx(ur,{ref:t,...i})})})}),me=c.forwardRef(function(r,t){return e.jsx(mr,{...r,ref:t,children:e.jsx(hr,{})})}),he=c.forwardRef(function(r,t){return e.jsx(xr,{position:"absolute",top:"1",insetEnd:"1",...r,asChild:!0,ref:t,children:e.jsx(J,{size:"sm"})})}),fn=gr,xe=fr,ge=ar,Z=Pr,fe=dr,B=c.forwardRef(function(r,t){const{children:n,inputProps:s,rootRef:i,...l}=r;return e.jsxs(Qo,{ref:i,...l,children:[e.jsx(Yo,{ref:t,...s}),e.jsx(Zo,{}),n&&e.jsx(et,{children:n})]})}),Pe=ot;function Pn(){return e.jsxs(Fr,{variant:"outline",striped:!0,children:[e.jsx(zr,{children:"This is the table cation"}),e.jsx(Vr,{children:e.jsxs(M,{children:[e.jsx(Y,{children:"First"}),e.jsx(Y,{children:"Test"}),e.jsx(Y,{textAlign:"end",children:"Third (textAlign=end)"})]})}),e.jsxs(Hr,{children:[e.jsxs(M,{children:[e.jsx(b,{children:"one"}),e.jsx(b,{children:"bla"}),e.jsx(b,{textAlign:"end",children:"22,3"})]}),e.jsxs(M,{children:[e.jsx(b,{children:"two"}),e.jsx(b,{children:"blub"}),e.jsx(b,{textAlign:"end",children:"23.4"})]}),e.jsxs(M,{children:[e.jsx(b,{children:"three"}),e.jsx(b,{children:"blob"}),e.jsx(b,{textAlign:"end",children:"12"})]})]})]})}const jn=c.forwardRef(function(r,t){const{icon:n,children:s,...i}=r;return e.jsxs(tt,{ref:t,...i,children:[s,e.jsx(rt,{children:n})]})}),vn=c.forwardRef(function(r,t){const{items:n,children:s,...i}=r,l=c.useMemo(()=>n?.map(d=>typeof d=="string"?{label:d,value:d}:d),[n]);return e.jsxs(nt,{ref:t,...i,children:[s,l?.map(d=>e.jsx("option",{value:d.value,disabled:d.disabled,children:d.label},d.value))]})}),Cn=c.forwardRef(function(r,t){const{children:n,clearable:s,...i}=r;return e.jsxs($r,{...i,children:[e.jsx(vr,{ref:t,children:n}),e.jsxs(Ar,{children:[s&&e.jsx(wn,{}),e.jsx(Dr,{})]})]})}),wn=c.forwardRef(function(r,t){return e.jsx(Sr,{asChild:!0,...r,ref:t,children:e.jsx(J,{size:"xs",variant:"plain",focusVisibleRing:"inside",focusRingWidth:"2px",pointerEvents:"auto"})})}),bn=c.forwardRef(function(r,t){const{portalled:n=!0,portalRef:s,...i}=r;return e.jsx(I,{disabled:!n,container:s,children:e.jsx(Cr,{children:e.jsx(wr,{...i,ref:t})})})}),Sn=c.forwardRef(function(r,t){const{item:n,children:s,...i}=r;return e.jsxs(Ir,{item:n,...i,ref:t,children:[s,e.jsx(yr,{})]},n.value)}),Rn=c.forwardRef(function(r,t){const{children:n,...s}=r;return e.jsx(br,{...s,ref:t,children:e.jsx(kr,{children:i=>{const l=i.selectedItems;return l.length===0?r.placeholder:n?n(l):l.length===1?i.collection.stringifyItem(l[0]):`${l.length} selected`}})})}),Tn=c.forwardRef(function(r,t){return e.jsx(jr,{...r,ref:t,positioning:{sameWidth:!0,...r.positioning},children:r.asChild?r.children:e.jsxs(e.Fragment,{children:[e.jsx(Or,{}),r.children]})})});c.forwardRef(function(r,t){const{children:n,label:s,...i}=r;return e.jsxs(Rr,{...i,ref:t,children:[e.jsx(Tr,{children:s}),n]})});const In=Nr,je=bt({items:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"},{label:"option 4",value:"option4"}]});function yn(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{fontSize:"sm",fontWeight:500,mt:4,mb:1,children:"Native select component"}),e.jsx(jn,{mb:4,children:e.jsxs(vn,{placeholder:"Select an item",children:[e.jsx("option",{value:"item1",children:"Item 1"}),e.jsx("option",{value:"item2",children:"Item 2"}),e.jsx("option",{value:"item3",children:"Item 3"})]})}),e.jsxs(Tn,{collection:je,size:"sm",width:"320px",mb:4,children:[e.jsx(In,{children:"New select component"}),e.jsx(Cn,{children:e.jsx(Rn,{placeholder:"Selct an item"})}),e.jsx(bn,{children:je.items.map(o=>e.jsxs(Sn,{item:o,justifyContent:"flex-start",children:[o.label,e.jsx(we,{})]},o.value))})]})]})}function An(){const[o,r]=On();return e.jsxs("div",{style:{overflow:"auto",height:"100%",width:"100%"},children:[e.jsxs(st,{children:[e.jsx(ve,{mb:5,children:"chakra technical demo"}),e.jsx(Dn,{}),e.jsx($n,{toaster:o}),e.jsx(Pn,{}),e.jsx(yn,{}),e.jsx(Hn,{})]}),r]})}function Dn(){return e.jsxs(W,{children:["This is a"," ",e.jsx(Jo,{href:"https://chakra-ui.com",target:"_blank",children:"link to Chakra's Design system"})]})}const $n=o=>e.jsxs(F,{mb:5,mt:5,separator:e.jsx(ht,{}),gap:"24px",align:"stretch",children:[e.jsx(g,{children:e.jsx(Nn,{})}),e.jsx(g,{children:e.jsx(ee,{})}),e.jsx(g,{children:e.jsx(ee,{})}),e.jsx(g,{children:e.jsx(ee,{})}),e.jsx(g,{children:e.jsx(kn,{toaster:o.toaster})}),e.jsx(g,{children:e.jsx(En,{})}),e.jsx(g,{children:e.jsx(Gn,{})}),e.jsx(g,{children:e.jsx(Bn,{})}),e.jsx(g,{children:e.jsx(Vn,{})}),e.jsx(g,{children:e.jsx(zn,{})})]});function Nn(){return e.jsxs(g,{bg:"background_secondary",children:[e.jsx(ve,{size:"sm",children:"Portal Example: "}),"This is box and displayed here. Scroll/Look down to see the portal that is added at the end of document.body. The Portal is part of this Box.",e.jsx(I,{children:e.jsx(g,{className:"portal-content",children:"This is the portal content!"})})]})}function ee(){return e.jsx(an,{showArrow:!0,content:"Button Tooltip","aria-label":"A tooltip",positioning:{placement:"top"},lazyMount:!0,unmountOnExit:!0,children:e.jsx(j,{children:"Button with a tooltip"})})}const kn=o=>e.jsx(j,{onClick:()=>{o.toaster.create({type:"loading",description:"We've created your account for you.",meta:{closable:!0}})},children:"Show Toast"});function On(){const{getRootNode:o}=$(),r=c.useMemo(()=>it({placement:"bottom-end",pauseOnPageIdle:!0,getRootNode:o}),[o]),t=c.useMemo(()=>e.jsx(I,{children:e.jsx(ct,{toaster:r,insetInline:{mdDown:"4"},children:n=>e.jsxs(lt,{width:{md:"sm"},children:[n.type==="loading"?e.jsx(we,{size:"sm",color:"blue.solid"}):e.jsx(at,{}),e.jsxs(F,{gap:"1",flex:"1",maxWidth:"100%",children:[n.title&&e.jsx(dt,{children:n.title}),n.description&&e.jsx(pt,{children:n.description})]}),n.action&&e.jsx(ut,{children:n.action.label}),n.meta?.closable&&e.jsx(mt,{})]})})}),[r]);return[r,t]}function En(){return e.jsxs(Eo,{status:"error",children:[e.jsx(Go,{}),e.jsxs(Bo,{children:[e.jsx(Fo,{children:"Test Alert!"}),e.jsx(Vo,{children:"This is a test alert (error)"})]})]})}function Gn(){return e.jsxs(on,{children:[e.jsx(cn,{asChild:!0,children:e.jsx(j,{variant:"outline",children:"Open Me"})}),e.jsxs(Zr,{children:[e.jsx(rn,{children:e.jsx(sn,{children:"Dialog Title"})}),e.jsx(nn,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}),e.jsxs(tn,{children:[e.jsx(ln,{asChild:!0,children:e.jsx(j,{variant:"outline",children:"Cancel"})}),e.jsx(j,{children:"Save"})]}),e.jsx(en,{})]})]})}function Bn(){const{open:o,onOpen:r,onClose:t}=xt();return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:r,children:"Open Drawer"}),e.jsxs(un,{open:o,placement:"start",onOpenChange:t,size:"sm",children:[e.jsx(sr,{}),e.jsxs(dn,{children:[e.jsx(hn,{children:"This is the drawer header"}),e.jsx(xn,{children:"This is the body."}),e.jsxs(mn,{children:[e.jsx(gn,{asChild:!0,children:e.jsx(j,{variant:"outline",children:"Cancel"})}),e.jsx(j,{children:"Save"})]}),e.jsx(pn,{})]})]})]})}const Fn=[{value:"first-item",title:"First Item",text:"Some value 1..."},{value:"second-item",title:"Second Item",text:"Some value 2..."},{value:"third-item",title:"Third Item",text:"Some value 3..."}];function Vn(){return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsx(fe,{asChild:!0,children:e.jsx(j,{children:"Show Popover"})}),e.jsxs(ue,{children:[e.jsx(me,{}),e.jsx(xe,{children:"Popover!"}),e.jsx(Z,{children:"This is a very important Popover"}),e.jsx(he,{})]})]}),e.jsxs(ge,{children:[e.jsx(fe,{asChild:!0,children:e.jsx(j,{ml:5,children:"Show Popover rendered in an portal"})}),e.jsx(I,{children:e.jsxs(ue,{children:[e.jsx(me,{}),e.jsx(xe,{children:"Header"}),e.jsx(he,{}),e.jsx(Z,{children:e.jsx(Z,{children:"This is a very important Popover"})}),e.jsx(fn,{children:"This is the footer"})]})})]})]})}function zn(){const[o,r]=c.useState("2");return e.jsxs(e.Fragment,{children:[e.jsx(Pe,{onValueChange:t=>r(t.value),value:o,size:"md",children:e.jsxs(F,{gap:4,direction:"row",children:[e.jsx(B,{value:"1",disabled:!0,children:"Radio 1 (Disabled)"}),e.jsx(B,{value:"2",children:"Radio 2"}),e.jsx(B,{value:"3",children:"Radio 3"})]})}),e.jsx(W,{pt:1,fontStyle:"italic",children:"Checked radio: "+o}),e.jsx(Pe,{size:"sm",mt:4,children:e.jsxs(F,{gap:4,direction:"row",children:[e.jsx(B,{value:"1",disabled:!0,children:"Small Radio 1 (Disabled)"}),e.jsx(B,{value:"2",children:"Small Radio 2"})]})})]})}const Hn=()=>{const[o,r]=c.useState(["second-item"]);return e.jsxs(F,{gap:"4",p:2,mb:4,border:"solid",children:[e.jsx(Qr,{value:o,onValueChange:t=>r(t.value),children:Fn.map((t,n)=>e.jsxs(Yr,{value:t.value,children:[e.jsx(Xr,{children:t.title}),e.jsx(Jr,{children:t.text})]},n))}),e.jsxs(W,{fontStyle:"italic",children:["Expanded item: ",o.join(", ")]})]})},Ln=zo({component:An,chakraConfig:Kr,appMetadata:qr});customElements.define("chakra-app",Ln);
