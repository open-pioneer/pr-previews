import{r as p,L as S,h as I,j as v,R as k,g as L,d as T}from"./DD6TXFhYmIbq.js";import{_}from"./CmsKOCeNyeyo.js";import{D as C,S as M}from"./Biuiblx7-ntI.js";function O(l){const{loading:e,src:t,srcSet:a,onLoad:r,onError:n,crossOrigin:o,sizes:i,ignoreFallback:s}=l,[d,u]=p.useState("pending");p.useEffect(()=>{u(t?"loading":"pending")},[t]);const g=p.useRef(),f=p.useCallback(()=>{if(!t)return;h();const c=new Image;c.src=t,o&&(c.crossOrigin=o),a&&(c.srcset=a),i&&(c.sizes=i),e&&(c.loading=e),c.onload=m=>{h(),u("loaded"),r?.(m)},c.onerror=m=>{h(),u("failed"),n?.(m)},g.current=c},[t,o,a,i,r,n,e]),h=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return S(()=>{if(!s)return d==="loading"&&f(),()=>{h()}},[d,f,s]),s?"loaded":d}const R=(l,e)=>l!=="loaded"&&e==="beforeLoadOrError"||l==="failed"&&e==="onError",w=I(function(e,t){const{htmlWidth:a,htmlHeight:r,alt:n,...o}=e;return v.jsx("img",{width:a,height:r,ref:t,alt:n,...o})});w.displayName="NativeImage";const j=I(function(e,t){const{fallbackSrc:a,fallback:r,src:n,srcSet:o,align:i,fit:s,loading:d,ignoreFallback:u,crossOrigin:g,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:h,...c}=e,m=a!==void 0||r!==void 0,y=d!=null||u||!m,E=O({...e,crossOrigin:g,ignoreFallback:y}),P=R(E,f),b={ref:t,objectFit:s,objectPosition:i,...y?c:k(c,["onError","onLoad"])};return P?r||v.jsx(L.img,{as:w,className:"chakra-image__placeholder",src:a,...b}):v.jsx(L.img,{as:w,src:n,srcSet:o,crossOrigin:g,loading:d,referrerPolicy:h,className:"chakra-image",...b})});j.displayName="Image";const F=.8,x="printing-hide";function N(l,e){return l.toDataURL("image/png",e??F)}function U(l,e){const t=document.createElement("div");t.classList.add("printing-overlay",x),l.appendChild(t);const a=document.createElement("div");return a.classList.add("printing-overlay-status"),a.textContent=e,t.appendChild(a),{destroy(){t.remove()}}}class B{defaultOverlayText;constructor(e){this.defaultOverlayText=e.intl.formatMessage({id:"printingMap"})}async printMap(e,t){return await new A(e,{blockUserInteraction:!0,overlayText:this.defaultOverlayText,viewPadding:"auto",...t}).printMap()}}class A{olMap;blockUserInteraction=!1;overlayText;viewPadding;running=!1;drawInformation=[];scaleLine=void 0;overlay=void 0;constructor(e,t){this.olMap=e,this.blockUserInteraction=t.blockUserInteraction,this.overlayText=t.overlayText,this.viewPadding=t.viewPadding}async printMap(){if(this.running)throw new Error("Printing already running.");try{await this.beginExport();let e=await this.printToCanvas(this.olMap.getViewport());if(!e)throw new Error("Canvas export failed");return this.viewPadding==="auto"&&(e=this.removePadding(e,this.getViewPadding())),new D(e)}finally{this.reset()}}async beginExport(){this.running=!0;const e=this.olMap.getInteractions().getArray().filter(t=>t.getActive()&&t instanceof C);if(this.drawInformation=[],e?.forEach(t=>{const a=t,r=a.getOverlay().getStyle();a.getOverlay().setStyle(null),this.drawInformation?.push({draw:a,style:r})}),this.blockUserInteraction){const t=this.olMap?.getTargetElement();t&&(this.overlay=U(t,this.overlayText))}await this.addScaleLine()}async addScaleLine(){const t=(this.scaleLine=new M({className:"printing-scale-bar ol-scale-bar",bar:!0,text:!0,minWidth:125})).element;if(!t)throw new Error("Scale line does not have an element");let a=50,r=8;if(this.viewPadding==="auto"){const{bottom:s,left:d}=this.getViewPadding();a=Math.max(s+8,a),r+=d}t.style.setProperty("--printing-scale-bar-bottom",`${a}px`),t.style.setProperty("--printing-scale-bar-left",`${r}px`);const n=T(),o=setTimeout(()=>{n.reject(new Error("Scale line did not render"))},3e3),i=this.scaleLine.render;this.scaleLine.render=(...s)=>{i.apply(this.scaleLine,s),n.resolve()},this.olMap?.addControl(this.scaleLine);try{await n.promise,await new Promise(s=>{requestAnimationFrame(s)})}finally{clearTimeout(o)}}async printToCanvas(e){const t={useCORS:!0,ignoreElements:function(n){if(n.classList&&typeof n.classList=="object"){const o=n.classList;return o.contains("map-anchors")||o.contains(x)}return!1}},a=(await _(async()=>{const{default:n}=await import("./BfxBtG_Oxhhm.js");return{default:n}},[],import.meta.url)).default;return await a(e,t)}reset(){this.scaleLine&&(this.olMap?.removeControl(this.scaleLine),this.scaleLine=void 0),this.overlay&&(this.overlay.destroy(),this.overlay=void 0),this.running=!1,this.drawInformation?.length&&this.drawInformation.forEach(e=>{e.draw.getOverlay().setStyle(e.style)})}removePadding(e,t){const a=window.devicePixelRatio||1,r={top:t.top*a,right:t.right*a,bottom:t.bottom*a,left:t.left*a};if(r.left===0&&r.right===0&&r.top===0&&r.bottom===0)return e;const{width:n,height:o}=e,i=document.createElement("canvas");i.width=n-r.left-r.right,i.height=o-r.top-r.bottom;const s=i.getContext("2d");if(!s)throw new Error("Failed to get a canvas context");return s.drawImage(e,r.left,r.top,i.width,i.height,0,0,i.width,i.height),i}getViewPadding(){const t=this.olMap.getView().padding??[0,0,0,0];return{top:t[0]??0,right:t[1]??0,bottom:t[2]??0,left:t[3]??0}}}class D{canvas;constructor(e){this.canvas=e}getCanvas(){return this.canvas}getPNGDataURL(e){return N(this.canvas,e)}}export{j as I,B as P,N as a,U as c};