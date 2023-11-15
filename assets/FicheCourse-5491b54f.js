import{o as I,v as A,r as s,j as e}from"./index-625fd2ac.js";import{B as z}from"./Breadcrumb-cfeb577a.js";import{C as G}from"./CourseServices-3b48ec21.js";const H=()=>{I();const a=A().id,o={id:null,courseName:"",courseCategory:"",courseDuration:"",courseAddress:"",courseComment:""},[K,l]=s.useState(o),[M,i]=s.useState(o),[m,u]=s.useState(""),[n,x]=s.useState(""),[b,k]=s.useState(""),[h,j]=s.useState(""),[N,v]=s.useState(""),[f,g]=s.useState(""),[O,C]=s.useState(""),[S,p]=s.useState(""),[w,y]=s.useState(""),[D,P]=s.useState(""),[d,T]=s.useState(""),[c,L]=s.useState(""),[F,E]=s.useState(""),[Q,q]=s.useState(""),R=t=>{G.get(t).then(r=>{l(r.data),i(r.data),u(r.data.courseName),x(r.data.courseSlug),k(r.data.courseType),j(r.data.courseLevel),y(r.data.courseTarget),v(r.data.coursePrice),p(r.data.courseDuration),P(r.data.courseLocation),g(r.data.courseCategory),E(r.data.courseRequirement),C(r.data.courseComment),q(r.data.courseSkills),T(r.data.courseProgram),L(r.data.courseSupport)})};s.useEffect(()=>{a&&R(a)},[a]);const B=async t=>{t.preventDefault(),window.location="/courses/edit/"+a};return e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:B,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Editer"})})]}),e.jsxs("div",{className:"grid grid-cols-2 bg-white p-5",children:[e.jsxs("div",{className:"flex flex-col gap-9 mr-4 h-full",children:[e.jsxs("div",{className:"rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations générales 78789"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Nom du programme de formation"}),m]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Slug"}),n]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Type de formation"}),b]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Catégories de formation"}),f]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Niveau"}),h]})]})]}),e.jsxs("div",{className:"mt-2 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Conditions & cibles"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Prérequis"}),F]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Publics visés"}),w]})]})]})]}),e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Détails du programme de formation"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Tarif"}),N]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Lieu"}),D]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Durée"}),S]})]})]}),e.jsxs("div",{className:"mt-5 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Fichiers du programme"})}),e.jsxs("div",{className:"p-6.5",children:[d?e.jsxs(e.Fragment,{children:["Fichier programme de formation :",d]}):e.jsx("div",{}),c?e.jsxs("div",{children:["Support de formation : ",c]}):e.jsx("div",{})]})]})]})]})]})})},X=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{pageName:"Formations"}),e.jsx(H,{})]});export{X as default};