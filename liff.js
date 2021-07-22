/*! For license information please see sdk.js.LICENSE.txt */ ! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("liff", [], t) : "object" == typeof exports ? exports.liff = t() : e.liff = t()
}(window, (function() {
  return function(e) {
    function t(t) {
      for (var n, i, o = t[0], s = t[1], a = 0, c = []; a < o.length; a++) i = o[a], Object.prototype.hasOwnProperty.call(r, i) && r[i] && c.push(r[i][0]), r[i] = 0;
      for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
      for (u && u(t); c.length;) c.shift()()
    }
    var n = {},
      r = {
        2: 0,
        1: 0
      };

    function i(t) {
      if (n[t]) return n[t].exports;
      var r = n[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function(e) {
      var t = [],
        n = r[e];
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var o = new Promise((function(t, i) {
            n = r[e] = [t, i]
          }));
          t.push(n[2] = o);
          var s, a = document.createElement("script");
          a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(e) {
            return i.p + "" + ({
              0: "js-crypto-ec",
              3: "vendors_js-crypto-ec"
            } [e] || e) + ".fd8b90bb8556b780fab0.js"
          }(e);
          var u = new Error;
          s = function(t) {
            a.onerror = a.onload = null, clearTimeout(c);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  o = t && t.target && t.target.src;
                u.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")", u.name = "ChunkLoadError", u.type = i, u.request = o, n[1](u)
              }
              r[e] = void 0
            }
          };
          var c = setTimeout((function() {
            s({
              type: "timeout",
              target: a
            })
          }), 12e4);
          a.onerror = a.onload = s, document.head.appendChild(a)
        } return Promise.all(t)
    }, i.m = e, i.c = n, i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, i.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, i.t = function(e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var r in e) i.d(n, r, function(t) {
          return e[t]
        }.bind(null, r));
      return n
    }, i.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return i.d(t, "a", t), t
    }, i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "https://static.line-scdn.net/liff/edge/2/", i.oe = function(e) {
      throw e
    };
    var o = window.webpackJsonpliff = window.webpackJsonpliff || [],
      s = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var a = 0; a < o.length; a++) t(o[a]);
    var u = s;
    return i(i.s = 10)
  }([function(e, t, n) {
    "use strict";
    t.a = function(e) {
      var t = this.constructor;
      return this.then((function(n) {
        return t.resolve(e()).then((function() {
          return n
        }))
      }), (function(n) {
        return t.resolve(e()).then((function() {
          return t.reject(n)
        }))
      }))
    }
  }, function(e, t, n) {
    "use strict";
    t.a = function(e) {
      return new this((function(t, n) {
        if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return t([]);
        var i = r.length;

        function o(e, n) {
          if (n && ("object" == typeof n || "function" == typeof n)) {
            var s = n.then;
            if ("function" == typeof s) return void s.call(n, (function(t) {
              o(e, t)
            }), (function(n) {
              r[e] = {
                status: "rejected",
                reason: n
              }, 0 == --i && t(r)
            }))
          }
          r[e] = {
            status: "fulfilled",
            value: n
          }, 0 == --i && t(r)
        }
        for (var s = 0; s < r.length; s++) o(s, r[s])
      }))
    }
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (r) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      var r = n(0),
        i = n(1),
        o = setTimeout;

      function s(e) {
        return Boolean(e && void 0 !== e.length)
      }

      function a() {}

      function u(e) {
        if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(e, this)
      }

      function c(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, u._immediateFn((function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r;
            try {
              r = n(e._value)
            } catch (i) {
              return void l(t.promise, i)
            }
            f(t.promise, r)
          } else(1 === e._state ? f : l)(t.promise, e._value)
        }))) : e._deferreds.push(t)
      }

      function f(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof u) return e._state = 3, e._value = t, void d(e);
            if ("function" == typeof n) return void p((r = n, i = t, function() {
              r.apply(i, arguments)
            }), e)
          }
          e._state = 1, e._value = t, d(e)
        } catch (o) {
          l(e, o)
        }
        var r, i
      }

      function l(e, t) {
        e._state = 2, e._value = t, d(e)
      }

      function d(e) {
        2 === e._state && 0 === e._deferreds.length && u._immediateFn((function() {
          e._handled || u._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) c(e, e._deferreds[t]);
        e._deferreds = null
      }

      function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
      }

      function p(e, t) {
        var n = !1;
        try {
          e((function(e) {
            n || (n = !0, f(t, e))
          }), (function(e) {
            n || (n = !0, l(t, e))
          }))
        } catch (r) {
          if (n) return;
          n = !0, l(t, r)
        }
      }
      u.prototype.catch = function(e) {
        return this.then(null, e)
      }, u.prototype.then = function(e, t) {
        var n = new this.constructor(a);
        return c(this, new h(e, t, n)), n
      }, u.prototype.finally = r.a, u.all = function(e) {
        return new u((function(t, n) {
          if (!s(e)) return n(new TypeError("Promise.all accepts an array"));
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          var i = r.length;

          function o(e, s) {
            try {
              if (s && ("object" == typeof s || "function" == typeof s)) {
                var a = s.then;
                if ("function" == typeof a) return void a.call(s, (function(t) {
                  o(e, t)
                }), n)
              }
              r[e] = s, 0 == --i && t(r)
            } catch (u) {
              n(u)
            }
          }
          for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
      }, u.allSettled = i.a, u.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === u ? e : new u((function(t) {
          t(e)
        }))
      }, u.reject = function(e) {
        return new u((function(t, n) {
          n(e)
        }))
      }, u.race = function(e) {
        return new u((function(t, n) {
          if (!s(e)) return n(new TypeError("Promise.race accepts an array"));
          for (var r = 0, i = e.length; r < i; r++) u.resolve(e[r]).then(t, n)
        }))
      }, u._immediateFn = "function" == typeof e && function(t) {
        e(t)
      } || function(e) {
        o(e, 0)
      }, u._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console
      }, t.a = u
    }).call(this, n(6).setImmediate)
  }, function(e, t, n) {
    var r, i, o;
    i = [], void 0 === (o = "function" == typeof(r = function() {
      var e = function e(t) {
        function n(e, t) {
          return e >>> t | e << 32 - t
        }
        for (var r, i, o = Math.pow, s = o(2, 32), a = "", u = [], c = 8 * t.length, f = e.h = e.h || [], l = e.k = e.k || [], d = l.length, h = {}, p = 2; d < 64; p++)
          if (!h[p]) {
            for (r = 0; r < 313; r += p) h[r] = p;
            f[d] = o(p, .5) * s | 0, l[d++] = o(p, 1 / 3) * s | 0
          } for (t += "Â€"; t.length % 64 - 56;) t += "\0";
        for (r = 0; r < t.length; r++) {
          if ((i = t.charCodeAt(r)) >> 8) return;
          u[r >> 2] |= i << (3 - r) % 4 * 8
        }
        for (u[u.length] = c / s | 0, u[u.length] = c, i = 0; i < u.length;) {
          var v = u.slice(i, i += 16),
            m = f;
          for (f = f.slice(0, 8), r = 0; r < 64; r++) {
            var g = v[r - 15],
              y = v[r - 2],
              w = f[0],
              b = f[4],
              I = f[7] + (n(b, 6) ^ n(b, 11) ^ n(b, 25)) + (b & f[5] ^ ~b & f[6]) + l[r] + (v[r] = r < 16 ? v[r] : v[r - 16] + (n(g, 7) ^ n(g, 18) ^ g >>> 3) + v[r - 7] + (n(y, 17) ^ n(y, 19) ^ y >>> 10) | 0);
            (f = [I + ((n(w, 2) ^ n(w, 13) ^ n(w, 22)) + (w & f[1] ^ w & f[2] ^ f[1] & f[2])) | 0].concat(f))[4] = f[4] + I | 0
          }
          for (r = 0; r < 8; r++) f[r] = f[r] + m[r] | 0
        }
        for (r = 0; r < 8; r++)
          for (i = 3; i + 1; i--) {
            var T = f[r] >> 8 * i & 255;
            a += (T < 16 ? 0 : "") + T.toString(16)
          }
        return a
      };
      return e.code = 'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};', e
    }) ? r.apply(t, i) : r) || (e.exports = o)
  }, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o
      } catch (e) {
        n = o
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        r = s
      }
    }();
    var u, c = [],
      f = !1,
      l = -1;

    function d() {
      f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && h())
    }

    function h() {
      if (!f) {
        var e = a(d);
        f = !0;
        for (var t = c.length; t;) {
          for (u = c, c = []; ++l < t;) u && u[l].run();
          l = -1, t = c.length
        }
        u = null, f = !1,
          function(e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          }(e)
      }
    }

    function p(e, t) {
      this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new p(e, t)), 1 !== c.length || f || a(h)
    }, p.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
      return []
    }, i.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function() {
      return "/"
    }, i.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function() {
      return 0
    }
  }, function(e, t, n) {
    (function(e) {
      var r = void 0 !== e && e || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;

      function o(e, t) {
        this._id = e, this._clearFn = t
      }
      t.setTimeout = function() {
        return new o(i.call(setTimeout, r, arguments), clearTimeout)
      }, t.setInterval = function() {
        return new o(i.call(setInterval, r, arguments), clearInterval)
      }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
      }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
        this._clearFn.call(r, this._id)
      }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
      }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
      }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout((function() {
          e._onTimeout && e._onTimeout()
        }), t))
      }, n(8), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(2))
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      var t = n(3),
        r = n(0),
        i = n(1),
        o = function() {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== e) return e;
          throw new Error("unable to locate global object")
        }();
      "function" != typeof o.Promise ? o.Promise = t.a : o.Promise.prototype.finally ? o.Promise.allSettled || (o.Promise.allSettled = i.a) : o.Promise.prototype.finally = r.a
    }).call(this, n(2))
  }, function(e, t, n) {
    (function(e, t) {
      ! function(e, n) {
        "use strict";
        if (!e.setImmediate) {
          var r, i, o, s, a, u = 1,
            c = {},
            f = !1,
            l = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
            t.nextTick((function() {
              p(e)
            }))
          } : ! function() {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                n = e.onmessage;
              return e.onmessage = function() {
                t = !1
              }, e.postMessage("", "*"), e.onmessage = n, t
            }
          }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
            p(e.data)
          }, r = function(e) {
            o.port2.postMessage(e)
          }) : l && "onreadystatechange" in l.createElement("script") ? (i = l.documentElement, r = function(e) {
            var t = l.createElement("script");
            t.onreadystatechange = function() {
              p(e), t.onreadystatechange = null, i.removeChild(t), t = null
            }, i.appendChild(t)
          }) : r = function(e) {
            setTimeout(p, 0, e)
          } : (s = "setImmediate$" + Math.random() + "$", a = function(t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && p(+t.data.slice(s.length))
          }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function(t) {
            e.postMessage(s + t, "*")
          }), d.setImmediate = function(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
            var i = {
              callback: e,
              args: t
            };
            return c[u] = i, r(u), u++
          }, d.clearImmediate = h
        }

        function h(e) {
          delete c[e]
        }

        function p(e) {
          if (f) setTimeout(p, 0, e);
          else {
            var t = c[e];
            if (t) {
              f = !0;
              try {
                ! function(e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n)
                  }
                }(t)
              } finally {
                h(e), f = !1
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(2), n(5))
  }, function(e, t) {
    ! function() {
      if ("function" != typeof window.CustomEvent) {
        function e(e, t) {
          var n = t || {},
            r = n.bubbles,
            i = void 0 !== r && r,
            o = n.cancelable,
            s = void 0 !== o && o,
            a = n.detail,
            u = void 0 === a ? void 0 : a,
            c = document.createEvent("CustomEvent");
          return c.initCustomEvent(e, i, s, u), c
        }
        e.prototype = Event.prototype, window.CustomEvent = e
      }
    }()
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "liff", (function() {
      return Xn
    }));
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r,
      i = "URLSearchParams" in r,
      o = "Symbol" in r && "iterator" in Symbol,
      s = "FileReader" in r && "Blob" in r && function() {
        try {
          return new Blob, !0
        } catch (e) {
          return !1
        }
      }(),
      a = "FormData" in r,
      u = "ArrayBuffer" in r;
    if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
      f = ArrayBuffer.isView || function(e) {
        return e && c.indexOf(Object.prototype.toString.call(e)) > -1
      };

    function l(e) {
      if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
      return e.toLowerCase()
    }

    function d(e) {
      return "string" != typeof e && (e = String(e)), e
    }

    function h(e) {
      var t = {
        next: function() {
          var t = e.shift();
          return {
            done: void 0 === t,
            value: t
          }
        }
      };
      return o && (t[Symbol.iterator] = function() {
        return t
      }), t
    }

    function p(e) {
      this.map = {}, e instanceof p ? e.forEach((function(e, t) {
        this.append(t, e)
      }), this) : Array.isArray(e) ? e.forEach((function(e) {
        this.append(e[0], e[1])
      }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
        this.append(t, e[t])
      }), this)
    }

    function v(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
      e.bodyUsed = !0
    }

    function m(e) {
      return new Promise((function(t, n) {
        e.onload = function() {
          t(e.result)
        }, e.onerror = function() {
          n(e.error)
        }
      }))
    }

    function g(e) {
      var t = new FileReader,
        n = m(t);
      return t.readAsArrayBuffer(e), n
    }

    function y(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer
    }

    function w() {
      return this.bodyUsed = !1, this._initBody = function(e) {
        var t;
        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && s && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = y(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || f(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "";
        var n = this.headers.get("content-type");
        n ? n.indexOf("json") >= 0 && "string" != typeof this._bodyInit && (this._bodyInit = this._bodyText) : "string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")
      }, s && (this.blob = function() {
        var e = v(this);
        if (e) return e;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]))
      }, this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          var e = v(this);
          return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
        }
        return this.blob().then(g)
      }), this.text = function() {
        var e, t, n, r = v(this);
        if (r) return r;
        if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = m(t), t.readAsText(e), n;
        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
          for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
          return n.join("")
        }(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText)
      }, a && (this.formData = function() {
        return this.text().then(T)
      }), this.json = function() {
        return this.text().then(JSON.parse)
      }, this
    }
    p.prototype.append = function(e, t) {
      e = l(e), t = d(t);
      var n = this.map[e];
      this.map[e] = n ? n + ", " + t : t
    }, p.prototype.delete = function(e) {
      delete this.map[l(e)]
    }, p.prototype.get = function(e) {
      return e = l(e), this.has(e) ? this.map[e] : null
    }, p.prototype.has = function(e) {
      return this.map.hasOwnProperty(l(e))
    }, p.prototype.set = function(e, t) {
      this.map[l(e)] = d(t)
    }, p.prototype.forEach = function(e, t) {
      for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }, p.prototype.keys = function() {
      var e = [];
      return this.forEach((function(t, n) {
        e.push(n)
      })), h(e)
    }, p.prototype.values = function() {
      var e = [];
      return this.forEach((function(t) {
        e.push(t)
      })), h(e)
    }, p.prototype.entries = function() {
      var e = [];
      return this.forEach((function(t, n) {
        e.push([n, t])
      })), h(e)
    }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
    var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function I(e, t) {
      if (!(this instanceof I)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      var n, r, i = (t = t || {}).body;
      if (e instanceof I) {
        if (e.bodyUsed) throw new TypeError("Already read");
        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
      } else this.url = String(e);
      if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), b.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
      if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
        var o = /([?&])_=[^&]*/;
        if (o.test(this.url)) this.url = this.url.replace(o, "$1_=" + (new Date).getTime());
        else {
          this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
        }
      }
    }

    function T(e) {
      var t = new FormData;
      return e.trim().split("&").forEach((function(e) {
        if (e) {
          var n = e.split("="),
            r = n.shift().replace(/\+/g, " "),
            i = n.join("=").replace(/\+/g, " ");
          t.append(decodeURIComponent(r), decodeURIComponent(i))
        }
      })), t
    }

    function _(e, t) {
      if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
    }
    I.prototype.clone = function() {
      return new I(this, {
        body: this._bodyInit
      })
    }, w.call(I.prototype), w.call(_.prototype), _.prototype.clone = function() {
      return new _(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new p(this.headers),
        url: this.url
      })
    }, _.error = function() {
      var e = new _(null, {
        status: 0,
        statusText: ""
      });
      return e.type = "error", e
    };
    var E = [301, 302, 303, 307, 308];
    _.redirect = function(e, t) {
      if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
      return new _(null, {
        status: t,
        headers: {
          location: e
        }
      })
    };
    var S = r.DOMException;
    try {
      new S
    } catch (zn) {
      (S = function(e, t) {
        this.message = e, this.name = t;
        var n = Error(e);
        this.stack = n.stack
      }).prototype = Object.create(Error.prototype), S.prototype.constructor = S
    }

    function A(e, t) {
      return new Promise((function(n, i) {
        var o = new I(e, t);
        if (o.signal && o.signal.aborted) return i(new S("Aborted", "AbortError"));
        var a = new XMLHttpRequest;

        function c() {
          a.abort()
        }
        a.onload = function() {
          var e, t, r = {
            status: a.status,
            statusText: a.statusText,
            headers: (e = a.getAllResponseHeaders() || "", t = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
              return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
            })).forEach((function(e) {
              var n = e.split(":"),
                r = n.shift().trim();
              if (r) {
                var i = n.join(":").trim();
                t.append(r, i)
              }
            })), t)
          };
          r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
          var i = "response" in a ? a.response : a.responseText;
          setTimeout((function() {
            n(new _(i, r))
          }), 0)
        }, a.onerror = function() {
          setTimeout((function() {
            i(new TypeError("Network request failed"))
          }), 0)
        }, a.ontimeout = function() {
          setTimeout((function() {
            i(new TypeError("Network request failed"))
          }), 0)
        }, a.onabort = function() {
          setTimeout((function() {
            i(new S("Aborted", "AbortError"))
          }), 0)
        }, a.open(o.method, function(e) {
          try {
            return "" === e && r.location.href ? r.location.href : e
          } catch (t) {
            return e
          }
        }(o.url), !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && (s ? a.responseType = "blob" : u && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (a.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof p ? o.headers.forEach((function(e, t) {
          a.setRequestHeader(t, e)
        })) : Object.getOwnPropertyNames(t.headers).forEach((function(e) {
          a.setRequestHeader(e, d(t.headers[e]))
        })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
          4 === a.readyState && o.signal.removeEventListener("abort", c)
        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
      }))
    }
    A.polyfill = !0, r.fetch || (r.fetch = A, r.Headers = p, r.Request = I, r.Response = _);
    n(7);
    var O, C, P = new Promise((function(e) {
      O = e
    }));

    function N() {
      if (!C) {
        var e = window.navigator.userAgent.toLowerCase();
        C = /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : "web"
      }
      return C
    }

    function k() {
      return "2.12.0"
    }
    var L = "INIT_FAILED",
      F = "LIFF_STORE",
      D = {
        ACCESS_TOKEN: "accessToken",
        ID_TOKEN: "IDToken",
        DECODED_ID_TOKEN: "decodedIDToken",
        FEATURE_TOKEN: "featureToken",
        LOGIN_TMP: "loginTmp",
        CONFIG: "config",
        CONTEXT: "context",
        EXPIRES: "expires",
        RAW_CONTEXT: "rawContext",
        CLIENT_ID: "clientId",
        IS_SUBSEQUENT_LIFF_APP: "isSubsequentLiffApp",
        MST_CHALLENGE: "mstChallenge",
        MSIT: "msit",
        MST: "mst",
        MST_VERIFIER: "mstVerifier",
        APP_DATA: "appData"
      },
      x = ["context_token", "feature_token", "access_token", "id_token", "client_id", "mst_verifier", "mst_challenge", "msit"],
      U = ["liff.ref.source", "liff.ref.medium", "liff.ref.campaign", "liff.ref.term", "liff.ref.content"];

    function j(e) {
      return void 0 === e && (e = window.navigator.userAgent), /ipad/.test(e.toLowerCase())
    }
    var R = null;

    function B() {
      var e;
      return null === R && (void 0 === e && (e = window.navigator.userAgent), R = /Line\/\d+\.\d+\.\d+ LIFF/.test(e) || function(e) {
        return void 0 === e && (e = window.navigator.userAgent), /Line\/\d+\.\d+\.\d+/.test(e)
      }() && /[#|&]access_token=/.test(location.hash) || "1" === sessionStorage.getItem(F + ":isInClient"), sessionStorage.setItem(F + ":isInClient", R ? "1" : "0")), !!R
    }
    var M = function(e, t) {
      return (M = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
    };
    var W = function() {
      return (W = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }).apply(this, arguments)
    };

    function V(e, t, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function s(e) {
          try {
            u(r.next(e))
          } catch (t) {
            o(t)
          }
        }

        function a(e) {
          try {
            u(r.throw(e))
          } catch (t) {
            o(t)
          }
        }

        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(s, a)
        }
        u((r = r.apply(e, t || [])).next())
      }))
    }

    function G(e, t) {
      var n, r, i, o, s = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function a(o) {
        return function(a) {
          return function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; s;) try {
              if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
              switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return s.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                    s = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break
                  }
                  if (6 === o[0] && s.label < i[1]) {
                    s.label = i[1], i = o;
                    break
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(o);
                    break
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue
              }
              o = t.call(e, s)
            } catch (a) {
              o = [6, a], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, a])
        }
      }
    }
    Object.create;

    function H(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          }
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function K(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
      } catch (a) {
        i = {
          error: a
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return s
    }

    function J() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(K(arguments[t]));
      return e
    }
    Object.create;
    var q, X = new Set(["400", "401", "403", "404", "429", "500"]),
      z = function(e) {
        function t(t, n) {
          var r = e.call(this, n) || this;
          return r.code = t, r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function n() {
            this.constructor = e
          }
          M(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }(t, e), t
      }(Error);

    function Z(e, t) {
      return new z(e, t || "")
    }

    function $(e) {
      return function(e, t) {
        if (!t) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
        var n = (B() ? sessionStorage : localStorage).getItem(F + ":" + t + ":" + e);
        try {
          return null === n ? null : JSON.parse(n)
        } catch (r) {
          return null
        }
      }(e, ie().liffId)
    }

    function Q(e, t) {
      var n = ie().liffId;
      if (!n) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
      (B() ? sessionStorage : localStorage).setItem(F + ":" + n + ":" + e, JSON.stringify(t))
    }

    function Y(e) {
      var t = ie().liffId;
      if (!t) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
      (B() ? sessionStorage : localStorage).removeItem(F + ":" + t + ":" + e)
    }! function(e) {
      e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR"
    }(q || (q = {}));
    var ee = new(function() {
      function e(e) {
        void 0 === e && (e = q.INFO), this.logLevel = e, this._debug = console.debug, this._info = console.info, this._warn = console.warn, this._error = console.error
      }
      return e.prototype.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel <= q.DEBUG && (e.unshift("[DEBUG]"), this._debug.apply(this, J(e)))
      }, e.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel <= q.INFO && (e.unshift("[INFO]"), this._info.apply(this, J(e)))
      }, e.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel <= q.WARN && (e.unshift("[WARN]"), this._warn.apply(this, J(e)))
      }, e.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel <= q.ERROR && (e.unshift("[ERROR]"), this._error.apply(this, J(e)))
      }, e
    }())(Number("3"));
    var te = {
        set: function(e, t, n) {
          var r = e + "=" + t;
          if (n)
            for (var i in n) {
              r += "; " + i + (n[i] ? "=" + n[i] : "")
            }
          ee.debug("set cookie", r), document.cookie = r
        },
        get: function(e) {
          var t = new RegExp("(?:(?:^|.*;\\s*)" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$");
          return document.cookie.replace(t, "$1")
        },
        remove: function(e, t) {
          var n = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          if (t)
            for (var r in t) n += "; " + r + "=" + t[r];
          document.cookie = n
        }
      },
      ne = {
        get: $,
        set: Q,
        remove: Y,
        clean: function() {
          var e;
          Object.keys(D).forEach((function(e) {
            Y(D[e])
          })), e = ie(), te.remove(F + ":" + D.EXPIRES + ":" + e.liffId, {
            path: "/"
          })
        }
      },
      re = {};

    function ie() {
      return re
    }

    function oe() {
      return $(D.LOGIN_TMP)
    }

    function se() {
      Y(D.LOGIN_TMP)
    }

    function ae() {
      return $(D.ACCESS_TOKEN)
    }

    function ue(e) {
      Q(D.ACCESS_TOKEN, e)
    }

    function ce(e) {
      Q(D.CLIENT_ID, e)
    }

    function fe() {
      return $(D.ID_TOKEN)
    }

    function le(e) {
      Q(D.ID_TOKEN, e)
    }

    function de() {
      return $(D.DECODED_ID_TOKEN)
    }

    function he(e) {
      Q(D.DECODED_ID_TOKEN, e)
    }

    function pe() {
      return $(D.FEATURE_TOKEN)
    }

    function ve(e) {
      Q(D.FEATURE_TOKEN, e)
    }

    function me() {
      return $(D.CONTEXT)
    }

    function ge(e) {
      Q(D.CONTEXT, e)
    }

    function ye() {
      return $(D.MST_CHALLENGE)
    }

    function we() {
      return $(D.MST)
    }

    function be(e) {
      Q(D.APP_DATA, e)
    }

    function Ie() {
      return !!ae()
    }

    function Te() {
      ne.clean()
    }

    function _e() {
      var e = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
      return e ? e[0].slice(5) : null
    }

    function Ee(e, t) {
      if (e === t) return 0;
      for (var n = e.split("."), r = t.split("."), i = Math.max(n.length, r.length), o = 0; o < i; o++) {
        n[o] || (n[o] = "0"), r[o] || (r[o] = "0");
        var s = parseInt(n[o]) - parseInt(r[o]);
        if (0 !== s) return s > 0 ? 1 : -1
      }
      return 0
    }
    var Se = ["subwindowOpen", "shareTargetPicker", "multipleLiffTransition", "scanCode", "getAdvertisingId", "addToHomeScreen", "bluetoothLeFunction", "skipChannelVerificationScreen"];

    function Ae(e) {
      var t, n = me();
      return null === (t = null == n ? void 0 : n.availability) || void 0 === t ? void 0 : t[e]
    }

    function Oe(e, t) {
      var n = _e();
      return !!n && (!(t && Ee(n, t) > 0) && Ee(n, e) >= 0)
    }

    function Ce(e) {
      var t = Ae(e);
      if (!t) return !1;
      var n = t.permission,
        r = t.minVer,
        i = t.unsupportedFromVer;
      return !!n && (!!B() && Oe(r, i))
    }
    var Pe = {
        shareTargetPicker: function() {
          if (!Ie()) return !1;
          var e = Ae("shareTargetPicker");
          if (!e) return !1;
          var t = e.permission,
            n = e.minVer;
          if (!t) return !1;
          if (B()) {
            var r = _e();
            return null !== r && Ee(r, n) >= 0
          }
          return !0
        },
        multipleLiffTransition: function() {
          var e = Ae("multipleLiffTransition");
          if (!e) return !1;
          var t = e.permission;
          return B() && t
        },
        subwindowOpen: function() {
          var e = Ae("subwindowOpen");
          return !(!e || !e.permission) && (!B() || Oe(e.minVer, e.unsupportedFromVer))
        },
        scanCode: function() {
          return Ce("scanCode")
        },
        getAdvertisingId: function() {
          return Ce("getAdvertisingId")
        },
        addToHomeScreen: function() {
          return Ce("addToHomeScreen")
        },
        bluetoothLeFunction: function() {
          return Ce("bluetoothLeFunction")
        },
        skipChannelVerificationScreen: function() {
          return Ce("skipChannelVerificationScreen")
        }
      },
      Ne = function(e) {
        if (!Se.includes(e)) throw Z("INVALID_ARGUMENT", "Unexpected API name.");
        var t = Pe[e];
        return !t || t()
      };
    n(9);
    var ke = {},
      Le = !1;

    function Fe(e, t) {
      Le || (Le = !0, window.addEventListener("liffEvent", (function(e) {
        e && e.detail && e.detail.type && ke[e.detail.type] && ke[e.detail.type].forEach((function(t) {
          return t(e)
        }))
      }))), ke[e] ? ke[e].push(t) : ke[e] = [t]
    }

    function De(e, t) {
      var n = ke[e];
      if (n && Array.isArray(n)) {
        var r = n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      }
    }

    function xe(e, t, n) {
      void 0 === t && (t = {}), void 0 === n && (n = "");
      var r = pe();
      if (!r) throw Z("FORBIDDEN", "Invalid featureToken for client features");
      if (!window._liff || !window._liff.postMessage) throw Z("INVALID_ARGUMENT", "postMessage is not available from client");
      ee.debug("[js postMessage to client]", e, n, t), window._liff.postMessage(e, r, n, JSON.stringify(t))
    }
    var Ue = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function je(e) {
      for (var t = "", n = 0; n < e; n++) t += Ue[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * Ue.length)];
      return t
    }

    function Re(e, t, n) {
      return void 0 === t && (t = {}), void 0 === n && (n = {
        once: !0
      }), pe() ? (n = W({
        callbackId: je(12),
        once: !0
      }, n), new Promise((function(r, i) {
        var o = function(t) {
          if (t && t.detail) {
            var s = t.detail.callbackId === n.callbackId,
              a = "string" != typeof t.detail.callbackId;
            (s || a) && (n.once && De(e, o), ee.debug("[callback detail]", t.detail), t.detail.error ? i(t.detail.error) : t.detail.data ? r(t.detail.data) : i(t.detail))
          }
          i()
        };
        Fe(e, o), xe(e, t, n.callbackId)
      }))) : Promise.reject(Z("FORBIDDEN", "Invalid featureToken for client features"))
    }

    function Be() {
      var e = _e();
      null !== e && ("ios" === N() && Ee(e, "9.19") >= 0 || "android" === N() && Ee(e, "11.6.0") >= 0) ? location.href = "liff://close" : window._liff && window._liff.postMessage ? null !== e && Ee(e, "10.15.0") >= 0 ? "ios" === N() ? window._liff.postMessage("closeWindow", "") : window._liff.postMessage("closeWindow", "", "", "") : Re("closeWindow") : window.close()
    }

    function Me(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r;
        return G(this, (function(i) {
          switch (i.label) {
            case 0:
              if (!e.ok) return [3, 4];
              i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, e.json()];
            case 2:
              return [2, i.sent()];
            case 3:
              return i.sent(), [2, e];
            case 4:
              return t = String(e.status), n = X.has(t) ? t : "UNKNOWN", [4, e.json().catch((function() {
                throw Z(n, e.statusText)
              }))];
            case 5:
              throw Z((r = i.sent()).error || n, r.error_description || r.message)
          }
        }))
      }))
    }

    function We(e) {
      var t = function(e) {
        if (e) return e;
        var t = ae();
        if (!t) throw Z("UNAUTHORIZED", "Need access_token for api call, Please login first");
        return {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + t
        }
      }(e && e.headers);
      return W(W({}, e), {
        headers: t
      })
    }

    function Ve(e, t) {
      var n;
      try {
        n = We(t)
      } catch (r) {
        return Promise.reject(r)
      }
      return fetch(e, n).then(Me)
    }

    function Ge(e, t) {
      var n;
      try {
        n = We(t)
      } catch (r) {
        return Promise.reject(r)
      }
      return fetch(e, n)
    }

    function He(e) {
      var t = e.subdomain;
      return "https://" + (void 0 === t ? "api" : t) + ".line.me/" + e.pathname
    }
    var Ke = {
      token: He({
        pathname: "oauth2/v2.1/token"
      }),
      certs: He({
        pathname: "oauth2/v2.1/certs"
      }),
      "openid-configuration": He({
        subdomain: "access",
        pathname: ".well-known/openid-configuration"
      }),
      authorize: He({
        subdomain: "access",
        pathname: "liff/v1/authorize"
      }),
      profile: He({
        pathname: "v2/profile"
      }),
      message: He({
        pathname: "message/v3/share"
      }),
      messageOTT: He({
        pathname: "message/v3/multisend?type=ott"
      }),
      friendship: He({
        pathname: "friendship/v1/status"
      }),
      shareTargetPicker: He({
        subdomain: "access",
        pathname: "oauth2/v2.1/liff/shareTargetPicker"
      }),
      shareTargetPickerOtt: He({
        pathname: "liff/v2/apps"
      }),
      shareTargetPickerResult: He({
        subdomain: "access",
        pathname: "oauth2/v2.1/liff/shareTargetPicker/result"
      }),
      apps: He({
        pathname: "liff/v2/apps"
      }),
      subWindowGetMSIT: He({
        pathname: "liff/v2/sub/msit"
      }),
      subWindowGetMSTByMSIT: He({
        pathname: "liff/v2/sub/mst"
      }),
      subWindowSubscribe: He({
        subdomain: "liff",
        pathname: "liff/v2/sub/waitResult"
      }),
      subWindowPost: He({
        pathname: "liff/v2/sub/result"
      }),
      subWindowGetAppData: He({
        pathname: "liff/v2/sub/appData"
      }),
      subWindowGetOrigin: function(e) {
        return He({
          pathname: "liff/v2/sub/" + e + "/origin"
        })
      },
      accessTokenVerify: He({
        pathname: "oauth2/v2.1/verify"
      })
    };

    function Je(e) {
      return Ke[e]
    }

    function qe() {
      return Ve(Je("profile"))
    }
    var Xe = function(e) {
      return "object" == typeof e && null !== e && function(e) {
        return "string" == typeof e || e instanceof String
      }(e.type)
    };

    function ze(e) {
      return Promise.reject(Z("INVALID_ARGUMENT", e))
    }

    function Ze(e) {
      return Object.keys(e).map((function(t) {
        var n = e[t],
          r = function(e) {
            return void 0 !== e ? encodeURIComponent(t) + "=" + encodeURIComponent(e) : encodeURIComponent(t)
          };
        return Array.isArray(n) ? n.map((function(e) {
          return r(e)
        })).join("&") : r(n)
      })).join("&")
    }

    function $e(e, t) {
      var n = Qe,
        r = K(t.split("."), 1)[0],
        i = n[t];
      i && e.removeEventListener(r, i), n[t] = null
    }
    var Qe = {},
      Ye = !1,
      et = !1;

    function tt(e, t, n, r) {
      Ye || (et = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              return e = !0, !1
            }
          });
          window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
        } catch (zn) {
          e = !1
        }
        return e
      }(), Ye = !0);
      var i = K(t.split("."), 1)[0];
      return new Promise((function(o) {
        var s = function(i) {
          o(i), n && n(i), r && r.once && $e(e, t)
        };
        Qe[t] = s, e.addEventListener(i, s, !!et && r)
      }))
    }

    function nt(e, t, n, r) {
      if (void 0 === n && (n = {}), "object" != typeof e || !e.postMessage) throw Z("INVALID_ARGUMENT", "target must be window object");
      if ("string" != typeof t) throw Z("INVALID_ARGUMENT", "keyname must be string");
      if ("object" != typeof n) throw Z("INVALID_ARGUMENT", "incorrect body format. It should be Object or Array comprised of Object");
      if (!r) throw Z("INVALID_ARGUMENT", "serverEndPointUrl isn't passed. please fill up with proper url");
      if ("*" === r) throw new Error("serverEndPointUrl doesn't allow to set '*'");
      var i = {
        name: t,
        body: n
      };
      e.postMessage(i, r)
    }

    function rt(e, t, n, r) {
      tt(e, "message." + t, function(e, t, n) {
        return function(r) {
          ee.debug("messageReceive", r), r.origin === n && r.data.name === e && t(r)
        }
      }(t, n, r))
    }
    var it = function() {
        function e() {
          this.payloadToShareTargetPicker = null, this.popupWindow = null, this.doesWaitForSubwindowResult = !1
        }
        return e.getInstance = function() {
          return e.instance ? e.instance.reset() : e.instance = new e, e.instance
        }, e.prototype.init = function(e) {
          return V(this, void 0, void 0, (function() {
            var t, n;
            return G(this, (function(r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 5, , 6]), this.liffId = e.referrer.liffId, this.doesWaitForSubwindowResult = !(!e.options || !e.options.waitForSubwindowResult), this.allowPostMessageOrigin = this.initAllowPostMessageOrigin(), this.payloadToShareTargetPicker = this.buildPayloadToShareTargetPicker(e), window.AbortController && (this.abortController = new window.AbortController), this.prepareAnotherWindow(), [4, this.initOtt()];
                case 1:
                  return r.sent(), this.initListener(), this.openAnotherWindow(), this.doesWaitForSubwindowResult ? [4, this.pollingShareResult()] : [3, 3];
                case 2:
                  return t = r.sent(), this.finalize(), [2, t];
                case 3:
                  return [2];
                case 4:
                  return [3, 6];
                case 5:
                  if (n = r.sent(), this.finalize(), "AbortError" !== n.name) throw n;
                  return [3, 6];
                case 6:
                  return [2]
              }
            }))
          }))
        }, e.prototype.resetAllVariables = function() {
          this.liffId = "", this.allowPostMessageOrigin = "", this.payloadToShareTargetPicker = null, this.ott = "", this.popupWindow = null, this.timeoutIDForHealthCheck = null, this.abortController = null, this.internalError = null, this.doesWaitForSubwindowResult = !1
        }, e.prototype.reset = function() {
          this.finalize(), this.resetAllVariables()
        }, e.prototype.finalize = function() {
          var e, t;
          this.abortController && this.abortController.abort(), B() || (e = this.timeoutIDForHealthCheck, t = this.popupWindow, $e(window, "message.receivedHealthcheck"), e && clearTimeout(e), t && !t.closed && t.close())
        }, e.prototype.buildPayloadToShareTargetPicker = function(e) {
          return {
            messages: e.messages,
            referrer: e.referrer
          }
        }, e.prototype.initAllowPostMessageOrigin = function(e) {
          return void 0 === e && (e = Je("shareTargetPicker")),
            function(e) {
              var t = e.match(/^(https?:\/\/.*?)\//);
              return t && t[1] || ""
            }(e)
        }, e.prototype.initOtt = function() {
          return V(this, void 0, void 0, (function() {
            var e, t, n;
            return G(this, (function(r) {
              switch (r.label) {
                case 0:
                  return this.abortController && (e = this.abortController.signal), t = Je("shareTargetPickerOtt") + "/" + this.liffId + "/ott", n = this, [4, Ve(t, {
                    method: "GET",
                    signal: e
                  }).then((function(e) {
                    return e.ott
                  }))];
                case 1:
                  return n.ott = r.sent(), [2]
              }
            }))
          }))
        }, e.prototype.prepareAnotherWindow = function() {
          B() || ("ios" !== N() || j() ? this.popupWindow = window.open("", "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : this.popupWindow = window.open())
        }, e.prototype.openAnotherWindow = function() {
          if (B() && this.payloadToShareTargetPicker) e = this.liffId, t = this.ott, n = this.payloadToShareTargetPicker, r = {
            liffId: e,
            ott: t,
            data: JSON.stringify(n),
            closeModals: !1
          }, location.href = "line://picker?" + Ze(r);
          else {
            if (this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3), !this.popupWindow) throw Z("CREATE_SUBWINDOW_FAILED");
            ! function(e, t, n) {
              var r = {
                liffId: t,
                ott: n
              };
              e.location.href = Je("shareTargetPicker") + "?" + Ze(r)
            }(this.popupWindow, this.liffId, this.ott)
          }
          var e, t, n, r
        }, e.prototype.initListener = function() {
          var e, t;
          B() || (e = this.onReceivedHealthcheck.bind(this), t = this.allowPostMessageOrigin, rt(window, "receivedHealthcheck", e, t))
        }, e.prototype.healthCheck = function() {
          return V(this, void 0, void 0, (function() {
            var e;
            return G(this, (function(t) {
              switch (t.label) {
                case 0:
                  if (this.popupWindow && !this.popupWindow.closed) return [3, 7];
                  if (!this.doesWaitForSubwindowResult) return [3, 5];
                  t.label = 1;
                case 1:
                  return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
                case 2:
                  return t.sent(), [3, 4];
                case 3:
                  return e = t.sent(), this.internalError = e, [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  this.finalize(), t.label = 6;
                case 6:
                  return [3, 8];
                case 7:
                  n = this.popupWindow, r = this.allowPostMessageOrigin, nt(n, "healthcheck", void 0, r), this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3), t.label = 8;
                case 8:
                  return [2]
              }
              var n, r
            }))
          }))
        }, e.prototype.onReceivedHealthcheck = function() {
          if (!this.popupWindow || !this.payloadToShareTargetPicker) throw Z("CREATE_SUBWINDOW_FAILED");
          var e, t, n;
          e = this.popupWindow, t = this.payloadToShareTargetPicker, n = this.allowPostMessageOrigin, nt(e, "ready", t, n)
        }, e.prototype.onCanceled = function() {
          return V(this, void 0, void 0, (function() {
            var e, t;
            return G(this, (function(n) {
              switch (n.label) {
                case 0:
                  if (B() || !this.ott) throw new Error("need to call with ott in client");
                  return this.abortController && (e = this.abortController.signal), t = {
                    liffId: this.liffId,
                    ott: this.ott
                  }, [4, Ve(Je("shareTargetPickerResult") + "?" + Ze(t), {
                    method: "POST",
                    signal: e,
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "result=CANCEL"
                  })];
                case 1:
                  return [2, "ok" === n.sent().status]
              }
            }))
          }))
        }, e.prototype.getShareResult = function() {
          return V(this, void 0, void 0, (function() {
            var e, t;
            return G(this, (function(n) {
              if (!this.ott) throw new Error("need to call with ott in client");
              return this.abortController && (e = this.abortController.signal), t = {
                liffId: this.liffId,
                ott: this.ott
              }, ee.debug("fetch: getShareResult"), [2, Ve(Je("shareTargetPickerResult") + "?" + Ze(t), {
                method: "GET",
                headers: {
                  Accept: "application/json"
                },
                signal: e
              })]
            }))
          }))
        }, e.isPollingTimeOut = function(e, t) {
          return (t - e) / 6e4 >= 10
        }, e.prototype.pollingShareResult = function() {
          return V(this, void 0, void 0, (function() {
            var t, n;
            return G(this, (function(r) {
              switch (r.label) {
                case 0:
                  t = Date.now(), r.label = 1;
                case 1:
                  if (e.isPollingTimeOut(t, Date.now())) return [3, 4];
                  if (this.internalError) throw this.internalError;
                  return [4, this.getShareResult()];
                case 2:
                  if ((n = r.sent()) && n.result) switch (n.result) {
                    case "SUCCESS":
                      return [2, {
                        status: "success"
                      }];
                    case "CANCEL":
                      return [2];
                    case "FAILURE":
                    default:
                      throw new Error(n.resultDescription)
                  }
                  return [4, new Promise((function(e) {
                    setTimeout(e, 500)
                  }))];
                case 3:
                  return r.sent(), [3, 1];
                case 4:
                  throw new Error("Timeout: not finished within 10min")
              }
            }))
          }))
        }, e
      }(),
      ot = function() {
        function e() {}
        return e.prototype.invoke = function() {
          return void 0 === e && (e = window.navigator.userAgent), /LIFF\/SubWindow/.test(e);
          var e
        }, e
      }(),
      st = function() {
        function e(e) {
          this.storage = e
        }
        return e.prototype.invoke = function() {
          return !!this.getInSubWindow() || !!new URLSearchParams(window.location.search).has("liff.subwindow") && (this.setInSubWindow(!0), !0)
        }, e.prototype.getInSubWindow = function() {
          var e = this.storage.getItem(F + ":" + this.getLiffId() + ":inSubWindow");
          return null !== e && JSON.parse(e)
        }, e.prototype.setInSubWindow = function(e) {
          this.storage.setItem(F + ":" + this.getLiffId() + ":inSubWindow", String(e))
        }, e.prototype.getLiffId = function() {
          var e = ie().liffId;
          if (!e) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
          return e
        }, e
      }(),
      at = new(function() {
        function e() {
          B() ? this.impl = new ot : this.impl = new st(sessionStorage)
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return "isSubWindow"
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.install = function() {
          return this.impl.invoke.bind(this.impl)
        }, e
      }()),
      ut = at.install();

    function ct() {
      return V(this, void 0, void 0, (function() {
        var e, t;
        return G(this, (function(n) {
          switch (n.label) {
            case 0:
              if (!Ie()) return [3, 6];
              n.label = 1;
            case 1:
              return n.trys.push([1, 5, , 6]), (e = de()) && e.sub ? [2, e.sub] : [3, 2];
            case 2:
              return [4, qe()];
            case 3:
              if ((t = n.sent()) && t.userId) return [2, t.userId];
              n.label = 4;
            case 4:
              return [3, 6];
            case 5:
              return n.sent(), ee.debug("can't retrieve Mid/Uid because of something wrong"), [3, 6];
            case 6:
              return [2]
          }
        }))
      }))
    }

    function ft() {
      return V(this, void 0, void 0, (function() {
        var e;
        return G(this, (function(t) {
          switch (t.label) {
            case 0:
              return [4, ct()];
            case 1:
              return (e = t.sent()) && "u" === e.substring(0, 1) ? [2, e] : [2]
          }
        }))
      }))
    }

    function lt(e) {
      var t = new URL(e),
        n = t.hash.slice(1).split("&").filter((function(e) {
          return !x.some((function(t) {
            return e.includes(t + "=")
          }))
        })).join("&");
      return t.hash = n, t.toString()
    }

    function dt(e, t) {
      if (!e) throw new Error("addParamsToUrl: invalid URL");
      var n = new URL(e);
      return Object.entries(t).forEach((function(e) {
        var t = K(e, 2),
          r = t[0],
          i = t[1];
        n.searchParams.set(r, i)
      })), n.toString()
    }

    function ht(e) {
      var t = e.match(pt());
      return t && t[1]
    }

    function pt() {
      return new RegExp("^https://liff.line.me/(\\d+-\\w+)")
    }
    var vt = function() {
      function e(e) {
        this.liffCore = e, this.utsExtra = {
          isLiffSuccessful: !1,
          isLoggedIn: !1,
          id: "",
          version: ""
        }, this.injected = !1
      }
      return Object.defineProperty(e, "CUSTOMPLACEID_INIT", {
        get: function() {
          return "liff.init"
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "CUSTOMTYPE", {
        get: function() {
          return "liffSdk"
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "GENERAL_UTS_ID", {
        get: function() {
          return "liff_general"
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "GENERAL_APP_NAME", {
        get: function() {
          return "LIFF General"
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "LiffUtsLoginStatus", {
        get: function() {
          return {
            isLoggedIn: 1,
            isLiffSuccessful: 2
          }
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "name", {
        get: function() {
          return "analytics"
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.install = function(e) {
        (0, e.addHooks)({
          startInit: this.startInit.bind(this),
          beforeInitFinished: this.beforeInitFinished.bind(this),
          beforeInitSuccess: this.beforeInitSuccess.bind(this),
          initError: this.initError.bind(this)
        })
      }, e.prototype.changeRatioToUTSFormat = function(e) {
        if (e && Number.isFinite(e)) return Math.round(100 * e)
      }, e.prototype.setExtra = function() {
        var t = this.utsExtra,
          n = t.isLiffSuccessful,
          r = t.isLoggedIn,
          i = t.id,
          o = t.version,
          s = (r ? e.LiffUtsLoginStatus.isLoggedIn : 0) | (n ? e.LiffUtsLoginStatus.isLiffSuccessful : 0);
        this.uts.setExtra("liff", {
          id: i,
          loginStatus: s,
          version: o
        })
      }, e.prototype.assignUtsExtra = function(e) {
        Object.assign(this.utsExtra, e)
      }, e.prototype.setVersion = function(e) {
        this.assignUtsExtra({
          version: e
        }), ee.debug("[LIFFUTS][SDK version] " + e), this.setExtra()
      }, e.prototype.setLiffId = function(e) {
        this.assignUtsExtra({
          id: e
        }), ee.debug("[LIFFUTS][LIFFID] " + e), this.setExtra()
      }, e.prototype.setIsLoggedIn = function(e) {
        this.assignUtsExtra({
          isLoggedIn: e
        }), ee.debug("[LIFFUTS][isLoggedIn] " + e), this.setExtra()
      }, e.prototype.sendLiffInit = function() {
        ee.debug("[LIFFUTS][sendCustom] liff.init"), this.uts.sendCustom({
          type: e.CUSTOMTYPE,
          placeId: e.CUSTOMPLACEID_INIT
        })
      }, e.prototype.setIsLiffSuccessful = function(e) {
        this.assignUtsExtra({
          isLiffSuccessful: e
        }), ee.debug("[LIFFUTS][isLiffInitSuccessful] " + e), this.setExtra()
      }, e.prototype.startInit = function(e) {
        var t = {};
        Object.keys(e).forEach((function(n) {
          if (U.includes(n)) {
            var r = e[n];
            "string" == typeof r && r && (t[n.replace(/^liff\.ref\./, "")] = r)
          }
        })), Object.keys(t).length > 0 && (this.referrer = t)
      }, e.prototype.beforeInitFinished = function() {
        return V(this, void 0, void 0, (function() {
          var t, n, r, i, o, s, a, u, c, f, l, d;
          return G(this, (function(h) {
            switch (h.label) {
              case 0:
                if (t = me(), !(n = null == t ? void 0 : t.utsTracking)) return [2];
                if ("auto" !== (r = n.mode) && "force" !== r) return [3, 6];
                ee.debug("[LIFFUTS] " + (new Date).toUTCString()), i = ie(), o = i.liffId, s = i.analytics, h.label = 1;
              case 1:
                return h.trys.push([1, 3, , 4]), a = this, [4, new Promise((function(e, t) {
                  var n = window.uts,
                    r = document.createElement("script");
                  r.type = "text/javascript", r.src = "https://static.line-scdn.net/uts/edge/4.0.0/uts.js", r.onload = function() {
                    var t = window.uts;
                    e(t), window.uts = n
                  }, r.onerror = function(e) {
                    t(e)
                  }, document.getElementsByTagName("head")[0].appendChild(r)
                }))];
              case 2:
                return a.uts = h.sent(), [3, 4];
              case 3:
                return u = h.sent(), ee.debug("[LIFFUTS] cannot load UTS, reason: " + u), [2];
              case 4:
                return c = void 0, f = void 0, "force" === r ? (c = {
                  utsId: e.GENERAL_UTS_ID,
                  appName: e.GENERAL_APP_NAME,
                  appEnv: "release"
                }, f = {
                  endpoint: "https://uts-front.line-apps.com",
                  sampleRate: this.changeRatioToUTSFormat(n.sendRatio),
                  version: "current"
                }) : (c = W(W({}, null == s ? void 0 : s.context), {
                  utsId: (null == s ? void 0 : s.context.utsId) || e.GENERAL_UTS_ID,
                  appName: (null == s ? void 0 : s.context.appName) || e.GENERAL_APP_NAME,
                  appEnv: (null == s ? void 0 : s.context.appEnv) || "release"
                }), f = W(W({
                  endpoint: "https://uts-front.line-apps.com"
                }, null == s ? void 0 : s.options), {
                  sampleRate: this.changeRatioToUTSFormat(n.sendRatio),
                  version: "current"
                })), this.uts.init(c, f), [4, ft()];
              case 5:
                (l = h.sent()) && (ee.debug("[LIFFUTS][mid] " + l), this.uts.setMid(l)), (null == t ? void 0 : t.tid) && (ee.debug("[LIFFUTS][tid] " + t.tid), this.uts.setTid(t.tid)), this.referrer && (ee.debug("liff.ref.referrer", this.referrer), this.uts.setSessionParams(this.referrer)), o && this.setLiffId(o), this.setIsLoggedIn(Ie()), this.setVersion("2.12.0"), d = lt(location.href), ee.debug("[LIFFUTS][url] " + d), this.uts.setUrl(d), this.liffCore.analytics = this.uts, this.injected = !0, h.label = 6;
              case 6:
                return [2]
            }
          }))
        }))
      }, e.prototype.beforeInitSuccess = function() {
        this.injected && (this.setIsLiffSuccessful(!0), this.sendLiffInit())
      }, e.prototype.initError = function() {
        this.injected && (this.setIsLiffSuccessful(!1), this.sendLiffInit())
      }, e
    }();
    var mt = {};

    function gt(e, t) {
      e && mt[e] && mt[e].forEach((function(e) {
        e(t)
      }))
    }
    var yt, wt, bt, It, Tt = function() {
        function e(e) {
          this.storage = e
        }
        return e.prototype.getItem = function(e) {
          return this.storage.getItem(this.getKeyPrefix() + ":" + e)
        }, e.prototype.setItem = function(e, t) {
          this.storage.setItem(this.getKeyPrefix() + ":" + e, t)
        }, e.prototype.removeItem = function(e) {
          this.storage.removeItem(this.getKeyPrefix() + ":" + e)
        }, e.prototype.clear = function() {
          this.storage.clear()
        }, e.prototype.getKeyPrefix = function() {
          return F + ":" + this.getLiffId()
        }, e.prototype.getLiffId = function() {
          var e = ie().liffId;
          if (!e) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
          return e
        }, e
      }(),
      _t = new Tt(new(function() {
        function e() {
          this.map = {}
        }
        return e.prototype.clear = function() {
          this.map = {}
        }, e.prototype.getItem = function(e) {
          var t = this.map[e];
          return void 0 === t ? null : t
        }, e.prototype.setItem = function(e, t) {
          this.map[e] = t
        }, e.prototype.removeItem = function(e) {
          delete this.map[e]
        }, e.prototype.key = function(e) {
          var t = Object.keys(this.map)[e];
          return void 0 === t ? null : t
        }, Object.defineProperty(e.prototype, "length", {
          get: function() {
            return Object.keys(this.map).length
          },
          enumerable: !0,
          configurable: !0
        }), e
      }()));

    function Et() {
      var e = _t.getItem("subWindowStatusUpdated");
      return null !== e && JSON.parse(e)
    }

    function St(e) {
      _t.setItem("subWindowStatusUpdated", String(e))
    }

    function At(e) {
      yt = e
    }

    function Ot() {
      return yt
    }

    function Ct() {
      return bt
    }
    var Pt = new Tt(sessionStorage);

    function Nt(e, t) {
      void 0 === t && (t = {});
      var n = Pt.getItem("mainWindowOrigin");
      if (!window.opener || !n) throw Z("EXCEPTION_IN_SUBWINDOW");
      var r = JSON.stringify(t);
      return window.opener.postMessage({
        status: e,
        result: r
      }, n), Promise.resolve({
        status: e,
        result: r
      })
    }

    function kt(e) {
      var t = It;
      if (e.origin === t) {
        var n = e.data;
        if (n) {
          var r, i = n.status,
            o = n.result;
          try {
            r = JSON.parse(o || "{}")
          } catch (s) {
            r = {}
          }
          switch (i) {
            case "healthCheck":
              window.clearInterval(Ct());
              break;
            case "cancel":
            case "submit":
              St(!0), window.clearInterval(Ct()), window.removeEventListener("message", kt), gt(i, r);
              break;
            default:
              ee.debug("unexpected message")
          }
        }
      }
    }

    function Lt() {
      window.clearInterval(wt), window.clearInterval(Ct()), window.removeEventListener("message", kt)
    }

    function Ft(e) {
      var t = ht(e.url);
      if (!t) return Promise.reject(Z("INVALID_ARGUMENT", "params.url must be liff url"));
      ! function() {
        Lt(), St(!1);
        var e = Ot();
        e && (e.close(), At(null))
      }();
      var n, r, i = e.url,
        o = e.appData,
        s = new URL(i);
      s.searchParams.append("liff.subwindow", "true"), s.hostname = (n = s.hostname, J([(r = K(n.split(".")))[0] + "-ext"], r.slice(1)).join("."));
      var a, u = s.toString();
      return At("ios" !== N() || j() ? window.open("", "liffsubwindow", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : window.open()), (a = t, Ve(Je("subWindowGetOrigin")(a))).then((function(e) {
        var t, n = e.origin,
          r = Ot();
        if (!r) throw Z("CREATE_SUBWINDOW_FAILED");
        ! function(e) {
          It = e
        }(n), window.addEventListener("message", kt), r.location.href = u, t = function(e, t) {
            var n = Ot(),
              r = {
                type: "healthCheck"
              };
            return t && (r.message = JSON.stringify(t)), window.setInterval((function() {
              null == n || n.postMessage(r, e)
            }), 100)
          }(n, o), bt = t,
          function(e) {
            wt = e
          }(window.setInterval((function() {
            var e = Ot();
            e && e.closed && (Lt(), At(null), !1 === Et() && (St(!0), gt("close", {})))
          }), 100))
      }))
    }

    function Dt(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r, i, o, s, a, u, c, f, l;
        return G(this, (function(d) {
          switch (d.label) {
            case 0:
              t = e.msit, n = e.mstChallenge, r = e.onSuccess, i = e.onError, o = e.reconnectCount, s = void 0 === o ? 0 : o, d.label = 1;
            case 1:
              return d.trys.push([1, 3, , 6]), [4, Ge(Je("subWindowSubscribe"), {
                method: "POST",
                body: JSON.stringify({
                  msit: t,
                  mstChallenge: n
                })
              })];
            case 2:
              return a = d.sent(), [3, 6];
            case 3:
              return d.sent(), [4, xt()];
            case 4:
              return d.sent(), [4, jt(Dt, {
                msit: t,
                mstChallenge: n,
                onSuccess: r,
                onError: i,
                reconnectCount: s += 1
              })];
            case 5:
              return d.sent(), [2];
            case 6:
              return a.status >= 500 ? [4, xt()] : [3, 9];
            case 7:
              return d.sent(), [4, jt(Dt, {
                msit: t,
                mstChallenge: n,
                onSuccess: r,
                onError: i,
                reconnectCount: s += 1
              })];
            case 8:
              return d.sent(), [3, 20];
            case 9:
              return a.status >= 400 && 500 > a.status ? [4, Ut(a)] : [3, 11];
            case 10:
              return (c = d.sent()) ? (u = c.errorDetail, i(Z("INVALID_ARGUMENT", u))) : i(Z("UNKNOWN", "Some error happened in the server")), [3, 20];
            case 11:
              return 200 !== a.status ? [3, 19] : [4, Ut(a)];
            case 12:
              return (c = d.sent()) ? [3, 13] : (i(Z("UNKNOWN", "Some error happened in the server")), [3, 18]);
            case 13:
              switch (f = c.status, l = c.result, f) {
                case "error":
                  return [3, 14];
                case "close":
                case "cancel":
                case "submit":
                  return [3, 16]
              }
              return [3, 17];
            case 14:
              return [4, jt(Dt, {
                msit: t,
                mstChallenge: n,
                onSuccess: r,
                onError: i,
                reconnectCount: s
              })];
            case 15:
              return d.sent(), [3, 18];
            case 16:
              return r(f, l), [3, 18];
            case 17:
              i(Z("UNKNOWN", "Some error happened in the server")), d.label = 18;
            case 18:
              return [3, 20];
            case 19:
              i(Z("UNKNOWN", "Some error happened in the server")), d.label = 20;
            case 20:
              return [2]
          }
        }))
      }))
    }

    function xt() {
      return new Promise((function(e) {
        return setTimeout(e, 1e3)
      }))
    }

    function Ut(e) {
      return V(this, void 0, void 0, (function() {
        return G(this, (function(t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 2, , 3]), [4, e.json()];
            case 1:
              return [2, t.sent()];
            case 2:
              return t.sent(), [2, null];
            case 3:
              return [2]
          }
        }))
      }))
    }

    function jt(e, t) {
      return V(this, void 0, void 0, (function() {
        return G(this, (function(n) {
          switch (n.label) {
            case 0:
              return t.reconnectCount >= 10 ? (t.onError(Z("UNKNOWN", "Failed to connect")), [3, 3]) : [3, 1];
            case 1:
              return [4, e(t)];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return [2]
          }
        }))
      }))
    }

    function Rt(e) {
      var t = {};
      return Object.keys(e).forEach((function(n) {
        "closeButtonColor" === n ? "white" === e[n] ? t[n] = "#ffffff" : t[n] = "#000000" : t[n] = e[n]
      })), t
    }
    var Bt = {
      height: "full",
      closeButtonPosition: "right",
      closeButtonColor: "black",
      closeButtonLabel: ""
    };

    function Mt(e) {
      var t = e.appData,
        n = e.native,
        r = ie().liffId,
        i = ye(),
        o = ht(e.url);
      if (!r) return Promise.reject(Z("UNAUTHORIZED", "liffId is invalid"));
      if (!i) return Promise.reject(Z("UNAUTHORIZED", "mst_challenge is invalid"));
      if (!o) return Promise.reject(Z("INVALID_ARGUMENT", "params.url must be liff url"));
      var s = Object.assign({}, Bt, n);
      return function(e) {
        var t = e.mainLiffId,
          n = e.subLiffId,
          r = e.mstChallenge,
          i = e.appData,
          o = e.view;
        return t && r ? Ve(Je("subWindowGetMSIT"), {
          method: "POST",
          body: JSON.stringify({
            mainLiffId: t,
            subLiffId: n,
            mstChallenge: r,
            appData: i,
            view: o
          })
        }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"))
      }({
        mainLiffId: r,
        subLiffId: o,
        mstChallenge: i,
        appData: t,
        view: Rt(s)
      }).then((function(t) {
        var n = t.msit;
        Dt({
            msit: n,
            mstChallenge: i,
            onSuccess: function(e, t) {
              gt(e, t)
            },
            onError: function(e) {
              gt("error", e)
            }
          }),
          function(e, t) {
            var n = e.url,
              r = new URLSearchParams;
            r.set("msit", t), location.href = "liff://subwindow?url=" + encodeURIComponent(n) + "&" + r.toString()
          }(e, n)
      }))
    }

    function Wt() {
      if (!ut()) throw Z("UNAUTHORIZED", "this api can be only called in child window")
    }

    function Vt(e) {
      if (!e.mst || !e.status) return Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"));
      var t = JSON.stringify(e);
      return Ve(Je("subWindowPost"), {
        method: "POST",
        body: t
      })
    }

    function Gt() {
      var e, t = $(D.APP_DATA);
      try {
        e = t ? JSON.parse(t) : {}
      } catch (n) {
        e = {}
      }
      return Promise.resolve(e)
    }
    var Ht = {
        on: function(e, t) {
          mt[e] || (mt[e] = []), mt[e].push(t)
        },
        off: function(e, t) {
          if (mt[e]) {
            var n = mt[e].indexOf(t);
            n >= 0 && mt[e].splice(n, 1)
          }
        },
        open: function(e) {
          if (!Ne("subwindowOpen")) throw Z("FORBIDDEN", "No permission for liff.subWindow.open()");
          return function() {
            if (ut()) throw Z("UNAUTHORIZED", "this api can be only called in parent window")
          }(), B() ? Mt(e) : Ft(e)
        },
        cancel: function(e) {
          return void 0 === e && (e = {}), Wt(), B() ? function(e) {
            return void 0 === e && (e = {}), V(this, void 0, void 0, (function() {
              var t, n;
              return G(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return (t = we()) ? [4, Vt({
                      mst: t,
                      status: "cancel",
                      result: e
                    })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                  case 1:
                    return n = r.sent(), St(!0), [2, n]
                }
              }))
            }))
          }(e) : function(e) {
            return void 0 === e && (e = {}), Nt("cancel", e)
          }(e)
        },
        submit: function(e) {
          return void 0 === e && (e = {}), Wt(), B() ? function(e) {
            return void 0 === e && (e = {}), V(this, void 0, void 0, (function() {
              var t, n;
              return G(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return (t = we()) ? [4, Vt({
                      mst: t,
                      status: "submit",
                      result: e
                    })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                  case 1:
                    return n = r.sent(), St(!0), [2, n]
                }
              }))
            }))
          }(e) : function(e) {
            return void 0 === e && (e = {}), Nt("submit", e)
          }(e)
        },
        close: function() {
          return Wt(), B() ? function() {
            return V(this, void 0, void 0, (function() {
              var e;
              return G(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return !1 !== Et() ? [3, 2] : (e = we()) ? [4, Vt({
                      mst: e,
                      status: "close",
                      result: {}
                    })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                  case 1:
                    t.sent(), t.label = 2;
                  case 2:
                    return Be(), [2]
                }
              }))
            }))
          }() : (Be(), Promise.resolve())
        },
        getAppData: function() {
          return Wt(), Gt()
        }
      },
      Kt = function() {
        function e() {
          this.modules = new Set, this.hooksSet = new Set
        }
        return e.prototype.addHooks = function(e) {
          this.hooksSet.add(e)
        }, e.prototype.addModule = function(e) {
          this.modules.add(e)
        }, e.prototype.hasModule = function(e) {
          return this.modules.has(e)
        }, e.prototype.runHook = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return V(this, void 0, void 0, (function() {
            var n, r, i, o, s, a, u;
            return G(this, (function(c) {
              switch (c.label) {
                case 0:
                  n = [];
                  try {
                    for (r = H(this.hooksSet), i = r.next(); !i.done; i = r.next()) o = i.value, "function" == typeof(s = o[e]) && n.push(s.apply(void 0, J(t)))
                  } catch (f) {
                    a = {
                      error: f
                    }
                  } finally {
                    try {
                      i && !i.done && (u = r.return) && u.call(r)
                    } finally {
                      if (a) throw a.error
                    }
                  }
                  return [4, Promise.all(n)];
                case 1:
                  return c.sent(), [2]
              }
            }))
          }))
        }, e.prototype.runSyncHook = function(e) {
          for (var t, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
          try {
            for (var o = H(this.hooksSet), s = o.next(); !s.done; s = o.next()) {
              var a = s.value,
                u = a[e];
              "function" == typeof u && u.apply(void 0, J(r))
            }
          } catch (c) {
            t = {
              error: c
            }
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o)
            } finally {
              if (t) throw t.error
            }
          }
        }, e
      }(),
      Jt = function(e) {
        var t = this;
        this.driver = e, this.addHooks = function(e) {
          t.driver.addHooks(e)
        }
      },
      qt = function() {
        function e(e, t) {
          this.driver = e, this.option = t
        }
        return e.prototype.install = function(e) {
          return this.factory(this.driver, e)
        }, Object.defineProperty(e.prototype, "name", {
          get: function() {
            return "use"
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "defaultOption", {
          get: function() {
            return {
              namespacePrefix: "$"
            }
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.factory = function(e, t) {
          var n = Object.assign({}, this.defaultOption, this.option).namespacePrefix;
          return function(r, i) {
            if (e.hasModule(r)) return this;
            if (!r || "function" != typeof r.install || "string" != typeof r.name) return ee.warn("To install the plugin, you need to define the `name` property and the `install` method."), this;
            var o = "" + n + r.name,
              s = r.install.call(r, t, i);
            return this["" + o] ? (ee.warn("There is a duplicate plugin name. `" + r.name + "` plugin namespace will be override."), this["" + o] = s) : void 0 !== s && (this["" + o] = s), e.addModule(r), this
          }
        }, e
      }();

    function Xt(e) {
      var t = e.replace("#", "").match(/.{2}/g) || [];
      if (4 !== t.length) return ee.warn("convertArgbToRgba: Received invalid ARGB color"), "";
      var n = function(e) {
        var t = zt(e);
        return Math.round(t / 255 * 100) / 100
      }(t[0]);
      return "rgba(" + zt(t[1]) + ", " + zt(t[2]) + ", " + zt(t[3]) + ", " + n + ")"
    }

    function zt(e) {
      return parseInt(e, 16)
    }

    function Zt(e) {
      var t = e.replace("#", "").match(/.{2}/g) || [];
      return 3 !== t.length ? (ee.warn("convertArgbToRgba: Received invalid hex color"), "") : zt(t[0]) + ", " + zt(t[1]) + ", " + zt(t[2])
    }
    var $t = {
        iconColor: "#111111",
        statusBarColor: "BLACK",
        titleTextColor: "#111111",
        titleSubtextColor: "#B7B7B7",
        titleButtonColor: "#111111",
        titleBackgroundColor: "#FFFFFF",
        progressBarColor: "#06C755",
        progressBackgroundColor: "#FFFFFF",
        titleButtonAreaBackgroundColor: "#1FFFFFFF",
        titleButtonAreaBorderColor: "#26000000",
        baseBackgroundColor: "#FFFFFF",
        baseTextColor: "#000000",
        lightButtonBorderColor: "rgba(0, 0, 0, 0.15)"
      },
      Qt = {
        iconColor: "#FFFFFF",
        statusBarColor: "WHITE",
        titleTextColor: "#FFFFFF",
        titleSubtextColor: "#949494",
        titleButtonColor: "#FFFFFF",
        titleBackgroundColor: "#111111",
        progressBarColor: "#06C755",
        progressBackgroundColor: "#111111",
        titleButtonAreaBackgroundColor: "#1FFFFFFF",
        titleButtonAreaBorderColor: "#26000000",
        baseBackgroundColor: "#000000",
        baseTextColor: "#FFFFFF",
        lightButtonBorderColor: "rgba(255, 255, 255, 0.5)"
      };

    function Yt() {
      var e;
      nn("color-scheme", ((null == (e = me()) ? void 0 : e.menuColorSetting) || {
        adaptableColorSchemes: ["light"]
      }).adaptableColorSchemes.join(" "));
      var t = window.matchMedia("(prefers-color-scheme: dark)");
      en({
        matches: null == t ? void 0 : t.matches,
        media: null == t ? void 0 : t.media
      }), t.addEventListener ? t.addEventListener("change", en) : t.addListener && t.addListener(en)
    }

    function en(e) {
      var t = me(),
        n = (null == t ? void 0 : t.menuColorSetting) || {
          adaptableColorSchemes: ["light"],
          lightModeColor: $t,
          darkModeColor: Qt
        },
        r = n.adaptableColorSchemes,
        i = n.lightModeColor,
        o = n.darkModeColor,
        s = r.includes("dark");
      e.matches && s ? tn(W(W({}, Qt), o)) : tn(W(W({}, $t), i))
    }

    function tn(e) {
      var t = e.iconColor,
        n = e.statusBarColor,
        r = e.titleTextColor,
        i = e.titleSubtextColor,
        o = e.titleButtonColor,
        s = e.titleBackgroundColor,
        a = e.progressBarColor,
        u = e.progressBackgroundColor,
        c = e.titleButtonAreaBackgroundColor,
        f = e.titleButtonAreaBorderColor,
        l = e.baseBackgroundColor,
        d = e.baseTextColor,
        h = e.lightButtonBorderColor;
      nn("--liff-base-background-color", l), nn("--liff-base-text-color", d), nn("--liff-base-background-rgb-color", Zt(l)), nn("--liff-base-text-rgb-color", Zt(d)), nn("--liff-light-button-border-color", h), nn("--liff-title-text-color", r), nn("--liff-title-background-color", s), nn("--liff-title-button-color", o), nn("--liff-icon-color", t), nn("--liff-status-bar-color", n), nn("--liff-title-subtext-color", i), nn("--liff-progress-bar-color", a), nn("--liff-progress-background-color", u), nn("--liff-title-button-area-background-color", Xt(c)), nn("--liff-title-button-area-border-color", Xt(f))
    }

    function nn(e, t) {
      document.documentElement.style.setProperty(e, t)
    }

    function rn() {
      var e;
      return "ios" === N() ? (e = _e()) && Ee(e, "9.19.0") < 0 ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js" : "https://static.line-scdn.net/liff/edge/2/ios-extensions.js" : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js"
    }

    function on() {
      return V(this, void 0, void 0, (function() {
        return G(this, (function(e) {
          switch (e.label) {
            case 0:
              return [3, 2];
            case 1:
              return [2, e.sent().default];
            case 2:
              return [2, new Promise((function(e, t) {
                var n = document.createElement("script"),
                  r = rn();
                n.onload = function() {
                  var n = window.liffClientExtension;
                  n ? e(n) : t(Z(L, "Unable to load client features. (Extension is empty)"))
                }, n.onerror = function() {
                  t(Z(L, "Unable to load client features."))
                }, n.src = r, n.type = "text/javascript", document.body.appendChild(n)
              }))]
          }
        }))
      }))
    }

    function sn(e) {
      return V(this, void 0, void 0, (function() {
        var t;
        return G(this, (function(n) {
          switch (n.label) {
            case 0:
              return [4, on()];
            case 1:
              return t = n.sent(),
                function(e) {
                  window && !window.liff && (window.liff = e)
                }(e), t.install(e), [2]
          }
        }))
      }))
    }

    function an() {
      var e;
      return !(e = ie(), te.get(F + ":" + D.EXPIRES + ":" + e.liffId))
    }
    var un = {
      parse: function(e) {
        return e.replace(/^\?/, "").replace(/^#\/?/, "").split(/&+/).filter((function(e) {
          return e.length > 0
        })).reduce((function(e, t) {
          var n = K(t.split("=").map(decodeURIComponent), 2),
            r = n[0],
            i = n[1],
            o = e[r];
          return Array.isArray(o) ? o.push(i) : Object.prototype.hasOwnProperty.call(e, r) ? e[r] = [o, i] : e[r] = i, e
        }), {})
      },
      stringify: Ze
    };

    function cn(e) {
      var t = e.split(".");
      if (t[1]) try {
        var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(window.atob(n))
      } catch (r) {
        return null
      }
      return null
    }

    function fn(e) {
      return window.atob(e.replace(/-/g, "+").replace(/_/g, "/"))
    }

    function ln(e) {
      for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), i = 0; i < t; i++) r[i] = e.charCodeAt(i);
      return n
    }
    var dn = function() {
        return V(this, void 0, void 0, (function() {
          return G(this, (function(e) {
            switch (e.label) {
              case 0:
                return [4, Ve(Je("certs"))];
              case 1:
                return [2, e.sent()]
            }
          }))
        }))
      },
      hn = function() {
        return "ios" === N() && (null !== (e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && parseInt(e[1], 1000) <= 1000);
        var e
      };

    function pn(e, t, r) {
      return V(this, void 0, void 0, (function() {
        var i, o, s, a;
        return G(this, (function(u) {
          switch (u.label) {
            case 0:
              return hn() ? [4, Promise.all([n.e(3), n.e(0)]).then(n.t.bind(null, 282, 7))] : [3, 2];
            case 1:
              return o = u.sent(), s = o.default, i = s.verify(t, r, e, "SHA-256", "raw"), [3, 5];
            case 2:
              return [4, crypto.subtle.importKey("jwk", e, {
                name: "ECDSA",
                namedCurve: "P-256"
              }, !1, ["verify"])];
            case 3:
              return a = u.sent(), [4, crypto.subtle.verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, a, r, t)];
            case 4:
              i = u.sent(), u.label = 5;
            case 5:
              return [2, i]
          }
        }))
      }))
    }

    function vn(e, t) {
      return V(this, void 0, void 0, (function() {
        var n, r, i, o, s, a, u, c, f, l, d, h, p, v, m;
        return G(this, (function(g) {
          switch (g.label) {
            case 0:
              return n = e.split("."), r = K(n, 3), i = r[0], o = r[1], s = r[2], a = JSON.parse(fn(i)), u = JSON.parse((y = fn(o).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
              })).join(""), decodeURIComponent(y))), c = ln(fn(s)), f = ln(i + "." + o), [4, dn()];
            case 1:
              if (l = g.sent(), !(d = l.keys.find((function(e) {
                  return e.kid === a.kid
                })))) return [3, 6];
              if (delete d.alg, "ES256" !== a.alg) throw Z("INVALID_ID_TOKEN", 'Invalid "alg" value in ID_TOKEN');
              h = void 0, g.label = 2;
            case 2:
              return g.trys.push([2, 4, , 5]), [4, pn(d, f, c)];
            case 3:
              return h = g.sent(), [3, 5];
            case 4:
              throw Z("INVALID_ID_TOKEN", "Failed to use Crypto API to verify ID_TOKEN: " + g.sent());
            case 5:
              if (h) {
                if (p = "https://access.line.me" !== u.iss, v = u.aud !== t, m = 1e3 * u.exp < Date.now(), p) throw Z("INVALID_ID_TOKEN", 'Invalid "iss" value in ID_TOKEN');
                if (v) throw Z("INVALID_ID_TOKEN", 'Invalid "aud" value in ID_TOKEN');
                if (m) throw Z("INVALID_ID_TOKEN", 'Invalid "exp" value in ID_TOKEN');
                return [2, u]
              }
              throw Z("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
            case 6:
              throw Z("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
            case 7:
              return [2]
          }
          var y
        }))
      }))
    }

    function mn(e) {
      var t = e.pathname,
        n = e.query,
        r = "liff://" + t + (n ? "?" + Ze(n) : "");
      location.href = r
    }
    var gn = null;

    function yn() {
      return !!Boolean($(D.IS_SUBSEQUENT_LIFF_APP)) || !(!B() || un.parse(window.location.hash).feature_token || pe()) && (Q(D.IS_SUBSEQUENT_LIFF_APP, !0), !0)
    }

    function wn() {
      return Boolean(gn)
    }

    function bn(e) {
      var t = e.msit,
        n = e.mstVerifier;
      return t && n ? Ve(Je("subWindowGetMSTByMSIT"), {
        method: "POST",
        body: JSON.stringify({
          msit: t,
          mstVerifier: n
        })
      }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"))
    }

    function In(e, t) {
      return V(this, void 0, void 0, (function() {
        var n;
        return G(this, (function(r) {
          switch (r.label) {
            case 0:
              return (n = we()) ? [2, n] : e && t ? [4, bn({
                msit: e,
                mstVerifier: t
              })] : [3, 2];
            case 1:
              return [2, r.sent().mst];
            case 2:
              return [2, null]
          }
        }))
      }))
    }

    function Tn(e) {
      var t = e.match(/([^-]+)-[^-]+/);
      return t && t[1]
    }

    function _n(e) {
      return Ve(Je("apps") + "/" + e + "/featureToken")
    }

    function En(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r, i, o, s, a;
        return G(this, (function(u) {
          switch (u.label) {
            case 0:
              return t = un.parse(window.location.hash), n = function(e) {
                for (var t, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                var o = function(t) {
                  Object.keys(t).filter((function(e) {
                    return null !== t[e] && void 0 !== t[e]
                  })).forEach((function(n) {
                    e[n] = t[n]
                  }))
                };
                try {
                  for (var s = H(r), a = s.next(); !a.done; a = s.next()) {
                    var u = a.value;
                    o(u)
                  }
                } catch (c) {
                  t = {
                    error: c
                  }
                } finally {
                  try {
                    a && !a.done && (n = s.return) && n.call(s)
                  } finally {
                    if (t) throw t.error
                  }
                }
                return e
              }({
                access_token: ae(),
                context_token: $(D.RAW_CONTEXT),
                feature_token: pe(),
                id_token: fe(),
                client_id: $(D.CLIENT_ID),
                mst_challenge: ye(),
                mst_verifier: $(D.MST_VERIFIER),
                msit: $(D.MSIT)
              }, t), wn() ? Ie() ? [4, _n(e)] : [3, 2] : [3, 3];
            case 1:
              i = u.sent(), o = i.featureToken, s = i.features, r = s, n.feature_token || (n.feature_token = o), u.label = 2;
            case 2:
              (a = Tn(e)) && (n.client_id = a), u.label = 3;
            case 3:
              return [2, {
                credentials: n,
                features: r
              }]
          }
        }))
      }))
    }

    function Sn(e) {
      if (e.persisted && Ne("multipleLiffTransition"))
        if ("ios" === N()) window.location.reload();
        else {
          var t = ie().liffId,
            n = pe();
          if (!t) throw Z(L, "Invalid LIFF ID.");
          if (!n) throw Z("FORBIDDEN", "Invalid featureToken for client features");
          mn({
            pathname: "app/" + t,
            query: {
              feature_token: n
            }
          })
        }
    }

    function An(e) {
      var t = e.mst;
      return t ? Ve(Je("subWindowGetAppData"), {
        method: "POST",
        body: JSON.stringify({
          mst: t
        })
      }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"))
    }

    function On(e) {
      return Ve(Je("accessTokenVerify") + "?access_token=" + encodeURIComponent(e), {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
    }

    function Cn(e, t) {
      return V(this, void 0, void 0, (function() {
        var n, r;
        return G(this, (function(i) {
          switch (i.label) {
            case 0:
              return [4, On(e)];
            case 1:
              return n = i.sent().client_id, r = Tn(t), [2, n === r]
          }
        }))
      }))
    }

    function Pn(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r, i, o, s, a, u, c, f, l, d, h;
        return G(this, (function(p) {
          switch (p.label) {
            case 0:
              return [4, new Promise((function(e) {
                var t = _e();
                if (!t || Ee(t, "9.5.0") < 0) e();
                else if (window._liff && window._liff.features) e();
                else {
                  ee.debug("cannot find window._liff.features, listen to ready event");
                  var n = function() {
                    ee.debug("ready event is fired"), De("ready", n), e()
                  };
                  Fe("ready", n)
                }
              }))];
            case 1:
              return p.sent(), "boolean" == typeof gn && ee.warn("liff.init is not expected to be called more than once"), gn = yn(), [4, En(e.liffId)];
            case 2:
              return t = p.sent().credentials, n = t.access_token, r = t.context_token, i = t.feature_token, o = t.id_token, s = t.client_id, a = t.mst_verifier, u = t.mst_challenge, c = t.msit, !ut() && i && (! function(e, t) {
                Ne("multipleLiffTransition") && mn({
                  pathname: "app/" + e,
                  query: {
                    feature_token: t
                  }
                })
              }(e.liffId, i), wn() && ve(i)), r && ge(cn(r)), u && Q(D.MST_CHALLENGE, u), a && function(e) {
                Q(D.MST_VERIFIER, e)
              }(a), s && ce(s), c && function(e) {
                Q(D.MSIT, e)
              }(c), window.addEventListener("pageshow", Sn), Ie() ? [3, 7] : i && n ? [3, 5] : wn() ? (f = dt(location.href, {
                "liff.hback": "2"
              }), Xn.login({
                redirectUri: f
              }), [4, new Promise((function() {}))]) : [3, 4];
            case 3:
              p.sent(), p.label = 4;
            case 4:
              throw Xn.login(), Z(L, "Failed to parse feature_token or access_token");
            case 5:
              return [4, Cn(n, e.liffId)];
            case 6:
              if (!p.sent()) throw Xn.login(), Z(L, "Failed to verify access_token");
              ve(i), ue(n), p.label = 7;
            case 7:
              return [4, In(c, a)];
            case 8:
              return (l = p.sent()) ? (function(e) {
                Q(D.MST, e)
              }(l), [4, An({
                mst: l
              })]) : [3, 10];
            case 9:
              (d = p.sent().data) && be(JSON.stringify(d)), p.label = 10;
            case 10:
              return o && !fe() && le(o), o && s && !de() ? [4, vn(o, s)] : [3, 12];
            case 11:
              (h = p.sent()) && he(h), p.label = 12;
            case 12:
              return [2]
          }
        }))
      }))
    }

    function Nn(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r, i, o, s, a;
        return G(this, (function(u) {
          switch (u.label) {
            case 0:
              return t = Je("apps"), n = t + "/" + e + "/contextToken", r = ae(), i = {
                "Content-Type": "application/json",
                Accept: "application/json"
              }, r && (i.Authorization = "Bearer " + r), [4, Ve(n, {
                headers: i
              })];
            case 1:
              if (o = u.sent(), !(s = o.contextToken)) throw Z(L, "Can not get context from server.");
              if (!(a = cn(s))) throw Z(L, "Invalid context token.");
              return [2, a]
          }
        }))
      }))
    }

    function kn() {
      return V(this, void 0, void 0, (function() {
        var e;
        return G(this, (function(t) {
          switch (t.label) {
            case 0:
              if (!(e = ie().liffId)) throw Z(L, "Invalid LIFF ID.");
              return [4, Nn(e)];
            case 1:
              return ge(t.sent()), [2]
          }
        }))
      }))
    }

    function Ln(e) {
      return V(this, void 0, void 0, (function() {
        var t, n, r, i = this;
        return G(this, (function(o) {
          switch (o.label) {
            case 0:
              t = function() {
                return V(i, void 0, void 0, (function() {
                  var t, n, r, i, o, s;
                  return G(this, (function(a) {
                    switch (a.label) {
                      case 0:
                        return [4, (u = ie(), c = un.parse(window.location.search), f = oe(), l = {
                          grant_type: "authorization_code",
                          client_id: c.liffClientId,
                          appId: u.liffId,
                          code: c.code,
                          code_verifier: f.codeVerifier,
                          redirect_uri: u.redirectUri || c.liffRedirectUri,
                          id_token_key_type: "JWK"
                        }, d = un.stringify(l), Ve(Je("token"), {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                          },
                          body: d
                        }))];
                      case 1:
                        return t = a.sent(), n = t.access_token, r = t.id_token, i = t.expires_in, ce(e), ue(n),
                          function(e) {
                            var t = ie();
                            te.set(F + ":" + D.EXPIRES + ":" + t.liffId, e.getTime(), {
                              expires: e.toUTCString(),
                              path: "/",
                              secure: null
                            })
                          }(new Date(Date.now() + 1e3 * i)), se(), r ? (le(r), [4, vn(r, e)]) : [3, 3];
                      case 2:
                        (o = a.sent()) && he(o), a.label = 3;
                      case 3:
                        return (s = un.parse(location.hash).context_token) ? (ge(cn(s)), [3, 6]) : [3, 4];
                      case 4:
                        return [4, kn()];
                      case 5:
                        a.sent(), a.label = 6;
                      case 6:
                        return [2]
                    }
                    var u, c, f, l, d
                  }))
                }))
              }, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, t()];
            case 2:
              return o.sent(), [3, 4];
            case 3:
              throw n = o.sent(), r = n, se(), r;
            case 4:
              return [2]
          }
        }))
      }))
    }

    function Fn(e) {
      var t = e.data,
        n = e.source,
        r = e.origin;
      if (t) {
        var i = t.type,
          o = t.message;
        "healthCheck" === i && (window.removeEventListener("message", Fn), o && be(o), function(e) {
          Pt.setItem("mainWindowOrigin", e)
        }(r), n && n.postMessage && n.postMessage({
          status: "healthCheck"
        }, r))
      }
    }

    function Dn(e, t) {
      return V(this, void 0, void 0, (function() {
        var n;
        return G(this, (function(r) {
          switch (r.label) {
            case 0:
              if (!e.liffId) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
              return re = e, !B() && Ie() && an() && Te(), n = un.parse(window.location.search), [4, t.runHook("startInit", n)];
            case 1:
              if (r.sent(), ut() && !B() && (window.removeEventListener("message", Fn), window.addEventListener("message", Fn)), n.error && n.liffOAuth2Error) throw u = n.error, c = n.error_description, f = c.replace(/\+/g, " "), Z(L, u + ": " + f);
              return s = n.code, a = oe(), Boolean(s && !Ie() && a && a.codeVerifier) ? [4, Ln(n.liffClientId)] : [3, 3];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return B() ? [4, Pn(e)] : [3, 5];
            case 4:
              return r.sent(), [3, 7];
            case 5:
              return Ie() ? [3, 7] : [4, kn()];
            case 6:
              r.sent(), r.label = 7;
            case 7:
              return [4, t.runHook("beforeInitFinished")];
            case 8:
              return r.sent(), i = window.location.href, o = lt(i), window.history.replaceState(history.state, "", o), [2]
          }
          var i, o, s, a, u, c, f
        }))
      }))
    }
    var xn = function() {
        function e(e, t) {
          this.liffCore = e, this.moduleDriver = t
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return "init"
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.install = function() {
          return this.init.bind(this)
        }, e.prototype.init = function(e, t, n) {
          return V(this, void 0, void 0, (function() {
            var r;
            return G(this, (function(i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 3, , 5]), [4, Promise.all([sn(this.liffCore), Dn(e, this.moduleDriver)])];
                case 1:
                  return i.sent(), [4, this.moduleDriver.runHook("beforeInitSuccess")];
                case 2:
                  return i.sent(), Yt(), "function" == typeof t && t(), O(), [3, 5];
                case 3:
                  return r = i.sent(), [4, this.moduleDriver.runHook("initError", r)];
                case 4:
                  throw i.sent(), "function" == typeof n && n(r), r;
                case 5:
                  return [2]
              }
            }))
          }))
        }, e
      }(),
      Un = new(function() {
        function e() {
          var e = this;
          this.extraParams = "", this.getAndValidateContext = function() {
            var e = me();
            if (!e) throw Z(L, "Could not get Context from server.");
            if (!e.endpointUrl) throw Z(L, "Could not get endpointUrl from server.");
            if (!e.permanentLinkPattern) throw Z(L, "Could not get permanentLinkPattern from server.");
            return e
          }, this.createUrl = function() {
            var t = e.getAndValidateContext(),
              n = window.location,
              r = n.pathname,
              i = n.search,
              o = n.hash,
              s = n.origin,
              a = new URL(t.endpointUrl);
            if (a.origin !== s || !e.isAncestor(a.pathname, r)) throw Z("INVALID_CONFIG", "Current page is not under entrypoint.");
            var u = r.substring(a.pathname.length);
            u.length > 0 && "/" !== u[0] && (u = "/" + u);
            var c = new RegExp("^" + x.join("|")),
              f = o.substring(1).split("&").filter((function(e) {
                return !c.test(e) && Boolean(e)
              })).join("&"),
              l = f === a.hash.substring(1) ? "" : f,
              d = function(e) {
                return e.substring(1).split("&").filter((function(e) {
                  return !/liff\.state/.test(e) && Boolean(e)
                }))
              },
              h = d(i),
              p = d(a.search);
            e.extraParams && h.push(e.extraParams);
            for (var v = 0; v < p.length; v++) {
              var m = p[v],
                g = h.indexOf(m);
              g > -1 && h.splice(g, 1)
            }
            var y = h.join("&"),
              w = u + ("" !== y ? "?" + y : "") + (l ? "#" + l : "");
            return "https://liff.line.me/" + ie().liffId + w
          }, this.setExtraQueryParam = function(t) {
            e.extraParams = t
          }, this.isAncestor = function(e, t) {
            return 0 === t.indexOf(e) && (e.endsWith("/") && (e = e.substring(0, e.length - 1)), void 0 === t[e.length] || "/" === t[e.length])
          }, this.install = function() {
            return {
              createUrl: e.createUrl,
              setExtraQueryParam: e.setExtraQueryParam
            }
          }
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return "permanentLink"
          },
          enumerable: !0,
          configurable: !0
        }), e
      }()),
      jn = new(function() {
        function e() {
          var e = this;
          this.getAndValidateContext = function() {
            var e = me();
            if (!e) throw Z(L, "Could not get Context from server.");
            if (!e.endpointUrl) throw Z(L, "Could not get endpointUrl from server.");
            if (!e.permanentLinkPattern) throw Z(L, "Could not get permanentLinkPattern from server.");
            return e
          }, this.decodeState = function(t) {
            var n = e.getAndValidateContext(),
              r = t,
              i = new URL(n.endpointUrl),
              o = i.origin,
              s = i.pathname,
              a = i.search,
              u = r.indexOf("?"),
              c = r.indexOf("#", u + 1),
              f = r.substring(0, u >= 0 ? u : c >= 0 ? c : r.length),
              l = c > -1 ? "#" + r.substring(c + 1) : "",
              d = u > -1 ? r.substring(u + 1, c < 0 ? void 0 : c) : "";
            f.length > 0 && ("/" === f ? f = "" : r.startsWith("/") || (f = "/" + f));
            var h = l.split("&").filter((function(e) {
              return !/^context_token/.test(e)
            })).join("&");
            if (d) {
              var p = a ? a.substring(1) + "&" : "";
              r = f + "?" + p + d + h
            } else r = "" + f + a + h;
            return "" + o + function() {
              switch (!0) {
                case "/" === s:
                  return "";
                case s.endsWith("/") && f.startsWith("/"):
                  return s.substring(0, s.length - 1);
                default:
                  return s
              }
            }() + r
          }, this.handleLiffState = function() {
            return V(e, void 0, void 0, (function() {
              var e, t, n, r, i;
              return G(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (e = un.parse(window.location.search), "string" != typeof(t = e["liff.state"])) return [2];
                    o.label = 1;
                  case 1:
                    return o.trys.push([1, 4, , 5]), n = location.href, (r = this.decodeState(t)) === n ? [3, 3] : (e["liff.hback"] ? location.replace(dt(r, {
                      "liff.hback": e["liff.hback"]
                    })) : location.replace(r), [4, new Promise((function() {}))]);
                  case 2:
                    o.sent(), o.label = 3;
                  case 3:
                    return [3, 5];
                  case 4:
                    if ((i = o.sent()).code === L) throw i;
                    return ee.debug(i), [3, 5];
                  case 5:
                    return [2]
                }
              }))
            }))
          }, this.install = function(t) {
            (0, t.addHooks)({
              beforeInitFinished: e.handleLiffState
            })
          }
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return "handleLiffState"
          },
          enumerable: !0,
          configurable: !0
        }), e
      }()),
      Rn = n(4),
      Bn = n.n(Rn);

    function Mn(e) {
      return (t = Bn()(e), n = "", t.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").forEach((function(e) {
        n += String.fromCharCode(parseInt(e))
      })), window.btoa(n)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      var t, n
    }
    var Wn = function() {
      function e(e) {
        this.driver = e
      }
      return Object.defineProperty(e.prototype, "name", {
        get: function() {
          return "login"
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.install = function() {
        return this.login.bind(this)
      }, e.prototype.login = function(e) {
        this.driver.runSyncHook("beforeLogin", e);
        var t = je(43),
          n = Mn(t),
          r = ie();
        if (!r || !r.liffId) throw Z("INVALID_CONFIG", "You need to define `liffId` for liff.login()");
        var i = {
          app_id: r.liffId,
          state: je(12),
          response_type: "code",
          code_challenge_method: "S256",
          code_challenge: n,
          liff_sdk_version: "2.12.0"
        };
        e && e.redirectUri && (i.redirect_uri = e.redirectUri), Q(D.LOGIN_TMP, {
          codeVerifier: t
        });
        var o = Je("authorize") + "?" + un.stringify(i);
        ee.debug("[Redirect] " + o), window.location.href = o
      }, e
    }();
    var Vn, Gn, Hn, Kn, Jn, qn = {
      getOS: N,
      getVersion: k,
      getLanguage: function() {
        return navigator.language
      },
      isInClient: B,
      isLoggedIn: Ie,
      logout: Te,
      getAccessToken: ae,
      getIDToken: fe,
      getDecodedIDToken: de,
      getContext: me,
      openWindow: function(e) {
        if (! function(e) {
            if (!e || "object" != typeof e) return !1;
            var t = e,
              n = t.url,
              r = K([typeof n, typeof t.external], 2),
              i = r[0],
              o = r[1];
            return "string" === i && "" !== n && ("undefined" === o || "boolean" === o)
          }(e)) throw Z("INVALID_ARGUMENT", "Invalid parameters for liff.openWindow()");
        var t = _e();
        if (B())
          if (null !== t && "ios" === N() && Ee(t, "9.19") >= 0 || !window._liff.postMessage) {
            var n = e.url,
              r = e.external,
              i = void 0 !== r && r;
            window.open(function(e, t) {
              var n = K(e.split("?"), 2),
                r = n[0],
                i = n[1],
                o = K((void 0 === i ? "" : i).split("#"), 2),
                s = o[0],
                a = o[1];
              return r + "?is_liff_external_open_window=" + !!t + (s ? "&" + s.split("&").filter((function(e) {
                return -1 === e.indexOf("is_liff_external_open_window")
              })).join("&").concat(a ? "#" + a : "") : "")
            }(n, i))
          } else Re("openWindow", e);
        else window.open(e.url, "_blank")
      },
      closeWindow: Be,
      getFriendship: function() {
        return Ve(Je("friendship"))
      },
      getAId: function() {
        return ((me() || {}).d || {}).aId
      },
      getProfilePlus: function() {
        return (me() || {}).profilePlus
      },
      getIsVideoAutoPlay: function() {
        return ((me() || {}).d || {}).autoplay || !1
      },
      getLineVersion: _e,
      isApiAvailable: Ne,
      getProfile: qe,
      sendMessages: function(e) {
        if (! function(e) {
            return Array.isArray(e) && e.every(Xe)
          }(e)) return ze("Parameter 'messages' must be an array of { type, ... }");
        var t = e.length;
        return t < 1 || t > 5 ? ze("Number of messages should be in range 1 to 5.") : Ve(Je("message"), {
          method: "POST",
          body: JSON.stringify({
            messages: e
          })
        })
      },
      shareTargetPicker: function(e) {
        return V(this, void 0, void 0, (function() {
          var t, n, r, i, o, s;
          return G(this, (function(a) {
            switch (a.label) {
              case 0:
                if (function() {
                    if (ut()) throw Z("FORBIDDEN", "The operation is not allowed in the SubWindow");
                    var e = ((me() || {}).availability || {}).shareTargetPicker || {},
                      t = e.permission,
                      n = e.minVer;
                    if (!t) throw B() ? Z("FORBIDDEN", "Need LINE App " + n + " at least or consent on shareTargetPicker usage on LINE developer site") : Z("FORBIDDEN", "Need consent on shareTargetPicker usage on LINE developer site")
                  }(), !Ie()) throw Z("UNAUTHORIZED", "Need access_token for api call, Please login first");
                if (!e || !Array.isArray(e) || 0 === e.length) throw Z("INVALID_ARGUMENT", "no proper argument");
                if (e.length > 5) throw Z("INVALID_ARGUMENT", "exceed the limit of num of messages");
                if (!(t = ie().liffId)) throw Z("INVALID_CONFIG");
                window.liff && (n = window.liff).analytics && (u = n.analytics, ee.debug("[LIFFUTS][sendCustom] liff.shareTargetPicker"), u.sendCustom({
                  type: "liffSdk",
                  placeId: "liff.shareTargetPicker"
                })), a.label = 1;
              case 1:
                return a.trys.push([1, 3, , 4]), r = it.getInstance(), i = _e(), o = {
                  waitForSubwindowResult: !0
                }, B() && i && Ee(i, "10.11.0") < 0 && (o.waitForSubwindowResult = !1), [4, r.init({
                  messages: e,
                  referrer: {
                    liffId: t,
                    url: location.origin
                  },
                  options: o
                })];
              case 2:
                return [2, a.sent()];
              case 3:
                throw (s = a.sent()) instanceof z ? s : Z("EXCEPTION_IN_SUBWINDOW", s.message);
              case 4:
                return [2]
            }
            var u
          }))
        }))
      },
      subWindow: Ht,
      ready: P,
      get id() {
        return ie().liffId || null
      },
      _dispatchEvent: function(e) {
        var t = {};
        try {
          t = JSON.parse(e)
        } catch (r) {
          throw Z("INVALID_ARGUMENT", r.message)
        }
        var n = function(e) {
          return new CustomEvent("liffEvent", {
            detail: e
          })
        }(t);
        ee.debug("[client dispatchEvent to js]", {
          type: n.type,
          detail: n.detail
        }), window.dispatchEvent(n)
      },
      _call: Re,
      _addListener: Fe,
      _removeListener: De,
      _postMessage: xe
    };
    Vn = qn, Gn = new Kt, Hn = [new xn(Vn, Gn), new vt(Vn), new Wn(Gn), Un, jn, at], Kn = new Jt(Gn), Jn = new qt(Gn, {
      namespacePrefix: ""
    }).install(Kn).bind(Vn), Hn.forEach(Jn);
    var Xn = qn;
    t.default = Xn
  }]).default
}));
