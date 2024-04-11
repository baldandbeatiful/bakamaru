/*! For license information please see main.5e8e8e54.js.LICENSE.txt */
(() => {
    var e = {
            7144: function(e, t, n) {
                var r;
                ! function(a) {
                    "use strict";
                    var i, o = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                        s = Math.ceil,
                        l = Math.floor,
                        g = " not a boolean or binary digit",
                        A = "rounding mode",
                        c = "number type has more than 15 significant digits",
                        u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
                        I = 1e14,
                        C = 14,
                        d = 9007199254740991,
                        f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                        h = 1e7,
                        p = 1e9;

                    function m(e) {
                        var t = 0 | e;
                        return e > 0 || e === t ? t : t - 1
                    }

                    function y(e) {
                        for (var t, n, r = 1, a = e.length, i = e[0] + ""; r < a;) {
                            for (t = e[r++] + "", n = C - t.length; n--; t = "0" + t);
                            i += t
                        }
                        for (a = i.length; 48 === i.charCodeAt(--a););
                        return i.slice(0, a + 1 || 1)
                    }

                    function w(e, t) {
                        var n, r, a = e.c,
                            i = t.c,
                            o = e.s,
                            s = t.s,
                            l = e.e,
                            g = t.e;
                        if (!o || !s) return null;
                        if (n = a && !a[0], r = i && !i[0], n || r) return n ? r ? 0 : -s : o;
                        if (o != s) return o;
                        if (n = o < 0, r = l == g, !a || !i) return r ? 0 : !a ^ n ? 1 : -1;
                        if (!r) return l > g ^ n ? 1 : -1;
                        for (s = (l = a.length) < (g = i.length) ? l : g, o = 0; o < s; o++)
                            if (a[o] != i[o]) return a[o] > i[o] ^ n ? 1 : -1;
                        return l == g ? 0 : l > g ^ n ? 1 : -1
                    }

                    function b(e, t, n) {
                        return (e = x(e)) >= t && e <= n
                    }

                    function v(e) {
                        return "[object Array]" == Object.prototype.toString.call(e)
                    }

                    function E(e, t, n) {
                        for (var r, a, i = [0], o = 0, s = e.length; o < s;) {
                            for (a = i.length; a--; i[a] *= t);
                            for (i[r = 0] += u.indexOf(e.charAt(o++)); r < i.length; r++) i[r] > n - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n)
                        }
                        return i.reverse()
                    }

                    function k(e, t) {
                        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                    }

                    function S(e, t) {
                        var n, r;
                        if (t < 0) {
                            for (r = "0."; ++t; r += "0");
                            e = r + e
                        } else if (++t > (n = e.length)) {
                            for (r = "0", t -= n; --t; r += "0");
                            e += r
                        } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                        return e
                    }

                    function x(e) {
                        return (e = parseFloat(e)) < 0 ? s(e) : l(e)
                    }
                    i = function e(t) {
                        var n, r, a = 0,
                            i = U.prototype,
                            N = new U(1),
                            B = 20,
                            D = 4,
                            M = -7,
                            R = 21,
                            T = -1e7,
                            O = 1e7,
                            j = !0,
                            L = W,
                            _ = !1,
                            z = 1,
                            Q = 0,
                            P = {
                                decimalSeparator: ".",
                                groupSeparator: ",",
                                groupSize: 3,
                                secondaryGroupSize: 0,
                                fractionGroupSeparator: "\xa0",
                                fractionGroupSize: 0
                            };

                        function U(e, t) {
                            var n, i, s, g, A, I, f = this;
                            if (!(f instanceof U)) return j && H(26, "constructor call without new", e), new U(e, t);
                            if (null != t && L(t, 2, 64, a, "base")) {
                                if (I = e + "", 10 == (t |= 0)) return V(f = new U(e instanceof U ? e : I), B + f.e + 1, D);
                                if ((g = "number" == typeof e) && 0 * e != 0 || !new RegExp("^-?" + (n = "[" + u.slice(0, t) + "]+") + "(?:\\." + n + ")?$", t < 37 ? "i" : "").test(I)) return r(f, I, g, t);
                                g ? (f.s = 1 / e < 0 ? (I = I.slice(1), -1) : 1, j && I.replace(/^0\.0*|\./, "").length > 15 && H(a, c, e), g = !1) : f.s = 45 === I.charCodeAt(0) ? (I = I.slice(1), -1) : 1, I = F(I, 10, t, f.s)
                            } else {
                                if (e instanceof U) return f.s = e.s, f.e = e.e, f.c = (e = e.c) ? e.slice() : e, void(a = 0);
                                if ((g = "number" == typeof e) && 0 * e == 0) {
                                    if (f.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                        for (i = 0, s = e; s >= 10; s /= 10, i++);
                                        return f.e = i, f.c = [e], void(a = 0)
                                    }
                                    I = e + ""
                                } else {
                                    if (!o.test(I = e + "")) return r(f, I, g);
                                    f.s = 45 === I.charCodeAt(0) ? (I = I.slice(1), -1) : 1
                                }
                            }
                            for ((i = I.indexOf(".")) > -1 && (I = I.replace(".", "")), (s = I.search(/e/i)) > 0 ? (i < 0 && (i = s), i += +I.slice(s + 1), I = I.substring(0, s)) : i < 0 && (i = I.length), s = 0; 48 === I.charCodeAt(s); s++);
                            for (A = I.length; 48 === I.charCodeAt(--A););
                            if (I = I.slice(s, A + 1))
                                if (A = I.length, g && j && A > 15 && (e > d || e !== l(e)) && H(a, c, f.s * e), (i = i - s - 1) > O) f.c = f.e = null;
                                else if (i < T) f.c = [f.e = 0];
                            else {
                                if (f.e = i, f.c = [], s = (i + 1) % C, i < 0 && (s += C), s < A) {
                                    for (s && f.c.push(+I.slice(0, s)), A -= C; s < A;) f.c.push(+I.slice(s, s += C));
                                    I = I.slice(s), s = C - I.length
                                } else s -= A;
                                for (; s--; I += "0");
                                f.c.push(+I)
                            } else f.c = [f.e = 0];
                            a = 0
                        }

                        function F(e, t, r, a) {
                            var i, o, s, l, g, A, c, I = e.indexOf("."),
                                C = B,
                                d = D;
                            for (r < 37 && (e = e.toLowerCase()), I >= 0 && (s = Q, Q = 0, e = e.replace(".", ""), g = (c = new U(r)).pow(e.length - I), Q = s, c.c = E(S(y(g.c), g.e), 10, t), c.e = c.c.length), o = s = (A = E(e, r, t)).length; 0 == A[--s]; A.pop());
                            if (!A[0]) return "0";
                            if (I < 0 ? --o : (g.c = A, g.e = o, g.s = a, A = (g = n(g, c, C, d, t)).c, l = g.r, o = g.e), I = A[i = o + C + 1], s = t / 2, l = l || i < 0 || null != A[i + 1], l = d < 4 ? (null != I || l) && (0 == d || d == (g.s < 0 ? 3 : 2)) : I > s || I == s && (4 == d || l || 6 == d && 1 & A[i - 1] || d == (g.s < 0 ? 8 : 7)), i < 1 || !A[0]) e = l ? S("1", -C) : "0";
                            else {
                                if (A.length = i, l)
                                    for (--t; ++A[--i] > t;) A[i] = 0, i || (++o, A = [1].concat(A));
                                for (s = A.length; !A[--s];);
                                for (I = 0, e = ""; I <= s; e += u.charAt(A[I++]));
                                e = S(e, o)
                            }
                            return e
                        }

                        function Z(e, t, n, r) {
                            var a, i, o, s, l;
                            if (n = null != n && L(n, 0, 8, r, A) ? 0 | n : D, !e.c) return e.toString();
                            if (a = e.c[0], o = e.e, null == t) l = y(e.c), l = 19 == r || 24 == r && o <= M ? k(l, o) : S(l, o);
                            else if (i = (e = V(new U(e), t, n)).e, s = (l = y(e.c)).length, 19 == r || 24 == r && (t <= i || i <= M)) {
                                for (; s < t; l += "0", s++);
                                l = k(l, i)
                            } else if (t -= o, l = S(l, i), i + 1 > s) {
                                if (--t > 0)
                                    for (l += "."; t--; l += "0");
                            } else if ((t += i - s) > 0)
                                for (i + 1 == s && (l += "."); t--; l += "0");
                            return e.s < 0 && a ? "-" + l : l
                        }

                        function Y(e, t) {
                            var n, r, a = 0;
                            for (v(e[0]) && (e = e[0]), n = new U(e[0]); ++a < e.length;) {
                                if (!(r = new U(e[a])).s) {
                                    n = r;
                                    break
                                }
                                t.call(n, r) && (n = r)
                            }
                            return n
                        }

                        function W(e, t, n, r, a) {
                            return (e < t || e > n || e != x(e)) && H(r, (a || "decimal places") + (e < t || e > n ? " out of range" : " not an integer"), e), !0
                        }

                        function G(e, t, n) {
                            for (var r = 1, a = t.length; !t[--a]; t.pop());
                            for (a = t[0]; a >= 10; a /= 10, r++);
                            return (n = r + n * C - 1) > O ? e.c = e.e = null : n < T ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                        }

                        function H(e, t, n) {
                            var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][e] + "() " + t + ": " + n);
                            throw r.name = "BigNumber Error", a = 0, r
                        }

                        function V(e, t, n, r) {
                            var a, i, o, g, A, c, u, d = e.c,
                                h = f;
                            if (d) {
                                e: {
                                    for (a = 1, g = d[0]; g >= 10; g /= 10, a++);
                                    if ((i = t - a) < 0) i += C,
                                    o = t,
                                    u = (A = d[c = 0]) / h[a - o - 1] % 10 | 0;
                                    else if ((c = s((i + 1) / C)) >= d.length) {
                                        if (!r) break e;
                                        for (; d.length <= c; d.push(0));
                                        A = u = 0, a = 1, o = (i %= C) - C + 1
                                    } else {
                                        for (A = g = d[c], a = 1; g >= 10; g /= 10, a++);
                                        u = (o = (i %= C) - C + a) < 0 ? 0 : A / h[a - o - 1] % 10 | 0
                                    }
                                    if (r = r || t < 0 || null != d[c + 1] || (o < 0 ? A : A % h[a - o - 1]), r = n < 4 ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : u > 5 || 5 == u && (4 == n || r || 6 == n && (i > 0 ? o > 0 ? A / h[a - o] : 0 : d[c - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0,
                                    r ? (t -= e.e + 1, d[0] = h[(C - t % C) % C], e.e = -t || 0) : d[0] = e.e = 0,
                                    e;
                                    if (0 == i ? (d.length = c, g = 1, c--) : (d.length = c + 1, g = h[C - i], d[c] = o > 0 ? l(A / h[a - o] % h[o]) * g : 0), r)
                                        for (;;) {
                                            if (0 == c) {
                                                for (i = 1, o = d[0]; o >= 10; o /= 10, i++);
                                                for (o = d[0] += g, g = 1; o >= 10; o /= 10, g++);
                                                i != g && (e.e++, d[0] == I && (d[0] = 1));
                                                break
                                            }
                                            if (d[c] += g, d[c] != I) break;
                                            d[c--] = 0, g = 1
                                        }
                                    for (i = d.length; 0 === d[--i]; d.pop());
                                }
                                e.e > O ? e.c = e.e = null : e.e < T && (e.c = [e.e = 0])
                            }
                            return e
                        }
                        return U.another = e, U.ROUND_UP = 0, U.ROUND_DOWN = 1, U.ROUND_CEIL = 2, U.ROUND_FLOOR = 3, U.ROUND_HALF_UP = 4, U.ROUND_HALF_DOWN = 5, U.ROUND_HALF_EVEN = 6, U.ROUND_HALF_CEIL = 7, U.ROUND_HALF_FLOOR = 8, U.EUCLID = 9, U.config = U.set = function() {
                            var e, t, n = 0,
                                r = {},
                                i = arguments,
                                o = i[0],
                                s = o && "object" == typeof o ? function() {
                                    if (o.hasOwnProperty(t)) return null != (e = o[t])
                                } : function() {
                                    if (i.length > n) return null != (e = i[n++])
                                };
                            return s(t = "DECIMAL_PLACES") && L(e, 0, p, 2, t) && (B = 0 | e), r[t] = B, s(t = "ROUNDING_MODE") && L(e, 0, 8, 2, t) && (D = 0 | e), r[t] = D, s(t = "EXPONENTIAL_AT") && (v(e) ? L(e[0], -p, 0, 2, t) && L(e[1], 0, p, 2, t) && (M = 0 | e[0], R = 0 | e[1]) : L(e, -p, p, 2, t) && (M = -(R = 0 | (e < 0 ? -e : e)))), r[t] = [M, R], s(t = "RANGE") && (v(e) ? L(e[0], -p, -1, 2, t) && L(e[1], 1, p, 2, t) && (T = 0 | e[0], O = 0 | e[1]) : L(e, -p, p, 2, t) && (0 | e ? T = -(O = 0 | (e < 0 ? -e : e)) : j && H(2, t + " cannot be zero", e))), r[t] = [T, O], s(t = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (a = 0, L = (j = !!e) ? W : b) : j && H(2, t + g, e)), r[t] = j, s(t = "CRYPTO") && (!0 === e || !1 === e || 1 === e || 0 === e ? e ? !(e = "undefined" == typeof crypto) && crypto && (crypto.getRandomValues || crypto.randomBytes) ? _ = !0 : j ? H(2, "crypto unavailable", e ? void 0 : crypto) : _ = !1 : _ = !1 : j && H(2, t + g, e)), r[t] = _, s(t = "MODULO_MODE") && L(e, 0, 9, 2, t) && (z = 0 | e), r[t] = z, s(t = "POW_PRECISION") && L(e, 0, p, 2, t) && (Q = 0 | e), r[t] = Q, s(t = "FORMAT") && ("object" == typeof e ? P = e : j && H(2, t + " not an object", e)), r[t] = P, r
                        }, U.max = function() {
                            return Y(arguments, i.lt)
                        }, U.min = function() {
                            return Y(arguments, i.gt)
                        }, U.random = function() {
                            var e = 9007199254740992,
                                t = Math.random() * e & 2097151 ? function() {
                                    return l(Math.random() * e)
                                } : function() {
                                    return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                                };
                            return function(e) {
                                var n, r, a, i, o, g = 0,
                                    A = [],
                                    c = new U(N);
                                if (e = null != e && L(e, 0, p, 14) ? 0 | e : B, i = s(e / C), _)
                                    if (crypto.getRandomValues) {
                                        for (n = crypto.getRandomValues(new Uint32Array(i *= 2)); g < i;)(o = 131072 * n[g] + (n[g + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), n[g] = r[0], n[g + 1] = r[1]) : (A.push(o % 1e14), g += 2);
                                        g = i / 2
                                    } else if (crypto.randomBytes) {
                                    for (n = crypto.randomBytes(i *= 7); g < i;)(o = 281474976710656 * (31 & n[g]) + 1099511627776 * n[g + 1] + 4294967296 * n[g + 2] + 16777216 * n[g + 3] + (n[g + 4] << 16) + (n[g + 5] << 8) + n[g + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, g) : (A.push(o % 1e14), g += 7);
                                    g = i / 7
                                } else _ = !1, j && H(14, "crypto unavailable", crypto);
                                if (!_)
                                    for (; g < i;)(o = t()) < 9e15 && (A[g++] = o % 1e14);
                                for (i = A[--g], e %= C, i && e && (o = f[C - e], A[g] = l(i / o) * o); 0 === A[g]; A.pop(), g--);
                                if (g < 0) A = [a = 0];
                                else {
                                    for (a = -1; 0 === A[0]; A.splice(0, 1), a -= C);
                                    for (g = 1, o = A[0]; o >= 10; o /= 10, g++);
                                    g < C && (a -= C - g)
                                }
                                return c.e = a, c.c = A, c
                            }
                        }(), n = function() {
                            function e(e, t, n) {
                                var r, a, i, o, s = 0,
                                    l = e.length,
                                    g = t % h,
                                    A = t / h | 0;
                                for (e = e.slice(); l--;) s = ((a = g * (i = e[l] % h) + (r = A * i + (o = e[l] / h | 0) * g) % h * h + s) / n | 0) + (r / h | 0) + A * o, e[l] = a % n;
                                return s && (e = [s].concat(e)), e
                            }

                            function t(e, t, n, r) {
                                var a, i;
                                if (n != r) i = n > r ? 1 : -1;
                                else
                                    for (a = i = 0; a < n; a++)
                                        if (e[a] != t[a]) {
                                            i = e[a] > t[a] ? 1 : -1;
                                            break
                                        } return i
                            }

                            function n(e, t, n, r) {
                                for (var a = 0; n--;) e[n] -= a, a = e[n] < t[n] ? 1 : 0, e[n] = a * r + e[n] - t[n];
                                for (; !e[0] && e.length > 1; e.splice(0, 1));
                            }
                            return function(r, a, i, o, s) {
                                var g, A, c, u, d, f, h, p, y, w, b, v, E, k, S, x, N, B = r.s == a.s ? 1 : -1,
                                    D = r.c,
                                    M = a.c;
                                if (!D || !D[0] || !M || !M[0]) return new U(r.s && a.s && (D ? !M || D[0] != M[0] : M) ? D && 0 == D[0] || !M ? 0 * B : B / 0 : NaN);
                                for (y = (p = new U(B)).c = [], B = i + (A = r.e - a.e) + 1, s || (s = I, A = m(r.e / C) - m(a.e / C), B = B / C | 0), c = 0; M[c] == (D[c] || 0); c++);
                                if (M[c] > (D[c] || 0) && A--, B < 0) y.push(1), u = !0;
                                else {
                                    for (k = D.length, x = M.length, c = 0, B += 2, (d = l(s / (M[0] + 1))) > 1 && (M = e(M, d, s), D = e(D, d, s), x = M.length, k = D.length), E = x, b = (w = D.slice(0, x)).length; b < x; w[b++] = 0);
                                    N = M.slice(), N = [0].concat(N), S = M[0], M[1] >= s / 2 && S++;
                                    do {
                                        if (d = 0, (g = t(M, w, x, b)) < 0) {
                                            if (v = w[0], x != b && (v = v * s + (w[1] || 0)), (d = l(v / S)) > 1)
                                                for (d >= s && (d = s - 1), h = (f = e(M, d, s)).length, b = w.length; 1 == t(f, w, h, b);) d--, n(f, x < h ? N : M, h, s), h = f.length, g = 1;
                                            else 0 == d && (g = d = 1), h = (f = M.slice()).length;
                                            if (h < b && (f = [0].concat(f)), n(w, f, b, s), b = w.length, -1 == g)
                                                for (; t(M, w, x, b) < 1;) d++, n(w, x < b ? N : M, b, s), b = w.length
                                        } else 0 === g && (d++, w = [0]);
                                        y[c++] = d, w[0] ? w[b++] = D[E] || 0 : (w = [D[E]], b = 1)
                                    } while ((E++ < k || null != w[0]) && B--);
                                    u = null != w[0], y[0] || y.splice(0, 1)
                                }
                                if (s == I) {
                                    for (c = 1, B = y[0]; B >= 10; B /= 10, c++);
                                    V(p, i + (p.e = c + A * C - 1) + 1, o, u)
                                } else p.e = A, p.r = +u;
                                return p
                            }
                        }(), r = function() {
                            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                                t = /^([^.]+)\.$/,
                                n = /^\.([^.]+)$/,
                                r = /^-?(Infinity|NaN)$/,
                                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                            return function(o, s, l, g) {
                                var A, c = l ? s : s.replace(i, "");
                                if (r.test(c)) o.s = isNaN(c) ? null : c < 0 ? -1 : 1;
                                else {
                                    if (!l && (c = c.replace(e, (function(e, t, n) {
                                            return A = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, g && g != A ? e : t
                                        })), g && (A = g, c = c.replace(t, "$1").replace(n, "0.$1")), s != c)) return new U(c, A);
                                    j && H(a, "not a" + (g ? " base " + g : "") + " number", s), o.s = null
                                }
                                o.c = o.e = null, a = 0
                            }
                        }(), i.absoluteValue = i.abs = function() {
                            var e = new U(this);
                            return e.s < 0 && (e.s = 1), e
                        }, i.ceil = function() {
                            return V(new U(this), this.e + 1, 2)
                        }, i.comparedTo = i.cmp = function(e, t) {
                            return a = 1, w(this, new U(e, t))
                        }, i.decimalPlaces = i.dp = function() {
                            var e, t, n = this.c;
                            if (!n) return null;
                            if (e = ((t = n.length - 1) - m(this.e / C)) * C, t = n[t])
                                for (; t % 10 == 0; t /= 10, e--);
                            return e < 0 && (e = 0), e
                        }, i.dividedBy = i.div = function(e, t) {
                            return a = 3, n(this, new U(e, t), B, D)
                        }, i.dividedToIntegerBy = i.divToInt = function(e, t) {
                            return a = 4, n(this, new U(e, t), 0, 1)
                        }, i.equals = i.eq = function(e, t) {
                            return a = 5, 0 === w(this, new U(e, t))
                        }, i.floor = function() {
                            return V(new U(this), this.e + 1, 3)
                        }, i.greaterThan = i.gt = function(e, t) {
                            return a = 6, w(this, new U(e, t)) > 0
                        }, i.greaterThanOrEqualTo = i.gte = function(e, t) {
                            return a = 7, 1 === (t = w(this, new U(e, t))) || 0 === t
                        }, i.isFinite = function() {
                            return !!this.c
                        }, i.isInteger = i.isInt = function() {
                            return !!this.c && m(this.e / C) > this.c.length - 2
                        }, i.isNaN = function() {
                            return !this.s
                        }, i.isNegative = i.isNeg = function() {
                            return this.s < 0
                        }, i.isZero = function() {
                            return !!this.c && 0 == this.c[0]
                        }, i.lessThan = i.lt = function(e, t) {
                            return a = 8, w(this, new U(e, t)) < 0
                        }, i.lessThanOrEqualTo = i.lte = function(e, t) {
                            return a = 9, -1 === (t = w(this, new U(e, t))) || 0 === t
                        }, i.minus = i.sub = function(e, t) {
                            var n, r, i, o, s = this,
                                l = s.s;
                            if (a = 10, t = (e = new U(e, t)).s, !l || !t) return new U(NaN);
                            if (l != t) return e.s = -t, s.plus(e);
                            var g = s.e / C,
                                A = e.e / C,
                                c = s.c,
                                u = e.c;
                            if (!g || !A) {
                                if (!c || !u) return c ? (e.s = -t, e) : new U(u ? s : NaN);
                                if (!c[0] || !u[0]) return u[0] ? (e.s = -t, e) : new U(c[0] ? s : 3 == D ? -0 : 0)
                            }
                            if (g = m(g), A = m(A), c = c.slice(), l = g - A) {
                                for ((o = l < 0) ? (l = -l, i = c) : (A = g, i = u), i.reverse(), t = l; t--; i.push(0));
                                i.reverse()
                            } else
                                for (r = (o = (l = c.length) < (t = u.length)) ? l : t, l = t = 0; t < r; t++)
                                    if (c[t] != u[t]) {
                                        o = c[t] < u[t];
                                        break
                                    } if (o && (i = c, c = u, u = i, e.s = -e.s), (t = (r = u.length) - (n = c.length)) > 0)
                                for (; t--; c[n++] = 0);
                            for (t = I - 1; r > l;) {
                                if (c[--r] < u[r]) {
                                    for (n = r; n && !c[--n]; c[n] = t);
                                    --c[n], c[r] += I
                                }
                                c[r] -= u[r]
                            }
                            for (; 0 == c[0]; c.splice(0, 1), --A);
                            return c[0] ? G(e, c, A) : (e.s = 3 == D ? -1 : 1, e.c = [e.e = 0], e)
                        }, i.modulo = i.mod = function(e, t) {
                            var r, i, o = this;
                            return a = 11, e = new U(e, t), !o.c || !e.s || e.c && !e.c[0] ? new U(NaN) : !e.c || o.c && !o.c[0] ? new U(o) : (9 == z ? (i = e.s, e.s = 1, r = n(o, e, 0, 3), e.s = i, r.s *= i) : r = n(o, e, 0, z), o.minus(r.times(e)))
                        }, i.negated = i.neg = function() {
                            var e = new U(this);
                            return e.s = -e.s || null, e
                        }, i.plus = i.add = function(e, t) {
                            var n, r = this,
                                i = r.s;
                            if (a = 12, t = (e = new U(e, t)).s, !i || !t) return new U(NaN);
                            if (i != t) return e.s = -t, r.minus(e);
                            var o = r.e / C,
                                s = e.e / C,
                                l = r.c,
                                g = e.c;
                            if (!o || !s) {
                                if (!l || !g) return new U(i / 0);
                                if (!l[0] || !g[0]) return g[0] ? e : new U(l[0] ? r : 0 * i)
                            }
                            if (o = m(o), s = m(s), l = l.slice(), i = o - s) {
                                for (i > 0 ? (s = o, n = g) : (i = -i, n = l), n.reverse(); i--; n.push(0));
                                n.reverse()
                            }
                            for ((i = l.length) - (t = g.length) < 0 && (n = g, g = l, l = n, t = i), i = 0; t;) i = (l[--t] = l[t] + g[t] + i) / I | 0, l[t] = I === l[t] ? 0 : l[t] % I;
                            return i && (l = [i].concat(l), ++s), G(e, l, s)
                        }, i.precision = i.sd = function(e) {
                            var t, n, r = this,
                                a = r.c;
                            if (null != e && e !== !!e && 1 !== e && 0 !== e && (j && H(13, "argument" + g, e), e != !!e && (e = null)), !a) return null;
                            if (t = (n = a.length - 1) * C + 1, n = a[n]) {
                                for (; n % 10 == 0; n /= 10, t--);
                                for (n = a[0]; n >= 10; n /= 10, t++);
                            }
                            return e && r.e + 1 > t && (t = r.e + 1), t
                        }, i.round = function(e, t) {
                            var n = new U(this);
                            return (null == e || L(e, 0, p, 15)) && V(n, ~~e + this.e + 1, null != t && L(t, 0, 8, 15, A) ? 0 | t : D), n
                        }, i.shift = function(e) {
                            var t = this;
                            return L(e, -9007199254740991, d, 16, "argument") ? t.times("1e" + x(e)) : new U(t.c && t.c[0] && (e < -9007199254740991 || e > d) ? t.s * (e < 0 ? 0 : 1 / 0) : t)
                        }, i.squareRoot = i.sqrt = function() {
                            var e, t, r, a, i, o = this,
                                s = o.c,
                                l = o.s,
                                g = o.e,
                                A = B + 4,
                                c = new U("0.5");
                            if (1 !== l || !s || !s[0]) return new U(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
                            if (0 == (l = Math.sqrt(+o)) || l == 1 / 0 ? (((t = y(s)).length + g) % 2 == 0 && (t += "0"), l = Math.sqrt(t), g = m((g + 1) / 2) - (g < 0 || g % 2), r = new U(t = l == 1 / 0 ? "1e" + g : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + g)) : r = new U(l + ""), r.c[0])
                                for ((l = (g = r.e) + A) < 3 && (l = 0);;)
                                    if (i = r, r = c.times(i.plus(n(o, i, A, 1))), y(i.c).slice(0, l) === (t = y(r.c)).slice(0, l)) {
                                        if (r.e < g && --l, "9999" != (t = t.slice(l - 3, l + 1)) && (a || "4999" != t)) {
                                            +t && (+t.slice(1) || "5" != t.charAt(0)) || (V(r, r.e + B + 2, 1), e = !r.times(r).eq(o));
                                            break
                                        }
                                        if (!a && (V(i, i.e + B + 2, 0), i.times(i).eq(o))) {
                                            r = i;
                                            break
                                        }
                                        A += 4, l += 4, a = 1
                                    } return V(r, r.e + B + 1, D, e)
                        }, i.times = i.mul = function(e, t) {
                            var n, r, i, o, s, l, g, A, c, u, d, f, p, y, w, b = this,
                                v = b.c,
                                E = (a = 17, e = new U(e, t)).c;
                            if (!v || !E || !v[0] || !E[0]) return !b.s || !e.s || v && !v[0] && !E || E && !E[0] && !v ? e.c = e.e = e.s = null : (e.s *= b.s, v && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                            for (r = m(b.e / C) + m(e.e / C), e.s *= b.s, (g = v.length) < (u = E.length) && (p = v, v = E, E = p, i = g, g = u, u = i), i = g + u, p = []; i--; p.push(0));
                            for (y = I, w = h, i = u; --i >= 0;) {
                                for (n = 0, d = E[i] % w, f = E[i] / w | 0, o = i + (s = g); o > i;) n = ((A = d * (A = v[--s] % w) + (l = f * A + (c = v[s] / w | 0) * d) % w * w + p[o] + n) / y | 0) + (l / w | 0) + f * c, p[o--] = A % y;
                                p[o] = n
                            }
                            return n ? ++r : p.splice(0, 1), G(e, p, r)
                        }, i.toDigits = function(e, t) {
                            var n = new U(this);
                            return e = null != e && L(e, 1, p, 18, "precision") ? 0 | e : null, t = null != t && L(t, 0, 8, 18, A) ? 0 | t : D, e ? V(n, e, t) : n
                        }, i.toExponential = function(e, t) {
                            return Z(this, null != e && L(e, 0, p, 19) ? 1 + ~~e : null, t, 19)
                        }, i.toFixed = function(e, t) {
                            return Z(this, null != e && L(e, 0, p, 20) ? ~~e + this.e + 1 : null, t, 20)
                        }, i.toFormat = function(e, t) {
                            var n = Z(this, null != e && L(e, 0, p, 21) ? ~~e + this.e + 1 : null, t, 21);
                            if (this.c) {
                                var r, a = n.split("."),
                                    i = +P.groupSize,
                                    o = +P.secondaryGroupSize,
                                    s = P.groupSeparator,
                                    l = a[0],
                                    g = a[1],
                                    A = this.s < 0,
                                    c = A ? l.slice(1) : l,
                                    u = c.length;
                                if (o && (r = i, i = o, o = r, u -= r), i > 0 && u > 0) {
                                    for (r = u % i || i, l = c.substr(0, r); r < u; r += i) l += s + c.substr(r, i);
                                    o > 0 && (l += s + c.slice(r)), A && (l = "-" + l)
                                }
                                n = g ? l + P.decimalSeparator + ((o = +P.fractionGroupSize) ? g.replace(new RegExp("\\d{" + o + "}\\B", "g"), "$&" + P.fractionGroupSeparator) : g) : l
                            }
                            return n
                        }, i.toFraction = function(e) {
                            var t, r, a, i, o, s, l, g, A, c = j,
                                u = this,
                                I = u.c,
                                d = new U(N),
                                h = r = new U(N),
                                p = l = new U(N);
                            if (null != e && (j = !1, s = new U(e), j = c, (c = s.isInt()) && !s.lt(N) || (j && H(22, "max denominator " + (c ? "out of range" : "not an integer"), e), e = !c && s.c && V(s, s.e + 1, 1).gte(N) ? s : null)), !I) return u.toString();
                            for (A = y(I), i = d.e = A.length - u.e - 1, d.c[0] = f[(o = i % C) < 0 ? C + o : o], e = !e || s.cmp(d) > 0 ? i > 0 ? d : h : s, o = O, O = 1 / 0, s = new U(A), l.c[0] = 0; g = n(s, d, 0, 1), 1 != (a = r.plus(g.times(p))).cmp(e);) r = p, p = a, h = l.plus(g.times(a = h)), l = a, d = s.minus(g.times(a = d)), s = a;
                            return a = n(e.minus(r), p, 0, 1), l = l.plus(a.times(h)), r = r.plus(a.times(p)), l.s = h.s = u.s, t = n(h, p, i *= 2, D).minus(u).abs().cmp(n(l, r, i, D).minus(u).abs()) < 1 ? [h.toString(), p.toString()] : [l.toString(), r.toString()], O = o, t
                        }, i.toNumber = function() {
                            return +this
                        }, i.toPower = i.pow = function(e, t) {
                            var n, r, i, o = l(e < 0 ? -e : +e),
                                g = this;
                            if (null != t && (a = 23, t = new U(t)), !L(e, -9007199254740991, d, 23, "exponent") && (!isFinite(e) || o > d && (e /= 0) || parseFloat(e) != e && !(e = NaN)) || 0 == e) return n = Math.pow(+g, e), new U(t ? n % t : n);
                            for (t ? e > 1 && g.gt(N) && g.isInt() && t.gt(N) && t.isInt() ? g = g.mod(t) : (i = t, t = null) : Q && (n = s(Q / C + 2)), r = new U(N);;) {
                                if (o % 2) {
                                    if (!(r = r.times(g)).c) break;
                                    n ? r.c.length > n && (r.c.length = n) : t && (r = r.mod(t))
                                }
                                if (!(o = l(o / 2))) break;
                                g = g.times(g), n ? g.c && g.c.length > n && (g.c.length = n) : t && (g = g.mod(t))
                            }
                            return t ? r : (e < 0 && (r = N.div(r)), i ? r.mod(i) : n ? V(r, Q, D) : r)
                        }, i.toPrecision = function(e, t) {
                            return Z(this, null != e && L(e, 1, p, 24, "precision") ? 0 | e : null, t, 24)
                        }, i.toString = function(e) {
                            var t, n = this,
                                r = n.s,
                                a = n.e;
                            return null === a ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (t = y(n.c), t = null != e && L(e, 2, 64, 25, "base") ? F(S(t, a), 0 | e, 10, r) : a <= M || a >= R ? k(t, a) : S(t, a), r < 0 && n.c[0] && (t = "-" + t)), t
                        }, i.truncated = i.trunc = function() {
                            return V(new U(this), this.e + 1, 1)
                        }, i.valueOf = i.toJSON = function() {
                            var e, t = this,
                                n = t.e;
                            return null === n ? t.toString() : (e = y(t.c), e = n <= M || n >= R ? k(e, n) : S(e, n), t.s < 0 ? "-" + e : e)
                        }, i.isBigNumber = !0, null != t && U.config(t), U
                    }(), i.default = i.BigNumber = i, void 0 === (r = function() {
                        return i
                    }.call(t, n, t, e)) || (e.exports = r)
                }()
            },
            8101: (e, t, n) => {
                n(1288), e.exports = self.fetch.bind(self)
            },
            4463: (e, t, n) => {
                "use strict";
                var r = n(2791),
                    a = n(5296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var o = new Set,
                    s = {};

                function l(e, t) {
                    g(e, t), g(e + "Capture", t)
                }

                function g(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e])
                }
                var A = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    c = Object.prototype.hasOwnProperty,
                    u = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    I = {},
                    C = {};

                function d(e, t, n, r, a, i, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
                }
                var f = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    f[e] = new d(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    f[t] = new d(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    f[e] = new d(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    f[e] = new d(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    f[e] = new d(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    f[e] = new d(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    f[e] = new d(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    f[e] = new d(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    f[e] = new d(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var h = /[\-:]([a-z])/g;

                function p(e) {
                    return e[1].toUpperCase()
                }

                function m(e, t, n, r) {
                    var a = f.hasOwnProperty(t) ? f[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!c.call(C, e) || !c.call(I, e) && (u.test(e) ? C[e] = !0 : (I[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(h, p);
                    f[t] = new d(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(h, p);
                    f[t] = new d(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(h, p);
                    f[t] = new d(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    f[e] = new d(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), f.xlinkHref = new d("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    f[e] = new d(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    w = Symbol.for("react.element"),
                    b = Symbol.for("react.portal"),
                    v = Symbol.for("react.fragment"),
                    E = Symbol.for("react.strict_mode"),
                    k = Symbol.for("react.profiler"),
                    S = Symbol.for("react.provider"),
                    x = Symbol.for("react.context"),
                    N = Symbol.for("react.forward_ref"),
                    B = Symbol.for("react.suspense"),
                    D = Symbol.for("react.suspense_list"),
                    M = Symbol.for("react.memo"),
                    R = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var T = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var O = Symbol.iterator;

                function j(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = O && e[O] || e["@@iterator"]) ? e : null
                }
                var L, _ = Object.assign;

                function z(e) {
                    if (void 0 === L) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        L = t && t[1] || ""
                    }
                    return "\n" + L + e
                }
                var Q = !1;

                function P(e, t) {
                    if (!e || Q) return "";
                    Q = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (g) {
                                    var r = g
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (g) {
                                    r = g
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (g) {
                                r = g
                            }
                            e()
                        }
                    } catch (g) {
                        if (g && r && "string" === typeof g.stack) {
                            for (var a = g.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, s = i.length - 1; 1 <= o && 0 <= s && a[o] !== i[s];) s--;
                            for (; 1 <= o && 0 <= s; o--, s--)
                                if (a[o] !== i[s]) {
                                    if (1 !== o || 1 !== s)
                                        do {
                                            if (o--, 0 > --s || a[o] !== i[s]) {
                                                var l = "\n" + a[o].replace(" at new ", " at ");
                                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                            }
                                        } while (1 <= o && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        Q = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? z(e) : ""
                }

                function U(e) {
                    switch (e.tag) {
                        case 5:
                            return z(e.type);
                        case 16:
                            return z("Lazy");
                        case 13:
                            return z("Suspense");
                        case 19:
                            return z("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = P(e.type, !1);
                        case 11:
                            return e = P(e.type.render, !1);
                        case 1:
                            return e = P(e.type, !0);
                        default:
                            return ""
                    }
                }

                function F(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case v:
                            return "Fragment";
                        case b:
                            return "Portal";
                        case k:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case B:
                            return "Suspense";
                        case D:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case x:
                            return (e.displayName || "Context") + ".Consumer";
                        case S:
                            return (e._context.displayName || "Context") + ".Provider";
                        case N:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case M:
                            return null !== (t = e.displayName || null) ? t : F(e.type) || "Memo";
                        case R:
                            t = e._payload, e = e._init;
                            try {
                                return F(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function Z(e) {
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
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
                            return F(t);
                        case 8:
                            return t === E ? "StrictMode" : "Mode";
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
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function Y(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function W(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function G(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = W(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function H(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function V(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function J(e, t) {
                    var n = t.checked;
                    return _({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function K(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = Y(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && m(e, "checked", t, !1)
                }

                function q(e, t) {
                    X(e, t);
                    var n = Y(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, Y(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function $(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && V(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + Y(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return _({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: Y(n)
                    }
                }

                function ie(e, t) {
                    var n = Y(t.value),
                        r = Y(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function oe(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function le(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ge, Ae, ce = (Ae = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ge = ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return Ae(e, t)
                    }))
                } : Ae);

                function ue(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var Ie = {
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
                    },
                    Ce = ["Webkit", "ms", "Moz", "O"];

                function de(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || Ie.hasOwnProperty(e) && Ie[e] ? ("" + t).trim() : t + "px"
                }

                function fe(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = de(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(Ie).forEach((function(e) {
                    Ce.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ie[t] = Ie[e]
                    }))
                }));
                var he = _({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function pe(e, t) {
                    if (t) {
                        if (he[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function me(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
                            return !0
                    }
                }
                var ye = null;

                function we(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var be = null,
                    ve = null,
                    Ee = null;

                function ke(e) {
                    if (e = ma(e)) {
                        if ("function" !== typeof be) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = wa(t), be(e.stateNode, e.type, t))
                    }
                }

                function Se(e) {
                    ve ? Ee ? Ee.push(e) : Ee = [e] : ve = e
                }

                function xe() {
                    if (ve) {
                        var e = ve,
                            t = Ee;
                        if (Ee = ve = null, ke(e), t)
                            for (e = 0; e < t.length; e++) ke(t[e])
                    }
                }

                function Ne(e, t) {
                    return e(t)
                }

                function Be() {}
                var De = !1;

                function Me(e, t, n) {
                    if (De) return e(t, n);
                    De = !0;
                    try {
                        return Ne(e, t, n)
                    } finally {
                        De = !1, (null !== ve || null !== Ee) && (Be(), xe())
                    }
                }

                function Re(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = wa(n);
                    if (null === r) return null;
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Te = !1;
                if (A) try {
                    var Oe = {};
                    Object.defineProperty(Oe, "passive", {
                        get: function() {
                            Te = !0
                        }
                    }), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe)
                } catch (Ae) {
                    Te = !1
                }

                function je(e, t, n, r, a, i, o, s, l) {
                    var g = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, g)
                    } catch (A) {
                        this.onError(A)
                    }
                }
                var Le = !1,
                    _e = null,
                    ze = !1,
                    Qe = null,
                    Pe = {
                        onError: function(e) {
                            Le = !0, _e = e
                        }
                    };

                function Ue(e, t, n, r, a, i, o, s, l) {
                    Le = !1, _e = null, je.apply(Pe, arguments)
                }

                function Fe(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Ze(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Ye(e) {
                    if (Fe(e) !== e) throw Error(i(188))
                }

                function We(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Fe(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var o = a.alternate;
                            if (null === o) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === o.child) {
                                for (o = a.child; o;) {
                                    if (o === n) return Ye(a), e;
                                    if (o === r) return Ye(a), t;
                                    o = o.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = a, r = o;
                            else {
                                for (var s = !1, l = a.child; l;) {
                                    if (l === n) {
                                        s = !0, n = a, r = o;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0, r = a, n = o;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) {
                                    for (l = o.child; l;) {
                                        if (l === n) {
                                            s = !0, n = o, r = a;
                                            break
                                        }
                                        if (l === r) {
                                            s = !0, r = o, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ge(e) : null
                }

                function Ge(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ge(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var He = a.unstable_scheduleCallback,
                    Ve = a.unstable_cancelCallback,
                    Je = a.unstable_shouldYield,
                    Ke = a.unstable_requestPaint,
                    Xe = a.unstable_now,
                    qe = a.unstable_getCurrentPriorityLevel,
                    $e = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    it = null;
                var ot = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0
                    },
                    st = Math.log,
                    lt = Math.LN2;
                var gt = 64,
                    At = 4194304;

                function ct(e) {
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
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ut(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        i = e.pingedLanes,
                        o = 268435455 & n;
                    if (0 !== o) {
                        var s = o & ~a;
                        0 !== s ? r = ct(s) : 0 !== (i &= o) && (r = ct(i))
                    } else 0 !== (o = n & ~a) ? r = ct(o) : 0 !== i && (r = ct(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a;
                    return r
                }

                function It(e, t) {
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
                        default:
                            return -1
                    }
                }

                function Ct(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function dt() {
                    var e = gt;
                    return 0 === (4194240 & (gt <<= 1)) && (gt = 64), e
                }

                function ft(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function ht(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
                }

                function pt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - ot(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var mt = 0;

                function yt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var wt, bt, vt, Et, kt, St = !1,
                    xt = [],
                    Nt = null,
                    Bt = null,
                    Dt = null,
                    Mt = new Map,
                    Rt = new Map,
                    Tt = [],
                    Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function jt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Nt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Bt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Dt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Mt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Rt.delete(t.pointerId)
                    }
                }

                function Lt(e, t, n, r, a, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ma(t)) && bt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function _t(e) {
                    var t = pa(e.target);
                    if (null !== t) {
                        var n = Fe(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Ze(n))) return e.blockedOn = t, void kt(e.priority, (function() {
                                    vt(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function zt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ma(n)) && bt(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        ye = r, n.target.dispatchEvent(r), ye = null, t.shift()
                    }
                    return !0
                }

                function Qt(e, t, n) {
                    zt(e) && n.delete(t)
                }

                function Pt() {
                    St = !1, null !== Nt && zt(Nt) && (Nt = null), null !== Bt && zt(Bt) && (Bt = null), null !== Dt && zt(Dt) && (Dt = null), Mt.forEach(Qt), Rt.forEach(Qt)
                }

                function Ut(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, St || (St = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Pt)))
                }

                function Ft(e) {
                    function t(t) {
                        return Ut(t, e)
                    }
                    if (0 < xt.length) {
                        Ut(xt[0], e);
                        for (var n = 1; n < xt.length; n++) {
                            var r = xt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Nt && Ut(Nt, e), null !== Bt && Ut(Bt, e), null !== Dt && Ut(Dt, e), Mt.forEach(t), Rt.forEach(t), n = 0; n < Tt.length; n++)(r = Tt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn;) _t(n), null === n.blockedOn && Tt.shift()
                }
                var Zt = y.ReactCurrentBatchConfig,
                    Yt = !0;

                function Wt(e, t, n, r) {
                    var a = mt,
                        i = Zt.transition;
                    Zt.transition = null;
                    try {
                        mt = 1, Ht(e, t, n, r)
                    } finally {
                        mt = a, Zt.transition = i
                    }
                }

                function Gt(e, t, n, r) {
                    var a = mt,
                        i = Zt.transition;
                    Zt.transition = null;
                    try {
                        mt = 4, Ht(e, t, n, r)
                    } finally {
                        mt = a, Zt.transition = i
                    }
                }

                function Ht(e, t, n, r) {
                    if (Yt) {
                        var a = Jt(e, t, n, r);
                        if (null === a) Yr(e, t, r, Vt, n), jt(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Nt = Lt(Nt, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Bt = Lt(Bt, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Dt = Lt(Dt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var i = a.pointerId;
                                        return Mt.set(i, Lt(Mt.get(i) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return i = a.pointerId, Rt.set(i, Lt(Rt.get(i) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (jt(e, r), 4 & t && -1 < Ot.indexOf(e)) {
                            for (; null !== a;) {
                                var i = ma(a);
                                if (null !== i && wt(i), null === (i = Jt(e, t, n, r)) && Yr(e, t, r, Vt, n), i === a) break;
                                a = i
                            }
                            null !== a && r.stopPropagation()
                        } else Yr(e, t, r, null, n)
                    }
                }
                var Vt = null;

                function Jt(e, t, n, r) {
                    if (Vt = null, null !== (e = pa(e = we(r))))
                        if (null === (t = Fe(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = Ze(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Vt = e, null
                }

                function Kt(e) {
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
                            switch (qe()) {
                                case $e:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Xt = null,
                    qt = null,
                    $t = null;

                function en() {
                    if ($t) return $t;
                    var e, t, n = qt,
                        r = n.length,
                        a = "value" in Xt ? Xt.value : Xt.textContent,
                        i = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
                    return $t = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, i) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return _(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var on, sn, ln, gn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    An = an(gn),
                    cn = _({}, gn, {
                        view: 0,
                        detail: 0
                    }),
                    un = an(cn),
                    In = _({}, cn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: kn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    Cn = an(In),
                    dn = an(_({}, In, {
                        dataTransfer: 0
                    })),
                    fn = an(_({}, cn, {
                        relatedTarget: 0
                    })),
                    hn = an(_({}, gn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    pn = _({}, gn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    mn = an(pn),
                    yn = an(_({}, gn, {
                        data: 0
                    })),
                    wn = {
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
                    },
                    bn = {
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
                    },
                    vn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function En(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = vn[e]) && !!t[e]
                }

                function kn() {
                    return En
                }
                var Sn = _({}, cn, {
                        key: function(e) {
                            if (e.key) {
                                var t = wn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? bn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: kn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    xn = an(Sn),
                    Nn = an(_({}, In, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Bn = an(_({}, cn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: kn
                    })),
                    Dn = an(_({}, gn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Mn = _({}, In, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Rn = an(Mn),
                    Tn = [9, 13, 27, 32],
                    On = A && "CompositionEvent" in window,
                    jn = null;
                A && "documentMode" in document && (jn = document.documentMode);
                var Ln = A && "TextEvent" in window && !jn,
                    _n = A && (!On || jn && 8 < jn && 11 >= jn),
                    zn = String.fromCharCode(32),
                    Qn = !1;

                function Pn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Tn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Un(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Fn = !1;
                var Zn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Yn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Zn[e.type] : "textarea" === t
                }

                function Wn(e, t, n, r) {
                    Se(r), 0 < (t = Gr(t, "onChange")).length && (n = new An("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Gn = null,
                    Hn = null;

                function Vn(e) {
                    zr(e, 0)
                }

                function Jn(e) {
                    if (H(ya(e))) return e
                }

                function Kn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (A) {
                    var qn;
                    if (A) {
                        var $n = "oninput" in document;
                        if (!$n) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), $n = "function" === typeof er.oninput
                        }
                        qn = $n
                    } else qn = !1;
                    Xn = qn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Gn && (Gn.detachEvent("onpropertychange", nr), Hn = Gn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Jn(Hn)) {
                        var t = [];
                        Wn(t, Hn, e, we(e)), Me(Vn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Hn = n, (Gn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn(Hn)
                }

                function ir(e, t) {
                    if ("click" === e) return Jn(t)
                }

                function or(e, t) {
                    if ("input" === e || "change" === e) return Jn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function lr(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!c.call(t, a) || !sr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function gr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function Ar(e, t) {
                    var n, r = gr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = gr(r)
                    }
                }

                function cr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? cr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function ur() {
                    for (var e = window, t = V(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = V((e = t.contentWindow).document)
                    }
                    return t
                }

                function Ir(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function Cr(e) {
                    var t = ur(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && cr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && Ir(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Ar(n, i);
                            var o = Ar(n, r);
                            a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var dr = A && "documentMode" in document && 11 >= document.documentMode,
                    fr = null,
                    hr = null,
                    pr = null,
                    mr = !1;

                function yr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    mr || null == fr || fr !== V(r) || ("selectionStart" in (r = fr) && Ir(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, pr && lr(pr, r) || (pr = r, 0 < (r = Gr(hr, "onSelect")).length && (t = new An("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = fr)))
                }

                function wr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var br = {
                        animationend: wr("Animation", "AnimationEnd"),
                        animationiteration: wr("Animation", "AnimationIteration"),
                        animationstart: wr("Animation", "AnimationStart"),
                        transitionend: wr("Transition", "TransitionEnd")
                    },
                    vr = {},
                    Er = {};

                function kr(e) {
                    if (vr[e]) return vr[e];
                    if (!br[e]) return e;
                    var t, n = br[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Er) return vr[e] = n[t];
                    return e
                }
                A && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition);
                var Sr = kr("animationend"),
                    xr = kr("animationiteration"),
                    Nr = kr("animationstart"),
                    Br = kr("transitionend"),
                    Dr = new Map,
                    Mr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Rr(e, t) {
                    Dr.set(e, t), l(t, [e])
                }
                for (var Tr = 0; Tr < Mr.length; Tr++) {
                    var Or = Mr[Tr];
                    Rr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)))
                }
                Rr(Sr, "onAnimationEnd"), Rr(xr, "onAnimationIteration"), Rr(Nr, "onAnimationStart"), Rr("dblclick", "onDoubleClick"), Rr("focusin", "onFocus"), Rr("focusout", "onBlur"), Rr(Br, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));

                function _r(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, o, s, l, g) {
                            if (Ue.apply(this, arguments), Le) {
                                if (!Le) throw Error(i(198));
                                var A = _e;
                                Le = !1, _e = null, ze || (ze = !0, Qe = A)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function zr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var s = r[o],
                                        l = s.instance,
                                        g = s.currentTarget;
                                    if (s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                    _r(a, s, g), i = l
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (l = (s = r[o]).instance, g = s.currentTarget, s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                        _r(a, s, g), i = l
                                    }
                        }
                    }
                    if (ze) throw e = Qe, ze = !1, Qe = null, e
                }

                function Qr(e, t) {
                    var n = t[da];
                    void 0 === n && (n = t[da] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Zr(t, e, 2, !1), n.add(r))
                }

                function Pr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Zr(n, e, r, t)
                }
                var Ur = "_reactListening" + Math.random().toString(36).slice(2);

                function Fr(e) {
                    if (!e[Ur]) {
                        e[Ur] = !0, o.forEach((function(t) {
                            "selectionchange" !== t && (Lr.has(t) || Pr(t, !1, e), Pr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Ur] || (t[Ur] = !0, Pr("selectionchange", !1, t))
                    }
                }

                function Zr(e, t, n, r) {
                    switch (Kt(t)) {
                        case 1:
                            var a = Wt;
                            break;
                        case 4:
                            a = Gt;
                            break;
                        default:
                            a = Ht
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Te || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Yr(e, t, n, r, a) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var l = o.tag;
                                    if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a)) return;
                                    o = o.return
                                }
                            for (; null !== s;) {
                                if (null === (o = pa(s))) return;
                                if (5 === (l = o.tag) || 6 === l) {
                                    r = i = o;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Me((function() {
                        var r = i,
                            a = we(n),
                            o = [];
                        e: {
                            var s = Dr.get(e);
                            if (void 0 !== s) {
                                var l = An,
                                    g = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = xn;
                                        break;
                                    case "focusin":
                                        g = "focus", l = fn;
                                        break;
                                    case "focusout":
                                        g = "blur", l = fn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = fn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = Cn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = dn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = Bn;
                                        break;
                                    case Sr:
                                    case xr:
                                    case Nr:
                                        l = hn;
                                        break;
                                    case Br:
                                        l = Dn;
                                        break;
                                    case "scroll":
                                        l = un;
                                        break;
                                    case "wheel":
                                        l = Rn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = mn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Nn
                                }
                                var A = 0 !== (4 & t),
                                    c = !A && "scroll" === e,
                                    u = A ? null !== s ? s + "Capture" : null : s;
                                A = [];
                                for (var I, C = r; null !== C;) {
                                    var d = (I = C).stateNode;
                                    if (5 === I.tag && null !== d && (I = d, null !== u && (null != (d = Re(C, u)) && A.push(Wr(C, d, I)))), c) break;
                                    C = C.return
                                }
                                0 < A.length && (s = new l(s, g, null, n, a), o.push({
                                    event: s,
                                    listeners: A
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === ye || !(g = n.relatedTarget || n.fromElement) || !pa(g) && !g[Ca]) && (l || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (g = (g = n.relatedTarget || n.toElement) ? pa(g) : null) && (g !== (c = Fe(g)) || 5 !== g.tag && 6 !== g.tag) && (g = null)) : (l = null, g = r), l !== g)) {
                                if (A = Cn, d = "onMouseLeave", u = "onMouseEnter", C = "mouse", "pointerout" !== e && "pointerover" !== e || (A = Nn, d = "onPointerLeave", u = "onPointerEnter", C = "pointer"), c = null == l ? s : ya(l), I = null == g ? s : ya(g), (s = new A(d, C + "leave", l, n, a)).target = c, s.relatedTarget = I, d = null, pa(a) === r && ((A = new A(u, C + "enter", g, n, a)).target = I, A.relatedTarget = c, d = A), c = d, l && g) e: {
                                    for (u = g, C = 0, I = A = l; I; I = Hr(I)) C++;
                                    for (I = 0, d = u; d; d = Hr(d)) I++;
                                    for (; 0 < C - I;) A = Hr(A),
                                    C--;
                                    for (; 0 < I - C;) u = Hr(u),
                                    I--;
                                    for (; C--;) {
                                        if (A === u || null !== u && A === u.alternate) break e;
                                        A = Hr(A), u = Hr(u)
                                    }
                                    A = null
                                }
                                else A = null;
                                null !== l && Vr(o, s, l, A, !1), null !== g && null !== c && Vr(o, c, g, A, !0)
                            }
                            if ("select" === (l = (s = r ? ya(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var f = Kn;
                            else if (Yn(s))
                                if (Xn) f = or;
                                else {
                                    f = ar;
                                    var h = rr
                                }
                            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (f = ir);
                            switch (f && (f = f(e, r)) ? Wn(o, f, n, a) : (h && h(e, s, r), "focusout" === e && (h = s._wrapperState) && h.controlled && "number" === s.type && ee(s, "number", s.value)), h = r ? ya(r) : window, e) {
                                case "focusin":
                                    (Yn(h) || "true" === h.contentEditable) && (fr = h, hr = r, pr = null);
                                    break;
                                case "focusout":
                                    pr = hr = fr = null;
                                    break;
                                case "mousedown":
                                    mr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    mr = !1, yr(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (dr) break;
                                case "keydown":
                                case "keyup":
                                    yr(o, n, a)
                            }
                            var p;
                            if (On) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var m = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        m = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        m = "onCompositionUpdate";
                                        break e
                                }
                                m = void 0
                            }
                            else Fn ? Pn(e, n) && (m = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (m = "onCompositionStart");
                            m && (_n && "ko" !== n.locale && (Fn || "onCompositionStart" !== m ? "onCompositionEnd" === m && Fn && (p = en()) : (qt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Fn = !0)), 0 < (h = Gr(r, m)).length && (m = new yn(m, e, null, n, a), o.push({
                                event: m,
                                listeners: h
                            }), p ? m.data = p : null !== (p = Un(n)) && (m.data = p))), (p = Ln ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Un(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Qn = !0, zn);
                                    case "textInput":
                                        return (e = t.data) === zn && Qn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Fn) return "compositionend" === e || !On && Pn(e, t) ? (e = en(), $t = qt = Xt = null, Fn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return _n && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Gr(r, "onBeforeInput")).length && (a = new yn("onBeforeInput", "beforeinput", null, n, a), o.push({
                                event: a,
                                listeners: r
                            }), a.data = p))
                        }
                        zr(o, t)
                    }))
                }

                function Wr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Gr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            i = a.stateNode;
                        5 === a.tag && null !== i && (a = i, null != (i = Re(e, n)) && r.unshift(Wr(e, i, a)), null != (i = Re(e, t)) && r.push(Wr(e, i, a))), e = e.return
                    }
                    return r
                }

                function Hr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Vr(e, t, n, r, a) {
                    for (var i = t._reactName, o = []; null !== n && n !== r;) {
                        var s = n,
                            l = s.alternate,
                            g = s.stateNode;
                        if (null !== l && l === r) break;
                        5 === s.tag && null !== g && (s = g, a ? null != (l = Re(n, i)) && o.unshift(Wr(n, l, s)) : a || null != (l = Re(n, i)) && o.push(Wr(n, l, s))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }
                var Jr = /\r\n?/g,
                    Kr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Jr, "\n").replace(Kr, "")
                }

                function qr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(i(425))
                }

                function $r() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    ia = "function" === typeof Promise ? Promise : void 0,
                    oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                        return ia.resolve(null).then(e).catch(sa)
                    } : ra;

                function sa(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function la(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Ft(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Ft(t)
                }

                function ga(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function Aa(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var ca = Math.random().toString(36).slice(2),
                    ua = "__reactFiber$" + ca,
                    Ia = "__reactProps$" + ca,
                    Ca = "__reactContainer$" + ca,
                    da = "__reactEvents$" + ca,
                    fa = "__reactListeners$" + ca,
                    ha = "__reactHandles$" + ca;

                function pa(e) {
                    var t = e[ua];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[Ca] || n[ua]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Aa(e); null !== e;) {
                                    if (n = e[ua]) return n;
                                    e = Aa(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ma(e) {
                    return !(e = e[ua] || e[Ca]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function ya(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function wa(e) {
                    return e[Ia] || null
                }
                var ba = [],
                    va = -1;

                function Ea(e) {
                    return {
                        current: e
                    }
                }

                function ka(e) {
                    0 > va || (e.current = ba[va], ba[va] = null, va--)
                }

                function Sa(e, t) {
                    va++, ba[va] = e.current, e.current = t
                }
                var xa = {},
                    Na = Ea(xa),
                    Ba = Ea(!1),
                    Da = xa;

                function Ma(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return xa;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, i = {};
                    for (a in n) i[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function Ra(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ta() {
                    ka(Ba), ka(Na)
                }

                function Oa(e, t, n) {
                    if (Na.current !== xa) throw Error(i(168));
                    Sa(Na, t), Sa(Ba, n)
                }

                function ja(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(i(108, Z(e) || "Unknown", a));
                    return _({}, n, r)
                }

                function La(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xa, Da = Na.current, Sa(Na, e), Sa(Ba, Ba.current), !0
                }

                function _a(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = ja(e, t, Da), r.__reactInternalMemoizedMergedChildContext = e, ka(Ba), ka(Na), Sa(Na, e)) : ka(Ba), Sa(Ba, n)
                }
                var za = null,
                    Qa = !1,
                    Pa = !1;

                function Ua(e) {
                    null === za ? za = [e] : za.push(e)
                }

                function Fa() {
                    if (!Pa && null !== za) {
                        Pa = !0;
                        var e = 0,
                            t = mt;
                        try {
                            var n = za;
                            for (mt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            za = null, Qa = !1
                        } catch (a) {
                            throw null !== za && (za = za.slice(e + 1)), He($e, Fa), a
                        } finally {
                            mt = t, Pa = !1
                        }
                    }
                    return null
                }
                var Za = [],
                    Ya = 0,
                    Wa = null,
                    Ga = 0,
                    Ha = [],
                    Va = 0,
                    Ja = null,
                    Ka = 1,
                    Xa = "";

                function qa(e, t) {
                    Za[Ya++] = Ga, Za[Ya++] = Wa, Wa = e, Ga = t
                }

                function $a(e, t, n) {
                    Ha[Va++] = Ka, Ha[Va++] = Xa, Ha[Va++] = Ja, Ja = e;
                    var r = Ka;
                    e = Xa;
                    var a = 32 - ot(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - ot(t) + a;
                    if (30 < i) {
                        var o = a - a % 5;
                        i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Ka = 1 << 32 - ot(t) + a | n << a | r, Xa = i + e
                    } else Ka = 1 << i | n << a | r, Xa = e
                }

                function ei(e) {
                    null !== e.return && (qa(e, 1), $a(e, 1, 0))
                }

                function ti(e) {
                    for (; e === Wa;) Wa = Za[--Ya], Za[Ya] = null, Ga = Za[--Ya], Za[Ya] = null;
                    for (; e === Ja;) Ja = Ha[--Va], Ha[Va] = null, Xa = Ha[--Va], Ha[Va] = null, Ka = Ha[--Va], Ha[Va] = null
                }
                var ni = null,
                    ri = null,
                    ai = !1,
                    ii = null;

                function oi(e, t) {
                    var n = Rg(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function si(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ni = e, ri = ga(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ni = e, ri = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ja ? {
                                id: Ka,
                                overflow: Xa
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Rg(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ni = e, ri = null, !0);
                        default:
                            return !1
                    }
                }

                function li(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function gi(e) {
                    if (ai) {
                        var t = ri;
                        if (t) {
                            var n = t;
                            if (!si(e, t)) {
                                if (li(e)) throw Error(i(418));
                                t = ga(n.nextSibling);
                                var r = ni;
                                t && si(e, t) ? oi(r, n) : (e.flags = -4097 & e.flags | 2, ai = !1, ni = e)
                            }
                        } else {
                            if (li(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ai = !1, ni = e
                        }
                    }
                }

                function Ai(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ni = e
                }

                function ci(e) {
                    if (e !== ni) return !1;
                    if (!ai) return Ai(e), ai = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ri)) {
                        if (li(e)) throw ui(), Error(i(418));
                        for (; t;) oi(e, t), t = ga(t.nextSibling)
                    }
                    if (Ai(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ri = ga(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ri = null
                        }
                    } else ri = ni ? ga(e.stateNode.nextSibling) : null;
                    return !0
                }

                function ui() {
                    for (var e = ri; e;) e = ga(e.nextSibling)
                }

                function Ii() {
                    ri = ni = null, ai = !1
                }

                function Ci(e) {
                    null === ii ? ii = [e] : ii.push(e)
                }
                var di = y.ReactCurrentBatchConfig;

                function fi(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = _({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var hi = Ea(null),
                    pi = null,
                    mi = null,
                    yi = null;

                function wi() {
                    yi = mi = pi = null
                }

                function bi(e) {
                    var t = hi.current;
                    ka(hi), e._currentValue = t
                }

                function vi(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ei(e, t) {
                    pi = e, yi = mi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (ys = !0), e.firstContext = null)
                }

                function ki(e) {
                    var t = e._currentValue;
                    if (yi !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === mi) {
                            if (null === pi) throw Error(i(308));
                            mi = e, pi.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else mi = mi.next = e;
                    return t
                }
                var Si = null;

                function xi(e) {
                    null === Si ? Si = [e] : Si.push(e)
                }

                function Ni(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, xi(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Bi(e, r)
                }

                function Bi(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Di = !1;

                function Mi(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Ri(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Ti(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Oi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Bl)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Bi(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, xi(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Bi(e, n)
                }

                function ji(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, pt(e, n)
                    }
                }

                function Li(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? a = i = o : i = i.next = o, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function _i(e, t, n, r) {
                    var a = e.updateQueue;
                    Di = !1;
                    var i = a.firstBaseUpdate,
                        o = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var l = s,
                            g = l.next;
                        l.next = null, null === o ? i = g : o.next = g, o = l;
                        var A = e.alternate;
                        null !== A && ((s = (A = A.updateQueue).lastBaseUpdate) !== o && (null === s ? A.firstBaseUpdate = g : s.next = g, A.lastBaseUpdate = l))
                    }
                    if (null !== i) {
                        var c = a.baseState;
                        for (o = 0, A = g = l = null, s = i;;) {
                            var u = s.lane,
                                I = s.eventTime;
                            if ((r & u) === u) {
                                null !== A && (A = A.next = {
                                    eventTime: I,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var C = e,
                                        d = s;
                                    switch (u = t, I = n, d.tag) {
                                        case 1:
                                            if ("function" === typeof(C = d.payload)) {
                                                c = C.call(I, c, u);
                                                break e
                                            }
                                            c = C;
                                            break e;
                                        case 3:
                                            C.flags = -65537 & C.flags | 128;
                                        case 0:
                                            if (null === (u = "function" === typeof(C = d.payload) ? C.call(I, c, u) : C) || void 0 === u) break e;
                                            c = _({}, c, u);
                                            break e;
                                        case 2:
                                            Di = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (u = a.effects) ? a.effects = [s] : u.push(s))
                            } else I = {
                                eventTime: I,
                                lane: u,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === A ? (g = A = I, l = c) : A = A.next = I, o |= u;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (u = s).next, u.next = null, a.lastBaseUpdate = u, a.shared.pending = null
                            }
                        }
                        if (null === A && (l = c), a.baseState = l, a.firstBaseUpdate = g, a.lastBaseUpdate = A, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                o |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === i && (a.shared.lanes = 0);
                        _l |= o, e.lanes = o, e.memoizedState = c
                    }
                }

                function zi(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(i(191, a));
                                a.call(r)
                            }
                        }
                }
                var Qi = (new r.Component).refs;

                function Pi(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : _({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Ui = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Fe(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tg(),
                            a = ng(e),
                            i = Ti(r, a);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (rg(t, e, a, r), ji(t, e, a))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tg(),
                            a = ng(e),
                            i = Ti(r, a);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (rg(t, e, a, r), ji(t, e, a))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = tg(),
                            r = ng(e),
                            a = Ti(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Oi(e, a, r)) && (rg(t, e, r, n), ji(t, e, r))
                    }
                };

                function Fi(e, t, n, r, a, i, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(a, i))
                }

                function Zi(e, t, n) {
                    var r = !1,
                        a = xa,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = ki(i) : (a = Ra(t) ? Da : Na.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ma(e, a) : xa), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ui, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function Yi(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null)
                }

                function Wi(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = Qi, Mi(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? a.context = ki(i) : (i = Ra(t) ? Da : Na.current, a.context = Ma(e, i)), a.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (Pi(e, t, i, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Ui.enqueueReplaceState(a, a.state, null), _i(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function Gi(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var a = r,
                                o = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                                var t = a.refs;
                                t === Qi && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e
                            }, t._stringRef = o, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Hi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function Vi(e) {
                    return (0, e._init)(e._payload)
                }

                function Ji(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = Og(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = zg(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function g(e, t, n, r) {
                        var i = n.type;
                        return i === v ? c(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === R && Vi(i) === t.type) ? ((r = a(t, n.props)).ref = Gi(e, t, n), r.return = e, r) : ((r = jg(n.type, n.key, n.props, null, e.mode, r)).ref = Gi(e, t, n), r.return = e, r)
                    }

                    function A(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Qg(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function c(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Lg(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = zg("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case w:
                                    return (n = jg(t.type, t.key, t.props, null, e.mode, n)).ref = Gi(e, null, t), n.return = e, n;
                                case b:
                                    return (t = Qg(t, e.mode, n)).return = e, t;
                                case R:
                                    return u(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || j(t)) return (t = Lg(t, e.mode, n, null)).return = e, t;
                            Hi(e, t)
                        }
                        return null
                    }

                    function I(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case w:
                                    return n.key === a ? g(e, t, n, r) : null;
                                case b:
                                    return n.key === a ? A(e, t, n, r) : null;
                                case R:
                                    return I(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || j(n)) return null !== a ? null : c(e, t, n, r, null);
                            Hi(e, n)
                        }
                        return null
                    }

                    function C(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case w:
                                    return g(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case b:
                                    return A(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case R:
                                    return C(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || j(r)) return c(t, e = e.get(n) || null, r, a, null);
                            Hi(t, r)
                        }
                        return null
                    }

                    function d(a, i, s, l) {
                        for (var g = null, A = null, c = i, d = i = 0, f = null; null !== c && d < s.length; d++) {
                            c.index > d ? (f = c, c = null) : f = c.sibling;
                            var h = I(a, c, s[d], l);
                            if (null === h) {
                                null === c && (c = f);
                                break
                            }
                            e && c && null === h.alternate && t(a, c), i = o(h, i, d), null === A ? g = h : A.sibling = h, A = h, c = f
                        }
                        if (d === s.length) return n(a, c), ai && qa(a, d), g;
                        if (null === c) {
                            for (; d < s.length; d++) null !== (c = u(a, s[d], l)) && (i = o(c, i, d), null === A ? g = c : A.sibling = c, A = c);
                            return ai && qa(a, d), g
                        }
                        for (c = r(a, c); d < s.length; d++) null !== (f = C(c, a, d, s[d], l)) && (e && null !== f.alternate && c.delete(null === f.key ? d : f.key), i = o(f, i, d), null === A ? g = f : A.sibling = f, A = f);
                        return e && c.forEach((function(e) {
                            return t(a, e)
                        })), ai && qa(a, d), g
                    }

                    function f(a, s, l, g) {
                        var A = j(l);
                        if ("function" !== typeof A) throw Error(i(150));
                        if (null == (l = A.call(l))) throw Error(i(151));
                        for (var c = A = null, d = s, f = s = 0, h = null, p = l.next(); null !== d && !p.done; f++, p = l.next()) {
                            d.index > f ? (h = d, d = null) : h = d.sibling;
                            var m = I(a, d, p.value, g);
                            if (null === m) {
                                null === d && (d = h);
                                break
                            }
                            e && d && null === m.alternate && t(a, d), s = o(m, s, f), null === c ? A = m : c.sibling = m, c = m, d = h
                        }
                        if (p.done) return n(a, d), ai && qa(a, f), A;
                        if (null === d) {
                            for (; !p.done; f++, p = l.next()) null !== (p = u(a, p.value, g)) && (s = o(p, s, f), null === c ? A = p : c.sibling = p, c = p);
                            return ai && qa(a, f), A
                        }
                        for (d = r(a, d); !p.done; f++, p = l.next()) null !== (p = C(d, a, f, p.value, g)) && (e && null !== p.alternate && d.delete(null === p.key ? f : p.key), s = o(p, s, f), null === c ? A = p : c.sibling = p, c = p);
                        return e && d.forEach((function(e) {
                            return t(a, e)
                        })), ai && qa(a, f), A
                    }
                    return function e(r, i, o, l) {
                        if ("object" === typeof o && null !== o && o.type === v && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
                            switch (o.$$typeof) {
                                case w:
                                    e: {
                                        for (var g = o.key, A = i; null !== A;) {
                                            if (A.key === g) {
                                                if ((g = o.type) === v) {
                                                    if (7 === A.tag) {
                                                        n(r, A.sibling), (i = a(A, o.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (A.elementType === g || "object" === typeof g && null !== g && g.$$typeof === R && Vi(g) === A.type) {
                                                    n(r, A.sibling), (i = a(A, o.props)).ref = Gi(r, A, o), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, A);
                                                break
                                            }
                                            t(r, A), A = A.sibling
                                        }
                                        o.type === v ? ((i = Lg(o.props.children, r.mode, l, o.key)).return = r, r = i) : ((l = jg(o.type, o.key, o.props, null, r.mode, l)).ref = Gi(r, i, o), l.return = r, r = l)
                                    }
                                    return s(r);
                                case b:
                                    e: {
                                        for (A = o.key; null !== i;) {
                                            if (i.key === A) {
                                                if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                    n(r, i.sibling), (i = a(i, o.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = Qg(o, r.mode, l)).return = r,
                                        r = i
                                    }
                                    return s(r);
                                case R:
                                    return e(r, i, (A = o._init)(o._payload), l)
                            }
                            if (te(o)) return d(r, i, o, l);
                            if (j(o)) return f(r, i, o, l);
                            Hi(r, o)
                        }
                        return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = a(i, o)).return = r, r = i) : (n(r, i), (i = zg(o, r.mode, l)).return = r, r = i), s(r)) : n(r, i)
                    }
                }
                var Ki = Ji(!0),
                    Xi = Ji(!1),
                    qi = {},
                    $i = Ea(qi),
                    eo = Ea(qi),
                    to = Ea(qi);

                function no(e) {
                    if (e === qi) throw Error(i(174));
                    return e
                }

                function ro(e, t) {
                    switch (Sa(to, t), Sa(eo, e), Sa($i, qi), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                            break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ka($i), Sa($i, t)
                }

                function ao() {
                    ka($i), ka(eo), ka(to)
                }

                function io(e) {
                    no(to.current);
                    var t = no($i.current),
                        n = le(t, e.type);
                    t !== n && (Sa(eo, e), Sa($i, n))
                }

                function oo(e) {
                    eo.current === e && (ka($i), ka(eo))
                }
                var so = Ea(0);

                function lo(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var go = [];

                function Ao() {
                    for (var e = 0; e < go.length; e++) go[e]._workInProgressVersionPrimary = null;
                    go.length = 0
                }
                var co = y.ReactCurrentDispatcher,
                    uo = y.ReactCurrentBatchConfig,
                    Io = 0,
                    Co = null,
                    fo = null,
                    ho = null,
                    po = !1,
                    mo = !1,
                    yo = 0,
                    wo = 0;

                function bo() {
                    throw Error(i(321))
                }

                function vo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function Eo(e, t, n, r, a, o) {
                    if (Io = o, Co = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, co.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, a), mo) {
                        o = 0;
                        do {
                            if (mo = !1, yo = 0, 25 <= o) throw Error(i(301));
                            o += 1, ho = fo = null, t.updateQueue = null, co.current = gs, e = n(r, a)
                        } while (mo)
                    }
                    if (co.current = os, t = null !== fo && null !== fo.next, Io = 0, ho = fo = Co = null, po = !1, t) throw Error(i(300));
                    return e
                }

                function ko() {
                    var e = 0 !== yo;
                    return yo = 0, e
                }

                function So() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ho ? Co.memoizedState = ho = e : ho = ho.next = e, ho
                }

                function xo() {
                    if (null === fo) {
                        var e = Co.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = fo.next;
                    var t = null === ho ? Co.memoizedState : ho.next;
                    if (null !== t) ho = t, fo = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (fo = e).memoizedState,
                            baseState: fo.baseState,
                            baseQueue: fo.baseQueue,
                            queue: fo.queue,
                            next: null
                        }, null === ho ? Co.memoizedState = ho = e : ho = ho.next = e
                    }
                    return ho
                }

                function No(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function Bo(e) {
                    var t = xo(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = fo,
                        a = r.baseQueue,
                        o = n.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = o.next, o.next = s
                        }
                        r.baseQueue = a = o, n.pending = null
                    }
                    if (null !== a) {
                        o = a.next, r = r.baseState;
                        var l = s = null,
                            g = null,
                            A = o;
                        do {
                            var c = A.lane;
                            if ((Io & c) === c) null !== g && (g = g.next = {
                                lane: 0,
                                action: A.action,
                                hasEagerState: A.hasEagerState,
                                eagerState: A.eagerState,
                                next: null
                            }), r = A.hasEagerState ? A.eagerState : e(r, A.action);
                            else {
                                var u = {
                                    lane: c,
                                    action: A.action,
                                    hasEagerState: A.hasEagerState,
                                    eagerState: A.eagerState,
                                    next: null
                                };
                                null === g ? (l = g = u, s = r) : g = g.next = u, Co.lanes |= c, _l |= c
                            }
                            A = A.next
                        } while (null !== A && A !== o);
                        null === g ? s = r : g.next = l, sr(r, t.memoizedState) || (ys = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = g, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            o = a.lane, Co.lanes |= o, _l |= o, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Do(e) {
                    var t = xo(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            o = e(o, s.action), s = s.next
                        } while (s !== a);
                        sr(o, t.memoizedState) || (ys = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, r]
                }

                function Mo() {}

                function Ro(e, t) {
                    var n = Co,
                        r = xo(),
                        a = t(),
                        o = !sr(r.memoizedState, a);
                    if (o && (r.memoizedState = a, ys = !0), r = r.queue, Yo(jo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== ho && 1 & ho.memoizedState.tag) {
                        if (n.flags |= 2048, Qo(9, Oo.bind(null, n, r, a, t), void 0, null), null === Dl) throw Error(i(349));
                        0 !== (30 & Io) || To(n, t, a)
                    }
                    return a
                }

                function To(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = Co.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, Co.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Oo(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Lo(t) && _o(e)
                }

                function jo(e, t, n) {
                    return n((function() {
                        Lo(t) && _o(e)
                    }))
                }

                function Lo(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !sr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function _o(e) {
                    var t = Bi(e, 1);
                    null !== t && rg(t, e, 1, -1)
                }

                function zo(e) {
                    var t = So();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: No,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = ns.bind(null, Co, e), [t.memoizedState, e]
                }

                function Qo(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = Co.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, Co.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Po() {
                    return xo().memoizedState
                }

                function Uo(e, t, n, r) {
                    var a = So();
                    Co.flags |= e, a.memoizedState = Qo(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Fo(e, t, n, r) {
                    var a = xo();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== fo) {
                        var o = fo.memoizedState;
                        if (i = o.destroy, null !== r && vo(r, o.deps)) return void(a.memoizedState = Qo(t, n, i, r))
                    }
                    Co.flags |= e, a.memoizedState = Qo(1 | t, n, i, r)
                }

                function Zo(e, t) {
                    return Uo(8390656, 8, e, t)
                }

                function Yo(e, t) {
                    return Fo(2048, 8, e, t)
                }

                function Wo(e, t) {
                    return Fo(4, 2, e, t)
                }

                function Go(e, t) {
                    return Fo(4, 4, e, t)
                }

                function Ho(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Vo(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Fo(4, 4, Ho.bind(null, t, e), n)
                }

                function Jo() {}

                function Ko(e, t) {
                    var n = xo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Xo(e, t) {
                    var n = xo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && vo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function qo(e, t, n) {
                    return 0 === (21 & Io) ? (e.baseState && (e.baseState = !1, ys = !0), e.memoizedState = n) : (sr(n, t) || (n = dt(), Co.lanes |= n, _l |= n, e.baseState = !0), t)
                }

                function $o(e, t) {
                    var n = mt;
                    mt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = uo.transition;
                    uo.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        mt = n, uo.transition = r
                    }
                }

                function es() {
                    return xo().memoizedState
                }

                function ts(e, t, n) {
                    var r = ng(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, rs(e)) as(t, n);
                    else if (null !== (n = Ni(e, t, n, r))) {
                        rg(n, e, r, tg()), is(n, t, r)
                    }
                }

                function ns(e, t, n) {
                    var r = ng(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rs(e)) as(t, a);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                s = i(o, n);
                            if (a.hasEagerState = !0, a.eagerState = s, sr(s, o)) {
                                var l = t.interleaved;
                                return null === l ? (a.next = a, xi(t)) : (a.next = l.next, l.next = a), void(t.interleaved = a)
                            }
                        } catch (g) {}
                        null !== (n = Ni(e, t, a, r)) && (rg(n, e, r, a = tg()), is(n, t, r))
                    }
                }

                function rs(e) {
                    var t = e.alternate;
                    return e === Co || null !== t && t === Co
                }

                function as(e, t) {
                    mo = po = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function is(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, pt(e, n)
                    }
                }
                var os = {
                        readContext: ki,
                        useCallback: bo,
                        useContext: bo,
                        useEffect: bo,
                        useImperativeHandle: bo,
                        useInsertionEffect: bo,
                        useLayoutEffect: bo,
                        useMemo: bo,
                        useReducer: bo,
                        useRef: bo,
                        useState: bo,
                        useDebugValue: bo,
                        useDeferredValue: bo,
                        useTransition: bo,
                        useMutableSource: bo,
                        useSyncExternalStore: bo,
                        useId: bo,
                        unstable_isNewReconciler: !1
                    },
                    ss = {
                        readContext: ki,
                        useCallback: function(e, t) {
                            return So().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: ki,
                        useEffect: Zo,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Uo(4194308, 4, Ho.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Uo(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Uo(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = So();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = So();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = ts.bind(null, Co, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, So().memoizedState = e
                        },
                        useState: zo,
                        useDebugValue: Jo,
                        useDeferredValue: function(e) {
                            return So().memoizedState = e
                        },
                        useTransition: function() {
                            var e = zo(!1),
                                t = e[0];
                            return e = $o.bind(null, e[1]), So().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = Co,
                                a = So();
                            if (ai) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === Dl) throw Error(i(349));
                                0 !== (30 & Io) || To(r, t, n)
                            }
                            a.memoizedState = n;
                            var o = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = o, Zo(jo.bind(null, r, o, e), [e]), r.flags |= 2048, Qo(9, Oo.bind(null, r, o, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = So(),
                                t = Dl.identifierPrefix;
                            if (ai) {
                                var n = Xa;
                                t = ":" + t + "R" + (n = (Ka & ~(1 << 32 - ot(Ka) - 1)).toString(32) + n), 0 < (n = yo++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ls = {
                        readContext: ki,
                        useCallback: Ko,
                        useContext: ki,
                        useEffect: Yo,
                        useImperativeHandle: Vo,
                        useInsertionEffect: Wo,
                        useLayoutEffect: Go,
                        useMemo: Xo,
                        useReducer: Bo,
                        useRef: Po,
                        useState: function() {
                            return Bo(No)
                        },
                        useDebugValue: Jo,
                        useDeferredValue: function(e) {
                            return qo(xo(), fo.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Bo(No)[0], xo().memoizedState]
                        },
                        useMutableSource: Mo,
                        useSyncExternalStore: Ro,
                        useId: es,
                        unstable_isNewReconciler: !1
                    },
                    gs = {
                        readContext: ki,
                        useCallback: Ko,
                        useContext: ki,
                        useEffect: Yo,
                        useImperativeHandle: Vo,
                        useInsertionEffect: Wo,
                        useLayoutEffect: Go,
                        useMemo: Xo,
                        useReducer: Do,
                        useRef: Po,
                        useState: function() {
                            return Do(No)
                        },
                        useDebugValue: Jo,
                        useDeferredValue: function(e) {
                            var t = xo();
                            return null === fo ? t.memoizedState = e : qo(t, fo.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Do(No)[0], xo().memoizedState]
                        },
                        useMutableSource: Mo,
                        useSyncExternalStore: Ro,
                        useId: es,
                        unstable_isNewReconciler: !1
                    };

                function As(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += U(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (i) {
                        a = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function cs(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function us(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var Is = "function" === typeof WeakMap ? WeakMap : Map;

                function Cs(e, t, n) {
                    (n = Ti(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Wl || (Wl = !0, Gl = r), us(0, t)
                    }, n
                }

                function ds(e, t, n) {
                    (n = Ti(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            us(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        us(0, t), "function" !== typeof r && (null === Hl ? Hl = new Set([this]) : Hl.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function fs(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new Is;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Sg.bind(null, e, t, n), t.then(e, e))
                }

                function hs(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function ps(e, t, n, r, a) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ti(-1, 1)).tag = 2, Oi(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var ms = y.ReactCurrentOwner,
                    ys = !1;

                function ws(e, t, n, r) {
                    t.child = null === e ? Xi(t, null, n, r) : Ki(t, e.child, n, r)
                }

                function bs(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    return Ei(t, a), r = Eo(e, t, n, r, i, a), n = ko(), null === e || ys ? (ai && n && ei(t), t.flags |= 1, ws(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ws(e, t, a))
                }

                function vs(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Tg(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = jg(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Es(e, t, i, r, a))
                    }
                    if (i = e.child, 0 === (e.lanes & a)) {
                        var o = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref) return Ws(e, t, a)
                    }
                    return t.flags |= 1, (e = Og(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Es(e, t, n, r, a) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (lr(i, r) && e.ref === t.ref) {
                            if (ys = !1, t.pendingProps = r = i, 0 === (e.lanes & a)) return t.lanes = e.lanes, Ws(e, t, a);
                            0 !== (131072 & e.flags) && (ys = !0)
                        }
                    }
                    return xs(e, t, n, r, a)
                }

                function ks(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Sa(Ol, Tl), Tl |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Sa(Ol, Tl), Tl |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, Sa(Ol, Tl), Tl |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Sa(Ol, Tl), Tl |= r;
                    return ws(e, t, a, n), t.child
                }

                function Ss(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function xs(e, t, n, r, a) {
                    var i = Ra(n) ? Da : Na.current;
                    return i = Ma(t, i), Ei(t, a), n = Eo(e, t, n, r, i, a), r = ko(), null === e || ys ? (ai && r && ei(t), t.flags |= 1, ws(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ws(e, t, a))
                }

                function Ns(e, t, n, r, a) {
                    if (Ra(n)) {
                        var i = !0;
                        La(t)
                    } else i = !1;
                    if (Ei(t, a), null === t.stateNode) Ys(e, t), Zi(t, n, r), Wi(t, n, r, a), r = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            s = t.memoizedProps;
                        o.props = s;
                        var l = o.context,
                            g = n.contextType;
                        "object" === typeof g && null !== g ? g = ki(g) : g = Ma(t, g = Ra(n) ? Da : Na.current);
                        var A = n.getDerivedStateFromProps,
                            c = "function" === typeof A || "function" === typeof o.getSnapshotBeforeUpdate;
                        c || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== r || l !== g) && Yi(t, o, r, g), Di = !1;
                        var u = t.memoizedState;
                        o.state = u, _i(t, r, o, a), l = t.memoizedState, s !== r || u !== l || Ba.current || Di ? ("function" === typeof A && (Pi(t, n, A, r), l = t.memoizedState), (s = Di || Fi(t, n, s, r, u, l, g)) ? (c || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = g, r = s) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        o = t.stateNode, Ri(e, t), s = t.memoizedProps, g = t.type === t.elementType ? s : fi(t.type, s), o.props = g, c = t.pendingProps, u = o.context, "object" === typeof(l = n.contextType) && null !== l ? l = ki(l) : l = Ma(t, l = Ra(n) ? Da : Na.current);
                        var I = n.getDerivedStateFromProps;
                        (A = "function" === typeof I || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== c || u !== l) && Yi(t, o, r, l), Di = !1, u = t.memoizedState, o.state = u, _i(t, r, o, a);
                        var C = t.memoizedState;
                        s !== c || u !== C || Ba.current || Di ? ("function" === typeof I && (Pi(t, n, I, r), C = t.memoizedState), (g = Di || Fi(t, n, g, r, u, C, l) || !1) ? (A || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, C, l), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, C, l)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), o.props = r, o.state = C, o.context = l, r = g) : ("function" !== typeof o.componentDidUpdate || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Bs(e, t, n, r, i, a)
                }

                function Bs(e, t, n, r, a, i) {
                    Ss(e, t);
                    var o = 0 !== (128 & t.flags);
                    if (!r && !o) return a && _a(t, n, !1), Ws(e, t, i);
                    r = t.stateNode, ms.current = t;
                    var s = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && o ? (t.child = Ki(t, e.child, null, i), t.child = Ki(t, null, s, i)) : ws(e, t, s, i), t.memoizedState = r.state, a && _a(t, n, !0), t.child
                }

                function Ds(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Oa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(0, t.context, !1), ro(e, t.containerInfo)
                }

                function Ms(e, t, n, r, a) {
                    return Ii(), Ci(a), t.flags |= 256, ws(e, t, n, r), t.child
                }
                var Rs, Ts, Os, js, Ls = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function _s(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function zs(e, t, n) {
                    var r, a = t.pendingProps,
                        o = so.current,
                        s = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Sa(so, 1 & o), null === e) return gi(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, l = {
                        mode: "hidden",
                        children: l
                    }, 0 === (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = _g(l, a, 0, null), e = Lg(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = _s(n), t.memoizedState = Ls, e) : Qs(t, l));
                    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, a, o, s) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Ps(e, t, s, r = cs(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = _g({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (o = Lg(o, a, s, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 !== (1 & t.mode) && Ki(t, e.child, null, s), t.child.memoizedState = _s(s), t.memoizedState = Ls, o);
                        if (0 === (1 & t.mode)) return Ps(e, t, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var l = r.dgst;
                            return r = l, Ps(e, t, s, r = cs(o = Error(i(419)), r, void 0))
                        }
                        if (l = 0 !== (s & e.childLanes), ys || l) {
                            if (null !== (r = Dl)) {
                                switch (s & -s) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
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
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Bi(e, a), rg(r, e, a, -1))
                            }
                            return fg(), Ps(e, t, s, r = cs(Error(i(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ng.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ri = ga(a.nextSibling), ni = t, ai = !0, ii = null, null !== e && (Ha[Va++] = Ka, Ha[Va++] = Xa, Ha[Va++] = Ja, Ka = e.id, Xa = e.overflow, Ja = t), t = Qs(t, r.children), t.flags |= 4096, t)
                    }(e, t, l, a, r, o, n);
                    if (s) {
                        s = a.fallback, l = t.mode, r = (o = e.child).sibling;
                        var g = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & l) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = g, t.deletions = null) : (a = Og(o, g)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? s = Og(r, s) : (s = Lg(s, l, n, null)).flags |= 2, s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, l = null === (l = e.child.memoizedState) ? _s(n) : {
                            baseLanes: l.baseLanes | n,
                            cachePool: null,
                            transitions: l.transitions
                        }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ls, a
                    }
                    return e = (s = e.child).sibling, a = Og(s, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Qs(e, t) {
                    return (t = _g({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Ps(e, t, n, r) {
                    return null !== r && Ci(r), Ki(t, e.child, null, n), (e = Qs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Us(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), vi(e.return, t, n)
                }

                function Fs(e, t, n, r, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
                }

                function Zs(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if (ws(e, t, r.children, n), 0 !== (2 & (r = so.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                            else if (19 === e.tag) Us(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Sa(so, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === lo(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Fs(t, !1, a, n, i);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === lo(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Fs(t, !0, n, null, i);
                            break;
                        case "together":
                            Fs(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Ys(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Ws(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), _l |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Og(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Og(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Gs(e, t) {
                    if (!ai) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Hs(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Vs(e, t, n) {
                    var r = t.pendingProps;
                    switch (ti(t), t.tag) {
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
                            return Hs(t), null;
                        case 1:
                        case 17:
                            return Ra(t.type) && Ta(), Hs(t), null;
                        case 3:
                            return r = t.stateNode, ao(), ka(Ba), ka(Na), Ao(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (ci(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ii && (sg(ii), ii = null))), Ts(e, t), Hs(t), null;
                        case 5:
                            oo(t);
                            var a = no(to.current);
                            if (n = t.type, null !== e && null != t.stateNode) Os(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return Hs(t), null
                                }
                                if (e = no($i.current), ci(t)) {
                                    r = t.stateNode, n = t.type;
                                    var o = t.memoizedProps;
                                    switch (r[ua] = t, r[Ia] = o, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Qr("cancel", r), Qr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < jr.length; a++) Qr(jr[a], r);
                                            break;
                                        case "source":
                                            Qr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qr("error", r), Qr("load", r);
                                            break;
                                        case "details":
                                            Qr("toggle", r);
                                            break;
                                        case "input":
                                            K(r, o), Qr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!o.multiple
                                            }, Qr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, o), Qr("invalid", r)
                                    }
                                    for (var l in pe(n, o), a = null, o)
                                        if (o.hasOwnProperty(l)) {
                                            var g = o[l];
                                            "children" === l ? "string" === typeof g ? r.textContent !== g && (!0 !== o.suppressHydrationWarning && qr(r.textContent, g, e), a = ["children", g]) : "number" === typeof g && r.textContent !== "" + g && (!0 !== o.suppressHydrationWarning && qr(r.textContent, g, e), a = ["children", "" + g]) : s.hasOwnProperty(l) && null != g && "onScroll" === l && Qr("scroll", r)
                                        } switch (n) {
                                        case "input":
                                            G(r), $(r, o, !0);
                                            break;
                                        case "textarea":
                                            G(r), oe(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (r.onclick = $r)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    l = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
                                        is: r.is
                                    }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ua] = t, e[Ia] = r, Rs(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (l = me(n, r), n) {
                                            case "dialog":
                                                Qr("cancel", e), Qr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Qr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < jr.length; a++) Qr(jr[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Qr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Qr("error", e), Qr("load", e), a = r;
                                                break;
                                            case "details":
                                                Qr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                K(e, r), a = J(e, r), Qr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = _({}, r, {
                                                    value: void 0
                                                }), Qr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Qr("invalid", e)
                                        }
                                        for (o in pe(n, a), g = a)
                                            if (g.hasOwnProperty(o)) {
                                                var A = g[o];
                                                "style" === o ? fe(e, A) : "dangerouslySetInnerHTML" === o ? null != (A = A ? A.__html : void 0) && ce(e, A) : "children" === o ? "string" === typeof A ? ("textarea" !== n || "" !== A) && ue(e, A) : "number" === typeof A && ue(e, "" + A) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? null != A && "onScroll" === o && Qr("scroll", e) : null != A && m(e, o, A, l))
                                            } switch (n) {
                                            case "input":
                                                G(e), $(e, r, !1);
                                                break;
                                            case "textarea":
                                                G(e), oe(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + Y(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = $r)
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
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Hs(t), null;
                        case 6:
                            if (e && null != t.stateNode) js(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = no(to.current), no($i.current), ci(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[ua] = t, (o = r.nodeValue !== n) && null !== (e = ni)) switch (e.tag) {
                                        case 3:
                                            qr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && qr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    o && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ua] = t, t.stateNode = r
                            }
                            return Hs(t), null;
                        case 13:
                            if (ka(so), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ai && null !== ri && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) ui(), Ii(), t.flags |= 98560, o = !1;
                                else if (o = ci(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!o) throw Error(i(318));
                                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(i(317));
                                        o[ua] = t
                                    } else Ii(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Hs(t), o = !1
                                } else null !== ii && (sg(ii), ii = null), o = !0;
                                if (!o) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & so.current) ? 0 === jl && (jl = 3) : fg())), null !== t.updateQueue && (t.flags |= 4), Hs(t), null);
                        case 4:
                            return ao(), Ts(e, t), null === e && Fr(t.stateNode.containerInfo), Hs(t), null;
                        case 10:
                            return bi(t.type._context), Hs(t), null;
                        case 19:
                            if (ka(so), null === (o = t.memoizedState)) return Hs(t), null;
                            if (r = 0 !== (128 & t.flags), null === (l = o.rendering))
                                if (r) Gs(o, !1);
                                else {
                                    if (0 !== jl || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = lo(e))) {
                                                for (t.flags |= 128, Gs(o, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Sa(so, 1 & so.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== o.tail && Xe() > Zl && (t.flags |= 128, r = !0, Gs(o, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = lo(l))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Gs(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !ai) return Hs(t), null
                                    } else 2 * Xe() - o.renderingStartTime > Zl && 1073741824 !== n && (t.flags |= 128, r = !0, Gs(o, !1), t.lanes = 4194304);
                                o.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = o.last) ? n.sibling = l : t.child = l, o.last = l)
                            }
                            return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Xe(), t.sibling = null, n = so.current, Sa(so, r ? 1 & n | 2 : 1 & n), t) : (Hs(t), null);
                        case 22:
                        case 23:
                            return ug(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Tl) && (Hs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Hs(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function Js(e, t) {
                    switch (ti(t), t.tag) {
                        case 1:
                            return Ra(t.type) && Ta(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return ao(), ka(Ba), ka(Na), Ao(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return oo(t), null;
                        case 13:
                            if (ka(so), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                Ii()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return ka(so), null;
                        case 4:
                            return ao(), null;
                        case 10:
                            return bi(t.type._context), null;
                        case 22:
                        case 23:
                            return ug(), null;
                        default:
                            return null
                    }
                }
                Rs = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ts = function() {}, Os = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, no($i.current);
                        var i, o = null;
                        switch (n) {
                            case "input":
                                a = J(e, a), r = J(e, r), o = [];
                                break;
                            case "select":
                                a = _({}, a, {
                                    value: void 0
                                }), r = _({}, r, {
                                    value: void 0
                                }), o = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), o = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = $r)
                        }
                        for (A in pe(n, r), n = null, a)
                            if (!r.hasOwnProperty(A) && a.hasOwnProperty(A) && null != a[A])
                                if ("style" === A) {
                                    var l = a[A];
                                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== A && "children" !== A && "suppressContentEditableWarning" !== A && "suppressHydrationWarning" !== A && "autoFocus" !== A && (s.hasOwnProperty(A) ? o || (o = []) : (o = o || []).push(A, null));
                        for (A in r) {
                            var g = r[A];
                            if (l = null != a ? a[A] : void 0, r.hasOwnProperty(A) && g !== l && (null != g || null != l))
                                if ("style" === A)
                                    if (l) {
                                        for (i in l) !l.hasOwnProperty(i) || g && g.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in g) g.hasOwnProperty(i) && l[i] !== g[i] && (n || (n = {}), n[i] = g[i])
                                    } else n || (o || (o = []), o.push(A, n)), n = g;
                            else "dangerouslySetInnerHTML" === A ? (g = g ? g.__html : void 0, l = l ? l.__html : void 0, null != g && l !== g && (o = o || []).push(A, g)) : "children" === A ? "string" !== typeof g && "number" !== typeof g || (o = o || []).push(A, "" + g) : "suppressContentEditableWarning" !== A && "suppressHydrationWarning" !== A && (s.hasOwnProperty(A) ? (null != g && "onScroll" === A && Qr("scroll", e), o || l === g || (o = [])) : (o = o || []).push(A, g))
                        }
                        n && (o = o || []).push("style", n);
                        var A = o;
                        (t.updateQueue = A) && (t.flags |= 4)
                    }
                }, js = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Ks = !1,
                    Xs = !1,
                    qs = "function" === typeof WeakSet ? WeakSet : Set,
                    $s = null;

                function el(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            kg(e, t, r)
                        } else n.current = null
                }

                function tl(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        kg(e, t, r)
                    }
                }
                var nl = !1;

                function rl(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var i = a.destroy;
                                a.destroy = void 0, void 0 !== i && tl(t, n, i)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function al(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function il(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function ol(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, ol(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[ua], delete t[Ia], delete t[da], delete t[fa], delete t[ha])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function sl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function ll(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || sl(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function gl(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = $r));
                    else if (4 !== r && null !== (e = e.child))
                        for (gl(e, t, n), e = e.sibling; null !== e;) gl(e, t, n), e = e.sibling
                }

                function Al(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (Al(e, t, n), e = e.sibling; null !== e;) Al(e, t, n), e = e.sibling
                }
                var cl = null,
                    ul = !1;

                function Il(e, t, n) {
                    for (n = n.child; null !== n;) Cl(e, t, n), n = n.sibling
                }

                function Cl(e, t, n) {
                    if (it && "function" === typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(at, n)
                    } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Xs || el(n, t);
                        case 6:
                            var r = cl,
                                a = ul;
                            cl = null, Il(e, t, n), ul = a, null !== (cl = r) && (ul ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cl && (ul ? (e = cl, n = n.stateNode, 8 === e.nodeType ? la(e.parentNode, n) : 1 === e.nodeType && la(e, n), Ft(e)) : la(cl, n.stateNode));
                            break;
                        case 4:
                            r = cl, a = ul, cl = n.stateNode.containerInfo, ul = !0, Il(e, t, n), cl = r, ul = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Xs && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var i = a,
                                        o = i.destroy;
                                    i = i.tag, void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && tl(n, t, o), a = a.next
                                } while (a !== r)
                            }
                            Il(e, t, n);
                            break;
                        case 1:
                            if (!Xs && (el(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                kg(n, t, s)
                            }
                            Il(e, t, n);
                            break;
                        case 21:
                            Il(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Xs = (r = Xs) || null !== n.memoizedState, Il(e, t, n), Xs = r) : Il(e, t, n);
                            break;
                        default:
                            Il(e, t, n)
                    }
                }

                function dl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new qs), t.forEach((function(t) {
                            var r = Bg.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function fl(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var o = e,
                                    s = t,
                                    l = s;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            cl = l.stateNode, ul = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cl = l.stateNode.containerInfo, ul = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === cl) throw Error(i(160));
                                Cl(o, s, a), cl = null, ul = !1;
                                var g = a.alternate;
                                null !== g && (g.return = null), a.return = null
                            } catch (A) {
                                kg(a, t, A)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) hl(t, e), t = t.sibling
                }

                function hl(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (fl(t, e), pl(e), 4 & r) {
                                try {
                                    rl(3, e, e.return), al(3, e)
                                } catch (f) {
                                    kg(e, e.return, f)
                                }
                                try {
                                    rl(5, e, e.return)
                                } catch (f) {
                                    kg(e, e.return, f)
                                }
                            }
                            break;
                        case 1:
                            fl(t, e), pl(e), 512 & r && null !== n && el(n, n.return);
                            break;
                        case 5:
                            if (fl(t, e), pl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    ue(a, "")
                                } catch (f) {
                                    kg(e, e.return, f)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var o = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : o,
                                    l = e.type,
                                    g = e.updateQueue;
                                if (e.updateQueue = null, null !== g) try {
                                    "input" === l && "radio" === o.type && null != o.name && X(a, o), me(l, s);
                                    var A = me(l, o);
                                    for (s = 0; s < g.length; s += 2) {
                                        var c = g[s],
                                            u = g[s + 1];
                                        "style" === c ? fe(a, u) : "dangerouslySetInnerHTML" === c ? ce(a, u) : "children" === c ? ue(a, u) : m(a, c, u, A)
                                    }
                                    switch (l) {
                                        case "input":
                                            q(a, o);
                                            break;
                                        case "textarea":
                                            ie(a, o);
                                            break;
                                        case "select":
                                            var I = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!o.multiple;
                                            var C = o.value;
                                            null != C ? ne(a, !!o.multiple, C, !1) : I !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                    }
                                    a[Ia] = o
                                } catch (f) {
                                    kg(e, e.return, f)
                                }
                            }
                            break;
                        case 6:
                            if (fl(t, e), pl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                a = e.stateNode, o = e.memoizedProps;
                                try {
                                    a.nodeValue = o
                                } catch (f) {
                                    kg(e, e.return, f)
                                }
                            }
                            break;
                        case 3:
                            if (fl(t, e), pl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ft(t.containerInfo)
                            } catch (f) {
                                kg(e, e.return, f)
                            }
                            break;
                        case 4:
                        default:
                            fl(t, e), pl(e);
                            break;
                        case 13:
                            fl(t, e), pl(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Fl = Xe())), 4 & r && dl(e);
                            break;
                        case 22:
                            if (c = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xs = (A = Xs) || c, fl(t, e), Xs = A) : fl(t, e), pl(e), 8192 & r) {
                                if (A = null !== e.memoizedState, (e.stateNode.isHidden = A) && !c && 0 !== (1 & e.mode))
                                    for ($s = e, c = e.child; null !== c;) {
                                        for (u = $s = c; null !== $s;) {
                                            switch (C = (I = $s).child, I.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    rl(4, I, I.return);
                                                    break;
                                                case 1:
                                                    el(I, I.return);
                                                    var d = I.stateNode;
                                                    if ("function" === typeof d.componentWillUnmount) {
                                                        r = I, n = I.return;
                                                        try {
                                                            t = r, d.props = t.memoizedProps, d.state = t.memoizedState, d.componentWillUnmount()
                                                        } catch (f) {
                                                            kg(r, n, f)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    el(I, I.return);
                                                    break;
                                                case 22:
                                                    if (null !== I.memoizedState) {
                                                        bl(u);
                                                        continue
                                                    }
                                            }
                                            null !== C ? (C.return = I, $s = C) : bl(u)
                                        }
                                        c = c.sibling
                                    }
                                e: for (c = null, u = e;;) {
                                    if (5 === u.tag) {
                                        if (null === c) {
                                            c = u;
                                            try {
                                                a = u.stateNode, A ? "function" === typeof(o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (l = u.stateNode, s = void 0 !== (g = u.memoizedProps.style) && null !== g && g.hasOwnProperty("display") ? g.display : null, l.style.display = de("display", s))
                                            } catch (f) {
                                                kg(e, e.return, f)
                                            }
                                        }
                                    } else if (6 === u.tag) {
                                        if (null === c) try {
                                            u.stateNode.nodeValue = A ? "" : u.memoizedProps
                                        } catch (f) {
                                            kg(e, e.return, f)
                                        }
                                    } else if ((22 !== u.tag && 23 !== u.tag || null === u.memoizedState || u === e) && null !== u.child) {
                                        u.child.return = u, u = u.child;
                                        continue
                                    }
                                    if (u === e) break e;
                                    for (; null === u.sibling;) {
                                        if (null === u.return || u.return === e) break e;
                                        c === u && (c = null), u = u.return
                                    }
                                    c === u && (c = null), u.sibling.return = u.return, u = u.sibling
                                }
                            }
                            break;
                        case 19:
                            fl(t, e), pl(e), 4 & r && dl(e);
                        case 21:
                    }
                }

                function pl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (sl(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (ue(a, ""), r.flags &= -33), Al(e, ll(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var o = r.stateNode.containerInfo;
                                    gl(e, ll(e), o);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (s) {
                            kg(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function ml(e, t, n) {
                    $s = e, yl(e, t, n)
                }

                function yl(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== $s;) {
                        var a = $s,
                            i = a.child;
                        if (22 === a.tag && r) {
                            var o = null !== a.memoizedState || Ks;
                            if (!o) {
                                var s = a.alternate,
                                    l = null !== s && null !== s.memoizedState || Xs;
                                s = Ks;
                                var g = Xs;
                                if (Ks = o, (Xs = l) && !g)
                                    for ($s = a; null !== $s;) l = (o = $s).child, 22 === o.tag && null !== o.memoizedState ? vl(a) : null !== l ? (l.return = o, $s = l) : vl(a);
                                for (; null !== i;) $s = i, yl(i, t, n), i = i.sibling;
                                $s = a, Ks = s, Xs = g
                            }
                            wl(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a, $s = i) : wl(e)
                    }
                }

                function wl(e) {
                    for (; null !== $s;) {
                        var t = $s;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xs || al(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Xs)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : fi(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            } var o = t.updateQueue;
                                        null !== o && zi(t, o, r);
                                        break;
                                    case 3:
                                        var s = t.updateQueue;
                                        if (null !== s) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            zi(t, s, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var g = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    g.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    g.src && (n.src = g.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var A = t.alternate;
                                            if (null !== A) {
                                                var c = A.memoizedState;
                                                if (null !== c) {
                                                    var u = c.dehydrated;
                                                    null !== u && Ft(u)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Xs || 512 & t.flags && il(t)
                            } catch (I) {
                                kg(t, t.return, I)
                            }
                        }
                        if (t === e) {
                            $s = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, $s = n;
                            break
                        }
                        $s = t.return
                    }
                }

                function bl(e) {
                    for (; null !== $s;) {
                        var t = $s;
                        if (t === e) {
                            $s = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, $s = n;
                            break
                        }
                        $s = t.return
                    }
                }

                function vl(e) {
                    for (; null !== $s;) {
                        var t = $s;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        al(4, t)
                                    } catch (l) {
                                        kg(t, n, l)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (l) {
                                            kg(t, a, l)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        il(t)
                                    } catch (l) {
                                        kg(t, i, l)
                                    }
                                    break;
                                case 5:
                                    var o = t.return;
                                    try {
                                        il(t)
                                    } catch (l) {
                                        kg(t, o, l)
                                    }
                            }
                        } catch (l) {
                            kg(t, t.return, l)
                        }
                        if (t === e) {
                            $s = null;
                            break
                        }
                        var s = t.sibling;
                        if (null !== s) {
                            s.return = t.return, $s = s;
                            break
                        }
                        $s = t.return
                    }
                }
                var El, kl = Math.ceil,
                    Sl = y.ReactCurrentDispatcher,
                    xl = y.ReactCurrentOwner,
                    Nl = y.ReactCurrentBatchConfig,
                    Bl = 0,
                    Dl = null,
                    Ml = null,
                    Rl = 0,
                    Tl = 0,
                    Ol = Ea(0),
                    jl = 0,
                    Ll = null,
                    _l = 0,
                    zl = 0,
                    Ql = 0,
                    Pl = null,
                    Ul = null,
                    Fl = 0,
                    Zl = 1 / 0,
                    Yl = null,
                    Wl = !1,
                    Gl = null,
                    Hl = null,
                    Vl = !1,
                    Jl = null,
                    Kl = 0,
                    Xl = 0,
                    ql = null,
                    $l = -1,
                    eg = 0;

                function tg() {
                    return 0 !== (6 & Bl) ? Xe() : -1 !== $l ? $l : $l = Xe()
                }

                function ng(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Bl) && 0 !== Rl ? Rl & -Rl : null !== di.transition ? (0 === eg && (eg = dt()), eg) : 0 !== (e = mt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type)
                }

                function rg(e, t, n, r) {
                    if (50 < Xl) throw Xl = 0, ql = null, Error(i(185));
                    ht(e, n, r), 0 !== (2 & Bl) && e === Dl || (e === Dl && (0 === (2 & Bl) && (zl |= n), 4 === jl && lg(e, Rl)), ag(e, r), 1 === n && 0 === Bl && 0 === (1 & t.mode) && (Zl = Xe() + 500, Qa && Fa()))
                }

                function ag(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var o = 31 - ot(i),
                                s = 1 << o,
                                l = a[o]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (a[o] = It(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
                        }
                    }(e, t);
                    var r = ut(e, e === Dl ? Rl : 0);
                    if (0 === r) null !== n && Ve(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Ve(n), 1 === t) 0 === e.tag ? function(e) {
                            Qa = !0, Ua(e)
                        }(gg.bind(null, e)) : Ua(gg.bind(null, e)), oa((function() {
                            0 === (6 & Bl) && Fa()
                        })), n = null;
                        else {
                            switch (yt(r)) {
                                case 1:
                                    n = $e;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Dg(n, ig.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function ig(e, t) {
                    if ($l = -1, eg = 0, 0 !== (6 & Bl)) throw Error(i(327));
                    var n = e.callbackNode;
                    if (vg() && e.callbackNode !== n) return null;
                    var r = ut(e, e === Dl ? Rl : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = hg(e, r);
                    else {
                        t = r;
                        var a = Bl;
                        Bl |= 2;
                        var o = dg();
                        for (Dl === e && Rl === t || (Yl = null, Zl = Xe() + 500, Ig(e, t));;) try {
                            mg();
                            break
                        } catch (l) {
                            Cg(e, l)
                        }
                        wi(), Sl.current = o, Bl = a, null !== Ml ? t = 0 : (Dl = null, Rl = 0, t = jl)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = Ct(e)) && (r = a, t = og(e, a))), 1 === t) throw n = Ll, Ig(e, 0), lg(e, r), ag(e, Xe()), n;
                        if (6 === t) lg(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        i = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!sr(i(), a)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = hg(e, r)) && (0 !== (o = Ct(e)) && (r = o, t = og(e, o))), 1 === t)) throw n = Ll, Ig(e, 0), lg(e, r), ag(e, Xe()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    bg(e, Ul, Yl);
                                    break;
                                case 3:
                                    if (lg(e, r), (130023424 & r) === r && 10 < (t = Fl + 500 - Xe())) {
                                        if (0 !== ut(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            tg(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(bg.bind(null, e, Ul, Yl), t);
                                        break
                                    }
                                    bg(e, Ul, Yl);
                                    break;
                                case 4:
                                    if (lg(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var s = 31 - ot(r);
                                        o = 1 << s, (s = t[s]) > a && (a = s), r &= ~o
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kl(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(bg.bind(null, e, Ul, Yl), r);
                                        break
                                    }
                                    bg(e, Ul, Yl);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return ag(e, Xe()), e.callbackNode === n ? ig.bind(null, e) : null
                }

                function og(e, t) {
                    var n = Pl;
                    return e.current.memoizedState.isDehydrated && (Ig(e, t).flags |= 256), 2 !== (e = hg(e, t)) && (t = Ul, Ul = n, null !== t && sg(t)), e
                }

                function sg(e) {
                    null === Ul ? Ul = e : Ul.push.apply(Ul, e)
                }

                function lg(e, t) {
                    for (t &= ~Ql, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - ot(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function gg(e) {
                    if (0 !== (6 & Bl)) throw Error(i(327));
                    vg();
                    var t = ut(e, 0);
                    if (0 === (1 & t)) return ag(e, Xe()), null;
                    var n = hg(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = Ct(e);
                        0 !== r && (t = r, n = og(e, r))
                    }
                    if (1 === n) throw n = Ll, Ig(e, 0), lg(e, t), ag(e, Xe()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bg(e, Ul, Yl), ag(e, Xe()), null
                }

                function Ag(e, t) {
                    var n = Bl;
                    Bl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Bl = n) && (Zl = Xe() + 500, Qa && Fa())
                    }
                }

                function cg(e) {
                    null !== Jl && 0 === Jl.tag && 0 === (6 & Bl) && vg();
                    var t = Bl;
                    Bl |= 1;
                    var n = Nl.transition,
                        r = mt;
                    try {
                        if (Nl.transition = null, mt = 1, e) return e()
                    } finally {
                        mt = r, Nl.transition = n, 0 === (6 & (Bl = t)) && Fa()
                    }
                }

                function ug() {
                    Tl = Ol.current, ka(Ol)
                }

                function Ig(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ml)
                        for (n = Ml.return; null !== n;) {
                            var r = n;
                            switch (ti(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ta();
                                    break;
                                case 3:
                                    ao(), ka(Ba), ka(Na), Ao();
                                    break;
                                case 5:
                                    oo(r);
                                    break;
                                case 4:
                                    ao();
                                    break;
                                case 13:
                                case 19:
                                    ka(so);
                                    break;
                                case 10:
                                    bi(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    ug()
                            }
                            n = n.return
                        }
                    if (Dl = e, Ml = e = Og(e.current, null), Rl = Tl = t, jl = 0, Ll = null, Ql = zl = _l = 0, Ul = Pl = null, null !== Si) {
                        for (t = 0; t < Si.length; t++)
                            if (null !== (r = (n = Si[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var o = i.next;
                                    i.next = a, r.next = o
                                }
                                n.pending = r
                            } Si = null
                    }
                    return e
                }

                function Cg(e, t) {
                    for (;;) {
                        var n = Ml;
                        try {
                            if (wi(), co.current = os, po) {
                                for (var r = Co.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                po = !1
                            }
                            if (Io = 0, ho = fo = Co = null, mo = !1, yo = 0, xl.current = null, null === n || null === n.return) {
                                jl = 1, Ll = t, Ml = null;
                                break
                            }
                            e: {
                                var o = e,
                                    s = n.return,
                                    l = n,
                                    g = t;
                                if (t = Rl, l.flags |= 32768, null !== g && "object" === typeof g && "function" === typeof g.then) {
                                    var A = g,
                                        c = l,
                                        u = c.tag;
                                    if (0 === (1 & c.mode) && (0 === u || 11 === u || 15 === u)) {
                                        var I = c.alternate;
                                        I ? (c.updateQueue = I.updateQueue, c.memoizedState = I.memoizedState, c.lanes = I.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                    }
                                    var C = hs(s);
                                    if (null !== C) {
                                        C.flags &= -257, ps(C, s, l, 0, t), 1 & C.mode && fs(o, A, t), g = A;
                                        var d = (t = C).updateQueue;
                                        if (null === d) {
                                            var f = new Set;
                                            f.add(g), t.updateQueue = f
                                        } else d.add(g);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        fs(o, A, t), fg();
                                        break e
                                    }
                                    g = Error(i(426))
                                } else if (ai && 1 & l.mode) {
                                    var h = hs(s);
                                    if (null !== h) {
                                        0 === (65536 & h.flags) && (h.flags |= 256), ps(h, s, l, 0, t), Ci(As(g, l));
                                        break e
                                    }
                                }
                                o = g = As(g, l),
                                4 !== jl && (jl = 2),
                                null === Pl ? Pl = [o] : Pl.push(o),
                                o = s;do {
                                    switch (o.tag) {
                                        case 3:
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Li(o, Cs(0, g, t));
                                            break e;
                                        case 1:
                                            l = g;
                                            var p = o.type,
                                                m = o.stateNode;
                                            if (0 === (128 & o.flags) && ("function" === typeof p.getDerivedStateFromError || null !== m && "function" === typeof m.componentDidCatch && (null === Hl || !Hl.has(m)))) {
                                                o.flags |= 65536, t &= -t, o.lanes |= t, Li(o, ds(o, l, t));
                                                break e
                                            }
                                    }
                                    o = o.return
                                } while (null !== o)
                            }
                            wg(n)
                        } catch (y) {
                            t = y, Ml === n && null !== n && (Ml = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function dg() {
                    var e = Sl.current;
                    return Sl.current = os, null === e ? os : e
                }

                function fg() {
                    0 !== jl && 3 !== jl && 2 !== jl || (jl = 4), null === Dl || 0 === (268435455 & _l) && 0 === (268435455 & zl) || lg(Dl, Rl)
                }

                function hg(e, t) {
                    var n = Bl;
                    Bl |= 2;
                    var r = dg();
                    for (Dl === e && Rl === t || (Yl = null, Ig(e, t));;) try {
                        pg();
                        break
                    } catch (a) {
                        Cg(e, a)
                    }
                    if (wi(), Bl = n, Sl.current = r, null !== Ml) throw Error(i(261));
                    return Dl = null, Rl = 0, jl
                }

                function pg() {
                    for (; null !== Ml;) yg(Ml)
                }

                function mg() {
                    for (; null !== Ml && !Je();) yg(Ml)
                }

                function yg(e) {
                    var t = El(e.alternate, e, Tl);
                    e.memoizedProps = e.pendingProps, null === t ? wg(e) : Ml = t, xl.current = null
                }

                function wg(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Vs(n, t, Tl))) return void(Ml = n)
                        } else {
                            if (null !== (n = Js(n, t))) return n.flags &= 32767, void(Ml = n);
                            if (null === e) return jl = 6, void(Ml = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Ml = t);
                        Ml = t = e
                    } while (null !== t);
                    0 === jl && (jl = 5)
                }

                function bg(e, t, n) {
                    var r = mt,
                        a = Nl.transition;
                    try {
                        Nl.transition = null, mt = 1,
                            function(e, t, n, r) {
                                do {
                                    vg()
                                } while (null !== Jl);
                                if (0 !== (6 & Bl)) throw Error(i(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var o = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - ot(n),
                                                i = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i
                                        }
                                    }(e, o), e === Dl && (Ml = Dl = null, Rl = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Vl || (Vl = !0, Dg(tt, (function() {
                                        return vg(), null
                                    }))), o = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || o) {
                                    o = Nl.transition, Nl.transition = null;
                                    var s = mt;
                                    mt = 1;
                                    var l = Bl;
                                    Bl |= 4, xl.current = null,
                                        function(e, t) {
                                            if (ea = Yt, Ir(e = ur())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            o = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, o.nodeType
                                                        } catch (w) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            l = -1,
                                                            g = -1,
                                                            A = 0,
                                                            c = 0,
                                                            u = e,
                                                            I = null;
                                                        t: for (;;) {
                                                            for (var C; u !== n || 0 !== a && 3 !== u.nodeType || (l = s + a), u !== o || 0 !== r && 3 !== u.nodeType || (g = s + r), 3 === u.nodeType && (s += u.nodeValue.length), null !== (C = u.firstChild);) I = u, u = C;
                                                            for (;;) {
                                                                if (u === e) break t;
                                                                if (I === n && ++A === a && (l = s), I === o && ++c === r && (g = s), null !== (C = u.nextSibling)) break;
                                                                I = (u = I).parentNode
                                                            }
                                                            u = C
                                                        }
                                                        n = -1 === l || -1 === g ? null : {
                                                            start: l,
                                                            end: g
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Yt = !1, $s = t; null !== $s;)
                                                if (e = (t = $s).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, $s = e;
                                                else
                                                    for (; null !== $s;) {
                                                        t = $s;
                                                        try {
                                                            var d = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== d) {
                                                                        var f = d.memoizedProps,
                                                                            h = d.memoizedState,
                                                                            p = t.stateNode,
                                                                            m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? f : fi(t.type, f), h);
                                                                        p.__reactInternalSnapshotBeforeUpdate = m
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var y = t.stateNode.containerInfo;
                                                                    1 === y.nodeType ? y.textContent = "" : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (w) {
                                                            kg(t, t.return, w)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, $s = e;
                                                            break
                                                        }
                                                        $s = t.return
                                                    }
                                            d = nl, nl = !1
                                        }(e, n), hl(n, e), Cr(ta), Yt = !!ea, ta = ea = null, e.current = n, ml(n, e, a), Ke(), Bl = l, mt = s, Nl.transition = o
                                } else e.current = n;
                                if (Vl && (Vl = !1, Jl = e, Kl = a), o = e.pendingLanes, 0 === o && (Hl = null), function(e) {
                                        if (it && "function" === typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), ag(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if (Wl) throw Wl = !1, e = Gl, Gl = null, e;
                                0 !== (1 & Kl) && 0 !== e.tag && vg(), o = e.pendingLanes, 0 !== (1 & o) ? e === ql ? Xl++ : (Xl = 0, ql = e) : Xl = 0, Fa()
                            }(e, t, n, r)
                    } finally {
                        Nl.transition = a, mt = r
                    }
                    return null
                }

                function vg() {
                    if (null !== Jl) {
                        var e = yt(Kl),
                            t = Nl.transition,
                            n = mt;
                        try {
                            if (Nl.transition = null, mt = 16 > e ? 16 : e, null === Jl) var r = !1;
                            else {
                                if (e = Jl, Jl = null, Kl = 0, 0 !== (6 & Bl)) throw Error(i(331));
                                var a = Bl;
                                for (Bl |= 4, $s = e.current; null !== $s;) {
                                    var o = $s,
                                        s = o.child;
                                    if (0 !== (16 & $s.flags)) {
                                        var l = o.deletions;
                                        if (null !== l) {
                                            for (var g = 0; g < l.length; g++) {
                                                var A = l[g];
                                                for ($s = A; null !== $s;) {
                                                    var c = $s;
                                                    switch (c.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            rl(8, c, o)
                                                    }
                                                    var u = c.child;
                                                    if (null !== u) u.return = c, $s = u;
                                                    else
                                                        for (; null !== $s;) {
                                                            var I = (c = $s).sibling,
                                                                C = c.return;
                                                            if (ol(c), c === A) {
                                                                $s = null;
                                                                break
                                                            }
                                                            if (null !== I) {
                                                                I.return = C, $s = I;
                                                                break
                                                            }
                                                            $s = C
                                                        }
                                                }
                                            }
                                            var d = o.alternate;
                                            if (null !== d) {
                                                var f = d.child;
                                                if (null !== f) {
                                                    d.child = null;
                                                    do {
                                                        var h = f.sibling;
                                                        f.sibling = null, f = h
                                                    } while (null !== f)
                                                }
                                            }
                                            $s = o
                                        }
                                    }
                                    if (0 !== (2064 & o.subtreeFlags) && null !== s) s.return = o, $s = s;
                                    else e: for (; null !== $s;) {
                                        if (0 !== (2048 & (o = $s).flags)) switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rl(9, o, o.return)
                                        }
                                        var p = o.sibling;
                                        if (null !== p) {
                                            p.return = o.return, $s = p;
                                            break e
                                        }
                                        $s = o.return
                                    }
                                }
                                var m = e.current;
                                for ($s = m; null !== $s;) {
                                    var y = (s = $s).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== y) y.return = s, $s = y;
                                    else e: for (s = m; null !== $s;) {
                                        if (0 !== (2048 & (l = $s).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    al(9, l)
                                            }
                                        } catch (b) {
                                            kg(l, l.return, b)
                                        }
                                        if (l === s) {
                                            $s = null;
                                            break e
                                        }
                                        var w = l.sibling;
                                        if (null !== w) {
                                            w.return = l.return, $s = w;
                                            break e
                                        }
                                        $s = l.return
                                    }
                                }
                                if (Bl = a, Fa(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(at, e)
                                } catch (b) {}
                                r = !0
                            }
                            return r
                        } finally {
                            mt = n, Nl.transition = t
                        }
                    }
                    return !1
                }

                function Eg(e, t, n) {
                    e = Oi(e, t = Cs(0, t = As(n, t), 1), 1), t = tg(), null !== e && (ht(e, 1, t), ag(e, t))
                }

                function kg(e, t, n) {
                    if (3 === e.tag) Eg(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Eg(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Hl || !Hl.has(r))) {
                                    t = Oi(t, e = ds(t, e = As(n, e), 1), 1), e = tg(), null !== t && (ht(t, 1, e), ag(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Sg(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = tg(), e.pingedLanes |= e.suspendedLanes & n, Dl === e && (Rl & n) === n && (4 === jl || 3 === jl && (130023424 & Rl) === Rl && 500 > Xe() - Fl ? Ig(e, 0) : Ql |= n), ag(e, t)
                }

                function xg(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = At, 0 === (130023424 & (At <<= 1)) && (At = 4194304)));
                    var n = tg();
                    null !== (e = Bi(e, t)) && (ht(e, t, n), ag(e, n))
                }

                function Ng(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), xg(e, n)
                }

                function Bg(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), xg(e, n)
                }

                function Dg(e, t) {
                    return He(e, t)
                }

                function Mg(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Rg(e, t, n, r) {
                    return new Mg(e, t, n, r)
                }

                function Tg(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Og(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Rg(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function jg(e, t, n, r, a, o) {
                    var s = 2;
                    if (r = e, "function" === typeof e) Tg(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case v:
                            return Lg(n.children, a, o, t);
                        case E:
                            s = 8, a |= 8;
                            break;
                        case k:
                            return (e = Rg(12, n, t, 2 | a)).elementType = k, e.lanes = o, e;
                        case B:
                            return (e = Rg(13, n, t, a)).elementType = B, e.lanes = o, e;
                        case D:
                            return (e = Rg(19, n, t, a)).elementType = D, e.lanes = o, e;
                        case T:
                            return _g(n, a, o, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case S:
                                    s = 10;
                                    break e;
                                case x:
                                    s = 9;
                                    break e;
                                case N:
                                    s = 11;
                                    break e;
                                case M:
                                    s = 14;
                                    break e;
                                case R:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Rg(s, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
                }

                function Lg(e, t, n, r) {
                    return (e = Rg(7, e, r, t)).lanes = n, e
                }

                function _g(e, t, n, r) {
                    return (e = Rg(22, e, r, t)).elementType = T, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function zg(e, t, n) {
                    return (e = Rg(6, e, null, t)).lanes = n, e
                }

                function Qg(e, t, n) {
                    return (t = Rg(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Pg(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ft(0), this.expirationTimes = ft(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ft(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Ug(e, t, n, r, a, i, o, s, l) {
                    return e = new Pg(e, t, n, s, l), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Rg(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Mi(i), e
                }

                function Fg(e) {
                    if (!e) return xa;
                    e: {
                        if (Fe(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ra(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Ra(n)) return ja(e, n, t)
                    }
                    return t
                }

                function Zg(e, t, n, r, a, i, o, s, l) {
                    return (e = Ug(n, r, !0, e, 0, i, 0, s, l)).context = Fg(null), n = e.current, (i = Ti(r = tg(), a = ng(n))).callback = void 0 !== t && null !== t ? t : null, Oi(n, i, a), e.current.lanes = a, ht(e, a, r), ag(e, r), e
                }

                function Yg(e, t, n, r) {
                    var a = t.current,
                        i = tg(),
                        o = ng(a);
                    return n = Fg(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ti(i, o)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Oi(a, t, o)) && (rg(e, a, o, i), ji(e, a, o)), o
                }

                function Wg(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Gg(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Hg(e, t) {
                    Gg(e, t), (e = e.alternate) && Gg(e, t)
                }
                El = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ba.current) ys = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return ys = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ds(t), Ii();
                                            break;
                                        case 5:
                                            io(t);
                                            break;
                                        case 1:
                                            Ra(t.type) && La(t);
                                            break;
                                        case 4:
                                            ro(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            Sa(hi, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Sa(so, 1 & so.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? zs(e, t, n) : (Sa(so, 1 & so.current), null !== (e = Ws(e, t, n)) ? e.sibling : null);
                                            Sa(so, 1 & so.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Zs(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Sa(so, so.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, ks(e, t, n)
                                    }
                                    return Ws(e, t, n)
                                }(e, t, n);
                            ys = 0 !== (131072 & e.flags)
                        }
                    else ys = !1, ai && 0 !== (1048576 & t.flags) && $a(t, Ga, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Ys(e, t), e = t.pendingProps;
                            var a = Ma(t, Na.current);
                            Ei(t, n), a = Eo(null, t, r, e, a, n);
                            var o = ko();
                            return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ra(r) ? (o = !0, La(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Mi(t), a.updater = Ui, t.stateNode = a, a._reactInternals = t, Wi(t, r, e, n), t = Bs(null, t, r, !0, o, n)) : (t.tag = 0, ai && o && ei(t), ws(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Ys(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                        if ("function" === typeof e) return Tg(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === N) return 11;
                                            if (e === M) return 14
                                        }
                                        return 2
                                    }(r), e = fi(r, e), a) {
                                    case 0:
                                        t = xs(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Ns(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = bs(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = vs(null, t, r, fi(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, xs(e, t, r, a = t.elementType === r ? a : fi(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, Ns(e, t, r, a = t.elementType === r ? a : fi(r, a), n);
                        case 3:
                            e: {
                                if (Ds(t), null === e) throw Error(i(387));r = t.pendingProps,
                                a = (o = t.memoizedState).element,
                                Ri(e, t),
                                _i(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.element, o.isDehydrated) {
                                    if (o = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                        t = Ms(e, t, r, n, a = As(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = Ms(e, t, r, n, a = As(Error(i(424)), t));
                                        break e
                                    }
                                    for (ri = ga(t.stateNode.containerInfo.firstChild), ni = t, ai = !0, ii = null, n = Xi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (Ii(), r === a) {
                                        t = Ws(e, t, n);
                                        break e
                                    }
                                    ws(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return io(t), null === e && gi(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, s = a.children, na(r, a) ? s = null : null !== o && na(r, o) && (t.flags |= 32), Ss(e, t), ws(e, t, s, n), t.child;
                        case 6:
                            return null === e && gi(t), null;
                        case 13:
                            return zs(e, t, n);
                        case 4:
                            return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ki(t, null, r, n) : ws(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, bs(e, t, r, a = t.elementType === r ? a : fi(r, a), n);
                        case 7:
                            return ws(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return ws(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Sa(hi, r._currentValue), r._currentValue = s, null !== o)
                                    if (sr(o.value, s)) {
                                        if (o.children === a.children && !Ba.current) {
                                            t = Ws(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                            var l = o.dependencies;
                                            if (null !== l) {
                                                s = o.child;
                                                for (var g = l.firstContext; null !== g;) {
                                                    if (g.context === r) {
                                                        if (1 === o.tag) {
                                                            (g = Ti(-1, n & -n)).tag = 2;
                                                            var A = o.updateQueue;
                                                            if (null !== A) {
                                                                var c = (A = A.shared).pending;
                                                                null === c ? g.next = g : (g.next = c.next, c.next = g), A.pending = g
                                                            }
                                                        }
                                                        o.lanes |= n, null !== (g = o.alternate) && (g.lanes |= n), vi(o.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    g = g.next
                                                }
                                            } else if (10 === o.tag) s = o.type === t.type ? null : o.child;
                                            else if (18 === o.tag) {
                                                if (null === (s = o.return)) throw Error(i(341));
                                                s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), vi(s, n, t), s = o.sibling
                                            } else s = o.child;
                                            if (null !== s) s.return = o;
                                            else
                                                for (s = o; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (o = s.sibling)) {
                                                        o.return = s.return, s = o;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            o = s
                                        }
                                ws(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, Ei(t, n), r = r(a = ki(a)), t.flags |= 1, ws(e, t, r, n), t.child;
                        case 14:
                            return a = fi(r = t.type, t.pendingProps), vs(e, t, r, a = fi(r.type, a), n);
                        case 15:
                            return Es(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : fi(r, a), Ys(e, t), t.tag = 1, Ra(r) ? (e = !0, La(t)) : e = !1, Ei(t, n), Zi(t, r, a), Wi(t, r, a, n), Bs(null, t, r, !0, e, n);
                        case 19:
                            return Zs(e, t, n);
                        case 22:
                            return ks(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Vg = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Jg(e) {
                    this._internalRoot = e
                }

                function Kg(e) {
                    this._internalRoot = e
                }

                function Xg(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function qg(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function $g() {}

                function eA(e, t, n, r, a) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var o = i;
                        if ("function" === typeof a) {
                            var s = a;
                            a = function() {
                                var e = Wg(o);
                                s.call(e)
                            }
                        }
                        Yg(t, o, e, a)
                    } else o = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Wg(o);
                                    i.call(e)
                                }
                            }
                            var o = Zg(t, r, e, 0, null, !1, 0, "", $g);
                            return e._reactRootContainer = o, e[Ca] = o.current, Fr(8 === e.nodeType ? e.parentNode : e), cg(), o
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = Wg(l);
                                s.call(e)
                            }
                        }
                        var l = Ug(e, 0, !1, null, 0, !1, 0, "", $g);
                        return e._reactRootContainer = l, e[Ca] = l.current, Fr(8 === e.nodeType ? e.parentNode : e), cg((function() {
                            Yg(t, l, n, r)
                        })), l
                    }(n, t, e, a, r);
                    return Wg(o)
                }
                Kg.prototype.render = Jg.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Yg(e, t, null, null)
                }, Kg.prototype.unmount = Jg.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cg((function() {
                            Yg(null, e, null, null)
                        })), t[Ca] = null
                    }
                }, Kg.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Et();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Tt.length && 0 !== t && t < Tt[n].priority; n++);
                        Tt.splice(n, 0, e), 0 === n && _t(e)
                    }
                }, wt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ct(t.pendingLanes);
                                0 !== n && (pt(t, 1 | n), ag(t, Xe()), 0 === (6 & Bl) && (Zl = Xe() + 500, Fa()))
                            }
                            break;
                        case 13:
                            cg((function() {
                                var t = Bi(e, 1);
                                if (null !== t) {
                                    var n = tg();
                                    rg(t, e, 1, n)
                                }
                            })), Hg(e, 1)
                    }
                }, bt = function(e) {
                    if (13 === e.tag) {
                        var t = Bi(e, 134217728);
                        if (null !== t) rg(t, e, 134217728, tg());
                        Hg(e, 134217728)
                    }
                }, vt = function(e) {
                    if (13 === e.tag) {
                        var t = ng(e),
                            n = Bi(e, t);
                        if (null !== n) rg(n, e, t, tg());
                        Hg(e, t)
                    }
                }, Et = function() {
                    return mt
                }, kt = function(e, t) {
                    var n = mt;
                    try {
                        return mt = e, t()
                    } finally {
                        mt = n
                    }
                }, be = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (q(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = wa(r);
                                        if (!a) throw Error(i(90));
                                        H(r), q(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Ne = Ag, Be = cg;
                var tA = {
                        usingClientEntryPoint: !1,
                        Events: [ma, ya, wa, Se, xe, Ag]
                    },
                    nA = {
                        findFiberByHostInstance: pa,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    rA = {
                        bundleType: nA.bundleType,
                        version: nA.version,
                        rendererPackageName: nA.rendererPackageName,
                        rendererConfig: nA.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: y.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = We(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nA.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var aA = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!aA.isDisabled && aA.supportsFiber) try {
                        at = aA.inject(rA), it = aA
                    } catch (Ae) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tA, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Xg(t)) throw Error(i(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: b,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Xg(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        a = Vg;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Ug(e, 1, !1, null, 0, n, 0, r, a), e[Ca] = t.current, Fr(8 === e.nodeType ? e.parentNode : e), new Jg(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = We(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cg(e)
                }, t.hydrate = function(e, t, n) {
                    if (!qg(t)) throw Error(i(200));
                    return eA(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Xg(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        o = "",
                        s = Vg;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Zg(t, null, e, 1, null != n ? n : null, a, 0, o, s), e[Ca] = t.current, Fr(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Kg(t)
                }, t.render = function(e, t, n) {
                    if (!qg(t)) throw Error(i(200));
                    return eA(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!qg(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (cg((function() {
                        eA(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[Ca] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = Ag, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!qg(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return eA(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            1250: (e, t, n) => {
                "use strict";
                var r = n(4164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            4164: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(4463)
            },
            9225: function(e, t, n) {
                ! function(e, t) {
                    "use strict";

                    function n(e) {
                        return e * Math.PI / 180
                    }

                    function r(e, t, n) {
                        return e > n ? n : e < t ? t : e
                    }

                    function a(e, t) {
                        return t / 100 * e
                    }

                    function i(e, t) {
                        return e + t / 2
                    }

                    function o(e, t) {
                        var r = n(e);
                        return {
                            dx: t * Math.cos(r),
                            dy: t * Math.sin(r)
                        }
                    }

                    function s(e) {
                        return "number" === typeof e
                    }

                    function l(e, t) {
                        return "function" === typeof e ? e(t) : e
                    }

                    function g(e, t) {
                        var n = Object.assign({}, t, e);
                        for (var r in t) void 0 === e[r] && (n[r] = t[r]);
                        return n
                    }

                    function A(e) {
                        for (var t = 0, n = 0; n < e.length; n++) t += e[n].value;
                        return t
                    }

                    function c(e) {
                        for (var t = e.data, n = e.lengthAngle, i = e.totalValue, o = e.paddingAngle, s = e.startAngle, l = i || A(t), g = r(n, -360, 360), c = 360 === Math.abs(g) ? t.length : t.length - 1, u = Math.abs(o) * Math.sign(n), I = g - u * c, C = 0, d = [], f = 0; f < t.length; f++) {
                            var h = t[f],
                                p = 0 === l ? 0 : h.value / l * 100,
                                m = a(I, p),
                                y = C + s;
                            C = C + m + u, d.push(Object.assign({
                                percentage: p,
                                startAngle: y,
                                degrees: m
                            }, h))
                        }
                        return d
                    }

                    function u(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }

                    function I(e) {
                        var n = e.renderLabel,
                            r = e.labelProps,
                            a = n(r);
                        if ("string" === typeof a || "number" === typeof a) {
                            r.dataEntry, r.dataIndex;
                            var i = u(r, ["dataEntry", "dataIndex"]);
                            return t.createElement("text", Object.assign({
                                dominantBaseline: "central"
                            }, i), a)
                        }
                        return t.isValidElement(a) ? a : null
                    }

                    function C(e) {
                        var t = 1e14;
                        return Math.round((e + Number.EPSILON) * t) / t
                    }

                    function d(e) {
                        var t = e.labelPosition,
                            n = e.lineWidth,
                            r = C(e.labelHorizontalShift);
                        return 0 === r ? "middle" : t > 100 ? r > 0 ? "start" : "end" : t < 100 - n ? r > 0 ? "end" : "start" : "middle"
                    }

                    function f(e, t) {
                        return e.map((function(e, n) {
                            var r, s = null != (r = l(t.segmentsShift, n)) ? r : 0,
                                g = a(t.radius, t.labelPosition) + s,
                                A = o(i(e.startAngle, e.degrees), g),
                                c = A.dx,
                                u = A.dy;
                            return {
                                x: t.center[0],
                                y: t.center[1],
                                dx: c,
                                dy: u,
                                textAnchor: d({
                                    labelPosition: t.labelPosition,
                                    lineWidth: t.lineWidth,
                                    labelHorizontalShift: c
                                }),
                                dataEntry: e,
                                dataIndex: n,
                                style: l(t.labelStyle, n)
                            }
                        }))
                    }

                    function h(e, n) {
                        var r = n.label;
                        if (r) return f(e, n).map((function(e, n) {
                            return t.createElement(I, {
                                key: "label-" + (e.dataEntry.key || n),
                                renderLabel: r,
                                labelProps: e
                            })
                        }))
                    }
                    var p = function(e, t, n, r, a) {
                        var i = a - r;
                        if (0 === i) return [];
                        var o = n * Math.cos(r) + e,
                            s = n * Math.sin(r) + t,
                            l = n * Math.cos(a) + e,
                            g = n * Math.sin(a) + t;
                        return [
                            ["M", o, s],
                            ["A", n, n, 0, Math.abs(i) <= Math.PI ? "0" : "1", i < 0 ? "0" : "1", l, g]
                        ]
                    };

                    function m(e, t, a, i, o) {
                        var s = r(i, -359.999, 359.999);
                        return p(e, t, o, n(a), n(a + s)).map((function(e) {
                            return e.join(" ")
                        })).join(" ")
                    }

                    function y(e) {
                        var r, l, g = e.cx,
                            A = e.cy,
                            c = e.lengthAngle,
                            I = e.lineWidth,
                            C = e.radius,
                            d = e.shift,
                            f = void 0 === d ? 0 : d,
                            h = e.reveal,
                            p = e.rounded,
                            y = e.startAngle,
                            w = e.title,
                            b = u(e, ["cx", "cy", "lengthAngle", "lineWidth", "radius", "shift", "reveal", "rounded", "startAngle", "title"]),
                            v = C - I / 2,
                            E = o(i(y, c), f),
                            k = m(g + E.dx, A + E.dy, y, c, v);
                        if (s(h)) {
                            var S = n(v) * c;
                            l = (r = Math.abs(S)) - a(r, h)
                        }
                        return t.createElement("path", Object.assign({
                            d: k,
                            fill: "none",
                            strokeWidth: I,
                            strokeDasharray: r,
                            strokeDashoffset: l,
                            strokeLinecap: p ? "round" : void 0
                        }, b), w && t.createElement("title", null, w))
                    }

                    function w(e, t, n) {
                        var r = "stroke-dashoffset " + e + "ms " + t;
                        return n && n.transition && (r = r + "," + n.transition), {
                            transition: r
                        }
                    }

                    function b(e) {
                        return e.animate && !s(e.reveal) ? 100 : e.reveal
                    }

                    function v(e, t) {
                        return e && function(n) {
                            e(n, t)
                        }
                    }

                    function E(e, n, r) {
                        var i = null != r ? r : b(n),
                            o = n.radius,
                            s = n.center,
                            g = s[0],
                            A = s[1],
                            c = a(o, n.lineWidth),
                            u = e.map((function(e, r) {
                                var a = l(n.segmentsStyle, r);
                                return t.createElement(y, {
                                    cx: g,
                                    cy: A,
                                    key: e.key || r,
                                    lengthAngle: e.degrees,
                                    lineWidth: c,
                                    radius: o,
                                    rounded: n.rounded,
                                    reveal: i,
                                    shift: l(n.segmentsShift, r),
                                    startAngle: e.startAngle,
                                    title: e.title,
                                    style: Object.assign({}, a, n.animate && w(n.animationDuration, n.animationEasing, a)),
                                    stroke: e.color,
                                    tabIndex: n.segmentsTabIndex,
                                    onBlur: v(n.onBlur, r),
                                    onClick: v(n.onClick, r),
                                    onFocus: v(n.onFocus, r),
                                    onKeyDown: v(n.onKeyDown, r),
                                    onMouseOver: v(n.onMouseOver, r),
                                    onMouseOut: v(n.onMouseOut, r)
                                })
                            }));
                        return n.background && u.unshift(t.createElement(y, {
                            cx: g,
                            cy: A,
                            key: "bg",
                            lengthAngle: n.lengthAngle,
                            lineWidth: c,
                            radius: o,
                            rounded: n.rounded,
                            startAngle: n.startAngle,
                            stroke: n.background
                        })), u
                    }
                    var k = {
                        animationDuration: 500,
                        animationEasing: "ease-out",
                        center: [50, 50],
                        data: [],
                        labelPosition: 50,
                        lengthAngle: 360,
                        lineWidth: 100,
                        paddingAngle: 0,
                        radius: 50,
                        startAngle: 0,
                        viewBoxSize: [100, 100]
                    };

                    function S(e) {
                        var n = g(e, k),
                            r = t.useState(n.animate ? 0 : null),
                            a = r[0],
                            i = r[1];
                        t.useEffect((function() {
                            n.animate && i(null)
                        }), []);
                        var o = c(n);
                        return t.createElement("svg", {
                            viewBox: "0 0 " + n.viewBoxSize[0] + " " + n.viewBoxSize[1],
                            width: "100%",
                            height: "100%",
                            className: n.className,
                            style: n.style
                        }, E(o, n, a), h(o, n), n.children)
                    }
                    e.PieChart = S, e.pieChartDefaultProps = k
                }(t, n(2791))
            },
            6374: (e, t, n) => {
                "use strict";
                var r = n(2791),
                    a = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    o = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function g(e, t, n) {
                    var r, i = {},
                        g = null,
                        A = null;
                    for (r in void 0 !== n && (g = "" + n), void 0 !== t.key && (g = "" + t.key), void 0 !== t.ref && (A = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: g,
                        ref: A,
                        props: i,
                        _owner: s.current
                    }
                }
                t.jsx = g, t.jsxs = g
            },
            9117: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    g = Symbol.for("react.forward_ref"),
                    A = Symbol.for("react.suspense"),
                    c = Symbol.for("react.memo"),
                    u = Symbol.for("react.lazy"),
                    I = Symbol.iterator;
                var C = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    d = Object.assign,
                    f = {};

                function h(e, t, n) {
                    this.props = e, this.context = t, this.refs = f, this.updater = n || C
                }

                function p() {}

                function m(e, t, n) {
                    this.props = e, this.context = t, this.refs = f, this.updater = n || C
                }
                h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, h.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, p.prototype = h.prototype;
                var y = m.prototype = new p;
                y.constructor = m, d(y, h.prototype), y.isPureReactComponent = !0;
                var w = Array.isArray,
                    b = Object.prototype.hasOwnProperty,
                    v = {
                        current: null
                    },
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function k(e, t, r) {
                    var a, i = {},
                        o = null,
                        s = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) b.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
                    var l = arguments.length - 2;
                    if (1 === l) i.children = r;
                    else if (1 < l) {
                        for (var g = Array(l), A = 0; A < l; A++) g[A] = arguments[A + 2];
                        i.children = g
                    }
                    if (e && e.defaultProps)
                        for (a in l = e.defaultProps) void 0 === i[a] && (i[a] = l[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: o,
                        ref: s,
                        props: i,
                        _owner: v.current
                    }
                }

                function S(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var x = /\/+/g;

                function N(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function B(e, t, a, i, o) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0
                            }
                    }
                    if (l) return o = o(l = e), e = "" === i ? "." + N(l, 0) : i, w(o) ? (a = "", null != e && (a = e.replace(x, "$&/") + "/"), B(o, t, a, "", (function(e) {
                        return e
                    }))) : null != o && (S(o) && (o = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, a + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(x, "$&/") + "/") + e)), t.push(o)), 1;
                    if (l = 0, i = "" === i ? "." : i + ":", w(e))
                        for (var g = 0; g < e.length; g++) {
                            var A = i + N(s = e[g], g);
                            l += B(s, t, a, A, o)
                        } else if (A = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = I && e[I] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof A)
                            for (e = A.call(e), g = 0; !(s = e.next()).done;) l += B(s = s.value, t, a, A = i + N(s, g++), o);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return l
                }

                function D(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return B(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function M(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var R = {
                        current: null
                    },
                    T = {
                        transition: null
                    },
                    O = {
                        ReactCurrentDispatcher: R,
                        ReactCurrentBatchConfig: T,
                        ReactCurrentOwner: v
                    };
                t.Children = {
                    map: D,
                    forEach: function(e, t, n) {
                        D(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return D(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return D(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = h, t.Fragment = a, t.Profiler = o, t.PureComponent = m, t.StrictMode = i, t.Suspense = A, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = d({}, e.props),
                        i = e.key,
                        o = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (o = t.ref, s = v.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                        for (g in t) b.call(t, g) && !E.hasOwnProperty(g) && (a[g] = void 0 === t[g] && void 0 !== l ? l[g] : t[g])
                    }
                    var g = arguments.length - 2;
                    if (1 === g) a.children = r;
                    else if (1 < g) {
                        l = Array(g);
                        for (var A = 0; A < g; A++) l[A] = arguments[A + 2];
                        a.children = l
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: o,
                        props: a,
                        _owner: s
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = k, t.createFactory = function(e) {
                    var t = k.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: g,
                        render: e
                    }
                }, t.isValidElement = S, t.lazy = function(e) {
                    return {
                        $$typeof: u,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: M
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: c,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = T.transition;
                    T.transition = {};
                    try {
                        e()
                    } finally {
                        T.transition = t
                    }
                }, t.unstable_act = function() {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function(e, t) {
                    return R.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return R.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return R.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return R.current.useEffect(e, t)
                }, t.useId = function() {
                    return R.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return R.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return R.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return R.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return R.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return R.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return R.current.useRef(e)
                }, t.useState = function(e) {
                    return R.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return R.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return R.current.useTransition()
                }, t.version = "18.2.0"
            },
            2791: (e, t, n) => {
                "use strict";
                e.exports = n(9117)
            },
            184: (e, t, n) => {
                "use strict";
                e.exports = n(6374)
            },
            6813: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < i(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                g = s + 1,
                                A = e[g];
                            if (0 > i(l, n)) g < a && 0 > i(A, l) ? (e[r] = A, e[g] = n, r = g) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(g < a && 0 > i(A, n))) break e;
                                e[r] = A, e[g] = n, r = g
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function() {
                        return s.now() - l
                    }
                }
                var g = [],
                    A = [],
                    c = 1,
                    u = null,
                    I = 3,
                    C = !1,
                    d = !1,
                    f = !1,
                    h = "function" === typeof setTimeout ? setTimeout : null,
                    p = "function" === typeof clearTimeout ? clearTimeout : null,
                    m = "undefined" !== typeof setImmediate ? setImmediate : null;

                function y(e) {
                    for (var t = r(A); null !== t;) {
                        if (null === t.callback) a(A);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(A), t.sortIndex = t.expirationTime, n(g, t)
                        }
                        t = r(A)
                    }
                }

                function w(e) {
                    if (f = !1, y(e), !d)
                        if (null !== r(g)) d = !0, T(b);
                        else {
                            var t = r(A);
                            null !== t && O(w, t.startTime - e)
                        }
                }

                function b(e, n) {
                    d = !1, f && (f = !1, p(S), S = -1), C = !0;
                    var i = I;
                    try {
                        for (y(n), u = r(g); null !== u && (!(u.expirationTime > n) || e && !B());) {
                            var o = u.callback;
                            if ("function" === typeof o) {
                                u.callback = null, I = u.priorityLevel;
                                var s = o(u.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? u.callback = s : u === r(g) && a(g), y(n)
                            } else a(g);
                            u = r(g)
                        }
                        if (null !== u) var l = !0;
                        else {
                            var c = r(A);
                            null !== c && O(w, c.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        u = null, I = i, C = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var v, E = !1,
                    k = null,
                    S = -1,
                    x = 5,
                    N = -1;

                function B() {
                    return !(t.unstable_now() - N < x)
                }

                function D() {
                    if (null !== k) {
                        var e = t.unstable_now();
                        N = e;
                        var n = !0;
                        try {
                            n = k(!0, e)
                        } finally {
                            n ? v() : (E = !1, k = null)
                        }
                    } else E = !1
                }
                if ("function" === typeof m) v = function() {
                    m(D)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var M = new MessageChannel,
                        R = M.port2;
                    M.port1.onmessage = D, v = function() {
                        R.postMessage(null)
                    }
                } else v = function() {
                    h(D, 0)
                };

                function T(e) {
                    k = e, E || (E = !0, v())
                }

                function O(e, n) {
                    S = h((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    d || C || (d = !0, T(b))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return I
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(g)
                }, t.unstable_next = function(e) {
                    switch (I) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = I
                    }
                    var n = I;
                    I = t;
                    try {
                        return e()
                    } finally {
                        I = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = I;
                    I = e;
                    try {
                        return t()
                    } finally {
                        I = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var o = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? o + i : o : i = o, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: c++,
                        callback: a,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > o ? (e.sortIndex = i, n(A, e), null === r(g) && e === r(A) && (f ? (p(S), S = -1) : f = !0, O(w, i - o))) : (e.sortIndex = s, n(g, e), d || C || (d = !0, T(b))), e
                }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(e) {
                    var t = I;
                    return function() {
                        var n = I;
                        I = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            I = n
                        }
                    }
                }
            },
            5296: (e, t, n) => {
                "use strict";
                e.exports = n(6813)
            },
            6231: function(e, t, n) {
                var r, a, i;
                i = function() {
                    return function() {
                        return function(e) {
                            var t = [];
                            if (0 === e.length) return "";
                            if ("string" !== typeof e[0]) throw new TypeError("Url must be a string. Received " + e[0]);
                            if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
                                var n = e.shift();
                                e[0] = n + e[0]
                            }
                            e[0].match(/^file:\/\/\//) ? e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
                            for (var r = 0; r < e.length; r++) {
                                var a = e[r];
                                if ("string" !== typeof a) throw new TypeError("Url must be a string. Received " + a);
                                "" !== a && (r > 0 && (a = a.replace(/^[\/]+/, "")), a = r < e.length - 1 ? a.replace(/[\/]+$/, "") : a.replace(/[\/]+$/, "/"), t.push(a))
                            }
                            var i = t.join("/"),
                                o = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                            return o.shift() + (o.length > 0 ? "?" : "") + o.join("&")
                        }("object" === typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                    }
                }, e.exports ? e.exports = i() : void 0 === (a = "function" === typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = a)
            },
            1288: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    DOMException: () => b,
                    Headers: () => A,
                    Request: () => h,
                    Response: () => y,
                    fetch: () => v
                });
                var r = "undefined" !== typeof globalThis && globalThis || "undefined" !== typeof self && self || "undefined" !== typeof n.g && n.g || {},
                    a = {
                        searchParams: "URLSearchParams" in r,
                        iterable: "Symbol" in r && "iterator" in Symbol,
                        blob: "FileReader" in r && "Blob" in r && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in r,
                        arrayBuffer: "ArrayBuffer" in r
                    };
                if (a.arrayBuffer) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    o = ArrayBuffer.isView || function(e) {
                        return e && i.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase()
                }

                function l(e) {
                    return "string" !== typeof e && (e = String(e)), e
                }

                function g(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return a.iterable && (t[Symbol.iterator] = function() {
                        return t
                    }), t
                }

                function A(e) {
                    this.map = {}, e instanceof A ? e.forEach((function(e, t) {
                        this.append(t, e)
                    }), this) : Array.isArray(e) ? e.forEach((function(e) {
                        if (2 != e.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
                        this.append(e[0], e[1])
                    }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                        this.append(t, e[t])
                    }), this)
                }

                function c(e) {
                    if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
                }

                function u(e) {
                    return new Promise((function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            n(e.error)
                        }
                    }))
                }

                function I(e) {
                    var t = new FileReader,
                        n = u(t);
                    return t.readAsArrayBuffer(e), n
                }

                function C(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function d() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        var t;
                        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" === typeof e ? this._bodyText = e : a.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : a.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : a.arrayBuffer && a.blob && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = C(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || o(e)) ? this._bodyArrayBuffer = C(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, a.blob && (this.blob = function() {
                        var e = c(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }), this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var e = c(this);
                            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        }
                        if (a.blob) return this.blob().then(I);
                        throw new Error("could not read as ArrayBuffer")
                    }, this.text = function() {
                        var e = c(this);
                        if (e) return e;
                        if (this._bodyBlob) return function(e) {
                            var t = new FileReader,
                                n = u(t),
                                r = /charset=([A-Za-z0-9_-]+)/.exec(e.type),
                                a = r ? r[1] : "utf-8";
                            return t.readAsText(e, a), n
                        }(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a.formData && (this.formData = function() {
                        return this.text().then(p)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                A.prototype.append = function(e, t) {
                    e = s(e), t = l(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + ", " + t : t
                }, A.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, A.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, A.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, A.prototype.set = function(e, t) {
                    this.map[s(e)] = l(t)
                }, A.prototype.forEach = function(e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, A.prototype.keys = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    })), g(e)
                }, A.prototype.values = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    })), g(e)
                }, A.prototype.entries = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    })), g(e)
                }, a.iterable && (A.prototype[Symbol.iterator] = A.prototype.entries);
                var f = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

                function h(e, t) {
                    if (!(this instanceof h)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var n = (t = t || {}).body;
                    if (e instanceof h) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new A(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new A(t.headers)), this.method = function(e) {
                            var t = e.toUpperCase();
                            return f.indexOf(t) > -1 ? t : e
                        }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                            if ("AbortController" in r) return (new AbortController).signal
                        }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(n), ("GET" === this.method || "HEAD" === this.method) && ("no-store" === t.cache || "no-cache" === t.cache)) {
                        var a = /([?&])_=[^&]*/;
                        if (a.test(this.url)) this.url = this.url.replace(a, "$1_=" + (new Date).getTime());
                        else {
                            this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                        }
                    }
                }

                function p(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach((function(e) {
                        if (e) {
                            var n = e.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                a = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(r), decodeURIComponent(a))
                        }
                    })), t
                }

                function m(e) {
                    var t = new A;
                    return e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    })).forEach((function(e) {
                        var n = e.split(":"),
                            r = n.shift().trim();
                        if (r) {
                            var a = n.join(":").trim();
                            try {
                                t.append(r, a)
                            } catch (i) {
                                console.warn("Response " + i.message)
                            }
                        }
                    })), t
                }

                function y(e, t) {
                    if (!(this instanceof y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
                    this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new A(t.headers), this.url = t.url || "", this._initBody(e)
                }
                h.prototype.clone = function() {
                    return new h(this, {
                        body: this._bodyInit
                    })
                }, d.call(h.prototype), d.call(y.prototype), y.prototype.clone = function() {
                    return new y(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new A(this.headers),
                        url: this.url
                    })
                }, y.error = function() {
                    var e = new y(null, {
                        status: 200,
                        statusText: ""
                    });
                    return e.ok = !1, e.status = 0, e.type = "error", e
                };
                var w = [301, 302, 303, 307, 308];
                y.redirect = function(e, t) {
                    if (-1 === w.indexOf(t)) throw new RangeError("Invalid status code");
                    return new y(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                };
                var b = r.DOMException;
                try {
                    new b
                } catch (E) {
                    (b = function(e, t) {
                        this.message = e, this.name = t;
                        var n = Error(e);
                        this.stack = n.stack
                    }).prototype = Object.create(Error.prototype), b.prototype.constructor = b
                }

                function v(e, t) {
                    return new Promise((function(n, i) {
                        var o = new h(e, t);
                        if (o.signal && o.signal.aborted) return i(new b("Aborted", "AbortError"));
                        var g = new XMLHttpRequest;

                        function c() {
                            g.abort()
                        }
                        if (g.onload = function() {
                                var e = {
                                    statusText: g.statusText,
                                    headers: m(g.getAllResponseHeaders() || "")
                                };
                                0 === o.url.indexOf("file://") && (g.status < 200 || g.status > 599) ? e.status = 200 : e.status = g.status, e.url = "responseURL" in g ? g.responseURL : e.headers.get("X-Request-URL");
                                var t = "response" in g ? g.response : g.responseText;
                                setTimeout((function() {
                                    n(new y(t, e))
                                }), 0)
                            }, g.onerror = function() {
                                setTimeout((function() {
                                    i(new TypeError("Network request failed"))
                                }), 0)
                            }, g.ontimeout = function() {
                                setTimeout((function() {
                                    i(new TypeError("Network request timed out"))
                                }), 0)
                            }, g.onabort = function() {
                                setTimeout((function() {
                                    i(new b("Aborted", "AbortError"))
                                }), 0)
                            }, g.open(o.method, function(e) {
                                try {
                                    return "" === e && r.location.href ? r.location.href : e
                                } catch (t) {
                                    return e
                                }
                            }(o.url), !0), "include" === o.credentials ? g.withCredentials = !0 : "omit" === o.credentials && (g.withCredentials = !1), "responseType" in g && (a.blob ? g.responseType = "blob" : a.arrayBuffer && (g.responseType = "arraybuffer")), t && "object" === typeof t.headers && !(t.headers instanceof A || r.Headers && t.headers instanceof r.Headers)) {
                            var u = [];
                            Object.getOwnPropertyNames(t.headers).forEach((function(e) {
                                u.push(s(e)), g.setRequestHeader(e, l(t.headers[e]))
                            })), o.headers.forEach((function(e, t) {
                                -1 === u.indexOf(t) && g.setRequestHeader(t, e)
                            }))
                        } else o.headers.forEach((function(e, t) {
                            g.setRequestHeader(t, e)
                        }));
                        o.signal && (o.signal.addEventListener("abort", c), g.onreadystatechange = function() {
                            4 === g.readyState && o.signal.removeEventListener("abort", c)
                        }), g.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                    }))
                }
                v.polyfill = !0, r.fetch || (r.fetch = v, r.Headers = A, r.Request = h, r.Response = y)
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            n.r(i);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & a && r;
                "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => o[e] = () => r[e]));
            return o.default = () => r, n.d(i, o), i
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/", (() => {
        "use strict";
        var e = {};
        n.r(e), n.d(e, {
            dQ: () => tr,
            ci: () => Zn,
            bytesToNumberBE: () => Vn,
            ty: () => Jn,
            eV: () => er,
            n$: () => ar,
            ql: () => $n,
            hexToBytes: () => Hn,
            ly: () => Yn,
            _t: () => Un,
            tL: () => Kn,
            S5: () => Xn,
            Yt: () => qn,
            FF: () => or
        });
        var t = {};
        n.r(t), n.d(t, {
            poseidon: () => ma,
            splitConstants: () => pa,
            validateOpts: () => ha
        });
        var r = {};
        n.r(r), n.d(r, {
            DER: () => ka,
            SWUFpSqrtRatio: () => Ta,
            mapToCurveSimpleSWU: () => Oa,
            weierstrass: () => Ra,
            weierstrassPoints: () => Ma
        });
        var a = {};
        n.r(a), n.d(a, {
            CURVE: () => qa,
            Fp251: () => yi,
            MAX_VALUE: () => Qa,
            ProjectivePoint: () => $a,
            Signature: () => ei,
            _poseidonMDS: () => bi,
            _starkCurve: () => Za,
            computeHashOnElements: () => fi,
            ethSigToPrivate: () => oi,
            getAccountPath: () => gi,
            getPublicKey: () => Ga,
            getSharedSecret: () => Ha,
            getStarkKey: () => ii,
            grindKey: () => ai,
            keccak: () => pi,
            pedersen: () => di,
            poseidonBasic: () => Ei,
            poseidonCreate: () => ki,
            poseidonHash: () => xi,
            poseidonHashFunc: () => Ni,
            poseidonHashMany: () => Di,
            poseidonHashSingle: () => Bi,
            poseidonSmall: () => Si,
            sign: () => Ka,
            utils: () => ti,
            verify: () => Xa
        });
        var i, o = n(2791),
            s = n.t(o, 2),
            l = n(1250);

        function g() {
            return g = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, g.apply(this, arguments)
        }! function(e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(i || (i = {}));
        const A = "popstate";

        function c(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function u(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {}
            }
        }

        function I(e, t) {
            return {
                usr: e.state,
                key: e.key,
                idx: t
            }
        }

        function C(e, t, n, r) {
            return void 0 === n && (n = null), g({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? f(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function d(e) {
            let {
                pathname: t = "/",
                search: n = "",
                hash: r = ""
            } = e;
            return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
        }

        function f(e) {
            let t = {};
            if (e) {
                let n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                let r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }

        function h(e, t, n, r) {
            void 0 === r && (r = {});
            let {
                window: a = document.defaultView,
                v5Compat: o = !1
            } = r, s = a.history, l = i.Pop, u = null, f = h();

            function h() {
                return (s.state || {
                    idx: null
                }).idx
            }

            function p() {
                l = i.Pop;
                let e = h(),
                    t = null == e ? null : e - f;
                f = e, u && u({
                    action: l,
                    location: y.location,
                    delta: t
                })
            }

            function m(e) {
                let t = "null" !== a.location.origin ? a.location.origin : a.location.href,
                    n = "string" === typeof e ? e : d(e);
                return c(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }
            null == f && (f = 0, s.replaceState(g({}, s.state, {
                idx: f
            }), ""));
            let y = {
                get action() {
                    return l
                },
                get location() {
                    return e(a, s)
                },
                listen(e) {
                    if (u) throw new Error("A history only accepts one active listener");
                    return a.addEventListener(A, p), u = e, () => {
                        a.removeEventListener(A, p), u = null
                    }
                },
                createHref: e => t(a, e),
                createURL: m,
                encodeLocation(e) {
                    let t = m(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(e, t) {
                    l = i.Push;
                    let r = C(y.location, e, t);
                    n && n(r, e), f = h() + 1;
                    let g = I(r, f),
                        A = y.createHref(r);
                    try {
                        s.pushState(g, "", A)
                    } catch (c) {
                        if (c instanceof DOMException && "DataCloneError" === c.name) throw c;
                        a.location.assign(A)
                    }
                    o && u && u({
                        action: l,
                        location: y.location,
                        delta: 1
                    })
                },
                replace: function(e, t) {
                    l = i.Replace;
                    let r = C(y.location, e, t);
                    n && n(r, e), f = h();
                    let a = I(r, f),
                        g = y.createHref(r);
                    s.replaceState(a, "", g), o && u && u({
                        action: l,
                        location: y.location,
                        delta: 0
                    })
                },
                go: e => s.go(e)
            };
            return y
        }
        var p;
        ! function(e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(p || (p = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function m(e, t, n) {
            void 0 === n && (n = "/");
            let r = T(("string" === typeof t ? f(t) : t).pathname || "/", n);
            if (null == r) return null;
            let a = y(e);
            ! function(e) {
                e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                    let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
                    return n ? e[e.length - 1] - t[t.length - 1] : 0
                }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
            }(a);
            let i = null;
            for (let o = 0; null == i && o < a.length; ++o) i = D(a[o], R(r));
            return i
        }

        function y(e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
            let a = (e, a, i) => {
                let o = {
                    relativePath: void 0 === i ? e.path || "" : i,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                o.relativePath.startsWith("/") && (c(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
                let s = z([r, o.relativePath]),
                    l = n.concat(o);
                e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), y(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                    path: s,
                    score: B(s, e.index),
                    routesMeta: l
                })
            };
            return e.forEach(((e, t) => {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                    for (let r of w(e.path)) a(e, t, r);
                else a(e, t)
            })), t
        }

        function w(e) {
            let t = e.split("/");
            if (0 === t.length) return [];
            let [n, ...r] = t, a = n.endsWith("?"), i = n.replace(/\?$/, "");
            if (0 === r.length) return a ? [i, ""] : [i];
            let o = w(r.join("/")),
                s = [];
            return s.push(...o.map((e => "" === e ? i : [i, e].join("/")))), a && s.push(...o), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
        }
        const b = /^:\w+$/,
            v = 3,
            E = 2,
            k = 1,
            S = 10,
            x = -2,
            N = e => "*" === e;

        function B(e, t) {
            let n = e.split("/"),
                r = n.length;
            return n.some(N) && (r += x), t && (r += E), n.filter((e => !N(e))).reduce(((e, t) => e + (b.test(t) ? v : "" === t ? k : S)), r)
        }

        function D(e, t) {
            let {
                routesMeta: n
            } = e, r = {}, a = "/", i = [];
            for (let o = 0; o < n.length; ++o) {
                let e = n[o],
                    s = o === n.length - 1,
                    l = "/" === a ? t : t.slice(a.length) || "/",
                    g = M({
                        path: e.relativePath,
                        caseSensitive: e.caseSensitive,
                        end: s
                    }, l);
                if (!g) return null;
                Object.assign(r, g.params);
                let A = e.route;
                i.push({
                    params: r,
                    pathname: z([a, g.pathname]),
                    pathnameBase: Q(z([a, g.pathnameBase])),
                    route: A
                }), "/" !== g.pathnameBase && (a = z([a, g.pathnameBase]))
            }
            return i
        }

        function M(e, t) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            let [n, r] = function(e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = [],
                    a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, ((e, t, n) => (r.push({
                        paramName: t,
                        isOptional: null != n
                    }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({
                    paramName: "*"
                }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let i = new RegExp(a, t ? void 0 : "i");
                return [i, r]
            }(e.path, e.caseSensitive, e.end), a = t.match(n);
            if (!a) return null;
            let i = a[0],
                o = i.replace(/(.)\/+$/, "$1"),
                s = a.slice(1);
            return {
                params: r.reduce(((e, t, n) => {
                    let {
                        paramName: r,
                        isOptional: a
                    } = t;
                    if ("*" === r) {
                        let e = s[n] || "";
                        o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    const l = s[n];
                    return e[r] = a && !l ? void 0 : function(e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return u(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                        }
                    }(l || "", r), e
                }), {}),
                pathname: i,
                pathnameBase: o,
                pattern: e
            }
        }

        function R(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function T(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            let n = t.endsWith("/") ? t.length - 1 : t.length,
                r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }

        function O(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function j(e) {
            return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
        }

        function L(e, t) {
            let n = j(e);
            return t ? n.map(((t, n) => n === e.length - 1 ? t.pathname : t.pathnameBase)) : n.map((e => e.pathnameBase))
        }

        function _(e, t, n, r) {
            let a;
            void 0 === r && (r = !1), "string" === typeof e ? a = f(e) : (a = g({}, e), c(!a.pathname || !a.pathname.includes("?"), O("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), O("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), O("#", "search", "hash", a)));
            let i, o = "" === e || "" === a.pathname,
                s = o ? "/" : a.pathname;
            if (null == s) i = n;
            else if (r) {
                let e = 0 === t.length ? [] : t[t.length - 1].replace(/^\//, "").split("/");
                if (s.startsWith("..")) {
                    let t = s.split("/");
                    for (;
                        ".." === t[0];) t.shift(), e.pop();
                    a.pathname = t.join("/")
                }
                i = "/" + e.join("/")
            } else {
                let e = t.length - 1;
                if (s.startsWith("..")) {
                    let t = s.split("/");
                    for (;
                        ".." === t[0];) t.shift(), e -= 1;
                    a.pathname = t.join("/")
                }
                i = e >= 0 ? t[e] : "/"
            }
            let l = function(e, t) {
                    void 0 === t && (t = "/");
                    let {
                        pathname: n,
                        search: r = "",
                        hash: a = ""
                    } = "string" === typeof e ? f(e) : e, i = n ? n.startsWith("/") ? n : function(e, t) {
                        let n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((e => {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(n, t) : t;
                    return {
                        pathname: i,
                        search: P(r),
                        hash: U(a)
                    }
                }(a, i),
                A = s && "/" !== s && s.endsWith("/"),
                u = (o || "." === s) && n.endsWith("/");
            return l.pathname.endsWith("/") || !A && !u || (l.pathname += "/"), l
        }
        const z = e => e.join("/").replace(/\/\/+/g, "/"),
            Q = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            P = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            U = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;

        function F(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }
        const Z = ["post", "put", "patch", "delete"],
            Y = (new Set(Z), ["get", ...Z]);
        new Set(Y), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function W() {
            return W = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, W.apply(this, arguments)
        }
        const G = o.createContext(null);
        const H = o.createContext(null);
        const V = o.createContext(null);
        const J = o.createContext(null);
        const K = o.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        });
        const X = o.createContext(null);

        function q() {
            return null != o.useContext(J)
        }

        function $() {
            return q() || c(!1), o.useContext(J).location
        }

        function ee(e) {
            o.useContext(V).static || o.useLayoutEffect(e)
        }

        function te() {
            let {
                isDataRoute: e
            } = o.useContext(K);
            return e ? function() {
                let {
                    router: e
                } = ce(ge.UseNavigateStable), t = Ie(Ae.UseNavigateStable), n = o.useRef(!1);
                return ee((() => {
                    n.current = !0
                })), o.useCallback((function(r, a) {
                    void 0 === a && (a = {}), n.current && ("number" === typeof r ? e.navigate(r) : e.navigate(r, W({
                        fromRouteId: t
                    }, a)))
                }), [e, t])
            }() : function() {
                q() || c(!1);
                let e = o.useContext(G),
                    {
                        basename: t,
                        future: n,
                        navigator: r
                    } = o.useContext(V),
                    {
                        matches: a
                    } = o.useContext(K),
                    {
                        pathname: i
                    } = $(),
                    s = JSON.stringify(L(a, n.v7_relativeSplatPath)),
                    l = o.useRef(!1);
                return ee((() => {
                    l.current = !0
                })), o.useCallback((function(n, a) {
                    if (void 0 === a && (a = {}), !l.current) return;
                    if ("number" === typeof n) return void r.go(n);
                    let o = _(n, JSON.parse(s), i, "path" === a.relative);
                    null == e && "/" !== t && (o.pathname = "/" === o.pathname ? t : z([t, o.pathname])), (a.replace ? r.replace : r.push)(o, a.state, a)
                }), [t, r, s, i, e])
            }()
        }

        function ne(e, t) {
            let {
                relative: n
            } = void 0 === t ? {} : t, {
                future: r
            } = o.useContext(V), {
                matches: a
            } = o.useContext(K), {
                pathname: i
            } = $(), s = JSON.stringify(L(a, r.v7_relativeSplatPath));
            return o.useMemo((() => _(e, JSON.parse(s), i, "path" === n)), [e, s, i, n])
        }

        function re(e, t, n, r) {
            q() || c(!1);
            let {
                navigator: a
            } = o.useContext(V), {
                matches: s
            } = o.useContext(K), l = s[s.length - 1], g = l ? l.params : {}, A = (l && l.pathname, l ? l.pathnameBase : "/");
            l && l.route;
            let u, I = $();
            if (t) {
                var C;
                let e = "string" === typeof t ? f(t) : t;
                "/" === A || (null == (C = e.pathname) ? void 0 : C.startsWith(A)) || c(!1), u = e
            } else u = I;
            let d = u.pathname || "/",
                h = m(e, {
                    pathname: "/" === A ? d : d.slice(A.length) || "/"
                });
            let p = le(h && h.map((e => Object.assign({}, e, {
                params: Object.assign({}, g, e.params),
                pathname: z([A, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? A : z([A, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), s, n, r);
            return t && p ? o.createElement(J.Provider, {
                value: {
                    location: W({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, u),
                    navigationType: i.Pop
                }
            }, p) : p
        }

        function ae() {
            let e = function() {
                    var e;
                    let t = o.useContext(X),
                        n = ue(Ae.UseRouteError),
                        r = Ie(Ae.UseRouteError);
                    if (void 0 !== t) return t;
                    return null == (e = n.errors) ? void 0 : e[r]
                }(),
                t = F(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                n = e instanceof Error ? e.stack : null,
                r = "rgba(200,200,200, 0.5)",
                a = {
                    padding: "0.5rem",
                    backgroundColor: r
                };
            return o.createElement(o.Fragment, null, o.createElement("h2", null, "Unexpected Application Error!"), o.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, t), n ? o.createElement("pre", {
                style: a
            }, n) : null, null)
        }
        const ie = o.createElement(ae, null);
        class oe extends o.Component {
            constructor(e) {
                super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                }
            }
            componentDidCatch(e, t) {
                console.error("React Router caught the following error during render", e, t)
            }
            render() {
                return void 0 !== this.state.error ? o.createElement(K.Provider, {
                    value: this.props.routeContext
                }, o.createElement(X.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children
            }
        }

        function se(e) {
            let {
                routeContext: t,
                match: n,
                children: r
            } = e, a = o.useContext(G);
            return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), o.createElement(K.Provider, {
                value: t
            }, r)
        }

        function le(e, t, n, r) {
            var a;
            if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e) {
                var i;
                if (null == (i = n) || !i.errors) return null;
                e = n.matches
            }
            let s = e,
                l = null == (a = n) ? void 0 : a.errors;
            if (null != l) {
                let e = s.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
                e >= 0 || c(!1), s = s.slice(0, Math.min(s.length, e + 1))
            }
            let g = !1,
                A = -1;
            if (n && r && r.v7_partialHydration)
                for (let o = 0; o < s.length; o++) {
                    let e = s[o];
                    if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (A = o), e.route.loader && e.route.id && void 0 === n.loaderData[e.route.id] && (!n.errors || void 0 === n.errors[e.route.id])) {
                        g = !0, s = A >= 0 ? s.slice(0, A + 1) : [s[0]];
                        break
                    }
                }
            return s.reduceRight(((e, r, a) => {
                let i, c = !1,
                    u = null,
                    I = null;
                var C;
                n && (i = l && r.route.id ? l[r.route.id] : void 0, u = r.route.errorElement || ie, g && (A < 0 && 0 === a ? (C = "route-fallback", !1 || Ce[C] || (Ce[C] = !0), c = !0, I = null) : A === a && (c = !0, I = r.route.hydrateFallbackElement || null)));
                let d = t.concat(s.slice(0, a + 1)),
                    f = () => {
                        let t;
                        return t = i ? u : c ? I : r.route.Component ? o.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, o.createElement(se, {
                            match: r,
                            routeContext: {
                                outlet: e,
                                matches: d,
                                isDataRoute: null != n
                            },
                            children: t
                        })
                    };
                return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a) ? o.createElement(oe, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: u,
                    error: i,
                    children: f(),
                    routeContext: {
                        outlet: null,
                        matches: d,
                        isDataRoute: !0
                    }
                }) : f()
            }), null)
        }
        var ge = function(e) {
                return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
            }(ge || {}),
            Ae = function(e) {
                return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
            }(Ae || {});

        function ce(e) {
            let t = o.useContext(G);
            return t || c(!1), t
        }

        function ue(e) {
            let t = o.useContext(H);
            return t || c(!1), t
        }

        function Ie(e) {
            let t = function(e) {
                    let t = o.useContext(K);
                    return t || c(!1), t
                }(),
                n = t.matches[t.matches.length - 1];
            return n.route.id || c(!1), n.route.id
        }
        const Ce = {};
        s.startTransition;

        function de(e) {
            c(!1)
        }

        function fe(e) {
            let {
                basename: t = "/",
                children: n = null,
                location: r,
                navigationType: a = i.Pop,
                navigator: s,
                static: l = !1,
                future: g
            } = e;
            q() && c(!1);
            let A = t.replace(/^\/*/, "/"),
                u = o.useMemo((() => ({
                    basename: A,
                    navigator: s,
                    static: l,
                    future: W({
                        v7_relativeSplatPath: !1
                    }, g)
                })), [A, g, s, l]);
            "string" === typeof r && (r = f(r));
            let {
                pathname: I = "/",
                search: C = "",
                hash: d = "",
                state: h = null,
                key: p = "default"
            } = r, m = o.useMemo((() => {
                let e = T(I, A);
                return null == e ? null : {
                    location: {
                        pathname: e,
                        search: C,
                        hash: d,
                        state: h,
                        key: p
                    },
                    navigationType: a
                }
            }), [A, I, C, d, h, p, a]);
            return null == m ? null : o.createElement(V.Provider, {
                value: u
            }, o.createElement(J.Provider, {
                children: n,
                value: m
            }))
        }

        function he(e) {
            let {
                children: t,
                location: n
            } = e;
            return re(pe(t), n)
        }
        new Promise((() => {}));
        o.Component;

        function pe(e, t) {
            void 0 === t && (t = []);
            let n = [];
            return o.Children.forEach(e, ((e, r) => {
                if (!o.isValidElement(e)) return;
                let a = [...t, r];
                if (e.type === o.Fragment) return void n.push.apply(n, pe(e.props.children, a));
                e.type !== de && c(!1), e.props.index && e.props.children && c(!1);
                let i = {
                    id: e.props.id || a.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                };
                e.props.children && (i.children = pe(e.props.children, a)), n.push(i)
            })), n
        }
        var me = n(4164),
            ye = n.t(me, 2);

        function we() {
            return we = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, we.apply(this, arguments)
        }

        function be(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        const ve = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
            Ee = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"];
        const ke = o.createContext({
            isTransitioning: !1
        });
        new Map;
        const Se = s.startTransition;
        ye.flushSync;

        function xe(e) {
            let {
                basename: t,
                children: n,
                future: r,
                window: a
            } = e, i = o.useRef();
            var s;
            null == i.current && (i.current = (void 0 === (s = {
                window: a,
                v5Compat: !0
            }) && (s = {}), h((function(e, t) {
                let {
                    pathname: n,
                    search: r,
                    hash: a
                } = e.location;
                return C("", {
                    pathname: n,
                    search: r,
                    hash: a
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function(e, t) {
                return "string" === typeof t ? t : d(t)
            }), null, s)));
            let l = i.current,
                [g, A] = o.useState({
                    action: l.action,
                    location: l.location
                }),
                {
                    v7_startTransition: c
                } = r || {},
                u = o.useCallback((e => {
                    c && Se ? Se((() => A(e))) : A(e)
                }), [A, c]);
            return o.useLayoutEffect((() => l.listen(u)), [l, u]), o.createElement(fe, {
                basename: t,
                children: n,
                location: g.location,
                navigationType: g.action,
                navigator: l,
                future: r
            })
        }
        const Ne = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            Be = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
            De = o.forwardRef((function(e, t) {
                let n, {
                        onClick: r,
                        relative: a,
                        reloadDocument: i,
                        replace: s,
                        state: l,
                        target: g,
                        to: A,
                        preventScrollReset: u,
                        unstable_viewTransition: I
                    } = e,
                    C = be(e, ve),
                    {
                        basename: f
                    } = o.useContext(V),
                    h = !1;
                if ("string" === typeof A && Be.test(A) && (n = A, Ne)) try {
                    let e = new URL(window.location.href),
                        t = A.startsWith("//") ? new URL(e.protocol + A) : new URL(A),
                        n = T(t.pathname, f);
                    t.origin === e.origin && null != n ? A = n + t.search + t.hash : h = !0
                } catch (y) {}
                let p = function(e, t) {
                        let {
                            relative: n
                        } = void 0 === t ? {} : t;
                        q() || c(!1);
                        let {
                            basename: r,
                            navigator: a
                        } = o.useContext(V), {
                            hash: i,
                            pathname: s,
                            search: l
                        } = ne(e, {
                            relative: n
                        }), g = s;
                        return "/" !== r && (g = "/" === s ? r : z([r, s])), a.createHref({
                            pathname: g,
                            search: l,
                            hash: i
                        })
                    }(A, {
                        relative: a
                    }),
                    m = function(e, t) {
                        let {
                            target: n,
                            replace: r,
                            state: a,
                            preventScrollReset: i,
                            relative: s,
                            unstable_viewTransition: l
                        } = void 0 === t ? {} : t, g = te(), A = $(), c = ne(e, {
                            relative: s
                        });
                        return o.useCallback((t => {
                            if (function(e, t) {
                                    return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                    }(e)
                                }(t, n)) {
                                t.preventDefault();
                                let n = void 0 !== r ? r : d(A) === d(c);
                                g(e, {
                                    replace: n,
                                    state: a,
                                    preventScrollReset: i,
                                    relative: s,
                                    unstable_viewTransition: l
                                })
                            }
                        }), [A, g, c, r, a, n, e, i, s, l])
                    }(A, {
                        replace: s,
                        state: l,
                        target: g,
                        preventScrollReset: u,
                        relative: a,
                        unstable_viewTransition: I
                    });
                return o.createElement("a", we({}, C, {
                    href: n || p,
                    onClick: h || i ? r : function(e) {
                        r && r(e), e.defaultPrevented || m(e)
                    },
                    ref: t,
                    target: g
                }))
            }));
        const Me = o.forwardRef((function(e, t) {
            let {
                "aria-current": n = "page",
                caseSensitive: r = !1,
                className: a = "",
                end: i = !1,
                style: s,
                to: l,
                unstable_viewTransition: g,
                children: A
            } = e, u = be(e, Ee), I = ne(l, {
                relative: u.relative
            }), C = $(), d = o.useContext(H), {
                navigator: f
            } = o.useContext(V), h = null != d && function(e, t) {
                void 0 === t && (t = {});
                let n = o.useContext(ke);
                null == n && c(!1);
                let {
                    basename: r
                } = Oe(Re.useViewTransitionState), a = ne(e, {
                    relative: t.relative
                });
                if (!n.isTransitioning) return !1;
                let i = T(n.currentLocation.pathname, r) || n.currentLocation.pathname,
                    s = T(n.nextLocation.pathname, r) || n.nextLocation.pathname;
                return null != M(a.pathname, s) || null != M(a.pathname, i)
            }(I) && !0 === g, p = f.encodeLocation ? f.encodeLocation(I).pathname : I.pathname, m = C.pathname, y = d && d.navigation && d.navigation.location ? d.navigation.location.pathname : null;
            r || (m = m.toLowerCase(), y = y ? y.toLowerCase() : null, p = p.toLowerCase());
            const w = "/" !== p && p.endsWith("/") ? p.length - 1 : p.length;
            let b, v = m === p || !i && m.startsWith(p) && "/" === m.charAt(w),
                E = null != y && (y === p || !i && y.startsWith(p) && "/" === y.charAt(p.length)),
                k = {
                    isActive: v,
                    isPending: E,
                    isTransitioning: h
                },
                S = v ? n : void 0;
            b = "function" === typeof a ? a(k) : [a, v ? "active" : null, E ? "pending" : null, h ? "transitioning" : null].filter(Boolean).join(" ");
            let x = "function" === typeof s ? s(k) : s;
            return o.createElement(De, we({}, u, {
                "aria-current": S,
                className: b,
                ref: t,
                style: x,
                to: l,
                unstable_viewTransition: g
            }), "function" === typeof A ? A(k) : A)
        }));
        var Re, Te;

        function Oe(e) {
            let t = o.useContext(G);
            return t || c(!1), t
        }(function(e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
        })(Re || (Re = {})),
        function(e) {
            e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Te || (Te = {}));
        var je = function() {
            return je = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, je.apply(this, arguments)
        };
        var Le = "",
            _e = null,
            ze = null,
            Qe = null;

        function Pe() {
            Le = "", null !== _e && _e.disconnect(), null !== ze && (window.clearTimeout(ze), ze = null)
        }

        function Ue(e) {
            return ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(e.tagName) && !e.hasAttribute("disabled") || ["A", "AREA"].includes(e.tagName) && e.hasAttribute("href")
        }

        function Fe() {
            var e = null;
            if ("#" === Le) e = document.body;
            else {
                var t = Le.replace("#", "");
                null === (e = document.getElementById(t)) && "#top" === Le && (e = document.body)
            }
            if (null !== e) {
                Qe(e);
                var n = e.getAttribute("tabindex");
                return null !== n || Ue(e) || e.setAttribute("tabindex", -1), e.focus({
                    preventScroll: !0
                }), null !== n || Ue(e) || (e.blur(), e.removeAttribute("tabindex")), Pe(), !0
            }
            return !1
        }

        function Ze(e) {
            return o.forwardRef((function(t, n) {
                var r = "";
                "string" === typeof t.to && t.to.includes("#") ? r = "#" + t.to.split("#").slice(1).join("#") : "object" === typeof t.to && "string" === typeof t.to.hash && (r = t.to.hash);
                var a = {};
                e === Me && (a.isActive = function(e, t) {
                    return e && e.isExact && t.hash === r
                });
                var i = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                    }
                    return n
                }(t, ["scroll", "smooth", "timeout", "elementId"]);
                return o.createElement(e, je({}, a, i, {
                    onClick: function(e) {
                        var n;
                        Pe(), Le = t.elementId ? "#" + t.elementId : r, t.onClick && t.onClick(e), "" === Le || e.defaultPrevented || 0 !== e.button || t.target && "_self" !== t.target || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (Qe = t.scroll || function(e) {
                            return t.smooth ? e.scrollIntoView({
                                behavior: "smooth"
                            }) : e.scrollIntoView()
                        }, n = t.timeout, window.setTimeout((function() {
                            !1 === Fe() && (null === _e && (_e = new MutationObserver(Fe)), _e.observe(document, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), ze = window.setTimeout((function() {
                                Pe()
                            }), n || 1e4))
                        }), 0))
                    },
                    ref: n
                }), t.children)
            }))
        }
        var Ye = Ze(De);
        Ze(Me);
        const We = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEPCAYAAAD4RfntAAAAxnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBbDsMgDPvnFDtCXkA4Dl1baTfY8RdIkNpqlohdTE1IOr6fM70GCCVJrlpaKWCQJo26CQVHnxVBZp2gdyi87yc4Q5IxG7MbWpxx7ccPi7GbypcgfYex3Y0m0YE+guIiHh2RiT2CWgQxuYER0P1ZUJrW6xO2A+5QX2mUc82kOj2/pdr09mz3MNHByGCVuXgDPJYk7iZ41moHgZtpMatznkfRB/JvTgvpB6zeWfAAyEEeAAABhWlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TpUUqDnYQcQhYBcGCqIijVqEIFUKt0KqDyaUfQpOGJMXFUXAtOPixWHVwcdbVwVUQBD9AnB2cFF2kxP8lhRYxHhz34929x907QKiXmWZ1jAGabpvpZELM5lbE0CuCCCGMEQzKzDJmJSkF3/F1jwBf7+I8y//cn6NbzVsMCIjEM8wwbeJ14qlN2+C8TxxlJVklPiceNemCxI9cVzx+41x0WeCZUTOTniOOEovFNlbamJVMjXiSOKZqOuULWY9VzluctXKVNe/JXxjJ68tLXKc5gCQWsAgJIhRUsYEybMRp1UmxkKb9hI+/3/VL5FLItQFGjnlUoEF2/eB/8LtbqzAx7iVFEkDni+N8DAGhXaBRc5zvY8dpnADBZ+BKb/krdWD6k/RaS4sdAT3bwMV1S1P2gMsdoO/JkE3ZlYI0hUIBeD+jb8oBvbdA16rXW3Mfpw9AhrpK3QAHh8BwkbLXfN4dbu/t3zPN/n4AXtVynxQbqVAAAA14aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmMzZmNmNjdmLTdmOTgtNDk0OC1hODA4LTlmZmE3N2Q2ODJkNiIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ZTI1OTFlYy04M2M2LTQ3NTYtYmNmNy0wNDhkMzMxMjZlN2MiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjN2I0ZDY3Zi01Y2QzLTQyZTYtOTc0ZS1mNTY5MGRlZDRiMzYiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MDk4MDA5Nzc0NzY4MjkiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zNiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MDM6MDdUMDk6NDI6NTYrMDE6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjAzOjA3VDA5OjQyOjU2KzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTk1MGM4MDAtMGVjYi00NmMzLWFiZjQtZDBhZmEzNzg5MjUxIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wMy0wN1QwOTo0Mjo1NyswMTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4En/YuAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH6AMHCCo50slkvgAACPFJREFUeNrt3cFuFEsMRuEpi10k3pMnyntGYh32IwUmQ093/fZ39hdSZfuUbRru+nh/+7zhEn7++r3cAh4luVaPyvWSBhIQciUFwpKIkCMxk0QZSwCySpDV7Xa7LS99z8CCrDrmtJFQckI+xDzAS9HotEBWKTlcigUgq5QHt7zwEhZImQ7ssEgL4h7DcnmzXyyQVVKulmIByCrlYV3dL1OXBbLqk592WBIaYhvzmC5FIzlAVin5WIoFIKuUx7MSfkjockFW3xIWSAtieDXLhXvlQFYpeVeKBSCrlLpfUwOgywJZ5eWaHZYigDjFPIxL0ei0QFYpuVWKBSCrlNpegqPLAlml5FMpGAUCpNTyDxffQxYf72+fHg6PR3cO+1PC3YrlrMQhCRgFA4U1WVrOC7I6hzUheGcEY6cz6/rIqmu++HC0YdB1Wu666+NWEy7B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",
            Ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAAFECAYAAADBfIIjAAAAxHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMgDPxnio7gFwbGIU0idYOOX4ONlEQ9ibsDG4Odju/nTK8BQkmSS9WmCgZp0qibqeDokxFk8kTFcHg/TyJhyZRNOS6oK67zuLAUu7l8KVTfEdjugSauVB+F4iEePyIzexRqUYjJAxgFurcF2mq5trAdcEf1lQad6mkYyc+9FJvenu0dJjoYGYyZ1T/AY0niboYnF0sEbubFQoNXqzaQf3NaSD8j/FmIBv/uBwAAAYVpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAHMVfU6VFKg52EHEIWAXBgqiIo1ahCBVCrdCqg8mlH0KThiTFxVFwLTj4sVh1cHHW1cFVEAQ/QJwdnBRdpMT/JYUWMR4c9+PdvcfdO0Col5lmdYwBmm6b6WRCzOZWxNArggghjBEMyswyZiUpBd/xdY8AX+/iPMv/3J+jW81bDAiIxDPMMG3ideKpTdvgvE8cZSVZJT4nHjXpgsSPXFc8fuNcdFngmVEzk54jjhKLxTZW2piVTI14kjimajrlC1mPVc5bnLVylTXvyV8YyevLS1ynOYAkFrAICSIUVLGBMmzEadVJsZCm/YSPv9/1S+RSyLUBRo55VKBBdv3gf/C7W6swMe4lRRJA54vjfAwBoV2gUXOc72PHaZwAwWfgSm/5K3Vg+pP0WkuLHQE928DFdUtT9oDLHaDvyZBN2ZWCNIVCAXg/o2/KAb23QNeq11tzH6cPQIa6St0AB4fAcJGy13zeHW7v7d8zzf5+AF7Vcp8UG6lQAAANeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDphZTQ5Yzk5NC04OWM4LTQ1NGMtOGRlOS0yNjI5Mzg1NjdhMGIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEwODVmY2QtMWNmNS00NzVmLWI5ZGUtMDkwY2M3OTZhODNiIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTM3NDJiOTItN2ZkYS00MmQ1LThhN2MtZDFhZDgwN2VkYjcwIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzA5ODAwOTY1ODkyMTM3IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzYiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjAzOjA3VDA5OjQyOjQ1KzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowMzowN1QwOTo0Mjo0NSswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRhMWQ0ZTc4LTAwZDItNDMxMy05YTk0LWU2YTcyNzU0M2Q3MyIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDMtMDdUMDk6NDI6NDUrMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+5U3nqAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALiQAAC4kBN8nLrQAAAAd0SU1FB+gDBwgqLcgTsMMAAAkiSURBVHja7d3BbttGFIXhkNCugN/TT5T3LOB1szLiBFZFSZTEmf/7tgWKlrz3HI3GTpYfAAzh35///Hfun729fyy3/DsXjxVgvNC/ZGspKAGAicL/2jJQAgCTBf81RaAEACYN/y1FoAQAJg3+LUWgBAAmDv5LRaAEAALhf64ITl4RwPzBf46TAEAw/D9PA04CAJHgdxIAEPx/nAacBABi4f+VEgCIBb8SAIiH/yd3AgCx4FcCAOHgVwKA8I+HvxIABD9KABD+SgBA8CsBAMGvBACEvxIAEPxKAED4KwEAwa8EAAS/EgAQ/qPz9wkAgj9OCQDCXwkACH4lACD8U1wMA4I/6O39Y3ESAAR/nBIAhL8SABD8Re4EAOEf83kf4CQACP44JQAIfiUAIPyVACD4SXExDMJf+Id8vRR2EgDBT5wSAMGPEgCEP0oAEPykuBgG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",
            He = n.p + "static/media/coingeckologoOrangeBrown2.4711a4f52d2b24655261.png",
            Ve = "data:image/png;base64,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";
        var Je = n(184);

        function Ke() {
            const [e, t] = (0, o.useState)(!1);
            return (0, Je.jsx)("div", {
                className: "navbarContainer ".concat(e ? "menuOpen" : ""),
                children: (0, Je.jsxs)("div", {
                    className: "menuIconAndLinksContainer",
                    children: [(0, Je.jsxs)("div", {
                        className: "menuIcon",
                        onClick: () => {
                            t(!e)
                        },
                        children: [(0, Je.jsx)("div", {
                            className: "bar"
                        }), (0, Je.jsx)("div", {
                            className: "bar"
                        }), (0, Je.jsx)("div", {
                            className: "bar"
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "linksAndSocialsContainer",
                        children: [(0, Je.jsxs)("div", {
                            className: "linksContainer",
                            children: [(0, Je.jsx)(Ye, {
                                className: "navbarLink",
                                to: "#tokenomics",
                                children: "Tokenomics"
                            }), (0, Je.jsx)(Ye, {
                                className: "navbarLink",
                                to: "#roadmap",
                                children: "Roadmap"
                            }), (0, Je.jsx)(Ye, {
                                className: "navbarLink",
                                to: "#integrations",
                                children: "Integrations"
                            }), (0, Je.jsx)(Ye, {
                                className: "navbarLink",
                                to: "#art",
                                children: "Art"
                            }), (0, Je.jsx)("a", {
                                className: "navbarLink",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://weebpunks.com/",
                                children: "NFTs"
                            })]
                        }), (0, Je.jsxs)("div", {
                            className: "navbarSocialsContainer",
                            children: [(0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://twitter.com/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "navbarIcon",
                                    src: We,
                                    alt: "twitterIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://t.me/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "navbarIcon",
                                    src: Ge,
                                    alt: "telegramIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.coingecko.com/en/coins/akamaru",
                                children: (0, Je.jsx)("img", {
                                    className: "navbarIconRound",
                                    src: He,
                                    alt: "coingeckoIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://dexscreener.com/starknet/0x02d2e13758c4ed963182630acf475528b071e3aea6eb6f98e7aaa949a4ff75d7",
                                children: (0, Je.jsx)("img", {
                                    className: "navbarIconRound",
                                    src: Ve,
                                    alt: "dexscreenerIcon"
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        var Xe = n(9225);
        const qe = [{
                title: "DEX Liquidity",
                value: 40,
                color: "rgb(247, 149, 3)"
            }, {
                title: "Starknet Community Airdrop",
                value: 35,
                color: "rgb(247, 121, 3)"
            }, {
                title: "Staking Incentives",
                value: 10,
                color: "rgb(247, 80, 3)"
            }, {
                title: "Treasury",
                value: 6,
                color: "rgb(247, 40, 3)"
            }, {
                title: "The Starks NFT Holders Airdrop",
                value: 5,
                color: "rgb(156, 92, 19)"
            }, {
                title: "Marketing",
                value: 4,
                color: "rgb(231, 172, 11)"
            }],
            $e = () => (0, Je.jsxs)("div", {
                className: "pieChartAndOverviewContainer",
                children: [(0, Je.jsx)("div", {
                    className: "tokenomicsTitle",
                    children: "Tokenomics"
                }), (0, Je.jsxs)("div", {
                    className: "pieChartAndOverviewContainerAndAkuAnim",
                    children: [(0, Je.jsxs)("div", {
                        className: "tokenomicsOverviewContainer",
                        children: [(0, Je.jsx)("div", {
                            className: "tokenomicsDescriptionTotalSuppLine",
                            children: "Total supply : 10 000 000 000 000"
                        }), (0, Je.jsxs)("div", {
                            className: "tokenomicsDescriptionLine",
                            children: [(0, Je.jsx)("div", {
                                className: "tokenomicsDescriptionLineValue",
                                children: "0% tax"
                            }), (0, Je.jsx)("div", {
                                className: "tokenomicsDescriptionLineValue",
                                children: "Fair launched"
                            }), (0, Je.jsx)("div", {
                                className: "tokenomicsDescriptionLineValue",
                                children: "No contract ownership"
                            }), (0, Je.jsx)("div", {
                                className: "tokenomicsDescriptionLineValue",
                                children: "Liquidity locked"
                            })]
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "pieChartAndListContainer",
                        children: [(0, Je.jsx)(Xe.PieChart, {
                            data: qe,
                            style: {
                                height: "23rem",
                                width: "23rem"
                            },
                            animate: !0,
                            radius: 42,
                            lineWidth: 50
                        }), (0, Je.jsx)("div", {
                            className: "PieChartListContainer",
                            children: qe.map(((e, t) => (0, Je.jsxs)("div", {
                                className: "listPieChartValuesAndBullets",
                                children: [(0, Je.jsx)("li", {
                                    className: "bulletslistPieChartValues",
                                    style: {
                                        color: e.color
                                    }
                                }), (0, Je.jsxs)("div", {
                                    className: "listPieChartValues",
                                    children: [e.value, "% ", e.title]
                                })]
                            }, t)))
                        })]
                    })]
                })]
            }),
            et = n.p + "static/media/moondog.1653a7849291fb2ef84f.png",
            tt = n.p + "static/media/akutext1.7b2172898e25fafd7dae.png";

        function nt() {
            return (0, Je.jsxs)("div", {
                className: "tokenomicsContainer",
                id: "tokenomics",
                children: [(0, Je.jsxs)("div", {
                    className: "tokenomicsAkamaruImgAndText",
                    children: [(0, Je.jsx)("img", {
                        className: "tokenomicsAkamaruImg",
                        src: et,
                        alt: "Akamaru Main"
                    }), (0, Je.jsx)("img", {
                        className: "tokenomicsAkamaruText",
                        src: tt,
                        alt: "Akamaru Text"
                    })]
                }), (0, Je.jsx)($e, {})]
            })
        }
        const rt = n.p + "static/media/akusite3.6124ba5bf37301271027.png",
            at = n.p + "static/media/akamarutitle2.f5a94e0647618c4948bd.png",
            it = (n.p, n.p + "static/media/externalLinkIconBlack.1106b289fe96929295e9.png"),
            ot = "On Starknet, there is a tradition to name projects after anime characters. Many contributors, developers, and users adhere to this anime project culture. \nThe ecosystem has Madara, Satoru, Beerus, Deoxys, Ekubo, Garaga, Tsubasa, Kakarot ... \nIt now counts one more! Akamaru.";

        function st() {
            return (0, Je.jsxs)("div", {
                className: "presentationContainer",
                children: [(0, Je.jsx)("div", {
                    className: "presentationImagesContainer",
                    children: (0, Je.jsx)("img", {
                        className: "presentationAkamaruImg",
                        src: rt,
                        alt: "Akamaru Main"
                    })
                }), (0, Je.jsxs)("div", {
                    className: "presentationBigTitleAndText",
                    children: [(0, Je.jsx)("img", {
                        className: "presentationBigTitle",
                        src: at,
                        alt: "Akamaru Title"
                    }), (0, Je.jsxs)("div", {
                        className: "buyAndLearnMoreContainer",
                        children: [(0, Je.jsxs)("a", {
                            className: "buyButton",
                            href: "https://app.avnu.fi/en?amount=0.001&tokenFrom=0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7&tokenTo=0x0137dfca7d96cdd526d13a63176454f35c691f55837497448fad352643cfe4d4",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [(0, Je.jsx)("div", {
                                children: "Buy on Avnu"
                            }), (0, Je.jsx)("img", {
                                className: "externalLinkIcon",
                                src: it,
                                alt: "externalLinkIcon"
                            })]
                        }), (0, Je.jsx)("a", {
                            className: "learnMoreButton",
                            href: "https://t.me/AkamaruStarknet",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Learn More"
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "presentationText",
                        children: [(0, Je.jsxs)("div", {
                            className: "presentationDescription",
                            children: [(0, Je.jsx)("div", {
                                className: "presentationTitle",
                                children: "A community first initiative"
                            }), (0, Je.jsx)("div", {
                                children: "Welcome to Akamaru, a community-driven meme token on a mission."
                            }), (0, Je.jsx)("div", {
                                children: "Our objective is to reach the masses using our cute memey anime dog power."
                            })]
                        }), (0, Je.jsxs)("div", {
                            className: "presentationDescription",
                            children: [(0, Je.jsx)("div", {
                                className: "presentationTitle",
                                children: "Why Akamaru ?"
                            }), (0, Je.jsx)("div", {
                                className: "presentationWhyDescription",
                                children: ot
                            })]
                        }), (0, Je.jsxs)("div", {
                            className: "airdroppedCountsPresentationContainer",
                            children: [(0, Je.jsxs)("div", {
                                className: "airdroppedCountsPresentation",
                                children: [(0, Je.jsx)("div", {
                                    className: "airdroppedCountsPresentationNumber",
                                    children: "25000+"
                                }), (0, Je.jsx)("div", {
                                    className: "airdroppedCountsPresentationTitle",
                                    children: "Holders"
                                })]
                            }), (0, Je.jsxs)("div", {
                                className: "airdroppedCountsPresentation",
                                children: [(0, Je.jsx)("div", {
                                    className: "airdroppedCountsPresentationNumber",
                                    children: "40000+"
                                }), (0, Je.jsx)("div", {
                                    className: "airdroppedCountsPresentationTitle",
                                    children: "Airdropped"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }
        n.p, n.p;
        const lt = e => {
                let {
                    percent: t
                } = e;
                return (0, Je.jsx)("div", {
                    className: "progress-bar-container",
                    children: 100 == t ? (0, Je.jsx)("div", {
                        className: "progress-bar-completed",
                        style: {
                            width: "".concat(t, "%")
                        },
                        children: (0, Je.jsx)("span", {
                            className: "progress-text",
                            children: "DONE"
                        })
                    }) : (0, Je.jsx)("div", {
                        className: "progress-bar",
                        style: {
                            width: "".concat(t, "%")
                        },
                        children: (0, Je.jsx)("span", {
                            className: "progress-text",
                            children: "".concat(t, "%")
                        })
                    })
                })
            },
            gt = n.p + "static/media/akulambo.61e987e66ca1c16955b5.png";

        function At() {
            const [e, t] = (0, o.useState)(!1), n = {
                transform: e ? "translateX(-100rem) translateY(20rem)" : "translateX(0) translateY(0)",
                transition: "transform 0.5s ease-in-out"
            };
            return (0, Je.jsxs)("div", {
                className: "RoadmapContainer",
                id: "roadmap",
                children: [!e && (0, Je.jsx)("img", {
                    className: "RoadmapAkuLambo",
                    src: gt,
                    style: n,
                    alt: "akulambo"
                }), (0, Je.jsx)("div", {
                    className: "RoadmapTitle",
                    children: "Roadmap"
                }), (0, Je.jsxs)("div", {
                    className: "RoadmapContent",
                    children: [(0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "Setup a multisig with trusted parties from the Starknet ecosystem"
                        }), (0, Je.jsx)(lt, {
                            percent: 100
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "Airdrop to STRK eligible wallets"
                        }), (0, Je.jsx)(lt, {
                            percent: 100
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "NFT collection for holders"
                        }), (0, Je.jsx)(lt, {
                            percent: 100
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "NFT staking allowing holders to stake and earn AKU"
                        }), (0, Je.jsx)(lt, {
                            percent: 50
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "Partnership with a decentralized exchange and setup dual reward farming program for liquidity providers"
                        }), (0, Je.jsx)(lt, {
                            percent: 30
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "Listing on a centralized exchange"
                        }), (0, Je.jsx)(lt, {
                            percent: 40
                        })]
                    }), (0, Je.jsxs)("div", {
                        className: "RoadmapContentAndProgressBarItem",
                        children: [(0, Je.jsx)("div", {
                            className: "RoadmapContentItem",
                            children: "Airdrop campaigns aimed at Starknet Communities"
                        }), (0, Je.jsx)(lt, {
                            percent: 50
                        })]
                    })]
                })]
            })
        }
        const ct = n.p + "static/media/braavos.624fcb8496911c5bd54c.png",
            ut = "data:image/png;base64,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",
            It = "data:image/png;base64,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",
            Ct = "data:image/png;base64,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",
            dt = n.p + "static/media/ekubo.95361d7c05289599ee48.png",
            ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACDCAYAAAB86PUXAAAAwnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMgDPz3FB0BP3iNQxoidYOOXzs2UhL1EOfDRgc2zO/ngJeBUEBybaWXkhTSpdNQ0ZJjnIxJTnbMUHjPQ+O4QJoyHedWPOLKL6OIOFTlq9E7Ctu90CX828MoHmL7EanYw6iHEZMXMAyGt5VKb/XawjbTHc03GB1rJtXD8yxVp7dnfYeJJiMnZebiH2DbAjxUoDKykCnTosvyqyUdyL85LcAPa7xZs8YH45YAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDUBSFT1ulUqoOdhBxyFBdtCgq4qhVKEKFUCu06mDy0j9o0pCkuDgKrgUHfxarDi7Oujq4CoLgD4izg5Oii5R4X1JoEeOFx/s4757De/cB/nqZqWbHOKBqlpFKxIVMdlUIvsKHHoQwgjGJmfqcKCbhWV/31E11F+NZ3n1/VreSMxngE4hnmW5YxBvE05uWznmfOMKKkkJ8Tjxq0AWJH7kuu/zGueCwn2dGjHRqnjhCLBTaWG5jVjRU4iniqKJqlO/PuKxw3uKslquseU/+wnBOW1nmOq1BJLCIJYgQIKOKEsqwEKNdI8VEis7jHv4Bxy+SSyZXCYwcC6hAheT4wf/g92zN/OSEmxSOA50vtv0xBAR3gUbNtr+PbbtxAgSegSut5a/UgZlP0mstLXoE9G4DF9ctTd4DLneA/iddMiRHCtDy5/PA+xl9UxbouwVCa+7cmuc4fQDSNKvkDXBwCAwXKHvd491d7XP7t6c5vx+TPHK0+zTpJgAADXhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NzM2NmVhNjMtNjc5OS00YjkxLTgzZDktMGQ1MmFlZWJkNTFiIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI5YWY4Yjg1LWEyMWMtNGU1Yi04ZjI2LWVhYWYzZjAxMjQyYyIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU1ZDYwYzNkLTM2OWQtNGFkMy1iZWZjLTYwMjkzYjdlYzlmZiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTcwNTIyOTA0NDUxMTc3OCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM2IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDowMToxNFQxMTo0NDowMyswMTowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MDE6MTRUMTE6NDQ6MDMrMDE6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDMyYjRhZS03MmM0LTQ4M2EtYWVjYy0yY2ViZjI2M2I1NGUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAxLTE0VDExOjQ0OjA0KzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pvu0ZiUAAAAGYktHRAABAIMAI4U3RmQAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfoAQ4KLATYt0etAAAKNUlEQVR42u1da1NTSRCduTzzpIoQCSRBCIlaBfpF//8vcL+4WKULLltLoESQKsPLF5n9sNaWrggh3TO3p+ecr2q893T3mTNzZ3qMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTApvrezrnh2P+4vP7EnP/5uzZSnHOORKrtzRqz8wllpTW+9j+9yBIlcEj692dvXqhU0/qjKo3X7Y8oT6l4OgXHQcOEc+4rC3nfKTBGpW+c1Hpz5mRngELV6zaSdBxcoqFVeK1dK5D4fb/9AWUqDa0Ce56kReDqrHO7l7yFBteRCi9wG4k6Dm7R8DF3lOE67CTKDaJxE9IRjoWHFT+Bef5ZIVtXUhMWCD6I2KSFwx298rdgt7xcVJgwGcomchTvL5FyoNxp/PLPkiCw3K270+13eShz6jYXax3xxu+m2CUxqvgWDWOMMdXWfCo2FUhA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";

        function ht() {
            return (0, Je.jsxs)("div", {
                className: "IntegrationsContainer",
                id: "integrations",
                children: [(0, Je.jsx)("div", {
                    className: "IntegrationsTitle",
                    children: "Integrations"
                }), (0, Je.jsxs)("div", {
                    className: "IntegrationsListAndTileContainer",
                    children: [(0, Je.jsx)("div", {
                        className: "IntegrationsListTitle",
                        children: "Wallets"
                    }), (0, Je.jsxs)("div", {
                        className: "IntegrationsList",
                        children: [(0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://braavos.app/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: ct,
                                    alt: "Braavos"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "Braavos"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Store and monitor your AKUs"
                                    })]
                                })]
                            })
                        }), (0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://www.argent.xyz/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: ut,
                                    alt: "Argent"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "Argent"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Store and monitor your AKUs"
                                    })]
                                })]
                            })
                        })]
                    })]
                }), (0, Je.jsxs)("div", {
                    className: "IntegrationsListAndTileContainer",
                    children: [(0, Je.jsx)("div", {
                        className: "IntegrationsListTitle",
                        children: "Decentralized Exchanges"
                    }), (0, Je.jsxs)("div", {
                        className: "IntegrationsList",
                        children: [(0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://www.jediswap.xyz/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: It,
                                    alt: "JediSwap"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "JediSwap"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Trade Akamaru"
                                    })]
                                })]
                            })
                        }), (0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://nostra.finance/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: Ct,
                                    alt: "Nostra"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "Nostra"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Trade Akamaru"
                                    })]
                                })]
                            })
                        }), (0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://ekubo.org/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: dt,
                                    alt: "Argent"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "Ekubo"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Trade Akamaru"
                                    })]
                                })]
                            })
                        }), (0, Je.jsx)("div", {
                            className: "IntegrationsListItem",
                            children: (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "IntegrationsListItemContainer",
                                href: "https://app.avnu.fi/",
                                children: [(0, Je.jsx)("img", {
                                    className: "IntegrationsListItemIcon",
                                    src: ft,
                                    alt: "Argent"
                                }), (0, Je.jsxs)("div", {
                                    className: "IntegrationsListItemTitleAndDescription",
                                    children: [(0, Je.jsx)("div", {
                                        className: "IntegrationsListItemTitle",
                                        children: "AVNU"
                                    }), (0, Je.jsx)("div", {
                                        className: "IntegrationsListItemDescription",
                                        children: "Trade Akamaru"
                                    })]
                                })]
                            })
                        })]
                    })]
                })]
            })
        }
        const pt = n.p + "static/media/slideformore.ec11a05e0f93d66c3d50.png",
            mt = n.p + "static/media/akus1.dea637f777f2b68c63d3.png",
            yt = n.p + "static/media/akus2.81dc56caa74dc47848aa.png",
            wt = n.p + "static/media/akus3.bcafe66674dfa90eac30.png",
            bt = n.p + "static/media/akus4.73c04899417ee2ed883e.png",
            vt = n.p + "static/media/akus5.5f899467e26634578e77.png",
            Et = n.p + "static/media/akus6.767c097c95f44790cba1.png",
            kt = n.p + "static/media/akus7.f521ef70de150edf4a7b.png",
            St = n.p + "static/media/akus8.ae0654d9a7c26043f3de.png",
            xt = n.p + "static/media/akus9.b06af9c905bddf36e3ed.png",
            Nt = n.p + "static/media/akus10.de6dbeecf602789d589d.png",
            Bt = n.p + "static/media/akus11.3af87eeb5d049a381a86.png",
            Dt = n.p + "static/media/akus12.f51071ca65681ae3a093.png",
            Mt = n.p + "static/media/akus13.a1beaa103e225969d074.png",
            Rt = n.p + "static/media/akus14.562e413c35746990eea2.png",
            Tt = n.p + "static/media/akus15.30be1d33d152c096a7ec.png",
            Ot = n.p + "static/media/akus16.2b6bd1700399b75ccc07.png",
            jt = n.p + "static/media/akus17.6df3b77c6939b56ac225.png",
            Lt = n.p + "static/media/akus18.a092364209367ef13729.png",
            _t = n.p + "static/media/akus19.2eb241b0d0f7d62cbd4a.png",
            zt = n.p + "static/media/akus20.4241489af9607d4cff95.png";

        function Qt() {
            const e = (0, o.useRef)(null),
                [t, n] = (0, o.useState)(!1),
                [r, a] = (0, o.useState)(0),
                [i, s] = (0, o.useState)(0),
                l = () => {
                    n(!1)
                };
            return (0, Je.jsxs)("div", {
                className: "ArtAndDragForMoreContainer",
                id: "art",
                children: [(0, Je.jsx)("div", {
                    className: "slideForMoreImgContainer",
                    children: (0, Je.jsx)("img", {
                        className: "slideForMoreImg",
                        src: pt,
                        alt: "slideForMore"
                    })
                }), (0, Je.jsx)("div", {
                    ref: e,
                    className: "ArtContainer",
                    onMouseDown: t => {
                        n(!0), a(t.pageX - e.current.offsetLeft), s(e.current.scrollLeft)
                    },
                    onMouseUp: l,
                    onMouseLeave: l,
                    onMouseMove: n => {
                        if (!t) return;
                        const a = 2 * (n.pageX - e.current.offsetLeft - r);
                        e.current.scrollLeft = i - a
                    },
                    children: (0, Je.jsxs)("div", {
                        className: "ArtImagesContainer",
                        children: [(0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: kt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: bt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Et,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Nt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: St,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: xt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Dt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: wt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: mt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: yt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Rt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Bt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Mt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: vt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Tt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Ot,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: jt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: Lt,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: _t,
                            alt: "Akamaru Main"
                        }), (0, Je.jsx)("img", {
                            className: "ArtImg",
                            src: zt,
                            alt: "Akamaru Main"
                        })]
                    })
                })]
            })
        }
        const Pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEPCAYAAAD4RfntAAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBbDsQgCPznFHsEBKpyHPtKeoM9/qJg0jY7icwU7AjA8b1O+HRQEpCl1Kw5o0FUlJqJio42YkIZcYC2UOmZBzxDkjEbsxdqdk4zHz9MTs3UcjOqWxTWZ0ElOqgvo3iIe0dkYg8jDSMmL6QwaD4WZq3lPsJ64BPVD/Rwzp0Up/e3FNvevtg7THRwYrTInL0B7keAmwkesdhFZDUtkZmj2kL+7WkCfqwSWeuHbBTeAAABhWlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TpUUqDnYQcQhYBcGCqIijVqEIFUKt0KqDyaUfQpOGJMXFUXAtOPixWHVwcdbVwVUQBD9AnB2cFF2kxP8lhRYxHhz34929x907QKiXmWZ1jAGabpvpZELM5lbE0CuCCCGMEQzKzDJmJSkF3/F1jwBf7+I8y//cn6NbzVsMCIjEM8wwbeJ14qlN2+C8TxxlJVklPiceNemCxI9cVzx+41x0WeCZUTOTniOOEovFNlbamJVMjXiSOKZqOuULWY9VzluctXKVNe/JXxjJ68tLXKc5gCQWsAgJIhRUsYEybMRp1UmxkKb9hI+/3/VL5FLItQFGjnlUoEF2/eB/8LtbqzAx7iVFEkDni+N8DAGhXaBRc5zvY8dpnADBZ+BKb/krdWD6k/RaS4sdAT3bwMV1S1P2gMsdoO/JkE3ZlYI0hUIBeD+jb8oBvbdA16rXW3Mfpw9AhrpK3QAHh8BwkbLXfN4dbu/t3zPN/n4AXtVynxQbqVAAAA14aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjRjMjI5NDdkLTY5MDUtNGIxYi1hMmNiLTI1MjM3NjcxN2QwNSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YmY4MzE3YS05N2Y5LTQ2OWEtOTg4OS0xNjJjNjBkNGE5ZDgiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYzM5MWVkZi0yNjA4LTQ5MjEtOWZlMS1lYWYzYTQ5MGE1MGYiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MDk4MDA5ODYzNzk5MzMiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zNiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MDM6MDdUMDk6NDM6MDUrMDE6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjAzOjA3VDA5OjQzOjA1KzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmQ0ZTIyYTgtZjVhNi00NGU5LTk5ZmUtNDQyMjA2MTVkNTU2IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wMy0wN1QwOTo0MzowNiswMTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7PoKvNAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH6AMHCCsGfbR4wgAACO9JREFUeNrt3UFyFEsMRdFOBYFXy2q8Wjwx844wtJvqqnzSufMPzpR0UxIFf328v33ecAk/f/1ebgGPklyrR+V6SQMJCLmSAmFJRMiRmEmijCUAWSXI6na73ZaXvmdgQVYdc9pIKDkhH2Ie4KVodFogq5QcLsUCkFXKg1teeAkLpEwHdlikBXGPYbm82S8WyCopV0uxAGSV8rCu7pepywJZ9clPOywJDbGNeUyXopEcIKuUfCzFApBVyuNZCT8kdLkgq28JC6QFMbya5cK9ciCrlLwrxQKQVUrdr6kB0GWBrPJyzQ5LEUCcYh7GpWh0WiCrlNwqxQKQVUptL8HRZYGsUvKpFIwCAVJq+YeL7yGLj/e3Tw+Hx6M7h/0p4W7FclbikASMgoHCmiwt5wVZncOaELwzgrHTmXV9ZNU1X3w42jDoOi133fVxqwmXYJ8FsuqR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",
            Ut = "data:image/png;base64,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",
            Ft = n.p + "static/media/akamarutitle.f10da6cf2c6a6b87ab6b.png",
            Zt = n.p + "static/media/akubottom.fafe82060c0bcc00d493.png",
            Yt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABwCAYAAADVN7S/AAAAxXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBBDsMgDLvzij0hwSkhz6FrJ+0He/4CpFU7zRLGOMiEpP3zfqVHR2ZJsmgtVgo5xMRyc1Fpog1mksEDetT47icNn7Jb8B3zWEvcP3w+A+bWXC2XoPqMwnovmER+/QmKh9A7yi62CLIIQp4FjoA2v0XFql6/sO50R50rdYKO7DPk9yzq09sWN5HzDgY5A2U2gL4koQ3RWf0iQ1wLijPDohMfyL85HUhf+X5ZL1vlTxMAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlIi0OdhBxyFCdLIiK6KZVKEKFUCu06mBy6Rc0aUhSXBwF14KDH4tVBxdnXR1cBUHwA8TZwUnRRUr8X1JoEePBcT/e3XvcvQOERoVpVtcYoOm2mU4mxGxuVQy9QkAIEcQxIzPLmJOkFHzH1z0CfL2L8yz/c3+OiJq3GBAQiWeZYdrEG8RTm7bBeZ84ykqySnxOPGrSBYkfua54/Ma56LLAM6NmJj1PHCUWix2sdDArmRrxJHFM1XTKF7Ieq5y3OGuVGmvdk78wnNdXlrlOcwhJLGIJEkQoqKGMCmzqqwydFAtp2k/4+Addv0QuhVxlMHIsoAoNsusH/4Pf3VqFiXEvKZwAul8c52MYCO0CzbrjfB87TvMECD4DV3rbX20A05+k19ta7Ajo2wYurtuasgdc7gADT4Zsyq4UpCkUCsD7GX1TDui/BXrXvN5a+zh9ADLUVeoGODgERoqUve7z7p7O3v490+rvB6mPcr221OLgAAANeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDpkM2M4NmVhZS04NGU4LTQ1NmItOTgxYS04YjJiOWFhZDhjNTAiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTdiMjIwZmUtNjI1ZC00OTkzLTkwZjgtZjQ0MmViYzMyMTRmIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODcwYzAzZjAtMjlmMi00MDM3LTk3MzYtZjc5MTA2OThiZDZlIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzA3MzEzNTgwNTI4NDQxIgogICBHSU1QOlZlcnNpb249IjIuMTAuMzYiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjAyOjA3VDE0OjQ2OjE5KzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowMjowN1QxNDo0NjoxOSswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3ODgyMWVkLTJhZmQtNDdmYi1iZDAyLWIyNDkzN2VmZTFmZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDItMDdUMTQ6NDY6MjArMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+JC8SGAAAAAZiS0dEAO4A7gDuimnwFAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gCBw0uFMjRFpQAAAGDSURBVHja7d1dbsIwEEXheGTR1bKarpa+tCtAVWlQPNffeUZomJP5MUFhHCfz9fnxfeBlbvfHOPP9SkqzIZhgEAyCQTAIBsEgmGAQDIJBMAgGwXjOcP82XPBxuEmvRaMlt/tjEKyCQTAIxoVbtE06c8FSwVo0YgSf/Yt6qGC8ef4SvFsFa9NaNBq1Z4JVMLrz68z1DVevlqyCtWgkMXdsZTuNnZkq8T+vS7oA5k5i//p+CaInsdmiJ6nZ89sW7Zi0d/WuGENci14tqZ1mc5GbXc1msBmsQjrHWBKXHWtJWHbMZrAZrBI6x14SlP0ZtGgtGp2ruCRFBYNgEGwO7yvY/FXBIBgEEwyCQTAIBsEgGAQTDIJBMAgGwSAYBINggkEwCAbBIBgEg2CCQTAIBsEgGASDYBBMMAgGwSAYb+Hp022u+MOJpKftrJK/sUJgSZJXy19JkBmMxhcnwSoYBINgXHgOXnVz7XJkWjl/JXHZMZYEZh/bSgKzLz5Lli0aBINgXMMPkv5+j3jVuksAAAAASUVORK5CYII=";

        function Wt() {
            return (0, Je.jsxs)("div", {
                className: "BottomContainer",
                children: [(0, Je.jsxs)("div", {
                    className: "BottomInfosAndImgContainer",
                    children: [(0, Je.jsxs)("div", {
                        className: "BottomInfos",
                        children: [(0, Je.jsx)("div", {
                            className: "BottomTitle",
                            children: (0, Je.jsx)("img", {
                                className: "BottomTitleImg",
                                src: Ft,
                                alt: "Akamaru Title"
                            })
                        }), (0, Je.jsxs)("div", {
                            className: "BottomSocialsContainer",
                            children: [(0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://twitter.com/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomSocialsIcon",
                                    src: Pt,
                                    alt: "twitterIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://warpcast.com/akamaru",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomSocialsIcon",
                                    src: Yt,
                                    alt: "farcasterIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://t.me/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomSocialsIcon",
                                    src: Ut,
                                    alt: "telegramIcon"
                                })
                            })]
                        })]
                    }), (0, Je.jsx)("img", {
                        className: "BottomImg",
                        src: Zt,
                        alt: "Akamaru Bottom"
                    })]
                }), (0, Je.jsx)("div", {
                    className: "BottomText",
                    children: "\xa9 2024 Akamaru \u2022 All Rights Reserved"
                })]
            })
        }

        function Gt() {
            return (0, Je.jsxs)("div", {
                className: "homeContainer",
                children: [(0, Je.jsxs)("div", {
                    className: "homeNavbarPresentation",
                    children: [(0, Je.jsx)(Ke, {}), (0, Je.jsx)(st, {})]
                }), (0, Je.jsx)(nt, {}), (0, Je.jsx)(At, {}), (0, Je.jsx)(ht, {}), (0, Je.jsx)(Qt, {}), (0, Je.jsx)(Wt, {})]
            })
        }
        Promise.resolve();
        var Ht = Object.defineProperty,
            Vt = (e, t, n) => (((e, t, n) => {
                t in e ? Ht(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" != typeof t ? t + "" : t, n), n),
            Jt = (e, t, n) => {
                if (!t.has(e)) throw TypeError("Cannot " + n)
            },
            Kt = (e, t, n) => (Jt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
            Xt = (e, t, n) => {
                if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                t instanceof WeakSet ? t.add(e) : t.set(e, n)
            },
            qt = (e, t, n, r) => (Jt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
            $t = (e, t, n) => (Jt(e, t, "access private method"), n);
        const en = [{
                id: "argentX",
                name: "Argent X",
                icon: "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAgMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC43NTgyIC0zLjk3MzY0ZS0wN0gxNC42MjM4QzE0LjI4NTEgLTMuOTczNjRlLTA3IDE0LjAxMzggMC4yODExNzggMTQuMDA2NCAwLjYzMDY4M0MxMy44MDE3IDEwLjQ1NDkgOC44MjIzNCAxOS43NzkyIDAuMjUxODkzIDI2LjM4MzdDLTAuMDIwMjA0NiAyNi41OTMzIC0wLjA4MjE5NDYgMjYuOTg3MiAwLjExNjczNCAyNy4yNzA5TDYuMDQ2MjMgMzUuNzM0QzYuMjQ3OTYgMzYuMDIyIDYuNjQwOTkgMzYuMDg3IDYuOTE3NjYgMzUuODc1NEMxMi4yNzY1IDMxLjc3MjggMTYuNTg2OSAyNi44MjM2IDE5LjY5MSAyMS4zMzhDMjIuNzk1MSAyNi44MjM2IDI3LjEwNTcgMzEuNzcyOCAzMi40NjQ2IDM1Ljg3NTRDMzIuNzQxIDM2LjA4NyAzMy4xMzQxIDM2LjAyMiAzMy4zMzYxIDM1LjczNEwzOS4yNjU2IDI3LjI3MDlDMzkuNDY0MiAyNi45ODcyIDM5LjQwMjIgMjYuNTkzMyAzOS4xMzA0IDI2LjM4MzdDMzAuNTU5NyAxOS43NzkyIDI1LjU4MDQgMTAuNDU0OSAyNS4zNzU5IDAuNjMwNjgzQzI1LjM2ODUgMC4yODExNzggMjUuMDk2OSAtMy45NzM2NGUtMDcgMjQuNzU4MiAtMy45NzM2NGUtMDdaIiBmaWxsPSIjRkY4NzVCIi8+Cjwvc3ZnPgo=",
                downloads: {
                    chrome: "https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb",
                    firefox: "https://addons.mozilla.org/en-US/firefox/addon/argent-x"
                }
            }, {
                id: "braavos",
                name: "Braavos",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik02Mi43MDUgMTMuOTExNkM2Mi44MzU5IDE0LjEzMzMgNjIuNjYyMSAxNC40MDcgNjIuNDAzOSAxNC40MDdDNTcuMTgwNyAxNC40MDcgNTIuOTM0OCAxOC41NDI3IDUyLjgzNTEgMjMuNjgxN0M1MS4wNDY1IDIzLjM0NzcgNDkuMTkzMyAyMy4zMjI2IDQ3LjM2MjYgMjMuNjMxMUM0Ny4yMzYxIDE4LjUxNTYgNDMuMDAwOSAxNC40MDcgMzcuNzk0OCAxNC40MDdDMzcuNTM2NSAxNC40MDcgMzcuMzYyNSAxNC4xMzMxIDM3LjQ5MzUgMTMuOTExMkM0MC4wMjE3IDkuNjI4MDkgNDQuNzIwNCA2Ljc1IDUwLjA5OTEgNi43NUM1NS40NzgxIDYuNzUgNjAuMTc2OSA5LjYyODI2IDYyLjcwNSAxMy45MTE2WiIKICAgICAgICBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzcyXzQwMjU5KSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTc4Ljc2MDYgNDUuODcxOEM4MC4yNzI1IDQ2LjMyOTcgODEuNzAyNSA0NS4wMDU1IDgxLjE3MTQgNDMuNTIyMkM3Ni40MTM3IDMwLjIzMzQgNjEuMzkxMSAyNC44MDM5IDUwLjAyNzcgMjQuODAzOUMzOC42NDQyIDI0LjgwMzkgMjMuMjg2OCAzMC40MDcgMTguODc1NCA0My41OTEyQzE4LjM4MjQgNDUuMDY0NSAxOS44MDgzIDQ2LjM0NDYgMjEuMjk3OCA0NS44ODgxTDQ4Ljg3MiAzNy40MzgxQzQ5LjUzMzEgMzcuMjM1NSA1MC4yMzk5IDM3LjIzNDQgNTAuOTAxNyAzNy40MzQ4TDc4Ljc2MDYgNDUuODcxOFoiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xOC44MTMyIDQ4LjE3MDdMNDguODkzNSAzOS4wNDcyQzQ5LjU1MDYgMzguODQ3OCA1MC4yNTI0IDM4Ljg0NzMgNTAuOTA5OCAzOS4wNDU2TDgxLjE3ODEgNDguMTc1MkM4My42OTEyIDQ4LjkzMzIgODUuNDExIDUxLjI0ODMgODUuNDExIDUzLjg3MzVWODEuMjIzM0M4NS4yOTQ0IDg3Ljg5OTEgNzkuMjk3NyA5My4yNSA3Mi42MjQ1IDkzLjI1SDYxLjU0MDZDNjAuNDQ0OSA5My4yNSA1OS41NTc3IDkyLjM2MzcgNTkuNTU3NyA5MS4yNjhWODEuNjc4OUM1OS41NTc3IDc3LjkwMzEgNjEuNzkyMSA3NC40ODU1IDY1LjI0OTggNzIuOTcyOUM2OS44ODQ5IDcwLjk0NTQgNzUuMzY4MSA2OC4yMDI4IDc2LjM5OTQgNjIuNjk5MkM3Ni43MzIzIDYwLjkyMjkgNzUuNTc0MSA1OS4yMDk0IDczLjgwMjQgNTguODU3M0M2OS4zMjI2IDU3Ljk2NjcgNjQuMzU2MiA1OC4zMTA3IDYwLjE1NjQgNjAuMTg5M0M1NS4zODg3IDYyLjMyMTkgNTQuMTQxNSA2NS44Njk0IDUzLjY3OTcgNzAuNjMzN0w1My4xMjAxIDc1Ljc2NjJDNTIuOTQ5MSA3Ny4zMzQ5IDUxLjQ3ODUgNzguNTM2NiA0OS45MDE0IDc4LjUzNjZDNDguMjY5OSA3OC41MzY2IDQ3LjA0NjUgNzcuMjk0IDQ2Ljg2OTYgNzUuNjcxMkw0Ni4zMjA0IDcwLjYzMzdDNDUuOTI0OSA2Ni41NTI5IDQ1LjIwNzkgNjIuNTg4NyA0MC45ODk1IDYwLjcwMThDMzYuMTc3NiA1OC41NDk0IDMxLjM0MTkgNTcuODM0NyAyNi4xOTc2IDU4Ljg1NzNDMjQuNDI2IDU5LjIwOTQgMjMuMjY3OCA2MC45MjI5IDIzLjYwMDcgNjIuNjk5MkMyNC42NDEgNjguMjUwNyAzMC4wODEyIDcwLjkzMDUgMzQuNzUwMyA3Mi45NzI5QzM4LjIwOCA3NC40ODU1IDQwLjQ0MjQgNzcuOTAzMSA0MC40NDI0IDgxLjY3ODlWOTEuMjY2M0M0MC40NDI0IDkyLjM2MiAzOS41NTU1IDkzLjI1IDM4LjQ1OTkgOTMuMjVIMjcuMzc1NkMyMC43MDI0IDkzLjI1IDE0LjcwNTcgODcuODk5MSAxNC41ODkxIDgxLjIyMzNWNTMuODY2M0MxNC41ODkxIDUxLjI0NDYgMTYuMzA0NSA0OC45MzE2IDE4LjgxMzIgNDguMTcwN1oiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzcyXzQwMjU5IiB4MT0iNDkuMzA1NyIgeTE9IjIuMDc5IiB4Mj0iODAuMzYyNyIgeTI9IjkzLjY1OTciCiAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5NjAwIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3Ml80MDI1OSIgeDE9IjQ5LjMwNTciIHkxPSIyLjA3OSIgeDI9IjgwLjM2MjciIHkyPSI5My42NTk3IgogICAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUQ0NUUiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTYwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8zNzJfNDAyNTkiIHgxPSI0OS4zMDU3IiB5MT0iMi4wNzkiIHgyPSI4MC4zNjI3IiB5Mj0iOTMuNjU5NyIKICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVENDVFIiAvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+",
                downloads: {
                    chrome: "https://chrome.google.com/webstore/detail/braavos-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
                    firefox: "https://addons.mozilla.org/en-US/firefox/addon/braavos-wallet",
                    edge: "https://microsoftedge.microsoft.com/addons/detail/braavos-wallet/hkkpjehhcnhgefhbdcgfkeegglpjchdc"
                }
            }],
            tn = e => {
                for (let t = e.length - 1; t > 0; t--) {
                    const n = Math.floor(Math.random() * (t + 1));
                    [e[t], e[n]] = [e[n], e[t]]
                }
                return e
            };

        function nn() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return e => t.reduce(((e, t) => e.then(t)), Promise.resolve(e))
        }
        var rn, an, on, sn, ln, gn, An;
        class cn {
            constructor(e) {
                Xt(this, sn), Xt(this, gn), Xt(this, rn, !1), Xt(this, an, void 0), Xt(this, on, void 0), Vt(this, "value"), qt(this, on, e), $t(this, gn, An).call(this)
            }
            set(e) {
                return !(!Kt(this, rn) && !$t(this, gn, An).call(this)) && (this.delete(), this.value = e, e && (qt(this, an, "".concat(Kt(this, on), "-").concat("".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12))), localStorage.setItem(Kt(this, an), e)), !0)
            }
            get() {
                return $t(this, sn, ln).call(this), this.value
            }
            delete() {
                return !(!Kt(this, rn) && !$t(this, gn, An).call(this)) && (this.value = null, Kt(this, an) && localStorage.removeItem(Kt(this, an)), !0)
            }
        }

        function un(e, t) {
            var n, r;
            if (null != (null == t ? void 0 : t.include) && n.length) {
                const n = new Set(t.include);
                return e.filter((e => n.has(e.id)))
            }
            if (null != (null == t ? void 0 : t.exclude) && r.length) {
                const n = new Set(t.exclude);
                return e.filter((e => !n.has(e.id)))
            }
            return e
        }
        rn = new WeakMap, an = new WeakMap, on = new WeakMap, sn = new WeakSet, ln = function() {
            this.value && this.set(this.value)
        }, gn = new WeakSet, An = function() {
            try {
                !Kt(this, rn) && typeof window < "u" && (qt(this, an, Object.keys(localStorage).find((e => e.startsWith(Kt(this, on))))), qt(this, rn, !0), Kt(this, an) && this.set(localStorage.getItem(Kt(this, an))))
            } catch (e) {
                console.warn(e)
            }
            return Kt(this, rn)
        };
        const In = async e => {
            const t = await Promise.all(e.map((e => e.isPreauthorized().catch((() => !1)))));
            return e.filter(((e, n) => t[n]))
        };

        function Cn(e, t) {
            return Object.values(Object.getOwnPropertyNames(e).reduce(((n, r) => {
                if (r.startsWith("starknet")) {
                    const a = e[r];
                    t(a) && !n[a.id] && (n[a.id] = a)
                }
                return n
            }), {}))
        }
        const dn = (e, t) => {
                if (t && Array.isArray(t)) {
                    e.sort(((e, n) => t.indexOf(e.id) - t.indexOf(n.id)));
                    const n = e.length - t.length;
                    return [...e.slice(n), ...tn(e.slice(0, n))]
                }
                return tn(e)
            },
            fn = {
                windowObject: typeof window < "u" ? window : {},
                isWalletObject: e => {
                    try {
                        return e && ["request", "isConnected", "provider", "enable", "isPreauthorized", "on", "off", "version", "id", "name", "icon"].every((t => t in e))
                    } catch {}
                    return !1
                },
                storageFactoryImplementation: e => new cn(e)
            };
        (function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const {
                storageFactoryImplementation: t,
                windowObject: n,
                isWalletObject: r
            } = {
                ...fn,
                ...e
            }, a = t("gsw-last")
        })(), typeof window < "u" && window;

        function hn(e) {
            if (!Number.isSafeInteger(e)) throw new Error("Wrong integer: ".concat(e))
        }

        function pn(e) {
            return e instanceof Uint8Array || null != e && "object" === typeof e && "Uint8Array" === e.constructor.name
        }

        function mn() {
            const e = e => e,
                t = (e, t) => n => e(t(n));
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return {
                encode: r.map((e => e.encode)).reduceRight(t, e),
                decode: r.map((e => e.decode)).reduce(t, e)
            }
        }

        function yn(e) {
            return {
                encode: t => {
                    if (!Array.isArray(t) || t.length && "number" !== typeof t[0]) throw new Error("alphabet.encode input should be an array of numbers");
                    return t.map((t => {
                        if (hn(t), t < 0 || t >= e.length) throw new Error("Digit index outside alphabet: ".concat(t, " (alphabet: ").concat(e.length, ")"));
                        return e[t]
                    }))
                },
                decode: t => {
                    if (!Array.isArray(t) || t.length && "string" !== typeof t[0]) throw new Error("alphabet.decode input should be array of strings");
                    return t.map((t => {
                        if ("string" !== typeof t) throw new Error("alphabet.decode: not string element=".concat(t));
                        const n = e.indexOf(t);
                        if (-1 === n) throw new Error('Unknown letter: "'.concat(t, '". Allowed: ').concat(e));
                        return n
                    }))
                }
            }
        }

        function wn() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if ("string" !== typeof e) throw new Error("join separator should be string");
            return {
                encode: t => {
                    if (!Array.isArray(t) || t.length && "string" !== typeof t[0]) throw new Error("join.encode input should be array of strings");
                    for (let e of t)
                        if ("string" !== typeof e) throw new Error("join.encode: non-string input=".concat(e));
                    return t.join(e)
                },
                decode: t => {
                    if ("string" !== typeof t) throw new Error("join.decode input should be string");
                    return t.split(e)
                }
            }
        }

        function bn(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "=";
            if (hn(e), "string" !== typeof t) throw new Error("padding chr should be string");
            return {
                encode(n) {
                    if (!Array.isArray(n) || n.length && "string" !== typeof n[0]) throw new Error("padding.encode input should be array of strings");
                    for (let e of n)
                        if ("string" !== typeof e) throw new Error("padding.encode: non-string input=".concat(e));
                    for (; n.length * e % 8;) n.push(t);
                    return n
                },
                decode(n) {
                    if (!Array.isArray(n) || n.length && "string" !== typeof n[0]) throw new Error("padding.encode input should be array of strings");
                    for (let e of n)
                        if ("string" !== typeof e) throw new Error("padding.decode: non-string input=".concat(e));
                    let r = n.length;
                    if (r * e % 8) throw new Error("Invalid padding: string should have whole number of bytes");
                    for (; r > 0 && n[r - 1] === t; r--)
                        if (!((r - 1) * e % 8)) throw new Error("Invalid padding: string has too much padding");
                    return n.slice(0, r)
                }
            }
        }

        function vn(e) {
            if ("function" !== typeof e) throw new Error("normalize fn should be function");
            return {
                encode: e => e,
                decode: t => e(t)
            }
        }

        function En(e, t, n) {
            if (t < 2) throw new Error("convertRadix: wrong from=".concat(t, ", base cannot be less than 2"));
            if (n < 2) throw new Error("convertRadix: wrong to=".concat(n, ", base cannot be less than 2"));
            if (!Array.isArray(e)) throw new Error("convertRadix: data should be array");
            if (!e.length) return [];
            let r = 0;
            const a = [],
                i = Array.from(e);
            for (i.forEach((e => {
                    if (hn(e), e < 0 || e >= t) throw new Error("Wrong integer: ".concat(e))
                }));;) {
                let e = 0,
                    o = !0;
                for (let a = r; a < i.length; a++) {
                    const s = i[a],
                        l = t * e + s;
                    if (!Number.isSafeInteger(l) || t * e / t !== e || l - s !== t * e) throw new Error("convertRadix: carry overflow");
                    e = l % n;
                    const g = Math.floor(l / n);
                    if (i[a] = g, !Number.isSafeInteger(g) || g * n + e !== l) throw new Error("convertRadix: carry overflow");
                    o && (g ? o = !1 : r = a)
                }
                if (a.push(e), o) break
            }
            for (let o = 0; o < e.length - 1 && 0 === e[o]; o++) a.push(0);
            return a.reverse()
        }
        const kn = (e, t) => t ? kn(t, e % t) : e,
            Sn = (e, t) => e + (t - kn(e, t));

        function xn(e, t, n, r) {
            if (!Array.isArray(e)) throw new Error("convertRadix2: data should be array");
            if (t <= 0 || t > 32) throw new Error("convertRadix2: wrong from=".concat(t));
            if (n <= 0 || n > 32) throw new Error("convertRadix2: wrong to=".concat(n));
            if (Sn(t, n) > 32) throw new Error("convertRadix2: carry overflow from=".concat(t, " to=").concat(n, " carryBits=").concat(Sn(t, n)));
            let a = 0,
                i = 0;
            const o = 2 ** n - 1,
                s = [];
            for (const l of e) {
                if (hn(l), l >= 2 ** t) throw new Error("convertRadix2: invalid data word=".concat(l, " from=").concat(t));
                if (a = a << t | l, i + t > 32) throw new Error("convertRadix2: carry overflow pos=".concat(i, " from=").concat(t));
                for (i += t; i >= n; i -= n) s.push((a >> i - n & o) >>> 0);
                a &= 2 ** i - 1
            }
            if (a = a << n - i & o, !r && i >= t) throw new Error("Excess padding");
            if (!r && a) throw new Error("Non-zero padding: ".concat(a));
            return r && i > 0 && s.push(a >>> 0), s
        }

        function Nn(e) {
            return hn(e), {
                encode: t => {
                    if (!pn(t)) throw new Error("radix.encode input should be Uint8Array");
                    return En(Array.from(t), 256, e)
                },
                decode: t => {
                    if (!Array.isArray(t) || t.length && "number" !== typeof t[0]) throw new Error("radix.decode input should be array of numbers");
                    return Uint8Array.from(En(t, e, 256))
                }
            }
        }

        function Bn(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (hn(e), e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
            if (Sn(8, e) > 32 || Sn(e, 8) > 32) throw new Error("radix2: carry overflow");
            return {
                encode: n => {
                    if (!pn(n)) throw new Error("radix2.encode input should be Uint8Array");
                    return xn(Array.from(n), 8, e, !t)
                },
                decode: n => {
                    if (!Array.isArray(n) || n.length && "number" !== typeof n[0]) throw new Error("radix2.decode input should be array of numbers");
                    return Uint8Array.from(xn(n, e, 8, t))
                }
            }
        }
        const Dn = mn(Bn(4), yn("0123456789ABCDEF"), wn("")),
            Mn = mn(Bn(5), yn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), bn(5), wn("")),
            Rn = (Bn(5), yn("0123456789ABCDEFGHIJKLMNOPQRSTUV"), bn(5), wn(""), Bn(5), yn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), wn(""), vn((e => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), mn(Bn(6), yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), bn(6), wn(""))),
            Tn = mn(Bn(6), yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), bn(6), wn("")),
            On = (Bn(6), yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), wn(""), e => mn(Nn(58), yn(e), wn(""))),
            jn = On("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
            Ln = [0, 2, 3, 5, 6, 7, 9, 10, 11],
            _n = {
                encode(e) {
                    let t = "";
                    for (let n = 0; n < e.length; n += 8) {
                        const r = e.subarray(n, n + 8);
                        t += jn.encode(r).padStart(Ln[r.length], "1")
                    }
                    return t
                },
                decode(e) {
                    let t = [];
                    for (let n = 0; n < e.length; n += 11) {
                        const r = e.slice(n, n + 11),
                            a = Ln.indexOf(r.length),
                            i = jn.decode(r);
                        for (let e = 0; e < i.length - a; e++)
                            if (0 !== i[e]) throw new Error("base58xmr: wrong padding");
                        t = t.concat(Array.from(i.slice(i.length - a)))
                    }
                    return Uint8Array.from(t)
                }
            };
        yn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), wn("");
        const zn = {
                encode: e => (new TextDecoder).decode(e),
                decode: e => (new TextEncoder).encode(e)
            },
            Qn = (Bn(4), yn("0123456789abcdef"), wn(""), vn((e => {
                if ("string" !== typeof e || e.length % 2) throw new TypeError("hex.decode: expected string, got ".concat(typeof e, " with length ").concat(e.length));
                return e.toLowerCase()
            })), BigInt(0), BigInt(1)),
            Pn = BigInt(2);

        function Un(e) {
            return e instanceof Uint8Array || null != e && "object" === typeof e && "Uint8Array" === e.constructor.name
        }
        const Fn = Array.from({
            length: 256
        }, ((e, t) => t.toString(16).padStart(2, "0")));

        function Zn(e) {
            if (!Un(e)) throw new Error("Uint8Array expected");
            let t = "";
            for (let n = 0; n < e.length; n++) t += Fn[e[n]];
            return t
        }

        function Yn(e) {
            if ("string" !== typeof e) throw new Error("hex string expected, got " + typeof e);
            return BigInt("" === e ? "0" : "0x".concat(e))
        }
        const Wn = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };

        function Gn(e) {
            return e >= Wn._0 && e <= Wn._9 ? e - Wn._0 : e >= Wn._A && e <= Wn._F ? e - (Wn._A - 10) : e >= Wn._a && e <= Wn._f ? e - (Wn._a - 10) : void 0
        }

        function Hn(e) {
            if ("string" !== typeof e) throw new Error("hex string expected, got " + typeof e);
            const t = e.length,
                n = t / 2;
            if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
            const r = new Uint8Array(n);
            for (let a = 0, i = 0; a < n; a++, i += 2) {
                const t = Gn(e.charCodeAt(i)),
                    n = Gn(e.charCodeAt(i + 1));
                if (void 0 === t || void 0 === n) {
                    const t = e[i] + e[i + 1];
                    throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i)
                }
                r[a] = 16 * t + n
            }
            return r
        }

        function Vn(e) {
            return Yn(Zn(e))
        }

        function Jn(e) {
            if (!Un(e)) throw new Error("Uint8Array expected");
            return Yn(Zn(Uint8Array.from(e).reverse()))
        }

        function Kn(e, t) {
            return Hn(e.toString(16).padStart(2 * t, "0"))
        }

        function Xn(e, t) {
            return Kn(e, t).reverse()
        }

        function qn(e) {
            return Hn(function(e) {
                const t = e.toString(16);
                return 1 & t.length ? "0".concat(t) : t
            }(e))
        }

        function $n(e, t, n) {
            let r;
            if ("string" === typeof t) try {
                r = Hn(t)
            } catch (i) {
                throw new Error("".concat(e, ' must be valid hex string, got "').concat(t, '". Cause: ').concat(i))
            } else {
                if (!Un(t)) throw new Error("".concat(e, " must be hex string or Uint8Array"));
                r = Uint8Array.from(t)
            }
            const a = r.length;
            if ("number" === typeof n && a !== n) throw new Error("".concat(e, " expected ").concat(n, " bytes, got ").concat(a));
            return r
        }

        function er() {
            let e = 0;
            for (let r = 0; r < arguments.length; r++) {
                const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                if (!Un(t)) throw new Error("Uint8Array expected");
                e += t.length
            }
            let t = new Uint8Array(e),
                n = 0;
            for (let r = 0; r < arguments.length; r++) {
                const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                t.set(e, n), n += e.length
            }
            return t
        }
        const tr = e => (Pn << BigInt(e - 1)) - Qn,
            nr = e => new Uint8Array(e),
            rr = e => Uint8Array.from(e);

        function ar(e, t, n) {
            if ("number" !== typeof e || e < 2) throw new Error("hashLen must be a number");
            if ("number" !== typeof t || t < 2) throw new Error("qByteLen must be a number");
            if ("function" !== typeof n) throw new Error("hmacFn must be a function");
            let r = nr(e),
                a = nr(e),
                i = 0;
            const o = () => {
                    r.fill(1), a.fill(0), i = 0
                },
                s = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return n(a, r, ...t)
                },
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nr();
                    a = s(rr([0]), e), r = s(), 0 !== e.length && (a = s(rr([1]), e), r = s())
                },
                g = () => {
                    if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
                    let e = 0;
                    const n = [];
                    for (; e < t;) {
                        r = s();
                        const t = r.slice();
                        n.push(t), e += r.length
                    }
                    return er(...n)
                };
            return (e, t) => {
                let n;
                for (o(), l(e); !(n = t(g()));) l();
                return o(), n
            }
        }
        const ir = {
            bigint: e => "bigint" === typeof e,
            function: e => "function" === typeof e,
            boolean: e => "boolean" === typeof e,
            string: e => "string" === typeof e,
            stringOrUint8Array: e => "string" === typeof e || Un(e),
            isSafeInteger: e => Number.isSafeInteger(e),
            array: e => Array.isArray(e),
            field: (e, t) => t.Fp.isValid(e),
            hash: e => "function" === typeof e && Number.isSafeInteger(e.outputLen)
        };

        function or(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const r = (t, n, r) => {
                const a = ir[n];
                if ("function" !== typeof a) throw new Error('Invalid validator "'.concat(n, '", expected function'));
                const i = e[t];
                if ((!r || void 0 !== i) && !a(i, e)) throw new Error("Invalid param ".concat(String(t), "=").concat(i, " (").concat(typeof i, "), expected ").concat(n))
            };
            for (const [a, i] of Object.entries(t)) r(a, i, !1);
            for (const [a, i] of Object.entries(n)) r(a, i, !0);
            return e
        }

        function sr(e) {
            if (!Number.isSafeInteger(e) || e < 0) throw new Error("Wrong positive integer: ".concat(e))
        }

        function lr(e) {
            if (!((t = e) instanceof Uint8Array || null != t && "object" === typeof t && "Uint8Array" === t.constructor.name)) throw new Error("Expected Uint8Array");
            for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            if (r.length > 0 && !r.includes(e.length)) throw new Error("Expected Uint8Array of length ".concat(r, ", not of length=").concat(e.length))
        }

        function gr(e) {
            if ("function" !== typeof e || "function" !== typeof e.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
            sr(e.outputLen), sr(e.blockLen)
        }

        function Ar(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (e.destroyed) throw new Error("Hash instance has been destroyed");
            if (t && e.finished) throw new Error("Hash#digest() has already been called")
        }

        function cr(e, t) {
            lr(e);
            const n = t.outputLen;
            if (e.length < n) throw new Error("digestInto() expects output buffer of length at least ".concat(n))
        }
        const ur = BigInt(2 ** 32 - 1),
            Ir = BigInt(32);

        function Cr(e) {
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? {
                h: Number(e & ur),
                l: Number(e >> Ir & ur)
            } : {
                h: 0 | Number(e >> Ir & ur),
                l: 0 | Number(e & ur)
            }
        }

        function dr(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = new Uint32Array(e.length),
                r = new Uint32Array(e.length);
            for (let a = 0; a < e.length; a++) {
                const {
                    h: i,
                    l: o
                } = Cr(e[a], t);
                [n[a], r[a]] = [i, o]
            }
            return [n, r]
        }
        const fr = (e, t, n) => e << n | t >>> 32 - n,
            hr = (e, t, n) => t << n | e >>> 32 - n,
            pr = (e, t, n) => t << n - 32 | e >>> 64 - n,
            mr = (e, t, n) => e << n - 32 | t >>> 64 - n;
        const yr = "object" === typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;

        function wr(e) {
            return e instanceof Uint8Array || null != e && "object" === typeof e && "Uint8Array" === e.constructor.name
        }
        const br = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
            vr = (e, t) => e << 32 - t | e >>> t;
        if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])) throw new Error("Non little-endian hardware is not supported");

        function Er(e) {
            if ("string" !== typeof e) throw new Error("utf8ToBytes expected string, got ".concat(typeof e));
            return new Uint8Array((new TextEncoder).encode(e))
        }

        function kr(e) {
            if ("string" === typeof e && (e = Er(e)), !wr(e)) throw new Error("expected Uint8Array, got ".concat(typeof e));
            return e
        }
        class Sr {
            clone() {
                return this._cloneInto()
            }
        }

        function xr(e) {
            const t = t => e().update(kr(t)).digest(),
                n = e();
            return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
        }

        function Nr() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
            if (yr && "function" === typeof yr.getRandomValues) return yr.getRandomValues(new Uint8Array(e));
            throw new Error("crypto.getRandomValues must be defined")
        }
        const [Br, Dr, Mr] = [
            [],
            [],
            []
        ], Rr = BigInt(0), Tr = BigInt(1), Or = BigInt(2), jr = BigInt(7), Lr = BigInt(256), _r = BigInt(113);
        for (let n = 0, FC = Tr, ZC = 1, YC = 0; n < 24; n++) {
            [ZC, YC] = [YC, (2 * ZC + 3 * YC) % 5], Br.push(2 * (5 * YC + ZC)), Dr.push((n + 1) * (n + 2) / 2 % 64);
            let e = Rr;
            for (let t = 0; t < 7; t++) FC = (FC << Tr ^ (FC >> jr) * _r) % Lr, FC & Or && (e ^= Tr << (Tr << BigInt(t)) - Tr);
            Mr.push(e)
        }
        const [zr, Qr] = dr(Mr, !0), Pr = (e, t, n) => n > 32 ? pr(e, t, n) : fr(e, t, n), Ur = (e, t, n) => n > 32 ? mr(e, t, n) : hr(e, t, n);
        class Fr extends Sr {
            constructor(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 24;
                if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = r, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, sr(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                var i;
                this.state = new Uint8Array(200), this.state32 = (i = this.state, new Uint32Array(i.buffer, i.byteOffset, Math.floor(i.byteLength / 4)))
            }
            keccak() {
                ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24;
                    const n = new Uint32Array(10);
                    for (let r = 24 - t; r < 24; r++) {
                        for (let r = 0; r < 10; r++) n[r] = e[r] ^ e[r + 10] ^ e[r + 20] ^ e[r + 30] ^ e[r + 40];
                        for (let r = 0; r < 10; r += 2) {
                            const t = (r + 8) % 10,
                                a = (r + 2) % 10,
                                i = n[a],
                                o = n[a + 1],
                                s = Pr(i, o, 1) ^ n[t],
                                l = Ur(i, o, 1) ^ n[t + 1];
                            for (let n = 0; n < 50; n += 10) e[r + n] ^= s, e[r + n + 1] ^= l
                        }
                        let t = e[2],
                            a = e[3];
                        for (let n = 0; n < 24; n++) {
                            const r = Dr[n],
                                i = Pr(t, a, r),
                                o = Ur(t, a, r),
                                s = Br[n];
                            t = e[s], a = e[s + 1], e[s] = i, e[s + 1] = o
                        }
                        for (let r = 0; r < 50; r += 10) {
                            for (let t = 0; t < 10; t++) n[t] = e[r + t];
                            for (let t = 0; t < 10; t++) e[r + t] ^= ~n[(t + 2) % 10] & n[(t + 4) % 10]
                        }
                        e[0] ^= zr[r], e[1] ^= Qr[r]
                    }
                    n.fill(0)
                }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
            }
            update(e) {
                Ar(this);
                const {
                    blockLen: t,
                    state: n
                } = this, r = (e = kr(e)).length;
                for (let a = 0; a < r;) {
                    const i = Math.min(t - this.pos, r - a);
                    for (let t = 0; t < i; t++) n[this.pos++] ^= e[a++];
                    this.pos === t && this.keccak()
                }
                return this
            }
            finish() {
                if (this.finished) return;
                this.finished = !0;
                const {
                    state: e,
                    suffix: t,
                    pos: n,
                    blockLen: r
                } = this;
                e[n] ^= t, 0 !== (128 & t) && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
            }
            writeInto(e) {
                Ar(this, !1), lr(e), this.finish();
                const t = this.state,
                    {
                        blockLen: n
                    } = this;
                for (let r = 0, a = e.length; r < a;) {
                    this.posOut >= n && this.keccak();
                    const i = Math.min(n - this.posOut, a - r);
                    e.set(t.subarray(this.posOut, this.posOut + i), r), this.posOut += i, r += i
                }
                return e
            }
            xofInto(e) {
                if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                return this.writeInto(e)
            }
            xof(e) {
                return sr(e), this.xofInto(new Uint8Array(e))
            }
            digestInto(e) {
                if (cr(e, this), this.finished) throw new Error("digest() was already called");
                return this.writeInto(e), this.destroy(), e
            }
            digest() {
                return this.digestInto(new Uint8Array(this.outputLen))
            }
            destroy() {
                this.destroyed = !0, this.state.fill(0)
            }
            _cloneInto(e) {
                const {
                    blockLen: t,
                    suffix: n,
                    outputLen: r,
                    rounds: a,
                    enableXOF: i
                } = this;
                return e || (e = new Fr(t, n, r, i, a)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = a, e.suffix = n, e.outputLen = r, e.enableXOF = i, e.destroyed = this.destroyed, e
            }
        }
        const Zr = (e, t, n) => xr((() => new Fr(t, e, n))),
            Yr = Zr(1, 136, 32);
        class Wr extends Sr {
            constructor(e, t, n, r) {
                super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = br(this.buffer)
            }
            update(e) {
                Ar(this);
                const {
                    view: t,
                    buffer: n,
                    blockLen: r
                } = this, a = (e = kr(e)).length;
                for (let i = 0; i < a;) {
                    const o = Math.min(r - this.pos, a - i);
                    if (o !== r) n.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === r && (this.process(t, 0), this.pos = 0);
                    else {
                        const t = br(e);
                        for (; r <= a - i; i += r) this.process(t, i)
                    }
                }
                return this.length += e.length, this.roundClean(), this
            }
            digestInto(e) {
                Ar(this), cr(e, this), this.finished = !0;
                const {
                    buffer: t,
                    view: n,
                    blockLen: r,
                    isLE: a
                } = this;
                let {
                    pos: i
                } = this;
                t[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > r - i && (this.process(n, 0), i = 0);
                for (let A = i; A < r; A++) t[A] = 0;
                ! function(e, t, n, r) {
                    if ("function" === typeof e.setBigUint64) return e.setBigUint64(t, n, r);
                    const a = BigInt(32),
                        i = BigInt(4294967295),
                        o = Number(n >> a & i),
                        s = Number(n & i),
                        l = r ? 4 : 0,
                        g = r ? 0 : 4;
                    e.setUint32(t + l, o, r), e.setUint32(t + g, s, r)
                }(n, r - 8, BigInt(8 * this.length), a), this.process(n, 0);
                const o = br(e),
                    s = this.outputLen;
                if (s % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                const l = s / 4,
                    g = this.get();
                if (l > g.length) throw new Error("_sha2: outputLen bigger than state");
                for (let A = 0; A < l; A++) o.setUint32(4 * A, g[A], a)
            }
            digest() {
                const {
                    buffer: e,
                    outputLen: t
                } = this;
                this.digestInto(e);
                const n = e.slice(0, t);
                return this.destroy(), n
            }
            _cloneInto(e) {
                e || (e = new this.constructor), e.set(...this.get());
                const {
                    blockLen: t,
                    buffer: n,
                    length: r,
                    finished: a,
                    destroyed: i,
                    pos: o
                } = this;
                return e.length = r, e.pos = o, e.finished = a, e.destroyed = i, r % t && e.buffer.set(n), e
            }
        }
        const Gr = (e, t, n) => e & t ^ ~e & n,
            Hr = (e, t, n) => e & t ^ e & n ^ t & n,
            Vr = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
            Jr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
            Kr = new Uint32Array(64);
        class Xr extends Wr {
            constructor() {
                super(64, 32, 8, !1), this.A = 0 | Jr[0], this.B = 0 | Jr[1], this.C = 0 | Jr[2], this.D = 0 | Jr[3], this.E = 0 | Jr[4], this.F = 0 | Jr[5], this.G = 0 | Jr[6], this.H = 0 | Jr[7]
            }
            get() {
                const {
                    A: e,
                    B: t,
                    C: n,
                    D: r,
                    E: a,
                    F: i,
                    G: o,
                    H: s
                } = this;
                return [e, t, n, r, a, i, o, s]
            }
            set(e, t, n, r, a, i, o, s) {
                this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | a, this.F = 0 | i, this.G = 0 | o, this.H = 0 | s
            }
            process(e, t) {
                for (let A = 0; A < 16; A++, t += 4) Kr[A] = e.getUint32(t, !1);
                for (let A = 16; A < 64; A++) {
                    const e = Kr[A - 15],
                        t = Kr[A - 2],
                        n = vr(e, 7) ^ vr(e, 18) ^ e >>> 3,
                        r = vr(t, 17) ^ vr(t, 19) ^ t >>> 10;
                    Kr[A] = r + Kr[A - 7] + n + Kr[A - 16] | 0
                }
                let {
                    A: n,
                    B: r,
                    C: a,
                    D: i,
                    E: o,
                    F: s,
                    G: l,
                    H: g
                } = this;
                for (let A = 0; A < 64; A++) {
                    const e = g + (vr(o, 6) ^ vr(o, 11) ^ vr(o, 25)) + Gr(o, s, l) + Vr[A] + Kr[A] | 0,
                        t = (vr(n, 2) ^ vr(n, 13) ^ vr(n, 22)) + Hr(n, r, a) | 0;
                    g = l, l = s, s = o, o = i + e | 0, i = a, a = r, r = n, n = e + t | 0
                }
                n = n + this.A | 0, r = r + this.B | 0, a = a + this.C | 0, i = i + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, l = l + this.G | 0, g = g + this.H | 0, this.set(n, r, a, i, o, s, l, g)
            }
            roundClean() {
                Kr.fill(0)
            }
            destroy() {
                this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
            }
        }
        const qr = xr((() => new Xr)),
            $r = BigInt(0),
            ea = BigInt(1),
            ta = BigInt(2),
            na = BigInt(3),
            ra = BigInt(4),
            aa = BigInt(5),
            ia = BigInt(8);
        BigInt(9), BigInt(16);

        function oa(e, t) {
            const n = e % t;
            return n >= $r ? n : t + n
        }

        function sa(e, t, n) {
            if (n <= $r || t < $r) throw new Error("Expected power/modulo > 0");
            if (n === ea) return $r;
            let r = ea;
            for (; t > $r;) t & ea && (r = r * e % n), e = e * e % n, t >>= ea;
            return r
        }

        function la(e, t) {
            if (e === $r || t <= $r) throw new Error("invert: expected positive integers, got n=".concat(e, " mod=").concat(t));
            let n = oa(e, t),
                r = t,
                a = $r,
                i = ea,
                o = ea,
                s = $r;
            for (; n !== $r;) {
                const e = r / n,
                    t = r % n,
                    l = a - o * e,
                    g = i - s * e;
                r = n, n = t, a = o, i = s, o = l, s = g
            }
            if (r !== ea) throw new Error("invert: does not exist");
            return oa(a, t)
        }

        function ga(e) {
            if (e % ra === na) {
                const t = (e + ea) / ra;
                return function(e, n) {
                    const r = e.pow(n, t);
                    if (!e.eql(e.sqr(r), n)) throw new Error("Cannot find square root");
                    return r
                }
            }
            if (e % ia === aa) {
                const t = (e - aa) / ia;
                return function(e, n) {
                    const r = e.mul(n, ta),
                        a = e.pow(r, t),
                        i = e.mul(n, a),
                        o = e.mul(e.mul(i, ta), a),
                        s = e.mul(i, e.sub(o, e.ONE));
                    if (!e.eql(e.sqr(s), n)) throw new Error("Cannot find square root");
                    return s
                }
            }
            return function(e) {
                const t = (e - ea) / ta;
                let n, r, a;
                for (n = e - ea, r = 0; n % ta === $r; n /= ta, r++);
                for (a = ta; a < e && sa(a, t, e) !== e - ea; a++);
                if (1 === r) {
                    const t = (e + ea) / ra;
                    return function(e, n) {
                        const r = e.pow(n, t);
                        if (!e.eql(e.sqr(r), n)) throw new Error("Cannot find square root");
                        return r
                    }
                }
                const i = (n + ea) / ta;
                return function(e, o) {
                    if (e.pow(o, t) === e.neg(e.ONE)) throw new Error("Cannot find square root");
                    let s = r,
                        l = e.pow(e.mul(e.ONE, a), n),
                        g = e.pow(o, i),
                        A = e.pow(o, n);
                    for (; !e.eql(A, e.ONE);) {
                        if (e.eql(A, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(A); t < s && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        const n = e.pow(l, ea << BigInt(s - t - 1));
                        l = e.sqr(n), g = e.mul(g, n), A = e.mul(A, l), s = t
                    }
                    return g
                }
            }(e)
        }
        const Aa = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

        function ca(e) {
            return or(e, Aa.reduce(((e, t) => (e[t] = "function", e)), {
                ORDER: "bigint",
                MASK: "bigint",
                BYTES: "isSafeInteger",
                BITS: "isSafeInteger"
            }))
        }

        function ua(e, t, n) {
            if (n < $r) throw new Error("Expected power > 0");
            if (n === $r) return e.ONE;
            if (n === ea) return t;
            let r = e.ONE,
                a = t;
            for (; n > $r;) n & ea && (r = e.mul(r, a)), a = e.sqr(a), n >>= ea;
            return r
        }

        function Ia(e, t) {
            const n = void 0 !== t ? t : e.toString(2).length;
            return {
                nBitLength: n,
                nByteLength: Math.ceil(n / 8)
            }
        }

        function Ca(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (e <= $r) throw new Error("Expected Field ORDER > 0, got ".concat(e));
            const {
                nBitLength: a,
                nByteLength: i
            } = Ia(e, t);
            if (i > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
            const o = ga(e),
                s = Object.freeze({
                    ORDER: e,
                    BITS: a,
                    BYTES: i,
                    MASK: tr(a),
                    ZERO: $r,
                    ONE: ea,
                    create: t => oa(t, e),
                    isValid: t => {
                        if ("bigint" !== typeof t) throw new Error("Invalid field element: expected bigint, got ".concat(typeof t));
                        return $r <= t && t < e
                    },
                    is0: e => e === $r,
                    isOdd: e => (e & ea) === ea,
                    neg: t => oa(-t, e),
                    eql: (e, t) => e === t,
                    sqr: t => oa(t * t, e),
                    add: (t, n) => oa(t + n, e),
                    sub: (t, n) => oa(t - n, e),
                    mul: (t, n) => oa(t * n, e),
                    pow: (e, t) => ua(s, e, t),
                    div: (t, n) => oa(t * la(n, e), e),
                    sqrN: e => e * e,
                    addN: (e, t) => e + t,
                    subN: (e, t) => e - t,
                    mulN: (e, t) => e * t,
                    inv: t => la(t, e),
                    sqrt: r.sqrt || (e => o(s, e)),
                    invertBatch: e => function(e, t) {
                        const n = new Array(t.length),
                            r = t.reduce(((t, r, a) => e.is0(r) ? t : (n[a] = t, e.mul(t, r))), e.ONE),
                            a = e.inv(r);
                        return t.reduceRight(((t, r, a) => e.is0(r) ? t : (n[a] = e.mul(t, n[a]), e.mul(t, r))), a), n
                    }(s, e),
                    cmov: (e, t, n) => n ? t : e,
                    toBytes: e => n ? Xn(e, i) : Kn(e, i),
                    fromBytes: e => {
                        if (e.length !== i) throw new Error("Fp.fromBytes: expected ".concat(i, ", got ").concat(e.length));
                        return n ? Jn(e) : Vn(e)
                    }
                });
            return Object.freeze(s)
        }

        function da(e) {
            if ("bigint" !== typeof e) throw new Error("field order must be bigint");
            const t = e.toString(2).length;
            return Math.ceil(t / 8)
        }

        function fa(e) {
            const t = da(e);
            return t + Math.ceil(t / 2)
        }

        function ha(e) {
            const {
                Fp: t,
                mds: n,
                reversePartialPowIdx: r,
                roundConstants: a
            } = e, {
                roundsFull: i,
                roundsPartial: o,
                sboxPower: s,
                t: l
            } = e;
            ca(t);
            for (const C of ["t", "roundsFull", "roundsPartial"])
                if ("number" !== typeof e[C] || !Number.isSafeInteger(e[C])) throw new Error("Poseidon: invalid param ".concat(C, "=").concat(e[C], " (").concat(typeof e[C], ")"));
            if (!Array.isArray(n) || n.length !== l) throw new Error("Poseidon: wrong MDS matrix");
            const g = n.map((e => {
                if (!Array.isArray(e) || e.length !== l) throw new Error("Poseidon MDS matrix row: ".concat(e));
                return e.map((e => {
                    if ("bigint" !== typeof e) throw new Error("Poseidon MDS matrix value=".concat(e));
                    return t.create(e)
                }))
            }));
            if (void 0 !== r && "boolean" !== typeof r) throw new Error("Poseidon: invalid param reversePartialPowIdx=".concat(r));
            if (i % 2 !== 0) throw new Error("Poseidon roundsFull is not even: ".concat(i));
            const A = i + o;
            if (!Array.isArray(a) || a.length !== A) throw new Error("Poseidon: wrong round constants");
            const c = a.map((e => {
                if (!Array.isArray(e) || e.length !== l) throw new Error("Poseidon wrong round constants: ".concat(e));
                return e.map((e => {
                    if ("bigint" !== typeof e || !t.isValid(e)) throw new Error("Poseidon wrong round constant=".concat(e));
                    return t.create(e)
                }))
            }));
            if (!s || ![3, 5, 7].includes(s)) throw new Error("Poseidon wrong sboxPower=".concat(s));
            const u = BigInt(s);
            let I = e => ua(t, e, u);
            return 3 === s ? I = e => t.mul(t.sqrN(e), e) : 5 === s && (I = e => t.mul(t.sqrN(t.sqrN(e)), e)), Object.freeze({
                ...e,
                rounds: A,
                sboxFn: I,
                roundConstants: c,
                mds: g
            })
        }

        function pa(e, t) {
            if ("number" !== typeof t) throw new Error("poseidonSplitConstants: wrong t");
            if (!Array.isArray(e) || e.length % t) throw new Error("poseidonSplitConstants: wrong rc");
            const n = [];
            let r = [];
            for (let a = 0; a < e.length; a++) r.push(e[a]), r.length === t && (n.push(r), r = []);
            return n
        }

        function ma(e) {
            const t = ha(e),
                {
                    Fp: n,
                    mds: r,
                    roundConstants: a,
                    rounds: i,
                    roundsPartial: o,
                    sboxFn: s,
                    t: l
                } = t,
                g = t.roundsFull / 2,
                A = t.reversePartialPowIdx ? l - 1 : 0,
                c = (e, t, i) => (e = e.map(((e, t) => n.add(e, a[i][t]))), t ? e = e.map((e => s(e))) : e[A] = s(e[A]), e = r.map((t => t.reduce(((t, r, a) => n.add(t, n.mulN(r, e[a]))), n.ZERO))), e),
                u = function(e) {
                    if (!Array.isArray(e) || e.length !== l) throw new Error("Poseidon: wrong values (expected array of bigints with length ".concat(l, ")"));
                    e = e.map((e => {
                        if ("bigint" !== typeof e) throw new Error("Poseidon: wrong value=".concat(e, " (").concat(typeof e, ")"));
                        return n.create(e)
                    }));
                    let t = 0;
                    for (let n = 0; n < g; n++) e = c(e, !0, t++);
                    for (let n = 0; n < o; n++) e = c(e, !1, t++);
                    for (let n = 0; n < g; n++) e = c(e, !0, t++);
                    if (t !== i) throw new Error("Poseidon: wrong number of rounds: last round=".concat(t, ", total=").concat(i));
                    return e
                };
            return u.roundConstants = a, u
        }
        const ya = BigInt(0),
            wa = BigInt(1);

        function ba(e) {
            return ca(e.Fp), or(e, {
                n: "bigint",
                h: "bigint",
                Gx: "field",
                Gy: "field"
            }, {
                nBitLength: "isSafeInteger",
                nByteLength: "isSafeInteger"
            }), Object.freeze({
                ...Ia(e.n, e.nBitLength),
                ...e,
                p: e.Fp.ORDER
            })
        }
        const {
            bytesToNumberBE: va,
            hexToBytes: Ea
        } = e, ka = {
            Err: class extends Error {
                constructor() {
                    super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
                }
            },
            _parseInt(e) {
                const {
                    Err: t
                } = ka;
                if (e.length < 2 || 2 !== e[0]) throw new t("Invalid signature integer tag");
                const n = e[1],
                    r = e.subarray(2, n + 2);
                if (!n || r.length !== n) throw new t("Invalid signature integer: wrong length");
                if (128 & r[0]) throw new t("Invalid signature integer: negative");
                if (0 === r[0] && !(128 & r[1])) throw new t("Invalid signature integer: unnecessary leading zero");
                return {
                    d: va(r),
                    l: e.subarray(n + 2)
                }
            },
            toSig(e) {
                const {
                    Err: t
                } = ka, n = "string" === typeof e ? Ea(e) : e;
                if (!Un(n)) throw new Error("ui8a expected");
                let r = n.length;
                if (r < 2 || 48 != n[0]) throw new t("Invalid signature tag");
                if (n[1] !== r - 2) throw new t("Invalid signature: incorrect length");
                const {
                    d: a,
                    l: i
                } = ka._parseInt(n.subarray(2)), {
                    d: o,
                    l: s
                } = ka._parseInt(i);
                if (s.length) throw new t("Invalid signature: left bytes after parsing");
                return {
                    r: a,
                    s: o
                }
            },
            hexFromSig(e) {
                const t = e => 8 & Number.parseInt(e[0], 16) ? "00" + e : e,
                    n = e => {
                        const t = e.toString(16);
                        return 1 & t.length ? "0".concat(t) : t
                    },
                    r = t(n(e.s)),
                    a = t(n(e.r)),
                    i = r.length / 2,
                    o = a.length / 2,
                    s = n(i),
                    l = n(o);
                return "30".concat(n(o + i + 4), "02").concat(l).concat(a, "02").concat(s).concat(r)
            }
        }, Sa = BigInt(0), xa = BigInt(1), Na = BigInt(2), Ba = BigInt(3), Da = BigInt(4);

        function Ma(e) {
            const t = function(e) {
                    const t = ba(e);
                    or(t, {
                        a: "field",
                        b: "field"
                    }, {
                        allowedPrivateKeyLengths: "array",
                        wrapPrivateKey: "boolean",
                        isTorsionFree: "function",
                        clearCofactor: "function",
                        allowInfinityPoint: "boolean",
                        fromBytes: "function",
                        toBytes: "function"
                    });
                    const {
                        endo: n,
                        Fp: r,
                        a: a
                    } = t;
                    if (n) {
                        if (!r.eql(a, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                        if ("object" !== typeof n || "bigint" !== typeof n.beta || "function" !== typeof n.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
                    }
                    return Object.freeze({
                        ...t
                    })
                }(e),
                {
                    Fp: n
                } = t,
                r = t.toBytes || ((e, t, r) => {
                    const a = t.toAffine();
                    return er(Uint8Array.from([4]), n.toBytes(a.x), n.toBytes(a.y))
                }),
                a = t.fromBytes || (e => {
                    const t = e.subarray(1);
                    return {
                        x: n.fromBytes(t.subarray(0, n.BYTES)),
                        y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES))
                    }
                });

            function i(e) {
                const {
                    a: r,
                    b: a
                } = t, i = n.sqr(e), o = n.mul(i, e);
                return n.add(n.add(o, n.mul(e, r)), a)
            }
            if (!n.eql(n.sqr(t.Gy), i(t.Gx))) throw new Error("bad generator point: equation left != right");

            function o(e) {
                return "bigint" === typeof e && Sa < e && e < t.n
            }

            function s(e) {
                if (!o(e)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
            }

            function l(e) {
                const {
                    allowedPrivateKeyLengths: n,
                    nByteLength: r,
                    wrapPrivateKey: a,
                    n: i
                } = t;
                if (n && "bigint" !== typeof e) {
                    if (Un(e) && (e = Zn(e)), "string" !== typeof e || !n.includes(e.length)) throw new Error("Invalid key");
                    e = e.padStart(2 * r, "0")
                }
                let o;
                try {
                    o = "bigint" === typeof e ? e : Vn($n("private key", e, r))
                } catch (l) {
                    throw new Error("private key must be ".concat(r, " bytes, hex or bigint, not ").concat(typeof e))
                }
                return a && (o = oa(o, i)), s(o), o
            }
            const g = new Map;

            function A(e) {
                if (!(e instanceof c)) throw new Error("ProjectivePoint expected")
            }
            class c {
                constructor(e, t, r) {
                    if (this.px = e, this.py = t, this.pz = r, null == e || !n.isValid(e)) throw new Error("x required");
                    if (null == t || !n.isValid(t)) throw new Error("y required");
                    if (null == r || !n.isValid(r)) throw new Error("z required")
                }
                static fromAffine(e) {
                    const {
                        x: t,
                        y: r
                    } = e || {};
                    if (!e || !n.isValid(t) || !n.isValid(r)) throw new Error("invalid affine point");
                    if (e instanceof c) throw new Error("projective point not allowed");
                    const a = e => n.eql(e, n.ZERO);
                    return a(t) && a(r) ? c.ZERO : new c(t, r, n.ONE)
                }
                get x() {
                    return this.toAffine().x
                }
                get y() {
                    return this.toAffine().y
                }
                static normalizeZ(e) {
                    const t = n.invertBatch(e.map((e => e.pz)));
                    return e.map(((e, n) => e.toAffine(t[n]))).map(c.fromAffine)
                }
                static fromHex(e) {
                    const t = c.fromAffine(a($n("pointHex", e)));
                    return t.assertValidity(), t
                }
                static fromPrivateKey(e) {
                    return c.BASE.multiply(l(e))
                }
                _setWindowSize(e) {
                    this._WINDOW_SIZE = e, g.delete(this)
                }
                assertValidity() {
                    if (this.is0()) {
                        if (t.allowInfinityPoint && !n.is0(this.py)) return;
                        throw new Error("bad point: ZERO")
                    }
                    const {
                        x: e,
                        y: r
                    } = this.toAffine();
                    if (!n.isValid(e) || !n.isValid(r)) throw new Error("bad point: x or y not FE");
                    const a = n.sqr(r),
                        o = i(e);
                    if (!n.eql(a, o)) throw new Error("bad point: equation left != right");
                    if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
                }
                hasEvenY() {
                    const {
                        y: e
                    } = this.toAffine();
                    if (n.isOdd) return !n.isOdd(e);
                    throw new Error("Field doesn't support isOdd")
                }
                equals(e) {
                    A(e);
                    const {
                        px: t,
                        py: r,
                        pz: a
                    } = this, {
                        px: i,
                        py: o,
                        pz: s
                    } = e, l = n.eql(n.mul(t, s), n.mul(i, a)), g = n.eql(n.mul(r, s), n.mul(o, a));
                    return l && g
                }
                negate() {
                    return new c(this.px, n.neg(this.py), this.pz)
                }
                double() {
                    const {
                        a: e,
                        b: r
                    } = t, a = n.mul(r, Ba), {
                        px: i,
                        py: o,
                        pz: s
                    } = this;
                    let l = n.ZERO,
                        g = n.ZERO,
                        A = n.ZERO,
                        u = n.mul(i, i),
                        I = n.mul(o, o),
                        C = n.mul(s, s),
                        d = n.mul(i, o);
                    return d = n.add(d, d), A = n.mul(i, s), A = n.add(A, A), l = n.mul(e, A), g = n.mul(a, C), g = n.add(l, g), l = n.sub(I, g), g = n.add(I, g), g = n.mul(l, g), l = n.mul(d, l), A = n.mul(a, A), C = n.mul(e, C), d = n.sub(u, C), d = n.mul(e, d), d = n.add(d, A), A = n.add(u, u), u = n.add(A, u), u = n.add(u, C), u = n.mul(u, d), g = n.add(g, u), C = n.mul(o, s), C = n.add(C, C), u = n.mul(C, d), l = n.sub(l, u), A = n.mul(C, I), A = n.add(A, A), A = n.add(A, A), new c(l, g, A)
                }
                add(e) {
                    A(e);
                    const {
                        px: r,
                        py: a,
                        pz: i
                    } = this, {
                        px: o,
                        py: s,
                        pz: l
                    } = e;
                    let g = n.ZERO,
                        u = n.ZERO,
                        I = n.ZERO;
                    const C = t.a,
                        d = n.mul(t.b, Ba);
                    let f = n.mul(r, o),
                        h = n.mul(a, s),
                        p = n.mul(i, l),
                        m = n.add(r, a),
                        y = n.add(o, s);
                    m = n.mul(m, y), y = n.add(f, h), m = n.sub(m, y), y = n.add(r, i);
                    let w = n.add(o, l);
                    return y = n.mul(y, w), w = n.add(f, p), y = n.sub(y, w), w = n.add(a, i), g = n.add(s, l), w = n.mul(w, g), g = n.add(h, p), w = n.sub(w, g), I = n.mul(C, y), g = n.mul(d, p), I = n.add(g, I), g = n.sub(h, I), I = n.add(h, I), u = n.mul(g, I), h = n.add(f, f), h = n.add(h, f), p = n.mul(C, p), y = n.mul(d, y), h = n.add(h, p), p = n.sub(f, p), p = n.mul(C, p), y = n.add(y, p), f = n.mul(h, y), u = n.add(u, f), f = n.mul(w, y), g = n.mul(m, g), g = n.sub(g, f), f = n.mul(m, h), I = n.mul(w, I), I = n.add(I, f), new c(g, u, I)
                }
                subtract(e) {
                    return this.add(e.negate())
                }
                is0() {
                    return this.equals(c.ZERO)
                }
                wNAF(e) {
                    return I.wNAFCached(this, g, e, (e => {
                        const t = n.invertBatch(e.map((e => e.pz)));
                        return e.map(((e, n) => e.toAffine(t[n]))).map(c.fromAffine)
                    }))
                }
                multiplyUnsafe(e) {
                    const r = c.ZERO;
                    if (e === Sa) return r;
                    if (s(e), e === xa) return this;
                    const {
                        endo: a
                    } = t;
                    if (!a) return I.unsafeLadder(this, e);
                    let {
                        k1neg: i,
                        k1: o,
                        k2neg: l,
                        k2: g
                    } = a.splitScalar(e), A = r, u = r, C = this;
                    for (; o > Sa || g > Sa;) o & xa && (A = A.add(C)), g & xa && (u = u.add(C)), C = C.double(), o >>= xa, g >>= xa;
                    return i && (A = A.negate()), l && (u = u.negate()), u = new c(n.mul(u.px, a.beta), u.py, u.pz), A.add(u)
                }
                multiply(e) {
                    s(e);
                    let r, a, i = e;
                    const {
                        endo: o
                    } = t;
                    if (o) {
                        const {
                            k1neg: e,
                            k1: t,
                            k2neg: s,
                            k2: l
                        } = o.splitScalar(i);
                        let {
                            p: g,
                            f: A
                        } = this.wNAF(t), {
                            p: u,
                            f: C
                        } = this.wNAF(l);
                        g = I.constTimeNegate(e, g), u = I.constTimeNegate(s, u), u = new c(n.mul(u.px, o.beta), u.py, u.pz), r = g.add(u), a = A.add(C)
                    } else {
                        const {
                            p: e,
                            f: t
                        } = this.wNAF(i);
                        r = e, a = t
                    }
                    return c.normalizeZ([r, a])[0]
                }
                multiplyAndAddUnsafe(e, t, n) {
                    const r = c.BASE,
                        a = (e, t) => t !== Sa && t !== xa && e.equals(r) ? e.multiply(t) : e.multiplyUnsafe(t),
                        i = a(this, t).add(a(e, n));
                    return i.is0() ? void 0 : i
                }
                toAffine(e) {
                    const {
                        px: t,
                        py: r,
                        pz: a
                    } = this, i = this.is0();
                    null == e && (e = i ? n.ONE : n.inv(a));
                    const o = n.mul(t, e),
                        s = n.mul(r, e),
                        l = n.mul(a, e);
                    if (i) return {
                        x: n.ZERO,
                        y: n.ZERO
                    };
                    if (!n.eql(l, n.ONE)) throw new Error("invZ was invalid");
                    return {
                        x: o,
                        y: s
                    }
                }
                isTorsionFree() {
                    const {
                        h: e,
                        isTorsionFree: n
                    } = t;
                    if (e === xa) return !0;
                    if (n) return n(c, this);
                    throw new Error("isTorsionFree() has not been declared for the elliptic curve")
                }
                clearCofactor() {
                    const {
                        h: e,
                        clearCofactor: n
                    } = t;
                    return e === xa ? this : n ? n(c, this) : this.multiplyUnsafe(t.h)
                }
                toRawBytes() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this.assertValidity(), r(c, this, e)
                }
                toHex() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return Zn(this.toRawBytes(e))
                }
            }
            c.BASE = new c(t.Gx, t.Gy, n.ONE), c.ZERO = new c(n.ZERO, n.ONE, n.ZERO);
            const u = t.nBitLength,
                I = function(e, t) {
                    const n = (e, t) => {
                            const n = t.negate();
                            return e ? n : t
                        },
                        r = e => ({
                            windows: Math.ceil(t / e) + 1,
                            windowSize: 2 ** (e - 1)
                        });
                    return {
                        constTimeNegate: n,
                        unsafeLadder(t, n) {
                            let r = e.ZERO,
                                a = t;
                            for (; n > ya;) n & wa && (r = r.add(a)), a = a.double(), n >>= wa;
                            return r
                        },
                        precomputeWindow(e, t) {
                            const {
                                windows: n,
                                windowSize: a
                            } = r(t), i = [];
                            let o = e,
                                s = o;
                            for (let r = 0; r < n; r++) {
                                s = o, i.push(s);
                                for (let e = 1; e < a; e++) s = s.add(o), i.push(s);
                                o = s.double()
                            }
                            return i
                        },
                        wNAF(t, a, i) {
                            const {
                                windows: o,
                                windowSize: s
                            } = r(t);
                            let l = e.ZERO,
                                g = e.BASE;
                            const A = BigInt(2 ** t - 1),
                                c = 2 ** t,
                                u = BigInt(t);
                            for (let e = 0; e < o; e++) {
                                const t = e * s;
                                let r = Number(i & A);
                                i >>= u, r > s && (r -= c, i += wa);
                                const o = t,
                                    I = t + Math.abs(r) - 1,
                                    C = e % 2 !== 0,
                                    d = r < 0;
                                0 === r ? g = g.add(n(C, a[o])) : l = l.add(n(d, a[I]))
                            }
                            return {
                                p: l,
                                f: g
                            }
                        },
                        wNAFCached(e, t, n, r) {
                            const a = e._WINDOW_SIZE || 1;
                            let i = t.get(e);
                            return i || (i = this.precomputeWindow(e, a), 1 !== a && t.set(e, r(i))), this.wNAF(a, i, n)
                        }
                    }
                }(c, t.endo ? Math.ceil(u / 2) : u);
            return {
                CURVE: t,
                ProjectivePoint: c,
                normPrivateKeyToScalar: l,
                weierstrassEquation: i,
                isWithinCurveOrder: o
            }
        }

        function Ra(e) {
            const t = function(e) {
                    const t = ba(e);
                    return or(t, {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function"
                    }, {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean"
                    }), Object.freeze({
                        lowS: !0,
                        ...t
                    })
                }(e),
                {
                    Fp: n,
                    n: r
                } = t,
                a = n.BYTES + 1,
                i = 2 * n.BYTES + 1;

            function o(e) {
                return oa(e, r)
            }

            function s(e) {
                return la(e, r)
            }
            const {
                ProjectivePoint: l,
                normPrivateKeyToScalar: g,
                weierstrassEquation: A,
                isWithinCurveOrder: c
            } = Ma({
                ...t,
                toBytes(e, t, r) {
                    const a = t.toAffine(),
                        i = n.toBytes(a.x),
                        o = er;
                    return r ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i) : o(Uint8Array.from([4]), i, n.toBytes(a.y))
                },
                fromBytes(e) {
                    const t = e.length,
                        r = e[0],
                        o = e.subarray(1);
                    if (t !== a || 2 !== r && 3 !== r) {
                        if (t === i && 4 === r) {
                            return {
                                x: n.fromBytes(o.subarray(0, n.BYTES)),
                                y: n.fromBytes(o.subarray(n.BYTES, 2 * n.BYTES))
                            }
                        }
                        throw new Error("Point of length ".concat(t, " was invalid. Expected ").concat(a, " compressed bytes or ").concat(i, " uncompressed bytes"))
                    } {
                        const e = Vn(o);
                        if (! function(e) {
                                return Sa < e && e < n.ORDER
                            }(e)) throw new Error("Point is not on curve");
                        const t = A(e);
                        let a = n.sqrt(t);
                        return 1 === (1 & r) !== ((a & xa) === xa) && (a = n.neg(a)), {
                            x: e,
                            y: a
                        }
                    }
                }
            }), u = e => Zn(Kn(e, t.nByteLength));

            function I(e) {
                return e > r >> xa
            }
            const C = (e, t, n) => Vn(e.slice(t, n));
            class d {
                constructor(e, t, n) {
                    this.r = e, this.s = t, this.recovery = n, this.assertValidity()
                }
                static fromCompact(e) {
                    const n = t.nByteLength;
                    return e = $n("compactSignature", e, 2 * n), new d(C(e, 0, n), C(e, n, 2 * n))
                }
                static fromDER(e) {
                    const {
                        r: t,
                        s: n
                    } = ka.toSig($n("DER", e));
                    return new d(t, n)
                }
                assertValidity() {
                    if (!c(this.r)) throw new Error("r must be 0 < r < CURVE.n");
                    if (!c(this.s)) throw new Error("s must be 0 < s < CURVE.n")
                }
                addRecoveryBit(e) {
                    return new d(this.r, this.s, e)
                }
                recoverPublicKey(e) {
                    const {
                        r: r,
                        s: a,
                        recovery: i
                    } = this, g = m($n("msgHash", e));
                    if (null == i || ![0, 1, 2, 3].includes(i)) throw new Error("recovery id invalid");
                    const A = 2 === i || 3 === i ? r + t.n : r;
                    if (A >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
                    const c = 0 === (1 & i) ? "02" : "03",
                        I = l.fromHex(c + u(A)),
                        C = s(A),
                        d = o(-g * C),
                        f = o(a * C),
                        h = l.BASE.multiplyAndAddUnsafe(I, d, f);
                    if (!h) throw new Error("point at infinify");
                    return h.assertValidity(), h
                }
                hasHighS() {
                    return I(this.s)
                }
                normalizeS() {
                    return this.hasHighS() ? new d(this.r, o(-this.s), this.recovery) : this
                }
                toDERRawBytes() {
                    return Hn(this.toDERHex())
                }
                toDERHex() {
                    return ka.hexFromSig({
                        r: this.r,
                        s: this.s
                    })
                }
                toCompactRawBytes() {
                    return Hn(this.toCompactHex())
                }
                toCompactHex() {
                    return u(this.r) + u(this.s)
                }
            }
            const f = {
                isValidPrivateKey(e) {
                    try {
                        return g(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                normPrivateKeyToScalar: g,
                randomPrivateKey: () => {
                    const e = fa(t.n);
                    return function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        const r = e.length,
                            a = da(t),
                            i = fa(t);
                        if (r < 16 || r < i || r > 1024) throw new Error("expected ".concat(i, "-1024 bytes of input, got ").concat(r));
                        const o = oa(n ? Vn(e) : Jn(e), t - ea) + ea;
                        return n ? Xn(o, a) : Kn(o, a)
                    }(t.randomBytes(e), t.n)
                },
                precompute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.BASE;
                    return t._setWindowSize(e), t.multiply(BigInt(3)), t
                }
            };

            function h(e) {
                const t = Un(e),
                    n = "string" === typeof e,
                    r = (t || n) && e.length;
                return t ? r === a || r === i : n ? r === 2 * a || r === 2 * i : e instanceof l
            }
            const p = t.bits2int || function(e) {
                    const n = Vn(e),
                        r = 8 * e.length - t.nBitLength;
                    return r > 0 ? n >> BigInt(r) : n
                },
                m = t.bits2int_modN || function(e) {
                    return o(p(e))
                },
                y = tr(t.nBitLength);

            function w(e) {
                if ("bigint" !== typeof e) throw new Error("bigint expected");
                if (!(Sa <= e && e < y)) throw new Error("bigint expected < 2^".concat(t.nBitLength));
                return Kn(e, t.nByteLength)
            }

            function b(e, r) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
                if (["recovered", "canonical"].some((e => e in a))) throw new Error("sign() legacy options not supported");
                const {
                    hash: i,
                    randomBytes: A
                } = t;
                let {
                    lowS: u,
                    prehash: C,
                    extraEntropy: f
                } = a;
                null == u && (u = !0), e = $n("msgHash", e), C && (e = $n("prehashed msgHash", i(e)));
                const h = m(e),
                    y = g(r),
                    b = [w(y), w(h)];
                if (null != f) {
                    const e = !0 === f ? A(n.BYTES) : f;
                    b.push($n("extraEntropy", e))
                }
                const E = er(...b),
                    k = h;
                return {
                    seed: E,
                    k2sig: function(e) {
                        const t = p(e);
                        if (!c(t)) return;
                        const n = s(t),
                            r = l.BASE.multiply(t).toAffine(),
                            a = o(r.x);
                        if (a === Sa) return;
                        const i = o(n * o(k + a * y));
                        if (i === Sa) return;
                        let g = (r.x === a ? 0 : 2) | Number(r.y & xa),
                            A = i;
                        return u && I(i) && (A = function(e) {
                            return I(e) ? o(-e) : e
                        }(i), g ^= 1), new d(a, A, g)
                    }
                }
            }
            const v = {
                    lowS: t.lowS,
                    prehash: !1
                },
                E = {
                    lowS: t.lowS,
                    prehash: !1
                };
            return l.BASE._setWindowSize(8), {
                CURVE: t,
                getPublicKey: function(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return l.fromPrivateKey(e).toRawBytes(t)
                },
                getSharedSecret: function(e, t) {
                    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (h(e)) throw new Error("first arg must be private key");
                    if (!h(t)) throw new Error("second arg must be public key");
                    return l.fromHex(t).multiply(g(e)).toRawBytes(n)
                },
                sign: function(e, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
                    const {
                        seed: a,
                        k2sig: i
                    } = b(e, n, r), o = t;
                    return ar(o.hash.outputLen, o.nByteLength, o.hmac)(a, i)
                },
                verify: function(e, n, r) {
                    var a;
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E;
                    const g = e;
                    if (n = $n("msgHash", n), r = $n("publicKey", r), "strict" in i) throw new Error("options.strict was renamed to lowS");
                    const {
                        lowS: A,
                        prehash: c
                    } = i;
                    let u, I;
                    try {
                        if ("string" === typeof g || Un(g)) try {
                            u = d.fromDER(g)
                        } catch (v) {
                            if (!(v instanceof ka.Err)) throw v;
                            u = d.fromCompact(g)
                        } else {
                            if ("object" !== typeof g || "bigint" !== typeof g.r || "bigint" !== typeof g.s) throw new Error("PARSE");
                            {
                                const {
                                    r: e,
                                    s: t
                                } = g;
                                u = new d(e, t)
                            }
                        }
                        I = l.fromHex(r)
                    } catch (k) {
                        if ("PARSE" === k.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
                        return !1
                    }
                    if (A && u.hasHighS()) return !1;
                    c && (n = t.hash(n));
                    const {
                        r: C,
                        s: f
                    } = u, h = m(n), p = s(f), y = o(h * p), w = o(C * p), b = null === (a = l.BASE.multiplyAndAddUnsafe(I, y, w)) || void 0 === a ? void 0 : a.toAffine();
                    return !!b && o(b.x) === C
                },
                ProjectivePoint: l,
                Signature: d,
                utils: f
            }
        }

        function Ta(e, t) {
            const n = e.ORDER;
            let r = Sa;
            for (let C = n - xa; C % Na === Sa; C /= Na) r += xa;
            const a = r,
                i = Na << a - xa - xa,
                o = i * Na,
                s = (n - xa) / o,
                l = (s - xa) / Na,
                g = o - xa,
                A = i,
                c = e.pow(t, s),
                u = e.pow(t, (s + xa) / Na);
            let I = (t, n) => {
                let r = c,
                    i = e.pow(n, g),
                    o = e.sqr(i);
                o = e.mul(o, n);
                let s = e.mul(t, o);
                s = e.pow(s, l), s = e.mul(s, i), i = e.mul(s, n), o = e.mul(s, t);
                let I = e.mul(o, i);
                s = e.pow(I, A);
                let C = e.eql(s, e.ONE);
                i = e.mul(o, u), s = e.mul(I, r), o = e.cmov(i, o, C), I = e.cmov(s, I, C);
                for (let l = a; l > xa; l--) {
                    let t = l - Na;
                    t = Na << t - xa;
                    let n = e.pow(I, t);
                    const a = e.eql(n, e.ONE);
                    i = e.mul(o, r), r = e.mul(r, r), n = e.mul(I, r), o = e.cmov(i, o, a), I = e.cmov(n, I, a)
                }
                return {
                    isValid: C,
                    value: o
                }
            };
            if (e.ORDER % Da === Ba) {
                const n = (e.ORDER - Ba) / Da,
                    r = e.sqrt(e.neg(t));
                I = (t, a) => {
                    let i = e.sqr(a);
                    const o = e.mul(t, a);
                    i = e.mul(i, o);
                    let s = e.pow(i, n);
                    s = e.mul(s, o);
                    const l = e.mul(s, r),
                        g = e.mul(e.sqr(s), a),
                        A = e.eql(g, t);
                    return {
                        isValid: A,
                        value: e.cmov(l, s, A)
                    }
                }
            }
            return I
        }

        function Oa(e, t) {
            if (ca(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
            const n = Ta(e, t.Z);
            if (!e.isOdd) throw new Error("Fp.isOdd is not implemented!");
            return r => {
                let a, i, o, s, l, g, A, c;
                a = e.sqr(r), a = e.mul(a, t.Z), i = e.sqr(a), i = e.add(i, a), o = e.add(i, e.ONE), o = e.mul(o, t.B), s = e.cmov(t.Z, e.neg(i), !e.eql(i, e.ZERO)), s = e.mul(s, t.A), i = e.sqr(o), g = e.sqr(s), l = e.mul(g, t.A), i = e.add(i, l), i = e.mul(i, o), g = e.mul(g, s), l = e.mul(g, t.B), i = e.add(i, l), A = e.mul(a, o);
                const {
                    isValid: u,
                    value: I
                } = n(i, g);
                c = e.mul(a, r), c = e.mul(c, I), A = e.cmov(A, o, u), c = e.cmov(c, I, u);
                const C = e.isOdd(r) === e.isOdd(c);
                return c = e.cmov(e.neg(c), c, C), A = e.div(A, s), {
                    x: A,
                    y: c
                }
            }
        }
        class ja extends Sr {
            constructor(e, t) {
                super(), this.finished = !1, this.destroyed = !1, gr(e);
                const n = kr(t);
                if (this.iHash = e.create(), "function" !== typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
                this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                const r = this.blockLen,
                    a = new Uint8Array(r);
                a.set(n.length > r ? e.create().update(n).digest() : n);
                for (let i = 0; i < a.length; i++) a[i] ^= 54;
                this.iHash.update(a), this.oHash = e.create();
                for (let i = 0; i < a.length; i++) a[i] ^= 106;
                this.oHash.update(a), a.fill(0)
            }
            update(e) {
                return Ar(this), this.iHash.update(e), this
            }
            digestInto(e) {
                Ar(this), lr(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
            }
            digest() {
                const e = new Uint8Array(this.oHash.outputLen);
                return this.digestInto(e), e
            }
            _cloneInto(e) {
                e || (e = Object.create(Object.getPrototypeOf(this), {}));
                const {
                    oHash: t,
                    iHash: n,
                    finished: r,
                    destroyed: a,
                    blockLen: i,
                    outputLen: o
                } = this;
                return e.finished = r, e.destroyed = a, e.blockLen = i, e.outputLen = o, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e
            }
            destroy() {
                this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
            }
        }
        const La = (e, t, n) => new ja(e, t).update(n).digest();

        function _a(e) {
            return {
                hash: e,
                hmac: function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return La(e, t, function() {
                        let e = 0;
                        for (let n = 0; n < arguments.length; n++) {
                            const t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                            if (!wr(t)) throw new Error("Uint8Array expected");
                            e += t.length
                        }
                        const t = new Uint8Array(e);
                        for (let n = 0, r = 0; n < arguments.length; n++) {
                            const e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                            t.set(e, r), r += e.length
                        }
                        return t
                    }(...r))
                },
                randomBytes: Nr
            }
        }
        La.create = (e, t) => new ja(e, t);
        const za = BigInt("3618502788666131213697322783095070105526743751716087489154079457884512865583"),
            Qa = BigInt("0x800000000000000000000000000000000000000000000000000000000000000");

        function Pa(e) {
            for (; 0 === e[0];) e = e.subarray(1);
            const t = 8 * e.length - 252,
                n = Vn(e);
            return t > 0 ? n >> BigInt(t) : n
        }

        function Ua(e) {
            return "string" === typeof e && 1 & (e = ri(e)).length && (e = "0" + e), Hn(e)
        }
        const Fa = Ra({
                a: BigInt(1),
                b: BigInt("3141592653589793238462643383279502884197169399375105820974944592307816406665"),
                Fp: Ca(BigInt("0x800000000000011000000000000000000000000000000000000000000000001")),
                n: za,
                nBitLength: 252,
                Gx: BigInt("874739451078007766457464989774322083649278607533249481151382481072868806602"),
                Gy: BigInt("152666792071518830868575557812948353041420400780739481342941381225525861407"),
                h: BigInt(1),
                lowS: !1,
                ..._a(qr),
                bits2int: Pa,
                bits2int_modN: e => {
                    const t = Vn(e).toString(16);
                    return 63 === t.length && (e = Ua(t + "0")), oa(Pa(e), za)
                }
            }),
            Za = Fa;

        function Ya(e) {
            return $n("", "string" === typeof e ? Ua(e) : e)
        }

        function Wa(e) {
            return Zn(Ya(e)).padStart(64, "0")
        }

        function Ga(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Fa.getPublicKey(Wa(e), t)
        }

        function Ha(e, t) {
            return Fa.getSharedSecret(Wa(e), t)
        }

        function Va(e) {
            const {
                r: t,
                s: n
            } = e;
            if (t < 0n || t >= Qa) throw new Error("Signature.r should be [1, ".concat(Qa, ")"));
            const r = la(n, za);
            if (r < 0n || r >= Qa) throw new Error("inv(Signature.s) should be [1, ".concat(Qa, ")"))
        }

        function Ja(e) {
            const t = Ya(e);
            if (Vn(t) >= Qa) throw new Error("msgHash should be [0, ".concat(Qa, ")"));
            return t
        }

        function Ka(e, t, n) {
            const r = Fa.sign(Ja(e), Wa(t), n);
            return Va(r), r
        }

        function Xa(e, t, n) {
            if (!(e instanceof ei)) {
                const t = Ya(e);
                try {
                    e = ei.fromDER(t)
                } catch (r) {
                    if (!(r instanceof ka.Err)) throw r;
                    e = ei.fromCompact(t)
                }
            }
            return Va(e), Fa.verify(e, Ja(t), Ya(n))
        }
        const {
            CURVE: qa,
            ProjectivePoint: $a,
            Signature: ei,
            utils: ti
        } = Fa;

        function ni(e) {
            const t = Zn(e.subarray(1)).replace(/^0+/gm, "");
            return "0x".concat(t)
        }

        function ri(e) {
            return e.replace(/^0x/i, "")
        }

        function ai(e) {
            const t = Ya(e),
                n = 2n ** 256n,
                r = n - oa(n, za);
            for (let a = 0;; a++) {
                const e = mi(er(t, qn(BigInt(a))));
                if (e < r) return oa(e, za).toString(16);
                if (1e5 === a) throw new Error("grindKey is broken: tried 100k vals")
            }
        }

        function ii(e) {
            return ni(Ga(e, !0))
        }

        function oi(e) {
            if (130 !== (e = ri(e)).length) throw new Error("Wrong ethereum signature");
            return ai(e.substring(0, 64))
        }
        const si = 2n ** 31n - 1n,
            li = e => Number(e & si);

        function gi(e, t, n, r) {
            const a = li(mi(e)),
                i = li(mi(t)),
                o = Yn(ri(n));
            return "m/2645'/".concat(a, "'/").concat(i, "'/").concat(li(o), "'/").concat(li(o >> 31n), "'/").concat(r)
        }
        const Ai = [new $a(2089986280348253421170679821480865132823066470938446095505822317253594081284n, 1713931329540660377023406109199410414810705867260802078187082345529207694986n, 1n), new $a(996781205833008774514500082376783249102396023663454813447423147977397232763n, 1668503676786377725805489344771023921079126552019160156920634619255970485781n, 1n), new $a(2251563274489750535117886426533222435294046428347329203627021249169616184184n, 1798716007562728905295480679789526322175868328062420237419143593021674992973n, 1n), new $a(2138414695194151160943305727036575959195309218611738193261179310511854807447n, 113410276730064486255102093846540133784865286929052426931474106396135072156n, 1n), new $a(2379962749567351885752724891227938183011949129833673362440656643086021394946n, 776496453633298175483985398648758586525933812536653089401905292063708816422n, 1n)];

        function ci(e, t) {
            const n = [];
            let r = e;
            for (let a = 0; a < 248; a++) n.push(r), r = r.double();
            r = t;
            for (let a = 0; a < 4; a++) n.push(r), r = r.double();
            return n
        }
        const ui = ci(Ai[1], Ai[2]),
            Ii = ci(Ai[3], Ai[4]);

        function Ci(e, t, n) {
            let r = function(e) {
                let t;
                if ("bigint" === typeof e) t = e;
                else if ("number" === typeof e) {
                    if (!Number.isSafeInteger(e)) throw new Error("Invalid pedersenArg: ".concat(e));
                    t = BigInt(e)
                } else t = Vn(Ya(e));
                if (!(0n <= t && t < Fa.CURVE.Fp.ORDER)) throw new Error("PedersenArg should be 0 <= value < CURVE.P: ".concat(t));
                return t
            }(t);
            for (let a = 0; a < 252; a++) {
                const t = n[a];
                if (t.equals(e)) throw new Error("Same point");
                0n !== (1n & r) && (e = e.add(t)), r >>= 1n
            }
            return e
        }

        function di(e, t) {
            let n = Ai[0];
            return n = Ci(n, e, ui), n = Ci(n, t, Ii), ni(n.toRawBytes(!0))
        }
        const fi = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : di;
                return [0, ...e, e.length].reduce(((e, n) => t(e, n)))
            },
            hi = tr(250),
            pi = e => Vn(Yr(e)) & hi,
            mi = e => Vn(qr(e)),
            yi = Ca(BigInt("3618502788666131213697322783095070105623107215331596699973092056135872020481"));

        function wi(e, t, n) {
            const r = e.fromBytes(qr(Er("".concat(t).concat(n))));
            return e.create(r)
        }

        function bi(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            const a = [],
                i = [];
            for (let o = 0; o < n; o++) a.push(wi(e, "".concat(t, "x"), r * n + o)), i.push(wi(e, "".concat(t, "y"), r * n + o));
            if (new Set([...a, ...i]).size !== 2 * n) throw new Error("X and Y values are not distinct");
            return a.map((t => i.map((n => e.inv(e.sub(t, n))))))
        }
        const vi = [
            [3, 1, 1],
            [1, -1, 1],
            [1, 1, -2]
        ].map((e => e.map(BigInt)));

        function Ei(e, t) {
            if (ca(e.Fp), !Number.isSafeInteger(e.rate) || !Number.isSafeInteger(e.capacity)) throw new Error("Wrong poseidon opts: ".concat(e));
            const n = e.rate + e.capacity,
                r = e.roundsFull + e.roundsPartial,
                a = [];
            for (let o = 0; o < r; o++) {
                const t = [];
                for (let r = 0; r < n; r++) t.push(wi(e.Fp, "Hades", n * o + r));
                a.push(t)
            }
            const i = ma({
                ...e,
                t: n,
                sboxPower: 3,
                reversePartialPowIdx: !0,
                mds: t,
                roundConstants: a
            });
            return i.m = n, i.rate = e.rate, i.capacity = e.capacity, i
        }

        function ki(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            const n = e.rate + e.capacity;
            if (!Number.isSafeInteger(t)) throw new Error("Wrong mdsAttempt=".concat(t));
            return Ei(e, bi(e.Fp, "HadesMDS", n, t))
        }
        const Si = Ei({
            Fp: yi,
            rate: 2,
            capacity: 1,
            roundsFull: 8,
            roundsPartial: 83
        }, vi);

        function xi(e, t) {
            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Si)([e, t, 2n])[0]
        }

        function Ni(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Si;
            return qn(xi(Vn(e), Vn(t), n))
        }

        function Bi(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Si)([e, 0n, 1n])[0]
        }

        function Di(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Si;
            const {
                m: n,
                rate: r
            } = t;
            if (!Array.isArray(e)) throw new Error("bigint array expected in values");
            const a = Array.from(e);
            for (a.push(1n); a.length % r !== 0;) a.push(0n);
            let i = new Array(n).fill(0n);
            for (let o = 0; o < a.length; o += r) {
                for (let e = 0; e < r; e++) i[e] += a[o + e];
                i = t(i)
            }
            return i[0]
        }

        function Mi(e) {
            return Ri.test(e)
        }
        var Ri = /^-?[0-9]+$/;

        function Ti(e) {
            return Oi.test(e)
        }
        var Oi = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
        var ji = function(e) {
            return e.underflow = "underflow", e.overflow = "overflow", e.truncate_integer = "truncate_integer", e.truncate_float = "truncate_float", e
        }({});

        function Li(e) {
            if (! function(e, t) {
                    var n = parseFloat(e),
                        r = String(n),
                        a = _i(e),
                        i = _i(r);
                    if (a === i) return !0;
                    if (!0 === (null === t || void 0 === t ? void 0 : t.approx) && !Mi(e) && i.length >= 14 && a.startsWith(i.substring(0, 14))) return !0;
                    return !1
                }(e, {
                    approx: !1
                })) {
                if (Mi(e)) return ji.truncate_integer;
                var t = parseFloat(e);
                return isFinite(t) ? 0 === t ? ji.underflow : ji.truncate_float : ji.overflow
            }
        }

        function _i(e) {
            return e.replace(zi, "").replace(Pi, "").replace(Ui, "").replace(Qi, "")
        }
        var zi = /[eE][+-]?\d+$/,
            Qi = /^-?(0*)?/,
            Pi = /\./,
            Ui = /0+$/;

        function Fi(e) {
            return Fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Fi(e)
        }

        function Zi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Yi(r.key), r)
            }
        }

        function Yi(e) {
            var t = function(e, t) {
                if ("object" !== Fi(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Fi(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Fi(t) ? t : String(t)
        }
        var Wi = function() {
            function e(t) {
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), function(e, t, n) {
                        (t = Yi(t)) in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "isLosslessNumber", !0), !Ti(t)) throw new Error('Invalid number (value: "' + t + '")');
                this.value = t
            }
            var t, n, r;
            return t = e, (n = [{
                key: "valueOf",
                value: function() {
                    var e = Li(this.value);
                    if (void 0 === e || e === ji.truncate_float) return parseFloat(this.value);
                    if (Mi(this.value)) return BigInt(this.value);
                    throw new Error("Cannot safely convert to number: " + "the value '".concat(this.value, "' would ").concat(e, " and become ").concat(parseFloat(this.value)))
                }
            }, {
                key: "toString",
                value: function() {
                    return this.value
                }
            }]) && Zi(t.prototype, n), r && Zi(t, r), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function Gi(e) {
            return new Wi(e)
        }

        function Hi(e) {
            return Mi(e) ? BigInt(e) : parseFloat(e)
        }

        function Vi(e) {
            return Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Vi(e)
        }

        function Ji(e, t, n, r) {
            return Array.isArray(n) ? r.call(e, t, function(e, t) {
                for (var n = 0; n < e.length; n++) e[n] = Ji(e, n + "", e[n], t);
                return e
            }(n, r)) : n && "object" === Vi(n) && ! function(e) {
                return e && "object" === Fi(e) && !0 === e.isLosslessNumber || !1
            }(n) ? r.call(e, t, function(e, t) {
                return Object.keys(e).forEach((function(n) {
                    var r = Ji(e, n, e[n], t);
                    void 0 !== r ? e[n] = r : delete e[n]
                })), e
            }(n, r)) : r.call(e, t, n)
        }

        function Ki(e) {
            return Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ki(e)
        }

        function Xi(e) {
            return function(e) {
                if (Array.isArray(e)) return qi(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return qi(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qi(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function qi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function $i(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gi,
                r = 0,
                a = s();
            return function(e) {
                    if (void 0 === e) throw new SyntaxError("JSON value expected ".concat(b()))
                }(a),
                function() {
                    if (r < e.length) throw new SyntaxError("Expected end of input ".concat(b()))
                }(), t ? function(e, t) {
                    return Ji({
                        "": e
                    }, "", e, t)
                }(a, t) : a;

            function i() {
                if (e.charCodeAt(r) === oo) {
                    r++, g();
                    for (var t = {}, n = !0; r < e.length && e.charCodeAt(r) !== so;) {
                        n ? n = !1 : (c(), g());
                        var a = r,
                            i = A();
                        void 0 === i && d(), g(), u();
                        var o = s();
                        void 0 === o && m(), Object.prototype.hasOwnProperty.call(t, i) && !no(o, t[i]) && f(i, a + 1), t[i] = o
                    }
                    return e.charCodeAt(r) !== so && function() {
                        throw new SyntaxError("Quoted object key or end of object '}' expected ".concat(b()))
                    }(), r++, t
                }
            }

            function o() {
                if (e.charCodeAt(r) === lo) {
                    r++, g();
                    for (var t = [], n = !0; r < e.length && e.charCodeAt(r) !== go;) {
                        n ? n = !1 : c();
                        var a = s();
                        I(a), t.push(a)
                    }
                    return e.charCodeAt(r) !== go && function() {
                        throw new SyntaxError("Array item or end of array ']' expected ".concat(b()))
                    }(), r++, t
                }
            }

            function s() {
                var t, a, s, c, u, I;
                g();
                var d = null !== (t = null !== (a = null !== (s = null !== (c = null !== (u = null !== (I = A()) && void 0 !== I ? I : function() {
                    var t = r;
                    e.charCodeAt(r) === ho && (r++, C(t));
                    if (e.charCodeAt(r) === po) r++;
                    else if (a = e.charCodeAt(r), a >= mo && a <= yo)
                        for (r++; to(e.charCodeAt(r));) r++;
                    var a;
                    if (e.charCodeAt(r) === bo)
                        for (r++, C(t); to(e.charCodeAt(r));) r++;
                    if (e.charCodeAt(r) === xo || e.charCodeAt(r) === So)
                        for (r++, e.charCodeAt(r) !== ho && e.charCodeAt(r) !== fo || r++, C(t); to(e.charCodeAt(r));) r++;
                    if (r > t) return n(e.slice(t, r))
                }()) && void 0 !== u ? u : i()) && void 0 !== c ? c : o()) && void 0 !== s ? s : l("true", !0)) && void 0 !== a ? a : l("false", !1)) && void 0 !== t ? t : l("null", null);
                return g(), d
            }

            function l(t, n) {
                if (e.slice(r, r + t.length) === t) return r += t.length, n
            }

            function g() {
                for (;
                    (t = e.charCodeAt(r)) === Ao || t === co || t === uo || t === Io;) r++;
                var t
            }

            function A() {
                if (e.charCodeAt(r) === Co) {
                    r++;
                    for (var t = ""; r < e.length && e.charCodeAt(r) !== Co;) {
                        if (e.charCodeAt(r) === io) {
                            var n = e[r + 1],
                                a = ao[n];
                            void 0 !== a ? (t += a, r++) : "u" === n ? eo(e.charCodeAt(r + 2)) && eo(e.charCodeAt(r + 3)) && eo(e.charCodeAt(r + 4)) && eo(e.charCodeAt(r + 5)) ? (t += String.fromCharCode(parseInt(e.slice(r + 2, r + 6), 16)), r += 5) : y(r) : p(r)
                        } else(i = e.charCodeAt(r)) >= 32 && i <= 1114111 ? t += e[r] : h(e[r]);
                        r++
                    }
                    return function() {
                        if (e.charCodeAt(r) !== Co) throw new SyntaxError("End of string '\"' expected ".concat(b()))
                    }(), r++, t
                }
                var i
            }

            function c() {
                if (e.charCodeAt(r) !== wo) throw new SyntaxError("Comma ',' expected after value ".concat(b()));
                r++
            }

            function u() {
                if (e.charCodeAt(r) !== vo) throw new SyntaxError("Colon ':' expected after property name ".concat(b()));
                r++
            }

            function I(e) {
                if (void 0 === e) throw new SyntaxError("Array item expected ".concat(b()))
            }

            function C(t) {
                if (!to(e.charCodeAt(r))) {
                    var n = e.slice(t, r);
                    throw new SyntaxError("Invalid number '".concat(n, "', expecting a digit ").concat(b()))
                }
            }

            function d() {
                throw new SyntaxError("Quoted object key expected ".concat(b()))
            }

            function f(e, t) {
                throw new SyntaxError("Duplicate key '".concat(e, "' encountered at position ").concat(t))
            }

            function h(e) {
                throw new SyntaxError("Invalid character '".concat(e, "' ").concat(w()))
            }

            function p(t) {
                var n = e.slice(t, t + 2);
                throw new SyntaxError("Invalid escape character '".concat(n, "' ").concat(w()))
            }

            function m() {
                throw new SyntaxError("Object value expected after ':' ".concat(w()))
            }

            function y(t) {
                for (var n = t + 2;
                    /\w/.test(e[n]);) n++;
                var r = e.slice(t, n);
                throw new SyntaxError("Invalid unicode character '".concat(r, "' ").concat(w()))
            }

            function w() {
                return "at position ".concat(r)
            }

            function b() {
                return (r < e.length ? "but got '".concat(e[r], "'") : "but reached end of input") + " " + w()
            }
        }

        function eo(e) {
            return e >= po && e <= yo || e >= Eo && e <= No || e >= ko && e <= Bo
        }

        function to(e) {
            return e >= po && e <= yo
        }

        function no(e, t) {
            return e === t || (Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((function(e, n) {
                return no(e, t[n])
            })) : !(!ro(e) || !ro(t)) && Xi(new Set([].concat(Xi(Object.keys(e)), Xi(Object.keys(t))))).every((function(n) {
                return no(e[n], t[n])
            })))
        }

        function ro(e) {
            return "object" === Ki(e) && null !== e
        }
        var ao = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
            io = 92,
            oo = 123,
            so = 125,
            lo = 91,
            go = 93,
            Ao = 32,
            co = 10,
            uo = 9,
            Io = 13,
            Co = 34,
            fo = 43,
            ho = 45,
            po = 48,
            mo = 49,
            yo = 57,
            wo = 44,
            bo = 46,
            vo = 58,
            Eo = 65,
            ko = 97,
            So = 69,
            xo = 101,
            No = 70,
            Bo = 102;

        function Do(e) {
            return Do = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Do(e)
        }

        function Mo(e, t, n, r) {
            var a = function(e) {
                if ("number" === typeof e) return " ".repeat(e);
                if ("string" === typeof e && "" !== e) return e;
                return
            }(n);
            return i("function" === typeof t ? t.call({
                "": e
            }, "", e) : e, "");

            function i(e, o) {
                if (Array.isArray(r)) {
                    var s = r.find((function(t) {
                        return t.test(e)
                    }));
                    if (s) {
                        var l = s.stringify(e);
                        if ("string" !== typeof l || !Ti(l)) throw new Error("Invalid JSON number: output of a number stringifier must be a string containing a JSON number " + "(output: ".concat(l, ")"));
                        return l
                    }
                }
                return "boolean" === typeof e || "number" === typeof e || "string" === typeof e || null === e || e instanceof Date || e instanceof Boolean || e instanceof Number || e instanceof String ? JSON.stringify(e) : e && e.isLosslessNumber || "bigint" === typeof e ? e.toString() : Array.isArray(e) ? function(e, n) {
                    if (0 === e.length) return "[]";
                    for (var r = a ? n + a : void 0, o = a ? "[\n" : "[", s = 0; s < e.length; s++) {
                        var l = "function" === typeof t ? t.call(e, String(s), e[s]) : e[s];
                        a && (o += r), o += "undefined" !== typeof l && "function" !== typeof l ? i(l, r) : "null", s < e.length - 1 && (o += a ? ",\n" : ",")
                    }
                    return o += a ? "\n" + n + "]" : "]", o
                }(e, o) : e && "object" === Do(e) ? function(e, r) {
                    if ("function" === typeof e.toJSON) return Mo(e.toJSON(), t, n, void 0);
                    var o = Array.isArray(t) ? t.map(String) : Object.keys(e);
                    if (0 === o.length) return "{}";
                    var s = a ? r + a : void 0,
                        l = !0,
                        g = a ? "{\n" : "{";
                    return o.forEach((function(n) {
                        var r = "function" === typeof t ? t.call(e, n, e[n]) : e[n];
                        if (function(e, t) {
                                return "undefined" !== typeof t && "function" !== typeof t && "symbol" !== Do(t)
                            }(0, r)) {
                            l ? l = !1 : g += a ? ",\n" : ",";
                            var o = JSON.stringify(n);
                            g += a ? s + o + ": " : o + ":", g += i(r, s)
                        }
                    })), g += a ? "\n" + r + "}" : "}", g
                }(e, o) : void 0
            }
        }

        function Ro(e) {
            let t = e.length;
            for (; --t >= 0;) e[t] = 0
        }
        const To = 256,
            Oo = 286,
            jo = 30,
            Lo = 15,
            _o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            zo = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            Qo = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            Po = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            Uo = new Array(576);
        Ro(Uo);
        const Fo = new Array(60);
        Ro(Fo);
        const Zo = new Array(512);
        Ro(Zo);
        const Yo = new Array(256);
        Ro(Yo);
        const Wo = new Array(29);
        Ro(Wo);
        const Go = new Array(jo);

        function Ho(e, t, n, r, a) {
            this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = a, this.has_stree = e && e.length
        }
        let Vo, Jo, Ko;

        function Xo(e, t) {
            this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
        }
        Ro(Go);
        const qo = e => e < 256 ? Zo[e] : Zo[256 + (e >>> 7)],
            $o = (e, t) => {
                e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
            },
            es = (e, t, n) => {
                e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, $o(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
            },
            ts = (e, t, n) => {
                es(e, n[2 * t], n[2 * t + 1])
            },
            ns = (e, t) => {
                let n = 0;
                do {
                    n |= 1 & e, e >>>= 1, n <<= 1
                } while (--t > 0);
                return n >>> 1
            },
            rs = (e, t, n) => {
                const r = new Array(16);
                let a, i, o = 0;
                for (a = 1; a <= Lo; a++) o = o + n[a - 1] << 1, r[a] = o;
                for (i = 0; i <= t; i++) {
                    let t = e[2 * i + 1];
                    0 !== t && (e[2 * i] = ns(r[t]++, t))
                }
            },
            as = e => {
                let t;
                for (t = 0; t < Oo; t++) e.dyn_ltree[2 * t] = 0;
                for (t = 0; t < jo; t++) e.dyn_dtree[2 * t] = 0;
                for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
            },
            is = e => {
                e.bi_valid > 8 ? $o(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
            },
            os = (e, t, n, r) => {
                const a = 2 * t,
                    i = 2 * n;
                return e[a] < e[i] || e[a] === e[i] && r[t] <= r[n]
            },
            ss = (e, t, n) => {
                const r = e.heap[n];
                let a = n << 1;
                for (; a <= e.heap_len && (a < e.heap_len && os(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !os(t, r, e.heap[a], e.depth));) e.heap[n] = e.heap[a], n = a, a <<= 1;
                e.heap[n] = r
            },
            ls = (e, t, n) => {
                let r, a, i, o, s = 0;
                if (0 !== e.sym_next)
                    do {
                        r = 255 & e.pending_buf[e.sym_buf + s++], r += (255 & e.pending_buf[e.sym_buf + s++]) << 8, a = e.pending_buf[e.sym_buf + s++], 0 === r ? ts(e, a, t) : (i = Yo[a], ts(e, i + To + 1, t), o = _o[i], 0 !== o && (a -= Wo[i], es(e, a, o)), r--, i = qo(r), ts(e, i, n), o = zo[i], 0 !== o && (r -= Go[i], es(e, r, o)))
                    } while (s < e.sym_next);
                ts(e, 256, t)
            },
            gs = (e, t) => {
                const n = t.dyn_tree,
                    r = t.stat_desc.static_tree,
                    a = t.stat_desc.has_stree,
                    i = t.stat_desc.elems;
                let o, s, l, g = -1;
                for (e.heap_len = 0, e.heap_max = 573, o = 0; o < i; o++) 0 !== n[2 * o] ? (e.heap[++e.heap_len] = g = o, e.depth[o] = 0) : n[2 * o + 1] = 0;
                for (; e.heap_len < 2;) l = e.heap[++e.heap_len] = g < 2 ? ++g : 0, n[2 * l] = 1, e.depth[l] = 0, e.opt_len--, a && (e.static_len -= r[2 * l + 1]);
                for (t.max_code = g, o = e.heap_len >> 1; o >= 1; o--) ss(e, n, o);
                l = i;
                do {
                    o = e.heap[1], e.heap[1] = e.heap[e.heap_len--], ss(e, n, 1), s = e.heap[1], e.heap[--e.heap_max] = o, e.heap[--e.heap_max] = s, n[2 * l] = n[2 * o] + n[2 * s], e.depth[l] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1, n[2 * o + 1] = n[2 * s + 1] = l, e.heap[1] = l++, ss(e, n, 1)
                } while (e.heap_len >= 2);
                e.heap[--e.heap_max] = e.heap[1], ((e, t) => {
                    const n = t.dyn_tree,
                        r = t.max_code,
                        a = t.stat_desc.static_tree,
                        i = t.stat_desc.has_stree,
                        o = t.stat_desc.extra_bits,
                        s = t.stat_desc.extra_base,
                        l = t.stat_desc.max_length;
                    let g, A, c, u, I, C, d = 0;
                    for (u = 0; u <= Lo; u++) e.bl_count[u] = 0;
                    for (n[2 * e.heap[e.heap_max] + 1] = 0, g = e.heap_max + 1; g < 573; g++) A = e.heap[g], u = n[2 * n[2 * A + 1] + 1] + 1, u > l && (u = l, d++), n[2 * A + 1] = u, A > r || (e.bl_count[u]++, I = 0, A >= s && (I = o[A - s]), C = n[2 * A], e.opt_len += C * (u + I), i && (e.static_len += C * (a[2 * A + 1] + I)));
                    if (0 !== d) {
                        do {
                            for (u = l - 1; 0 === e.bl_count[u];) u--;
                            e.bl_count[u]--, e.bl_count[u + 1] += 2, e.bl_count[l]--, d -= 2
                        } while (d > 0);
                        for (u = l; 0 !== u; u--)
                            for (A = e.bl_count[u]; 0 !== A;) c = e.heap[--g], c > r || (n[2 * c + 1] !== u && (e.opt_len += (u - n[2 * c + 1]) * n[2 * c], n[2 * c + 1] = u), A--)
                    }
                })(e, t), rs(n, g, e.bl_count)
            },
            As = (e, t, n) => {
                let r, a, i = -1,
                    o = t[1],
                    s = 0,
                    l = 7,
                    g = 4;
                for (0 === o && (l = 138, g = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) a = o, o = t[2 * (r + 1) + 1], ++s < l && a === o || (s < g ? e.bl_tree[2 * a] += s : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, s = 0, i = a, 0 === o ? (l = 138, g = 3) : a === o ? (l = 6, g = 3) : (l = 7, g = 4))
            },
            cs = (e, t, n) => {
                let r, a, i = -1,
                    o = t[1],
                    s = 0,
                    l = 7,
                    g = 4;
                for (0 === o && (l = 138, g = 3), r = 0; r <= n; r++)
                    if (a = o, o = t[2 * (r + 1) + 1], !(++s < l && a === o)) {
                        if (s < g)
                            do {
                                ts(e, a, e.bl_tree)
                            } while (0 !== --s);
                        else 0 !== a ? (a !== i && (ts(e, a, e.bl_tree), s--), ts(e, 16, e.bl_tree), es(e, s - 3, 2)) : s <= 10 ? (ts(e, 17, e.bl_tree), es(e, s - 3, 3)) : (ts(e, 18, e.bl_tree), es(e, s - 11, 7));
                        s = 0, i = a, 0 === o ? (l = 138, g = 3) : a === o ? (l = 6, g = 3) : (l = 7, g = 4)
                    }
            };
        let us = !1;
        const Is = (e, t, n, r) => {
            es(e, 0 + (r ? 1 : 0), 3), is(e), $o(e, n), $o(e, ~n), n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending), e.pending += n
        };
        var Cs = e => {
                us || ((() => {
                    let e, t, n, r, a;
                    const i = new Array(16);
                    for (n = 0, r = 0; r < 28; r++)
                        for (Wo[r] = n, e = 0; e < 1 << _o[r]; e++) Yo[n++] = r;
                    for (Yo[n - 1] = r, a = 0, r = 0; r < 16; r++)
                        for (Go[r] = a, e = 0; e < 1 << zo[r]; e++) Zo[a++] = r;
                    for (a >>= 7; r < jo; r++)
                        for (Go[r] = a << 7, e = 0; e < 1 << zo[r] - 7; e++) Zo[256 + a++] = r;
                    for (t = 0; t <= Lo; t++) i[t] = 0;
                    for (e = 0; e <= 143;) Uo[2 * e + 1] = 8, e++, i[8]++;
                    for (; e <= 255;) Uo[2 * e + 1] = 9, e++, i[9]++;
                    for (; e <= 279;) Uo[2 * e + 1] = 7, e++, i[7]++;
                    for (; e <= 287;) Uo[2 * e + 1] = 8, e++, i[8]++;
                    for (rs(Uo, 287, i), e = 0; e < jo; e++) Fo[2 * e + 1] = 5, Fo[2 * e] = ns(e, 5);
                    Vo = new Ho(Uo, _o, 257, Oo, Lo), Jo = new Ho(Fo, zo, 0, jo, Lo), Ko = new Ho(new Array(0), Qo, 0, 19, 7)
                })(), us = !0), e.l_desc = new Xo(e.dyn_ltree, Vo), e.d_desc = new Xo(e.dyn_dtree, Jo), e.bl_desc = new Xo(e.bl_tree, Ko), e.bi_buf = 0, e.bi_valid = 0, as(e)
            },
            ds = (e, t, n, r) => {
                let a, i, o = 0;
                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = (e => {
                    let t, n = 4093624447;
                    for (t = 0; t <= 31; t++, n >>>= 1)
                        if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                    for (t = 32; t < To; t++)
                        if (0 !== e.dyn_ltree[2 * t]) return 1;
                    return 0
                })(e)), gs(e, e.l_desc), gs(e, e.d_desc), o = (e => {
                    let t;
                    for (As(e, e.dyn_ltree, e.l_desc.max_code), As(e, e.dyn_dtree, e.d_desc.max_code), gs(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * Po[t] + 1]; t--);
                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                })(e), a = e.opt_len + 3 + 7 >>> 3, i = e.static_len + 3 + 7 >>> 3, i <= a && (a = i)) : a = i = n + 5, n + 4 <= a && -1 !== t ? Is(e, t, n, r) : 4 === e.strategy || i === a ? (es(e, 2 + (r ? 1 : 0), 3), ls(e, Uo, Fo)) : (es(e, 4 + (r ? 1 : 0), 3), ((e, t, n, r) => {
                    let a;
                    for (es(e, t - 257, 5), es(e, n - 1, 5), es(e, r - 4, 4), a = 0; a < r; a++) es(e, e.bl_tree[2 * Po[a] + 1], 3);
                    cs(e, e.dyn_ltree, t - 1), cs(e, e.dyn_dtree, n - 1)
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), ls(e, e.dyn_ltree, e.dyn_dtree)), as(e), r && is(e)
            },
            fs = (e, t, n) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = n, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (Yo[n] + To + 1)]++, e.dyn_dtree[2 * qo(t)]++), e.sym_next === e.sym_end),
            hs = {
                _tr_init: Cs,
                _tr_stored_block: Is,
                _tr_flush_block: ds,
                _tr_tally: fs,
                _tr_align: e => {
                    es(e, 2, 3), ts(e, 256, Uo), (e => {
                        16 === e.bi_valid ? ($o(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                    })(e)
                }
            };
        var ps = (e, t, n, r) => {
            let a = 65535 & e | 0,
                i = e >>> 16 & 65535 | 0,
                o = 0;
            for (; 0 !== n;) {
                o = n > 2e3 ? 2e3 : n, n -= o;
                do {
                    a = a + t[r++] | 0, i = i + a | 0
                } while (--o);
                a %= 65521, i %= 65521
            }
            return a | i << 16 | 0
        };
        const ms = new Uint32Array((() => {
            let e, t = [];
            for (var n = 0; n < 256; n++) {
                e = n;
                for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        })());
        var ys = (e, t, n, r) => {
                const a = ms,
                    i = r + n;
                e ^= -1;
                for (let o = r; o < i; o++) e = e >>> 8 ^ a[255 & (e ^ t[o])];
                return -1 ^ e
            },
            ws = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            },
            bs = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_MEM_ERROR: -4,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
        const {
            _tr_init: vs,
            _tr_stored_block: Es,
            _tr_flush_block: ks,
            _tr_tally: Ss,
            _tr_align: xs
        } = hs, {
            Z_NO_FLUSH: Ns,
            Z_PARTIAL_FLUSH: Bs,
            Z_FULL_FLUSH: Ds,
            Z_FINISH: Ms,
            Z_BLOCK: Rs,
            Z_OK: Ts,
            Z_STREAM_END: Os,
            Z_STREAM_ERROR: js,
            Z_DATA_ERROR: Ls,
            Z_BUF_ERROR: _s,
            Z_DEFAULT_COMPRESSION: zs,
            Z_FILTERED: Qs,
            Z_HUFFMAN_ONLY: Ps,
            Z_RLE: Us,
            Z_FIXED: Fs,
            Z_DEFAULT_STRATEGY: Zs,
            Z_UNKNOWN: Ys,
            Z_DEFLATED: Ws
        } = bs, Gs = 258, Hs = 262, Vs = 42, Js = 113, Ks = 666, Xs = (e, t) => (e.msg = ws[t], t), qs = e => 2 * e - (e > 4 ? 9 : 0), $s = e => {
            let t = e.length;
            for (; --t >= 0;) e[t] = 0
        }, el = e => {
            let t, n, r, a = e.w_size;
            t = e.hash_size, r = t;
            do {
                n = e.head[--r], e.head[r] = n >= a ? n - a : 0
            } while (--t);
            t = a, r = t;
            do {
                n = e.prev[--r], e.prev[r] = n >= a ? n - a : 0
            } while (--t)
        };
        let tl = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask;
        const nl = e => {
                const t = e.state;
                let n = t.pending;
                n > e.avail_out && (n = e.avail_out), 0 !== n && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
            },
            rl = (e, t) => {
                ks(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, nl(e.strm)
            },
            al = (e, t) => {
                e.pending_buf[e.pending++] = t
            },
            il = (e, t) => {
                e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
            },
            ol = (e, t, n, r) => {
                let a = e.avail_in;
                return a > r && (a = r), 0 === a ? 0 : (e.avail_in -= a, t.set(e.input.subarray(e.next_in, e.next_in + a), n), 1 === e.state.wrap ? e.adler = ps(e.adler, t, a, n) : 2 === e.state.wrap && (e.adler = ys(e.adler, t, a, n)), e.next_in += a, e.total_in += a, a)
            },
            sl = (e, t) => {
                let n, r, a = e.max_chain_length,
                    i = e.strstart,
                    o = e.prev_length,
                    s = e.nice_match;
                const l = e.strstart > e.w_size - Hs ? e.strstart - (e.w_size - Hs) : 0,
                    g = e.window,
                    A = e.w_mask,
                    c = e.prev,
                    u = e.strstart + Gs;
                let I = g[i + o - 1],
                    C = g[i + o];
                e.prev_length >= e.good_match && (a >>= 2), s > e.lookahead && (s = e.lookahead);
                do {
                    if (n = t, g[n + o] === C && g[n + o - 1] === I && g[n] === g[i] && g[++n] === g[i + 1]) {
                        i += 2, n++;
                        do {} while (g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && g[++i] === g[++n] && i < u);
                        if (r = Gs - (u - i), i = u - Gs, r > o) {
                            if (e.match_start = t, o = r, r >= s) break;
                            I = g[i + o - 1], C = g[i + o]
                        }
                    }
                } while ((t = c[t & A]) > l && 0 !== --a);
                return o <= e.lookahead ? o : e.lookahead
            },
            ll = e => {
                const t = e.w_size;
                let n, r, a;
                do {
                    if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - Hs) && (e.window.set(e.window.subarray(t, t + t - r), 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, e.insert > e.strstart && (e.insert = e.strstart), el(e), r += t), 0 === e.strm.avail_in) break;
                    if (n = ol(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += n, e.lookahead + e.insert >= 3)
                        for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = tl(e, e.ins_h, e.window[a + 1]); e.insert && (e.ins_h = tl(e, e.ins_h, e.window[a + 3 - 1]), e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < 3)););
                } while (e.lookahead < Hs && 0 !== e.strm.avail_in)
            },
            gl = (e, t) => {
                let n, r, a, i = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
                    o = 0,
                    s = e.strm.avail_in;
                do {
                    if (n = 65535, a = e.bi_valid + 42 >> 3, e.strm.avail_out < a) break;
                    if (a = e.strm.avail_out - a, r = e.strstart - e.block_start, n > r + e.strm.avail_in && (n = r + e.strm.avail_in), n > a && (n = a), n < i && (0 === n && t !== Ms || t === Ns || n !== r + e.strm.avail_in)) break;
                    o = t === Ms && n === r + e.strm.avail_in ? 1 : 0, Es(e, 0, 0, o), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, nl(e.strm), r && (r > n && (r = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + r), e.strm.next_out), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r, e.block_start += r, n -= r), n && (ol(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n)
                } while (0 === o);
                return s -= e.strm.avail_in, s && (s >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= s && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), o ? 4 : t !== Ns && t !== Ms && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (a = e.window_size - e.strstart, e.strm.avail_in > a && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, a += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), a > e.strm.avail_in && (a = e.strm.avail_in), a && (ol(e.strm, e.window, e.strstart, a), e.strstart += a, e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a), e.high_water < e.strstart && (e.high_water = e.strstart), a = e.bi_valid + 42 >> 3, a = e.pending_buf_size - a > 65535 ? 65535 : e.pending_buf_size - a, i = a > e.w_size ? e.w_size : a, r = e.strstart - e.block_start, (r >= i || (r || t === Ms) && t !== Ns && 0 === e.strm.avail_in && r <= a) && (n = r > a ? a : r, o = t === Ms && 0 === e.strm.avail_in && n === r ? 1 : 0, Es(e, e.block_start, n, o), e.block_start += n, nl(e.strm)), o ? 3 : 1)
            },
            Al = (e, t) => {
                let n, r;
                for (;;) {
                    if (e.lookahead < Hs) {
                        if (ll(e), e.lookahead < Hs && t === Ns) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= 3 && (e.ins_h = tl(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - Hs && (e.match_length = sl(e, n)), e.match_length >= 3)
                        if (r = Ss(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                            e.match_length--;
                            do {
                                e.strstart++, e.ins_h = tl(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                            } while (0 !== --e.match_length);
                            e.strstart++
                        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = tl(e, e.ins_h, e.window[e.strstart + 1]);
                    else r = Ss(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                    if (r && (rl(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = e.strstart < 2 ? e.strstart : 2, t === Ms ? (rl(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (rl(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            },
            cl = (e, t) => {
                let n, r, a;
                for (;;) {
                    if (e.lookahead < Hs) {
                        if (ll(e), e.lookahead < Hs && t === Ns) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= 3 && (e.ins_h = tl(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - Hs && (e.match_length = sl(e, n), e.match_length <= 5 && (e.strategy === Qs || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                        a = e.strstart + e.lookahead - 3, r = Ss(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                        do {
                            ++e.strstart <= a && (e.ins_h = tl(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                        } while (0 !== --e.prev_length);
                        if (e.match_available = 0, e.match_length = 2, e.strstart++, r && (rl(e, !1), 0 === e.strm.avail_out)) return 1
                    } else if (e.match_available) {
                        if (r = Ss(e, 0, e.window[e.strstart - 1]), r && rl(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
                    } else e.match_available = 1, e.strstart++, e.lookahead--
                }
                return e.match_available && (r = Ss(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === Ms ? (rl(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (rl(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            };

        function ul(e, t, n, r, a) {
            this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = a
        }
        const Il = [new ul(0, 0, 0, 0, gl), new ul(4, 4, 8, 4, Al), new ul(4, 5, 16, 8, Al), new ul(4, 6, 32, 32, Al), new ul(4, 4, 16, 16, cl), new ul(8, 16, 32, 32, cl), new ul(8, 16, 128, 128, cl), new ul(8, 32, 128, 256, cl), new ul(32, 128, 258, 1024, cl), new ul(32, 258, 258, 4096, cl)];

        function Cl() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ws, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), $s(this.dyn_ltree), $s(this.dyn_dtree), $s(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), $s(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), $s(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        const dl = e => {
                if (!e) return 1;
                const t = e.state;
                return !t || t.strm !== e || t.status !== Vs && 57 !== t.status && 69 !== t.status && 73 !== t.status && 91 !== t.status && 103 !== t.status && t.status !== Js && t.status !== Ks ? 1 : 0
            },
            fl = e => {
                if (dl(e)) return Xs(e, js);
                e.total_in = e.total_out = 0, e.data_type = Ys;
                const t = e.state;
                return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = 2 === t.wrap ? 57 : t.wrap ? Vs : Js, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = -2, vs(t), Ts
            },
            hl = e => {
                const t = fl(e);
                var n;
                return t === Ts && ((n = e.state).window_size = 2 * n.w_size, $s(n.head), n.max_lazy_match = Il[n.level].max_lazy, n.good_match = Il[n.level].good_length, n.nice_match = Il[n.level].nice_length, n.max_chain_length = Il[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), t
            },
            pl = (e, t, n, r, a, i) => {
                if (!e) return js;
                let o = 1;
                if (t === zs && (t = 6), r < 0 ? (o = 0, r = -r) : r > 15 && (o = 2, r -= 16), a < 1 || a > 9 || n !== Ws || r < 8 || r > 15 || t < 0 || t > 9 || i < 0 || i > Fs || 8 === r && 1 !== o) return Xs(e, js);
                8 === r && (r = 9);
                const s = new Cl;
                return e.state = s, s.strm = e, s.status = Vs, s.wrap = o, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = a + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3), s.window = new Uint8Array(2 * s.w_size), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << a + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new Uint8Array(s.pending_buf_size), s.sym_buf = s.lit_bufsize, s.sym_end = 3 * (s.lit_bufsize - 1), s.level = t, s.strategy = i, s.method = n, hl(e)
            };
        var ml = (e, t) => {
                let n = t.length;
                if (dl(e)) return js;
                const r = e.state,
                    a = r.wrap;
                if (2 === a || 1 === a && r.status !== Vs || r.lookahead) return js;
                if (1 === a && (e.adler = ps(e.adler, t, n, 0)), r.wrap = 0, n >= r.w_size) {
                    0 === a && ($s(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
                    let e = new Uint8Array(r.w_size);
                    e.set(t.subarray(n - r.w_size, n), 0), t = e, n = r.w_size
                }
                const i = e.avail_in,
                    o = e.next_in,
                    s = e.input;
                for (e.avail_in = n, e.next_in = 0, e.input = t, ll(r); r.lookahead >= 3;) {
                    let e = r.strstart,
                        t = r.lookahead - 2;
                    do {
                        r.ins_h = tl(r, r.ins_h, r.window[e + 3 - 1]), r.prev[e & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = e, e++
                    } while (--t);
                    r.strstart = e, r.lookahead = 2, ll(r)
                }
                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, e.next_in = o, e.input = s, e.avail_in = i, r.wrap = a, Ts
            },
            yl = {
                deflateInit: (e, t) => pl(e, t, Ws, 15, 8, Zs),
                deflateInit2: pl,
                deflateReset: hl,
                deflateResetKeep: fl,
                deflateSetHeader: (e, t) => dl(e) || 2 !== e.state.wrap ? js : (e.state.gzhead = t, Ts),
                deflate: (e, t) => {
                    if (dl(e) || t > Rs || t < 0) return e ? Xs(e, js) : js;
                    const n = e.state;
                    if (!e.output || 0 !== e.avail_in && !e.input || n.status === Ks && t !== Ms) return Xs(e, 0 === e.avail_out ? _s : js);
                    const r = n.last_flush;
                    if (n.last_flush = t, 0 !== n.pending) {
                        if (nl(e), 0 === e.avail_out) return n.last_flush = -1, Ts
                    } else if (0 === e.avail_in && qs(t) <= qs(r) && t !== Ms) return Xs(e, _s);
                    if (n.status === Ks && 0 !== e.avail_in) return Xs(e, _s);
                    if (n.status === Vs && 0 === n.wrap && (n.status = Js), n.status === Vs) {
                        let t = Ws + (n.w_bits - 8 << 4) << 8,
                            r = -1;
                        if (r = n.strategy >= Ps || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3, t |= r << 6, 0 !== n.strstart && (t |= 32), t += 31 - t % 31, il(n, t), 0 !== n.strstart && (il(n, e.adler >>> 16), il(n, 65535 & e.adler)), e.adler = 1, n.status = Js, nl(e), 0 !== n.pending) return n.last_flush = -1, Ts
                    }
                    if (57 === n.status)
                        if (e.adler = 0, al(n, 31), al(n, 139), al(n, 8), n.gzhead) al(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), al(n, 255 & n.gzhead.time), al(n, n.gzhead.time >> 8 & 255), al(n, n.gzhead.time >> 16 & 255), al(n, n.gzhead.time >> 24 & 255), al(n, 9 === n.level ? 2 : n.strategy >= Ps || n.level < 2 ? 4 : 0), al(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (al(n, 255 & n.gzhead.extra.length), al(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = ys(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69;
                        else if (al(n, 0), al(n, 0), al(n, 0), al(n, 0), al(n, 0), al(n, 9 === n.level ? 2 : n.strategy >= Ps || n.level < 2 ? 4 : 0), al(n, 3), n.status = Js, nl(e), 0 !== n.pending) return n.last_flush = -1, Ts;
                    if (69 === n.status) {
                        if (n.gzhead.extra) {
                            let t = n.pending,
                                r = (65535 & n.gzhead.extra.length) - n.gzindex;
                            for (; n.pending + r > n.pending_buf_size;) {
                                let a = n.pending_buf_size - n.pending;
                                if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + a), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > t && (e.adler = ys(e.adler, n.pending_buf, n.pending - t, t)), n.gzindex += a, nl(e), 0 !== n.pending) return n.last_flush = -1, Ts;
                                t = 0, r -= a
                            }
                            let a = new Uint8Array(n.gzhead.extra);
                            n.pending_buf.set(a.subarray(n.gzindex, n.gzindex + r), n.pending), n.pending += r, n.gzhead.hcrc && n.pending > t && (e.adler = ys(e.adler, n.pending_buf, n.pending - t, t)), n.gzindex = 0
                        }
                        n.status = 73
                    }
                    if (73 === n.status) {
                        if (n.gzhead.name) {
                            let t, r = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size) {
                                    if (n.gzhead.hcrc && n.pending > r && (e.adler = ys(e.adler, n.pending_buf, n.pending - r, r)), nl(e), 0 !== n.pending) return n.last_flush = -1, Ts;
                                    r = 0
                                }
                                t = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, al(n, t)
                            } while (0 !== t);
                            n.gzhead.hcrc && n.pending > r && (e.adler = ys(e.adler, n.pending_buf, n.pending - r, r)), n.gzindex = 0
                        }
                        n.status = 91
                    }
                    if (91 === n.status) {
                        if (n.gzhead.comment) {
                            let t, r = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size) {
                                    if (n.gzhead.hcrc && n.pending > r && (e.adler = ys(e.adler, n.pending_buf, n.pending - r, r)), nl(e), 0 !== n.pending) return n.last_flush = -1, Ts;
                                    r = 0
                                }
                                t = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, al(n, t)
                            } while (0 !== t);
                            n.gzhead.hcrc && n.pending > r && (e.adler = ys(e.adler, n.pending_buf, n.pending - r, r))
                        }
                        n.status = 103
                    }
                    if (103 === n.status) {
                        if (n.gzhead.hcrc) {
                            if (n.pending + 2 > n.pending_buf_size && (nl(e), 0 !== n.pending)) return n.last_flush = -1, Ts;
                            al(n, 255 & e.adler), al(n, e.adler >> 8 & 255), e.adler = 0
                        }
                        if (n.status = Js, nl(e), 0 !== n.pending) return n.last_flush = -1, Ts
                    }
                    if (0 !== e.avail_in || 0 !== n.lookahead || t !== Ns && n.status !== Ks) {
                        let r = 0 === n.level ? gl(n, t) : n.strategy === Ps ? ((e, t) => {
                            let n;
                            for (;;) {
                                if (0 === e.lookahead && (ll(e), 0 === e.lookahead)) {
                                    if (t === Ns) return 1;
                                    break
                                }
                                if (e.match_length = 0, n = Ss(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (rl(e, !1), 0 === e.strm.avail_out)) return 1
                            }
                            return e.insert = 0, t === Ms ? (rl(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (rl(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        })(n, t) : n.strategy === Us ? ((e, t) => {
                            let n, r, a, i;
                            const o = e.window;
                            for (;;) {
                                if (e.lookahead <= Gs) {
                                    if (ll(e), e.lookahead <= Gs && t === Ns) return 1;
                                    if (0 === e.lookahead) break
                                }
                                if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (a = e.strstart - 1, r = o[a], r === o[++a] && r === o[++a] && r === o[++a])) {
                                    i = e.strstart + Gs;
                                    do {} while (r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && a < i);
                                    e.match_length = Gs - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                }
                                if (e.match_length >= 3 ? (n = Ss(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = Ss(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (rl(e, !1), 0 === e.strm.avail_out)) return 1
                            }
                            return e.insert = 0, t === Ms ? (rl(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (rl(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        })(n, t) : Il[n.level].func(n, t);
                        if (3 !== r && 4 !== r || (n.status = Ks), 1 === r || 3 === r) return 0 === e.avail_out && (n.last_flush = -1), Ts;
                        if (2 === r && (t === Bs ? xs(n) : t !== Rs && (Es(n, 0, 0, !1), t === Ds && ($s(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), nl(e), 0 === e.avail_out)) return n.last_flush = -1, Ts
                    }
                    return t !== Ms ? Ts : n.wrap <= 0 ? Os : (2 === n.wrap ? (al(n, 255 & e.adler), al(n, e.adler >> 8 & 255), al(n, e.adler >> 16 & 255), al(n, e.adler >> 24 & 255), al(n, 255 & e.total_in), al(n, e.total_in >> 8 & 255), al(n, e.total_in >> 16 & 255), al(n, e.total_in >> 24 & 255)) : (il(n, e.adler >>> 16), il(n, 65535 & e.adler)), nl(e), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? Ts : Os)
                },
                deflateEnd: e => {
                    if (dl(e)) return js;
                    const t = e.state.status;
                    return e.state = null, t === Js ? Xs(e, Ls) : Ts
                },
                deflateSetDictionary: ml,
                deflateInfo: "pako deflate (from Nodeca project)"
            };
        const wl = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var bl = {
            assign: function(e) {
                const t = Array.prototype.slice.call(arguments, 1);
                for (; t.length;) {
                    const n = t.shift();
                    if (n) {
                        if ("object" !== typeof n) throw new TypeError(n + "must be non-object");
                        for (const t in n) wl(n, t) && (e[t] = n[t])
                    }
                }
                return e
            },
            flattenChunks: e => {
                let t = 0;
                for (let r = 0, a = e.length; r < a; r++) t += e[r].length;
                const n = new Uint8Array(t);
                for (let r = 0, a = 0, i = e.length; r < i; r++) {
                    let t = e[r];
                    n.set(t, a), a += t.length
                }
                return n
            }
        };
        let vl = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (UC) {
            vl = !1
        }
        const El = new Uint8Array(256);
        for (let n = 0; n < 256; n++) El[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
        El[254] = El[254] = 1;
        var kl = {
            string2buf: e => {
                if ("function" === typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(e);
                let t, n, r, a, i, o = e.length,
                    s = 0;
                for (a = 0; a < o; a++) n = e.charCodeAt(a), 55296 === (64512 & n) && a + 1 < o && (r = e.charCodeAt(a + 1), 56320 === (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (t = new Uint8Array(s), i = 0, a = 0; i < s; a++) n = e.charCodeAt(a), 55296 === (64512 & n) && a + 1 < o && (r = e.charCodeAt(a + 1), 56320 === (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++)), n < 128 ? t[i++] = n : n < 2048 ? (t[i++] = 192 | n >>> 6, t[i++] = 128 | 63 & n) : n < 65536 ? (t[i++] = 224 | n >>> 12, t[i++] = 128 | n >>> 6 & 63, t[i++] = 128 | 63 & n) : (t[i++] = 240 | n >>> 18, t[i++] = 128 | n >>> 12 & 63, t[i++] = 128 | n >>> 6 & 63, t[i++] = 128 | 63 & n);
                return t
            },
            buf2string: (e, t) => {
                const n = t || e.length;
                if ("function" === typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(e.subarray(0, t));
                let r, a;
                const i = new Array(2 * n);
                for (a = 0, r = 0; r < n;) {
                    let t = e[r++];
                    if (t < 128) {
                        i[a++] = t;
                        continue
                    }
                    let o = El[t];
                    if (o > 4) i[a++] = 65533, r += o - 1;
                    else {
                        for (t &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < n;) t = t << 6 | 63 & e[r++], o--;
                        o > 1 ? i[a++] = 65533 : t < 65536 ? i[a++] = t : (t -= 65536, i[a++] = 55296 | t >> 10 & 1023, i[a++] = 56320 | 1023 & t)
                    }
                }
                return ((e, t) => {
                    if (t < 65534 && e.subarray && vl) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
                    let n = "";
                    for (let r = 0; r < t; r++) n += String.fromCharCode(e[r]);
                    return n
                })(i, a)
            },
            utf8border: (e, t) => {
                (t = t || e.length) > e.length && (t = e.length);
                let n = t - 1;
                for (; n >= 0 && 128 === (192 & e[n]);) n--;
                return n < 0 || 0 === n ? t : n + El[e[n]] > t ? n : t
            }
        };
        var Sl = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
        const xl = Object.prototype.toString,
            {
                Z_NO_FLUSH: Nl,
                Z_SYNC_FLUSH: Bl,
                Z_FULL_FLUSH: Dl,
                Z_FINISH: Ml,
                Z_OK: Rl,
                Z_STREAM_END: Tl,
                Z_DEFAULT_COMPRESSION: Ol,
                Z_DEFAULT_STRATEGY: jl,
                Z_DEFLATED: Ll
            } = bs;

        function _l(e) {
            this.options = bl.assign({
                level: Ol,
                method: Ll,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: jl
            }, e || {});
            let t = this.options;
            t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Sl, this.strm.avail_out = 0;
            let n = yl.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
            if (n !== Rl) throw new Error(ws[n]);
            if (t.header && yl.deflateSetHeader(this.strm, t.header), t.dictionary) {
                let e;
                if (e = "string" === typeof t.dictionary ? kl.string2buf(t.dictionary) : "[object ArrayBuffer]" === xl.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, n = yl.deflateSetDictionary(this.strm, e), n !== Rl) throw new Error(ws[n]);
                this._dict_set = !0
            }
        }

        function zl(e, t) {
            const n = new _l(t);
            if (n.push(e, !0), n.err) throw n.msg || ws[n.err];
            return n.result
        }
        _l.prototype.push = function(e, t) {
            const n = this.strm,
                r = this.options.chunkSize;
            let a, i;
            if (this.ended) return !1;
            for (i = t === ~~t ? t : !0 === t ? Ml : Nl, "string" === typeof e ? n.input = kl.string2buf(e) : "[object ArrayBuffer]" === xl.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;;)
                if (0 === n.avail_out && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), (i === Bl || i === Dl) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                else {
                    if (a = yl.deflate(n, i), a === Tl) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), a = yl.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === Rl;
                    if (0 !== n.avail_out) {
                        if (i > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                        else if (0 === n.avail_in) break
                    } else this.onData(n.output)
                } return !0
        }, _l.prototype.onData = function(e) {
            this.chunks.push(e)
        }, _l.prototype.onEnd = function(e) {
            e === Rl && (this.result = bl.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
        };
        var Ql = {
            Deflate: _l,
            deflate: zl,
            deflateRaw: function(e, t) {
                return (t = t || {}).raw = !0, zl(e, t)
            },
            gzip: function(e, t) {
                return (t = t || {}).gzip = !0, zl(e, t)
            },
            constants: bs
        };
        const Pl = 16209;
        var Ul = function(e, t) {
            let n, r, a, i, o, s, l, g, A, c, u, I, C, d, f, h, p, m, y, w, b, v, E, k;
            const S = e.state;
            n = e.next_in, E = e.input, r = n + (e.avail_in - 5), a = e.next_out, k = e.output, i = a - (t - e.avail_out), o = a + (e.avail_out - 257), s = S.dmax, l = S.wsize, g = S.whave, A = S.wnext, c = S.window, u = S.hold, I = S.bits, C = S.lencode, d = S.distcode, f = (1 << S.lenbits) - 1, h = (1 << S.distbits) - 1;
            e: do {
                I < 15 && (u += E[n++] << I, I += 8, u += E[n++] << I, I += 8), p = C[u & f];
                t: for (;;) {
                    if (m = p >>> 24, u >>>= m, I -= m, m = p >>> 16 & 255, 0 === m) k[a++] = 65535 & p;
                    else {
                        if (!(16 & m)) {
                            if (0 === (64 & m)) {
                                p = C[(65535 & p) + (u & (1 << m) - 1)];
                                continue t
                            }
                            if (32 & m) {
                                S.mode = 16191;
                                break e
                            }
                            e.msg = "invalid literal/length code", S.mode = Pl;
                            break e
                        }
                        y = 65535 & p, m &= 15, m && (I < m && (u += E[n++] << I, I += 8), y += u & (1 << m) - 1, u >>>= m, I -= m), I < 15 && (u += E[n++] << I, I += 8, u += E[n++] << I, I += 8), p = d[u & h];
                        n: for (;;) {
                            if (m = p >>> 24, u >>>= m, I -= m, m = p >>> 16 & 255, !(16 & m)) {
                                if (0 === (64 & m)) {
                                    p = d[(65535 & p) + (u & (1 << m) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code", S.mode = Pl;
                                break e
                            }
                            if (w = 65535 & p, m &= 15, I < m && (u += E[n++] << I, I += 8, I < m && (u += E[n++] << I, I += 8)), w += u & (1 << m) - 1, w > s) {
                                e.msg = "invalid distance too far back", S.mode = Pl;
                                break e
                            }
                            if (u >>>= m, I -= m, m = a - i, w > m) {
                                if (m = w - m, m > g && S.sane) {
                                    e.msg = "invalid distance too far back", S.mode = Pl;
                                    break e
                                }
                                if (b = 0, v = c, 0 === A) {
                                    if (b += l - m, m < y) {
                                        y -= m;
                                        do {
                                            k[a++] = c[b++]
                                        } while (--m);
                                        b = a - w, v = k
                                    }
                                } else if (A < m) {
                                    if (b += l + A - m, m -= A, m < y) {
                                        y -= m;
                                        do {
                                            k[a++] = c[b++]
                                        } while (--m);
                                        if (b = 0, A < y) {
                                            m = A, y -= m;
                                            do {
                                                k[a++] = c[b++]
                                            } while (--m);
                                            b = a - w, v = k
                                        }
                                    }
                                } else if (b += A - m, m < y) {
                                    y -= m;
                                    do {
                                        k[a++] = c[b++]
                                    } while (--m);
                                    b = a - w, v = k
                                }
                                for (; y > 2;) k[a++] = v[b++], k[a++] = v[b++], k[a++] = v[b++], y -= 3;
                                y && (k[a++] = v[b++], y > 1 && (k[a++] = v[b++]))
                            } else {
                                b = a - w;
                                do {
                                    k[a++] = k[b++], k[a++] = k[b++], k[a++] = k[b++], y -= 3
                                } while (y > 2);
                                y && (k[a++] = k[b++], y > 1 && (k[a++] = k[b++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (n < r && a < o);
            y = I >> 3, n -= y, I -= y << 3, u &= (1 << I) - 1, e.next_in = n, e.next_out = a, e.avail_in = n < r ? r - n + 5 : 5 - (n - r), e.avail_out = a < o ? o - a + 257 : 257 - (a - o), S.hold = u, S.bits = I
        };
        const Fl = 15,
            Zl = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
            Yl = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
            Wl = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
            Gl = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var Hl = (e, t, n, r, a, i, o, s) => {
            const l = s.bits;
            let g, A, c, u, I, C, d = 0,
                f = 0,
                h = 0,
                p = 0,
                m = 0,
                y = 0,
                w = 0,
                b = 0,
                v = 0,
                E = 0,
                k = null;
            const S = new Uint16Array(16),
                x = new Uint16Array(16);
            let N, B, D, M = null;
            for (d = 0; d <= Fl; d++) S[d] = 0;
            for (f = 0; f < r; f++) S[t[n + f]]++;
            for (m = l, p = Fl; p >= 1 && 0 === S[p]; p--);
            if (m > p && (m = p), 0 === p) return a[i++] = 20971520, a[i++] = 20971520, s.bits = 1, 0;
            for (h = 1; h < p && 0 === S[h]; h++);
            for (m < h && (m = h), b = 1, d = 1; d <= Fl; d++)
                if (b <<= 1, b -= S[d], b < 0) return -1;
            if (b > 0 && (0 === e || 1 !== p)) return -1;
            for (x[1] = 0, d = 1; d < Fl; d++) x[d + 1] = x[d] + S[d];
            for (f = 0; f < r; f++) 0 !== t[n + f] && (o[x[t[n + f]]++] = f);
            if (0 === e ? (k = M = o, C = 20) : 1 === e ? (k = Zl, M = Yl, C = 257) : (k = Wl, M = Gl, C = 0), E = 0, f = 0, d = h, I = i, y = m, w = 0, c = -1, v = 1 << m, u = v - 1, 1 === e && v > 852 || 2 === e && v > 592) return 1;
            for (;;) {
                N = d - w, o[f] + 1 < C ? (B = 0, D = o[f]) : o[f] >= C ? (B = M[o[f] - C], D = k[o[f] - C]) : (B = 96, D = 0), g = 1 << d - w, A = 1 << y, h = A;
                do {
                    A -= g, a[I + (E >> w) + A] = N << 24 | B << 16 | D | 0
                } while (0 !== A);
                for (g = 1 << d - 1; E & g;) g >>= 1;
                if (0 !== g ? (E &= g - 1, E += g) : E = 0, f++, 0 === --S[d]) {
                    if (d === p) break;
                    d = t[n + o[f]]
                }
                if (d > m && (E & u) !== c) {
                    for (0 === w && (w = m), I += h, y = d - w, b = 1 << y; y + w < p && (b -= S[y + w], !(b <= 0));) y++, b <<= 1;
                    if (v += 1 << y, 1 === e && v > 852 || 2 === e && v > 592) return 1;
                    c = E & u, a[c] = m << 24 | y << 16 | I - i | 0
                }
            }
            return 0 !== E && (a[I + E] = d - w << 24 | 64 << 16 | 0), s.bits = m, 0
        };
        const {
            Z_FINISH: Vl,
            Z_BLOCK: Jl,
            Z_TREES: Kl,
            Z_OK: Xl,
            Z_STREAM_END: ql,
            Z_NEED_DICT: $l,
            Z_STREAM_ERROR: eg,
            Z_DATA_ERROR: tg,
            Z_MEM_ERROR: ng,
            Z_BUF_ERROR: rg,
            Z_DEFLATED: ag
        } = bs, ig = 16180, og = 16190, sg = 16191, lg = 16192, gg = 16194, Ag = 16199, cg = 16200, ug = 16206, Ig = 16209, Cg = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);

        function dg() {
            this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }
        const fg = e => {
                if (!e) return 1;
                const t = e.state;
                return !t || t.strm !== e || t.mode < ig || t.mode > 16211 ? 1 : 0
            },
            hg = e => {
                if (fg(e)) return eg;
                const t = e.state;
                return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = ig, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, Xl
            },
            pg = e => {
                if (fg(e)) return eg;
                const t = e.state;
                return t.wsize = 0, t.whave = 0, t.wnext = 0, hg(e)
            },
            mg = (e, t) => {
                let n;
                if (fg(e)) return eg;
                const r = e.state;
                return t < 0 ? (n = 0, t = -t) : (n = 5 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? eg : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, pg(e))
            },
            yg = (e, t) => {
                if (!e) return eg;
                const n = new dg;
                e.state = n, n.strm = e, n.window = null, n.mode = ig;
                const r = mg(e, t);
                return r !== Xl && (e.state = null), r
            };
        let wg, bg, vg = !0;
        const Eg = e => {
                if (vg) {
                    wg = new Int32Array(512), bg = new Int32Array(32);
                    let t = 0;
                    for (; t < 144;) e.lens[t++] = 8;
                    for (; t < 256;) e.lens[t++] = 9;
                    for (; t < 280;) e.lens[t++] = 7;
                    for (; t < 288;) e.lens[t++] = 8;
                    for (Hl(1, e.lens, 0, 288, wg, 0, e.work, {
                            bits: 9
                        }), t = 0; t < 32;) e.lens[t++] = 5;
                    Hl(2, e.lens, 0, 32, bg, 0, e.work, {
                        bits: 5
                    }), vg = !1
                }
                e.lencode = wg, e.lenbits = 9, e.distcode = bg, e.distbits = 5
            },
            kg = (e, t, n, r) => {
                let a;
                const i = e.state;
                return null === i.window && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0, i.window = new Uint8Array(i.wsize)), r >= i.wsize ? (i.window.set(t.subarray(n - i.wsize, n), 0), i.wnext = 0, i.whave = i.wsize) : (a = i.wsize - i.wnext, a > r && (a = r), i.window.set(t.subarray(n - r, n - r + a), i.wnext), (r -= a) ? (i.window.set(t.subarray(n - r, n), 0), i.wnext = r, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0
            };
        var Sg = (e, t) => {
                let n, r, a, i, o, s, l, g, A, c, u, I, C, d, f, h, p, m, y, w, b, v, E = 0;
                const k = new Uint8Array(4);
                let S, x;
                const N = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (fg(e) || !e.output || !e.input && 0 !== e.avail_in) return eg;
                n = e.state, n.mode === sg && (n.mode = lg), o = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, g = n.hold, A = n.bits, c = s, u = l, v = Xl;
                e: for (;;) switch (n.mode) {
                    case ig:
                        if (0 === n.wrap) {
                            n.mode = lg;
                            break
                        }
                        for (; A < 16;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if (2 & n.wrap && 35615 === g) {
                            0 === n.wbits && (n.wbits = 15), n.check = 0, k[0] = 255 & g, k[1] = g >>> 8 & 255, n.check = ys(n.check, k, 2, 0), g = 0, A = 0, n.mode = 16181;
                            break
                        }
                        if (n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & g) << 8) + (g >> 8)) % 31) {
                            e.msg = "incorrect header check", n.mode = Ig;
                            break
                        }
                        if ((15 & g) !== ag) {
                            e.msg = "unknown compression method", n.mode = Ig;
                            break
                        }
                        if (g >>>= 4, A -= 4, b = 8 + (15 & g), 0 === n.wbits && (n.wbits = b), b > 15 || b > n.wbits) {
                            e.msg = "invalid window size", n.mode = Ig;
                            break
                        }
                        n.dmax = 1 << n.wbits, n.flags = 0, e.adler = n.check = 1, n.mode = 512 & g ? 16189 : sg, g = 0, A = 0;
                        break;
                    case 16181:
                        for (; A < 16;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if (n.flags = g, (255 & n.flags) !== ag) {
                            e.msg = "unknown compression method", n.mode = Ig;
                            break
                        }
                        if (57344 & n.flags) {
                            e.msg = "unknown header flags set", n.mode = Ig;
                            break
                        }
                        n.head && (n.head.text = g >> 8 & 1), 512 & n.flags && 4 & n.wrap && (k[0] = 255 & g, k[1] = g >>> 8 & 255, n.check = ys(n.check, k, 2, 0)), g = 0, A = 0, n.mode = 16182;
                    case 16182:
                        for (; A < 32;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        n.head && (n.head.time = g), 512 & n.flags && 4 & n.wrap && (k[0] = 255 & g, k[1] = g >>> 8 & 255, k[2] = g >>> 16 & 255, k[3] = g >>> 24 & 255, n.check = ys(n.check, k, 4, 0)), g = 0, A = 0, n.mode = 16183;
                    case 16183:
                        for (; A < 16;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        n.head && (n.head.xflags = 255 & g, n.head.os = g >> 8), 512 & n.flags && 4 & n.wrap && (k[0] = 255 & g, k[1] = g >>> 8 & 255, n.check = ys(n.check, k, 2, 0)), g = 0, A = 0, n.mode = 16184;
                    case 16184:
                        if (1024 & n.flags) {
                            for (; A < 16;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            n.length = g, n.head && (n.head.extra_len = g), 512 & n.flags && 4 & n.wrap && (k[0] = 255 & g, k[1] = g >>> 8 & 255, n.check = ys(n.check, k, 2, 0)), g = 0, A = 0
                        } else n.head && (n.head.extra = null);
                        n.mode = 16185;
                    case 16185:
                        if (1024 & n.flags && (I = n.length, I > s && (I = s), I && (n.head && (b = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(r.subarray(i, i + I), b)), 512 & n.flags && 4 & n.wrap && (n.check = ys(n.check, r, I, i)), s -= I, i += I, n.length -= I), n.length)) break e;
                        n.length = 0, n.mode = 16186;
                    case 16186:
                        if (2048 & n.flags) {
                            if (0 === s) break e;
                            I = 0;
                            do {
                                b = r[i + I++], n.head && b && n.length < 65536 && (n.head.name += String.fromCharCode(b))
                            } while (b && I < s);
                            if (512 & n.flags && 4 & n.wrap && (n.check = ys(n.check, r, I, i)), s -= I, i += I, b) break e
                        } else n.head && (n.head.name = null);
                        n.length = 0, n.mode = 16187;
                    case 16187:
                        if (4096 & n.flags) {
                            if (0 === s) break e;
                            I = 0;
                            do {
                                b = r[i + I++], n.head && b && n.length < 65536 && (n.head.comment += String.fromCharCode(b))
                            } while (b && I < s);
                            if (512 & n.flags && 4 & n.wrap && (n.check = ys(n.check, r, I, i)), s -= I, i += I, b) break e
                        } else n.head && (n.head.comment = null);
                        n.mode = 16188;
                    case 16188:
                        if (512 & n.flags) {
                            for (; A < 16;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            if (4 & n.wrap && g !== (65535 & n.check)) {
                                e.msg = "header crc mismatch", n.mode = Ig;
                                break
                            }
                            g = 0, A = 0
                        }
                        n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = sg;
                        break;
                    case 16189:
                        for (; A < 32;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        e.adler = n.check = Cg(g), g = 0, A = 0, n.mode = og;
                    case og:
                        if (0 === n.havedict) return e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = g, n.bits = A, $l;
                        e.adler = n.check = 1, n.mode = sg;
                    case sg:
                        if (t === Jl || t === Kl) break e;
                    case lg:
                        if (n.last) {
                            g >>>= 7 & A, A -= 7 & A, n.mode = ug;
                            break
                        }
                        for (; A < 3;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        switch (n.last = 1 & g, g >>>= 1, A -= 1, 3 & g) {
                            case 0:
                                n.mode = 16193;
                                break;
                            case 1:
                                if (Eg(n), n.mode = Ag, t === Kl) {
                                    g >>>= 2, A -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                n.mode = 16196;
                                break;
                            case 3:
                                e.msg = "invalid block type", n.mode = Ig
                        }
                        g >>>= 2, A -= 2;
                        break;
                    case 16193:
                        for (g >>>= 7 & A, A -= 7 & A; A < 32;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if ((65535 & g) !== (g >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", n.mode = Ig;
                            break
                        }
                        if (n.length = 65535 & g, g = 0, A = 0, n.mode = gg, t === Kl) break e;
                    case gg:
                        n.mode = 16195;
                    case 16195:
                        if (I = n.length, I) {
                            if (I > s && (I = s), I > l && (I = l), 0 === I) break e;
                            a.set(r.subarray(i, i + I), o), s -= I, i += I, l -= I, o += I, n.length -= I;
                            break
                        }
                        n.mode = sg;
                        break;
                    case 16196:
                        for (; A < 14;) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if (n.nlen = 257 + (31 & g), g >>>= 5, A -= 5, n.ndist = 1 + (31 & g), g >>>= 5, A -= 5, n.ncode = 4 + (15 & g), g >>>= 4, A -= 4, n.nlen > 286 || n.ndist > 30) {
                            e.msg = "too many length or distance symbols", n.mode = Ig;
                            break
                        }
                        n.have = 0, n.mode = 16197;
                    case 16197:
                        for (; n.have < n.ncode;) {
                            for (; A < 3;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            n.lens[N[n.have++]] = 7 & g, g >>>= 3, A -= 3
                        }
                        for (; n.have < 19;) n.lens[N[n.have++]] = 0;
                        if (n.lencode = n.lendyn, n.lenbits = 7, S = {
                                bits: n.lenbits
                            }, v = Hl(0, n.lens, 0, 19, n.lencode, 0, n.work, S), n.lenbits = S.bits, v) {
                            e.msg = "invalid code lengths set", n.mode = Ig;
                            break
                        }
                        n.have = 0, n.mode = 16198;
                    case 16198:
                        for (; n.have < n.nlen + n.ndist;) {
                            for (; E = n.lencode[g & (1 << n.lenbits) - 1], f = E >>> 24, h = E >>> 16 & 255, p = 65535 & E, !(f <= A);) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            if (p < 16) g >>>= f, A -= f, n.lens[n.have++] = p;
                            else {
                                if (16 === p) {
                                    for (x = f + 2; A < x;) {
                                        if (0 === s) break e;
                                        s--, g += r[i++] << A, A += 8
                                    }
                                    if (g >>>= f, A -= f, 0 === n.have) {
                                        e.msg = "invalid bit length repeat", n.mode = Ig;
                                        break
                                    }
                                    b = n.lens[n.have - 1], I = 3 + (3 & g), g >>>= 2, A -= 2
                                } else if (17 === p) {
                                    for (x = f + 3; A < x;) {
                                        if (0 === s) break e;
                                        s--, g += r[i++] << A, A += 8
                                    }
                                    g >>>= f, A -= f, b = 0, I = 3 + (7 & g), g >>>= 3, A -= 3
                                } else {
                                    for (x = f + 7; A < x;) {
                                        if (0 === s) break e;
                                        s--, g += r[i++] << A, A += 8
                                    }
                                    g >>>= f, A -= f, b = 0, I = 11 + (127 & g), g >>>= 7, A -= 7
                                }
                                if (n.have + I > n.nlen + n.ndist) {
                                    e.msg = "invalid bit length repeat", n.mode = Ig;
                                    break
                                }
                                for (; I--;) n.lens[n.have++] = b
                            }
                        }
                        if (n.mode === Ig) break;
                        if (0 === n.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", n.mode = Ig;
                            break
                        }
                        if (n.lenbits = 9, S = {
                                bits: n.lenbits
                            }, v = Hl(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S), n.lenbits = S.bits, v) {
                            e.msg = "invalid literal/lengths set", n.mode = Ig;
                            break
                        }
                        if (n.distbits = 6, n.distcode = n.distdyn, S = {
                                bits: n.distbits
                            }, v = Hl(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S), n.distbits = S.bits, v) {
                            e.msg = "invalid distances set", n.mode = Ig;
                            break
                        }
                        if (n.mode = Ag, t === Kl) break e;
                    case Ag:
                        n.mode = cg;
                    case cg:
                        if (s >= 6 && l >= 258) {
                            e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = g, n.bits = A, Ul(e, u), o = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, g = n.hold, A = n.bits, n.mode === sg && (n.back = -1);
                            break
                        }
                        for (n.back = 0; E = n.lencode[g & (1 << n.lenbits) - 1], f = E >>> 24, h = E >>> 16 & 255, p = 65535 & E, !(f <= A);) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if (h && 0 === (240 & h)) {
                            for (m = f, y = h, w = p; E = n.lencode[w + ((g & (1 << m + y) - 1) >> m)], f = E >>> 24, h = E >>> 16 & 255, p = 65535 & E, !(m + f <= A);) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            g >>>= m, A -= m, n.back += m
                        }
                        if (g >>>= f, A -= f, n.back += f, n.length = p, 0 === h) {
                            n.mode = 16205;
                            break
                        }
                        if (32 & h) {
                            n.back = -1, n.mode = sg;
                            break
                        }
                        if (64 & h) {
                            e.msg = "invalid literal/length code", n.mode = Ig;
                            break
                        }
                        n.extra = 15 & h, n.mode = 16201;
                    case 16201:
                        if (n.extra) {
                            for (x = n.extra; A < x;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            n.length += g & (1 << n.extra) - 1, g >>>= n.extra, A -= n.extra, n.back += n.extra
                        }
                        n.was = n.length, n.mode = 16202;
                    case 16202:
                        for (; E = n.distcode[g & (1 << n.distbits) - 1], f = E >>> 24, h = E >>> 16 & 255, p = 65535 & E, !(f <= A);) {
                            if (0 === s) break e;
                            s--, g += r[i++] << A, A += 8
                        }
                        if (0 === (240 & h)) {
                            for (m = f, y = h, w = p; E = n.distcode[w + ((g & (1 << m + y) - 1) >> m)], f = E >>> 24, h = E >>> 16 & 255, p = 65535 & E, !(m + f <= A);) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            g >>>= m, A -= m, n.back += m
                        }
                        if (g >>>= f, A -= f, n.back += f, 64 & h) {
                            e.msg = "invalid distance code", n.mode = Ig;
                            break
                        }
                        n.offset = p, n.extra = 15 & h, n.mode = 16203;
                    case 16203:
                        if (n.extra) {
                            for (x = n.extra; A < x;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            n.offset += g & (1 << n.extra) - 1, g >>>= n.extra, A -= n.extra, n.back += n.extra
                        }
                        if (n.offset > n.dmax) {
                            e.msg = "invalid distance too far back", n.mode = Ig;
                            break
                        }
                        n.mode = 16204;
                    case 16204:
                        if (0 === l) break e;
                        if (I = u - l, n.offset > I) {
                            if (I = n.offset - I, I > n.whave && n.sane) {
                                e.msg = "invalid distance too far back", n.mode = Ig;
                                break
                            }
                            I > n.wnext ? (I -= n.wnext, C = n.wsize - I) : C = n.wnext - I, I > n.length && (I = n.length), d = n.window
                        } else d = a, C = o - n.offset, I = n.length;
                        I > l && (I = l), l -= I, n.length -= I;
                        do {
                            a[o++] = d[C++]
                        } while (--I);
                        0 === n.length && (n.mode = cg);
                        break;
                    case 16205:
                        if (0 === l) break e;
                        a[o++] = n.length, l--, n.mode = cg;
                        break;
                    case ug:
                        if (n.wrap) {
                            for (; A < 32;) {
                                if (0 === s) break e;
                                s--, g |= r[i++] << A, A += 8
                            }
                            if (u -= l, e.total_out += u, n.total += u, 4 & n.wrap && u && (e.adler = n.check = n.flags ? ys(n.check, a, u, o - u) : ps(n.check, a, u, o - u)), u = l, 4 & n.wrap && (n.flags ? g : Cg(g)) !== n.check) {
                                e.msg = "incorrect data check", n.mode = Ig;
                                break
                            }
                            g = 0, A = 0
                        }
                        n.mode = 16207;
                    case 16207:
                        if (n.wrap && n.flags) {
                            for (; A < 32;) {
                                if (0 === s) break e;
                                s--, g += r[i++] << A, A += 8
                            }
                            if (4 & n.wrap && g !== (4294967295 & n.total)) {
                                e.msg = "incorrect length check", n.mode = Ig;
                                break
                            }
                            g = 0, A = 0
                        }
                        n.mode = 16208;
                    case 16208:
                        v = ql;
                        break e;
                    case Ig:
                        v = tg;
                        break e;
                    case 16210:
                        return ng;
                    default:
                        return eg
                }
                return e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = g, n.bits = A, (n.wsize || u !== e.avail_out && n.mode < Ig && (n.mode < ug || t !== Vl)) && kg(e, e.output, e.next_out, u - e.avail_out), c -= e.avail_in, u -= e.avail_out, e.total_in += c, e.total_out += u, n.total += u, 4 & n.wrap && u && (e.adler = n.check = n.flags ? ys(n.check, a, u, e.next_out - u) : ps(n.check, a, u, e.next_out - u)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === sg ? 128 : 0) + (n.mode === Ag || n.mode === gg ? 256 : 0), (0 === c && 0 === u || t === Vl) && v === Xl && (v = rg), v
            },
            xg = {
                inflateReset: pg,
                inflateReset2: mg,
                inflateResetKeep: hg,
                inflateInit: e => yg(e, 15),
                inflateInit2: yg,
                inflate: Sg,
                inflateEnd: e => {
                    if (fg(e)) return eg;
                    let t = e.state;
                    return t.window && (t.window = null), e.state = null, Xl
                },
                inflateGetHeader: (e, t) => {
                    if (fg(e)) return eg;
                    const n = e.state;
                    return 0 === (2 & n.wrap) ? eg : (n.head = t, t.done = !1, Xl)
                },
                inflateSetDictionary: (e, t) => {
                    const n = t.length;
                    let r, a, i;
                    return fg(e) ? eg : (r = e.state, 0 !== r.wrap && r.mode !== og ? eg : r.mode === og && (a = 1, a = ps(a, t, n, 0), a !== r.check) ? tg : (i = kg(e, t, n, n), i ? (r.mode = 16210, ng) : (r.havedict = 1, Xl)))
                },
                inflateInfo: "pako inflate (from Nodeca project)"
            };
        var Ng = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
        const Bg = Object.prototype.toString,
            {
                Z_NO_FLUSH: Dg,
                Z_FINISH: Mg,
                Z_OK: Rg,
                Z_STREAM_END: Tg,
                Z_NEED_DICT: Og,
                Z_STREAM_ERROR: jg,
                Z_DATA_ERROR: Lg,
                Z_MEM_ERROR: _g
            } = bs;

        function zg(e) {
            this.options = bl.assign({
                chunkSize: 65536,
                windowBits: 15,
                to: ""
            }, e || {});
            const t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 === (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Sl, this.strm.avail_out = 0;
            let n = xg.inflateInit2(this.strm, t.windowBits);
            if (n !== Rg) throw new Error(ws[n]);
            if (this.header = new Ng, xg.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" === typeof t.dictionary ? t.dictionary = kl.string2buf(t.dictionary) : "[object ArrayBuffer]" === Bg.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = xg.inflateSetDictionary(this.strm, t.dictionary), n !== Rg))) throw new Error(ws[n])
        }

        function Qg(e, t) {
            const n = new zg(t);
            if (n.push(e), n.err) throw n.msg || ws[n.err];
            return n.result
        }
        zg.prototype.push = function(e, t) {
            const n = this.strm,
                r = this.options.chunkSize,
                a = this.options.dictionary;
            let i, o, s;
            if (this.ended) return !1;
            for (o = t === ~~t ? t : !0 === t ? Mg : Dg, "[object ArrayBuffer]" === Bg.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;;) {
                for (0 === n.avail_out && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), i = xg.inflate(n, o), i === Og && a && (i = xg.inflateSetDictionary(n, a), i === Rg ? i = xg.inflate(n, o) : i === Lg && (i = Og)); n.avail_in > 0 && i === Tg && n.state.wrap > 0 && 0 !== e[n.next_in];) xg.inflateReset(n), i = xg.inflate(n, o);
                switch (i) {
                    case jg:
                    case Lg:
                    case Og:
                    case _g:
                        return this.onEnd(i), this.ended = !0, !1
                }
                if (s = n.avail_out, n.next_out && (0 === n.avail_out || i === Tg))
                    if ("string" === this.options.to) {
                        let e = kl.utf8border(n.output, n.next_out),
                            t = n.next_out - e,
                            a = kl.buf2string(n.output, e);
                        n.next_out = t, n.avail_out = r - t, t && n.output.set(n.output.subarray(e, e + t), 0), this.onData(a)
                    } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                if (i !== Rg || 0 !== s) {
                    if (i === Tg) return i = xg.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
                    if (0 === n.avail_in) break
                }
            }
            return !0
        }, zg.prototype.onData = function(e) {
            this.chunks.push(e)
        }, zg.prototype.onEnd = function(e) {
            e === Rg && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = bl.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
        };
        var Pg = {
            Inflate: zg,
            inflate: Qg,
            inflateRaw: function(e, t) {
                return (t = t || {}).raw = !0, Qg(e, t)
            },
            ungzip: Qg,
            constants: bs
        };
        const {
            Deflate: Ug,
            deflate: Fg,
            deflateRaw: Zg,
            gzip: Yg
        } = Ql, {
            Inflate: Wg,
            inflate: Gg,
            inflateRaw: Hg,
            ungzip: Vg
        } = Pg;
        var Jg = Yg,
            Kg = Vg,
            Xg = n(8101),
            qg = n(6231),
            $g = Object.defineProperty,
            eA = (e, t) => {
                for (var n in t) $g(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            };
        eA({}, {
            ADDR_BOUND: () => NA,
            API_VERSION: () => SA,
            BN_FEE_TRANSACTION_VERSION_1: () => bA,
            BN_FEE_TRANSACTION_VERSION_2: () => vA,
            BN_TRANSACTION_VERSION_1: () => yA,
            BN_TRANSACTION_VERSION_2: () => wA,
            BaseUrl: () => BA,
            HEX_STR_TRANSACTION_VERSION_1: () => pA,
            HEX_STR_TRANSACTION_VERSION_2: () => mA,
            IS_BROWSER: () => nA,
            MASK_250: () => kA,
            MAX_STORAGE_ITEM_SIZE: () => xA,
            NetworkName: () => DA,
            RPC_DEFAULT_VERSION: () => OA,
            RPC_NODES: () => jA,
            StarknetChainId: () => MA,
            TEXT_TO_FELT_MAX_LEN: () => hA,
            TransactionHashPrefix: () => RA,
            UDC: () => TA,
            ZERO: () => EA
        });
        var tA = {};
        eA(tA, {
            IS_BROWSER: () => nA,
            addHexPrefix: () => cA,
            arrayBufferToString: () => aA,
            atobUniversal: () => sA,
            btoaUniversal: () => lA,
            buf2hex: () => gA,
            calcByteLength: () => IA,
            padLeft: () => uA,
            pascalToSnake: () => fA,
            removeHexPrefix: () => AA,
            sanitizeBytes: () => CA,
            sanitizeHex: () => dA,
            stringToArrayBuffer: () => oA,
            utf8ToArray: () => iA
        });
        var nA = "undefined" !== typeof window,
            rA = "0";

        function aA(e) {
            return new Uint8Array(e).reduce(((e, t) => e + String.fromCharCode(t)), "")
        }

        function iA(e) {
            return (new TextEncoder).encode(e)
        }

        function oA(e) {
            return iA(e)
        }

        function sA(e) {
            return Rn.decode(e)
        }

        function lA(e) {
            return Rn.encode(new Uint8Array(e))
        }

        function gA(e) {
            return e.reduce(((e, t) => e + t.toString(16).padStart(2, "0")), "")
        }

        function AA(e) {
            return e.replace(/^0x/i, "")
        }

        function cA(e) {
            return "0x".concat(AA(e))
        }

        function uA(e, t) {
            return function(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rA;
                const a = t - e.length;
                let i = e;
                if (a > 0) {
                    const t = r.repeat(a);
                    i = n ? t + e : e + t
                }
                return i
            }(e, t, !0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rA)
        }

        function IA(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
            const {
                length: n
            } = e, r = n % t;
            return r ? (n - r) / t * t + t : n
        }

        function CA(e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rA;
            return uA(e, IA(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8), t)
        }

        function dA(e) {
            return (e = CA(e = AA(e), 2)) && (e = cA(e)), e
        }
        var fA = e => /[a-z]/.test(e) ? e.split(/(?=[A-Z])/).join("_").toUpperCase() : e,
            hA = 31,
            pA = "0x1",
            mA = "0x2",
            yA = 1n,
            wA = 2n,
            bA = 2n ** 128n + yA,
            vA = 2n ** 128n + wA,
            EA = 0n,
            kA = 2n ** 250n - 1n,
            SA = EA,
            xA = 256n,
            NA = 2n ** 251n - xA,
            BA = (e => (e.SN_MAIN = "https://alpha-mainnet.starknet.io", e.SN_GOERLI = "https://alpha4.starknet.io", e.SN_SEPOLIA = "https://alpha-sepolia.starknet.io", e))(BA || {}),
            DA = (e => (e.SN_MAIN = "SN_MAIN", e.SN_GOERLI = "SN_GOERLI", e.SN_SEPOLIA = "SN_SEPOLIA", e))(DA || {}),
            MA = (e => (e.SN_MAIN = "0x534e5f4d41494e", e.SN_GOERLI = "0x534e5f474f45524c49", e.SN_SEPOLIA = "0x534e5f5345504f4c4941", e))(MA || {}),
            RA = (e => (e.DECLARE = "0x6465636c617265", e.DEPLOY = "0x6465706c6f79", e.DEPLOY_ACCOUNT = "0x6465706c6f795f6163636f756e74", e.INVOKE = "0x696e766f6b65", e.L1_HANDLER = "0x6c315f68616e646c6572", e))(RA || {}),
            TA = {
                ADDRESS: "0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
                ENTRYPOINT: "deployContract"
            },
            OA = "v0_5",
            jA = {
                SN_GOERLI: ["https://starknet-testnet.public.blastapi.io/rpc/", "https://free-rpc.nethermind.io/goerli-juno/"],
                SN_MAIN: ["https://starknet-mainnet.public.blastapi.io/rpc/", "https://free-rpc.nethermind.io/mainnet-juno/"],
                SN_SEPOLIA: ["https://starknet-sepolia.public.blastapi.io/rpc/", "https://free-rpc.nethermind.io/sepolia-juno/"]
            };
        eA({}, {
            BlockStatus: () => WA,
            BlockTag: () => GA,
            EntryPointType: () => PA,
            Litteral: () => QA,
            RPC: () => HA,
            SIMULATION_FLAG: () => LA,
            Sequencer: () => ac,
            TransactionExecutionStatus: () => YA,
            TransactionFinalityStatus: () => ZA,
            TransactionStatus: () => FA,
            TransactionType: () => UA,
            Uint: () => zA,
            ValidateType: () => _A
        });
        var LA = (e => (e.SKIP_VALIDATE = "SKIP_VALIDATE", e.SKIP_EXECUTE = "SKIP_EXECUTE", e))(LA || {}),
            _A = (e => (e.DEPLOY = "DEPLOY", e.CALL = "CALL", e.INVOKE = "INVOKE", e))(_A || {}),
            zA = (e => (e.u8 = "core::integer::u8", e.u16 = "core::integer::u16", e.u32 = "core::integer::u32", e.u64 = "core::integer::u64", e.u128 = "core::integer::u128", e.u256 = "core::integer::u256", e))(zA || {}),
            QA = (e => (e.ClassHash = "core::starknet::class_hash::ClassHash", e.ContractAddress = "core::starknet::contract_address::ContractAddress", e))(QA || {}),
            PA = (e => (e.EXTERNAL = "EXTERNAL", e.L1_HANDLER = "L1_HANDLER", e.CONSTRUCTOR = "CONSTRUCTOR", e))(PA || {}),
            UA = (e => (e.DECLARE = "DECLARE", e.DEPLOY = "DEPLOY", e.DEPLOY_ACCOUNT = "DEPLOY_ACCOUNT", e.INVOKE = "INVOKE_FUNCTION", e))(UA || {}),
            FA = (e => (e.NOT_RECEIVED = "NOT_RECEIVED", e.RECEIVED = "RECEIVED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e.REJECTED = "REJECTED", e.REVERTED = "REVERTED", e))(FA || {}),
            ZA = (e => (e.NOT_RECEIVED = "NOT_RECEIVED", e.RECEIVED = "RECEIVED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))(ZA || {}),
            YA = (e => (e.REJECTED = "REJECTED", e.REVERTED = "REVERTED", e.SUCCEEDED = "SUCCEEDED", e))(YA || {}),
            WA = (e => (e.PENDING = "PENDING", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.REJECTED = "REJECTED", e))(WA || {}),
            GA = (e => (e.pending = "pending", e.latest = "latest", e))(GA || {}),
            HA = {};
        eA(HA, {
            EBlockTag: () => nc,
            EDataAvailabilityMode: () => rc,
            ESimulationFlag: () => qA,
            ETransactionExecutionStatus: () => tc,
            ETransactionFinalityStatus: () => ec,
            ETransactionStatus: () => $A,
            ETransactionType: () => XA,
            Errors: () => JA,
            JRPC: () => VA,
            SPEC: () => KA
        });
        var VA = {},
            JA = {},
            KA = {},
            XA = (e => (e.DECLARE = "DECLARE", e.DEPLOY = "DEPLOY", e.DEPLOY_ACCOUNT = "DEPLOY_ACCOUNT", e.INVOKE = "INVOKE", e.L1_HANDLER = "L1_HANDLER", e))(XA || {}),
            qA = (e => (e.SKIP_VALIDATE = "SKIP_VALIDATE", e.SKIP_FEE_CHARGE = "SKIP_FEE_CHARGE", e))(qA || {}),
            $A = (e => (e.RECEIVED = "RECEIVED", e.REJECTED = "REJECTED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))($A || {}),
            ec = (e => (e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))(ec || {}),
            tc = (e => (e.SUCCEEDED = "SUCCEEDED", e.REVERTED = "REVERTED", e))(tc || {}),
            nc = (e => (e.LATEST = "latest", e.PENDING = "pending", e))(nc || {}),
            rc = (e => (e.L1 = "L1", e.L2 = "L2", e))(rc || {}),
            ac = {};

        function ic(e, t) {
            if (!e) throw new Error(t || "Assertion failure")
        }
        var oc = {};

        function sc(e) {
            return /^0x[0-9a-f]*$/i.test(e)
        }

        function lc(e) {
            return BigInt(e)
        }

        function gc(e) {
            return "bigint" === typeof e
        }

        function Ac(e) {
            return cA(lc(e).toString(16))
        }
        eA(oc, {
            assertInRange: () => dc,
            bigNumberishArrayToDecimalStringArray: () => fc,
            bigNumberishArrayToHexadecimalStringArray: () => hc,
            cleanHex: () => Cc,
            getDecimalString: () => mc,
            getHexString: () => yc,
            getHexStringArray: () => wc,
            hexToBytes: () => vc,
            hexToDecimalString: () => Ic,
            isBigInt: () => gc,
            isHex: () => sc,
            isStringWholeNumber: () => pc,
            toBigInt: () => lc,
            toCairoBool: () => bc,
            toHex: () => Ac,
            toHexString: () => cc,
            toStorageKey: () => uc
        });
        var cc = Ac;

        function uc(e) {
            return cA(lc(e).toString(16).padStart(64, "0"))
        }

        function Ic(e) {
            return BigInt(cA(e)).toString(10)
        }
        var Cc = e => e.toLowerCase().replace(/^(0x)0+/, "$1");

        function dc(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            const a = "" === r ? "invalid length" : "invalid ".concat(r, " length"),
                i = BigInt(e),
                o = BigInt(t),
                s = BigInt(n);
            ic(i >= o && i <= s, "Message not signable, ".concat(a, "."))
        }

        function fc(e) {
            return e.map((e => lc(e).toString(10)))
        }

        function hc(e) {
            return e.map((e => Ac(e)))
        }
        var pc = e => /^\d+$/.test(e);

        function mc(e) {
            if (sc(e)) return Ic(e);
            if (pc(e)) return e;
            throw new Error("".concat(e, " need to be hex-string or whole-number-string"))
        }

        function yc(e) {
            if (sc(e)) return e;
            if (pc(e)) return cc(e);
            throw new Error("".concat(e, " need to be hex-string or whole-number-string"))
        }

        function wc(e) {
            return e.map((e => yc(e)))
        }
        var bc = e => (+e).toString();

        function vc(e) {
            if (!sc(e)) throw new Error("".concat(e, " need to be a hex-string"));
            let t = AA(e);
            return t.length % 2 !== 0 && (t = "0".concat(t)), Hn(t)
        }

        function Ec(e) {
            const t = AA(Ac(BigInt(e))),
                n = t.length % 2 === 0 ? t : "0".concat(t);
            return cA(pi(vc(cA(n))).toString(16))
        }

        function kc(e) {
            const t = BigInt(function(e) {
                return cA(pi(iA(e)).toString(16))
            }(e));
            return t & kA
        }

        function Sc(e) {
            return Ac(kc(e))
        }

        function xc(e) {
            return sc(e) ? e : pc(e) ? cc(e) : Sc(e)
        }
        eA({}, {
            getSelector: () => xc,
            getSelectorFromName: () => Sc,
            keccakBn: () => Ec,
            starknetKeccak: () => kc
        });
        var Nc = {};

        function Bc(e) {
            return /^[\x00-\x7F]*$/.test(e)
        }

        function Dc(e) {
            return e.length <= hA
        }

        function Mc(e) {
            return /^[0-9]*$/i.test(e)
        }

        function Rc(e) {
            return "string" === typeof e && !sc(e) && !pc(e)
        }
        eA(Nc, {
            decodeShortString: () => _c,
            encodeShortString: () => Lc,
            isASCII: () => Bc,
            isDecimalString: () => Mc,
            isLongText: () => Oc,
            isShortString: () => Dc,
            isShortText: () => Tc,
            isText: () => Rc,
            splitLongString: () => jc
        });
        var Tc = e => Rc(e) && Dc(e),
            Oc = e => Rc(e) && !Dc(e);

        function jc(e) {
            const t = RegExp("[^]{1,".concat(hA, "}"), "g");
            return e.match(t) || []
        }

        function Lc(e) {
            if (!Bc(e)) throw new Error("".concat(e, " is not an ASCII string"));
            if (!Dc(e)) throw new Error("".concat(e, " is too long"));
            return cA(e.replace(/./g, (e => e.charCodeAt(0).toString(16))))
        }

        function _c(e) {
            if (!Bc(e)) throw new Error("".concat(e, " is not an ASCII string"));
            if (sc(e)) return AA(e).replace(/.{2}/g, (e => String.fromCharCode(parseInt(e, 16))));
            if (Mc(e)) return _c("0X".concat(BigInt(e).toString(16)));
            throw new Error("".concat(e, " is not Hex or decimal"))
        }
        var zc = {};
        eA(zc, {
            felt: () => cu,
            getAbiContractVersion: () => lu,
            getArrayType: () => ou,
            isCairo1Abi: () => su,
            isCairo1Type: () => iu,
            isLen: () => Yc,
            isTypeArray: () => Gc,
            isTypeBool: () => nu,
            isTypeContractAddress: () => ru,
            isTypeEnum: () => Kc,
            isTypeEthAddress: () => au,
            isTypeFelt: () => Wc,
            isTypeLitteral: () => eu,
            isTypeNamedTuple: () => Vc,
            isTypeOption: () => Xc,
            isTypeResult: () => qc,
            isTypeStruct: () => Jc,
            isTypeTuple: () => Hc,
            isTypeUint: () => $c,
            isTypeUint256: () => tu,
            tuple: () => Au,
            uint256: () => gu
        });
        eA({}, {
            UINT_128_MAX: () => Qc,
            UINT_256_MAX: () => Pc,
            bnToUint256: () => Zc,
            isUint256: () => Fc,
            uint256ToBN: () => Uc
        });
        var Qc = (1n << 128n) - 1n,
            Pc = (1n << 256n) - 1n;

        function Uc(e) {
            return (lc(e.high) << 128n) + lc(e.low)
        }

        function Fc(e) {
            return lc(e) <= Pc
        }

        function Zc(e) {
            const t = lc(e);
            if (!Fc(t)) throw new Error("Number is too large");
            return {
                low: cA((t & Qc).toString(16)),
                high: cA((t >> 128n).toString(16))
            }
        }
        var Yc = e => /_len$/.test(e),
            Wc = e => "felt" === e || "core::felt252" === e,
            Gc = e => /\*/.test(e) || e.startsWith("core::array::Array::") || e.startsWith("core::array::Span::"),
            Hc = e => /^\(.*\)$/i.test(e),
            Vc = e => /\(.*\)/i.test(e) && e.includes(":"),
            Jc = (e, t) => e in t,
            Kc = (e, t) => e in t,
            Xc = e => e.startsWith("core::option::Option::"),
            qc = e => e.startsWith("core::result::Result::"),
            $c = e => Object.values(zA).includes(e),
            eu = e => Object.values(QA).includes(e),
            tu = e => "core::integer::u256" === e,
            nu = e => "core::bool" === e,
            ru = e => "core::starknet::contract_address::ContractAddress" === e,
            au = e => "core::starknet::eth_address::EthAddress" === e,
            iu = e => e.includes("::"),
            ou = e => iu(e) ? e.substring(e.indexOf("<") + 1, e.lastIndexOf(">")) : e.replace("*", "");

        function su(e) {
            const {
                cairo: t
            } = lu(e);
            if (void 0 === t) throw Error("Unable to determine Cairo version");
            return "1" === t
        }

        function lu(e) {
            if (e.find((e => "interface" === e.type))) return {
                cairo: "1",
                compiler: "2"
            };
            const t = e.find((e => "function" === e.type && (e.inputs.length || e.outputs.length)));
            if (!t) return {
                cairo: void 0,
                compiler: void 0
            };
            const n = t.inputs.length ? t.inputs : t.outputs;
            return iu(n[0].type) ? {
                cairo: "1",
                compiler: "1"
            } : {
                cairo: "0",
                compiler: "0"
            }
        }
        var gu = e => {
                const t = BigInt(e);
                if (!Fc(t)) throw new Error("Number is too large");
                return {
                    low: (t & Qc).toString(10),
                    high: (t >> 128n).toString(10)
                }
            },
            Au = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return {
                    ...t
                }
            };

        function cu(e) {
            if (gc(e) || "number" === typeof e && Number.isInteger(e)) return e.toString();
            if (Rc(e)) {
                if (!Dc(e)) throw new Error("".concat(e, " is a long string > 31 chars, felt can store short strings, split it to array of short strings"));
                const t = Lc(e);
                return BigInt(t).toString()
            }
            if ("string" === typeof e && sc(e)) return BigInt(e).toString();
            if ("string" === typeof e && pc(e)) return e;
            if ("boolean" === typeof e) return "".concat(+e);
            throw new Error("".concat(e, " can't be computed by felt()"))
        }
        var uu = class {
                constructor(e) {
                    const t = Object.values(e);
                    if (0 === t.length) throw new Error("This Enum must have a least 1 variant");
                    if (1 !== t.filter((e => "undefined" !== typeof e)).length) throw new Error("This Enum must have exactly one active variant");
                    this.variant = e
                }
                unwrap() {
                    const e = Object.entries(this.variant).find((e => "undefined" !== typeof e[1]));
                    if ("undefined" !== typeof e) return e[1]
                }
                activeVariant() {
                    const e = Object.entries(this.variant).find((e => "undefined" !== typeof e[1]));
                    return "undefined" === typeof e ? "" : e[0]
                }
            },
            Iu = (e => (e[e.Some = 0] = "Some", e[e.None = 1] = "None", e))(Iu || {}),
            Cu = class {
                constructor(e, t) {
                    if (!(e in Iu)) throw new Error("Wrong variant : should be CairoOptionVariant.Some or .None.");
                    if (0 === e) {
                        if ("undefined" === typeof t) throw new Error('The creation of a Cairo Option with "Some" variant needs a content as input.');
                        this.Some = t, this.None = void 0
                    } else this.Some = void 0, this.None = !0
                }
                unwrap() {
                    if (!this.None) return this.Some
                }
                isSome() {
                    return !("undefined" === typeof this.Some)
                }
                isNone() {
                    return !0 === this.None
                }
            },
            du = (e => (e[e.Ok = 0] = "Ok", e[e.Err = 1] = "Err", e))(du || {}),
            fu = class {
                constructor(e, t) {
                    if (!(e in du)) throw new Error("Wrong variant : should be CairoResultVariant.Ok or .Err.");
                    0 === e ? (this.Ok = t, this.Err = void 0) : (this.Ok = void 0, this.Err = t)
                }
                unwrap() {
                    if ("undefined" !== typeof this.Ok) return this.Ok;
                    if ("undefined" !== typeof this.Err) return this.Err;
                    throw new Error("Both Result.Ok and .Err are undefined. Not authorized.")
                }
                isOk() {
                    return !("undefined" === typeof this.Ok)
                }
                isErr() {
                    return !("undefined" === typeof this.Err)
                }
            },
            hu = (e, t, n) => {
                if (!gc(e[n])) throw new Error("Data and formatter mismatch on ".concat(n, ":").concat(t[n], ", expected response data ").concat(n, ":").concat(e[n], " to be BN instead it is ").concat(typeof e[n]))
            },
            pu = (e, t, n) => {
                throw new Error("Unhandled formatter type on ".concat(n, ":").concat(t[n], " for data ").concat(n, ":").concat(e[n]))
            };

        function mu(e, t, n) {
            return Object.entries(e).reduce(((r, a) => {
                let [i, o] = a;
                const s = null !== n && void 0 !== n ? n : t[i];
                if (!(i in t) && !n) return r[i] = o, r;
                if ("string" === s) {
                    if (Array.isArray(e[i])) {
                        const t = mu(e[i], e[i].map((e => s)));
                        return r[i] = Object.values(t).join(""), r
                    }
                    return hu(e, t, i), r[i] = _c(o), r
                }
                if ("number" === s) return hu(e, t, i), r[i] = Number(o), r;
                if ("function" === typeof s) return r[i] = s(o), r;
                if (Array.isArray(s)) {
                    const t = mu(e[i], s, s[0]);
                    return r[i] = Object.values(t), r
                }
                return "object" === typeof s ? (r[i] = mu(e[i], s), r) : (pu(e, t, i), r)
            }), {})
        }
        var yu = class {
                constructor(e) {
                    this.abi = e
                }
                methodInputsLength(e) {
                    return e.inputs.reduce(((e, t) => Yc(t.name) ? e : e + 1), 0)
                }
                getMethod(e) {
                    return this.abi.find((t => t.name === e))
                }
                getLegacyFormat() {
                    return this.abi
                }
            },
            wu = class {
                constructor(e) {
                    this.abi = e
                }
                methodInputsLength(e) {
                    return e.inputs.length
                }
                getMethod(e) {
                    const t = this.abi.find((e => "interface" === e.type));
                    return t.items.find((t => t.name === e))
                }
                getLegacyFormat() {
                    return this.abi.flatMap((e => "interface" === e.type ? e.items : e))
                }
            };

        function bu(e) {
            const t = function(e) {
                return e.find((e => "interface" === e.type)) ? 2 : su(e) ? 1 : 0
            }(e);
            if (0 === t || 1 === t) return new yu(e);
            if (2 === t) return new wu(e);
            throw Error("Unsupported ABI version ".concat(t))
        }

        function vu(e, t, n) {
            return "constructor" === e && !n && !t.length
        }

        function Eu(e) {
            if (!e.includes("(")) return {
                subTuple: [],
                result: e
            };
            const t = [];
            let n = "",
                r = 0;
            for (; r < e.length;) {
                if ("(" === e[r]) {
                    let a = 1;
                    const i = r;
                    for (r++; a;) ")" === e[r] && a--, "(" === e[r] && a++, r++;
                    t.push(e.substring(i, r)), n += " ", r--
                } else n += e[r];
                r++
            }
            return {
                subTuple: t,
                result: n
            }
        }

        function ku(e) {
            return iu(e) ? function(e) {
                const t = e.replace(/\s/g, "").slice(1, -1),
                    {
                        subTuple: n,
                        result: r
                    } = Eu(t),
                    a = r.split(",").map((e => n.length ? e.replace(" ", n.shift()) : e));
                return a
            }(e) : function(e) {
                const t = e.replace(/\s/g, "").slice(1, -1),
                    {
                        subTuple: n,
                        result: r
                    } = Eu(t);
                let a = r.split(",").map((e => n.length ? e.replace(" ", n.shift()) : e));
                return Vc(e) && (a = a.reduce(((e, t) => e.concat(function(e) {
                    const t = e.substring(0, e.indexOf(":"));
                    return {
                        name: t,
                        type: e.substring(t.length + 1)
                    }
                }(t))), [])), a
            }(e)
        }

        function Su(e, t, n, r) {
            const a = (e, t) => {
                    if (Gc(t)) return function(e, t) {
                        const n = ou(t);
                        if ("string" === typeof e) return e;
                        return e.map((e => a(e, n)))
                    }(e, t);
                    if (Kc(t, r)) {
                        const n = r[t];
                        return o(e, n)
                    }
                    if (Hc(t)) return function(e, t) {
                        const n = ku(t).reduce(((t, n, r) => {
                            const i = Object.keys(e),
                                o = n => Object.defineProperty(t, r.toString(), {
                                    enumerable: !0,
                                    value: null !== n && void 0 !== n ? n : e[i[r]]
                                }),
                                s = null !== n && void 0 !== n && n.type ? n.type : n;
                            return o(a(e[i[r]], s)), t
                        }), {});
                        return n
                    }(e, t);
                    if (au(t)) return e;
                    if (tu(t)) {
                        const n = e;
                        if ("object" !== typeof n) return n;
                        if (!("low" in n) || !("high" in n)) throw Error("Your object includes the property : ".concat(t, ", containing an Uint256 object without the 'low' and 'high' keys."));
                        return {
                            low: n.low,
                            high: n.high
                        }
                    }
                    if (Jc(t, n)) {
                        const r = n[t].members;
                        return i(e, r)
                    }
                    return e
                },
                i = (e, t) => t.reduce(((t, n) => {
                    if ("undefined" === e[n.name] && (iu(n.type) || !Yc(n.name))) throw Error("Your object needs a property with key : ".concat(n.name, " ."));
                    var r;
                    return r = a(e[n.name], n.type), Object.defineProperty(t, n.name, {
                        enumerable: !0,
                        value: null !== r && void 0 !== r ? r : e[n.name]
                    }), t
                }), {});
            const o = (e, t) => {
                if (qc(t.name)) {
                    const n = e,
                        r = t.name.substring(t.name.indexOf("<") + 1, t.name.lastIndexOf(",")),
                        i = t.name.substring(t.name.indexOf(",") + 1, t.name.lastIndexOf(">"));
                    return n.isOk() ? new fu(0, a(e.unwrap(), r)) : new fu(1, a(e.unwrap(), i))
                }
                if (Xc(t.name)) {
                    const n = e,
                        r = t.name.substring(t.name.indexOf("<") + 1, t.name.lastIndexOf(">"));
                    return n.isSome() ? new Cu(0, a(n.unwrap(), r)) : new Cu(1, {})
                }
                const n = e,
                    r = Object.entries(n.variant).map((e => {
                        if ("undefined" === typeof e[1]) return e;
                        const r = t.type.substring(t.type.lastIndexOf("<") + 1, t.type.lastIndexOf(">"));
                        return "()" === r ? e : [e[0], a(n.unwrap(), r)]
                    }));
                return new uu(Object.fromEntries(r))
            };
            return t.reduce(((t, n) => {
                return Yc(n.name) && !iu(n.type) || (r = a(e[n.name], n.type), Object.defineProperty(t, n.name, {
                    enumerable: !0,
                    value: r
                })), t;
                var r
            }), {})
        }

        function xu(e, t) {
            if (!0 === tu(e)) {
                const e = gu(t);
                return [cu(e.low), cu(e.high)]
            }
            return cu(t)
        }

        function Nu(e) {
            if ("object" === typeof e) {
                const {
                    low: t,
                    high: n
                } = e;
                return [cu(t), cu(n)]
            }
            const t = gu(e);
            return [cu(t.low), cu(t.high)]
        }

        function Bu(e, t, n, r) {
            if (void 0 === e) throw Error("Missing parameter for type ".concat(t));
            if (Array.isArray(e)) {
                const a = [];
                a.push(cu(e.length));
                const i = ou(t);
                return e.reduce(((e, t) => e.concat(Bu(t, i, n, r))), a)
            }
            if (n[t] && n[t].members.length) {
                if (tu(t)) return Nu(e);
                if ("core::starknet::eth_address::EthAddress" === t) return xu(t, e);
                const {
                    members: a
                } = n[t], i = e;
                return a.reduce(((e, t) => e.concat(Bu(i[t.name], t.type, n, r))), [])
            }
            if (Hc(t)) {
                const a = function(e, t) {
                    const n = ku(t),
                        r = Object.values(e);
                    if (r.length !== n.length) throw Error("ParseTuple: provided and expected abi tuple size do not match.\n      provided: ".concat(r, " \n      expected: ").concat(n));
                    return n.map(((e, t) => {
                        var n;
                        return {
                            element: r[t],
                            type: null !== (n = e.type) && void 0 !== n ? n : e
                        }
                    }))
                }(e, t);
                return a.reduce(((e, t) => {
                    const a = Bu(t.element, t.type, n, r);
                    return e.concat(a)
                }), [])
            }
            if (tu(t)) return Nu(e);
            if (Kc(t, r)) {
                const {
                    variants: a
                } = r[t];
                if (Xc(t)) {
                    const t = e;
                    if (t.isSome()) {
                        const e = a.find((e => "Some" === e.name));
                        if ("undefined" === typeof e) throw Error("Error in abi : Option has no 'Some' variant.");
                        const i = e.type;
                        if ("()" === i) return (0).toString();
                        const o = Bu(t.unwrap(), i, n, r);
                        return Array.isArray(o) ? [(0).toString(), ...o] : [(0).toString(), o]
                    }
                    return 1..toString()
                }
                if (qc(t)) {
                    const t = e;
                    if (t.isOk()) {
                        const e = a.find((e => "Ok" === e.name));
                        if ("undefined" === typeof e) throw Error("Error in abi : Result has no 'Ok' variant.");
                        const i = e.type;
                        if ("()" === i) return (0).toString();
                        const o = Bu(t.unwrap(), i, n, r);
                        return Array.isArray(o) ? [(0).toString(), ...o] : [(0).toString(), o]
                    }
                    const i = a.find((e => "Err" === e.name));
                    if ("undefined" === typeof i) throw Error("Error in abi : Result has no 'Err' variant.");
                    const o = i.type;
                    if ("()" === o) return 1..toString();
                    const s = Bu(t.unwrap(), o, n, r);
                    return Array.isArray(s) ? [1..toString(), ...s] : [1..toString(), s]
                }
                const i = e,
                    o = i.activeVariant(),
                    s = a.find((e => e.name === o));
                if ("undefined" === typeof s) throw Error("Not find in abi : Enum has no '".concat(o, "' variant."));
                const l = s.type,
                    g = a.findIndex((e => e.name === o));
                if ("()" === l) return g.toString();
                const A = Bu(i.unwrap(), l, n, r);
                return Array.isArray(A) ? [g.toString(), ...A] : [g.toString(), A]
            }
            if ("object" === typeof e) throw Error("Parameter ".concat(e, " do not align with abi parameter ").concat(t));
            return xu(t, e)
        }

        function Du(e, t) {
            let n;
            switch (!0) {
                case nu(e):
                    return n = t.next().value, Boolean(BigInt(n));
                case tu(e):
                    return Uc({
                        low: t.next().value,
                        high: t.next().value
                    });
                default:
                    return n = t.next().value, BigInt(n)
            }
        }

        function Mu(e, t, n, r) {
            if ("()" === t.type) return {};
            if (tu(t.type)) {
                return Uc({
                    low: e.next().value,
                    high: e.next().value
                })
            }
            if (Gc(t.type)) {
                const a = [],
                    i = {
                        name: "",
                        type: ou(t.type)
                    },
                    o = BigInt(e.next().value);
                for (; a.length < o;) a.push(Mu(e, i, n, r));
                return a
            }
            if (n && t.type in n && n[t.type]) return "core::starknet::eth_address::EthAddress" === t.type ? Du(t.type, e) : n[t.type].members.reduce(((t, a) => (t[a.name] = Mu(e, a, n, r), t)), {});
            if (r && t.type in r && r[t.type]) {
                const a = Number(e.next().value),
                    i = r[t.type].variants.reduce(((t, i, o) => o === a ? (t[i.name] = Mu(e, {
                        name: "",
                        type: i.type
                    }, n, r), t) : (t[i.name] = void 0, t)), {});
                if (t.type.startsWith("core::option::Option")) {
                    const e = 0 === a ? i.Some : void 0;
                    return new Cu(a, e)
                }
                if (t.type.startsWith("core::result::Result")) {
                    let e;
                    return e = 0 === a ? i.Ok : i.Err, new fu(a, e)
                }
                return new uu(i)
            }
            if (Hc(t.type)) {
                return ku(t.type).reduce(((t, a, i) => {
                    const o = null !== a && void 0 !== a && a.name ? a.name : i,
                        s = {
                            name: o,
                            type: null !== a && void 0 !== a && a.type ? a.type : a
                        };
                    return t[o] = Mu(e, s, n, r), t
                }), {})
            }
            if (Gc(t.type)) {
                const a = [],
                    i = {
                        name: "",
                        type: ou(t.type)
                    },
                    o = BigInt(e.next().value);
                for (; a.length < o;) a.push(Mu(e, i, n, r));
                return a
            }
            return Du(t.type, e)
        }

        function Ru(e, t, n, r, a) {
            const {
                name: i,
                type: o
            } = t;
            let s;
            switch (!0) {
                case Yc(i):
                    return s = e.next().value, BigInt(s);
                case n && o in n || Hc(o):
                case r && Kc(o, r):
                    return Mu(e, t, n, r);
                case Gc(o):
                    if (iu(o)) return Mu(e, t, n, r);
                    const l = [];
                    if (a && a["".concat(i, "_len")]) {
                        const o = a["".concat(i, "_len")];
                        for (; l.length < o;) l.push(Mu(e, {
                            name: i,
                            type: t.type.replace("*", "")
                        }, n, r))
                    }
                    return l;
                default:
                    return Du(o, e)
            }
        }
        var Tu = (e, t) => {
                if (ic("string" === typeof e || "number" === typeof e || "bigint" === typeof e, "Validate: arg ".concat(t.name, " should be a felt typed as (String, Number or BigInt)")), "string" === typeof e && !sc(e)) return;
                const n = BigInt(e.toString(10));
                ic(n >= 0n && n <= 2n ** 252n - 1n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 2^252-1]"))
            },
            Ou = (e, t) => {
                "number" === typeof e && ic(e <= Number.MAX_SAFE_INTEGER, "Validation: Parameter is to large to be typed as Number use (BigInt or String)"), ic("string" === typeof e || "number" === typeof e || "bigint" === typeof e || "object" === typeof e && "low" in e && "high" in e, "Validate: arg ".concat(t.name, " of cairo type ").concat(t.type, " should be type (String, Number or BigInt), but is ").concat(typeof e, " ").concat(e, "."));
                const n = "object" === typeof e ? Uc(e) : lc(e);
                switch (t.type) {
                    case "core::integer::u8":
                        ic(n >= 0n && n <= 255n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0 - 255]"));
                        break;
                    case "core::integer::u16":
                        ic(n >= 0n && n <= 65535n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 65535]"));
                        break;
                    case "core::integer::u32":
                        ic(n >= 0n && n <= 4294967295n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 4294967295]"));
                        break;
                    case "core::integer::u64":
                        ic(n >= 0n && n <= 2n ** 64n - 1n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 2^64-1]"));
                        break;
                    case "core::integer::u128":
                        ic(n >= 0n && n <= 2n ** 128n - 1n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 2^128-1]"));
                        break;
                    case "core::integer::u256":
                        ic(n >= 0n && n <= 2n ** 256n - 1n, "Validate: arg ".concat(t.name, " is ").concat(t.type, " 0 - 2^256-1"));
                        break;
                    case "core::starknet::class_hash::ClassHash":
                    case "core::starknet::contract_address::ContractAddress":
                        ic(n >= 0n && n <= 2n ** 252n - 1n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 2^252-1]"))
                }
            },
            ju = (e, t) => {
                ic("boolean" === typeof e, "Validate: arg ".concat(t.name, " of cairo type ").concat(t.type, " should be type (Boolean)"))
            },
            Lu = (e, t, n) => {
                if ("core::integer::u256" !== t.type)
                    if ("core::starknet::eth_address::EthAddress" !== t.type) ic("object" === typeof e && !Array.isArray(e), "Validate: arg ".concat(t.name, " is cairo type struct (").concat(t.type, "), and should be defined as js object (not array)")), n[t.type].members.forEach((n => {
                        let {
                            name: r
                        } = n;
                        ic(Object.keys(e).includes(r), "Validate: arg ".concat(t.name, " should have a property ").concat(r))
                    }));
                    else {
                        ic("object" !== typeof e, "EthAddress type is waiting a BigNumberish. Got ".concat(e));
                        const n = BigInt(e.toString(10));
                        ic(n >= 0n && n <= 2n ** 160n - 1n, "Validate: arg ".concat(t.name, " cairo typed ").concat(t.type, " should be in range [0, 2^160-1]"))
                    }
                else Ou(e, t)
            },
            _u = (e, t) => {
                ic("object" === typeof e && !Array.isArray(e), "Validate: arg ".concat(t.name, " is cairo type Enum (").concat(t.type, "), and should be defined as js object (not array)"));
                const n = Object.getOwnPropertyNames(Object.getPrototypeOf(e)),
                    r = [...Object.getOwnPropertyNames(e), ...n];
                if (!(Xc(t.type) && r.includes("isSome") && r.includes("isNone")) && !(qc(t.type) && r.includes("isOk") && r.includes("isErr")) && (!r.includes("variant") || !r.includes("activeVariant"))) throw new Error("Validate Enum: argument ".concat(t.name, ", type ").concat(t.type, ", value received ").concat(e, ", is not an Enum."))
            },
            zu = (e, t) => {
                ic("object" === typeof e && !Array.isArray(e), "Validate: arg ".concat(t.name, " should be a tuple (defined as object)"))
            },
            Qu = (e, t, n, r) => {
                const a = ou(t.type);
                if (!Wc(a) || !Oc(e)) switch (ic(Array.isArray(e), "Validate: arg ".concat(t.name, " should be an Array")), !0) {
                    case Wc(a):
                        e.forEach((e => Tu(e, t)));
                        break;
                    case Hc(a):
                        e.forEach((e => zu(e, {
                            name: t.name,
                            type: a
                        })));
                        break;
                    case Gc(a):
                        e.forEach((e => Qu(e, {
                            name: "",
                            type: a
                        }, n, r)));
                        break;
                    case Jc(a, n):
                        e.forEach((e => Lu(e, {
                            name: t.name,
                            type: a
                        }, n)));
                        break;
                    case Kc(a, r):
                        e.forEach((e => _u(e, {
                            name: t.name,
                            type: a
                        })));
                        break;
                    case $c(a) || eu(a):
                        e.forEach((e => Ou(e, t)));
                        break;
                    case nu(a):
                        e.forEach((e => ju(e, t)));
                        break;
                    default:
                        throw new Error("Validate Unhandled: argument ".concat(t.name, ", type ").concat(t.type, ", value ").concat(e))
                }
            };

        function Pu(e, t, n, r) {
            e.inputs.reduce(((e, a) => {
                const i = t[e];
                switch (!0) {
                    case Yc(a.name):
                        return e;
                    case Wc(a.type):
                        Tu(i, a);
                        break;
                    case $c(a.type) || eu(a.type):
                        Ou(i, a);
                        break;
                    case nu(a.type):
                        ju(i, a);
                        break;
                    case Gc(a.type):
                        Qu(i, a, n, r);
                        break;
                    case Jc(a.type, n):
                        Lu(i, a, n);
                        break;
                    case Kc(a.type, r):
                        _u(i, a);
                        break;
                    case Hc(a.type):
                        zu(i, a);
                        break;
                    default:
                        throw new Error("Validate Unhandled: argument ".concat(a.name, ", type ").concat(a.type, ", value ").concat(i))
                }
                return e + 1
            }), 0)
        }
        var Uu = class {
            constructor(e) {
                this.structs = Uu.getAbiStruct(e), this.enums = Uu.getAbiEnum(e), this.parser = bu(e), this.abi = this.parser.getLegacyFormat()
            }
            validate(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if ("DEPLOY" !== e) {
                    ic(this.abi.filter((t => {
                        if ("function" !== t.type) return !1;
                        const n = "view" === t.stateMutability || "view" === t.state_mutability;
                        return "INVOKE" === e ? !n : n
                    })).map((e => e.name)).includes(t), "".concat("INVOKE" === e ? "invocable" : "viewable", " method not found in abi"))
                }
                const r = this.abi.find((n => "DEPLOY" === e ? n.name === t && "constructor" === n.type : n.name === t && "function" === n.type));
                if (vu(t, n, r)) return;
                const a = this.parser.methodInputsLength(r);
                if (n.length !== a) throw Error("Invalid number of arguments, expected ".concat(a, " arguments, but got ").concat(n.length));
                Pu(r, n, this.structs, this.enums)
            }
            compile(e, t) {
                const n = this.abi.find((t => t.name === e));
                if (vu(e, t, n)) return [];
                let r;
                if (Array.isArray(t)) r = t;
                else {
                    const e = Su(t, n.inputs, this.structs, this.enums);
                    r = Object.values(e), Pu(n, r, this.structs, this.enums)
                }
                const a = r[Symbol.iterator](),
                    i = n.inputs.reduce(((e, t) => Yc(t.name) && !iu(t.type) ? e : e.concat(function(e, t, n, r) {
                        const {
                            name: a,
                            type: i
                        } = t;
                        let {
                            value: o
                        } = e.next();
                        switch (!0) {
                            case Gc(i):
                                if (!Array.isArray(o) && !Rc(o)) throw Error("ABI expected parameter ".concat(a, " to be array or long string, got ").concat(o));
                                return "string" === typeof o && (o = jc(o)), Bu(o, t.type, n, r);
                            case "core::starknet::eth_address::EthAddress" === i:
                                return xu(i, o);
                            case Jc(i, n) || Hc(i) || tu(i):
                            case Kc(i, r):
                                return Bu(o, i, n, r);
                            default:
                                return xu(i, o)
                        }
                    }(a, t, this.structs, this.enums))), []);
                return Object.defineProperty(i, "__compiled__", {
                    enumerable: !1,
                    writable: !1,
                    value: !0
                }), i
            }
            static compile(e) {
                const t = e => {
                    const t = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".";
                        const r = Array.isArray(e) ? [e.length.toString(), ...e] : e;
                        return Object.entries(r).flatMap((e => {
                            let [a, i] = e, o = i;
                            "entrypoint" === a ? o = Sc(o) : Oc(o) && (o = jc(o));
                            const s = Array.isArray(r) && "0" === a ? "$$len" : a;
                            if (gc(o)) return [
                                ["".concat(n).concat(s), cu(o)]
                            ];
                            if (Object(o) === o) {
                                const e = Object.getOwnPropertyNames(Object.getPrototypeOf(o)),
                                    r = [...Object.getOwnPropertyNames(o), ...e];
                                if (r.includes("isSome") && r.includes("isNone")) {
                                    const e = o,
                                        r = e.isSome() ? 0 : 1;
                                    return e.isSome() ? t({
                                        0: r,
                                        1: e.unwrap()
                                    }, "".concat(n).concat(s, ".")) : [
                                        ["".concat(n).concat(s), cu(r)]
                                    ]
                                }
                                if (r.includes("isOk") && r.includes("isErr")) {
                                    const e = o,
                                        r = e.isOk() ? 0 : 1;
                                    return t({
                                        0: r,
                                        1: e.unwrap()
                                    }, "".concat(n).concat(s, "."))
                                }
                                if (r.includes("variant") && r.includes("activeVariant")) {
                                    const e = o,
                                        r = e.activeVariant(),
                                        a = Object.keys(e.variant).findIndex((e => e === r));
                                    return "object" === typeof e.unwrap() && 0 === Object.keys(e.unwrap()).length ? [
                                        ["".concat(n).concat(s), cu(a)]
                                    ] : t({
                                        0: a,
                                        1: e.unwrap()
                                    }, "".concat(n).concat(s, "."))
                                }
                                return t(o, "".concat(n).concat(s, "."))
                            }
                            return [
                                ["".concat(n).concat(s), cu(o)]
                            ]
                        }))
                    };
                    return Object.fromEntries(t(e))
                };
                let n;
                if (Array.isArray(e)) {
                    const r = t({
                        ...e
                    });
                    n = Object.values(r)
                } else {
                    const r = t(e);
                    n = Object.values(r)
                }
                return Object.defineProperty(n, "__compiled__", {
                    enumerable: !1,
                    writable: !1,
                    value: !0
                }), n
            }
            parse(e, t) {
                const {
                    outputs: n
                } = this.abi.find((t => t.name === e)), r = t.flat()[Symbol.iterator](), a = n.flat().reduce(((e, t, n) => {
                    var a;
                    const i = null !== (a = t.name) && void 0 !== a ? a : n;
                    return e[i] = Ru(r, t, this.structs, this.enums, e), e[i] && e["".concat(i, "_len")] && delete e["".concat(i, "_len")], e
                }), {});
                return 1 === Object.keys(a).length && 0 in a ? a[0] : a
            }
            format(e, t, n) {
                return mu(this.parse(e, t), n)
            }
            static getAbiStruct(e) {
                return e.filter((e => "struct" === e.type)).reduce(((e, t) => ({
                    ...e,
                    [t.name]: t
                })), {})
            }
            static getAbiEnum(e) {
                const t = e.filter((e => "enum" === e.type)).reduce(((e, t) => ({
                    ...e,
                    [t.name]: t
                })), {});
                return delete t["core::bool"], t
            }
            static toCalldata() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return Uu.compile(e)
            }
            static toHex() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return Uu.compile(e).map((e => Ac(e)))
            }
        };
        eA({}, {
            calculateContractAddressFromHash: () => iI,
            calculateDeclareTransactionHash: () => nI,
            calculateDeployAccountTransactionHash: () => rI,
            calculateDeployTransactionHash: () => tI,
            calculateTransactionHash: () => aI,
            calculateTransactionHashCommon: () => eI,
            computeCompiledClassHash: () => cI,
            computeContractClassHash: () => CI,
            computeHashOnElements: () => $u,
            computeLegacyContractClassHash: () => gI,
            computeSierraContractClassHash: () => II,
            default: () => lI,
            feeTransactionVersion: () => Ku,
            feeTransactionVersion_2: () => Xu,
            formatSpaces: () => sI,
            getSelector: () => xc,
            getSelectorFromName: () => Sc,
            getVersionsByType: () => qu,
            keccakBn: () => Ec,
            poseidon: () => t,
            starknetKeccak: () => kc,
            transactionVersion: () => Vu,
            transactionVersion_2: () => Ju
        });
        var Fu = {};
        eA(Fu, {
            starkCurve: () => a,
            weierstrass: () => r
        });
        eA({}, {
            parse: () => Yu,
            parseAlwaysAsBig: () => Wu,
            stringify: () => Gu,
            stringifyAlwaysAsBig: () => Hu
        });
        var Zu = e => {
                if (!Mi(e)) return parseFloat(e);
                const t = parseInt(e, 10);
                return Number.isSafeInteger(t) ? t : BigInt(e)
            },
            Yu = e => $i(String(e), void 0, Zu),
            Wu = e => $i(String(e), void 0, Hi),
            Gu = (e, t, n, r) => Mo(e, t, n, r),
            Hu = Gu,
            Vu = yA,
            Ju = wA,
            Ku = bA,
            Xu = vA;

        function qu(e) {
            return "fee" === e ? {
                v1: Ku,
                v2: Xu
            } : {
                v1: Vu,
                v2: Ju
            }
        }

        function $u(e) {
            return [...e, e.length].reduce(((e, t) => di(lc(e), lc(t))), 0).toString()
        }

        function eI(e, t, n, r, a, i, o) {
            let s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [];
            const l = $u(a);
            return $u([e, t, n, r, l, i, o, ...s])
        }

        function tI(e, t, n, r) {
            return eI("0x6465706c6f79", n, e, Sc(arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "constructor"), t, 0, r)
        }

        function nI(e, t, n, r, a, i, o) {
            return eI("0x6465636c617265", n, t, 0, [e], r, a, [i, ...o ? [o] : []])
        }

        function rI(e, t, n, r, a, i, o, s) {
            return eI("0x6465706c6f795f6163636f756e74", a, e, 0, [t, r, ...n], i, o, [s])
        }

        function aI(e, t, n, r, a, i) {
            return eI("0x696e766f6b65", t, e, 0, n, r, a, [i])
        }

        function iI(e, t, n, r) {
            const a = $u(Uu.compile(n)),
                i = $u([cu("0x535441524b4e45545f434f4e54524143545f41444452455353"), r, e, t, a]);
            return Ac(BigInt(i) % NA)
        }

        function oI(e, t) {
            return "attributes" === e || "accessible_scopes" === e ? Array.isArray(t) && 0 === t.length ? void 0 : t : "debug_info" === e ? null : null === t ? void 0 : t
        }

        function sI(e) {
            let t = !1;
            const n = [];
            for (const r of e) '"' === r && !1 === (n.length > 0 && "\\" === n.slice(-1)[0]) && (t = !t), t ? n.push(r) : n.push(":" === r ? ": " : "," === r ? ", " : r);
            return n.join("")
        }

        function lI(e) {
            const {
                abi: t,
                program: n
            } = e, r = sI(Gu({
                abi: t,
                program: n
            }, oI));
            return cA(pi(iA(r)).toString(16))
        }

        function gI(e) {
            const t = "string" === typeof e ? Yu(e) : e,
                n = Ac(SA),
                r = $u(t.entry_points_by_type.EXTERNAL.flatMap((e => [e.selector, e.offset]))),
                a = $u(t.entry_points_by_type.L1_HANDLER.flatMap((e => [e.selector, e.offset]))),
                i = $u(t.entry_points_by_type.CONSTRUCTOR.flatMap((e => [e.selector, e.offset]))),
                o = $u(t.program.builtins.map((e => Lc(e)))),
                s = lI(t),
                l = $u(t.program.data);
            return $u([n, r, a, i, o, s, l])
        }

        function AI(e) {
            const t = e.flatMap((e => {
                return [BigInt(e.selector), BigInt(e.offset), (t = e.builtins, Di(t.flatMap((e => BigInt(Lc(e))))))];
                var t
            }));
            return Di(t)
        }

        function cI(e) {
            const t = BigInt(Lc("COMPILED_CLASS_V1")),
                n = AI(e.entry_points_by_type.EXTERNAL),
                r = AI(e.entry_points_by_type.L1_HANDLER),
                a = AI(e.entry_points_by_type.CONSTRUCTOR),
                i = Di(e.bytecode.map((e => BigInt(e))));
            return Ac(Di([t, n, r, a, i]))
        }

        function uI(e) {
            const t = e.flatMap((e => [BigInt(e.selector), BigInt(e.function_idx)]));
            return Di(t)
        }

        function II(e) {
            const t = BigInt(Lc("CONTRACT_CLASS_V0.1.0")),
                n = uI(e.entry_points_by_type.EXTERNAL),
                r = uI(e.entry_points_by_type.L1_HANDLER),
                a = uI(e.entry_points_by_type.CONSTRUCTOR),
                i = function(e) {
                    const t = sI(Gu(e.abi, null));
                    return BigInt(cA(pi(iA(t)).toString(16)))
                }(e),
                o = Di(e.sierra_program.map((e => BigInt(e))));
            return Ac(Di([t, n, r, a, i, o]))
        }

        function CI(e) {
            const t = "string" === typeof e ? Yu(e) : e;
            return "sierra_program" in t ? II(t) : gI(t)
        }

        function dI(e) {
            const t = "string" === typeof e ? e : Gu(e);
            return lA(Jg(t))
        }

        function fI(e) {
            if (Array.isArray(e)) return e;
            const t = aA(Kg(sA(e)));
            return Yu(t)
        }

        function hI() {
            return ii(ti.randomPrivateKey())
        }

        function pI(e) {
            return cA(e).toLowerCase()
        }

        function mI(e) {
            if (!e) throw Error("formatSignature: provided signature is undefined");
            if (Array.isArray(e)) return e.map((e => Ac(e)));
            try {
                const {
                    r: t,
                    s: n
                } = e;
                return [Ac(t), Ac(n)]
            } catch (t) {
                throw new Error("Signature need to be weierstrass.SignatureType or an array for custom")
            }
        }

        function yI(e) {
            return fc(mI(e))
        }

        function wI(e) {
            return hc(mI(e))
        }

        function bI(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
            const n = Math.round(100 * (1 + t));
            return lc(e) * lc(n) / 100n
        }

        function vI(e) {
            return "sierra_program" in ("string" === typeof e ? Yu(e) : e)
        }
        eA({}, {
            compressProgram: () => dI,
            decompressProgram: () => fI,
            estimatedFeeToMaxFee: () => bI,
            formatSignature: () => mI,
            makeAddress: () => pI,
            randomAddress: () => hI,
            signatureToDecimalArray: () => yI,
            signatureToHexArray: () => wI
        });
        var EI = "undefined" !== typeof window && window.fetch || "undefined" !== typeof global && global.fetch || Xg;

        function kI(e) {
            return new Promise((t => {
                setTimeout(t, e)
            }))
        }

        function SI(e) {
            const t = {
                ...e
            };
            return delete t.sierra_program_debug_info, t.abi = sI(Gu(e.abi)), t.sierra_program = sI(Gu(e.sierra_program)), t.sierra_program = dI(t.sierra_program), t
        }

        function xI(e) {
            const t = "string" === typeof e ? Yu(e) : e;
            return vI(e) ? SI(t) : {
                ...t,
                ..."program" in t && {
                    program: dI(t.program)
                }
            }
        }
        eA({}, {
            createSierraContractClass: () => SI,
            parseContract: () => xI,
            wait: () => kI
        });
        var NI = class {
            parseGetBlockResponse(e) {
                return {
                    timestamp: e.timestamp,
                    block_hash: "block_hash" in e ? e.block_hash : "",
                    block_number: "block_number" in e ? e.block_number : -1,
                    new_root: "new_root" in e ? e.new_root : "",
                    parent_hash: e.parent_hash,
                    status: "status" in e ? e.status : "PENDING",
                    transactions: e.transactions
                }
            }
            parseGetTransactionResponse(e) {
                return {
                    calldata: "calldata" in e ? e.calldata : [],
                    contract_address: "contract_address" in e ? e.contract_address : "",
                    sender_address: "sender_address" in e ? e.sender_address : "",
                    max_fee: "max_fee" in e ? e.max_fee : "",
                    nonce: "nonce" in e ? e.nonce : "",
                    signature: "signature" in e ? e.signature : [],
                    transaction_hash: e.transaction_hash,
                    version: e.version
                }
            }
            parseFeeEstimateResponse(e) {
                return {
                    overall_fee: lc(e[0].overall_fee),
                    gas_consumed: lc(e[0].gas_consumed),
                    gas_price: lc(e[0].gas_price)
                }
            }
            parseFeeEstimateBulkResponse(e) {
                return e.map((e => ({
                    overall_fee: lc(e.overall_fee),
                    gas_consumed: lc(e.gas_consumed),
                    gas_price: lc(e.gas_price)
                })))
            }
            parseCallContractResponse(e) {
                return {
                    result: e
                }
            }
            parseSimulateTransactionResponse(e) {
                return e.map((e => ({
                    ...e,
                    suggestedMaxFee: bI(BigInt(e.fee_estimation.overall_fee))
                })))
            }
            parseContractClassResponse(e) {
                return {
                    ...e,
                    abi: "string" === typeof e.abi ? JSON.parse(e.abi) : e.abi
                }
            }
        };
        var BI = class extends Error {
                constructor(e) {
                    super(e), Object.defineProperty(this, "name", {
                            value: new.target.name,
                            enumerable: !1,
                            configurable: !0
                        }),
                        function(e, t) {
                            const {
                                setPrototypeOf: n
                            } = Object;
                            n ? n(e, t) : e.__proto__ = t
                        }(this, new.target.prototype),
                        function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.constructor;
                            const {
                                captureStackTrace: n
                            } = Error;
                            n && n(e, t)
                        }(this)
                }
            },
            DI = class extends BI {},
            MI = class extends DI {
                constructor(e, t) {
                    super(e), this.errorCode = t
                }
            },
            RI = class extends DI {
                constructor(e, t) {
                    super(e), this.errorCode = t
                }
            };
        eA({}, {
            StarknetIdContract: () => FI,
            getStarknetIdContract: () => ZI,
            useDecoded: () => PI,
            useEncoded: () => UI
        });
        var TI = "abcdefghijklmnopqrstuvwxyz0123456789-",
            OI = BigInt(TI.length + 1),
            jI = "\u8fd9\u6765",
            LI = BigInt(TI.length),
            _I = BigInt(jI.length),
            zI = BigInt(jI.length + 1);

        function QI(e) {
            let t = 0;
            for (; e.endsWith(jI[jI.length - 1]);) e = e.substring(0, e.length - 1), t += 1;
            return [e, t]
        }

        function PI(e) {
            let t = "";
            return e.forEach((e => {
                for (; e !== EA;) {
                    const n = e % OI;
                    if (e /= OI, n === BigInt(TI.length)) {
                        const n = e / zI;
                        if (n === EA) {
                            const r = e % zI;
                            e = n, t += r === EA ? TI[0] : jI[Number(r) - 1]
                        } else {
                            t += jI[Number(e % _I)], e /= _I
                        }
                    } else t += TI[Number(n)]
                }
                const [n, r] = QI(t);
                r && (t = n + (r % 2 === 0 ? jI[jI.length - 1].repeat(r / 2 - 1) + jI[0] + TI[1] : jI[jI.length - 1].repeat((r - 1) / 2 + 1))), t += "."
            })), t ? t.concat("stark") : t
        }

        function UI(e) {
            let t = BigInt(0),
                n = BigInt(1);
            if (e.endsWith(jI[0] + TI[1])) {
                const [t, n] = QI(e.substring(0, e.length - 2));
                e = t + jI[jI.length - 1].repeat(2 * (n + 1))
            } else {
                const [t, n] = QI(e);
                n && (e = t + jI[jI.length - 1].repeat(1 + 2 * (n - 1)))
            }
            for (let r = 0; r < e.length; r += 1) {
                const a = e[r],
                    i = TI.indexOf(a),
                    o = BigInt(TI.indexOf(a));
                if (-1 !== i) r === e.length - 1 && e[r] === TI[0] ? (t += n * LI, n *= OI, n *= OI) : (t += n * o, n *= OI);
                else if (-1 !== jI.indexOf(a)) {
                    t += n * LI, n *= OI;
                    const i = (r === e.length - 1 ? 1 : 0) + jI.indexOf(a);
                    t += n * BigInt(i), n *= _I
                }
            }
            return t
        }
        var FI = (e => (e.MAINNET = "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678", e.TESTNET = "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce", e))(FI || {});

        function ZI(e) {
            switch (e) {
                case "0x534e5f4d41494e":
                    return "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678";
                case "0x534e5f474f45524c49":
                    return "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce";
                default:
                    throw new Error("Starknet.id is not yet deployed on this network")
            }
        }
        async function YI(e, t, n) {
            const r = await e.getChainId(),
                a = null !== n && void 0 !== n ? n : ZI(r);
            try {
                const n = await e.callContract({
                        contractAddress: a,
                        entrypoint: "address_to_domain",
                        calldata: Uu.compile({
                            address: t
                        })
                    }),
                    r = PI(n.result.map((e => BigInt(e))).slice(1));
                if (!r) throw Error("Starkname not found");
                return r
            } catch (i) {
                if (i instanceof Error && "Starkname not found" === i.message) throw i;
                throw Error("Could not get stark name")
            }
        }
        async function WI(e, t, n) {
            const r = await e.getChainId(),
                a = null !== n && void 0 !== n ? n : ZI(r);
            try {
                return (await e.callContract({
                    contractAddress: a,
                    entrypoint: "domain_to_address",
                    calldata: Uu.compile({
                        domain: [UI(t.replace(".stark", "")).toString(10)]
                    })
                })).result[0]
            } catch {
                throw Error("Could not get address from stark name")
            }
        }
        var GI = Object.values(GA),
            HI = class {
                constructor(e) {
                    this.hash = null, this.number = null, this.tag = null, this.valueOf = () => this.number, this.toString = () => this.hash, this.setIdentifier(e)
                }
                setIdentifier(e) {
                    "string" === typeof e && sc(e) ? this.hash = e : "bigint" === typeof e ? this.hash = Ac(e) : "number" === typeof e ? this.number = e : "string" === typeof e && GI.includes(e) ? this.tag = e : this.tag = "pending"
                }
                get queryIdentifier() {
                    return null !== this.number ? "blockNumber=".concat(this.number) : null !== this.hash ? "blockHash=".concat(this.hash) : "blockNumber=".concat(this.tag)
                }
                get identifier() {
                    return null !== this.number ? {
                        block_number: this.number
                    } : null !== this.hash ? {
                        block_hash: this.hash
                    } : this.tag
                }
                set identifier(e) {
                    this.setIdentifier(e)
                }
                get sequencerIdentifier() {
                    var e;
                    return null !== this.hash ? {
                        blockHash: this.hash
                    } : {
                        blockNumber: null !== (e = this.number) && void 0 !== e ? e : this.tag
                    }
                }
            },
            VI = function(e) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OA;
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || console.warn("Using default public node url, please provide nodeUrl in provider options!");
                const n = jA[null !== e && void 0 !== e ? e : "SN_GOERLI"],
                    r = Math.floor(Math.random() * n.length);
                return "".concat(n[r]).concat(t)
            },
            JI = {
                "Content-Type": "application/json"
            },
            KI = "pending",
            XI = 200,
            qI = class {
                constructor(e) {
                    this.responseParser = new NI, this.getBlockHashAndNumber = this.getBlockLatestAccepted, this.getStateUpdate = this.getBlockStateUpdate, this.traceBlockTransactions = this.getBlockTransactionsTraces, this.getTransactionCount = this.getBlockTransactionCount, this.traceTransaction = this.getTransactionTrace, this.getSimulateTransaction = this.simulateTransaction;
                    const {
                        nodeUrl: t,
                        retries: n,
                        headers: r,
                        blockIdentifier: a,
                        chainId: i,
                        rpcVersion: o
                    } = e || {};
                    Object.values(DA).includes(t) ? this.nodeUrl = VI(t, null === e || void 0 === e ? void 0 : e.default, o) : this.nodeUrl = t || VI(void 0, null === e || void 0 === e ? void 0 : e.default, o), this.retries = n || XI, this.headers = {
                        ...JI,
                        ...r
                    }, this.blockIdentifier = a || KI, this.chainId = i
                }
                fetch(e, t) {
                    const n = {
                        id: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        jsonrpc: "2.0",
                        method: e,
                        ...t && {
                            params: t
                        }
                    };
                    return EI(this.nodeUrl, {
                        method: "POST",
                        body: Gu(n),
                        headers: this.headers
                    })
                }
                errorHandler(e, t, n, r) {
                    if (n) {
                        const {
                            code: r,
                            message: a,
                            data: i
                        } = n;
                        throw new DI("RPC: ".concat(e, " with params ").concat(Gu(t), "\n ").concat(r, ": ").concat(a, ": ").concat(Gu(i)))
                    }
                    if (r instanceof DI) throw r;
                    if (r) throw Error(r.message)
                }
                async fetchEndpoint(e, t) {
                    try {
                        const n = await this.fetch(e, t),
                            {
                                error: r,
                                result: a
                            } = await n.json();
                        return this.errorHandler(e, t, r), a
                    } catch (r) {
                        var n;
                        throw this.errorHandler(e, t, null === r || void 0 === r || null === (n = r.response) || void 0 === n ? void 0 : n.data, r), r
                    }
                }
                async getChainId() {
                    var e;
                    return null !== (e = this.chainId) && void 0 !== e || (this.chainId = await this.fetchEndpoint("starknet_chainId")), this.chainId
                }
                async getSpecVersion() {
                    return this.fetchEndpoint("starknet_specVersion")
                }
                async getNonceForAddress(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const n = Ac(e),
                        r = new HI(t).identifier;
                    return this.fetchEndpoint("starknet_getNonce", {
                        contract_address: n,
                        block_id: r
                    })
                }
                async getBlock() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    return this.getBlockWithTxHashes(e).then(this.responseParser.parseGetBlockResponse)
                }
                async getBlockLatestAccepted() {
                    return this.fetchEndpoint("starknet_blockHashAndNumber")
                }
                async getBlockNumber() {
                    return this.fetchEndpoint("starknet_blockNumber")
                }
                async getBlockWithTxHashes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_getBlockWithTxHashes", {
                        block_id: t
                    })
                }
                async getBlockWithTxs() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_getBlockWithTxs", {
                        block_id: t
                    })
                }
                async getBlockStateUpdate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_getStateUpdate", {
                        block_id: t
                    })
                }
                async getBlockTransactionsTraces() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_traceBlockTransactions", {
                        block_id: t
                    })
                }
                async getBlockTransactionCount() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_getBlockTransactionCount", {
                        block_id: t
                    })
                }
                async getPendingTransactions() {
                    const {
                        transactions: e
                    } = await this.getBlock("pending");
                    return Promise.all(e.map((e => this.getTransactionByHash(e))))
                }
                async getTransaction(e) {
                    return this.getTransactionByHash(e).then(this.responseParser.parseGetTransactionResponse)
                }
                async getTransactionByHash(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("starknet_getTransactionByHash", {
                        transaction_hash: t
                    })
                }
                async getTransactionByBlockIdAndIndex(e, t) {
                    const n = new HI(e).identifier;
                    return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", {
                        block_id: n,
                        index: t
                    })
                }
                async getTransactionReceipt(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("starknet_getTransactionReceipt", {
                        transaction_hash: t
                    })
                }
                async getTransactionTrace(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("starknet_traceTransaction", {
                        transaction_hash: t
                    })
                }
                async getTransactionStatus(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("starknet_getTransactionStatus", {
                        transaction_hash: t
                    })
                }
                async simulateTransaction(e, t) {
                    let {
                        blockIdentifier: n = this.blockIdentifier,
                        skipValidate: r = !1,
                        skipFeeCharge: a = !0
                    } = t;
                    const i = new HI(n).identifier,
                        o = [];
                    return r && o.push(HA.ESimulationFlag.SKIP_VALIDATE), a && o.push(HA.ESimulationFlag.SKIP_FEE_CHARGE), this.fetchEndpoint("starknet_simulateTransactions", {
                        block_id: i,
                        transactions: e.map((e => this.buildTransaction(e))),
                        simulation_flags: o
                    }).then(this.responseParser.parseSimulateTransactionResponse)
                }
                async waitForTransaction(e, t) {
                    var n, r, a;
                    const i = Ac(e);
                    let {
                        retries: o
                    } = this, s = !1, l = !1;
                    const g = null !== (n = null === t || void 0 === t ? void 0 : t.retryInterval) && void 0 !== n ? n : 5e3,
                        A = null !== (r = null === t || void 0 === t ? void 0 : t.errorStates) && void 0 !== r ? r : [HA.ETransactionStatus.REJECTED],
                        c = null !== (a = null === t || void 0 === t ? void 0 : t.successStates) && void 0 !== a ? a : [HA.ETransactionExecutionStatus.SUCCEEDED, HA.ETransactionStatus.ACCEPTED_ON_L2, HA.ETransactionStatus.ACCEPTED_ON_L1];
                    let u;
                    for (; !s;) {
                        await kI(g);
                        try {
                            u = await this.getTransactionStatus(i);
                            const e = u.execution_status,
                                t = u.finality_status;
                            if (!t) {
                                throw new Error("waiting for transaction status")
                            }
                            if (A.includes(e) || A.includes(t)) {
                                const n = "".concat(e, ": ").concat(t),
                                    r = new Error(n);
                                throw r.response = u, l = !0, r
                            }(c.includes(e) || c.includes(t)) && (s = !0)
                        } catch (C) {
                            if (C instanceof Error && l) throw C;
                            if (o <= 0) throw new Error("waitForTransaction timed-out with retries ".concat(this.retries))
                        }
                        o -= 1
                    }
                    let I = null;
                    for (; null === I;) {
                        try {
                            I = await this.getTransactionReceipt(i)
                        } catch (C) {
                            if (o <= 0) throw new Error("waitForTransaction timed-out with retries ".concat(this.retries))
                        }
                        o -= 1, await kI(g)
                    }
                    return I
                }
                async getStorageAt(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    const r = Ac(e),
                        a = uc(t),
                        i = new HI(n).identifier;
                    return this.fetchEndpoint("starknet_getStorageAt", {
                        contract_address: r,
                        key: a,
                        block_id: i
                    })
                }
                async getClassHashAt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const n = Ac(e),
                        r = new HI(t).identifier;
                    return this.fetchEndpoint("starknet_getClassHashAt", {
                        block_id: r,
                        contract_address: n
                    })
                }
                async getClassByHash(e) {
                    return this.getClass(e)
                }
                async getClass(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const n = Ac(e),
                        r = new HI(t).identifier;
                    return this.fetchEndpoint("starknet_getClass", {
                        class_hash: n,
                        block_id: r
                    }).then(this.responseParser.parseContractClassResponse)
                }
                async getClassAt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const n = Ac(e),
                        r = new HI(t).identifier;
                    return this.fetchEndpoint("starknet_getClassAt", {
                        block_id: r,
                        contract_address: n
                    }).then(this.responseParser.parseContractClassResponse)
                }
                async getCode(e, t) {
                    throw new Error("RPC does not implement getCode function")
                }
                async getContractVersion(e, t) {
                    let n, {
                        blockIdentifier: r = this.blockIdentifier,
                        compiler: a = !0
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e) n = await this.getClassAt(e, r);
                    else {
                        if (!t) throw Error("getContractVersion require contractAddress or classHash");
                        n = await this.getClass(t, r)
                    }
                    if (vI(n)) {
                        if (a) {
                            return {
                                cairo: "1",
                                compiler: lu(n.abi).compiler
                            }
                        }
                        return {
                            cairo: "1",
                            compiler: void 0
                        }
                    }
                    return {
                        cairo: "0",
                        compiler: "0"
                    }
                }
                async getEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    return this.getInvokeEstimateFee(e, t, n)
                }
                async getInvokeEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    const r = new HI(n).identifier,
                        a = this.buildTransaction({
                            type: "INVOKE_FUNCTION",
                            ...e,
                            ...t
                        }, "fee");
                    return this.fetchEndpoint("starknet_estimateFee", {
                        request: [a],
                        block_id: r
                    }).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getDeclareEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    const r = new HI(n).identifier,
                        a = this.buildTransaction({
                            type: "DECLARE",
                            ...e,
                            ...t
                        }, "fee");
                    return this.fetchEndpoint("starknet_estimateFee", {
                        request: [a],
                        block_id: r
                    }).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getDeployAccountEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    const r = new HI(n).identifier,
                        a = this.buildTransaction({
                            type: "DEPLOY_ACCOUNT",
                            ...e,
                            ...t
                        }, "fee");
                    return this.fetchEndpoint("starknet_estimateFee", {
                        request: [a],
                        block_id: r
                    }).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getEstimateFeeBulk(e, t) {
                    let {
                        blockIdentifier: n = this.blockIdentifier,
                        skipValidate: r = !1
                    } = t;
                    r && console.warn("getEstimateFeeBulk RPC does not support skipValidate");
                    const a = new HI(n).identifier;
                    return this.fetchEndpoint("starknet_estimateFee", {
                        request: e.map((e => this.buildTransaction(e, "fee"))),
                        block_id: a
                    }).then(this.responseParser.parseFeeEstimateBulkResponse)
                }
                async invokeFunction(e, t) {
                    return this.fetchEndpoint("starknet_addInvokeTransaction", {
                        invoke_transaction: {
                            sender_address: e.contractAddress,
                            calldata: Uu.toHex(e.calldata),
                            type: HA.ETransactionType.INVOKE,
                            max_fee: Ac(t.maxFee || 0),
                            version: "0x1",
                            signature: wI(e.signature),
                            nonce: Ac(t.nonce)
                        }
                    })
                }
                async declareContract(e, t) {
                    let {
                        contract: n,
                        signature: r,
                        senderAddress: a,
                        compiledClassHash: i
                    } = e;
                    return vI(n) ? this.fetchEndpoint("starknet_addDeclareTransaction", {
                        declare_transaction: {
                            type: HA.ETransactionType.DECLARE,
                            contract_class: {
                                sierra_program: fI(n.sierra_program),
                                contract_class_version: n.contract_class_version,
                                entry_points_by_type: n.entry_points_by_type,
                                abi: n.abi
                            },
                            compiled_class_hash: i || "",
                            version: mA,
                            max_fee: Ac(t.maxFee || 0),
                            signature: wI(r),
                            sender_address: a,
                            nonce: Ac(t.nonce)
                        }
                    }) : this.fetchEndpoint("starknet_addDeclareTransaction", {
                        declare_transaction: {
                            type: HA.ETransactionType.DECLARE,
                            contract_class: {
                                program: n.program,
                                entry_points_by_type: n.entry_points_by_type,
                                abi: n.abi
                            },
                            version: pA,
                            max_fee: Ac(t.maxFee || 0),
                            signature: wI(r),
                            sender_address: a,
                            nonce: Ac(t.nonce)
                        }
                    })
                }
                async deployAccountContract(e, t) {
                    let {
                        classHash: n,
                        constructorCalldata: r,
                        addressSalt: a,
                        signature: i
                    } = e;
                    return this.fetchEndpoint("starknet_addDeployAccountTransaction", {
                        deploy_account_transaction: {
                            constructor_calldata: Uu.toHex(r || []),
                            class_hash: Ac(n),
                            contract_address_salt: Ac(a || 0),
                            type: HA.ETransactionType.DEPLOY_ACCOUNT,
                            max_fee: Ac(t.maxFee || 0),
                            version: Ac(t.version || 0),
                            signature: wI(i),
                            nonce: Ac(t.nonce)
                        }
                    })
                }
                async callContract(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const n = new HI(t).identifier,
                        r = await this.fetchEndpoint("starknet_call", {
                            request: {
                                contract_address: e.contractAddress,
                                entry_point_selector: Sc(e.entrypoint),
                                calldata: Uu.toHex(e.calldata)
                            },
                            block_id: n
                        });
                    return this.responseParser.parseCallContractResponse(r)
                }
                async estimateMessageFee(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const {
                        from_address: n,
                        to_address: r,
                        entry_point_selector: a,
                        payload: i
                    } = e, o = {
                        from_address: Ac(n),
                        to_address: Ac(r),
                        entry_point_selector: xc(a),
                        payload: wc(i)
                    }, s = new HI(t).identifier;
                    return this.fetchEndpoint("starknet_estimateMessageFee", {
                        message: o,
                        block_id: s
                    })
                }
                async getSyncingStats() {
                    return this.fetchEndpoint("starknet_syncing")
                }
                async getEvents(e) {
                    return this.fetchEndpoint("starknet_getEvents", {
                        filter: e
                    })
                }
                async getStarkName(e, t) {
                    return YI(this, e, t)
                }
                async getAddressFromStarkName(e, t) {
                    return WI(this, e, t)
                }
                buildTransaction(e, t) {
                    const n = qu(t),
                        r = {
                            signature: wI(e.signature),
                            nonce: Ac(e.nonce),
                            max_fee: Ac(e.maxFee || 0)
                        };
                    if ("INVOKE_FUNCTION" === e.type) return {
                        type: HA.ETransactionType.INVOKE,
                        sender_address: e.contractAddress,
                        calldata: Uu.toHex(e.calldata),
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    if ("DECLARE" === e.type) return vI(e.contract) ? {
                        type: e.type,
                        contract_class: {
                            ...e.contract,
                            sierra_program: fI(e.contract.sierra_program)
                        },
                        compiled_class_hash: e.compiledClassHash || "",
                        sender_address: e.senderAddress,
                        version: Ac(e.version || n.v2),
                        ...r
                    } : {
                        type: e.type,
                        contract_class: e.contract,
                        sender_address: e.senderAddress,
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    if ("DEPLOY_ACCOUNT" === e.type) return {
                        type: e.type,
                        constructor_calldata: Uu.toHex(e.constructorCalldata || []),
                        class_hash: Ac(e.classHash),
                        contract_address_salt: Ac(e.addressSalt || 0),
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    throw Error("RPC buildTransaction received unknown TransactionType")
                }
            },
            $I = class {},
            eC = class extends $I {
                parseGetBlockResponse(e) {
                    return {
                        ...e,
                        new_root: e.state_root,
                        parent_hash: e.parent_block_hash,
                        transactions: Object.values(e.transactions).map((e => "transaction_hash" in e && e.transaction_hash)).filter(Boolean)
                    }
                }
                parseGetTransactionResponse(e) {
                    if ("NOT_RECEIVED" === e.status && "NOT_RECEIVED" === e.finality_status) throw new DI;
                    return {
                        ...e,
                        calldata: "calldata" in e.transaction ? e.transaction.calldata : [],
                        contract_class: "contract_class" in e.transaction ? e.transaction.contract_class : void 0,
                        entry_point_selector: "entry_point_selector" in e.transaction ? e.transaction.entry_point_selector : void 0,
                        max_fee: "max_fee" in e.transaction ? e.transaction.max_fee : void 0,
                        nonce: e.transaction.nonce,
                        sender_address: "sender_address" in e.transaction ? e.transaction.sender_address : void 0,
                        signature: "signature" in e.transaction ? e.transaction.signature : void 0,
                        transaction_hash: "transaction_hash" in e.transaction ? e.transaction.transaction_hash : void 0,
                        version: "version" in e.transaction ? e.transaction.version : void 0
                    }
                }
                parseGetTransactionReceiptResponse(e) {
                    return {
                        ...e,
                        messages_sent: e.l2_to_l1_messages,
                        ..."revert_error" in e && {
                            revert_reason: e.revert_error
                        }
                    }
                }
                parseFeeEstimateResponse(e) {
                    if ("overall_fee" in e) {
                        let t = {};
                        try {
                            t = {
                                gas_consumed: lc(e.gas_usage),
                                gas_price: lc(e.gas_price)
                            }
                        } catch {}
                        return {
                            overall_fee: lc(e.overall_fee),
                            ...t
                        }
                    }
                    return {
                        overall_fee: lc(e.amount)
                    }
                }
                parseFeeEstimateBulkResponse(e) {
                    return [].concat(e).map((e => {
                        if ("overall_fee" in e) {
                            let t = {};
                            try {
                                t = {
                                    gas_consumed: lc(e.gas_usage),
                                    gas_price: lc(e.gas_price)
                                }
                            } catch {}
                            return {
                                overall_fee: lc(e.overall_fee),
                                ...t
                            }
                        }
                        return {
                            overall_fee: lc(e.amount)
                        }
                    }))
                }
                parseSimulateTransactionResponse(e) {
                    const t = "overall_fee" in e.fee_estimation ? e.fee_estimation.overall_fee : e.fee_estimation.amount;
                    return [{
                        transaction_trace: e.trace,
                        fee_estimation: e.fee_estimation,
                        suggestedMaxFee: bI(BigInt(t))
                    }]
                }
                parseCallContractResponse(e) {
                    return {
                        result: e.result
                    }
                }
                parseInvokeFunctionResponse(e) {
                    return {
                        transaction_hash: e.transaction_hash
                    }
                }
                parseDeployContractResponse(e) {
                    return {
                        transaction_hash: e.transaction_hash,
                        contract_address: e.address
                    }
                }
                parseDeclareContractResponse(e) {
                    return {
                        transaction_hash: e.transaction_hash,
                        class_hash: e.class_hash
                    }
                }
                parseGetStateUpdateResponse(e) {
                    const t = Object.entries(e.state_diff.nonces).map((e => {
                            let [t, n] = e;
                            return {
                                contract_address: t,
                                nonce: n
                            }
                        })),
                        n = Object.entries(e.state_diff.storage_diffs).map((e => {
                            let [t, n] = e;
                            return {
                                address: t,
                                storage_entries: n
                            }
                        }));
                    return {
                        ...e,
                        state_diff: {
                            ...e.state_diff,
                            storage_diffs: n,
                            nonces: t
                        }
                    }
                }
                parseContractClassResponse(e) {
                    const t = vI(e) ? e : xI(e);
                    return {
                        ...t,
                        abi: "string" === typeof t.abi ? JSON.parse(t.abi) : t.abi
                    }
                }
            },
            tC = /^(?:\w+:)?\/\/(\S+)$/,
            nC = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/,
            rC = /^[^\s.]+\.\S{2,}$/;

        function aC(e, t, n) {
            return function(e) {
                if (!e) return !1;
                if ("string" !== typeof e) return !1;
                const t = e.match(tC);
                if (!t) return !1;
                const n = t[1];
                return !!n && !(!nC.test(n) && !rC.test(n))
            }(n) ? n : qg(e, null !== n && void 0 !== n ? n : t)
        }
        var iC = {
                network: "SN_GOERLI",
                blockIdentifier: "pending"
            },
            oC = class {
                constructor() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iC;
                    this.responseParser = new eC, "network" in t ? (this.baseUrl = oC.getNetworkFromName(t.network), this.feederGatewayUrl = aC(this.baseUrl, "feeder_gateway"), this.gatewayUrl = aC(this.baseUrl, "gateway")) : (this.baseUrl = t.baseUrl, this.feederGatewayUrl = aC(this.baseUrl, "feeder_gateway", t.feederGatewayUrl), this.gatewayUrl = aC(this.baseUrl, "gateway", t.gatewayUrl)), this.chainId = null !== (e = null === t || void 0 === t ? void 0 : t.chainId) && void 0 !== e ? e : oC.getChainIdFromBaseUrl(this.baseUrl), this.headers = t.headers, this.blockIdentifier = (null === t || void 0 === t ? void 0 : t.blockIdentifier) || iC.blockIdentifier
                }
                static getNetworkFromName(e) {
                    switch (e) {
                        case "SN_MAIN":
                        case "0x534e5f4d41494e":
                            return "https://alpha-mainnet.starknet.io";
                        case "SN_GOERLI":
                        case "0x534e5f474f45524c49":
                            return "https://alpha4.starknet.io";
                        default:
                            throw new Error("Could not detect base url from NetworkName")
                    }
                }
                static getChainIdFromBaseUrl(e) {
                    try {
                        return new URL(e).host.includes("mainnet.starknet.io") ? "0x534e5f4d41494e" : "0x534e5f474f45524c49"
                    } catch {
                        return console.error("Could not parse baseUrl: ".concat(e)), "0x534e5f474f45524c49"
                    }
                }
                getFetchUrl(e) {
                    return ["add_transaction"].includes(e) ? this.gatewayUrl : this.feederGatewayUrl
                }
                getFetchMethod(e) {
                    return ["add_transaction", "call_contract", "estimate_fee", "estimate_message_fee", "estimate_fee_bulk", "simulate_transaction"].includes(e) ? "POST" : "GET"
                }
                getQueryString(e) {
                    if (void 0 === (t = e) || 0 === Object.keys(t).length || 1 === Object.keys(t).length && Object.entries(t).every((e => {
                            let [t, n] = e;
                            return "blockIdentifier" === t && null === n
                        }))) return "";
                    var t;
                    const n = Object.entries(e).map((e => {
                        let [t, n] = e;
                        if ("blockIdentifier" === t) {
                            const e = new HI(n);
                            return "".concat(e.queryIdentifier)
                        }
                        return "".concat(t, "=").concat(n)
                    })).join("&");
                    return "?".concat(n)
                }
                getHeaders(e) {
                    return "POST" === e ? {
                        "Content-Type": "application/json",
                        ...this.headers
                    } : this.headers
                }
                async fetchEndpoint(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    let [a, i] = n;
                    const o = this.getFetchUrl(e),
                        s = this.getFetchMethod(e),
                        l = this.getQueryString(a),
                        g = qg(o, e, l);
                    return this.fetch(g, {
                        method: s,
                        body: i
                    })
                }
                async fetch(e, t) {
                    var n;
                    const r = aC(this.baseUrl, "", e),
                        a = null !== (n = null === t || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : "GET",
                        i = this.getHeaders(a),
                        o = Gu(null === t || void 0 === t ? void 0 : t.body);
                    try {
                        const e = await EI(r, {
                                method: a,
                                body: o,
                                headers: i
                            }),
                            n = await e.text();
                        if (!e.ok) {
                            let t;
                            try {
                                t = Yu(n)
                            } catch {
                                throw new RI(e.statusText, e.status)
                            }
                            throw new MI(t.message, t.code)
                        }
                        return (null !== t && void 0 !== t && t.parseAlwaysAsBigInt ? Wu : Yu)(n)
                    } catch (s) {
                        if (s instanceof Error && !(s instanceof DI)) throw Error("Could not ".concat(a, " from endpoint `").concat(r, "`: ").concat(s.message));
                        throw s
                    }
                }
                async getChainId() {
                    return Promise.resolve(this.chainId)
                }
                async callContract(e) {
                    let {
                        contractAddress: t,
                        entrypoint: n,
                        calldata: r = []
                    } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("call_contract", {
                        blockIdentifier: a
                    }, {
                        contract_address: t,
                        entry_point_selector: Sc(n),
                        calldata: Uu.compile(r)
                    }).then(this.responseParser.parseCallContractResponse)
                }
                async getBlock() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    return this.fetchEndpoint("get_block", {
                        blockIdentifier: e
                    }).then(this.responseParser.parseGetBlockResponse)
                }
                async getNonceForAddress(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_nonce", {
                        contractAddress: e,
                        blockIdentifier: t
                    })
                }
                async getStorageAt(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier;
                    const r = lc(t).toString(10);
                    return this.fetchEndpoint("get_storage_at", {
                        blockIdentifier: n,
                        contractAddress: e,
                        key: r
                    })
                }
                async getTransaction(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("get_transaction", {
                        transactionHash: t
                    }).then((e => {
                        if (1 === Object.values(e).length) throw new DI(e.status);
                        return this.responseParser.parseGetTransactionResponse(e)
                    }))
                }
                async getTransactionReceipt(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("get_transaction_receipt", {
                        transactionHash: t
                    }).then(this.responseParser.parseGetTransactionReceiptResponse)
                }
                async getClassAt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_full_contract", {
                        blockIdentifier: t,
                        contractAddress: e
                    }).then(this.responseParser.parseContractClassResponse)
                }
                async getClassHashAt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_class_hash_at", {
                        blockIdentifier: t,
                        contractAddress: e
                    })
                }
                async getClassByHash(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_class_by_hash", {
                        classHash: e,
                        blockIdentifier: t
                    }).then(this.responseParser.parseContractClassResponse)
                }
                async getCompiledClassByClassHash(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_compiled_class_by_class_hash", {
                        classHash: e,
                        blockIdentifier: t
                    })
                }
                async getContractVersion(e, t) {
                    let n, {
                        blockIdentifier: r = this.blockIdentifier,
                        compiler: a = !0
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e) n = await this.getClassAt(e, r);
                    else {
                        if (!t) throw Error("getContractVersion require contractAddress or classHash");
                        n = await this.getClassByHash(t, r)
                    }
                    if (vI(n)) {
                        if (a) {
                            return {
                                cairo: "1",
                                compiler: lu(n.abi).compiler
                            }
                        }
                        return {
                            cairo: "1",
                            compiler: void 0
                        }
                    }
                    return {
                        cairo: "0",
                        compiler: "0"
                    }
                }
                async invokeFunction(e, t) {
                    var n;
                    return this.fetchEndpoint("add_transaction", void 0, {
                        type: "INVOKE_FUNCTION",
                        sender_address: e.contractAddress,
                        calldata: Uu.compile(null !== (n = e.calldata) && void 0 !== n ? n : []),
                        signature: yI(e.signature),
                        nonce: Ac(t.nonce),
                        max_fee: Ac(t.maxFee || 0),
                        version: "0x1"
                    }).then(this.responseParser.parseInvokeFunctionResponse)
                }
                async deployAccountContract(e, t) {
                    let {
                        classHash: n,
                        constructorCalldata: r,
                        addressSalt: a,
                        signature: i
                    } = e;
                    return this.fetchEndpoint("add_transaction", void 0, {
                        type: "DEPLOY_ACCOUNT",
                        contract_address_salt: null !== a && void 0 !== a ? a : hI(),
                        constructor_calldata: Uu.compile(null !== r && void 0 !== r ? r : []),
                        class_hash: Ac(n),
                        max_fee: Ac(t.maxFee || 0),
                        version: Ac(t.version || 0),
                        nonce: Ac(t.nonce),
                        signature: yI(i)
                    }).then(this.responseParser.parseDeployContractResponse)
                }
                async declareContract(e, t) {
                    let {
                        senderAddress: n,
                        contract: r,
                        signature: a,
                        compiledClassHash: i
                    } = e;
                    return vI(r) ? this.fetchEndpoint("add_transaction", void 0, {
                        type: "DECLARE",
                        sender_address: n,
                        compiled_class_hash: i,
                        contract_class: r,
                        nonce: Ac(t.nonce),
                        signature: yI(a),
                        max_fee: Ac(t.maxFee || 0),
                        version: Ac(Ju)
                    }).then(this.responseParser.parseDeclareContractResponse) : this.fetchEndpoint("add_transaction", void 0, {
                        type: "DECLARE",
                        contract_class: r,
                        nonce: Ac(t.nonce),
                        signature: yI(a),
                        sender_address: n,
                        max_fee: Ac(t.maxFee || 0),
                        version: Ac(Vu)
                    }).then(this.responseParser.parseDeclareContractResponse)
                }
                async getEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return this.getInvokeEstimateFee(e, t, n, r)
                }
                async getInvokeEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const a = this.buildTransaction({
                        type: "INVOKE_FUNCTION",
                        ...e,
                        ...t
                    }, "fee");
                    return this.fetchEndpoint("estimate_fee", {
                        blockIdentifier: n,
                        skipValidate: r
                    }, a).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getDeclareEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const a = this.buildTransaction({
                        type: "DECLARE",
                        ...e,
                        ...t
                    }, "fee");
                    return this.fetchEndpoint("estimate_fee", {
                        blockIdentifier: n,
                        skipValidate: r
                    }, a).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getDeployAccountEstimateFee(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.blockIdentifier,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const a = this.buildTransaction({
                        type: "DEPLOY_ACCOUNT",
                        ...e,
                        ...t
                    }, "fee");
                    return this.fetchEndpoint("estimate_fee", {
                        blockIdentifier: n,
                        skipValidate: r
                    }, a).then(this.responseParser.parseFeeEstimateResponse)
                }
                async getEstimateFeeBulk(e, t) {
                    let {
                        blockIdentifier: n = this.blockIdentifier,
                        skipValidate: r = !1
                    } = t;
                    const a = e.map((e => this.buildTransaction(e, "fee")));
                    return this.fetchEndpoint("estimate_fee_bulk", {
                        blockIdentifier: n,
                        skipValidate: r
                    }, a).then(this.responseParser.parseFeeEstimateBulkResponse)
                }
                async getCode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    return this.fetchEndpoint("get_code", {
                        contractAddress: e,
                        blockIdentifier: t
                    })
                }
                async waitForTransaction(e, t) {
                    var n, r, a;
                    let i, o = !1,
                        s = 0;
                    const l = null !== (n = null === t || void 0 === t ? void 0 : t.retryInterval) && void 0 !== n ? n : 5e3,
                        g = null !== (r = null === t || void 0 === t ? void 0 : t.errorStates) && void 0 !== r ? r : ["REJECTED", "NOT_RECEIVED", "REVERTED"],
                        A = null !== (a = null === t || void 0 === t ? void 0 : t.successStates) && void 0 !== a ? a : ["SUCCEEDED", "ACCEPTED_ON_L1", "ACCEPTED_ON_L2"];
                    for (; !o;)
                        if (await kI(l), i = await this.getTransactionStatus(e), "NOT_RECEIVED" === i.finality_status && s < 3) s += 1;
                        else if (A.includes(i.finality_status) || A.includes(i.execution_status)) o = !0;
                    else if (g.includes(i.finality_status) || g.includes(i.execution_status)) {
                        let e;
                        e = i.tx_failure_reason ? "".concat(i.tx_status, ": ").concat(i.tx_failure_reason.code, "\n").concat(i.tx_failure_reason.error_message) : i.tx_revert_reason ? "".concat(i.tx_status, ": ").concat(i.tx_revert_reason) : i.tx_status;
                        const t = new Error(e);
                        throw t.response = i, t
                    }
                    return await this.getTransactionReceipt(e)
                }
                async getTransactionStatus(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("get_transaction_status", {
                        transactionHash: t
                    })
                }
                async getContractAddresses() {
                    return this.fetchEndpoint("get_contract_addresses")
                }
                async getTransactionTrace(e) {
                    const t = Ac(e);
                    return this.fetchEndpoint("get_transaction_trace", {
                        transactionHash: t
                    })
                }
                async estimateMessageFee(e) {
                    let {
                        from_address: t,
                        to_address: n,
                        entry_point_selector: r,
                        payload: a
                    } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.blockIdentifier;
                    const o = {
                        from_address: mc(t),
                        to_address: yc(n),
                        entry_point_selector: xc(r),
                        payload: wc(a)
                    };
                    return this.fetchEndpoint("estimate_message_fee", {
                        blockIdentifier: i
                    }, o)
                }
                async getSimulateTransaction(e, t) {
                    let {
                        blockIdentifier: n = this.blockIdentifier,
                        skipValidate: r = !1,
                        skipExecute: a = !1
                    } = t;
                    e.length > 1 && console.warn("Sequencer simulate process only first element from invocations list"), a && console.warn("Sequencer can't skip account __execute__");
                    const i = this.buildTransaction(e[0]);
                    return this.fetchEndpoint("simulate_transaction", {
                        blockIdentifier: n,
                        skipValidate: null !== r && void 0 !== r && r
                    }, i).then(this.responseParser.parseSimulateTransactionResponse)
                }
                async getStateUpdate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).sequencerIdentifier;
                    return this.fetchEndpoint("get_state_update", {
                        ...t
                    }).then(this.responseParser.parseGetStateUpdateResponse)
                }
                async getBlockTraces() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.blockIdentifier;
                    const t = new HI(e).sequencerIdentifier;
                    return this.fetchEndpoint("get_block_traces", {
                        ...t
                    })
                }
                async getStarkName(e, t) {
                    return YI(this, e, t)
                }
                async getAddressFromStarkName(e, t) {
                    return WI(this, e, t)
                }
                buildTransaction(e, t) {
                    const n = qu(t),
                        r = {
                            signature: yI(e.signature),
                            nonce: Ac(e.nonce)
                        };
                    var a;
                    if ("INVOKE_FUNCTION" === e.type) return {
                        type: e.type,
                        sender_address: e.contractAddress,
                        calldata: Uu.compile(null !== (a = e.calldata) && void 0 !== a ? a : []),
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    if ("DECLARE" === e.type) return vI(e.contract) ? {
                        type: e.type,
                        contract_class: e.contract,
                        compiled_class_hash: e.compiledClassHash,
                        sender_address: e.senderAddress,
                        version: Ac(e.version || n.v2),
                        ...r
                    } : {
                        type: e.type,
                        contract_class: e.contract,
                        sender_address: e.senderAddress,
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    if ("DEPLOY_ACCOUNT" === e.type) return {
                        type: e.type,
                        constructor_calldata: Uu.compile(e.constructorCalldata || []),
                        class_hash: Ac(e.classHash),
                        contract_address_salt: Ac(e.addressSalt || 0),
                        version: Ac(e.version || n.v1),
                        ...r
                    };
                    throw Error("Sequencer buildTransaction received unknown TransactionType")
                }
            },
            sC = class {
                constructor(e) {
                    this.provider = e instanceof sC ? e.provider : e instanceof qI || e instanceof oC ? e : e && "rpc" in e ? new qI(e.rpc) : e && "sequencer" in e ? new oC(e.sequencer) : new qI
                }
                async getChainId() {
                    return this.provider.getChainId()
                }
                async getBlock(e) {
                    return this.provider.getBlock(e)
                }
                async getClassAt(e, t) {
                    return this.provider.getClassAt(e, t)
                }
                async getClassHashAt(e, t) {
                    return this.provider.getClassHashAt(e, t)
                }
                getClassByHash(e) {
                    return this.provider.getClassByHash(e)
                }
                async getEstimateFee(e, t, n) {
                    return this.provider.getEstimateFee(e, t, n)
                }
                async getInvokeEstimateFee(e, t, n, r) {
                    return this.provider.getInvokeEstimateFee(e, t, n, r)
                }
                async getEstimateFeeBulk(e, t) {
                    return this.provider.getEstimateFeeBulk(e, t)
                }
                async getNonceForAddress(e, t) {
                    return this.provider.getNonceForAddress(e, t)
                }
                async getStorageAt(e, t, n) {
                    return this.provider.getStorageAt(e, t, n)
                }
                async getTransaction(e) {
                    return this.provider.getTransaction(e)
                }
                async getTransactionReceipt(e) {
                    return this.provider.getTransactionReceipt(e)
                }
                async callContract(e, t) {
                    return this.provider.callContract(e, t)
                }
                async invokeFunction(e, t) {
                    return this.provider.invokeFunction(e, t)
                }
                async deployAccountContract(e, t) {
                    return this.provider.deployAccountContract(e, t)
                }
                async declareContract(e, t) {
                    return this.provider.declareContract(e, t)
                }
                async getDeclareEstimateFee(e, t, n, r) {
                    return this.provider.getDeclareEstimateFee(e, t, n, r)
                }
                getDeployAccountEstimateFee(e, t, n, r) {
                    return this.provider.getDeployAccountEstimateFee(e, t, n, r)
                }
                async getCode(e, t) {
                    return this.provider.getCode(e, t)
                }
                async waitForTransaction(e, t) {
                    return this.provider.waitForTransaction(e, t)
                }
                async getSimulateTransaction(e, t) {
                    return this.provider.getSimulateTransaction(e, t)
                }
                async getStateUpdate(e) {
                    return this.provider.getStateUpdate(e)
                }
                async getStarkName(e, t) {
                    return YI(this, e, t)
                }
                async getAddressFromStarkName(e, t) {
                    return WI(this, e, t)
                }
                async getContractVersion(e, t, n) {
                    return this.provider.getContractVersion(e, t, n)
                }
            };
        eA({}, {
            fromCallsToExecuteCalldata: () => gC,
            fromCallsToExecuteCalldataWithNonce: () => AC,
            fromCallsToExecuteCalldata_cairo1: () => uC,
            getExecuteCalldata: () => IC,
            transformCallsToMulticallArrays: () => lC,
            transformCallsToMulticallArrays_cairo1: () => cC
        });
        var lC = e => {
                const t = [],
                    n = [];
                return e.forEach((e => {
                    const r = Uu.compile(e.calldata || []);
                    t.push({
                        to: lc(e.contractAddress).toString(10),
                        selector: lc(Sc(e.entrypoint)).toString(10),
                        data_offset: n.length.toString(),
                        data_len: r.length.toString()
                    }), n.push(...r)
                })), {
                    callArray: t,
                    calldata: Uu.compile({
                        calldata: n
                    })
                }
            },
            gC = e => {
                const {
                    callArray: t,
                    calldata: n
                } = lC(e);
                return [...Uu.compile({
                    callArray: t
                }), ...n]
            },
            AC = (e, t) => [...gC(e), lc(t).toString()],
            cC = e => e.map((e => ({
                to: lc(e.contractAddress).toString(10),
                selector: lc(Sc(e.entrypoint)).toString(10),
                calldata: Uu.compile(e.calldata || [])
            }))),
            uC = e => {
                const t = e.map((e => ({
                    contractAddress: e.contractAddress,
                    entrypoint: e.entrypoint,
                    calldata: Array.isArray(e.calldata) && "__compiled__" in e.calldata ? e.calldata : Uu.compile(e.calldata)
                })));
                return Uu.compile({
                    orderCalls: t
                })
            },
            IC = function(e) {
                return "1" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0") ? uC(e) : gC(e)
            };
        eA({}, {
            encodeData: () => vC,
            encodeType: () => yC,
            encodeValue: () => bC,
            getDependencies: () => mC,
            getMessageHash: () => kC,
            getStructHash: () => EC,
            getTypeHash: () => wC,
            isMerkleTreeType: () => pC,
            prepareSelector: () => hC
        });
        eA({}, {
            MerkleTree: () => CC,
            proofMerklePath: () => dC
        });
        var CC = class {
            constructor(e) {
                this.branches = [], this.leaves = e, this.root = this.build(e)
            }
            build(e) {
                if (1 === e.length) return e[0];
                e.length !== this.leaves.length && this.branches.push(e);
                const t = [];
                for (let n = 0; n < e.length; n += 2) n + 1 === e.length ? t.push(CC.hash(e[n], "0x0")) : t.push(CC.hash(e[n], e[n + 1]));
                return this.build(t)
            }
            static hash(e, t) {
                const [n, r] = [lc(e), lc(t)].sort(((e, t) => e >= t ? 1 : -1));
                return di(n, r)
            }
            getProof(e) {
                var t, n;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.leaves,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                const i = r.indexOf(e);
                if (-1 === i) throw new Error("leaf not found");
                if (1 === r.length) return a;
                const o = i % 2 === 0,
                    s = null !== (t = o ? r[i + 1] : r[i - 1]) && void 0 !== t ? t : "0x0",
                    l = [...a, s],
                    g = this.leaves.length === r.length ? -1 : this.branches.findIndex((e => e.length === r.length)),
                    A = null !== (n = this.branches[g + 1]) && void 0 !== n ? n : [this.root];
                return this.getProof(CC.hash(o ? e : s, o ? s : e), A, l)
            }
        };

        function dC(e, t, n) {
            if (0 === n.length) return e === t;
            const [r, ...a] = n;
            return dC(e, CC.hash(t, r), a)
        }

        function fC(e) {
            try {
                return Ac(e)
            } catch (t) {
                if ("string" === typeof e) return Ac(Lc(e));
                throw new Error("Invalid BigNumberish: ".concat(e))
            }
        }

        function hC(e) {
            return sc(e) ? e : Sc(e)
        }

        function pC(e) {
            return "merkletree" === e.type
        }
        var mC = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            return "*" === t[t.length - 1] && (t = t.slice(0, -1)), n.includes(t) ? n : e[t] ? [t, ...e[t].reduce(((t, n) => [...t, ...mC(e, n.type, t).filter((e => !t.includes(e)))]), [])] : n
        };
        var yC = (e, t) => {
                const [n, ...r] = mC(e, t);
                return (n ? [n, ...r.sort()] : []).map((t => "".concat(t, "(").concat(e[t].map((e => "".concat(e.name, ":").concat(e.type))), ")"))).join("")
            },
            wC = (e, t) => Sc(yC(e, t)),
            bC = function(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e[t]) return [t, EC(e, t, n)];
                if (Object.keys(e).map((e => "".concat(e, "*"))).includes(t)) {
                    const r = n.map((n => EC(e, t.slice(0, -1), n)));
                    return [t, $u(r)]
                }
                if ("merkletree" === t) {
                    const t = function(e, t) {
                            if (t.parent && t.key) {
                                const n = e[t.parent].find((e => e.name === t.key));
                                if (!pC(n)) throw new Error("".concat(t.key, " is not a merkle tree"));
                                if (n.contains.endsWith("*")) throw new Error("Merkle tree contain property must not be an array but was given ".concat(t.key));
                                return n.contains
                            }
                            return "raw"
                        }(e, r),
                        a = n.map((n => bC(e, t, n)[1])),
                        {
                            root: i
                        } = new CC(a);
                    return ["felt", i]
                }
                return "felt*" === t ? ["felt*", $u(n)] : "selector" === t ? ["felt", hC(n)] : [t, fC(n)]
            },
            vC = (e, t, n) => {
                const [r, a] = e[t].reduce(((r, a) => {
                    let [i, o] = r;
                    if (void 0 === n[a.name] || null === n[a.name]) throw new Error("Cannot encode data: missing data for '".concat(a.name, "'"));
                    const s = n[a.name],
                        [l, g] = bC(e, a.type, s, {
                            parent: t,
                            key: a.name
                        });
                    return [
                        [...i, l],
                        [...o, g]
                    ]
                }), [
                    ["felt"],
                    [wC(e, t)]
                ]);
                return [r, a]
            },
            EC = (e, t, n) => $u(vC(e, t, n)[1]),
            kC = (e, t) => {
                if (!(e => {
                        const t = e;
                        return Boolean(t.types && t.primaryType && t.message)
                    })(e)) throw new Error("Typed data does not match JSON schema");
                return $u([Lc("StarkNet Message"), EC(e.types, "StarkNetDomain", e.domain), t, EC(e.types, e.primaryType, e.message)])
            };
        new sC({
            rpc: {
                default: !0
            }
        });

        function SC(e) {
            return e.filter((e => "event" === e.type && (e.size || "enum" !== e.kind))).reduce(((e, t) => {
                const n = t.name.slice(t.name.lastIndexOf(":") + 1),
                    r = {
                        ...t
                    };
                return r.name = n, {
                    ...e,
                    [cA(pi(iA(n)).toString(16))]: r
                }
            }), {})
        }

        function xC(e, t, n, r) {
            const a = e.flat().reduce(((e, a) => {
                var i, o;
                const s = t[a.keys[0]];
                if (!s) return e;
                const l = {};
                l[s.name] = {}, a.keys.shift();
                const g = a.keys[Symbol.iterator](),
                    A = a.data[Symbol.iterator](),
                    c = (null === (i = s.members) || void 0 === i ? void 0 : i.filter((e => "key" === e.kind))) || s.keys,
                    u = (null === (o = s.members) || void 0 === o ? void 0 : o.filter((e => "data" === e.kind))) || s.data;
                return c.forEach((e => {
                    l[s.name][e.name] = Ru(g, e, n, r, l[s.name])
                })), u.forEach((e => {
                    l[s.name][e.name] = Ru(A, e, n, r, l[s.name])
                })), e.push(l), e
            }), []);
            return a
        }
        eA({}, {
            getAbiEvents: () => SC,
            parseEvents: () => xC
        });
        const NC = e => tA.addHexPrefix(tA.removeHexPrefix(e).padStart(64, "0"));
        JSON.parse('[{"type":"impl","name":"ERC20Impl","interface_name":"openzeppelin::token::erc20::interface::IERC20"},{"type":"struct","name":"core::integer::u256","members":[{"name":"low","type":"core::integer::u128"},{"name":"high","type":"core::integer::u128"}]},{"type":"enum","name":"core::bool","variants":[{"name":"False","type":"()"},{"name":"True","type":"()"}]},{"type":"interface","name":"openzeppelin::token::erc20::interface::IERC20","items":[{"type":"function","name":"name","inputs":[],"outputs":[{"type":"core::felt252"}],"state_mutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"type":"core::felt252"}],"state_mutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"type":"core::integer::u8"}],"state_mutability":"view"},{"type":"function","name":"total_supply","inputs":[],"outputs":[{"type":"core::integer::u256"}],"state_mutability":"view"},{"type":"function","name":"balance_of","inputs":[{"name":"account","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[{"type":"core::integer::u256"}],"state_mutability":"view"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"core::starknet::contract_address::ContractAddress"},{"name":"spender","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[{"type":"core::integer::u256"}],"state_mutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"recipient","type":"core::starknet::contract_address::ContractAddress"},{"name":"amount","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"function","name":"transfer_from","inputs":[{"name":"sender","type":"core::starknet::contract_address::ContractAddress"},{"name":"recipient","type":"core::starknet::contract_address::ContractAddress"},{"name":"amount","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"core::starknet::contract_address::ContractAddress"},{"name":"amount","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"}]},{"type":"impl","name":"ERC20CamelOnlyImpl","interface_name":"openzeppelin::token::erc20::interface::IERC20CamelOnly"},{"type":"interface","name":"openzeppelin::token::erc20::interface::IERC20CamelOnly","items":[{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"type":"core::integer::u256"}],"state_mutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[{"type":"core::integer::u256"}],"state_mutability":"view"},{"type":"function","name":"transferFrom","inputs":[{"name":"sender","type":"core::starknet::contract_address::ContractAddress"},{"name":"recipient","type":"core::starknet::contract_address::ContractAddress"},{"name":"amount","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"}]},{"type":"constructor","name":"constructor","inputs":[{"name":"name","type":"core::felt252"},{"name":"symbol","type":"core::felt252"},{"name":"initial_supply","type":"core::integer::u256"},{"name":"recipient","type":"core::starknet::contract_address::ContractAddress"}]},{"type":"function","name":"increase_allowance","inputs":[{"name":"spender","type":"core::starknet::contract_address::ContractAddress"},{"name":"added_value","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"function","name":"decrease_allowance","inputs":[{"name":"spender","type":"core::starknet::contract_address::ContractAddress"},{"name":"subtracted_value","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"function","name":"increaseAllowance","inputs":[{"name":"spender","type":"core::starknet::contract_address::ContractAddress"},{"name":"addedValue","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"function","name":"decreaseAllowance","inputs":[{"name":"spender","type":"core::starknet::contract_address::ContractAddress"},{"name":"subtractedValue","type":"core::integer::u256"}],"outputs":[{"type":"core::bool"}],"state_mutability":"external"},{"type":"event","name":"akamaru::Contracts::Token::Token::Transfer","kind":"struct","members":[{"name":"from","type":"core::starknet::contract_address::ContractAddress","kind":"key"},{"name":"to","type":"core::starknet::contract_address::ContractAddress","kind":"key"},{"name":"value","type":"core::integer::u256","kind":"data"}]},{"type":"event","name":"akamaru::Contracts::Token::Token::Approval","kind":"struct","members":[{"name":"owner","type":"core::starknet::contract_address::ContractAddress","kind":"key"},{"name":"spender","type":"core::starknet::contract_address::ContractAddress","kind":"key"},{"name":"value","type":"core::integer::u256","kind":"data"}]},{"type":"event","name":"akamaru::Contracts::Token::Token::Event","kind":"enum","variants":[{"name":"Transfer","type":"akamaru::Contracts::Token::Token::Transfer","kind":"nested"},{"name":"Approval","type":"akamaru::Contracts::Token::Token::Approval","kind":"nested"}]}]'), JSON.parse('[{"type":"impl","name":"AirdropImpl","interface_name":"akamaru::Contracts::Airdrop::IAirdrop"},{"type":"struct","name":"core::array::Span::<core::felt252>","members":[{"name":"snapshot","type":"@core::array::Array::<core::felt252>"}]},{"type":"enum","name":"core::bool","variants":[{"name":"False","type":"()"},{"name":"True","type":"()"}]},{"type":"struct","name":"core::integer::u256","members":[{"name":"low","type":"core::integer::u128"},{"name":"high","type":"core::integer::u128"}]},{"type":"interface","name":"akamaru::Contracts::Airdrop::IAirdrop","items":[{"type":"function","name":"claim","inputs":[{"name":"proof","type":"core::array::Span::<core::felt252>"},{"name":"leaf","type":"core::felt252"},{"name":"quantityIndex","type":"core::integer::u32"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setClaimStarted","inputs":[{"name":"started","type":"core::bool"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setOwner","inputs":[{"name":"owner","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setAkamaruHolder","inputs":[{"name":"akamaruHolder","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setAkamaruDispatcher","inputs":[{"name":"contractAdrs","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setQuantities","inputs":[{"name":"indexes","type":"core::array::Array::<core::integer::u32>"},{"name":"quantities","type":"core::array::Array::<core::integer::u256>"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setQuantity","inputs":[{"name":"index","type":"core::integer::u32"},{"name":"quantity","type":"core::integer::u256"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"setMerkleRoot","inputs":[{"name":"merkleRoot","type":"core::felt252"}],"outputs":[],"state_mutability":"external"},{"type":"function","name":"hasClaimStarted","inputs":[],"outputs":[{"type":"core::bool"}],"state_mutability":"view"},{"type":"function","name":"hasClaimedWallet","inputs":[{"name":"wallet","type":"core::starknet::contract_address::ContractAddress"}],"outputs":[{"type":"core::bool"}],"state_mutability":"view"}]},{"type":"constructor","name":"constructor","inputs":[{"name":"akamaruAdrs","type":"core::starknet::contract_address::ContractAddress"},{"name":"akamaruHolder","type":"core::starknet::contract_address::ContractAddress"},{"name":"owner","type":"core::starknet::contract_address::ContractAddress"},{"name":"merkleRoot","type":"core::felt252"},{"name":"indexes","type":"core::array::Array::<core::integer::u32>"},{"name":"quantities","type":"core::array::Array::<core::integer::u256>"}]},{"type":"event","name":"akamaru::Contracts::Airdrop::Airdrop::Event","kind":"enum","variants":[]}]');
        n(7144);
        const BC = n.p + "static/media/logogecko.60e7dab16df3fb067973.png",
            DC = "data:image/png;base64,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",
            MC = n.p + "static/media/paraku.479b0369228b39438379.png",
            RC = n.p + "static/media/backarrowwhite.dbe8c11a3c6423dd9138.png",
            TC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEPCAYAAAD4RfntAAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcQgDPtnihshr0IYh76kbnDjXyBBaquzhOPGajBJx/c606eDUJIsRXPNGQxSpVIzoeBogxFk8ABtofDZT3CGJKtsld3Q7BVnP36YFZup5TZItzDWp1ElEuhrUFzEPRGZ2GNQjUFMbmAMaP4syFXL/QnrAU+on9TpnDspXt7fUmx7+2L3MNHByGDMnD0A9yOJ2xDNbAtlrEN7RyOJLeTfnibSD6sMWedBudoxAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TpaItInYQ6ZChOlkQFXHUKhShQqgVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi7OCk6CIl/i8ptIj14Lgf7+497t4BQr3MNKtrHNB020wl4mImuyoGXiEghAH0ISIzy5iTpCQ6jq97+Ph6F+NZnc/9OUJqzmKATySeZYZpE28QT2/aBud94jAryirxOfGYSRckfuS64vEb54LLAs8Mm+nUPHGYWCy0sdLGrGhqxFPEUVXTKV/IeKxy3uKslauseU/+wmBOX1nmOs0IEljEEiSIUFBFCWXYiNGqk2IhRfvxDv5h1y+RSyFXCYwcC6hAg+z6wf/gd7dWfnLCSwrGge4Xx/kYAQK7QKPmON/HjtM4AfzPwJXe8lfqwMwn6bWWFj0C+reBi+uWpuwBlzvA0JMhm7Ir+WkK+TzwfkbflAUGb4HeNa+35j5OH4A0dZW8AQ4OgdECZa93eHdPe2//nmn29wMlnnKIbpOGRQAADz5pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6MGRlZDgwODctM2I3MS00Y2UxLTgyYjctZGExZGE0NTc2NzNjIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmMyZWFjYmFmLTE1YzQtNDc4OC05M2YwLTY2NTVjMzRjMmVmYSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiNzIzMmI1LWYxMDYtNGU4OS1iNjc2LTdhM2RmODk4ZDljNCIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTcwNzg0NDMzOTQ2MjI3MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM2IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDowMjoxM1QxODoxMjoxOCswMTowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MDI6MTNUMTg6MTI6MTgrMDE6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOGI0ZGEyZi1kMWIzLTQ3NTMtYmIxMC1kMGNjYWI5ZGQ3MTAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAyLTAxVDE2OjMxOjI1KzAxOjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkYWM1NTFmLThmOWMtNDBlNS1hZDEzLTNjMGJkNzM4NThmMSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDItMTFUMTY6Mzk6NTYrMDE6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGJiNzU2N2YtODYyYS00MjU0LWJhN2UtYzdmZTlmMTQ2YTFhIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wMi0xM1QxODoxMjoxOSswMTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
            OC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAAFECAYAAADBfIIjAAAAxHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMgDPxnio6AHzhmHNIQqRt0/BpspCTqSdwdGIzt1L+fM70GEDhx2VSqSDZw5YrNjGZHmwyZJ08ohIP7eWIOi6ZkSvFAXGGdx4Ol0MyVSyJ9R2C/Byq7oj4SxUc0KkIzRySqkYjQAxAJmreVpep2bWHv+Q71lQad4tcgLj/3vNn0jmL/EGInoGxMJF4AjcWJ2jTNwlaUsU4PxoVWqzaQf3NaSD8iflmB+zpchAAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAHMVfU6WiLSJ2EOmQoTpZEBVx1CoUoUKoFVp1MLn0C5o0JCkujoJrwcGPxaqDi7OuDq6CIPgB4uzgpOgiJf4vKbSI9eC4H+/uPe7eAUK9zDSraxzQdNtMJeJiJrsqBl4hIIQB9CEiM8uYk6QkOo6ve/j4ehfjWZ3P/TlCas5igE8knmWGaRNvEE9v2gbnfeIwK8oq8TnxmEkXJH7kuuLxG+eCywLPDJvp1DxxmFgstLHSxqxoasRTxFFV0ylfyHisct7irJWrrHlP/sJgTl9Z5jrNCBJYxBIkiFBQRQll2IjRqpNiIUX78Q7+YdcvkUshVwmMHAuoQIPs+sH/4He3Vn5ywksKxoHuF8f5GAECu0Cj5jjfx47TOAH8z8CV3vJX6sDMJ+m1lhY9Avq3gYvrlqbsAZc7wNCTIZuyK/lpCvk88H5G35QFBm+B3jWvt+Y+Th+ANHWVvAEODoHRAmWvd3h3T3tv/55p9vcDJZ5yiG6ThkUAAA8+aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmRhZGRlZTFkLTFhYjQtNGJmNC1iNjlkLWZjMGMxMjQ5NmUxMyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZWZmNDZhOC1hNzNhLTQ4M2QtOTAzZC1iNmNjZDQwM2Y1MTkiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZmI1ZjJmMC01Y2FiLTRkNTMtOGM4Ni0wYzQ4ZTg4ZTM4ZGEiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MDc4NDQzMTYzNjE4NDIiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zNiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MDI6MTNUMTg6MTE6NTUrMDE6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjAyOjEzVDE4OjExOjU1KzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjE5N2RhMmEtNTc2My00MmM1LTg0YzEtZmZhMWNhNGUwODUwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wMi0wMVQxNjozMToyMCswMTowMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YmU5ZGQ5ZC01NDg1LTRlMzYtOTljZS0wY2I1ODBhMjk0N2UiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAyLTExVDE2OjM5OjM2KzAxOjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQxMWQ2NjliLTQxMWItNDg3ZC05MGU1LWY3ZDAzZWUwOTE0ZiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDItMTNUMTg6MTE6NTYrMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
            jC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAwnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMgDPz3FB0BP0LMONCkUjfo+DXYVCHqSZwPGw5jOD/vFzw6CAVk2zWXnJNBihSqJjQ56mBMMngCg5c8/CRZZIvsBc1xa+ZxsUlYTW0XI31Goa2FIh5Jb0bxEPeOyMQRRiWMmLyAYVD9WykX3a9faGdaob6gU2t+DEscvu1lt+kdm73DRCcjJ2Pm7A1wXwJch6hWtqaMdWjPzJnYQP7NaQK+OD9ZyE/yg84AAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1Oloi0idhDpkKE6WRAVcdQqFKFCqBVadTC59AuaNCQpLo6Ca8HBj8Wqg4uzrg6ugiD4AeLs4KToIiX+Lym0iPXguB/v7j3u3gFCvcw0q2sc0HTbTCXiYia7KgZeISCEAfQhIjPLmJOkJDqOr3v4+HoX41mdz/05QmrOYoBPJJ5lhmkTbxBPb9oG533iMCvKKvE58ZhJFyR+5Lri8RvngssCzwyb6dQ8cZhYLLSx0sasaGrEU8RRVdMpX8h4rHLe4qyVq6x5T/7CYE5fWeY6zQgSWMQSJIhQUEUJZdiI0aqTYiFF+/EO/mHXL5FLIVcJjBwLqECD7PrB/+B3t1Z+csJLCsaB7hfH+RgBArtAo+Y438eO0zgB/M/Ald7yV+rAzCfptZYWPQL6t4GL65am7AGXO8DQkyGbsiv5aQr5PPB+Rt+UBQZvgd41r7fmPk4fgDR1lbwBDg6B0QJlr3d4d097b/+eafb3AyWecohuk4ZFAAAPPmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDowODg4OGJjMi1lYWM2LTQ2M2ItODBhNS1lMTE4ZmI4MzQ1ODIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2U3Mjk3ZTMtZDc3Mi00MTc3LWE2MTItZjU0NDBiMzJhMDA3IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Mzg0MTlhOTQtMGQxNS00ZmEyLTk3MTUtOGU0MWQwMWU5MDgwIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzA3ODQ0MzMwODEzMDY1IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzYiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjAyOjEzVDE4OjEyOjEwKzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowMjoxM1QxODoxMjoxMCswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3YmM0NmFiLTYzOTUtNGRjMC1iMmM3LTk1NzRjNzhkNWE0MiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDItMDFUMTY6MzE6MzArMDE6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzFmYjM4YjUtN2ViZi00YzBkLTk5YTUtZDI5YmU3MjZkNjVmIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wMi0xMVQxNjozOTo0OSswMTowMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZjZhYWJiMS1mYzg5LTQ2MWUtOWIyMi0xNTU0ZDc1NDkwMDciCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAyLTEzVDE4OjEyOjEwKzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";
        class LC {
            static async getEligibleQuantity(e) {
                try {
                    const t = await fetch("https://akamaruapi.uk/getAmount?adrs=".concat(NC(e.toLowerCase())));
                    if (!t.ok) throw new Error("Failed to fetch data");
                    return (await t.json()).amount
                } catch (t) {
                    return console.error("Error fetching data:", t), -1
                }
            }
            static async getProof(e) {
                try {
                    const t = await fetch("https://akamaruapi.uk/getProof?adrs=".concat(NC(e.toLowerCase())));
                    if (!t.ok) throw new Error("Failed to fetch data");
                    return (await t.json()).proof
                } catch (t) {
                    return console.error("Error fetching data:", t), -1
                }
            }
        }

        function _C() {
            const [e, t] = (0, o.useState)(), [n, r] = (0, o.useState)(), [a, i] = (0, o.useState)(!1), [s, l] = (0, o.useState)(), [g, A] = (0, o.useState)(!1), [c, u] = (0, o.useState)(!1), [I, C] = (0, o.useState)(!1), [d, f] = (0, o.useState)(!1), [h, p] = (0, o.useState)(!0), [m, y] = (0, o.useState)(!1), [w, b] = (0, o.useState)("0"), [v, E] = (0, o.useState)(), [k, S] = (0, o.useState)(!0), [x, N] = (0, o.useState)(0), [B, D] = (0, o.useState)([]);
            return (0, Je.jsxs)("div", {
                className: "claimContainer",
                children: [(0, Je.jsxs)("div", {
                    className: "claimTitle",
                    children: [(0, Je.jsx)("img", {
                        src: DC,
                        className: "starknetIdLogo"
                    }), (0, Je.jsx)("div", {
                        className: "claimTitleText",
                        children: "X"
                    }), (0, Je.jsx)("img", {
                        src: BC,
                        className: "akuLogoTitle"
                    })]
                }), (0, Je.jsx)("div", {
                    className: "claimWalletAndText",
                    children: (0, Je.jsx)("div", {
                        className: "alreadyClaimedText",
                        children: "The airdrop has ended, all AKU's have been claimed."
                    })
                })]
            })
        }
        const zC = n.p + "static/media/parakuRed.fe8c591123f3b3fba523.png";

        function QC() {
            const [e, t] = (0, o.useState)(0), [n, r] = (0, o.useState)(!1), [a, i] = (0, o.useState)(!0), [s, l] = (0, o.useState)("");
            return (0, Je.jsxs)("div", {
                className: "claimContainer",
                children: [(0, Je.jsxs)("div", {
                    className: "claimTitle",
                    children: [(0, Je.jsx)("img", {
                        src: DC,
                        className: "starknetIdLogo"
                    }), (0, Je.jsx)("div", {
                        className: "claimTitleText",
                        children: "X"
                    }), (0, Je.jsx)("img", {
                        src: BC,
                        className: "akuLogoTitle"
                    })]
                }), (0, Je.jsxs)("div", {
                    className: "claimWalletAndText",
                    children: [a && (0, Je.jsxs)("div", {
                        className: "JoinMovementSocialContainer",
                        children: [(0, Je.jsxs)("div", {
                            className: "JoinMovementLinksContainer",
                            children: [(0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://twitter.com/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomLinksIcon",
                                    src: TC,
                                    alt: "twitterIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://t.me/AkamaruStarknet",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomLinksIcon",
                                    src: OC,
                                    alt: "telegramIcon"
                                })
                            }), (0, Je.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://akamarutoken.com",
                                children: (0, Je.jsx)("img", {
                                    className: "BottomLinksIcon",
                                    src: jC,
                                    alt: "websiteIcon"
                                })
                            })]
                        }), (0, Je.jsx)("div", {
                            className: "joinMovementTitle",
                            children: "Join the movement!"
                        }), (0, Je.jsxs)("div", {
                            className: "joinMovementDescription",
                            children: [(0, Je.jsx)("div", {
                                children: "- Follow us on Twitter"
                            }), (0, Je.jsx)("div", {
                                children: "- Join our Telegram"
                            }), (0, Je.jsx)("div", {
                                children: "- Visit our website"
                            })]
                        }), (0, Je.jsx)("div", {
                            className: "doneJoinMovementButton",
                            onClick: () => i(!1),
                            children: "Done"
                        })]
                    }), n && (0, Je.jsxs)("div", {
                        className: "successfulClaimContainer",
                        children: [(0, Je.jsx)("img", {
                            src: RC,
                            className: "successfulClaimbackArrow",
                            onClick: () => r(!1)
                        }), (0, Je.jsx)("img", {
                            src: e > 0 ? MC : zC,
                            className: "successfulClaimParakuImg"
                        }), e > 0 && (0, Je.jsxs)("div", {
                            className: "successfulClaimTextAndTweetIt",
                            children: [(0, Je.jsxs)("div", {
                                className: "successfulClaimTextAndQuantity",
                                children: [(0, Je.jsx)("div", {
                                    className: "successfulClaimText",
                                    children: "Eligible!"
                                }), (0, Je.jsxs)("div", {
                                    children: ["For ", [18e6, 19e6, 2e7, 25e6, 35e6, 5e7, 1e8][e - 1], " AKU"]
                                })]
                            }), (0, Je.jsxs)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://twitter.com/intent/tweet?text=I'm%20eligible%20for%20the%20%40AkamaruStarknet%20airdrop!%0ACheck%20your%20eligibility%20at%20akamarutoken.com%2Feligibility.%0AJoin%20the%20movement!%20$AKU%20$STRK%20%23Starknet",
                                className: "tweetItContainer",
                                children: [(0, Je.jsx)("div", {
                                    className: "tweetText",
                                    children: "Tweet it!"
                                }), (0, Je.jsx)("img", {
                                    className: "TweetItIcon",
                                    src: TC,
                                    alt: "twitterIcon"
                                })]
                            })]
                        }), 0 == e && (0, Je.jsx)("div", {
                            className: "unsuccessfulClaimText",
                            children: "Not eligible."
                        }), -1 == e && (0, Je.jsx)("div", {
                            className: "unsuccessfulClaimText",
                            children: "Error when querying API."
                        })]
                    }), !a && !n && (0, Je.jsxs)("div", {
                        className: "claimWalletAndDisclaimerAndListContainer",
                        children: [(0, Je.jsx)("div", {
                            children: "Claiming starts at 10 AM UTC."
                        }), (0, Je.jsx)("div", {
                            className: "claimWalletText",
                            children: "Input an address to check its eligibility"
                        }), (0, Je.jsx)("input", {
                            className: "claimWalletInput",
                            type: "text",
                            value: s,
                            onChange: e => {
                                let t = e.target.value.toLowerCase();
                                l(t)
                            },
                            placeholder: "Address"
                        }), (0, Je.jsx)("div", {
                            className: "checkEligibilityButton",
                            onClick: () => async function(e) {
                                let n = await LC.getEligibleQuantity(e);
                                void 0 == n ? (t(0), r(!0)) : (n = parseInt(n), t(n), r(!0))
                            }(s),
                            children: "Check"
                        })]
                    })]
                })]
            })
        }
        const PC = function() {
            return (0, Je.jsx)(xe, {
                children: (0, Je.jsxs)(he, {
                    children: [(0, Je.jsx)(de, {
                        path: "/",
                        element: (0, Je.jsx)(Gt, {})
                    }), (0, Je.jsx)(de, {
                        path: "/claim",
                        element: (0, Je.jsx)(_C, {})
                    }), (0, Je.jsx)(de, {
                        path: "/eligibility",
                        element: (0, Je.jsx)(QC, {})
                    })]
                })
            })
        };
        l.createRoot(document.getElementById("root")).render((0, Je.jsx)(PC, {}))
    })()
})();
//# sourceMappingURL=main.5e8e8e54.js.map