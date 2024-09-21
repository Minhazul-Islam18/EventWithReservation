import{q as z,r as t,j as e,d as h,y as B}from"./app-f645d299.js";import G from"./Mainlayout-70fcc997.js";import{u as A,M as J}from"./mantine-react-table.esm-9ca6df82.js";import O from"./ParmanentDeleteModal-963ce799.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-27b42e6f.js";import"./Header-e280dcac.js";import"./Dropdown-eba34fa5.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-c3aaab52.js";import"./FlashMessage-60695b58.js";import"./sweetalert2.all-7e1dce6c.js";import"./Table-84d3b05b.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-2ef28edf.js";import"./transition-b362151d.js";function U(){const{data:o,meta:p,base_url:i}=z().props,[u,S]=t.useState(!1),[j,g]=t.useState(!o||o.length===0),[C,x]=t.useState(!1),[y,N]=t.useState(p?p.totalRowCount:0),[l,F]=t.useState([]),[c,v]=t.useState(""),[d,D]=t.useState([]),[a,P]=t.useState({pageIndex:0,pageSize:10}),[T,f]=t.useState(!1),[M,R]=t.useState(null),[m,k]=t.useState(o||[]);t.useEffect(()=>{(async()=>{m.length?x(!0):g(!0);const r=new URL("/admin/slider/trashed/data",i);r.searchParams.set("start",`${a.pageIndex*a.pageSize}`),r.searchParams.set("size",`${a.pageSize}`),r.searchParams.set("filters",JSON.stringify(l)),r.searchParams.set("globalFilter",c??""),r.searchParams.set("sorting",JSON.stringify(d??[]));try{const n=await fetch(r.href);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const w=n.headers.get("content-type");if(w&&w.includes("application/json")){const b=await n.json();k(b.data),N(b.meta.totalRowCount)}else throw new Error("Response is not JSON")}catch(n){S(!0),console.error(n)}finally{g(!1),x(!1)}})()},[l,c,a.pageIndex,a.pageSize,d]);function I(s){B.get("/admin/slider/undo-trashed/"+s)}function E(s){R(s),f(!0)}const L=t.useMemo(()=>[{accessorKey:"name",header:" Slider Name"},{header:"Actions",Cell:({row:s})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>I(s.id),className:"btn btn-sm btn-outline-primary",children:"Undo"}),e.jsx("button",{onClick:()=>E(s.id),className:"btn btn-sm btn-outline-danger",children:"Delete"})]})}],[]),$=A({columns:L,data:m,paginationDisplayMode:"pages",enableRowSelection:!0,enableDensityToggle:!1,getRowId:s=>s.id,initialState:{showColumnFilters:!1,showGlobalFilter:!0,density:"compact"},positionGlobalFilter:"left",mantineSearchTextInputProps:{placeholder:`Search ${m.length} rows`,sx:{minWidth:"300px"},variant:"filled"},manualFiltering:!0,manualPagination:!0,manualSorting:!0,rowCount:y,onColumnFiltersChange:F,onGlobalFilterChange:v,onPaginationChange:P,onSortingChange:D,state:{columnFilters:l,globalFilter:c,isLoading:j,pagination:a,showAlertBanner:u,showProgressBars:C,sorting:d},mantineToolbarAlertBannerProps:u?{color:"red",children:"Error loading data"}:void 0});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(h,{href:"#",className:"text-[#FF6243] hover:underline text-base",children:"Slider"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"Trashed"})})]}),e.jsxs("div",{className:"ml-auto flex justify-center items-center gap-3",children:[e.jsx(h,{href:`${i}/admin/slider/restore-all`,method:"get",className:"flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Slider"}),e.jsx(h,{href:`${i}/admin/slider/permanent-delete-all`,method:"get",className:"flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Trashed"})]})]}),e.jsx("br",{}),e.jsx(J,{table:$}),e.jsx(O,{isDeleteNoteModal:T,setIsDeleteNoteModal:f,fileToDelete:M,name:"Slider",route:"slider/permanent-delete"})]})}U.layout=o=>e.jsx(G,{children:o,title:"Luminous-Ecommerce || Trashed"});export{U as default};
