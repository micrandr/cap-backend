import{o as h,r as s,j as e,b as f}from"./index-625fd2ac.js";import{B as k}from"./Breadcrumb-cfeb577a.js";import{S as j}from"./SwitcherTVA-d67609ec.js";import{c as g}from"./country-list-df7d86df.js";import{U as v}from"./UserAccessServices-049d01b6.js";const N=()=>{const l=h(),[d,c]=s.useState(""),[o,n]=s.useState(""),[i,m]=s.useState(""),[u,b]=s.useState(""),[p,y]=s.useState(""),x=async r=>{r.preventDefault();try{const a=JSON.stringify({userNameAccess:d,userNiceNameAccess:i,userEmailAccess:o,userTypeAccess:u});v.create(a).then(t=>{t.status&&(f.success("Utilisateur bien créé"),l("/useraccess"))}).then(t=>{console.log(t)})}catch(a){console.error(a)}};return s.useMemo(()=>g().getData(),[]),e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:x,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col gap-9",children:e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations de connexion"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Identifiant"}),e.jsx("input",{type:"text",id:"user-name-access",onChange:r=>c(r.target.value),value:d,placeholder:"Identifiant",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Email ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"email",id:"user-email-access",onChange:r=>n(r.target.value),value:o,placeholder:"Enter your email address",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Nom d'affichage ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"user-nicename-access",onChange:r=>m(r.target.value),value:i,placeholder:"Nom d'affichage",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]})]})]})}),e.jsx("div",{className:"flex flex-col gap-9",children:e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations sur l'entreprise"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5 hidden",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Type de structure ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsxs("div",{className:"relative z-20 bg-transparent dark:bg-form-input",children:[e.jsxs("select",{id:"user-company-type",onChange:r=>b(r.target.value),className:"relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",children:[e.jsx("option",{value:"",children:"Auto-Entrepreneur"}),e.jsx("option",{value:"",children:"Portage"}),e.jsx("option",{value:"",children:"EI"}),e.jsx("option",{value:"",children:"SARL"}),e.jsx("option",{value:"",children:"EURL"}),e.jsx("option",{value:"",children:"SAS"}),e.jsx("option",{value:"",children:"SASU"})]}),e.jsx("span",{className:"absolute top-1/2 right-4 z-30 -translate-y-1/2",children:e.jsx("svg",{className:"fill-current",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{opacity:"0.8",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:""})})})})]})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Nom de l'entreprise"}),e.jsx("input",{type:"text",id:"company-name",onChange:r=>setCompanyccess(r.target.value),value:p,placeholder:"Nom entreprise",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsx("div",{className:"mb-4.5 hidden",children:e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsx(j,{})})}),e.jsx("div",{className:"border border-stroke p-4",children:e.jsx("h4",{children:"Gestion de documents"})})]})]})})]})]})})},E=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{pageName:"Création nouvel utilisateur"}),e.jsx("div",{className:"flex flex-col gap-10",children:e.jsx(N,{})})]});export{E as default};
