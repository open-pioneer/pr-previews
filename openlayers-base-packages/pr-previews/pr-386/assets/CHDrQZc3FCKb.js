var J=a=>{throw TypeError(a)};var V=(a,e,t)=>e.has(a)||J("Cannot "+t);var w=(a,e,t)=>(V(a,e,"read from private field"),t?t.call(a):e.get(a)),E=(a,e,t)=>e.has(a)?J("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),v=(a,e,t,i)=>(V(a,e,"write to private field"),i?i.call(a,t):e.set(a,t),t),x=(a,e,t)=>(V(a,e,"access private method"),t);import{r as R,a9 as ue,h as se,j as K,a7 as fe,g as Q,c as ge,d as _e}from"./Mxtq6FG0Aq1_.js";import{_ as me}from"./CmsKOCeNyeyo.js";import{c0 as pe,c1 as ye,B as Ce,c2 as we,c3 as ke,c4 as Te,bd as xe,c5 as Pe,bB as ve,bp as Z,bt as Se,a as Le,b as De,c6 as Ee,bh as ee,bA as Me,c7 as be,a9 as Ie,bm as k,c8 as Fe,G as Re,bo as ne,a_ as M,an as B,c9 as te,bw as Ne,ao as Oe,am as re,bz as Ge,ca as Ue,cb as oe,cc as Ae,aK as je,aM as We,cd as ie,aq as Ve}from"./Boh8zmpA3NjJ.js";import{a as Be,b as ae,M as he,G as qe}from"./A-yKZKOikekl.js";import{L as j}from"./DIQyh2WZ_JD7.js";function He(a){const{loading:e,src:t,srcSet:i,onLoad:s,onError:r,crossOrigin:n,sizes:o,ignoreFallback:h}=a,[l,c]=R.useState("pending");R.useEffect(()=>{c(t?"loading":"pending")},[t]);const d=R.useRef(),u=R.useCallback(()=>{if(!t)return;f();const g=new Image;g.src=t,n&&(g.crossOrigin=n),i&&(g.srcset=i),o&&(g.sizes=o),e&&(g.loading=e),g.onload=_=>{f(),c("loaded"),s?.(_)},g.onerror=_=>{f(),c("failed"),r?.(_)},d.current=g},[t,n,i,o,s,r,e]),f=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return ue(()=>{if(!h)return l==="loading"&&u(),()=>{f()}},[l,u,h]),h?"loaded":l}const $e=(a,e)=>a!=="loaded"&&e==="beforeLoadOrError"||a==="failed"&&e==="onError",Y=se(function(e,t){const{htmlWidth:i,htmlHeight:s,alt:r,...n}=e;return K.jsx("img",{width:i,height:s,ref:t,alt:r,...n})});Y.displayName="NativeImage";const Xe=se(function(e,t){const{fallbackSrc:i,fallback:s,src:r,srcSet:n,align:o,fit:h,loading:l,ignoreFallback:c,crossOrigin:d,fallbackStrategy:u="beforeLoadOrError",referrerPolicy:f,...g}=e,_=i!==void 0||s!==void 0,m=l!=null||c||!_,P=He({...e,crossOrigin:d,ignoreFallback:m}),T=$e(P,u),p={ref:t,objectFit:h,objectPosition:o,...m?g:fe(g,["onError","onLoad"])};return T?s||K.jsx(Q.img,{as:Y,className:"chakra-image__placeholder",src:i,...p}):K.jsx(Q.img,{as:Y,src:r,srcSet:n,crossOrigin:d,loading:l,referrerPolicy:f,className:"chakra-image",...p})});Xe.displayName="Image";class W extends pe{constructor(e,t,i){super(),i!==void 0&&t===void 0?this.setFlatCoordinates(i,e):(t=t||0,this.setCenterAndRadius(e,t,i))}clone(){const e=new W(this.flatCoordinates.slice(),void 0,this.layout);return e.applyProperties(this),e}closestPointXY(e,t,i,s){const r=this.flatCoordinates,n=e-r[0],o=t-r[1],h=n*n+o*o;if(h<s){if(h===0)for(let l=0;l<this.stride;++l)i[l]=r[l];else{const l=this.getRadius()/Math.sqrt(h);i[0]=r[0]+l*n,i[1]=r[1]+l*o;for(let c=2;c<this.stride;++c)i[c]=r[c]}return i.length=this.stride,h}return s}containsXY(e,t){const i=this.flatCoordinates,s=e-i[0],r=t-i[1];return s*s+r*r<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(e){const t=this.flatCoordinates,i=t[this.stride]-t[0];return ye(t[0]-i,t[1]-i,t[0]+i,t[1]+i,e)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){const e=this.flatCoordinates[this.stride]-this.flatCoordinates[0],t=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return e*e+t*t}getType(){return"Circle"}intersectsExtent(e){const t=this.getExtent();if(Ce(e,t)){const i=this.getCenter();return e[0]<=i[0]&&e[2]>=i[0]||e[1]<=i[1]&&e[3]>=i[1]?!0:we(e,this.intersectsCoordinate.bind(this))}return!1}setCenter(e){const t=this.stride,i=this.flatCoordinates[t]-this.flatCoordinates[0],s=e.slice();s[t]=s[0]+i;for(let r=1;r<t;++r)s[t+r]=e[r];this.setFlatCoordinates(this.layout,s),this.changed()}setCenterAndRadius(e,t,i){this.setLayout(i,e,0),this.flatCoordinates||(this.flatCoordinates=[]);const s=this.flatCoordinates;let r=ke(s,0,e,this.stride);s[r++]=s[0]+t;for(let n=1,o=this.stride;n<o;++n)s[r++]=s[n];s.length=r,this.changed()}getCoordinates(){return null}setCoordinates(e,t){}setRadius(e){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+e,this.changed()}rotate(e,t){const i=this.getCenter(),s=this.getStride();this.setCenter(Te(i,0,i.length,s,e,t,i)),this.changed()}}W.prototype.transform;const q=ge("notifier:NotificationService");var C,D,F,y,I,z,Ke;class ft{constructor(){E(this,y);E(this,C);E(this,D);E(this,F)}destroy(){clearTimeout(w(this,F)),v(this,F,void 0)}notify(e){x(this,y,z).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}success(e){x(this,y,I).call(this,"success",e)}info(e){x(this,y,I).call(this,"info",e)}warning(e){x(this,y,I).call(this,"warning",e)}error(e){x(this,y,I).call(this,"error",e)}closeAll(){x(this,y,z).call(this,"closeAll")}registerHandler(e){if(w(this,C))return q.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};v(this,C,e);const t=w(this,D);if(v(this,D,void 0),t)for(const[s,...r]of t)e[s](...r);let i=!1;return{destroy:()=>{i||(i=!0,w(this,C)===e&&v(this,C,void 0))}}}}C=new WeakMap,D=new WeakMap,F=new WeakMap,y=new WeakSet,I=function(e,t){typeof t=="string"&&(t={message:t}),this.notify({...t,level:e})},z=function(e,...t){if(w(this,C))w(this,C)[e](...t);else{const i=w(this,D)??v(this,D,[]);if(i.length>=1024){q.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:t});return}i.push([e,...t])}},Ke=function(){w(this,C)||q.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};const N={DRAWSTART:"drawstart",DRAWEND:"drawend",DRAWABORT:"drawabort"};class O extends Oe{constructor(e,t){super(e),this.feature=t}}function Ye(a,e){const t=[];for(let i=0;i<e.length;++i){const r=e[i].getGeometry();le(a,r,t)}return t}function G(a,e){return oe(a[0],a[1],e[0],e[1])}function S(a,e){const t=a.length;return e<0?a[e+t]:e>=t?a[e-t]:a[e]}function U(a,e,t){let i,s;e<t?(i=e,s=t):(i=t,s=e);const r=Math.ceil(i),n=Math.floor(s);if(r>n){const h=L(a,i),l=L(a,s);return G(h,l)}let o=0;if(i<r){const h=L(a,i),l=S(a,r);o+=G(h,l)}if(n<s){const h=S(a,n),l=L(a,s);o+=G(h,l)}for(let h=r;h<n-1;++h){const l=S(a,h),c=S(a,h+1);o+=G(l,c)}return o}function le(a,e,t){if(e instanceof j){A(a,e.getCoordinates(),!1,t);return}if(e instanceof ae){const i=e.getCoordinates();for(let s=0,r=i.length;s<r;++s)A(a,i[s],!1,t);return}if(e instanceof re){const i=e.getCoordinates();for(let s=0,r=i.length;s<r;++s)A(a,i[s],!0,t);return}if(e instanceof he){const i=e.getCoordinates();for(let s=0,r=i.length;s<r;++s){const n=i[s];for(let o=0,h=n.length;o<h;++o)A(a,n[o],!0,t)}return}if(e instanceof qe){const i=e.getGeometries();for(let s=0;s<i.length;++s)le(a,i[s],t);return}}const H={index:-1,endIndex:NaN};function ze(a,e,t,i){const s=a[0],r=a[1];let n=1/0,o=-1,h=NaN;for(let d=0;d<e.targets.length;++d){const u=e.targets[d],f=u.coordinates;let g=1/0,_;for(let m=0;m<f.length-1;++m){const P=f[m],T=f[m+1],p=ce(s,r,P,T);p.squaredDistance<g&&(g=p.squaredDistance,_=m+p.along)}g<n&&(n=g,u.ring&&e.targetIndex===d&&(u.endIndex>u.startIndex?_<u.startIndex&&(_+=f.length):u.endIndex<u.startIndex&&_>u.startIndex&&(_-=f.length)),h=_,o=d)}const l=e.targets[o];let c=l.ring;if(e.targetIndex===o&&c){const d=L(l.coordinates,h),u=t.getPixelFromCoordinate(d);ne(u,e.startPx)>i&&(c=!1)}if(c){const d=l.coordinates,u=d.length,f=l.startIndex,g=h;if(f<g){const _=U(d,f,g);U(d,f,g-u)<_&&(h-=u)}else{const _=U(d,f,g);U(d,f,g+u)<_&&(h+=u)}}return H.index=o,H.endIndex=h,H}function A(a,e,t,i){const s=a[0],r=a[1];for(let n=0,o=e.length-1;n<o;++n){const h=e[n],l=e[n+1],c=ce(s,r,h,l);if(c.squaredDistance===0){const d=n+c.along;i.push({coordinates:e,ring:t,startIndex:d,endIndex:d});return}}}const $={along:0,squaredDistance:0};function ce(a,e,t,i){const s=t[0],r=t[1],n=i[0],o=i[1],h=n-s,l=o-r;let c=0,d=s,u=r;return(h!==0||l!==0)&&(c=Ae(((a-s)*h+(e-r)*l)/(h*h+l*l),0,1),d+=h*c,u+=l*c),$.along=c,$.squaredDistance=Ue(oe(a,e,d,u),10),$}function L(a,e){const t=a.length;let i=Math.floor(e);const s=e-i;i>=t?i-=t:i<0&&(i+=t);let r=i+1;r>=t&&(r-=t);const n=a[i],o=n[0],h=n[1],l=a[r],c=l[0]-o,d=l[1]-h;return[o+c*s,h+d*s]}class Je extends xe{constructor(e){const t=e;t.stopDown||(t.stopDown=Pe),super(t),this.on,this.once,this.un,this.shouldHandle_=!1,this.downPx_=null,this.downTimeout_,this.lastDragTime_,this.pointerType_,this.freehand_=!1,this.source_=e.source?e.source:null,this.features_=e.features?e.features:null,this.snapTolerance_=e.snapTolerance?e.snapTolerance:12,this.type_=e.type,this.mode_=Ze(this.type_),this.stopClick_=!!e.stopClick,this.minPoints_=e.minPoints?e.minPoints:this.mode_==="Polygon"?3:2,this.maxPoints_=this.mode_==="Circle"?2:e.maxPoints?e.maxPoints:1/0,this.finishCondition_=e.finishCondition?e.finishCondition:ve,this.geometryLayout_=e.geometryLayout?e.geometryLayout:"XY";let i=e.geometryFunction;if(!i){const s=this.mode_;if(s==="Circle")i=(r,n,o)=>{const h=n||new W([NaN,NaN]),l=Z(r[0]),c=Se(l,Z(r[r.length-1]));return h.setCenterAndRadius(l,Math.sqrt(c),this.geometryLayout_),h};else{let r;s==="Point"?r=B:s==="LineString"?r=j:s==="Polygon"&&(r=re),i=(n,o,h)=>(o?s==="Polygon"?n[0].length?o.setCoordinates([n[0].concat([n[0][0]])],this.geometryLayout_):o.setCoordinates([],this.geometryLayout_):o.setCoordinates(n,this.geometryLayout_):o=new r(n,this.geometryLayout_),o)}}this.geometryFunction_=i,this.dragVertexDelay_=e.dragVertexDelay!==void 0?e.dragVertexDelay:500,this.finishCoordinate_=null,this.sketchFeature_=null,this.sketchPoint_=null,this.sketchCoords_=null,this.sketchLine_=null,this.sketchLineCoords_=null,this.squaredClickTolerance_=e.clickTolerance?e.clickTolerance*e.clickTolerance:36,this.overlay_=new Le({source:new De({useSpatialIndex:!1,wrapX:e.wrapX?e.wrapX:!1}),style:e.style?e.style:Qe(),updateWhileInteracting:!0}),this.geometryName_=e.geometryName,this.condition_=e.condition?e.condition:Ee,this.freehandCondition_,e.freehand?this.freehandCondition_=ee:this.freehandCondition_=e.freehandCondition?e.freehandCondition:Me,this.traceCondition_,this.setTrace(e.trace||!1),this.traceState_={active:!1},this.traceSource_=e.traceSource||e.source||null,this.addChangeListener(be.ACTIVE,this.updateState_)}setTrace(e){let t;e?e===!0?t=ee:t=e:t=Ge,this.traceCondition_=t}setMap(e){super.setMap(e),this.updateState_()}getOverlay(){return this.overlay_}handleEvent(e){e.originalEvent.type===Ie.CONTEXTMENU&&e.originalEvent.preventDefault(),this.freehand_=this.mode_!=="Point"&&this.freehandCondition_(e);let t=e.type===k.POINTERMOVE,i=!0;return!this.freehand_&&this.lastDragTime_&&e.type===k.POINTERDRAG&&(Date.now()-this.lastDragTime_>=this.dragVertexDelay_?(this.downPx_=e.pixel,this.shouldHandle_=!this.freehand_,t=!0):this.lastDragTime_=void 0,this.shouldHandle_&&this.downTimeout_!==void 0&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0)),this.freehand_&&e.type===k.POINTERDRAG&&this.sketchFeature_!==null?(this.addToDrawing_(e.coordinate),i=!1):this.freehand_&&e.type===k.POINTERDOWN?i=!1:t&&this.getPointerCount()<2?(i=e.type===k.POINTERMOVE,i&&this.freehand_?(this.handlePointerMove_(e),this.shouldHandle_&&e.originalEvent.preventDefault()):(e.originalEvent.pointerType==="mouse"||e.type===k.POINTERDRAG&&this.downTimeout_===void 0)&&this.handlePointerMove_(e)):e.type===k.DBLCLICK&&(i=!1),super.handleEvent(e)&&i}handleDownEvent(e){return this.shouldHandle_=!this.freehand_,this.freehand_?(this.downPx_=e.pixel,this.finishCoordinate_||this.startDrawing_(e.coordinate),!0):this.condition_(e)?(this.lastDragTime_=Date.now(),this.downTimeout_=setTimeout(()=>{this.handlePointerMove_(new Fe(k.POINTERMOVE,e.map,e.originalEvent,!1,e.frameState))},this.dragVertexDelay_),this.downPx_=e.pixel,!0):(this.lastDragTime_=void 0,!1)}deactivateTrace_(){this.traceState_={active:!1}}toggleTraceState_(e){if(!this.traceSource_||!this.traceCondition_(e))return;if(this.traceState_.active){this.deactivateTrace_();return}const t=this.getMap(),i=t.getCoordinateFromPixel([e.pixel[0]-this.snapTolerance_,e.pixel[1]+this.snapTolerance_]),s=t.getCoordinateFromPixel([e.pixel[0]+this.snapTolerance_,e.pixel[1]-this.snapTolerance_]),r=Re([i,s]),n=this.traceSource_.getFeaturesInExtent(r);if(n.length===0)return;const o=Ye(e.coordinate,n);o.length&&(this.traceState_={active:!0,startPx:e.pixel.slice(),targets:o,targetIndex:-1})}addOrRemoveTracedCoordinates_(e,t){const i=e.startIndex<=e.endIndex,s=e.startIndex<=t;i===s?i&&t>e.endIndex||!i&&t<e.endIndex?this.addTracedCoordinates_(e,e.endIndex,t):(i&&t<e.endIndex||!i&&t>e.endIndex)&&this.removeTracedCoordinates_(t,e.endIndex):(this.removeTracedCoordinates_(e.startIndex,e.endIndex),this.addTracedCoordinates_(e,e.startIndex,t))}removeTracedCoordinates_(e,t){if(e===t)return;let i=0;if(e<t){const s=Math.ceil(e);let r=Math.floor(t);r===t&&(r-=1),i=r-s+1}else{const s=Math.floor(e);let r=Math.ceil(t);r===t&&(r+=1),i=s-r+1}i>0&&this.removeLastPoints_(i)}addTracedCoordinates_(e,t,i){if(t===i)return;const s=[];if(t<i){const r=Math.ceil(t);let n=Math.floor(i);n===i&&(n-=1);for(let o=r;o<=n;++o)s.push(S(e.coordinates,o))}else{const r=Math.floor(t);let n=Math.ceil(i);n===i&&(n+=1);for(let o=r;o>=n;--o)s.push(S(e.coordinates,o))}s.length&&this.appendCoordinates(s)}updateTrace_(e){const t=this.traceState_;if(!t.active||t.targetIndex===-1&&ne(t.startPx,e.pixel)<this.snapTolerance_)return;const i=ze(e.coordinate,t,this.getMap(),this.snapTolerance_);if(t.targetIndex!==i.index){if(t.targetIndex!==-1){const h=t.targets[t.targetIndex];this.removeTracedCoordinates_(h.startIndex,h.endIndex)}const o=t.targets[i.index];this.addTracedCoordinates_(o,o.startIndex,i.endIndex)}else{const o=t.targets[t.targetIndex];this.addOrRemoveTracedCoordinates_(o,i.endIndex)}t.targetIndex=i.index;const s=t.targets[t.targetIndex];s.endIndex=i.endIndex;const r=L(s.coordinates,s.endIndex),n=this.getMap().getPixelFromCoordinate(r);e.coordinate=r,e.pixel=[Math.round(n[0]),Math.round(n[1])]}handleUpEvent(e){let t=!0;if(this.getPointerCount()===0){this.downTimeout_&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0),this.handlePointerMove_(e);const i=this.traceState_.active;if(this.toggleTraceState_(e),this.shouldHandle_){const s=!this.finishCoordinate_;s&&this.startDrawing_(e.coordinate),!s&&this.freehand_?this.finishDrawing():!this.freehand_&&(!s||this.mode_==="Point")&&(this.atFinish_(e.pixel,i)?this.finishCondition_(e)&&this.finishDrawing():this.addToDrawing_(e.coordinate)),t=!1}else this.freehand_&&this.abortDrawing()}return!t&&this.stopClick_&&e.preventDefault(),t}handlePointerMove_(e){if(this.pointerType_=e.originalEvent.pointerType,this.downPx_&&(!this.freehand_&&this.shouldHandle_||this.freehand_&&!this.shouldHandle_)){const t=this.downPx_,i=e.pixel,s=t[0]-i[0],r=t[1]-i[1],n=s*s+r*r;if(this.shouldHandle_=this.freehand_?n>this.squaredClickTolerance_:n<=this.squaredClickTolerance_,!this.shouldHandle_)return}if(!this.finishCoordinate_){this.createOrUpdateSketchPoint_(e.coordinate.slice());return}this.updateTrace_(e),this.modifyDrawing_(e.coordinate)}atFinish_(e,t){let i=!1;if(this.sketchFeature_){let s=!1,r=[this.finishCoordinate_];const n=this.mode_;if(n==="Point")i=!0;else if(n==="Circle")i=this.sketchCoords_.length===2;else if(n==="LineString")s=!t&&this.sketchCoords_.length>this.minPoints_;else if(n==="Polygon"){const o=this.sketchCoords_;s=o[0].length>this.minPoints_,r=[o[0][0],o[0][o[0].length-2]],t?r=[o[0][0]]:r=[o[0][0],o[0][o[0].length-2]]}if(s){const o=this.getMap();for(let h=0,l=r.length;h<l;h++){const c=r[h],d=o.getPixelFromCoordinate(c),u=e[0]-d[0],f=e[1]-d[1],g=this.freehand_?1:this.snapTolerance_;if(i=Math.sqrt(u*u+f*f)<=g,i){this.finishCoordinate_=c;break}}}}return i}createOrUpdateSketchPoint_(e){this.sketchPoint_?this.sketchPoint_.getGeometry().setCoordinates(e):(this.sketchPoint_=new M(new B(e)),this.updateSketchFeatures_())}createOrUpdateCustomSketchLine_(e){this.sketchLine_||(this.sketchLine_=new M);const t=e.getLinearRing(0);let i=this.sketchLine_.getGeometry();i?(i.setFlatCoordinates(t.getLayout(),t.getFlatCoordinates()),i.changed()):(i=new j(t.getFlatCoordinates(),t.getLayout()),this.sketchLine_.setGeometry(i))}startDrawing_(e){const t=this.getMap().getView().getProjection(),i=te(this.geometryLayout_);for(;e.length<i;)e.push(0);this.finishCoordinate_=e,this.mode_==="Point"?this.sketchCoords_=e.slice():this.mode_==="Polygon"?(this.sketchCoords_=[[e.slice(),e.slice()]],this.sketchLineCoords_=this.sketchCoords_[0]):this.sketchCoords_=[e.slice(),e.slice()],this.sketchLineCoords_&&(this.sketchLine_=new M(new j(this.sketchLineCoords_)));const s=this.geometryFunction_(this.sketchCoords_,void 0,t);this.sketchFeature_=new M,this.geometryName_&&this.sketchFeature_.setGeometryName(this.geometryName_),this.sketchFeature_.setGeometry(s),this.updateSketchFeatures_(),this.dispatchEvent(new O(N.DRAWSTART,this.sketchFeature_))}modifyDrawing_(e){const t=this.getMap(),i=this.sketchFeature_.getGeometry(),s=t.getView().getProjection(),r=te(this.geometryLayout_);let n,o;for(;e.length<r;)e.push(0);this.mode_==="Point"?o=this.sketchCoords_:this.mode_==="Polygon"?(n=this.sketchCoords_[0],o=n[n.length-1],this.atFinish_(t.getPixelFromCoordinate(e))&&(e=this.finishCoordinate_.slice())):(n=this.sketchCoords_,o=n[n.length-1]),o[0]=e[0],o[1]=e[1],this.geometryFunction_(this.sketchCoords_,i,s),this.sketchPoint_&&this.sketchPoint_.getGeometry().setCoordinates(e),i.getType()==="Polygon"&&this.mode_!=="Polygon"?this.createOrUpdateCustomSketchLine_(i):this.sketchLineCoords_&&this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),this.updateSketchFeatures_()}addToDrawing_(e){const t=this.sketchFeature_.getGeometry(),i=this.getMap().getView().getProjection();let s,r;const n=this.mode_;return n==="LineString"||n==="Circle"?(this.finishCoordinate_=e.slice(),r=this.sketchCoords_,r.length>=this.maxPoints_&&(this.freehand_?r.pop():s=!0),r.push(e.slice()),this.geometryFunction_(r,t,i)):n==="Polygon"&&(r=this.sketchCoords_[0],r.length>=this.maxPoints_&&(this.freehand_?r.pop():s=!0),r.push(e.slice()),s&&(this.finishCoordinate_=r[0]),this.geometryFunction_(this.sketchCoords_,t,i)),this.createOrUpdateSketchPoint_(e.slice()),this.updateSketchFeatures_(),s?this.finishDrawing():this.sketchFeature_}removeLastPoints_(e){if(!this.sketchFeature_)return;const t=this.sketchFeature_.getGeometry(),i=this.getMap().getView().getProjection(),s=this.mode_;for(let r=0;r<e;++r){let n;if(s==="LineString"||s==="Circle"){if(n=this.sketchCoords_,n.splice(-2,1),n.length>=2){this.finishCoordinate_=n[n.length-2].slice();const o=this.finishCoordinate_.slice();n[n.length-1]=o,this.createOrUpdateSketchPoint_(o)}this.geometryFunction_(n,t,i),t.getType()==="Polygon"&&this.sketchLine_&&this.createOrUpdateCustomSketchLine_(t)}else if(s==="Polygon"){n=this.sketchCoords_[0],n.splice(-2,1);const o=this.sketchLine_.getGeometry();if(n.length>=2){const h=n[n.length-2].slice();n[n.length-1]=h,this.createOrUpdateSketchPoint_(h)}o.setCoordinates(n),this.geometryFunction_(this.sketchCoords_,t,i)}if(n.length===1){this.abortDrawing();break}}this.updateSketchFeatures_()}removeLastPoint(){this.removeLastPoints_(1)}finishDrawing(){const e=this.abortDrawing_();if(!e)return null;let t=this.sketchCoords_;const i=e.getGeometry(),s=this.getMap().getView().getProjection();return this.mode_==="LineString"?(t.pop(),this.geometryFunction_(t,i,s)):this.mode_==="Polygon"&&(t[0].pop(),this.geometryFunction_(t,i,s),t=i.getCoordinates()),this.type_==="MultiPoint"?e.setGeometry(new Be([t])):this.type_==="MultiLineString"?e.setGeometry(new ae([t])):this.type_==="MultiPolygon"&&e.setGeometry(new he([t])),this.dispatchEvent(new O(N.DRAWEND,e)),this.features_&&this.features_.push(e),this.source_&&this.source_.addFeature(e),e}abortDrawing_(){this.finishCoordinate_=null;const e=this.sketchFeature_;return this.sketchFeature_=null,this.sketchPoint_=null,this.sketchLine_=null,this.overlay_.getSource().clear(!0),this.deactivateTrace_(),e}abortDrawing(){const e=this.abortDrawing_();e&&this.dispatchEvent(new O(N.DRAWABORT,e))}appendCoordinates(e){const t=this.mode_,i=!this.sketchFeature_;i&&this.startDrawing_(e[0]);let s;if(t==="LineString"||t==="Circle")s=this.sketchCoords_;else if(t==="Polygon")s=this.sketchCoords_&&this.sketchCoords_.length?this.sketchCoords_[0]:[];else return;i&&s.shift(),s.pop();for(let n=0;n<e.length;n++)this.addToDrawing_(e[n]);const r=e[e.length-1];this.sketchFeature_=this.addToDrawing_(r),this.modifyDrawing_(r)}extend(e){const i=e.getGeometry();this.sketchFeature_=e,this.sketchCoords_=i.getCoordinates();const s=this.sketchCoords_[this.sketchCoords_.length-1];this.finishCoordinate_=s.slice(),this.sketchCoords_.push(s.slice()),this.sketchPoint_=new M(new B(s)),this.updateSketchFeatures_(),this.dispatchEvent(new O(N.DRAWSTART,this.sketchFeature_))}updateSketchFeatures_(){const e=[];this.sketchFeature_&&e.push(this.sketchFeature_),this.sketchLine_&&e.push(this.sketchLine_),this.sketchPoint_&&e.push(this.sketchPoint_);const t=this.overlay_.getSource();t.clear(!0),t.addFeatures(e)}updateState_(){const e=this.getMap(),t=this.getActive();(!e||!t)&&this.abortDrawing(),this.overlay_.setMap(t?e:null)}}function Qe(){const a=Ne();return function(e,t){return a[e.getGeometry().getType()]}}function Ze(a){switch(a){case"Point":case"MultiPoint":return"Point";case"LineString":case"MultiLineString":return"LineString";case"Polygon":case"MultiPolygon":return"Polygon";case"Circle":return"Circle";default:throw new Error("Invalid type: "+a)}}const X="units",et=[1,2,5],b=25.4/.28;class tt extends je{constructor(e){e=e||{};const t=document.createElement("div");t.style.pointerEvents="none",super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;const i=e.className!==void 0?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=i+"-inner",this.element.className=i+" "+We,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth!==void 0?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(X,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(X)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(X,e)}setDpi(e){this.dpi_=e}updateElement_(){const e=this.viewState_;if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=e.center,i=e.projection,s=this.getUnits(),r=s=="degrees"?"degrees":"m";let n=ie(i,e.resolution,t,r);const o=this.minWidth_*(this.dpi_||b)/b,h=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||b)/b:void 0;let l=o*n,c="";if(s=="degrees"){const p=Ve.degrees;l*=p,l<p/60?(c="″",n*=3600):l<p?(c="′",n*=60):c="°"}else if(s=="imperial")l<.9144?(c="in",n/=.0254):l<1609.344?(c="ft",n/=.3048):(c="mi",n/=1609.344);else if(s=="nautical")n/=1852,c="NM";else if(s=="metric")l<1e-6?(c="nm",n*=1e9):l<.001?(c="μm",n*=1e6):l<1?(c="mm",n*=1e3):l<1e3?c="m":(c="km",n/=1e3);else if(s=="us")l<.9144?(c="in",n*=39.37):l<1609.344?(c="ft",n/=.30480061):(c="mi",n/=1609.3472);else throw new Error("Invalid units");let d=3*Math.floor(Math.log(o*n)/Math.log(10)),u,f,g,_,m,P;for(;;){g=Math.floor(d/3);const p=Math.pow(10,g);if(u=et[(d%3+3)%3]*p,f=Math.round(u/n),isNaN(f)){this.element.style.display="none",this.renderedVisible_=!1;return}if(h!==void 0&&f>=h){u=_,f=m,g=P;break}else if(f>=o)break;_=u,m=f,P=g,++d}const T=this.scaleBar_?this.createScaleBar(f,u,c):u.toFixed(g<0?-g:0)+" "+c;this.renderedHTML_!=T&&(this.innerElement_.innerHTML=T,this.renderedHTML_=T),this.renderedWidth_!=f&&(this.innerElement_.style.width=f+"px",this.renderedWidth_=f),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,t,i){const s=this.getScaleForResolution(),r=s<1?Math.round(1/s).toLocaleString()+" : 1":"1 : "+Math.round(s).toLocaleString(),n=this.scaleBarSteps_,o=e/n,h=[this.createMarker("absolute")];for(let c=0;c<n;++c){const d=c%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";h.push(`<div><div class="ol-scale-singlebar ${d}" style="width: ${o}px;"></div>`+this.createMarker("relative")+(c%2===0||n===2?this.createStepText(c,e,!1,t,i):"")+"</div>")}return h.push(this.createStepText(n,e,!0,t,i)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+r+"</div>":"")+h.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e==="absolute"?3:-10}px;"></div>`}createStepText(e,t,i,s,r){const o=(e===0?0:Math.round(s/this.scaleBarSteps_*e*100)/100)+(e===0?"":" "+r),h=e===0?-3:t/this.scaleBarSteps_*-1,l=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${h}px;text-align: ${e===0?"left":"center"};min-width: ${l}px;left: ${i?t+"px":"unset"};">`+o+"</div>"}getScaleForResolution(){const e=ie(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),t=this.dpi_||b,i=1e3/25.4;return e*i*t}render(e){const t=e.frameState;t?this.viewState_=t.viewState:this.viewState_=null,this.updateElement_()}}const it=.8,de="printing-hide";function st(a,e){return a.toDataURL("image/png",e??it)}function nt(a,e){const t=document.createElement("div");t.classList.add("printing-overlay",de),a.appendChild(t);const i=document.createElement("div");return i.classList.add("printing-overlay-status"),i.textContent=e,t.appendChild(i),{destroy(){t.remove()}}}class gt{defaultOverlayText;constructor(e){this.defaultOverlayText=e.intl.formatMessage({id:"printingMap"})}async printMap(e,t){return await new rt(e,{blockUserInteraction:!0,overlayText:this.defaultOverlayText,viewPadding:"auto",...t}).printMap()}}class rt{olMap;blockUserInteraction=!1;overlayText;viewPadding;running=!1;drawInformation=[];scaleLine=void 0;overlay=void 0;constructor(e,t){this.olMap=e,this.blockUserInteraction=t.blockUserInteraction,this.overlayText=t.overlayText,this.viewPadding=t.viewPadding}async printMap(){if(this.running)throw new Error("Printing already running.");try{await this.beginExport();let e=await this.printToCanvas(this.olMap.getViewport());if(!e)throw new Error("Canvas export failed");return this.viewPadding==="auto"&&(e=this.removePadding(e,this.getViewPadding())),new ot(e)}finally{this.reset()}}async beginExport(){this.running=!0;const e=this.olMap.getInteractions().getArray().filter(t=>t.getActive()&&t instanceof Je);if(this.drawInformation=[],e?.forEach(t=>{const i=t,s=i.getOverlay().getStyle();i.getOverlay().setStyle(null),this.drawInformation?.push({draw:i,style:s})}),this.blockUserInteraction){const t=this.olMap?.getTargetElement();t&&(this.overlay=nt(t,this.overlayText))}await this.addScaleLine()}async addScaleLine(){const t=(this.scaleLine=new tt({className:"printing-scale-bar ol-scale-bar",bar:!0,text:!0,minWidth:125})).element;if(!t)throw new Error("Scale line does not have an element");let i=50,s=8;if(this.viewPadding==="auto"){const{bottom:h,left:l}=this.getViewPadding();i=Math.max(h+8,i),s+=l}t.style.setProperty("--printing-scale-bar-bottom",`${i}px`),t.style.setProperty("--printing-scale-bar-left",`${s}px`);const r=_e(),n=setTimeout(()=>{r.reject(new Error("Scale line did not render"))},3e3),o=this.scaleLine.render;this.scaleLine.render=(...h)=>{o.apply(this.scaleLine,h),r.resolve()},this.olMap?.addControl(this.scaleLine);try{await r.promise,await new Promise(h=>{requestAnimationFrame(h)})}finally{clearTimeout(n)}}async printToCanvas(e){const t={useCORS:!0,ignoreElements:function(r){if(r.classList&&typeof r.classList=="object"){const n=r.classList;return n.contains("map-anchors")||n.contains(de)}return!1}},i=(await me(async()=>{const{default:r}=await import("./BfxBtG_Oxhhm.js");return{default:r}},[],import.meta.url)).default;return await i(e,t)}reset(){this.scaleLine&&(this.olMap?.removeControl(this.scaleLine),this.scaleLine=void 0),this.overlay&&(this.overlay.destroy(),this.overlay=void 0),this.running=!1,this.drawInformation?.length&&this.drawInformation.forEach(e=>{e.draw.getOverlay().setStyle(e.style)})}removePadding(e,t){const i=window.devicePixelRatio||1,s={top:t.top*i,right:t.right*i,bottom:t.bottom*i,left:t.left*i};if(s.left===0&&s.right===0&&s.top===0&&s.bottom===0)return e;const{width:r,height:n}=e,o=document.createElement("canvas");o.width=r-s.left-s.right,o.height=n-s.top-s.bottom;const h=o.getContext("2d");if(!h)throw new Error("Failed to get a canvas context");return h.drawImage(e,s.left,s.top,o.width,o.height,0,0,o.width,o.height),o}getViewPadding(){const t=this.olMap.getView().padding??[0,0,0,0];return{top:t[0]??0,right:t[1]??0,bottom:t[2]??0,left:t[3]??0}}}class ot{canvas;constructor(e){this.canvas=e}getCanvas(){return this.canvas}getPNGDataURL(e){return st(this.canvas,e)}}export{Je as D,Xe as I,ft as N,gt as P,tt as S,st as a,nt as c};
