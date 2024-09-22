import { q as y, r as c, j as e, a as C, y as N } from "./app-d6cbffa8.js";
import w from "./Mainlayout-39be0ce6.js";
import { S } from "./react-select.esm-8fb60c45.js";
import { u as k, C as L } from "./index.esm-b3c0788f.js";
import "./ThemeConfig-49c8c6b2.js";
import "./Footer-e5f7193f.js";
import "./Header-367bdad1.js";
import "./Dropdown-642c7f60.js";
import "./nonIterableRest-bd5956ca.js";
import "./Sidebar-bb28e48f.js";
import "./FlashMessage-bbbb926d.js";
import "./sweetalert2.all-57f2eec1.js";
import "./floating-ui.dom-0c6ed2df.js";
import "./emotion-react.browser.esm-1c15f29c.js";
function _() {
    const { categories: l, result: r } = y().props,
        [m, p] = c.useState(!1),
        {
            control: h,
            register: a,
            handleSubmit: x,
            setValue: g,
            reset: u,
            formState: { errors: i },
        } = k({
            defaultValues: {
                id: r.id,
                name: r.name,
                slug: r.slug,
                parent_id: r != null && r.parent_id ? r.parent_id : null,
            },
        }),
        n = l.map((s) => ({
            value: s == null ? void 0 : s.id,
            label: s != null && s.name ? `${s.name}` : "",
        })),
        j = (s) => {
            g("parent_id", s == null ? void 0 : s.value);
        },
        [o, d] = c.useState(
            r != null && r.thumbnail
                ? `/storage/category/${r == null ? void 0 : r.thumbnail}`
                : "/assets/images/user-profile.jpeg"
        ),
        f = (s) => {
            const t = s.target.files[0];
            t && (p(!0), d(URL.createObjectURL(t)));
        };
    function b() {
        d(null), u({ thumbnail: "" });
    }
    function v(s) {
        N.post("/admin/category/update", s);
    }
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className:
                    "panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",
                children: [
                    e.jsx("div", {
                        className:
                            "rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",
                        children: e.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-3.5 w-3.5",
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
                    e.jsxs("ul", {
                        className: "flex space-x-2 rtl:space-x-reverse",
                        children: [
                            e.jsx("li", {
                                children: e.jsx(C, {
                                    href: "#",
                                    className: "text-primary hover:underline",
                                    children: "Category",
                                }),
                            }),
                            e.jsx("li", {
                                className:
                                    "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",
                                children: e.jsx("span", { children: "Edit" }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",
                children: e.jsxs("div", {
                    className: "panel",
                    id: "forms_grid",
                    children: [
                        e.jsx("div", {
                            className: "flex items-center justify-between mb-5",
                            children: e.jsx("h5", {
                                className:
                                    "font-semibold text-lg dark:text-white-light",
                                children: "Category Add Form",
                            }),
                        }),
                        e.jsx("div", {
                            className: "mb-5",
                            children: e.jsxs("form", {
                                className: "space-y-5",
                                onSubmit: x(v),
                                method: "post",
                                children: [
                                    e.jsxs("div", {
                                        className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            e.jsx("input", {
                                                type: "hidden",
                                                ...a("id"),
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("label", {
                                                        children: "Name",
                                                    }),
                                                    e.jsx("input", {
                                                        ...a("name", {
                                                            required:
                                                                "Category Name Is required",
                                                        }),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder:
                                                            "Enter Category Name",
                                                    }),
                                                    i.name &&
                                                        e.jsx("p", {
                                                            className:
                                                                "text-red-600 pt-2",
                                                            children:
                                                                i.name.message,
                                                        }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("label", {
                                                        children: "Slug",
                                                    }),
                                                    e.jsx("input", {
                                                        ...a("slug"),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder:
                                                            "Enter Category Slug",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className:
                                            "grid grid-cols-1 md:grid-cols-4 gap-5",
                                        children: [
                                            e.jsxs("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    e.jsx("label", {
                                                        children:
                                                            "Parent Category",
                                                    }),
                                                    e.jsx(L, {
                                                        control: h,
                                                        name: "parent_id",
                                                        render: ({
                                                            field: s,
                                                        }) =>
                                                            e.jsx(S, {
                                                                placeholder:
                                                                    "Select an option",
                                                                options: n,
                                                                value: n.find(
                                                                    (t) =>
                                                                        t.value ===
                                                                        s.value
                                                                ),
                                                                onChange: j,
                                                            }),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("label", {
                                                        children: "Thumbnail",
                                                    }),
                                                    e.jsx("input", {
                                                        type: "file",
                                                        className: "form-input",
                                                        ...a("thumbnail"),
                                                        onChange: f,
                                                    }),
                                                ],
                                            }),
                                            e.jsx(e.Fragment, {
                                                children:
                                                    o &&
                                                    e.jsxs("div", {
                                                        style: {
                                                            position:
                                                                "relative",
                                                        },
                                                        children: [
                                                            e.jsx("img", {
                                                                className:
                                                                    "rounded-lg max-w-[100px]",
                                                                src: o,
                                                                alt: "Selected Avatar",
                                                            }),
                                                            (r == null
                                                                ? void 0
                                                                : r.thumbnail) &&
                                                                m &&
                                                                e.jsx("span", {
                                                                    onClick: b,
                                                                    className:
                                                                        "absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",
                                                                    children:
                                                                        e.jsxs(
                                                                            "svg",
                                                                            {
                                                                                width: "40",
                                                                                height: "40",
                                                                                viewBox:
                                                                                    "0 0 24 24",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className:
                                                                                    "w-6 h-6",
                                                                                children:
                                                                                    [
                                                                                        e.jsx(
                                                                                            "circle",
                                                                                            {
                                                                                                opacity:
                                                                                                    "0.5",
                                                                                                cx: "12",
                                                                                                cy: "12",
                                                                                                r: "10",
                                                                                                stroke: "currentColor",
                                                                                                strokeWidth:
                                                                                                    "1.5",
                                                                                            }
                                                                                        ),
                                                                                        e.jsx(
                                                                                            "path",
                                                                                            {
                                                                                                d: "M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",
                                                                                                stroke: "currentColor",
                                                                                                strokeWidth:
                                                                                                    "1.5",
                                                                                                strokeLinecap:
                                                                                                    "round",
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                }),
                                                        ],
                                                    }),
                                            }),
                                        ],
                                    }),
                                    e.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary !mt-6",
                                        children: "Submit",
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
_.layout = (l) => e.jsx(w, { children: l, title: "X || Edit" });
export { _ as default };
