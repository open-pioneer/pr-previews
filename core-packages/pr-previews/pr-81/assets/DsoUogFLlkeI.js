import{h as g,F as y,G as I,l as h,ac as x,aa as E,r as i,j as p,n as G,x as S}from"./DuM3AHNhQZW5.js";const[v,_]=S({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),R=g(function(s,u){const a=y("Input",s),{children:d,className:l,...c}=I(s),m=h("chakra-input__group",l),n={},r=x(d),e=a.field;r.forEach(t=>{a&&(e&&t.type.id==="InputLeftElement"&&(n.paddingStart=e.height??e.h),e&&t.type.id==="InputRightElement"&&(n.paddingEnd=e.height??e.h),t.type.id==="InputRightAddon"&&(n.borderEndRadius=0),t.type.id==="InputLeftAddon"&&(n.borderStartRadius=0))});const f=r.map(t=>{const o=E({size:t.props?.size||s.size,variant:t.props?.variant||s.variant});return t.type.id!=="Input"?i.cloneElement(t,o):i.cloneElement(t,Object.assign(o,n,t.props))});return p.jsx(G.div,{className:m,ref:u,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...a.group},"data-group":!0,...c,children:p.jsx(v,{value:a,children:f})})});R.displayName="InputGroup";export{R as I,_ as u};
