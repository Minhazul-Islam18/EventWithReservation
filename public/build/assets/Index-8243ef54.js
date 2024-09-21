import{q as y,r as d,j as e,d as k,y as j}from"./app-f645d299.js";import _ from"./Mainlayout-70fcc997.js";import"./index-2bb5a9a7.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-27b42e6f.js";import"./Header-e280dcac.js";import"./Dropdown-eba34fa5.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-c3aaab52.js";import"./FlashMessage-60695b58.js";import"./sweetalert2.all-7e1dce6c.js";import"./Table-84d3b05b.js";import"./floating-ui.dom-0b485352.js";function P(){const{base_url:h,user:r,errors:t}=y().props,[o,f]=d.useState("user-profile"),[b,g]=d.useState(r!=null&&r.avatar?`/storage/profile/${r.avatar}`:"/assets/images/user-profile.jpeg"),[a,x]=d.useState({id:r.id,first_name:r.first_name,last_name:r.last_name,mobile:r.mobile,email:r.email,gender:r.gender}),w=s=>{const l=s.target.files[0];l&&(g(URL.createObjectURL(l)),x({...a,image:l}))},u=s=>{f(s)};function i(s){const l=s.target.id,m=s.target.value;x(p=>({...p,[l]:m}))}const[n,v]=d.useState({old_password:"",new_password:"",confirm_password:""});function c(s){const l=s.target.id,m=s.target.value;v(p=>({...p,[l]:m}))}function C(s){s.preventDefault(),j.post("/admin/user/profile/update",a)}function N(s){s.preventDefault(),j.post("/admin/user/profile/change-password",n)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{className:"table-list-title",children:e.jsx(k,{href:"#",className:"text-[#FF6243]  hover:underline text-base",children:"Bank"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"List"})})]})]}),e.jsxs("div",{className:"pt-5",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Profile Settings"})}),e.jsx("div",{children:e.jsxs("ul",{className:"sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto",children:[e.jsx("li",{className:"inline-block",children:e.jsxs("button",{onClick:()=>u("user-profile"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${o==="user-profile"?"!border-primary text-primary":""}`,children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e.jsx("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Profile"]})}),e.jsx("li",{className:"inline-block",children:e.jsxs("button",{onClick:()=>u("password-change"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${o==="password-change"?"!border-primary text-primary":""}`,children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e.jsx("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 6V18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Password change"]})})]})}),o==="user-profile"?e.jsx("div",{children:e.jsxs("form",{onSubmit:C,method:"post",className:"border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black",children:[e.jsx("h6",{className:"text-lg font-bold mb-5",children:"General Information"}),e.jsxs("div",{className:"flex flex-col sm:flex-row",children:[e.jsx("div",{className:"ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5",children:e.jsx("img",{src:b,alt:"img",className:"w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto"})}),e.jsxs("div",{className:"flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First Name"}),e.jsx("input",{id:"first_name",type:"text",placeholder:"First Name",className:"form-input",value:a.first_name||"",onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{id:"last_name",type:"text",placeholder:"Last Name",className:"form-input",value:a.last_name||"",onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{id:"mobile",type:"phone",placeholder:"mobile",className:"form-input",value:a.mobile||"",onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"email",className:"form-input",value:a.email||"",onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{id:"gender",defaultValue:a.gender||"",className:"form-select text-white-dark",onChange:i,children:[e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Image"}),e.jsx("input",{id:"image",type:"file",placeholder:"Jimmy@gmail.com",className:"form-input",onChange:w})]}),e.jsx("div",{className:"sm:col-span-2 mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-primary user-profile-save-button",children:"Save"})})]})]})]})}):"",o==="password-change"?e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-1 gap-5",children:e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"mb-5",children:e.jsx("h5",{className:"font-semibold text-lg mb-4",children:"Change Password"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{onSubmit:N,method:"post",children:[e.jsxs("div",{className:"mb-5 grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Old Password"}),e.jsx("input",{id:"old_password",type:"password",placeholder:"Enter Old Password",className:"form-input",value:n.old_password,onChange:c}),t.old_password&&e.jsx("div",{className:"text-red-600 text-[14px]",children:t.old_password})]}),e.jsxs("div",{children:[e.jsx("label",{children:"New Password"}),e.jsx("input",{id:"new_password",type:"password",placeholder:"Enter New Password",className:"form-input",value:n.new_password,onChange:c}),t.new_password&&e.jsx("div",{className:"text-red-600 text-[14px]",children:t.new_password})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Confirm Password"}),e.jsx("input",{id:"confirm_password",type:"password",placeholder:"Enter Confirm Password",className:"form-input",value:n.confirm_password,onChange:c}),t.confirm_password&&e.jsx("div",{className:"text-red-600 text-[14px]",children:t.confirm_password})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary user-profile-save-button",children:"Change Password"})]})})]})})}):""]})]})}P.layout=h=>e.jsx(_,{children:h,title:"E-SHOP || Bank"});export{P as default};
