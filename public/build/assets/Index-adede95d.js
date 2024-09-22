import { q as x, r as a, j as e, a as i } from "./app-d6cbffa8.js";
import h from "./Mainlayout-39be0ce6.js";
import p from "./DeleteModal-3634c522.js";
import "./ThemeConfig-49c8c6b2.js";
import "./Footer-e5f7193f.js";
import "./Header-367bdad1.js";
import "./Dropdown-642c7f60.js";
import "./nonIterableRest-bd5956ca.js";
import "./Sidebar-bb28e48f.js";
import "./FlashMessage-bbbb926d.js";
import "./sweetalert2.all-57f2eec1.js";
import "./transition-cbba3f9b.js";
function j() {
    const { backups: s, base_url: l } = x().props,
        [n, r] = a.useState(!1),
        [d, c] = a.useState(null);
    function o(t) {
        c(t), r(!0);
    }
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className:
                    "panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",
                children: [
                    e.jsx("div", {
                        className:
                            "rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",
                        children: e.jsxs("svg", {
                            width: "27",
                            height: "27",
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
                            children: e.jsx(i, {
                                href: "#",
                                className:
                                    "text-[#FF6243] hover:underline text-base",
                                children: "Backup File and Database",
                            }),
                        }),
                    }),
                    e.jsx("div", {
                        className: "ml-auto",
                        children: e.jsxs(i, {
                            href: `${l}/admin/backup/save`,
                            method: "get",
                            className:
                                "flex items-center px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",
                            children: [
                                e.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24px",
                                    height: "24px",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    className:
                                        "h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2",
                                    children: [
                                        e.jsx("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19",
                                        }),
                                        e.jsx("line", {
                                            x1: "5",
                                            y1: "12",
                                            x2: "19",
                                            y2: "12",
                                        }),
                                    ],
                                }),
                                "Backup",
                            ],
                        }),
                    }),
                ],
            }),
            e.jsx("div", {
                className: "pt-5",
                children: e.jsx("div", {
                    className: "grid lg:grid-cols-1 grid-cols-1 gap-6",
                    children: e.jsx("div", {
                        className: "panel h-full w-full",
                        children: e.jsx("div", {
                            className: "table-responsive custom-scroll",
                            children: e.jsxs("table", {
                                children: [
                                    e.jsx("thead", {
                                        children: e.jsxs("tr", {
                                            children: [
                                                e.jsx("th", {
                                                    className:
                                                        "ltr:rounded-l-md rtl:rounded-r-md",
                                                    children: "File",
                                                }),
                                                e.jsx("th", {
                                                    className:
                                                        "ltr:rounded-l-md rtl:rounded-r-md",
                                                    children: "Size",
                                                }),
                                                e.jsx("th", {
                                                    className:
                                                        "ltr:rounded-l-md rtl:rounded-r-md",
                                                    children: "Date",
                                                }),
                                                e.jsx("th", {
                                                    className:
                                                        "ltr:rounded-l-md rtl:rounded-r-md",
                                                    children: "Age",
                                                }),
                                                e.jsx("th", {
                                                    className:
                                                        "ltr:rounded-l-md rtl:rounded-r-md",
                                                    children: "Action",
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx("tbody", {
                                        children:
                                            s == null
                                                ? void 0
                                                : s.map((t, m) =>
                                                      e.jsxs(
                                                          "tr",
                                                          {
                                                              className:
                                                                  "text-white-dark hover:text-black dark:hover:text-white-light/90 group",
                                                              children: [
                                                                  e.jsx("td", {
                                                                      className:
                                                                          "min-w-[150px] text-black dark:text-white",
                                                                      children:
                                                                          e.jsx(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center",
                                                                                  children:
                                                                                      e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                              className:
                                                                                                  "whitespace-nowrap",
                                                                                              children:
                                                                                                  t.file_name,
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx("td", {
                                                                      className:
                                                                          "min-w-[150px] text-black dark:text-white",
                                                                      children:
                                                                          e.jsx(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center",
                                                                                  children:
                                                                                      e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                              className:
                                                                                                  "whitespace-nowrap",
                                                                                              children:
                                                                                                  t.file_size,
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx("td", {
                                                                      className:
                                                                          "min-w-[150px] text-black dark:text-white",
                                                                      children:
                                                                          e.jsx(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center",
                                                                                  children:
                                                                                      e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                              className:
                                                                                                  "whitespace-nowrap",
                                                                                              children:
                                                                                                  t.date_created,
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx("td", {
                                                                      className:
                                                                          "min-w-[150px] text-black dark:text-white",
                                                                      children:
                                                                          e.jsx(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center",
                                                                                  children:
                                                                                      e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                              className:
                                                                                                  "whitespace-nowrap",
                                                                                              children:
                                                                                                  t.date_ago,
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx("td", {
                                                                      className:
                                                                          "min-w-[150px] text-black dark:text-white",
                                                                      children:
                                                                          e.jsxs(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center gap-2",
                                                                                  children:
                                                                                      [
                                                                                          e.jsx(
                                                                                              "a",
                                                                                              {
                                                                                                  href:
                                                                                                      `${l}/admin/backup/download/` +
                                                                                                      t.file_name,
                                                                                                  method: "get",
                                                                                                  className:
                                                                                                      "btn btn-sm btn-outline-primary",
                                                                                                  children:
                                                                                                      "Download",
                                                                                              }
                                                                                          ),
                                                                                          e.jsx(
                                                                                              "button",
                                                                                              {
                                                                                                  onClick:
                                                                                                      () =>
                                                                                                          o(
                                                                                                              t.file_name
                                                                                                          ),
                                                                                                  className:
                                                                                                      "btn btn-sm btn-outline-danger",
                                                                                                  children:
                                                                                                      "Delete",
                                                                                              }
                                                                                          ),
                                                                                      ],
                                                                              }
                                                                          ),
                                                                  }),
                                                              ],
                                                          },
                                                          m
                                                      )
                                                  ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            e.jsx(p, {
                isDeleteNoteModal: n,
                setIsDeleteNoteModal: r,
                fileToDelete: d,
                name: "Backup",
                route: "backup",
            }),
        ],
    });
}
j.layout = (s) => e.jsx(h, { children: s, title: "X || BackUp" });
export { j as default };
