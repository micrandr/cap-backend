import{B as ne,D as ie,E as ce,c as g,r as a,H as me,f as be,at as ue,au as pe,j as e,I as xe,J as he,F as n,t as i,a9 as fe,q as ke}from"./index-625fd2ac.js";import{S as c,a as ge}from"./SwitcherAccessCar-00f81580.js";function je(s){return ne("MuiFormGroup",s)}ie("MuiFormGroup",["root","row","error"]);const ve=["className","row"],Ne=s=>{const{classes:o,row:t,error:l}=s;return he({root:["root",t&&"row",l&&"error"]},je,o)},ye=ce("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,t.row&&o.row]}})(({ownerState:s})=>g({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),we=a.forwardRef(function(o,t){const l=me({props:o,name:"MuiFormGroup"}),{className:d,row:x=!1}=l,m=be(l,ve),h=ue(),b=pe({props:l,muiFormControl:h,states:["error"]}),u=g({},l,{row:x,error:b.error}),p=Ne(u);return e.jsx(ye,g({className:xe(p.root,d),ownerState:u,ref:t},m))}),L=we,Ce="/rooms",Ue=()=>{const[s,o]=a.useState(""),[t,l]=a.useState(""),[d,x]=a.useState(""),[m,h]=a.useState(""),[b,u]=a.useState(""),[p,P]=a.useState(""),[j,E]=a.useState(""),[F,Re]=a.useState(""),[G,Se]=a.useState(""),[v,H]=a.useState(""),[N,M]=a.useState(""),[f,I]=a.useState(""),[q,De]=a.useState(""),[U,_]=a.useState(""),[y,z]=a.useState(""),[O,Te]=a.useState(""),[w,V]=a.useState(""),[C,J]=a.useState(""),[W,B]=a.useState(""),[R,$]=a.useState(""),[K,Ae]=a.useState(""),[Q,X]=a.useState(""),[Y,Le]=a.useState(""),[Z,Pe]=a.useState("");a.useState("");const[ee,Ee]=a.useState(""),[re,Fe]=a.useState(""),[ae,Ge]=a.useState(""),[k,S]=a.useState(""),[se,He]=a.useState(""),[D,oe]=a.useState(""),[te,Me]=a.useState(""),[T,le]=a.useState(""),de=async r=>{r.preventDefault();try{const A=await fe.post(Ce,JSON.stringify({roomLabel:s,roomMaxPlace:t,roomAddress:d,roomDepartment:m,roomCoordinateLongitude:b,roomCoordinateLattitude:p,roomGmapLink:j,roomEquipments:F,roomPriceHT:G,roomTvaRate:v,roomDailyPrice:N,roomHalfDailyPrice:f,roomHours:q,roomComment:y,roomHandicap:O,roomContactFullname:w,roomContactOccupation:C,roomContactPhone:W,roomContactDirectLine:R,roomContactEmail:K,roomCommentAccess:Y,roomCarAccess:Z,roomCommonTransport:ee,roomCommonTransportComment:re,roomTrainAccess:ae,roomTrainAccessComment:k,roomDrinkDistributor:se,roomDrinkDistributorComment:D,roomRestoDistributor:te,roomRestoDistributorComment:T}),{headers:{"Content-Type":"application/json"},withCredentials:!1});ke.error("Problème lors de la création. Contactez l'administrateur.")}catch(A){console.error(A)}};return e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",onSubmit:de,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex p-2"}),e.jsx("div",{className:"flex",children:e.jsx("button",{className:"flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-9",children:[e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations générales"})}),e.jsxs("div",{className:"p-6.5",children:[e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Nom de la salle de formation ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"room-name",onChange:r=>o(r.target.value),value:s,placeholder:"Nom de la salle",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Capacité maxi (nb places)"}),e.jsx("input",{type:"text",id:"room-max-place",onChange:r=>l(r.target.value),value:t,placeholder:"Nombre de place maximum",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Adresse complète"}),e.jsx("input",{type:"text",id:"user-phone",onChange:r=>x(r.target.value),value:d,placeholder:"Téléphone",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Département"}),e.jsx("input",{type:"text",id:"user-mobile",onChange:r=>h(r.target.value),value:m,placeholder:"Département",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsx("div",{className:"mb-4.5",children:e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Coordonnées GPS"})}),e.jsxs("div",{className:"mb-4.5 flex flex-col gap-6 xl:flex-row",children:[e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Longitude"}),e.jsx("input",{type:"text",id:"user-firstname",onChange:r=>u(r.target.value),value:b,placeholder:"Entrez la longitude",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:"Latitude"}),e.jsx("input",{type:"text",id:"user-name",onChange:r=>P(r.target.value),value:p,placeholder:"Entrer la lattitude",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})]}),e.jsxs("div",{className:"mb-4.5",children:[e.jsxs("label",{className:"mb-2.5 block text-black dark:text-white",children:["Lien Google Map ",e.jsx("span",{className:"text-meta-1",children:"*"})]}),e.jsx("input",{type:"text",id:"room-gmap-link",onChange:r=>E(r.target.value),value:j,placeholder:"Lien Google Map",className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),e.jsx("div",{className:"mb-4.5",children:e.jsx(L,{children:e.jsx(n,{control:e.jsx(i,{defaultChecked:!0}),label:"Accès Handicapé"})})}),e.jsxs("div",{className:"mb-4.5",children:[e.jsx("h3",{className:"mb-2.5 block text-black dark:text-white",children:"Commentaire"}),e.jsx("textarea",{onChange:r=>z(r.target.value),value:y,rows:6,placeholder:"Commentaire sur la salle de formation",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})]})]}),e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Informations de contact"})}),e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5",children:[e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"Nom complet"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>V(r.target.value),value:w,placeholder:"Entrez nom complet",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"Fonction"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>J(r.target.value),value:C,placeholder:"Intitulé du contact",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Téléphone"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>B(r.target.value),value:f,placeholder:"Standard",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Télé Ligne Direct"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>$(r.target.value),value:R,placeholder:"Ligne direct",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]})]}),e.jsxs("div",{className:"mb-4.5 px-5 mt-5",children:[e.jsx("h3",{className:"mb-2.5 block text-black dark:text-white",children:"Commentaire"}),e.jsx("textarea",{onChange:r=>X(r.target.value),value:Q,rows:6,placeholder:"Commentaire pour le contact",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-9",children:[e.jsxs("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Equipements mis à disposition dans la salle"})}),e.jsx("div",{children:e.jsx("div",{className:"mb-4.5",children:e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsxs(L,{children:[e.jsx(n,{control:e.jsx(i,{defaultChecked:!0}),label:"Accès Internet"}),e.jsx(n,{control:e.jsx(i,{}),label:"Video projecteur"}),e.jsx(n,{control:e.jsx(i,{}),label:"Ecran tactile"}),e.jsx(n,{control:e.jsx(i,{}),label:"Paperboard"})]})})})})]}),e.jsxs("div",{className:"rounded-sm border border-stroke py-4 pb-6 bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke pb-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Tarification de la salle"})}),e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5",children:[e.jsx("h3",{className:"",children:"Tarif HT"}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"TVA"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>H(r.target.value),value:v,placeholder:"Taux TVA",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block  mb-1 md:mb-0 pr-4",children:"Prix HT"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>M(r.target.value),value:N,placeholder:"Tarif journalier",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Prix Demi-journée"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>I(r.target.value),value:f,placeholder:"Tarif demi-journée",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]}),e.jsxs("div",{className:"md:flex md:items-center mb-6",children:[e.jsx("div",{className:"md:w-1/3",children:e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Tarif par heure"})}),e.jsx("div",{className:"md:w-2/3",children:e.jsx("input",{onChange:r=>_(r.target.value),value:U,placeholder:"Tarif par heure de la salle si applicable",className:"bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text"})})]})]})]}),e.jsxs("div",{className:"rounded-sm border hidden border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e.jsx("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e.jsx("h3",{className:"font-medium text-black dark:text-white",children:"Accessibilité"})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-4.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Accès handicapé"}),e.jsx(c,{})]})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Accès voiture"}),e.jsx(ge,{})]})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Accès Transport en commun"}),e.jsx(c,{}),e.jsx("textarea",{onChange:r=>S(r.target.value),value:k,rows:1,placeholder:"Commentaire transport en commun",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Accès Train"}),e.jsx(c,{}),e.jsx("textarea",{onChange:r=>S(r.target.value),value:k,rows:1,placeholder:"Commentaire accès train",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Distributeur de boisson"}),e.jsx(c,{}),e.jsx("textarea",{onChange:r=>oe(r.target.value),value:D,rows:1,placeholder:"Commentaire boissons",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})}),e.jsx("div",{className:"mb-4.5",children:e.jsxs("div",{className:"flex flex-col gap-5.5 p-6.5",children:[e.jsx("label",{className:"block mb-1 md:mb-0 pr-4",children:"Distributeur de restauration"}),e.jsx(c,{}),e.jsx("textarea",{onChange:r=>le(r.target.value),value:T,rows:1,placeholder:"Commentaire restauration",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]})}),e.jsx("div",{className:"flex flex-col gap-5.5 p-6.5",children:e.jsx("button",{className:"flex w-full justify-center rounded bg-primary p-3 font-medium text-gray",children:"Enregistrer"})}),e.jsx("div",{})]})]})]})]})})};export{Ue as D};
