import{o as G,v as H,r as a,j as e,b as K}from"./index-625fd2ac.js";import{B as Q}from"./Breadcrumb-cfeb577a.js";import{C as U}from"./CourseServices-3b48ec21.js";import{S as t}from"./react-select.esm-7cbaa6ad.js";import{s as W}from"./slugify-fab7e66a.js";import"./objectSpread2-15d6da3e.js";import"./floating-ui.dom-492b5fd7.js";const f=[{value:"none",label:"Selectionner"},{value:"beginner",label:"Débutant"},{value:"intermediate",label:"Intérmediaire"},{value:"confirmed",label:"Confirmé"}],g=[{value:"none",label:"Selectionner"},{value:"presentiel",label:"Formation en présentiel - FP"},{value:"distanciel",label:"Formation à distance - Visio - FOAD"},{value:"e-learning",label:"e-Learning"},{value:"blended-learning",label:"Blended Learning"}],v=[{value:"none",label:"Selectionner"},{value:"particulier",label:"Particulier"},{value:"entreprise",label:"Entreprise"},{value:"particulier-entreprise",label:"Particulier / Entreprise"}],j=[{value:"none",label:"Selectionner"},{value:"marches-publics",label:"Marches Publics"},{value:"dao",label:"DAO"},{value:"bureautique",label:"Bureautique"},{value:"comptabilite",label:"Comptabilité"}],X=()=>{const N=G(),y=H().id,i={id:null,courseName:"",courseCategory:"",courseDuration:"",courseAddress:"",courseComment:""};a.useState(i);const[o,Z]=a.useState(i),[n,C]=a.useState(""),[c,u]=a.useState(""),[m,w]=a.useState(""),[l,S]=a.useState(""),[b,D]=a.useState(""),[p,L]=a.useState("");a.useState("");const[x,P]=a.useState(""),[k,T]=a.useState(""),[h,q]=a.useState(""),[E,F]=a.useState(""),[B,R]=a.useState(""),[A,I]=a.useState("");a.useState(""),a.useEffect(()=>{},[y]);const O=r=>{w(r.value)},M=r=>{T(r.value)},J=r=>{console.log("courseLevel="),console.log(l),S(r.value)},V=r=>{L(r.value)},_=r=>{r.preventDefault();let s=r.target.files[0].name;F(s)},$=r=>{r.preventDefault();let s=r.target.files[0].name;R(s)},z=async r=>{r.preventDefault();try{const s=JSON.stringify({courseName:n,courseType:m,courseLevel:l,courseCategory:p,coursePrice:b,courseLocation:h,courseDuration:x,courseSlug:c,courseRequirement:A,courseProgram:E,courseSupport:B,courseTarget:k});U.create(s).then(d=>{(d.status==200||d.status==201)&&(K.success("Enregistrement bien appliqué"),N("/courses"))}).then(d=>{})}catch(s){console.log(s)}};return e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:z,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})})]}),e.jsxs("div",{className:"grid grid-cols-2 bg-white p-5",children:[e.jsxs("div",{className:"flex flex-col gap-9 mr-4 h-full",children:[e.jsxs("div",{className:"rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations générales"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Nom du programme de formation"}),e.jsx("input",{type:"text",id:"course-name",onChange:r=>{C(r.target.value),u(W(r.target.value.toLowerCase()))},value:n,placeholder:"Nom du programme de formation",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Slug"}),e.jsx("input",{type:"text",id:"course-slug",onChange:r=>u(r.target.value),value:c,placeholder:"Slug",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Type de formation"}),e.jsx(t,{options:g,value:g.filter(r=>r.value===m),onChange:O})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Catégories de formation"}),e.jsx(t,{options:j,value:j.filter(r=>r.value===p),onChange:V})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Niveau"}),e.jsx(t,{options:f,onChange:J,value:f.filter(r=>r.value===l)})]})]})]}),e.jsxs("div",{className:"mt-2 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Conditions & cibles"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Prérequis"}),e.jsx("textarea",{id:"course-prerequis",onChange:r=>I(r.target.value),value:o==null?void 0:o.courseRequirement,placeholder:"Prérequis",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Publics visés"}),e.jsx(t,{options:v,value:v.filter(r=>r.value===k),onChange:M})]})]})]})]}),e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Détails du programme de formation"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Tarif"}),e.jsx("input",{type:"text",id:"course-price",onChange:r=>D(r.target.value),value:b,placeholder:"Tarif",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Lieu"}),e.jsx("input",{type:"text",id:"course-location",name:"course-location",onChange:r=>q(r.target.value),value:h,placeholder:"Lieu de formation",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Durée"}),e.jsx("input",{type:"number",id:"course-duration",onChange:r=>P(r.target.value),value:x,placeholder:"Durée de la formation",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})]})]}),e.jsxs("div",{className:"mt-5 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Fichiers du programme"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Programme"}),e.jsx("input",{type:"file",accept:"image/png, image/jpg, application/pdf, application/docx",id:"course-programme",onChange:_,placeholder:"Programme",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Support"}),e.jsx("input",{type:"file",id:"course-support",accept:"image/png, image/jpg, application/pdf, application/docx",onChange:$,placeholder:"Support",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})]})]})]})]})]})})},de=()=>e.jsxs(e.Fragment,{children:[e.jsx(Q,{pageName:"Formations"}),e.jsx(X,{})]});export{de as default};
