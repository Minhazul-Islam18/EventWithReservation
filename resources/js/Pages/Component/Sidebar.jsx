import React, { useEffect, useState } from "react";
import { themeConfig } from "../Store/ThemeConfig";
import { Link, usePage } from "@inertiajs/react";
import AnimateHeight from "react-animate-height";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTranslation } from "react-i18next";
import { IconCalendarClock, IconChevronRight } from "@tabler/icons-react";

function Sidebar({ handleToggleSidebar }) {
    const { base_url, permissions } = usePage().props;
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const [currentMenu, setCurrentMenu] = useState("");
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const semidark = themeConfig.semidark;
    const { t } = useTranslation();
    const toggleMenu = (value) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? "" : value;
        });
    };
    useEffect(() => {
        const selector = document.querySelector(
            '.sidebar ul a[href="' + window.location.pathname + '"]'
        );
        if (selector) {
            selector.classList.add("active");
            const ul = selector.closest("ul.sub-menu");
            if (ul) {
                let ele =
                    ul.closest("li.menu").querySelectorAll(".nav-link") || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            setToggleSidebar(!toggleSidebar);
        }
    }, []);

    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
                    semidark ? "text-white-dark" : ""
                }`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <Link
                            href="/"
                            className="main-logo flex items-center shrink-0"
                        >
                            <img
                                className="w-8 ml-[5px] flex-none"
                                src="/assets/images/logo.svg"
                                alt="logo"
                            />
                            <span className="text-xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                                {t("Event reservation")}
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="11collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={handleToggleSidebar}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 m-auto"
                            >
                                <path
                                    d="M13 19L7 12L13 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    opacity="0.5"
                                    d="M16.9998 19L10.9998 12L16.9998 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative verticlescroll scrollwidth-0">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <div className="mt-2 mb-2"></div>
                            <li className="nav-item">
                                <ul>
                                    <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "events"
                                                    ? "active"
                                                    : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("events")}
                                        >
                                            <div className="flex items-center">
                                                <IconCalendarClock
                                                    height={20}
                                                    width={20}
                                                />

                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    {t("Events")}
                                                </span>
                                            </div>

                                            <div
                                                className={
                                                    currentMenu === "events"
                                                        ? "rotate-90"
                                                        : "rtl:rotate-180"
                                                }
                                            >
                                                <IconChevronRight />
                                            </div>
                                        </button>

                                        <AnimateHeight
                                            duration={300}
                                            height={
                                                currentMenu === "events"
                                                    ? "auto"
                                                    : 0
                                            }
                                        >
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link
                                                        href={`${base_url}/admin/events/create`}
                                                    >
                                                        {t("Create new Event")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={`${base_url}/admin/events`}
                                                    >
                                                        {t("All Events")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
