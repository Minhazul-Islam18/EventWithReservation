import { q as N, r as f, j as e, a as b, y as v } from "./app-d6cbffa8.js";
import y from "./Mainlayout-39be0ce6.js";
import { S as w } from "./react-select.esm-8fb60c45.js";
import { R as C } from "./quill.snow-9910b5b5.js";
import { u as k, C as _ } from "./index.esm-b3c0788f.js";
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
function S() {
    const { blog_categories: t } = N().props,
        {
            control: n,
            register: a,
            handleSubmit: o,
            setValue: i,
            reset: E,
            formState: { errors: l },
            watch: x,
        } = k(),
        c = t.map((s) => ({
            value: s == null ? void 0 : s.id,
            label: s != null && s.name ? `${s.name}` : "",
        })),
        m = (s) => {
            i("blog_category_id", s == null ? void 0 : s.value);
        },
        h = x("blog_details", ""),
        p = (s) => {
            i("blog_details", s);
        },
        [r, g] = f.useState(!1),
        d = () => {
            g(!r);
        };
    function j(s) {
        console.log(s), v.post("/admin/blog-post/store", s);
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
                                children: e.jsx(b, {
                                    href: "#",
                                    className: "text-primary hover:underline",
                                    children: "Blog Post",
                                }),
                            }),
                            e.jsx("li", {
                                className:
                                    "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",
                                children: e.jsx("span", { children: "Add" }),
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
                                children: "Add New Post",
                            }),
                        }),
                        e.jsx("div", {
                            className: "mb-5",
                            children: e.jsxs("form", {
                                className: "space-y-5",
                                onSubmit: o(j),
                                method: "post",
                                children: [
                                    e.jsxs("div", {
                                        className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-4 ",
                                        children: [
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsxs("label", {
                                                        children: [
                                                            "Category ",
                                                            e.jsx("span", {
                                                                className:
                                                                    "text-danger",
                                                                children: "*",
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(_, {
                                                        control: n,
                                                        name: "blog_category_id",
                                                        render: ({
                                                            field: s,
                                                        }) =>
                                                            e.jsx(w, {
                                                                options: c,
                                                                value: c.find(
                                                                    (u) =>
                                                                        u.value ===
                                                                        s.value
                                                                ),
                                                                onChange: m,
                                                                placeholder:
                                                                    "Select Category",
                                                            }),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsxs("label", {
                                                        children: [
                                                            " Title ",
                                                            e.jsx("span", {
                                                                className:
                                                                    "text-danger",
                                                                children: "*",
                                                            }),
                                                            " ",
                                                        ],
                                                    }),
                                                    e.jsx("input", {
                                                        ...a("name", {
                                                            required:
                                                                "Title Is required",
                                                        }),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder: "Title",
                                                    }),
                                                    l.title &&
                                                        e.jsx("p", {
                                                            className:
                                                                "text-red-600 pt-2",
                                                            children:
                                                                l.title.message,
                                                        }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsxs("label", {
                                                        children: [
                                                            " Tags ",
                                                            e.jsx("span", {
                                                                className:
                                                                    "text-danger",
                                                                children: "*",
                                                            }),
                                                            " ",
                                                        ],
                                                    }),
                                                    e.jsx("input", {
                                                        ...a("tag", {
                                                            required:
                                                                "Tag Is required",
                                                        }),
                                                        type: "text",
                                                        className: "form-input",
                                                    }),
                                                    l.tag &&
                                                        e.jsx("p", {
                                                            className:
                                                                "text-red-600 pt-2",
                                                            children:
                                                                l.tag.message,
                                                        }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsxs("label", {
                                                        children: [
                                                            " Image ",
                                                            e.jsx("span", {
                                                                className:
                                                                    "text-danger",
                                                                children: "*",
                                                            }),
                                                            " ",
                                                        ],
                                                    }),
                                                    e.jsx("input", {
                                                        type: "file",
                                                        className: "form-input",
                                                        ...a("thumbnail"),
                                                    }),
                                                    l.tag &&
                                                        e.jsx("p", {
                                                            className:
                                                                "text-red-600 pt-2",
                                                            children:
                                                                l.tag.message,
                                                        }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("div", {
                                                        children: e.jsxs(
                                                            "label",
                                                            {
                                                                className:
                                                                    "inline-flex",
                                                                children: [
                                                                    e.jsx(
                                                                        "input",
                                                                        {
                                                                            ...a(
                                                                                "allow_Blog_SEO"
                                                                            ),
                                                                            type: "checkbox",
                                                                            checked:
                                                                                r,
                                                                            className:
                                                                                "form-checkbox text-dark rounded-full",
                                                                            onChange:
                                                                                d,
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        "span",
                                                                        {
                                                                            children:
                                                                                "   Allow Blog SEO",
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                    r &&
                                                        e.jsxs("div", {
                                                            className:
                                                                "flex flex-col gap-4",
                                                            children: [
                                                                e.jsxs("div", {
                                                                    className:
                                                                        "grid grid-cols-1 sm:grid-cols-1 gap-4",
                                                                    children: [
                                                                        e.jsxs(
                                                                            "label",
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        "Meta Tags",
                                                                                        e.jsx(
                                                                                            "span",
                                                                                            {
                                                                                                children:
                                                                                                    "*",
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                        e.jsx(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "flex items-center gap-2",
                                                                                children:
                                                                                    e.jsx(
                                                                                        "input",
                                                                                        {
                                                                                            ...a(
                                                                                                "meta_keywords"
                                                                                            ),
                                                                                            type: "text",
                                                                                            className:
                                                                                                "form-input",
                                                                                            placeholder:
                                                                                                "pant,shirt,watch,glass",
                                                                                        }
                                                                                    ),
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                e.jsxs("div", {
                                                                    className:
                                                                        "grid grid-cols-1 sm:grid-cols-1 gap-4",
                                                                    children: [
                                                                        e.jsxs(
                                                                            "label",
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        "Meta Description",
                                                                                        e.jsx(
                                                                                            "span",
                                                                                            {
                                                                                                children:
                                                                                                    "*",
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                        e.jsx(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "flex items-center gap-2",
                                                                                children:
                                                                                    e.jsx(
                                                                                        "textarea",
                                                                                        {
                                                                                            ...a(
                                                                                                "meta_description"
                                                                                            ),
                                                                                            className:
                                                                                                "form-input",
                                                                                            placeholder:
                                                                                                "Write SEO description",
                                                                                        }
                                                                                    ),
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsx("div", {
                                        className:
                                            "grid grid-cols-1 sm:grid-cols-1 gap-4 ",
                                        children: e.jsx("div", {
                                            children: e.jsx(C, {
                                                value: h,
                                                onChange: (s) => p(s),
                                                theme: "snow",
                                            }),
                                        }),
                                    }),
                                    e.jsx("div", {
                                        children: e.jsx("div", {
                                            children: e.jsxs("label", {
                                                className: "inline-flex",
                                                children: [
                                                    e.jsx("input", {
                                                        ...a("allow_seo"),
                                                        type: "checkbox",
                                                        checked: r,
                                                        className:
                                                            "form-checkbox text-dark rounded-full",
                                                        onChange: d,
                                                    }),
                                                    e.jsx("span", {
                                                        children:
                                                            "  Allow Blog SEO",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    r &&
                                        e.jsxs("div", {
                                            className:
                                                "grid grid-cols-1 sm:grid-cols-1 gap-4 ",
                                            children: [
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsxs("label", {
                                                            children: [
                                                                " Meta Keywords ",
                                                                e.jsx("span", {
                                                                    className:
                                                                        "text-danger",
                                                                    children:
                                                                        "*",
                                                                }),
                                                                " ",
                                                            ],
                                                        }),
                                                        e.jsx("input", {
                                                            ...a(
                                                                "meta_keywords"
                                                            ),
                                                            type: "text",
                                                            className:
                                                                "form-input",
                                                            placeholder:
                                                                "pant,shirt,watch,glass",
                                                        }),
                                                        l.tag &&
                                                            e.jsx("p", {
                                                                className:
                                                                    "text-red-600 pt-2",
                                                                children:
                                                                    l.tag
                                                                        .message,
                                                            }),
                                                    ],
                                                }),
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsxs("label", {
                                                            children: [
                                                                " Meta Description ",
                                                                e.jsx("span", {
                                                                    className:
                                                                        "text-danger",
                                                                    children:
                                                                        "*",
                                                                }),
                                                                " ",
                                                            ],
                                                        }),
                                                        e.jsx("textarea", {
                                                            ...a(
                                                                "meta_description"
                                                            ),
                                                            className:
                                                                "form-input",
                                                            placeholder:
                                                                "Write SEO description",
                                                        }),
                                                        l.tag &&
                                                            e.jsx("p", {
                                                                className:
                                                                    "text-red-600 pt-2",
                                                                children:
                                                                    l.tag
                                                                        .message,
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    e.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary !mt-6",
                                        children: "Create Post",
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
S.layout = (t) => e.jsx(y, { children: t, title: "X || Add" });
export { S as default };
