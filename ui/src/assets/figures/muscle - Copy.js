(function(sttc) {
     /* 
      
      Copyright The Closure Library Authors. 
      SPDX-License-Identifier: Apache-2.0 
     */
     var n;
 
     function aa(a) {
         var b = 0;
         return function() {
             return b < a.length ? {
                 done: !1,
                 value: a[b++]
             } : {
                 done: !0
             }
         }
     }
     var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
         if (a == Array.prototype || a == Object.prototype) return a;
         a[b] = c.value;
         return a
     };
 
     function ca(a) {
         a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
         for (var b = 0; b < a.length; ++b) {
             var c = a[b];
             if (c && c.Math == Math) return c
         }
         throw Error("Cannot find global object");
     }
     var da = ca(this),
         ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
         p = {},
         fa = {};
 
     function r(a, b) {
         var c = fa[b];
         if (null == c) return a[b];
         c = a[c];
         return void 0 !== c ? c : a[b]
     }
 
     function v(a, b, c) {
         if (b) a: {
             var d = a.split(".");a = 1 === d.length;
             var e = d[0],
                 f;!a && e in p ? f = p : f = da;
             for (e = 0; e < d.length - 1; e++) {
                 var g = d[e];
                 if (!(g in f)) break a;
                 f = f[g]
             }
             d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(p, d, {
                 configurable: !0,
                 writable: !0,
                 value: b
             }) : b !== c && (void 0 === fa[d] && (fa[d] = ea ? da.Symbol(d) : "$jscp$" + d), ba(f, fa[d], {
                 configurable: !0,
                 writable: !0,
                 value: b
             })))
         }
     }
     v("Symbol", function(a) {
         function b(e) {
             if (this instanceof b) throw new TypeError("Symbol is not a constructor");
             return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
         }
 
         function c(e, f) {
             this.g = e;
             ba(this, "description", {
                 configurable: !0,
                 writable: !0,
                 value: f
             })
         }
         if (a) return a;
         c.prototype.toString = function() {
             return this.g
         };
         var d = 0;
         return b
     }, "es6");
     v("Symbol.iterator", function(a) {
         if (a) return a;
         a = (0, p.Symbol)("Symbol.iterator");
         for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
             var d = da[b[c]];
             "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                 configurable: !0,
                 writable: !0,
                 value: function() {
                     return ha(aa(this))
                 }
             })
         }
         return a
     }, "es6");
 
     function ha(a) {
         a = {
             next: a
         };
         a[r(p.Symbol, "iterator")] = function() {
             return this
         };
         return a
     }
 
     function ia(a) {
         return a.raw = a
     }
 
     function w(a) {
         var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
         return b ? b.call(a) : {
             next: aa(a)
         }
     }
 
     function ja(a) {
         if (!(a instanceof Array)) {
             a = w(a);
             for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
             a = c
         }
         return a
     }
     var ka = "function" == typeof Object.create ? Object.create : function(a) {
             function b() {}
             b.prototype = a;
             return new b
         },
         la;
     if (ea && "function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
     else {
         var ma;
         a: {
             var na = {
                     a: !0
                 },
                 oa = {};
             try {
                 oa.__proto__ = na;
                 ma = oa.a;
                 break a
             } catch (a) {}
             ma = !1
         }
         la = ma ? function(a, b) {
             a.__proto__ = b;
             if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
             return a
         } : null
     }
     var pa = la;
 
     function qa(a, b) {
         a.prototype = ka(b.prototype);
         a.prototype.constructor = a;
         if (pa) pa(a, b);
         else
             for (var c in b)
                 if ("prototype" != c)
                     if (Object.defineProperties) {
                         var d = Object.getOwnPropertyDescriptor(b, c);
                         d && Object.defineProperty(a, c, d)
                     } else a[c] = b[c];
         a.cb = b.prototype
     }
 
     function ra(a, b, c) {
         if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
         if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
         return a + ""
     }
     v("String.prototype.endsWith", function(a) {
         return a ? a : function(b, c) {
             var d = ra(this, b, "endsWith");
             void 0 === c && (c = d.length);
             c = Math.max(0, Math.min(c | 0, d.length));
             for (var e = b.length; 0 < e && 0 < c;)
                 if (d[--c] != b[--e]) return !1;
             return 0 >= e
         }
     }, "es6");
 
     function sa(a, b, c) {
         a instanceof String && (a = String(a));
         for (var d = a.length, e = 0; e < d; e++) {
             var f = a[e];
             if (b.call(c, f, e, a)) return {
                 ya: e,
                 Ka: f
             }
         }
         return {
             ya: -1,
             Ka: void 0
         }
     }
     v("Array.prototype.find", function(a) {
         return a ? a : function(b, c) {
             return sa(this, b, c).Ka
         }
     }, "es6");
     v("String.prototype.startsWith", function(a) {
         return a ? a : function(b, c) {
             var d = ra(this, b, "startsWith"),
                 e = d.length,
                 f = b.length;
             c = Math.max(0, Math.min(c | 0, d.length));
             for (var g = 0; g < f && c < e;)
                 if (d[c++] != b[g++]) return !1;
             return g >= f
         }
     }, "es6");
 
     function ta(a, b) {
         return Object.prototype.hasOwnProperty.call(a, b)
     }
     var ua = ea && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
         for (var c = 1; c < arguments.length; c++) {
             var d = arguments[c];
             if (d)
                 for (var e in d) ta(d, e) && (a[e] = d[e])
         }
         return a
     };
     v("Object.assign", function(a) {
         return a || ua
     }, "es6");
     v("Promise", function(a) {
         function b(g) {
             this.g = 0;
             this.i = void 0;
             this.h = [];
             this.C = !1;
             var h = this.j();
             try {
                 g(h.resolve, h.reject)
             } catch (k) {
                 h.reject(k)
             }
         }
 
         function c() {
             this.g = null
         }
 
         function d(g) {
             return g instanceof b ? g : new b(function(h) {
                 h(g)
             })
         }
         if (a) return a;
         c.prototype.h = function(g) {
             if (null == this.g) {
                 this.g = [];
                 var h = this;
                 this.i(function() {
                     h.l()
                 })
             }
             this.g.push(g)
         };
         var e = da.setTimeout;
         c.prototype.i = function(g) {
             e(g, 0)
         };
         c.prototype.l = function() {
             for (; this.g && this.g.length;) {
                 var g = this.g;
                 this.g = [];
                 for (var h = 0; h < g.length; ++h) {
                     var k =
                         g[h];
                     g[h] = null;
                     try {
                         k()
                     } catch (l) {
                         this.j(l)
                     }
                 }
             }
             this.g = null
         };
         c.prototype.j = function(g) {
             this.i(function() {
                 throw g;
             })
         };
         b.prototype.j = function() {
             function g(l) {
                 return function(m) {
                     k || (k = !0, l.call(h, m))
                 }
             }
             var h = this,
                 k = !1;
             return {
                 resolve: g(this.N),
                 reject: g(this.l)
             }
         };
         b.prototype.N = function(g) {
             if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
             else if (g instanceof b) this.W(g);
             else {
                 a: switch (typeof g) {
                     case "object":
                         var h = null != g;
                         break a;
                     case "function":
                         h = !0;
                         break a;
                     default:
                         h = !1
                 }
                 h ? this.M(g) : this.s(g)
             }
         };
         b.prototype.M = function(g) {
             var h = void 0;
             try {
                 h = g.then
             } catch (k) {
                 this.l(k);
                 return
             }
             "function" == typeof h ? this.$(h, g) : this.s(g)
         };
         b.prototype.l = function(g) {
             this.u(2, g)
         };
         b.prototype.s = function(g) {
             this.u(1, g)
         };
         b.prototype.u = function(g, h) {
             if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
             this.g = g;
             this.i = h;
             2 === this.g && this.O();
             this.H()
         };
         b.prototype.O = function() {
             var g = this;
             e(function() {
                 if (g.L()) {
                     var h = da.console;
                     "undefined" !== typeof h && h.error(g.i)
                 }
             }, 1)
         };
         b.prototype.L =
             function() {
                 if (this.C) return !1;
                 var g = da.CustomEvent,
                     h = da.Event,
                     k = da.dispatchEvent;
                 if ("undefined" === typeof k) return !0;
                 "function" === typeof g ? g = new g("unhandledrejection", {
                     cancelable: !0
                 }) : "function" === typeof h ? g = new h("unhandledrejection", {
                     cancelable: !0
                 }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                 g.promise = this;
                 g.reason = this.i;
                 return k(g)
             };
         b.prototype.H = function() {
             if (null != this.h) {
                 for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                 this.h = null
             }
         };
         var f = new c;
         b.prototype.W = function(g) {
             var h = this.j();
             g.ca(h.resolve, h.reject)
         };
         b.prototype.$ = function(g, h) {
             var k = this.j();
             try {
                 g.call(h, k.resolve, k.reject)
             } catch (l) {
                 k.reject(l)
             }
         };
         b.prototype.then = function(g, h) {
             function k(t, u) {
                 return "function" == typeof t ? function(A) {
                     try {
                         l(t(A))
                     } catch (E) {
                         m(E)
                     }
                 } : u
             }
             var l, m, q = new b(function(t, u) {
                 l = t;
                 m = u
             });
             this.ca(k(g, l), k(h, m));
             return q
         };
         b.prototype.catch = function(g) {
             return this.then(void 0, g)
         };
         b.prototype.ca = function(g, h) {
             function k() {
                 switch (l.g) {
                     case 1:
                         g(l.i);
                         break;
                     case 2:
                         h(l.i);
                         break;
                     default:
                         throw Error("Unexpected state: " + l.g);
                 }
             }
             var l = this;
             null == this.h ? f.h(k) : this.h.push(k);
             this.C = !0
         };
         b.resolve = d;
         b.reject = function(g) {
             return new b(function(h, k) {
                 k(g)
             })
         };
         b.race = function(g) {
             return new b(function(h, k) {
                 for (var l = w(g), m = l.next(); !m.done; m = l.next()) d(m.value).ca(h, k)
             })
         };
         b.all = function(g) {
             var h = w(g),
                 k = h.next();
             return k.done ? d([]) : new b(function(l, m) {
                 function q(A) {
                     return function(E) {
                         t[A] = E;
                         u--;
                         0 == u && l(t)
                     }
                 }
                 var t = [],
                     u = 0;
                 do t.push(void 0), u++, d(k.value).ca(q(t.length - 1), m), k = h.next();
                 while (!k.done)
             })
         };
         return b
     }, "es6");
     v("WeakMap", function(a) {
         function b(g) {
             this.g = (f += Math.random() + 1).toString();
             if (g) {
                 g = w(g);
                 for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
             }
         }
 
         function c() {}
 
         function d(g) {
             var h = typeof g;
             return "object" === h && null !== g || "function" === h
         }
         if (function() {
                 if (!a || !Object.seal) return !1;
                 try {
                     var g = Object.seal({}),
                         h = Object.seal({}),
                         k = new a([
                             [g, 2],
                             [h, 3]
                         ]);
                     if (2 != k.get(g) || 3 != k.get(h)) return !1;
                     k.delete(g);
                     k.set(h, 4);
                     return !k.has(g) && 4 == k.get(h)
                 } catch (l) {
                     return !1
                 }
             }()) return a;
         var e = "$jscomp_hidden_" + Math.random(),
             f = 0;
         b.prototype.set = function(g, h) {
             if (!d(g)) throw Error("Invalid WeakMap key");
             if (!ta(g, e)) {
                 var k = new c;
                 ba(g, e, {
                     value: k
                 })
             }
             if (!ta(g, e)) throw Error("WeakMap key fail: " + g);
             g[e][this.g] = h;
             return this
         };
         b.prototype.get = function(g) {
             return d(g) && ta(g, e) ? g[e][this.g] : void 0
         };
         b.prototype.has = function(g) {
             return d(g) && ta(g, e) && ta(g[e], this.g)
         };
         b.prototype.delete = function(g) {
             return d(g) && ta(g, e) && ta(g[e], this.g) ? delete g[e][this.g] : !1
         };
         return b
     }, "es6");
     v("Map", function(a) {
         function b() {
             var h = {};
             return h.K = h.next = h.head = h
         }
 
         function c(h, k) {
             var l = h.g;
             return ha(function() {
                 if (l) {
                     for (; l.head != h.g;) l = l.K;
                     for (; l.next != l.head;) return l = l.next, {
                         done: !1,
                         value: k(l)
                     };
                     l = null
                 }
                 return {
                     done: !0,
                     value: void 0
                 }
             })
         }
 
         function d(h, k) {
             var l = k && typeof k;
             "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
             var m = h.h[l];
             if (m && ta(h.h, l))
                 for (h = 0; h < m.length; h++) {
                     var q = m[h];
                     if (k !== k && q.key !== q.key || k === q.key) return {
                         id: l,
                         list: m,
                         index: h,
                         v: q
                     }
                 }
             return {
                 id: l,
                 list: m,
                 index: -1,
                 v: void 0
             }
         }
 
         function e(h) {
             this.h = {};
             this.g = b();
             this.size = 0;
             if (h) {
                 h = w(h);
                 for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
             }
         }
         if (function() {
                 if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                 try {
                     var h = Object.seal({
                             x: 4
                         }),
                         k = new a(w([
                             [h, "s"]
                         ]));
                     if ("s" != k.get(h) || 1 != k.size || k.get({
                             x: 4
                         }) || k.set({
                             x: 4
                         }, "t") != k || 2 != k.size) return !1;
                     var l = k.entries(),
                         m = l.next();
                     if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                     m = l.next();
                     return m.done || 4 != m.value[0].x ||
                         "t" != m.value[1] || !l.next().done ? !1 : !0
                 } catch (q) {
                     return !1
                 }
             }()) return a;
         var f = new p.WeakMap;
         e.prototype.set = function(h, k) {
             h = 0 === h ? 0 : h;
             var l = d(this, h);
             l.list || (l.list = this.h[l.id] = []);
             l.v ? l.v.value = k : (l.v = {
                 next: this.g,
                 K: this.g.K,
                 head: this.g,
                 key: h,
                 value: k
             }, l.list.push(l.v), this.g.K.next = l.v, this.g.K = l.v, this.size++);
             return this
         };
         e.prototype.delete = function(h) {
             h = d(this, h);
             return h.v && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.v.K.next = h.v.next, h.v.next.K = h.v.K, h.v.head = null, this.size--,
                 !0) : !1
         };
         e.prototype.clear = function() {
             this.h = {};
             this.g = this.g.K = b();
             this.size = 0
         };
         e.prototype.has = function(h) {
             return !!d(this, h).v
         };
         e.prototype.get = function(h) {
             return (h = d(this, h).v) && h.value
         };
         e.prototype.entries = function() {
             return c(this, function(h) {
                 return [h.key, h.value]
             })
         };
         e.prototype.keys = function() {
             return c(this, function(h) {
                 return h.key
             })
         };
         e.prototype.values = function() {
             return c(this, function(h) {
                 return h.value
             })
         };
         e.prototype.forEach = function(h, k) {
             for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                 h.call(k, m[1], m[0], this)
         };
         e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
         var g = 0;
         return e
     }, "es6");
     v("Set", function(a) {
         function b(c) {
             this.g = new p.Map;
             if (c) {
                 c = w(c);
                 for (var d; !(d = c.next()).done;) this.add(d.value)
             }
             this.size = this.g.size
         }
         if (function() {
                 if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                 try {
                     var c = Object.seal({
                             x: 4
                         }),
                         d = new a(w([c]));
                     if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                             x: 4
                         }) != d || 2 != d.size) return !1;
                     var e = d.entries(),
                         f = e.next();
                     if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                     f = e.next();
                     return f.done || f.value[0] == c || 4 != f.value[0].x ||
                         f.value[1] != f.value[0] ? !1 : e.next().done
                 } catch (g) {
                     return !1
                 }
             }()) return a;
         b.prototype.add = function(c) {
             c = 0 === c ? 0 : c;
             this.g.set(c, c);
             this.size = this.g.size;
             return this
         };
         b.prototype.delete = function(c) {
             c = this.g.delete(c);
             this.size = this.g.size;
             return c
         };
         b.prototype.clear = function() {
             this.g.clear();
             this.size = 0
         };
         b.prototype.has = function(c) {
             return this.g.has(c)
         };
         b.prototype.entries = function() {
             return this.g.entries()
         };
         b.prototype.values = function() {
             return r(this.g, "values").call(this.g)
         };
         b.prototype.keys = r(b.prototype,
             "values");
         b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
         b.prototype.forEach = function(c, d) {
             var e = this;
             this.g.forEach(function(f) {
                 return c.call(d, f, f, e)
             })
         };
         return b
     }, "es6");
 
     function va(a, b) {
         a instanceof String && (a += "");
         var c = 0,
             d = !1,
             e = {
                 next: function() {
                     if (!d && c < a.length) {
                         var f = c++;
                         return {
                             value: b(f, a[f]),
                             done: !1
                         }
                     }
                     d = !0;
                     return {
                         done: !0,
                         value: void 0
                     }
                 }
             };
         e[r(p.Symbol, "iterator")] = function() {
             return e
         };
         return e
     }
     v("Array.prototype.findIndex", function(a) {
         return a ? a : function(b, c) {
             return sa(this, b, c).ya
         }
     }, "es6");
     v("Array.prototype.keys", function(a) {
         return a ? a : function() {
             return va(this, function(b) {
                 return b
             })
         }
     }, "es6");
     v("Array.prototype.values", function(a) {
         return a ? a : function() {
             return va(this, function(b, c) {
                 return c
             })
         }
     }, "es8");
     var x = this || self,
         wa = /^[\w+/_-]+[=]{0,2}$/,
         ya = null;
 
     function za(a) {
         return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && wa.test(a) ? a : ""
     }
 
     function Aa(a) {
         a = a.split(".");
         for (var b = x, c = 0; c < a.length; c++)
             if (b = b[a[c]], null == b) return null;
         return b
     }
 
     function Ba(a) {
         a.la = void 0;
         a.m = function() {
             return a.la ? a.la : a.la = new a
         }
     }
 
     function Ca(a) {
         var b = typeof a;
         return "object" == b && null != a || "function" == b
     }
 
     function Da(a) {
         return Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea] || (a[Ea] = ++Fa)
     }
     var Ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
         Fa = 0;
 
     function Ha(a, b, c) {
         return a.call.apply(a.bind, arguments)
     }
 
     function Ia(a, b, c) {
         if (!a) throw Error();
         if (2 < arguments.length) {
             var d = Array.prototype.slice.call(arguments, 2);
             return function() {
                 var e = Array.prototype.slice.call(arguments);
                 Array.prototype.unshift.apply(e, d);
                 return a.apply(b, e)
             }
         }
         return function() {
             return a.apply(b, arguments)
         }
     }
 
     function Ja(a, b, c) {
         Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ja = Ha : Ja = Ia;
         return Ja.apply(null, arguments)
     }
 
     function Ka(a, b) {
         var c = Array.prototype.slice.call(arguments, 1);
         return function() {
             var d = c.slice();
             d.push.apply(d, arguments);
             return a.apply(this, d)
         }
     }
 
     function La(a) {
         var b = ["__uspapi"],
             c = x;
         b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
         for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
     }
 
     function y(a, b) {
         function c() {}
         c.prototype = b.prototype;
         a.cb = b.prototype;
         a.prototype = new c;
         a.prototype.constructor = a;
         a.fb = function(d, e, f) {
             for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
             return b.prototype[e].apply(d, g)
         }
     }
 
     function Ma(a) {
         return a
     };
     var Na = (new Date).getTime();
     var Oa;
 
     function Pa(a, b) {
         for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
     }
 
     function Qa(a, b) {
         for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
             if (g in f) {
                 var h = f[g];
                 b.call(void 0, h, g, a) && (d[e++] = h)
             } return d
     }
 
     function Ra(a, b) {
         for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
         return d
     }
 
     function Sa(a, b) {
         for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
             if (e in d && b.call(void 0, d[e], e, a)) return !0;
         return !1
     }
 
     function Ta(a, b) {
         a: {
             for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                 if (e in d && b.call(void 0, d[e], e, a)) {
                     b = e;
                     break a
                 } b = -1
         }
         return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
     }
 
     function Ua(a, b) {
         a: {
             for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                 if (d in c && b.call(void 0, c[d], d, a)) {
                     b = d;
                     break a
                 } b = -1
         }
         return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
     }
 
     function Va(a, b) {
         a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
             else {
                 for (var c = 0; c < a.length; c++)
                     if (c in a && a[c] === b) {
                         a = c;
                         break a
                     } a = -1
             }return 0 <= a
     };
 
     function Wa(a) {
         return function() {
             return !a.apply(this, arguments)
         }
     }
 
     function Xa(a) {
         var b = !1,
             c;
         return function() {
             b || (c = a(), b = !0);
             return c
         }
     }
 
     function Ya(a) {
         var b = a;
         return function() {
             if (b) {
                 var c = b;
                 b = null;
                 c()
             }
         }
     };
 
     function Za(a, b) {
         var c = {},
             d;
         for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
         return c
     }
 
     function $a(a, b) {
         for (var c in a)
             if (b.call(void 0, a[c], c, a)) return !0;
         return !1
     }
 
     function ab(a, b) {
         return null !== a && b in a
     }
 
     function bb(a) {
         var b = {},
             c;
         for (c in a) b[c] = a[c];
         return b
     };
     var cb;
 
     function db() {
         if (void 0 === cb) {
             var a = null,
                 b = x.trustedTypes;
             if (b && b.createPolicy) {
                 try {
                     a = b.createPolicy("goog#html", {
                         createHTML: Ma,
                         createScript: Ma,
                         createScriptURL: Ma
                     })
                 } catch (c) {
                     x.console && x.console.error(c.message)
                 }
                 cb = a
             } else cb = a
         }
         return cb
     };
 
     function eb(a, b) {
         this.h = a === fb && b || "";
         this.g = gb
     }
     var gb = {},
         fb = {};
 
     function hb(a, b) {
         this.g = b === ib ? a : ""
     }
     hb.prototype.toString = function() {
         return this.g + ""
     };
 
     function jb(a) {
         return a instanceof hb && a.constructor === hb ? a.g : "type_error:TrustedResourceUrl"
     }
     var kb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
         ib = {};
 
     function lb(a) {
         var b = db();
         a = b ? b.createScriptURL(a) : a;
         return new hb(a, ib)
     }
 
     function mb(a, b, c) {
         if (null == c) return b;
         if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
         for (var d in c)
             if (Object.prototype.hasOwnProperty.call(c, d)) {
                 var e = c[d];
                 e = Array.isArray(e) ? e : [e];
                 for (var f = 0; f < e.length; f++) {
                     var g = e[f];
                     null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                 }
             } return b
     };
 
     function nb(a) {
         return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
     }
 
     function ob(a, b) {
         var c = 0;
         a = nb(String(a)).split(".");
         b = nb(String(b)).split(".");
         for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
             var f = a[e] || "",
                 g = b[e] || "";
             do {
                 f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                 g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                 if (0 == f[0].length && 0 == g[0].length) break;
                 c = pb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || pb(0 == f[2].length, 0 == g[2].length) || pb(f[2], g[2]);
                 f = f[3];
                 g = g[3]
             } while (0 == c)
         }
         return c
     }
 
     function pb(a, b) {
         return a < b ? -1 : a > b ? 1 : 0
     };
     var qb;
     a: {
         var rb = x.navigator;
         if (rb) {
             var sb = rb.userAgent;
             if (sb) {
                 qb = sb;
                 break a
             }
         }
         qb = ""
     }
 
     function z(a) {
         return -1 != qb.indexOf(a)
     }
 
     function tb(a) {
         for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
         return c
     };
 
     function ub() {
         function a(e) {
             e = Ta(e, d);
             return c[e] || ""
         }
         var b = qb;
         if (z("Trident") || z("MSIE")) return vb(b);
         b = tb(b);
         var c = {};
         Pa(b, function(e) {
             c[e[0]] = e[1]
         });
         var d = Ka(ab, c);
         return z("Opera") ? a(["Version", "Opera"]) : z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : !z("Chrome") && !z("CriOS") || z("Edge") ? (b = b[2]) && b[1] || "" : a(["Chrome", "CriOS", "HeadlessChrome"])
     }
 
     function vb(a) {
         var b = /rv: *([\d\.]*)/.exec(a);
         if (b && b[1]) return b[1];
         b = "";
         var c = /MSIE +([\d\.]+)/.exec(a);
         if (c && c[1])
             if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                 if (a && a[1]) switch (a[1]) {
                     case "4.0":
                         b = "8.0";
                         break;
                     case "5.0":
                         b = "9.0";
                         break;
                     case "6.0":
                         b = "10.0";
                         break;
                     case "7.0":
                         b = "11.0"
                 } else b = "7.0";
                 else b = c[1];
         return b
     };
 
     function wb(a, b, c) {
         this.g = c === xb ? a : ""
     }
     wb.prototype.toString = function() {
         return this.g.toString()
     };
 
     function yb(a) {
         return a instanceof wb && a.constructor === wb ? a.g : "type_error:SafeHtml"
     }
     var xb = {};
 
     function zb(a) {
         var b = db();
         a = b ? b.createHTML(a) : a;
         return new wb(a, null, xb)
     }
     var Ab = new wb(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, xb);
     var Bb = Xa(function() {
         var a = document.createElement("div"),
             b = document.createElement("div");
         b.appendChild(document.createElement("div"));
         a.appendChild(b);
         b = a.firstChild.firstChild;
         a.innerHTML = yb(Ab);
         return !b.parentElement
     });
 
     function Cb(a, b) {
         if (Bb())
             for (; a.lastChild;) a.removeChild(a.lastChild);
         a.innerHTML = yb(b)
     };
 
     function Db(a) {
         return String(a).replace(/\-([a-z])/g, function(b, c) {
             return c.toUpperCase()
         })
     };
 
     function Eb(a) {
         Eb[" "](a);
         return a
     }
     Eb[" "] = function() {};
     var Fb = {},
         Gb = null;
 
     function B() {}
     var Hb = "function" == typeof Uint8Array;
 
     function C(a, b, c, d) {
         a.g = null;
         b || (b = []);
         a.u = void 0;
         a.j = -1;
         a.h = b;
         a: {
             if (b = a.h.length) {
                 --b;
                 var e = a.h[b];
                 if (!(null === e || "object" != typeof e || Array.isArray(e) || Hb && e instanceof Uint8Array)) {
                     a.l = b - a.j;
                     a.i = e;
                     break a
                 }
             }
             a.l = Number.MAX_VALUE
         }
         a.C = {};
         if (c)
             for (b = 0; b < c.length; b++) e = c[b], e < a.l ? (e += a.j, a.h[e] = a.h[e] || Ib) : (Jb(a), a.i[e] = a.i[e] || Ib);
         if (d && d.length)
             for (b = 0; b < d.length; b++) Kb(a, d[b])
     }
     var Ib = [];
 
     function Jb(a) {
         var b = a.l + a.j;
         a.h[b] || (a.i = a.h[b] = {})
     }
 
     function D(a, b) {
         if (b < a.l) {
             b += a.j;
             var c = a.h[b];
             return c !== Ib ? c : a.h[b] = []
         }
         if (a.i) return c = a.i[b], c === Ib ? a.i[b] = [] : c
     }
 
     function Lb(a, b) {
         a = D(a, b);
         return null == a ? a : !!a
     }
 
     function G(a, b, c) {
         a = D(a, b);
         return null == a ? c : a
     }
 
     function H(a, b) {
         return G(a, b, "")
     }
 
     function Mb(a, b, c) {
         c = void 0 === c ? !1 : c;
         a = Lb(a, b);
         return null == a ? c : a
     }
 
     function Nb(a, b) {
         var c = void 0 === c ? 0 : c;
         a = D(a, b);
         a = null == a ? a : +a;
         return null == a ? c : a
     }
 
     function Ob(a, b, c) {
         b < a.l ? a.h[b + a.j] = c : (Jb(a), a.i[b] = c);
         return a
     }
 
     function Kb(a, b) {
         for (var c, d, e = 0; e < b.length; e++) {
             var f = b[e],
                 g = D(a, f);
             null != g && (c = f, d = g, Ob(a, f, void 0))
         }
         return c ? (Ob(a, c, d), c) : 0
     }
 
     function I(a, b, c) {
         a.g || (a.g = {});
         if (!a.g[c]) {
             var d = D(a, c);
             d && (a.g[c] = new b(d))
         }
         return a.g[c]
     }
 
     function J(a, b, c) {
         a.g || (a.g = {});
         if (!a.g[c]) {
             for (var d = D(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
             a.g[c] = e
         }
         b = a.g[c];
         b == Ib && (b = a.g[c] = []);
         return b
     }
 
     function Pb(a) {
         if (a.g)
             for (var b in a.g)
                 if (Object.prototype.hasOwnProperty.call(a.g, b)) {
                     var c = a.g[b];
                     if (Array.isArray(c))
                         for (var d = 0; d < c.length; d++) c[d] && Pb(c[d]);
                     else c && Pb(c)
                 } return a.h
     }
     B.prototype.s = Hb ? function() {
         var a = Uint8Array.prototype.toJSON;
         Uint8Array.prototype.toJSON = function() {
             var b;
             void 0 === b && (b = 0);
             if (!Gb) {
                 Gb = {};
                 for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                     var f = c.concat(d[e].split(""));
                     Fb[e] = f;
                     for (var g = 0; g < f.length; g++) {
                         var h = f[g];
                         void 0 === Gb[h] && (Gb[h] = g)
                     }
                 }
             }
             b = Fb[b];
             c = [];
             for (d = 0; d < this.length; d += 3) {
                 var k = this[d],
                     l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                 h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                 g = k >>
                     2;
                 k = (k & 3) << 4 | l >> 4;
                 l = (l & 15) << 2 | h >> 6;
                 h &= 63;
                 f || (h = 64, e || (l = 64));
                 c.push(b[g], b[k], b[l] || "", b[h] || "")
             }
             return c.join("")
         };
         try {
             return JSON.stringify(this.h && Pb(this), Qb)
         } finally {
             Uint8Array.prototype.toJSON = a
         }
     } : function() {
         return JSON.stringify(this.h && Pb(this), Qb)
     };
 
     function Qb(a, b) {
         return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
     }
 
     function Rb(a, b) {
         return new a(b ? JSON.parse(b) : null)
     };
 
     function Sb(a) {
         C(this, a, Tb, null)
     }
     y(Sb, B);
 
     function Ub(a) {
         C(this, a, null, null)
     }
     y(Ub, B);
     var Tb = [2, 3];
 
     function K(a) {
         a.google_ad_modifications || (a.google_ad_modifications = {});
         return a.google_ad_modifications
     }
 
     function Vb(a) {
         a = K(a);
         var b = a.space_collapsing || "none";
         return a.remove_ads_by_default ? {
             sa: !0,
             ab: b,
             ia: a.ablation_viewport_offset
         } : null
     }
 
     function Wb(a) {
         a = K(a);
         a.eids || (a.eids = []);
         return a.eids
     }
 
     function Xb(a, b) {
         a = K(a);
         a.tag_partners = a.tag_partners || [];
         a.tag_partners.push(b)
     }
 
     function Yb(a, b) {
         a = K(a);
         a.remove_ads_by_default = !0;
         a.space_collapsing = "slot";
         a.ablation_viewport_offset = b
     }
 
     function Zb(a) {
         K(L).allow_second_reactive_tag = a
     };
     var M = {},
         $b = (M.google_ad_channel = !0, M.google_ad_client = !0, M.google_ad_host = !0, M.google_ad_host_channel = !0, M.google_adtest = !0, M.google_tag_for_child_directed_treatment = !0, M.google_tag_for_under_age_of_consent = !0, M.google_tag_partner = !0, M.google_restrict_data_processing = !0, M.google_page_url = !0, M.google_debug_params = !0, M.google_adbreak_test = !0, M.google_ad_frequency_hint = !0, M.google_admob_interstitial_slot = !0, M.google_admob_rewarded_slot = !0, M);
 
     function ac(a) {
         return !!a
     }
 
     function bc(a) {
         if (!(cc || ac)(a)) throw Error(String(a));
     };
     var dc = {};
 
     function ec() {
         var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
         return null !== a && void 0 !== a ? a : null
     }
     var fc;
 
     function hc() {
         var a, b;
         void 0 === fc && (fc = null !== (b = null === (a = ec()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
             createHTML: function(c) {
                 return c
             },
             createScript: function(c) {
                 return c
             },
             createScriptURL: function(c) {
                 return c
             }
         })) && void 0 !== b ? b : null);
         return fc
     };
 
     function ic() {}
 
     function jc(a, b) {
         if (b !== dc) throw Error("Bad secret");
         this.g = a
     }
     qa(jc, ic);
     jc.prototype.toString = function() {
         return this.g.toString()
     };
 
     function kc(a) {
         var b, c = null === (b = hc()) || void 0 === b ? void 0 : b.createScriptURL(a);
         return new jc(null !== c && void 0 !== c ? c : a, dc)
     };
 
     function lc(a, b) {
         for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
         if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`");
         if (0 === c.length) return kc(a[0]);
         d = a[0].toLowerCase();
         if (r(d, "startsWith").call(d, "data:")) throw Error("Data URLs cannot have expressions in the template literal input.");
         if (r(d, "startsWith").call(d, "https://") || r(d, "startsWith").call(d, "//")) {
             var e = d.indexOf("//") + 2;
             var f = d.indexOf("/", e);
             if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
             if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f))) throw Error("The origin contains unsupported characters.");
             e = !0
         } else e = !1;
         if (e = !e) {
             if (r(d, "startsWith").call(d, "/"))
                 if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                 else throw Error("The path start in the url is invalid.");
             else e = !1;
             e = !e
         }
         if (e) {
             if (r(d, "startsWith").call(d, "about:blank")) {
                 if ("about:blank" !== d && !r(d, "startsWith").call(d, "about:blank#")) throw Error("The about url is invalid.");
                 d = !0
             } else d = !1;
             e = !d
         }
         if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
         d = [a[0]];
         for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
         return kc(d.join(""))
     };
     var mc = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
         nc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
         oc = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
         pc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
         qc = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_exp", ".js"]),
         rc = ia(["https://pagead2.googlesyndication.com/pagead/js/",
             "/", "/show_ads_impl_exp", ".js"
         ]),
         sc = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
         tc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
         uc = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
         vc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
     var wc = document,
         L = window;
     var xc = {
         "120x90": !0,
         "160x90": !0,
         "180x90": !0,
         "200x90": !0,
         "468x15": !0,
         "728x15": !0
     };
 
     function yc(a, b) {
         if (15 == b) {
             if (728 <= a) return 728;
             if (468 <= a) return 468
         } else if (90 == b) {
             if (200 <= a) return 200;
             if (180 <= a) return 180;
             if (160 <= a) return 160;
             if (120 <= a) return 120
         }
         return null
     };
 
     function zc(a, b) {
         var c = void 0 === c ? {} : c;
         this.error = a;
         this.context = b.context;
         this.msg = b.message || "";
         this.id = b.id || "jserror";
         this.meta = c
     }
 
     function Ac(a) {
         return !!(a.error && a.meta && a.id)
     };
 
     function Bc(a, b, c) {
         a.addEventListener && a.addEventListener(b, c, !1)
     }
 
     function Cc(a, b, c) {
         a.removeEventListener && a.removeEventListener(b, c, !1)
     };
 
     function Dc(a, b) {
         b = String(b);
         "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
         return a.createElement(b)
     }
 
     function Ec(a) {
         this.g = a || x.document || document
     }
     Ec.prototype.contains = function(a, b) {
         if (!a || !b) return !1;
         if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
         if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
         for (; b && a != b;) b = b.parentNode;
         return b == a
     };
 
     function Fc() {
         return !Gc() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
     }
 
     function Gc() {
         return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
     };
     var Hc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
         Ic = /#|$/;
 
     function Jc(a) {
         try {
             var b;
             if (b = !!a && null != a.location.href) a: {
                 try {
                     Eb(a.foo);
                     b = !0;
                     break a
                 } catch (c) {}
                 b = !1
             }
             return b
         } catch (c) {
             return !1
         }
     }
 
     function Kc(a, b, c) {
         var d = a.createElement("script");
         (void 0 === c ? 0 : c) && d.setAttribute("crossorigin", "anonymous");
         d.src = jb(b);
         (b = d.ownerDocument && d.ownerDocument.defaultView) && b != x ? b = za(b.document) : (null === ya && (ya = za(x.document)), b = ya);
         b && d.setAttribute("nonce", b);
         return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(d, a), d) : null
     }
 
     function Lc(a, b) {
         return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
     }
 
     function Mc(a, b) {
         if (!Nc() && !Oc()) {
             var c = Math.random();
             if (c < b) return c = Pc(x), a[Math.floor(c * a.length)]
         }
         return null
     }
 
     function Pc(a) {
         if (!a.crypto) return Math.random();
         try {
             var b = new Uint32Array(1);
             a.crypto.getRandomValues(b);
             return b[0] / 65536 / 65536
         } catch (c) {
             return Math.random()
         }
     }
 
     function Qc(a, b) {
         if (a)
             for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
     }
 
     function Rc(a) {
         var b = a.length;
         if (0 == b) return 0;
         for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
         return 0 < c ? c : 4294967296 + c
     }
     var Oc = Xa(function() {
         return Sa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Sc) || 1E-4 > Math.random()
     });
 
     function Tc(a, b) {
         var c = -1;
         try {
             a && (c = parseInt(a.getItem(b), 10))
         } catch (d) {
             return null
         }
         return 0 <= c && 1E3 > c ? c : null
     }
 
     function Uc(a, b, c) {
         a = Oc() ? null : Math.floor(1E3 * Pc(a));
         var d;
         if (d = null != a && b) a: {
             var e = String(a);
             try {
                 if (b) {
                     b.setItem(c, e);
                     d = e;
                     break a
                 }
             } catch (f) {}
             d = null
         }
         return d ? a : null
     }
     var Nc = Xa(function() {
         return Sc("MSIE")
     });
 
     function Sc(a) {
         return -1 != qb.indexOf(a)
     }
     var Vc = /^([0-9.]+)px$/,
         Xc = /^(-?[0-9.]{1,30})$/;
 
     function Yc(a) {
         return Xc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
     }
 
     function N(a) {
         return (a = Vc.exec(a)) ? +a[1] : null
     }
 
     function Zc(a, b) {
         for (var c = 0; 50 > c; ++c) {
             try {
                 var d = !(!a.frames || !a.frames[b])
             } catch (g) {
                 d = !1
             }
             if (d) return a;
             a: {
                 try {
                     var e = a.parent;
                     if (e && e != a) {
                         var f = e;
                         break a
                     }
                 } catch (g) {}
                 f = null
             }
             if (!(a = f)) break
         }
         return null
     }
     var $c = Xa(function() {
         return Fc() ? 2 : Gc() ? 1 : 0
     });
 
     function ad(a) {
         var b = {
             display: "none"
         };
         a.style.setProperty ? Qc(b, function(c, d) {
             a.style.setProperty(d, c, "important")
         }) : a.style.cssText = bd(cd(dd(a.style.cssText), ed(b, function(c) {
             return c + " !important"
         })))
     }
     var cd = r(Object, "assign") || function(a, b) {
         for (var c = 1; c < arguments.length; c++) {
             var d = arguments[c];
             if (d)
                 for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
         }
         return a
     };
 
     function ed(a, b) {
         var c = {},
             d;
         for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
         return c
     }
 
     function bd(a) {
         var b = [];
         Qc(a, function(c, d) {
             null != c && "" !== c && b.push(d + ":" + c)
         });
         return b.length ? b.join(";") + ";" : ""
     }
 
     function dd(a) {
         var b = {};
         if (a) {
             var c = /\s*:\s*/;
             Pa((a || "").split(/\s*;\s*/), function(d) {
                 if (d) {
                     var e = d.split(c);
                     d = e[0];
                     e = e[1];
                     d && e && (b[d.toLowerCase()] = e)
                 }
             })
         }
         return b
     }
     var fd = [];
 
     function gd() {
         var a = fd;
         fd = [];
         a = w(a);
         for (var b = a.next(); !b.done; b = a.next()) {
             b = b.value;
             try {
                 b()
             } catch (c) {}
         }
     }
 
     function hd(a, b, c) {
         b = void 0 === b ? window.document : b;
         c = void 0 === c ? !1 : c;
         0 != a.length && b.head && a.forEach(function(d) {
             if (d) {
                 var e = b;
                 e = void 0 === e ? window.document : e;
                 if (d && e.head) {
                     var f = document.createElement("meta");
                     (void 0 === c ? 0 : c) ? (e.head.appendChild(f), f.httpEquiv = "origin-trial", f.content = d) : (f.httpEquiv = "origin-trial", f.content = d, e.head.appendChild(f))
                 }
             }
         })
     }
 
     function id(a) {
         "complete" === wc.readyState || "interactive" === wc.readyState ? (fd.push(a), 1 == fd.length && (p.Promise ? p.Promise.resolve().then(gd) : window.setImmediate ? setImmediate(gd) : setTimeout(gd, 0))) : wc.addEventListener("DOMContentLoaded", a)
     };
 
     function jd(a) {
         a = void 0 === a ? x : a;
         var b = a.context || a.AMP_CONTEXT_DATA;
         if (!b) try {
             b = a.parent.context || a.parent.AMP_CONTEXT_DATA
         } catch (c) {}
         try {
             if (b && b.pageViewId && b.canonicalUrl) return b
         } catch (c) {}
         return null
     }
 
     function kd(a) {
         return (a = a || jd()) ? Jc(a.master) ? a.master : null : null
     };
 
     function ld(a, b, c) {
         a.google_image_requests || (a.google_image_requests = []);
         var d = a.document.createElement("img");
         if (c) {
             var e = function(f) {
                 c && c(f);
                 Cc(d, "load", e);
                 Cc(d, "error", e)
             };
             Bc(d, "load", e);
             Bc(d, "error", e)
         }
         d.src = b;
         a.google_image_requests.push(d)
     }
 
     function md(a, b) {
         var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
         Qc(a, function(d, e) {
             d && (c += "&" + e + "=" + encodeURIComponent(d))
         });
         nd(c)
     }
 
     function nd(a) {
         var b = window;
         b.fetch ? b.fetch(a, {
             keepalive: !0,
             credentials: "include",
             redirect: "follow",
             method: "get",
             mode: "no-cors"
         }) : ld(b, a, null)
     };
 
     function od(a) {
         if (a instanceof ic) {
             var b;
             if (null === (b = ec()) || void 0 === b || !b.isScriptURL(a))
                 if (a instanceof jc) a = a.g;
                 else throw Error("wrong type");
         } else a = jb(a);
         return a
     };
 
     function pd(a, b) {
         if (a)
             for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
     }
 
     function qd(a) {
         return !(!a || !a.call) && "function" === typeof a
     }
 
     function rd(a) {
         var b = void 0 === b ? 1 : b;
         a = kd(jd(a)) || a;
         a.google_unique_id = (a.google_unique_id || 0) + b;
         return a.google_unique_id
     }
 
     function sd(a) {
         a = a.google_unique_id;
         return "number" === typeof a ? a : 0
     }
 
     function td(a) {
         a = kd(jd(a)) || a;
         a = a.google_unique_id;
         return "number" === typeof a ? a : 0
     }
     var ud = !!window.google_async_iframe_id,
         vd = ud && window.parent || window;
 
     function wd() {
         if (ud && !Jc(vd)) {
             var a = "." + wc.domain;
             try {
                 for (; 2 < a.split(".").length && !Jc(vd);) wc.domain = a = a.substr(a.indexOf(".") + 1), vd = window.parent
             } catch (b) {}
             Jc(vd) || (vd = window)
         }
         return vd
     }
     var xd = /(^| )adsbygoogle($| )/;
 
     function yd() {
         var a = void 0 === a ? L : a;
         if (!a) return !1;
         try {
             return !(!a.navigator.standalone && !a.top.navigator.standalone)
         } catch (b) {
             return !1
         }
     }
 
     function zd(a) {
         a = a.top;
         return Jc(a) ? a : null
     };
 
     function Ad(a, b) {
         if (!a) return !1;
         a = a.hash;
         if (!a || !a.indexOf) return !1;
         if (-1 != a.indexOf(b)) return !0;
         b = Bd(b);
         return "go" != b && -1 != a.indexOf(b) ? !0 : !1
     }
 
     function Bd(a) {
         var b = "";
         pd(a.split("_"), function(c) {
             b += c.substr(0, 2)
         });
         return b
     };
 
     function Cd(a) {
         C(this, a, Dd, Ed)
     }
     y(Cd, B);
     var Dd = [2, 8],
         Ed = [
             [3, 4, 5],
             [6, 7]
         ];
 
     function Fd(a) {
         return null != a ? !a : a
     }
 
     function Gd(a, b) {
         for (var c = !1, d = 0; d < a.length; d++) {
             var e = a[d].call();
             if (e == b) return e;
             null == e && (c = !0)
         }
         if (!c) return !b
     }
 
     function Hd(a, b) {
         var c = J(a, Cd, 2);
         if (!c.length) return Id(a, b);
         a = G(a, 1, 0);
         if (1 == a) return Fd(Hd(c[0], b));
         c = Ra(c, function(d) {
             return function() {
                 return Hd(d, b)
             }
         });
         switch (a) {
             case 2:
                 return Gd(c, !1);
             case 3:
                 return Gd(c, !0)
         }
     }
 
     function Id(a, b) {
         var c = Kb(a, Ed[0]);
         a: {
             switch (c) {
                 case 3:
                     var d = G(a, 3, 0);
                     break a;
                 case 4:
                     d = G(a, 4, 0);
                     break a;
                 case 5:
                     d = G(a, 5, 0);
                     break a
             }
             d = void 0
         }
         if (d && (b = (b = b[c]) && b[d])) {
             try {
                 var e = b.apply(null, D(a, 8))
             } catch (f) {
                 return
             }
             b = G(a, 1, 0);
             if (4 == b) return !!e;
             d = null != e;
             if (5 == b) return d;
             if (12 == b) a = H(a, 7);
             else a: {
                 switch (c) {
                     case 4:
                         a = Nb(a, 6);
                         break a;
                     case 5:
                         a = H(a, 7);
                         break a
                 }
                 a = void 0
             }
             if (null != a) {
                 if (6 == b) return e === a;
                 if (9 == b) return 0 == ob(e, a);
                 if (d) switch (b) {
                     case 7:
                         return e < a;
                     case 8:
                         return e > a;
                     case 12:
                         return (new RegExp(a)).test(e);
                     case 10:
                         return -1 == ob(e, a);
                     case 11:
                         return 1 == ob(e, a)
                 }
             }
         }
     }
 
     function Jd(a, b) {
         return !a || !(!b || !Hd(a, b))
     };
     var Kd = null;
 
     function Ld(a, b) {
         b = void 0 === b ? [] : b;
         var c = !1;
         x.google_logging_queue || (c = !0, x.google_logging_queue = []);
         x.google_logging_queue.push([a, b]);
         if (a = c) {
             if (null == Kd) {
                 Kd = !1;
                 try {
                     var d = zd(x);
                     d && -1 !== d.location.hash.indexOf("google_logging") && (Kd = !0);
                     x.localStorage.getItem("google_logging") && (Kd = !0)
                 } catch (e) {}
             }
             a = Kd
         }
         a && (d = x.document, a = new eb(fb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = lb(a instanceof eb && a.constructor === eb && a.g === gb ? a.h : "type_error:Const"), Kc(d, a))
     };
 
     function O(a) {
         C(this, a, Md, null)
     }
     y(O, B);
     var Md = [4];
     O.prototype.getId = function() {
         return D(this, 3)
     };
 
     function Nd(a) {
         C(this, a, null, null)
     }
     y(Nd, B);
 
     function Od(a) {
         C(this, a, null, null)
     }
     y(Od, B);
 
     function Pd(a) {
         C(this, a, null, null)
     }
     y(Pd, B);
 
     function Qd(a) {
         C(this, a, Rd, null)
     }
     y(Qd, B);
     var Rd = [6, 7, 9, 10, 11];
 
     function Sd(a) {
         C(this, a, null, null)
     }
     y(Sd, B);
 
     function Td(a) {
         C(this, a, null, null)
     }
     y(Td, B);
 
     function Ud(a) {
         var b = new Td;
         return Ob(b, 5, a)
     };
 
     function Vd(a) {
         if (!a) return "";
         (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
         return a
     };
     var Wd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
 
     function Xd(a, b) {
         this.g = a;
         this.h = b
     }
 
     function Yd(a, b, c) {
         this.url = a;
         this.g = b;
         this.za = !!c;
         this.depth = null
     };
 
     function Zd() {
         this.i = "&";
         this.h = {};
         this.j = 0;
         this.g = []
     }
 
     function $d(a, b) {
         var c = {};
         c[a] = b;
         return [c]
     }
 
     function ae(a, b, c, d, e) {
         var f = [];
         Qc(a, function(g, h) {
             (g = be(g, b, c, d, e)) && f.push(h + "=" + g)
         });
         return f.join(b)
     }
 
     function be(a, b, c, d, e) {
         if (null == a) return "";
         b = b || "&";
         c = c || ",$";
         "string" == typeof c && (c = c.split(""));
         if (a instanceof Array) {
             if (d = d || 0, d < c.length) {
                 for (var f = [], g = 0; g < a.length; g++) f.push(be(a[g], b, c, d + 1, e));
                 return f.join(c[d])
             }
         } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ae(a, b, c, d, e + 1)) : "...";
         return encodeURIComponent(String(a))
     }
 
     function ce(a, b, c) {
         b = b + "//pagead2.googlesyndication.com" + c;
         var d = de(a) - c.length;
         if (0 > d) return "";
         a.g.sort(function(m, q) {
             return m - q
         });
         c = null;
         for (var e = "", f = 0; f < a.g.length; f++)
             for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                 if (!d) {
                     c = null == c ? g : c;
                     break
                 }
                 var l = ae(h[k], a.i, ",$");
                 if (l) {
                     l = e + l;
                     if (d >= l.length) {
                         d -= l.length;
                         b += l;
                         e = a.i;
                         break
                     }
                     c = null == c ? g : c
                 }
             }
         a = "";
         null != c && (a = e + "trn=" + c);
         return b + a
     }
 
     function de(a) {
         var b = 1,
             c;
         for (c in a.h) b = c.length > b ? c.length : b;
         return 3997 - b - a.i.length - 1
     };
 
     function ee(a, b, c, d, e, f) {
         if ((d ? a.g : Math.random()) < (e || .01)) try {
             if (c instanceof Zd) var g = c;
             else g = new Zd, Qc(c, function(k, l) {
                 var m = g,
                     q = m.j++;
                 k = $d(l, k);
                 m.g.push(q);
                 m.h[q] = k
             });
             var h = ce(g, a.h, "/pagead/gen_204?id=" + b + "&");
             h && ("undefined" !== typeof f ? ld(x, h, void 0 === f ? null : f) : ld(x, h, null))
         } catch (k) {}
     };
     var fe = null;
 
     function ge() {
         if (null === fe) {
             fe = "";
             try {
                 var a = "";
                 try {
                     a = x.top.location.hash
                 } catch (c) {
                     a = x.location.hash
                 }
                 if (a) {
                     var b = a.match(/\bdeid=([\d,]+)/);
                     fe = b ? b[1] : ""
                 }
             } catch (c) {}
         }
         return fe
     };
 
     function he() {
         var a = x.performance;
         return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
     }
 
     function ie() {
         var a = void 0 === a ? x : a;
         return (a = a.performance) && a.now ? a.now() : null
     };
 
     function je(a, b) {
         var c = ie() || he();
         this.label = a;
         this.type = b;
         this.value = c;
         this.duration = 0;
         this.uniqueId = Math.random();
         this.slotId = void 0
     };
     var ke = x.performance,
         le = !!(ke && ke.mark && ke.measure && ke.clearMarks),
         me = Xa(function() {
             var a;
             if (a = le) a = ge(), a = !!a.indexOf && 0 <= a.indexOf("1337");
             return a
         });
 
     function ne() {
         var a = oe;
         this.events = [];
         this.h = a || x;
         var b = null;
         a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
         this.g = me() || (null != b ? b : 1 > Math.random())
     }
 
     function pe(a) {
         a && ke && me() && (ke.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), ke.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
     }
     ne.prototype.start = function(a, b) {
         if (!this.g) return null;
         a = new je(a, b);
         b = "goog_" + a.label + "_" + a.uniqueId + "_start";
         ke && me() && ke.mark(b);
         return a
     };
     ne.prototype.end = function(a) {
         if (this.g && "number" === typeof a.value) {
             a.duration = (ie() || he()) - a.value;
             var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
             ke && me() && ke.mark(b);
             !this.g || 2048 < this.events.length || this.events.push(a)
         }
     };
 
     function qe() {
         var a = re;
         this.l = se;
         this.h = null;
         this.j = this.D;
         this.g = void 0 === a ? null : a;
         this.i = !1
     }
     n = qe.prototype;
     n.Ha = function(a) {
         this.j = a
     };
     n.ma = function(a) {
         this.h = a
     };
     n.Ia = function(a) {
         this.i = a
     };
     n.ga = function(a, b, c) {
         try {
             if (this.g && this.g.g) {
                 var d = this.g.start(a.toString(), 3);
                 var e = b();
                 this.g.end(d)
             } else e = b()
         } catch (h) {
             b = !0;
             try {
                 pe(d), b = this.j(a, new zc(h, {
                     message: te(h)
                 }), void 0, c)
             } catch (k) {
                 this.D(217, k)
             }
             if (b) {
                 var f, g;
                 null == (f = window.console) || null == (g = f.error) || g.call(f, h)
             } else throw h;
         }
         return e
     };
     n.Ca = function(a, b, c, d) {
         var e = this;
         return function(f) {
             for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
             return e.ga(a, function() {
                 return b.apply(c, g)
             }, d)
         }
     };
     n.D = function(a, b, c, d, e) {
         e = e || "jserror";
         try {
             var f = new Zd;
             f.g.push(1);
             f.h[1] = $d("context", a);
             Ac(b) || (b = new zc(b, {
                 message: te(b)
             }));
             if (b.msg) {
                 var g = b.msg.substring(0, 512);
                 f.g.push(2);
                 f.h[2] = $d("msg", g)
             }
             var h = b.meta || {};
             if (this.h) try {
                 this.h(h)
             } catch (gc) {}
             if (d) try {
                 d(h)
             } catch (gc) {}
             b = [h];
             f.g.push(3);
             f.h[3] = b;
             d = x;
             b = [];
             g = null;
             do {
                 var k = d;
                 if (Jc(k)) {
                     var l = k.location.href;
                     g = k.document && k.document.referrer || null
                 } else l = g, g = null;
                 b.push(new Yd(l || "", k));
                 try {
                     d = k.parent
                 } catch (gc) {
                     d = null
                 }
             } while (d && k != d);
             l = 0;
             for (var m =
                     b.length - 1; l <= m; ++l) b[l].depth = m - l;
             k = x;
             if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                 for (m = 1; m < b.length; ++m) {
                     var q = b[m];
                     q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.za = !0)
                 }
             var t = new Yd(x.location.href, x, !1);
             k = null;
             var u = b.length - 1;
             for (q = u; 0 <= q; --q) {
                 var A = b[q];
                 !k && Wd.test(A.url) && (k = A);
                 if (A.url && !A.za) {
                     t = A;
                     break
                 }
             }
             A = null;
             var E = b.length && b[u].url;
             0 != t.depth && E && (A = b[u]);
             var F = new Xd(t, A);
             if (F.h) {
                 var xa = F.h.url || "";
                 f.g.push(4);
                 f.h[4] = $d("top", xa)
             }
             var Ga = {
                 url: F.g.url || ""
             };
             if (F.g.url) {
                 var Wc = F.g.url.match(Hc),
                     hf = Wc[1],
                     jf = Wc[3],
                     kf = Wc[4];
                 t = "";
                 hf && (t += hf + ":");
                 jf && (t += "//", t += jf, kf && (t += ":" + kf));
                 var lf = t
             } else lf = "";
             Ga = [Ga, {
                 url: lf
             }];
             f.g.push(5);
             f.h[5] = Ga;
             ee(this.l, e, f, this.i, c)
         } catch (gc) {
             try {
                 ee(this.l, e, {
                     context: "ecmserr",
                     rctx: a,
                     msg: te(gc),
                     url: F && F.g.url
                 }, this.i, c)
             } catch (Ym) {}
         }
         return !0
     };
 
     function te(a) {
         var b = a.toString();
         a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
         a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
         if (a.stack) {
             a = a.stack;
             try {
                 -1 == a.indexOf(b) && (a = b + "\n" + a);
                 for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                 b = a.replace(/\n */g, "\n")
             } catch (d) {}
         }
         return b
     };
 
     function P(a) {
         a = void 0 === a ? "" : a;
         var b = Error.call(this);
         this.message = b.message;
         "stack" in b && (this.stack = b.stack);
         this.name = "TagError";
         this.message = a ? "adsbygoogle.push() error: " + a : "";
         Error.captureStackTrace ? Error.captureStackTrace(this, P) : this.stack = Error().stack || ""
     }
     qa(P, Error);
 
     function ue() {
         this.g = null;
         this.i = !1;
         this.j = Math.random();
         this.h = this.D
     }
     n = ue.prototype;
     n.ma = function(a) {
         this.g = a
     };
     n.Ia = function(a) {
         this.i = a
     };
     n.Ha = function(a) {
         this.h = a
     };
     n.D = function(a, b, c, d, e) {
         if ((this.i ? this.j : Math.random()) > (void 0 === c ? .01 : c)) return !1;
         Ac(b) || (b = new zc(b, {
             context: a,
             id: void 0 === e ? "jserror" : e
         }));
         if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
         x.google_js_errors = x.google_js_errors || [];
         x.google_js_errors.push(b);
         x.error_rep_loaded || (Kc(x.document, lb(x.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), x.error_rep_loaded = !0);
         return !1
     };
     n.ga = function(a, b, c) {
         try {
             var d = b()
         } catch (e) {
             if (!this.h(a, e, .01, c, "jserror")) throw e;
         }
         return d
     };
     n.Ca = function(a, b, c, d) {
         var e = this;
         return function(f) {
             for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
             return e.ga(a, function() {
                 return b.apply(c, g)
             }, d)
         }
     };
     var se, ve, oe = wd(),
         re = new ne;
 
     function we(a) {
         null != a && (oe.google_measure_js_timing = a);
         oe.google_measure_js_timing || (a = re, a.g = !1, a.events != a.h.google_js_reporting_queue && (me() && Pa(a.events, pe), a.events.length = 0))
     }
     se = new function() {
         var a = void 0 === a ? L : a;
         this.h = "http:" === a.location.protocol ? "http:" : "https:";
         this.g = Math.random()
     };
     "number" !== typeof oe.google_srt && (oe.google_srt = Math.random());
     var xe = se,
         ye = oe.google_srt;
     0 <= ye && 1 >= ye && (xe.g = ye);
     ve = new qe;
     ve.ma(function() {});
     ve.Ia(!0);
     "complete" == oe.document.readyState ? we() : re.g && Bc(oe, "load", function() {
         we()
     });
 
     function ze(a, b, c) {
         return ve.ga(a, b, c)
     }
 
     function Ae(a, b) {
         return ve.Ca(a, b, void 0, void 0)
     }
 
     function Be(a, b, c) {
         ee(se, a, b, !0, c, void 0)
     }
 
     function Ce(a, b, c, d) {
         var e;
         Ac(b) ? e = b.msg || te(b.error) : e = te(b);
         return 0 == e.indexOf("TagError") ? (c = b instanceof zc ? b.error : b, c.pbr || (c.pbr = !0, ve.D(a, b, .1, d, "puberror")), !1) : ve.D(a, b, c, d)
     };
     var De = /^true$/.test("false");
 
     function Ee(a) {
         var b = window;
         var c = void 0 === c ? null : c;
         Bc(b, "message", function(d) {
             try {
                 var e = JSON.parse(d.data)
             } catch (f) {
                 return
             }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
         })
     };
     var Fe = {
         overlays: 1,
         interstitials: 2,
         vignettes: 2,
         inserts: 3,
         immersives: 4,
         list_view: 5
     };
 
     function Ge() {
         this.wasPlaTagProcessed = !1;
         this.wasReactiveAdConfigReceived = {};
         this.adCount = {};
         this.wasReactiveAdVisible = {};
         this.stateForType = {};
         this.reactiveTypeEnabledInAsfe = {};
         this.wasReactiveTagRequestSent = !1;
         this.reactiveTypeDisabledByPublisher = {};
         this.tagSpecificState = {};
         this.messageValidationEnabled = !1;
         this.floatingAdsStacking = new He
     }
 
     function Ie(a) {
         a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new He) : a.google_reactive_ads_global_state = new Ge;
         return a.google_reactive_ads_global_state
     }
 
     function He() {
         this.maxZIndexRestrictions = {};
         this.nextRestrictionId = 0;
         this.maxZIndexListeners = []
     };
 
     function Je(a) {
         a = a.document;
         var b = {};
         a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
         return b || {}
     }
 
     function Q(a) {
         return Je(a).clientWidth
     };
 
     function R() {
         this.s = this.s;
         this.C = this.C
     }
     R.prototype.s = !1;
     R.prototype.i = function() {
         if (this.C)
             for (; this.C.length;) this.C.shift()()
     };
 
     function Ke(a, b, c) {
         return Le(a, void 0 === c ? "" : c, function(d) {
             return Sa(J(d, Ub, 2), function(e) {
                 return D(e, 1) === b
             })
         })
     }
 
     function Me(a, b, c) {
         c = void 0 === c ? "" : c;
         var d = zd(a) || a;
         return Ne(d, b) ? !0 : Le(a, c, function(e) {
             return Sa(D(e, 3), function(f) {
                 return f === b
             })
         })
     }
 
     function Oe(a) {
         return Le(x, void 0 === a ? "" : a, function() {
             return !0
         })
     }
 
     function Ne(a, b) {
         a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
         return !!a && Va(a.split(","), b.toString())
     }
 
     function Le(a, b, c) {
         a = zd(a) || a;
         var d = Pe(a);
         b && (b = Vd(String(b)));
         return $a(d, function(e, f) {
             return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
         })
     }
 
     function Pe(a) {
         a = Qe(a);
         var b = {};
         pd(a, function(c, d) {
             try {
                 var e = new Sb(c);
                 b[d] = e
             } catch (f) {}
         });
         return b
     }
 
     function Qe(a) {
         try {
             var b = a.localStorage.getItem("google_adsense_settings");
             if (!b) return {};
             var c = JSON.parse(b);
             return c !== Object(c) ? {} : Za(c, function(d, e) {
                 return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
             })
         } catch (d) {
             return {}
         }
     };
 
     function Re() {
         var a = Eb("");
         return /^\d+$/.test(a) ? a : ""
     };
 
     function Se() {
         var a = {};
         this[3] = (a[23] = function(b) {
             return Ke(L, parseInt(b, 10))
         }, a[24] = function(b) {
             return Me(L, parseInt(b, 10))
         }, a);
         a = {};
         this[4] = (a[7] = function(b) {
             try {
                 var c = window.localStorage
             } catch (f) {
                 c = null
             }
             var d = b;
             b = window;
             d = void 0 === d ? 0 : d;
             d = 0 != d ? "google_experiment_mod" + d : "google_experiment_mod";
             var e = Tc(c, d);
             c = null === e ? Uc(b, c, d) : e;
             return null != c ? c : void 0
         }, a);
         a = {};
         this[5] = (a[6] = Re, a)
     }
     Ba(Se);
 
     function Te(a) {
         C(this, a, Ue, null)
     }
     y(Te, B);
     var Ue = [4];
 
     function Ve(a) {
         C(this, a, null, null)
     }
     y(Ve, B);
 
     function We(a) {
         C(this, a, Xe, Ye)
     }
     y(We, B);
     var Xe = [5],
         Ye = [
             [1, 2, 3, 6, 7]
         ];
 
     function Ze() {
         var a = {};
         this.g = (a[3] = {}, a[4] = {}, a[5] = {}, a)
     }
     Ba(Ze);
     var $e = /^true$/.test("false");
 
     function af(a, b) {
         switch (b) {
             case 1:
                 return G(a, 1, 0);
             case 2:
                 return G(a, 2, 0);
             case 3:
                 return G(a, 3, 0);
             case 6:
                 return G(a, 6, 0);
             default:
                 return null
         }
     }
 
     function bf(a, b) {
         if (!a) return null;
         switch (b) {
             case 1:
                 return Mb(a, 1);
             case 7:
                 return H(a, 3);
             case 2:
                 return Nb(a, 2);
             case 3:
                 return H(a, 3);
             case 6:
                 return D(a, 4);
             default:
                 return null
         }
     }
     var cf = Xa(function() {
         if (!$e) return {};
         try {
             var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
             if (a) return JSON.parse(a)
         } catch (b) {}
         return {}
     });
 
     function df(a, b, c, d) {
         d = void 0 === d ? 0 : d;
         var e = cf();
         if (null != e[b]) return e[b];
         b = ef(d)[b];
         if (!b) return c;
         b = new We(b);
         b = ff(b);
         a = bf(b, a);
         return null != a ? a : c
     }
 
     function ff(a) {
         var b = Ze.m().g;
         if (b) {
             var c = Ua(J(a, Ve, 5), function(d) {
                 return Jd(I(d, Cd, 1), b)
             });
             if (c) return I(c, Te, 2)
         }
         return I(a, Te, 4)
     }
 
     function gf() {
         this.g = {};
         this.h = []
     }
     Ba(gf);
 
     function mf(a, b, c) {
         return !!df(1, a, void 0 === b ? !1 : b, c)
     }
 
     function nf(a, b, c) {
         b = void 0 === b ? 0 : b;
         a = Number(df(2, a, b, c));
         return isNaN(a) ? b : a
     }
 
     function of (a, b, c) {
         return df(3, a, void 0 === b ? "" : b, c)
     }
 
     function pf(a, b, c) {
         b = void 0 === b ? [] : b;
         return df(6, a, b, c)
     }
 
     function ef(a) {
         return gf.m().g[a] || (gf.m().g[a] = {})
     }
 
     function qf(a, b) {
         var c = ef(b);
         Qc(a, function(d, e) {
             return c[e] = d
         })
     }
 
     function rf(a, b) {
         var c = ef(b);
         Pa(a, function(d) {
             var e = Kb(d, Ye[0]);
             (e = af(d, e)) && (c[e] = Pb(d))
         })
     }
 
     function sf(a, b) {
         var c = ef(b);
         Pa(a, function(d) {
             var e = new We(d),
                 f = Kb(e, Ye[0]);
             (e = af(e, f)) && (c[e] || (c[e] = d))
         })
     }
 
     function tf() {
         return Ra(r(Object, "keys").call(Object, gf.m().g), function(a) {
             return Number(a)
         })
     }
 
     function uf(a) {
         Va(gf.m().h, a) || qf(ef(4), a)
     };
 
     function S(a) {
         this.methodName = a
     }
     var vf = new S(1),
         wf = new S(15),
         xf = new S(2),
         yf = new S(3),
         zf = new S(4),
         Af = new S(5),
         Bf = new S(6),
         Cf = new S(7),
         Df = new S(8),
         Ef = new S(9),
         Ff = new S(10),
         Gf = new S(11),
         Hf = new S(12),
         If = new S(13),
         Jf = new S(14);
 
     function T(a, b, c) {
         c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
             value: b
         })
     }
 
     function Kf(a, b, c) {
         return b[a.methodName] || c || function() {}
     }
 
     function Lf(a) {
         T(Af, mf, a);
         T(Bf, nf, a);
         T(Cf, of , a);
         T(Df, pf, a);
         T(If, sf, a);
         T(wf, uf, a)
     }
 
     function Mf(a) {
         T(zf, function(b) {
             Ze.m().g = b
         }, a);
         T(Ef, function(b, c) {
             var d = Ze.m();
             d.g[3][b] || (d.g[3][b] = c)
         }, a);
         T(Ff, function(b, c) {
             var d = Ze.m();
             d.g[4][b] || (d.g[4][b] = c)
         }, a);
         T(Gf, function(b, c) {
             var d = Ze.m();
             d.g[5][b] || (d.g[5][b] = c)
         }, a);
         T(Jf, function(b) {
             for (var c = Ze.m(), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                 var f = e.value;
                 e = void 0;
                 var g = c.g[f];
                 f = b[f];
                 for (e in f) g[e] = f[e]
             }
         }, a)
     }
 
     function Nf(a) {
         a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
             value: !0
         })
     };
 
     function Of(a) {
         a = void 0 === a ? x : a;
         return a.ggeac || (a.ggeac = {})
     };
 
     function Pf() {
         this.h = function() {};
         this.g = function() {
             return []
         }
     }
 
     function Qf(a, b, c) {
         a.h = function(d) {
             Kf(xf, b, function() {
                 return []
             })(d, c)
         };
         a.g = function() {
             return Kf(yf, b, function() {
                 return []
             })(c)
         }
     }
     Ba(Pf);
 
     function Rf(a, b) {
         try {
             a: {
                 var c = a.split(".");a = x;
                 for (var d = 0, e; d < c.length; d++)
                     if (e = a, a = a[c[d]], null == a) {
                         var f = null;
                         break a
                     } f = "function" === typeof a ? e[c[d - 1]]() : a
             }
             if (typeof f === b) return f
         }
         catch (g) {}
     }
 
     function Sf() {
         var a = {};
         this[3] = (a[8] = function(b) {
             try {
                 return null != Aa(b)
             } catch (c) {}
         }, a[9] = function(b) {
             try {
                 var c = Aa(b)
             } catch (d) {
                 return
             }
             if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
             return b
         }, a[10] = function() {
             return window == window.top
         }, a[6] = function(b) {
             return Va(Pf.m().g(), parseInt(b, 10))
         }, a[27] = function(b) {
             b = Rf(b, "boolean");
             return void 0 !== b ? b : void 0
         }, a);
         a = {};
         this[4] = (a[3] = function() {
             return $c()
         }, a[6] = function(b) {
             b = Rf(b, "number");
             return void 0 !==
                 b ? b : void 0
         }, a);
         a = {};
         this[5] = (a[2] = function() {
             return window.location.href
         }, a[3] = function() {
             try {
                 return window.top.location.hash
             } catch (b) {
                 return ""
             }
         }, a[4] = function(b) {
             b = Rf(b, "string");
             return void 0 !== b ? b : void 0
         }, a)
     }
     Ba(Sf);
 
     function Tf(a) {
         C(this, a, Uf, null)
     }
     y(Tf, B);
     var Uf = [2];
     Tf.prototype.getId = function() {
         return G(this, 1, 0)
     };
     Tf.prototype.da = function() {
         return G(this, 7, 0)
     };
 
     function Vf(a) {
         C(this, a, Wf, null)
     }
     y(Vf, B);
     var Wf = [2];
     Vf.prototype.da = function() {
         return G(this, 5, 0)
     };
 
     function Xf(a) {
         C(this, a, Yf, null)
     }
     y(Xf, B);
 
     function Zf(a) {
         C(this, a, $f, null)
     }
     y(Zf, B);
     var Yf = [1, 4, 2, 3],
         $f = [2];
     Zf.prototype.da = function() {
         return G(this, 1, 0)
     };
     var ag = [12, 13];
 
     function bg() {}
     bg.prototype.init = function(a, b, c) {
         var d = this;
         c = void 0 === c ? {} : c;
         var e = void 0 === c.xa ? !1 : c.xa,
             f = void 0 === c.Sa ? {} : c.Sa;
         c = void 0 === c.Va ? [] : c.Va;
         this.i = a;
         this.l = {};
         this.s = e;
         this.j = f;
         a = {};
         this.g = (a[b] = [], a[4] = [], a);
         this.h = {};
         (b = ge()) && Pa(b.split(",") || [], function(g) {
             (g = parseInt(g, 10)) && (d.h[g] = !0)
         });
         Pa(c, function(g) {
             d.h[g] = !0
         });
         return this
     };
 
     function cg(a, b, c) {
         if (a.l[b]) return .001 >= Math.random() && md({
             b: c,
             dp: b
         }, "tagging_dupdiv"), !0;
         a.l[b] = !0;
         return !1
     }
 
     function dg(a, b, c) {
         var d = [],
             e = eg(a.i, b);
         if (9 !== b && cg(a, b, c) || !e.length) return d;
         var f = Va(ag, b);
         Pa(e, function(g) {
             if (g = fg(a, g, c)) {
                 var h = g.getId();
                 d.push(h);
                 gg(a, h, f ? 4 : c);
                 var k = J(g, We, 2);
                 k && (f ? Pa(tf(), function(l) {
                     return rf(k, l)
                 }) : rf(k, c))
             }
         });
         return d
     }
 
     function gg(a, b, c) {
         a.g[c] || (a.g[c] = []);
         a = a.g[c];
         Va(a, b) ? md({
             eids: JSON.stringify(a),
             dup: b
         }, "gpt_dupeid") : a.push(b)
     }
 
     function hg(a, b) {
         a.i.push.apply(a.i, ja(Qa(Ra(b, function(c) {
             return new Zf(c)
         }), function(c) {
             return !Va(ag, c.da())
         })))
     }
 
     function fg(a, b, c) {
         var d = Ze.m().g;
         if (!Jd(I(b, Cd, 3), d)) return null;
         var e = J(b, Tf, 2),
             f = e.length * G(b, 1, 0),
             g = G(b, 6, 0);
         if (g) {
             f = d[4];
             switch (c) {
                 case 2:
                     var h = f[8];
                     break;
                 case 1:
                     h = f[7]
             }
             c = void 0;
             if (h) try {
                 c = h(g)
             } catch (k) {}
             return (b = ig(b, c)) ? jg(a, [b], 1) : null
         }
         if (g = G(b, 10, 0)) {
             f = null;
             switch (c) {
                 case 1:
                     f = d[4][9];
                     break;
                 case 2:
                     f = d[4][10];
                     break;
                 default:
                     return null
             }
             c = f ? f(String(g)) : void 0;
             return void 0 === c && 1 === G(b, 11, 0) ? null : (b = ig(b, c)) ? jg(a, [b], 1) : null
         }
         c = d ? Qa(e, function(k) {
             return Jd(I(k, Cd, 3), d)
         }) : e;
         return c.length ? (b =
             G(b, 4, 0)) ? kg(a, b, f, c) : jg(a, c, f / 1E3) : null
     }
 
     function kg(a, b, c, d) {
         var e = null != a.j[b] ? a.j[b] : 1E3;
         if (0 >= e) return null;
         d = jg(a, d, c / e);
         a.j[b] = d ? 0 : e - c;
         return d
     }
 
     function jg(a, b, c) {
         var d = a.h,
             e = Ta(b, function(f) {
                 return !!d[f.getId()]
             });
         return e ? e : a.s ? null : Mc(b, c)
     }
 
     function lg(a, b) {
         T(vf, function(c) {
             a.h[c] = !0
         }, b);
         T(xf, function(c, d) {
             return dg(a, c, d)
         }, b);
         T(yf, function(c) {
             return (a.g[c] || []).concat(a.g[4])
         }, b);
         T(Hf, function(c) {
             return hg(a, c)
         }, b)
     }
     Ba(bg);
 
     function eg(a, b) {
         return (a = Ta(a, function(c) {
             return c.da() == b
         })) && J(a, Vf, 2) || []
     }
 
     function ig(a, b) {
         var c = J(a, Tf, 2),
             d = c.length,
             e = G(a, 1, 0);
         a = G(a, 8, 0);
         b = void 0 !== b ? b : Math.floor(1E3 * Pc(window));
         var f = (b - a) % d;
         if (b < a || b - a - f >= d * e - 1) return null;
         c = c[f];
         d = Ze.m().g;
         return !c || d && !Jd(I(c, Cd, 3), d) ? null : c
     };
 
     function U(a, b) {
         this.g = a;
         this.defaultValue = void 0 === b ? !1 : b
     }
 
     function mg(a, b) {
         this.g = a;
         this.defaultValue = void 0 === b ? 0 : b
     };
     var ng = new mg(62, .001),
         og = new U(1030),
         pg = new mg(1017, -1),
         qg = new U(316),
         rg = new U(313),
         sg = new U(369),
         tg = new mg(1041),
         ug = new U(1042),
         vg = new U(1040),
         wg = new U(1026),
         xg = new U(1053),
         yg = new U(356),
         zg = new mg(1046),
         Ag = new U(357),
         Bg = new U(1049, !0),
         Cg = new U(218),
         Dg = new U(216),
         Eg = new U(217),
         Fg = new U(1002),
         Gg = new U(233),
         Hg = new U(232),
         Ig = new U(1058),
         Jg = new U(227),
         Kg = new U(208),
         Lg = new U(310, !0),
         Mg = new U(1048),
         Ng = new U(282),
         Og = new function(a, b) {
             this.g = a;
             this.defaultValue = void 0 === b ? "" : b
         }(14),
         Pg = new mg(1008, 2),
         Qg =
         new U(251),
         Rg = new U(1936, !0),
         Sg = new U(1928),
         Tg = new U(203),
         Ug = new U(241),
         Vg = new U(84),
         Wg = new U(1938),
         Xg = new mg(1929, 50),
         Yg = new mg(1905),
         Zg = new U(240);
 
     function $g() {
         var a = {};
         this.h = function(b, c) {
             return null != a[b] ? a[b] : c
         };
         this.i = function(b, c) {
             return null != a[b] ? a[b] : c
         };
         this.g = function(b, c) {
             return null != a[b] ? a[b] : c
         };
         this.l = function(b, c) {
             return null != a[b] ? a[b] : c
         };
         this.j = function() {}
     }
     Ba($g);
 
     function V(a) {
         return $g.m().h(a.g, a.defaultValue)
     }
 
     function ah(a) {
         return $g.m().i(a.g, a.defaultValue)
     };
 
     function bh() {
         this.g = function() {}
     }
     Ba(bh);
 
     function ch(a) {
         bh.m().g(a)
     };
 
     function dh(a, b, c, d) {
         var e = 1;
         d = void 0 === d ? Of() : d;
         e = void 0 === e ? 0 : e;
         d.hasOwnProperty("init-done") ? (Kf(Hf, d)(Ra(J(a, Zf, 2), function(f) {
             return Pb(f)
         })), Kf(If, d)(Ra(J(a, We, 1), function(f) {
             return Pb(f)
         }), e), b && Kf(Jf, d)(b), eh(d, e)) : (lg(bg.m().init(J(a, Zf, 2), e, c), d), Lf(d), Mf(d), Nf(d), eh(d, e), rf(J(a, We, 1), e), $e = $e || !(!c || !c.Qa), ch(Sf.m()), b && ch(b))
     }
 
     function eh(a, b) {
         a = void 0 === a ? Of() : a;
         b = void 0 === b ? 0 : b;
         var c = a,
             d = b;
         d = void 0 === d ? 0 : d;
         Qf(Pf.m(), c, d);
         fh(a, b);
         bh.m().g = Kf(Jf, a);
         $g.m().j()
     }
 
     function fh(a, b) {
         b = void 0 === b ? 0 : b;
         var c = $g.m();
         c.h = function(d, e) {
             return Kf(Af, a, function() {
                 return !1
             })(d, e, b)
         };
         c.i = function(d, e) {
             return Kf(Bf, a, function() {
                 return 0
             })(d, e, b)
         };
         c.g = function(d, e) {
             return Kf(Cf, a, function() {
                 return ""
             })(d, e, b)
         };
         c.l = function(d, e) {
             return Kf(Df, a, function() {
                 return []
             })(d, e, b)
         };
         c.j = function() {
             Kf(wf, a)(b)
         }
     };
 
     function gh(a) {
         var b = K(a);
         if (b.plle) eh(Of(a), 1);
         else {
             b.plle = !0;
             try {
                 var c = a.localStorage
             } catch (e) {
                 c = null
             }
             b = c;
             null == Tc(b, "goog_pem_mod") && Uc(a, b, "goog_pem_mod");
             b = [null, null];
             try {
                 var d = JSON.parse("[[[null,62,null,[null,0.001]],[null,1010,null,[null,1]],[350,null,null,[1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1006,null,null,[1]],[1009,null,null,[1]],[1049,null,null,[1]],[375,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[1036,null,null,[1]],[310,null,null,[1]],[1051,null,null,[1]],[1048,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[1028,null,null,[1]],[null,1008,null,[null,2]],[null,63,null,[null,30]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[230,null,null,[1]],[1931,null,null,[1]],[null,null,null,[null,null,null,[\"A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd\/r0vL69mRRA36YutI9P\/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m\/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[null,1929,null,[null,50]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9],[1925,null,null,[1]]],[[10,[[null,[[21066649,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066650,[[null,null,14,[null,null,\"exp=21066650\"]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066651,[[null,null,14,[null,null,\"exp=21066651\"]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066652,[[1006,null,null,[]],[356,null,null,[1]],[null,null,14,[null,null,\"exp=21066652\"]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066653,[[357,null,null,[1]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,null,5],[null,[[21066699,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[1028,null,null,[1]],[null,1008,null,[null,2]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,25,400],[null,[[21066792,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066793,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,25,400],[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44731609],[44731610]]],[null,[[44737536],[44737537,[[1036,null,null,[1]]]]]],[5,[[44739521],[44739522,[[1042,null,null,[1]]]],[44739523,[[null,1041,null,[null,50]],[1040,null,null,[1]]]],[44739524,[[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]]]],[44739525,[[null,1041,null,[null,100]],[1040,null,null,[1]]]],[44739526,[[null,1041,null,[null,100]],[1042,null,null,[1]],[1040,null,null,[1]]]]]],[10,[[21067213],[21067214]]],[100,[[31060287],[31060288,[[1048,null,null,[1]]]]]],[50,[[44735931],[44735932,[[1045,null,null,[1]]]]]],[50,[[44736524],[44736525,[[null,57,null,[null,180]],[null,58,null,[null,180]]]]]],[10,[[44737561],[44737562,[[null,1050,null,[null,40]]]],[44737563,[[null,1050,null,[null,50]]]],[44737564,[[null,1050,null,[null,60]]]]]],[5,[[44739390],[44739391,[[1033,null,null,[1]]]],[44739392,[[1033,null,null,[1]]]]]],[null,[[21067422,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067423,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[null,[[21067424,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067425,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[1,[[21067569],[21067570,[[1019,null,null,[1]]]]]],[10,[[21068108],[21068109,[[1026,null,null,[1]]]]]],[500,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[1000,[[31060008,[[null,null,14,[null,null,\"exp=31060008\"]]],[6,null,null,null,6,null,\"31060008\"]],[31060009,[[null,null,14,[null,null,\"exp=31060009\"]]],[6,null,null,null,6,null,\"31060009\"]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[1,[[31060138],[31060139,[[1043,null,null,[1]]]]]],[10,[[31060614],[31060615,[[383,null,null,[1]]]]]],[10,[[31060710],[31060711,[[1058,null,null,[1]]]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[1000,[[44740079,[[310,null,null,[1]]]]]]]],[12,[[1000,[[44739387,[[1036,null,null,[1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[10,[[31060622],[31060623,[[1938,null,null,[1]]]]]],[10,[[44740386],[44740387,[[1940,null,null,[1]]]]]]]],[11,[[10,[[44739537,[[290,null,null,[1]],[190,null,null,[1]]]],[44739538,[[null,1056,null,[null,1413]],[null,1057,null,[null,700]],[290,null,null,[1]],[190,null,null,[1]]]]]],[10,[[44739990,[[290,null,null,[1]],[190,null,null,[1]]]],[44739991,[[null,1056,null,[null,3000]],[null,1057,null,[null,700]],[290,null,null,[1]],[190,null,null,[1]]]],[44739992,[[null,1056,null,[null,3000]],[null,1057,null,[null,700]],[290,null,null,[1]],[190,null,null,[1]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060474,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[null,[[31060534,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060535,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]],[10,[[31060666],[31060667,[[null,1927,null,[null,100]],[null,null,null,[null,null,null,[\"AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr\/\/PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1939]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[1000,[[31060665]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]]]],[13,[[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]],[1,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]]]]]]")
             } catch (e) {
                 d = b
             }
             Ld(13, [d]);
             dh(new Xf(d), Se.m(), {
                 xa: De && !!a.google_disable_experiments,
                 Qa: De
             }, Of(a));
             Pf.m().h(12);
             Pf.m().h(10);
             d = Wb(a);
             nb("") && d.push("");
             a = zd(a) || a;
             Ad(a.location, "google_mc_lab") &&
                 d.push("44738307")
         }
     };
 
     function hh(a) {
         var b = /[a-zA-Z0-9._~-]/,
             c = /%[89a-zA-Z]./;
         return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
             if (!d.match(c)) {
                 var e = decodeURIComponent(d);
                 if (e.match(b)) return e
             }
             return d.toUpperCase()
         })
     }
 
     function ih(a) {
         for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
             var e = a[d];
             b = e.match(c) ? b + e : b + encodeURIComponent(e)
         }
         return b
     };
 
     function jh(a) {
         C(this, a, null, kh)
     }
     y(jh, B);
 
     function lh(a) {
         C(this, a, null, null)
     }
     y(lh, B);
 
     function mh(a) {
         C(this, a, null, null)
     }
     y(mh, B);
 
     function nh(a) {
         C(this, a, null, null)
     }
     y(nh, B);
     var kh = [
         [1, 2, 3]
     ];
 
     function oh(a) {
         C(this, a, ph, null)
     }
     y(oh, B);
 
     function qh(a) {
         C(this, a, null, rh)
     }
     y(qh, B);
 
     function sh(a) {
         C(this, a, null, null)
     }
     y(sh, B);
     var ph = [1],
         rh = [
             [1, 2]
         ];
 
     function th(a) {
         C(this, a, uh, null)
     }
     y(th, B);
 
     function vh(a) {
         C(this, a, null, null)
     }
     y(vh, B);
 
     function wh(a) {
         C(this, a, xh, null)
     }
     y(wh, B);
 
     function yh(a) {
         C(this, a, null, null)
     }
     y(yh, B);
 
     function zh(a) {
         C(this, a, null, null)
     }
     y(zh, B);
 
     function Ah(a) {
         C(this, a, null, null)
     }
     y(Ah, B);
     var uh = [1, 2, 5, 7],
         xh = [2, 5, 6, 11];
 
     function Bh(a, b) {
         a = ih(hh(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
         var c = Rc(a),
             d = Ch(a);
         return r(b, "find").call(b, function(e) {
             var f = null != D(e, 7) ? D(I(e, yh, 7), 1) : D(e, 1);
             e = null != D(e, 7) ? D(I(e, yh, 7), 2) : 2;
             if ("number" !== typeof f) return !1;
             switch (e) {
                 case 1:
                     return f == c;
                 case 2:
                     return d[f] || !1
             }
             return !1
         }) || null
     }
 
     function Ch(a) {
         for (var b = {};;) {
             b[Rc(a)] = !0;
             if (!a) return b;
             a = a.substring(0, a.lastIndexOf("/"))
         }
     };
 
     function Dh(a) {
         this.g = a.slice(0)
     }
     Dh.prototype.apply = function(a) {
         return new Dh(a(this.g.slice(0)))
     };
     Dh.prototype.add = function(a) {
         var b = this.g.slice(0);
         b.push(a);
         return new Dh(b)
     };
 
     function Eh(a) {
         var b = void 0 === a.ta ? void 0 : a.ta,
             c = void 0 === a.Pa ? void 0 : a.Pa,
             d = void 0 === a.Ea ? void 0 : a.Ea;
         this.g = void 0 === a.Ma ? void 0 : a.Ma;
         this.j = new Dh(b || []);
         this.i = d;
         this.h = c
     };
 
     function Fh() {
         this.g = {};
         this.h = {}
     }
     Fh.prototype.set = function(a, b) {
         var c = Gh(a);
         this.g[c] = b;
         this.h[c] = a
     };
     Fh.prototype.get = function(a, b) {
         a = Gh(a);
         return void 0 !== this.g[a] ? this.g[a] : b
     };
 
     function Gh(a) {
         return a instanceof Object ? String(Da(a)) : a + ""
     };
 
     function Hh(a) {
         var b = [],
             c = a.j;
         c && c.g.length && b.push({
             R: "a",
             Y: Ih(c)
         });
         null != a.g && b.push({
             R: "as",
             Y: a.g
         });
         null != a.h && b.push({
             R: "i",
             Y: String(a.h)
         });
         null != a.i && b.push({
             R: "rp",
             Y: String(a.i)
         });
         b.sort(function(d, e) {
             return d.R.localeCompare(e.R)
         });
         b.unshift({
             R: "t",
             Y: "aa"
         });
         return b
     }
 
     function Ih(a) {
         a = a.g.slice(0).map(Jh);
         a = JSON.stringify(a);
         return Rc(a)
     }
 
     function Jh(a) {
         var b = {};
         null != D(a, 7) && (b.q = D(a, 7));
         null != D(a, 2) && (b.o = D(a, 2));
         null != D(a, 5) && (b.p = D(a, 5));
         return b
     };
 
     function Kh(a, b) {
         this.va = a;
         this.Da = b
     }
 
     function Lh(a) {
         var b = [].slice.call(arguments).filter(Wa(function(e) {
             return null === e
         }));
         if (!b.length) return null;
         var c = [],
             d = {};
         b.forEach(function(e) {
             c = c.concat(e.va || []);
             d = r(Object, "assign").call(Object, d, e.Da)
         });
         return new Kh(c, d)
     }
 
     function Mh(a) {
         switch (a) {
             case 1:
                 return new Kh(null, {
                     google_ad_semantic_area: "mc"
                 });
             case 2:
                 return new Kh(null, {
                     google_ad_semantic_area: "h"
                 });
             case 3:
                 return new Kh(null, {
                     google_ad_semantic_area: "f"
                 });
             case 4:
                 return new Kh(null, {
                     google_ad_semantic_area: "s"
                 });
             default:
                 return null
         }
     }
 
     function Nh(a) {
         if (null == a) a = null;
         else {
             var b = Hh(a);
             a = [];
             b = w(b);
             for (var c = b.next(); !c.done; c = b.next()) {
                 c = c.value;
                 var d = String(c.Y);
                 a.push(c.R + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
             }
             a = new Kh(null, {
                 google_placement_id: a.join("~")
             })
         }
         return a
     };
     var Oh = {},
         Ph = new Kh(["google-auto-placed"], (Oh.google_reactive_ad_format = 40, Oh.google_tag_origin = "qs", Oh));
     var Qh = {},
         Rh = (Qh.google_ad_channel = !0, Qh.google_ad_host = !0, Qh);
 
     function Sh(a, b) {
         a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
         Be("ama", b, .01)
     }
 
     function Th(a) {
         var b = {};
         Qc(Rh, function(c, d) {
             d in a && (b[d] = a[d])
         });
         return b
     };
 
     function Uh(a) {
         if (V(qg)) var b = null;
         else try {
             b = a.getItem("google_ama_config")
         } catch (d) {
             b = null
         }
         try {
             var c = b ? Rb(th, b) : null
         } catch (d) {
             c = null
         }
         return c
     };
 
     function Vh(a) {
         a = I(a, vh, 3);
         return !a || D(a, 1) <= Date.now() ? !1 : !0
     }
 
     function Wh(a) {
         return (a = Uh(a)) ? Vh(a) ? a : null : null
     }
 
     function Xh(a, b) {
         try {
             b.removeItem("google_ama_config")
         } catch (c) {
             Sh(a, {
                 lserr: 1
             })
         }
     };
 
     function Yh(a) {
         this.g = new Fh;
         if (a)
             for (var b = 0; b < a.length; ++b) this.add(a[b])
     }
     Yh.prototype.add = function(a) {
         this.g.set(a, !0)
     };
     Yh.prototype.contains = function(a) {
         return void 0 !== this.g.g[Gh(a)]
     };
 
     function Zh(a) {
         C(this, a, null, null)
     }
     y(Zh, B);
 
     function $h(a, b) {
         this.g = a;
         this.h = b
     }
 
     function ai(a) {
         return null != a.g ? a.g.value : null
     }
 
     function bi(a, b) {
         null != a.g && b(a.g.value);
         return a
     }
     $h.prototype.map = function(a) {
         return null != this.g ? (a = a(this.g.value), a instanceof $h ? a : ci(a)) : this
     };
 
     function di(a, b) {
         null != a.g || b(a.h);
         return a
     }
 
     function ci(a) {
         return new $h({
             value: a
         }, null)
     }
 
     function ei(a) {
         return new $h(null, a)
     }
 
     function fi(a) {
         try {
             return ci(a())
         } catch (b) {
             return ei(b)
         }
     };
     var gi = {
         rectangle: 1,
         horizontal: 2,
         vertical: 4
     };
 
     function hi(a, b) {
         for (var c = ["width", "height"], d = 0; d < c.length; d++) {
             var e = "google_ad_" + c[d];
             if (!b.hasOwnProperty(e)) {
                 var f = N(a[c[d]]);
                 f = null === f ? null : Math.round(f);
                 null != f && (b[e] = f)
             }
         }
     }
 
     function ii(a, b) {
         return !((Xc.test(b.google_ad_width) || Vc.test(a.style.width)) && (Xc.test(b.google_ad_height) || Vc.test(a.style.height)))
     }
 
     function ji(a, b) {
         return (a = ki(a, b)) ? a.y : 0
     }
 
     function ki(a, b) {
         try {
             var c = b.document.documentElement.getBoundingClientRect(),
                 d = a.getBoundingClientRect();
             return {
                 x: d.left - c.left,
                 y: d.top - c.top
             }
         } catch (e) {
             return null
         }
     }
 
     function li(a, b) {
         do {
             var c = Lc(a, b);
             if (c && "fixed" == c.position) return !1
         } while (a = a.parentElement);
         return !0
     }
 
     function mi(a) {
         var b = 0,
             c;
         for (c in gi) - 1 != a.indexOf(c) && (b |= gi[c]);
         return b
     }
 
     function ni(a, b, c, d, e) {
         if (a.top != a) return zd(a) ? 3 : 16;
         if (!(488 > Q(a))) return 4;
         if (!(a.innerHeight >= a.innerWidth)) return 5;
         var f = Q(a);
         if (!f || (f - c) / f > d) a = 6;
         else {
             if (c = "true" != e.google_full_width_responsive) a: {
                 c = Q(a);
                 for (b = b.parentElement; b; b = b.parentElement)
                     if ((d = Lc(b, a)) && (e = N(d.width)) && !(e >= c) && "visible" != d.overflow) {
                         c = !0;
                         break a
                     } c = !1
             }
             a = c ? 7 : !0
         }
         return a
     }
 
     function oi(a, b, c, d) {
         var e = ni(b, c, a, .3, d);
         !0 !== e ? a = e : "true" == d.google_full_width_responsive || li(c, b) ? pi(b) ? a = !0 : (b = Q(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
         return a
     }
 
     function qi(a, b, c) {
         a = a.style;
         "rtl" == b ? V(Qg) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : V(Qg) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
     }
 
     function ri(a, b) {
         if (3 == b.nodeType) return /\S/.test(b.data);
         if (1 == b.nodeType) {
             if (/^(script|style)$/i.test(b.nodeName)) return !1;
             try {
                 var c = Lc(b, a)
             } catch (d) {}
             return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
         }
         return !1
     }
 
     function si(a, b) {
         for (var c = 0; 100 > c && b.parentElement; ++c) {
             for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                 var f = d[e];
                 if (f != b && ri(a, f)) return
             }
             b = b.parentElement;
             b.style.width = "100%";
             b.style.height = "auto"
         }
     }
 
     function ti(a, b, c) {
         a = ki(b, a);
         return "rtl" == c ? -a.x : a.x
     }
 
     function ui(a, b) {
         var c;
         c = (c = b.parentElement) ? (c = Lc(c, a)) ? c.direction : "" : "";
         if (c) {
             b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
             b.style.borderSpacing = b.style.padding = "0";
             qi(b, c, "0px");
             b.style.width = Q(a) + "px";
             if (0 !== ti(a, b, c)) {
                 qi(b, c, "0px");
                 var d = ti(a, b, c);
                 qi(b, c, -1 * d + "px");
                 a = ti(a, b, c);
                 0 !== a && a !== d && qi(b, c, d / (a - d) * d + "px")
             }
             b.style.zIndex = 30
         }
     }
 
     function pi(a) {
         return V(Gg) || a.location && "#bffwroe2etoq" == a.location.hash
     };
 
     function W(a, b) {
         this.h = a;
         this.g = b
     }
     n = W.prototype;
     n.minWidth = function() {
         return this.h
     };
     n.height = function() {
         return this.g
     };
     n.X = function(a) {
         return 300 < a && 300 < this.g ? this.h : Math.min(1200, Math.round(a))
     };
     n.ka = function(a) {
         return this.X(a) + "x" + this.height()
     };
     n.ba = function() {};
 
     function vi(a, b, c, d) {
         d = void 0 === d ? function(f) {
             return f
         } : d;
         var e;
         return a.style && a.style[c] && d(a.style[c]) || (e = Lc(a, b)) && e[c] && d(e[c]) || null
     }
 
     function wi(a) {
         return function(b) {
             return b.minWidth() <= a
         }
     }
 
     function xi(a, b, c, d) {
         var e = a && yi(c, b),
             f = zi(b, d);
         return function(g) {
             return !(e && g.height() >= f)
         }
     }
 
     function Ai(a) {
         return function(b) {
             return b.height() <= a
         }
     }
 
     function yi(a, b) {
         return ji(a, b) < Je(b).clientHeight - 100
     }
 
     function Bi(a, b) {
         var c = vi(b, a, "height", N);
         if (c) return c;
         var d = b.style.height;
         b.style.height = "inherit";
         c = vi(b, a, "height", N);
         b.style.height = d;
         if (c) return c;
         c = Infinity;
         do(d = b.style && N(b.style.height)) && (c = Math.min(c, d)), (d = vi(b, a, "maxHeight", N)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
         return c
     }
 
     function zi(a, b) {
         var c = 0 == sd(a);
         return b && c ? Math.max(250, 2 * Je(a).clientHeight / 3) : 250
     };
 
     function Ci(a, b) {
         for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
         c.forEach(b, void 0)
     };
 
     function Di(a) {
         if (1 != a.nodeType) var b = !1;
         else if (b = "INS" == a.tagName) a: {
             b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
             for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
             for (d = 0; d < b.length; ++d)
                 if (!c[b[d]]) {
                     b = !1;
                     break a
                 } b = !0
         }
         return b
     };
 
     function Ei(a, b, c) {
         switch (c) {
             case 0:
                 b.parentNode && b.parentNode.insertBefore(a, b);
                 break;
             case 3:
                 if (c = b.parentNode) {
                     var d = b.nextSibling;
                     if (d && d.parentNode != c)
                         for (; d && 8 == d.nodeType;) d = d.nextSibling;
                     c.insertBefore(a, d)
                 }
                 break;
             case 1:
                 b.insertBefore(a, b.firstChild);
                 break;
             case 2:
                 b.appendChild(a)
         }
         Di(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
     };
 
     function Fi(a, b, c) {
         function d(f) {
             f = Gi(f);
             return null == f ? !1 : c > f
         }
 
         function e(f) {
             f = Gi(f);
             return null == f ? !1 : c < f
         }
         switch (b) {
             case 0:
                 return {
                     init: Hi(a.previousSibling, e), ea: function(f) {
                         return Hi(f.previousSibling, e)
                     }, fa: 0
                 };
             case 2:
                 return {
                     init: Hi(a.lastChild, e), ea: function(f) {
                         return Hi(f.previousSibling, e)
                     }, fa: 0
                 };
             case 3:
                 return {
                     init: Hi(a.nextSibling, d), ea: function(f) {
                         return Hi(f.nextSibling, d)
                     }, fa: 3
                 };
             case 1:
                 return {
                     init: Hi(a.firstChild, d), ea: function(f) {
                         return Hi(f.nextSibling, d)
                     }, fa: 3
                 }
         }
         throw Error("Un-handled RelativePosition: " +
             b);
     }
 
     function Gi(a) {
         return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
     }
 
     function Hi(a, b) {
         return a && b(a) ? a : null
     };
 
     function Ii(a, b) {
         for (var c = 0; c < b.length; c++) {
             var d = b[c],
                 e = Db(d.hb);
             a[e] = d.value
         }
     };
 
     function Ji(a, b, c, d) {
         this.j = a;
         this.h = b;
         this.i = c;
         this.g = d
     }
 
     function Ki(a, b) {
         var c = [];
         try {
             c = b.querySelectorAll(a.j)
         } catch (g) {}
         if (!c.length) return [];
         b = c;
         c = b.length;
         if (0 < c) {
             for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
             b = d
         } else b = [];
         b = Li(a, b);
         "number" === typeof a.h && (c = a.h, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
         if ("number" === typeof a.i) {
             c = [];
             for (d = 0; d < b.length; d++) {
                 e = Mi(b[d]);
                 var f = a.i;
                 0 > f && (f += e.length);
                 0 <= f && f < e.length && c.push(e[f])
             }
             b = c
         }
         return b
     }
     Ji.prototype.toString = function() {
         return JSON.stringify({
             nativeQuery: this.j,
             occurrenceIndex: this.h,
             paragraphIndex: this.i,
             ignoreMode: this.g
         })
     };
 
     function Li(a, b) {
         if (null == a.g) return b;
         switch (a.g) {
             case 1:
                 return b.slice(1);
             case 2:
                 return b.slice(0, b.length - 1);
             case 3:
                 return b.slice(1, b.length - 1);
             case 0:
                 return b;
             default:
                 throw Error("Unknown ignore mode: " + a.g);
         }
     }
 
     function Mi(a) {
         var b = [];
         Ci(a.getElementsByTagName("p"), function(c) {
             100 <= Ni(c) && b.push(c)
         });
         return b
     }
 
     function Ni(a) {
         if (3 == a.nodeType) return a.length;
         if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
         var b = 0;
         Ci(a.childNodes, function(c) {
             b += Ni(c)
         });
         return b
     }
 
     function Oi(a) {
         return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
     };
 
     function Pi(a) {
         if (!a) return null;
         var b = D(a, 7);
         if (D(a, 1) || a.getId() || 0 < D(a, 4).length) {
             var c = a.getId(),
                 d = D(a, 1),
                 e = D(a, 4);
             b = D(a, 2);
             var f = D(a, 5);
             a = Qi(D(a, 6));
             var g = "";
             d && (g += d);
             c && (g += "#" + Oi(c));
             if (e)
                 for (c = 0; c < e.length; c++) g += "." + Oi(e[c]);
             b = (e = g) ? new Ji(e, b, f, a) : null
         } else b = b ? new Ji(b, D(a, 2), D(a, 5), Qi(D(a, 6))) : null;
         return b
     }
     var Ri = {
         1: 1,
         2: 2,
         3: 3,
         0: 0
     };
 
     function Qi(a) {
         return null == a ? a : Ri[a]
     }
     var Si = {
         1: 0,
         2: 1,
         3: 2,
         4: 3
     };
 
     function Ti(a) {
         switch (D(a, 8)) {
             case 1:
             case 2:
                 if (null == a) var b = null;
                 else b = I(a, O, 1), null == b ? b = null : (a = D(a, 2), b = null == a ? null : new Eh({
                     ta: [b],
                     Ea: a
                 }));
                 return null != b ? ci(b) : ei(Error("Missing dimension when creating placement id"));
             case 3:
                 return ei(Error("Missing dimension when creating placement id"));
             default:
                 return ei(Error("Invalid type: " + D(a, 8)))
         }
     };
 
     function Ui() {
         this.g = new Fh
     }
     Ui.prototype.set = function(a, b) {
         var c = this.g.get(a);
         c || (c = new Yh, this.g.set(a, c));
         c.add(b)
     };
 
     function Vi(a, b) {
         function c() {
             d.push({
                 anchor: e.anchor,
                 position: e.position
             });
             return e.anchor == b.anchor && e.position == b.position
         }
         for (var d = [], e = a; e;) {
             switch (e.position) {
                 case 1:
                     if (c()) return d;
                     e.position = 2;
                 case 2:
                     if (c()) return d;
                     if (e.anchor.firstChild) {
                         e = {
                             anchor: e.anchor.firstChild,
                             position: 1
                         };
                         continue
                     } else e.position = 3;
                 case 3:
                     if (c()) return d;
                     e.position = 4;
                 case 4:
                     if (c()) return d
             }
             for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                 e = {
                     anchor: e.anchor.parentNode,
                     position: 3
                 };
                 if (c()) return d;
                 e.position = 4;
                 if (c()) return d
             }
             e && e.anchor.nextSibling ? e = {
                 anchor: e.anchor.nextSibling,
                 position: 1
             } : e = null
         }
         return d
     };
 
     function Wi(a, b) {
         this.h = a;
         this.g = b
     }
 
     function Xi(a, b) {
         var c = new Ui,
             d = new Yh;
         b.forEach(function(e) {
             if (I(e, lh, 1)) {
                 e = I(e, lh, 1);
                 if (I(e, Nd, 1) && I(I(e, Nd, 1), O, 1) && I(e, Nd, 2) && I(I(e, Nd, 2), O, 1)) {
                     var f = Yi(a, I(I(e, Nd, 1), O, 1)),
                         g = Yi(a, I(I(e, Nd, 2), O, 1));
                     if (f && g)
                         for (f = w(Vi({
                                 anchor: f,
                                 position: D(I(e, Nd, 1), 2)
                             }, {
                                 anchor: g,
                                 position: D(I(e, Nd, 2), 2)
                             })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Da(g.anchor), g.position)
                 }
                 I(e, Nd, 3) && I(I(e, Nd, 3), O, 1) && (f = Yi(a, I(I(e, Nd, 3), O, 1))) && c.set(Da(f), D(I(e, Nd, 3), 2))
             } else I(e, mh, 2) ? Zi(a, I(e, mh, 2), c) : I(e, nh, 3) && $i(a, I(e,
                 nh, 3), d)
         });
         return new Wi(c, d)
     }
 
     function Zi(a, b, c) {
         I(b, O, 1) && (a = aj(a, I(b, O, 1))) && a.forEach(function(d) {
             d = Da(d);
             c.set(d, 1);
             c.set(d, 4);
             c.set(d, 2);
             c.set(d, 3)
         })
     }
 
     function $i(a, b, c) {
         I(b, O, 1) && (a = aj(a, I(b, O, 1))) && a.forEach(function(d) {
             c.add(Da(d))
         })
     }
 
     function Yi(a, b) {
         return (a = aj(a, b)) && 0 < a.length ? a[0] : null
     }
 
     function aj(a, b) {
         return (b = Pi(b)) ? Ki(b, a) : null
     };
 
     function bj(a, b) {
         if (!a) return !1;
         a = Lc(a, b);
         if (!a) return !1;
         a = a.cssFloat || a.styleFloat;
         return "left" == a || "right" == a
     }
 
     function cj(a) {
         for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
         return a ? a : null
     }
 
     function dj(a) {
         return !!a.nextSibling || !!a.parentNode && dj(a.parentNode)
     };
 
     function ej(a, b) {
         return a && null != D(a, 4) && b[D(I(a, Pd, 4), 2)] ? !1 : !0
     }
 
     function fj(a) {
         var b = {};
         a && D(a, 6).forEach(function(c) {
             b[c] = !0
         });
         return b
     }
 
     function gj(a, b, c, d, e) {
         this.g = a;
         this.u = b;
         this.i = c;
         this.l = e || null;
         this.s = (this.C = d) ? Xi(a.document, J(d, jh, 5)) : Xi(a.document, []);
         this.h = 0;
         this.j = !1
     }
 
     function hj(a, b) {
         if (a.j) return !0;
         a.j = !0;
         var c = J(a.i, Qd, 1);
         a.h = 0;
         var d = fj(a.C);
         try {
             var e = a.g.localStorage.getItem("google_ama_settings");
             var f = e ? Rb(Zh, e) : null
         } catch (m) {
             f = null
         }
         if (null !== f && Mb(f, 2, !1)) return ij(a).eatf = !0, Ld(7, [!0, 0, !1]), !0;
         f = new Yh([2]);
         for (e = 0; e < c.length; e++) {
             var g = a;
             var h = c[e],
                 k = e,
                 l = b;
             if (I(h, Pd, 4) && f.contains(D(I(h, Pd, 4), 1)) && 1 === D(h, 8) && ej(h, d)) {
                 g.h++;
                 if (h = jj(g, h, l, d)) l = ij(g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                     index: k,
                     element: h.aa
                 }), Ld(7, [!1, g.h, !0]);
                 g = h
             } else g = null;
             if (g) return !0
         }
         Ld(7, [!1, a.h, !1]);
         return !1
     }
 
     function jj(a, b, c, d) {
         if (!ej(b, d) || 1 != D(b, 8)) return null;
         d = I(b, O, 1);
         if (!d) return null;
         d = Pi(d);
         if (!d) return null;
         d = Ki(d, a.g.document);
         if (0 == d.length) return null;
         d = d[0];
         var e = D(b, 2);
         e = Si[e];
         e = void 0 === e ? null : e;
         var f;
         if (!(f = null == e)) {
             a: {
                 f = a.g;
                 switch (e) {
                     case 0:
                         f = bj(cj(d), f);
                         break a;
                     case 3:
                         f = bj(d, f);
                         break a;
                     case 2:
                         var g = d.lastChild;
                         f = bj(g ? 1 == g.nodeType ? g : cj(g) : null, f);
                         break a
                 }
                 f = !1
             }
             if (c = !f && !(!c && 2 == e && !dj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
             c = !(c && !Di(c) && 0 >= c.offsetWidth);f = !c
         }
         if (!(c = f)) {
             c = a.s;
             f = D(b, 2);
             g =
                 Da(d);
             g = c.h.g.get(g);
             if (!(g = g ? g.contains(f) : !1)) a: {
                 if (c.g.contains(Da(d))) switch (f) {
                     case 2:
                     case 3:
                         g = !0;
                         break a;
                     default:
                         g = !1;
                         break a
                 }
                 for (f = d.parentElement; f;) {
                     if (c.g.contains(Da(f))) {
                         g = !0;
                         break a
                     }
                     f = f.parentElement
                 }
                 g = !1
             }
             c = g
         }
         if (c) return null;
         c = I(b, Od, 3);
         f = {};
         c && (f.Ja = D(c, 1), f.ua = D(c, 2), f.clearBoth = !!Lb(c, 3));
         c = I(b, Pd, 4) && D(I(b, Pd, 4), 2) ? D(I(b, Pd, 4), 2) : null;
         c = Mh(c);
         g = null == D(b, 12) ? null : D(b, 12);
         g = null == g ? null : new Kh(null, {
             google_ml_rank: g
         });
         b = kj(a, b);
         b = Lh(a.l, c, g, b);
         c = a.g;
         a = a.u;
         var h = c.document,
             k = f.clearBoth ||
             !1;
         g = Dc((new Ec(h)).g, "DIV");
         var l = g.style;
         l.width = "100%";
         l.height = "auto";
         l.clear = k ? "both" : "none";
         k = g.style;
         k.textAlign = "center";
         f.Ta && Ii(k, f.Ta);
         h = Dc((new Ec(h)).g, "INS");
         k = h.style;
         k.display = "block";
         k.margin = "auto";
         k.backgroundColor = "transparent";
         f.Ja && (k.marginTop = f.Ja);
         f.ua && (k.marginBottom = f.ua);
         f.La && Ii(k, f.La);
         g.appendChild(h);
         f = {
             ja: g,
             aa: h
         };
         f.aa.setAttribute("data-ad-format", "auto");
         g = [];
         if (h = b && b.va) f.ja.className = h.join(" ");
         h = f.aa;
         h.className = "adsbygoogle";
         h.setAttribute("data-ad-client",
             a);
         g.length && h.setAttribute("data-ad-channel", g.join("+"));
         a: {
             try {
                 var m = f.ja;
                 var q = void 0 === q ? 0 : q;
                 if (V(rg)) {
                     q = void 0 === q ? 0 : q;
                     var t = Fi(d, e, q);
                     if (t.init) {
                         var u = t.init;
                         for (d = u; d = t.ea(d);) u = d;
                         var A = {
                             anchor: u,
                             position: t.fa
                         }
                     } else A = {
                         anchor: d,
                         position: e
                     };
                     m["google-ama-order-assurance"] = q;
                     Ei(m, A.anchor, A.position)
                 } else Ei(m, d, e);
                 b: {
                     var E = f.aa;E.setAttribute("data-adsbygoogle-status", "reserved");E.className += " adsbygoogle-noablate";m = {
                         element: E
                     };
                     var F = b && b.Da;
                     if (E.hasAttribute("data-pub-vars")) {
                         try {
                             F = JSON.parse(E.getAttribute("data-pub-vars"))
                         } catch (xa) {
                             break b
                         }
                         E.removeAttribute("data-pub-vars")
                     }
                     F &&
                     (m.params = F);
                     (c.adsbygoogle = c.adsbygoogle || []).push(m)
                 }
             } catch (xa) {
                 (E = f.ja) && E.parentNode && (F = E.parentNode, F.removeChild(E), Di(F) && (F.style.display = F.getAttribute("data-init-display") || "none"));
                 E = !1;
                 break a
             }
             E = !0
         }
         return E ? f : null
     }
 
     function ij(a) {
         a = a.g;
         return a.google_ama_state = a.google_ama_state || {}
     }
 
     function kj(a, b) {
         return ai(di(Ti(b).map(Nh), function(c) {
             ij(a).exception = c
         }))
     };
 
     function lj() {
         this.h = new mj(this);
         this.g = 0
     }
     lj.prototype.resolve = function(a) {
         nj(this);
         this.g = 1;
         this.j = a;
         oj(this.h)
     };
     lj.prototype.reject = function(a) {
         nj(this);
         this.g = 2;
         this.i = a;
         oj(this.h)
     };
 
     function nj(a) {
         if (0 != a.g) throw Error("Already resolved/rejected.");
     }
 
     function mj(a) {
         this.g = a
     }
     mj.prototype.then = function(a, b) {
         if (this.h) throw Error("Then functions already set.");
         this.h = a;
         this.i = b;
         oj(this)
     };
 
     function oj(a) {
         switch (a.g.g) {
             case 0:
                 break;
             case 1:
                 a.h && a.h(a.g.j);
                 break;
             case 2:
                 a.i && a.i(a.g.i);
                 break;
             default:
                 throw Error("Unhandled deferred state.");
         }
     };
 
     function pj(a) {
         this.exception = a
     }
 
     function qj(a, b, c) {
         this.i = a;
         this.g = b;
         this.h = c
     }
     qj.prototype.start = function() {
         this.j()
     };
     qj.prototype.j = function() {
         try {
             switch (this.i.document.readyState) {
                 case "complete":
                 case "interactive":
                     hj(this.g, !0);
                     rj(this);
                     break;
                 default:
                     hj(this.g, !1) ? rj(this) : this.i.setTimeout(Ja(this.j, this), 100)
             }
         } catch (a) {
             rj(this, a)
         }
     };
 
     function rj(a, b) {
         try {
             var c = a.h,
                 d = c.resolve,
                 e = a.g;
             ij(e);
             J(e.i, Qd, 1);
             d.call(c, new pj(b))
         } catch (f) {
             a.h.reject(f)
         }
     };
 
     function sj(a) {
         Sh(a, {
             atf: 1
         })
     }
 
     function tj(a, b) {
         (a.google_ama_state = a.google_ama_state || {}).exception = b;
         Sh(a, {
             atf: 0
         })
     };
 
     function uj() {
         var a = this;
         this.promise = new p.Promise(function(b, c) {
             a.resolve = b;
             a.reject = c
         })
     };
 
     function vj() {
         var a = new uj;
         this.promise = a.promise;
         this.resolve = a.resolve
     }
 
     function wj(a) {
         x.google_llp || (x.google_llp = {});
         var b = x.google_llp;
         b[7] || (b[7] = new vj, a && a());
         return b[7]
     }
 
     function xj(a) {
         return wj(function() {
             Kc(x.document, a)
         }).promise
     };
 
     function yj(a) {
         var b = {};
         return {
             enable_page_level_ads: (b.pltais = !0, b),
             google_ad_client: a
         }
     };
 
     function zj(a) {
         var b = Me(x, 12, a.google_ad_client);
         a = "google_ad_host" in a;
         var c = .5 > Math.random(),
             d = Ad(x.location, "google_ads_preview");
         return b && !a && c || d
     }
 
     function Aj(a) {
         if (x.google_apltlad || x.top != x || !a.google_ad_client) return null;
         var b = zj(a);
         x.google_apltlad = !0;
         var c = yj(a.google_ad_client),
             d = c.enable_page_level_ads;
         Qc(a, function(e, f) {
             $b[f] && "google_ad_client" !== f && (d[f] = e)
         });
         if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
         else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
         return c
     }
 
     function Bj(a) {
         return Ca(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
     };
     var Cj = null;
 
     function Dj() {
         this.S = {}
     }
 
     function Ej() {
         if (Fj) return Fj;
         var a = kd() || wd(),
             b = a.google_persistent_state_async;
         return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Fj = b : a.google_persistent_state_async = Fj = new Dj
     }
 
     function Gj(a, b, c) {
         b = Hj[b] || "google_ps_" + b;
         a = a.S;
         var d = a[b];
         return void 0 === d ? a[b] = c : d
     }
 
     function Ij(a, b, c) {
         a.S[Hj[b] || "google_ps_" + b] = c
     }
     var Fj = null,
         Jj = {},
         Hj = (Jj[8] = "google_prev_ad_formats_by_region", Jj[9] = "google_prev_ad_slotnames_by_region", Jj);
 
     function Kj(a) {
         C(this, a, null, null)
     }
     y(Kj, B);
 
     function Lj(a) {
         try {
             var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
         } catch (d) {
             b = null
         }
         var c = b;
         return c ? fi(function() {
             return Rb(Kj, c)
         }) : ci(null)
     };
 
     function Mj(a) {
         this.g = a || {
             cookie: ""
         }
     }
     Mj.prototype.set = function(a, b, c) {
         var d = !1;
         if ("object" === typeof c) {
             var e = c.ib;
             d = c.jb || !1;
             var f = c.domain || void 0;
             var g = c.path || void 0;
             var h = c.gb
         }
         if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
         if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
         void 0 === h && (h = -1);
         this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
             e : "")
     };
     Mj.prototype.get = function(a, b) {
         for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
             f = nb(d[e]);
             if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
             if (f == a) return ""
         }
         return b
     };
 
     function Nj(a) {
         void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
         void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
         return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
     }
 
     function Oj(a, b) {
         b = void 0 === b ? 500 : b;
         R.call(this);
         this.h = a;
         this.g = null;
         this.l = {};
         this.H = 0;
         this.u = b;
         this.j = null
     }
     qa(Oj, R);
     Oj.prototype.i = function() {
         this.l = {};
         this.j && (Cc(this.h, "message", this.j), delete this.j);
         delete this.l;
         delete this.h;
         delete this.g;
         R.prototype.i.call(this)
     };
 
     function Pj(a) {
         return "function" === typeof a.h.__tcfapi || null != Qj(a)
     }
 
     function Rj(a) {
         function b(g, h) {
             clearTimeout(f);
             g ? (d = g, d.internalErrorState = Nj(d), h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
             c(d)
         }
         var c = Sj,
             d = {},
             e = Ya(function() {
                 return c(d)
             }),
             f = 0; - 1 !== a.u && (f = setTimeout(function() {
             d.tcString = "tcunavailable";
             d.internalErrorState = 1;
             e()
         }, a.u));
         try {
             Tj(a, b)
         } catch (g) {
             d.tcString = "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
         }
     }
 
     function Tj(a, b) {
         b || (b = function() {});
         if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a("addEventListener", 2, b, void 0);
         else if (Qj(a)) {
             Uj(a);
             var c = ++a.H;
             a.l[c] = b;
             a.g && (b = {}, a.g.postMessage((b.__tcfapiCall = {
                 command: "addEventListener",
                 version: 2,
                 callId: c,
                 parameter: void 0
             }, b), "*"))
         } else b({}, !1)
     }
 
     function Qj(a) {
         if (a.g) return a.g;
         a.g = Zc(a.h, "__tcfapiLocator");
         return a.g
     }
 
     function Uj(a) {
         a.j || (a.j = function(b) {
             try {
                 var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                 a.l[c.callId](c.returnValue, c.success)
             } catch (d) {}
         }, Bc(a.h, "message", a.j))
     }
 
     function Vj(a) {
         if (!1 === a.gdprApplies) return !0;
         void 0 === a.internalErrorState && (a.internalErrorState = Nj(a));
         return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
     };
 
     function Wj(a, b, c, d) {
         Xj(a, b) ? (b = Gj(Ej(), 24, void 0)) ? d(Yj(a, Zj(b))) : ak(a, c).then(function(e) {
             return e.map(Zj)
         }).then(function(e) {
             return e.map(function(f) {
                 return Yj(a, f)
             })
         }).then(d) : d(Yj(a, Ud(!0)))
     }
 
     function Xj(a, b) {
         var c;
         if (!(c = Pj(new Oj(a)))) {
             if (b) {
                 a = Lj(a);
                 if (null != a.g)
                     if ((a = a.g.value) && null != D(a, 1)) b: switch (a = D(a, 1), a) {
                         case 1:
                             a = !0;
                             break b;
                         default:
                             throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                     } else a = !1;
                     else ve.D(806, a.h, void 0, void 0), a = !1;
                 b = !a
             }
             c = b
         }
         return c ? !0 : !1
     }
 
     function ak(a, b) {
         return p.Promise.race([bk(), ck(a, b)])
     }
 
     function bk() {
         return (new p.Promise(function(a) {
             var b = Ej();
             a = {
                 resolve: a
             };
             var c = Gj(b, 25, []);
             c.push(a);
             Ij(b, 25, c)
         })).then(dk)
     }
 
     function ck(a, b) {
         return new p.Promise(function(c) {
             a.setTimeout(c, b, ei(Error("tcto")))
         })
     }
 
     function dk(a) {
         return a ? ci(a) : ei(Error("tcnull"))
     }
 
     function Zj(a) {
         var b = void 0 === b ? !1 : b;
         if (Vj(a))
             if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
             else {
                 var c = void 0 === c ? "755" : c;
                 b: {
                     if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                         b = b[void 0 === c ? "755" : c];
                         break b
                     }
                     b = void 0
                 }
                 0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && ("DE" === a.publisherCC || V(Rg) && "CH" === a.publisherCC) ?
                     a = !0 : (c && (a = a.purpose.consents, c = !(!a || !a["1"])), a = c)) : a = !0
             }
         else a = !1;
         return Ud(a)
     }
 
     function Yj(a, b) {
         a: {
             a = void 0 === a ? window : a;
             if (Lb(b, 5)) try {
                 var c = a.localStorage;
                 break a
             } catch (d) {}
             c = null
         }
         return (b = c) ? ci(b) : ei(Error("unav"))
     };
 
     function ek(a, b, c, d, e) {
         this.g = x;
         this.s = a;
         this.i = b;
         this.h = c;
         this.l = d;
         this.j = e
     }
 
     function fk(a) {
         if (a.i) Wj(a.g, a.j, a.h, function(c) {
             return gk(a, c)
         });
         else {
             try {
                 var b = ci(a.g.localStorage)
             } catch (c) {
                 b = ei(Error("unav"))
             }
             gk(a, b)
         }
     }
 
     function gk(a, b) {
         di(bi(b, function(c) {
             return hk(a.g, a.s, c)
         }), function(c) {
             a.l && Be("abg::amalserr", {
                 err: c.message,
                 guarding: a.i,
                 timeout: a.h,
                 rate: .01
             }, .01)
         })
     }
 
     function hk(a, b, c) {
         if (!K(L).ama_ran_on_page) {
             var d = Wh(c);
             if (d) {
                 if (Bj(b) && (c = Bh(a, J(d, wh, 7)), !c || !Lb(c, 8))) return;
                 K(L).ama_ran_on_page = !0;
                 if ((c = I(d, zh, 13)) && 1 === D(c, 1)) {
                     var e = 0,
                         f = I(c, Ah, 6);
                     f && D(f, 3) && (e = D(f, 3) || 0);
                     Yb(a, e)
                 } else(null == (e = I(d, oh, 24)) ? 0 : null == (f = I(e, qh, 3)) ? 0 : I(f, sh, 2)) && Yb(a, 1);
                 Ld(3, [Pb(d)]);
                 var g = b.google_ad_client || "";
                 b = Th(Ca(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                 var h = Lh(Ph, new Kh(null, b));
                 ze(782, function() {
                     var k = h;
                     try {
                         var l = Bh(a, J(d, wh, 7)),
                             m;
                         if (m = l) a: {
                             var q;
                             if (q = D(l,
                                     2))
                                 for (var t = 0; t < q.length; t++)
                                     if (1 == q[t]) {
                                         m = !0;
                                         break a
                                     } m = !1
                         }
                         if (m) {
                             if (D(l, 4)) {
                                 m = {};
                                 var u = new Kh(null, (m.google_package = D(l, 4), m));
                                 k = Lh(k, u)
                             }
                             var A = new gj(a, g, d, l, k),
                                 E = new lj;
                             (new qj(a, A, E)).start();
                             E.h.then(Ka(sj, a), Ka(tj, a))
                         }
                     } catch (F) {
                         Sh(a, {
                             atf: -1
                         })
                     }
                 })
             } else Xh(a, c)
         }
     };
 
     function ik() {
         this.debugCard = null;
         this.debugCardRequested = !1
     };
 
     function jk(a, b) {
         a.ma(function(c) {
             c.shv = String(b);
             c.mnvr = "";
             var d = Pf.m().g();
             var e = Wb(x);
             (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
         })
     };
 
     function cc(a) {
         return "string" === typeof a
     };
     var kk = "undefined" === typeof sttc ? void 0 : sttc;
 
     function lk(a) {
         try {
             return bc(a), new Sd(JSON.parse(a))
         } catch (b) {
             ve.D(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                 c.jspb = String(a)
             })
         }
         return new Sd
     };
     var mk = null;
 
     function X(a, b, c, d) {
         d = void 0 === d ? !1 : d;
         W.call(this, a, b);
         this.Z = c;
         this.Ra = d
     }
     qa(X, W);
     X.prototype.ha = function() {
         return this.Z
     };
     X.prototype.ba = function(a, b, c) {
         b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
     };
 
     function nk(a) {
         return function(b) {
             return !!(b.Z & a)
         }
     };
     var ok = Eb("script");
 
     function pk(a, b, c, d, e, f, g, h, k, l, m, q) {
         this.s = a;
         this.W = b;
         this.Z = void 0 === c ? null : c;
         this.h = void 0 === d ? null : d;
         this.N = void 0 === e ? null : e;
         this.g = void 0 === f ? null : f;
         this.i = void 0 === g ? null : g;
         this.H = void 0 === h ? null : h;
         this.L = void 0 === k ? null : k;
         this.j = void 0 === l ? null : l;
         this.l = void 0 === m ? null : m;
         this.M = void 0 === q ? null : q;
         this.O = this.u = this.C = null
     }
     pk.prototype.size = function() {
         return this.W
     };
 
     function qk(a, b, c) {
         null != a.Z && (c.google_responsive_formats = a.Z);
         null != a.N && (c.google_safe_for_responsive_override = a.N);
         null != a.g && (!0 === a.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.g));
         null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
         var d = a.l || c.google_ad_width;
         null != d && (c.google_resizing_width = d);
         d = a.j || c.google_ad_height;
         null != d && (c.google_resizing_height = d);
         d = a.size().X(b);
         var e = a.size().height();
         c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height =
             e, c.google_ad_format = a.size().ka(b), c.google_responsive_auto_format = a.s, null != a.h && (c.armr = a.h), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.g && (c.gfwrnh = a.size().height() + "px"));
         null != a.H && (c.gfwroml = a.H);
         null != a.L && (c.gfwromr = a.L);
         null != a.j && (c.gfwroh = a.j);
         null != a.l && (c.gfwrow = a.l);
         null != a.M && (c.gfwroz = a.M);
         null != a.C && (c.gml = a.C);
         null != a.u && (c.gmr = a.u);
         null != a.O && (c.gzi = a.O);
         b = wd();
         b = zd(b) || b;
         Ad(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " +
             (d && e ? !0 !== a.g || !0 !== a.i ? "#ffa500" : "#0f0" : "#f00") + " !important;");
         Ad(b.location, "google_responsive_dummy_ad") && (Va([1, 2, 3, 4, 5, 6, 7, 8], a.s) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                 googMsgType: "adpnt",
                 key_value: [{
                     key: "qid",
                     value: "DUMMY_AD"
                 }]
             }), c.dash = "<" + ok + ">window.top.postMessage('" + a + "', '*');\n          </" + ok + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
             d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
     };
     /* 
      
      Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
      
      Licensed under the Apache License, Version 2.0 (the "License"); 
      you may not use this file except in compliance with the License. 
      You may obtain a copy of the License at 
      
           http://www.apache.org/licenses/LICENSE-2.0 
      
      Unless required by applicable law or agreed to in writing, software 
      distributed under the License is distributed on an "AS-IS" BASIS, 
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
      See the License for the specific language governing permissions and 
      limitations under the License. 
     */
     var rk = {},
         sk = (rk.image_stacked = 1 / 1.91, rk.image_sidebyside = 1 / 3.82, rk.mobile_banner_image_sidebyside = 1 / 3.82, rk.pub_control_image_stacked = 1 / 1.91, rk.pub_control_image_sidebyside = 1 / 3.82, rk.pub_control_image_card_stacked = 1 / 1.91, rk.pub_control_image_card_sidebyside = 1 / 3.74, rk.pub_control_text = 0, rk.pub_control_text_card = 0, rk),
         tk = {},
         uk = (tk.image_stacked = 80, tk.image_sidebyside = 0, tk.mobile_banner_image_sidebyside = 0, tk.pub_control_image_stacked = 80, tk.pub_control_image_sidebyside = 0, tk.pub_control_image_card_stacked =
             85, tk.pub_control_image_card_sidebyside = 0, tk.pub_control_text = 80, tk.pub_control_text_card = 80, tk),
         vk = {},
         wk = (vk.pub_control_image_stacked = 100, vk.pub_control_image_sidebyside = 200, vk.pub_control_image_card_stacked = 150, vk.pub_control_image_card_sidebyside = 250, vk.pub_control_text = 100, vk.pub_control_text_card = 150, vk);
 
     function xk(a) {
         var b = 0;
         a.J && b++;
         a.F && b++;
         a.G && b++;
         if (3 > b) return {
             I: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
         };
         b = a.J.split(",");
         var c = a.G.split(",");
         a = a.F.split(",");
         if (b.length !== c.length || b.length !== a.length) return {
             I: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
         };
         if (2 < b.length) return {
             I: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
         };
         for (var d = [], e = [], f = 0; f < b.length; f++) {
             var g =
                 Number(c[f]);
             if (isNaN(g) || 0 === g) return {
                 I: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
             };
             d.push(g);
             g = Number(a[f]);
             if (isNaN(g) || 0 === g) return {
                 I: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
             };
             e.push(g)
         }
         return {
             G: d,
             F: e,
             Ba: b
         }
     }
 
     function yk(a) {
         return 1200 <= a ? {
             width: 1200,
             height: 600
         } : 850 <= a ? {
             width: a,
             height: Math.floor(.5 * a)
         } : 550 <= a ? {
             width: a,
             height: Math.floor(.6 * a)
         } : 468 <= a ? {
             width: a,
             height: Math.floor(.7 * a)
         } : {
             width: a,
             height: Math.floor(3.44 * a)
         }
     };
     var zk = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
 
     function Ak(a, b) {
         W.call(this, a, b)
     }
     qa(Ak, W);
     Ak.prototype.X = function(a) {
         return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
     };
 
     function Bk(a, b) {
         Ck(a, b);
         if ("pedestal" == b.google_content_recommendation_ui_type) return new pk(9, new Ak(a, Math.floor(a * b.google_phwr)));
         var c = Fc();
         468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * sk.mobile_banner_image_sidebyside + uk.mobile_banner_image_sidebyside) + 96), a = {
             V: a,
             T: c,
             F: 1,
             G: 12,
             J: "mobile_banner_image_sidebyside"
         }) : (a = yk(a), a = {
             V: a.width,
             T: a.height,
             F: 1,
             G: 13,
             J: "image_sidebyside"
         }) : (a = yk(a), a = {
             V: a.width,
             T: a.height,
             F: 4,
             G: 2,
             J: "image_stacked"
         });
         Dk(b, a);
         return new pk(9, new Ak(a.V, a.T))
     }
 
     function Ek(a, b) {
         Ck(a, b);
         var c = xk({
             G: b.google_content_recommendation_rows_num,
             F: b.google_content_recommendation_columns_num,
             J: b.google_content_recommendation_ui_type
         });
         if (c.I) a = {
             V: 0,
             T: 0,
             F: 0,
             G: 0,
             J: "image_stacked",
             I: c.I
         };
         else {
             var d = 2 === c.Ba.length && 468 <= a ? 1 : 0;
             var e = c.Ba[d];
             e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
             var f = wk[e];
             for (var g = c.F[d]; a / g < f && 1 < g;) g--;
             f = g;
             c = c.G[d];
             d = Math.floor(((a - 8 * f - 8) / f * sk[e] + uk[e]) * c + 8 * c + 8);
             a = 1500 < a ? {
                     width: 0,
                     height: 0,
                     na: "Calculated slot width is too large: " + a
                 } :
                 1500 < d ? {
                     width: 0,
                     height: 0,
                     na: "Calculated slot height is too large: " + d
                 } : {
                     width: a,
                     height: d
                 };
             a = a.na ? {
                 V: 0,
                 T: 0,
                 F: 0,
                 G: 0,
                 J: e,
                 I: a.na
             } : {
                 V: a.width,
                 T: a.height,
                 F: f,
                 G: c,
                 J: e
             }
         }
         if (a.I) throw new P(a.I);
         Dk(b, a);
         return new pk(9, new Ak(a.V, a.T))
     }
 
     function Ck(a, b) {
         if (0 >= a) throw new P("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
     }
 
     function Dk(a, b) {
         a.google_content_recommendation_ui_type = b.J;
         a.google_content_recommendation_columns_num = b.F;
         a.google_content_recommendation_rows_num = b.G
     };
 
     function Fk(a, b) {
         W.call(this, a, b)
     }
     qa(Fk, W);
     Fk.prototype.X = function() {
         return this.minWidth()
     };
     Fk.prototype.ba = function(a, b, c) {
         ui(a, c);
         b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
     };
     var Gk = {
         "image-top": function(a) {
             return 600 >= a ? 284 + .414 * (a - 250) : 429
         },
         "image-middle": function(a) {
             return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
         },
         "image-side": function(a) {
             return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
         },
         "text-only": function(a) {
             return 500 >= a ? 187 - .228 * (a - 250) : 130
         },
         "in-article": function(a) {
             return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
         }
     };
 
     function Hk(a, b) {
         W.call(this, a, b)
     }
     qa(Hk, W);
     Hk.prototype.X = function() {
         return Math.min(1200, this.minWidth())
     };
 
     function Ik(a, b, c, d, e) {
         var f = e.google_ad_layout || "image-top";
         if ("in-article" == f && "false" != e.google_full_width_responsive) {
             var g = ni(b, c, a, .2, e);
             if (!0 !== g) e.gfwrnwer = g;
             else if (g = Q(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (si(b, c), ui(b, c), a = g)
         }
         if (250 > a) throw new P("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
         a = Math.min(1200, Math.floor(a));
         if (d && "in-article" != f) {
             f = Math.ceil(d);
             if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" +
                 f);
             return new pk(11, new W(a, f))
         }
         if ("in-article" != f && (d = e.google_ad_layout_key)) {
             f = "" + d;
             b = Math.pow(10, 3);
             if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                 e = [];
                 for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                 b = e
             } else b = null;
             if (!b) throw new P("Invalid data-ad-layout-key value: " + f);
             f = (a + -725) / 1E3;
             c = 0;
             d = 1;
             e = b.length;
             for (g = 0; g < e; g++) c += b[g] * d, d *= f;
             f = Math.ceil(1E3 * c - -725 + 10);
             if (isNaN(f)) throw new P("Invalid height: height=" + f);
             if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
             if (1200 < f) throw new P("Fluid responsive ads must be at most 1200px tall: height=" + f);
             return new pk(11, new W(a, f))
         }
         d = Gk[f];
         if (!d) throw new P("Invalid data-ad-layout value: " + f);
         c = yi(c, b);
         b = Q(b);
         b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
         return new pk(11, "in-article" == f ? new Hk(a, b) : new W(a, b))
     };
 
     function Jk(a) {
         return function(b) {
             for (var c = a.length - 1; 0 <= c; --c)
                 if (!a[c](b)) return !1;
             return !0
         }
     }
 
     function Kk(a, b, c) {
         for (var d = a.length, e = null, f = 0; f < d; ++f) {
             var g = a[f];
             if (b(g)) {
                 if (!c || c(g)) return g;
                 null === e && (e = g)
             }
         }
         return e
     };
     var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
         Lk = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];
 
     function Mk(a, b, c, d, e) {
         "false" == e.google_full_width_responsive ? c = {
             A: a,
             B: 1
         } : "autorelaxed" == b && e.google_full_width_responsive || Nk(b) || e.google_ad_resize ? (488 > Q(c) && (pi(c) || V(Fg)) && si(c, d), b = oi(a, c, d, e), c = !0 !== b ? {
             A: a,
             B: b
         } : {
             A: Q(c) || a,
             B: !0
         }) : c = {
             A: a,
             B: 2
         };
         b = c.B;
         return !0 !== b ? {
             A: a,
             B: b
         } : d.parentElement ? {
             A: c.A,
             B: b
         } : {
             A: a,
             B: b
         }
     }
 
     function Ok(a, b, c, d, e) {
         var f = ze(247, function() {
                 return Mk(a, b, c, d, e)
             }),
             g = f.A;
         f = f.B;
         var h = !0 === f,
             k = N(d.style.width),
             l = N(d.style.height),
             m = Pk(g, b, c, d, e, h);
         g = m.U;
         h = m.P;
         var q = m.ha;
         m = m.Aa;
         var t = Qk(b, q),
             u, A = (u = vi(d, c, "marginLeft", N)) ? u + "px" : "",
             E = (u = vi(d, c, "marginRight", N)) ? u + "px" : "";
         u = vi(d, c, "zIndex") || "";
         return new pk(t, g, q, null, m, f, h, A, E, l, k, u)
     }
 
     function Nk(a) {
         return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
     }
 
     function Pk(a, b, c, d, e, f) {
         b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : mi(b);
         var g = !1,
             h = !1;
         if (488 > Q(c)) {
             var k = li(d, c);
             var l = yi(d, c);
             g = !l && k;
             h = l && k
         }
         l = 488 > Q(c);
         var m = [wi(a), nk(b)];
         pi(c) || m.push(xi(l, c, d, h));
         null != e.google_max_responsive_height && m.push(Ai(e.google_max_responsive_height));
         var q = [function(u) {
             return !u.Ra
         }];
         !g && !h || pi(c) || (g = Bi(c, d), q.push(Ai(g)));
         var t = l && !f && 3 === b && Rk(c) ? new X(a, Math.floor(a / 1.2), 1) : Kk(Lk.slice(0), Jk(m), Jk(q));
         if (!t) throw new P("No slot size for availableWidth=" + a);
         l = ze(248,
             function() {
                 var u;
                 a: if (f) {
                     if (e.gfwrnh && (u = N(e.gfwrnh))) {
                         u = {
                             U: new Fk(a, u),
                             P: !0
                         };
                         break a
                     }
                     u = a / 1.2;
                     if (pi(c)) var A = u;
                     else {
                         A = Math;
                         var E = A.min;
                         if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var F = Infinity;
                         else {
                             F = d;
                             var xa = Infinity;
                             do {
                                 var Ga = vi(F, c, "height", N);
                                 Ga && (xa = Math.min(xa, Ga));
                                 (Ga = vi(F, c, "maxHeight", N)) && (xa = Math.min(xa, Ga))
                             } while ((F = F.parentElement) && "HTML" != F.tagName);
                             F = xa
                         }
                         A = E.call(A, u, F);
                         if (A < .5 * u || 100 > A) A = u
                     }
                     V(Ng) && !yi(d, c) && (A = Math.max(A, .5 * Je(c).clientHeight));
                     u = {
                         U: new Fk(a,
                             Math.floor(A)),
                         P: A < u ? 102 : !0
                     }
                 } else u = {
                     U: t,
                     P: 100
                 };
                 return u
             });
         g = l.U;
         l = l.P;
         return "in-article" === e.google_ad_layout && Sk(c) ? {
             U: Tk(a, c, d, g, e),
             P: !1,
             ha: b,
             Aa: k
         } : {
             U: g,
             P: l,
             ha: b,
             Aa: k
         }
     }
 
     function Qk(a, b) {
         if ("auto" == a) return 1;
         switch (b) {
             case 2:
                 return 2;
             case 1:
                 return 3;
             case 4:
                 return 4;
             case 3:
                 return 5;
             case 6:
                 return 6;
             case 5:
                 return 7;
             case 7:
                 return 8
         }
         throw Error("bad mask");
     }
 
     function Tk(a, b, c, d, e) {
         var f = e.google_ad_height || vi(c, b, "height", N);
         b = Ik(a, b, c, f, e).size();
         return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d
     }
 
     function Sk(a) {
         return V(Jg) || a.location && "#hffwroe2etoq" == a.location.hash
     }
 
     function Rk(a) {
         return V(Hg) || a.location && "#affwroe2etoq" == a.location.hash
     };
 
     function Uk(a, b) {
         W.call(this, a, b)
     }
     qa(Uk, W);
     Uk.prototype.X = function() {
         return this.minWidth()
     };
     Uk.prototype.ka = function(a) {
         return W.prototype.ka.call(this, a) + "_0ads_al"
     };
     var Vk = [new Uk(728, 15), new Uk(468, 15), new Uk(200, 90), new Uk(180, 90), new Uk(160, 90), new Uk(120, 90)];
 
     function Wk(a, b, c) {
         var d = 250,
             e = 90;
         d = void 0 === d ? 130 : d;
         e = void 0 === e ? 30 : e;
         var f = Kk(Vk, wi(a));
         if (!f) throw new P("No link unit size for width=" + a + "px");
         a = Math.min(a, 1200);
         f = f.height();
         b = Math.max(f, b);
         d = (new pk(10, new Uk(a, Math.min(b, 15 == f ? e : d)))).size();
         b = d.minWidth();
         d = d.height();
         15 <= c && (d = c);
         return new pk(10, new Uk(b, d))
     }
 
     function Xk(a, b, c, d) {
         if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
         var e = oi(a, b, c, d);
         if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
         e = Q(b);
         if (!e) return a;
         d.google_full_width_responsive_allowed = !0;
         ui(b, c);
         return e
     };
 
     function Yk(a, b, c, d, e) {
         var f;
         (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, ui(b, c), f = {
             A: f,
             B: !0
         }) : f = {
             A: a,
             B: 5
         } : f = {
             A: a,
             B: 4
         }: f = {
             A: a,
             B: 10
         };
         var g = f;
         f = g.A;
         g = g.B;
         if (!0 !== g || a == f) return new pk(12, new W(a, d), null, null, !0, g, 100);
         a = Pk(f, "auto", b, c, e, !0);
         return new pk(1, a.U, a.ha, 2, !0, g, a.P)
     };
 
     function Zk(a, b) {
         var c = b.google_ad_format;
         if ("autorelaxed" == c) {
             a: {
                 if ("pedestal" != b.google_content_recommendation_ui_type)
                     for (a = w(zk), c = a.next(); !c.done; c = a.next())
                         if (null != b[c.value]) {
                             b = !0;
                             break a
                         } b = !1
             }
             return b ? 9 : 5
         }
         if (Nk(c)) return 1;
         if ("link" == c) return 4;
         if ("fluid" == c) {
             if (c = "in-article" === b.google_ad_layout) c = V(Kg) || V(Jg) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
             return c ? ($k(b), 1) : 8
         }
         if (27 === b.google_reactive_ad_format) return $k(b), 1
     }
 
     function al(a, b, c, d, e) {
         e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && vi(b, d, "width", N) || c.google_ad_width || 0;
         (V(Lg) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto", a = 1);
         var f = (f = bl(a, e, b, c, d)) ? f : Ok(e, c.google_ad_format, d, b, c);
         f.size().ba(d, c, b);
         qk(f, e, c);
         1 != a && (a = f.size().height(), b.style.height = a + "px")
     }
 
     function bl(a, b, c, d, e) {
         var f = d.google_ad_height || vi(c, e, "height", N);
         switch (a) {
             case 5:
                 return a = ze(247, function() {
                     return Mk(b, d.google_ad_format, e, c, d)
                 }), f = a.A, a = a.B, !0 === a && b != f && ui(e, c), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), Bk(f, d);
             case 9:
                 return Ek(b, d);
             case 4:
                 return a = Xk(b, e, c, d), Wk(a, Bi(e, c), f);
             case 8:
                 return Ik(b, e, c, f, d);
             case 10:
                 return Yk(b, e, c, f, d)
         }
     }
 
     function $k(a) {
         a.google_ad_format = "auto";
         a.armr = 3
     };
 
     function Z(a) {
         this.j = [];
         this.h = a || window;
         this.g = 0;
         this.i = null;
         this.l = 0
     }
     var cl;
     n = Z.prototype;
     n.Na = function(a, b) {
         0 != this.g || 0 != this.j.length || b && b != window ? this.wa(a, b) : (this.g = 2, this.Ga(new dl(a, window)))
     };
     n.wa = function(a, b) {
         this.j.push(new dl(a, b || this.h));
         el(this)
     };
     n.Ua = function(a) {
         this.g = 1;
         if (a) {
             var b = Ae(188, Ja(this.Fa, this, !0));
             this.i = this.h.setTimeout(b, a)
         }
     };
     n.Fa = function(a) {
         a && ++this.l;
         1 == this.g && (null != this.i && (this.h.clearTimeout(this.i), this.i = null), this.g = 0);
         el(this)
     };
     n.bb = function() {
         return !(!window || !Array)
     };
     n.Oa = function() {
         return this.l
     };
 
     function el(a) {
         var b = Ae(189, Ja(a.eb, a));
         a.h.setTimeout(b, 0)
     }
     n.eb = function() {
         if (0 == this.g && this.j.length) {
             var a = this.j.shift();
             this.g = 2;
             var b = Ae(190, Ja(this.Ga, this, a));
             a.g.setTimeout(b, 0);
             el(this)
         }
     };
     n.Ga = function(a) {
         this.g = 0;
         a.h()
     };
 
     function fl(a) {
         try {
             return a.sz()
         } catch (b) {
             return !1
         }
     }
 
     function gl() {
         if (cl && fl(cl)) return cl;
         var a;
         if (!Cj) {
             for (var b = a = x, c = 0; a && a != a.parent;)
                 if (a = a.parent, c++, Jc(a)) b = a;
                 else break;
             Cj = b
         }
         a = Cj;
         return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && fl(b) && qd(b.nq) && qd(b.nqa) && qd(b.al) && qd(b.rl) ? cl = b : a.google_jobrunner = cl = new Z(a)
     }
 
     function hl(a, b) {
         gl().nq(a, b)
     }
 
     function il(a, b) {
         gl().nqa(a, b)
     }
     Z.prototype.nq = Z.prototype.Na;
     Z.prototype.nqa = Z.prototype.wa;
     Z.prototype.al = Z.prototype.Ua;
     Z.prototype.rl = Z.prototype.Fa;
     Z.prototype.sz = Z.prototype.bb;
     Z.prototype.tc = Z.prototype.Oa;
 
     function dl(a, b) {
         this.h = a;
         this.g = b
     };
 
     function jl(a, b) {
         var c = zd(b);
         if (c) {
             c = Q(c);
             var d = Lc(a, b) || {},
                 e = d.direction;
             if ("0px" === d.width && "none" != d.cssFloat) return -1;
             if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
             if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
         }
         return -1
     };
     var kl = {},
         ll = (kl.google_ad_modifications = !0, kl.google_analytics_domain_name = !0, kl.google_analytics_uacct = !0, kl.google_pause_ad_requests = !0, kl.google_trust_token_operation_status = !0, kl.google_user_agent_client_hint = !0, kl);
 
     function ml(a) {
         return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
     }
 
     function nl(a) {
         if (a = a.innerText || a.innerHTML)
             if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
         return null
     }
 
     function ol(a) {
         switch (a) {
             case "true":
                 return !0;
             case "false":
                 return !1;
             case "null":
                 return null;
             case "undefined":
                 break;
             default:
                 try {
                     var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                     if (b) return b[1] || b[2] || "";
                     if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                         var c = parseFloat(a);
                         return c === c ? c : void 0
                     }
                 } catch (d) {}
         }
     };
     var pl = ["A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
         "AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
     ];
 
     function ql() {
         var a = L.document;
         a = void 0 === a ? window.document : a;
         hd(pl, a)
     };
 
     function rl(a, b, c) {
         var d = window;
         return function() {
             var e = ie(),
                 f = 3;
             try {
                 var g = b.apply(this, arguments)
             } catch (h) {
                 f = 13;
                 if (c) return c(a, h), g;
                 throw h;
             } finally {
                 d.google_measure_js_timing && e && (e = {
                     label: a.toString(),
                     value: e,
                     duration: (ie() || 0) - e,
                     type: f
                 }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
             }
             return g
         }
     }
 
     function sl(a, b) {
         return rl(a, b, function(c, d) {
             (new ue).D(c, d)
         })
     };
 
     function tl(a, b) {
         return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
     }
 
     function ul() {
         var a = new p.Set;
         try {
             if ("undefined" === typeof googletag || !googletag.pubads) return a;
             for (var b = googletag.pubads(), c = w(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
         } catch (e) {}
         return a
     }
 
     function vl(a) {
         a = a.id;
         return null != a && (ul().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
     }
 
     function wl(a, b, c) {
         if (!a.sources) return !1;
         var d = ah(Xg);
         switch (xl(a)) {
             case 2:
                 var e = yl(a);
                 if (e) return c.some(function(g) {
                     return zl(e, g, d)
                 });
             case 1:
                 var f = Al(a);
                 if (f) return b.some(function(g) {
                     return zl(f, g, d)
                 })
         }
         return !1
     }
 
     function xl(a) {
         if (!a.sources) return 0;
         a = a.sources.filter(function(b) {
             return b.previousRect && b.currentRect
         });
         if (1 <= a.length) {
             a = a[0];
             if (a.previousRect.top < a.currentRect.top) return 2;
             if (a.previousRect.top > a.currentRect.top) return 1
         }
         return 0
     }
 
     function Al(a) {
         return Bl(a, function(b) {
             return b.currentRect
         })
     }
 
     function yl(a) {
         return Bl(a, function(b) {
             return b.previousRect
         })
     }
 
     function Bl(a, b) {
         return a.sources.reduce(function(c, d) {
             d = b(d);
             return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
         }, null)
     }
 
     function Cl() {
         R.call(this);
         this.O = this.$ = this.oa = this.pa = this.g = this.H = this.u = this.j = 0;
         this.W = !1;
         this.L = this.l = this.h = 0;
         var a = document.querySelector("[data-google-query-id]");
         this.ra = a ? a.getAttribute("data-google-query-id") : null;
         this.M = null;
         this.qa = !1;
         this.N = function() {}
     }
     qa(Cl, R);
 
     function Dl() {
         var a = new Cl;
         if (V(Tg) && !window.google_plmetrics && window.PerformanceObserver) {
             window.google_plmetrics = !0;
             for (var b = w(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, El(a).observe({
                 type: c,
                 buffered: !V(Zg)
             });
             Fl(a)
         }
     }
 
     function El(a) {
         a.M || (a.M = new PerformanceObserver(sl(640, function(b) {
             var c = Gl !== window.scrollX || Hl !== window.scrollY ? [] : Il,
                 d = Jl();
             b = w(b.getEntries());
             for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                 case "layout-shift":
                     var f = a;
                     e.hadRecentInput || V(Ug) && !(.01 < e.value) || (f.j += Number(e.value), Number(e.value) > f.u && (f.u = Number(e.value)), f.H += 1, wl(e, c, d) && (f.g += e.value, f.pa++));
                     break;
                 case "largest-contentful-paint":
                     a.oa = Math.floor(e.renderTime || e.loadTime);
                     a.$ = e.size;
                     break;
                 case "first-input":
                     a.O =
                         Number((e.processingStart - e.startTime).toFixed(3));
                     a.W = !0;
                     break;
                 case "longtask":
                     e = Math.max(0, e.duration - 50), a.h += e, a.l = Math.max(a.l, e), a.L += 1
             }
         })));
         return a.M
     }
 
     function Fl(a) {
         var b = sl(641, function() {
                 var f = document;
                 2 == ({
                     visible: 1,
                     hidden: 2,
                     prerender: 3,
                     preview: 4,
                     unloaded: 5
                 } [f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Kl(a)
             }),
             c = sl(641, function() {
                 return void Kl(a)
             });
         document.addEventListener("visibilitychange", b);
         document.addEventListener("unload", c);
         var d = ah(Yg),
             e;
         0 < d && (e = setTimeout(c, 1E3 * d));
         a.N = function() {
             document.removeEventListener("visibilitychange", b);
             document.removeEventListener("unload", c);
             El(a).disconnect();
             e && clearTimeout(e)
         }
     }
     Cl.prototype.i = function() {
         R.prototype.i.call(this);
         this.N()
     };
 
     function Kl(a) {
         if (!a.qa) {
             a.qa = !0;
             El(a).takeRecords();
             var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
             window.LayoutShift && (b += "&cls=" + a.j.toFixed(3), b += "&mls=" + a.u.toFixed(3), b += tl("nls", a.H), window.LayoutShiftAttribution && (b += "&cas=" + a.g.toFixed(3), b += tl("nas", a.pa)));
             window.LargestContentfulPaint && (b += tl("lcp", a.oa), b += tl("lcps", a.$));
             window.PerformanceEventTiming && a.W && (b += tl("fid", a.O));
             window.PerformanceLongTaskTiming && (b += tl("cbt", a.h), b += tl("mbt", a.l), b += tl("nlt", a.L));
             for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) vl(e.value) && c++;
             b += tl("nif", c);
             b += tl("ifi", sd(window));
             c = Pf.m().g();
             b += "&eid=" + encodeURIComponent(c.join());
             b += "&top=" + (x === x.top ? 1 : 0);
             if (a.ra) c = "&qqid=" + encodeURIComponent(a.ra);
             else {
                 if ("number" !== typeof x.goog_pvsid) try {
                     Object.defineProperty(x, "goog_pvsid", {
                         value: Math.floor(Math.random() * Math.pow(2, 52)),
                         configurable: !1
                     })
                 } catch (f) {}
                 c = tl("pvsid", Number(x.goog_pvsid) || -1)
             }
             b += c;
             window.googletag && (b += "&gpt=1");
             window.fetch(b, {
                 keepalive: !0,
                 credentials: "include",
                 redirect: "follow",
                 method: "get",
                 mode: "no-cors"
             });
             a.s || (a.s = !0, a.i())
         }
     }
 
     function zl(a, b, c) {
         if (0 === c) return !0;
         var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
         a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
         return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
     }
 
     function Jl() {
         var a = [].concat(ja(document.getElementsByTagName("iframe"))).filter(vl),
             b = [].concat(ja(ul())).map(function(c) {
                 return document.getElementById(c)
             }).filter(function(c) {
                 return null !== c
             });
         Gl = window.scrollX;
         Hl = window.scrollY;
         return Il = [].concat(ja(a), ja(b)).map(function(c) {
             return c.getBoundingClientRect()
         })
     }
     var Gl = void 0,
         Hl = void 0,
         Il = [];
 
     function Ll() {
         if (V(Sg)) {
             var a = window.navigator.userAgent,
                 b = /Chrome\/(\S+)/.exec(a);
             if (/Android/.test(a) && b) return 0 <= ob(b[1], "89.0.4380.2")
         }
         return !1
     };
     var Ml = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
             "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
         ],
         Nl = [{
             issuerOrigin: "https://adservice.google.com",
             issuancePath: "/tt/i",
             redemptionPath: "/tt/r",
             shouldRedeemToken: function() {
                 return !0
             },
             shouldRequestToken: function() {
                 return !1
             }
         }, {
             issuerOrigin: "https://attestation.android.com",
             issuancePath: "/att/i",
             redemptionPath: "/att/r",
             shouldRedeemToken: function() {
                 return Ll()
             },
             shouldRequestToken: function() {
                 return Ll()
             }
         }];
 
     function Ol(a) {
         R.call(this);
         var b = void 0 === b ? window.document : b;
         var c = V(Wg);
         hd(Ml, b, c);
         this.j = Nl;
         this.h = a;
         document.hasTrustToken && (this.g = Pl(this))
     }
     qa(Ol, R);
 
     function Pl(a) {
         var b = a.j.map(function(c) {
             return {
                 issuerOrigin: c.issuerOrigin,
                 state: 1
             }
         });
         a.h(b);
         return b
     }
 
     function Ql(a, b, c) {
         var d = r(a.g, "findIndex").call(a.g, function(e) {
             return e.issuerOrigin === b
         });
         0 <= d && (a.g[d].state = c, a.h(a.g))
     }
 
     function Rl(a, b) {
         var c = b.issuerOrigin + b.redemptionPath,
             d = {
                 keepalive: !0,
                 redirect: "follow",
                 method: "get",
                 trustToken: {
                     type: "token-redemption",
                     issuer: b.issuerOrigin,
                     refreshPolicy: "none"
                 }
             };
         Ql(a, b.issuerOrigin, 2);
         return window.fetch(c, d).then(function(e) {
             if (!e.ok) throw Error(e.status + ": Network response was not ok!");
             Ql(a, b.issuerOrigin, 6)
         }).catch(function(e) {
             e && "NoModificationAllowedError" === e.name ? Ql(a, b.issuerOrigin, 6) : Ql(a, b.issuerOrigin, 5)
         })
     }
 
     function Sl(a, b, c) {
         var d = b.issuerOrigin + b.issuancePath;
         Ql(a, b.issuerOrigin, 8);
         return window.fetch(d, {
             trustToken: {
                 type: "token-request"
             }
         }).then(function(e) {
             if (!e.ok) throw Error(e.status + ": Network response was not ok!");
             Ql(a, b.issuerOrigin, 10);
             c && Rl(a, b)
         }).catch(function(e) {
             e && "NoModificationAllowedError" === e.name ? (Ql(a, b.issuerOrigin, 10), c && Rl(a, b)) : Ql(a, b.issuerOrigin, 9)
         })
     }
 
     function Tl(a) {
         if (document.hasTrustToken) {
             var b = [];
             a.j.forEach(function(c) {
                 var d = c.shouldRedeemToken(),
                     e = c.shouldRequestToken();
                 d || e ? document.hasTrustToken(c.issuerOrigin).then(function(f) {
                     f ? d && b.push(Rl(a, c)) : e ? b.push(Sl(a, c, d)) : Ql(a, c.issuerOrigin, 3)
                 }) : Ql(a, c.issuerOrigin, 7)
             });
             p.Promise && p.Promise.all && p.Promise.all(b)
         }
     };
 
     function Ul(a) {
         C(this, a, Vl, null)
     }
     y(Ul, B);
     var Vl = [6];
     var Wl = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
 
     function Xl() {
         var a = L;
         return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Wl).then(function(b) {
             var c = new Ul;
             c = Ob(c, 1, b.platform);
             c = Ob(c, 2, b.platformVersion);
             c = Ob(c, 3, b.architecture);
             c = Ob(c, 4, b.model);
             return Ob(c, 5, b.uaFullVersion)
         }) : null
     };
 
     function Yl(a) {
         a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
     }
 
     function Zl(a, b, c) {
         var d = L;
         c = void 0 === c ? "" : c;
         Yl(d);
         d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = function() {
             return $l(d)
         }, a = am(d, c, a, b), Kc(d.document, a, V(yg)).id = "google_shimpl")
     }
     var $l = Ae(215, function(a) {
         var b = a.google_sa_queue,
             c = b.shift();
         a.google_sa_impl || Be("shimpl", {
             t: "no_fn"
         });
         "function" === typeof c && ze(216, c);
         b.length && a.setTimeout(function() {
             return $l(a)
         }, 0)
     });
 
     function bm(a, b, c) {
         a.google_sa_queue = a.google_sa_queue || [];
         a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
     }
 
     function am(a, b, c, d) {
         a: if (Math.random() < ah(zg)) var e = lb(od(c.Ya).toString());
             else {
                 switch (ah(Pg)) {
                     case 1:
                         e = lb(od(c.Xa).toString());
                         break a
                 }
                 e = null
             }c = Mb(d, 4) ? c.Wa : c.Za;c = e ? e : lb(od(c).toString());a: {
             if (Mb(d, 4)) {
                 b || (b = cm(a));
                 if (b) {
                     d = {};
                     d = (d.client = b, d.plah = a.location.host, d.amaexp = 1, d);
                     break a
                 }
                 throw Error("PublisherCodeNotFoundForAma");
             }
             d = {}
         }
         b = [];$g.m().g(Og.g, Og.defaultValue) && b.push($g.m().g(Og.g, Og.defaultValue));V(Ag) && b.push(a.location.host);b = 0 === b.length ? {} : {
             bust: b.join("~")
         };a = {};
         for (var f in d) a[f] =
             d[f];
         for (var g in b) a[g] || (a[g] = b[g]);f = kb.exec(jb(c).toString());g = f[3] || "";
         return lb(f[1] + mb("?", f[2] || "", a) + mb("#", g, void 0))
     }
 
     function cm(a) {
         if (a.google_ad_client) return a.google_ad_client;
         var b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]');
         if (b || (b = a.document.querySelector(".adsbygoogle[data-ad-client]"))) return b.getAttribute("data-ad-client");
         b: {
             b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) || /i(phone|pad|pod)/i.test(a) &&
             /applewebkit/i.test(a) && !/version|safari/i.test(a) && !yd() ? ml : nl;
             for (var c = b.length - 1; 0 <= c; c--) {
                 var d = b[c];
                 if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                     b = d;
                     break b
                 }
             }
             b = null
         }
         if (b) {
             a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
             for (c = {}; d = a.exec(b);) c[d[1]] = ol(d[2]);
             b = c.google_ad_client ? c.google_ad_client : ""
         } else b = "";
         return b ? b : ""
     }
 
     function dm(a) {
         if (!mk) a: {
             for (var b = [x.top], c = [], d = 0, e; e = b[d++];) {
                 c.push(e);
                 try {
                     if (e.frames)
                         for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                 } catch (k) {}
             }
             for (b = 0; b < c.length; b++) try {
                 var h = c[b].frames.google_esf;
                 if (h) {
                     mk = h;
                     break a
                 }
             } catch (k) {}
             mk = null
         }
         if (mk || /[^a-z0-9-]/.test(a)) return null;
         c = Dc(document, "IFRAME");
         c.id = "google_esf";
         c.name = "google_esf";
         c.src = "https://googleads.g.doubleclick.net/pagead/html/r20210406/r20190131/zrt_lookup.html#";
         c.style.display = "none";
         c.setAttribute("data-ad-client", Vd(a));
         return c
     }
 
     function em(a, b, c) {
         fm(a, b, c, function(d, e) {
             var f = d.document;
             d = void 0;
             for (var g = 0; !d || f.getElementById(d + "_anchor");) d = "aswift_" + g++;
             var h = Number(e.google_ad_width || 0),
                 k = Number(e.google_ad_height || 0);
             (g = e.ds || "") && (g += r(g, "endsWith").call(g, ";") ? "" : ";");
             var l = "";
             l = void 0 === l ? "" : l;
             h = "border:none;height:" + k + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (h + "px;background-color:transparent;");
             g = ['<ins id="' + (d + '_expand"'), ' style="display:inline-table;' + h + (void 0 === g ? "" : g) + '"', l ? ' data-ad-slot="' +
                 l + '">' : ">", '<ins id="' + (d + '_anchor" style="display:block;') + h + '">', "</ins></ins>"
             ].join("");
             16 == e.google_reactive_ad_format || e.rss ? (e = f.createElement("div"), f = zb(g), Cb(e, f), c.appendChild(e.firstChild)) : (e = zb(g), Cb(c, e));
             return d
         })
     }
 
     function fm(a, b, c, d) {
         var e = d(a, b);
         gm(a, c, b);
         V(Ig) || (c = dm(b.google_ad_client)) && a.document.documentElement.appendChild(c);
         c = Na;
         d = (new Date).getTime();
         b.google_lrv = "r20210406";
         b.google_async_iframe_id = e;
         V(Mg) || (b.google_unique_id = td(a));
         b.google_start_time = c;
         b.google_bpp = d > c ? d - c : 1;
         a.google_sv_map = a.google_sv_map || {};
         a.google_sv_map[e] = b;
         b.dninfo = b.google_loader_used;
         d = (c = !!a.document.getElementById(e + "_anchor")) ? hl : il;
         b.dninfo += "_" + c;
         var f = {
             pubWin: a,
             iframeWin: null,
             vars: b
         };
         bm(a, function() {
             b.dninfo +=
                 "_" + !!a.document.getElementById(e + "_anchor");
             a.google_sa_impl(f)
         }, d)
     }
 
     function gm(a, b, c) {
         var d = c.google_ad_output,
             e = c.google_ad_format,
             f = c.google_ad_width || 0,
             g = c.google_ad_height || 0;
         e || "html" != d && null != d || (e = f + "x" + g);
         d = !c.google_ad_slot || c.google_override_format || !xc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
         e && d ? e = e.toLowerCase() : e = "";
         c.google_ad_format = e;
         if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
             e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                 c.google_orig_ad_height || c.google_ad_height
             ];
             d = [];
             f = 0;
             for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
             (d = d.join()) && e.push(d);
             c.google_ad_unit_key = Rc(e.join(":")).toString();
             var h = void 0 === h ? !1 : h;
             e = [];
             for (d = 0; b && 25 > d; ++d) {
                 f = "";
                 void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                 a: {
                     if (b && b.nodeName && b.parentElement) {
                         g = b.nodeName.toString().toLowerCase();
                         for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                             var q = k[m];
                             if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                 g) {
                                 if (b === q) {
                                     g = "." + l;
                                     break a
                                 }++l
                             }
                         }
                     }
                     g = ""
                 }
                 e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                 b = b.parentElement
             }
             h = e.join() + ":";
             b = [];
             if (a) try {
                 var t = a.parent;
                 for (e = 0; t && t !== a && 25 > e; ++e) {
                     var u = t.frames;
                     for (d = 0; d < u.length; ++d)
                         if (a === u[d]) {
                             b.push(d);
                             break
                         } a = t;
                     t = a.parent
                 }
             } catch (A) {}
             c.google_ad_dom_fingerprint = Rc(h + b.join()).toString()
         }
     };
 
     function hm(a, b) {
         switch (a) {
             case "google_reactive_ad_format":
                 return a = parseInt(b, 10), isNaN(a) ? 0 : a;
             case "google_allow_expandable_ads":
                 return /^true$/.test(b);
             default:
                 return b
         }
     }
 
     function im(a, b) {
         if (a.getAttribute("src")) {
             var c = a.getAttribute("src") || "";
             var d = c.search(Ic),
                 e;
             b: {
                 for (e = 0; 0 <= (e = c.indexOf("client", e)) && e < d;) {
                     var f = c.charCodeAt(e - 1);
                     if (38 == f || 63 == f)
                         if (f = c.charCodeAt(e + 6), !f || 61 == f || 38 == f || 35 == f) break b;
                     e += 7
                 }
                 e = -1
             }
             if (0 > e) c = null;
             else {
                 f = c.indexOf("&", e);
                 if (0 > f || f > d) f = d;
                 e += 7;
                 c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
             }
             c && (b.google_ad_client = hm("google_ad_client", c))
         }
         a = a.attributes;
         c = a.length;
         for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = nb(f.name.replace("data-matched-content",
             "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = hm(e, f.value), null !== f && (b[e] = f)))
     }
 
     function jm(a) {
         if (a = jd(a)) switch (a.data && a.data.autoFormat) {
             case "rspv":
                 return 13;
             case "mcrspv":
                 return 15;
             default:
                 return 14
         } else return 12
     }
 
     function km(a, b, c) {
         im(a, b);
         if (c.document && c.document.body && !Zk(c, b) && !b.google_reactive_ad_format) {
             var d = parseInt(a.style.width, 10),
                 e = jl(a, c);
             if (0 < e && d > e) {
                 var f = parseInt(a.style.height, 10);
                 d = !!xc[d + "x" + f];
                 var g = e;
                 if (d) {
                     var h = yc(e, f);
                     if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                     else throw new P("No slot size for availableWidth=" + e);
                 }
                 b.google_ad_resize = !0;
                 b.google_ad_width = g;
                 d || (b.google_ad_format = null, b.google_override_format = !0);
                 e = g;
                 a.style.width = e + "px";
                 f = Ok(e, "auto", c, a, b);
                 g = e;
                 f.size().ba(c, b,
                     a);
                 qk(f, g, b);
                 f = f.size();
                 b.google_responsive_formats = null;
                 f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
             }
         }
         d = a.offsetWidth || vi(a, c, "width", N) || b.google_ad_width || 0;
         e = Ka(Ok, d, "auto", c, a, b, !1, !0);
         f = zd(c) || c;
         g = b.google_ad_client;
         f = f.location && "#ftptohbh" === f.location.hash ? 2 : Ad(f.location, "google_responsive_slot_debug") || Ad(f.location, "google_responsive_slot_preview") || V(Eg) ? 1 : V(Cg) ? 2 : Ke(f, 1, g) ? 1 : 0;
         if (g = 0 !== f) b: if (!(488 > Q(c) || V(Dg)) || b.google_reactive_ad_format || Zk(c,
                     b) || ii(a, b)) g = !1;
             else {
                 for (g = a; g; g = g.parentElement) {
                     h = Lc(g, c);
                     if (!h) {
                         b.gfwrnwer = 18;
                         g = !1;
                         break b
                     }
                     if (!Va(["static", "relative"], h.position)) {
                         b.gfwrnwer = 17;
                         g = !1;
                         break b
                     }
                 }
                 if (!V(Dg) && (g = ni(c, a, d, .3, b), !0 !== g)) {
                     b.gfwrnwer = g;
                     g = !1;
                     break b
                 }
                 g = c.top == c ? !0 : !1
             } g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, qk(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
         if (e = Zk(c, b)) al(e,
             a, b, c, d);
         else {
             if (ii(a, b)) {
                 if (d = Lc(a, c)) a.style.width = d.width, a.style.height = d.height, hi(d, b);
                 b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                 b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                 b.google_loader_features_used = 256;
                 b.google_responsive_auto_format = jm(c)
             } else hi(a.style, b);
             c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? al(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = oi(a.offsetWidth ||
                 parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
         }
     };
 
     function lm(a) {
         C(this, a, null, null)
     }
     y(lm, B);
 
     function mm(a) {
         C(this, a, null, null)
     }
     y(mm, B);
 
     function nm(a) {
         C(this, a, null, null)
     }
     y(nm, B);
 
     function om(a) {
         a = (a = (new Mj(a)).get("FCCDCF", "")) ? a : null;
         try {
             return a ? Rb(lm, a) : null
         } catch (b) {
             return null
         }
     }
 
     function pm(a) {
         return (a = om(a)) ? I(a, mm, 4) : null
     };
 
     function qm(a) {
         function b() {
             if (!a.frames.__uspapiLocator)
                 if (c.body) {
                     var e = Dc(d.g, "IFRAME");
                     e.style.display = "none";
                     e.style.width = "0px";
                     e.style.height = "0px";
                     e.style.border = "none";
                     e.style.zIndex = "-1000";
                     e.style.left = "-1000px";
                     e.style.top = "-1000px";
                     e.name = "__uspapiLocator";
                     c.body.appendChild(e)
                 } else a.setTimeout(b, 5)
         }
         var c = a.document,
             d = a ? new Ec(9 == a.nodeType ? a : a.ownerDocument || a.document) : Oa || (Oa = new Ec);
         b()
     };
 
     function rm(a) {
         this.g = a;
         this.h = a.document;
         this.i = (a = (a = om(this.h)) ? I(a, nm, 5) || null : null) ? D(a, 2) : null;
         (a = pm(this.h)) && null != D(a, 1) && D(a, 1);
         (a = pm(this.h)) && null != D(a, 2) && D(a, 2)
     }
 
     function sm() {
         var a = window;
         a.__uspapi || a.frames.__uspapiLocator || (a = new rm(a), tm(a))
     }
 
     function tm(a) {
         !a.i || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", qm(a.g), La(function(b) {
             for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
             return a.j.apply(a, ja(c))
         }))
     }
     rm.prototype.j = function(a, b, c) {
         "function" === typeof c && "getUSPData" === a && c({
             version: 1,
             uspString: this.i
         }, !0)
     };
 
     function um(a) {
         R.call(this);
         this.h = a;
         this.g = null;
         this.l = {};
         this.j = null
     }
     qa(um, R);
     um.prototype.i = function() {
         this.l = {};
         this.j && (Cc(this.h, "message", this.j), delete this.j);
         delete this.l;
         delete this.h;
         delete this.g;
         R.prototype.i.call(this)
     };
 
     function vm(a) {
         R.call(this);
         this.h = a;
         this.g = null;
         this.g || (this.h.googlefc ? this.g = this.h : this.g = Zc(this.h, "googlefcPresent"))
     }
     qa(vm, R);
     var wm = null,
         xm = [];
 
     function ym(a) {
         return xd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
     }
 
     function zm(a, b) {
         a.setAttribute("data-adsbygoogle-status", "done");
         Am(a, b)
     }
 
     function Am(a, b) {
         var c = window,
             d = wd();
         d.google_spfd || (d.google_spfd = km);
         (d = b.google_reactive_ads_config) || km(a, b, c);
         if (!Bm(a, b, c)) {
             d || (c.google_lpabyc = ji(a, c) + vi(a, c, "height", N));
             if (d) {
                 d = d.page_level_pubvars || {};
                 if (K(L).page_contains_reactive_tag && !K(L).allow_second_reactive_tag) {
                     if (d.pltais) {
                         Zb(!1);
                         return
                     }
                     throw new P("Only one 'enable_page_level_ads' allowed per page.");
                 }
                 K(L).page_contains_reactive_tag = !0;
                 Zb(7 === d.google_pgb_reactive)
             }
             V(Mg) ? b.google_unique_id = rd(c) : rd(c);
             pd(ll, function(e, f) {
                 b[f] =
                     b[f] || c[f]
             });
             b.google_loader_used = "aa";
             b.google_reactive_tag_first = 1 === (K(L).first_tag_on_page || 0);
             ze(164, function() {
                 em(c, b, a)
             })
         }
     }
 
     function Bm(a, b, c) {
         var d = b.google_reactive_ads_config,
             e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
             f = Vb(c);
         if (f && f.sa && "on" != b.google_adtest && !e) {
             e = ji(a, c);
             var g = Je(c).clientHeight;
             if (!f.ia || f.ia && ((0 == g ? null : e / g) || 0) >= f.ia) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Da(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.ab && (null !== Yc(a.getAttribute("width")) &&
                 a.setAttribute("width", 0), null !== Yc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
         }
         if ((f = Lc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
         a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
         return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
             !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
     }
 
     function Cm(a) {
         var b = document.getElementsByTagName("INS");
         for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
             var e = d;
             if (ym(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
         }
         return null
     }
 
     function Dm(a, b, c) {
         if (a && a.shift)
             for (var d = 20; 0 < a.length && 0 < d;) {
                 try {
                     Em(a.shift(), b, c)
                 } catch (e) {
                     setTimeout(function() {
                         throw e;
                     })
                 }--d
             }
     }
 
     function Fm() {
         var a = Dc(document, "INS");
         a.className = "adsbygoogle";
         a.className += " adsbygoogle-noablate";
         ad(a);
         return a
     }
 
     function Gm(a) {
         var b = {};
         pd(Fe, function(e, f) {
             !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
         });
         Ca(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
         var c = Fm();
         wc.body.appendChild(c);
         var d = {};
         d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
         d.google_pause_ad_requests = !!K(L).pause_ad_requests;
         zm(c, d)
     }
 
     function Hm(a) {
         function b() {
             return Gm(a)
         }
         var c = void 0 === c ? L : c;
         Ie(c).wasPlaTagProcessed = !0;
         var d = c.document;
         if (d.body || "complete" == d.readyState || "interactive" == d.readyState) b();
         else {
             var e = Ya(Ae(191, b));
             Bc(d, "DOMContentLoaded", e);
             (new x.MutationObserver(function(f, g) {
                 d.body && (e(), g.disconnect())
             })).observe(d, {
                 childList: !0,
                 subtree: !0
             })
         }
     }
 
     function Em(a, b, c) {
         var d = {};
         ze(165, function() {
             Im(a, d, b, c)
         }, function(e) {
             e.client = e.client || d.google_ad_client || a.google_ad_client;
             e.slotname = e.slotname || d.google_ad_slot;
             e.tag_origin = e.tag_origin || d.google_tag_origin
         })
     }
 
     function Jm(a) {
         delete a.google_checked_head;
         Qc(a, function(b, c) {
             $b[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
         })
     }
 
     function Km(a) {
         var b = L,
             c = V(Bg) && b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
         if (c) {
             c.setAttribute("data-checked-head", "true");
             var d = K(window);
             if (d.head_tag_slot_vars) throw new P("Only one AdSense head tag supported per page. The second tag is ignored.");
             var e = {};
             im(c, e);
             Jm(e);
             var f = bb(e);
             d.head_tag_slot_vars = f;
             c = {
                 google_ad_client: e.google_ad_client,
                 enable_page_level_ads: e
             };
             b.adsbygoogle || (b.adsbygoogle = []);
             b = b.adsbygoogle;
             b.loaded ? b.push(c) : b.splice(0, 0, c);
             e.google_adbreak_test && Lm(f, a);
             Ee(function() {
                 Lm(f, a)
             })
         }
     }
 
     function Im(a, b, c, d) {
         if (null == a) throw new P("push() called with no parameters.");
         Mm(a, H(d, 7), H(d, 2));
         a: {
             if ("object" === typeof a && null != a) {
                 if ("string" === typeof a.type) {
                     var e = 2;
                     break a
                 }
                 if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) {
                     e = 3;
                     break a
                 }
             }
             e = 0
         }
         if (0 !== e) null == wm ? 3 === e && xm.push(a) : 3 === e ? ze(787, function() {
             wm.handleAdConfig(a)
         }) : wm.handleAdBreak(a).catch(function(g) {
             ve.D(730, g instanceof Error ? g : Error(String(g)), void 0, void 0)
         });
         else {
             Na = (new Date).getTime();
             Zl(c, d, Nm(a));
             Om();
             a: {
                 if (void 0 != a.enable_page_level_ads) {
                     if ("string" === typeof a.google_ad_client) {
                         c = !0;
                         break a
                     }
                     throw new P("'google_ad_client' is missing from the tag config.");
                 }
                 c = !1
             }
             if (c) Pm(a, d, b);
             else if ((c = a.params) && pd(c, function(g, h) {
                     b[h] = g
                 }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
             else {
                 c = Qm(a.element);
                 im(c, b);
                 e = K(x).head_tag_slot_vars || {};
                 Qc(e, function(g, h) {
                     b.hasOwnProperty(h) || (b[h] = g)
                 });
                 if (c.hasAttribute("data-require-head") && !K(x).head_tag_slot_vars) throw new P("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                 if (!b.google_ad_client) throw new P("Ad client is missing from the slot.");
                 b.google_apsail = Oe(b.google_ad_client);
                 var f = (e = 0 === (K(L).first_tag_on_page || 0) && Aj(b)) && Bj(e);
                 e && !f && (Pm(e, d), K(L).skip_next_reactive_tag = !0);
                 0 ===
                     (K(L).first_tag_on_page || 0) && (K(L).first_tag_on_page = 2);
                 b.google_pause_ad_requests = !!K(L).pause_ad_requests;
                 zm(c, b);
                 e && f && Rm(e)
             }
         }
     }
     var Sm = !1;
 
     function Mm(a, b, c) {
         var d = L;
         V(xg) && !Sm && (Sm = !0, (a = Nm(a)) || (a = cm(d)), Be("predictive_abg", {
             a_c: a,
             p_c: b,
             b_v: c
         }, 1))
     }
 
     function Nm(a) {
         return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
     }
 
     function Om() {
         var a = L;
         if (V(sg)) {
             var b = Vb(a);
             if (!(b = b && b.sa)) {
                 try {
                     var c = a.localStorage
                 } catch (d) {
                     c = null
                 }
                 c = c ? Uh(c) : null;
                 b = !(c && Vh(c) && c)
             }
             b || Yb(a, 1)
         }
     }
 
     function Rm(a) {
         id(function() {
             Ie(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
         })
     }
 
     function Pm(a, b, c) {
         K(L).skip_next_reactive_tag ? K(L).skip_next_reactive_tag = !1 : (0 === (K(L).first_tag_on_page || 0) && (K(L).first_tag_on_page = 1), c && a.tag_partner && (Xb(x, a.tag_partner), Xb(c, a.tag_partner)), b = Mb(b, 6), K(L).ama_ran_on_page || fk(new ek(a, V(vg), ah(tg), V(ug), b)), Hm(a))
     }
 
     function Qm(a) {
         if (a) {
             if (!ym(a) && (a.id ? a = Cm(a.id) : a = null, !a)) throw new P("'element' has already been filled.");
             if (!("innerHTML" in a)) throw new P("'element' is not a good DOM element.");
         } else if (a = Cm(), !a) throw new P("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
         return a
     }
 
     function Tm() {
         var a = L,
             b = new Oj(a),
             c = new um(a),
             d = new vm(a);
         a = a.__cmp ? 1 : 0;
         b = Pj(b) ? 1 : 0;
         var e;
         (e = "function" === typeof c.h.__uspapi) || (c.g ? c = c.g : (c.g = Zc(c.h, "__uspapiLocator"), c = c.g), e = null != c);
         Be("cmpMet", {
             tcfv1: a,
             tcfv2: b,
             usp: e ? 1 : 0,
             fc: d.g ? 1 : 0,
             ptt: 9
         }, ah(ng))
     }
 
     function Sj(a) {
         var b = Ej();
         if (Vj(a)) {
             Ij(b, 24, a);
             for (var c = w(Gj(b, 25, [])), d = c.next(); !d.done; d = c.next()) d.value.resolve(a);
             Ij(b, 25, [])
         } else Ij(b, 24, null)
     }
 
     function Um(a) {
         var b = Ej();
         Ij(b, 26, !!Number(a))
     }
 
     function Vm(a) {
         Number(a) ? K(L).pause_ad_requests = !0 : (K(L).pause_ad_requests = !1, a = function() {
             if (!K(L).pause_ad_requests) {
                 var b = wd(),
                     c = wd();
                 try {
                     if (wc.createEvent) {
                         var d = wc.createEvent("CustomEvent");
                         d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                         b.dispatchEvent(d)
                     } else if (qd(c.CustomEvent)) {
                         var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                             bubbles: !1,
                             cancelable: !1,
                             detail: ""
                         });
                         b.dispatchEvent(e)
                     } else if (qd(c.Event)) {
                         var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                             bubbles: !1,
                             cancelable: !1
                         });
                         b.dispatchEvent(f)
                     }
                 } catch (g) {}
             }
         }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
     }
 
     function Wm(a) {
         switch (a) {
             case 0:
             case 2:
                 a = !0;
                 break;
             case 1:
                 a = !1;
                 break;
             default:
                 throw Error("Illegal value of cookieOptions: " + a);
         }
         L._gfp_a_ = a
     }
 
     function Xm(a) {
         qd(a) && window.setTimeout(a, 0)
     }
 
     function Lm(a, b) {
         xj(lb(od(b.$a).toString())).then(function(c) {
             if (null == wm) {
                 c.init(a);
                 wm = c;
                 for (var d = w(xm), e = d.next(); !e.done; e = d.next()) c.handleAdConfig(e.value)
             }
         }).catch(function(c) {
             ve.D(723, c instanceof Error ? c : Error(String(c)), void 0, void 0)
         })
     };
     (function(a, b, c, d) {
         d = void 0 === d ? function() {} : d;
         ve.Ha(Ce);
         ze(166, function() {
             var e = lk(b);
             jk(ve, H(e, 2));
             d();
             var f = kd(jd(L)) || L;
             gh(f);
             if ((!z("Trident") && !z("MSIE") || 0 <= ob(ub(), 11)) && (null == (L.Prototype || {}).Version || !V(wg))) {
                 var g = c(a, e);
                 we(V(Vg));
                 var h = Ae(780, function(t) {
                     L.google_trust_token_operation_status = t
                 });
                 Ae(779, function() {
                     Tl(new Ol(h))
                 })();
                 f = Xl();
                 null != f && f.then(function(t) {
                     L.google_user_agent_client_hint = t.s()
                 });
                 ql();
                 sm();
                 if (V(og) && (f = ah(pg), 0 > f && (f = -1), f = new Oj(window, f), Pj(f))) {
                     var k = Ej();
                     void 0 === Gj(k, 24, void 0) && (Ij(k, 24, null), Rj(f))
                 }
                 try {
                     Dl()
                 } catch (t) {}
                 if (f = zd(x)) f = Ie(f), f.tagSpecificState[1] || (f.tagSpecificState[1] = new ik);
                 Km(g);
                 f = window;
                 k = f.adsbygoogle;
                 if (!k || !k.loaded) {
                     ah(ng) && Tm();
                     var l = {
                         push: function(t) {
                             Em(t, g, e)
                         },
                         loaded: !0
                     };
                     try {
                         Object.defineProperty(l, "requestNonPersonalizedAds", {
                             set: Um
                         }), Object.defineProperty(l, "pauseAdRequests", {
                             set: Vm
                         }), Object.defineProperty(l, "cookieOptions", {
                             set: Wm
                         }), Object.defineProperty(l, "onload", {
                             set: Xm
                         })
                     } catch (t) {}
                     if (k)
                         for (var m = w(["requestNonPersonalizedAds",
                                 "pauseAdRequests", "cookieOptions"
                             ]), q = m.next(); !q.done; q = m.next()) q = q.value, void 0 !== k[q] && (l[q] = k[q]);
                     "_gfp_a_" in window || (window._gfp_a_ = !0);
                     Dm(k, g, e);
                     f.adsbygoogle = l;
                     k && (l.onload = k.onload);
                     V(Ig) && (f = dm("")) && document.documentElement.appendChild(f)
                 }
             }
         })
     })("", kk, function(a, b) {
         var c = 2012 < G(b, 1, 0) ? "_fy" + G(b, 1, 0) : "";
         H(b, 3);
         var d = H(b, 3).replace(/^\//, "");
         return {
             $a: a ? lc(mc, a, c) : lc(nc, H(b, 2), d, c),
             Za: a ? lc(oc, a, c) : lc(pc, H(b, 2), d, c),
             Xa: a ? lc(qc, a, c) : lc(rc, H(b, 2), d, c),
             Wa: a ? lc(sc, a, c) : lc(tc, H(b, 2), d, c),
             Ya: a ?
                 lc(uc, a, c) : lc(vc, H(b, 2), d, c)
         }
     });
 }).call(this, "[2019,\"r20210406\",\"\/r20190131\",null,[],null,null,\".google.co.in\"]");