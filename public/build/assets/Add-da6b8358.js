import {
    r as I,
    R as ye,
    b as wt,
    q as Tt,
    j as s,
    a as Ct,
    y as Et,
} from "./app-d6cbffa8.js";
import At from "./Mainlayout-39be0ce6.js";
import { a as Ot, c as jt } from "./Dropdown-642c7f60.js";
import { S as St } from "./react-select.esm-8fb60c45.js";
import { u as Dt, C as Lt } from "./index.esm-b3c0788f.js";
import "./ThemeConfig-49c8c6b2.js";
import "./Footer-e5f7193f.js";
import "./Header-367bdad1.js";
import "./nonIterableRest-bd5956ca.js";
import "./Sidebar-bb28e48f.js";
import "./FlashMessage-bbbb926d.js";
import "./sweetalert2.all-57f2eec1.js";
import "./floating-ui.dom-0c6ed2df.js";
import "./emotion-react.browser.esm-1c15f29c.js";
var Nt = "tippy-box",
    Xe = "tippy-content",
    Mt = "tippy-backdrop",
    Je = "tippy-arrow",
    Ze = "tippy-svg-arrow",
    F = { passive: !0, capture: !0 },
    Qe = function () {
        return document.body;
    };
function me(e, n, i) {
    if (Array.isArray(e)) {
        var o = e[n];
        return o ?? (Array.isArray(i) ? i[n] : i);
    }
    return e;
}
function Ce(e, n) {
    var i = {}.toString.call(e);
    return i.indexOf("[object") === 0 && i.indexOf(n + "]") > -1;
}
function et(e, n) {
    return typeof e == "function" ? e.apply(void 0, n) : e;
}
function Pe(e, n) {
    if (n === 0) return e;
    var i;
    return function (o) {
        clearTimeout(i),
            (i = setTimeout(function () {
                e(o);
            }, n));
    };
}
function It(e) {
    return e.split(/\s+/).filter(Boolean);
}
function Y(e) {
    return [].concat(e);
}
function Ue(e, n) {
    e.indexOf(n) === -1 && e.push(n);
}
function kt(e) {
    return e.filter(function (n, i) {
        return e.indexOf(n) === i;
    });
}
function Rt(e) {
    return e.split("-")[0];
}
function se(e) {
    return [].slice.call(e);
}
function Ve(e) {
    return Object.keys(e).reduce(function (n, i) {
        return e[i] !== void 0 && (n[i] = e[i]), n;
    }, {});
}
function J() {
    return document.createElement("div");
}
function ue(e) {
    return ["Element", "Fragment"].some(function (n) {
        return Ce(e, n);
    });
}
function _t(e) {
    return Ce(e, "NodeList");
}
function $t(e) {
    return Ce(e, "MouseEvent");
}
function Bt(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
}
function Pt(e) {
    return ue(e)
        ? [e]
        : _t(e)
        ? se(e)
        : Array.isArray(e)
        ? e
        : se(document.querySelectorAll(e));
}
function ve(e, n) {
    e.forEach(function (i) {
        i && (i.style.transitionDuration = n + "ms");
    });
}
function Fe(e, n) {
    e.forEach(function (i) {
        i && i.setAttribute("data-state", n);
    });
}
function Ut(e) {
    var n,
        i = Y(e),
        o = i[0];
    return o != null && (n = o.ownerDocument) != null && n.body
        ? o.ownerDocument
        : document;
}
function Vt(e, n) {
    var i = n.clientX,
        o = n.clientY;
    return e.every(function (p) {
        var l = p.popperRect,
            u = p.popperState,
            b = p.props,
            d = b.interactiveBorder,
            T = Rt(u.placement),
            y = u.modifiersData.offset;
        if (!y) return !0;
        var k = T === "bottom" ? y.top.y : 0,
            B = T === "top" ? y.bottom.y : 0,
            R = T === "right" ? y.left.x : 0,
            v = T === "left" ? y.right.x : 0,
            A = l.top - o + k > d,
            H = o - l.bottom - B > d,
            G = l.left - i + R > d,
            W = i - l.right - v > d;
        return A || H || G || W;
    });
}
function he(e, n, i) {
    var o = n + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (p) {
        e[o](p, i);
    });
}
function He(e, n) {
    for (var i = n; i; ) {
        var o;
        if (e.contains(i)) return !0;
        i =
            i.getRootNode == null || (o = i.getRootNode()) == null
                ? void 0
                : o.host;
    }
    return !1;
}
var M = { isTouch: !1 },
    We = 0;
function Ft() {
    M.isTouch ||
        ((M.isTouch = !0),
        window.performance && document.addEventListener("mousemove", tt));
}
function tt() {
    var e = performance.now();
    e - We < 20 &&
        ((M.isTouch = !1), document.removeEventListener("mousemove", tt)),
        (We = e);
}
function Ht() {
    var e = document.activeElement;
    if (Bt(e)) {
        var n = e._tippy;
        e.blur && !n.state.isVisible && e.blur();
    }
}
function Wt() {
    document.addEventListener("touchstart", Ft, F),
        window.addEventListener("blur", Ht);
}
var qt = typeof window < "u" && typeof document < "u",
    zt = qt ? !!window.msCrypto : !1,
    Kt = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
    },
    Yt = {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999,
    },
    D = Object.assign(
        {
            appendTo: Qe,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
        },
        Kt,
        Yt
    ),
    Gt = Object.keys(D),
    Xt = function (n) {
        var i = Object.keys(n);
        i.forEach(function (o) {
            D[o] = n[o];
        });
    };
function nt(e) {
    var n = e.plugins || [],
        i = n.reduce(function (o, p) {
            var l = p.name,
                u = p.defaultValue;
            if (l) {
                var b;
                o[l] = e[l] !== void 0 ? e[l] : (b = D[l]) != null ? b : u;
            }
            return o;
        }, {});
    return Object.assign({}, e, i);
}
function Jt(e, n) {
    var i = n ? Object.keys(nt(Object.assign({}, D, { plugins: n }))) : Gt,
        o = i.reduce(function (p, l) {
            var u = (e.getAttribute("data-tippy-" + l) || "").trim();
            if (!u) return p;
            if (l === "content") p[l] = u;
            else
                try {
                    p[l] = JSON.parse(u);
                } catch {
                    p[l] = u;
                }
            return p;
        }, {});
    return o;
}
function qe(e, n) {
    var i = Object.assign(
        {},
        n,
        { content: et(n.content, [e]) },
        n.ignoreAttributes ? {} : Jt(e, n.plugins)
    );
    return (
        (i.aria = Object.assign({}, D.aria, i.aria)),
        (i.aria = {
            expanded:
                i.aria.expanded === "auto" ? n.interactive : i.aria.expanded,
            content:
                i.aria.content === "auto"
                    ? n.interactive
                        ? null
                        : "describedby"
                    : i.aria.content,
        }),
        i
    );
}
var Zt = function () {
    return "innerHTML";
};
function xe(e, n) {
    e[Zt()] = n;
}
function ze(e) {
    var n = J();
    return (
        e === !0
            ? (n.className = Je)
            : ((n.className = Ze), ue(e) ? n.appendChild(e) : xe(n, e)),
        n
    );
}
function Ke(e, n) {
    ue(n.content)
        ? (xe(e, ""), e.appendChild(n.content))
        : typeof n.content != "function" &&
          (n.allowHTML ? xe(e, n.content) : (e.textContent = n.content));
}
function we(e) {
    var n = e.firstElementChild,
        i = se(n.children);
    return {
        box: n,
        content: i.find(function (o) {
            return o.classList.contains(Xe);
        }),
        arrow: i.find(function (o) {
            return o.classList.contains(Je) || o.classList.contains(Ze);
        }),
        backdrop: i.find(function (o) {
            return o.classList.contains(Mt);
        }),
    };
}
function rt(e) {
    var n = J(),
        i = J();
    (i.className = Nt),
        i.setAttribute("data-state", "hidden"),
        i.setAttribute("tabindex", "-1");
    var o = J();
    (o.className = Xe),
        o.setAttribute("data-state", "hidden"),
        Ke(o, e.props),
        n.appendChild(i),
        i.appendChild(o),
        p(e.props, e.props);
    function p(l, u) {
        var b = we(n),
            d = b.box,
            T = b.content,
            y = b.arrow;
        u.theme
            ? d.setAttribute("data-theme", u.theme)
            : d.removeAttribute("data-theme"),
            typeof u.animation == "string"
                ? d.setAttribute("data-animation", u.animation)
                : d.removeAttribute("data-animation"),
            u.inertia
                ? d.setAttribute("data-inertia", "")
                : d.removeAttribute("data-inertia"),
            (d.style.maxWidth =
                typeof u.maxWidth == "number" ? u.maxWidth + "px" : u.maxWidth),
            u.role ? d.setAttribute("role", u.role) : d.removeAttribute("role"),
            (l.content !== u.content || l.allowHTML !== u.allowHTML) &&
                Ke(T, e.props),
            u.arrow
                ? y
                    ? l.arrow !== u.arrow &&
                      (d.removeChild(y), d.appendChild(ze(u.arrow)))
                    : d.appendChild(ze(u.arrow))
                : y && d.removeChild(y);
    }
    return { popper: n, onUpdate: p };
}
rt.$$tippy = !0;
var Qt = 1,
    ae = [],
    ge = [];
function en(e, n) {
    var i = qe(e, Object.assign({}, D, nt(Ve(n)))),
        o,
        p,
        l,
        u = !1,
        b = !1,
        d = !1,
        T = !1,
        y,
        k,
        B,
        R = [],
        v = Pe(Ne, i.interactiveDebounce),
        A,
        H = Qt++,
        G = null,
        W = kt(i.plugins),
        Q = {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
        },
        t = {
            id: H,
            reference: e,
            popper: J(),
            popperInstance: G,
            props: i,
            state: Q,
            plugins: W,
            clearDelayTimeouts: dt,
            setProps: ft,
            setContent: mt,
            show: vt,
            hide: ht,
            hideWithInteractivity: gt,
            enable: lt,
            disable: pt,
            unmount: bt,
            destroy: yt,
        };
    if (!i.render) return t;
    var ee = i.render(t),
        f = ee.popper,
        te = ee.onUpdate;
    f.setAttribute("data-tippy-root", ""),
        (f.id = "tippy-" + t.id),
        (t.popper = f),
        (e._tippy = t),
        (f._tippy = t);
    var X = W.map(function (r) {
            return r.fn(t);
        }),
        O = e.hasAttribute("aria-expanded");
    return (
        Se(),
        C(),
        N(),
        x("onCreate", [t]),
        i.showOnCreate && $e(),
        f.addEventListener("mouseenter", function () {
            t.props.interactive && t.state.isVisible && t.clearDelayTimeouts();
        }),
        f.addEventListener("mouseleave", function () {
            t.props.interactive &&
                t.props.trigger.indexOf("mouseenter") >= 0 &&
                w().addEventListener("mousemove", v);
        }),
        t
    );
    function _() {
        var r = t.props.touch;
        return Array.isArray(r) ? r : [r, 0];
    }
    function P() {
        return _()[0] === "hold";
    }
    function j() {
        var r;
        return !!((r = t.props.render) != null && r.$$tippy);
    }
    function L() {
        return A || e;
    }
    function w() {
        var r = L().parentNode;
        return r ? Ut(r) : document;
    }
    function h() {
        return we(f);
    }
    function U(r) {
        return (t.state.isMounted && !t.state.isVisible) ||
            M.isTouch ||
            (y && y.type === "focus")
            ? 0
            : me(t.props.delay, r ? 0 : 1, D.delay);
    }
    function N(r) {
        r === void 0 && (r = !1),
            (f.style.pointerEvents = t.props.interactive && !r ? "" : "none"),
            (f.style.zIndex = "" + t.props.zIndex);
    }
    function x(r, a, c) {
        if (
            (c === void 0 && (c = !0),
            X.forEach(function (m) {
                m[r] && m[r].apply(m, a);
            }),
            c)
        ) {
            var g;
            (g = t.props)[r].apply(g, a);
        }
    }
    function $() {
        var r = t.props.aria;
        if (r.content) {
            var a = "aria-" + r.content,
                c = f.id,
                g = Y(t.props.triggerTarget || e);
            g.forEach(function (m) {
                var E = m.getAttribute(a);
                if (t.state.isVisible) m.setAttribute(a, E ? E + " " + c : c);
                else {
                    var S = E && E.replace(c, "").trim();
                    S ? m.setAttribute(a, S) : m.removeAttribute(a);
                }
            });
        }
    }
    function C() {
        if (!(O || !t.props.aria.expanded)) {
            var r = Y(t.props.triggerTarget || e);
            r.forEach(function (a) {
                t.props.interactive
                    ? a.setAttribute(
                          "aria-expanded",
                          t.state.isVisible && a === L() ? "true" : "false"
                      )
                    : a.removeAttribute("aria-expanded");
            });
        }
    }
    function ce() {
        w().removeEventListener("mousemove", v),
            (ae = ae.filter(function (r) {
                return r !== v;
            }));
    }
    function ne(r) {
        if (!(M.isTouch && (d || r.type === "mousedown"))) {
            var a = (r.composedPath && r.composedPath()[0]) || r.target;
            if (!(t.props.interactive && He(f, a))) {
                if (
                    Y(t.props.triggerTarget || e).some(function (c) {
                        return He(c, a);
                    })
                ) {
                    if (
                        M.isTouch ||
                        (t.state.isVisible &&
                            t.props.trigger.indexOf("click") >= 0)
                    )
                        return;
                } else x("onClickOutside", [t, r]);
                t.props.hideOnClick === !0 &&
                    (t.clearDelayTimeouts(),
                    t.hide(),
                    (b = !0),
                    setTimeout(function () {
                        b = !1;
                    }),
                    t.state.isMounted || le());
            }
        }
    }
    function Ee() {
        d = !0;
    }
    function Ae() {
        d = !1;
    }
    function Oe() {
        var r = w();
        r.addEventListener("mousedown", ne, !0),
            r.addEventListener("touchend", ne, F),
            r.addEventListener("touchstart", Ae, F),
            r.addEventListener("touchmove", Ee, F);
    }
    function le() {
        var r = w();
        r.removeEventListener("mousedown", ne, !0),
            r.removeEventListener("touchend", ne, F),
            r.removeEventListener("touchstart", Ae, F),
            r.removeEventListener("touchmove", Ee, F);
    }
    function st(r, a) {
        je(r, function () {
            !t.state.isVisible &&
                f.parentNode &&
                f.parentNode.contains(f) &&
                a();
        });
    }
    function ut(r, a) {
        je(r, a);
    }
    function je(r, a) {
        var c = h().box;
        function g(m) {
            m.target === c && (he(c, "remove", g), a());
        }
        if (r === 0) return a();
        he(c, "remove", k), he(c, "add", g), (k = g);
    }
    function q(r, a, c) {
        c === void 0 && (c = !1);
        var g = Y(t.props.triggerTarget || e);
        g.forEach(function (m) {
            m.addEventListener(r, a, c),
                R.push({ node: m, eventType: r, handler: a, options: c });
        });
    }
    function Se() {
        P() &&
            (q("touchstart", Le, { passive: !0 }),
            q("touchend", Me, { passive: !0 })),
            It(t.props.trigger).forEach(function (r) {
                if (r !== "manual")
                    switch ((q(r, Le), r)) {
                        case "mouseenter":
                            q("mouseleave", Me);
                            break;
                        case "focus":
                            q(zt ? "focusout" : "blur", Ie);
                            break;
                        case "focusin":
                            q("focusout", Ie);
                            break;
                    }
            });
    }
    function De() {
        R.forEach(function (r) {
            var a = r.node,
                c = r.eventType,
                g = r.handler,
                m = r.options;
            a.removeEventListener(c, g, m);
        }),
            (R = []);
    }
    function Le(r) {
        var a,
            c = !1;
        if (!(!t.state.isEnabled || ke(r) || b)) {
            var g = ((a = y) == null ? void 0 : a.type) === "focus";
            (y = r),
                (A = r.currentTarget),
                C(),
                !t.state.isVisible &&
                    $t(r) &&
                    ae.forEach(function (m) {
                        return m(r);
                    }),
                r.type === "click" &&
                (t.props.trigger.indexOf("mouseenter") < 0 || u) &&
                t.props.hideOnClick !== !1 &&
                t.state.isVisible
                    ? (c = !0)
                    : $e(r),
                r.type === "click" && (u = !c),
                c && !g && re(r);
        }
    }
    function Ne(r) {
        var a = r.target,
            c = L().contains(a) || f.contains(a);
        if (!(r.type === "mousemove" && c)) {
            var g = pe()
                .concat(f)
                .map(function (m) {
                    var E,
                        S = m._tippy,
                        z = (E = S.popperInstance) == null ? void 0 : E.state;
                    return z
                        ? {
                              popperRect: m.getBoundingClientRect(),
                              popperState: z,
                              props: i,
                          }
                        : null;
                })
                .filter(Boolean);
            Vt(g, r) && (ce(), re(r));
        }
    }
    function Me(r) {
        var a = ke(r) || (t.props.trigger.indexOf("click") >= 0 && u);
        if (!a) {
            if (t.props.interactive) {
                t.hideWithInteractivity(r);
                return;
            }
            re(r);
        }
    }
    function Ie(r) {
        (t.props.trigger.indexOf("focusin") < 0 && r.target !== L()) ||
            (t.props.interactive &&
                r.relatedTarget &&
                f.contains(r.relatedTarget)) ||
            re(r);
    }
    function ke(r) {
        return M.isTouch ? P() !== r.type.indexOf("touch") >= 0 : !1;
    }
    function Re() {
        _e();
        var r = t.props,
            a = r.popperOptions,
            c = r.placement,
            g = r.offset,
            m = r.getReferenceClientRect,
            E = r.moveTransition,
            S = j() ? we(f).arrow : null,
            z = m
                ? {
                      getBoundingClientRect: m,
                      contextElement: m.contextElement || L(),
                  }
                : e,
            Be = {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function (ie) {
                    var K = ie.state;
                    if (j()) {
                        var xt = h(),
                            fe = xt.box;
                        ["placement", "reference-hidden", "escaped"].forEach(
                            function (oe) {
                                oe === "placement"
                                    ? fe.setAttribute(
                                          "data-placement",
                                          K.placement
                                      )
                                    : K.attributes.popper["data-popper-" + oe]
                                    ? fe.setAttribute("data-" + oe, "")
                                    : fe.removeAttribute("data-" + oe);
                            }
                        ),
                            (K.attributes.popper = {});
                    }
                },
            },
            V = [
                { name: "offset", options: { offset: g } },
                {
                    name: "preventOverflow",
                    options: {
                        padding: { top: 2, bottom: 2, left: 5, right: 5 },
                    },
                },
                { name: "flip", options: { padding: 5 } },
                { name: "computeStyles", options: { adaptive: !E } },
                Be,
            ];
        j() &&
            S &&
            V.push({ name: "arrow", options: { element: S, padding: 3 } }),
            V.push.apply(V, (a == null ? void 0 : a.modifiers) || []),
            (t.popperInstance = jt(
                z,
                f,
                Object.assign({}, a, {
                    placement: c,
                    onFirstUpdate: B,
                    modifiers: V,
                })
            ));
    }
    function _e() {
        t.popperInstance &&
            (t.popperInstance.destroy(), (t.popperInstance = null));
    }
    function ct() {
        var r = t.props.appendTo,
            a,
            c = L();
        (t.props.interactive && r === Qe) || r === "parent"
            ? (a = c.parentNode)
            : (a = et(r, [c])),
            a.contains(f) || a.appendChild(f),
            (t.state.isMounted = !0),
            Re();
    }
    function pe() {
        return se(f.querySelectorAll("[data-tippy-root]"));
    }
    function $e(r) {
        t.clearDelayTimeouts(), r && x("onTrigger", [t, r]), Oe();
        var a = U(!0),
            c = _(),
            g = c[0],
            m = c[1];
        M.isTouch && g === "hold" && m && (a = m),
            a
                ? (o = setTimeout(function () {
                      t.show();
                  }, a))
                : t.show();
    }
    function re(r) {
        if (
            (t.clearDelayTimeouts(),
            x("onUntrigger", [t, r]),
            !t.state.isVisible)
        ) {
            le();
            return;
        }
        if (
            !(
                t.props.trigger.indexOf("mouseenter") >= 0 &&
                t.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(r.type) >= 0 &&
                u
            )
        ) {
            var a = U(!1);
            a
                ? (p = setTimeout(function () {
                      t.state.isVisible && t.hide();
                  }, a))
                : (l = requestAnimationFrame(function () {
                      t.hide();
                  }));
        }
    }
    function lt() {
        t.state.isEnabled = !0;
    }
    function pt() {
        t.hide(), (t.state.isEnabled = !1);
    }
    function dt() {
        clearTimeout(o), clearTimeout(p), cancelAnimationFrame(l);
    }
    function ft(r) {
        if (!t.state.isDestroyed) {
            x("onBeforeUpdate", [t, r]), De();
            var a = t.props,
                c = qe(
                    e,
                    Object.assign({}, a, Ve(r), { ignoreAttributes: !0 })
                );
            (t.props = c),
                Se(),
                a.interactiveDebounce !== c.interactiveDebounce &&
                    (ce(), (v = Pe(Ne, c.interactiveDebounce))),
                a.triggerTarget && !c.triggerTarget
                    ? Y(a.triggerTarget).forEach(function (g) {
                          g.removeAttribute("aria-expanded");
                      })
                    : c.triggerTarget && e.removeAttribute("aria-expanded"),
                C(),
                N(),
                te && te(a, c),
                t.popperInstance &&
                    (Re(),
                    pe().forEach(function (g) {
                        requestAnimationFrame(
                            g._tippy.popperInstance.forceUpdate
                        );
                    })),
                x("onAfterUpdate", [t, r]);
        }
    }
    function mt(r) {
        t.setProps({ content: r });
    }
    function vt() {
        var r = t.state.isVisible,
            a = t.state.isDestroyed,
            c = !t.state.isEnabled,
            g = M.isTouch && !t.props.touch,
            m = me(t.props.duration, 0, D.duration);
        if (
            !(r || a || c || g) &&
            !L().hasAttribute("disabled") &&
            (x("onShow", [t], !1), t.props.onShow(t) !== !1)
        ) {
            if (
                ((t.state.isVisible = !0),
                j() && (f.style.visibility = "visible"),
                N(),
                Oe(),
                t.state.isMounted || (f.style.transition = "none"),
                j())
            ) {
                var E = h(),
                    S = E.box,
                    z = E.content;
                ve([S, z], 0);
            }
            (B = function () {
                var V;
                if (!(!t.state.isVisible || T)) {
                    if (
                        ((T = !0),
                        f.offsetHeight,
                        (f.style.transition = t.props.moveTransition),
                        j() && t.props.animation)
                    ) {
                        var de = h(),
                            ie = de.box,
                            K = de.content;
                        ve([ie, K], m), Fe([ie, K], "visible");
                    }
                    $(),
                        C(),
                        Ue(ge, t),
                        (V = t.popperInstance) == null || V.forceUpdate(),
                        x("onMount", [t]),
                        t.props.animation &&
                            j() &&
                            ut(m, function () {
                                (t.state.isShown = !0), x("onShown", [t]);
                            });
                }
            }),
                ct();
        }
    }
    function ht() {
        var r = !t.state.isVisible,
            a = t.state.isDestroyed,
            c = !t.state.isEnabled,
            g = me(t.props.duration, 1, D.duration);
        if (
            !(r || a || c) &&
            (x("onHide", [t], !1), t.props.onHide(t) !== !1)
        ) {
            if (
                ((t.state.isVisible = !1),
                (t.state.isShown = !1),
                (T = !1),
                (u = !1),
                j() && (f.style.visibility = "hidden"),
                ce(),
                le(),
                N(!0),
                j())
            ) {
                var m = h(),
                    E = m.box,
                    S = m.content;
                t.props.animation && (ve([E, S], g), Fe([E, S], "hidden"));
            }
            $(), C(), t.props.animation ? j() && st(g, t.unmount) : t.unmount();
        }
    }
    function gt(r) {
        w().addEventListener("mousemove", v), Ue(ae, v), v(r);
    }
    function bt() {
        t.state.isVisible && t.hide(),
            t.state.isMounted &&
                (_e(),
                pe().forEach(function (r) {
                    r._tippy.unmount();
                }),
                f.parentNode && f.parentNode.removeChild(f),
                (ge = ge.filter(function (r) {
                    return r !== t;
                })),
                (t.state.isMounted = !1),
                x("onHidden", [t]));
    }
    function yt() {
        t.state.isDestroyed ||
            (t.clearDelayTimeouts(),
            t.unmount(),
            De(),
            delete e._tippy,
            (t.state.isDestroyed = !0),
            x("onDestroy", [t]));
    }
}
function Z(e, n) {
    n === void 0 && (n = {});
    var i = D.plugins.concat(n.plugins || []);
    Wt();
    var o = Object.assign({}, n, { plugins: i }),
        p = Pt(e),
        l = p.reduce(function (u, b) {
            var d = b && en(b, o);
            return d && u.push(d), u;
        }, []);
    return ue(e) ? l[0] : l;
}
Z.defaultProps = D;
Z.setDefaultProps = Xt;
Z.currentInput = M;
Object.assign({}, Ot, {
    effect: function (n) {
        var i = n.state,
            o = {
                popper: {
                    position: i.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
            };
        Object.assign(i.elements.popper.style, o.popper),
            (i.styles = o),
            i.elements.arrow && Object.assign(i.elements.arrow.style, o.arrow);
    },
});
Z.setDefaultProps({ render: rt });
function it(e, n) {
    if (e == null) return {};
    var i = {},
        o = Object.keys(e),
        p,
        l;
    for (l = 0; l < o.length; l++)
        (p = o[l]), !(n.indexOf(p) >= 0) && (i[p] = e[p]);
    return i;
}
var ot = typeof window < "u" && typeof document < "u";
function Te(e, n) {
    e &&
        (typeof e == "function" && e(n),
        {}.hasOwnProperty.call(e, "current") && (e.current = n));
}
function Ye() {
    return ot && document.createElement("div");
}
function tn(e) {
    var n = { "data-placement": e.placement };
    return (
        e.referenceHidden && (n["data-reference-hidden"] = ""),
        e.escaped && (n["data-escaped"] = ""),
        n
    );
}
function at(e, n) {
    if (e === n) return !0;
    if (
        typeof e == "object" &&
        e != null &&
        typeof n == "object" &&
        n != null
    ) {
        if (Object.keys(e).length !== Object.keys(n).length) return !1;
        for (var i in e)
            if (n.hasOwnProperty(i)) {
                if (!at(e[i], n[i])) return !1;
            } else return !1;
        return !0;
    } else return !1;
}
function nn(e) {
    var n = [];
    return (
        e.forEach(function (i) {
            n.find(function (o) {
                return at(i, o);
            }) || n.push(i);
        }),
        n
    );
}
function rn(e, n) {
    var i, o;
    return Object.assign({}, n, {
        popperOptions: Object.assign({}, e.popperOptions, n.popperOptions, {
            modifiers: nn(
                [].concat(
                    ((i = e.popperOptions) == null ? void 0 : i.modifiers) ||
                        [],
                    ((o = n.popperOptions) == null ? void 0 : o.modifiers) || []
                )
            ),
        }),
    });
}
var be = ot ? I.useLayoutEffect : I.useEffect;
function on(e) {
    var n = I.useRef();
    return (
        n.current || (n.current = typeof e == "function" ? e() : e), n.current
    );
}
function Ge(e, n, i) {
    i.split(/\s+/).forEach(function (o) {
        o && e.classList[n](o);
    });
}
var an = {
    name: "className",
    defaultValue: "",
    fn: function (n) {
        var i = n.popper.firstElementChild,
            o = function () {
                var b;
                return !!((b = n.props.render) != null && b.$$tippy);
            };
        function p() {
            (n.props.className && !o()) || Ge(i, "add", n.props.className);
        }
        function l() {
            o() && Ge(i, "remove", n.props.className);
        }
        return { onCreate: p, onBeforeUpdate: l, onAfterUpdate: p };
    },
};
function sn(e) {
    function n(i) {
        var o = i.children,
            p = i.content,
            l = i.visible,
            u = i.singleton,
            b = i.render,
            d = i.reference,
            T = i.disabled,
            y = T === void 0 ? !1 : T,
            k = i.ignoreAttributes,
            B = k === void 0 ? !0 : k;
        i.__source, i.__self;
        var R = it(i, [
                "children",
                "content",
                "visible",
                "singleton",
                "render",
                "reference",
                "disabled",
                "ignoreAttributes",
                "__source",
                "__self",
            ]),
            v = l !== void 0,
            A = u !== void 0,
            H = I.useState(!1),
            G = H[0],
            W = H[1],
            Q = I.useState({}),
            t = Q[0],
            ee = Q[1],
            f = I.useState(),
            te = f[0],
            X = f[1],
            O = on(function () {
                return { container: Ye(), renders: 1 };
            }),
            _ = Object.assign({ ignoreAttributes: B }, R, {
                content: O.container,
            });
        v && ((_.trigger = "manual"), (_.hideOnClick = !1)), A && (y = !0);
        var P = _,
            j = _.plugins || [];
        b &&
            (P = Object.assign({}, _, {
                plugins:
                    A && u.data != null
                        ? [].concat(j, [
                              {
                                  fn: function () {
                                      return {
                                          onTrigger: function (U, N) {
                                              var x = u.data.children.find(
                                                  function ($) {
                                                      var C = $.instance;
                                                      return (
                                                          C.reference ===
                                                          N.currentTarget
                                                      );
                                                  }
                                              );
                                              (U.state.$$activeSingletonInstance =
                                                  x.instance),
                                                  X(x.content);
                                          },
                                      };
                                  },
                              },
                          ])
                        : j,
                render: function () {
                    return { popper: O.container };
                },
            }));
        var L = [d].concat(o ? [o.type] : []);
        return (
            be(function () {
                var w = d;
                d && d.hasOwnProperty("current") && (w = d.current);
                var h = e(
                    w || O.ref || Ye(),
                    Object.assign({}, P, {
                        plugins: [an].concat(_.plugins || []),
                    })
                );
                return (
                    (O.instance = h),
                    y && h.disable(),
                    l && h.show(),
                    A &&
                        u.hook({
                            instance: h,
                            content: p,
                            props: P,
                            setSingletonContent: X,
                        }),
                    W(!0),
                    function () {
                        h.destroy(), u == null || u.cleanup(h);
                    }
                );
            }, L),
            be(function () {
                var w;
                if (O.renders === 1) {
                    O.renders++;
                    return;
                }
                var h = O.instance;
                h.setProps(rn(h.props, P)),
                    (w = h.popperInstance) == null || w.forceUpdate(),
                    y ? h.disable() : h.enable(),
                    v && (l ? h.show() : h.hide()),
                    A &&
                        u.hook({
                            instance: h,
                            content: p,
                            props: P,
                            setSingletonContent: X,
                        });
            }),
            be(function () {
                var w;
                if (b) {
                    var h = O.instance;
                    h.setProps({
                        popperOptions: Object.assign(
                            {},
                            h.props.popperOptions,
                            {
                                modifiers: [].concat(
                                    (
                                        ((w = h.props.popperOptions) == null
                                            ? void 0
                                            : w.modifiers) || []
                                    ).filter(function (U) {
                                        var N = U.name;
                                        return N !== "$$tippyReact";
                                    }),
                                    [
                                        {
                                            name: "$$tippyReact",
                                            enabled: !0,
                                            phase: "beforeWrite",
                                            requires: ["computeStyles"],
                                            fn: function (N) {
                                                var x,
                                                    $ = N.state,
                                                    C =
                                                        (x = $.modifiersData) ==
                                                        null
                                                            ? void 0
                                                            : x.hide;
                                                (t.placement !== $.placement ||
                                                    t.referenceHidden !==
                                                        (C == null
                                                            ? void 0
                                                            : C.isReferenceHidden) ||
                                                    t.escaped !==
                                                        (C == null
                                                            ? void 0
                                                            : C.hasPopperEscaped)) &&
                                                    ee({
                                                        placement: $.placement,
                                                        referenceHidden:
                                                            C == null
                                                                ? void 0
                                                                : C.isReferenceHidden,
                                                        escaped:
                                                            C == null
                                                                ? void 0
                                                                : C.hasPopperEscaped,
                                                    }),
                                                    ($.attributes.popper = {});
                                            },
                                        },
                                    ]
                                ),
                            }
                        ),
                    });
                }
            }, [t.placement, t.referenceHidden, t.escaped].concat(L)),
            ye.createElement(
                ye.Fragment,
                null,
                o
                    ? I.cloneElement(o, {
                          ref: function (h) {
                              (O.ref = h), Te(o.ref, h);
                          },
                      })
                    : null,
                G &&
                    wt.createPortal(
                        b ? b(tn(t), te, O.instance) : p,
                        O.container
                    )
            )
        );
    }
    return n;
}
var un = function (e, n) {
        return I.forwardRef(function (o, p) {
            var l = o.children,
                u = it(o, ["children"]);
            return ye.createElement(
                e,
                Object.assign({}, n, u),
                l
                    ? I.cloneElement(l, {
                          ref: function (d) {
                              Te(p, d), Te(l.ref, d);
                          },
                      })
                    : null
            );
        });
    },
    cn = un(sn(Z));
const ln = cn;
function pn() {
    const { categories: e } = Tt().props,
        {
            control: n,
            register: i,
            handleSubmit: o,
            setValue: p,
            reset: l,
            formState: { errors: u },
        } = Dt(),
        b = e.map((v) => ({
            value: v == null ? void 0 : v.id,
            label: v != null && v.name ? `${v.name}` : "",
        })),
        d = (v) => {
            p("parent_id", v == null ? void 0 : v.value);
        },
        [T, y] = I.useState(null),
        k = (v) => {
            const A = v.target.files[0];
            A && y(URL.createObjectURL(A));
        };
    function B() {
        y(null), l({ thumbnail: "" });
    }
    function R(v) {
        Et.post("/admin/category/store", v);
    }
    return s.jsxs(s.Fragment, {
        children: [
            s.jsxs("div", {
                className:
                    "panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",
                children: [
                    s.jsx("div", {
                        className:
                            "rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",
                        children: s.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-3.5 w-3.5",
                            children: [
                                s.jsx("path", {
                                    d: "M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                }),
                                s.jsx("path", {
                                    opacity: "0.5",
                                    d: "M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                }),
                            ],
                        }),
                    }),
                    s.jsxs("ul", {
                        className: "flex space-x-2 rtl:space-x-reverse",
                        children: [
                            s.jsx("li", {
                                children: s.jsx(Ct, {
                                    href: "#",
                                    className: "text-primary hover:underline",
                                    children: "Category",
                                }),
                            }),
                            s.jsx("li", {
                                className:
                                    "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",
                                children: s.jsx("span", { children: "Add" }),
                            }),
                        ],
                    }),
                ],
            }),
            s.jsx("div", {
                className: "pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",
                children: s.jsxs("div", {
                    className: "panel",
                    id: "forms_grid",
                    children: [
                        s.jsx("div", {
                            className: "flex items-center justify-between mb-5",
                            children: s.jsx("h5", {
                                className:
                                    "font-semibold text-lg dark:text-white-light",
                                children: "Category Add Form",
                            }),
                        }),
                        s.jsx("div", {
                            className: "mb-5",
                            children: s.jsxs("form", {
                                className: "space-y-5",
                                onSubmit: o(R),
                                method: "post",
                                children: [
                                    s.jsxs("div", {
                                        className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            s.jsxs("div", {
                                                children: [
                                                    s.jsxs("label", {
                                                        children: [
                                                            " Name ",
                                                            s.jsx("span", {
                                                                className:
                                                                    "text-danger",
                                                                children: "*",
                                                            }),
                                                            " ",
                                                        ],
                                                    }),
                                                    s.jsx("input", {
                                                        ...i("name", {
                                                            required:
                                                                " Category Name Is required",
                                                        }),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder:
                                                            "Enter Category Name",
                                                    }),
                                                    u.name &&
                                                        s.jsx("p", {
                                                            className:
                                                                "text-red-600 pt-2",
                                                            children:
                                                                u.name.message,
                                                        }),
                                                ],
                                            }),
                                            s.jsxs("div", {
                                                children: [
                                                    s.jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            s.jsx("label", {
                                                                children:
                                                                    "Slug",
                                                            }),
                                                            s.jsx("span", {
                                                                children: s.jsx(
                                                                    ln,
                                                                    {
                                                                        content:
                                                                            "Leave the name field blank, and the slug will auto-generate.",
                                                                        className:
                                                                            "bg-black text-white p-5 rounded-lg dark:bg-[#2e3249] dark:text-white",
                                                                        children:
                                                                            s.jsxs(
                                                                                "svg",
                                                                                {
                                                                                    width: "16",
                                                                                    height: "16",
                                                                                    viewBox:
                                                                                        "0 0 24 24",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    children:
                                                                                        [
                                                                                            s.jsx(
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
                                                                                            s.jsx(
                                                                                                "path",
                                                                                                {
                                                                                                    d: "M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth:
                                                                                                        "1.5",
                                                                                                    strokeLinecap:
                                                                                                        "round",
                                                                                                }
                                                                                            ),
                                                                                            s.jsx(
                                                                                                "circle",
                                                                                                {
                                                                                                    cx: "12",
                                                                                                    cy: "16",
                                                                                                    r: "1",
                                                                                                    fill: "currentColor",
                                                                                                }
                                                                                            ),
                                                                                        ],
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    s.jsx("input", {
                                                        ...i("slug"),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder:
                                                            "Enter Category Slug",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    s.jsxs("div", {
                                        className:
                                            "grid grid-cols-1 md:grid-cols-4 gap-5",
                                        children: [
                                            s.jsxs("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    s.jsx("label", {
                                                        children:
                                                            "Parent Category",
                                                    }),
                                                    s.jsx(Lt, {
                                                        control: n,
                                                        name: "parent_id",
                                                        render: ({
                                                            field: v,
                                                        }) =>
                                                            s.jsx(St, {
                                                                placeholder:
                                                                    "Select an option",
                                                                options: b,
                                                                value: b.find(
                                                                    (A) =>
                                                                        A.value ===
                                                                        v.value
                                                                ),
                                                                onChange: d,
                                                            }),
                                                    }),
                                                ],
                                            }),
                                            s.jsxs("div", {
                                                children: [
                                                    s.jsx("label", {
                                                        children: "Thumbnail",
                                                    }),
                                                    s.jsx("input", {
                                                        type: "file",
                                                        className: "form-input",
                                                        ...i("thumbnail"),
                                                        onChange: k,
                                                    }),
                                                ],
                                            }),
                                            s.jsx(s.Fragment, {
                                                children:
                                                    T &&
                                                    s.jsxs("div", {
                                                        style: {
                                                            position:
                                                                "relative",
                                                        },
                                                        children: [
                                                            s.jsx("img", {
                                                                className:
                                                                    "rounded-lg max-w-[100px]",
                                                                src: T,
                                                                alt: "Selected Avatar",
                                                            }),
                                                            s.jsx("span", {
                                                                onClick: B,
                                                                className:
                                                                    "absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",
                                                                children:
                                                                    s.jsxs(
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
                                                                                    s.jsx(
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
                                                                                    s.jsx(
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
                                    s.jsx("button", {
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
pn.layout = (e) => s.jsx(At, { children: e, title: "X || Add" });
export { pn as default };
