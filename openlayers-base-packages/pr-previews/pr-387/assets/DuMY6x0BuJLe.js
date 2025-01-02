import{j as s,g as h,l as g,h as N,C as z,r as x,B as b,q as $,b as B,F as _}from"./DD6TXFhYmIbq.js";import{B as G}from"./CBiyPaAC3-ML.js";import{u as q,b3 as K,k as L,aZ as Y,i as Z,g as C,h as M}from"./D64B_wOlIMvh.js";import{u as f}from"./B7MksfDgavrS.js";import{F as J,f as k}from"./CNS1Iue4wgmb.js";import{S as A}from"./C_DhDP0hiBOp.js";import{u as y,c as j,P as Q,a as U,b as X}from"./BeXLzwsd35Ne.js";import{T as P}from"./CrBTf7Q75dEd.js";import{L as ee}from"./b1NAW_QHGPk_.js";import{C as se}from"./JZthM2I_t7zi.js";import{M as oe}from"./CV0d-nvDy1UN.js";import{a as te,b as re,M as ae}from"./CTxi9HpuLN4X.js";const w=(o,e)=>e?`${o}.${e}, ${e}`:void 0;function T(o){const{bg:e,bgColor:t,backgroundColor:r,shadow:a,boxShadow:n,shadowColor:i,...p}=o,{getArrowProps:l,getArrowInnerProps:d}=y(),m=j(),c=e??t??r,u=a??n;return s.jsx(h.div,{...l(),className:"chakra-popover__arrow-positioner",children:s.jsx(h.div,{className:g("chakra-popover__arrow",o.className),...d(p),__css:{"--popper-arrow-shadow-color":w("colors",i),"--popper-arrow-bg":w("colors",c),"--popper-arrow-shadow":w("shadows",u),...m.arrow}})})}T.displayName="PopoverArrow";const I=N(function(e,t){const{getBodyProps:r}=y(),a=j();return s.jsx(h.div,{...r(e,t),className:g("chakra-popover__body",e.className),__css:a.body})});I.displayName="PopoverBody";const D=N(function(e,t){const{onClose:r}=y(),a=j();return s.jsx(z,{size:"sm",onClick:r,className:g("chakra-popover__close-btn",e.className),__css:a.closeButton,ref:t,...e})});D.displayName="PopoverCloseButton";const H=N(function(e,t){const{getHeaderProps:r}=y(),a=j();return s.jsx(h.header,{...r(e,t),className:g("chakra-popover__header",e.className),__css:a.header})});H.displayName="PopoverHeader";function ne(o){return"parentLayer"in o}function _e(o){return"olLayer"in o}const ie="@open-pioneer/toc",v=q.bind(void 0,ie),O=x.createContext(void 0),le=O.Provider;function ce(){const o=x.useContext(O);if(!o)throw new Error("useTocWidgetOptions must be used within a TocWidgetOptionsProvider");return o}function de(o){const{map:e,"aria-label":t}=o,r=v(),a=ue(e);return a.length?E(a,{"aria-label":t}):s.jsx(P,{className:"toc-missing-layers","aria-label":t,children:r.formatMessage({id:"missingLayers"})})}function E(o,e){const t=o.map(r=>s.jsx(me,{layer:r},r.id));return s.jsx(ee,{as:"ul",className:"toc-layer-list",listStyleType:"none",role:"group",...e,children:t})}function me(o){const{layer:e}=o,t=v(),r=ce(),{title:a,description:n,isVisible:i}=f(()=>({title:e.title,description:e.description,isVisible:e.visible}),[e]),p=he(e),l=V(e)!=="error",d=t.formatMessage({id:"layerNotAvailable"});let m;return p?.length&&(m=E(p,{ml:4,"aria-label":t.formatMessage({id:"childgroupLabel"},{title:a})})),s.jsxs(b,{as:"li",className:K("toc-layer-item",`layer-${xe(e.id)}`),children:[s.jsxs(L,{className:"toc-layer-item-content",width:"100%",flexDirection:"row",align:"center",justifyContent:"space-between",gap:2,minHeight:10,children:[s.jsx(se,{"aria-label":a+(l?"":" "+d),isChecked:i,isDisabled:!l,onChange:c=>F(e,c.target.checked,r.autoShowParents),children:a}),!l&&s.jsx($,{className:"toc-layer-item-content-tooltip",label:d,placement:"right",openDelay:500,children:s.jsx("span",{children:s.jsx(J,{className:"toc-layer-item-content-icon",color:"red","aria-label":d})})}),s.jsx(A,{}),n&&s.jsx(pe,{layer:e,title:a,description:n,intl:t})]}),m]})}function F(o,e,t){o.setVisible(e),e&&t&&o.parent&&F(o.parent,!0,!0)}function pe(o){const{layer:e,title:t,description:r,intl:a}=o,n=a.formatMessage({id:"descriptionLabel"}),i=V(e)!=="error";return s.jsxs(Q,{placement:"bottom-start",children:[s.jsx(U,{children:s.jsx(B,{isDisabled:!i,className:"toc-layer-item-details-button","aria-label":n,borderRadius:"full",iconSpacing:0,padding:0,variant:"ghost",leftIcon:s.jsx(k,{})})}),s.jsx(_,{children:s.jsxs(X,{className:"toc-layer-item-details",overflowY:"auto",maxHeight:"400",children:[s.jsx(T,{}),s.jsx(D,{mt:1}),s.jsx(H,{children:t}),s.jsx(I,{children:r})]})})]})}function ue(o){return f(()=>{const e=o.layers.getOperationalLayers({sortByDisplayOrder:!0})??[];return e.reverse(),e},[o])}function he(o){return f(()=>{const e=o.children?.getItems({sortByDisplayOrder:!0});return e?.reverse(),e},[o])}function V(o){return f(()=>(ne(o)?o.parentLayer:o).loadState,[o])}function xe(o){return o.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const be=o=>{const e=v(),{map:t,showHideAllLayers:r=!0}=o;return!!r&&s.jsx(b,{className:"toc-tools",children:s.jsxs(oe,{placement:"bottom-start",children:[s.jsx(te,{as:B,className:"toc-tools-button","aria-label":e.formatMessage({id:"toolsLabel"}),borderRadius:"full",iconSpacing:0,padding:3,variant:"ghost",leftIcon:s.jsx(k,{})}),s.jsx(_,{children:s.jsx(re,{className:"tools-menu",children:s.jsx(ae,{"aria-label":e.formatMessage({id:"tools.hideAllLayers"}),onClick:()=>{ge(t)},children:e.formatMessage({id:"tools.hideAllLayers"})})})})]})})};function ge(o){const e=t=>{t.setVisible(!1);const r=t.children?.getItems();if(r)for(const a of r)e(a)};o?.layers.getOperationalLayers().forEach(t=>{e(t)})}const S=2,ke=o=>{const e=v(),{showTools:t=!1,toolsConfig:r,showBasemapSwitcher:a=!0,basemapSwitcherProps:n,autoShowParents:i=!0}=o,{containerProps:p}=Y("toc",o),l=x.useId(),d=x.useMemo(()=>({autoShowParents:i}),[i]),m=Z(o);let c;switch(m.kind){case"loading":c=null;break;case"rejected":c=s.jsx(P,{className:"toc-error",children:e.formatMessage({id:"error"})});break;case"resolved":{const u=m.map,R=a&&s.jsx(b,{className:"toc-basemap-switcher",children:s.jsx(C,{title:s.jsx(M,{id:l,size:"sm",mb:S,children:e.formatMessage({id:"basemapsLabel"})}),children:s.jsx(G,{map:u,"aria-labelledby":l,...n})})}),W=s.jsx(b,{className:"toc-operational-layers",children:s.jsx(C,{title:s.jsx(M,{size:"sm",mb:2,children:s.jsxs(L,{children:[s.jsx(P,{my:3,children:e.formatMessage({id:"operationalLayerLabel"})}),s.jsx(A,{}),t&&s.jsx(be,{map:u,...r})]})}),children:s.jsx(de,{map:u,"aria-label":e.formatMessage({id:"operationalLayerLabel"})})})});c=s.jsxs(s.Fragment,{children:[R,W]});break}}return s.jsx(L,{...p,direction:"column",gap:S,children:s.jsx(le,{value:d,children:c})})};export{T as P,ke as T,I as a,_e as i};
