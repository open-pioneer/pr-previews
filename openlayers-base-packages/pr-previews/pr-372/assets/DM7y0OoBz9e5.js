import{G as f,h as a,u as S,o as x,ae as T,j as n,g as d,I as h,R as p,a9 as j,m as N}from"./BeGW3nmX4tO2.js";const[I,L]=f({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),m=a(function(s,e){const t=S("List",s),{children:o,styleType:y="none",stylePosition:u,spacing:r,...c}=x(s),l=T(o),g=r?{["& > *:not(style) ~ *:not(style)"]:{mt:r}}:{};return n.jsx(I,{value:t,children:n.jsx(d.ul,{ref:e,listStyleType:y,listStylePosition:u,role:"list",__css:{...t.container,...g},...c,children:l})})});m.displayName="List";const _=a((i,s)=>{const{as:e,...t}=i;return n.jsx(m,{ref:s,as:"ol",styleType:"decimal",marginStart:"1em",...t})});_.displayName="OrderedList";const C=a(function(s,e){const{as:t,...o}=s;return n.jsx(m,{ref:e,as:"ul",styleType:"initial",marginStart:"1em",...o})});C.displayName="UnorderedList";const P=a(function(s,e){const t=L();return n.jsx(d.li,{ref:e,...s,__css:t.item})});P.displayName="ListItem";const U=a(function(s,e){const t=L();return n.jsx(h,{ref:e,role:"presentation",...s,__css:t.icon})});U.displayName="ListIcon";const v=a(function(s,e){const t=p("Text",s),{className:o,align:y,decoration:u,casing:r,...c}=x(s),l=j({textAlign:s.align,textDecoration:s.decoration,textTransform:s.casing});return n.jsx(d.p,{ref:e,className:N("chakra-text",s.className),...l,...c,__css:t})});v.displayName="Text";export{m as L,v as T,C as U,P as a};
