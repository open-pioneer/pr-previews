import{g as c,r as n}from"./dwMeHYNn9Hg1.js";const[l,f]=c({name:"LocaleContext",hookName:"useLocaleContext",providerName:"<LocaleProvider />",strict:!1,defaultValue:{dir:"ltr",locale:"en-US"}});function i(e,t={}){const{sync:o=!1}=t,r=s(e);return n.useCallback((...a)=>o?queueMicrotask(()=>r.current?.(...a)):r.current?.(...a),[o,r])}function s(e){const t=n.useRef(e);return t.current=e,t}export{f as a,i as u};
