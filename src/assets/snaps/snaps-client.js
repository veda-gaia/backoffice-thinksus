var ym = Object.defineProperty;
var xm = (e, t, n) => t in e ? ym(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Cr = (e, t, n) => xm(e, typeof t != "symbol" ? t + "" : t, n);
var fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dp = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi = Symbol.for("react.element"), wm = Symbol.for("react.portal"), vm = Symbol.for("react.fragment"), km = Symbol.for("react.strict_mode"), bm = Symbol.for("react.profiler"), Sm = Symbol.for("react.provider"), Cm = Symbol.for("react.context"), Em = Symbol.for("react.forward_ref"), Nm = Symbol.for("react.suspense"), jm = Symbol.for("react.memo"), Tm = Symbol.for("react.lazy"), ju = Symbol.iterator;
function zm(e) {
  return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Rp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Mp = Object.assign, Fp = {};
function hr(e, t, n) {
  this.props = e, this.context = t, this.refs = Fp, this.updater = n || Rp;
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Op() {
}
Op.prototype = hr.prototype;
function aa(e, t, n) {
  this.props = e, this.context = t, this.refs = Fp, this.updater = n || Rp;
}
var ua = aa.prototype = new Op();
ua.constructor = aa;
Mp(ua, hr.prototype);
ua.isPureReactComponent = !0;
var Tu = Array.isArray, Bp = Object.prototype.hasOwnProperty, ca = { current: null }, $p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Up(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Bp.call(t, r) && !$p.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: xi, type: e, key: o, ref: l, props: i, _owner: ca.current };
}
function Pm(e, t) {
  return { $$typeof: xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function _m(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zu = /\/+/g;
function dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _m("" + e.key) : t.toString(36);
}
function Ji(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case xi:
        case wm:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + dl(l, 0) : r, Tu(i) ? (n = "", e != null && (n = e.replace(zu, "$&/") + "/"), Ji(i, t, n, "", function(u) {
    return u;
  })) : i != null && (pa(i) && (i = Pm(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(zu, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Tu(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var a = r + dl(o, s);
    l += Ji(o, t, n, a, i);
  }
  else if (a = zm(e), typeof a == "function") for (e = a.call(e), s = 0; !(o = e.next()).done; ) o = o.value, a = r + dl(o, s++), l += Ji(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function zi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ji(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Im(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null }, Zi = { transition: null }, Lm = { ReactCurrentDispatcher: Be, ReactCurrentBatchConfig: Zi, ReactCurrentOwner: ca };
function Hp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: zi, forEach: function(e, t, n) {
  zi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return zi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return zi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!pa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = hr;
Y.Fragment = vm;
Y.Profiler = bm;
Y.PureComponent = aa;
Y.StrictMode = km;
Y.Suspense = Nm;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
Y.act = Hp;
Y.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Mp({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = ca.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) Bp.call(t, a) && !$p.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
Y.createContext = function(e) {
  return e = { $$typeof: Cm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Sm, _context: e }, e.Consumer = e;
};
Y.createElement = Up;
Y.createFactory = function(e) {
  var t = Up.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Em, render: e };
};
Y.isValidElement = pa;
Y.lazy = function(e) {
  return { $$typeof: Tm, _payload: { _status: -1, _result: e }, _init: Im };
};
Y.memo = function(e, t) {
  return { $$typeof: jm, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = Zi.transition;
  Zi.transition = {};
  try {
    e();
  } finally {
    Zi.transition = t;
  }
};
Y.unstable_act = Hp;
Y.useCallback = function(e, t) {
  return Be.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return Be.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return Be.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return Be.current.useEffect(e, t);
};
Y.useId = function() {
  return Be.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return Be.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return Be.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return Be.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return Be.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return Be.current.useRef(e);
};
Y.useState = function(e) {
  return Be.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return Be.current.useTransition();
};
Y.version = "18.3.1";
Dp.exports = Y;
var O = Dp.exports;
const ho = /* @__PURE__ */ sa(O);
var Vp = { exports: {} }, it = {}, Wp = { exports: {} }, qp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(L, F) {
    var w = L.length;
    L.push(F);
    e: for (; 0 < w; ) {
      var R = w - 1 >>> 1, ee = L[R];
      if (0 < i(ee, F)) L[R] = F, L[w] = ee, w = R;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var F = L[0], w = L.pop();
    if (w !== F) {
      L[0] = w;
      e: for (var R = 0, ee = L.length, k = ee >>> 1; R < k; ) {
        var ue = 2 * (R + 1) - 1, Re = L[ue], ne = ue + 1, Q = L[ne];
        if (0 > i(Re, w)) ne < ee && 0 > i(Q, Re) ? (L[R] = Q, L[ne] = w, R = ne) : (L[R] = Re, L[ue] = w, R = ue);
        else if (ne < ee && 0 > i(Q, w)) L[R] = Q, L[ne] = w, R = ne;
        else break e;
      }
    }
    return F;
  }
  function i(L, F) {
    var w = L.sortIndex - F.sortIndex;
    return w !== 0 ? w : L.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], p = 1, c = null, h = 3, d = !1, y = !1, v = !1, E = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(L) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= L) r(u), F.sortIndex = F.expirationTime, t(a, F);
      else break;
      F = n(u);
    }
  }
  function C(L) {
    if (v = !1, x(L), !y) if (n(a) !== null) y = !0, ie(j);
    else {
      var F = n(u);
      F !== null && te(C, F.startTime - L);
    }
  }
  function j(L, F) {
    y = !1, v && (v = !1, m(z), z = -1), d = !0;
    var w = h;
    try {
      for (x(F), c = n(a); c !== null && (!(c.expirationTime > F) || L && !A()); ) {
        var R = c.callback;
        if (typeof R == "function") {
          c.callback = null, h = c.priorityLevel;
          var ee = R(c.expirationTime <= F);
          F = e.unstable_now(), typeof ee == "function" ? c.callback = ee : c === n(a) && r(a), x(F);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var k = !0;
      else {
        var ue = n(u);
        ue !== null && te(C, ue.startTime - F), k = !1;
      }
      return k;
    } finally {
      c = null, h = w, d = !1;
    }
  }
  var b = !1, N = null, z = -1, $ = 5, S = -1;
  function A() {
    return !(e.unstable_now() - S < $);
  }
  function I() {
    if (N !== null) {
      var L = e.unstable_now();
      S = L;
      var F = !0;
      try {
        F = N(!0, L);
      } finally {
        F ? W() : (b = !1, N = null);
      }
    } else b = !1;
  }
  var W;
  if (typeof g == "function") W = function() {
    g(I);
  };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), H = K.port2;
    K.port1.onmessage = I, W = function() {
      H.postMessage(null);
    };
  } else W = function() {
    E(I, 0);
  };
  function ie(L) {
    N = L, b || (b = !0, W());
  }
  function te(L, F) {
    z = E(function() {
      L(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    y || d || (y = !0, ie(j));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(L) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = h;
    }
    var w = h;
    h = F;
    try {
      return L();
    } finally {
      h = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, F) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var w = h;
    h = L;
    try {
      return F();
    } finally {
      h = w;
    }
  }, e.unstable_scheduleCallback = function(L, F, w) {
    var R = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? R + w : R) : w = R, L) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = w + ee, L = { id: p++, callback: F, priorityLevel: L, startTime: w, expirationTime: ee, sortIndex: -1 }, w > R ? (L.sortIndex = w, t(u, L), n(a) === null && L === n(u) && (v ? (m(z), z = -1) : v = !0, te(C, w - R))) : (L.sortIndex = ee, t(a, L), y || d || (y = !0, ie(j))), L;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(L) {
    var F = h;
    return function() {
      var w = h;
      h = F;
      try {
        return L.apply(this, arguments);
      } finally {
        h = w;
      }
    };
  };
})(qp);
Wp.exports = qp;
var Am = Wp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm = O, rt = Am;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qp = /* @__PURE__ */ new Set(), Jr = {};
function An(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) Qp.add(t[e]);
}
var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ts = Object.prototype.hasOwnProperty, Rm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pu = {}, _u = {};
function Mm(e) {
  return ts.call(_u, e) ? !0 : ts.call(Pu, e) ? !1 : Rm.test(e) ? _u[e] = !0 : (Pu[e] = !0, !1);
}
function Fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Om(e, t, n, r) {
  if (t === null || typeof t > "u" || Fm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function $e(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var da = /[\-:]([a-z])/g;
function fa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    da,
    fa
  );
  ze[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(da, fa);
  ze[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(da, fa);
  ze[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ha(e, t, n, r) {
  var i = ze.hasOwnProperty(t) ? ze[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Om(t, n, i, r) && (n = null), r || i === null ? Mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pi = Symbol.for("react.element"), Un = Symbol.for("react.portal"), Hn = Symbol.for("react.fragment"), ma = Symbol.for("react.strict_mode"), ns = Symbol.for("react.profiler"), Kp = Symbol.for("react.provider"), Xp = Symbol.for("react.context"), ga = Symbol.for("react.forward_ref"), rs = Symbol.for("react.suspense"), is = Symbol.for("react.suspense_list"), ya = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Yp = Symbol.for("react.offscreen"), Iu = Symbol.iterator;
function Er(e) {
  return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var me = Object.assign, fl;
function Dr(e) {
  if (fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    fl = t && t[1] || "";
  }
  return `
` + fl + e;
}
var hl = !1;
function ml(e, t) {
  if (!e || hl) return "";
  hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (i[l] !== o[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || i[l] !== o[s]) {
              var a = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    hl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function Bm(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ml(e.type, !1), e;
    case 11:
      return e = ml(e.type.render, !1), e;
    case 1:
      return e = ml(e.type, !0), e;
    default:
      return "";
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Un:
      return "Portal";
    case ns:
      return "Profiler";
    case ma:
      return "StrictMode";
    case rs:
      return "Suspense";
    case is:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Xp:
      return (e.displayName || "Context") + ".Consumer";
    case Kp:
      return (e._context.displayName || "Context") + ".Provider";
    case ga:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ya:
      return t = e.displayName || null, t !== null ? t : os(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return os(e(t));
      } catch {
      }
  }
  return null;
}
function $m(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return os(t);
    case 8:
      return t === ma ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Um(e) {
  var t = Gp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _i(e) {
  e._valueTracker || (e._valueTracker = Um(e));
}
function Jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Gp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function mo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ls(e, t) {
  var n = t.checked;
  return me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zp(e, t) {
  t = t.checked, t != null && ha(e, "checked", t, !1);
}
function ss(e, t) {
  Zp(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? as(e, t.type, n) : t.hasOwnProperty("defaultValue") && as(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Au(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function as(e, t, n) {
  (t !== "number" || mo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function er(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Du(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function ed(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? td(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ii, nd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ii = Ii || document.createElement("div"), Ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ii.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
  Hm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Or[t] = Or[e];
  });
});
function rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px";
}
function id(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = rd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Vm = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ps(e, t) {
  if (t) {
    if (Vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function ds(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fs = null;
function xa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hs = null, tr = null, nr = null;
function Mu(e) {
  if (e = ki(e)) {
    if (typeof hs != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Qo(t), hs(e.stateNode, e.type, t));
  }
}
function od(e) {
  tr ? nr ? nr.push(e) : nr = [e] : tr = e;
}
function ld() {
  if (tr) {
    var e = tr, t = nr;
    if (nr = tr = null, Mu(e), t) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function sd(e, t) {
  return e(t);
}
function ad() {
}
var gl = !1;
function ud(e, t, n) {
  if (gl) return e(t, n);
  gl = !0;
  try {
    return sd(e, t, n);
  } finally {
    gl = !1, (tr !== null || nr !== null) && (ad(), ld());
  }
}
function ei(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var ms = !1;
if (Ft) try {
  var Nr = {};
  Object.defineProperty(Nr, "passive", { get: function() {
    ms = !0;
  } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
} catch {
  ms = !1;
}
function Wm(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Br = !1, go = null, yo = !1, gs = null, qm = { onError: function(e) {
  Br = !0, go = e;
} };
function Qm(e, t, n, r, i, o, l, s, a) {
  Br = !1, go = null, Wm.apply(qm, arguments);
}
function Km(e, t, n, r, i, o, l, s, a) {
  if (Qm.apply(this, arguments), Br) {
    if (Br) {
      var u = go;
      Br = !1, go = null;
    } else throw Error(P(198));
    yo || (yo = !0, gs = u);
  }
}
function Dn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fu(e) {
  if (Dn(e) !== e) throw Error(P(188));
}
function Xm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dn(e), t === null) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Fu(i), e;
        if (o === r) return Fu(i), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (s === r) {
          l = !0, r = i, n = o;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (s === r) {
            l = !0, r = o, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function pd(e) {
  return e = Xm(e), e !== null ? dd(e) : null;
}
function dd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fd = rt.unstable_scheduleCallback, Ou = rt.unstable_cancelCallback, Ym = rt.unstable_shouldYield, Gm = rt.unstable_requestPaint, ye = rt.unstable_now, Jm = rt.unstable_getCurrentPriorityLevel, wa = rt.unstable_ImmediatePriority, hd = rt.unstable_UserBlockingPriority, xo = rt.unstable_NormalPriority, Zm = rt.unstable_LowPriority, md = rt.unstable_IdlePriority, Ho = null, Tt = null;
function eg(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
    Tt.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var wt = Math.clz32 ? Math.clz32 : rg, tg = Math.log, ng = Math.LN2;
function rg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tg(e) / ng | 0) | 0;
}
var Li = 64, Ai = 4194304;
function Mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? r = Mr(s) : (o &= l, o !== 0 && (r = Mr(o)));
  } else l = n & ~i, l !== 0 ? r = Mr(l) : o !== 0 && (r = Mr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function ig(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function og(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - wt(o), s = 1 << l, a = i[l];
    a === -1 ? (!(s & n) || s & r) && (i[l] = ig(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function gd() {
  var e = Li;
  return Li <<= 1, !(Li & 4194240) && (Li = 64), e;
}
function yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
}
function lg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - wt(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function va(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var re = 0;
function yd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xd, ka, wd, vd, kd, xs = !1, Di = [], Zt = null, en = null, tn = null, ti = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), Xt = [], sg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ni.delete(t.pointerId);
  }
}
function jr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = ki(t), t !== null && ka(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function ag(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Zt = jr(Zt, e, t, n, r, i), !0;
    case "dragenter":
      return en = jr(en, e, t, n, r, i), !0;
    case "mouseover":
      return tn = jr(tn, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return ti.set(o, jr(ti.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, ni.set(o, jr(ni.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function bd(e) {
  var t = bn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cd(n), t !== null) {
          e.blockedOn = t, kd(e.priority, function() {
            wd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fs = r, n.target.dispatchEvent(r), fs = null;
    } else return t = ki(n), t !== null && ka(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  eo(e) && n.delete(t);
}
function ug() {
  xs = !1, Zt !== null && eo(Zt) && (Zt = null), en !== null && eo(en) && (en = null), tn !== null && eo(tn) && (tn = null), ti.forEach($u), ni.forEach($u);
}
function Tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xs || (xs = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, ug)));
}
function ri(e) {
  function t(i) {
    return Tr(i, e);
  }
  if (0 < Di.length) {
    Tr(Di[0], e);
    for (var n = 1; n < Di.length; n++) {
      var r = Di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zt !== null && Tr(Zt, e), en !== null && Tr(en, e), tn !== null && Tr(tn, e), ti.forEach(t), ni.forEach(t), n = 0; n < Xt.length; n++) r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); ) bd(n), n.blockedOn === null && Xt.shift();
}
var rr = Ut.ReactCurrentBatchConfig, vo = !0;
function cg(e, t, n, r) {
  var i = re, o = rr.transition;
  rr.transition = null;
  try {
    re = 1, ba(e, t, n, r);
  } finally {
    re = i, rr.transition = o;
  }
}
function pg(e, t, n, r) {
  var i = re, o = rr.transition;
  rr.transition = null;
  try {
    re = 4, ba(e, t, n, r);
  } finally {
    re = i, rr.transition = o;
  }
}
function ba(e, t, n, r) {
  if (vo) {
    var i = ws(e, t, n, r);
    if (i === null) jl(e, t, r, ko, n), Bu(e, r);
    else if (ag(i, e, t, n, r)) r.stopPropagation();
    else if (Bu(e, r), t & 4 && -1 < sg.indexOf(e)) {
      for (; i !== null; ) {
        var o = ki(i);
        if (o !== null && xd(o), o = ws(e, t, n, r), o === null && jl(e, t, r, ko, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else jl(e, t, r, null, n);
  }
}
var ko = null;
function ws(e, t, n, r) {
  if (ko = null, e = xa(r), e = bn(e), e !== null) if (t = Dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = cd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ko = e, null;
}
function Sd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jm()) {
        case wa:
          return 1;
        case hd:
          return 4;
        case xo:
        case Zm:
          return 16;
        case md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, Sa = null, to = null;
function Cd() {
  if (to) return to;
  var e, t = Sa, n = t.length, r, i = "value" in Gt ? Gt.value : Gt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return to = i.slice(e, 1 < r ? 1 - r : void 0);
}
function no(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ri() {
  return !0;
}
function Uu() {
  return !1;
}
function ot(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ri : Uu, this.isPropagationStopped = Uu, this;
  }
  return me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ri);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ri);
  }, persist: function() {
  }, isPersistent: Ri }), t;
}
var mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ca = ot(mr), vi = me({}, mr, { view: 0, detail: 0 }), dg = ot(vi), xl, wl, zr, Vo = me({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ea, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (xl = e.screenX - zr.screenX, wl = e.screenY - zr.screenY) : wl = xl = 0, zr = e), xl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : wl;
} }), Hu = ot(Vo), fg = me({}, Vo, { dataTransfer: 0 }), hg = ot(fg), mg = me({}, vi, { relatedTarget: 0 }), vl = ot(mg), gg = me({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yg = ot(gg), xg = me({}, mr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wg = ot(xg), vg = me({}, mr, { data: 0 }), Vu = ot(vg), kg = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, bg = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Sg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sg[e]) ? !!t[e] : !1;
}
function Ea() {
  return Cg;
}
var Eg = me({}, vi, { key: function(e) {
  if (e.key) {
    var t = kg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = no(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ea, charCode: function(e) {
  return e.type === "keypress" ? no(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? no(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ng = ot(Eg), jg = me({}, Vo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wu = ot(jg), Tg = me({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ea }), zg = ot(Tg), Pg = me({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _g = ot(Pg), Ig = me({}, Vo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Lg = ot(Ig), Ag = [9, 13, 27, 32], Na = Ft && "CompositionEvent" in window, $r = null;
Ft && "documentMode" in document && ($r = document.documentMode);
var Dg = Ft && "TextEvent" in window && !$r, Ed = Ft && (!Na || $r && 8 < $r && 11 >= $r), qu = " ", Qu = !1;
function Nd(e, t) {
  switch (e) {
    case "keyup":
      return Ag.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function jd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vn = !1;
function Rg(e, t) {
  switch (e) {
    case "compositionend":
      return jd(t);
    case "keypress":
      return t.which !== 32 ? null : (Qu = !0, qu);
    case "textInput":
      return e = t.data, e === qu && Qu ? null : e;
    default:
      return null;
  }
}
function Mg(e, t) {
  if (Vn) return e === "compositionend" || !Na && Nd(e, t) ? (e = Cd(), to = Sa = Gt = null, Vn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fg[e.type] : t === "textarea";
}
function Td(e, t, n, r) {
  od(r), t = bo(t, "onChange"), 0 < t.length && (n = new Ca("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ur = null, ii = null;
function Og(e) {
  Od(e, 0);
}
function Wo(e) {
  var t = Qn(e);
  if (Jp(t)) return e;
}
function Bg(e, t) {
  if (e === "change") return t;
}
var zd = !1;
if (Ft) {
  var kl;
  if (Ft) {
    var bl = "oninput" in document;
    if (!bl) {
      var Xu = document.createElement("div");
      Xu.setAttribute("oninput", "return;"), bl = typeof Xu.oninput == "function";
    }
    kl = bl;
  } else kl = !1;
  zd = kl && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
  Ur && (Ur.detachEvent("onpropertychange", Pd), ii = Ur = null);
}
function Pd(e) {
  if (e.propertyName === "value" && Wo(ii)) {
    var t = [];
    Td(t, ii, e, xa(e)), ud(Og, t);
  }
}
function $g(e, t, n) {
  e === "focusin" ? (Yu(), Ur = t, ii = n, Ur.attachEvent("onpropertychange", Pd)) : e === "focusout" && Yu();
}
function Ug(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wo(ii);
}
function Hg(e, t) {
  if (e === "click") return Wo(t);
}
function Vg(e, t) {
  if (e === "input" || e === "change") return Wo(t);
}
function Wg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : Wg;
function oi(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ts.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function Gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ju(e, t) {
  var n = Gu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gu(n);
  }
}
function _d(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _d(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Id() {
  for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mo(e.document);
  }
  return t;
}
function ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qg(e) {
  var t = Id(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _d(n.ownerDocument.documentElement, n)) {
    if (r !== null && ja(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ju(n, o);
        var l = Ju(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Qg = Ft && "documentMode" in document && 11 >= document.documentMode, Wn = null, vs = null, Hr = null, ks = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ks || Wn == null || Wn !== mo(r) || (r = Wn, "selectionStart" in r && ja(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hr && oi(Hr, r) || (Hr = r, r = bo(vs, "onSelect"), 0 < r.length && (t = new Ca("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Wn)));
}
function Mi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qn = { animationend: Mi("Animation", "AnimationEnd"), animationiteration: Mi("Animation", "AnimationIteration"), animationstart: Mi("Animation", "AnimationStart"), transitionend: Mi("Transition", "TransitionEnd") }, Sl = {}, Ld = {};
Ft && (Ld = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
function qo(e) {
  if (Sl[e]) return Sl[e];
  if (!qn[e]) return e;
  var t = qn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ld) return Sl[e] = t[n];
  return e;
}
var Ad = qo("animationend"), Dd = qo("animationiteration"), Rd = qo("animationstart"), Md = qo("transitionend"), Fd = /* @__PURE__ */ new Map(), ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, t) {
  Fd.set(e, t), An(t, [e]);
}
for (var Cl = 0; Cl < ec.length; Cl++) {
  var El = ec[Cl], Kg = El.toLowerCase(), Xg = El[0].toUpperCase() + El.slice(1);
  pn(Kg, "on" + Xg);
}
pn(Ad, "onAnimationEnd");
pn(Dd, "onAnimationIteration");
pn(Rd, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Md, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
function tc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Km(r, t, void 0, e), e.currentTarget = null;
}
function Od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== o && i.isPropagationStopped()) break e;
        tc(i, s, u), o = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped()) break e;
        tc(i, s, u), o = a;
      }
    }
  }
  if (yo) throw e = gs, yo = !1, gs = null, e;
}
function ce(e, t) {
  var n = t[Ns];
  n === void 0 && (n = t[Ns] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Bd(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Bd(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
  if (!e[Fi]) {
    e[Fi] = !0, Qp.forEach(function(n) {
      n !== "selectionchange" && (Yg.has(n) || Nl(n, !1, e), Nl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || (t[Fi] = !0, Nl("selectionchange", !1, t));
  }
}
function Bd(e, t, n, r) {
  switch (Sd(t)) {
    case 1:
      var i = cg;
      break;
    case 4:
      i = pg;
      break;
    default:
      i = ba;
  }
  n = i.bind(null, t, n, e), i = void 0, !ms || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function jl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = bn(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = o = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  ud(function() {
    var u = o, p = xa(n), c = [];
    e: {
      var h = Fd.get(e);
      if (h !== void 0) {
        var d = Ca, y = e;
        switch (e) {
          case "keypress":
            if (no(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Ng;
            break;
          case "focusin":
            y = "focus", d = vl;
            break;
          case "focusout":
            y = "blur", d = vl;
            break;
          case "beforeblur":
          case "afterblur":
            d = vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = hg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = zg;
            break;
          case Ad:
          case Dd:
          case Rd:
            d = yg;
            break;
          case Md:
            d = _g;
            break;
          case "scroll":
            d = dg;
            break;
          case "wheel":
            d = Lg;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = wg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Wu;
        }
        var v = (t & 4) !== 0, E = !v && e === "scroll", m = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var g = u, x; g !== null; ) {
          x = g;
          var C = x.stateNode;
          if (x.tag === 5 && C !== null && (x = C, m !== null && (C = ei(g, m), C != null && v.push(si(g, C, x)))), E) break;
          g = g.return;
        }
        0 < v.length && (h = new d(h, y, null, n, p), c.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", h && n !== fs && (y = n.relatedTarget || n.fromElement) && (bn(y) || y[Ot])) break e;
        if ((d || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (y = n.relatedTarget || n.toElement, d = u, y = y ? bn(y) : null, y !== null && (E = Dn(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (d = null, y = u), d !== y)) {
          if (v = Hu, C = "onMouseLeave", m = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (v = Wu, C = "onPointerLeave", m = "onPointerEnter", g = "pointer"), E = d == null ? h : Qn(d), x = y == null ? h : Qn(y), h = new v(C, g + "leave", d, n, p), h.target = E, h.relatedTarget = x, C = null, bn(p) === u && (v = new v(m, g + "enter", y, n, p), v.target = x, v.relatedTarget = E, C = v), E = C, d && y) t: {
            for (v = d, m = y, g = 0, x = v; x; x = On(x)) g++;
            for (x = 0, C = m; C; C = On(C)) x++;
            for (; 0 < g - x; ) v = On(v), g--;
            for (; 0 < x - g; ) m = On(m), x--;
            for (; g--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = On(v), m = On(m);
            }
            v = null;
          }
          else v = null;
          d !== null && nc(c, h, d, v, !1), y !== null && E !== null && nc(c, E, y, v, !0);
        }
      }
      e: {
        if (h = u ? Qn(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var j = Bg;
        else if (Ku(h)) if (zd) j = Vg;
        else {
          j = Ug;
          var b = $g;
        }
        else (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = Hg);
        if (j && (j = j(e, u))) {
          Td(c, j, n, p);
          break e;
        }
        b && b(e, h, u), e === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number" && as(h, "number", h.value);
      }
      switch (b = u ? Qn(u) : window, e) {
        case "focusin":
          (Ku(b) || b.contentEditable === "true") && (Wn = b, vs = u, Hr = null);
          break;
        case "focusout":
          Hr = vs = Wn = null;
          break;
        case "mousedown":
          ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ks = !1, Zu(c, n, p);
          break;
        case "selectionchange":
          if (Qg) break;
        case "keydown":
        case "keyup":
          Zu(c, n, p);
      }
      var N;
      if (Na) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else Vn ? Nd(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Ed && n.locale !== "ko" && (Vn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Vn && (N = Cd()) : (Gt = p, Sa = "value" in Gt ? Gt.value : Gt.textContent, Vn = !0)), b = bo(u, z), 0 < b.length && (z = new Vu(z, e, null, n, p), c.push({ event: z, listeners: b }), N ? z.data = N : (N = jd(n), N !== null && (z.data = N)))), (N = Dg ? Rg(e, n) : Mg(e, n)) && (u = bo(u, "onBeforeInput"), 0 < u.length && (p = new Vu("onBeforeInput", "beforeinput", null, n, p), c.push({ event: p, listeners: u }), p.data = N));
    }
    Od(c, t);
  });
}
function si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = ei(e, n), o != null && r.unshift(si(e, o, i)), o = ei(e, t), o != null && r.push(si(e, o, i))), e = e.return;
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (a = ei(n, o), a != null && l.unshift(si(n, a, s))) : i || (a = ei(n, o), a != null && l.push(si(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Gg = /\r\n?/g, Jg = /\u0000|\uFFFD/g;
function rc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gg, `
`).replace(Jg, "");
}
function Oi(e, t, n) {
  if (t = rc(t), rc(e) !== t && n) throw Error(P(425));
}
function So() {
}
var bs = null, Ss = null;
function Cs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Es = typeof setTimeout == "function" ? setTimeout : void 0, Zg = typeof clearTimeout == "function" ? clearTimeout : void 0, ic = typeof Promise == "function" ? Promise : void 0, e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ic < "u" ? function(e) {
  return ic.resolve(null).then(e).catch(t0);
} : Es;
function t0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Tl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), ri(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ri(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function oc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gr = Math.random().toString(36).slice(2), jt = "__reactFiber$" + gr, ai = "__reactProps$" + gr, Ot = "__reactContainer$" + gr, Ns = "__reactEvents$" + gr, n0 = "__reactListeners$" + gr, r0 = "__reactHandles$" + gr;
function bn(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[jt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = oc(e); e !== null; ) {
        if (n = e[jt]) return n;
        e = oc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ki(e) {
  return e = e[jt] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Qo(e) {
  return e[ai] || null;
}
var js = [], Kn = -1;
function dn(e) {
  return { current: e };
}
function pe(e) {
  0 > Kn || (e.current = js[Kn], js[Kn] = null, Kn--);
}
function ae(e, t) {
  Kn++, js[Kn] = e.current, e.current = t;
}
var un = {}, Ae = dn(un), We = dn(!1), Tn = un;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function qe(e) {
  return e = e.childContextTypes, e != null;
}
function Co() {
  pe(We), pe(Ae);
}
function lc(e, t, n) {
  if (Ae.current !== un) throw Error(P(168));
  ae(Ae, t), ae(We, n);
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, $m(e) || "Unknown", i));
  return me({}, n, r);
}
function Eo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Tn = Ae.current, ae(Ae, e), ae(We, We.current), !0;
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = $d(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, pe(We), pe(Ae), ae(Ae, e)) : pe(We), ae(We, n);
}
var At = null, Ko = !1, zl = !1;
function Ud(e) {
  At === null ? At = [e] : At.push(e);
}
function i0(e) {
  Ko = !0, Ud(e);
}
function fn() {
  if (!zl && At !== null) {
    zl = !0;
    var e = 0, t = re;
    try {
      var n = At;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      At = null, Ko = !1;
    } catch (i) {
      throw At !== null && (At = At.slice(e + 1)), fd(wa, fn), i;
    } finally {
      re = t, zl = !1;
    }
  }
  return null;
}
var Xn = [], Yn = 0, No = null, jo = 0, lt = [], st = 0, zn = null, Dt = 1, Rt = "";
function xn(e, t) {
  Xn[Yn++] = jo, Xn[Yn++] = No, No = e, jo = t;
}
function Hd(e, t, n) {
  lt[st++] = Dt, lt[st++] = Rt, lt[st++] = zn, zn = e;
  var r = Dt;
  e = Rt;
  var i = 32 - wt(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - wt(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Dt = 1 << 32 - wt(t) + i | n << i | r, Rt = o + e;
  } else Dt = 1 << o | n << i | r, Rt = e;
}
function Ta(e) {
  e.return !== null && (xn(e, 1), Hd(e, 1, 0));
}
function za(e) {
  for (; e === No; ) No = Xn[--Yn], Xn[Yn] = null, jo = Xn[--Yn], Xn[Yn] = null;
  for (; e === zn; ) zn = lt[--st], lt[st] = null, Rt = lt[--st], lt[st] = null, Dt = lt[--st], lt[st] = null;
}
var tt = null, et = null, de = !1, yt = null;
function Vd(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ac(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, et = nn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zn !== null ? { id: Dt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, et = null, !0) : !1;
    default:
      return !1;
  }
}
function Ts(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zs(e) {
  if (de) {
    var t = et;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (Ts(e)) throw Error(P(418));
        t = nn(n.nextSibling);
        var r = tt;
        t && ac(e, t) ? Vd(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, tt = e);
      }
    } else {
      if (Ts(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, de = !1, tt = e;
    }
  }
}
function uc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  tt = e;
}
function Bi(e) {
  if (e !== tt) return !1;
  if (!de) return uc(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps)), t && (t = et)) {
    if (Ts(e)) throw Wd(), Error(P(418));
    for (; t; ) Vd(e, t), t = nn(t.nextSibling);
  }
  if (uc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = nn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wd() {
  for (var e = et; e; ) e = nn(e.nextSibling);
}
function ar() {
  et = tt = null, de = !1;
}
function Pa(e) {
  yt === null ? yt = [e] : yt.push(e);
}
var o0 = Ut.ReactCurrentBatchConfig;
function Pr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var s = i.refs;
        l === null ? delete s[o] : s[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function $i(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function cc(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(m, g) {
    if (e) {
      var x = m.deletions;
      x === null ? (m.deletions = [g], m.flags |= 16) : x.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), g = g.sibling;
    return null;
  }
  function r(m, g) {
    for (m = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
    return m;
  }
  function i(m, g) {
    return m = sn(m, g), m.index = 0, m.sibling = null, m;
  }
  function o(m, g, x) {
    return m.index = x, e ? (x = m.alternate, x !== null ? (x = x.index, x < g ? (m.flags |= 2, g) : x) : (m.flags |= 2, g)) : (m.flags |= 1048576, g);
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, g, x, C) {
    return g === null || g.tag !== 6 ? (g = Rl(x, m.mode, C), g.return = m, g) : (g = i(g, x), g.return = m, g);
  }
  function a(m, g, x, C) {
    var j = x.type;
    return j === Hn ? p(m, g, x.props.children, C, x.key) : g !== null && (g.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Qt && cc(j) === g.type) ? (C = i(g, x.props), C.ref = Pr(m, g, x), C.return = m, C) : (C = uo(x.type, x.key, x.props, null, m.mode, C), C.ref = Pr(m, g, x), C.return = m, C);
  }
  function u(m, g, x, C) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Ml(x, m.mode, C), g.return = m, g) : (g = i(g, x.children || []), g.return = m, g);
  }
  function p(m, g, x, C, j) {
    return g === null || g.tag !== 7 ? (g = Nn(x, m.mode, C, j), g.return = m, g) : (g = i(g, x), g.return = m, g);
  }
  function c(m, g, x) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = Rl("" + g, m.mode, x), g.return = m, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pi:
          return x = uo(g.type, g.key, g.props, null, m.mode, x), x.ref = Pr(m, null, g), x.return = m, x;
        case Un:
          return g = Ml(g, m.mode, x), g.return = m, g;
        case Qt:
          var C = g._init;
          return c(m, C(g._payload), x);
      }
      if (Rr(g) || Er(g)) return g = Nn(g, m.mode, x, null), g.return = m, g;
      $i(m, g);
    }
    return null;
  }
  function h(m, g, x, C) {
    var j = g !== null ? g.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return j !== null ? null : s(m, g, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pi:
          return x.key === j ? a(m, g, x, C) : null;
        case Un:
          return x.key === j ? u(m, g, x, C) : null;
        case Qt:
          return j = x._init, h(
            m,
            g,
            j(x._payload),
            C
          );
      }
      if (Rr(x) || Er(x)) return j !== null ? null : p(m, g, x, C, null);
      $i(m, x);
    }
    return null;
  }
  function d(m, g, x, C, j) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return m = m.get(x) || null, s(g, m, "" + C, j);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Pi:
          return m = m.get(C.key === null ? x : C.key) || null, a(g, m, C, j);
        case Un:
          return m = m.get(C.key === null ? x : C.key) || null, u(g, m, C, j);
        case Qt:
          var b = C._init;
          return d(m, g, x, b(C._payload), j);
      }
      if (Rr(C) || Er(C)) return m = m.get(x) || null, p(g, m, C, j, null);
      $i(g, C);
    }
    return null;
  }
  function y(m, g, x, C) {
    for (var j = null, b = null, N = g, z = g = 0, $ = null; N !== null && z < x.length; z++) {
      N.index > z ? ($ = N, N = null) : $ = N.sibling;
      var S = h(m, N, x[z], C);
      if (S === null) {
        N === null && (N = $);
        break;
      }
      e && N && S.alternate === null && t(m, N), g = o(S, g, z), b === null ? j = S : b.sibling = S, b = S, N = $;
    }
    if (z === x.length) return n(m, N), de && xn(m, z), j;
    if (N === null) {
      for (; z < x.length; z++) N = c(m, x[z], C), N !== null && (g = o(N, g, z), b === null ? j = N : b.sibling = N, b = N);
      return de && xn(m, z), j;
    }
    for (N = r(m, N); z < x.length; z++) $ = d(N, m, z, x[z], C), $ !== null && (e && $.alternate !== null && N.delete($.key === null ? z : $.key), g = o($, g, z), b === null ? j = $ : b.sibling = $, b = $);
    return e && N.forEach(function(A) {
      return t(m, A);
    }), de && xn(m, z), j;
  }
  function v(m, g, x, C) {
    var j = Er(x);
    if (typeof j != "function") throw Error(P(150));
    if (x = j.call(x), x == null) throw Error(P(151));
    for (var b = j = null, N = g, z = g = 0, $ = null, S = x.next(); N !== null && !S.done; z++, S = x.next()) {
      N.index > z ? ($ = N, N = null) : $ = N.sibling;
      var A = h(m, N, S.value, C);
      if (A === null) {
        N === null && (N = $);
        break;
      }
      e && N && A.alternate === null && t(m, N), g = o(A, g, z), b === null ? j = A : b.sibling = A, b = A, N = $;
    }
    if (S.done) return n(
      m,
      N
    ), de && xn(m, z), j;
    if (N === null) {
      for (; !S.done; z++, S = x.next()) S = c(m, S.value, C), S !== null && (g = o(S, g, z), b === null ? j = S : b.sibling = S, b = S);
      return de && xn(m, z), j;
    }
    for (N = r(m, N); !S.done; z++, S = x.next()) S = d(N, m, z, S.value, C), S !== null && (e && S.alternate !== null && N.delete(S.key === null ? z : S.key), g = o(S, g, z), b === null ? j = S : b.sibling = S, b = S);
    return e && N.forEach(function(I) {
      return t(m, I);
    }), de && xn(m, z), j;
  }
  function E(m, g, x, C) {
    if (typeof x == "object" && x !== null && x.type === Hn && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pi:
          e: {
            for (var j = x.key, b = g; b !== null; ) {
              if (b.key === j) {
                if (j = x.type, j === Hn) {
                  if (b.tag === 7) {
                    n(m, b.sibling), g = i(b, x.props.children), g.return = m, m = g;
                    break e;
                  }
                } else if (b.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Qt && cc(j) === b.type) {
                  n(m, b.sibling), g = i(b, x.props), g.ref = Pr(m, b, x), g.return = m, m = g;
                  break e;
                }
                n(m, b);
                break;
              } else t(m, b);
              b = b.sibling;
            }
            x.type === Hn ? (g = Nn(x.props.children, m.mode, C, x.key), g.return = m, m = g) : (C = uo(x.type, x.key, x.props, null, m.mode, C), C.ref = Pr(m, g, x), C.return = m, m = C);
          }
          return l(m);
        case Un:
          e: {
            for (b = x.key; g !== null; ) {
              if (g.key === b) if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                n(m, g.sibling), g = i(g, x.children || []), g.return = m, m = g;
                break e;
              } else {
                n(m, g);
                break;
              }
              else t(m, g);
              g = g.sibling;
            }
            g = Ml(x, m.mode, C), g.return = m, m = g;
          }
          return l(m);
        case Qt:
          return b = x._init, E(m, g, b(x._payload), C);
      }
      if (Rr(x)) return y(m, g, x, C);
      if (Er(x)) return v(m, g, x, C);
      $i(m, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, g !== null && g.tag === 6 ? (n(m, g.sibling), g = i(g, x), g.return = m, m = g) : (n(m, g), g = Rl(x, m.mode, C), g.return = m, m = g), l(m)) : n(m, g);
  }
  return E;
}
var ur = qd(!0), Qd = qd(!1), To = dn(null), zo = null, Gn = null, _a = null;
function Ia() {
  _a = Gn = zo = null;
}
function La(e) {
  var t = To.current;
  pe(To), e._currentValue = t;
}
function Ps(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ir(e, t) {
  zo = e, _a = Gn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (_a !== e) if (e = { context: e, memoizedValue: t, next: null }, Gn === null) {
    if (zo === null) throw Error(P(308));
    Gn = e, zo.dependencies = { lanes: 0, firstContext: e };
  } else Gn = Gn.next = e;
  return t;
}
var Sn = null;
function Aa(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function Kd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Aa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Bt(e, r);
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function Da(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Bt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Aa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Bt(e, n);
}
function ro(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
function pc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Po(e, t, n, r) {
  var i = e.updateQueue;
  Kt = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? o = u : l.next = u, l = a;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, s = p.lastBaseUpdate, s !== l && (s === null ? p.firstBaseUpdate = u : s.next = u, p.lastBaseUpdate = a));
  }
  if (o !== null) {
    var c = i.baseState;
    l = 0, p = u = a = null, s = o;
    do {
      var h = s.lane, d = s.eventTime;
      if ((r & h) === h) {
        p !== null && (p = p.next = {
          eventTime: d,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, v = s;
          switch (h = t, d = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                c = y.call(d, c, h);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, h = typeof y == "function" ? y.call(d, c, h) : y, h == null) break e;
              c = me({}, c, h);
              break e;
            case 2:
              Kt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [s] : h.push(s));
      } else d = { eventTime: d, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, p === null ? (u = p = d, a = c) : p = p.next = d, l |= h;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
      }
    } while (!0);
    if (p === null && (a = c), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    _n |= l, e.lanes = l, e.memoizedState = c;
  }
}
function dc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
      i.call(r);
    }
  }
}
var bi = {}, zt = dn(bi), ui = dn(bi), ci = dn(bi);
function Cn(e) {
  if (e === bi) throw Error(P(174));
  return e;
}
function Ra(e, t) {
  switch (ae(ci, t), ae(ui, e), ae(zt, bi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cs(t, e);
  }
  pe(zt), ae(zt, t);
}
function cr() {
  pe(zt), pe(ui), pe(ci);
}
function Yd(e) {
  Cn(ci.current);
  var t = Cn(zt.current), n = cs(t, e.type);
  t !== n && (ae(ui, e), ae(zt, n));
}
function Ma(e) {
  ui.current === e && (pe(zt), pe(ui));
}
var fe = dn(0);
function _o(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Pl = [];
function Fa() {
  for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
  Pl.length = 0;
}
var io = Ut.ReactCurrentDispatcher, _l = Ut.ReactCurrentBatchConfig, Pn = 0, he = null, Se = null, Ee = null, Io = !1, Vr = !1, pi = 0, l0 = 0;
function Pe() {
  throw Error(P(321));
}
function Oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Ba(e, t, n, r, i, o) {
  if (Pn = o, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, io.current = e === null || e.memoizedState === null ? c0 : p0, e = n(r, i), Vr) {
    o = 0;
    do {
      if (Vr = !1, pi = 0, 25 <= o) throw Error(P(301));
      o += 1, Ee = Se = null, t.updateQueue = null, io.current = d0, e = n(r, i);
    } while (Vr);
  }
  if (io.current = Lo, t = Se !== null && Se.next !== null, Pn = 0, Ee = Se = he = null, Io = !1, t) throw Error(P(300));
  return e;
}
function $a() {
  var e = pi !== 0;
  return pi = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function dt() {
  if (Se === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ee === null ? he.memoizedState : Ee.next;
  if (t !== null) Ee = t, Se = e;
  else {
    if (e === null) throw Error(P(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function di(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Il(e) {
  var t = dt(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Se, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var s = l = null, a = null, u = o;
    do {
      var p = u.lane;
      if ((Pn & p) === p) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = c, l = r) : a = a.next = c, he.lanes |= p, _n |= p;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? l = r : a.next = s, bt(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, he.lanes |= o, _n |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = dt(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    bt(o, t.memoizedState) || (Ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Gd() {
}
function Jd(e, t) {
  var n = he, r = dt(), i = t(), o = !bt(r.memoizedState, i);
  if (o && (r.memoizedState = i, Ve = !0), r = r.queue, Ua(tf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, fi(9, ef.bind(null, n, r, i, t), void 0, null), Ne === null) throw Error(P(349));
    Pn & 30 || Zd(n, t, i);
  }
  return i;
}
function Zd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ef(e, t, n, r) {
  t.value = n, t.getSnapshot = r, nf(t) && rf(e);
}
function tf(e, t, n) {
  return n(function() {
    nf(t) && rf(e);
  });
}
function nf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function rf(e) {
  var t = Bt(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function fc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: di, lastRenderedState: e }, t.queue = e, e = e.dispatch = u0.bind(null, he, e), [t.memoizedState, e];
}
function fi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function of() {
  return dt().memoizedState;
}
function oo(e, t, n, r) {
  var i = Et();
  he.flags |= e, i.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Xo(e, t, n, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Se !== null) {
    var l = Se.memoizedState;
    if (o = l.destroy, r !== null && Oa(r, l.deps)) {
      i.memoizedState = fi(t, n, o, r);
      return;
    }
  }
  he.flags |= e, i.memoizedState = fi(1 | t, n, o, r);
}
function hc(e, t) {
  return oo(8390656, 8, e, t);
}
function Ua(e, t) {
  return Xo(2048, 8, e, t);
}
function lf(e, t) {
  return Xo(4, 2, e, t);
}
function sf(e, t) {
  return Xo(4, 4, e, t);
}
function af(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function uf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xo(4, 4, af.bind(null, t, e), n);
}
function Ha() {
}
function cf(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pf(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function df(e, t, n) {
  return Pn & 21 ? (bt(n, t) || (n = gd(), he.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function s0(e, t) {
  var n = re;
  re = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _l.transition;
  _l.transition = {};
  try {
    e(!1), t();
  } finally {
    re = n, _l.transition = r;
  }
}
function ff() {
  return dt().memoizedState;
}
function a0(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, hf(e)) mf(t, n);
  else if (n = Kd(e, t, n, r), n !== null) {
    var i = Oe();
    vt(n, e, r, i), gf(n, t, r);
  }
}
function u0(e, t, n) {
  var r = ln(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hf(e)) mf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, s = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = s, bt(s, l)) {
        var a = t.interleaved;
        a === null ? (i.next = i, Aa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Kd(e, t, i, r), n !== null && (i = Oe(), vt(n, e, r, i), gf(n, t, r));
  }
}
function hf(e) {
  var t = e.alternate;
  return e === he || t !== null && t === he;
}
function mf(e, t) {
  Vr = Io = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function gf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
var Lo = { readContext: pt, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, c0 = { readContext: pt, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: hc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oo(
    4194308,
    4,
    af.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return oo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return oo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = a0.bind(null, he, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: fc, useDebugValue: Ha, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = fc(!1), t = e[0];
  return e = s0.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = he, i = Et();
  if (de) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), Ne === null) throw Error(P(349));
    Pn & 30 || Zd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, hc(tf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, fi(9, ef.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Ne.identifierPrefix;
  if (de) {
    var n = Rt, r = Dt;
    n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = pi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = l0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, p0 = {
  readContext: pt,
  useCallback: cf,
  useContext: pt,
  useEffect: Ua,
  useImperativeHandle: uf,
  useInsertionEffect: lf,
  useLayoutEffect: sf,
  useMemo: pf,
  useReducer: Il,
  useRef: of,
  useState: function() {
    return Il(di);
  },
  useDebugValue: Ha,
  useDeferredValue: function(e) {
    var t = dt();
    return df(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = Il(di)[0], t = dt().memoizedState;
    return [e, t];
  },
  useMutableSource: Gd,
  useSyncExternalStore: Jd,
  useId: ff,
  unstable_isNewReconciler: !1
}, d0 = { readContext: pt, useCallback: cf, useContext: pt, useEffect: Ua, useImperativeHandle: uf, useInsertionEffect: lf, useLayoutEffect: sf, useMemo: pf, useReducer: Ll, useRef: of, useState: function() {
  return Ll(di);
}, useDebugValue: Ha, useDeferredValue: function(e) {
  var t = dt();
  return Se === null ? t.memoizedState = e : df(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = Ll(di)[0], t = dt().memoizedState;
  return [e, t];
}, useMutableSource: Gd, useSyncExternalStore: Jd, useId: ff, unstable_isNewReconciler: !1 };
function mt(e, t) {
  if (e && e.defaultProps) {
    t = me({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _s(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Yo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), i = ln(e), o = Mt(r, i);
  o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (vt(t, e, i, r), ro(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), i = ln(e), o = Mt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (vt(t, e, i, r), ro(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Oe(), r = ln(e), i = Mt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = rn(e, i, r), t !== null && (vt(t, e, r, n), ro(t, e, r));
} };
function mc(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !oi(n, r) || !oi(i, o) : !0;
}
function yf(e, t, n) {
  var r = !1, i = un, o = t.contextType;
  return typeof o == "object" && o !== null ? o = pt(o) : (i = qe(t) ? Tn : Ae.current, r = t.contextTypes, o = (r = r != null) ? sr(e, i) : un), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function gc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yo.enqueueReplaceState(t, t.state, null);
}
function Is(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Da(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = pt(o) : (o = qe(t) ? Tn : Ae.current, i.context = sr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (_s(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Yo.enqueueReplaceState(i, i.state, null), Po(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function pr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Bm(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ls(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var f0 = typeof WeakMap == "function" ? WeakMap : Map;
function xf(e, t, n) {
  n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Do || (Do = !0, Hs = r), Ls(e, t);
  }, n;
}
function wf(e, t, n) {
  n = Mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Ls(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ls(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function yc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new f0();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = j0.bind(null, e, t, n), t.then(e, e));
}
function xc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wc(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e);
}
var h0 = Ut.ReactCurrentOwner, Ve = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Qd(t, null, n, r) : ur(t, e.child, n, r);
}
function vc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return ir(t, i), r = Ba(e, t, n, r, o, i), n = $a(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, $t(e, t, i)) : (de && n && Ta(t), t.flags |= 1, Me(e, t, r, i), t.child);
}
function kc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ga(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, vf(e, t, o, r, i)) : (e = uo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : oi, n(l, r) && e.ref === t.ref) return $t(e, t, i);
  }
  return t.flags |= 1, e = sn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (oi(o, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, $t(e, t, i);
  }
  return As(e, t, n, r, i);
}
function kf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Zn, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Zn, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ae(Zn, Ze), Ze |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ae(Zn, Ze), Ze |= r;
  return Me(e, t, i, n), t.child;
}
function bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function As(e, t, n, r, i) {
  var o = qe(n) ? Tn : Ae.current;
  return o = sr(t, o), ir(t, i), n = Ba(e, t, n, r, o, i), r = $a(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, $t(e, t, i)) : (de && r && Ta(t), t.flags |= 1, Me(e, t, n, i), t.child);
}
function bc(e, t, n, r, i) {
  if (qe(n)) {
    var o = !0;
    Eo(t);
  } else o = !1;
  if (ir(t, i), t.stateNode === null) lo(e, t), yf(t, n, r), Is(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = pt(u) : (u = qe(n) ? Tn : Ae.current, u = sr(t, u));
    var p = n.getDerivedStateFromProps, c = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && gc(t, l, r, u), Kt = !1;
    var h = t.memoizedState;
    l.state = h, Po(t, r, l, i), a = t.memoizedState, s !== r || h !== a || We.current || Kt ? (typeof p == "function" && (_s(t, n, p, r), a = t.memoizedState), (s = Kt || mc(t, n, s, r, h, a, u)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Xd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : mt(t.type, s), l.props = u, c = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = pt(a) : (a = qe(n) ? Tn : Ae.current, a = sr(t, a));
    var d = n.getDerivedStateFromProps;
    (p = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== c || h !== a) && gc(t, l, r, a), Kt = !1, h = t.memoizedState, l.state = h, Po(t, r, l, i);
    var y = t.memoizedState;
    s !== c || h !== y || We.current || Kt ? (typeof d == "function" && (_s(t, n, d, r), y = t.memoizedState), (u = Kt || mc(t, n, u, r, h, y, a) || !1) ? (p || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ds(e, t, n, r, o, i);
}
function Ds(e, t, n, r, i, o) {
  bf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && sc(t, n, !1), $t(e, t, o);
  r = t.stateNode, h0.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = ur(t, e.child, null, o), t.child = ur(t, null, s, o)) : Me(e, t, s, o), t.memoizedState = r.state, i && sc(t, n, !0), t.child;
}
function Sf(e) {
  var t = e.stateNode;
  t.pendingContext ? lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lc(e, t.context, !1), Ra(e, t.containerInfo);
}
function Sc(e, t, n, r, i) {
  return ar(), Pa(i), t.flags |= 256, Me(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ms(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cf(e, t, n) {
  var r = t.pendingProps, i = fe.current, o = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ae(fe, i & 1), e === null)
    return zs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Zo(l, r, 0, null), e = Nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ms(n), t.memoizedState = Rs, e) : Va(t, l));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return m0(e, t, l, r, s, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, s = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = sn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = sn(s, o) : (o = Nn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Ms(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Rs, r;
  }
  return o = e.child, e = o.sibling, r = sn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Va(e, t) {
  return t = Zo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ui(e, t, n, r) {
  return r !== null && Pa(r), ur(t, e.child, null, n), e = Va(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function m0(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Al(Error(P(422))), Ui(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Zo({ mode: "visible", children: r.children }, i, 0, null), o = Nn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ur(t, e.child, null, l), t.child.memoizedState = Ms(l), t.memoizedState = Rs, o);
  if (!(t.mode & 1)) return Ui(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, o = Error(P(419)), r = Al(o, r, void 0), Ui(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Ve || s) {
    if (r = Ne, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Bt(e, i), vt(r, e, i, -1));
    }
    return Ya(), r = Al(Error(P(421))), Ui(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = T0.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, et = nn(i.nextSibling), tt = t, de = !0, yt = null, e !== null && (lt[st++] = Dt, lt[st++] = Rt, lt[st++] = zn, Dt = e.id, Rt = e.overflow, zn = t), t = Va(t, r.children), t.flags |= 4096, t);
}
function Cc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ps(e.return, t, n);
}
function Dl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Ef(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Me(e, t, r.children, n), r = fe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cc(e, n, t);
      else if (e.tag === 19) Cc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ae(fe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && _o(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Dl(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && _o(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Dl(t, !0, n, null, o);
      break;
    case "together":
      Dl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function lo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function g0(e, t, n) {
  switch (t.tag) {
    case 3:
      Sf(t), ar();
      break;
    case 5:
      Yd(t);
      break;
    case 1:
      qe(t.type) && Eo(t);
      break;
    case 4:
      Ra(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ae(To, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cf(e, t, n) : (ae(fe, fe.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      ae(fe, fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ef(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ae(fe, fe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, kf(e, t, n);
  }
  return $t(e, t, n);
}
var Nf, Fs, jf, Tf;
Nf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fs = function() {
};
jf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Cn(zt.current);
    var o = null;
    switch (n) {
      case "input":
        i = ls(e, i), r = ls(e, r), o = [];
        break;
      case "select":
        i = me({}, i, { value: void 0 }), r = me({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = us(e, i), r = us(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = So);
    }
    ps(n, r);
    var l;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Jr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Jr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ce("scroll", e), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _r(e, t) {
  if (!de) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function y0(e, t, n) {
  var r = t.pendingProps;
  switch (za(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return qe(t.type) && Co(), _e(t), null;
    case 3:
      return r = t.stateNode, cr(), pe(We), pe(Ae), Fa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (qs(yt), yt = null))), Fs(e, t), _e(t), null;
    case 5:
      Ma(t);
      var i = Cn(ci.current);
      if (n = t.type, e !== null && t.stateNode != null) jf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return _e(t), null;
        }
        if (e = Cn(zt.current), Bi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[jt] = t, r[ai] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fr.length; i++) ce(Fr[i], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Lu(r, o), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Du(r, o), ce("invalid", r);
          }
          ps(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var s = o[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Oi(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Oi(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : Jr.hasOwnProperty(l) && s != null && l === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              _i(r), Au(r, o, !0);
              break;
            case "textarea":
              _i(r), Ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = So);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = td(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[jt] = t, e[ai] = r, Nf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = ds(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++) ce(Fr[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), i = r;
                break;
              case "details":
                ce("toggle", e), i = r;
                break;
              case "input":
                Lu(e, r), i = ls(e, r), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = me({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Du(e, r), i = us(e, r), ce("invalid", e);
                break;
              default:
                i = r;
            }
            ps(n, i), s = i;
            for (o in s) if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "style" ? id(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && nd(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zr(e, a) : typeof a == "number" && Zr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Jr.hasOwnProperty(o) ? a != null && o === "onScroll" && ce("scroll", e) : a != null && ha(e, o, a, l));
            }
            switch (n) {
              case "input":
                _i(e), Au(e, r, !1);
                break;
              case "textarea":
                _i(e), Ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? er(e, !!r.multiple, o, !1) : r.defaultValue != null && er(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = So);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Tf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = Cn(ci.current), Cn(zt.current), Bi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[jt] = t, (o = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
            case 3:
              Oi(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Oi(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jt] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (pe(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && et !== null && t.mode & 1 && !(t.flags & 128)) Wd(), ar(), t.flags |= 98560, o = !1;
        else if (o = Bi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(P(317));
            o[jt] = t;
          } else ar(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), o = !1;
        } else yt !== null && (qs(yt), yt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? Ce === 0 && (Ce = 3) : Ya())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return cr(), Fs(e, t), e === null && li(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return La(t.type._context), _e(t), null;
    case 17:
      return qe(t.type) && Co(), _e(t), null;
    case 19:
      if (pe(fe), o = t.memoizedState, o === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) _r(o, !1);
      else {
        if (Ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = _o(e), l !== null) {
            for (t.flags |= 128, _r(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(fe, fe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ye() > dr && (t.flags |= 128, r = !0, _r(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = _o(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _r(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !de) return _e(t), null;
        } else 2 * ye() - o.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, _r(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ye(), t.sibling = null, n = fe.current, ae(fe, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return Xa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function x0(e, t) {
  switch (za(t), t.tag) {
    case 1:
      return qe(t.type) && Co(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return cr(), pe(We), pe(Ae), Fa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ma(t), null;
    case 13:
      if (pe(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        ar();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return pe(fe), null;
    case 4:
      return cr(), null;
    case 10:
      return La(t.type._context), null;
    case 22:
    case 23:
      return Xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hi = !1, Ie = !1, w0 = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ge(e, t, r);
  }
  else n.current = null;
}
function Os(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var Ec = !1;
function v0(e, t) {
  if (bs = vo, e = Id(), ja(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, p = 0, c = e, h = null;
        t: for (; ; ) {
          for (var d; c !== n || i !== 0 && c.nodeType !== 3 || (s = l + i), c !== o || r !== 0 && c.nodeType !== 3 || (a = l + r), c.nodeType === 3 && (l += c.nodeValue.length), (d = c.firstChild) !== null; )
            h = c, c = d;
          for (; ; ) {
            if (c === e) break t;
            if (h === n && ++u === i && (s = l), h === o && ++p === r && (a = l), (d = c.nextSibling) !== null) break;
            c = h, h = c.parentNode;
          }
          c = d;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, vo = !1, B = t; B !== null; ) if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
  else for (; B !== null; ) {
    t = B;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, E = y.memoizedState, m = t.stateNode, g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : mt(t.type, v), E);
            m.__reactInternalSnapshotBeforeUpdate = g;
          }
          break;
        case 3:
          var x = t.stateNode.containerInfo;
          x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(P(163));
      }
    } catch (C) {
      ge(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, B = e;
      break;
    }
    B = t.return;
  }
  return y = Ec, Ec = !1, y;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Os(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Go(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function zf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, zf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jt], delete t[ai], delete t[Ns], delete t[n0], delete t[r0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $s(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = So));
  else if (r !== 4 && (e = e.child, e !== null)) for ($s(e, t, n), e = e.sibling; e !== null; ) $s(e, t, n), e = e.sibling;
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
}
var je = null, gt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) _f(e, t, n), n = n.sibling;
}
function _f(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
    Tt.onCommitFiberUnmount(Ho, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || Jn(n, t);
    case 6:
      var r = je, i = gt;
      je = null, Wt(e, t, n), je = r, gt = i, je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? Tl(e.parentNode, n) : e.nodeType === 1 && Tl(e, n), ri(e)) : Tl(je, n.stateNode));
      break;
    case 4:
      r = je, i = gt, je = n.stateNode.containerInfo, gt = !0, Wt(e, t, n), je = r, gt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Os(n, t, l), i = i.next;
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Ie && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ge(n, t, s);
      }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Wt(e, t, n), Ie = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new w0()), t.forEach(function(r) {
      var i = z0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            je = s.stateNode, gt = !1;
            break e;
          case 3:
            je = s.stateNode.containerInfo, gt = !0;
            break e;
          case 4:
            je = s.stateNode.containerInfo, gt = !0;
            break e;
        }
        s = s.return;
      }
      if (je === null) throw Error(P(160));
      _f(o, l, i), je = null, gt = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      ge(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) If(t, e), t = t.sibling;
}
function If(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ht(t, e), St(e), r & 4) {
        try {
          Wr(3, e, e.return), Go(3, e);
        } catch (v) {
          ge(e, e.return, v);
        }
        try {
          Wr(5, e, e.return);
        } catch (v) {
          ge(e, e.return, v);
        }
      }
      break;
    case 1:
      ht(t, e), St(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (ht(t, e), St(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Zr(i, "");
        } catch (v) {
          ge(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && o.type === "radio" && o.name != null && Zp(i, o), ds(s, l);
          var u = ds(s, o);
          for (l = 0; l < a.length; l += 2) {
            var p = a[l], c = a[l + 1];
            p === "style" ? id(i, c) : p === "dangerouslySetInnerHTML" ? nd(i, c) : p === "children" ? Zr(i, c) : ha(i, p, c, u);
          }
          switch (s) {
            case "input":
              ss(i, o);
              break;
            case "textarea":
              ed(i, o);
              break;
            case "select":
              var h = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var d = o.value;
              d != null ? er(i, !!o.multiple, d, !1) : h !== !!o.multiple && (o.defaultValue != null ? er(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : er(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[ai] = o;
        } catch (v) {
          ge(e, e.return, v);
        }
      }
      break;
    case 6:
      if (ht(t, e), St(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (v) {
          ge(e, e.return, v);
        }
      }
      break;
    case 3:
      if (ht(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ri(t.containerInfo);
      } catch (v) {
        ge(e, e.return, v);
      }
      break;
    case 4:
      ht(t, e), St(e);
      break;
    case 13:
      ht(t, e), St(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Qa = ye())), r & 4 && jc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || p, ht(t, e), Ie = u) : ht(t, e), St(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !p && e.mode & 1) for (B = e, p = e.child; p !== null; ) {
          for (c = B = p; B !== null; ) {
            switch (h = B, d = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wr(4, h, h.return);
                break;
              case 1:
                Jn(h, h.return);
                var y = h.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    ge(r, n, v);
                  }
                }
                break;
              case 5:
                Jn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  zc(c);
                  continue;
                }
            }
            d !== null ? (d.return = h, B = d) : zc(c);
          }
          p = p.sibling;
        }
        e: for (p = null, c = e; ; ) {
          if (c.tag === 5) {
            if (p === null) {
              p = c;
              try {
                i = c.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = rd("display", l));
              } catch (v) {
                ge(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (p === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (v) {
              ge(e, e.return, v);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            p === c && (p = null), c = c.return;
          }
          p === c && (p = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      ht(t, e), St(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      ht(
        t,
        e
      ), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Zr(i, ""), r.flags &= -33);
          var o = Nc(e);
          Us(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Nc(e);
          $s(e, s, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      ge(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function k0(e, t, n) {
  B = e, Lf(e);
}
function Lf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var i = B, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Hi;
      if (!l) {
        var s = i.alternate, a = s !== null && s.memoizedState !== null || Ie;
        s = Hi;
        var u = Ie;
        if (Hi = l, (Ie = a) && !u) for (B = i; B !== null; ) l = B, a = l.child, l.tag === 22 && l.memoizedState !== null ? Pc(i) : a !== null ? (a.return = l, B = a) : Pc(i);
        for (; o !== null; ) B = o, Lf(o), o = o.sibling;
        B = i, Hi = s, Ie = u;
      }
      Tc(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, B = o) : Tc(e);
  }
}
function Tc(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || Go(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && dc(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              dc(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var p = u.memoizedState;
                if (p !== null) {
                  var c = p.dehydrated;
                  c !== null && ri(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(P(163));
        }
        Ie || t.flags & 512 && Bs(t);
      } catch (h) {
        ge(t, t.return, h);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function zc(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function Pc(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Go(4, t);
          } catch (a) {
            ge(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ge(t, i, a);
            }
          }
          var o = t.return;
          try {
            Bs(t);
          } catch (a) {
            ge(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Bs(t);
          } catch (a) {
            ge(t, l, a);
          }
      }
    } catch (a) {
      ge(t, t.return, a);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, B = s;
      break;
    }
    B = t.return;
  }
}
var b0 = Math.ceil, Ao = Ut.ReactCurrentDispatcher, Wa = Ut.ReactCurrentOwner, ct = Ut.ReactCurrentBatchConfig, Z = 0, Ne = null, ke = null, Te = 0, Ze = 0, Zn = dn(0), Ce = 0, hi = null, _n = 0, Jo = 0, qa = 0, qr = null, He = null, Qa = 0, dr = 1 / 0, Lt = null, Do = !1, Hs = null, on = null, Vi = !1, Jt = null, Ro = 0, Qr = 0, Vs = null, so = -1, ao = 0;
function Oe() {
  return Z & 6 ? ye() : so !== -1 ? so : so = ye();
}
function ln(e) {
  return e.mode & 1 ? Z & 2 && Te !== 0 ? Te & -Te : o0.transition !== null ? (ao === 0 && (ao = gd()), ao) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sd(e.type)), e) : 1;
}
function vt(e, t, n, r) {
  if (50 < Qr) throw Qr = 0, Vs = null, Error(P(185));
  wi(e, n, r), (!(Z & 2) || e !== Ne) && (e === Ne && (!(Z & 2) && (Jo |= n), Ce === 4 && Yt(e, Te)), Qe(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (dr = ye() + 500, Ko && fn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  og(e, t);
  var r = wo(e, e === Ne ? Te : 0);
  if (r === 0) n !== null && Ou(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ou(n), t === 1) e.tag === 0 ? i0(_c.bind(null, e)) : Ud(_c.bind(null, e)), e0(function() {
      !(Z & 6) && fn();
    }), n = null;
    else {
      switch (yd(r)) {
        case 1:
          n = wa;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = xo;
          break;
        case 536870912:
          n = md;
          break;
        default:
          n = xo;
      }
      n = $f(n, Af.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Af(e, t) {
  if (so = -1, ao = 0, Z & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = wo(e, e === Ne ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mo(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = Rf();
    (Ne !== e || Te !== t) && (Lt = null, dr = ye() + 500, En(e, t));
    do
      try {
        E0();
        break;
      } catch (s) {
        Df(e, s);
      }
    while (!0);
    Ia(), Ao.current = o, Z = i, ke !== null ? t = 0 : (Ne = null, Te = 0, t = Ce);
  }
  if (t !== 0) {
    if (t === 2 && (i = ys(e), i !== 0 && (r = i, t = Ws(e, i))), t === 1) throw n = hi, En(e, 0), Yt(e, r), Qe(e, ye()), n;
    if (t === 6) Yt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !S0(i) && (t = Mo(e, r), t === 2 && (o = ys(e), o !== 0 && (r = o, t = Ws(e, o))), t === 1)) throw n = hi, En(e, 0), Yt(e, r), Qe(e, ye()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          wn(e, He, Lt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Qa + 500 - ye(), 10 < t)) {
            if (wo(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Oe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Es(wn.bind(null, e, He, Lt), t);
            break;
          }
          wn(e, He, Lt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - wt(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * b0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Es(wn.bind(null, e, He, Lt), r);
            break;
          }
          wn(e, He, Lt);
          break;
        case 5:
          wn(e, He, Lt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Qe(e, ye()), e.callbackNode === n ? Af.bind(null, e) : null;
}
function Ws(e, t) {
  var n = qr;
  return e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256), e = Mo(e, t), e !== 2 && (t = He, He = n, t !== null && qs(t)), e;
}
function qs(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function S0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!bt(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Yt(e, t) {
  for (t &= ~qa, t &= ~Jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _c(e) {
  if (Z & 6) throw Error(P(327));
  or();
  var t = wo(e, 0);
  if (!(t & 1)) return Qe(e, ye()), null;
  var n = Mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && (t = r, n = Ws(e, r));
  }
  if (n === 1) throw n = hi, En(e, 0), Yt(e, t), Qe(e, ye()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, He, Lt), Qe(e, ye()), null;
}
function Ka(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (dr = ye() + 500, Ko && fn());
  }
}
function In(e) {
  Jt !== null && Jt.tag === 0 && !(Z & 6) && or();
  var t = Z;
  Z |= 1;
  var n = ct.transition, r = re;
  try {
    if (ct.transition = null, re = 1, e) return e();
  } finally {
    re = r, ct.transition = n, Z = t, !(Z & 6) && fn();
  }
}
function Xa() {
  Ze = Zn.current, pe(Zn);
}
function En(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zg(n)), ke !== null) for (n = ke.return; n !== null; ) {
    var r = n;
    switch (za(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Co();
        break;
      case 3:
        cr(), pe(We), pe(Ae), Fa();
        break;
      case 5:
        Ma(r);
        break;
      case 4:
        cr();
        break;
      case 13:
        pe(fe);
        break;
      case 19:
        pe(fe);
        break;
      case 10:
        La(r.type._context);
        break;
      case 22:
      case 23:
        Xa();
    }
    n = n.return;
  }
  if (Ne = e, ke = e = sn(e.current, null), Te = Ze = t, Ce = 0, hi = null, qa = Jo = _n = 0, He = qr = null, Sn !== null) {
    for (t = 0; t < Sn.length; t++) if (n = Sn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    Sn = null;
  }
  return e;
}
function Df(e, t) {
  do {
    var n = ke;
    try {
      if (Ia(), io.current = Lo, Io) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Io = !1;
      }
      if (Pn = 0, Ee = Se = he = null, Vr = !1, pi = 0, Wa.current = null, n === null || n.return === null) {
        Ce = 1, hi = t, ke = null;
        break;
      }
      e: {
        var o = e, l = n.return, s = n, a = t;
        if (t = Te, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, p = s, c = p.tag;
          if (!(p.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = p.alternate;
            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var d = xc(l);
          if (d !== null) {
            d.flags &= -257, wc(d, l, s, o, t), d.mode & 1 && yc(o, u, t), t = d, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              yc(o, u, t), Ya();
              break e;
            }
            a = Error(P(426));
          }
        } else if (de && s.mode & 1) {
          var E = xc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), wc(E, l, s, o, t), Pa(pr(a, s));
            break e;
          }
        }
        o = a = pr(a, s), Ce !== 4 && (Ce = 2), qr === null ? qr = [o] : qr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = xf(o, a, t);
              pc(o, m);
              break e;
            case 1:
              s = a;
              var g = o.type, x = o.stateNode;
              if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (on === null || !on.has(x)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var C = wf(o, s, t);
                pc(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ff(n);
    } catch (j) {
      t = j, ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rf() {
  var e = Ao.current;
  return Ao.current = Lo, e === null ? Lo : e;
}
function Ya() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Ne === null || !(_n & 268435455) && !(Jo & 268435455) || Yt(Ne, Te);
}
function Mo(e, t) {
  var n = Z;
  Z |= 2;
  var r = Rf();
  (Ne !== e || Te !== t) && (Lt = null, En(e, t));
  do
    try {
      C0();
      break;
    } catch (i) {
      Df(e, i);
    }
  while (!0);
  if (Ia(), Z = n, Ao.current = r, ke !== null) throw Error(P(261));
  return Ne = null, Te = 0, Ce;
}
function C0() {
  for (; ke !== null; ) Mf(ke);
}
function E0() {
  for (; ke !== null && !Ym(); ) Mf(ke);
}
function Mf(e) {
  var t = Bf(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? Ff(e) : ke = t, Wa.current = null;
}
function Ff(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = x0(n, t), n !== null) {
        n.flags &= 32767, ke = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ce = 6, ke = null;
        return;
      }
    } else if (n = y0(n, t, Ze), n !== null) {
      ke = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function wn(e, t, n) {
  var r = re, i = ct.transition;
  try {
    ct.transition = null, re = 1, N0(e, t, n, r);
  } finally {
    ct.transition = i, re = r;
  }
  return null;
}
function N0(e, t, n, r) {
  do
    or();
  while (Jt !== null);
  if (Z & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (lg(e, o), e === Ne && (ke = Ne = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vi || (Vi = !0, $f(xo, function() {
    return or(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = ct.transition, ct.transition = null;
    var l = re;
    re = 1;
    var s = Z;
    Z |= 4, Wa.current = null, v0(e, n), If(n, e), qg(Ss), vo = !!bs, Ss = bs = null, e.current = n, k0(n), Gm(), Z = s, re = l, ct.transition = o;
  } else e.current = n;
  if (Vi && (Vi = !1, Jt = e, Ro = i), o = e.pendingLanes, o === 0 && (on = null), eg(n.stateNode), Qe(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Do) throw Do = !1, e = Hs, Hs = null, e;
  return Ro & 1 && e.tag !== 0 && or(), o = e.pendingLanes, o & 1 ? e === Vs ? Qr++ : (Qr = 0, Vs = e) : Qr = 0, fn(), null;
}
function or() {
  if (Jt !== null) {
    var e = yd(Ro), t = ct.transition, n = re;
    try {
      if (ct.transition = null, re = 16 > e ? 16 : e, Jt === null) var r = !1;
      else {
        if (e = Jt, Jt = null, Ro = 0, Z & 6) throw Error(P(331));
        var i = Z;
        for (Z |= 4, B = e.current; B !== null; ) {
          var o = B, l = o.child;
          if (B.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (B = u; B !== null; ) {
                  var p = B;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, p, o);
                  }
                  var c = p.child;
                  if (c !== null) c.return = p, B = c;
                  else for (; B !== null; ) {
                    p = B;
                    var h = p.sibling, d = p.return;
                    if (zf(p), p === u) {
                      B = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = d, B = h;
                      break;
                    }
                    B = d;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    v.sibling = null, v = E;
                  } while (v !== null);
                }
              }
              B = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, B = l;
          else e: for (; B !== null; ) {
            if (o = B, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Wr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, B = m;
              break e;
            }
            B = o.return;
          }
        }
        var g = e.current;
        for (B = g; B !== null; ) {
          l = B;
          var x = l.child;
          if (l.subtreeFlags & 2064 && x !== null) x.return = l, B = x;
          else e: for (l = g; B !== null; ) {
            if (s = B, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Go(9, s);
              }
            } catch (j) {
              ge(s, s.return, j);
            }
            if (s === l) {
              B = null;
              break e;
            }
            var C = s.sibling;
            if (C !== null) {
              C.return = s.return, B = C;
              break e;
            }
            B = s.return;
          }
        }
        if (Z = i, fn(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
          Tt.onPostCommitFiberRoot(Ho, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      re = n, ct.transition = t;
    }
  }
  return !1;
}
function Ic(e, t, n) {
  t = pr(n, t), t = xf(e, t, 1), e = rn(e, t, 1), t = Oe(), e !== null && (wi(e, 1, t), Qe(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) Ic(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ic(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = pr(n, e), e = wf(t, e, 1), t = rn(t, e, 1), e = Oe(), t !== null && (wi(t, 1, e), Qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function j0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Te & n) === n && (Ce === 4 || Ce === 3 && (Te & 130023424) === Te && 500 > ye() - Qa ? En(e, 0) : qa |= n), Qe(e, t);
}
function Of(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ai, Ai <<= 1, !(Ai & 130023424) && (Ai = 4194304)) : t = 1);
  var n = Oe();
  e = Bt(e, t), e !== null && (wi(e, t, n), Qe(e, n));
}
function T0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Of(e, n);
}
function z0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Of(e, n);
}
var Bf;
Bf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, g0(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, de && t.flags & 1048576 && Hd(t, jo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      lo(e, t), e = t.pendingProps;
      var i = sr(t, Ae.current);
      ir(t, n), i = Ba(null, t, r, e, i, n);
      var o = $a();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qe(r) ? (o = !0, Eo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Da(t), i.updater = Yo, t.stateNode = i, i._reactInternals = t, Is(t, r, e, n), t = Ds(null, t, r, !0, o, n)) : (t.tag = 0, de && o && Ta(t), Me(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (lo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = _0(r), e = mt(r, e), i) {
          case 0:
            t = As(null, t, r, e, n);
            break e;
          case 1:
            t = bc(null, t, r, e, n);
            break e;
          case 11:
            t = vc(null, t, r, e, n);
            break e;
          case 14:
            t = kc(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), As(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), bc(e, t, r, i, n);
    case 3:
      e: {
        if (Sf(t), e === null) throw Error(P(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Xd(e, t), Po(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = pr(Error(P(423)), t), t = Sc(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = pr(Error(P(424)), t), t = Sc(e, t, r, n, i);
          break e;
        } else for (et = nn(t.stateNode.containerInfo.firstChild), tt = t, de = !0, yt = null, n = Qd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ar(), r === i) {
            t = $t(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yd(t), e === null && zs(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Cs(r, i) ? l = null : o !== null && Cs(r, o) && (t.flags |= 32), bf(e, t), Me(e, t, l, n), t.child;
    case 6:
      return e === null && zs(t), null;
    case 13:
      return Cf(e, t, n);
    case 4:
      return Ra(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Me(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), vc(e, t, r, i, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ae(To, r._currentValue), r._currentValue = l, o !== null) if (bt(o.value, l)) {
          if (o.children === i.children && !We.current) {
            t = $t(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            l = o.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Mt(-1, n & -n), a.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var p = u.pending;
                    p === null ? a.next = a : (a.next = p.next, p.next = a), u.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ps(
                  o.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(P(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ps(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        Me(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, ir(t, n), i = pt(i), r = r(i), t.flags |= 1, Me(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = mt(r, t.pendingProps), i = mt(r.type, i), kc(e, t, r, i, n);
    case 15:
      return vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), lo(e, t), t.tag = 1, qe(r) ? (e = !0, Eo(t)) : e = !1, ir(t, n), yf(t, r, i), Is(t, r, i, n), Ds(null, t, r, !0, e, n);
    case 19:
      return Ef(e, t, n);
    case 22:
      return kf(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function $f(e, t) {
  return fd(e, t);
}
function P0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new P0(e, t, n, r);
}
function Ga(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _0(e) {
  if (typeof e == "function") return Ga(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ga) return 11;
    if (e === ya) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function uo(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") Ga(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Hn:
      return Nn(n.children, i, o, t);
    case ma:
      l = 8, i |= 8;
      break;
    case ns:
      return e = ut(12, n, t, i | 2), e.elementType = ns, e.lanes = o, e;
    case rs:
      return e = ut(13, n, t, i), e.elementType = rs, e.lanes = o, e;
    case is:
      return e = ut(19, n, t, i), e.elementType = is, e.lanes = o, e;
    case Yp:
      return Zo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Kp:
          l = 10;
          break e;
        case Xp:
          l = 9;
          break e;
        case ga:
          l = 11;
          break e;
        case ya:
          l = 14;
          break e;
        case Qt:
          l = 16, r = null;
          break e;
      }
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = ut(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Nn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Zo(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = Yp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Rl(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function Ml(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function I0(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yl(0), this.expirationTimes = yl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ja(e, t, n, r, i, o, l, s, a) {
  return e = new I0(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ut(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Da(o), e;
}
function L0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Uf(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return $d(e, n, t);
  }
  return t;
}
function Hf(e, t, n, r, i, o, l, s, a) {
  return e = Ja(n, r, !0, e, i, o, l, s, a), e.context = Uf(null), n = e.current, r = Oe(), i = ln(n), o = Mt(r, i), o.callback = t ?? null, rn(n, o, i), e.current.lanes = i, wi(e, i, r), Qe(e, r), e;
}
function el(e, t, n, r) {
  var i = t.current, o = Oe(), l = ln(i);
  return n = Uf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(i, t, l), e !== null && (vt(e, i, l, o), ro(e, i, l)), l;
}
function Fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Za(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function A0() {
  return null;
}
var Vf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function eu(e) {
  this._internalRoot = e;
}
tl.prototype.render = eu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  el(e, t, null, null);
};
tl.prototype.unmount = eu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    In(function() {
      el(null, e, null, null);
    }), t[Ot] = null;
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
    Xt.splice(n, 0, e), n === 0 && bd(e);
  }
};
function tu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function nl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ac() {
}
function D0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Fo(l);
        o.call(u);
      };
    }
    var l = Hf(t, r, e, 0, null, !1, !1, "", Ac);
    return e._reactRootContainer = l, e[Ot] = l.current, li(e.nodeType === 8 ? e.parentNode : e), In(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Fo(a);
      s.call(u);
    };
  }
  var a = Ja(e, 0, !1, null, null, !1, !1, "", Ac);
  return e._reactRootContainer = a, e[Ot] = a.current, li(e.nodeType === 8 ? e.parentNode : e), In(function() {
    el(t, a, n, r);
  }), a;
}
function rl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var a = Fo(l);
        s.call(a);
      };
    }
    el(t, l, e, i);
  } else l = D0(n, t, e, i, r);
  return Fo(l);
}
xd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 && (va(t, n | 1), Qe(t, ye()), !(Z & 6) && (dr = ye() + 500, fn()));
      }
      break;
    case 13:
      In(function() {
        var r = Bt(e, 1);
        if (r !== null) {
          var i = Oe();
          vt(r, e, 1, i);
        }
      }), Za(e, 1);
  }
};
ka = function(e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Oe();
      vt(t, e, 134217728, n);
    }
    Za(e, 134217728);
  }
};
wd = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = Bt(e, t);
    if (n !== null) {
      var r = Oe();
      vt(n, e, t, r);
    }
    Za(e, t);
  }
};
vd = function() {
  return re;
};
kd = function(e, t) {
  var n = re;
  try {
    return re = e, t();
  } finally {
    re = n;
  }
};
hs = function(e, t, n) {
  switch (t) {
    case "input":
      if (ss(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Qo(r);
            if (!i) throw Error(P(90));
            Jp(r), ss(r, i);
          }
        }
      }
      break;
    case "textarea":
      ed(e, n);
      break;
    case "select":
      t = n.value, t != null && er(e, !!n.multiple, t, !1);
  }
};
sd = Ka;
ad = In;
var R0 = { usingClientEntryPoint: !1, Events: [ki, Qn, Qo, od, ld, Ka] }, Ir = { findFiberByHostInstance: bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, M0 = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ir.findFiberByHostInstance || A0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wi.isDisabled && Wi.supportsFiber) try {
    Ho = Wi.inject(M0), Tt = Wi;
  } catch {
  }
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0;
it.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tu(t)) throw Error(P(200));
  return L0(e, t, null, n);
};
it.createRoot = function(e, t) {
  if (!tu(e)) throw Error(P(299));
  var n = !1, r = "", i = Vf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ja(e, 1, !1, null, null, n, !1, r, i), e[Ot] = t.current, li(e.nodeType === 8 ? e.parentNode : e), new eu(t);
};
it.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = pd(t), e = e === null ? null : e.stateNode, e;
};
it.flushSync = function(e) {
  return In(e);
};
it.hydrate = function(e, t, n) {
  if (!nl(t)) throw Error(P(200));
  return rl(null, e, t, !0, n);
};
it.hydrateRoot = function(e, t, n) {
  if (!tu(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Vf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Hf(t, null, e, 1, n ?? null, i, !1, o, l), e[Ot] = t.current, li(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new tl(t);
};
it.render = function(e, t, n) {
  if (!nl(t)) throw Error(P(200));
  return rl(null, e, t, !1, n);
};
it.unmountComponentAtNode = function(e) {
  if (!nl(e)) throw Error(P(40));
  return e._reactRootContainer ? (In(function() {
    rl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
it.unstable_batchedUpdates = Ka;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!nl(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return rl(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function Wf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf);
    } catch (e) {
      console.error(e);
    }
}
Wf(), Vp.exports = it;
var F0 = Vp.exports, qf, Dc = F0;
qf = Dc.createRoot, Dc.hydrateRoot;
const O0 = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, B0 = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, $0 = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function U0(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function H0(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const Rc = /* @__PURE__ */ Symbol.for("r2wc.bound"), V0 = {
  parse: (e, t, n) => {
    const r = H0(t), i = n;
    if (typeof i < "u" && r in i && typeof i[r] < "u") {
      let o = i[r];
      return Rc in i[r] || (o = o.bind(i), Object.defineProperty(o, Rc, { value: !0 })), o;
    } else
      return;
  }
}, W0 = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, q0 = {
  stringify: (e) => e,
  parse: (e) => e
}, Fl = {
  string: q0,
  number: W0,
  boolean: O0,
  function: B0,
  method: V0,
  json: $0
}, qi = /* @__PURE__ */ Symbol.for("r2wc.render"), Qi = /* @__PURE__ */ Symbol.for("r2wc.connected"), gn = /* @__PURE__ */ Symbol.for("r2wc.context"), Ct = /* @__PURE__ */ Symbol.for("r2wc.props");
function Q0(e, t, n) {
  var p, c, h;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const r = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), i = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), o = {}, l = {}, s = {}, a = {};
  for (const d of r) {
    o[d] = Array.isArray(t.props) ? "string" : t.props[d];
    const y = U0(d);
    s[d] = y, a[y] = d;
  }
  for (const d of i)
    l[d] = Array.isArray(t.events) ? {} : t.events[d];
  class u extends HTMLElement {
    constructor() {
      super();
      Cr(this, h, !0);
      Cr(this, c);
      Cr(this, p, {});
      Cr(this, "container");
      t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[Ct].container = this.container;
      for (const v of r) {
        const E = s[v], m = this.getAttribute(E), g = o[v], x = g ? Fl[g] : null;
        x != null && x.parse && (m || g === "method") && (this[Ct][v] = x.parse(m, E, this));
      }
      for (const v of i)
        this[Ct][v] = (E) => {
          const m = v.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(m, { detail: E, ...l[v] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(a);
    }
    connectedCallback() {
      this[Qi] = !0, this[qi]();
    }
    disconnectedCallback() {
      this[Qi] = !1, this[gn] && n.unmount(this[gn]), delete this[gn];
    }
    attributeChangedCallback(v, E, m) {
      const g = a[v], x = o[g], C = x ? Fl[x] : null;
      g in o && (C != null && C.parse) && (m || x === "method") && (this[Ct][g] = C.parse(m, v, this), this[qi]());
    }
    [(h = Qi, c = gn, p = Ct, qi)]() {
      this[Qi] && (this[gn] ? n.update(this[gn], this[Ct]) : this[gn] = n.mount(
        this.container,
        e,
        this[Ct]
      ));
    }
  }
  for (const d of r) {
    const y = s[d], v = o[d];
    Object.defineProperty(u.prototype, d, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ct][d];
      },
      set(E) {
        this[Ct][d] = E;
        const m = v ? Fl[v] : null;
        if (m != null && m.stringify) {
          const g = m.stringify(E, y, this);
          this.getAttribute(y) !== g && (g == null ? this.removeAttribute(y) : this.setAttribute(y, g));
        } else
          d in o && (m != null && m.parse) && (E || v === "method") && (this[Ct][d] = m.parse(E, y, this)), this[qi]();
      }
    });
  }
  return u;
}
function K0(e, t, n) {
  const r = qf(e), i = ho.createElement(t, n);
  return r.render(i), {
    root: r,
    ReactComponent: t
  };
}
function X0({ root: e, ReactComponent: t }, n) {
  const r = ho.createElement(t, n);
  e.render(r);
}
function Y0({ root: e }) {
  e.unmount();
}
function Si(e, t = {}) {
  return Q0(e, t, { mount: K0, update: X0, unmount: Y0 });
}
var Qf = { exports: {} }, il = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G0 = O, J0 = Symbol.for("react.element"), Z0 = Symbol.for("react.fragment"), ey = Object.prototype.hasOwnProperty, ty = G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ny = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) ey.call(t, r) && !ny.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: J0, type: e, key: o, ref: l, props: i, _owner: ty.current };
}
il.Fragment = Z0;
il.jsx = Kf;
il.jsxs = Kf;
Qf.exports = il;
var f = Qf.exports;
class yr {
  constructor(t) {
    this.projectId = t.projectId, this.apiKey = t.apiKey, this.apiUrl = t.apiUrl || "https://snaps.antigravity.dev", this.apiUrl.endsWith("/") && (this.apiUrl = this.apiUrl.slice(0, -1));
  }
  getHeaders() {
    return {
      "Content-Type": "application/json",
      "X-API-Key": this.apiKey
    };
  }
  async fetchSupportCards(t, n = 20, r = 0, i) {
    const o = new URLSearchParams();
    t && o.set("status", t), i && o.set("exclude_status", i), o.set("limit", n.toString()), o.set("offset", r.toString());
    const l = `${this.apiUrl}/public/projects/${this.projectId}/support?${o.toString()}`, s = await fetch(l, { headers: this.getHeaders() });
    if (!s.ok)
      throw new Error(`SnapsPublicClient.fetchSupportCards: HTTP ${s.status}`);
    return s.json();
  }
  async fetchSingleCard(t) {
    const n = `${this.apiUrl}/public/projects/${this.projectId}/support/cards/${t}`, r = await fetch(n, { headers: this.getHeaders() });
    if (!r.ok)
      throw new Error(`SnapsPublicClient.fetchSingleCard: HTTP ${r.status}`);
    return r.json();
  }
  async createSupportCard(t) {
    const n = `${this.apiUrl}/public/projects/${this.projectId}/cards`, r = await fetch(n, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(t)
    });
    if (!r.ok)
      throw new Error(`SnapsPublicClient.createSupportCard: HTTP ${r.status}`);
    return r.json();
  }
  async updateCardStatus(t, n) {
    const r = `${this.apiUrl}/public/projects/${this.projectId}/support/cards/${t}/status`, i = await fetch(r, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify({ status: n })
    });
    if (!i.ok)
      throw new Error(`SnapsPublicClient.updateCardStatus: HTTP ${i.status}`);
    return i.json();
  }
  async deleteCard(t) {
    const n = `${this.apiUrl}/public/projects/${this.projectId}/support/cards/${t}`, r = await fetch(n, {
      method: "DELETE",
      headers: this.getHeaders()
    });
    if (!r.ok)
      throw new Error(`SnapsPublicClient.deleteCard: HTTP ${r.status}`);
  }
  async fetchRoadmapSprints() {
    const t = `${this.apiUrl}/public/projects/${this.projectId}/roadmap`, n = await fetch(t, { headers: this.getHeaders() });
    if (!n.ok)
      throw new Error(`SnapsPublicClient.fetchRoadmapSprints: HTTP ${n.status}`);
    return n.json();
  }
  async uploadAttachment(t) {
    const n = `${this.apiUrl}/public/projects/${this.projectId}/support/upload`, r = new FormData();
    r.append("file", t);
    const i = await fetch(n, {
      method: "POST",
      headers: {
        "X-API-Key": this.apiKey
      },
      body: r
    });
    if (!i.ok)
      throw new Error(`SnapsPublicClient.uploadAttachment: HTTP ${i.status}`);
    return i.json();
  }
  async fetchDocs() {
    const t = `${this.apiUrl}/public/projects/${this.projectId}/docs`, n = await fetch(t, { headers: this.getHeaders() });
    if (!n.ok)
      throw new Error(`SnapsPublicClient.fetchDocs: HTTP ${n.status}`);
    return n.json();
  }
  async fetchDocDetail(t) {
    const n = `${this.apiUrl}/public/projects/${this.projectId}/docs/${t}`, r = await fetch(n, { headers: this.getHeaders() });
    if (!r.ok)
      throw new Error(`SnapsPublicClient.fetchDocDetail: HTTP ${r.status}`);
    return r.json();
  }
}
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ry = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), be = (e, t) => {
  const n = O.forwardRef(
    ({ color: r = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: l, className: s = "", children: a, ...u }, p) => O.createElement(
      "svg",
      {
        ref: p,
        ...ry,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: l ? Number(o) * 24 / Number(i) : o,
        className: ["lucide", `lucide-${iy(e)}`, s].join(" "),
        ...u
      },
      [
        ...t.map(([c, h]) => O.createElement(c, h)),
        ...Array.isArray(a) ? a : [a]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mi = be("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = be("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = be("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = be("Calendar", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = be("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = be("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = be("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = be("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = be("FileText", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = be("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = be("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = be("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = be("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = be("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = be("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = be("Tag", [
  [
    "path",
    {
      d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
      key: "14b2ls"
    }
  ],
  ["path", { d: "M7 7h.01", key: "7u93v4" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = be("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = be("UploadCloud", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = be("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iu = be("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function my(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const gy = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, yy = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xy = {};
function Fc(e, t) {
  return (xy.jsx ? yy : gy).test(e);
}
const wy = /[ \t\n\f\r]/g;
function vy(e) {
  return typeof e == "object" ? e.type === "text" ? Oc(e.value) : !1 : Oc(e);
}
function Oc(e) {
  return e.replace(wy, "") === "";
}
class Ci {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
Ci.prototype.normal = {};
Ci.prototype.property = {};
Ci.prototype.space = void 0;
function Gf(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Ci(n, r, t);
}
function Xs(e) {
  return e.toLowerCase();
}
class Ke {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
Ke.prototype.attribute = "";
Ke.prototype.booleanish = !1;
Ke.prototype.boolean = !1;
Ke.prototype.commaOrSpaceSeparated = !1;
Ke.prototype.commaSeparated = !1;
Ke.prototype.defined = !1;
Ke.prototype.mustUseProperty = !1;
Ke.prototype.number = !1;
Ke.prototype.overloadedBoolean = !1;
Ke.prototype.property = "";
Ke.prototype.spaceSeparated = !1;
Ke.prototype.space = void 0;
let ky = 0;
const V = Rn(), ve = Rn(), Ys = Rn(), _ = Rn(), le = Rn(), jn = Rn(), Je = Rn();
function Rn() {
  return 2 ** ++ky;
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: V,
  booleanish: ve,
  commaOrSpaceSeparated: Je,
  commaSeparated: jn,
  number: _,
  overloadedBoolean: Ys,
  spaceSeparated: le
}, Symbol.toStringTag, { value: "Module" })), Ol = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Gs)
);
class ou extends Ke {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Bc(this, "space", i), typeof r == "number")
      for (; ++o < Ol.length; ) {
        const l = Ol[o];
        Bc(this, Ol[o], (r & Gs[l]) === Gs[l]);
      }
  }
}
ou.prototype.defined = !0;
function Bc(e, t, n) {
  n && (e[t] = n);
}
function xr(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new ou(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Xs(r)] = r, n[Xs(o.attribute)] = r;
  }
  return new Ci(t, n, e.space);
}
const Jf = xr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ve,
    ariaAutoComplete: null,
    ariaBusy: ve,
    ariaChecked: ve,
    ariaColCount: _,
    ariaColIndex: _,
    ariaColSpan: _,
    ariaControls: le,
    ariaCurrent: null,
    ariaDescribedBy: le,
    ariaDetails: null,
    ariaDisabled: ve,
    ariaDropEffect: le,
    ariaErrorMessage: null,
    ariaExpanded: ve,
    ariaFlowTo: le,
    ariaGrabbed: ve,
    ariaHasPopup: null,
    ariaHidden: ve,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: le,
    ariaLevel: _,
    ariaLive: null,
    ariaModal: ve,
    ariaMultiLine: ve,
    ariaMultiSelectable: ve,
    ariaOrientation: null,
    ariaOwns: le,
    ariaPlaceholder: null,
    ariaPosInSet: _,
    ariaPressed: ve,
    ariaReadOnly: ve,
    ariaRelevant: null,
    ariaRequired: ve,
    ariaRoleDescription: le,
    ariaRowCount: _,
    ariaRowIndex: _,
    ariaRowSpan: _,
    ariaSelected: ve,
    ariaSetSize: _,
    ariaSort: null,
    ariaValueMax: _,
    ariaValueMin: _,
    ariaValueNow: _,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Zf(e, t) {
  return t in e ? e[t] : t;
}
function eh(e, t) {
  return Zf(e, t.toLowerCase());
}
const by = xr({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: jn,
    acceptCharset: le,
    accessKey: le,
    action: null,
    allow: null,
    allowFullScreen: V,
    allowPaymentRequest: V,
    allowUserMedia: V,
    alpha: V,
    alt: null,
    as: null,
    async: V,
    autoCapitalize: null,
    autoComplete: le,
    autoFocus: V,
    autoPlay: V,
    blocking: le,
    capture: null,
    charSet: null,
    checked: V,
    cite: null,
    className: le,
    closedBy: null,
    colorSpace: null,
    cols: _,
    colSpan: _,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: ve,
    controls: V,
    controlsList: le,
    coords: _ | jn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: V,
    defer: V,
    dir: null,
    dirName: null,
    disabled: V,
    download: Ys,
    draggable: ve,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: V,
    formTarget: null,
    headers: le,
    height: _,
    hidden: Ys,
    high: _,
    href: null,
    hrefLang: null,
    htmlFor: le,
    httpEquiv: le,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: V,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: V,
    itemId: null,
    itemProp: le,
    itemRef: le,
    itemScope: V,
    itemType: le,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: V,
    low: _,
    manifest: null,
    max: null,
    maxLength: _,
    media: null,
    method: null,
    min: null,
    minLength: _,
    multiple: V,
    muted: V,
    name: null,
    nonce: null,
    noModule: V,
    noValidate: V,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: V,
    optimum: _,
    pattern: null,
    ping: le,
    placeholder: null,
    playsInline: V,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: V,
    referrerPolicy: null,
    rel: le,
    required: V,
    reversed: V,
    rows: _,
    rowSpan: _,
    sandbox: le,
    scope: null,
    scoped: V,
    seamless: V,
    selected: V,
    shadowRootClonable: V,
    shadowRootCustomElementRegistry: V,
    shadowRootDelegatesFocus: V,
    shadowRootMode: null,
    shadowRootSerializable: V,
    shape: null,
    size: _,
    sizes: null,
    slot: null,
    span: _,
    spellCheck: ve,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: _,
    step: null,
    style: null,
    tabIndex: _,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: V,
    useMap: null,
    value: ve,
    width: _,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: le,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: _,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: _,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: V,
    // Lists. Use CSS to reduce space between items instead
    declare: V,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: _,
    // `<img>` and `<object>`
    leftMargin: _,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: _,
    // `<body>`
    marginWidth: _,
    // `<body>`
    noResize: V,
    // `<frame>`
    noHref: V,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: V,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: V,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: _,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ve,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: _,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: _,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: V,
    disablePictureInPicture: V,
    disableRemotePlayback: V,
    exportParts: jn,
    part: le,
    prefix: null,
    property: null,
    results: _,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: eh
}), Sy = xr({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Je,
    accentHeight: _,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: _,
    amplitude: _,
    arabicForm: null,
    ascent: _,
    attributeName: null,
    attributeType: null,
    azimuth: _,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: _,
    by: null,
    calcMode: null,
    capHeight: _,
    className: le,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: _,
    diffuseConstant: _,
    direction: null,
    display: null,
    dur: null,
    divisor: _,
    dominantBaseline: null,
    download: V,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: _,
    enableBackground: null,
    end: null,
    event: null,
    exponent: _,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: _,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: jn,
    g2: jn,
    glyphName: jn,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: _,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: _,
    horizOriginX: _,
    horizOriginY: _,
    id: null,
    ideographic: _,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: _,
    k: _,
    k1: _,
    k2: _,
    k3: _,
    k4: _,
    kernelMatrix: Je,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: _,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: _,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: _,
    overlineThickness: _,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: _,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: le,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: _,
    pointsAtY: _,
    pointsAtZ: _,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Je,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Je,
    rev: Je,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Je,
    requiredFeatures: Je,
    requiredFonts: Je,
    requiredFormats: Je,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: _,
    specularExponent: _,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: _,
    strikethroughThickness: _,
    string: null,
    stroke: null,
    strokeDashArray: Je,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: _,
    strokeOpacity: _,
    strokeWidth: null,
    style: null,
    surfaceScale: _,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Je,
    tabIndex: _,
    tableValues: null,
    target: null,
    targetX: _,
    targetY: _,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Je,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: _,
    underlineThickness: _,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: _,
    values: null,
    vAlphabetic: _,
    vMathematical: _,
    vectorEffect: null,
    vHanging: _,
    vIdeographic: _,
    version: null,
    vertAdvY: _,
    vertOriginX: _,
    vertOriginY: _,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: _,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Zf
}), th = xr({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), nh = xr({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: eh
}), rh = xr({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Cy = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Ey = /[A-Z]/g, $c = /-[a-z]/g, Ny = /^data[-\w.:]+$/i;
function jy(e, t) {
  const n = Xs(t);
  let r = t, i = Ke;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ny.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace($c, zy);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!$c.test(o)) {
        let l = o.replace(Ey, Ty);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = ou;
  }
  return new i(r, t);
}
function Ty(e) {
  return "-" + e.toLowerCase();
}
function zy(e) {
  return e.charAt(1).toUpperCase();
}
const Py = Gf([Jf, by, th, nh, rh], "html"), lu = Gf([Jf, Sy, th, nh, rh], "svg");
function _y(e) {
  return e.join(" ").trim();
}
var su = {}, Uc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Iy = /\n/g, Ly = /^\s*/, Ay = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Dy = /^:\s*/, Ry = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, My = /^[;\s]*/, Fy = /^\s+|\s+$/g, Oy = `
`, Hc = "/", Vc = "*", kn = "", By = "comment", $y = "declaration";
function Uy(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(y) {
    var v = y.match(Iy);
    v && (n += v.length);
    var E = y.lastIndexOf(Oy);
    r = ~E ? y.length - E : r + y.length;
  }
  function o() {
    var y = { line: n, column: r };
    return function(v) {
      return v.position = new l(y), u(), v;
    };
  }
  function l(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function s(y) {
    var v = new Error(
      t.source + ":" + n + ":" + r + ": " + y
    );
    if (v.reason = y, v.filename = t.source, v.line = n, v.column = r, v.source = e, !t.silent) throw v;
  }
  function a(y) {
    var v = y.exec(e);
    if (v) {
      var E = v[0];
      return i(E), e = e.slice(E.length), v;
    }
  }
  function u() {
    a(Ly);
  }
  function p(y) {
    var v;
    for (y = y || []; v = c(); )
      v !== !1 && y.push(v);
    return y;
  }
  function c() {
    var y = o();
    if (!(Hc != e.charAt(0) || Vc != e.charAt(1))) {
      for (var v = 2; kn != e.charAt(v) && (Vc != e.charAt(v) || Hc != e.charAt(v + 1)); )
        ++v;
      if (v += 2, kn === e.charAt(v - 1))
        return s("End of comment missing");
      var E = e.slice(2, v - 2);
      return r += 2, i(E), e = e.slice(v), r += 2, y({
        type: By,
        comment: E
      });
    }
  }
  function h() {
    var y = o(), v = a(Ay);
    if (v) {
      if (c(), !a(Dy)) return s("property missing ':'");
      var E = a(Ry), m = y({
        type: $y,
        property: Wc(v[0].replace(Uc, kn)),
        value: E ? Wc(E[0].replace(Uc, kn)) : kn
      });
      return a(My), m;
    }
  }
  function d() {
    var y = [];
    p(y);
    for (var v; v = h(); )
      v !== !1 && (y.push(v), p(y));
    return y;
  }
  return u(), d();
}
function Wc(e) {
  return e ? e.replace(Fy, kn) : kn;
}
var Hy = Uy, Vy = fo && fo.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(su, "__esModule", { value: !0 });
su.default = qy;
const Wy = Vy(Hy);
function qy(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, Wy.default)(e), i = typeof t == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: s } = o;
    i ? t(l, s, o) : s && (n = n || {}, n[l] = s);
  }), n;
}
var ol = {};
Object.defineProperty(ol, "__esModule", { value: !0 });
ol.camelCase = void 0;
var Qy = /^--[a-zA-Z0-9_-]+$/, Ky = /-([a-z])/g, Xy = /^[^-]+$/, Yy = /^-(webkit|moz|ms|o|khtml)-/, Gy = /^-(ms)-/, Jy = function(e) {
  return !e || Xy.test(e) || Qy.test(e);
}, Zy = function(e, t) {
  return t.toUpperCase();
}, qc = function(e, t) {
  return "".concat(t, "-");
}, ex = function(e, t) {
  return t === void 0 && (t = {}), Jy(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Gy, qc) : e = e.replace(Yy, qc), e.replace(Ky, Zy));
};
ol.camelCase = ex;
var tx = fo && fo.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, nx = tx(su), rx = ol;
function Js(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, nx.default)(e, function(r, i) {
    r && i && (n[(0, rx.camelCase)(r, t)] = i);
  }), n;
}
Js.default = Js;
var ix = Js;
const ox = /* @__PURE__ */ sa(ix), ih = oh("end"), au = oh("start");
function oh(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function lx(e) {
  const t = au(e), n = ih(e);
  if (t && n)
    return { start: t, end: n };
}
function Kr(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Qc(e.position) : "start" in e || "end" in e ? Qc(e) : "line" in e || "column" in e ? Zs(e) : "";
}
function Zs(e) {
  return Kc(e && e.line) + ":" + Kc(e && e.column);
}
function Qc(e) {
  return Zs(e && e.start) + "-" + Zs(e && e.end);
}
function Kc(e) {
  return e && typeof e == "number" ? e : 1;
}
class De extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, l = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? o.ruleId = r : (o.source = r.slice(0, a), o.ruleId = r.slice(a + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const a = o.ancestors[o.ancestors.length - 1];
      a && (o.place = a.position);
    }
    const s = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = s ? s.line : void 0, this.name = Kr(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
De.prototype.file = "";
De.prototype.name = "";
De.prototype.reason = "";
De.prototype.message = "";
De.prototype.stack = "";
De.prototype.column = void 0;
De.prototype.line = void 0;
De.prototype.ancestors = void 0;
De.prototype.cause = void 0;
De.prototype.fatal = void 0;
De.prototype.place = void 0;
De.prototype.ruleId = void 0;
De.prototype.source = void 0;
const uu = {}.hasOwnProperty, sx = /* @__PURE__ */ new Map(), ax = /[A-Z]/g, ux = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), cx = /* @__PURE__ */ new Set(["td", "th"]), lh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function px(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = wx(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = xx(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? lu : Py,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = sh(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function sh(e, t, n) {
  if (t.type === "element")
    return dx(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return fx(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return mx(e, t, n);
  if (t.type === "mdxjsEsm")
    return hx(e, t);
  if (t.type === "root")
    return gx(e, t, n);
  if (t.type === "text")
    return yx(e, t);
}
function dx(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = lu, e.schema = i), e.ancestors.push(t);
  const o = uh(e, t.tagName, !1), l = vx(e, t);
  let s = pu(e, t);
  return ux.has(t.tagName) && (s = s.filter(function(a) {
    return typeof a == "string" ? !vy(a) : !0;
  })), ah(e, l, o, t), cu(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function fx(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  gi(e, t.position);
}
function hx(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  gi(e, t.position);
}
function mx(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = lu, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : uh(e, t.name, !0), l = kx(e, t), s = pu(e, t);
  return ah(e, l, o, t), cu(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function gx(e, t, n) {
  const r = {};
  return cu(r, pu(e, t)), e.create(t, e.Fragment, r, n);
}
function yx(e, t) {
  return t.value;
}
function ah(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function cu(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function xx(e, t, n) {
  return r;
  function r(i, o, l, s) {
    const u = Array.isArray(l.children) ? n : t;
    return s ? u(o, l, s) : u(o, l);
  }
}
function wx(e, t) {
  return n;
  function n(r, i, o, l) {
    const s = Array.isArray(o.children), a = au(r);
    return t(
      i,
      o,
      l,
      s,
      {
        columnNumber: a ? a.column - 1 : void 0,
        fileName: e,
        lineNumber: a ? a.line : void 0
      },
      void 0
    );
  }
}
function vx(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && uu.call(t.properties, i)) {
      const o = bx(e, i, t.properties[i]);
      if (o) {
        const [l, s] = o;
        e.tableCellAlignToStyle && l === "align" && typeof s == "string" && cx.has(t.tagName) ? r = s : n[l] = s;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function kx(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const s = l.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        gi(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, o = e.evaluater.evaluateExpression(s.expression);
        } else
          gi(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function pu(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : sx;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const a = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (a) {
        const u = i.get(a) || 0;
        l = a + "-" + u, i.set(a, u + 1);
      }
    }
    const s = sh(e, o, l);
    s !== void 0 && n.push(s);
  }
  return n;
}
function bx(e, t, n) {
  const r = jy(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? my(n) : _y(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Sx(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Cx(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Cy[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Sx(e, t) {
  try {
    return ox(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new De("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = lh + "#cannot-parse-style-attribute", i;
  }
}
function uh(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const s = Fc(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: s,
        computed: !!(o && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = l;
  } else
    r = Fc(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return uu.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  gi(e);
}
function gi(e, t) {
  const n = new De(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = lh + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Cx(e) {
  const t = {};
  let n;
  for (n in e)
    uu.call(e, n) && (t[Ex(n)] = e[n]);
  return t;
}
function Ex(e) {
  let t = e.replace(ax, Nx);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Nx(e) {
  return "-" + e.toLowerCase();
}
const Bl = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, jx = {};
function du(e, t) {
  const n = jx, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ch(e, r, i);
}
function ch(e, t, n) {
  if (Tx(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Xc(e.children, t, n);
  }
  return Array.isArray(e) ? Xc(e, t, n) : "";
}
function Xc(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ch(e[i], t, n);
  return r.join("");
}
function Tx(e) {
  return !!(e && typeof e == "object");
}
const Yc = document.createElement("i");
function fu(e) {
  const t = "&" + e + ";";
  Yc.innerHTML = t;
  const n = Yc.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function nt(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function at(e, t) {
  return e.length > 0 ? (nt(e, e.length, 0, t), e) : t;
}
const Gc = {}.hasOwnProperty;
function ph(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    zx(t, e[n]);
  return t;
}
function zx(e, t) {
  let n;
  for (n in t) {
    const i = (Gc.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Gc.call(i, l) || (i[l] = []);
        const s = o[l];
        Px(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Px(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  nt(e, 0, 0, r);
}
function dh(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function kt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Fe = hn(/[A-Za-z]/), Le = hn(/[\dA-Za-z]/), _x = hn(/[#-'*+\--9=?A-Z^-~]/);
function Oo(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ea = hn(/\d/), Ix = hn(/[\dA-Fa-f]/), Lx = hn(/[!-/:-@[-`{-~]/);
function U(e) {
  return e !== null && e < -2;
}
function se(e) {
  return e !== null && (e < 0 || e === 32);
}
function X(e) {
  return e === -2 || e === -1 || e === 32;
}
const ll = hn(new RegExp("\\p{P}|\\p{S}", "u")), Ln = hn(/\s/);
function hn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function wr(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && Le(e.charCodeAt(n + 1)) && Le(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const s = e.charCodeAt(n + 1);
      o < 56320 && s > 56319 && s < 57344 ? (l = String.fromCharCode(o, s), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function J(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(a) {
    return X(a) ? (e.enter(n), s(a)) : t(a);
  }
  function s(a) {
    return X(a) && o++ < i ? (e.consume(a), s) : (e.exit(n), t(a));
  }
}
const Ax = {
  tokenize: Dx
};
function Dx(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), J(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), o(s);
  }
  function o(s) {
    const a = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = a), n = a, l(s);
  }
  function l(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return U(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), l);
  }
}
const Rx = {
  tokenize: Mx
}, Jc = {
  tokenize: Fx
};
function Mx(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return s;
  function s(x) {
    if (r < n.length) {
      const C = n[r];
      return t.containerState = C[1], e.attempt(C[0].continuation, a, u)(x);
    }
    return u(x);
  }
  function a(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && g();
      const C = t.events.length;
      let j = C, b;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          b = t.events[j][1].end;
          break;
        }
      m(r);
      let N = C;
      for (; N < t.events.length; )
        t.events[N][1].end = {
          ...b
        }, N++;
      return nt(t.events, j + 1, 0, t.events.slice(C)), t.events.length = N, u(x);
    }
    return s(x);
  }
  function u(x) {
    if (r === n.length) {
      if (!i)
        return h(x);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(x);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Jc, p, c)(x);
  }
  function p(x) {
    return i && g(), m(r), h(x);
  }
  function c(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, y(x);
  }
  function h(x) {
    return t.containerState = {}, e.attempt(Jc, d, y)(x);
  }
  function d(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(x);
  }
  function y(x) {
    if (x === null) {
      i && g(), m(0), e.consume(x);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), v(x);
  }
  function v(x) {
    if (x === null) {
      E(e.exit("chunkFlow"), !0), m(0), e.consume(x);
      return;
    }
    return U(x) ? (e.consume(x), E(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(x), v);
  }
  function E(x, C) {
    const j = t.sliceStream(x);
    if (C && j.push(null), x.previous = o, o && (o.next = x), o = x, i.defineSkip(x.start), i.write(j), t.parser.lazy[x.start.line]) {
      let b = i.events.length;
      for (; b--; )
        if (
          // The token starts before the line ending…
          i.events[b][1].start.offset < l && // …and either is not ended yet…
          (!i.events[b][1].end || // …or ends after it.
          i.events[b][1].end.offset > l)
        )
          return;
      const N = t.events.length;
      let z = N, $, S;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          if ($) {
            S = t.events[z][1].end;
            break;
          }
          $ = !0;
        }
      for (m(r), b = N; b < t.events.length; )
        t.events[b][1].end = {
          ...S
        }, b++;
      nt(t.events, z + 1, 0, t.events.slice(N)), t.events.length = b;
    }
  }
  function m(x) {
    let C = n.length;
    for (; C-- > x; ) {
      const j = n[C];
      t.containerState = j[1], j[0].exit.call(t, e);
    }
    n.length = x;
  }
  function g() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Fx(e, t, n) {
  return J(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function fr(e) {
  if (e === null || se(e) || Ln(e))
    return 1;
  if (ll(e))
    return 2;
}
function sl(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const ta = {
  name: "attention",
  resolveAll: Ox,
  tokenize: Bx
};
function Ox(e, t) {
  let n = -1, r, i, o, l, s, a, u, p;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          Zc(c, -a), Zc(h, a), l = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, o = {
            type: a > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: a > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...s.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = at(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = at(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), u = at(u, sl(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = at(u, [["exit", o, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (p = 2, u = at(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : p = 0, nt(e, r - 1, n - r + 3, u), n = r + u.length - p - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Bx(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = fr(r);
  let o;
  return l;
  function l(a) {
    return o = a, e.enter("attentionSequence"), s(a);
  }
  function s(a) {
    if (a === o)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), p = fr(a), c = !p || p === 2 && i || n.includes(a), h = !i || i === 2 && p || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !h)), u._close = !!(o === 42 ? h : h && (p || !c)), t(a);
  }
}
function Zc(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const $x = {
  name: "autolink",
  tokenize: Ux
};
function Ux(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(d) {
    return Fe(d) ? (e.consume(d), l) : d === 64 ? n(d) : u(d);
  }
  function l(d) {
    return d === 43 || d === 45 || d === 46 || Le(d) ? (r = 1, s(d)) : u(d);
  }
  function s(d) {
    return d === 58 ? (e.consume(d), r = 0, a) : (d === 43 || d === 45 || d === 46 || Le(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, u(d));
  }
  function a(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Oo(d) ? n(d) : (e.consume(d), a);
  }
  function u(d) {
    return d === 64 ? (e.consume(d), p) : _x(d) ? (e.consume(d), u) : n(d);
  }
  function p(d) {
    return Le(d) ? c(d) : n(d);
  }
  function c(d) {
    return d === 46 ? (e.consume(d), r = 0, p) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(d);
  }
  function h(d) {
    if ((d === 45 || Le(d)) && r++ < 63) {
      const y = d === 45 ? h : c;
      return e.consume(d), y;
    }
    return n(d);
  }
}
const Ei = {
  partial: !0,
  tokenize: Hx
};
function Hx(e, t, n) {
  return r;
  function r(o) {
    return X(o) ? J(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || U(o) ? t(o) : n(o);
  }
}
const fh = {
  continuation: {
    tokenize: Wx
  },
  exit: qx,
  name: "blockQuote",
  tokenize: Vx
};
function Vx(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return X(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Wx(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return X(l) ? J(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(fh, t, n)(l);
  }
}
function qx(e) {
  e.exit("blockQuote");
}
const hh = {
  name: "characterEscape",
  tokenize: Qx
};
function Qx(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Lx(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const mh = {
  name: "characterReference",
  tokenize: Kx
};
function Kx(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return s;
  function s(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), a;
  }
  function a(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = Le, p(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Ix, p) : (e.enter("characterReferenceValue"), o = 7, l = ea, p(c));
  }
  function p(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return l === Le && !fu(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < o ? (e.consume(c), p) : n(c);
  }
}
const ep = {
  partial: !0,
  tokenize: Yx
}, tp = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Xx
};
function Xx(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: j
  };
  let o = 0, l = 0, s;
  return a;
  function a(b) {
    return u(b);
  }
  function u(b) {
    const N = r.events[r.events.length - 1];
    return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, s = b, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(b);
  }
  function p(b) {
    return b === s ? (l++, e.consume(b), p) : l < 3 ? n(b) : (e.exit("codeFencedFenceSequence"), X(b) ? J(e, c, "whitespace")(b) : c(b));
  }
  function c(b) {
    return b === null || U(b) ? (e.exit("codeFencedFence"), r.interrupt ? t(b) : e.check(ep, v, C)(b)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(b));
  }
  function h(b) {
    return b === null || U(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(b)) : X(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), J(e, d, "whitespace")(b)) : b === 96 && b === s ? n(b) : (e.consume(b), h);
  }
  function d(b) {
    return b === null || U(b) ? c(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(b));
  }
  function y(b) {
    return b === null || U(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(b)) : b === 96 && b === s ? n(b) : (e.consume(b), y);
  }
  function v(b) {
    return e.attempt(i, C, E)(b);
  }
  function E(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), m;
  }
  function m(b) {
    return o > 0 && X(b) ? J(e, g, "linePrefix", o + 1)(b) : g(b);
  }
  function g(b) {
    return b === null || U(b) ? e.check(ep, v, C)(b) : (e.enter("codeFlowValue"), x(b));
  }
  function x(b) {
    return b === null || U(b) ? (e.exit("codeFlowValue"), g(b)) : (e.consume(b), x);
  }
  function C(b) {
    return e.exit("codeFenced"), t(b);
  }
  function j(b, N, z) {
    let $ = 0;
    return S;
    function S(H) {
      return b.enter("lineEnding"), b.consume(H), b.exit("lineEnding"), A;
    }
    function A(H) {
      return b.enter("codeFencedFence"), X(H) ? J(b, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(H) : I(H);
    }
    function I(H) {
      return H === s ? (b.enter("codeFencedFenceSequence"), W(H)) : z(H);
    }
    function W(H) {
      return H === s ? ($++, b.consume(H), W) : $ >= l ? (b.exit("codeFencedFenceSequence"), X(H) ? J(b, K, "whitespace")(H) : K(H)) : z(H);
    }
    function K(H) {
      return H === null || U(H) ? (b.exit("codeFencedFence"), N(H)) : z(H);
    }
  }
}
function Yx(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const $l = {
  name: "codeIndented",
  tokenize: Jx
}, Gx = {
  partial: !0,
  tokenize: Zx
};
function Jx(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), J(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const p = r.events[r.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? a(u) : U(u) ? e.attempt(Gx, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || U(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Zx(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : U(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : J(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : U(l) ? i(l) : n(l);
  }
}
const ew = {
  name: "codeText",
  previous: nw,
  resolve: tw,
  tokenize: rw
};
function tw(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function nw(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function rw(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(c);
  }
  function s(c) {
    return c === 96 ? (e.consume(c), r++, s) : (e.exit("codeTextSequence"), a(c));
  }
  function a(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), a) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, p(c)) : U(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || U(c) ? (e.exit("codeTextData"), a(c)) : (e.consume(c), u);
  }
  function p(c) {
    return c === 96 ? (e.consume(c), i++, p) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class iw {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Lr(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Lr(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Lr(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Lr(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Lr(this.left, n.reverse());
      }
  }
}
function Lr(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function gh(e) {
  const t = {};
  let n = -1, r, i, o, l, s, a, u;
  const p = new iw(e);
  for (; ++n < p.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = p.get(n), n && r[1].type === "chunkFlow" && p.get(n - 1)[1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, o = 0, o < a.length && a[o][1].type === "lineEndingBlank" && (o += 2), o < a.length && a[o][1].type === "content"))
      for (; ++o < a.length && a[o][1].type !== "content"; )
        a[o][1].type === "chunkText" && (a[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ow(p, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (l = p.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (p.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...p.get(i)[1].start
      }, s = p.slice(i, n), s.unshift(r), p.splice(i, n - i + 1, s));
    }
  }
  return nt(e, 0, Number.POSITIVE_INFINITY, p.slice(0)), !u;
}
function ow(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const s = l.events, a = [], u = {};
  let p, c, h = -1, d = n, y = 0, v = 0;
  const E = [v];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; )
      ;
    o.push(i), d._tokenizer || (p = r.sliceStream(d), d.next || p.push(null), c && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(p), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = d, d = d.next;
  }
  for (d = n; ++h < s.length; )
    // Find a void token that includes a break.
    s[h][0] === "exit" && s[h - 1][0] === "enter" && s[h][1].type === s[h - 1][1].type && s[h][1].start.line !== s[h][1].end.line && (v = h + 1, E.push(v), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : E.pop(), h = E.length; h--; ) {
    const m = s.slice(E[h], E[h + 1]), g = o.pop();
    a.push([g, g + m.length - 1]), e.splice(g, 2, m);
  }
  for (a.reverse(), h = -1; ++h < a.length; )
    u[y + a[h][0]] = y + a[h][1], y += a[h][1] - a[h][0] - 1;
  return u;
}
const lw = {
  resolve: aw,
  tokenize: uw
}, sw = {
  partial: !0,
  tokenize: cw
};
function aw(e) {
  return gh(e), e;
}
function uw(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? o(s) : U(s) ? e.check(sw, l, o)(s) : (e.consume(s), i);
  }
  function o(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function l(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function cw(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), J(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || U(l))
      return n(l);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function yh(e, t, n, r, i, o, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let p = 0;
  return c;
  function c(m) {
    return m === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(m), e.exit(o), h) : m === null || m === 32 || m === 41 || Oo(m) ? n(m) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), v(m));
  }
  function h(m) {
    return m === 62 ? (e.enter(o), e.consume(m), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), d(m));
  }
  function d(m) {
    return m === 62 ? (e.exit("chunkString"), e.exit(s), h(m)) : m === null || m === 60 || U(m) ? n(m) : (e.consume(m), m === 92 ? y : d);
  }
  function y(m) {
    return m === 60 || m === 62 || m === 92 ? (e.consume(m), d) : d(m);
  }
  function v(m) {
    return !p && (m === null || m === 41 || se(m)) ? (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(m)) : p < u && m === 40 ? (e.consume(m), p++, v) : m === 41 ? (e.consume(m), p--, v) : m === null || m === 32 || m === 40 || Oo(m) ? n(m) : (e.consume(m), m === 92 ? E : v);
  }
  function E(m) {
    return m === 40 || m === 41 || m === 92 ? (e.consume(m), v) : v(m);
  }
}
function xh(e, t, n, r, i, o) {
  const l = this;
  let s = 0, a;
  return u;
  function u(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(o), p;
  }
  function p(d) {
    return s > 999 || d === null || d === 91 || d === 93 && !a || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs ? n(d) : d === 93 ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : U(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), p) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === null || d === 91 || d === 93 || U(d) || s++ > 999 ? (e.exit("chunkString"), p(d)) : (e.consume(d), a || (a = !X(d)), d === 92 ? h : c);
  }
  function h(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, c) : c(d);
  }
}
function wh(e, t, n, r, i, o) {
  let l;
  return s;
  function s(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), l = h === 40 ? 41 : h, a) : n(h);
  }
  function a(h) {
    return h === l ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), u(h));
  }
  function u(h) {
    return h === l ? (e.exit(o), a(l)) : h === null ? n(h) : U(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), J(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), p(h));
  }
  function p(h) {
    return h === l || h === null || U(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? c : p);
  }
  function c(h) {
    return h === l || h === 92 ? (e.consume(h), p) : p(h);
  }
}
function Xr(e, t) {
  let n;
  return r;
  function r(i) {
    return U(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : X(i) ? J(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const pw = {
  name: "definition",
  tokenize: fw
}, dw = {
  partial: !0,
  tokenize: hw
};
function fw(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(d) {
    return e.enter("definition"), l(d);
  }
  function l(d) {
    return xh.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function s(d) {
    return i = kt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), a) : n(d);
  }
  function a(d) {
    return se(d) ? Xr(e, u)(d) : u(d);
  }
  function u(d) {
    return yh(
      e,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function p(d) {
    return e.attempt(dw, c, c)(d);
  }
  function c(d) {
    return X(d) ? J(e, h, "whitespace")(d) : h(d);
  }
  function h(d) {
    return d === null || U(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d);
  }
}
function hw(e, t, n) {
  return r;
  function r(s) {
    return se(s) ? Xr(e, i)(s) : n(s);
  }
  function i(s) {
    return wh(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function o(s) {
    return X(s) ? J(e, l, "whitespace")(s) : l(s);
  }
  function l(s) {
    return s === null || U(s) ? t(s) : n(s);
  }
}
const mw = {
  name: "hardBreakEscape",
  tokenize: gw
};
function gw(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return U(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const yw = {
  name: "headingAtx",
  resolve: xw,
  tokenize: ww
};
function xw(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, nt(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function ww(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("atxHeading"), o(p);
  }
  function o(p) {
    return e.enter("atxHeadingSequence"), l(p);
  }
  function l(p) {
    return p === 35 && r++ < 6 ? (e.consume(p), l) : p === null || se(p) ? (e.exit("atxHeadingSequence"), s(p)) : n(p);
  }
  function s(p) {
    return p === 35 ? (e.enter("atxHeadingSequence"), a(p)) : p === null || U(p) ? (e.exit("atxHeading"), t(p)) : X(p) ? J(e, s, "whitespace")(p) : (e.enter("atxHeadingText"), u(p));
  }
  function a(p) {
    return p === 35 ? (e.consume(p), a) : (e.exit("atxHeadingSequence"), s(p));
  }
  function u(p) {
    return p === null || p === 35 || se(p) ? (e.exit("atxHeadingText"), s(p)) : (e.consume(p), u);
  }
}
const vw = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], np = ["pre", "script", "style", "textarea"], kw = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Cw,
  tokenize: Ew
}, bw = {
  partial: !0,
  tokenize: jw
}, Sw = {
  partial: !0,
  tokenize: Nw
};
function Cw(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ew(e, t, n) {
  const r = this;
  let i, o, l, s, a;
  return u;
  function u(k) {
    return p(k);
  }
  function p(k) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(k), c;
  }
  function c(k) {
    return k === 33 ? (e.consume(k), h) : k === 47 ? (e.consume(k), o = !0, v) : k === 63 ? (e.consume(k), i = 3, r.interrupt ? t : w) : Fe(k) ? (e.consume(k), l = String.fromCharCode(k), E) : n(k);
  }
  function h(k) {
    return k === 45 ? (e.consume(k), i = 2, d) : k === 91 ? (e.consume(k), i = 5, s = 0, y) : Fe(k) ? (e.consume(k), i = 4, r.interrupt ? t : w) : n(k);
  }
  function d(k) {
    return k === 45 ? (e.consume(k), r.interrupt ? t : w) : n(k);
  }
  function y(k) {
    const ue = "CDATA[";
    return k === ue.charCodeAt(s++) ? (e.consume(k), s === ue.length ? r.interrupt ? t : I : y) : n(k);
  }
  function v(k) {
    return Fe(k) ? (e.consume(k), l = String.fromCharCode(k), E) : n(k);
  }
  function E(k) {
    if (k === null || k === 47 || k === 62 || se(k)) {
      const ue = k === 47, Re = l.toLowerCase();
      return !ue && !o && np.includes(Re) ? (i = 1, r.interrupt ? t(k) : I(k)) : vw.includes(l.toLowerCase()) ? (i = 6, ue ? (e.consume(k), m) : r.interrupt ? t(k) : I(k)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(k) : o ? g(k) : x(k));
    }
    return k === 45 || Le(k) ? (e.consume(k), l += String.fromCharCode(k), E) : n(k);
  }
  function m(k) {
    return k === 62 ? (e.consume(k), r.interrupt ? t : I) : n(k);
  }
  function g(k) {
    return X(k) ? (e.consume(k), g) : S(k);
  }
  function x(k) {
    return k === 47 ? (e.consume(k), S) : k === 58 || k === 95 || Fe(k) ? (e.consume(k), C) : X(k) ? (e.consume(k), x) : S(k);
  }
  function C(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || Le(k) ? (e.consume(k), C) : j(k);
  }
  function j(k) {
    return k === 61 ? (e.consume(k), b) : X(k) ? (e.consume(k), j) : x(k);
  }
  function b(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), a = k, N) : X(k) ? (e.consume(k), b) : z(k);
  }
  function N(k) {
    return k === a ? (e.consume(k), a = null, $) : k === null || U(k) ? n(k) : (e.consume(k), N);
  }
  function z(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || se(k) ? j(k) : (e.consume(k), z);
  }
  function $(k) {
    return k === 47 || k === 62 || X(k) ? x(k) : n(k);
  }
  function S(k) {
    return k === 62 ? (e.consume(k), A) : n(k);
  }
  function A(k) {
    return k === null || U(k) ? I(k) : X(k) ? (e.consume(k), A) : n(k);
  }
  function I(k) {
    return k === 45 && i === 2 ? (e.consume(k), ie) : k === 60 && i === 1 ? (e.consume(k), te) : k === 62 && i === 4 ? (e.consume(k), R) : k === 63 && i === 3 ? (e.consume(k), w) : k === 93 && i === 5 ? (e.consume(k), F) : U(k) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(bw, ee, W)(k)) : k === null || U(k) ? (e.exit("htmlFlowData"), W(k)) : (e.consume(k), I);
  }
  function W(k) {
    return e.check(Sw, K, ee)(k);
  }
  function K(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), H;
  }
  function H(k) {
    return k === null || U(k) ? W(k) : (e.enter("htmlFlowData"), I(k));
  }
  function ie(k) {
    return k === 45 ? (e.consume(k), w) : I(k);
  }
  function te(k) {
    return k === 47 ? (e.consume(k), l = "", L) : I(k);
  }
  function L(k) {
    if (k === 62) {
      const ue = l.toLowerCase();
      return np.includes(ue) ? (e.consume(k), R) : I(k);
    }
    return Fe(k) && l.length < 8 ? (e.consume(k), l += String.fromCharCode(k), L) : I(k);
  }
  function F(k) {
    return k === 93 ? (e.consume(k), w) : I(k);
  }
  function w(k) {
    return k === 62 ? (e.consume(k), R) : k === 45 && i === 2 ? (e.consume(k), w) : I(k);
  }
  function R(k) {
    return k === null || U(k) ? (e.exit("htmlFlowData"), ee(k)) : (e.consume(k), R);
  }
  function ee(k) {
    return e.exit("htmlFlow"), t(k);
  }
}
function Nw(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return U(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function jw(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Ei, t, n);
  }
}
const Tw = {
  name: "htmlText",
  tokenize: zw
};
function zw(e, t, n) {
  const r = this;
  let i, o, l;
  return s;
  function s(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), a;
  }
  function a(w) {
    return w === 33 ? (e.consume(w), u) : w === 47 ? (e.consume(w), j) : w === 63 ? (e.consume(w), x) : Fe(w) ? (e.consume(w), z) : n(w);
  }
  function u(w) {
    return w === 45 ? (e.consume(w), p) : w === 91 ? (e.consume(w), o = 0, y) : Fe(w) ? (e.consume(w), g) : n(w);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), d) : n(w);
  }
  function c(w) {
    return w === null ? n(w) : w === 45 ? (e.consume(w), h) : U(w) ? (l = c, te(w)) : (e.consume(w), c);
  }
  function h(w) {
    return w === 45 ? (e.consume(w), d) : c(w);
  }
  function d(w) {
    return w === 62 ? ie(w) : w === 45 ? h(w) : c(w);
  }
  function y(w) {
    const R = "CDATA[";
    return w === R.charCodeAt(o++) ? (e.consume(w), o === R.length ? v : y) : n(w);
  }
  function v(w) {
    return w === null ? n(w) : w === 93 ? (e.consume(w), E) : U(w) ? (l = v, te(w)) : (e.consume(w), v);
  }
  function E(w) {
    return w === 93 ? (e.consume(w), m) : v(w);
  }
  function m(w) {
    return w === 62 ? ie(w) : w === 93 ? (e.consume(w), m) : v(w);
  }
  function g(w) {
    return w === null || w === 62 ? ie(w) : U(w) ? (l = g, te(w)) : (e.consume(w), g);
  }
  function x(w) {
    return w === null ? n(w) : w === 63 ? (e.consume(w), C) : U(w) ? (l = x, te(w)) : (e.consume(w), x);
  }
  function C(w) {
    return w === 62 ? ie(w) : x(w);
  }
  function j(w) {
    return Fe(w) ? (e.consume(w), b) : n(w);
  }
  function b(w) {
    return w === 45 || Le(w) ? (e.consume(w), b) : N(w);
  }
  function N(w) {
    return U(w) ? (l = N, te(w)) : X(w) ? (e.consume(w), N) : ie(w);
  }
  function z(w) {
    return w === 45 || Le(w) ? (e.consume(w), z) : w === 47 || w === 62 || se(w) ? $(w) : n(w);
  }
  function $(w) {
    return w === 47 ? (e.consume(w), ie) : w === 58 || w === 95 || Fe(w) ? (e.consume(w), S) : U(w) ? (l = $, te(w)) : X(w) ? (e.consume(w), $) : ie(w);
  }
  function S(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || Le(w) ? (e.consume(w), S) : A(w);
  }
  function A(w) {
    return w === 61 ? (e.consume(w), I) : U(w) ? (l = A, te(w)) : X(w) ? (e.consume(w), A) : $(w);
  }
  function I(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? n(w) : w === 34 || w === 39 ? (e.consume(w), i = w, W) : U(w) ? (l = I, te(w)) : X(w) ? (e.consume(w), I) : (e.consume(w), K);
  }
  function W(w) {
    return w === i ? (e.consume(w), i = void 0, H) : w === null ? n(w) : U(w) ? (l = W, te(w)) : (e.consume(w), W);
  }
  function K(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? n(w) : w === 47 || w === 62 || se(w) ? $(w) : (e.consume(w), K);
  }
  function H(w) {
    return w === 47 || w === 62 || se(w) ? $(w) : n(w);
  }
  function ie(w) {
    return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(w);
  }
  function te(w) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), L;
  }
  function L(w) {
    return X(w) ? J(e, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : F(w);
  }
  function F(w) {
    return e.enter("htmlTextData"), l(w);
  }
}
const hu = {
  name: "labelEnd",
  resolveAll: Lw,
  resolveTo: Aw,
  tokenize: Dw
}, Pw = {
  tokenize: Rw
}, _w = {
  tokenize: Mw
}, Iw = {
  tokenize: Fw
};
function Lw(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && nt(e, 0, e.length, n), e;
}
function Aw(e, t) {
  let n = e.length, r = 0, i, o, l, s;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const a = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, p = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return s = [["enter", a, t], ["enter", u, t]], s = at(s, e.slice(o + 1, o + r + 3)), s = at(s, [["enter", p, t]]), s = at(s, sl(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), s = at(s, [["exit", p, t], e[l - 2], e[l - 1], ["exit", u, t]]), s = at(s, e.slice(l + 1)), s = at(s, [["exit", a, t]]), nt(e, o, e.length, s), e;
}
function Dw(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return s;
  function s(h) {
    return o ? o._inactive ? c(h) : (l = r.parser.defined.includes(kt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(h);
  }
  function a(h) {
    return h === 40 ? e.attempt(Pw, p, l ? p : c)(h) : h === 91 ? e.attempt(_w, p, l ? u : c)(h) : l ? p(h) : c(h);
  }
  function u(h) {
    return e.attempt(Iw, p, c)(h);
  }
  function p(h) {
    return t(h);
  }
  function c(h) {
    return o._balanced = !0, n(h);
  }
}
function Rw(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return se(c) ? Xr(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? p(c) : yh(e, l, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return se(c) ? Xr(e, a)(c) : p(c);
  }
  function s(c) {
    return n(c);
  }
  function a(c) {
    return c === 34 || c === 39 || c === 40 ? wh(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : p(c);
  }
  function u(c) {
    return se(c) ? Xr(e, p)(c) : p(c);
  }
  function p(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Mw(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return xh.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(s);
  }
  function o(s) {
    return r.parser.defined.includes(kt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function l(s) {
    return n(s);
  }
}
function Fw(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Ow = {
  name: "labelStartImage",
  resolveAll: hu.resolveAll,
  tokenize: Bw
};
function Bw(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o;
  }
  function o(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), l) : n(s);
  }
  function l(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const $w = {
  name: "labelStartLink",
  resolveAll: hu.resolveAll,
  tokenize: Uw
};
function Uw(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ul = {
  name: "lineEnding",
  tokenize: Hw
};
function Hw(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), J(e, t, "linePrefix");
  }
}
const co = {
  name: "thematicBreak",
  tokenize: Vw
};
function Vw(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, s(u);
  }
  function s(u) {
    return u === i ? (e.enter("thematicBreakSequence"), a(u)) : r >= 3 && (u === null || U(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), r++, a) : (e.exit("thematicBreakSequence"), X(u) ? J(e, s, "whitespace")(u) : s(u));
  }
}
const Ue = {
  continuation: {
    tokenize: Kw
  },
  exit: Yw,
  name: "list",
  tokenize: Qw
}, Ww = {
  partial: !0,
  tokenize: Gw
}, qw = {
  partial: !0,
  tokenize: Xw
};
function Qw(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return s;
  function s(d) {
    const y = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : ea(d)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(co, n, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(d);
    }
    return n(d);
  }
  function a(d) {
    return ea(d) && ++l < 10 ? (e.consume(d), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), u(d)) : n(d);
  }
  function u(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      Ei,
      // Can’t be empty when interrupting.
      r.interrupt ? n : p,
      e.attempt(Ww, h, c)
    );
  }
  function p(d) {
    return r.containerState.initialBlankLine = !0, o++, h(d);
  }
  function c(d) {
    return X(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), h) : n(d);
  }
  function h(d) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function Kw(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Ei, i, o);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, J(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function o(s) {
    return r.containerState.furtherBlankLines || !X(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qw, t, l)(s));
  }
  function l(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, J(e, e.attempt(Ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function Xw(e, t, n) {
  const r = this;
  return J(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Yw(e) {
  e.exit(this.containerState.type);
}
function Gw(e, t, n) {
  const r = this;
  return J(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !X(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const rp = {
  name: "setextUnderline",
  resolveTo: Jw,
  tokenize: Zw
};
function Jw(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function Zw(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let p = r.events.length, c;
    for (; p--; )
      if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
        c = r.events[p][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), s(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), X(u) ? J(e, a, "lineSuffix")(u) : a(u));
  }
  function a(u) {
    return u === null || U(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const e1 = {
  tokenize: t1
};
function t1(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Ei,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, J(e, e.attempt(this.parser.constructs.flow, i, e.attempt(lw, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const n1 = {
  resolveAll: kh()
}, r1 = vh("string"), i1 = vh("text");
function vh(e) {
  return {
    resolveAll: kh(e === "text" ? o1 : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, s);
    return l;
    function l(p) {
      return u(p) ? o(p) : s(p);
    }
    function s(p) {
      if (p === null) {
        n.consume(p);
        return;
      }
      return n.enter("data"), n.consume(p), a;
    }
    function a(p) {
      return u(p) ? (n.exit("data"), o(p)) : (n.consume(p), a);
    }
    function u(p) {
      if (p === null)
        return !0;
      const c = i[p];
      let h = -1;
      if (c)
        for (; ++h < c.length; ) {
          const d = c[h];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function kh(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function o1(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, s = 0, a;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            s++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          a = !0, s++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const u = {
          type: n === e.length || a || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const l1 = {
  42: Ue,
  43: Ue,
  45: Ue,
  48: Ue,
  49: Ue,
  50: Ue,
  51: Ue,
  52: Ue,
  53: Ue,
  54: Ue,
  55: Ue,
  56: Ue,
  57: Ue,
  62: fh
}, s1 = {
  91: pw
}, a1 = {
  [-2]: $l,
  [-1]: $l,
  32: $l
}, u1 = {
  35: yw,
  42: co,
  45: [rp, co],
  60: kw,
  61: rp,
  95: co,
  96: tp,
  126: tp
}, c1 = {
  38: mh,
  92: hh
}, p1 = {
  [-5]: Ul,
  [-4]: Ul,
  [-3]: Ul,
  33: Ow,
  38: mh,
  42: ta,
  60: [$x, Tw],
  91: $w,
  92: [mw, hh],
  93: hu,
  95: ta,
  96: ew
}, d1 = {
  null: [ta, n1]
}, f1 = {
  null: [42, 95]
}, h1 = {
  null: []
}, m1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: f1,
  contentInitial: s1,
  disable: h1,
  document: l1,
  flow: u1,
  flowInitial: a1,
  insideSpan: d1,
  string: c1,
  text: p1
}, Symbol.toStringTag, { value: "Module" }));
function g1(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let l = [], s = [];
  const a = {
    attempt: N(j),
    check: N(b),
    consume: g,
    enter: x,
    exit: C,
    interrupt: N(b, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: d,
    write: c
  };
  let p = t.tokenize.call(u, a);
  return t.resolveAll && o.push(t), u;
  function c(A) {
    return l = at(l, A), E(), l[l.length - 1] !== null ? [] : (z(t, 0), u.events = sl(o, u.events, u), u.events);
  }
  function h(A, I) {
    return x1(d(A), I);
  }
  function d(A) {
    return y1(l, A);
  }
  function y() {
    const {
      _bufferIndex: A,
      _index: I,
      line: W,
      column: K,
      offset: H
    } = r;
    return {
      _bufferIndex: A,
      _index: I,
      line: W,
      column: K,
      offset: H
    };
  }
  function v(A) {
    i[A.line] = A.column, S();
  }
  function E() {
    let A;
    for (; r._index < l.length; ) {
      const I = l[r._index];
      if (typeof I == "string")
        for (A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === A && r._bufferIndex < I.length; )
          m(I.charCodeAt(r._bufferIndex));
      else
        m(I);
    }
  }
  function m(A) {
    p = p(A);
  }
  function g(A) {
    U(A) ? (r.line++, r.column = 1, r.offset += A === -3 ? 2 : 1, S()) : A !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = A;
  }
  function x(A, I) {
    const W = I || {};
    return W.type = A, W.start = y(), u.events.push(["enter", W, u]), s.push(W), W;
  }
  function C(A) {
    const I = s.pop();
    return I.end = y(), u.events.push(["exit", I, u]), I;
  }
  function j(A, I) {
    z(A, I.from);
  }
  function b(A, I) {
    I.restore();
  }
  function N(A, I) {
    return W;
    function W(K, H, ie) {
      let te, L, F, w;
      return Array.isArray(K) ? (
        /* c8 ignore next 1 */
        ee(K)
      ) : "tokenize" in K ? (
        // Looks like a construct.
        ee([
          /** @type {Construct} */
          K
        ])
      ) : R(K);
      function R(ne) {
        return Q;
        function Q(M) {
          const xe = M !== null && ne[M], we = M !== null && ne.null, Xe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(xe) ? xe : xe ? [xe] : [],
            ...Array.isArray(we) ? we : we ? [we] : []
          ];
          return ee(Xe)(M);
        }
      }
      function ee(ne) {
        return te = ne, L = 0, ne.length === 0 ? ie : k(ne[L]);
      }
      function k(ne) {
        return Q;
        function Q(M) {
          return w = $(), F = ne, ne.partial || (u.currentConstruct = ne), ne.name && u.parser.constructs.disable.null.includes(ne.name) ? Re() : ne.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            I ? Object.assign(Object.create(u), I) : u,
            a,
            ue,
            Re
          )(M);
        }
      }
      function ue(ne) {
        return A(F, w), H;
      }
      function Re(ne) {
        return w.restore(), ++L < te.length ? k(te[L]) : ie;
      }
    }
  }
  function z(A, I) {
    A.resolveAll && !o.includes(A) && o.push(A), A.resolve && nt(u.events, I, u.events.length - I, A.resolve(u.events.slice(I), u)), A.resolveTo && (u.events = A.resolveTo(u.events, u));
  }
  function $() {
    const A = y(), I = u.previous, W = u.currentConstruct, K = u.events.length, H = Array.from(s);
    return {
      from: K,
      restore: ie
    };
    function ie() {
      r = A, u.previous = I, u.currentConstruct = W, u.events.length = K, s = H, S();
    }
  }
  function S() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function y1(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const s = l[0];
      typeof s == "string" ? l[0] = s.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function x1(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function w1(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      ph([m1, ...(e || {}).extensions || []])
    ),
    content: i(Ax),
    defined: [],
    document: i(Rx),
    flow: i(e1),
    lazy: {},
    string: i(r1),
    text: i(i1)
  };
  return r;
  function i(o) {
    return l;
    function l(s) {
      return g1(r, o, s);
    }
  }
}
function v1(e) {
  for (; !gh(e); )
    ;
  return e;
}
const ip = /[\0\t\n\r]/g;
function k1() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, s) {
    const a = [];
    let u, p, c, h, d;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (ip.lastIndex = c, u = ip.exec(o), h = u && u.index !== void 0 ? u.index : o.length, d = o.charCodeAt(h), !u) {
        t = o.slice(c);
        break;
      }
      if (d === 10 && c === h && r)
        a.push(-3), r = void 0;
      else
        switch (r && (a.push(-5), r = void 0), c < h && (a.push(o.slice(c, h)), e += h - c), d) {
          case 0: {
            a.push(65533), e++;
            break;
          }
          case 9: {
            for (p = Math.ceil(e / 4) * 4, a.push(-2); e++ < p; ) a.push(-1);
            break;
          }
          case 10: {
            a.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = h + 1;
    }
    return s && (r && a.push(-5), t && a.push(t), a.push(null)), a;
  }
}
const b1 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function S1(e) {
  return e.replace(b1, C1);
}
function C1(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return dh(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return fu(n) || e;
}
const bh = {}.hasOwnProperty;
function E1(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), N1(n)(v1(w1(n).document().write(k1()(e, t, !0))));
}
function N1(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Eu),
      autolinkProtocol: $,
      autolinkEmail: $,
      atxHeading: o(Ye),
      blockQuote: o(we),
      characterEscape: $,
      characterReference: $,
      codeFenced: o(Xe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Xe, l),
      codeText: o(Vt, l),
      codeTextData: $,
      data: $,
      codeFlowValue: $,
      definition: o(vr),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Mn),
      hardBreakEscape: o(Ti),
      hardBreakTrailing: o(Ti),
      htmlFlow: o(kr, l),
      htmlFlowData: $,
      htmlText: o(kr, l),
      htmlTextData: $,
      image: o(pm),
      label: l,
      link: o(Eu),
      listItem: o(dm),
      listItemValue: h,
      listOrdered: o(Nu, c),
      listUnordered: o(Nu),
      paragraph: o(fm),
      reference: k,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(Ye),
      strong: o(hm),
      thematicBreak: o(gm)
    },
    exit: {
      atxHeading: a(),
      atxHeadingSequence: j,
      autolink: a(),
      autolinkEmail: xe,
      autolinkProtocol: M,
      blockQuote: a(),
      characterEscapeValue: S,
      characterReferenceMarkerHexadecimal: Re,
      characterReferenceMarkerNumeric: Re,
      characterReferenceValue: ne,
      characterReference: Q,
      codeFenced: a(E),
      codeFencedFence: v,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: y,
      codeFlowValue: S,
      codeIndented: a(m),
      codeText: a(H),
      codeTextData: S,
      data: S,
      definition: a(),
      definitionDestinationString: C,
      definitionLabelString: g,
      definitionTitleString: x,
      emphasis: a(),
      hardBreakEscape: a(I),
      hardBreakTrailing: a(I),
      htmlFlow: a(W),
      htmlFlowData: S,
      htmlText: a(K),
      htmlTextData: S,
      image: a(te),
      label: F,
      labelText: L,
      lineEnding: A,
      link: a(ie),
      listItem: a(),
      listOrdered: a(),
      listUnordered: a(),
      paragraph: a(),
      referenceString: ue,
      resourceDestinationString: w,
      resourceTitleString: R,
      resource: ee,
      setextHeading: a(z),
      setextHeadingLineSequence: N,
      setextHeadingText: b,
      strong: a(),
      thematicBreak: a()
    }
  };
  Sh(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let D = {
      type: "root",
      children: []
    };
    const q = {
      stack: [D],
      tokenStack: [],
      config: t,
      enter: s,
      exit: u,
      buffer: l,
      resume: p,
      data: n
    }, G = [];
    let oe = -1;
    for (; ++oe < T.length; )
      if (T[oe][1].type === "listOrdered" || T[oe][1].type === "listUnordered")
        if (T[oe][0] === "enter")
          G.push(oe);
        else {
          const ft = G.pop();
          oe = i(T, ft, oe);
        }
    for (oe = -1; ++oe < T.length; ) {
      const ft = t[T[oe][0]];
      bh.call(ft, T[oe][1].type) && ft[T[oe][1].type].call(Object.assign({
        sliceSerialize: T[oe][2].sliceSerialize
      }, q), T[oe][1]);
    }
    if (q.tokenStack.length > 0) {
      const ft = q.tokenStack[q.tokenStack.length - 1];
      (ft[1] || op).call(q, void 0, ft[0]);
    }
    for (D.position = {
      start: qt(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: qt(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, oe = -1; ++oe < t.transforms.length; )
      D = t.transforms[oe](D) || D;
    return D;
  }
  function i(T, D, q) {
    let G = D - 1, oe = -1, ft = !1, mn, _t, br, Sr;
    for (; ++G <= q; ) {
      const Ge = T[G];
      switch (Ge[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ge[0] === "enter" ? oe++ : oe--, Sr = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ge[0] === "enter" && (mn && !Sr && !oe && !br && (br = G), Sr = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Sr = void 0;
      }
      if (!oe && Ge[0] === "enter" && Ge[1].type === "listItemPrefix" || oe === -1 && Ge[0] === "exit" && (Ge[1].type === "listUnordered" || Ge[1].type === "listOrdered")) {
        if (mn) {
          let Fn = G;
          for (_t = void 0; Fn--; ) {
            const It = T[Fn];
            if (It[1].type === "lineEnding" || It[1].type === "lineEndingBlank") {
              if (It[0] === "exit") continue;
              _t && (T[_t][1].type = "lineEndingBlank", ft = !0), It[1].type = "lineEnding", _t = Fn;
            } else if (!(It[1].type === "linePrefix" || It[1].type === "blockQuotePrefix" || It[1].type === "blockQuotePrefixWhitespace" || It[1].type === "blockQuoteMarker" || It[1].type === "listItemIndent")) break;
          }
          br && (!_t || br < _t) && (mn._spread = !0), mn.end = Object.assign({}, _t ? T[_t][1].start : Ge[1].end), T.splice(_t || G, 0, ["exit", mn, Ge[2]]), G++, q++;
        }
        if (Ge[1].type === "listItemPrefix") {
          const Fn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ge[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          mn = Fn, T.splice(G, 0, ["enter", Fn, Ge[2]]), G++, q++, br = void 0, Sr = !0;
        }
      }
    }
    return T[D][1]._spread = ft, q;
  }
  function o(T, D) {
    return q;
    function q(G) {
      s.call(this, T(G), G), D && D.call(this, G);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(T, D, q) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([D, q || void 0]), T.position = {
      start: qt(D.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function a(T) {
    return D;
    function D(q) {
      T && T.call(this, q), u.call(this, q);
    }
  }
  function u(T, D) {
    const q = this.stack.pop(), G = this.tokenStack.pop();
    if (G)
      G[0].type !== T.type && (D ? D.call(this, T, G[0]) : (G[1] || op).call(this, T, G[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + Kr({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    q.position.end = qt(T.end);
  }
  function p() {
    return du(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(T) {
    if (this.data.expectingFirstListItemValue) {
      const D = this.stack[this.stack.length - 2];
      D.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.lang = T;
  }
  function y() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.meta = T;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function m() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function g(T) {
    const D = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = D, q.identifier = kt(this.sliceSerialize(T)).toLowerCase();
  }
  function x() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.title = T;
  }
  function C() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.url = T;
  }
  function j(T) {
    const D = this.stack[this.stack.length - 1];
    if (!D.depth) {
      const q = this.sliceSerialize(T).length;
      D.depth = q;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function N(T) {
    const D = this.stack[this.stack.length - 1];
    D.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function z() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function $(T) {
    const q = this.stack[this.stack.length - 1].children;
    let G = q[q.length - 1];
    (!G || G.type !== "text") && (G = mm(), G.position = {
      start: qt(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, q.push(G)), this.stack.push(G);
  }
  function S(T) {
    const D = this.stack.pop();
    D.value += this.sliceSerialize(T), D.position.end = qt(T.end);
  }
  function A(T) {
    const D = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const q = D.children[D.children.length - 1];
      q.position.end = qt(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(D.type) && ($.call(this, T), S.call(this, T));
  }
  function I() {
    this.data.atHardBreak = !0;
  }
  function W() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function K() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function H() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function ie() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = D, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function te() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = D, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function L(T) {
    const D = this.sliceSerialize(T), q = this.stack[this.stack.length - 2];
    q.label = S1(D), q.identifier = kt(D).toLowerCase();
  }
  function F() {
    const T = this.stack[this.stack.length - 1], D = this.resume(), q = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, q.type === "link") {
      const G = T.children;
      q.children = G;
    } else
      q.alt = D;
  }
  function w() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.url = T;
  }
  function R() {
    const T = this.resume(), D = this.stack[this.stack.length - 1];
    D.title = T;
  }
  function ee() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function ue(T) {
    const D = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = D, q.identifier = kt(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function Re(T) {
    this.data.characterReferenceType = T.type;
  }
  function ne(T) {
    const D = this.sliceSerialize(T), q = this.data.characterReferenceType;
    let G;
    q ? (G = dh(D, q === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : G = fu(D);
    const oe = this.stack[this.stack.length - 1];
    oe.value += G;
  }
  function Q(T) {
    const D = this.stack.pop();
    D.position.end = qt(T.end);
  }
  function M(T) {
    S.call(this, T);
    const D = this.stack[this.stack.length - 1];
    D.url = this.sliceSerialize(T);
  }
  function xe(T) {
    S.call(this, T);
    const D = this.stack[this.stack.length - 1];
    D.url = "mailto:" + this.sliceSerialize(T);
  }
  function we() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Xe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Vt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function vr() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Mn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ye() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ti() {
    return {
      type: "break"
    };
  }
  function kr() {
    return {
      type: "html",
      value: ""
    };
  }
  function pm() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Eu() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Nu(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function dm(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function fm() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function hm() {
    return {
      type: "strong",
      children: []
    };
  }
  function mm() {
    return {
      type: "text",
      value: ""
    };
  }
  function gm() {
    return {
      type: "thematicBreak"
    };
  }
}
function qt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Sh(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Sh(e, r) : j1(e, r);
  }
}
function j1(e, t) {
  let n;
  for (n in t)
    if (bh.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function op(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Kr({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Kr({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Kr({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function T1(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return E1(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function z1(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function P1(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function _1(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function I1(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function L1(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function A1(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = wr(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, s += 1, e.footnoteCounts.set(r, s);
  const a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, a);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function D1(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function R1(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Ch(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function M1(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ch(e, t);
  const i = { src: wr(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function F1(e, t) {
  const n = { src: wr(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function O1(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function B1(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ch(e, t);
  const i = { href: wr(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function $1(e, t) {
  const n = { href: wr(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function U1(e, t, n) {
  const r = e.all(t), i = n ? H1(n) : Eh(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const p = r[0];
    let c;
    p && p.type === "element" && p.tagName === "p" ? c = p : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const p = r[s];
    (i || s !== 0 || p.type !== "element" || p.tagName !== "p") && l.push({ type: "text", value: `
` }), p.type === "element" && p.tagName === "p" && !i ? l.push(...p.children) : l.push(p);
  }
  const a = r[r.length - 1];
  a && (i || a.type !== "element" || a.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function H1(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Eh(n[r]);
  }
  return t;
}
function Eh(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function V1(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function W1(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function q1(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Q1(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function K1(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = au(t.children[1]), a = ih(t.children[t.children.length - 1]);
    s && a && (l.position = { start: s, end: a }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function X1(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, s = l ? l.length : t.children.length;
  let a = -1;
  const u = [];
  for (; ++a < s; ) {
    const c = t.children[a], h = {}, d = l ? l[a] : void 0;
    d && (h.align = d);
    let y = { type: "element", tagName: o, properties: h, children: [] };
    c && (y.children = e.all(c), e.patch(c, y), y = e.applyData(c, y)), u.push(y);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, p), e.applyData(t, p);
}
function Y1(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const lp = 9, sp = 32;
function G1(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      ap(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(ap(t.slice(i), i > 0, !1)), o.join("");
}
function ap(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === lp || o === sp; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === lp || o === sp; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function J1(e, t) {
  const n = { type: "text", value: G1(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Z1(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ev = {
  blockquote: z1,
  break: P1,
  code: _1,
  delete: I1,
  emphasis: L1,
  footnoteReference: A1,
  heading: D1,
  html: R1,
  imageReference: M1,
  image: F1,
  inlineCode: O1,
  linkReference: B1,
  link: $1,
  listItem: U1,
  list: V1,
  paragraph: W1,
  // @ts-expect-error: root is different, but hard to type.
  root: q1,
  strong: Q1,
  table: K1,
  tableCell: Y1,
  tableRow: X1,
  text: J1,
  thematicBreak: Z1,
  toml: Ki,
  yaml: Ki,
  definition: Ki,
  footnoteDefinition: Ki
};
function Ki() {
}
const Nh = -1, al = 0, Yr = 1, Bo = 2, mu = 3, gu = 4, yu = 5, xu = 6, jh = 7, Th = 8, tv = typeof self == "object" ? self : globalThis, up = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new tv[e](t);
}, nv = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case al:
      case Nh:
        return n(l, i);
      case Yr: {
        const s = n([], i);
        for (const a of l)
          s.push(r(a));
        return s;
      }
      case Bo: {
        const s = n({}, i);
        for (const [a, u] of l)
          s[r(a)] = r(u);
        return s;
      }
      case mu:
        return n(new Date(l), i);
      case gu: {
        const { source: s, flags: a } = l;
        return n(new RegExp(s, a), i);
      }
      case yu: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [a, u] of l)
          s.set(r(a), r(u));
        return s;
      }
      case xu: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const a of l)
          s.add(r(a));
        return s;
      }
      case jh: {
        const { name: s, message: a } = l;
        return n(up(s, a), i);
      }
      case Th:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: s } = new Uint8Array(l);
        return n(new DataView(s), l);
      }
    }
    return n(up(o, l), i);
  };
  return r;
}, cp = (e) => nv(/* @__PURE__ */ new Map(), e)(0), Bn = "", { toString: rv } = {}, { keys: iv } = Object, Ar = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [al, t];
  const n = rv.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Yr, Bn];
    case "Object":
      return [Bo, Bn];
    case "Date":
      return [mu, Bn];
    case "RegExp":
      return [gu, Bn];
    case "Map":
      return [yu, Bn];
    case "Set":
      return [xu, Bn];
    case "DataView":
      return [Yr, n];
  }
  return n.includes("Array") ? [Yr, n] : n.includes("Error") ? [jh, n] : [Bo, n];
}, Xi = ([e, t]) => e === al && (t === "function" || t === "symbol"), ov = (e, t, n, r) => {
  const i = (l, s) => {
    const a = r.push(l) - 1;
    return n.set(s, a), a;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [s, a] = Ar(l);
    switch (s) {
      case al: {
        let p = l;
        switch (a) {
          case "bigint":
            s = Th, p = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + a);
            p = null;
            break;
          case "undefined":
            return i([Nh], l);
        }
        return i([s, p], l);
      }
      case Yr: {
        if (a) {
          let h = l;
          return a === "DataView" ? h = new Uint8Array(l.buffer) : a === "ArrayBuffer" && (h = new Uint8Array(l)), i([a, [...h]], l);
        }
        const p = [], c = i([s, p], l);
        for (const h of l)
          p.push(o(h));
        return c;
      }
      case Bo: {
        if (a)
          switch (a) {
            case "BigInt":
              return i([a, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([a, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return o(l.toJSON());
        const p = [], c = i([s, p], l);
        for (const h of iv(l))
          (e || !Xi(Ar(l[h]))) && p.push([o(h), o(l[h])]);
        return c;
      }
      case mu:
        return i([s, l.toISOString()], l);
      case gu: {
        const { source: p, flags: c } = l;
        return i([s, { source: p, flags: c }], l);
      }
      case yu: {
        const p = [], c = i([s, p], l);
        for (const [h, d] of l)
          (e || !(Xi(Ar(h)) || Xi(Ar(d)))) && p.push([o(h), o(d)]);
        return c;
      }
      case xu: {
        const p = [], c = i([s, p], l);
        for (const h of l)
          (e || !Xi(Ar(h))) && p.push(o(h));
        return c;
      }
    }
    const { message: u } = l;
    return i([s, { name: a, message: u }], l);
  };
  return o;
}, pp = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return ov(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, $o = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? cp(pp(e, t)) : structuredClone(e)
) : (e, t) => cp(pp(e, t));
function lv(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function sv(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function av(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || lv, r = e.options.footnoteBackLabel || sv, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let a = -1;
  for (; ++a < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[a]
    );
    if (!u)
      continue;
    const p = e.all(u), c = String(u.identifier).toUpperCase(), h = wr(c.toLowerCase());
    let d = 0;
    const y = [], v = e.footnoteCounts.get(c);
    for (; v !== void 0 && ++d <= v; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let g = typeof n == "string" ? n : n(a, d);
      typeof g == "string" && (g = { type: "text", value: g }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(a, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(g) ? g : [g]
      });
    }
    const E = p[p.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const g = E.children[E.children.length - 1];
      g && g.type === "text" ? g.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...y);
    } else
      p.push(...y);
    const m = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(p, !0)
    };
    e.patch(u, m), s.push(m);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...$o(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const ul = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return dv;
    if (typeof e == "function")
      return cl(e);
    if (typeof e == "object")
      return Array.isArray(e) ? uv(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        cv(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return pv(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function uv(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = ul(e[n]);
  return cl(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function cv(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return cl(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function pv(e) {
  return cl(t);
  function t(n) {
    return n && n.type === e;
  }
}
function cl(e) {
  return t;
  function t(n, r, i) {
    return !!(fv(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function dv() {
  return !0;
}
function fv(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const zh = [], hv = !0, na = !1, mv = "skip";
function Ph(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = ul(i), l = r ? -1 : 1;
  s(e, void 0, [])();
  function s(a, u, p) {
    const c = (
      /** @type {Record<string, unknown>} */
      a && typeof a == "object" ? a : {}
    );
    if (typeof c.type == "string") {
      const d = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let d = zh, y, v, E;
      if ((!t || o(a, u, p[p.length - 1] || void 0)) && (d = gv(n(a, p)), d[0] === na))
        return d;
      if ("children" in a && a.children) {
        const m = (
          /** @type {UnistParent} */
          a
        );
        if (m.children && d[0] !== mv)
          for (v = (r ? m.children.length : -1) + l, E = p.concat(m); v > -1 && v < m.children.length; ) {
            const g = m.children[v];
            if (y = s(g, v, E)(), y[0] === na)
              return y;
            v = typeof y[1] == "number" ? y[1] : v + l;
          }
      }
      return d;
    }
  }
}
function gv(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [hv, e] : e == null ? zh : [e];
}
function wu(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), Ph(e, o, s, i);
  function s(a, u) {
    const p = u[u.length - 1], c = p ? p.children.indexOf(a) : void 0;
    return l(a, c, p);
  }
}
const ra = {}.hasOwnProperty, yv = {};
function xv(e, t) {
  const n = t || yv, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...ev, ...n.handlers }, s = {
    all: u,
    applyData: vv,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: a,
    options: n,
    patch: wv,
    wrap: bv
  };
  return wu(e, function(p) {
    if (p.type === "definition" || p.type === "footnoteDefinition") {
      const c = p.type === "definition" ? r : i, h = String(p.identifier).toUpperCase();
      c.has(h) || c.set(h, p);
    }
  }), s;
  function a(p, c) {
    const h = p.type, d = s.handlers[h];
    if (ra.call(s.handlers, h) && d)
      return d(s, p, c);
    if (s.options.passThrough && s.options.passThrough.includes(h)) {
      if ("children" in p) {
        const { children: v, ...E } = p, m = $o(E);
        return m.children = s.all(p), m;
      }
      return $o(p);
    }
    return (s.options.unknownHandler || kv)(s, p, c);
  }
  function u(p) {
    const c = [];
    if ("children" in p) {
      const h = p.children;
      let d = -1;
      for (; ++d < h.length; ) {
        const y = s.one(h[d], p);
        if (y) {
          if (d && h[d - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = dp(y.value)), !Array.isArray(y) && y.type === "element")) {
            const v = y.children[0];
            v && v.type === "text" && (v.value = dp(v.value));
          }
          Array.isArray(y) ? c.push(...y) : c.push(y);
        }
      }
    }
    return c;
  }
}
function wv(e, t) {
  e.position && (t.position = lx(e));
}
function vv(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, $o(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function kv(e, t) {
  const n = t.data || {}, r = "value" in t && !(ra.call(n, "hProperties") || ra.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function bv(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function dp(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function fp(e, t) {
  const n = xv(e, t), r = n.one(e, void 0), i = av(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Sv(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      fp(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      fp(n, { file: r, ...e || t })
    );
  };
}
function hp(e) {
  if (e)
    throw e;
}
var po = Object.prototype.hasOwnProperty, _h = Object.prototype.toString, mp = Object.defineProperty, gp = Object.getOwnPropertyDescriptor, yp = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : _h.call(t) === "[object Array]";
}, xp = function(t) {
  if (!t || _h.call(t) !== "[object Object]")
    return !1;
  var n = po.call(t, "constructor"), r = t.constructor && t.constructor.prototype && po.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || po.call(t, i);
}, wp = function(t, n) {
  mp && n.name === "__proto__" ? mp(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, vp = function(t, n) {
  if (n === "__proto__")
    if (po.call(t, n)) {
      if (gp)
        return gp(t, n).value;
    } else return;
  return t[n];
}, Cv = function e() {
  var t, n, r, i, o, l, s = arguments[0], a = 1, u = arguments.length, p = !1;
  for (typeof s == "boolean" && (p = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = vp(s, n), i = vp(t, n), s !== i && (p && i && (xp(i) || (o = yp(i))) ? (o ? (o = !1, l = r && yp(r) ? r : []) : l = r && xp(r) ? r : {}, wp(s, { name: n, newValue: e(p, l, i) })) : typeof i < "u" && wp(s, { name: n, newValue: i }));
  return s;
};
const Hl = /* @__PURE__ */ sa(Cv);
function ia(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ev() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    s(null, ...i);
    function s(a, ...u) {
      const p = e[++o];
      let c = -1;
      if (a) {
        l(a);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, p ? Nv(p, s)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Nv(e, t) {
  let n;
  return r;
  function r(...l) {
    const s = e.length > l.length;
    let a;
    s && l.push(i);
    try {
      a = e.apply(this, l);
    } catch (u) {
      const p = (
        /** @type {Error} */
        u
      );
      if (s && n)
        throw p;
      return i(p);
    }
    s || (a && a.then && typeof a.then == "function" ? a.then(o, i) : a instanceof Error ? i(a) : o(a));
  }
  function i(l, ...s) {
    n || (n = !0, t(l, ...s));
  }
  function o(l) {
    i(null, l);
  }
}
const Nt = { basename: jv, dirname: Tv, extname: zv, join: Pv, sep: "/" };
function jv(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Ni(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function Tv(e) {
  if (Ni(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function zv(e) {
  Ni(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), s === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Pv(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Ni(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : _v(n);
}
function _v(e) {
  Ni(e);
  const t = e.codePointAt(0) === 47;
  let n = Iv(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Iv(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, s, a;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      s = e.codePointAt(l);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (a = n.lastIndexOf("/"), a !== n.length - 1) {
              a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else s === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function Ni(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Lv = { cwd: Av };
function Av() {
  return "/";
}
function oa(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Dv(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!oa(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Rv(e);
}
function Rv(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Vl = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Ih {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? oa(t) ? n = { path: t } : typeof t == "string" || Mv(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Lv.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Vl.length; ) {
      const o = Vl[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Vl.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Nt.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    ql(t, "basename"), Wl(t, "basename"), this.path = Nt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Nt.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    kp(this.basename, "dirname"), this.path = Nt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Nt.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Wl(t, "extname"), kp(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Nt.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    oa(t) && (t = Dv(t)), ql(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Nt.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    ql(t, "stem"), Wl(t, "stem"), this.path = Nt.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new De(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Wl(e, t) {
  if (e && e.includes(Nt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Nt.sep + "`"
    );
}
function ql(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function kp(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Mv(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Fv = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Ov = {}.hasOwnProperty;
class vu extends Fv {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Ev();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new vu()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Hl(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Xl("data", this.frozen), this.namespace[t] = n, this) : Ov.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Xl("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Yi(t), r = this.parser || this.Parser;
    return Ql("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ql("process", this.parser || this.Parser), Kl("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const s = Yi(t), a = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(a, s, function(p, c, h) {
        if (p || !c || !h)
          return u(p);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), y = r.stringify(d, h);
        Uv(y) ? h.value = y : h.result = y, u(
          p,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function u(p, c) {
        p || !c ? l(p) : o ? o(c) : n(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ql("processSync", this.parser || this.Parser), Kl("processSync", this.compiler || this.Compiler), this.process(t, i), Sp("processSync", "process", n), r;
    function i(o, l) {
      n = !0, hp(o), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    bp(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, s) {
      const a = Yi(n);
      i.run(t, a, u);
      function u(p, c, h) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        p ? s(p) : l ? l(d) : r(void 0, d, h);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Sp("runSync", "run", r), i;
    function o(l, s) {
      hp(l), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Yi(n), i = this.compiler || this.Compiler;
    return Kl("stringify", i), bp(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Xl("use", this.frozen), t != null) if (typeof t == "function")
      a(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        a(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [p, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          a(p, c);
        } else
          l(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(u.plugins), u.settings && (i.settings = Hl(!0, i.settings, u.settings));
    }
    function s(u) {
      let p = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++p < u.length; ) {
          const c = u[p];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function a(u, p) {
      let c = -1, h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          h = c;
          break;
        }
      if (h === -1)
        r.push([u, ...p]);
      else if (p.length > 0) {
        let [d, ...y] = p;
        const v = r[h][1];
        ia(v) && ia(d) && (d = Hl(!0, v, d)), r[h] = [u, d, ...y];
      }
    }
  }
}
const Bv = new vu().freeze();
function Ql(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Kl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Xl(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function bp(e) {
  if (!ia(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Sp(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Yi(e) {
  return $v(e) ? e : new Ih(e);
}
function $v(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Uv(e) {
  return typeof e == "string" || Hv(e);
}
function Hv(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Vv = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Cp = [], Ep = { allowDangerousHtml: !0 }, Wv = /^(https?|ircs?|mailto|xmpp)$/i, qv = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Qv(e) {
  const t = Kv(e), n = Xv(e);
  return Yv(t.runSync(t.parse(n), n), e);
}
function Kv(e) {
  const t = e.rehypePlugins || Cp, n = e.remarkPlugins || Cp, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Ep } : Ep;
  return Bv().use(T1).use(n).use(Sv, r).use(t);
}
function Xv(e) {
  const t = e.children || "", n = new Ih();
  return typeof t == "string" && (n.value = t), n;
}
function Yv(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, s = t.unwrapDisallowed, a = t.urlTransform || Gv;
  for (const p of qv)
    Object.hasOwn(t, p.from) && ("" + p.from + (p.to ? "use `" + p.to + "` instead" : "remove it") + Vv + p.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), wu(e, u), px(e, {
    Fragment: f.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: f.jsx,
    jsxs: f.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(p, c, h) {
    if (p.type === "raw" && h && typeof c == "number")
      return l ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: p.value }, c;
    if (p.type === "element") {
      let d;
      for (d in Bl)
        if (Object.hasOwn(Bl, d) && Object.hasOwn(p.properties, d)) {
          const y = p.properties[d], v = Bl[d];
          (v === null || v.includes(p.tagName)) && (p.properties[d] = a(String(y || ""), d, p));
        }
    }
    if (p.type === "element") {
      let d = n ? !n.includes(p.tagName) : o ? o.includes(p.tagName) : !1;
      if (!d && r && typeof c == "number" && (d = !r(p, c, h)), d && h && typeof c == "number")
        return s && p.children ? h.children.splice(c, 1, ...p.children) : h.children.splice(c, 1), c;
    }
  }
}
function Gv(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Wv.test(e.slice(0, t)) ? e : ""
  );
}
function Np(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Jv(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Zv(e, t, n) {
  const i = ul((n || {}).ignore || []), o = ek(t);
  let l = -1;
  for (; ++l < o.length; )
    Ph(e, "text", s);
  function s(u, p) {
    let c = -1, h;
    for (; ++c < p.length; ) {
      const d = p[c], y = h ? h.children : void 0;
      if (i(
        d,
        y ? y.indexOf(d) : void 0,
        h
      ))
        return;
      h = d;
    }
    if (h)
      return a(u, p);
  }
  function a(u, p) {
    const c = p[p.length - 1], h = o[l][0], d = o[l][1];
    let y = 0;
    const E = c.children.indexOf(u);
    let m = !1, g = [];
    h.lastIndex = 0;
    let x = h.exec(u.value);
    for (; x; ) {
      const C = x.index, j = {
        index: x.index,
        input: x.input,
        stack: [...p, u]
      };
      let b = d(...x, j);
      if (typeof b == "string" && (b = b.length > 0 ? { type: "text", value: b } : void 0), b === !1 ? h.lastIndex = C + 1 : (y !== C && g.push({
        type: "text",
        value: u.value.slice(y, C)
      }), Array.isArray(b) ? g.push(...b) : b && g.push(b), y = C + x[0].length, m = !0), !h.global)
        break;
      x = h.exec(u.value);
    }
    return m ? (y < u.value.length && g.push({ type: "text", value: u.value.slice(y) }), c.children.splice(E, 1, ...g)) : g = [u], E + g.length;
  }
}
function ek(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([tk(i[0]), nk(i[1])]);
  }
  return t;
}
function tk(e) {
  return typeof e == "string" ? new RegExp(Jv(e), "g") : e;
}
function nk(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Yl = "phrasing", Gl = ["autolink", "link", "image", "label"];
function rk() {
  return {
    transforms: [ck],
    enter: {
      literalAutolink: ok,
      literalAutolinkEmail: Jl,
      literalAutolinkHttp: Jl,
      literalAutolinkWww: Jl
    },
    exit: {
      literalAutolink: uk,
      literalAutolinkEmail: ak,
      literalAutolinkHttp: lk,
      literalAutolinkWww: sk
    }
  };
}
function ik() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Yl,
        notInConstruct: Gl
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Yl,
        notInConstruct: Gl
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Yl,
        notInConstruct: Gl
      }
    ]
  };
}
function ok(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Jl(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function lk(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function sk(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function ak(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function uk(e) {
  this.exit(e);
}
function ck(e) {
  Zv(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, pk],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), dk]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function pk(e, t, n, r, i) {
  let o = "";
  if (!Lh(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !fk(n)))
    return !1;
  const l = hk(n + r);
  if (!l[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [s, { type: "text", value: l[1] }] : s;
}
function dk(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Lh(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function fk(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function hk(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Np(e, "(");
  let o = Np(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Lh(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ln(n) || ll(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Ah.peek = Sk;
function mk() {
  this.buffer();
}
function gk(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function yk() {
  this.buffer();
}
function xk(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function wk(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = kt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function vk(e) {
  this.exit(e);
}
function kk(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = kt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function bk(e) {
  this.exit(e);
}
function Sk() {
  return "[";
}
function Ah(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), s(), l(), o += i.move("]"), o;
}
function Ck() {
  return {
    enter: {
      gfmFootnoteCallString: mk,
      gfmFootnoteCall: gk,
      gfmFootnoteDefinitionLabelString: yk,
      gfmFootnoteDefinition: xk
    },
    exit: {
      gfmFootnoteCallString: wk,
      gfmFootnoteCall: vk,
      gfmFootnoteDefinitionLabelString: kk,
      gfmFootnoteDefinition: bk
    }
  };
}
function Ek(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Ah },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, l) {
    const s = o.createTracker(l);
    let a = s.move("[^");
    const u = o.enter("footnoteDefinition"), p = o.enter("label");
    return a += s.move(
      o.safe(o.associationId(r), { before: a, after: "]" })
    ), p(), a += s.move("]:"), r.children && r.children.length > 0 && (s.shift(4), a += s.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, s.current()),
        t ? Dh : Nk
      )
    )), u(), a;
  }
}
function Nk(e, t, n) {
  return t === 0 ? e : Dh(e, t, n);
}
function Dh(e, t, n) {
  return (n ? "" : "    ") + e;
}
const jk = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Rh.peek = Ik;
function Tk() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Pk },
    exit: { strikethrough: _k }
  };
}
function zk() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: jk
      }
    ],
    handlers: { delete: Rh }
  };
}
function Pk(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function _k(e) {
  this.exit(e);
}
function Rh(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Ik() {
  return "~";
}
function Lk(e) {
  return e.length;
}
function Ak(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Lk, o = [], l = [], s = [], a = [];
  let u = 0, p = -1;
  for (; ++p < e.length; ) {
    const v = [], E = [];
    let m = -1;
    for (e[p].length > u && (u = e[p].length); ++m < e[p].length; ) {
      const g = Dk(e[p][m]);
      if (n.alignDelimiters !== !1) {
        const x = i(g);
        E[m] = x, (a[m] === void 0 || x > a[m]) && (a[m] = x);
      }
      v.push(g);
    }
    l[p] = v, s[p] = E;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = jp(r[c]);
  else {
    const v = jp(r);
    for (; ++c < u; )
      o[c] = v;
  }
  c = -1;
  const h = [], d = [];
  for (; ++c < u; ) {
    const v = o[c];
    let E = "", m = "";
    v === 99 ? (E = ":", m = ":") : v === 108 ? E = ":" : v === 114 && (m = ":");
    let g = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - E.length - m.length
    );
    const x = E + "-".repeat(g) + m;
    n.alignDelimiters !== !1 && (g = E.length + g + m.length, g > a[c] && (a[c] = g), d[c] = g), h[c] = x;
  }
  l.splice(1, 0, h), s.splice(1, 0, d), p = -1;
  const y = [];
  for (; ++p < l.length; ) {
    const v = l[p], E = s[p];
    c = -1;
    const m = [];
    for (; ++c < u; ) {
      const g = v[c] || "";
      let x = "", C = "";
      if (n.alignDelimiters !== !1) {
        const j = a[c] - (E[c] || 0), b = o[c];
        b === 114 ? x = " ".repeat(j) : b === 99 ? j % 2 ? (x = " ".repeat(j / 2 + 0.5), C = " ".repeat(j / 2 - 0.5)) : (x = " ".repeat(j / 2), C = x) : C = " ".repeat(j);
      }
      n.delimiterStart !== !1 && !c && m.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && g === "") && (n.delimiterStart !== !1 || c) && m.push(" "), n.alignDelimiters !== !1 && m.push(x), m.push(g), n.alignDelimiters !== !1 && m.push(C), n.padding !== !1 && m.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && m.push("|");
    }
    y.push(
      n.delimiterEnd === !1 ? m.join("").replace(/ +$/, "") : m.join("")
    );
  }
  return y.join(`
`);
}
function Dk(e) {
  return e == null ? "" : String(e);
}
function jp(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Rk(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    Mk
  );
  return i(), l;
}
function Mk(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Fk(e, t) {
  return Tp(e, t.inConstruct, !0) && !Tp(e, t.notInConstruct, !1);
}
function Tp(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function zp(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Fk(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Ok(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function Bk(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function $k(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Uk(e, t, n, r) {
  const i = $k(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (Bk(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(o, Hk);
    return c(), h;
  }
  const s = n.createTracker(r), a = i.repeat(Math.max(Ok(o, i) + 1, 3)), u = n.enter("codeFenced");
  let p = s.move(a);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
    p += s.move(
      n.safe(e.lang, {
        before: p,
        after: " ",
        encode: ["`"],
        ...s.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${l}`);
    p += s.move(" "), p += s.move(
      n.safe(e.meta, {
        before: p,
        after: `
`,
        encode: ["`"],
        ...s.current()
      })
    ), c();
  }
  return p += s.move(`
`), o && (p += s.move(o + `
`)), p += s.move(a), u(), p;
}
function Hk(e, t, n) {
  return (n ? "" : "    ") + e;
}
function ku(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Vk(e, t, n, r) {
  const i = ku(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("[");
  return u += a.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...a.current()
    })
  ), u += a.move("]: "), s(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(
    n.safe(e.url, { before: u, after: ">", ...a.current() })
  ), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...a.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), l(), u;
}
function Wk(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function yi(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Uo(e, t, n) {
  const r = fr(e), i = fr(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Mh.peek = qk;
function Mh(e, t, n, r) {
  const i = Wk(n), o = n.enter("emphasis"), l = n.createTracker(r), s = l.move(i);
  let a = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...l.current()
    })
  );
  const u = a.charCodeAt(0), p = Uo(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  p.inside && (a = yi(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), h = Uo(r.after.charCodeAt(0), c, i);
  h.inside && (a = a.slice(0, -1) + yi(c));
  const d = l.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: p.outside
  }, s + a + d;
}
function qk(e, t, n) {
  return n.options.emphasis || "*";
}
function Qk(e, t) {
  let n = !1;
  return wu(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, na;
  }), !!((!e.depth || e.depth < 3) && du(e) && (t.options.setext || n));
}
function Kk(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Qk(e, n)) {
    const p = n.enter("headingSetext"), c = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), p(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), s = n.enter("headingAtx"), a = n.enter("phrasing");
  o.move(l + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = yi(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, n.options.closeAtx && (u += " " + l), a(), s(), u;
}
Fh.peek = Xk;
function Fh(e) {
  return e.value || "";
}
function Xk() {
  return "<";
}
Oh.peek = Yk;
function Oh(e, t, n, r) {
  const i = ku(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("![");
  return u += a.move(
    n.safe(e.alt, { before: u, after: "]", ...a.current() })
  ), u += a.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(
    n.safe(e.url, { before: u, after: ">", ...a.current() })
  ), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), u += a.move(")"), l(), u;
}
function Yk() {
  return "!";
}
Bh.peek = Gk;
function Bh(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let a = s.move("![");
  const u = n.safe(e.alt, {
    before: a,
    after: "]",
    ...s.current()
  });
  a += s.move(u + "]["), l();
  const p = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: a,
    after: "]",
    ...s.current()
  });
  return l(), n.stack = p, o(), i === "full" || !u || u !== c ? a += s.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a;
}
function Gk() {
  return "!";
}
$h.peek = Jk;
function $h(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], s = n.compilePattern(l);
    let a;
    if (l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return i + r + i;
}
function Jk() {
  return "`";
}
function Uh(e, t) {
  const n = du(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Hh.peek = Zk;
function Hh(e, t, n, r) {
  const i = ku(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let s, a;
  if (Uh(e, n)) {
    const p = n.stack;
    n.stack = [], s = n.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), s(), n.stack = p, c;
  }
  s = n.enter("link"), a = n.enter("label");
  let u = l.move("[");
  return u += l.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (a = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), a()), u += l.move(")"), s(), u;
}
function Zk(e, t, n) {
  return Uh(e, n) ? "<" : "[";
}
Vh.peek = eb;
function Vh(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let a = s.move("[");
  const u = n.containerPhrasing(e, {
    before: a,
    after: "]",
    ...s.current()
  });
  a += s.move(u + "]["), l();
  const p = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: a,
    after: "]",
    ...s.current()
  });
  return l(), n.stack = p, o(), i === "full" || !u || u !== c ? a += s.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a;
}
function eb() {
  return "[";
}
function bu(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function tb(e) {
  const t = bu(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function nb(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Wh(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function rb(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? nb(n) : bu(n);
  const s = e.ordered ? l === "." ? ")" : "." : tb(n);
  let a = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const p = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      p && (!p.children || !p.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (a = !0), Wh(n) === l && p
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const h = e.children[c];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          a = !0;
          break;
        }
      }
    }
  }
  a && (l = s), n.bulletCurrent = l;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), u;
}
function ib(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function ob(e, t, n, r) {
  const i = ib(n);
  let o = n.bulletCurrent || bu(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const s = n.createTracker(r);
  s.move(o + " ".repeat(l - o.length)), s.shift(l);
  const a = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, s.current()),
    p
  );
  return a(), u;
  function p(c, h, d) {
    return h ? (d ? "" : " ".repeat(l)) + c : (d ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function lb(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const sb = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  ul([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function ab(e, t, n, r) {
  return (e.children.some(function(l) {
    return sb(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function ub(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
qh.peek = cb;
function qh(e, t, n, r) {
  const i = ub(n), o = n.enter("strong"), l = n.createTracker(r), s = l.move(i + i);
  let a = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...l.current()
    })
  );
  const u = a.charCodeAt(0), p = Uo(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  p.inside && (a = yi(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), h = Uo(r.after.charCodeAt(0), c, i);
  h.inside && (a = a.slice(0, -1) + yi(c));
  const d = l.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: p.outside
  }, s + a + d;
}
function cb(e, t, n) {
  return n.options.strong || "*";
}
function pb(e, t, n, r) {
  return n.safe(e.value, r);
}
function db(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function fb(e, t, n) {
  const r = (Wh(n) + (n.options.ruleSpaces ? " " : "")).repeat(db(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Qh = {
  blockquote: Rk,
  break: zp,
  code: Uk,
  definition: Vk,
  emphasis: Mh,
  hardBreak: zp,
  heading: Kk,
  html: Fh,
  image: Oh,
  imageReference: Bh,
  inlineCode: $h,
  link: Hh,
  linkReference: Vh,
  list: rb,
  listItem: ob,
  paragraph: lb,
  root: ab,
  strong: qh,
  text: pb,
  thematicBreak: fb
};
function hb() {
  return {
    enter: {
      table: mb,
      tableData: Pp,
      tableHeader: Pp,
      tableRow: yb
    },
    exit: {
      codeText: xb,
      table: gb,
      tableData: Zl,
      tableHeader: Zl,
      tableRow: Zl
    }
  };
}
function mb(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function gb(e) {
  this.exit(e), this.data.inTable = void 0;
}
function yb(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Zl(e) {
  this.exit(e);
}
function Pp(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function xb(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, wb));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function wb(e, t) {
  return t === "|" ? t : e;
}
function vb(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: h,
      table: l,
      tableCell: a,
      tableRow: s
    }
  };
  function l(d, y, v, E) {
    return u(p(d, v, E), d.align);
  }
  function s(d, y, v, E) {
    const m = c(d, v, E), g = u([m]);
    return g.slice(0, g.indexOf(`
`));
  }
  function a(d, y, v, E) {
    const m = v.enter("tableCell"), g = v.enter("phrasing"), x = v.containerPhrasing(d, {
      ...E,
      before: o,
      after: o
    });
    return g(), m(), x;
  }
  function u(d, y) {
    return Ak(d, {
      align: y,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function p(d, y, v) {
    const E = d.children;
    let m = -1;
    const g = [], x = y.enter("table");
    for (; ++m < E.length; )
      g[m] = c(E[m], y, v);
    return x(), g;
  }
  function c(d, y, v) {
    const E = d.children;
    let m = -1;
    const g = [], x = y.enter("tableRow");
    for (; ++m < E.length; )
      g[m] = a(E[m], d, y, v);
    return x(), g;
  }
  function h(d, y, v) {
    let E = Qh.inlineCode(d, y, v);
    return v.stack.includes("tableCell") && (E = E.replace(/\|/g, "\\$&")), E;
  }
}
function kb() {
  return {
    exit: {
      taskListCheckValueChecked: _p,
      taskListCheckValueUnchecked: _p,
      paragraph: Sb
    }
  };
}
function bb() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Cb }
  };
}
function _p(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Sb(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const s = i[o];
        if (s.type === "paragraph") {
          l = s;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Cb(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
  o && s.move(l);
  let a = Qh.listItem(e, t, n, {
    ...r,
    ...s.current()
  });
  return o && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(p) {
    return p + l;
  }
}
function Eb() {
  return [
    rk(),
    Ck(),
    Tk(),
    hb(),
    kb()
  ];
}
function Nb(e) {
  return {
    extensions: [
      ik(),
      Ek(e),
      zk(),
      vb(e),
      bb()
    ]
  };
}
const jb = {
  tokenize: Lb,
  partial: !0
}, Kh = {
  tokenize: Ab,
  partial: !0
}, Xh = {
  tokenize: Db,
  partial: !0
}, Yh = {
  tokenize: Rb,
  partial: !0
}, Tb = {
  tokenize: Mb,
  partial: !0
}, Gh = {
  name: "wwwAutolink",
  tokenize: _b,
  previous: Zh
}, Jh = {
  name: "protocolAutolink",
  tokenize: Ib,
  previous: em
}, Ht = {
  name: "emailAutolink",
  tokenize: Pb,
  previous: tm
}, Pt = {};
function zb() {
  return {
    text: Pt
  };
}
let yn = 48;
for (; yn < 123; )
  Pt[yn] = Ht, yn++, yn === 58 ? yn = 65 : yn === 91 && (yn = 97);
Pt[43] = Ht;
Pt[45] = Ht;
Pt[46] = Ht;
Pt[95] = Ht;
Pt[72] = [Ht, Jh];
Pt[104] = [Ht, Jh];
Pt[87] = [Ht, Gh];
Pt[119] = [Ht, Gh];
function Pb(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !la(c) || !tm.call(r, r.previous) || Su(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(c));
  }
  function s(c) {
    return la(c) ? (e.consume(c), s) : c === 64 ? (e.consume(c), a) : n(c);
  }
  function a(c) {
    return c === 46 ? e.check(Tb, p, u)(c) : c === 45 || c === 95 || Le(c) ? (o = !0, e.consume(c), a) : p(c);
  }
  function u(c) {
    return e.consume(c), i = !0, a;
  }
  function p(c) {
    return o && i && Fe(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function _b(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !Zh.call(r, r.previous) || Su(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(jb, e.attempt(Kh, e.attempt(Xh, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Ib(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && em.call(r, r.previous) && !Su(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), s) : n(c);
  }
  function s(c) {
    if (Fe(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), s;
    if (c === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(c), a;
    }
    return n(c);
  }
  function a(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, a)) : n(c);
  }
  function u(c) {
    return c === null || Oo(c) || se(c) || Ln(c) || ll(c) ? n(c) : e.attempt(Kh, e.attempt(Xh, p), n)(c);
  }
  function p(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Lb(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function Ab(e, t, n) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Yh, a, s)(u) : u === null || se(u) || Ln(u) || u !== 45 && ll(u) ? a(u) : (o = !0, e.consume(u), l);
  }
  function s(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function a(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function Db(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Yh, t, o)(l) : l === null || se(l) || Ln(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Rb(e, t, n) {
  return r;
  function r(s) {
    return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), o) : s === 93 ? (e.consume(s), i) : (
      // `<` is an end.
      s === 60 || // So is whitespace.
      s === null || se(s) || Ln(s) ? t(s) : n(s)
    );
  }
  function i(s) {
    return s === null || s === 40 || s === 91 || se(s) || Ln(s) ? t(s) : r(s);
  }
  function o(s) {
    return Fe(s) ? l(s) : n(s);
  }
  function l(s) {
    return s === 59 ? (e.consume(s), r) : Fe(s) ? (e.consume(s), l) : n(s);
  }
}
function Mb(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Le(o) ? n(o) : t(o);
  }
}
function Zh(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || se(e);
}
function em(e) {
  return !Fe(e);
}
function tm(e) {
  return !(e === 47 || la(e));
}
function la(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Le(e);
}
function Su(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Fb = {
  tokenize: qb,
  partial: !0
};
function Ob() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Hb,
        continuation: {
          tokenize: Vb
        },
        exit: Wb
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Ub
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Bb,
        resolveTo: $b
      }
    }
  };
}
function Bb(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const a = r.events[i][1];
    if (a.type === "labelImage") {
      l = a;
      break;
    }
    if (a.type === "gfmFootnoteCall" || a.type === "labelLink" || a.type === "label" || a.type === "image" || a.type === "link")
      break;
  }
  return s;
  function s(a) {
    if (!l || !l._balanced)
      return n(a);
    const u = kt(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(a) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a));
  }
}
function $b(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, s = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...s), e;
}
function Ub(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return s;
  function s(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), a;
  }
  function a(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || se(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(kt(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return se(c) || (l = !0), o++, e.consume(c), c === 92 ? p : u;
  }
  function p(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Hb(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, s;
  return a;
  function a(y) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(y) {
    return y === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", p) : n(y);
  }
  function p(y) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      y === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || se(y)
    )
      return n(y);
    if (y === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return o = kt(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return se(y) || (s = !0), l++, e.consume(y), y === 92 ? c : p;
  }
  function c(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), l++, p) : p(y);
  }
  function h(y) {
    return y === 58 ? (e.enter("definitionMarker"), e.consume(y), e.exit("definitionMarker"), i.includes(o) || i.push(o), J(e, d, "gfmFootnoteDefinitionWhitespace")) : n(y);
  }
  function d(y) {
    return t(y);
  }
}
function Vb(e, t, n) {
  return e.check(Ei, t, e.attempt(Fb, t, n));
}
function Wb(e) {
  e.exit("gfmFootnoteDefinition");
}
function qb(e, t, n) {
  const r = this;
  return J(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Qb(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, s) {
    let a = -1;
    for (; ++a < l.length; )
      if (l[a][0] === "enter" && l[a][1].type === "strikethroughSequenceTemporary" && l[a][1]._close) {
        let u = a;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[a][1].end.offset - l[a][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[a][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const p = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[a][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[a][1].start)
            }, h = [["enter", p, s], ["enter", l[u][1], s], ["exit", l[u][1], s], ["enter", c, s]], d = s.parser.constructs.insideSpan.null;
            d && nt(h, h.length, 0, sl(d, l.slice(u + 1, a), s)), nt(h, h.length, 0, [["exit", c, s], ["enter", l[a][1], s], ["exit", l[a][1], s], ["exit", p, s]]), nt(l, u - 1, a - u + 3, h), a = u + h.length - 2;
            break;
          }
      }
    for (a = -1; ++a < l.length; )
      l[a][1].type === "strikethroughSequenceTemporary" && (l[a][1].type = "data");
    return l;
  }
  function o(l, s, a) {
    const u = this.previous, p = this.events;
    let c = 0;
    return h;
    function h(y) {
      return u === 126 && p[p.length - 1][1].type !== "characterEscape" ? a(y) : (l.enter("strikethroughSequenceTemporary"), d(y));
    }
    function d(y) {
      const v = fr(u);
      if (y === 126)
        return c > 1 ? a(y) : (l.consume(y), c++, d);
      if (c < 2 && !n) return a(y);
      const E = l.exit("strikethroughSequenceTemporary"), m = fr(y);
      return E._open = !m || m === 2 && !!v, E._close = !v || v === 2 && !!m, s(y);
    }
  }
}
class Kb {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    Xb(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Xb(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Yb(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Gb() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Jb,
        resolveAll: Zb
      }
    }
  };
}
function Jb(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return s;
  function s(S) {
    let A = r.events.length - 1;
    for (; A > -1; ) {
      const K = r.events[A][1].type;
      if (K === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      K === "linePrefix") A--;
      else break;
    }
    const I = A > -1 ? r.events[A][1].type : null, W = I === "tableHead" || I === "tableRow" ? b : a;
    return W === b && r.parser.lazy[r.now().line] ? n(S) : W(S);
  }
  function a(S) {
    return e.enter("tableHead"), e.enter("tableRow"), u(S);
  }
  function u(S) {
    return S === 124 || (l = !0, o += 1), p(S);
  }
  function p(S) {
    return S === null ? n(S) : U(S) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), d) : n(S) : X(S) ? J(e, p, "whitespace")(S) : (o += 1, l && (l = !1, i += 1), S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), l = !0, p) : (e.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || se(S) ? (e.exit("data"), p(S)) : (e.consume(S), S === 92 ? h : c);
  }
  function h(S) {
    return S === 92 || S === 124 ? (e.consume(S), c) : c(S);
  }
  function d(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(S) : (e.enter("tableDelimiterRow"), l = !1, X(S) ? J(e, y, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : y(S));
  }
  function y(S) {
    return S === 45 || S === 58 ? E(S) : S === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), v) : j(S);
  }
  function v(S) {
    return X(S) ? J(e, E, "whitespace")(S) : E(S);
  }
  function E(S) {
    return S === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), m) : S === 45 ? (o += 1, m(S)) : S === null || U(S) ? C(S) : j(S);
  }
  function m(S) {
    return S === 45 ? (e.enter("tableDelimiterFiller"), g(S)) : j(S);
  }
  function g(S) {
    return S === 45 ? (e.consume(S), g) : S === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(S));
  }
  function x(S) {
    return X(S) ? J(e, C, "whitespace")(S) : C(S);
  }
  function C(S) {
    return S === 124 ? y(S) : S === null || U(S) ? !l || i !== o ? j(S) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(S)) : j(S);
  }
  function j(S) {
    return n(S);
  }
  function b(S) {
    return e.enter("tableRow"), N(S);
  }
  function N(S) {
    return S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), N) : S === null || U(S) ? (e.exit("tableRow"), t(S)) : X(S) ? J(e, N, "whitespace")(S) : (e.enter("data"), z(S));
  }
  function z(S) {
    return S === null || S === 124 || se(S) ? (e.exit("data"), N(S)) : (e.consume(S), S === 92 ? $ : z);
  }
  function $(S) {
    return S === 92 || S === 124 ? (e.consume(S), z) : z(S);
  }
}
function Zb(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], s = !1, a = 0, u, p, c;
  const h = new Kb();
  for (; ++n < e.length; ) {
    const d = e[n], y = d[1];
    d[0] === "enter" ? y.type === "tableHead" ? (s = !1, a !== 0 && (Ip(h, t, a, u, p), p = void 0, a = 0), u = {
      type: "table",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, h.add(n, 0, [["enter", u, t]])) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], s && (s = !1, p = {
      type: "tableBody",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, h.add(n, 0, [["enter", p, t]])), i = y.type === "tableDelimiterRow" ? 2 : p ? 3 : 1) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = Gi(h, t, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = n)) : y.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = Gi(h, t, o, i, void 0, c)), o = l, l = [o[1], n, 0, 0])) : y.type === "tableHead" ? (s = !0, a = n) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (a = n, o[1] !== 0 ? (l[0] = l[1], c = Gi(h, t, o, i, n, c)) : l[1] !== 0 && (c = Gi(h, t, l, i, n, c)), i = 0) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (a !== 0 && Ip(h, t, a, u, p), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const d = t.events[n];
    d[0] === "enter" && d[1].type === "table" && (d[1]._align = Yb(t.events, n));
  }
  return e;
}
function Gi(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", s = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, $n(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const a = $n(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, a),
    // Note: correct end is set later.
    end: Object.assign({}, a)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = $n(t.events, n[2]), p = $n(t.events, n[3]), c = {
      type: s,
      start: Object.assign({}, u),
      end: Object.assign({}, p)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], d = t.events[n[3]];
      if (h[1].end = Object.assign({}, d[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const y = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(y, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, $n(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Ip(e, t, n, r, i) {
  const o = [], l = $n(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function $n(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const e2 = {
  name: "tasklistCheck",
  tokenize: n2
};
function t2() {
  return {
    text: {
      91: e2
    }
  };
}
function n2(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(a) {
    return se(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), l) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), l) : n(a);
  }
  function l(a) {
    return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(a);
  }
  function s(a) {
    return U(a) ? t(a) : X(a) ? e.check({
      tokenize: r2
    }, t, n)(a) : n(a);
  }
}
function r2(e, t, n) {
  return J(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function i2(e) {
  return ph([
    zb(),
    Ob(),
    Qb(e),
    Gb(),
    t2()
  ]);
}
const o2 = {};
function l2(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || o2, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(i2(n)), o.push(Eb()), l.push(Nb(n));
}
function nm({ severity: e }) {
  const t = (e || "medium").toLowerCase();
  let n = "border-slate-300 text-slate-600 bg-slate-50", r = "Média";
  return t === "critical" ? (n = "border-red-500 text-red-700 bg-red-50", r = "Crítico") : t === "high" ? (n = "border-orange-400 text-orange-700 bg-orange-50", r = "Alta") : t === "low" && (n = "border-slate-300 text-slate-500 bg-slate-100", r = "Baixa"), /* @__PURE__ */ f.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${n}`, children: r });
}
const s2 = {
  // Support / QA board: new-issues → triaging → doing → testing → done
  "new-issues": { label: "Novo", className: "bg-red-500 text-white" },
  triaging: { label: "Triagem", className: "bg-amber-500 text-white" },
  testing: { label: "Em Teste", className: "bg-purple-500 text-white" },
  // Roadmap board: backlog → planning → todo → in_progress → assurance → done
  backlog: { label: "Backlog", className: "bg-slate-400 text-white" },
  planning: { label: "Planejamento", className: "bg-indigo-500 text-white" },
  todo: { label: "A Fazer", className: "bg-slate-500 text-white" },
  assurance: { label: "Em Validação", className: "bg-yellow-500 text-black" },
  // Shared / common ids
  doing: { label: "Em Progresso", className: "bg-blue-500 text-white" },
  in_progress: { label: "Em Progresso", className: "bg-blue-500 text-white" },
  review: { label: "Em Review", className: "bg-purple-500 text-white" },
  done: { label: "Concluído", className: "bg-green-600 text-white" }
};
function Cu({ status: e }) {
  const t = s2[e] || { label: e, className: "bg-slate-500 text-white" };
  return /* @__PURE__ */ f.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${t.className}`, children: t.label });
}
const a2 = {
  bug: { label: "Bug", className: "bg-red-50 text-red-600", Icon: nu },
  feature: { label: "Feature", className: "bg-green-50 text-green-600", Icon: ru },
  "tech-debt": { label: "Tech Debt", className: "bg-amber-50 text-amber-700", Icon: Mc },
  refactor: { label: "Refactor", className: "bg-indigo-50 text-indigo-600", Icon: Mc },
  chore: { label: "Chore", className: "bg-slate-100 text-slate-600", Icon: Ks },
  support: { label: "Suporte", className: "bg-teal-50 text-teal-600", Icon: Ks },
  sprint_macro: { label: "Macro", className: "bg-purple-50 text-purple-600", Icon: cy }
};
function rm({ type: e, context: t = "roadmap" }) {
  const n = (e || "").toLowerCase();
  if (!n) return null;
  const r = a2[n] || {
    label: e.charAt(0).toUpperCase() + e.slice(1),
    className: "bg-slate-100 text-slate-600",
    Icon: Ks
  }, i = t === "support" && n === "feature" ? "Sugestão" : r.label, o = r.Icon;
  return /* @__PURE__ */ f.jsxs("span", { className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${r.className}`, children: [
    /* @__PURE__ */ f.jsx(o, { className: "w-3.5 h-3.5" }),
    i
  ] });
}
function im({ content: e }) {
  return /* @__PURE__ */ f.jsx("div", { className: `prose prose-sm dark:prose-invert max-w-none \r
      prose-p:leading-snug \r
      prose-headings:text-sm prose-headings:font-semibold prose-headings:mb-1 \r
      prose-a:text-blue-500 hover:prose-a:text-blue-600 \r
      prose-img:rounded-md prose-img:border prose-img:max-h-64 prose-img:w-auto prose-img:object-contain\r
      max-h-[40vh] overflow-y-auto`, children: /* @__PURE__ */ f.jsx(Qv, { remarkPlugins: [l2], children: e }) });
}
function u2({ page: e, total: t, limit: n, onPageChange: r }) {
  const i = Math.ceil(t / n);
  return i <= 1 ? null : /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between mt-4 px-1", children: [
    /* @__PURE__ */ f.jsxs("p", { className: "text-xs text-slate-500", children: [
      "Mostrando ",
      e * n + 1,
      " - ",
      Math.min((e + 1) * n, t),
      " de ",
      t
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          disabled: e === 0,
          onClick: () => r(e - 1),
          className: "px-2 py-1 text-xs border rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Anterior"
        }
      ),
      /* @__PURE__ */ f.jsxs("span", { className: "text-xs text-slate-600 font-semibold", children: [
        e + 1,
        " / ",
        i
      ] }),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          disabled: e >= i - 1,
          onClick: () => r(e + 1),
          className: "px-2 py-1 text-xs border rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Próximo"
        }
      )
    ] })
  ] });
}
function om({ value: e, onChange: t, placeholder: n }) {
  return /* @__PURE__ */ f.jsx("div", { className: "relative", children: /* @__PURE__ */ f.jsx(
    "input",
    {
      type: "text",
      value: e,
      onChange: (r) => t(r.target.value),
      placeholder: n || "Buscar...",
      className: "w-full px-3 py-1.5 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
    }
  ) });
}
function c2({
  isOpen: e,
  title: t,
  description: n,
  confirmLabel: r = "Confirmar",
  cancelLabel: i = "Cancelar",
  onConfirm: o,
  onCancel: l
}) {
  return e ? /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4", children: /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-lg max-w-md w-full p-6 shadow-xl border", children: [
    /* @__PURE__ */ f.jsx("h3", { className: "text-base font-semibold text-slate-900 mb-2", children: t }),
    /* @__PURE__ */ f.jsx("p", { className: "text-sm text-slate-500 mb-6", children: n }),
    /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          onClick: l,
          className: "px-3 py-1.5 text-xs font-medium border rounded hover:bg-slate-50",
          children: i
        }
      ),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          onClick: o,
          className: "px-3 py-1.5 text-xs font-medium bg-red-600 text-white rounded hover:bg-red-700",
          children: r
        }
      )
    ] })
  ] }) }) : null;
}
function lm({ files: e, onFilesChange: t }) {
  const n = (l) => {
    l.preventDefault();
  }, r = (l) => {
    if (l.preventDefault(), l.dataTransfer.files) {
      const s = Array.from(l.dataTransfer.files);
      t([...e, ...s]);
    }
  }, i = (l) => {
    if (l.target.files) {
      const s = Array.from(l.target.files);
      t([...e, ...s]);
    }
  }, o = (l) => {
    const s = [...e];
    s.splice(l, 1), t(s);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        onDragOver: n,
        onDrop: r,
        className: "border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative",
        children: [
          /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "file",
              multiple: !0,
              onChange: i,
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-1.5 text-slate-500", children: [
            /* @__PURE__ */ f.jsx(hy, { className: "w-8 h-8 text-slate-400" }),
            /* @__PURE__ */ f.jsx("span", { className: "text-xs font-medium", children: "Arraste e solte arquivos aqui, ou clique para fazer upload" }),
            /* @__PURE__ */ f.jsx("span", { className: "text-[10px] text-slate-400", children: "Suporta imagens, PDFs, vídeos ou logs" })
          ] })
        ]
      }
    ),
    e.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "flex flex-wrap gap-2", children: e.map((l, s) => {
      const a = l.type.startsWith("image/"), u = a ? URL.createObjectURL(l) : null;
      return /* @__PURE__ */ f.jsxs("div", { className: "relative group border rounded p-1.5 flex items-center gap-2 bg-slate-50 max-w-xs pr-8", children: [
        a && u ? /* @__PURE__ */ f.jsx("img", { src: u, alt: l.name, className: "w-8 h-8 rounded object-cover border" }) : /* @__PURE__ */ f.jsx(py, { className: "w-4 h-4 text-slate-400 shrink-0" }),
        /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ f.jsx("p", { className: "text-[11px] font-medium truncate text-slate-700", children: l.name }),
          /* @__PURE__ */ f.jsxs("p", { className: "text-[9px] text-slate-400", children: [
            (l.size / 1024).toFixed(1),
            " KB"
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            onClick: () => o(s),
            className: "absolute right-1 top-1 p-0.5 rounded text-slate-400 hover:text-red-500 hover:bg-red-50",
            children: /* @__PURE__ */ f.jsx(iu, { className: "w-3.5 h-3.5" })
          }
        )
      ] }, s);
    }) })
  ] });
}
let Gr = [], vn = [];
const xt = {
  success: (e, t) => es("success", e, t),
  error: (e, t) => es("error", e, t),
  info: (e, t) => es("info", e, t)
};
function es(e, t, n) {
  const r = Math.random().toString(), i = { id: r, type: e, title: t, description: n };
  vn = [...vn, i], Gr.forEach((o) => o(vn)), setTimeout(() => {
    vn = vn.filter((o) => o.id !== r), Gr.forEach((o) => o(vn));
  }, 4e3);
}
function p2() {
  const [e, t] = ho.useState(vn);
  return ho.useEffect(() => (Gr.push(t), () => {
    Gr = Gr.filter((n) => n !== t);
  }), []), e;
}
function sm() {
  const e = p2();
  return /* @__PURE__ */ f.jsx("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full", children: e.map((t) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `p-3 rounded-md shadow-md pointer-events-auto border flex flex-col gap-1 transition-all duration-300 ${t.type === "success" ? "bg-green-50 border-green-200 text-green-800" : t.type === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-slate-50 border-slate-200 text-slate-800"}`,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "font-semibold text-sm", children: t.title }),
        t.description && /* @__PURE__ */ f.jsx("div", { className: "text-xs opacity-90", children: t.description })
      ]
    },
    t.id
  )) });
}
function pl(e) {
  if (!e) return "";
  const t = new Date(e), r = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), i = Math.floor(r / 6e4), o = Math.floor(i / 60), l = Math.floor(o / 24);
  return i < 1 ? "Agora mesmo" : i < 60 ? `Há ${i} min` : o < 24 ? `Há ${o} h` : l === 1 ? "Ontem" : l < 7 ? `Há ${l} dias` : t.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function d2({ card: e, onClick: t }) {
  var n;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onClick: t,
      className: "flex items-center justify-between p-4 hover:bg-slate-50 transition-colors cursor-pointer border-b last:border-b-0",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-3 min-w-0 mr-4", children: [
          /* @__PURE__ */ f.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ f.jsx(rm, { type: e.card_type || "bug", context: "support" }) }),
          /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ f.jsx("h4", { className: "text-sm font-semibold text-slate-800 truncate", children: e.title }),
              e.code && /* @__PURE__ */ f.jsx("span", { className: "text-[10px] bg-slate-100 text-slate-600 px-1 py-0.5 rounded font-mono font-medium shrink-0", children: e.code })
            ] }),
            /* @__PURE__ */ f.jsxs("span", { className: "text-xs text-slate-400", children: [
              "Criado ",
              pl(e.created_at)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ f.jsx(nm, { severity: (n = e.card_metadata) == null ? void 0 : n.severity }),
          /* @__PURE__ */ f.jsx(Cu, { status: e.status })
        ] })
      ]
    }
  );
}
const f2 = [
  { value: "new-issues", label: "Novo" },
  { value: "triaging", label: "Triagem" },
  { value: "doing", label: "Em Progresso" },
  { value: "testing", label: "Em Teste" },
  { value: "done", label: "Concluído" }
];
function h2({
  card: e,
  projectId: t,
  apiKey: n,
  apiUrl: r,
  onClose: i,
  onRefresh: o
}) {
  var b;
  const [l, s] = O.useState(e.status), [a, u] = O.useState(!1), [p, c] = O.useState(!1), [h, d] = O.useState(!1), [y, v] = O.useState(!1), E = new yr({ projectId: t, apiKey: n, apiUrl: r }), m = async () => {
    u(!0);
    try {
      await E.updateCardStatus(e.id, l), xt.success("Status atualizado", "O status do chamado foi alterado com sucesso."), o(), i();
    } catch (N) {
      xt.error("Erro ao atualizar", N.message || "Não foi possível alterar o status.");
    } finally {
      u(!1);
    }
  }, g = async () => {
    c(!0);
    try {
      await E.deleteCard(e.id), xt.success("Chamado excluído", "O chamado foi deletado com sucesso."), o(), i();
    } catch (N) {
      xt.error("Erro ao excluir", N.message || "Não foi possível deletar o chamado.");
    } finally {
      c(!1), d(!1);
    }
  }, x = () => {
    try {
      const N = new URL(window.location.href);
      N.searchParams.set("card", e.id), navigator.clipboard.writeText(N.toString()), v(!0), xt.success("Link copiado", "O link do chamado foi copiado para a área de transferência."), setTimeout(() => v(!1), 2e3);
    } catch (N) {
      console.error("Failed to copy link", N);
    }
  }, C = l !== e.status, j = e.card_type === "bug";
  return /* @__PURE__ */ f.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40 animate-fadeIn", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-xl max-w-xl w-full flex flex-col shadow-2xl border max-h-[90vh]", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "p-5 border-b flex justify-between items-start", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "min-w-0 flex-1 pr-6", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
            /* @__PURE__ */ f.jsx("span", { className: `text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded ${j ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`, children: j ? "Bug Report" : "Feature Request" }),
            e.code && /* @__PURE__ */ f.jsx("span", { className: "text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-medium", children: e.code }),
            /* @__PURE__ */ f.jsx(nm, { severity: (b = e.card_metadata) == null ? void 0 : b.severity }),
            /* @__PURE__ */ f.jsx(Cu, { status: e.status })
          ] }),
          /* @__PURE__ */ f.jsx("h3", { className: "text-lg font-bold text-slate-800 leading-snug", children: e.title })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: x,
              title: "Copiar link para o chamado",
              className: "p-1.5 rounded-lg border text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors",
              children: y ? /* @__PURE__ */ f.jsx(sy, { className: "w-4 h-4 text-green-500" }) : /* @__PURE__ */ f.jsx(ay, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: i,
              className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors",
              children: /* @__PURE__ */ f.jsx(iu, { className: "w-4.5 h-4.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-5", children: [
        e.description ? /* @__PURE__ */ f.jsx("div", { className: "bg-slate-50 border rounded-lg p-4", children: /* @__PURE__ */ f.jsx(im, { content: e.description }) }) : /* @__PURE__ */ f.jsx("p", { className: "text-sm text-slate-400 italic", children: "Sem descrição fornecida." }),
        /* @__PURE__ */ f.jsx("div", { className: "text-xs text-slate-400 flex items-center gap-2", children: /* @__PURE__ */ f.jsxs("span", { children: [
          "Criado ",
          pl(e.created_at)
        ] }) })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "p-5 border-t bg-slate-50/50 rounded-b-xl space-y-4", children: /* @__PURE__ */ f.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-500", children: "Alterar Status" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx(
            "select",
            {
              value: l,
              onChange: (N) => s(N.target.value),
              className: "flex-1 px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500",
              children: f2.map((N) => /* @__PURE__ */ f.jsx("option", { value: N.value, children: N.label }, N.value))
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: m,
              disabled: !C || a,
              className: "px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors flex items-center gap-1.5",
              children: a ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                /* @__PURE__ */ f.jsx(cn, { className: "w-3.5 h-3.5 animate-spin" }),
                "Salvando..."
              ] }) : "Salvar Status"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              onClick: () => d(!0),
              title: "Excluir chamado",
              disabled: p,
              className: "p-2 border rounded-lg border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50",
              children: p ? /* @__PURE__ */ f.jsx(cn, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ f.jsx(fy, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ f.jsx(
      c2,
      {
        isOpen: h,
        title: "Excluir chamado",
        description: "Tem certeza que deseja excluir este chamado permanentemente? Esta ação não pode ser desfeita.",
        confirmLabel: "Sim, excluir",
        cancelLabel: "Cancelar",
        onConfirm: g,
        onCancel: () => d(!1)
      }
    )
  ] });
}
function m2(e) {
  if (e.includes("Firefox/")) {
    const t = e.match(/Firefox\/(\d+)/);
    return `Firefox ${t ? t[1] : ""}`.trim();
  }
  if (e.includes("Edg/")) {
    const t = e.match(/Edg\/(\d+)/);
    return `Edge ${t ? t[1] : ""}`.trim();
  }
  if (e.includes("Chrome/")) {
    const t = e.match(/Chrome\/(\d+)/);
    return `Chrome ${t ? t[1] : ""}`.trim();
  }
  if (e.includes("Safari/") && !e.includes("Chrome/")) {
    const t = e.match(/Version\/(\d+)/);
    return `Safari ${t ? t[1] : ""}`.trim();
  }
  return e.includes("MSIE") || e.includes("Trident/") ? "Internet Explorer" : "Unknown Browser";
}
function g2(e) {
  if (e.includes("Windows NT 10.0")) return "Windows 10/11";
  if (e.includes("Windows NT 6.3")) return "Windows 8.1";
  if (e.includes("Windows NT 6.2")) return "Windows 8";
  if (e.includes("Windows NT 6.1")) return "Windows 7";
  if (e.includes("Mac OS X")) {
    const t = e.match(/Mac OS X (\d+[._]\d+)/);
    return `macOS ${t ? t[1].replace("_", ".") : ""}`.trim();
  }
  if (e.includes("Android")) {
    const t = e.match(/Android (\d+)/);
    return `Android ${t ? t[1] : ""}`.trim();
  }
  if (e.includes("iPhone") || e.includes("iPad")) {
    const t = e.match(/OS (\d+_\d+)/);
    return `iOS ${t ? t[1].replace("_", ".") : ""}`.trim();
  }
  return e.includes("Linux") ? "Linux" : "Unknown OS";
}
function y2(e) {
  var n, r;
  if (typeof window > "u")
    return {
      browser: "SSR",
      os: "SSR",
      screen_resolution: "N/A",
      app_version: e || "unknown"
    };
  const t = navigator.userAgent;
  return {
    browser: m2(t),
    os: g2(t),
    screen_resolution: `${((n = window.screen) == null ? void 0 : n.width) || 0}x${((r = window.screen) == null ? void 0 : r.height) || 0}`,
    app_version: e || "unknown"
  };
}
function am({
  projectId: e,
  apiKey: t,
  apiUrl: n,
  appVersion: r,
  appName: i,
  onSuccess: o,
  onCancel: l
}) {
  const [s, a] = O.useState(""), [u, p] = O.useState(i || ""), [c, h] = O.useState(""), [d, y] = O.useState(""), [v, E] = O.useState(""), [m, g] = O.useState(""), [x, C] = O.useState("medium"), [j, b] = O.useState("always"), [N, z] = O.useState("few"), [$, S] = O.useState(!1), [A, I] = O.useState(!1), [W, K] = O.useState(""), [H, ie] = O.useState([]), [te, L] = O.useState(!1), [F, w] = O.useState(!1), [R, ee] = O.useState(null), [k, ue] = O.useState({});
  O.useEffect(() => {
    ee(y2(r));
  }, [r]);
  const Re = (M) => {
    switch (M) {
      case "low":
        return "Low";
      case "medium":
        return "Medium";
      case "high":
      case "critical":
      default:
        return "High";
    }
  }, ne = () => {
    const M = {};
    return s.trim() || (M.title = "Título é obrigatório"), s.length > 200 && (M.title = "Título deve ter no máximo 200 caracteres"), u.trim() || (M.application = "Aplicação é obrigatória"), c.trim() || (M.moduleName = "Módulo / tela é obrigatório"), d.trim() || (M.actualBehavior = "Comportamento atual é obrigatório"), v.trim() || (M.expectedBehavior = "Comportamento esperado é obrigatório"), m.trim() || (M.stepsToReproduce = "Passos para reproduzir são obrigatórios"), ue(M), Object.keys(M).length === 0;
  }, Q = async (M) => {
    if (M.preventDefault(), !ne()) {
      xt.error("Erro de validação", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    L(!0);
    const xe = new yr({ projectId: e, apiKey: t, apiUrl: n });
    try {
      let we = [];
      H.length > 0 && (we = await Promise.all(
        H.map((Ye) => xe.uploadAttachment(Ye))
      ));
      const Xe = H.map((Ye, Ti) => {
        const kr = we[Ti].url;
        return Ye.type.startsWith("image/") ? `![${Ye.name}](${kr})` : `[${Ye.name}](${kr})`;
      }).join(`
`), Vt = `## Bug Report: ${s}

**Aplicação:** ${u || "Não especificada"}
**Módulo:** ${c || "Não especificado"}
**Severidade:** ${x} | **Frequência:** ${j}
**Usuários afetados:** ${N} | **Bloqueia fluxo crítico:** ${$ ? "Sim" : "Não"}

### O que aconteceu
${d}

### O que deveria acontecer
${v}

### Passos para reproduzir
${m || "Nenhum passo fornecido."}

### Workaround
${A ? W : "Nenhum"}

### Anexos
${Xe || "Nenhum anexo enviado."}

### Ambiente
- Browser: ${(R == null ? void 0 : R.browser) || "Detectando..."}
- OS: ${(R == null ? void 0 : R.os) || "Detectando..."}
- Resolução: ${(R == null ? void 0 : R.screen_resolution) || "N/A"}
- Versão do App: ${(R == null ? void 0 : R.app_version) || "unknown"}`, vr = {
        title: s,
        card_type: "bug",
        status: "New Issues",
        priority: Re(x),
        description: Vt,
        labels: [u, c].filter(Boolean),
        card_metadata: {
          browser: R == null ? void 0 : R.browser,
          os: R == null ? void 0 : R.os,
          screen_resolution: R == null ? void 0 : R.screen_resolution,
          app_version: R == null ? void 0 : R.app_version,
          severity: x,
          frequency: j,
          users_affected: N,
          blocks_critical_flow: $,
          has_workaround: A,
          workaround_description: A ? W : void 0,
          attachment_urls: we.map((Ye) => Ye.url)
        }
      }, Mn = await xe.createSupportCard(vr);
      xt.success("Bug reportado!", "O bug foi enviado com sucesso."), a(""), h(""), y(""), E(""), g(""), C("medium"), b("always"), z("few"), S(!1), I(!1), K(""), ie([]), o && o(Mn);
    } catch (we) {
      xt.error("Erro ao reportar", we.message || "Houve um problema ao criar o ticket."), console.error(we);
    } finally {
      L(!1);
    }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-xl shadow-sm border p-6 w-full", children: [
    /* @__PURE__ */ f.jsx(sm, {}),
    /* @__PURE__ */ f.jsxs("h2", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-2", children: [
      /* @__PURE__ */ f.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" }),
      "Reportar Bug"
    ] }),
    /* @__PURE__ */ f.jsxs("form", { onSubmit: Q, className: "space-y-6", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "1. Identificação" }),
        /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "md:col-span-2 space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Título do Incidente *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: s,
                onChange: (M) => a(M.target.value),
                placeholder: "Ex: Botão de salvar não responde ao clicar",
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
              }
            ),
            k.title && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.title })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Aplicação *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: u,
                onChange: (M) => p(M.target.value),
                placeholder: "Ex: Nubo App",
                disabled: !!i,
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500 disabled:bg-slate-100 disabled:text-slate-500"
              }
            ),
            k.application && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.application })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Módulo / Tela *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: c,
                onChange: (M) => h(M.target.value),
                placeholder: "Ex: Checkout, Login, Perfil",
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
              }
            ),
            k.moduleName && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.moduleName })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "2. Comportamento e Reprodução" }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "O que aconteceu? (Comportamento Atual) *" }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: d,
              onChange: (M) => y(M.target.value),
              placeholder: "Descreva detalhadamente o erro observado...",
              rows: 3,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
            }
          ),
          k.actualBehavior && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.actualBehavior })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "O que deveria acontecer? (Comportamento Esperado) *" }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: v,
              onChange: (M) => E(M.target.value),
              placeholder: "Descreva qual era a expectativa para este fluxo...",
              rows: 3,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
            }
          ),
          k.expectedBehavior && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.expectedBehavior })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Passos para reproduzir *" }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: m,
              onChange: (M) => g(M.target.value),
              placeholder: `1. Ir para a tela de configurações
2. Clicar no botão 'Salvar'
3. Observar que nada acontece`,
              rows: 4,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500 font-mono text-xs"
            }
          ),
          k.stepsToReproduce && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.stepsToReproduce })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "3. Impacto e Classificação" }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600 block", children: "Severidade" }),
          /* @__PURE__ */ f.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", children: ["low", "medium", "high", "critical"].map((M) => {
            const xe = {
              low: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
              medium: "bg-yellow-50/30 text-yellow-700 border-yellow-200 hover:bg-yellow-50/50",
              high: "bg-orange-50/30 text-orange-700 border-orange-200 hover:bg-orange-50/50",
              critical: "bg-red-50/30 text-red-700 border-red-200 hover:bg-red-50/50"
            }, we = {
              low: "border-slate-400 bg-slate-100",
              medium: "border-yellow-500 bg-yellow-50 text-yellow-800",
              high: "border-orange-500 bg-orange-50 text-orange-800",
              critical: "border-red-500 bg-red-50 text-red-800"
            }, Xe = x === M;
            return /* @__PURE__ */ f.jsxs(
              "button",
              {
                type: "button",
                onClick: () => C(M),
                className: `p-2.5 rounded-lg border text-center text-xs font-semibold capitalize transition-all ${Xe ? we[M] : xe[M]}`,
                children: [
                  M === "low" && "Baixa",
                  M === "medium" && "Média",
                  M === "high" && "Alta",
                  M === "critical" && "Crítica"
                ]
              },
              M
            );
          }) })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Frequência" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: j,
                onChange: (M) => b(M.target.value),
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500",
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "always", children: "Sempre acontece" }),
                  /* @__PURE__ */ f.jsx("option", { value: "sometimes", children: "Às vezes acontece" }),
                  /* @__PURE__ */ f.jsx("option", { value: "once", children: "Aconteceu uma única vez" }),
                  /* @__PURE__ */ f.jsx("option", { value: "unknown", children: "Não sei dizer" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Usuários Afetados" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: N,
                onChange: (M) => z(M.target.value),
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500",
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "single", children: "Só comigo" }),
                  /* @__PURE__ */ f.jsx("option", { value: "few", children: "Poucos usuários" }),
                  /* @__PURE__ */ f.jsx("option", { value: "many", children: "Muitos usuários" }),
                  /* @__PURE__ */ f.jsx("option", { value: "all", children: "Todos os usuários" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-3 pt-2", children: [
          /* @__PURE__ */ f.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "checkbox",
                checked: $,
                onChange: (M) => S(M.target.checked),
                className: "w-4 h-4 rounded text-red-600 border-slate-300 focus:ring-red-500"
              }
            ),
            /* @__PURE__ */ f.jsx("span", { className: "text-xs font-medium text-slate-700", children: "Bloqueia um fluxo crítico do negócio?" })
          ] }),
          /* @__PURE__ */ f.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "checkbox",
                checked: A,
                onChange: (M) => I(M.target.checked),
                className: "w-4 h-4 rounded text-red-600 border-slate-300 focus:ring-red-500"
              }
            ),
            /* @__PURE__ */ f.jsx("span", { className: "text-xs font-medium text-slate-700", children: "Existe um fluxo alternativo (workaround)?" })
          ] }),
          A && /* @__PURE__ */ f.jsxs("div", { className: "space-y-1 animate-fadeIn", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Como contornar o problema?" }),
            /* @__PURE__ */ f.jsx(
              "textarea",
              {
                value: W,
                onChange: (M) => K(M.target.value),
                placeholder: "Explique o workaround encontrado...",
                rows: 2,
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
              }
            ),
            k.workaroundDescription && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: k.workaroundDescription })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "4. Evidências" }),
        /* @__PURE__ */ f.jsx(lm, { files: H, onFilesChange: ie })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "border border-slate-200 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => w(!F),
            className: "w-full flex items-center justify-between px-4 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors",
            children: [
              /* @__PURE__ */ f.jsx("span", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "5. Informações Técnicas" }),
              F ? /* @__PURE__ */ f.jsx(Yf, { className: "w-4 h-4" }) : /* @__PURE__ */ f.jsx(Xf, { className: "w-4 h-4" })
            ]
          }
        ),
        F && /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-t border-slate-200 space-y-2 bg-slate-50/50 font-mono text-[11px] text-slate-600", children: [
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-slate-500", children: "Navegador:" }),
            " ",
            R == null ? void 0 : R.browser
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-slate-500", children: "Sistema Operacional:" }),
            " ",
            R == null ? void 0 : R.os
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-slate-500", children: "Resolução de Tela:" }),
            " ",
            R == null ? void 0 : R.screen_resolution
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "font-semibold text-slate-500", children: "Versão da Aplicação:" }),
            " ",
            R == null ? void 0 : R.app_version
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t", children: [
        l && /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            onClick: l,
            disabled: te,
            className: "px-4 py-2 text-sm font-medium border rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "submit",
            disabled: te,
            className: "px-5 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors disabled:opacity-70 flex items-center gap-2",
            children: te ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(cn, { className: "w-4 h-4 animate-spin" }),
              "Reportando..."
            ] }) : "Reportar Bug"
          }
        )
      ] })
    ] })
  ] });
}
function um({
  projectId: e,
  apiKey: t,
  apiUrl: n,
  appName: r,
  onSuccess: i,
  onCancel: o
}) {
  const [l, s] = O.useState(""), [a, u] = O.useState(r || ""), [p, c] = O.useState(""), [h, d] = O.useState(""), [y, v] = O.useState(""), [E, m] = O.useState(""), [g, x] = O.useState(""), [C, j] = O.useState([]), [b, N] = O.useState(!1), [z, $] = O.useState({}), S = () => {
    const I = {};
    return l.trim() || (I.title = "Título é obrigatório"), l.length > 200 && (I.title = "Título deve ter no máximo 200 caracteres"), a.trim() || (I.application = "Aplicação é obrigatória"), p.trim() || (I.moduleName = "Módulo / tela é obrigatório"), h.trim() || (I.problemOrOpportunity = "Este campo é obrigatório"), y.trim() || (I.proposedSolution = "Este campo é obrigatório"), $(I), Object.keys(I).length === 0;
  }, A = async (I) => {
    if (I.preventDefault(), !S()) {
      xt.error("Erro de validação", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    N(!0);
    const W = new yr({ projectId: e, apiKey: t, apiUrl: n });
    try {
      let K = [];
      C.length > 0 && (K = await Promise.all(
        C.map((F) => W.uploadAttachment(F))
      ));
      const H = C.map((F, w) => {
        const R = K[w].url;
        return F.type.startsWith("image/") ? `![${F.name}](${R})` : `[${F.name}](${R})`;
      }).join(`
`), ie = `## Feature Request: ${l}

**Aplicação:** ${a || "Não especificada"}
**Módulo:** ${p || "Não especificado"}

### Dor / Oportunidade
${h}

### Solução Proposta
${y}

### Impacto Esperado
${E}

### Justificativa de Prioridade
${g}

### Anexos
${H || "Nenhum anexo enviado."}`, te = {
        title: l,
        card_type: "feature",
        status: "New Issues",
        priority: "Medium",
        // default to Medium
        description: ie,
        labels: [a, p].filter(Boolean),
        card_metadata: {
          problem_or_opportunity: h,
          proposed_solution: y,
          expected_impact: E,
          priority_justification: g,
          attachment_urls: K.map((F) => F.url)
        }
      }, L = await W.createSupportCard(te);
      xt.success("Sugestão enviada!", "Sua sugestão de melhoria foi enviada com sucesso."), s(""), c(""), d(""), v(""), m(""), x(""), j([]), i && i(L);
    } catch (K) {
      xt.error("Erro ao enviar", K.message || "Houve um problema ao criar o ticket."), console.error(K);
    } finally {
      N(!1);
    }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-xl shadow-sm border p-6 w-full", children: [
    /* @__PURE__ */ f.jsx(sm, {}),
    /* @__PURE__ */ f.jsxs("h2", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-2", children: [
      /* @__PURE__ */ f.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" }),
      "Sugerir Melhoria"
    ] }),
    /* @__PURE__ */ f.jsxs("form", { onSubmit: A, className: "space-y-6", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "1. Identificação" }),
        /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "md:col-span-2 space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Título da Melhoria *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: l,
                onChange: (I) => s(I.target.value),
                placeholder: "Ex: Filtro avançado por período na listagem",
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
              }
            ),
            z.title && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.title })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Aplicação *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: a,
                onChange: (I) => u(I.target.value),
                placeholder: "Ex: Nubo App",
                disabled: !!r,
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500 disabled:bg-slate-100 disabled:text-slate-500"
              }
            ),
            z.application && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.application })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Módulo / Tela *" }),
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                value: p,
                onChange: (I) => c(I.target.value),
                placeholder: "Ex: Relatórios, Dashboard",
                className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
              }
            ),
            z.moduleName && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.moduleName })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "2. Detalhamento da Sugestão" }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-baseline", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Qual dor ou oportunidade você identificou? *" }),
            /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] text-slate-400", children: [
              h.length,
              " caracteres"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: h,
              onChange: (I) => d(I.target.value),
              placeholder: "Descreva o problema do usuário ou a oportunidade de melhoria...",
              rows: 3,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            }
          ),
          z.problemOrOpportunity && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.problemOrOpportunity })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-baseline", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Como você imagina a solução? *" }),
            /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] text-slate-400", children: [
              y.length,
              " caracteres"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: y,
              onChange: (I) => v(I.target.value),
              placeholder: "Descreva como você imagina que o recurso deveria funcionar...",
              rows: 3,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            }
          ),
          z.proposedSolution && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.proposedSolution })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-baseline", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Que benefício isso traria? (Impacto esperado)" }),
            /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] text-slate-400", children: [
              E.length,
              " caracteres"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: E,
              onChange: (I) => m(I.target.value),
              placeholder: "Métricas de sucesso, economia de tempo, satisfação do usuário...",
              rows: 2,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            }
          ),
          z.expectedImpact && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.expectedImpact })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-baseline", children: [
            /* @__PURE__ */ f.jsx("label", { className: "text-xs font-semibold text-slate-600", children: "Por que isso é importante agora? (Justificativa)" }),
            /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] text-slate-400", children: [
              g.length,
              " caracteres"
            ] })
          ] }),
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: g,
              onChange: (I) => x(I.target.value),
              placeholder: "Qual o valor estratégico imediato de fazer isso agora...",
              rows: 2,
              className: "w-full px-3 py-2 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            }
          ),
          z.priorityJustification && /* @__PURE__ */ f.jsx("p", { className: "text-[11px] text-red-500", children: z.priorityJustification })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 p-4 rounded-lg space-y-4", children: [
        /* @__PURE__ */ f.jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "3. Anexos / Referências" }),
        /* @__PURE__ */ f.jsx(lm, { files: C, onFilesChange: j })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t", children: [
        o && /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            onClick: o,
            disabled: b,
            className: "px-4 py-2 text-sm font-medium border rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "submit",
            disabled: b,
            className: "px-5 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm transition-colors disabled:opacity-70 flex items-center gap-2",
            children: b ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(cn, { className: "w-4 h-4 animate-spin" }),
              "Enviando..."
            ] }) : "Enviar Sugestão"
          }
        )
      ] })
    ] })
  ] });
}
function x2({
  projectId: e,
  apiKey: t,
  apiUrl: n,
  appName: r,
  isOpen: i,
  onClose: o,
  onSuccess: l,
  defaultTab: s = "bug"
}) {
  const [a, u] = O.useState(s);
  return i ? /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40 overflow-y-auto", children: /* @__PURE__ */ f.jsxs("div", { className: "bg-slate-50 rounded-xl max-w-2xl w-full flex flex-col shadow-2xl border my-8 relative", children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        type: "button",
        onClick: o,
        className: "absolute right-4 top-4 z-10 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors",
        children: /* @__PURE__ */ f.jsx(iu, { className: "w-4.5 h-4.5" })
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "flex border-b bg-white rounded-t-xl px-6 pt-4 gap-4", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u("bug"),
          className: `pb-3 text-sm font-bold flex items-center gap-1.5 transition-all border-b-2 px-1 ${a === "bug" ? "border-red-500 text-red-600" : "border-transparent text-slate-400 hover:text-slate-600"}`,
          children: [
            /* @__PURE__ */ f.jsx(nu, { className: "w-4 h-4" }),
            "Reportar Bug"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u("feature"),
          className: `pb-3 text-sm font-bold flex items-center gap-1.5 transition-all border-b-2 px-1 ${a === "feature" ? "border-green-500 text-green-600" : "border-transparent text-slate-400 hover:text-slate-600"}`,
          children: [
            /* @__PURE__ */ f.jsx(ru, { className: "w-4 h-4" }),
            "Sugerir Melhoria"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "p-1 overflow-y-auto max-h-[80vh]", children: a === "bug" ? /* @__PURE__ */ f.jsx("div", { className: "bg-transparent border-0 shadow-none p-0 flex justify-center", children: /* @__PURE__ */ f.jsx(
      am,
      {
        projectId: e,
        apiKey: t,
        apiUrl: n,
        appName: r,
        onSuccess: () => {
          l(), o();
        },
        onCancel: o
      }
    ) }) : /* @__PURE__ */ f.jsx("div", { className: "bg-transparent border-0 shadow-none p-0 flex justify-center", children: /* @__PURE__ */ f.jsx(
      um,
      {
        projectId: e,
        apiKey: t,
        apiUrl: n,
        appName: r,
        onSuccess: () => {
          l(), o();
        },
        onCancel: o
      }
    ) }) })
  ] }) }) : null;
}
function w2({
  projectId: e,
  apiKey: t,
  apiUrl: n,
  defaultTab: r = "active",
  pageSize: i = 10,
  appName: o
}) {
  const [l, s] = O.useState(r), [a, u] = O.useState(null), [p, c] = O.useState(null), [h, d] = O.useState(0), [y, v] = O.useState(0), [E, m] = O.useState(!1), [g, x] = O.useState(null), [C, j] = O.useState(""), [b, N] = O.useState({
    status: "",
    type: "",
    severity: ""
  }), [z, $] = O.useState(null), [S, A] = O.useState(!1), [I, W] = O.useState("bug"), K = new yr({ projectId: e, apiKey: t, apiUrl: n }), H = async (Q) => {
    m(!0), x(null);
    try {
      if (Q === "active") {
        const M = await K.fetchSupportCards(
          void 0,
          i,
          h * i,
          "done"
          // exclude done
        );
        u(M);
      } else {
        const M = await K.fetchSupportCards(
          "done",
          i,
          y * i
        );
        c(M);
      }
    } catch (M) {
      x(M.message || "Erro ao carregar chamados.");
    } finally {
      m(!1);
    }
  };
  O.useEffect(() => {
    H(l);
  }, [l, h, y]), O.useEffect(() => {
    const M = new URLSearchParams(window.location.search).get("card");
    M && !z && K.fetchSingleCard(M).then((xe) => $(xe)).catch((xe) => console.warn("[SupportBoard] Deep-linked card not found:", xe));
  }, []);
  const ie = (Q) => {
    $(Q);
    const M = new URL(window.location.href);
    M.searchParams.set("card", Q.id), window.history.replaceState({}, "", M.toString());
  }, te = () => {
    $(null);
    const Q = new URL(window.location.href);
    Q.searchParams.delete("card"), window.history.replaceState({}, "", Q.toString());
  }, L = () => {
    H(l);
  }, F = l === "active" ? a : p, w = (F == null ? void 0 : F.items) || [], R = (F == null ? void 0 : F.total) || 0, ee = w.filter((Q) => {
    var Mn, Ye;
    const M = C.toLowerCase(), xe = Q.title.toLowerCase().includes(M), we = ((Mn = Q.code) == null ? void 0 : Mn.toLowerCase().includes(M)) || !1, Xe = !b.status || Q.status === b.status, Vt = !b.type || Q.card_type === b.type, vr = !b.severity || ((Ye = Q.card_metadata) == null ? void 0 : Ye.severity) === b.severity;
    return (xe || we) && Xe && Vt && vr;
  }), k = { critical: 0, high: 1, medium: 2, low: 3 }, ue = [...ee].sort((Q, M) => {
    var Xe, Vt;
    const xe = k[((Xe = Q.card_metadata) == null ? void 0 : Xe.severity) || ""] ?? 4, we = k[((Vt = M.card_metadata) == null ? void 0 : Vt.severity) || ""] ?? 4;
    return xe !== we ? xe - we : new Date(M.created_at).getTime() - new Date(Q.created_at).getTime();
  }), Re = l === "active" ? h : y, ne = (Q) => {
    l === "active" ? d(Q) : v(Q);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "space-y-6 w-full mx-auto", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border shadow-sm", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => s("active"),
            className: `px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${l === "active" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
            children: [
              /* @__PURE__ */ f.jsx(Qs, { className: `w-3.5 h-3.5 ${E && l === "active" ? "animate-spin" : ""}` }),
              "Chamados Ativos"
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => s("history"),
            className: `px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${l === "history" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
            children: [
              /* @__PURE__ */ f.jsx(Qs, { className: `w-3.5 h-3.5 ${E && l === "history" ? "animate-spin" : ""}` }),
              "Histórico"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              W("bug"), A(!0);
            },
            className: "px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ f.jsx(nu, { className: "w-4 h-4" }),
              "Novo Bug"
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              W("feature"), A(!0);
            },
            className: "px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ f.jsx(ru, { className: "w-4 h-4" }),
              "Sugerir Melhoria"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-4 rounded-xl border shadow-sm grid grid-cols-1 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ f.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ f.jsx(
        om,
        {
          value: C,
          onChange: j,
          placeholder: "Buscar por título ou código..."
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsxs(
        "select",
        {
          value: b.type,
          onChange: (Q) => N({ ...b, type: Q.target.value }),
          className: "w-full px-3 py-1.5 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-slate-500",
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "", children: "Todos os tipos" }),
            /* @__PURE__ */ f.jsx("option", { value: "bug", children: "Bugs" }),
            /* @__PURE__ */ f.jsx("option", { value: "feature", children: "Sugestões" })
          ]
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsxs(
        "select",
        {
          value: b.severity,
          onChange: (Q) => N({ ...b, severity: Q.target.value }),
          className: "w-full px-3 py-1.5 text-sm border rounded bg-white focus:outline-none focus:ring-1 focus:ring-slate-500",
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "", children: "Todas as severidades" }),
            /* @__PURE__ */ f.jsx("option", { value: "low", children: "Baixa" }),
            /* @__PURE__ */ f.jsx("option", { value: "medium", children: "Média" }),
            /* @__PURE__ */ f.jsx("option", { value: "high", children: "Alta" }),
            /* @__PURE__ */ f.jsx("option", { value: "critical", children: "Crítica" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-xl border shadow-sm overflow-hidden min-h-[250px] flex flex-col justify-between", children: [
      E ? /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center py-12 text-slate-400 gap-2", children: [
        /* @__PURE__ */ f.jsx(cn, { className: "w-8 h-8 animate-spin text-slate-300" }),
        /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium", children: "Carregando chamados..." })
      ] }) : g ? /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center py-12 text-red-500 gap-2", children: [
        /* @__PURE__ */ f.jsx(mi, { className: "w-8 h-8" }),
        /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold", children: g }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            onClick: () => H(l),
            className: "mt-2 text-xs bg-red-50 border border-red-200 px-3 py-1 rounded text-red-700 hover:bg-red-100",
            children: "Tentar Novamente"
          }
        )
      ] }) : ue.length === 0 ? /* @__PURE__ */ f.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center py-16 text-slate-400 gap-2 text-center px-4", children: [
        /* @__PURE__ */ f.jsx(dy, { className: "w-8 h-8 text-slate-300 stroke-[1.5]" }),
        /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold text-slate-500", children: "Nenhum chamado encontrado" }),
        /* @__PURE__ */ f.jsx("span", { className: "text-xs text-slate-400 max-w-xs", children: "Você pode reportar um problema ou sugerir melhorias clicando nos botões acima." })
      ] }) : /* @__PURE__ */ f.jsx("div", { className: "divide-y", children: ue.map((Q) => /* @__PURE__ */ f.jsx(
        d2,
        {
          card: Q,
          onClick: () => ie(Q)
        },
        Q.id
      )) }),
      !E && !g && ue.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "p-4 border-t bg-slate-50/50", children: /* @__PURE__ */ f.jsx(
        u2,
        {
          page: Re,
          total: R,
          limit: i,
          onPageChange: ne
        }
      ) })
    ] }),
    z && /* @__PURE__ */ f.jsx(
      h2,
      {
        card: z,
        projectId: e,
        apiKey: t,
        apiUrl: n,
        onClose: te,
        onRefresh: () => H(l)
      }
    ),
    /* @__PURE__ */ f.jsx(
      x2,
      {
        projectId: e,
        apiKey: t,
        apiUrl: n,
        appName: o,
        isOpen: S,
        defaultTab: I,
        onClose: () => A(!1),
        onSuccess: L
      }
    )
  ] });
}
function v2({ card: e }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-lg border shadow-sm hover:shadow transition-shadow flex flex-col justify-between gap-3 h-full", children: [
    /* @__PURE__ */ f.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ f.jsx("h4", { className: "text-xs font-semibold text-slate-800 line-clamp-2 leading-tight", children: e.title }),
      e.code && /* @__PURE__ */ f.jsx("span", { className: "text-[9px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded font-mono font-medium shrink-0", children: e.code })
    ] }) }),
    /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-1 flex-wrap", children: [
      /* @__PURE__ */ f.jsx(rm, { type: e.card_type || "" }),
      /* @__PURE__ */ f.jsx(Cu, { status: e.status })
    ] })
  ] });
}
function k2({ progress: e }) {
  const t = Math.max(0, Math.min(100, e)), n = Math.round(t);
  return /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-500",
        style: { width: `${t}%` }
      }
    ) }),
    /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] font-bold text-slate-500 min-w-[32px] text-right tabular-nums", children: [
      n,
      "%"
    ] })
  ] });
}
const b2 = {
  active: { label: "Ativa", className: "bg-green-600 text-white" },
  planning: { label: "Planejamento", className: "bg-blue-500 text-white" },
  done: { label: "Concluída", className: "bg-slate-500 text-white" },
  backlog: { label: "Backlog", className: "bg-slate-400 text-white" }
};
function Lp({
  sprintName: e,
  sprintStatus: t,
  tag: n,
  cards: r,
  defaultExpanded: i = !1
}) {
  const [o, l] = O.useState(i), s = r.length, a = r.filter((c) => c.status === "done").length, u = s > 0 ? a / s * 100 : 0, p = b2[t.toLowerCase()] || {
    label: t,
    className: "bg-slate-500 text-white"
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "border rounded-xl bg-white shadow-sm overflow-hidden transition-all", children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        onClick: () => l(!o),
        className: "p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 select-none transition-colors border-b last:border-b-0",
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex-1 min-w-0 space-y-1", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ f.jsx("h3", { className: "text-sm md:text-base font-bold text-slate-800", children: e }),
              n && /* @__PURE__ */ f.jsx("span", { className: "text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-medium", children: n }),
              /* @__PURE__ */ f.jsx("span", { className: `text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.className}`, children: p.label })
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "max-w-xs pt-1", children: /* @__PURE__ */ f.jsx(k2, { progress: u }) })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-3 shrink-0 self-end md:self-center", children: [
            /* @__PURE__ */ f.jsxs("span", { className: "text-xs text-slate-400", children: [
              a,
              " / ",
              s,
              " cards concluídos"
            ] }),
            o ? /* @__PURE__ */ f.jsx(Yf, { className: "w-5 h-5 text-slate-400" }) : /* @__PURE__ */ f.jsx(Xf, { className: "w-5 h-5 text-slate-400" })
          ] })
        ]
      }
    ),
    o && /* @__PURE__ */ f.jsx("div", { className: "p-4 bg-slate-50/50 border-t", children: r.length === 0 ? /* @__PURE__ */ f.jsx("p", { className: "text-xs text-slate-400 italic py-4 text-center", children: "Nenhum card nesta sprint." }) : /* @__PURE__ */ f.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3", children: r.map((c) => /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(v2, { card: c }) }, c.id)) }) })
  ] });
}
function S2({
  projectId: e,
  apiKey: t,
  apiUrl: n,
  showBacklog: r = !0
}) {
  const [i, o] = O.useState([]), [l, s] = O.useState([]), [a, u] = O.useState(!1), [p, c] = O.useState(null), h = new yr({ projectId: e, apiKey: t, apiUrl: n }), d = async () => {
    u(!0), c(null);
    try {
      const v = await h.fetchRoadmapSprints();
      o(v.sprints || []), s(v.backlog || []);
    } catch (v) {
      c(v.message || "Erro ao carregar o roadmap.");
    } finally {
      u(!1);
    }
  };
  return O.useEffect(() => {
    d();
  }, []), a ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-slate-400 gap-2 min-h-[300px]", children: [
    /* @__PURE__ */ f.jsx(cn, { className: "w-8 h-8 animate-spin text-slate-300" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium", children: "Carregando roadmap..." })
  ] }) : p ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-red-500 gap-2 border rounded-xl bg-white shadow-sm min-h-[300px]", children: [
    /* @__PURE__ */ f.jsx(mi, { className: "w-8 h-8" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold", children: p }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        type: "button",
        onClick: d,
        className: "mt-2 text-xs bg-red-50 border border-red-200 px-3 py-1 rounded text-red-700 hover:bg-red-100",
        children: "Tentar Novamente"
      }
    )
  ] }) : i.length === 0 && (!r || l.length === 0) ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-slate-400 gap-2 border rounded-xl bg-white shadow-sm min-h-[300px] text-center px-4", children: [
    /* @__PURE__ */ f.jsx(mi, { className: "w-8 h-8 text-slate-300" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold text-slate-500", children: "Nenhum item no roadmap" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-xs text-slate-400 max-w-xs", children: "Não há sprints cadastradas ou atividades no backlog público deste projeto." })
  ] }) : /* @__PURE__ */ f.jsxs("div", { className: "space-y-4 w-full mx-auto", children: [
    i.map((v) => /* @__PURE__ */ f.jsx(
      Lp,
      {
        sprintName: v.name,
        sprintStatus: v.status,
        tag: v.tag,
        cards: v.cards || [],
        defaultExpanded: v.status.toLowerCase() === "active"
      },
      v.id
    )),
    r && l.length > 0 && /* @__PURE__ */ f.jsx(
      Lp,
      {
        sprintName: "Backlog de Pendências",
        sprintStatus: "backlog",
        tag: "Backlog",
        cards: l,
        defaultExpanded: i.length === 0
      }
    )
  ] });
}
const Ap = {
  prd: "bg-blue-50 text-blue-700 border-blue-200",
  prd_novo_app: "bg-blue-50 text-blue-700 border-blue-200",
  prd_novo_admin: "bg-blue-50 text-blue-700 border-blue-200",
  roadmap: "bg-green-50 text-green-700 border-green-200",
  playbook: "bg-purple-50 text-purple-700 border-purple-200",
  strategy: "bg-amber-50 text-amber-700 border-amber-200",
  architecture: "bg-indigo-50 text-indigo-700 border-indigo-200",
  context: "bg-slate-50 text-slate-700 border-slate-200",
  other: "bg-slate-50 text-slate-700 border-slate-200"
};
function cm({ type: e }) {
  const t = e.toLowerCase(), n = Ap[t] || Ap.other;
  let r = e.toUpperCase();
  return t === "prd" && (r = "PRD"), t === "playbook" && (r = "Playbook"), t === "roadmap" && (r = "Roadmap"), t === "strategy" && (r = "Estratégia"), t === "architecture" && (r = "Arquitetura"), t === "context" && (r = "Contexto"), /* @__PURE__ */ f.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border capitalize ${n}`, children: r });
}
function C2({ doc: e, onBack: t }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "bg-white rounded-xl border shadow-sm p-6 space-y-6", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: t,
          className: "inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors w-max",
          children: [
            /* @__PURE__ */ f.jsx(oy, { className: "w-3.5 h-3.5" }),
            "Voltar para Lista"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-400", children: [
        /* @__PURE__ */ f.jsx("span", { children: "Documentação" }),
        /* @__PURE__ */ f.jsx("span", { children: ">" }),
        /* @__PURE__ */ f.jsx("span", { className: "text-slate-600 font-medium", children: e.name })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "border-b pb-4 space-y-2", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ f.jsx(cm, { type: e.type }),
        /* @__PURE__ */ f.jsxs("span", { className: "inline-flex items-center gap-1 text-[11px] text-slate-400", children: [
          /* @__PURE__ */ f.jsx(ly, { className: "w-3.5 h-3.5" }),
          "Atualizado ",
          pl(e.updated_at)
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("h2", { className: "text-xl md:text-2xl font-bold text-slate-800 leading-tight", children: e.name })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "bg-slate-50/50 border rounded-lg p-5", children: /* @__PURE__ */ f.jsx(im, { content: e.content }) })
  ] });
}
function E2({
  projectId: e,
  apiKey: t,
  apiUrl: n
}) {
  const [r, i] = O.useState({ mode: "list" }), [o, l] = O.useState([]), [s, a] = O.useState(!1), [u, p] = O.useState(null), [c, h] = O.useState(null), [d, y] = O.useState(!1), [v, E] = O.useState(null), [m, g] = O.useState(""), x = new yr({ projectId: e, apiKey: t, apiUrl: n }), C = async () => {
    a(!0), p(null);
    try {
      const N = await x.fetchDocs();
      l(N || []);
    } catch (N) {
      p(N.message || "Erro ao carregar os documentos.");
    } finally {
      a(!1);
    }
  }, j = async (N) => {
    y(!0), E(null);
    try {
      const z = await x.fetchDocDetail(N);
      h(z);
    } catch (z) {
      E(z.message || "Erro ao carregar detalhes do documento.");
    } finally {
      y(!1);
    }
  };
  O.useEffect(() => {
    C();
  }, []), O.useEffect(() => {
    r.mode === "detail" ? j(r.docId) : h(null);
  }, [r]);
  const b = o.filter(
    (N) => N.name.toLowerCase().includes(m.toLowerCase()) || N.type.toLowerCase().includes(m.toLowerCase())
  );
  return r.mode === "detail" ? d ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-slate-400 gap-2 min-h-[300px]", children: [
    /* @__PURE__ */ f.jsx(cn, { className: "w-8 h-8 animate-spin text-slate-300" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium", children: "Carregando documento..." })
  ] }) : v || !c ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-red-500 gap-2 border rounded-xl bg-white shadow-sm min-h-[300px]", children: [
    /* @__PURE__ */ f.jsx(mi, { className: "w-8 h-8" }),
    /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold", children: v || "Documento não encontrado." }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        type: "button",
        onClick: () => j(r.docId),
        className: "mt-2 text-xs bg-red-50 border border-red-200 px-3 py-1 rounded text-red-700 hover:bg-red-100",
        children: "Tentar Novamente"
      }
    ),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        type: "button",
        onClick: () => i({ mode: "list" }),
        className: "mt-1 text-xs text-slate-500 hover:underline",
        children: "Voltar para Lista"
      }
    )
  ] }) : /* @__PURE__ */ f.jsx(
    C2,
    {
      doc: c,
      onBack: () => i({ mode: "list" })
    }
  ) : /* @__PURE__ */ f.jsxs("div", { className: "space-y-6 w-full mx-auto animate-fadeIn", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border shadow-sm", children: [
      /* @__PURE__ */ f.jsx("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ f.jsx(
        om,
        {
          value: m,
          onChange: g,
          placeholder: "Filtrar por nome ou tipo..."
        }
      ) }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          onClick: C,
          disabled: s,
          className: "px-4 py-2 rounded-lg text-sm font-semibold bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5 self-end md:self-auto disabled:opacity-50",
          children: [
            /* @__PURE__ */ f.jsx(Qs, { className: `w-3.5 h-3.5 ${s ? "animate-spin" : ""}` }),
            "Recarregar"
          ]
        }
      )
    ] }),
    s ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-slate-400 gap-2 min-h-[200px]", children: [
      /* @__PURE__ */ f.jsx(cn, { className: "w-8 h-8 animate-spin text-slate-300" }),
      /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium", children: "Carregando lista de documentos..." })
    ] }) : u ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-red-500 gap-2 border rounded-xl bg-white shadow-sm min-h-[200px]", children: [
      /* @__PURE__ */ f.jsx(mi, { className: "w-8 h-8" }),
      /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold", children: u }),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          onClick: C,
          className: "mt-2 text-xs bg-red-50 border border-red-200 px-3 py-1 rounded text-red-700 hover:bg-red-100",
          children: "Tentar Novamente"
        }
      )
    ] }) : b.length === 0 ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-slate-400 gap-2 border rounded-xl bg-white shadow-sm min-h-[200px] text-center px-4", children: [
      /* @__PURE__ */ f.jsx(uy, { className: "w-8 h-8 text-slate-300" }),
      /* @__PURE__ */ f.jsx("span", { className: "text-sm font-semibold text-slate-500", children: "Nenhum documento encontrado" }),
      m && /* @__PURE__ */ f.jsx("span", { className: "text-xs text-slate-400", children: "Nenhum documento atende aos termos de filtro digitados." })
    ] }) : /* @__PURE__ */ f.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: b.map((N) => /* @__PURE__ */ f.jsxs(
      "div",
      {
        onClick: () => i({ mode: "detail", docId: N.id, docName: N.name }),
        className: "bg-white p-5 rounded-xl border shadow-sm hover:shadow-md hover:border-slate-300 cursor-pointer transition-all flex flex-col justify-between gap-4",
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: /* @__PURE__ */ f.jsx(cm, { type: N.type }) }),
            /* @__PURE__ */ f.jsx("h3", { className: "text-sm md:text-base font-bold text-slate-800 leading-snug line-clamp-2", children: N.name })
          ] }),
          /* @__PURE__ */ f.jsxs("span", { className: "text-[10px] text-slate-400 self-end", children: [
            "Atualizado ",
            pl(N.updated_at)
          ] })
        ]
      },
      N.id
    )) })
  ] });
}
const N2 = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{font-weight:400;color:var(--tw-prose-counters)}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.25em}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"“""”""‘""’";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:900;color:inherit}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:800;color:inherit}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:700;color:inherit}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:700;color:inherit}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){display:block;margin-top:2em;margin-bottom:2em}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:500;font-family:inherit;color:var(--tw-prose-kbd);box-shadow:0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows);font-size:.875em;border-radius:.3125rem;padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;padding-inline-start:.375em}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-weight:600;font-size:.875em}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:"`"}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding-top:.8571429em;padding-inline-end:1.1428571em;padding-bottom:.8571429em;padding-inline-start:1.1428571em}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:none}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){width:100%;table-layout:auto;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-inline-end:.5714286em;padding-bottom:.5714286em;padding-inline-start:.5714286em}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose{--tw-prose-body: #374151;--tw-prose-headings: #111827;--tw-prose-lead: #4b5563;--tw-prose-links: #111827;--tw-prose-bold: #111827;--tw-prose-counters: #6b7280;--tw-prose-bullets: #d1d5db;--tw-prose-hr: #e5e7eb;--tw-prose-quotes: #111827;--tw-prose-quote-borders: #e5e7eb;--tw-prose-captions: #6b7280;--tw-prose-kbd: #111827;--tw-prose-kbd-shadows: rgb(17 24 39 / 10%);--tw-prose-code: #111827;--tw-prose-pre-code: #e5e7eb;--tw-prose-pre-bg: #1f2937;--tw-prose-th-borders: #d1d5db;--tw-prose-td-borders: #e5e7eb;--tw-prose-invert-body: #d1d5db;--tw-prose-invert-headings: #fff;--tw-prose-invert-lead: #9ca3af;--tw-prose-invert-links: #fff;--tw-prose-invert-bold: #fff;--tw-prose-invert-counters: #9ca3af;--tw-prose-invert-bullets: #4b5563;--tw-prose-invert-hr: #374151;--tw-prose-invert-quotes: #f3f4f6;--tw-prose-invert-quote-borders: #374151;--tw-prose-invert-captions: #9ca3af;--tw-prose-invert-kbd: #fff;--tw-prose-invert-kbd-shadows: rgb(255 255 255 / 10%);--tw-prose-invert-code: #fff;--tw-prose-invert-pre-code: #d1d5db;--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);--tw-prose-invert-th-borders: #4b5563;--tw-prose-invert-td-borders: #374151;font-size:1rem;line-height:1.75}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.5714286em;padding-inline-end:.5714286em;padding-bottom:.5714286em;padding-inline-start:.5714286em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.7142857}.prose-sm :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.prose-sm :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.3333333em;margin-bottom:1.3333333em;padding-inline-start:1.1111111em}.prose-sm :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.prose-sm :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.prose-sm :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.prose-sm :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.prose-sm :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8571429em;border-radius:.3125rem;padding-top:.1428571em;padding-inline-end:.3571429em;padding-bottom:.1428571em;padding-inline-start:.3571429em}.prose-sm :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8571429em}.prose-sm :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.9em}.prose-sm :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8888889em}.prose-sm :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding-top:.6666667em;padding-inline-end:1em;padding-bottom:.6666667em;padding-inline-start:1em}.prose-sm :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em;margin-bottom:1.1428571em;padding-inline-start:1.5714286em}.prose-sm :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em;margin-bottom:1.1428571em;padding-inline-start:1.5714286em}.prose-sm :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.2857143em;margin-bottom:.2857143em}.prose-sm :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.4285714em}.prose-sm :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.4285714em}.prose-sm :where(.prose-sm>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm :where(.prose-sm>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em}.prose-sm :where(.prose-sm>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.1428571em}.prose-sm :where(.prose-sm>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em}.prose-sm :where(.prose-sm>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.1428571em}.prose-sm :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.1428571em}.prose-sm :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.2857143em;padding-inline-start:1.5714286em}.prose-sm :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2.8571429em;margin-bottom:2.8571429em}.prose-sm :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8571429em;line-height:1.5}.prose-sm :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:1em;padding-bottom:.6666667em;padding-inline-start:1em}.prose-sm :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.6666667em;padding-inline-end:1em;padding-bottom:.6666667em;padding-inline-start:1em}.prose-sm :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.prose-sm :where(.prose-sm>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(.prose-sm>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-4{bottom:1rem}.right-1{right:.25rem}.right-4{right:1rem}.top-1{top:.25rem}.top-4{top:1rem}.z-10{z-index:10}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-6{margin-bottom:1.5rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-full{height:100%}.max-h-\\[40vh\\]{max-height:40vh}.max-h-\\[80vh\\]{max-height:80vh}.max-h-\\[90vh\\]{max-height:90vh}.min-h-\\[200px\\]{min-height:200px}.min-h-\\[250px\\]{min-height:250px}.min-h-\\[300px\\]{min-height:300px}.w-2\\.5{width:.625rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-8{width:2rem}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[32px\\]{min-width:32px}.max-w-2xl{max-width:42rem}.max-w-md{max-width:28rem}.max-w-none{max-width:none}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-amber-200{--tw-border-opacity: 1;border-color:rgb(253 230 138 / var(--tw-border-opacity, 1))}.border-blue-200{--tw-border-opacity: 1;border-color:rgb(191 219 254 / var(--tw-border-opacity, 1))}.border-green-200{--tw-border-opacity: 1;border-color:rgb(187 247 208 / var(--tw-border-opacity, 1))}.border-green-500{--tw-border-opacity: 1;border-color:rgb(34 197 94 / var(--tw-border-opacity, 1))}.border-indigo-200{--tw-border-opacity: 1;border-color:rgb(199 210 254 / var(--tw-border-opacity, 1))}.border-orange-200{--tw-border-opacity: 1;border-color:rgb(254 215 170 / var(--tw-border-opacity, 1))}.border-orange-400{--tw-border-opacity: 1;border-color:rgb(251 146 60 / var(--tw-border-opacity, 1))}.border-orange-500{--tw-border-opacity: 1;border-color:rgb(249 115 22 / var(--tw-border-opacity, 1))}.border-purple-200{--tw-border-opacity: 1;border-color:rgb(233 213 255 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.border-slate-200{--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-slate-300{--tw-border-opacity: 1;border-color:rgb(203 213 225 / var(--tw-border-opacity, 1))}.border-slate-400{--tw-border-opacity: 1;border-color:rgb(148 163 184 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.border-yellow-500{--tw-border-opacity: 1;border-color:rgb(234 179 8 / var(--tw-border-opacity, 1))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgb(255 251 235 / var(--tw-bg-opacity, 1))}.bg-amber-500{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity, 1))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-green-50{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity, 1))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}.bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity, 1))}.bg-indigo-50{--tw-bg-opacity: 1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.bg-indigo-500{--tw-bg-opacity: 1;background-color:rgb(99 102 241 / var(--tw-bg-opacity, 1))}.bg-indigo-600{--tw-bg-opacity: 1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.bg-orange-50{--tw-bg-opacity: 1;background-color:rgb(255 247 237 / var(--tw-bg-opacity, 1))}.bg-orange-50\\/30{background-color:#fff7ed4d}.bg-purple-50{--tw-bg-opacity: 1;background-color:rgb(250 245 255 / var(--tw-bg-opacity, 1))}.bg-purple-500{--tw-bg-opacity: 1;background-color:rgb(168 85 247 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-red-50\\/30{background-color:#fef2f24d}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity, 1))}.bg-slate-100{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-slate-400{--tw-bg-opacity: 1;background-color:rgb(148 163 184 / var(--tw-bg-opacity, 1))}.bg-slate-50{--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.bg-slate-50\\/50{background-color:#f8fafc80}.bg-slate-500{--tw-bg-opacity: 1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.bg-slate-900{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity, 1))}.bg-teal-50{--tw-bg-opacity: 1;background-color:rgb(240 253 250 / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.bg-yellow-50\\/30{background-color:#fefce84d}.bg-yellow-500{--tw-bg-opacity: 1;background-color:rgb(234 179 8 / var(--tw-bg-opacity, 1))}.bg-opacity-40{--tw-bg-opacity: .4}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-indigo-500{--tw-gradient-from: #6366f1 var(--tw-gradient-from-position);--tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-indigo-600{--tw-gradient-to: #4f46e5 var(--tw-gradient-to-position)}.stroke-\\[1\\.5\\]{stroke-width:1.5}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pr-6{padding-right:1.5rem}.pr-8{padding-right:2rem}.pt-1{padding-top:.25rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[9px\\]{font-size:9px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.text-amber-700{--tw-text-opacity: 1;color:rgb(180 83 9 / var(--tw-text-opacity, 1))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity, 1))}.text-indigo-600{--tw-text-opacity: 1;color:rgb(79 70 229 / var(--tw-text-opacity, 1))}.text-indigo-700{--tw-text-opacity: 1;color:rgb(67 56 202 / var(--tw-text-opacity, 1))}.text-orange-700{--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity, 1))}.text-orange-800{--tw-text-opacity: 1;color:rgb(154 52 18 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity: 1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.text-slate-600{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.text-slate-700{--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-slate-800{--tw-text-opacity: 1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.text-teal-600{--tw-text-opacity: 1;color:rgb(13 148 136 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}:host{--snaps-primary: #6366f1;--snaps-primary-hover: #4f46e5;--snaps-bg: #ffffff;--snaps-bg-secondary: #f9fafb;--snaps-text: #1f2937;--snaps-text-secondary: #6b7280;--snaps-border: #e5e7eb;--snaps-success: #10b981;--snaps-warning: #f59e0b;--snaps-error: #ef4444;--snaps-critical: #dc2626;--snaps-font: "Inter", system-ui, sans-serif;--snaps-font-size-base: 14px;--snaps-radius: 8px;--snaps-spacing: 16px;font-family:var(--snaps-font);font-size:var(--snaps-font-size-base);color:var(--snaps-text)}@media (prefers-color-scheme: dark){.dark\\:prose-invert{--tw-prose-body: var(--tw-prose-invert-body);--tw-prose-headings: var(--tw-prose-invert-headings);--tw-prose-lead: var(--tw-prose-invert-lead);--tw-prose-links: var(--tw-prose-invert-links);--tw-prose-bold: var(--tw-prose-invert-bold);--tw-prose-counters: var(--tw-prose-invert-counters);--tw-prose-bullets: var(--tw-prose-invert-bullets);--tw-prose-hr: var(--tw-prose-invert-hr);--tw-prose-quotes: var(--tw-prose-invert-quotes);--tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);--tw-prose-captions: var(--tw-prose-invert-captions);--tw-prose-kbd: var(--tw-prose-invert-kbd);--tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);--tw-prose-code: var(--tw-prose-invert-code);--tw-prose-pre-code: var(--tw-prose-invert-pre-code);--tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);--tw-prose-th-borders: var(--tw-prose-invert-th-borders);--tw-prose-td-borders: var(--tw-prose-invert-td-borders)}}.last\\:border-b-0:last-child{border-bottom-width:0px}.checked\\:border-orange-500:checked{--tw-border-opacity: 1;border-color:rgb(249 115 22 / var(--tw-border-opacity, 1))}.checked\\:border-red-500:checked{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.checked\\:border-slate-500:checked{--tw-border-opacity: 1;border-color:rgb(100 116 139 / var(--tw-border-opacity, 1))}.checked\\:border-yellow-500:checked{--tw-border-opacity: 1;border-color:rgb(234 179 8 / var(--tw-border-opacity, 1))}.hover\\:border-slate-300:hover{--tw-border-opacity: 1;border-color:rgb(203 213 225 / var(--tw-border-opacity, 1))}.hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1))}.hover\\:bg-indigo-50:hover{--tw-bg-opacity: 1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.hover\\:bg-indigo-700:hover{--tw-bg-opacity: 1;background-color:rgb(67 56 202 / var(--tw-bg-opacity, 1))}.hover\\:bg-orange-50\\/50:hover{background-color:#fff7ed80}.hover\\:bg-red-100:hover{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.hover\\:bg-red-50\\/50:hover{background-color:#fef2f280}.hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}.hover\\:bg-slate-100:hover{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.hover\\:bg-slate-50:hover{--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.hover\\:bg-yellow-50\\/50:hover{background-color:#fefce880}.hover\\:text-indigo-600:hover{--tw-text-opacity: 1;color:rgb(79 70 229 / var(--tw-text-opacity, 1))}.hover\\:text-red-500:hover{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.hover\\:text-slate-600:hover{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.hover\\:text-slate-800:hover{--tw-text-opacity: 1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow:hover{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity, 1))}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1))}.focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity, 1))}.focus\\:ring-slate-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(100 116 139 / var(--tw-ring-opacity, 1))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-slate-100:disabled{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.disabled\\:text-slate-500:disabled{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70:disabled{opacity:.7}.disabled\\:hover\\:bg-indigo-600:hover:disabled{--tw-bg-opacity: 1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.prose-headings\\:mb-1 :is(:where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *))){margin-bottom:.25rem}.prose-headings\\:text-sm :is(:where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *))){font-size:.875rem;line-height:1.25rem}.prose-headings\\:font-semibold :is(:where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *))){font-weight:600}.prose-p\\:leading-snug :is(:where(p):not(:where([class~=not-prose],[class~=not-prose] *))){line-height:1.375}.prose-a\\:text-blue-500 :is(:where(a):not(:where([class~=not-prose],[class~=not-prose] *))){--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.hover\\:prose-a\\:text-blue-600 :is(:where(a):not(:where([class~=not-prose],[class~=not-prose] *))):hover{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.prose-img\\:max-h-64 :is(:where(img):not(:where([class~=not-prose],[class~=not-prose] *))){max-height:16rem}.prose-img\\:w-auto :is(:where(img):not(:where([class~=not-prose],[class~=not-prose] *))){width:auto}.prose-img\\:rounded-md :is(:where(img):not(:where([class~=not-prose],[class~=not-prose] *))){border-radius:.375rem}.prose-img\\:border :is(:where(img):not(:where([class~=not-prose],[class~=not-prose] *))){border-width:1px}.prose-img\\:object-contain :is(:where(img):not(:where([class~=not-prose],[class~=not-prose] *))){-o-object-fit:contain;object-fit:contain}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:col-span-2{grid-column:span 2 / span 2}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:self-auto{align-self:auto}.md\\:self-center{align-self:center}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}}@media (min-width: 1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}', j2 = N2;
function ji(e) {
  return function(n) {
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx("style", { children: j2 }),
      /* @__PURE__ */ f.jsx(e, { ...n })
    ] });
  };
}
const T2 = Si(ji(w2), {
  shadow: "open",
  props: {
    projectId: "string",
    apiKey: "string",
    apiUrl: "string",
    defaultTab: "string",
    pageSize: "number",
    appName: "string"
  }
}), z2 = Si(ji(S2), {
  shadow: "open",
  props: {
    projectId: "string",
    apiKey: "string",
    apiUrl: "string",
    showBacklog: "boolean"
  }
}), P2 = Si(ji(am), {
  shadow: "open",
  props: {
    projectId: "string",
    apiKey: "string",
    apiUrl: "string",
    appVersion: "string",
    appName: "string"
  }
}), _2 = Si(ji(um), {
  shadow: "open",
  props: {
    projectId: "string",
    apiKey: "string",
    apiUrl: "string",
    appName: "string"
  }
}), I2 = Si(ji(E2), {
  shadow: "open",
  props: {
    projectId: "string",
    apiKey: "string",
    apiUrl: "string"
  }
});
function L2() {
  typeof window < "u" && window.customElements && (window.customElements.get("snaps-support-board") || window.customElements.define("snaps-support-board", T2), window.customElements.get("snaps-roadmap-board") || window.customElements.define("snaps-roadmap-board", z2), window.customElements.get("snaps-bug-report-form") || window.customElements.define("snaps-bug-report-form", P2), window.customElements.get("snaps-feature-request-form") || window.customElements.define("snaps-feature-request-form", _2), window.customElements.get("snaps-governance-docs") || window.customElements.define("snaps-governance-docs", I2));
}
typeof window < "u" && L2();
export {
  am as BugReportForm,
  h2 as CardDetailModal,
  d2 as CardRow,
  c2 as ConfirmDialog,
  x2 as CreateCardModal,
  cm as DocTypeBadge,
  C2 as DocViewer,
  um as FeatureRequestForm,
  lm as FileUploadZone,
  E2 as GovernanceDocs,
  im as MarkdownRenderer,
  v2 as MiniCard,
  u2 as Pagination,
  k2 as ProgressBar,
  S2 as RoadmapBoard,
  om as SearchInput,
  nm as SeverityBadge,
  yr as SnapsPublicClient,
  Lp as SprintSection,
  Cu as StatusPill,
  w2 as SupportBoard,
  sm as ToastContainer,
  rm as TypeBadge,
  y2 as detectEnvironment,
  pl as formatRelativeTime,
  m2 as parseBrowser,
  g2 as parseOS,
  L2 as registerAll,
  xt as toast,
  p2 as useToasts
};
