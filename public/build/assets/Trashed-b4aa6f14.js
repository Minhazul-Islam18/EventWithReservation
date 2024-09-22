import { q as A, r as a, j as e, a as h, y as B } from "./app-d6cbffa8.js";
import G from "./Mainlayout-39be0ce6.js";
import { u as U, M as J } from "./mantine-react-table.esm-0ea93dbf.js";
import O from "./ParmanentDeleteModal-ffacfc63.js";
import "./ThemeConfig-49c8c6b2.js";
import "./Footer-e5f7193f.js";
import "./Header-367bdad1.js";
import "./Dropdown-642c7f60.js";
import "./nonIterableRest-bd5956ca.js";
import "./Sidebar-bb28e48f.js";
import "./FlashMessage-bbbb926d.js";
import "./sweetalert2.all-57f2eec1.js";
import "./Table-371db25b.js";
import "./floating-ui.dom-0c6ed2df.js";
import "./emotion-react.browser.esm-1c15f29c.js";
import "./transition-cbba3f9b.js";
function W() {
    const { data: o, meta: u, base_url: l } = A().props,
        [g, b] = a.useState(!1),
        [j, p] = a.useState(!o || o.length === 0),
        [C, x] = a.useState(!1),
        [S, N] = a.useState(u ? u.totalRowCount : 0),
        [i, v] = a.useState([]),
        [c, F] = a.useState(""),
        [d, D] = a.useState([]),
        [r, P] = a.useState({ pageIndex: 0, pageSize: 10 }),
        [R, f] = a.useState(!1),
        [T, M] = a.useState(null),
        [m, I] = a.useState(o || []);
    a.useEffect(() => {
        (async () => {
            m.length ? x(!0) : p(!0);
            const s = new URL("/admin/category/trashed/data", l);
            s.searchParams.set("start", `${r.pageIndex * r.pageSize}`),
                s.searchParams.set("size", `${r.pageSize}`),
                s.searchParams.set("filters", JSON.stringify(i)),
                s.searchParams.set("globalFilter", c ?? ""),
                s.searchParams.set("sorting", JSON.stringify(d ?? []));
            try {
                const n = await fetch(s.href);
                if (!n.ok) throw new Error(`HTTP error! Status: ${n.status}`);
                const w = n.headers.get("content-type");
                if (w && w.includes("application/json")) {
                    const y = await n.json();
                    I(y.data), N(y.meta.totalRowCount);
                } else throw new Error("Response is not JSON");
            } catch (n) {
                b(!0), console.error(n);
            } finally {
                p(!1), x(!1);
            }
        })();
    }, [i, c, r.pageIndex, r.pageSize, d]);
    function k(t) {
        B.get("/admin/category/undo-trashed/" + t);
    }
    function E(t) {
        M(t), f(!0);
    }
    const L = ({ data: t }) =>
            e.jsx("div", {
                children: e.jsx("img", {
                    src: t
                        ? `/storage/category/${t}`
                        : "/assets/images/user-profile.jpeg",
                    alt: "image",
                    className: "h-[40px] w-[40px] rounded-full",
                }),
            }),
        $ = a.useMemo(
            () => [
                {
                    header: "Thumbnail",
                    Cell: ({ row: t }) => {
                        var s;
                        return e.jsx(L, {
                            data:
                                (s = t.original) == null ? void 0 : s.thumbnail,
                        });
                    },
                },
                { accessorKey: "name", header: " Category Name" },
                { accessorKey: "slug", header: " Category Slug" },
                {
                    header: "Actions",
                    Cell: ({ row: t }) =>
                        e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                e.jsx("button", {
                                    onClick: () => k(t.id),
                                    className: "btn btn-sm btn-outline-primary",
                                    children: "Undo",
                                }),
                                e.jsx("button", {
                                    onClick: () => E(t.id),
                                    className: "btn btn-sm btn-outline-danger",
                                    children: "Delete",
                                }),
                            ],
                        }),
                },
            ],
            []
        ),
        z = U({
            columns: $,
            data: m,
            paginationDisplayMode: "pages",
            enableRowSelection: !0,
            enableDensityToggle: !1,
            getRowId: (t) => t.id,
            initialState: {
                showColumnFilters: !1,
                showGlobalFilter: !0,
                density: "compact",
            },
            positionGlobalFilter: "left",
            mantineSearchTextInputProps: {
                placeholder: `Search ${m.length} rows`,
                sx: { minWidth: "300px" },
                variant: "filled",
            },
            manualFiltering: !0,
            manualPagination: !0,
            manualSorting: !0,
            rowCount: S,
            onColumnFiltersChange: v,
            onGlobalFilterChange: F,
            onPaginationChange: P,
            onSortingChange: D,
            state: {
                columnFilters: i,
                globalFilter: c,
                isLoading: j,
                pagination: r,
                showAlertBanner: g,
                showProgressBars: C,
                sorting: d,
            },
            mantineToolbarAlertBannerProps: g
                ? { color: "red", children: "Error loading data" }
                : void 0,
        });
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
                    e.jsxs("ul", {
                        className: "flex space-x-2 rtl:space-x-reverse",
                        children: [
                            e.jsx("li", {
                                children: e.jsx(h, {
                                    href: "#",
                                    className:
                                        "text-[#FF6243] hover:underline text-base",
                                    children: "Category",
                                }),
                            }),
                            e.jsx("li", {
                                className:
                                    "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",
                                children: e.jsx("span", {
                                    children: "Trashed",
                                }),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className:
                            "ml-auto flex justify-center items-center gap-3",
                        children: [
                            e.jsx(h, {
                                href: `${l}/admin/category/restore-all`,
                                method: "get",
                                className:
                                    "flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",
                                children: "Undo All",
                            }),
                            e.jsx(h, {
                                href: `${l}/admin/category/permanent-delete-all`,
                                method: "get",
                                className:
                                    "flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",
                                children: "Delete All",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("br", {}),
            e.jsx(J, { table: z }),
            e.jsx(O, {
                isDeleteNoteModal: R,
                setIsDeleteNoteModal: f,
                fileToDelete: T,
                name: "Category",
                route: "category/permanent-delete",
            }),
        ],
    });
}
W.layout = (o) => e.jsx(G, { children: o, title: "X || Trashed" });
export { W as default };
