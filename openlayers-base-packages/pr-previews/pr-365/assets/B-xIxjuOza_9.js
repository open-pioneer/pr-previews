import{a_ as ve,L as C,bO as g,ay as nt,bP as st,ak as je,an as at,am as it,bQ as lt,bR as ct,bS as ut,bT as dt,G as pt,bU as M,bV as Ce,bW as ft,aZ as xe,b4 as we,u as mt,B as J,i as X,g as Se,e as ge,f as be}from"./CIxQfNC2cMTH.js";import{G as yt,a as gt,b as bt,M as ht}from"./C5ZA6LylQzJw.js";import{L as Pt}from"./Dg3C47GSrK2D.js";import{z as vt,D as Fe,h as T,j as a,f as k,q as A,r as i,G as jt,H as Ct,J as Q,K as G,L as v,o as xt,p as wt,M as St,N as Ft,C as Ot,O as kt,Q as Mt,l as Oe,B as re,F as ke}from"./DnPhTJjuvB9x.js";import{B as Lt}from"./B0U5l2hn8DlK.js";import{F as Nt,f as Me}from"./CxlYFj-33NQH.js";import{S as Le}from"./DxRBFi00h9Qx.js";import{T as ee,L as Gt}from"./D7zOpgirDLuA.js";import{u as Tt,a as At,b as _t,l as Rt,M as Et}from"./C8z7RweOG7Qz.js";import{C as Bt}from"./DlxGbJPvZwZf.js";import{a as It,b as Dt,M as Ht}from"./esK2vbnzMYOC.js";function Vt(t){return"current"in t}var Ne=()=>typeof window<"u";function Jt(){var t;const e=navigator.userAgentData;return(t=e?.platform)!=null?t:navigator.platform}var zt=t=>Ne()&&t.test(navigator.vendor),Ut=t=>Ne()&&t.test(Jt()),$t=()=>Ut(/mac|iphone|ipad|ipod/i),Kt=()=>$t()&&zt(/apple/i);function Wt(t){const{ref:e,elements:r,enabled:o}=t,n=()=>{var s,l;return(l=(s=e.current)==null?void 0:s.ownerDocument)!=null?l:document};vt(n,"pointerdown",s=>{if(!Kt()||!o)return;const l=s.target,d=(r??[e]).some(c=>{const f=Vt(c)?c.current:c;return f?.contains(l)||f===l});n().activeElement!==l&&d&&(s.preventDefault(),l.focus())})}var[qt,S]=Fe({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Qt,_]=Fe({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Ge=T(function(e,r){const{getHeaderProps:o}=S(),n=_();return a.jsx(k.header,{...o(e,r),className:A("chakra-popover__header",e.className),__css:n.header})});Ge.displayName="PopoverHeader";function Te(t){const e=i.Children.only(t.children),{getTriggerProps:r}=S();return i.cloneElement(e,r(e.props,e.ref))}Te.displayName="PopoverTrigger";var O={click:"click",hover:"hover"};function Yt(t={}){const{closeOnBlur:e=!0,closeOnEsc:r=!0,initialFocusRef:o,id:n,returnFocusOnClose:s=!0,autoFocus:l=!0,arrowSize:p,arrowShadowColor:d,trigger:c=O.click,openDelay:f=200,closeDelay:P=200,isLazy:x,lazyBehavior:z="unmount",computePositionOnMount:U,...$}=t,{isOpen:m,onClose:b,onOpen:L,onToggle:ie}=jt(t),K=i.useRef(null),R=i.useRef(null),F=i.useRef(null),N=i.useRef(!1),le=i.useRef(!1);m&&(le.current=!0);const[ce,ze]=i.useState(!1),[ue,Ue]=i.useState(!1),$e=i.useId(),Ke=n??$e,[de,E,B,I]=["popover-trigger","popover-content","popover-header","popover-body"].map(u=>`${u}-${Ke}`),{referenceRef:D,getArrowProps:We,getPopperProps:pe,getArrowInnerProps:qe,forceUpdate:Qe}=Ct({...$,enabled:m||!!U}),fe=Tt({isOpen:m,ref:F});Wt({enabled:m,ref:R}),At(F,{focusRef:R,visible:m,shouldFocus:s&&c===O.click}),_t(F,{focusRef:o,visible:m,shouldFocus:l&&c===O.click});const me=Rt({wasSelected:le.current,enabled:x,mode:z,isSelected:fe.present}),Ye=i.useCallback((u={},h=null)=>{const y={...u,style:{...u.style,transformOrigin:Q.transformOrigin.varRef,[Q.arrowSize.var]:p?`${p}px`:void 0,[Q.arrowShadowColor.var]:d},ref:G(F,h),children:me?u.children:null,id:E,tabIndex:-1,role:"dialog",onKeyDown:v(u.onKeyDown,j=>{r&&j.key==="Escape"&&b()}),onBlur:v(u.onBlur,j=>{const H=he(j),q=Y(F.current,H),ot=Y(R.current,H);m&&e&&(!q&&!ot)&&b()}),"aria-labelledby":ce?B:void 0,"aria-describedby":ue?I:void 0};return c===O.hover&&(y.role="tooltip",y.onMouseEnter=v(u.onMouseEnter,()=>{N.current=!0}),y.onMouseLeave=v(u.onMouseLeave,j=>{j.nativeEvent.relatedTarget!==null&&(N.current=!1,setTimeout(()=>b(),P))})),y},[me,E,ce,B,ue,I,c,r,b,m,e,P,d,p]),Ze=i.useCallback((u={},h=null)=>pe({...u,style:{visibility:m?"visible":"hidden",...u.style}},h),[m,pe]),Xe=i.useCallback((u,h=null)=>({...u,ref:G(h,K,D)}),[K,D]),w=i.useRef(),W=i.useRef(),ye=i.useCallback(u=>{K.current==null&&D(u)},[D]),et=i.useCallback((u={},h=null)=>{const y={...u,ref:G(R,h,ye),id:de,"aria-haspopup":"dialog","aria-expanded":m,"aria-controls":E};return c===O.click&&(y.onClick=v(u.onClick,ie)),c===O.hover&&(y.onFocus=v(u.onFocus,()=>{w.current===void 0&&L()}),y.onBlur=v(u.onBlur,j=>{const H=he(j),q=!Y(F.current,H);m&&e&&q&&b()}),y.onKeyDown=v(u.onKeyDown,j=>{j.key==="Escape"&&b()}),y.onMouseEnter=v(u.onMouseEnter,()=>{N.current=!0,w.current=window.setTimeout(()=>L(),f)}),y.onMouseLeave=v(u.onMouseLeave,()=>{N.current=!1,w.current&&(clearTimeout(w.current),w.current=void 0),W.current=window.setTimeout(()=>{N.current===!1&&b()},P)})),y},[de,m,E,c,ye,ie,L,e,b,f,P]);i.useEffect(()=>()=>{w.current&&clearTimeout(w.current),W.current&&clearTimeout(W.current)},[]);const tt=i.useCallback((u={},h=null)=>({...u,id:B,ref:G(h,y=>{ze(!!y)})}),[B]),rt=i.useCallback((u={},h=null)=>({...u,id:I,ref:G(h,y=>{Ue(!!y)})}),[I]);return{forceUpdate:Qe,isOpen:m,onAnimationComplete:fe.onComplete,onClose:b,getAnchorProps:Xe,getArrowProps:We,getArrowInnerProps:qe,getPopoverPositionerProps:Ze,getPopoverProps:Ye,getTriggerProps:et,getHeaderProps:tt,getBodyProps:rt}}function Y(t,e){return t===e||t?.contains(e)}function he(t){var e;const r=t.currentTarget.ownerDocument.activeElement;return(e=t.relatedTarget)!=null?e:r}function Ae(t){const e=xt("Popover",t),{children:r,...o}=wt(t),n=St(),s=Yt({...o,direction:n.direction});return a.jsx(qt,{value:s,children:a.jsx(Qt,{value:e,children:Ft(r,{isOpen:s.isOpen,onClose:s.onClose,forceUpdate:s.forceUpdate})})})}Ae.displayName="Popover";var Z=(t,e)=>e?`${t}.${e}, ${e}`:void 0;function _e(t){var e;const{bg:r,bgColor:o,backgroundColor:n,shadow:s,boxShadow:l,shadowColor:p}=t,{getArrowProps:d,getArrowInnerProps:c}=S(),f=_(),P=(e=r??o)!=null?e:n,x=s??l;return a.jsx(k.div,{...d(),className:"chakra-popover__arrow-positioner",children:a.jsx(k.div,{className:A("chakra-popover__arrow",t.className),...c(t),__css:{"--popper-arrow-shadow-color":Z("colors",p),"--popper-arrow-bg":Z("colors",P),"--popper-arrow-shadow":Z("shadows",x),...f.arrow}})})}_e.displayName="PopoverArrow";var Re=T(function(e,r){const{getBodyProps:o}=S(),n=_();return a.jsx(k.div,{...o(e,r),className:A("chakra-popover__body",e.className),__css:n.body})});Re.displayName="PopoverBody";var Ee=T(function(e,r){const{onClose:o}=S(),n=_();return a.jsx(Ot,{size:"sm",onClick:o,className:A("chakra-popover__close-btn",e.className),__css:n.closeButton,ref:r,...e})});Ee.displayName="PopoverCloseButton";function Zt(t){if(t)return{enter:{...t.enter,visibility:"visible"},exit:{...t.exit,transitionEnd:{visibility:"hidden"}}}}var Xt={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},er=k(kt.section),Be=T(function(e,r){const{variants:o=Xt,...n}=e,{isOpen:s}=S();return a.jsx(er,{ref:r,variants:Zt(o),initial:!1,animate:s?"enter":"exit",...n})});Be.displayName="PopoverTransition";var Ie=T(function(e,r){const{rootProps:o,motionProps:n,...s}=e,{getPopoverProps:l,getPopoverPositionerProps:p,onAnimationComplete:d}=S(),c=_(),f={position:"relative",display:"flex",flexDirection:"column",...c.content};return a.jsx(k.div,{...p(o),__css:c.popper,className:"chakra-popover__popper",children:a.jsx(Be,{...n,...l(s,r),onAnimationComplete:Mt(d,s.onAnimationComplete),className:A("chakra-popover__content",e.className),__css:f})})});Ie.displayName="PopoverContent";function tr(t){return"parentLayer"in t}function Kr(t){return"olLayer"in t}class rr{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=ve,this.supportedMediaTypes=null}getReadOptions(e,r){if(r){let o=r.dataProjection?C(r.dataProjection):this.readProjection(e);r.extent&&o&&o.getUnits()==="tile-pixels"&&(o=C(o),o.setWorldExtent(r.extent)),r={dataProjection:o,featureProjection:r.featureProjection}}return this.adaptOptions(r)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return g()}readFeature(e,r){return g()}readFeatures(e,r){return g()}readGeometry(e,r){return g()}readProjection(e){return g()}writeFeature(e,r){return g()}writeFeatures(e,r){return g()}writeGeometry(e,r){return g()}}const or=rr;function oe(t,e,r){const o=r?C(r.featureProjection):null,n=r?C(r.dataProjection):null;let s=t;if(o&&n&&!nt(o,n)){e&&(s=t.clone());const l=e?o:n,p=e?n:o;l.getUnits()==="tile-pixels"?s.transform(l,p):s.applyTransform(st(l,p))}if(e&&r&&r.decimals!==void 0){const l=Math.pow(10,r.decimals),p=function(d){for(let c=0,f=d.length;c<f;++c)d[c]=Math.round(d[c]*l)/l;return d};s===t&&(s=t.clone()),s.applyTransform(p)}return s}const nr={Point:at,LineString:Pt,Polygon:it,MultiPoint:gt,MultiLineString:bt,MultiPolygon:ht};function sr(t,e,r){return Array.isArray(e[0])?(lt(t,0,e,r)||(t=t.slice(),ct(t,0,e,r)),t):(ut(t,0,e,r)||(t=t.slice(),dt(t,0,e,r)),t)}function De(t,e){const r=t.geometry;if(!r)return[];if(Array.isArray(r))return r.map(s=>De({...t,geometry:s})).flat();const o=r.type==="MultiPolygon"?"Polygon":r.type;if(o==="GeometryCollection"||o==="Circle")throw new Error("Unsupported geometry type: "+o);const n=r.layout.length;return oe(new je(o,o==="Polygon"?sr(r.flatCoordinates,r.ends,n):r.flatCoordinates,r.ends?.flat(),n,t.properties||{},t.id).enableSimplifyTransformed(),!1,e)}function ne(t,e){if(!t)return null;if(Array.isArray(t)){const o=t.map(n=>ne(n,e));return new yt(o)}const r=nr[t.type];return oe(new r(t.flatCoordinates,t.layout,t.ends),!1,e)}class ar extends or{constructor(){super()}getType(){return"json"}readFeature(e,r){return this.readFeatureFromObject(V(e),this.getReadOptions(e,r))}readFeatures(e,r){return this.readFeaturesFromObject(V(e),this.getReadOptions(e,r))}readFeatureFromObject(e,r){return g()}readFeaturesFromObject(e,r){return g()}readGeometry(e,r){return this.readGeometryFromObject(V(e),this.getReadOptions(e,r))}readGeometryFromObject(e,r){return g()}readProjection(e){return this.readProjectionFromObject(V(e))}readProjectionFromObject(e){return g()}writeFeature(e,r){return JSON.stringify(this.writeFeatureObject(e,r))}writeFeatureObject(e,r){return g()}writeFeatures(e,r){return JSON.stringify(this.writeFeaturesObject(e,r))}writeFeaturesObject(e,r){return g()}writeGeometry(e,r){return JSON.stringify(this.writeGeometryObject(e,r))}writeGeometryObject(e,r){return g()}}function V(t){if(typeof t=="string"){const e=JSON.parse(t);return e||null}return t!==null?t:null}class Wr extends ar{constructor(e){e=e||{},super(),this.dataProjection=C(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=C(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,r){let o=null;e.type==="Feature"?o=e:o={type:"Feature",geometry:e,properties:null};const n=se(o.geometry);if(this.featureClass===je)return De({geometry:n,id:o.id,properties:o.properties},r);const s=new ve;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&o.geometry_name&&s.setGeometryName(o.geometry_name),s.setGeometry(ne(n,r)),"id"in o&&s.setId(o.id),o.properties&&s.setProperties(o.properties,!0),s}readFeaturesFromObject(e,r){const o=e;let n=null;if(o.type==="FeatureCollection"){const s=e;n=[];const l=s.features;for(let p=0,d=l.length;p<d;++p){const c=this.readFeatureFromObject(l[p],r);c&&n.push(c)}}else n=[this.readFeatureFromObject(e,r)];return n.flat()}readGeometryFromObject(e,r){return ir(e,r)}readProjectionFromObject(e){const r=e.crs;let o;if(r)if(r.type=="name")o=C(r.properties.name);else if(r.type==="EPSG")o=C("EPSG:"+r.properties.code);else throw new Error("Unknown SRS type");else o=this.dataProjection;return o}writeFeatureObject(e,r){r=this.adaptOptions(r);const o={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(o.id=n),!e.hasProperties())return o;const s=e.getProperties(),l=e.getGeometry();return l&&(o.geometry=te(l,r),delete s[e.getGeometryName()]),pt(s)||(o.properties=s),o}writeFeaturesObject(e,r){r=this.adaptOptions(r);const o=[];for(let n=0,s=e.length;n<s;++n)o.push(this.writeFeatureObject(e[n],r));return{type:"FeatureCollection",features:o}}writeGeometryObject(e,r){return te(e,this.adaptOptions(r))}}function se(t,e){if(!t)return null;let r;switch(t.type){case"Point":{r=cr(t);break}case"LineString":{r=ur(t);break}case"Polygon":{r=mr(t);break}case"MultiPoint":{r=pr(t);break}case"MultiLineString":{r=dr(t);break}case"MultiPolygon":{r=fr(t);break}case"GeometryCollection":{r=lr(t);break}default:throw new Error("Unsupported GeoJSON type: "+t.type)}return r}function ir(t,e){const r=se(t);return ne(r,e)}function lr(t,e){return t.geometries.map(function(o){return se(o)})}function cr(t){const e=t.coordinates;return{type:"Point",flatCoordinates:e,layout:M(e.length)}}function ur(t){const e=t.coordinates,r=e.flat();return{type:"LineString",flatCoordinates:r,ends:[r.length],layout:M(e[0]?.length||2)}}function dr(t){const e=t.coordinates,r=e[0]?.[0]?.length||2,o=[],n=Ce(o,0,e,r);return{type:"MultiLineString",flatCoordinates:o,ends:n,layout:M(r)}}function pr(t){const e=t.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:M(e[0]?.length||2)}}function fr(t){const e=t.coordinates,r=[],o=e[0]?.[0]?.[0].length||2,n=ft(r,0,e,o);return{type:"MultiPolygon",flatCoordinates:r,ends:n,layout:M(o)}}function mr(t){const e=t.coordinates,r=[],o=e[0]?.[0]?.length,n=Ce(r,0,e,o);return{type:"Polygon",flatCoordinates:r,ends:n,layout:M(o)}}function te(t,e){t=oe(t,!0,e);const r=t.getType();let o;switch(r){case"Point":{o=vr(t);break}case"LineString":{o=gr(t);break}case"Polygon":{o=jr(t,e);break}case"MultiPoint":{o=hr(t);break}case"MultiLineString":{o=br(t);break}case"MultiPolygon":{o=Pr(t,e);break}case"GeometryCollection":{o=yr(t,e);break}case"Circle":{o={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+r)}return o}function yr(t,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(o){return te(o,e)})}}function gr(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function br(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function hr(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function Pr(t,e){let r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}function vr(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function jr(t,e){let r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}const qr=i.forwardRef(function(e,r){const{label:o,icon:n,onClick:s,isLoading:l,isDisabled:p,isActive:d,tooltipProps:c,buttonProps:f}=e,{containerProps:{className:P,...x}}=xe("tool-button",e),z=we(P,{"tool-button--active":d,"tool-button--loading":l,"tool-button--disabled":p}),U=typeof d=="boolean"?d?"true":"false":void 0,[$,m]=i.useState(!1),b=L=>{m(!1),s?.(L)};return a.jsx(Oe,{label:o,placement:"auto",openDelay:500,...c,isOpen:$,onOpen:()=>m(!0),onClose:()=>m(!1),children:a.jsx(Cr,{className:z,ref:r,"aria-label":o,leftIcon:n,iconSpacing:0,padding:0,isDisabled:p,isLoading:l,isActive:d,"aria-pressed":U,...x,...f,onClick:b})})}),Cr=i.forwardRef(function(e,r){const{"aria-labelledby":o,"aria-describedby":n,...s}=e;return a.jsx(re,{ref:r,...s})}),xr="@open-pioneer/toc",ae=mt.bind(void 0,xr);function wr(t){const{map:e,"aria-label":r}=t,o=ae(),n=Lr(e);return n.length?He(n,o,{"aria-label":r}):a.jsx(ee,{className:"toc-missing-layers","aria-label":r,children:o.formatMessage({id:"missingLayers"})})}function He(t,e,r){const o=t.map(n=>a.jsx(Sr,{layer:n,intl:e},n.id));return a.jsx(Gt,{as:"ul",className:"toc-layer-list",listStyleType:"none",role:"group",...r,children:o})}function Sr(t){const{layer:e,intl:r}=t,o=kr(e),{isVisible:n,setVisible:s}=Mr(e),l=Nr(e),p=Ve(e)!=="error",d=r.formatMessage({id:"layerNotAvailable"});let c;return l?.length&&(c=He(l,r,{ml:4,"aria-label":r.formatMessage({id:"childgroupLabel"},{title:o})})),a.jsxs(J,{as:"li",className:we("toc-layer-item",`layer-${Gr(e.id)}`),children:[a.jsxs(X,{className:"toc-layer-item-content",width:"100%",flexDirection:"row",align:"center",justifyContent:"space-between",gap:2,minHeight:10,children:[a.jsx(Bt,{"aria-label":o+(p?"":" "+d),isChecked:n,isDisabled:!p,onChange:f=>s(f.target.checked),children:o}),!p&&a.jsx(Oe,{className:"toc-layer-item-content-tooltip",label:d,placement:"right",openDelay:500,children:a.jsx("span",{children:a.jsx(Nt,{className:"toc-layer-item-content-icon",color:"red","aria-label":d})})}),a.jsx(Le,{}),e.description&&a.jsx(Fr,{layer:e,title:o,intl:r})]}),c]})}function Fr(t){const{layer:e,title:r,intl:o}=t,n=o.formatMessage({id:"descriptionLabel"}),s=Or(e),l=Ve(e)!=="error";return a.jsxs(Ae,{placement:"bottom-start",children:[a.jsx(Te,{children:a.jsx(re,{isDisabled:!l,className:"toc-layer-item-details-button","aria-label":n,borderRadius:"full",iconSpacing:0,padding:0,variant:"ghost",leftIcon:a.jsx(Me,{})})}),a.jsx(ke,{children:a.jsxs(Ie,{className:"toc-layer-item-details",overflowY:"auto",maxHeight:"400",children:[a.jsx(_e,{}),a.jsx(Ee,{mt:1}),a.jsx(Ge,{children:r}),a.jsx(Re,{children:s})]})})]})}function Or(t){const e=i.useCallback(()=>t.description,[t]),r=i.useCallback(o=>{const n=t.on("changed:description",o);return()=>n.destroy()},[t]);return i.useSyncExternalStore(r,e)}function kr(t){const e=i.useCallback(()=>t.title,[t]),r=i.useCallback(o=>{const n=t.on("changed:title",o);return()=>n.destroy()},[t]);return i.useSyncExternalStore(r,e)}function Mr(t){const e=i.useCallback(()=>t.visible,[t]),r=i.useCallback(s=>{const l=t.on("changed:visible",s);return()=>l.destroy()},[t]),o=i.useSyncExternalStore(r,e),n=i.useCallback(s=>{t.setVisible(s)},[t]);return{isVisible:o,setVisible:n}}function Lr(t){const e=i.useCallback(o=>{const n=t.layers.on("changed",o);return()=>n.destroy()},[t]),r=i.useCallback(()=>{let o=t.layers.getOperationalLayers({sortByDisplayOrder:!0})??[];return o=o.reverse(),o},[t]);return Je(e,r)}function Nr(t){const e=i.useCallback(o=>{const n=t.sublayers?.on("changed",o);return()=>n?.destroy()},[t]),r=i.useCallback(()=>{if(!t.sublayers)return;let n=t.sublayers?.getSublayers({sortByDisplayOrder:!0});return n=n.reverse(),n},[t]);return Je(e,r)}function Ve(t){const e=tr(t)?t.parentLayer:t,r=i.useCallback(n=>{const s=e.on("changed:loadState",n);return()=>s.destroy()},[e]),o=i.useCallback(()=>e.loadState,[e]);return i.useSyncExternalStore(r,o)}function Je(t,e){const r=i.useRef(),o=i.useCallback(s=>{const l=t(()=>{r.current=void 0,s()});return()=>{r.current=void 0,l()}},[t]),n=i.useCallback(()=>{if(r.current)return r.current.value;const s=e();return r.current={value:s},s},[e]);return i.useSyncExternalStore(o,n)}function Gr(t){return t.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const Tr=t=>{const e=ae(),{mapId:r,showHideAllLayers:o=!0}=t,{map:n}=Se(r);return!!o&&a.jsx(J,{className:"toc-tools",children:a.jsxs(Et,{placement:"bottom-start",children:[a.jsx(It,{as:re,className:"toc-tools-button","aria-label":e.formatMessage({id:"toolsLabel"}),borderRadius:"full",iconSpacing:0,padding:3,variant:"ghost",leftIcon:a.jsx(Me,{})}),a.jsx(ke,{children:a.jsx(Dt,{className:"tools-menu",children:a.jsx(Ht,{"aria-label":e.formatMessage({id:"tools.hideAllLayers"}),onClick:()=>{Ar(n)},children:e.formatMessage({id:"tools.hideAllLayers"})})})})]})})};function Ar(t){const e=r=>{r?.getSublayers().forEach(o=>{o.setVisible(!1),e(o?.sublayers)})};t?.layers.getOperationalLayers().forEach(r=>{r.setVisible(!1),e(r?.sublayers)})}const Pe=2,Qr=t=>{const e=ae(),{mapId:r,showTools:o=!1,toolsConfig:n,showBasemapSwitcher:s=!0,basemapSwitcherProps:l}=t,{containerProps:p}=xe("toc",t),d=i.useId(),c=Se(r);let f;switch(c.kind){case"loading":f=null;break;case"rejected":f=a.jsx(ee,{className:"toc-error",children:e.formatMessage({id:"error"})});break;case"resolved":{const P=s&&a.jsx(J,{className:"toc-basemap-switcher",children:a.jsx(ge,{title:a.jsx(be,{id:d,size:"sm",mb:Pe,children:e.formatMessage({id:"basemapsLabel"})}),children:a.jsx(Lt,{mapId:r,"aria-labelledby":d,...l})})}),x=a.jsx(J,{className:"toc-operational-layers",children:a.jsx(ge,{title:a.jsx(be,{size:"sm",mb:2,children:a.jsxs(X,{children:[a.jsx(ee,{my:3,children:e.formatMessage({id:"operationalLayerLabel"})}),a.jsx(Le,{}),o&&a.jsx(Tr,{mapId:r,...n})]})}),children:a.jsx(wr,{map:c.map,"aria-label":e.formatMessage({id:"operationalLayerLabel"})})})});f=a.jsxs(a.Fragment,{children:[P,x]});break}}return a.jsx(X,{...p,direction:"column",gap:Pe,children:f})};export{or as F,Wr as G,Ae as P,qr as T,Te as a,Ie as b,_e as c,Re as d,Qr as e,Kr as i,oe as t,S as u};