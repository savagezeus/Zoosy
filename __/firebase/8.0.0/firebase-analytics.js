! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase)
}(this, function(bt) {
    "use strict";
    try {
        (function() {
            function e(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var t = e(bt),
                n = function(e, t) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } ||

                        function(e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n])
                        }
                    )(e, t)
                };
            var c = function() {
                return (c = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function h(e, a, s, u) {
                return new(s = s || Promise)(function(n, t) {
                    function r(e) {
                        try {
                            o(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(r, i)
                    }
                    o((u = u.apply(e, a || [])).next())
                })
            }

            function v(n, r) {
                var i, o, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0])
                                throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    e = {
                        next: t(0),
                        throw: t(1),
                        return: t(2)
                    };
                return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }),
                    e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (i = 1,
                                        o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o),
                                            0) : o.next) && !(a = a.call(o, t[1])).done)
                                        return a;
                                    switch (o = 0,
                                        a && (t = [2 & t[0], a.value]),
                                        t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++,
                                                o = t[1],
                                                t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(),
                                                s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1],
                                                    a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2],
                                                    s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(),
                                                s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e],
                                        o = 0
                                } finally {
                                    i = a = 0
                                }
                            if (5 & t[0])
                                throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function s(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function r() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n)
                            return e;
                        var r, i, o = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || 0 < t--) && !(r = o.next()).done;)
                                a.push(r.value)
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = o.return) && n.call(o)
                            } finally {
                                if (i)
                                    throw i.error
                            }
                        }
                        return a
                    }(arguments[t]));
                return e
            }

            function l() {
                var e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id
            }

            function f() {
                return "indexedDB" in self && null != indexedDB
            }

            function d() {
                return new Promise(function(e, t) {
                    try {
                        var n = !0,
                            r = "validate-browser-context-for-indexeddb-analytics-module",
                            i = window.indexedDB.open(r);
                        i.onsuccess = function() {
                                i.result.close(),
                                    n || window.indexedDB.deleteDatabase(r),
                                    e(!0)
                            },
                            i.onupgradeneeded = function() {
                                n = !1
                            },
                            i.onerror = function() {
                                var e;
                                t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                    } catch (e) {
                        t(e)
                    }
                })
            }

            function p() {
                return !(!navigator || !navigator.cookieEnabled)
            }
            var i, o, a, u = "FirebaseError",
                g = (i = Error,
                    n(o = y, a = i),
                    o.prototype = null === a ? Object.create(a) : (m.prototype = a.prototype,
                        new m),
                    y);

            function m() {
                this.constructor = o
            }

            function y(e, t, n) {
                t = i.call(this, t) || this;
                return t.code = e,
                    t.customData = n,
                    t.name = u,
                    Object.setPrototypeOf(t, y.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(t, b.prototype.create),
                    t
            }
            var b = (w.prototype.create = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    var r, i = t[0] || {},
                        o = this.service + "/" + e,
                        e = this.errors[e],
                        e = e ? (r = i,
                            e.replace(I, function(e, t) {
                                var n = r[t];
                                return null != n ? String(n) : "<" + t + "?>"
                            })) : "Error",
                        e = this.serviceName + ": " + e + " (" + o + ").";
                    return new g(o, e, i)
                },
                w);

            function w(e, t, n) {
                this.service = e,
                    this.serviceName = t,
                    this.errors = n
            }
            var I = /\{\$([^}]+)}/g,
                _ = 1e3,
                E = 2,
                T = 144e5,
                S = .5;

            function C(e, t, n) {
                void 0 === t && (t = _),
                    void 0 === n && (n = E);
                n = t * Math.pow(n, e),
                    e = Math.round(S * n * (Math.random() - .5) * 2);
                return Math.min(T, n + e)
            }
            var O = (N.prototype.setInstantiationMode = function(e) {
                    return this.instantiationMode = e,
                        this
                },
                N.prototype.setMultipleInstances = function(e) {
                    return this.multipleInstances = e,
                        this
                },
                N.prototype.setServiceProps = function(e) {
                    return this.serviceProps = e,
                        this
                },
                N);

            function N(e, t, n) {
                this.name = e,
                    this.instanceFactory = t,
                    this.type = n,
                    this.multipleInstances = !1,
                    this.serviceProps = {},
                    this.instantiationMode = "LAZY"
            }

            function D(n) {
                return new Promise(function(e, t) {
                    n.onsuccess = function() {
                            e(n.result)
                        },
                        n.onerror = function() {
                            t(n.error)
                        }
                })
            }

            function P(n, r, i) {
                var o, e = new Promise(function(e, t) {
                    D(o = n[r].apply(n, i)).then(e, t)
                });
                return e.request = o,
                    e
            }

            function A(e, n, t) {
                t.forEach(function(t) {
                    Object.defineProperty(e.prototype, t, {
                        get: function() {
                            return this[n][t]
                        },
                        set: function(e) {
                            this[n][t] = e
                        }
                    })
                })
            }

            function x(t, n, r, e) {
                e.forEach(function(e) {
                    e in r.prototype && (t.prototype[e] = function() {
                        return P(this[n], e, arguments)
                    })
                })
            }

            function k(t, n, r, e) {
                e.forEach(function(e) {
                    e in r.prototype && (t.prototype[e] = function() {
                        return this[n][e].apply(this[n], arguments)
                    })
                })
            }

            function j(e, r, t, n) {
                n.forEach(function(n) {
                    n in t.prototype && (e.prototype[n] = function() {
                        return e = this[r],
                            (t = P(e, n, arguments)).then(function(e) {
                                if (e)
                                    return new R(e, t.request)
                            });
                        var e, t
                    })
                })
            }

            function L(e) {
                this._index = e
            }

            function R(e, t) {
                this._cursor = e,
                    this._request = t
            }

            function F(e) {
                this._store = e
            }

            function M(n) {
                this._tx = n,
                    this.complete = new Promise(function(e, t) {
                        n.oncomplete = function() {
                                e()
                            },
                            n.onerror = function() {
                                t(n.error)
                            },
                            n.onabort = function() {
                                t(n.error)
                            }
                    })
            }

            function B(e, t, n) {
                this._db = e,
                    this.oldVersion = t,
                    this.transaction = new M(n)
            }

            function H(e) {
                this._db = e
            }
            A(L, "_index", ["name", "keyPath", "multiEntry", "unique"]),
                x(L, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
                j(L, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
                A(R, "_cursor", ["direction", "key", "primaryKey", "value"]),
                x(R, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function(n) {
                    n in IDBCursor.prototype && (R.prototype[n] = function() {
                        var t = this,
                            e = arguments;
                        return Promise.resolve().then(function() {
                            return t._cursor[n].apply(t._cursor, e),
                                D(t._request).then(function(e) {
                                    if (e)
                                        return new R(e, t._request)
                                })
                        })
                    })
                }),
                F.prototype.createIndex = function() {
                    return new L(this._store.createIndex.apply(this._store, arguments))
                },
                F.prototype.index = function() {
                    return new L(this._store.index.apply(this._store, arguments))
                },
                A(F, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
                x(F, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]),
                j(F, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
                k(F, "_store", IDBObjectStore, ["deleteIndex"]),
                M.prototype.objectStore = function() {
                    return new F(this._tx.objectStore.apply(this._tx, arguments))
                },
                A(M, "_tx", ["objectStoreNames", "mode"]),
                k(M, "_tx", IDBTransaction, ["abort"]),
                B.prototype.createObjectStore = function() {
                    return new F(this._db.createObjectStore.apply(this._db, arguments))
                },
                A(B, "_db", ["name", "version", "objectStoreNames"]),
                k(B, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
                H.prototype.transaction = function() {
                    return new M(this._db.transaction.apply(this._db, arguments))
                },
                A(H, "_db", ["name", "version", "objectStoreNames"]),
                k(H, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function(i) {
                    [F, L].forEach(function(e) {
                        i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function() {
                            var e = (n = arguments,
                                    Array.prototype.slice.call(n)),
                                t = e[e.length - 1],
                                n = this._store || this._index,
                                r = n[i].apply(n, e.slice(0, -1));
                            r.onsuccess = function() {
                                t(r.result)
                            }
                        })
                    })
                }), [L, F].forEach(function(e) {
                    e.prototype.getAll || (e.prototype.getAll = function(e, n) {
                        var r = this,
                            i = [];
                        return new Promise(function(t) {
                            r.iterateCursor(e, function(e) {
                                e ? (i.push(e.value),
                                    void 0 === n || i.length != n ? e.continue() : t(i)) : t(i)
                            })
                        })
                    })
                });
            var q = "0.4.18",
                V = 1e4,
                G = "w:" + q,
                K = "FIS_v2",
                U = "https://firebaseinstallations.googleapis.com/v1",
                W = 36e5,
                $ = ((Be = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"',
                    Be["not-registered"] = "Firebase Installation is not registered.",
                    Be["installation-not-found"] = "Firebase Installation not found.",
                    Be["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                    Be["app-offline"] = "Could not process request. Application offline.",
                    Be["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.",
                    Be),
                z = new b("installations", "Installations", $);

            function J(e) {
                return e instanceof g && e.code.includes("request-failed")
            }

            function Y(e) {
                e = e.projectId;
                return U + "/projects/" + e + "/installations"
            }

            function X(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: (e = e.expiresIn,
                        Number(e.replace("s", "000"))),
                    creationTime: Date.now()
                }
            }

            function Z(n, r) {
                return h(this, void 0, void 0, function() {
                    var t;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.json()];
                            case 1:
                                return t = e.sent(),
                                    t = t.error, [2, z.create("request-failed", {
                                        requestName: n,
                                        serverCode: t.code,
                                        serverMessage: t.message,
                                        serverStatus: t.status
                                    })]
                        }
                    })
                })
            }

            function Q(e) {
                e = e.apiKey;
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function ee(e, t) {
                t = t.refreshToken,
                    e = Q(e);
                return e.append("Authorization", K + " " + t),
                    e
            }

            function te(n) {
                return h(this, void 0, void 0, function() {
                    var t;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t]
                        }
                    })
                })
            }

            function ne(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                })
            }
            var re = /^[cdef][\w-]{21}$/,
                ie = "";

            function oe() {
                try {
                    var e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e),
                        e[0] = 112 + e[0] % 16;
                    e = function(e) {
                        return btoa(String.fromCharCode.apply(String, r(e))).replace(/\+/g, "-").replace(/\//g, "_")
                    }(e).substr(0, 22);
                    return re.test(e) ? e : ie
                } catch (e) {
                    return ie
                }
            }

            function ae(e) {
                return e.appName + "!" + e.appId
            }
            var se = new Map;

            function ue(e, t) {
                e = ae(e);
                ce(e, t),
                    function(e, t) {
                        var n = fe();
                        n && n.postMessage({
                            key: e,
                            fid: t
                        });
                        de()
                    }(e, t)
            }

            function ce(e, t) {
                var n, r, i = se.get(e);
                if (i)
                    try {
                        for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
                            (0,
                                a.value)(t)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
            }
            var le = null;

            function fe() {
                return !le && "BroadcastChannel" in self && ((le = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
                        ce(e.data.key, e.data.fid)
                    }),
                    le
            }

            function de() {
                0 === se.size && le && (le.close(),
                    le = null)
            }
            var pe, he, ve = "firebase-installations-database",
                ge = 1,
                me = "firebase-installations-store",
                ye = null;

            function be() {
                var e, t, n;
                return ye || (e = ge,
                        t = function(e) {
                            0 === e.oldVersion && e.createObjectStore(me)
                        },
                        (n = (e = P(indexedDB, "open", [ve, e])).request) && (n.onupgradeneeded = function(e) {
                            t && t(new B(n.result, e.oldVersion, n.transaction))
                        }),
                        ye = e.then(function(e) {
                            return new H(e)
                        })),
                    ye
            }

            function we(o, a) {
                return h(this, void 0, void 0, function() {
                    var t, n, r, i;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = ae(o), [4, be()];
                            case 1:
                                return r = e.sent(),
                                    n = r.transaction(me, "readwrite"), [4, (r = n.objectStore(me)).get(t)];
                            case 2:
                                return i = e.sent(), [4, r.put(a, t)];
                            case 3:
                                return e.sent(), [4, n.complete];
                            case 4:
                                return e.sent(),
                                    i && i.fid === a.fid || ue(o, a.fid), [2, a]
                        }
                    })
                })
            }

            function Ie(r) {
                return h(this, void 0, void 0, function() {
                    var t, n;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = ae(r), [4, be()];
                            case 1:
                                return n = e.sent(), [4, (n = n.transaction(me, "readwrite")).objectStore(me).delete(t)];
                            case 2:
                                return e.sent(), [4, n.complete];
                            case 3:
                                return e.sent(), [2]
                        }
                    })
                })
            }

            function _e(a, s) {
                return h(this, void 0, void 0, function() {
                    var t, n, r, i, o;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = ae(a), [4, be()];
                            case 1:
                                return r = e.sent(),
                                    n = r.transaction(me, "readwrite"), [4, (r = n.objectStore(me)).get(t)];
                            case 2:
                                return i = e.sent(),
                                    void 0 !== (o = s(i)) ? [3, 4] : [4, r.delete(t)];
                            case 3:
                                return e.sent(), [3, 6];
                            case 4:
                                return [4, r.put(o, t)];
                            case 5:
                                e.sent(),
                                    e.label = 6;
                            case 6:
                                return [4, n.complete];
                            case 7:
                                return e.sent(), !o || i && i.fid === o.fid || ue(a, o.fid), [2, o]
                        }
                    })
                })
            }

            function Ee(i) {
                return h(this, void 0, void 0, function() {
                    var t, n, r;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, _e(i, function(e) {
                                    e = Se(e || {
                                            fid: oe(),
                                            registrationStatus: 0
                                        }),
                                        e = function(e, t) {
                                            {
                                                if (0 !== t.registrationStatus)
                                                    return 1 === t.registrationStatus ? {
                                                        installationEntry: t,
                                                        registrationPromise: function(i) {
                                                            return h(this, void 0, void 0, function() {
                                                                var t, n, r;
                                                                return v(this, function(e) {
                                                                    switch (e.label) {
                                                                        case 0:
                                                                            return [4, Te(i)];
                                                                        case 1:
                                                                            t = e.sent(),
                                                                                e.label = 2;
                                                                        case 2:
                                                                            return 1 !== t.registrationStatus ? [3, 5] : [4, ne(100)];
                                                                        case 3:
                                                                            return e.sent(), [4, Te(i)];
                                                                        case 4:
                                                                            return t = e.sent(), [3, 2];
                                                                        case 5:
                                                                            return 0 !== t.registrationStatus ? [3, 7] : [4, Ee(i)];
                                                                        case 6:
                                                                            return r = e.sent(),
                                                                                n = r.installationEntry,
                                                                                (r = r.registrationPromise) ? [2, r] : [2, n];
                                                                        case 7:
                                                                            return [2, t]
                                                                    }
                                                                })
                                                            })
                                                        }(e)
                                                    } : {
                                                        installationEntry: t
                                                    };
                                                if (!navigator.onLine) {
                                                    var n = Promise.reject(z.create("app-offline"));
                                                    return {
                                                        installationEntry: t,
                                                        registrationPromise: n
                                                    }
                                                }
                                                t = {
                                                        fid: t.fid,
                                                        registrationStatus: 1,
                                                        registrationTime: Date.now()
                                                    },
                                                    e = function(r, i) {
                                                        return h(this, void 0, void 0, function() {
                                                            var t, n;
                                                            return v(this, function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return e.trys.push([0, 2, , 7]), [4, function(a, e) {
                                                                            var s = e.fid;
                                                                            return h(this, void 0, void 0, function() {
                                                                                var t, n, r, i, o;
                                                                                return v(this, function(e) {
                                                                                    switch (e.label) {
                                                                                        case 0:
                                                                                            return t = Y(a),
                                                                                                n = Q(a),
                                                                                                o = {
                                                                                                    fid: s,
                                                                                                    authVersion: K,
                                                                                                    appId: a.appId,
                                                                                                    sdkVersion: G
                                                                                                },
                                                                                                r = {
                                                                                                    method: "POST",
                                                                                                    headers: n,
                                                                                                    body: JSON.stringify(o)
                                                                                                }, [4, te(function() {
                                                                                                    return fetch(t, r)
                                                                                                })];
                                                                                        case 1:
                                                                                            return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                                                                                        case 2:
                                                                                            return o = e.sent(), [2, {
                                                                                                fid: o.fid || s,
                                                                                                registrationStatus: 2,
                                                                                                refreshToken: o.refreshToken,
                                                                                                authToken: X(o.authToken)
                                                                                            }];
                                                                                        case 3:
                                                                                            return [4, Z("Create Installation", i)];
                                                                                        case 4:
                                                                                            throw e.sent()
                                                                                    }
                                                                                })
                                                                            })
                                                                        }(r, i)];
                                                                    case 1:
                                                                        return t = e.sent(), [2, we(r, t)];
                                                                    case 2:
                                                                        return J(n = e.sent()) && 409 === n.customData.serverCode ? [4, Ie(r)] : [3, 4];
                                                                    case 3:
                                                                        return e.sent(), [3, 6];
                                                                    case 4:
                                                                        return [4, we(r, {
                                                                            fid: i.fid,
                                                                            registrationStatus: 0
                                                                        })];
                                                                    case 5:
                                                                        e.sent(),
                                                                            e.label = 6;
                                                                    case 6:
                                                                        throw n;
                                                                    case 7:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, t);
                                                return {
                                                    installationEntry: t,
                                                    registrationPromise: e
                                                }
                                            }
                                        }(i, e);
                                    return t = e.registrationPromise,
                                        e.installationEntry
                                })];
                            case 1:
                                return (n = e.sent()).fid !== ie ? [3, 3] : (r = {}, [4, t]);
                            case 2:
                                return [2, (r.installationEntry = e.sent(),
                                    r)];
                            case 3:
                                return [2, {
                                    installationEntry: n,
                                    registrationPromise: t
                                }]
                        }
                    })
                })
            }

            function Te(e) {
                return _e(e, function(e) {
                    if (!e)
                        throw z.create("installation-not-found");
                    return Se(e)
                })
            }

            function Se(e) {
                return 1 === (t = e).registrationStatus && t.registrationTime + V < Date.now() ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e;
                var t
            }

            function Ce(e, a) {
                var s = e.appConfig,
                    u = e.platformLoggerProvider;
                return h(this, void 0, void 0, function() {
                    var t, n, r, i, o;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = function(e, t) {
                                        t = t.fid;
                                        return Y(e) + "/" + t + "/authTokens:generate"
                                    }(s, a),
                                    n = ee(s, a),
                                    (o = u.getImmediate({
                                        optional: !0
                                    })) && n.append("x-firebase-client", o.getPlatformInfoString()),
                                    o = {
                                        installation: {
                                            sdkVersion: G
                                        }
                                    },
                                    r = {
                                        method: "POST",
                                        headers: n,
                                        body: JSON.stringify(o)
                                    }, [4, te(function() {
                                        return fetch(t, r)
                                    })];
                            case 1:
                                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                            case 2:
                                return o = e.sent(), [2, X(o)];
                            case 3:
                                return [4, Z("Generate Auth Token", i)];
                            case 4:
                                throw e.sent()
                        }
                    })
                })
            }

            function Oe(i, o) {
                return void 0 === o && (o = !1),
                    h(this, void 0, void 0, function() {
                        var r, t, n;
                        return v(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, _e(i.appConfig, function(e) {
                                        if (!De(e))
                                            throw z.create("not-registered");
                                        var t, n = e.authToken;
                                        if (o || 2 !== (t = n).requestStatus || function(e) {
                                                var t = Date.now();
                                                return t < e.creationTime || e.creationTime + e.expiresIn < t + W
                                            }(t)) {
                                            if (1 === n.requestStatus)
                                                return r = function(n, r) {
                                                        return h(this, void 0, void 0, function() {
                                                            var t;
                                                            return v(this, function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return [4, Ne(n.appConfig)];
                                                                    case 1:
                                                                        t = e.sent(),
                                                                            e.label = 2;
                                                                    case 2:
                                                                        return 1 !== t.authToken.requestStatus ? [3, 5] : [4, ne(100)];
                                                                    case 3:
                                                                        return e.sent(), [4, Ne(n.appConfig)];
                                                                    case 4:
                                                                        return t = e.sent(), [3, 2];
                                                                    case 5:
                                                                        return 0 === (t = t.authToken).requestStatus ? [2, Oe(n, r)] : [2, t]
                                                                }
                                                            })
                                                        })
                                                    }(i, o),
                                                    e;
                                            if (!navigator.onLine)
                                                throw z.create("app-offline");
                                            n = (t = e,
                                                n = {
                                                    requestStatus: 1,
                                                    requestTime: Date.now()
                                                },
                                                c(c({}, t), {
                                                    authToken: n
                                                }));
                                            return r = function(i, o) {
                                                    return h(this, void 0, void 0, function() {
                                                        var t, n, r;
                                                        return v(this, function(e) {
                                                            switch (e.label) {
                                                                case 0:
                                                                    return e.trys.push([0, 3, , 8]), [4, Ce(i, o)];
                                                                case 1:
                                                                    return t = e.sent(),
                                                                        r = c(c({}, o), {
                                                                            authToken: t
                                                                        }), [4, we(i.appConfig, r)];
                                                                case 2:
                                                                    return e.sent(), [2, t];
                                                                case 3:
                                                                    return !J(n = e.sent()) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode ? [3, 5] : [4, Ie(i.appConfig)];
                                                                case 4:
                                                                    return e.sent(), [3, 7];
                                                                case 5:
                                                                    return r = c(c({}, o), {
                                                                        authToken: {
                                                                            requestStatus: 0
                                                                        }
                                                                    }), [4, we(i.appConfig, r)];
                                                                case 6:
                                                                    e.sent(),
                                                                        e.label = 7;
                                                                case 7:
                                                                    throw n;
                                                                case 8:
                                                                    return [2]
                                                            }
                                                        })
                                                    })
                                                }(i, n),
                                                n
                                        }
                                        return e
                                    })];
                                case 1:
                                    return t = e.sent(),
                                        r ? [4, r] : [3, 3];
                                case 2:
                                    return n = e.sent(), [3, 4];
                                case 3:
                                    n = t.authToken,
                                        e.label = 4;
                                case 4:
                                    return [2, n]
                            }
                        })
                    })
            }

            function Ne(e) {
                return _e(e, function(e) {
                    if (!De(e))
                        throw z.create("not-registered");
                    var t = e.authToken;
                    return 1 === (t = t).requestStatus && t.requestTime + V < Date.now() ? c(c({}, e), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : e
                })
            }

            function De(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }

            function Pe(t, n) {
                return void 0 === n && (n = !1),
                    h(this, void 0, void 0, function() {
                        return v(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, function(n) {
                                        return h(this, void 0, void 0, function() {
                                            var t;
                                            return v(this, function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, Ee(n)];
                                                    case 1:
                                                        return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                                                    case 2:
                                                        e.sent(),
                                                            e.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }(t.appConfig)];
                                case 1:
                                    return e.sent(), [4, Oe(t, n)];
                                case 2:
                                    return [2, e.sent().token]
                            }
                        })
                    })
            }

            function Ae(i, o) {
                return h(this, void 0, void 0, function() {
                    var t, n, r;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = function(e, t) {
                                        t = t.fid;
                                        return Y(e) + "/" + t
                                    }(i, o),
                                    r = ee(i, o),
                                    n = {
                                        method: "DELETE",
                                        headers: r
                                    }, [4, te(function() {
                                        return fetch(t, n)
                                    })];
                            case 1:
                                return (r = e.sent()).ok ? [3, 3] : [4, Z("Delete Installation", r)];
                            case 2:
                                throw e.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function xe(e, r) {
                var i = e.appConfig;
                return function(e, t) {
                        fe();
                        var n = ae(e);
                        (e = se.get(n)) || (e = new Set,
                            se.set(n, e)),
                        e.add(t)
                    }(i, r),
                    function() {
                        var e, t, n;
                        t = r,
                            n = ae(e = i),
                            (e = se.get(n)) && (e.delete(t),
                                0 === e.size && se.delete(n),
                                de())
                    }
            }

            function ke(e) {
                return z.create("missing-app-config-values", {
                    valueName: e
                })
            }

            function je() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                for (var r = Array(e), i = 0, t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
                        i++)
                        r[i] = o[a];
                return r
            }
            (pe = t.default).INTERNAL.registerComponent(new O("installations", function(e) {
                    var t = e.getProvider("app").getImmediate(),
                        n = {
                            appConfig: function(e) {
                                var t, n;
                                if (!e || !e.options)
                                    throw ke("App Configuration");
                                if (!e.name)
                                    throw ke("App Name");
                                try {
                                    for (var r = s(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                                        var o = i.value;
                                        if (!e.options[o])
                                            throw ke(o)
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (t)
                                            throw t.error
                                    }
                                }
                                return {
                                    appName: e.name,
                                    projectId: e.options.projectId,
                                    apiKey: e.options.apiKey,
                                    appId: e.options.appId
                                }
                            }(t),
                            platformLoggerProvider: e.getProvider("platform-logger")
                        };
                    return {
                        app: t,
                        getId: function() {
                            return function(r) {
                                return h(this, void 0, void 0, function() {
                                    var t, n;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, Ee(r.appConfig)];
                                            case 1:
                                                return t = e.sent(),
                                                    n = t.installationEntry,
                                                    (t.registrationPromise || Oe(r)).catch(console.error), [2, n.fid]
                                        }
                                    })
                                })
                            }(n)
                        },
                        getToken: function(e) {
                            return Pe(n, e)
                        },
                        delete: function() {
                            return function(r) {
                                return h(this, void 0, void 0, function() {
                                    var t, n;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, _e(t = r.appConfig, function(e) {
                                                    if (!e || 0 !== e.registrationStatus)
                                                        return e
                                                })];
                                            case 1:
                                                if (!(n = e.sent()))
                                                    return [3, 6];
                                                if (1 !== n.registrationStatus)
                                                    return [3, 2];
                                                throw z.create("delete-pending-registration");
                                            case 2:
                                                if (2 !== n.registrationStatus)
                                                    return [3, 6];
                                                if (navigator.onLine)
                                                    return [3, 3];
                                                throw z.create("app-offline");
                                            case 3:
                                                return [4, Ae(t, n)];
                                            case 4:
                                                return e.sent(), [4, Ie(t)];
                                            case 5:
                                                e.sent(),
                                                    e.label = 6;
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }(n)
                        },
                        onIdChange: function(e) {
                            return xe(n, e)
                        }
                    }
                }, "PUBLIC")),
                pe.registerVersion("@firebase/installations", q),
                (Be = he = he || {})[Be.DEBUG = 0] = "DEBUG",
                Be[Be.VERBOSE = 1] = "VERBOSE",
                Be[Be.INFO = 2] = "INFO",
                Be[Be.WARN = 3] = "WARN",
                Be[Be.ERROR = 4] = "ERROR",
                Be[Be.SILENT = 5] = "SILENT";

            function Le(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                if (!(t < e.logLevel)) {
                    var i = (new Date).toISOString(),
                        o = Me[t];
                    if (!o)
                        throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
                    console[o].apply(console, je(["[" + i + "]  " + e.name + ":"], n))
                }
            }
            var Re = {
                    debug: he.DEBUG,
                    verbose: he.VERBOSE,
                    info: he.INFO,
                    warn: he.WARN,
                    error: he.ERROR,
                    silent: he.SILENT
                },
                Fe = he.INFO,
                Me = (($ = {})[he.DEBUG] = "log",
                    $[he.VERBOSE] = "log",
                    $[he.INFO] = "info",
                    $[he.WARN] = "warn",
                    $[he.ERROR] = "error",
                    $),
                Be = (Object.defineProperty(He.prototype, "logLevel", {
                        get: function() {
                            return this._logLevel
                        },
                        set: function(e) {
                            if (!(e in he))
                                throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                            this._logLevel = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    He.prototype.setLogLevel = function(e) {
                        this._logLevel = "string" == typeof e ? Re[e] : e
                    },
                    Object.defineProperty(He.prototype, "logHandler", {
                        get: function() {
                            return this._logHandler
                        },
                        set: function(e) {
                            if ("function" != typeof e)
                                throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(He.prototype, "userLogHandler", {
                        get: function() {
                            return this._userLogHandler
                        },
                        set: function(e) {
                            this._userLogHandler = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    He.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, je([this, he.DEBUG], e)),
                            this._logHandler.apply(this, je([this, he.DEBUG], e))
                    },
                    He.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, je([this, he.VERBOSE], e)),
                            this._logHandler.apply(this, je([this, he.VERBOSE], e))
                    },
                    He.prototype.info = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, je([this, he.INFO], e)),
                            this._logHandler.apply(this, je([this, he.INFO], e))
                    },
                    He.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, je([this, he.WARN], e)),
                            this._logHandler.apply(this, je([this, he.WARN], e))
                    },
                    He.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, je([this, he.ERROR], e)),
                            this._logHandler.apply(this, je([this, he.ERROR], e))
                    },
                    He);

            function He(e) {
                this.name = e,
                    this._logLevel = Fe,
                    this._logHandler = Le,
                    this._userLogHandler = null
            }
            var qe, Ve, Ge = "firebase_id",
                Ke = "origin",
                Ue = 6e4,
                We = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
                $e = "https://www.googletagmanager.com/gtag/js";
            ($ = qe = qe || {}).EVENT = "event",
                $.SET = "set",
                $.CONFIG = "config",
                ($ = Ve = Ve || {}).ADD_SHIPPING_INFO = "add_shipping_info",
                $.ADD_PAYMENT_INFO = "add_payment_info",
                $.ADD_TO_CART = "add_to_cart",
                $.ADD_TO_WISHLIST = "add_to_wishlist",
                $.BEGIN_CHECKOUT = "begin_checkout",
                $.CHECKOUT_PROGRESS = "checkout_progress",
                $.EXCEPTION = "exception",
                $.GENERATE_LEAD = "generate_lead",
                $.LOGIN = "login",
                $.PAGE_VIEW = "page_view",
                $.PURCHASE = "purchase",
                $.REFUND = "refund",
                $.REMOVE_FROM_CART = "remove_from_cart",
                $.SCREEN_VIEW = "screen_view",
                $.SEARCH = "search",
                $.SELECT_CONTENT = "select_content",
                $.SELECT_ITEM = "select_item",
                $.SELECT_PROMOTION = "select_promotion",
                $.SET_CHECKOUT_OPTION = "set_checkout_option",
                $.SHARE = "share",
                $.SIGN_UP = "sign_up",
                $.TIMING_COMPLETE = "timing_complete",
                $.VIEW_CART = "view_cart",
                $.VIEW_ITEM = "view_item",
                $.VIEW_ITEM_LIST = "view_item_list",
                $.VIEW_PROMOTION = "view_promotion",
                $.VIEW_SEARCH_RESULTS = "view_search_results";
            var ze = new Be("@firebase/analytics");

            function Je(o, a, s, u) {
                return function(n, r, i) {
                    return h(this, void 0, void 0, function() {
                        var t;
                        return v(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 6, , 7]),
                                        n !== qe.EVENT ? [3, 2] : [4, function(u, c, l, f, d) {
                                            return h(this, void 0, void 0, function() {
                                                var n, r, t, i, o, a, s;
                                                return v(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return (e.trys.push([0, 4, , 5]),
                                                                n = [],
                                                                d && d.send_to) ? (s = d.send_to,
                                                                Array.isArray(s) || (s = [s]), [4, Promise.all(l)]) : [3, 2];
                                                        case 1:
                                                            for (r = e.sent(),
                                                                t = function(t) {
                                                                    var e = r.find(function(e) {
                                                                            return e.measurementId === t
                                                                        }),
                                                                        e = e && c[e.appId];
                                                                    if (!e)
                                                                        return n = [],
                                                                            "break";
                                                                    n.push(e)
                                                                },
                                                                i = 0,
                                                                o = s; i < o.length && (a = o[i],
                                                                    "break" !== t(a)); i++)
                                                            ;
                                                            e.label = 2;
                                                        case 2:
                                                            return 0 === n.length && (n = Object.values(c)), [4, Promise.all(n)];
                                                        case 3:
                                                            return e.sent(),
                                                                u(qe.EVENT, f, d || {}), [3, 5];
                                                        case 4:
                                                            return s = e.sent(),
                                                                ze.error(s), [3, 5];
                                                        case 5:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(o, a, s, r, i)];
                                case 1:
                                    return e.sent(), [3, 5];
                                case 2:
                                    return n !== qe.CONFIG ? [3, 4] : [4, function(r, i, o, a, s, u) {
                                        return h(this, void 0, void 0, function() {
                                            var t, n;
                                            return v(this, function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        t = a[s],
                                                            e.label = 1;
                                                    case 1:
                                                        return e.trys.push([1, 7, , 8]),
                                                            t ? [4, i[t]] : [3, 3];
                                                    case 2:
                                                        return e.sent(), [3, 6];
                                                    case 3:
                                                        return [4, Promise.all(o)];
                                                    case 4:
                                                        return n = e.sent(),
                                                            (n = n.find(function(e) {
                                                                return e.measurementId === s
                                                            })) ? [4, i[n.appId]] : [3, 6];
                                                    case 5:
                                                        e.sent(),
                                                            e.label = 6;
                                                    case 6:
                                                        return [3, 8];
                                                    case 7:
                                                        return n = e.sent(),
                                                            ze.error(n), [3, 8];
                                                    case 8:
                                                        return r(qe.CONFIG, s, u), [2]
                                                }
                                            })
                                        })
                                    }(o, a, s, u, r, i)];
                                case 3:
                                    return e.sent(), [3, 5];
                                case 4:
                                    o(qe.SET, r),
                                        e.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return t = e.sent(),
                                        ze.error(t), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }
            }
            var Be = ((Be = {})["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
                    Be["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
                    Be["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}",
                    Be["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    Be["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    Be["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
                    Be["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
                    Be["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
                    Be["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
                    Be),
                Ye = new b("analytics", "Analytics", Be),
                Xe = 30;

            function Ze(e, t) {
                void 0 === e && (e = {}),
                    void 0 === t && (t = 1e3),
                    this.throttleMetadata = e,
                    this.intervalMillis = t
            }
            var Qe = new(Ze.prototype.getThrottleMetadata = function(e) {
                    return this.throttleMetadata[e]
                },
                Ze.prototype.setThrottleMetadata = function(e, t) {
                    this.throttleMetadata[e] = t
                },
                Ze.prototype.deleteThrottleMetadata = function(e) {
                    delete this.throttleMetadata[e]
                },
                Ze);

            function et(o) {
                var a;
                return h(this, void 0, void 0, function() {
                    var t, n, r, i;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = o.appId,
                                    i = o.apiKey,
                                    i = {
                                        method: "GET",
                                        headers: new Headers({
                                            Accept: "application/json",
                                            "x-goog-api-key": i
                                        })
                                    },
                                    t = We.replace("{app-id}", t), [4, fetch(t, i)];
                            case 1:
                                if (200 === (n = e.sent()).status || 304 === n.status)
                                    return [3, 6];
                                r = "",
                                    e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), [4, n.json()];
                            case 3:
                                return i = e.sent(),
                                    null !== (a = i.error) && void 0 !== a && a.message && (r = i.error.message), [3, 5];
                            case 4:
                                return e.sent(), [3, 5];
                            case 5:
                                throw Ye.create("config-fetch-failed", {
                                    httpStatus: n.status,
                                    responseMessage: r
                                });
                            case 6:
                                return [2, n.json()]
                        }
                    })
                })
            }

            function tt(s, u, c) {
                return void 0 === u && (u = Qe),
                    h(this, void 0, void 0, function() {
                        var t, n, r, i, o, a = this;
                        return v(this, function(e) {
                            if (i = s.options,
                                t = i.appId,
                                n = i.apiKey,
                                r = i.measurementId, !t)
                                throw Ye.create("no-app-id");
                            if (n)
                                return i = u.getThrottleMetadata(t) || {
                                        backoffCount: 0,
                                        throttleEndTimeMillis: Date.now()
                                    },
                                    o = new rt,
                                    setTimeout(function() {
                                        return h(a, void 0, void 0, function() {
                                            return v(this, function(e) {
                                                return o.abort(), [2]
                                            })
                                        })
                                    }, void 0 !== c ? c : Ue), [2, function u(c, e, l, f) {
                                        var d = e.throttleEndTimeMillis,
                                            p = e.backoffCount;
                                        void 0 === f && (f = Qe);
                                        return h(this, void 0, void 0, function() {
                                            var t, n, r, a, s;
                                            return v(this, function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        t = c.appId,
                                                            n = c.measurementId,
                                                            e.label = 1;
                                                    case 1:
                                                        return e.trys.push([1, 3, , 4]), [4, (i = l,
                                                            o = d,
                                                            new Promise(function(e, t) {
                                                                var n = Math.max(o - Date.now(), 0),
                                                                    r = setTimeout(e, n);
                                                                i.addEventListener(function() {
                                                                    clearTimeout(r),
                                                                        t(Ye.create("fetch-throttle", {
                                                                            throttleEndTimeMillis: o
                                                                        }))
                                                                })
                                                            }))];
                                                    case 2:
                                                        return e.sent(), [3, 4];
                                                    case 3:
                                                        if (a = e.sent(),
                                                            n)
                                                            return ze.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + a.message + "]"), [2, {
                                                                appId: t,
                                                                measurementId: n
                                                            }];
                                                        throw a;
                                                    case 4:
                                                        return e.trys.push([4, 6, , 7]), [4, et(c)];
                                                    case 5:
                                                        return s = e.sent(),
                                                            f.deleteThrottleMetadata(t), [2, s];
                                                    case 6:
                                                        if (nt(r = e.sent()))
                                                            return a = 503 === Number(r.customData.httpStatus) ? C(p, f.intervalMillis, Xe) : C(p, f.intervalMillis),
                                                                s = {
                                                                    throttleEndTimeMillis: Date.now() + a,
                                                                    backoffCount: p + 1
                                                                },
                                                                f.setThrottleMetadata(t, s),
                                                                ze.debug("Calling attemptFetch again in " + a + " millis"), [2, u(c, s, l, f)];
                                                        if (f.deleteThrottleMetadata(t),
                                                            n)
                                                            return ze.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + r.message + "]"), [2, {
                                                                appId: t,
                                                                measurementId: n
                                                            }];
                                                        throw r;
                                                    case 7:
                                                        return [2]
                                                }
                                                var i, o
                                            })
                                        })
                                    }({
                                        appId: t,
                                        apiKey: n,
                                        measurementId: r
                                    }, i, o, u)];
                            if (r)
                                return [2, {
                                    measurementId: r,
                                    appId: t
                                }];
                            throw Ye.create("no-api-key")
                        })
                    })
            }

            function nt(e) {
                if (e instanceof g && e.customData) {
                    e = Number(e.customData.httpStatus);
                    return 429 === e || 500 === e || 503 === e || 504 === e
                }
            }
            var rt = (it.prototype.addEventListener = function(e) {
                    this.listeners.push(e)
                },
                it.prototype.abort = function() {
                    this.listeners.forEach(function(e) {
                        return e()
                    })
                },
                it);

            function it() {
                this.listeners = []
            }

            function ot(i, o, a, s, u) {
                return h(this, void 0, void 0, function() {
                    var t, n, r;
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return (t = tt(i)).then(function(e) {
                                        a[e.measurementId] = e.appId,
                                            i.options.measurementId && e.measurementId !== i.options.measurementId && ze.warn("The measurement ID in the local Firebase config (" + i.options.measurementId + ") does not match the measurement ID fetched from the server (" + e.measurementId + "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")
                                    }).catch(function(e) {
                                        return ze.error(e)
                                    }),
                                    o.push(t),
                                    n = function() {
                                        return h(this, void 0, void 0, function() {
                                            var t;
                                            return v(this, function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return f() ? [3, 1] : (ze.warn(Ye.create("indexeddb-unavailable", {
                                                            errorInfo: "IndexedDB is not available in this environment."
                                                        }).message), [2, !1]);
                                                    case 1:
                                                        return e.trys.push([1, 3, , 4]), [4, d()];
                                                    case 2:
                                                        return e.sent(), [3, 4];
                                                    case 3:
                                                        return t = e.sent(),
                                                            ze.warn(Ye.create("indexeddb-unavailable", {
                                                                errorInfo: t
                                                            }).message), [2, !1];
                                                    case 4:
                                                        return [2, !0]
                                                }
                                            })
                                        })
                                    }().then(function(e) {
                                        return e ? s.getId() : void 0
                                    }), [4, Promise.all([t, n])];
                            case 1:
                                return r = e.sent(),
                                    t = r[0],
                                    n = r[1],
                                    u("js", new Date),
                                    (r = {})[Ke] = "firebase",
                                    r.update = !0,
                                    r = r,
                                    null != n && (r[Ge] = n),
                                    u(qe.CONFIG, t.measurementId, r), [2, t.measurementId]
                        }
                    })
                })
            }
            var at, st, ut = {},
                ct = [],
                lt = {},
                ft = "dataLayer",
                dt = "gtag",
                pt = !1;

            function ht(e) {
                if (pt)
                    throw Ye.create("already-initialized");
                e.dataLayerName && (ft = e.dataLayerName),
                    e.gtagName && (dt = e.gtagName)
            }

            function vt(e, t) {
                n = [],
                    l() && n.push("This is a browser extension environment."),
                    p() || n.push("Cookies are not available."),
                    0 < n.length && (n = n.map(function(e, t) {
                            return "(" + (t + 1) + ") " + e
                        }).join(" "),
                        n = Ye.create("invalid-analytics-context", {
                            errorInfo: n
                        }),
                        ze.warn(n.message));
                var n, r, i, o, a, s, u = e.options.appId;
                if (!u)
                    throw Ye.create("no-app-id");
                if (!e.options.apiKey) {
                    if (!e.options.measurementId)
                        throw Ye.create("no-api-key");
                    ze.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + e.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.')
                }
                if (null != ut[u])
                    throw Ye.create("already-exists", {
                        id: u
                    });
                return pt || (function() {
                            for (var e = window.document.getElementsByTagName("script"), t = 0, n = Object.values(e); t < n.length; t++) {
                                var r = n[t];
                                if (r.src && r.src.includes($e))
                                    return r
                            }
                        }() || (a = ft,
                            (s = document.createElement("script")).src = $e + "?l=" + a,
                            s.async = !0,
                            document.head.appendChild(s)),
                        i = ft,
                        o = [],
                        Array.isArray(window[i]) ? o = window[i] : window[i] = o,
                        n = ut,
                        a = ct,
                        s = lt,
                        r = ft,
                        i = dt,
                        o = function() {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e[t] = arguments[t];
                            window[r].push(arguments)
                        },
                        window[i] && "function" == typeof window[i] && (o = window[i]),
                        window[i] = Je(o, n, a, s),
                        i = {
                            gtagCore: o,
                            wrappedGtag: window[i]
                        },
                        st = i.wrappedGtag,
                        at = i.gtagCore,
                        pt = !0),
                    ut[u] = ot(e, ct, lt, t, at), {
                        app: e,
                        logEvent: function(e, t, n) {
                            (function(n, r, i, o, a) {
                                return h(this, void 0, void 0, function() {
                                    var t;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return a && a.global ? (n(qe.EVENT, i, o), [2]) : [3, 1];
                                            case 1:
                                                return [4, r];
                                            case 2:
                                                t = e.sent(),
                                                    t = c(c({}, o), {
                                                        send_to: t
                                                    }),
                                                    n(qe.EVENT, i, t),
                                                    e.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })(st, ut[u], e, t, n).catch(function(e) {
                                return ze.error(e)
                            })
                        },
                        setCurrentScreen: function(e, t) {
                            (function(n, r, i, o) {
                                return h(this, void 0, void 0, function() {
                                    var t;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return o && o.global ? (n(qe.SET, {
                                                    screen_name: i
                                                }), [2, Promise.resolve()]) : [3, 1];
                                            case 1:
                                                return [4, r];
                                            case 2:
                                                t = e.sent(),
                                                    n(qe.CONFIG, t, {
                                                        update: !0,
                                                        screen_name: i
                                                    }),
                                                    e.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })(st, ut[u], e, t).catch(function(e) {
                                return ze.error(e)
                            })
                        },
                        setUserId: function(e, t) {
                            (function(n, r, i, o) {
                                return h(this, void 0, void 0, function() {
                                    var t;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return o && o.global ? (n(qe.SET, {
                                                    user_id: i
                                                }), [2, Promise.resolve()]) : [3, 1];
                                            case 1:
                                                return [4, r];
                                            case 2:
                                                t = e.sent(),
                                                    n(qe.CONFIG, t, {
                                                        update: !0,
                                                        user_id: i
                                                    }),
                                                    e.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })(st, ut[u], e, t).catch(function(e) {
                                return ze.error(e)
                            })
                        },
                        setUserProperties: function(e, t) {
                            (function(a, s, u, c) {
                                return h(this, void 0, void 0, function() {
                                    var t, n, r, i, o;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                if (!c || !c.global)
                                                    return [3, 1];
                                                for (t = {},
                                                    n = 0,
                                                    r = Object.keys(u); n < r.length; n++)
                                                    i = r[n],
                                                    t["user_properties." + i] = u[i];
                                                return a(qe.SET, t), [2, Promise.resolve()];
                                            case 1:
                                                return [4, s];
                                            case 2:
                                                o = e.sent(),
                                                    a(qe.CONFIG, o, {
                                                        update: !0,
                                                        user_properties: u
                                                    }),
                                                    e.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })(st, ut[u], e, t).catch(function(e) {
                                return ze.error(e)
                            })
                        },
                        setAnalyticsCollectionEnabled: function(e) {
                            (function(n, r) {
                                return h(this, void 0, void 0, function() {
                                    var t;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, n];
                                            case 1:
                                                return t = e.sent(),
                                                    window["ga-disable-" + t] = !r, [2]
                                        }
                                    })
                                })
                            })(ut[u], e).catch(function(e) {
                                return ze.error(e)
                            })
                        },
                        INTERNAL: {
                            delete: function() {
                                return delete ut[u],
                                    Promise.resolve()
                            }
                        }
                    }
            }
            var gt, mt = "analytics";

            function yt() {
                return h(this, void 0, void 0, function() {
                    return v(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (l())
                                    return [2, !1];
                                if (!p())
                                    return [2, !1];
                                if (!f())
                                    return [2, !1];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, d()];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            (gt = t.default).INTERNAL.registerComponent(new O(mt, function(e) {
                    return vt(e.getProvider("app").getImmediate(), e.getProvider("installations").getImmediate())
                }, "PUBLIC").setServiceProps({
                    settings: ht,
                    EventName: Ve,
                    isSupported: yt
                })),
                gt.INTERNAL.registerComponent(new O("analytics-internal", function(e) {
                    try {
                        return {
                            logEvent: e.getProvider(mt).getImmediate().logEvent
                        }
                    } catch (e) {
                        throw Ye.create("interop-component-reg-failed", {
                            reason: e
                        })
                    }
                }, "PRIVATE")),
                gt.registerVersion("@firebase/analytics", "0.6.1")
        }).apply(this, arguments)
    } catch (e) {
        throw console.error(e),
            new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-analytics.js.map