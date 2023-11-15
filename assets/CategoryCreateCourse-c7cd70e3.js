import{o as p,r as s,j as e,q as l}from"./index-625fd2ac.js";import{B as h}from"./Breadcrumb-cfeb577a.js";import{C as k}from"./CourseServices-3b48ec21.js";import{S as f}from"./react-select.esm-7cbaa6ad.js";import"./objectSpread2-15d6da3e.js";import"./floating-ui.dom-492b5fd7.js";const i=[{value:"none",label:"Selectionner"},{value:"1",label:"Activé"},{value:"0",label:"Desactivé"}],v=()=>{const n=p(),[t,c]=s.useState(""),[o,m]=s.useState(""),[d,u]=s.useState(""),b=r=>{console.log(r.value),m(r.value)},x=async r=>{r.preventDefault();try{const a=JSON.stringify({categoryName:t,categoryDescription:d,categoryStatus:o});k.createCategory(a).then(g=>{l.success("Catégorie bien créée"),n("/courses/categories")}).then(g=>{}),l.error("Problème lors de la création. Contactez l'administrateur.")}catch(a){console.error(a)}};return e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:x,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex p-2"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col gap-9",children:e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations générales"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Nom de la catégorie de formation ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"category-name",onChange:r=>c(r.target.value),value:t,placeholder:"Nom de la catégorie",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("h3",{className:"mb-2.5 block text-black dark:text-white",children:"Description"}),e.jsx("textarea",{onChange:r=>u(r.target.value),value:d,rows:3,placeholder:"Descriptif sur la catégorie de formation",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("h3",{className:"mb-2.5 block text-black dark:text-white",children:"Status"}),e.jsx(f,{options:i,value:i.filter(r=>r.value===o),onChange:b})]})]})]})}),e.jsx("div",{className:"flex flex-col gap-9",children:e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Détails sur les catégories"})}),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"Elles servent à regrouper les formations par rubrique"})})]})})]})]})})},D=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{pageName:"Créer une nouvelle catégorie de formation"}),e.jsx(v,{})]});export{D as default};