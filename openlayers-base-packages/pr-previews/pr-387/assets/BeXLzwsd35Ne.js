import{M as Ee,k as ue,Y as Ae,r as a,a6 as Le,a7 as K,N as x,O as b,a8 as ae,u as De,o as _e,a9 as Be,j as v,a1 as Ie,g as le,H as Je,h as de,D as He,aa as Ue,l as ze,q as Ve,b as Ke}from"./DD6TXFhYmIbq.js";import{u as $e,a as We,b as qe,c as Ye,l as Ze}from"./B9w2shA-1S5B.js";import{af as F,ay as Xe,bW as Qe,ak as fe,a_ as pe,bX as y,an as et,am as tt,bY as rt,bZ as ot,b_ as nt,b$ as it,ac as st,c0 as G,c1 as me,c2 as at,aZ as ct,b3 as ut}from"./D64B_wOlIMvh.js";import{G as lt,a as dt,b as ft,M as pt}from"./DRg60wZD3dL-.js";import{L as mt}from"./ByxBAuBslr8U.js";function yt(r){return"current"in r}const ye=()=>typeof window<"u";function gt(){return navigator.userAgentData?.platform??navigator.platform}const Pt=r=>ye()&&r.test(navigator.vendor),ht=r=>ye()&&r.test(gt()),bt=()=>ht(/mac|iphone|ipad|ipod/i),vt=()=>bt()&&Pt(/apple/i);function Ft(r){const{ref:e,elements:t,enabled:o}=r,i=()=>e.current?.ownerDocument??document;Ee(i,"pointerdown",n=>{if(!vt()||!o)return;const c=n.composedPath?.()?.[0]??n.target,f=(t??[e]).some(u=>{const h=yt(u)?u.current:u;return h?.contains(c)||h===c});i().activeElement!==c&&f&&(n.preventDefault(),c.focus())})}const[Ot,W]=ue({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Ct,wt]=ue({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),S={click:"click",hover:"hover"};function jt(r={}){const{closeOnBlur:e=!0,closeOnEsc:t=!0,initialFocusRef:o,id:i,returnFocusOnClose:n=!0,autoFocus:c=!0,arrowSize:d,arrowShadowColor:f,trigger:u=S.click,openDelay:h=200,closeDelay:w=200,isLazy:_,lazyBehavior:B="unmount",computePositionOnMount:I,...J}=r,{isOpen:l,onClose:g,onOpen:M,onToggle:X}=Ae(r),[he,H]=a.useState(n);a.useEffect(()=>H(n),[n]);const U=a.useRef(null),T=a.useRef(null),O=a.useRef(null),k=a.useRef(!1),Q=a.useRef(!1);l&&(Q.current=!0);const[ee,be]=a.useState(!1),[te,ve]=a.useState(!1),Fe=a.useId(),Oe=i??Fe,[re,R,N,E]=["popover-trigger","popover-content","popover-header","popover-body"].map(s=>`${s}-${Oe}`),{referenceRef:A,getArrowProps:Ce,getPopperProps:oe,getArrowInnerProps:we,forceUpdate:je}=Le({...J,enabled:l||!!I}),ne=$e({isOpen:l,ref:O});Ft({enabled:l,ref:T}),We(O,{focusRef:T,visible:l,shouldFocus:he&&u===S.click}),qe(O,{focusRef:o,visible:l,shouldFocus:c&&u===S.click}),Ye({enabled:l&&e,ref:O,handler(s){const m=s.composedPath?.()[0]??[s.target];L(T.current,m)||(m&&H(!ae(m)),g())}});const ie=Ze({wasSelected:Q.current,enabled:_,mode:B,isSelected:ne.present}),Se=a.useCallback((s={},m=null)=>{const p={...s,style:{...s.style,transformOrigin:K.transformOrigin.varRef,[K.arrowSize.var]:d?`${d}px`:void 0,[K.arrowShadowColor.var]:f},ref:x(O,m),children:ie?s.children:null,id:R,tabIndex:-1,role:"dialog",onKeyDown:b(s.onKeyDown,P=>{P.nativeEvent.isComposing||t&&P.key==="Escape"&&(P.preventDefault(),P.stopPropagation(),g())}),onBlur:b(s.onBlur,P=>{const j=ce(P),V=L(O.current,j),Re=L(T.current,j),Ne=!V&&!Re;j&&H(!ae(j)),l&&e&&Ne&&g()}),"aria-labelledby":ee?N:void 0,"aria-describedby":te?E:void 0};return u===S.hover&&(p.role="tooltip",p.onMouseEnter=b(s.onMouseEnter,()=>{k.current=!0}),p.onMouseLeave=b(s.onMouseLeave,P=>{P.nativeEvent.relatedTarget!==null&&(k.current=!1,setTimeout(()=>g(),w))})),p},[ie,R,ee,N,te,E,u,t,g,l,e,w,f,d]),Ge=a.useCallback((s={},m=null)=>oe({...s,style:{visibility:l?"visible":"hidden",...s.style}},m),[l,oe]),Me=a.useCallback((s,m=null)=>({...s,ref:x(m,U,A)}),[U,A]),C=a.useRef(),z=a.useRef(),se=a.useCallback(s=>{U.current==null&&A(s)},[A]),Te=a.useCallback((s={},m=null)=>{const p={...s,ref:x(T,m,se),id:re,"aria-haspopup":"dialog","aria-expanded":l,"aria-controls":R};return u===S.click&&(p.onClick=b(s.onClick,X)),u===S.hover&&(p.onFocus=b(s.onFocus,()=>{C.current===void 0&&M()}),p.onBlur=b(s.onBlur,P=>{const j=ce(P),V=!L(O.current,j);l&&e&&V&&g()}),p.onKeyDown=b(s.onKeyDown,P=>{P.key==="Escape"&&g()}),p.onMouseEnter=b(s.onMouseEnter,()=>{k.current=!0,C.current=window.setTimeout(()=>M(),h)}),p.onMouseLeave=b(s.onMouseLeave,()=>{k.current=!1,C.current&&(clearTimeout(C.current),C.current=void 0),z.current=window.setTimeout(()=>{k.current===!1&&g()},w)})),p},[re,l,R,u,se,X,M,e,g,h,w]);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current),z.current&&clearTimeout(z.current)},[]);const ke=a.useCallback((s={},m=null)=>({...s,id:N,ref:x(m,p=>{be(!!p)})}),[N]),xe=a.useCallback((s={},m=null)=>({...s,id:E,ref:x(m,p=>{ve(!!p)})}),[E]);return{forceUpdate:je,isOpen:l,onAnimationComplete:ne.onComplete,onClose:g,getAnchorProps:Me,getArrowProps:Ce,getArrowInnerProps:we,getPopoverPositionerProps:Ge,getPopoverProps:Se,getTriggerProps:Te,getHeaderProps:ke,getBodyProps:xe}}function L(r,e){return r===e||r?.contains(e)}function ce(r){const e=r.currentTarget.ownerDocument.activeElement;return r.relatedTarget??e}function St(r){const e=De("Popover",r),{children:t,...o}=_e(r),i=Be(),n=jt({...o,direction:i.direction});return v.jsx(Ot,{value:n,children:v.jsx(Ct,{value:e,children:Ie(t,{isOpen:n.isOpen,onClose:n.onClose,forceUpdate:n.forceUpdate})})})}St.displayName="Popover";function Gt(r){if(r)return{enter:{...r.enter,visibility:"visible"},exit:{...r.exit,transitionEnd:{visibility:"hidden"}}}}const Mt={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Tt=le(Je.section),ge=de(function(e,t){const{variants:o=Mt,...i}=e,{isOpen:n}=W();return v.jsx(Tt,{ref:t,variants:Gt(o),initial:!1,animate:n?"enter":"exit",...i})});ge.displayName="PopoverTransition";const kt=de(function(e,t){const{rootProps:o,motionProps:i,...n}=e,{getPopoverProps:c,getPopoverPositionerProps:d,onAnimationComplete:f}=W(),u=wt(),h=He({position:"relative",display:"flex",flexDirection:"column",...u.content});return v.jsx(le.div,{...d(o),__css:u.popper,className:"chakra-popover__popper",children:v.jsx(ge,{...i,...c(n,t),onAnimationComplete:Ue(f,n.onAnimationComplete),className:ze("chakra-popover__content",e.className),__css:h})})});kt.displayName="PopoverContent";function xt(r){const e=a.Children.only(r.children),{getTriggerProps:t}=W();return v.jsx(v.Fragment,{children:a.cloneElement(e,t(e.props,e.ref))})}xt.displayName="PopoverTrigger";class Rt{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=pe,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let o=t.dataProjection?F(t.dataProjection):this.readProjection(e);t.extent&&o&&o.getUnits()==="tile-pixels"&&(o=F(o),o.setWorldExtent(t.extent)),t={dataProjection:o,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return y()}readFeature(e,t){return y()}readFeatures(e,t){return y()}readGeometry(e,t){return y()}readProjection(e){return y()}writeFeature(e,t){return y()}writeFeatures(e,t){return y()}writeGeometry(e,t){return y()}}function q(r,e,t){const o=t?F(t.featureProjection):null,i=t?F(t.dataProjection):null;let n=r;if(o&&i&&!Xe(o,i)){e&&(n=r.clone());const c=e?o:i,d=e?i:o;c.getUnits()==="tile-pixels"?n.transform(c,d):n.applyTransform(Qe(c,d))}if(e&&t&&t.decimals!==void 0){const c=Math.pow(10,t.decimals),d=function(f){for(let u=0,h=f.length;u<h;++u)f[u]=Math.round(f[u]*c)/c;return f};n===r&&(n=r.clone()),n.applyTransform(d)}return n}const Nt={Point:et,LineString:mt,Polygon:tt,MultiPoint:dt,MultiLineString:ft,MultiPolygon:pt};function Et(r,e,t){return Array.isArray(e[0])?(rt(r,0,e,t)||(r=r.slice(),ot(r,0,e,t)),r):(nt(r,0,e,t)||(r=r.slice(),it(r,0,e,t)),r)}function Pe(r,e){const t=r.geometry;if(!t)return[];if(Array.isArray(t))return t.map(n=>Pe({...r,geometry:n})).flat();const o=t.type==="MultiPolygon"?"Polygon":t.type;if(o==="GeometryCollection"||o==="Circle")throw new Error("Unsupported geometry type: "+o);const i=t.layout.length;return q(new fe(o,o==="Polygon"?Et(t.flatCoordinates,t.ends,i):t.flatCoordinates,t.ends?.flat(),i,r.properties||{},r.id).enableSimplifyTransformed(),!1,e)}function Y(r,e){if(!r)return null;if(Array.isArray(r)){const o=r.map(i=>Y(i,e));return new lt(o)}const t=Nt[r.type];return q(new t(r.flatCoordinates,r.layout,r.ends),!1,e)}class At extends Rt{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(D(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(D(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return y()}readFeaturesFromObject(e,t){return y()}readGeometry(e,t){return this.readGeometryFromObject(D(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return y()}readProjection(e){return this.readProjectionFromObject(D(e))}readProjectionFromObject(e){return y()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return y()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return y()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return y()}}function D(r){if(typeof r=="string"){const e=JSON.parse(r);return e||null}return r!==null?r:null}class or extends At{constructor(e){e=e||{},super(),this.dataProjection=F(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=F(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let o=null;e.type==="Feature"?o=e:o={type:"Feature",geometry:e,properties:null};const i=Z(o.geometry);if(this.featureClass===fe)return Pe({geometry:i,id:o.id,properties:o.properties},t);const n=new pe;return this.geometryName_?n.setGeometryName(this.geometryName_):this.extractGeometryName_&&o.geometry_name&&n.setGeometryName(o.geometry_name),n.setGeometry(Y(i,t)),"id"in o&&n.setId(o.id),o.properties&&n.setProperties(o.properties,!0),n}readFeaturesFromObject(e,t){const o=e;let i=null;if(o.type==="FeatureCollection"){const n=e;i=[];const c=n.features;for(let d=0,f=c.length;d<f;++d){const u=this.readFeatureFromObject(c[d],t);u&&i.push(u)}}else i=[this.readFeatureFromObject(e,t)];return i.flat()}readGeometryFromObject(e,t){return Lt(e,t)}readProjectionFromObject(e){const t=e.crs;let o;if(t)if(t.type=="name")o=F(t.properties.name);else if(t.type==="EPSG")o=F("EPSG:"+t.properties.code);else throw new Error("Unknown SRS type");else o=this.dataProjection;return o}writeFeatureObject(e,t){t=this.adaptOptions(t);const o={type:"Feature",geometry:null,properties:null},i=e.getId();if(i!==void 0&&(o.id=i),!e.hasProperties())return o;const n=e.getProperties(),c=e.getGeometry();return c&&(o.geometry=$(c,t),delete n[e.getGeometryName()]),st(n)||(o.properties=n),o}writeFeaturesObject(e,t){t=this.adaptOptions(t);const o=[];for(let i=0,n=e.length;i<n;++i)o.push(this.writeFeatureObject(e[i],t));return{type:"FeatureCollection",features:o}}writeGeometryObject(e,t){return $(e,this.adaptOptions(t))}}function Z(r,e){if(!r)return null;let t;switch(r.type){case"Point":{t=_t(r);break}case"LineString":{t=Bt(r);break}case"Polygon":{t=Ut(r);break}case"MultiPoint":{t=Jt(r);break}case"MultiLineString":{t=It(r);break}case"MultiPolygon":{t=Ht(r);break}case"GeometryCollection":{t=Dt(r);break}default:throw new Error("Unsupported GeoJSON type: "+r.type)}return t}function Lt(r,e){const t=Z(r);return Y(t,e)}function Dt(r,e){return r.geometries.map(function(o){return Z(o)})}function _t(r){const e=r.coordinates;return{type:"Point",flatCoordinates:e,layout:G(e.length)}}function Bt(r){const e=r.coordinates,t=e.flat();return{type:"LineString",flatCoordinates:t,ends:[t.length],layout:G(e[0]?.length||2)}}function It(r){const e=r.coordinates,t=e[0]?.[0]?.length||2,o=[],i=me(o,0,e,t);return{type:"MultiLineString",flatCoordinates:o,ends:i,layout:G(t)}}function Jt(r){const e=r.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:G(e[0]?.length||2)}}function Ht(r){const e=r.coordinates,t=[],o=e[0]?.[0]?.[0].length||2,i=at(t,0,e,o);return{type:"MultiPolygon",flatCoordinates:t,ends:i,layout:G(o)}}function Ut(r){const e=r.coordinates,t=[],o=e[0]?.[0]?.length,i=me(t,0,e,o);return{type:"Polygon",flatCoordinates:t,ends:i,layout:G(o)}}function $(r,e){r=q(r,!0,e);const t=r.getType();let o;switch(t){case"Point":{o=qt(r);break}case"LineString":{o=Vt(r);break}case"Polygon":{o=Yt(r,e);break}case"MultiPoint":{o=$t(r);break}case"MultiLineString":{o=Kt(r);break}case"MultiPolygon":{o=Wt(r,e);break}case"GeometryCollection":{o=zt(r,e);break}case"Circle":{o={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return o}function zt(r,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:r.getGeometriesArray().map(function(o){return $(o,e)})}}function Vt(r,e){return{type:"LineString",coordinates:r.getCoordinates()}}function Kt(r,e){return{type:"MultiLineString",coordinates:r.getCoordinates()}}function $t(r,e){return{type:"MultiPoint",coordinates:r.getCoordinates()}}function Wt(r,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:r.getCoordinates(t)}}function qt(r,e){return{type:"Point",coordinates:r.getCoordinates()}}function Yt(r,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:r.getCoordinates(t)}}const nr=a.forwardRef(function(e,t){const{label:o,icon:i,onClick:n,isLoading:c,isDisabled:d,isActive:f,tooltipProps:u,buttonProps:h}=e,{containerProps:{className:w,..._}}=ct("tool-button",e),B=ut(w,{"tool-button--active":f,"tool-button--loading":c,"tool-button--disabled":d}),I=typeof f=="boolean"?f?"true":"false":void 0,[J,l]=a.useState(!1),g=M=>{l(!1),n?.(M)};return v.jsx(Ve,{label:o,placement:"auto",openDelay:500,...u,isOpen:J,onOpen:()=>l(!0),onClose:()=>l(!1),children:v.jsx(Zt,{className:B,ref:t,"aria-label":o,leftIcon:i,iconSpacing:0,padding:0,isDisabled:d,isLoading:c,isActive:f,"aria-pressed":I,..._,...h,onClick:g})})}),Zt=a.forwardRef(function(e,t){const{"aria-labelledby":o,"aria-describedby":i,...n}=e;return v.jsx(Ke,{ref:t,...n})});export{Rt as F,or as G,St as P,nr as T,xt as a,kt as b,wt as c,q as t,W as u};
