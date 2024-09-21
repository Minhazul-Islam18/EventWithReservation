import{q as Q,r as i,j as e,d as K,y as W}from"./app-f645d299.js";import z from"./Mainlayout-70fcc997.js";import{u as H,C as c}from"./index.esm-9c7427e1.js";import{S as n}from"./react-select.esm-eb50ded9.js";import{R as y}from"./index-77a4c603.js";/* empty css                   */import"./ThemeConfig-49c8c6b2.js";import"./Footer-27b42e6f.js";import"./Header-e280dcac.js";import"./Dropdown-eba34fa5.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-c3aaab52.js";import"./FlashMessage-60695b58.js";import"./sweetalert2.all-7e1dce6c.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-2ef28edf.js";function Z(){const{categories:o,sub_categories:_,brands:S,type:w,units:C}=Q().props,[u,G]=i.useState([]),[p,J]=i.useState([]),[X,P]=i.useState([]),[Y,q]=i.useState([]);i.useState(!1),i.useEffect(()=>{(()=>{const r=[],N=[];p.forEach(b=>{u.forEach(f=>{const D=`${b.label}/${f.label}`,F=`${b.value}/${f.value}`;r.push(D),N.push(F)})}),P(r),q(N)})()},[u,p]);const{control:d,register:l,handleSubmit:k,setValue:t,reset:O,formState:{errors:a},watch:m}=H({defaultValues:{type:w}}),L=m("product_description",""),E=s=>{t("product_description",s)},I=m("product_buy_return_policy",""),V=s=>{t("product_buy_return_policy",s)},h=o.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),x=C.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),g=_.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),j=S.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),$=s=>{t("category_id",s==null?void 0:s.value)},B=s=>{t("sub_category_id",s==null?void 0:s.value)},U=s=>{t("brand_id",s==null?void 0:s.value)},T=s=>{t("unit_id",s==null?void 0:s.value)},[M,v]=i.useState(!0),A=s=>{console.log(s.target.value);const r=s.target.value;r==="1"&&v(!0),r==="2"&&v(!1)};function R(s){W.post("/admin/product/license/store",s)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(K,{href:"#",className:"text-primary hover:underline",children:"License"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Add"})})]})]}),e.jsxs("form",{onSubmit:k(R),method:"post",children:[e.jsxs("div",{className:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"})}),e.jsxs("div",{className:"mb-5 space-y-5 relative",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx(c,{control:d,name:"category_id",render:({field:s})=>e.jsx(n,{placeholder:"Select an option",options:h,value:h.find(r=>r.value===s.value),onChange:$})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Sub Category"}),e.jsx(c,{control:d,name:"sub_category_id",render:({field:s})=>e.jsx(n,{placeholder:"Select an option",options:g,value:g.find(r=>r.value===s.value),onChange:B})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx("input",{...l("type"),type:"hidden"}),e.jsxs("div",{children:[e.jsx("label",{children:"Brand"}),e.jsx(c,{control:d,name:"brand_id",render:({field:s})=>e.jsx(n,{placeholder:"Select an option",options:j,value:j.find(r=>r.value===s.value),onChange:U})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Unit"}),e.jsx(c,{control:d,name:"unit_id",render:({field:s})=>e.jsx(n,{placeholder:"Select an option",options:x,value:x.find(r=>r.value===s.value),onChange:T})})]}),e.jsxs("div",{children:[e.jsx("label",{children:" Product SKU "}),e.jsx("input",{...l("product_sku",{required:"Product SKU Is required"}),type:"text",className:"form-input",placeholder:"Enter Product Name"}),a.product_name&&e.jsx("p",{className:"text-red-600 pt-2",children:a.product_name.message})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsxs("div",{children:[e.jsx("label",{children:"Product Name"}),e.jsx("input",{...l("product_name",{required:"Product Name Is required"}),type:"text",className:"form-input",placeholder:"Enter Product Name"}),a.product_name&&e.jsx("p",{className:"text-red-600 pt-2",children:a.product_name.message})]})})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Price and Description"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Price"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...l("single_product_price",{required:"Product Name Is required"}),type:"number",className:"form-input",placeholder:"99$"})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Discount"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...l("single_product_discount",{required:"Product Name Is required"}),type:"number",className:"form-input",placeholder:"10%"})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Quantity"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...l("single_product_quantity",{required:"Product Quantoty Is required"}),type:"number",className:"form-input",placeholder:"50"})})]})]})})]})]}),e.jsx("div",{className:"pt-5 grid grid-cols-1 lg:grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:" Select Upload Type "}),e.jsxs("select",{className:"form-select text-white-dark",...l("upload_type"),onChange:A,children:[e.jsx("option",{value:"1",children:"Upload By Link"}),e.jsx("option",{value:"2",children:"Upload By File"})]})]}),M?e.jsxs("div",{children:[e.jsx("label",{children:"Select File "}),e.jsx("input",{...l("upload_link",{required:"Product Name Is required"}),type:"text",className:"form-input",placeholder:"Enter Product Name"}),a.product_name&&e.jsx("p",{className:"text-red-600 pt-2",children:a.product_name.message})]}):e.jsxs("div",{children:[e.jsx("label",{children:"Link"}),e.jsx("input",{...l("upload_file",{required:"Product Name Is required"}),type:"file",className:"form-input",placeholder:"Enter Product Name"}),a.product_name&&e.jsx("p",{className:"text-red-600 pt-2",children:a.product_name.message})]})]})})]})}),e.jsxs("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Description"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(y,{value:L,onChange:s=>E(s),theme:"snow"})})})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Buy Return Policy"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(y,{value:I,onChange:s=>V(s),theme:"snow"})})})})]})]}),e.jsxs("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Thumbnail"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx("input",{type:"file",...l("thumbnail",{required:"Product Name Is required"}),className:"form-input"})})})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Seo for this product"})}),e.jsxs("div",{className:"mb-5 space-y-5 relative",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("label",{children:"Meta Tags "}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...l("meta_tags"),type:"text",className:"form-input",placeholder:"pant,shirt,watch,glass"})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("label",{children:"Meta Description"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("textarea",{...l("meta_description"),className:"form-input",placeholder:"Multivendor Ecommerce system"})})]})]})]})]}),e.jsx("div",{className:"pt-5 grid grid-cols-1 lg:grid-cols-1 gap-6",children:e.jsx("div",{className:"panel",children:e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:" License Platform"}),e.jsx("input",{...l("license_platform",{required:"Product Name Is required"}),type:"text",className:"form-input",placeholder:"Enter License Platform"})]}),e.jsxs("div",{children:[e.jsx("label",{children:" License Type"}),e.jsx("input",{...l("license_type",{required:"Product Name Is required"}),type:"text",className:"form-input",placeholder:"Enter License Type"})]})]})})})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]})}Z.layout=o=>e.jsx(z,{children:o,title:"Luminous-Ecommerce || Add"});export{Z as default};
