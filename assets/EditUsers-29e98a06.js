import{o as me,v as ue,r as s,j as e,U as V,b as be}from"./index-625fd2ac.js";import{B as pe}from"./Breadcrumb-cfeb577a.js";import{S as n}from"./react-select.esm-7cbaa6ad.js";import{c as xe}from"./country-list-df7d86df.js";import{S as he}from"./SwitcherQuailopi-905a32fc.js";import{S as fe}from"./SwitcherTVA-d67609ec.js";import{D as ke,a as ge}from"./DocumentList-e99afe06.js";import"./objectSpread2-15d6da3e.js";import"./floating-ui.dom-492b5fd7.js";import"./Fab-1b39fe50.js";const ve=()=>{const Z=me(),t=ue().id,c={id:null,userName:"",userFirstname:"",userPhone:"",userAddress:"",comment:""},[ye,_]=s.useState(c),[Ne,$]=s.useState(c),[m,u]=s.useState(""),[b,p]=s.useState(""),[x,h]=s.useState(""),[f,k]=s.useState(""),[g,v]=s.useState(""),[j,y]=s.useState(""),[N,w]=s.useState(""),[S,C]=s.useState(""),[l,D]=s.useState(""),[K,W]=s.useState(""),[d,P]=s.useState(""),[U,T]=s.useState(""),[A,E]=s.useState(""),[X,Y]=s.useState(""),[ee,M]=s.useState(""),[L,R]=s.useState(""),[F,H]=s.useState(""),[re,ae]=s.useState(""),[q,z]=s.useState(""),[G,I]=s.useState(""),[se,te]=s.useState(""),[o,J]=s.useState("");s.useState("");const B=s.useMemo(()=>xe().getData(l),[]),O=[{value:"auto",label:"Auto-Entrepreneur"},{value:"portage",label:"Portage"},{value:"ei",label:"Entreprise individuelle"},{value:"sarl",label:"SARL"},{value:"eurl",label:"EURL"},{value:"sas",label:"SAS"},{value:"sasu",label:"SASU"}],Q=[{value:"adobe",label:"Adobe"},{value:"canvas",label:"Canvas"},{value:"cloud",label:"Cloud"},{value:"compta",label:"Comptabilité"},{value:"marches-privés",label:"Marchés privés"},{value:"marches-publics",label:"Marchés publics"},{value:"ms-project",label:"Microsoft Project"},{value:"ms-office",label:"Microsoft Office"},{value:"sketch",label:"Sketch"},{value:"zoho",label:"Zoho"}],le=r=>{V.get(r).then(a=>{_(a.data),$(a.data),p(a.data.userName),u(a.data.userFirstName),k(a.data.userPhone),v(a.data.userMobile),h(a.data.userEmail),y(a.data.userAddress),w(a.data.userPostalCode),C(a.data.userDepartment),P(a.data.userSkills),T(a.data.companyName),D(a.data.userCountry),E(a.data.companyType),Y(a.data.companyTva),M(a.data.rayonAction),R(a.data.pricePresentielDaily),H(a.data.pricePresentielHalfDay),z(a.data.priceDistancielDaily),I(a.data.priceDistancielHalfDay),ae(a.data.pricePresentielRayonAction),te(a.data.priceTransport),J(a.data.comment)})};s.useEffect(()=>{t&&le(t)},[t]);const de=r=>{r.preventDefault();try{const a=JSON.stringify({userName:b,userFirstName:m,userPhone:f,userMobile:g,userEmail:x,userAddress:j,userPostalCode:N,userDepartment:S,userCountry:l,userSkills:d,companyName:U,companyType:A,companyTva:X,rayonAction:ee,pricePresentielDaily:L,pricePresentielHalfDay:F,pricePresentielRayonAction:re,priceDistancielDaily:q,priceDistancielHalfDay:G,priceTransport:se,comment:o});V.update(t,a).then(i=>{i.status==200&&(be.error("Problème lors de la mise à jour. Contactez l'administrateur."),Z("/users"))})}catch(a){console.log(a)}},oe=r=>{D(r.value)},ie=r=>{E(r.value)},ne=r=>{let a=[];r.forEach(ce=>{a.push(ce.value)});let i=a.join(",");P(i)};return e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:de,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col gap-9",children:e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations générales"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5 flex flex-col gap-6 xl:flex-row",children:[e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Prénom ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"userFirstName",onChange:r=>u(r.target.value),value:m,placeholder:"Entrez le prénom",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Nom ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"userName",onChange:r=>p(r.target.value),value:b,placeholder:"Entrer le nom",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Tél. ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"userPhone",onChange:r=>k(r.target.value),value:f,placeholder:"Téléphone",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Portable"}),e.jsx("input",{type:"text",id:"userMobile",onChange:r=>v(r.target.value),value:g,placeholder:"Téléphone",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Email ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"email",id:"userEmail",onChange:r=>h(r.target.value),value:x,placeholder:"Enter your email address",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Adresse complète ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"userAddress",onChange:r=>y(r.target.value),value:j,placeholder:"Adresse / CP / Ville",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Code postal"}),e.jsx("input",{type:"text",id:"userAddress",onChange:r=>w(r.target.value),value:N,placeholder:"CP",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Département"}),e.jsx("input",{type:"text",id:"user-department",onChange:r=>C(r.target.value),value:S,placeholder:"Département",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Pays"}),e.jsx(n,{options:B,value:B.filter(r=>r.value===l),onChange:oe})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Lien Google map"}),e.jsx("input",{type:"text",id:"user-gmap-link",onChange:r=>W(r.target.value),value:K,placeholder:"Lien vers la fiche sur Google map",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"mb-3 block text-black dark:text-white",children:["Compétences ",d]}),e.jsx(n,{options:Q,onChange:ne,value:Q.filter(r=>r.value===d),isMulti:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Certifié Qualiopi"})}),e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsx(he,{})})]})]})]})}),e.jsxs("div",{className:"flex flex-col gap-9",children:[e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations sur l'entreprise"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Type de structure ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("div",{className:"relative z-20 bg-transparent dark:bg-form-input",children:e.jsx(n,{options:O,value:O.filter(r=>r.value===A),onChange:ie})})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Nom de l'entreprise"}),e.jsx("input",{type:"text",id:"company-name",onChange:r=>T(r.target.value),value:U,placeholder:"Nom entreprise",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsx("div",{className:"mb-4.5 hidden",children:e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsx(fe,{})})}),e.jsx(ke,{}),e.jsx(ge,{})]})]}),e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Tarification d'animation"})}),e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5",children:[e.jsx("h4",{className:"font-semibold",children:"En présentiel"}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"Journalier"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>R(r.target.value),value:L,placeholder:"Tarif journalier",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Demi-journalier"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>H(r.target.value),value:F,placeholder:"Tarif demi-journée",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Rayon d'action"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("textarea",{name:"rayon-action",onChange:r=>M(r.target.value),className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"})})]})]}),e.jsxs("div",{className:"flex flex-col  gap-5.5 p-6.5 border border-stroke rounded  mt-5 mb-5 mx-5",children:[e.jsx("h4",{className:"font-semibold",children:"En distantiel"}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"Journalier"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>z(r.target.value),value:q,placeholder:"Tarif journalier",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Demi-journalier"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>I(r.target.value),value:G,placeholder:"Tarif demi-journée",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]})]})]}),e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Commentaire"})}),e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsx("textarea",{id:"comment",onChange:r=>J(r.target.value),value:o,rows:6,placeholder:"Default textarea",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",children:o})}),e.jsx("div",{})]})]})]})]})})},Le=()=>e.jsxs(e.Fragment,{children:[e.jsx(pe,{pageName:"Mise à jour donnée utilisateur"}),e.jsx("div",{className:"flex flex-col gap-10",children:e.jsx(ve,{})})]});export{Le as default};
