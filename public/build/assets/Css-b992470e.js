import { q as a, j as e, a as o, y as n } from "./app-d6cbffa8.js";
import m from "./Mainlayout-39be0ce6.js";
import { u as c } from "./index.esm-b3c0788f.js";
import "./ThemeConfig-49c8c6b2.js";
import "./Footer-e5f7193f.js";
import "./Header-367bdad1.js";
import "./Dropdown-642c7f60.js";
import "./nonIterableRest-bd5956ca.js";
import "./Sidebar-bb28e48f.js";
import "./FlashMessage-bbbb926d.js";
import "./sweetalert2.all-57f2eec1.js";
function d() {
    const { file_content: s } = a().props,
        {
            register: t,
            handleSubmit: r,
            setValue: p,
            formState: { errors: x },
        } = c({ defaultValues: { file_content: s } });
    function i(l) {
        n.post("/admin/custom-css/save", l);
    }
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className:
                    "panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",
                children: [
                    e.jsx("div", {
                        className:
                            "rounded-full  bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",
                        children: e.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            children: [
                                e.jsx("path", {
                                    d: "M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                }),
                                e.jsx("path", {
                                    opacity: "0.5",
                                    d: "M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                }),
                            ],
                        }),
                    }),
                    e.jsx("ul", {
                        className: "flex space-x-2 rtl:space-x-reverse",
                        children: e.jsx("li", {
                            className: "table-list-title",
                            children: e.jsx(o, {
                                href: "#",
                                className:
                                    "text-[#FF6243] hover:underline text-base",
                                children: "Custom Css Style",
                            }),
                        }),
                    }),
                ],
            }),
            e.jsx("div", {
                className: "pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",
                children: e.jsx("div", {
                    className: "panel",
                    id: "forms_grid",
                    children: e.jsx("div", {
                        className: "mb-5",
                        children: e.jsxs("form", {
                            className: "space-y-5",
                            onSubmit: r(i),
                            method: "post",
                            children: [
                                e.jsx("div", {
                                    className:
                                        "grid grid-cols-1 sm:grid-cols-1 gap-4",
                                    children: e.jsx("div", {
                                        children: e.jsx("textarea", {
                                            placeholder: "Enter Custom Css",
                                            className: "form-input h-screen",
                                            ...t("file_content"),
                                        }),
                                    }),
                                }),
                                e.jsx("button", {
                                    type: "submit",
                                    className: "btn btn-primary !mt-6",
                                    children: "Submit",
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        ],
    });
}
d.layout = (s) => e.jsx(m, { children: s, title: "X || Extra" });
export { d as default };
