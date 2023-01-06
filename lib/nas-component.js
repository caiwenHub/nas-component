import Se from "react";
var N = function() {
  return N = Object.assign || function(c) {
    for (var d, u = 1, v = arguments.length; u < v; u++) {
      d = arguments[u];
      for (var f in d)
        Object.prototype.hasOwnProperty.call(d, f) && (c[f] = d[f]);
    }
    return c;
  }, N.apply(this, arguments);
};
function lr(o, c) {
  var d = {};
  for (var u in o)
    Object.prototype.hasOwnProperty.call(o, u) && c.indexOf(u) < 0 && (d[u] = o[u]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var v = 0, u = Object.getOwnPropertySymbols(o); v < u.length; v++)
      c.indexOf(u[v]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[v]) && (d[u[v]] = o[u[v]]);
  return d;
}
var Z = {}, fr = {
  get exports() {
    return Z;
  },
  set exports(o) {
    Z = o;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function cr() {
  if (Te)
    return A;
  Te = 1;
  var o = Se, c = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(_, p, S) {
    var h, E = {}, w = null, $ = null;
    S !== void 0 && (w = "" + S), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (h in p)
      u.call(p, h) && !f.hasOwnProperty(h) && (E[h] = p[h]);
    if (_ && _.defaultProps)
      for (h in p = _.defaultProps, p)
        E[h] === void 0 && (E[h] = p[h]);
    return { $$typeof: c, type: _, key: w, ref: $, props: E, _owner: v.current };
  }
  return A.Fragment = d, A.jsx = R, A.jsxs = R, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function dr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Se, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), _ = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ee = Symbol.iterator, xe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === f || Ie || e === v || e === S || e === h || Ae || e === $ || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === R || e.$$typeof === _ || e.$$typeof === p || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case f:
          return "Profiler";
        case v:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case R:
            var t = e;
            return te(t._context) + ".Provider";
          case p:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case w: {
            var s = e, l = s._payload, i = s._init;
            try {
              return T(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, D = 0, ne, ae, ie, oe, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ne
            }),
            info: x({}, e, {
              value: ae
            }),
            warn: x({}, e, {
              value: ie
            }),
            error: x({}, e, {
              value: oe
            }),
            group: x({}, e, {
              value: ue
            }),
            groupCollapsed: x({}, e, {
              value: se
            }),
            groupEnd: x({}, e, {
              value: le
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = j.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = U.current, U.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (P) {
              n = P;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (P) {
              n = P;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            n = P;
          }
          e();
        }
      } catch (P) {
        if (P && n && typeof P.stack == "string") {
          for (var a = P.stack.split(`
`), y = n.stack.split(`
`), b = a.length - 1, g = y.length - 1; b >= 1 && g >= 0 && a[b] !== y[g]; )
            g--;
          for (; b >= 1 && g >= 0; b--, g--)
            if (a[b] !== y[g]) {
              if (b !== 1 || g !== 1)
                do
                  if (b--, g--, g < 0 || a[b] !== y[g]) {
                    var O = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, O), O;
                  }
                while (b >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = l, Ye(), Error.prepareStackTrace = s;
      }
      var k = e ? e.displayName || e.name : "", we = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, we), we;
    }
    function Ve(e, r, t) {
      return ce(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Me(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case S:
          return W("Suspense");
        case h:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ve(e.render);
          case E:
            return L(e.type, r, t);
          case w: {
            var n = e, s = n._payload, l = n._init;
            try {
              return L(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, s) {
      {
        var l = Function.call.bind(V);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (M(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, M(s), m("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Be = Array.isArray;
    function z(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function be(e) {
      if (ze(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var F = j.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, he, J;
    J = {};
    function Ge(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = T(F.current.type);
        J[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(F.current.type), e.ref), J[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, s, l, i) {
      var a = {
        $$typeof: c,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, s) {
      {
        var l, i = {}, a = null, y = null;
        t !== void 0 && (be(t), a = "" + t), Ke(r) && (be(r.key), a = "" + r.key), Ge(r) && (y = r.ref, He(r, s));
        for (l in r)
          V.call(r, l) && !Je.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (l in b)
            i[l] === void 0 && (i[l] = b[l]);
        }
        if (a || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, g), y && Ze(i, g);
        }
        return Qe(e, a, y, s, n, F.current, i);
      }
    }
    var G = j.ReactCurrentOwner, me = j.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ye() {
      {
        if (G.current) {
          var e = T(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + T(e._owner.type) + "."), C(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = je(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              H(i.value) && Ee(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var s = T(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    function Oe(e, r, t, n, s, l) {
      {
        var i = Ne(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = rr(s);
          y ? a += y : a += ye();
          var b;
          e === null ? b = "null" : z(e) ? b = "array" : e !== void 0 && e.$$typeof === c ? (b = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var g = er(e, r, t, s, l);
        if (g == null)
          return g;
        if (i) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (z(O)) {
                for (var k = 0; k < O.length; k++)
                  Re(O[k], e);
                Object.freeze && Object.freeze(O);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(O, e);
        }
        return e === u ? ar(g) : nr(g), g;
      }
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var ur = or, sr = ir;
    I.Fragment = u, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = cr() : o.exports = dr();
})(fr);
const X = Z.jsx;
var Q = {}, vr = {
  get exports() {
    return Q;
  },
  set exports(o) {
    Q = o;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var c = {}.hasOwnProperty;
    function d() {
      for (var u = [], v = 0; v < arguments.length; v++) {
        var f = arguments[v];
        if (f) {
          var R = typeof f;
          if (R === "string" || R === "number")
            u.push(f);
          else if (Array.isArray(f)) {
            if (f.length) {
              var _ = d.apply(null, f);
              _ && u.push(_);
            }
          } else if (R === "object") {
            if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) {
              u.push(f.toString());
              continue;
            }
            for (var p in f)
              c.call(f, p) && f[p] && u.push(p);
          }
        }
      }
      return u.join(" ");
    }
    o.exports ? (d.default = d, o.exports = d) : window.classNames = d;
  })();
})(vr);
const pr = Q;
var br = function(o) {
  var c, d = o.size, u = o.type, v = o.children, f = o.className, R = o.disabled, _ = o.href, p = o.danger, S = o.success, h = o.warning, E = lr(o, ["size", "type", "children", "className", "disabled", "href", "danger", "success", "warning"]), w = pr("btn", f, (c = {}, c["btn-".concat(u)] = u, c["btn-danger"] = !!p, c["btn-success"] = !!S, c["btn-warning"] = !!h, c["btn-".concat(d)] = d, c.disabled = u === "link" && R, c));
  return u === "link" && _ ? X("a", N({ href: _, className: w }, E, { children: v })) : u === "text" ? X("span", N({ className: w }, E, { children: v })) : X("button", N({ className: w, disabled: R }, E, { children: v }));
};
br.defaultProps = {
  disabled: !1,
  type: "default"
};
export {
  br as Button
};
