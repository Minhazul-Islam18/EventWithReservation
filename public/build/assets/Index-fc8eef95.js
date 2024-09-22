import { q as F, r as s, j as e, a as n, y as _ } from "./app-d6cbffa8.js";
import D from "./Mainlayout-39be0ce6.js";
import { u as R, M as z } from "./mantine-react-table.esm-0ea93dbf.js";
import A from "./DeleteModal-3634c522.js";
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
function T() {
    const { data: a, meta: l, base_url: c } = F().props,
        [d, P] = s.useState(!1),
        [f, g] = s.useState(!a || a.length === 0),
        [b, B] = s.useState(!1),
        [x, K] = s.useState(l ? l.totalRowCount : 0),
        [u, C] = s.useState([]),
        [m, w] = s.useState(""),
        [p, j] = s.useState([]),
        [r, y] = s.useState({ pageIndex: 0, pageSize: 10 }),
        [v, h] = s.useState(!1),
        [k, S] = s.useState(null),
        [o, W] = s.useState(
            a || [
                {
                    id: "195",
                    name: "As an administrator we need to validate that the bulk subscriber upload numbers correspond to the tenant's country",
                    description: "",
                    priority: "1",
                    dateadded: "2024-02-15 17:59:57",
                    startdate: "2024-02-15",
                    duedate: "2024-03-10",
                    datefinished: null,
                    addedfrom: "36",
                    is_added_from_contact: "0",
                    status: "4",
                    recurring_type: null,
                    repeat_every: null,
                    recurring: "0",
                    is_recurring_from: null,
                    cycles: "0",
                    total_cycles: "0",
                    custom_recurring: "0",
                    last_recurring_date: null,
                    rel_id: "15",
                    rel_type: "project",
                    is_public: "0",
                    billable: "1",
                    billed: "0",
                    invoice_id: "0",
                    hourly_rate: "0.00",
                    milestone: "33",
                    kanban_order: "40",
                    milestone_order: "4",
                    visible_to_client: "0",
                    deadline_notified: "0",
                    comments: [
                        {
                            id: "142",
                            dateadded: "2024-03-01 14:45:06",
                            content: `<p>You should take into account the following case:<br>. When a person logs into the platform, that user is associated with a tenant and that tenant is associated with a single country.</p>
<p>. example<br>1. I am from Ecuador, I am associated with the Keos tenant and the Keos tenant with the country of Ecuador.<br>2. a user from Ecuador can only send messages or campaigns to people from Ecuador<br>3. The user can send messages to Ecuador, all the phone numbers he registers should only be Ecuador, that country is obtained from Keos Control where the country can be consulted according to the tenant,<br>4. According to the country, it must be validated that all the numbers that the person uploads subscribers manually or import in bulk, all those numbers must correspond to Ecuador.<br>5. If it were another user from another country, for example Colombia, and the tenant is associated with Colombia, all numbers must be associated with Colombia.</p>`,
                            firstname: "Mari Cruz",
                            lastname: "Sandoval",
                            staffid: "36",
                            contact_id: "0",
                            file_id: "0",
                            staff_full_name: "Mari Cruz Sandoval",
                            attachments: [],
                        },
                    ],
                    assignees: [
                        {
                            id: "371",
                            assigneeid: "48",
                            assigned_from: "36",
                            firstname: "Minhazul",
                            lastname: "Islam",
                            full_name: "Minhazul Islam",
                            is_assigned_from_contact: "0",
                        },
                    ],
                    assignees_ids: ["48"],
                    followers: [],
                    followers_ids: [],
                    attachments: [],
                    timesheets: [
                        {
                            id: "140",
                            note: null,
                            start_time: "1716766357",
                            end_time: "1716787957",
                            task_id: "195",
                            staff_id: "48",
                            full_name: "Minhazul Islam",
                            time_spent: "21600",
                        },
                    ],
                    checklist_items: [],
                    milestone_name: "Front",
                    project_data: {
                        id: "15",
                        name: "Keos Push",
                        description: "",
                        status: "2",
                        clientid: "73",
                        billing_type: "1",
                        start_date: "2024-02-02",
                        deadline: null,
                        project_created: "2024-02-02",
                        date_finished: null,
                        progress: "21",
                        progress_from_tasks: "1",
                        project_cost: null,
                        project_rate_per_hour: "0.00",
                        estimated_hours: null,
                        addedfrom: "3",
                        contact_notification: "1",
                        notify_contacts: "a:0:{}",
                        shared_vault_entries: [],
                        settings: {
                            available_features:
                                'a:17:{s:16:"project_overview";i:1;s:13:"project_tasks";i:1;s:18:"project_timesheets";i:1;s:18:"project_milestones";i:1;s:13:"project_files";i:1;s:19:"project_discussions";i:1;s:13:"project_gantt";i:1;s:15:"project_tickets";i:1;s:17:"project_contracts";i:1;s:17:"project_proposals";i:1;s:17:"project_estimates";i:1;s:16:"project_invoices";i:1;s:21:"project_subscriptions";i:1;s:16:"project_expenses";i:1;s:20:"project_credit_notes";i:1;s:13:"project_notes";i:1;s:16:"project_activity";i:1;}',
                            view_tasks: "0",
                            create_tasks: "0",
                            edit_tasks: "0",
                            comment_on_tasks: "0",
                            view_task_comments: "0",
                            view_task_attachments: "0",
                            view_task_checklist_items: "0",
                            upload_on_tasks: "0",
                            view_task_total_logged_time: "0",
                            view_finance_overview: "0",
                            upload_files: "0",
                            open_discussions: "0",
                            view_milestones: "0",
                            view_gantt: "0",
                            view_timesheets: "0",
                            view_activity_log: "0",
                            view_team_members: "0",
                            hide_tasks_on_main_tasks_table: "0",
                        },
                        client_data: {
                            userid: "73",
                            company: "KEOS - 724 MEDIA S.A.S",
                            saas_company_id: null,
                            is_preffered: "0",
                            vat: null,
                            phonenumber: "+573188705960",
                            country: "49",
                            city: "",
                            zip: "",
                            state: "",
                            address: "",
                            website: "",
                            datecreated: "2024-02-26 12:44:45",
                            active: "1",
                            leadid: "376",
                            billing_street: "",
                            billing_city: "",
                            billing_state: "",
                            billing_zip: "",
                            billing_country: "49",
                            shipping_street: "",
                            shipping_city: "",
                            shipping_state: "",
                            shipping_zip: "",
                            shipping_country: "0",
                            longitude: null,
                            latitude: null,
                            default_language: "",
                            default_currency: "0",
                            show_primary_contact: "0",
                            is_supplier: "0",
                            stripe_id: null,
                            registration_confirmed: "1",
                            addedfrom: "3",
                            loy_point: "0",
                        },
                    },
                    hide_milestone_from_customer: "0",
                    customfields: [{ label: "Estimate hour", value: "" }],
                },
            ]
        );
    s.useEffect(() => {
        g(!1), console.log(o[0].assignees[0].full_name);
    }, [u, m, r.pageIndex, r.pageSize, p]);
    function M(t) {
        _.get("/admin/category/edit/" + t);
    }
    function L(t) {
        S(t), h(!0);
    }
    function N(t) {
        _.get("/admin/category/status/" + t);
    }
    const E = s.useMemo(
            () => [
                {
                    header: "Task name",
                    Cell: ({ row: t }) => {
                        var i;
                        return e.jsx("span", {
                            children:
                                (i = t.original) == null ? void 0 : i.name,
                        });
                    },
                },
                {
                    accessorKey: "assignees",
                    header: " Assignees",
                    Cell: ({ row: t }) =>
                        e.jsx("span", {
                            children: t.original.assignees
                                .map((i) => i.full_name)
                                .join(", "),
                        }),
                },
                {
                    header: " Status",
                    Cell: ({ row: t }) =>
                        e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: e.jsxs("label", {
                                className: "w-12 h-6 relative",
                                onClick: () => N(t.id),
                                children: [
                                    e.jsx("input", {
                                        defaultChecked: t.original.status === 1,
                                        type: "checkbox",
                                        className:
                                            "custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",
                                        id: "custom_switch_checkbox1",
                                    }),
                                    e.jsx("span", {
                                        className:
                                            "bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300",
                                    }),
                                ],
                            }),
                        }),
                },
                {
                    header: " Actions",
                    Cell: ({ row: t }) =>
                        e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                e.jsx("button", {
                                    onClick: () => M(t.id),
                                    className: "btn btn-sm btn-outline-primary",
                                    children: "Edit",
                                }),
                                e.jsx("button", {
                                    onClick: () => L(t.id),
                                    className: "btn btn-sm btn-outline-danger",
                                    children: "Delete",
                                }),
                            ],
                        }),
                },
            ],
            []
        ),
        I = R({
            columns: E,
            data: o,
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
                placeholder: `Search ${o.length} rows`,
                sx: { minWidth: "300px" },
                variant: "filled",
            },
            manualFiltering: !0,
            manualPagination: !0,
            manualSorting: !0,
            rowCount: x,
            onColumnFiltersChange: C,
            onGlobalFilterChange: w,
            onPaginationChange: y,
            onSortingChange: j,
            state: {
                columnFilters: u,
                globalFilter: m,
                isLoading: f,
                pagination: r,
                showAlertBanner: d,
                showProgressBars: b,
                sorting: p,
            },
            mantineToolbarAlertBannerProps: d
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
                                children: e.jsx(n, {
                                    href: "#",
                                    className:
                                        "text-[#FF6243] hover:underline text-base",
                                    children: "Dashboard",
                                }),
                            }),
                            e.jsx("li", {
                                className:
                                    "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",
                                children: e.jsx("span", {
                                    children: "Category",
                                }),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className:
                            "ml-auto flex justify-center items-center gap-3",
                        children: [
                            e.jsxs(n, {
                                href: `${c}/admin/category/trashed`,
                                method: "get",
                                className:
                                    "flex items-center px-7 py-2 bg-[#4d4d4d] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",
                                children: [
                                    e.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24px",
                                        height: "24px",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className:
                                            "h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2",
                                        children: [
                                            e.jsx("path", {
                                                opacity: "0.5",
                                                d: "M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z",
                                                fill: "currentColor",
                                            }),
                                            e.jsx("path", {
                                                d: "M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z",
                                                fill: "currentColor",
                                            }),
                                            e.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z",
                                                fill: "currentColor",
                                            }),
                                            e.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z",
                                                fill: "currentColor",
                                            }),
                                        ],
                                    }),
                                    "Trash",
                                ],
                            }),
                            e.jsxs(n, {
                                href: `${c}/admin/category/create`,
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
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className:
                                            "h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2 text-white",
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
                                    "Add",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("br", {}),
            e.jsx(z, { table: I }),
            e.jsx(A, {
                isDeleteNoteModal: v,
                setIsDeleteNoteModal: h,
                fileToDelete: k,
                name: "Category",
                route: "category",
            }),
        ],
    });
}
T.layout = (a) => e.jsx(D, { children: a, title: "X || All Category" });
export { T as default };
