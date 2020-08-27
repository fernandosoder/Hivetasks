var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate =
        $jscomp.ASSUME_ES5 || "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
        };
$jscomp.underscoreProtoCanBeSet = function () {
    var a = {a: !0},
            b = {};
    try {
        return (b.__proto__ = a), b.a;
    } catch (c) {
    }
    return !1;
};
$jscomp.setPrototypeOf =
        "function" == typeof Object.setPrototypeOf
        ? Object.setPrototypeOf
        : $jscomp.underscoreProtoCanBeSet()
        ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a;
        }
: null;
$jscomp.inherits = function (a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var c = $jscomp.setPrototypeOf;
        c(a, b);
    } else
        for (c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d);
                } else
                    a[c] = b[c];
    a.superClass_ = b.prototype;
};
$jscomp.arrayIteratorImpl = function (a) {
    var b = 0;
    return function () {
        return b < a.length ? {done: !1, value: a[b++]} : {done: !0};
    };
};
$jscomp.arrayIterator = function (a) {
    return {next: $jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.defineProperty =
        $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
$jscomp.polyfill = function (a, b, c, d) {
    if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for (d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && $jscomp.defineProperty(c, a, {configurable: !0, writable: !0, value: b});
    }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill(
        "Promise",
        function (a) {
            function b() {
                this.batch_ = null;
            }
            function c(a) {
                return a instanceof e
                        ? a
                        : new e(function (b, c) {
                            b(a);
                        });
            }
            if (a && !$jscomp.FORCE_POLYFILL_PROMISE)
                return a;
            b.prototype.asyncExecute = function (a) {
                if (null == this.batch_) {
                    this.batch_ = [];
                    var b = this;
                    this.asyncExecuteFunction(function () {
                        b.executeBatch_();
                    });
                }
                this.batch_.push(a);
            };
            var d = $jscomp.global.setTimeout;
            b.prototype.asyncExecuteFunction = function (a) {
                d(a, 0);
            };
            b.prototype.executeBatch_ = function () {
                for (; this.batch_ && this.batch_.length; ) {
                    var a = this.batch_;
                    this.batch_ = [];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        a[b] = null;
                        try {
                            c();
                        } catch (l) {
                            this.asyncThrow_(l);
                        }
                    }
                }
                this.batch_ = null;
            };
            b.prototype.asyncThrow_ = function (a) {
                this.asyncExecuteFunction(function () {
                    throw a;
                });
            };
            var e = function (a) {
                this.state_ = 0;
                this.result_ = void 0;
                this.onSettledCallbacks_ = [];
                var b = this.createResolveAndReject_();
                try {
                    a(b.resolve, b.reject);
                } catch (k) {
                    b.reject(k);
                }
            };
            e.prototype.createResolveAndReject_ = function () {
                function a(a) {
                    return function (d) {
                        c || ((c = !0), a.call(b, d));
                    };
                }
                var b = this,
                        c = !1;
                return {resolve: a(this.resolveTo_), reject: a(this.reject_)};
            };
            e.prototype.resolveTo_ = function (a) {
                if (a === this)
                    this.reject_(new TypeError("A Promise cannot resolve to itself"));
                else if (a instanceof e)
                    this.settleSameAsPromise_(a);
                else {
                    a: switch (typeof a) {
                        case "object":
                            var b = null != a;
                            break a;
                        case "function":
                            b = !0;
                            break a;
                        default:
                            b = !1;
                    }
                    b ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
                }
            };
            e.prototype.resolveToNonPromiseObj_ = function (a) {
                var b = void 0;
                try {
                    b = a.then;
                } catch (k) {
                    this.reject_(k);
                    return;
                }
                "function" == typeof b ? this.settleSameAsThenable_(b, a) : this.fulfill_(a);
            };
            e.prototype.reject_ = function (a) {
                this.settle_(2, a);
            };
            e.prototype.fulfill_ = function (a) {
                this.settle_(1, a);
            };
            e.prototype.settle_ = function (a, b) {
                if (0 != this.state_)
                    throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_);
                this.state_ = a;
                this.result_ = b;
                this.executeOnSettledCallbacks_();
            };
            e.prototype.executeOnSettledCallbacks_ = function () {
                if (null != this.onSettledCallbacks_) {
                    for (var a = 0; a < this.onSettledCallbacks_.length; ++a)
                        f.asyncExecute(this.onSettledCallbacks_[a]);
                    this.onSettledCallbacks_ = null;
                }
            };
            var f = new b();
            e.prototype.settleSameAsPromise_ = function (a) {
                var b = this.createResolveAndReject_();
                a.callWhenSettled_(b.resolve, b.reject);
            };
            e.prototype.settleSameAsThenable_ = function (a, b) {
                var c = this.createResolveAndReject_();
                try {
                    a.call(b, c.resolve, c.reject);
                } catch (l) {
                    c.reject(l);
                }
            };
            e.prototype.then = function (a, b) {
                function c(a, b) {
                    return "function" == typeof a
                            ? function (b) {
                                try {
                                    d(a(b));
                                } catch (t) {
                                    f(t);
                                }
                            }
                    : b;
                }
                var d,
                        f,
                        g = new e(function (a, b) {
                            d = a;
                            f = b;
                        });
                this.callWhenSettled_(c(a, d), c(b, f));
                return g;
            };
            e.prototype.catch = function (a) {
                return this.then(void 0, a);
            };
            e.prototype.callWhenSettled_ = function (a, b) {
                function c() {
                    switch (d.state_) {
                        case 1:
                            a(d.result_);
                            break;
                        case 2:
                            b(d.result_);
                            break;
                        default:
                            throw Error("Unexpected state: " + d.state_);
                    }
                }
                var d = this;
                null == this.onSettledCallbacks_ ? f.asyncExecute(c) : this.onSettledCallbacks_.push(c);
            };
            e.resolve = c;
            e.reject = function (a) {
                return new e(function (b, c) {
                    c(a);
                });
            };
            e.race = function (a) {
                return new e(function (b, d) {
                    for (var e = $jscomp.makeIterator(a), f = e.next(); !f.done; f = e.next())
                        c(f.value).callWhenSettled_(b, d);
                });
            };
            e.all = function (a) {
                var b = $jscomp.makeIterator(a),
                        d = b.next();
                return d.done
                        ? c([])
                        : new e(function (a, e) {
                            function f(b) {
                                return function (c) {
                                    g[b] = c;
                                    h--;
                                    0 == h && a(g);
                                };
                            }
                            var g = [],
                                    h = 0;
                            do
                                g.push(void 0), h++, c(d.value).callWhenSettled_(f(g.length - 1), e), (d = b.next());
                            while (!d.done);
                        });
            };
            return e;
        },
        "es6",
        "es3"
        );
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (a, b) {
    this.$jscomp$symbol$id_ = a;
    $jscomp.defineProperty(this, "description", {configurable: !0, writable: !0, value: b});
};
$jscomp.SymbolClass.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
    function a(c) {
        if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++, c);
    }
    var b = 0;
    return a;
})();
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] &&
            $jscomp.defineProperty(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
                },
            });
    $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.asyncIterator;
    a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (a) {
    $jscomp.initSymbolIterator();
    a = {next: a};
    a[$jscomp.global.Symbol.iterator] = function () {
        return this;
    };
    return a;
};
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
    if (!(a instanceof Object))
        throw new TypeError("Iterator result " + a + " is not an object");
};
$jscomp.generator.Context = function () {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null;
};
$jscomp.generator.Context.prototype.start_ = function () {
    if (this.isRunning_)
        throw new TypeError("Generator is already running");
    this.isRunning_ = !0;
};
$jscomp.generator.Context.prototype.stop_ = function () {
    this.isRunning_ = !1;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
    this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function (a) {
    this.yieldResult = a;
};
$jscomp.generator.Context.prototype.throw_ = function (a) {
    this.abruptCompletion_ = {exception: a, isException: !0};
    this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype.return = function (a) {
    this.abruptCompletion_ = {return: a};
    this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) {
    this.abruptCompletion_ = {jumpTo: a};
    this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function (a, b) {
    this.nextAddress = b;
    return {value: a};
};
$jscomp.generator.Context.prototype.yieldAll = function (a, b) {
    a = $jscomp.makeIterator(a);
    var c = a.next();
    $jscomp.generator.ensureIteratorResultIsObject_(c);
    if (c.done)
        (this.yieldResult = c.value), (this.nextAddress = b);
    else
        return (this.yieldAllIterator_ = a), this.yield(c.value, b);
};
$jscomp.generator.Context.prototype.jumpTo = function (a) {
    this.nextAddress = a;
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
    this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) {
    this.catchAddress_ = a;
    void 0 != b && (this.finallyAddress_ = b);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function (a) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) {
    this.nextAddress = a;
    this.catchAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function (a) {
    this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return a;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) {
    c ? (this.finallyContexts_[c] = this.abruptCompletion_) : (this.finallyContexts_ = [this.abruptCompletion_]);
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) {
    b = this.finallyContexts_.splice(b || 0)[0];
    if ((b = this.abruptCompletion_ = this.abruptCompletion_ || b)) {
        if (b.isException)
            return this.jumpToErrorHandler_();
        void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo ? ((this.nextAddress = b.jumpTo), (this.abruptCompletion_ = null)) : (this.nextAddress = this.finallyAddress_);
    } else
        this.nextAddress = a;
};
$jscomp.generator.Context.prototype.forIn = function (a) {
    return new $jscomp.generator.Context.PropertyIterator(a);
};
$jscomp.generator.Context.PropertyIterator = function (a) {
    this.object_ = a;
    this.properties_ = [];
    for (var b in a)
        this.properties_.push(b);
    this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
    for (; 0 < this.properties_.length; ) {
        var a = this.properties_.pop();
        if (a in this.object_)
            return a;
    }
    return null;
};
$jscomp.generator.Engine_ = function (a) {
    this.context_ = new $jscomp.generator.Context();
    this.program_ = a;
};
$jscomp.generator.Engine_.prototype.next_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_)
        return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a);
    return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function (a) {
    this.context_.start_();
    var b = this.context_.yieldAllIterator_;
    if (b)
        return this.yieldAllStep_(
                "return" in b
                ? b["return"]
                : function (a) {
                    return {value: a, done: !0};
                },
                a,
                this.context_.return
                );
    this.context_.return(a);
    return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_)
        return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a);
    return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
    try {
        var d = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(d);
        if (!d.done)
            return this.context_.stop_(), d;
        var e = d.value;
    } catch (f) {
        return (this.context_.yieldAllIterator_ = null), this.context_.throw_(f), this.nextStep_();
    }
    this.context_.yieldAllIterator_ = null;
    c.call(this.context_, e);
    return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
    for (; this.context_.nextAddress; )
        try {
            var a = this.program_(this.context_);
            if (a)
                return this.context_.stop_(), {value: a.value, done: !1};
        } catch (b) {
            (this.context_.yieldResult = void 0), this.context_.throw_(b);
        }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException)
            throw a.exception;
        return {value: a.return, done: !0};
    }
    return {value: void 0, done: !0};
};
$jscomp.generator.Generator_ = function (a) {
    this.next = function (b) {
        return a.next_(b);
    };
    this.throw = function (b) {
        return a.throw_(b);
    };
    this.return = function (b) {
        return a.return_(b);
    };
    $jscomp.initSymbolIterator();
    this[Symbol.iterator] = function () {
        return this;
    };
};
$jscomp.generator.createGenerator = function (a, b) {
    b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
    $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(b, a.prototype);
    return b;
};
$jscomp.asyncExecutePromiseGenerator = function (a) {
    function b(b) {
        return a.next(b);
    }
    function c(b) {
        return a.throw(b);
    }
    return new Promise(function (d, e) {
        function f(a) {
            a.done ? d(a.value) : Promise.resolve(a.value).then(b, c).then(f, e);
        }
        f(a.next());
    });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(a());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)));
};
$jscomp.findInternal = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
            return {i: e, v: f};
    }
    return {i: -1, v: void 0};
};
$jscomp.polyfill(
        "Array.prototype.find",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        return $jscomp.findInternal(this, a, c).v;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.checkStringArgs = function (a, b, c) {
    if (null == a)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
};
$jscomp.polyfill(
        "String.prototype.startsWith",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        var b = $jscomp.checkStringArgs(this, a, "startsWith");
                        a += "";
                        var e = b.length,
                                f = a.length;
                        c = Math.max(0, Math.min(c | 0, b.length));
                        for (var g = 0; g < f && c < e; )
                            if (b[c++] != a[g++])
                                return !1;
                        return g >= f;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.iteratorFromArray = function (a, b) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var c = 0,
            d = {
                next: function () {
                    if (c < a.length) {
                        var e = c++;
                        return {value: b(e, a[e]), done: !1};
                    }
                    d.next = function () {
                        return {done: !0, value: void 0};
                    };
                    return d.next();
                },
            };
    d[Symbol.iterator] = function () {
        return d;
    };
    return d;
};
$jscomp.polyfill(
        "Array.prototype.keys",
        function (a) {
            return a
                    ? a
                    : function () {
                        return $jscomp.iteratorFromArray(this, function (a) {
                            return a;
                        });
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "String.prototype.endsWith",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        var b = $jscomp.checkStringArgs(this, a, "endsWith");
                        a += "";
                        void 0 === c && (c = b.length);
                        c = Math.max(0, Math.min(c | 0, b.length));
                        for (var e = a.length; 0 < e && 0 < c; )
                            if (b[--c] != a[--e])
                                return !1;
                        return 0 >= e;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "String.prototype.repeat",
        function (a) {
            return a
                    ? a
                    : function (a) {
                        var b = $jscomp.checkStringArgs(this, null, "repeat");
                        if (0 > a || 1342177279 < a)
                            throw new RangeError("Invalid count value");
                        a |= 0;
                        for (var d = ""; a; )
                            if ((a & 1 && (d += b), (a >>>= 1)))
                                b += b;
                        return d;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "Object.is",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "Array.prototype.includes",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        var b = this;
                        b instanceof String && (b = String(b));
                        var e = b.length;
                        c = c || 0;
                        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                            var f = b[c];
                            if (f === a || Object.is(f, a))
                                return !0;
                        }
                        return !1;
                    };
        },
        "es7",
        "es3"
        );
$jscomp.polyfill(
        "String.prototype.includes",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, c || 0);
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "Array.prototype.fill",
        function (a) {
            return a
                    ? a
                    : function (a, c, d) {
                        var b = this.length || 0;
                        0 > c && (c = Math.max(0, b + c));
                        if (null == d || d > b)
                            d = b;
                        d = Number(d);
                        0 > d && (d = Math.max(0, b + d));
                        for (c = Number(c || 0); c < d; c++)
                            this[c] = a;
                        return this;
                    };
        },
        "es6",
        "es3"
        );
$jscomp.polyfill(
        "Array.prototype.values",
        function (a) {
            return a
                    ? a
                    : function () {
                        return $jscomp.iteratorFromArray(this, function (a, c) {
                            return c;
                        });
                    };
        },
        "es8",
        "es3"
        );
$jscomp.stringPadding = function (a, b) {
    a = void 0 !== a ? String(a) : " ";
    return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : "";
};
$jscomp.polyfill(
        "String.prototype.padEnd",
        function (a) {
            return a
                    ? a
                    : function (a, c) {
                        var b = $jscomp.checkStringArgs(this, null, "padStart");
                        return b + $jscomp.stringPadding(c, a - b.length);
                    };
        },
        "es8",
        "es3"
        );
var gE = function () {};
gE.gI = 27;
gE.gJ = 13;
gE.gK = 32;
gE.gL = 16;
gE.gM = 46;
gE.gN = 38;
gE.gO = 40;
gE.gP = 37;
gE.gQ = 39;
var aF = function () {
    this.jd();
};
aF.prototype.jd = function () {
    this.IE = [];
};
aF.prototype.ID = function (a) {
    for (var b, c = 0; c < this.IE.length; c++)
        if (((b = this.IE[c]), b.id == a))
            return b;
    return !1;
};
aF.prototype.get = function (a, b) {
    return (a = this.ID(a)) && (!b || moment().diff(a.ts, "minutes") <= b) ? a.data : null;
};
aF.prototype.set = function (a, b) {
    var c = this.ID(a);
    c ? ((c.ts = moment()), (c.data = b)) : ((c = {id: a, ts: moment(), data: b}), this.IE.push(c));
};
var hS = new aF(),
        If = function () {};
If.prototype.Cb = function (a) {
    return btoa(String.fromCharCode.apply(null, a));
};
If.prototype.Cc = function (a) {
    return new Uint8Array(
            atob(a)
            .split("")
            .map(function (a) {
                return a.charCodeAt(0);
            })
            );
};
If.prototype.QR = function (a) {
    var b, c, d;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress)
            return (b = new Uint8Array(16)), e.yield(crypto.subtle.generateKey({name: "AES-GCM", length: 128}, !0, ["encrypt", "decrypt"]), 2);
        if (3 != e.nextAddress)
            return (c = e.yieldResult), e.yield(crypto.getRandomValues(b), 3);
        d = e.yieldResult;
        a([c, d]);
        e.jumpToEnd();
    });
};
If.prototype.CY = function (a, b) {
    var c;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress)
            return d.yield(crypto.subtle.exportKey("jwk", a), 2);
        c = d.yieldResult;
        b(c);
        d.jumpToEnd();
    });
};
If.prototype.CZ = function (a, b) {
    var c;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress)
            return d.yield(crypto.subtle.importKey("jwk", a, {name: "AES-GCM"}, !0, ["encrypt", "decrypt"]), 2);
        c = d.yieldResult;
        b(c);
        d.jumpToEnd();
    });
};
If.prototype.QP = function (a, b, c, d) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress)
            return e.yield(crypto.subtle.encrypt({name: "AES-GCM", iv: c}, b, new TextEncoder().encode(a)), 2);
        a = e.yieldResult;
        d(a);
        e.jumpToEnd();
    });
};
If.prototype.QQ = function (a, b, c, d) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress)
            return e.yield(crypto.subtle.decrypt({name: "AES-GCM", iv: c}, b, a), 2);
        a = e.yieldResult;
        d(new TextDecoder().decode(a));
        e.jumpToEnd();
    });
};
If.prototype.Ql = function (a) {
    return T7.C1(a).join(",");
};
If.prototype.Qm = function (a) {
    return T7.C2(a.split(","));
};
var Ba = ["YYYY-MM-DD", "M/D/YYYY", "DD.MM.YYYY"],
        Bb = ["YYYY-MM-DD, HH:mm", "M/D/YYYY, h:mm A", "DD.MM.YYYY, HH:mm"],
        KR = "YYYY-MM-DDTHH:mm:ss",
        aG = function () {};
aG.DT = function (a, b, c, d) {
    void 0 === c && (c = !1);
    void 0 === d && (d = !1);
    if (a && b) {
        a = a.clone();
        var e = c ? "d" : "day";
        var f = c ? "h" : "hour",
                g = c ? "m" : "minute",
                h = c ? "s" : "second",
                k = c ? "" : " ",
                l = c ? " " : ", ",
                m = a.diff(b, "days"),
                n = a.subtract(m, "days").diff(b, "hours"),
                p = a.subtract(n, "hours").diff(b, "minutes");
        a = a.subtract(p, "minutes").diff(b, "seconds");
        e = 0 < m ? m + k + e + (!c && 1 < m ? "s" : "") : "";
        e += 0 < n ? (e ? l : "") + n + k + f + (!c && 1 < n ? "s" : "") : "";
        e += 0 < p ? (e ? l : "") + p + k + g + (!c && 1 < p ? "s" : "") : "";
        if ((!m && !n && !p) || d)
            e += 0 < a ? (e ? l : "") + a + k + h + (!c && 1 < a ? "s" : "") : "";
        return e;
    }
    return "";
};
aG.Wl = function (a, b) {
    if (!a || !b)
        return "";
    a = a.clone();
    var c = "",
            d = -1,
            e = !1;
    var f = a.diff(b, "days");
    var g = a.subtract(f, "days").diff(b, "hours"),
            h = a.subtract(g, "hours").diff(b, "minutes");
    a = a.subtract(h, "minutes").diff(b, "seconds");
    g = [
        {id: "d", value: f},
        {id: "h", value: g},
        {id: "m", value: h},
        {id: "s", value: a},
    ];
    for (h = 0; h < g.length; h++)
        if (((f = g[h]), f.value || e))
            d++, (e = !0), (c += (0 < d && 10 > f.value ? "0" : "") + f.value + f.id + (h < g.length - 1 ? "&nbsp;" : ""));
    return c;
};
aG.Db = function (a, b) {
    var c = moment();
    b && c.subtract(b, "days");
    return c.format(Ba[a]);
};
var D4 = function () {};
D4.Dh = function (a, b) {
    b.originalSize.width != b.size.width && (b.size.width += 8);
    b.originalSize.height != b.size.height && (b.size.height += 8);
};
D4.QO = function (a, b) {
    a = $(a.target);
    var c = a.outerWidth(),
            d = a.outerHeight(),
            e = c - a.innerWidth(),
            f = d - a.innerHeight();
    c = c - a.width() - e / 2;
    a = d - a.height() - f / 2;
    b.originalSize.width != b.size.width && (b.size.width += c);
    b.originalSize.height != b.size.height && (b.size.height += a);
};
D4.eX = function (a) {
    var b = aH.eB(0.5),
            c = a.outerHeight(!0) / 2;
    a.css("top", aH.eY() + b - c + "px");
};
D4.JO = function (a, b) {
    bV(b, "id", "");
    bV(b, "padding", "");
    bV(b, "paddingX", 0);
    bV(b, "paddingY", 0);
    bV(b, "minHeight", 160);
    bV(b, "minWidth", 480);
    bV(b, "autoDestroy", !0);
    bV(b, "modal", !0);
    bV(b, "fixed", !1);
    bV(b, "centered", !0);
    bV(b, "resize", null);
    bV(b, "resizeStart", null);
    bV(b, "resizeStop", null);
    bV(b, "open", null);
    bV(b, "close", null);
    var c = Ft.R4("", b.id),
            d = b.open;
    b.open = function () {
        var a = c.parents(".ui-dialog");
        a.find(".ui-dialog-titlebar-close").html("x");
        d && d(c);
        b.centered && D4.eX(a);
    };
    if (b.autoDestroy)
        c.on("dialogclose", function () {
            return c.empty().remove();
        });
    b.close && (c.on("dialogbeforeclose", b.close), (b.close = null));
    c.on("dialogresize dialogresizestart dialogresizestop", D4.Dh);
    b.resize && (c.on("dialogresize", b.resize), delete b.resize);
    b.resizeStart && (c.on("dialogresizestart", b.resizeStart), delete b.resizeStart);
    b.resizeStop && (c.on("dialogresizestop", b.resizeStop), delete b.resizeStop);
    if (b.padding) {
        var e = b.padding;
        delete b.padding;
    } else
        (e = b.paddingY + "px " + b.paddingX + "px"), delete b.paddingX, delete b.paddingY;
    e = Ft.Mw(a, e).css({width: "100%", height: "100%"});
    aI.Cf(a) && (a.attr("title") && (c.attr("title", a.attr("title")), a.removeAttr("title")), a.attr("id") && (c.attr("id", a.attr("id")), a.removeAttr("id")));
    c.html(e).dialog(b);
    return c;
};
D4.M5 = function (a) {
    (a.is(".ui-dialog-content") ? a : a.closest(".ui-dialog-content")).dialog("close");
};
D4.DM = function (a, b, c) {
    bV(a, "fixed", !1);
    bV(a, "onOpen", null);
    for (
            var d,
            e,
            f = Ft.R4("inputForm", a.id ? a.id : "").data("cancel", !0),
            g = function (c) {
                for (var d = e.val().trim(), g = {}, h, k, l = 0; l < a.inputs.length; l++)
                    if (((h = a.inputs[l]), (k = f.find("input[name='" + h.bX + "']")), (g[h.bX] = k.val().trim()), !h.allowEmpty && !g[h.bX])) {
                        k.select();
                        D4.D9("Please fill in all required fields to continue!");
                        return;
                    }
                f.data("cancel", !1);
                D4.M5(f);
                b(d, g, c);
            },
            h = {},
            k = 0;
            k < a.inputs.length;
            h = {$jscomp$loop$prop$item$352: h.$jscomp$loop$prop$item$352, $jscomp$loop$prop$input$353: h.$jscomp$loop$prop$input$353}, k++
            ) {
        h.$jscomp$loop$prop$item$352 = a.inputs[k];
        bV(h.$jscomp$loop$prop$item$352, "bW", "text");
        bV(h.$jscomp$loop$prop$item$352, "bX", "input_value");
        bV(h.$jscomp$loop$prop$item$352, "bY", "");
        bV(h.$jscomp$loop$prop$item$352, "bZ", []);
        bV(h.$jscomp$loop$prop$item$352, "ba", "");
        bV(h.$jscomp$loop$prop$item$352, "isDisabled", !1);
        bV(h.$jscomp$loop$prop$item$352, "eI", null);
        h.$jscomp$loop$prop$input$353 = Ft.GB("input", {type: h.$jscomp$loop$prop$item$352.bW, name: h.$jscomp$loop$prop$item$352.bX, value: h.$jscomp$loop$prop$item$352.bY, placeholder: h.$jscomp$loop$prop$item$352.ba})
                .data("item", h.$jscomp$loop$prop$item$352)
                .on("keypress", function (a) {
                    (a.keyCode || a.which) == gE.gJ && g(a);
                });
        void 0 !== h.$jscomp$loop$prop$item$352.mp && h.$jscomp$loop$prop$input$353.attr("min", h.$jscomp$loop$prop$item$352.mp);
        void 0 !== h.$jscomp$loop$prop$item$352.mq && h.$jscomp$loop$prop$input$353.attr("max", h.$jscomp$loop$prop$item$352.mq);
        void 0 !== h.$jscomp$loop$prop$item$352.inputStep && h.$jscomp$loop$prop$input$353.attr("step", h.$jscomp$loop$prop$item$352.inputStep);
        if (h.$jscomp$loop$prop$item$352.eI)
            h.$jscomp$loop$prop$input$353.on("change", function () {
                $(this).data("item").eI(f, $(this));
            });
        h.$jscomp$loop$prop$item$352.isDisabled && h.$jscomp$loop$prop$input$353.attr("disabled", "");
        d || h.$jscomp$loop$prop$item$352.isDisabled || (d = h.$jscomp$loop$prop$input$353);
        if (h.$jscomp$loop$prop$item$352.isMainInput || 1 == a.inputs.length)
            e = h.$jscomp$loop$prop$input$353;
        f.append(h.$jscomp$loop$prop$input$353);
        if (h.$jscomp$loop$prop$item$352.bZ.length) {
            var l = Ft.R7(
                    "right",
                    "",
                    "...",
                    "Choose recently used account...",
                    (function (a) {
                        return function () {
                            D4.k3("Choose Account", a.$jscomp$loop$prop$item$352.bZ, function (b) {
                                e.val("");
                                a.$jscomp$loop$prop$input$353.select().val(b).trigger("change");
                                setTimeout(function () {
                                    e.val() ? g() : e.select();
                                }, 100);
                            });
                        };
                    })(h)
                    ).css({display: "inline-block", width: "13.5%", "margin-top": "4px"});
            h.$jscomp$loop$prop$input$353.css("width", "85%");
            f.append(l);
        }
    }
    h = [];
    a.autoFillButton &&
            h.push({
                id: "btnDialogAutoFillText",
                text: a.autoFillButton.text,
                click: function (b) {
                    if (a.bc) {
                        var c = f.find("input[name='" + a.bc + "']");
                        if (!c.val().trim()) {
                            D4.D9(a.bd);
                            c.select();
                            return;
                        }
                    }
                    e.val(a.autoFillButton.value);
                    g(b.originalEvent);
                },
            });
    h.push(
            {
                id: "btnDialogOk",
                text: "Ok",
                click: function (a) {
                    return g(a.originalEvent);
                },
            },
            {
                id: "btnDialogCancel",
                text: "Cancel",
                click: function () {
                    return D4.M5(f);
                },
            }
    );
    D4.JO(f, {
        title: a.title,
        width: a.width,
        minHeight: 0,
        padding: "4px 5px 8px 5px",
        resizable: !1,
        fixed: a.fixed,
        buttons: h,
        open: function (b) {
            if (a.onOpen)
                a.onOpen(b);
            a.autoFillButton && a.autoFillButton.disable && $("#btnDialogAutoFillText").button("disable");
            d.select();
        },
        close: function () {
            f.data("cancel") && void 0 !== c && c();
        },
    });
    return f;
};
D4.AX = function (a, b, c) {
    a.width = T5(a.width, "350px");
    a.bW = T5(a.bW, "text");
    var d = [{bW: a.bW, bX: a.bX, bY: a.bY, bZ: a.bZ, mp: a.mp, mq: a.mq, inputStep: a.inputStep, ba: a.ba, allowEmpty: T5(a.allowEmpty, !1)}];
    D4.DM({id: a.id, title: a.title, width: a.width, inputs: d, fixed: !0, onOpen: a.onOpen, autoFillButton: a.autoFillButton}, b, c);
};
D4.EA = function (a, b, c) {
    c = T5(c, {});
    a = T5(a, "");
    b = T5(b, "Info");
    bV(c, "title", "Info");
    bV(c, "id", "msgDialog");
    bV(c, "buttonConfirmTitle", "Ok");
    bV(c, "width", 550);
    bV(c, "height", 380);
    bV(c, "paddingX", 5);
    bV(c, "paddingY", 9);
    bV(c, "resizable", !0);
    var d = [],
            e = Ft.GB("div", {id: c.id, class: "msgDialog"}, a);
    if (c.customButtons)
        for (a = 0; a < c.customButtons.length; a++)
            d.push(c.customButtons[a]);
    d.push({
        id: "btnDialogOk",
        text: c.buttonConfirmTitle,
        click: function () {
            return D4.M5(e);
        },
    });
    D4.JO(e, {title: b, resizable: c.resizable, width: c.width, height: c.height, paddingX: c.paddingX, paddingY: c.paddingY, buttons: d});
};
D4.D9 = function (a, b, c) {
    b = T5(b, 3300);
    var d = $("#pageHint");
    if (d.length) {
        if (!c) {
            setTimeout(function () {
                return D4.D9(a, b);
            }, 1e3);
            return;
        }
        d.remove();
    }
    var e = Ft.R4("", "pageHint", a);
    e.appendTo(aH.W5());
    c ? e.css("opacity", "1.0") : e.animate({opacity: "1.0"});
    setTimeout(function () {
        e.animate({opacity: "0.0"}, function () {
            return e.remove();
        });
    }, b);
};
D4.Mg = function (a, b, c, d) {
    var e = Ft.R4("dialogForm dialogConfirm", "", b);
    $(".dialogConfirm").remove();
    D4.JO(e, {
        title: a,
        resizable: !1,
        minWidth: 375,
        buttons: {
            No: function () {
                D4.M5(e);
                void 0 !== d && d();
            },
            Yes: function () {
                D4.M5(e);
                c();
            },
        },
    });
};
D4.EB = function (a, b, c, d) {
    b = Ft.R4("confirmDialog", "", b);
    D4.Mg(a, b, c, d);
};
D4.Os = function (a, b, c, d) {
    b = Ft.R4("confirmDialog").html(b);
    var e = Ft.R4("dialogForm dialogConfirm").html(b);
    b = {};
    $(".dialogConfirm").remove();
    for (var f = {}, g = 0; g < c.length; f = { $jscomp$loop$prop$value$355: f.$jscomp$loop$prop$value$355 }, g++)
        (f.$jscomp$loop$prop$value$355 = c[g]),
                (b[f.$jscomp$loop$prop$value$355] = (function (a) {
                    return function () {
                        D4.M5(e);
                        d(a.$jscomp$loop$prop$value$355);
                    };
                })(f));
    D4.JO(e, {title: a, resizable: !1, minWidth: 375, buttons: b});
};
D4.k3 = function (a, b, c) {
    var d = Ft.R4("confirmDialog"),
            e = Ft.R4("dialogForm dialogConfirm").html(d);
    $(".dialogConfirm").remove();
    for (var f = {}, g = 0; g < b.length; f = {$jscomp$loop$prop$value$357: f.$jscomp$loop$prop$value$357}, g++) {
        f.$jscomp$loop$prop$value$357 = b[g];
        var h = Ft.R7(
                "",
                "",
                f.$jscomp$loop$prop$value$357,
                "",
                (function (a) {
                    return function () {
                        D4.M5(e);
                        c(a.$jscomp$loop$prop$value$357);
                    };
                })(f)
                ).css({width: "100%", "margin-bottom": "6px"});
        d.append(h);
    }
    D4.JO(e, {title: a, resizable: !0, minWidth: 375, height: D.s.ce()});
};
D4.Wv = function (a, b, c, d) {
    var e = Ft.R4().html(b);
    b = Ft.R4("dialogForm").html(e);
    for (var f = Ft.be("dataTable simple autoWidthCols fullWidth tableMultipleSelect"), g, h = {}, k = 0; k < c.length; h = {$jscomp$loop$prop$checkbox$360: h.$jscomp$loop$prop$checkbox$360}, k++) {
        g = c[k];
        h.$jscomp$loop$prop$checkbox$360 = new eL({
            width: "32px",
            padding: "4px 0",
            handleClick: !1,
            checked: g.checked,
            eI: (function (a) {
                return function () {
                    a.$jscomp$loop$prop$checkbox$360.an().parents("tr").data("checked", a.$jscomp$loop$prop$checkbox$360.e9());
                };
            })(h),
        });
        var l = [];
        l.push(h.$jscomp$loop$prop$checkbox$360.an(), Ft.Fh("img", {class: "multipleSelectIcon", src: g.icon}));
        void 0 !== g.htmlLeft && l.push(g.htmlLeft);
        l.push(g.html);
        void 0 !== g.htmlRight && l.push(g.htmlRight);
        f.append(
                Ft.Fj("td", l, {"data-id": g.id, "data-checked": g.checked}).on(
                "click",
                (function (a) {
                    return function () {
                        return a.$jscomp$loop$prop$checkbox$360.fB();
                    };
                })(h)
                )
                );
    }
    e.append(f);
    D4.JO(b, {
        title: a,
        width: 580,
        height: aH.eB(0.8),
        resizable: !0,
        buttons: {
            Cancel: function () {
                D4.M5(e);
            },
            Ok: function () {
                var a = [],
                        b;
                f.find("tr").each(function () {
                    b = $(this);
                    b.data("checked") && a.push(b.data("id"));
                });
                d(a);
                D4.M5(e);
            },
        },
    });
};
D4.UH = function (a) {
    return window.File && window.FileReader && window.FileList && window.Blob ? !0 : (a && D4.D9("The HTML5 File API is not supported in your browser!"), !1);
};
D4.QW = function (a, b) {
    if (D4.UH(!0)) {
        var c = function (a) {
            return b(a.target.files[0]);
        },
                d = function (a) {
                    a.stopPropagation();
                    a.preventDefault();
                    a.dataTransfer.dropEffect = "copy";
                },
                e = function (a) {
                    a.stopPropagation();
                    a.preventDefault();
                    b(a.dataTransfer.files[0]);
                },
                f = Ft.R4("inputForm", "selectFileDialog", ay.get("form_select_file"));
        D4.JO(f, {
            title: a,
            resizable: !1,
            width: 485,
            buttons: {
                Cancel: function () {
                    D4.M5(f);
                },
            },
            open: function (a) {
                a.css("padding", "12px !important");
                a = a[0];
                var b = $("#importSelectedFile")[0];
                a.addEventListener("dragover", d, !1);
                a.addEventListener("drop", e, !1);
                b.addEventListener("change", c, !1);
            },
        });
    }
};
var b2 = '<span class="numColSplit">|</span>',
        aH = function () {};
aH.mD = function () {
    return $("head:first");
};
aH.W5 = function () {
    return $("body");
};
aH.kE = function (a) {
    return -1 != navigator.userAgent.indexOf(a);
};
aH.kF = function () {
    return aH.kE("Firefox");
};
aH.QU = function (a) {
    return 0 < $(a).length;
};
aH.KP = function (a, b) {
    $(a)[0].scrollIntoView && $(a)[0].scrollIntoView();
};
aH.eA = function (a) {
    a = T5(a, 1);
    return $(window).width() * a;
};
aH.eB = function (a) {
    a = T5(a, 1);
    return $(window).height() * a;
};
aH.eY = function () {
    return $(window).scrollTop();
};
aH.DQ = function (a, b) {
    if (void 0 !== b && b)
        return (a = window.open(a, "_blank")), a.focus(), a;
    window.location.href = a;
    return window;
};
aH.NE = function (a, b) {
    a &&
            a.length &&
            a.each(function () {
                $(this).button("instance") && $(this).button(b ? "enable" : "disable");
            });
};
aH.SX = function (a, b, c, d) {
    a.find(b)
            .sort(function (a, b) {
                a = $(a).data(c);
                b = $(b).data(c);
                return a > b ? (d ? 1 : -1) : a < b ? (d ? -1 : 1) : 0;
            })
            .appendTo(a);
};
aH.Da = function (a, b, c) {
    var d = a.find("tbody");
    d.length || (d = a);
    d.find("tr")
            .sort(function (a, d) {
                if ($(a).find("th").length)
                    return -1;
                if ($(d).find("th").length)
                    return 1;
                a = $(a).data(c);
                d = $(d).data(c);
                return a > d ? (b ? 1 : -1) : a < d ? (b ? -1 : 1) : 0;
            })
            .appendTo(d);
};
aH.IH = function (a, b) {
    a = window.getComputedStyle(document.querySelector(":root")).getPropertyValue(a);
    return (void 0 !== aI.Dd && aI.Dd ? a.replace(/'/g, "").replace(/"/g, "") : a).trim();
};
aH.Kj = function (a, b) {
    document.documentElement.style.setProperty(a, b);
};
aH.TW = function (a) {
    var b = !1;
    a.find("tr:not(.headerRow)").each(function () {
        var a = $(this);
        a.is(".hidden") || ((b = !b), a[b ? "removeClass" : "addClass"]("odd"));
    });
};
aH.FD = function (a, b) {
    var c,
            d = "";
    b = T5(b, "");
    for (var e = 0; e < a.length; e++)
        if (null !== a[e]) {
            var f = a[e].split(" ");
            var g = b ? b[e] : "";
            var h = "";
            2 > f.length && f.push("");
            for (c = 0; c < f.length; c++)
                h += '<span class="' + (0 == c ? "numCol" : "unitCol") + '">' + f[c] + "</span>";
            g && (h = $(g).html(h).prop("outerHTML"));
            d += (d ? b2 : "") + h;
        }
    return d;
};
aH.BV = function (a, b) {
    var c,
            d,
            e,
            f,
            g = [0, 0, 0],
            h = [];
    a.find("tr").each(function () {
        e = $(this);
        k = e.find(".numCol");
        l = Math.min(k.length, g.length);
        for (d = 0; d < l; d++)
            (f = $(k[d]).width()), f > g[d] && (g[d] = f);
        h.push(k);
    });
    for (c = 0; c < h.length; c++) {
        var k = h[c];
        var l = Math.min(k.length, g.length);
        for (d = 0; d < l; d++)
            (f = g[d]) && $(k[d]).width(f);
    }
    void 0 !== b &&
            setTimeout(function () {
                return aH.BV(a);
            }, b);
};
aH.Do = function (a) {
    return a.get(0) ? a.get(0).scrollHeight > a.innerHeight() + 1 : !1;
};
aH.Ch = function () {
    var a = "";
    window.getSelection ? (a = window.getSelection().toString()) : document.selection && "Control" != document.selection.type && (a = document.selection.createRange().text);
    return a;
};
aH.QN = function (a, b, c) {
    if (!("addToHomescreen" in window && addToHomescreen.isCompatible)) {
        if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(c, b, "");
            return;
        }
        if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            $(this).attr({href: b, title: c, rel: "sidebar"}).off(a);
            return;
        }
        if (window.external && "AddFavorite" in window.external) {
            window.external.AddFavorite(b, c);
            return;
        }
    }
    alert("This action is not being supported on your current browser!");
};
aH.IL = function (a, b) {
    var c = document.createElement("a");
    c.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(b));
    c.setAttribute("download", a);
    c.style.display = "none";
    document.body.appendChild(c);
    c.click();
    document.body.removeChild(c);
};
aH.KT = function (a, b) {
    var c = [],
            d,
            e;
    b.find("tr:not(.noExport)").each(function () {
        d = $(this);
        e = [];
        d.find("td,th").each(function () {
            e.push($(this).text());
        });
        c.push(e);
    });
    b = JSON.stringify(c).replace(/\],\[/g, String.fromCharCode(10)).replace(/\[\[/g, "").replace(/\]\]/g, "");
    aH.IL(a, b);
};
aH.mB = function (a, b) {
    var c = aH.mD();
    c.find("style[id='" + a + "']").length || c.append(Ft.Fi("style", "", a, b).attr("type", "text/css"));
};
aH.mk = function () {
    $(".ui-dialog").remove();
};
function T3() {
    return $("html").hasClass("isProduction");
}
function MG() {
    return $("html").hasClass("isLocal");
}
function L8(a) {
    return (MG() ? "" : "/") + a;
}
function Pn() {
    MG() && !T3() && console.log(arguments);
}
function Py(a, b) {
    var c = this,
            d = 0,
            e = function (f) {
                f = a[d];
                var g = aI.Qc(f) ? f[0] : c;
                (aI.Qc(f) ? g[f[1]] : f).call(g, function () {
                    d++;
                    d < a.length ? e() : void 0 !== b && b();
                });
            };
    e();
}
function T5(a, b) {
    return void 0 !== a ? a : b;
}
function bV(a, b, c, d) {
    d = T5(d, a);
    a[b] = void 0 !== d[b] ? d[b] : c;
}
var Ft = function () {};
Ft.Fk = function (a) {
    return a[0].outerHTML;
};
Ft.GB = function (a, b, c) {
    a = $("<" + a + "/>");
    if (void 0 !== b)
        for (var d in b)
            a.attr(d, b[d]);
    void 0 !== c && a.append(c);
    return a;
};
Ft.Fi = function (a, b, c, d, e) {
    a = Ft.GB(a, e, d);
    c && a.attr("id", c);
    b && a.attr("class", b);
    return a;
};
Ft.Fh = function (a, b, c) {
    return Ft.Fk(Ft.GB(a, b, c));
};
Ft.be = function (a, b, c, d) {
    a = Ft.Fi("table", a, b, "<tbody/>", d);
    void 0 !== c && a.append(c);
    return a;
};
Ft.gT = function (a) {
    a.find("tr:not(.headerRow)").remove();
};
Ft.Fj = function (a, b, c) {
    c = Ft.GB("tr", c);
    if (void 0 !== b)
        for (var d, e, f = 0; f < b.length; f++)
            void 0 !== b[f] && ((d = b[f]), (e = aI.Dd(d) || aI.Df(d) || b[f] instanceof jQuery ? d : d.html), (e = Ft.GB(a, d.attr, e)), d.width && e.width(d.width), c.append(e));
    return c;
};
Ft.fU = function (a, b) {
    Ft.gT(a);
    var c = a.find("tr:first th").length;
    a.append(Ft.Fj("td", [{html: b, attr: {colspan: c ? c : 1, class: "notBold"}}]));
};
Ft.mJ = function (a, b, c, d) {
    c = T5(c, []);
    a = Ft.Fi("select", a, b, "", d);
    for (var e = 0; e < c.length; e++) {
        b = c[e];
        d = Ft.Rw(b.value, b.text);
        for (var f in b)
            f.startsWith("data-") && d.attr(f, b[f]);
        a.append(d);
    }
    return a;
};
Ft.Rw = function (a, b) {
    return Ft.GB("option", {value: a}, T5(b, a));
};
Ft.R4 = function (a, b, c, d) {
    return Ft.Fi("div", a, b, c, d);
};
Ft.ib = function (a, b, c, d) {
    a = Ft.R4(b, c).css({display: "flex", "flex-flow": a});
    for (c = 0; c < d.length; c++)
        if ((b = d[c])) {
            if (b instanceof jQuery)
                var e = b;
            else
                (e = Ft.R4(b.class, b.id, b.html)),
                        b.width && e.css("width", b.width),
                        b.margin && e.css("margin", b.margin),
                        b.padding && e.css("padding", b.padding),
                        e.css("flex-shrink", void 0 !== b.shrink ? b.shrink : 1),
                        e.css("flex-grow", b.grow ? b.grow : 0);
            a.append(e);
        }
    return a;
};
Ft.eU = function (a, b, c, d) {
    return Ft.Fi("span", a, b, c, d);
};
Ft.ea = function (a, b, c, d) {
    return Ft.Fi("section", a, b, c, d);
};
Ft.eb = function (a, b, c, d) {
    return Ft.Fi("article", a, b, c, d);
};
Ft.ai = function (a, b, c, d) {
    return Ft.Fi("header", a, b, c, d);
};
Ft.R5 = function (a, b, c) {
    b = T5(b, a);
    c = T5(c, {});
    c.href = a;
    return Ft.GB("a", c, b);
};
Ft.R7 = function (a, b, c, d, e) {
    a = Ft.Fi("button", a, b, c);
    d && a.attr("title", d);
    a.button();
    if (void 0 !== e)
        a.on("click", e);
    return a;
};
Ft.kc = function (a, b, c, d, e) {
    var f = Ft.eU();
    c && f.css("background-image", "url('" + c + "')");
    return Ft.R7("imageButton" + (a ? " " + a : ""), b, f, d, e);
};
Ft.dc = function (a, b, c, d, e) {
    b = T5(b, "");
    c = T5(c, "");
    d = T5(d, "");
    e = T5(e, !1);
    a = {type: a, value: d};
    c && (a.id = c);
    b && (a["class"] = b);
    e && (a.disabled = "");
    return Ft.GB("input", a);
};
Ft.db = function (a, b, c, d) {
    return Ft.dc("text", a, b, c, d);
};
Ft.SB = function (a, b) {
    return Ft.GB("li", b, a);
};
Ft.eQ = function (a, b) {
    return Ft.GB("strong", b, a);
};
Ft.NT = function (a, b, c) {
    a = Ft.GB("span", {}, a);
    void 0 !== b && b && a.addClass(b);
    void 0 !== c && c && a.attr("title", c);
    return a[0].outerHTML;
};
Ft.Mw = function (a, b) {
    return Ft.GB("div", {style: "padding: " + b}, a);
};
Ft.mI = function () {
    var a = $(window),
            b = $(".pagePanel:visible,.mainPanel:visible");
    aH.W5().append(Ft.R4("pageLayer")).data("scroll-top", a.scrollTop()).data("visible-panel", b);
    b.hide();
    a.scrollTop(0);
    $(".ui-dialog").css("top", "6px");
};
Ft.Zv = function () {
    var a = $("body");
    a.data("visible-panel").show();
    $(window).scrollTop(a.data("scroll-top"));
    $(".pageLayer").remove();
    a.removeData("visible-panel");
};
Ft.mB = function (a, b) {
    a.append(Ft.GB("style").append(b));
};
var ie = function () {};
ie.ic = function (a, b, c) {
    return {html: a, width: b, padding: c, shrink: 0};
};
ie.id = function (a, b, c, d) {
    return {width: "50%", html: Ft.ib("row nowrap", "", "", [a ? ie.ic(a, "100px", "7px 15px 7px 0") : null, {html: b, grow: c}]).css("margin-right", d + "px")};
};
ie.ib = function (a, b) {
    a = Ft.ib("row nowrap", "", "", a);
    b = T5(b, {});
    b.margin && a.css("margin", b.margin);
    return a;
};
var FK = "en-US",
        ED = function () {};
ED.AQ = function (a) {
    a = parseFloat(String(a).replace(/,/g, ""));
    return isNaN(a) ? 0 : a;
};
ED.Bl = function (a, b) {
    return ED.FJ[void 0 !== b && ED.FJ.length >= b ? b : 0].format(a);
};
ED.FY = function (a) {
    return Math.floor(Math.random() * a);
};
ED.DW = function (a, b) {
    b = Math.pow(10, b);
    return Math.round(a * b) / b;
};
ED.Or = function (a, b) {
    return (1 * ED.AQ(a)).toFixed(b);
};
ED.iW = function (a, b) {
    return a * Math.pow(2, b);
};
ED.iX = function (a, b) {
    return a / Math.pow(2, b);
};
ED.FJ = [];
for (var i = 0; 11 >= i; i++)
    ED.FJ.push(new Intl.NumberFormat(FK, {minimumFractionDigits: i, maximumFractionDigits: i}));
function AQ(a) {
    return ED.AQ(a);
}
function Bl(a, b) {
    return ED.Bl(a, b);
}
function DW(a, b) {
    return ED.DW(a, b);
}
function Or(a, b) {
    return ED.Or(a, b);
}
var QF = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"},
        QG = /[&<>"'\/]/g,
        QI = [
            [/(?:<[\/]*(?:a|img|svg|iframe|frame|meta|embed|object|script|style|applet|html|body|head)[ ]*(?:[^>]*)>)/gi, ""],
            [/(?:(?:src|dynsrc|lowsrc|href|onerror|onerrorupdate|onload|onbegin|onstart|onstop|onresume|onstorage|onabort|style|background)=)/gi, ""],
            [/script:/gi, ""],
            [/(?:\[!\[(?:.*)\])\((?:.*)\)\]/g, ""],
            [/(?:!\[(?:.*)\])\((?:.*)\)/g, ""],
            [/(?:\[(.*)\])\((?:.*)\)/g, "$1"],
        ],
        QJ = [
            [/ {2,}/g, " "],
            [/</g, "&lt;"],
            [/>/g, "&gt;"],
            [/(?:\r\n|\r|\n)/g, "<br>"],
            [/(?:<br>){3,}/gi, "<br><br>"],
            [/-{3,}/g, "<hr>"],
            [/(?:<br>)+(?:<hr>)+/gi, "<hr>"],
        ],
        T1 = /(?:\r\n|\r|\n|<br[ \/]*>)+/gi,
        Ms = /\(?:http(?:.*?)\)+/gi,
        Mt = /!\[(?:.*?)\]+/g,
        aJ = function () {};
aJ.GT = function (a, b) {
    for (var c = 0; c < QI.length; c++)
        a = a.replace(QI[c][0], QI[c][1]);
    a = $("<div/>").html(a).text().replace(Ms, "").replace(Mt, "");
    b && a.length > b && (a = a.substring(0, b) + "...");
    for (b = 0; b < QJ.length; b++)
        a = a.replace(QJ[b][0], QJ[b][1]);
    return a;
};
aJ.QD = function (a) {
    return ("" + a).replace(QG, function (a) {
        return QF[a];
    });
};
aJ.Ck = function (a) {
    return a
            .replace(/script:/gi, "")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/&#x2F;/g, "/");
};
aJ.QE = function (a, b, c) {
    b = T5(b, "");
    c = T5(c, "");
    var d = b ? a[b] : a;
    if (aI.Cf(d))
        for (var e in d)
            aJ.QE(d, e, b);
    else if (aI.Qc(d))
        for (a = 0; a < d.length; a++)
            aJ.QE(d, a, b);
    else
        aI.Dd(d) && b && (-1 < QH.indexOf(b) || -1 < QH.indexOf(c) ? (a[b] = aJ.Ck(d)) : (a[b] = aJ.QD(d)));
};
aJ.WR = function (a) {
    var b = document.createElement("textarea");
    b.innerHTML = a;
    return b.value;
};
var Im = function (a) {
    this.cache = a;
    try {
        this.handle = window.localStorage;
    } catch (b) {
        console.log(b), (this.handle = null);
    }
};
Im.prototype.set = function (a, b) {
    if (this.handle)
        try {
            return this.handle.setItem(a, b), !0;
        } catch (c) {
            console.log("storage.set", c);
        }
    this.cache.set(a, b);
    return !1;
};
Im.prototype.get = function (a, b) {
    if (this.handle)
        try {
            var c = this.handle.getItem(a);
            return null !== c ? c : void 0 !== b ? b : void 0;
        } catch (d) {
            console.log("storage.get", d);
        }
    a = this.cache.get(a);
    null === a && void 0 !== b && (a = b);
    return a;
};
Im.prototype.remove = function (a) {
    if (this.handle)
        try {
            this.handle.removeItem(a);
        } catch (b) {
            console.log("storage.removeItem", b);
        }
};
Im.prototype.SL = function (a, b) {
    return parseInt(this.get(a, b));
};
Im.prototype.SM = function (a, b) {
    return parseFloat(this.get(a, b));
};
Im.prototype.Jp = function (a, b) {
    a = this.get(a, b);
    return "true" == (void 0 !== a ? String(a) : void 0 !== b ? String(b) : "false");
};
Im.prototype.Jo = function () {
    return this.handle ? Object.keys(this.handle) : [];
};
Im.prototype.ko = function (a, b) {
    for (var c = this.Jo(), d = [], e = 0; e < c.length; e++)
        c[e][a](b) && d.push(c[e]);
    return d;
};
Im.prototype.Qh = function (a) {
    a = this.ko("startsWith", a);
    for (var b = 0; b < a.length; b++)
        this.remove(a[b]);
};
Im.prototype.Tm = function (a) {
    a = this.ko("endsWith", a);
    for (var b = 0; b < a.length; b++)
        this.remove(a[b]);
};
Im.prototype.clear = function () {
    this.handle && this.handle.clear();
};
var Jh = "0123456789ABCDEF".split(""),
        Je = /((http(s)*:|www\.|\/{2})[:A-Za-z0-9\./_\-\?=%&@]+(\(.+\))*[:A-Za-z0-9\./_\-\?=%&@]+)/g,
        Pr = /(!\[.*\]\(|img src=")((http(s)*:|www\.|\/{2})[:A-Za-z0-9\./_\-\?=%&@]+(\(.+\))*[:A-Za-z0-9\./_\-\?=%&@]+)(\)|")/g,
        OO = /([^"']{1}|^)(http[s]?:\/{2}[^\s<>]+\/ipfs\/[a-zA-Z0-9]+)/gi,
        Jf = /(https:\/{2}www\.youtube\.com\/watch\?v=|https:\/{2}www\.youtube\.com\/embed\/|https:\/{2}youtu\.be\/)([:A-Za-z0-9\.\/_\-]+)/g,
        T7 = function () {};
T7.Fa = function (a) {
    return String.fromCharCode(a);
};
T7.Km = function (a, b, c) {
    return a.split(b).join(c);
};
T7.Lb = function (a, b) {
    for (; - 1 < b.indexOf(a.charAt(0)); )
        a = a.substring(1);
    for (; - 1 < b.indexOf(a.charAt(a.length - 1)); )
        a = a.substring(0, a.length - 1);
    return a;
};
T7.Kh = function (a) {
    var b = 0;
    if (!a.length)
        return b;
    for (var c, d = 0; d < a.length; d++)
        (c = a.charCodeAt(d)), (b = (b << 5) - b + c), (b |= 0);
    return b;
};
T7.DR = function (a) {
    return a.replace(/(^|\s+)(\S)(\S*)/g, function (a, c, d, e) {
        return c + d.toUpperCase() + e.toLowerCase();
    });
};
T7.FX = function (a, b, c, d) {
    T7.Fa(d);
    for (var e = "", f = 0; f < a.length; f++) {
        var g = a.charCodeAt(f);
        e += g >= b && g <= c ? T7.Fa(d) : a.substr(f, 1);
    }
    return e;
};
T7.YK = function (a) {
    a = Jf.exec(a);
    Jf.lastIndex = 0;
    return a ? "https://img.youtube.com/vi/" + a[2] + "/hqdefault.jpg" : "";
};
T7.Ix = function (a) {
    var b,
            c,
            d = [],
            e = [],
            f = ["jpg", "jpeg", "png", "gif"];
    a = T7.Km(a, ")](", ")] (");
    for (a = T7.Km(a, "'", '"'); (b = Pr.exec(a)); )
        (b = b[2]), -1 == e.indexOf(b) && e.push(b);
    for (; (b = OO.exec(a)); )
        (b = b[2]), -1 == e.indexOf(b) && e.push(b);
    for (; (b = Je.exec(a)); ) {
        b = b[1];
        var g = b.split(".");
        if (!(2 > g.length)) {
            g = -1 < f.indexOf(g[g.length - 1]);
            if ((c = T7.YK(b)))
                -1 == d.indexOf(b) && d.push(b), (b = c), (g = !0);
            g ? -1 == e.indexOf(b) && e.push(b) : -1 == d.indexOf(b) && d.push(b);
        }
    }
    return {images: e, links: d};
};
T7.LJ = function (a) {
    void 0 === a && (a = 1);
    for (var b = "", c = 0; c < a; c++)
        b += "&nbsp;";
    return b;
};
T7.QL = function (a) {
    for (var b = "", c = 0; c < a.length; c++)
        b += a.charCodeAt(c).toString(16);
    return b;
};
T7.QK = function (a) {
    for (var b = "", c = 0; c < a.length; c += 2)
        b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
    return b;
};
T7.C1 = function (a) {
    for (var b = [], c = "", d = 0; d < a.length; d++)
        (c += (0 < d ? T7.FZ() : "") + a.charCodeAt(d).toString(16)), 1 == ED.FY(3) && (b.push(c), (c = ""));
    c && b.push(c);
    return b;
};
T7.C2 = function (a) {
    var b = "";
    a = a.join("");
    a = T7.FX(a, 65, 92, 70);
    a = a.split(T7.Fa(70));
    for (var c = 0; c < a.length; c++)
        b += T7.Fa(parseInt(a[c], 16));
    return b;
};
T7.HP = function (a) {
    return new TextEncoder("utf-8").encode(a);
};
T7.DU = function (a, b) {
    if (!a)
        return !1;
    var c = a.toString();
    c = (c.startsWith("{") && c.endsWith("}")) || (c.startsWith("[") && c.endsWith("]"));
    if (aI.Dd(a) && !c)
        return !1;
    if (aI.Cf(a) || aI.Qc(a))
        (a = JSON.stringify(a)), (c = !0);
    if (c)
        try {
            a = a.replace(',"":null', "");
            a = JSON.parse(a);
            for (var d in a)
                if (!d)
                    return !1;
            b || aJ.QE(a);
            return a;
        } catch (e) {
            Pn("[!] Error in JSON.parse", a);
        }
    return !1;
};
T7.FZ = function () {
    return T7.Fa(ED.FY(26) + 65);
};
T7.Dl = function () {
    for (var a = "#", b = 0; 6 > b; b++)
        a += Jh[ED.FY(16)];
    return a;
};
T7.d5 = function (a) {
    a = a.replace(/rgba?\(|\)| /g, "").split(",");
    3 == a.length && a.push(1);
    return 4 != a.length ? (Pn("[!] invalid rgba value", str), {r: 0, g: 0, b: 0, a: 1}) : {r: parseInt(a[0]), g: parseInt(a[1]), b: parseInt(a[2]), a: parseFloat(a[3])};
};
T7.Mb = function (a, b, c) {
    a = a.replace("#", "");
    if (a.startsWith("rgb"))
        return T7.d5(a);
    var d = parseInt(3 == a.length ? a.slice(0, 1).repeat(2) : a.slice(0, 2), 16),
            e = parseInt(3 == a.length ? a.slice(1, 2).repeat(2) : a.slice(2, 4), 16),
            f = parseInt(3 == a.length ? a.slice(2, 3).repeat(2) : a.slice(4, 6), 16);
    8 == a.length && (b = (parseInt(a.slice(6, 8), 16) / 255).toFixed(3));
    return c ? {r: d, g: e, b: f, a: void 0 !== b ? b : 1} : void 0 !== b ? "rgba(" + d + "," + e + "," + f + "," + b + ")" : "rgb(" + d + "," + e + "," + f + ")";
};
T7.lx = function (a) {
    for (var b = [], c = 0; c < a.length; c += 2)
        b.push(parseInt(a.substr(c, 2), 16));
    return b;
};
var gf = function (a) {
    this.html = a;
};
gf.prototype.fill = function (a, b) {
    var c = this.html;
    if (a) {
        var d;
        for (d in a) {
            var e = new RegExp("{" + d + "}", "g");
            c = c.replace(e, a[d]);
        }
    }
    return b ? $(c) : c;
};
var ay = function () {};
ay.init = function () {
    var a = Ft.R4("", "panelTemplates");
    aH.W5().data("templates", a);
    ay.set(
            "form_select_file",
            Ft.R4()
            .append(
                    "Please choose the file you want to import by clicking on the following button or just drag and drop it directly from your File Explorer onto this dialog.<br><br>",
                    Ft.GB("input", {id: "importSelectedFile", type: "file", name: "H0"})
                    )
            .html()
            );
};
