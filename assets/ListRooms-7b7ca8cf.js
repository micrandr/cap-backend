import{a3 as a,r as c,j as o,aa as u,ab as h}from"./index-625fd2ac.js";import{B as x}from"./Breadcrumb-cfeb577a.js";const j=()=>a.get("/rooms"),f=t=>a.get(`/rooms/${t}`),g=t=>a.post("/rooms",t),p=(t,r)=>a.put(`/rooms/${t}`,r),b=t=>a.delete(`/rooms/${t}`),A=()=>a.delete("/rooms"),L=t=>a.get(`/rooms?title=${t}`),n={getAll:j,get:f,create:g,update:p,remove:b,removeAll:A,findByTitle:L},y=()=>{const[t,r]=c.useState([]);c.useEffect(()=>{(async()=>{n.getAll().then(s=>{r(s==null?void 0:s.data["hydra:member"])}).then(s=>{console.log(s)})})()},[]);const m="/rooms/create/",i="Nouvelle salle",l=c.useMemo(()=>[{accessorKey:"roomLabel",header:"Nom de la salle"},{accessorKey:"roomAddress",header:"Adresse"},{accessorKey:"roomMaxPlace",header:"Capacité",size:2},{accessorKey:"roomHandicap",accessorFn:e=>o.jsx(o.Fragment,{children:o.jsx("div",{children:e.roomHandicap==1&&"Oui"})}),header:"Accès",size:2},{id:"actionColumnRoom",header:"Actions",size:2,accessorFn:e=>{const s="/rooms/edit/"+(e==null?void 0:e.id),d="/rooms/fiche/"+(e==null?void 0:e.id);return o.jsx(u,{editLink:s,ficheLink:d,objectId:e==null?void 0:e.id,objectName:"rooms",objectData:n})}}],[]);return o.jsx(h,{data:t,columns:l,createLink:m,createText:i})},R=()=>o.jsxs(o.Fragment,{children:[o.jsx(x,{pageName:"Salles"}),o.jsx("div",{className:"flex flex-col gap-10",children:o.jsx(y,{})})]});export{R as default};
