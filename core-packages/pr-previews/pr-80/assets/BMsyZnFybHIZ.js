import{b as d,ad as E,ae as w,af as y}from"./CJq6SW5weRuF.js";const S="modulepreload",k=function(t,e){return new URL(t,e).href},v={},I=function(e,c,i){let f=Promise.resolve();if(c&&c.length>0){const s=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),m=n?.nonce||n?.getAttribute("nonce");f=Promise.allSettled(c.map(r=>{if(r=k(r,i),r in v)return;v[r]=!0;const a=r.endsWith(".css"),g=a?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===r&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${g}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":S,a||(o.as="script"),o.crossOrigin="",o.href=r,m&&o.setAttribute("nonce",m),document.head.appendChild(o),a)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}function h(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return f.then(s=>{for(const n of s||[])n.status==="rejected"&&h(n.reason);return e().catch(h)})};function P(t,e,c){const i=d.useContext(E);return d.useMemo(()=>p("useService",i).getService(t,e,c??{}),[i,t,e,c])}function R(t){const e=d.useContext(E);return p("useIntl",e).getIntl(t)}function p(t,e){if(!e)throw new w(y.INTERNAL,`"Failed to access package context from '${t}': react integration was not set up properly.`);return e}export{I as _,P as a,R as u};
