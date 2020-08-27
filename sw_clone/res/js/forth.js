
var WZ = function (a) {
    this.account = a;
    this.tokens = a.tokens;
};
WZ.prototype.Wb = function (a) {
    var b = {},
            c = this.account,
            d = moment(),
            e;
    for (e in c.aN)
        if (void 0 === a || e == a || (a == VI && (e == IQ || e == VT))) {
            var f = this.tokens.get(e).Uz;
            if (f != VG && (f = c.We(e)) && 5 > d.diff(f, "minutes"))
                continue;
            (f = c.VK(e)) && (b[e] = f);
        }
    return b;
};
WZ.prototype.WY = function (a) {
    return 0 < Object.keys(this.Wb(a)).length;
};
WZ.prototype.Wh = function (a) {
    var b = {},
            c;
    for (c in a) {
        var d = this.tokens.get(c);
        a = d.Uz;
        d = d.Uk;
        void 0 === b[a] && (b[a] = []);
        b[a].push(d);
    }
    return b;
};
WZ.prototype.Wg = function (a, b, c, d, e) {
    var f = c == VG,
            g,
            h,
            k = function (a) {
                if (a) {
                    f && (d = ["HIVE", "HBD", "VESTS"]);
                    for (var k = 0; k < d.length; k++)
                        (h = d[k]), (g = Uf.XJ(c, h)), b.VJ(g, 0), b.Wd(g, moment());
                }
                e(a);
            };
    if (f) {
        var l = Or(b.VK(VI), 3) + " HIVE",
                m = Or(b.VK(IQ), 3) + " HBD",
                n = Or(b.VK(VT), 6) + " VESTS";
        D.S.DK(a, D.l, l, m, n, k);
    } else
        c == VH && D.j.bq(D.l, d, k);
};
WZ.prototype.Kb = function (a, b) {
    var c = this,
            d = this.account,
            e,
            f,
            g,
            h = function (c) {
                c && (delete a[e], Object.keys(a).length ? g() : b());
            };
    D.t.DL(F2, !1, !1, function (b) {
        g = function () {
            e = Object.keys(a)[0];
            f = e == VG ? ["HIVE"] : a[e];
            D4.D9("Claiming Rewards: " + f.join(", ") + "...");
            c.Wg(b, d, e, f, h);
        };
        g();
    });
};
var VG = "ROOT",
        VH = "SE",
        VI = VG + "_HIVE",
        IQ = VG + "_HBD",
        VT = VG + "_VESTS",
        U5 = function (a, b) {
            this.aP = Uf.XJ(a, b);
            this.Uz = a;
            this.Uk = b;
            this.WT = "HIVE";
            this.Uq = 3;
            this.me = 1;
            this.WA = this.X9();
            this.WP = "";
            this.Up = this.X9();
            this.WF = this.X9();
            this.LE = 432e3;
            this.mf = 91;
            this.mg = 7;
            this.Xk = this.Xh = "";
            this.Um = this.Ul = this.Xt = this.Xq = this.Xn = 0;
            this.Uy = 1;
            this.WX = this.WW = this.Zn = this.Uv = this.X4 = this.Un = 0;
            this.keys = {};
        };
U5.prototype.is = function (a) {
    return this.aP == a;
};
U5.prototype.X9 = function () {
    return this.is(VI);
};
U5.prototype.dX = function () {
    return this.Uz == VH;
};
U5.prototype.V8 = function () {
    return this.WA;
};
U5.prototype.WB = function () {
    return this.Uz == VH && this.Uq ? Math.pow(10, this.Uq) : 1;
};
U5.prototype.WC = function () {
    return this.Uk.substr(0, 1) + "P";
};
U5.prototype.da = function () {
    return this.Uq;
};
U5.prototype.dZ = function () {
    return this.X9() ? 6 : this.Uq;
};
U5.prototype.Wi = function (a, b, c) {
    void 0 !== a[b] && (this[c] = a[b]);
};
U5.prototype.set = function (a) {
    for (var b in a)
        this.keys[b] = a[b];
    this.Uz == VH &&
            (void 0 !== a.staked_token &&
                    ((this.Uq = a.precision),
                            (b = this.WB()),
                            this.Ui(a.staked_token / b),
                            this.Uj(a.staked_token / b),
                            this.Ux(),
                            this.Ug(a.reward_pool / b),
                            this.Xz(a.claimed_token / b),
                            this.X0(a.pending_rshares / b),
                            this.Xy(a.pending_token / b),
                            this.Uu()),
                    this.Wi(a, "stakingEnabled", "Up"),
                    this.Wi(a, "delegationEnabled", "WF"),
                    this.Wi(a, "vote_regeneration_seconds", "LE"),
                    this.Wi(a, "unstakingCooldown", "mf"),
                    this.Wi(a, "undelegationCooldown", "mg"),
                    this.Wi(a, "circulatingSupply", "WW"),
                    this.Wi(a, "maxSupply", "WX"),
                    void 0 !== a.metadata && ((this.WT = a.name), (this.Uq = a.precision), this.WQ(a.metadata)));
};
U5.prototype.WQ = function (a) {
    if ((a = T7.DU(aJ.WR(a)))) {
        var b = Uf.Wm(VH, this.Uk);
        b ? (this.WP = b) : void 0 !== a.icon && (b = aJ.WR(a.icon)) && (this.WP = C4.Ns(b, 32, 32, !1, !0));
    }
};
U5.prototype.Ui = function (a) {
    this.Ul = AQ(a);
};
U5.prototype.Uj = function (a) {
    this.Um = AQ(a);
};
U5.prototype.Uw = function (a) {
    this.Uy = a;
};
U5.prototype.Ux = function () {
    this.Uw(this.Um ? this.Ul / this.Um : 1);
};
U5.prototype.Ug = function (a) {
    this.Un = AQ(a);
};
U5.prototype.Xz = function (a) {
    this.X4 = a;
};
U5.prototype.Ut = function (a) {
    this.Uv = a;
};
U5.prototype.Zm = function (a) {
    this.Zn = AQ(a);
};
U5.prototype.Xf = function (a) {
    this.Xh = a;
};
U5.prototype.Xg = function () {
    return this.Xh;
};
U5.prototype.Xi = function (a) {
    this.Xk = a;
};
U5.prototype.Xj = function () {
    return this.Xk;
};
U5.prototype.Xl = function (a) {
    this.Xn = a;
};
U5.prototype.Xm = function () {
    return this.Xn;
};
U5.prototype.Xo = function (a) {
    this.Xq = a;
};
U5.prototype.Xp = function () {
    return this.Xq;
};
U5.prototype.Xr = function (a) {
    this.Xt = a;
};
U5.prototype.Xs = function () {
    return this.Xt;
};
U5.prototype.V6 = function (a) {
    this.me = AQ(a);
};
U5.prototype.V7 = function (a) {
    return this.me * a;
};
U5.prototype.Uu = function () {
    this.WB();
    this.Ut(this.Uz == VG ? this.Un / this.X4 : this.Ur ? DW(this.Ur * this.Un, 10) : 0);
};
U5.prototype.X0 = function (a) {
    this.Ur = AQ(a);
};
U5.prototype.Xy = function (a) {
    this.Us = AQ(a);
};
U5.prototype.U1 = function (a, b) {
    a *= this.Uy;
    return void 0 !== b ? DW(a, b) : a;
};
U5.prototype.U2 = function (a, b) {
    a /= this.Uy;
    return void 0 !== b ? DW(a, b) : a;
};
U5.prototype.XY = function (a) {
    return (this.Un / this.X4) * a;
};
U5.prototype.Y0 = function (a) {
    a = parseFloat(a / D.V.Bn);
    a = parseFloat(this.U2(a));
    return parseFloat(a / this.Uv / 1e4);
};
U5.prototype.Y4 = function (a) {
    return 1e4 * a * this.Uv;
};
U5.prototype.Y9 = function (a) {
    return a / (1e4 * this.Uv);
};
U5.prototype.AM = function (a, b, c) {
    if (this.X9()) {
        c = parseInt((b * c + 49) / 50);
        var d = a * this.Uv * c * D.V.Bn * 100;
    } else if (this.Uz == VH) {
        if (!this.Uv)
            return Or(0, 2);
        d = ((1e3 * a) / (this.Uv / 1e3)) * (c / 100) * (b / 100) * 1e3;
    }
    return d;
};
U5.prototype.Y5 = function (a, b, c, d) {
    if (this.X9()) {
        var e = this.Xg();
        var f = this.Xm(),
                g = this.Y9(a) / 1e3;
        d = 10 * this.Y0(parseFloat(d));
        d = g + d;
        e = XI.XU(d, e, f);
        e = 0 < d ? DW(e / d, 6) : 1;
        e = this.AM(a * e, b, c);
    } else
        this.Uz == VH && (e = this.AM(a, b, c));
    return e;
};
U5.prototype.Ak = function (a) {
    var b = AQ(a);
    a = this.U1(b, this.Uq);
    a = aH.FD([Bl(a, this.Uq) + " " + this.Uk, this.X9() ? Bl(b / 1e6, this.Uq) + " MVests" : null]);
    return '<span title="' + b + ' Vests">' + a + "</span>";
};
var Uf = function () {
    this.U3 = new U5("ROOT", "HIVE");
    this.Ya = new U5("ROOT", "HBD");
    this.U3.WP = L8("res/img/hive-logo-big.png");
    this.tokens = {};
    this.tokens[VI] = this.U3;
    this.tokens[IQ] = this.Ya;
    this.tokens[VT] = new U5("ROOT", "VESTS");
};
Uf.XJ = function (a, b) {
    return a + "_" + b;
};
Uf.prototype.mh = function () {
    return this.tokens;
};
Uf.prototype.VP = function () {
    var a = [],
            b;
    for (b in this.tokens)
        a.push(this.tokens[b].aP);
    return a.sort();
};
Uf.prototype.get = function (a) {
    return this.tokens[a];
};
Uf.prototype.V9 = function (a, b, c) {
    var d = Uf.XJ(a, b),
            e = this.get(d);
    void 0 === e && c && (this.set(a, b, {}), (e = this.get(d)));
    return e;
};
Uf.prototype.set = function (a, b, c) {
    var d = Uf.XJ(a, b);
    void 0 === this.tokens[d] && (this.tokens[d] = new U5(a, b));
    this.tokens[d].set(c);
};
Uf.prototype.l4 = function (a) {
    var b = this.tokens,
            c = [],
            d;
    for (d in b)
        b[d].Uz == a && c.push(d);
    for (a = 0; a < c.length; a++)
        delete b[c[a]];
};
Uf.prototype.U1 = function (a, b, c) {
    return this.get(a).U1(b, c);
};
Uf.prototype.U2 = function (a, b, c) {
    return this.get(a).U2(b, c);
};
Uf.prototype.AL = function (a, b) {
    return this.U1(VI, a, b);
};
Uf.prototype.FN = function (a, b) {
    return this.U2(VI, a, b);
};
Uf.prototype.XY = function (a, b) {
    return this.get(a).XY(b);
};
Uf.prototype.Ib = function (a) {
    return this.XY(VI, a);
};
Uf.prototype.Ia = function (a) {
    return this.Ib(a) * D.V.Bn;
};
Uf.prototype.Y0 = function (a, b) {
    return this.get(a).Y0(b);
};
Uf.prototype.Y4 = function (a, b) {
    return this.get(a).Y4(b);
};
Uf.prototype.Y9 = function (a, b) {
    return this.get(a).Y9(b);
};
Uf.prototype.Y5 = function (a, b, c, d, e) {
    return this.get(a).Y5(b, c, d, e);
};
Uf.prototype.AM = function (a, b, c, d) {
    this.get(a).AM(b, c, d);
};
Uf.prototype.Ak = function (a, b) {
    return this.get(a).Ak(b);
};
Uf.Wm = function (a, b) {
    var c = "";
    a == VH &&
            ("ALPHA" == b
                    ? (c = "https://cdn.steemitimages.com/DQmejofcJEEWD9xguQcFZ1xBooH5sdonugtxmR3UhbQP72Y/se_alpha.png")
                    : "APX" == b || "ATTDUMMY" == b
                    ? (c = "https://cdn.steemitimages.com/DQmZo5ohdS5Gj5iAiVLPZXdbKYJDi9dsNp8gcALBiBcdTkd/se_apx.png")
                    : "BETA" == b
                    ? (c = "https://cdn.steemitimages.com/DQmSS8MvFALh9xw4Q1r5BpHKbpFuGRFuQyVWNycyEWKe1GM/se_beta.png")
                    : "COFFEEA" == b
                    ? (c = "https://cdn.steemitimages.com/DQmeqvatu7c4QUrneCBU2W6y6aj6KGAtCKxJNqWnFmdEc9P/se_coffeea.png")
                    : "DEC" == b
                    ? (c = "https://cdn.steemitimages.com/DQmd62PuaKqMGwzT9TD7gVCGxtg5GDqqwqmQmvCCBZhV1pp/se_dec.png")
                    : "ENG" == b
                    ? (c = "https://cdn.steemitimages.com/DQmP9EK8hd4o5Q6V6TXdEeAg72YToVgVEGd4foqYEdcWLaz/se_eng.png")
                    : "JAR" == b
                    ? (c = "https://cdn.steemitimages.com/DQmXABPnoRCio3Ja8MuaxdivZ16Zs16ztWxHYur4nEUv9HF/se_jar.png")
                    : "PHOTO" == b
                    ? (c = "https://cdn.steemitimages.com/DQmcoD1E7PuZ5CR1ghBfEqoxUycXhXBmCFo2tAyEPSAiAj4/se_photo.png")
                    : "RED" == b
                    ? (c = "https://cdn.steemitimages.com/DQmVtad3Qdh9EmVPr9BM6dYCx8UDUNuyPD64A5ttimVZE2G/se_red.png")
                    : "SMTT" == b
                    ? (c = "https://cdn.steemitimages.com/DQmRHTxk6p7DQsTPjdipdj4adGMQtc2DmYMi79PZKzod5a4/se_smtt.png")
                    : "TASK" == b
                    ? (c = "https://cdn.steemitimages.com/DQmS69usCckVmwzfkwUVrziWMiouY33muSq5LQ45NEHanjM/se_task.png")
                    : "TMT" == b
                    ? (c = "https://cdn.steemitimages.com/DQmd9kyRHPohF46F2vgSvwaVqRZ3ycDLY3gwW6PxwLnGFyH/se_tmt.png")
                    : "UNICORN" == b
                    ? (c = "https://cdn.steemitimages.com/DQmboXfC3bAwZti9nLLhtvMb2h2k9Pq4Mw3dw9vpvJXpSpW/se_unicorn.png")
                    : "WONKA" == b && (c = "https://cdn.steemitimages.com/DQmXv2Kuhkg9hvdL1YXBYcsuP3FRewyHGNCMRdVBCP4zaVW/se_wonka.png"));
    return c;
};
var Ub = function (a, b) {
    this.steem = a;
    this.tokens = b;
    this.X5 = "https://api.hive-engine.com/rpc/contracts";
    this.X6 = "https://api.steem-engine.com/accounts/";
    this.U4 = "ssc-mainnet1";
    this.ZA = this.requestId = 0;
};
Ub.prototype.U7 = function () {
    this.requestId++;
    return this.requestId;
};
Ub.prototype.U8 = function (a, b, c) {
    $.ajax({
        method: "GET",
        url: X6,
        success: function (a) {
            var d = T7.DU(a);
            d ? b(d) : (Pn("[!] HiveEngine returned invalid JSON", a), void 0 !== c && c());
        },
        error: function () {
            Pn("[!] HiveEngine request error", void 0);
            void 0 !== c && c();
        },
    });
};
Ub.prototype.br = function (a, b, c, d, e, f, g) {
    var h = function (a, b) {
        Pn(a, b);
        void 0 !== g && g();
    };
    this.U8(
            this.url + "history?account=" + a + "&limit=" + c + "&offset=" + d + "&type=" + e + "&symbol=" + b,
            function (a) {
                var b = T7.DU(a);
                b ? f(b) : h("[!] HiveEngine.history returned invalid JSON", a);
            },
            h
            );
};
Ub.prototype.U9 = function (a, b, c, d) {
    var e = {jsonrpc: "2.0", id: this.U7(), method: a, params: b};
    $.ajax({
        url: this.X5,
        contentType: "application/json",
        type: "POST",
        data: JSON.stringify(e),
        success: function (a) {
            var b = T7.DU(a);
            b && void 0 !== b.result ? c(b.result) : (Pn("[!] HiveEngine RPC returned invalid JSON", a, e), void 0 !== d && d());
        },
        error: function (a, b, c) {
            Pn("[!] HiveEngine RPC Request Error: " + b, c, e);
            void 0 !== d && d();
        },
    });
};
Ub.prototype.find = function (a, b, c, d, e, f, g, h) {
    this.U9("find", {contract: a, table: b, query: c, limit: d, offset: e, indexes: f}, g, h);
};
Ub.prototype.findOne = function (a, b, c, d, e) {
    this.U9("findOne", {contract: a, table: b, query: c}, d, e);
};
Ub.prototype.findAll = function (a, b, c, d, e) {
    var f = this,
            g = [],
            h = 0,
            k = function (a) {
                h += 1e3;
                for (var b = 0; b < a.length; b++)
                    g.push(a[b]);
                1e3 <= a.length ? l() : d(g);
            };
    var l = function () {
        return f.find(a, b, c, 1e3, h, [], k, e);
    };
    l();
};
Ub.prototype.Wq = function (a, b, c) {
    return {contractName: a, contractAction: b, contractPayload: c};
};
Ub.prototype.Wp = function (a, b) {
    return ["custom_json", {required_auths: [a], required_posting_auths: [], id: this.U4, json: JSON.stringify(b)}];
};
Ub.prototype.Wr = function (a, b, c, d) {
    var e = this,
            f = function (a) {
                if (a) {
                    if (!e.ZA || 5 < moment().diff(e.ZA, "minutes"))
                        (e.ZA = moment()),
                                setTimeout(function () {
                                    D4.D9("Confirming the contract action by the sidechain may take some time,<br>therefore your wallet may show outdated data for a while.", 8e3);
                                }, 5e3);
                    c(!0);
                }
            },
            g = function (a) {
                e.steem.Px(a, b, f, d);
            },
            h = function () {};
    a ? g(a) : D.t.DL(F1, !1, !1, g, h);
};
Ub.prototype.Wo = function (a, b, c, d, e, f, g) {
    c = this.Wq(c, d, e);
    b = this.Wp(b, c);
    this.Wr(a, b, f, g);
};
Ub.prototype.transfer = function (a, b, c, d, e, f, g, h) {
    this.Wo(a, b, "tokens", "transfer", {symbol: d, quantity: e, to: c, memo: f}, g, h);
};
Ub.prototype.issue = function (a, b, c, d, e, f, g, h) {
    this.Wo(a, b, "tokens", "issue", {symbol: d, quantity: e, to: c}, g, h);
};
Ub.prototype.stake = function (a, b, c, d, e, f, g) {
    this.Wo(a, b, "tokens", "stake", {symbol: d, quantity: e, to: c}, f, g);
};
Ub.prototype.cP = function (a, b, c, d, e, f) {
    var g = [],
            h;
    for (h in d) {
        var k = {symbol: this.tokens.get(h).Uk, quantity: d[h], to: c};
        g.push(this.Wq("tokens", "stake", k));
    }
    b = this.Wp(b, g);
    this.Wr(a, b, e, f);
};
Ub.prototype.unstake = function (a, b, c, d, e, f) {
    this.Wo(a, b, "tokens", "unstake", {symbol: c, quantity: d}, e, f);
};
Ub.prototype.cancelUnstake = function (a, b, c, d, e) {
    this.Wo(a, b, "tokens", "cancelUnstake", {txID: c}, d, e);
};
Ub.prototype.delegate = function (a, b, c, d, e, f, g) {
    this.Wo(a, b, "tokens", "delegate", {symbol: d, quantity: e, to: c}, f, g);
};
Ub.prototype.undelegate = function (a, b, c, d, e, f, g) {
    this.Wo(a, b, "tokens", "undelegate", {symbol: d, quantity: e, from: c}, f, g);
};
Ub.prototype.getAllPrices = function (a, b) {
    var c = this;
    this.findAll(
            "market",
            "metrics",
            {},
            function (b) {
                for (var d, f = 0; f < b.length; f++)
                    (d = Uf.XJ(VH, b[f].symbol)), (d = c.tokens.get(d)) && d.V6(b[f].lastPrice);
                a(b);
            },
            b
            );
};
Ub.prototype.Uc = function (a, b) {
    var c = this,
            d = {},
            e = function (b) {
                return a(d);
            };
    this.findAll(
            "tokens",
            "tokens",
            {},
            function (a) {
                for (var f, h = 0; h < a.length; h++)
                    (f = a[h]), (d[f.symbol] = f), c.tokens.set(VH, f.symbol, f);
                c.getAllPrices(e, b);
            },
            b
            );
};
Ub.prototype.VD = function (a, b, c, d) {
    a = {account: a};
    b && (a.symbol = b);
    this.findAll("tokens", "balances", a, c, d);
};
Ub.prototype.VC = function (a, b, c, d, e) {
    b = {symbol: b};
    b["IN" == c ? "to" : "from"] = a;
    this.findAll("tokens", "delegations", b, d, e);
};
Ub.prototype.VE = function (a, b, c, d) {
    this.findAll("tokens", "pendingUndelegations", {account: a, symbol: b}, c, d);
};
Ub.prototype.UX = function (a, b, c, d) {
    D.H.findOne("tokens", "pendingUnstakes", {account: a, symbol: b}, c, d);
};
Ub.prototype.WK = function (a, b, c) {
    D.H.findAll("tokens", "pendingUnstakes", {account: a}, b, c);
};
var UY = function (a, b) {
    this.steem = a;
    this.tokens = b;
    this.url = "https://scot-api.steem-engine.com/";
    this.Vc = this.X7 = !1;
};
UY.prototype.He = function (a, b, c) {
    $.ajax({
        method: "GET",
        url: a,
        success: function (a) {
            var d = T7.DU(a);
            d ? b(d) : (Pn("[!] SCOT returned invalid JSON", a), void 0 !== c && c());
        },
        error: function () {
            Pn("[!] SCOT request error", void 0);
            void 0 !== c && c();
        },
    });
};
UY.prototype.Vx = function (a, b) {
    var c = this;
    this.He(
            this.url + "config",
            function (b) {
                for (var d = 0; d < b.length; d++)
                    c.tokens.set(VH, b[d].token, b[d]);
                c.Vc = !0;
                a();
            },
            function () {
                void 0 !== b && b();
            }
    );
};
UY.prototype.VB = function (a, b) {
    var c = this;
    this.He(
            this.url + "info",
            function (d) {
                var e;
                for (e in d) {
                    c.tokens.set(VH, e, d[e]);
                    var f = c.tokens.V9(VH, e);
                    f.WA = !0;
                }
                c.X7 = !0;
                c.Vc ? a() : c.Vx(a, b);
            },
            function () {
                void 0 !== b && b();
            }
    );
};
UY.prototype.Ua = function (a, b, c) {
    this.He(this.url + "info?token=" + a, b, c);
};
UY.prototype.Ud = function (a, b, c) {
    this.He(this.url + "@" + a, b, c);
};
UY.prototype.UZ = function (a, b, c, d) {
    this.He(this.url + "@" + a + "?token=" + b, c, d);
};
UY.prototype.bq = function (a, b, c) {
    var d = [];
    for (a = 0; a < b.length; a++)
        d.push({symbol: b[a]});
    var e = function () {
        return c(!0);
    };
    D.t.DL(F2, !1, !1, function (a) {
        return D.S.C7(a, "scot_claim_token", d, e);
    });
};
var HU = 1,
        HV = 2,
        HW = 3,
        HX = 4,
        Ha = 5,
        HY = 6,
        Hb = 8,
        H5 = 9,
        H6 = 10,
        IA = 11,
        Oj = 12,
        Hn = 13,
        Ho = 14,
        lW = 15,
        Hk = 1,
        Hl = 2,
        Hm = 3,
        Hq = 6,
        Hr = 7,
        Hs = 8,
        Ob = 9,
        H7 = ["HIVE", "HBD", "VESTS", "HP"],
        kS = 15,
        N3 = function (a) {
            this.storage = a;
            this.HP = null;
            this.Q1 = [];
            this.Qv = {followers: [], mentions: []};
            this.Qq = [
                {id: Hk, maxAge: 60},
                {id: Hl, maxAge: 60},
                {id: Hm, maxAge: 60},
                {id: Hq, maxAge: 300},
                {id: Hr, maxAge: 300},
                {id: Hs, maxAge: 60},
                {id: Ob, maxAge: 60},
            ];
            this.Qr();
        };
N3.prototype.He = function (a, b, c, d) {
    a = JSON.stringify({t: a, p: b});
    $.ajax({
        method: "POST",
        crossDomain: !0,
        url: HT,
        data: {d: a, v: 1},
        success: function (a) {
            a && 1 == a.code ? c(a) : (console.log("[!] SDS request error", a), void 0 !== d && d());
        },
        error: function () {
            console.log("[!] SDS request error");
            void 0 !== d && d();
        },
        timeout: 1e4,
    });
};
N3.prototype.Qr = function () {
    var a = this.storage.get("cached_requests", "");
    a && (this.Q1 = JSON.parse(a));
};
N3.prototype.Qs = function () {
    this.storage.set("cached_requests", JSON.stringify(this.Q1));
};
N3.prototype.C3 = function () {
    if (this.HP && 1 == this.HP.requests.code) {
        for (var a = this.HP.requests.rows, b = this.Q1, c = !1, d, e, f = 0; f < a.length; f++) {
            e = a[f];
            d = !1;
            for (var g = 0; g < b.length; g++)
                b[g][0] == e[0] && ((d = !0), parseInt(b[g][2]) < parseInt(e[2]) && ((b[g] = e), (c = !0)));
            d || (b.push(e), (c = !0));
        }
        c && this.Qs();
    }
};
N3.prototype.Qt = function () {
    this.Qr();
    var a = [],
            b = moment.utc(),
            c = this.Q1,
            d = this.Qq;
    if (c.length < d.length)
        return [];
    for (var e, f, g = 0; g < c.length; g++) {
        e = c[g];
        for (var h = 0; h < d.length; h++)
            d[h].id == e[0] && ((f = b.diff(moment.unix(e[2]), "seconds")), f > d[h].maxAge && a.push(d[h].id));
    }
    return a.length ? a : 0;
};
N3.prototype.kO = function (a) {
    for (var b = this.Q1, c = 0; c < b.length; c++)
        if (b[c][0] == a)
            return b[c];
    return null;
};
N3.prototype.Hp = function (a, b, c) {
    var d = this.kO(a);
    if (d) {
        var e = moment.utc().diff(moment.unix(d[2]), "minutes");
        if (e < kS) {
            a = d[1];
            b(aI.Df(a) ? a : T7.DU(a));
            return;
        }
        console.log("[!] cached request too old: " + a + " / mins: " + e);
    }
    c();
};
N3.prototype.kP = function (a, b) {
    var c = moment.utc().unix(),
            d = this.kO(a);
    d ? ((d[1] = b), (d[2] = c)) : this.Q1.push([a, b, c]);
    this.Qs();
};
N3.prototype.Cv = function (a, b) {
    this.He(HW, {user: a}, function (a) {
        b(a.rows);
    });
};
N3.prototype.Cw = function (a, b) {
    this.He(HX, {user: a}, function (a) {
        b(a.rows);
    });
};
N3.prototype.DO = function (a, b, c) {
    this.He(Oj, {author: a, link: b}, function (a) {
        c(a.rows);
    });
};
N3.prototype.H4 = function (a, b, c, d, e, f, g, h) {
    this.He(Hb, {delegator: a, delegatee: b, day_from: c, day_to: d, sort_by: e, sort_dir: f, start: g}, function (a) {
        h(a.rows);
    });
};
N3.prototype.Eq = function (a, b, c, d, e, f, g, h, k, l, m, n, p, q, r) {
    this.He(
            H6,
            {type: a, from: b, to: c, amount: d, amount_mode: e, unit: f, day_from: g, day_to: h, memo: k, request_id: l, sort_by: m, sort_dir: n, start: p},
            function (a) {
                q(a.rows);
            },
            r
            );
};
N3.prototype.lV = function (a, b, c) {
    this.He(lW, {host: a, port: b}, function (a) {
        c(a);
    });
};
N3.prototype.Qu = function (a, b) {
    if (a[b].rows.length) {
        for (var c = 0; c < a[b].rows.length; c++)
            (a[b].rows[c][0] = Number(a[b].rows[c][0])), this.Qv[b].push(a[b].rows[c]);
        aI.Bu(this.Qv[b], 0, !0);
    }
};
var TD = function (a, b) {
    this.TC = a;
    this.TB = b;
    this.TT = this.TS = 0;
    this.TU = 1800;
    this.TV = 300;
};
TD.prototype.TG = function (a) {
    return this.TB.Sy(a + "BTC").S0();
};
TD.prototype.TH = function (a) {
    var b = this.TC.TF("USDT"),
            c = this.TB.Sy("BTCUSDT");
    return b ? c.S0() * b.Sq() * a : 0;
};
TD.prototype.TK = function (a) {
    var b = this.TC.TF("USDT"),
            c = this.TB.Sy("BTCUSDT");
    return b ? a / (c.S0() * b.Sq()) : 0;
};
TD.prototype.X8 = function (a, b) {
    b = this.TC.TF(b);
    if (!b)
        return 0;
    if ("HBD" != a)
        (a = this.TG(a)), (a = this.TH(a));
    else {
        a = this.TC.TF("HBD");
        if (!a)
            return 0;
        a = a.Sq();
    }
    return a / b.Sq();
};
TD.prototype.TA = function (a, b) {
    a = this.TB.Sy(a);
    b = b ? this.TB.Sy("BTCUSDT").TA() : 0;
    return a.TA() + b;
};
TD.prototype.S8 = function (a) {
    return this.TB.Sy(a).S8();
};
TD.prototype.En = function (a) {
    var b = this;
    a = T5(a, !this.TT);
    var c = moment();
    if (!this.TS || c.diff(this.TS, "seconds") >= this.TU)
        (this.TS = moment()), this.TC.refresh();
    (a || c.diff(this.TT, "seconds") >= this.TV) &&
            this.TB.refresh(function () {
                b.TT = moment();
                var a = b.TC.TF("HBD"),
                        c = b.TC.TF("USDT");
                if (a && c) {
                    var f = b.TB.Sy("HBDBTC"),
                            g = b.TB.Sy("BTCUSDT");
                    c = (a.Sq() * c.Sq()) / g.S0();
                    f.Sz(c);
                    f.S7(a.S8());
                    f.S9(a.TA());
                }
            });
};
var So = function (a, b, c) {
    this.type = a;
    this.id = b;
    this.name = c;
    this.change = this.volume = this.rateUSD = 0;
};
So.prototype.TI = function () {
    return this.type;
};
So.prototype.dd = function () {
    return this.id;
};
So.prototype.getName = function () {
    return this.name;
};
So.prototype.Sp = function (a) {
    this.rateUSD = parseFloat(a);
};
So.prototype.Sq = function () {
    return this.rateUSD;
};
So.prototype.S7 = function (a) {
    this.volume = parseFloat(a);
};
So.prototype.S8 = function () {
    return this.volume;
};
So.prototype.S9 = function (a) {
    this.change = parseFloat(a);
};
So.prototype.TA = function () {
    return this.change;
};
var Sn = function () {
    this.rates = {};
};
Sn.prototype.Ss = function (a, b, c, d, e, f) {
    void 0 === this.rates[b] && (this.rates[b] = new So(a, b, c));
    a = this.rates[b];
    a.Sp(d);
    a.S7(e);
    a.S9(f);
};
Sn.prototype.TF = function (a) {
    return this.rates[a];
};
Sn.prototype.Sr = function (a) {
    var b = [],
            c;
    for (c in this.rates)
        (a && this.rates[c].TI() != a) || b.push(this.rates[c]);
    return b;
};
Sn.prototype.St = function (a) {
    if (a && a.data)
        for (var b, c = a.data, d = 0; d < c.length; d++)
            (a = c[d]), (b = T7.DR(a.id.replace(/\-/g, " "))), this.Ss(a.type, a.symbol, b, a.rateUsd, a.volume ? a.volume : 0, a.changePercent ? a.changePercent : 0);
    else
        this.Sx();
};
Sn.prototype.refresh = function () {
    var a = this;
    $.ajax({
        url: "https://steemworld-ws.org/ticker/rates/",
        success: function (b) {
            return a.St(b);
        },
        error: function () {
            //return a.Sx();
        },
    });
};
Sn.prototype.Sx = function () {
    var a = this;
    console.log("[!] ticker/rates request error");
    setTimeout(function () {
        return a.refresh();
    }, 1e4);
};
var Sm = function () {
    this.pairs = {};
};
Sm.prototype.Sw = function (a) {
    this.pairs[a] = new Sl(a);
};
Sm.prototype.Sy = function (a) {
    void 0 === this.pairs[a] && this.Sw(a);
    return this.pairs[a];
};
Sm.prototype.Sv = function () {
    var a = [],
            b;
    for (b in this.pairs)
        a.push(this.pairs[b]);
    return a;
};
Sm.prototype.Su = function (a) {
    if (a)
        for (var b, c, d = 0; d < a.length; d++)
            (b = a[d]), (c = this.Sy(b.symbol)), c.Sz(b.lastPrice), c.S1(b.openPrice), c.S3(b.lowPrice), c.S5(b.highPrice), c.S7(b.volume), c.S9(b.priceChangePercent);
    else
        this.Sx();
};
Sm.prototype.refresh = function (a) {
    var b = this;
    $.ajax({
        url: "https://steemworld-ws.org/ticker/24h/",
        success: function (c) {
            b.Su(c);
            void 0 !== a && a();
        },
        error: function () {
            //b.Sx(a);
        },
    });
};
Sm.prototype.Sx = function (a) {
    var b = this;
    console.log("[!] ticker/24h request error");
    setTimeout(function () {
        b.refresh(a);
    }, 1e4);
};
var Sl = function (a) {
    this.id = a;
    this.change = this.volume = this.highPrice = this.lowPrice = this.openPrice = this.lastPrice = 0;
};
Sl.prototype.dd = function () {
    return this.id;
};
Sl.prototype.Sz = function (a) {
    this.lastPrice = parseFloat(a);
};
Sl.prototype.S0 = function () {
    return this.lastPrice;
};
Sl.prototype.S1 = function (a) {
    this.openPrice = parseFloat(a);
};
Sl.prototype.S2 = function () {
    return this.openPrice;
};
Sl.prototype.S3 = function (a) {
    this.lowPrice = parseFloat(a);
};
Sl.prototype.S4 = function () {
    return this.lowPrice;
};
Sl.prototype.S5 = function (a) {
    this.highPrice = parseFloat(a);
};
Sl.prototype.S6 = function () {
    return this.highPrice;
};
Sl.prototype.S7 = function (a) {
    this.volume = parseFloat(a);
};
Sl.prototype.S8 = function () {
    return this.volume;
};
Sl.prototype.S9 = function (a) {
    this.change = parseFloat(a);
};
Sl.prototype.TA = function () {
    return this.change;
};
var X2 = function (a) {
    this.votes = null;
    this.token = D.o.U3;
    this.YS(a, !1);
};
X2.prototype.YR = function () {
    return this.row;
};
X2.prototype.YS = function (a, b) {
    this.row = a;
    this.refresh(b);
};
X2.prototype.bt = function (a) {
    return this.row[a];
};
X2.prototype.refresh = function (a) {
    this.IO(a);
    this.votes ? this.votes.refresh(a) : (this.votes = new XI(this));
};
X2.prototype.La = function () {
    return this.bt("active_votes");
};
X2.prototype.ZM = function (a) {
    this.row.active_votes = a;
    this.refresh(!0);
};
X2.prototype.E0 = function () {
    return this.La().length;
};
X2.prototype.E1 = function (a) {
    return this.votes.E1(a);
};
X2.prototype.aw = function () {
    return this.bt("author");
};
X2.prototype.ka = function () {
    return this.bt("parent_author");
};
X2.prototype.G0 = function () {
    return this.bt("permlink");
};
X2.prototype.kb = function () {
    return this.bt("parent_permlink");
};
X2.prototype.Xx = function () {
    return this.bt("title");
};
X2.prototype.W5 = function () {
    return this.bt("body");
};
X2.prototype.Xe = function () {
    return T7.DU(this.row.json_metadata);
};
X2.prototype.YQ = function () {
    return X2.PZ(this.row);
};
X2.prototype.W6 = function (a) {};
X2.prototype.Pa = function () {
    return X2.Pa(this.YQ());
};
X2.prototype.YY = function () {
    return this.XK;
};
X2.prototype.XM = function () {
    return this.XN;
};
X2.prototype.To = function () {
    return X2.To(this.W3);
};
X2.prototype.Y8 = function () {
    return this.Y7;
};
X2.prototype.Xd = function () {
    return this.Xc;
};
X2.prototype.IO = function (a) {
    var b = this.row,
            c = moment.utc(),
            d = moment.utc(b.created),
            e = moment.utc(b.cashout_time),
            f = e > c,
            g = AQ(b.pending_payout_value),
            h = AQ(b.total_payout_value),
            k = AQ(b.curator_payout_value),
            l = 0;
    if (!a) {
        this.postId = b.id ? b.id : b.post_id;
        this.ep = d;
        this.cashoutTime = e;
        this.ez = D.B.DE(d.clone().local()) + T7.LJ(3) + "( " + aG.DT(c, d) + " ago )";
        this.XN = !AQ(b.max_accepted_payout);
        this.Y7 = void 0 !== b.allow_curation_rewards ? b.allow_curation_rewards : !0;
        this.Xc = !b.parent_author;
        this.factorHBD = b.percent_steem_dollars / 1e4 / 2;
        this.Tu = this.W3 = this.Mo = this.Mn = this.Mm = this.Mj = this.Ml = this.Mk = this.Yp = this.Yo = this.N5 = this.Mi = this.Mv = this.Ja = this.JY = this.JZ = this.D1 = this.Dq = 0;
        this.curveFactor = 1;
        this.W8 = 0;
        if (b.beneficiaries)
            for (a = 0; a < b.beneficiaries.length; a++)
                this.W8 += parseFloat(b.beneficiaries[a].weight) / 1e4;
        this.W8 = Math.min(1, this.W8);
    }
    this.XK = f;
    this.Y7 || k || (k = 0);
    f || (h || (h = k), 0 < this.W8 && 1 > this.W8 && (h /= 1 - this.W8), (l = h / this.token.Xs() - h - k), (k += l), (h += l));
    l = Math.max(0, l);
    b = Math.max(0, h * this.W8);
    h = Math.max(0, h - b);
    f = (g = Math.max(0, g + h + b + k + l)) ? 100 / g : 0;
    this.Et = g;
    this.Dq = h;
    this.D1 = g && h ? f * h : 0;
    this.Mv = k;
    this.N5 = g && k ? f * k : 0;
    this.Yo = b;
    this.Yp = g && b ? f * b : 0;
    this.G1 = l;
    this.bj = g && l ? f * l : 0;
};
X2.To = function (a) {
    return D.o.Ia(a) < Tn;
};
X2.PZ = function (a) {
    var b = [],
            c = T7.DU(a.json_metadata);
    void 0 !== a.category && a.category && b.push(a.category);
    if (c && c.tags) {
        if (aI.Dd(c.tags))
            return [c.tags];
        for (var d = 0; d < c.tags.length; d++)
            (a = c.tags[d]) && -1 == b.indexOf(a) && b.push(a);
    }
    return b;
};
X2.Pa = function (a) {
    return -1 < a.indexOf("nsfw");
};
X2.Pb = function () {
    $(".nsfwContent").each(function () {
        var a = $(this);
        a.parent().html(a.data("content"));
    });
    g8("#selectShowNSFWContent").aM("1");
    return !1;
};
XO = "quadratic";
XP = "bounded_curation";
XQ = "linear";
XR = "square_root";
XS = "convergent_linear";
XT = "convergent_square_root";
var XI = function (a) {
    this.post = a;
    this.items = [];
    this.W7 = 0;
    this.refresh(!1);
};
XI.prototype.Z4 = function (a) {
    a = $.extend(!0, {}, a);
    a.amount = 0;
    a.rshares = parseFloat(a.rshares);
    a.JZ = 0;
    a.JY = 0;
    a.Ja = 0;
    a.Mi = 0;
    this.items.push(a);
    return a;
};
XI.prototype.XL = function (a, b) {
    for (var c = a.voter, d = 0; d < this.items.length; d++)
        if (this.items[d].voter == c)
            return this.items[d];
    return b ? this.Z4(a) : null;
};
XI.prototype.E1 = function (a) {
    return XI.E1(this.items, a);
};
XI.prototype.B5 = function (a, b) {
    if (0 < a.W3) {
        b = b.rshares;
        var c = 0 < b ? 1 : -1;
        return (((100 / a.W3) * c * b) / 100) * a.Et * c;
    }
    return 0;
};
XI.prototype.refresh = function (a) {
    this.Ic(!0);
};
XI.prototype.Ic = function (a) {
    a = this.post;
    var b = a.token,
            c = a.La(),
            d = a.YY();
    c.sort(XI.Tb);
    a.W3 = XI.EY(c);
    a.Tu = XI.XU(a.W3, b.Xg(), b.Xm());
    a.curveFactor = 0 < a.W3 ? a.Tu / a.W3 : 1;
    for (var e, f = 0; f < c.length; f++)
        (e = c[f]),
                (b = this.XL(e, !0)),
                (b.rshares = parseFloat(e.rshares)),
                void 0 === b.time && void 0 !== e.time && (b.time = e.time),
                (b.amount = d ? D.o.Ia(b.rshares * a.curveFactor) : this.B5(a, b)),
                (e = b.amount / 2),
                (b.JZ = e / D.V.Bn),
                (b.JY = e * D.V.JX),
                (b.Ja = (e * (1 - D.V.JX)) / D.V.Bn),
                (b.Mi = 0);
    this.post.YY() && this.Id();
};
XI.prototype.Id = function () {
    var a = this.post,
            b = a.YR(),
            c = a.token,
            d = a.Et,
            e = b.total_vote_weight ? b.total_vote_weight : 0;
    b = d * c.Xs();
    var f = d * c.Xp();
    c = d ? a.Tu * c.Xp() : 0;
    a.XM() ? (d = c = f = b = 0) : a.Y8() ? (d = c) : ((b += f), (d = c = f = 0));
    for (var g, h, k, l, m = 0; m < this.items.length; m++)
        (g = this.items[m]),
                (h = g.amount * a.factorHBD),
                0 < c && 0 < e && 0 < g.weight && !a.XM() ? ((k = (c * g.weight) / e), (l = D.o.Ib(k)), (d -= k)) : (l = 0),
                (g.Mi = DW(l, 3)),
                (g.JZ = (g.amount - h) / D.V.Bn),
                (g.JY = h * D.V.JX),
                (g.Ja = (h * (1 - D.V.JX)) / D.V.Bn);
    c = Math.max(0, D.o.Ia(d));
    f = Math.max(0, f - c);
    e = Math.max(0, b * a.W8);
    b = Math.max(0, b - e);
    a.Et ? ((k = 100 / a.Et), (g = b ? k * b : 0), (h = f ? k * f : 0), (d = e ? k * e : 0), (k = c ? k * c : 0)) : (k = d = h = g = 0);
    l = b * a.factorHBD;
    a.Dq = b;
    a.D1 = g;
    a.JY = l * D.V.JX;
    a.Ja = (l * (1 - D.V.JX)) / D.V.Bn;
    a.JZ = (b - l) / D.V.Bn;
    a.Mv = f;
    a.N5 = h;
    a.Mi = f / D.V.Bn;
    b = e * a.factorHBD;
    a.Yo = e;
    a.Yp = d;
    a.Mk = b * D.V.JX;
    a.Ml = (b * (1 - D.V.JX)) / D.V.Bn;
    a.Mj = (e - b) / D.V.Bn;
    a.G1 = c;
    a.bj = k;
    a.Mn = a.JY + a.Mk;
    a.Mo = a.Ja + a.Ml;
    a.Mm = a.JZ + a.Mi + a.Mj;
};
XI.Tb = function (a, b) {
    return a.time > b.time ? 1 : a.time < b.time ? -1 : 0;
};
XI.EY = function (a) {
    for (var b = 0, c = 0; c < a.length; c++)
        b += parseFloat(a[c].rshares);
    return b;
};
XI.Tq = function (a) {
    for (var b = 0, c = 0; c < a.length; c++)
        b += parseFloat(a[c].weight ? a[c].weight : 0);
    return b;
};
XI.E1 = function (a, b) {
    for (var c = 0; c < a.length; c++)
        if (a[c].voter == b)
            return a[c];
    return !1;
};
XI.E0 = function (a, b) {
    for (var c = 0, d, e = 0; e < a.length; e++)
        (d = a[e]), b && 0 < d.percent ? c++ : !b && 0 > d.percent && c++;
    return c;
};
XI.XU = function (a, b, c) {
    var d = 0;
    switch (b) {
        case XO:
            a += c;
            d = a * a - content_constant * content_constant;
            break;
        case XP:
            d = 0;
            break;
        case XQ:
            d = a;
            break;
        case XR:
            d = Math.sqrt(a);
            break;
        case XS:
            d = ((a + c) * (a + c) - c * c) / (a + 4 * c);
            break;
        case XT:
            d = a / approx_sqrt(a + 2 * c);
    }
    return d;
};
var XW = function (a) {
    this.steem = a;
    this.posts = [];
    this.queue = [];
};
XW.prototype.reset = function () {
    this.posts = [];
    this.queue = [];
};
XW.prototype.ZF = function (a, b) {
    for (var c = 0; c < this.queue.length; c++)
        if (this.queue[c].permlink == b && this.queue[c].author == a)
            return c;
    return -1;
};
XW.prototype.ZH = function (a, b) {
    a = this.ZF(a, b);
    return -1 < a ? this.queue[a] : null;
};
XW.prototype.ZI = function (a, b) {
    a = {author: a, permlink: b, callbacks: []};
    this.queue.push(a);
    return a;
};
XW.prototype.ZG = function (a, b) {
    a = this.ZF(a, b);
    if (-1 < a) {
        b = this.queue[a];
        var c = this.XZ(b.author, b.permlink);
        if (-1 < c)
            for (var d = 0; d < b.callbacks.length; d++)
                b.callbacks[d](this.posts[c]);
        this.queue.splice(a, 1);
    }
};
XW.prototype.Xb = function (a, b) {
    for (var c, d = [], e = 0; e < this.posts.length; e++)
        (c = this.posts[e]), c.aw() != a || (b && !c.Xd()) || d.push(c);
    return d;
};
XW.prototype.ZJ = function (a, b) {
    for (var c, d = 0, e = 0; e < this.posts.length; e++)
        (c = this.posts[e]), c.aw() != a || !c.YY() || (b && !c.Xd()) || d++;
    return d;
};
XW.prototype.XZ = function (a, b) {
    for (var c, d = 0; d < this.posts.length; d++)
        if (((c = this.posts[d]), c.aw() == a && c.G0() == b))
            return d;
    return -1;
};
XW.prototype.X3 = function (a, b, c, d) {
    var e = this,
            f = this.XZ(a, b),
            g = function (c) {
                f = e.XZ(a, b);
                -1 == f && e.posts.push(c);
                e.ZG(a, b);
            },
            h = function () {
                void 0 !== d && d();
            };
    if (-1 < f)
        c(this.posts[f]);
    else {
        var k = this.ZH(a, b);
        k || (k = this.ZI(a, b));
        k.callbacks.push(c);
        this.steem.Bp(a, b, !1, !0, g, h);
    }
};
XW.prototype.YA = function (a, b, c, d) {
    var e = this,
            f = this.XZ(a, b),
            g = function (d) {
                f = e.XZ(a, b);
                -1 < f && e.posts[f].YS(d.YR(), !0);
                c(d);
            };
    -1 < f ? this.steem.Bp(a, b, !1, !0, g, d) : this.X3(a, b, c, d);
};
XW.prototype.Xa = function (a, b, c, d) {
    this.YA(a, b, c, d);
};
XW.ZN = function (a, b) {
    var c = a.La();
    if (!c.length || (void 0 !== c[0].weight && void 0 !== c[0].time))
        return b();
    D.S.La(
            a.aw(),
            a.G0(),
            function (c) {
                a.ZM(c);
                a.refresh(!0);
                b();
            },
            function () {}
    );
};
var Dm = "#00b700 #2424ff #dbdb00 #ff9244 #2492ff #a2a2a2 #930000 #4a4a4a #db00ee #24ffff #00dd00 #6cb6ef".split(" ");
D.J = {
    Hj: null,
    Lq: "",
    Lr: 0,
    B4: function (a, b) {
        return (a = XI.E1(a, b)) && !a.Jd ? a.amount : 0;
    },
    Ab: function (a) {
        return a < Dm.length ? Dm[a] : T7.Dl();
    },
    Gr: function (a, b, c, d) {
        c = {incoming: a, outgoing: !a, op: [Ay], min_date: moment.utc().subtract(d, "days")};
        for (var e = D.O.getItems(c), f = {Gg: [], Gi: [], Gj: [], KJ: [], Gh: 0, Gd: 0, Ge: 0, Gf: 0}, g = 0; g < e.length; g++)
            if (((c = e[g].data), ((!a && c.voter == D.l) || a) && (b ? 0 < c.weight : 0 > c.weight))) {
                var h = c.weight;
                d = a ? c.voter : c.author;
                var k = f.Gg.indexOf(d);
                f.Gd += h;
                f.Gh++;
                d == D.l && (f.Ge += h);
                -1 == k ? (f.Gg.push(d), f.Gi.push(h), f.Gj.push(1), f.KJ.push([c.permlink])) : ((f.Gf += h), (f.Gi[k] += h), f.Gj[k]++, f.KJ[k].push(c.permlink));
            }
        return f;
    },
    Gp: function (a, b, c, d, e) {
        var f = D.J.Gr(a, b, c, d),
                g = function (d) {
                    for (var g, h, k, l = 0, m = [], n = parseFloat(f.Gd / 1e4), v = 0; v < f.Gg.length; v++) {
                        if (d)
                            for (g = l = 0; g < f.KJ[v].length; g++) {
                                h = a ? D.l : f.Gg[v];
                                k = a ? f.Gg[v] : D.l;
                                var y = parseFloat;
                                a: {
                                    var A = d;
                                    for (var E = f.KJ[v][g], B = 0; B < A.length; B++)
                                        if (A[B].aw() == h && A[B].G0() == E) {
                                            A = D.J.B4(A[B].votes.items, k);
                                            break a;
                                        }
                                    A = 0;
                                }
                                l += y(A);
                            }
                        m.push({name: f.Gg[v], count: f.Gj[v], weight: ((100 / n) * f.Gi[v]) / 1e4, amount: l, links: f.KJ[v]});
                    }
                    aI.Bu(m, c, b || "amount" != c);
                    e(m);
                };
        if ("amount" == c) {
            for (var h, k, l = [], m = 0; m < f.Gg.length; m++)
                for (author = a ? D.l : f.Gg[m], d = 0; d < f.KJ[m].length; d++) {
                    k = !1;
                    for (h = 0; h < l.length; h++)
                        if (l[h].author == author && l[h].permlink == f.KJ[m][d]) {
                            k = !0;
                            break;
                        }
                    k || l.push({author: author, permlink: f.KJ[m][d]});
                }
            D.S.Gt(l, !0, function (a) {
                return g(a);
            });
        } else
            g(0);
    },
    Gc: function () {
        var a;
        var b = 1;
        var c = parseFloat(D.O.Go.Gd / 1e4),
                d = parseFloat(D.O.Go.Ge / 1e4),
                e = D.O.Go.Gh,
                f = D.O.Go.Gg.length;
        if (D.J.Lq && e == D.J.Lr)
            return D.J.Lq;
        d = Bl(0 < d ? (100 / c) * d : 0, 2);
        if (35 <= e) {
            for (a = 0; a < D.O.Go.Gg.length; a++) {
                var g = D.O.Go.Gg[a];
                if (g != D.l) {
                    g = ((100 / c) * D.O.Go.Gi[a]) / 1e4;
                    var h = D.O.Go.Gj[a];
                    var k = g / 5;
                    b = 1 < k ? b - 2.5 * k : b + g;
                    7 > h && (b += 1);
                }
            }
            b = ((((100 - d) / 100) * b) / 1e3) * c;
            0 == d && (b += 1);
            b = "<span>" + Bl(b, 1) + "</span>";
        } else
            b = '<span title="Not enough votes to calculate the CSI.">[ ? ]</span>';
        b += " ( " + d + " % self, " + e + " upvotes, " + f + " accounts, last 7d )";
        D.J.Lq = b;
        D.J.Lr = e;
        return b;
    },
};
D.e = {
    Om: function () {
        var a = D.l,
                b = function (b) {
                    var c = D.p.Vt("HIVE" == b ? VI : IQ),
                            e = $(D.n.get("form_transfer_to_savings", {slider: D.U.ZB(), from_account: a, to_account: a, unit: b})),
                            f = e.find("#savings_amount");
                    D4.JO(e, {
                        title: "Transfer " + b + " To Savings",
                        resizable: !1,
                        width: 408,
                        minHeight: 0,
                        buttons: {
                            Cancel: function () {
                                D4.M5(e);
                            },
                            Ok: function () {
                                var d = D.Q.Kn(f),
                                        h = e.find("#savings_memo").val(),
                                        k = e.find("#savings_to_account").val();
                                k
                                        ? !d || 0 > d || d > c
                                        ? D4.D9("Please enter a valid amount!")
                                        : D.t.DL(F1, !1, !1, function (c) {
                                            D.S.Om(c, a, k, Or(d, 3) + " " + b, h, function (a) {
                                                a && (D4.D9("Transfer done!"), D.C.Fs(), D4.M5(e));
                                            });
                                        })
                                        : D4.D9("Please enter a valid target account!");
                            },
                        },
                    });
                    D.U.Kl(e, f, 0.001, c, c, 3);
                };
        D.p.Vt(VI) && D.p.Vt(IQ)
                ? D4.Os("Transfer To Savings", "Do you want to transfer HIVE or HBD?", ["HIVE", "HBD"], function (a) {
                    b(a);
                })
                : D.p.Vt(VI)
                ? b("HIVE")
                : D.p.Vt(IQ) && b("HBD");
    },
    On: function () {
        var a = D.l,
                b = D.p.Vq(VI),
                c = D.p.Vq(IQ),
                d = function (d) {
                    var e = "HIVE" == d ? b : c,
                            g = $(D.n.get("form_transfer_from_savings", {slider: D.U.ZB(), from_account: a, to_account: a, unit: d})),
                            h = g.find("#savings_amount");
                    D4.JO(g, {
                        title: "Withdraw " + d + " From Savings",
                        resizable: !1,
                        width: 408,
                        minHeight: 0,
                        buttons: {
                            Cancel: function () {
                                D4.M5(g);
                            },
                            Ok: function () {
                                var b = D.Q.Kn(h),
                                        c = g.find("#savings_memo").val(),
                                        f = g.find("#savings_to_account").val(),
                                        n = moment.utc().unix();
                                f
                                        ? !b || 0 > b || b > e
                                        ? D4.D9("Please enter a valid amount!")
                                        : D.t.DL(F1, !1, !1, function (e) {
                                            D.S.On(e, a, f, Or(b, 3) + " " + d, c, n, function (a) {
                                                a && (D4.D9("Withdrawal request started!"), D.C.Fs(), D4.M5(g));
                                            });
                                        })
                                        : D4.D9("Please enter a valid target account!");
                            },
                        },
                    });
                    D.U.Kl(g, h, 0.001, e, e, 3);
                };
        b && c
                ? D4.Os("Withdraw From Savings", "Do you want to withdraw HIVE or HBD?", ["HIVE", "HBD"], function (a) {
                    d(a);
                })
                : b
                ? d("HIVE")
                : c && d("HBD");
    },
};
D.Y = {
    LD: function () {
        var a = moment.utc().unix(),
                b = D.p.Vt(IQ),
                c = $(D.n.get("form_conversion_request", {account: D.l, request_id: a, amount: Bl(b, 3), slider: D.U.ZB()})),
                d = c.find("#conversion_amount");
        D4.JO(c, {
            title: "Convert HBD to HIVE",
            resizable: !1,
            width: 408,
            minHeight: 0,
            buttons: {
                Cancel: function () {
                    return D4.M5(c);
                },
                Ok: function () {
                    var e = D.Q.Kn(d);
                    !e || e > b
                            ? D4.D9("Please enter a valid amount!")
                            : D.t.DL(F1, !1, !1, function (b) {
                                D.S.LF(b, D.l, Or(e, 3) + " HBD", a, function (a) {
                                    a && (D4.D9("Conversion started!"), D.C.Fs(), D4.M5(c));
                                });
                            });
                },
            },
        });
        c.find("#gotoMarket").on("click", function (a) {
            a.preventDefault();
            D4.M5(c);
            D.A.fj("tabAccountOrders");
        });
        D.U.Kl(c, d, 0.001, b, b, 3);
    },
    Ka: function () {
        var a = D.p.XD,
                b = D.p.Vt(a.aP),
                c = D.l,
                d = $(D.n.get("form_powerup", {slider: D.U.ZB(), account: c, symbol: a.Uk})),
                e = d.find("#powerup_amount");
        D4.JO(d, {
            title: "Power Up",
            resizable: !1,
            width: 408,
            minHeight: 0,
            buttons: {
                Cancel: function () {
                    D4.M5(d);
                },
                Ok: function () {
                    var b = D.Q.Kn(e);
                    if (!b || b > D.p.Vz())
                        D4.D9("Please enter a valid amount!");
                    else {
                        var g = function (a) {
                            a && (D4.D9("Power Up done!"), D.C.Fs(), D4.M5(d));
                        };
                        D.t.DL(F1, !1, !1, function (d) {
                            a.X9() ? D.S.FS(d, c, c, Or(b, 3) + " HIVE", g) : a.Uz == VH && D.H.stake(d, c, c, a.Uk, Or(b, a.da()), g);
                        });
                    }
                },
            },
        });
        D.U.Kl(d, e, 0.01 * b, b, b, a.da());
    },
    Kk: function () {
        $("#btnPowerDown");
        var a = D.l,
                b = D.p.XD,
                c = D.p.VS(),
                d = $(D.n.get("form_powerdown", {slider: D.U.ZB(), account: a, symbol: b.Uk})),
                e = d.find("#powerdown_vests"),
                f = d.find("#powerdown_sp");
        b.X9() || d.find("#row_powerdown_vests").hide();
        e.on("change", function () {
            var a = D.Q.Kn(e);
            f.val(Bl(b.U1(a), b.da()));
        });
        f.on("change", function () {
            var a = D.Q.Kn(f);
            a = b.U2(a);
            a > c && (a = c);
            isNaN(a) || e.val(Bl(a, b.dZ()));
        });
        D4.JO(d, {
            title: "Power Down",
            resizable: !1,
            width: 408,
            minHeight: 0,
            buttons: {
                Cancel: function () {
                    return D4.M5(d);
                },
                Ok: function () {
                    var f = D.Q.Kn(e);
                    if (!f || f > c)
                        D4.D9("Please enter a valid amount!");
                    else {
                        var h = function (a) {
                            a && (D4.D9("Power Down started!"), D.C.Fs(), D4.M5(d));
                        };
                        D.t.DL(F1, !1, !1, function (c) {
                            b.X9() ? D.S.Kd(c, a, Or(f, 6) + " VESTS", !0, h) : b.Uz == VH && D.H.unstake(c, a, b.Uk, Or(b.U1(f), b.dZ()), h);
                        });
                    }
                },
            },
        });
        D.U.Kl(d, e, 0.01 * c, c, c, b.dZ());
    },
    Kc: function (a) {
        var b = D.p.XD,
                c = $("#btnCancelPowerDown"),
                d = Ft.Fh("div", {class: "confirmDialog"}, "Do you really want to cancel the vesting withdrawal?"),
                e = function (a) {
                    a ? (D4.D9("Power Down stopped!"), b.Uz == VH && D.p.Vb(b.aP, 0), D.C.Fs()) : aH.NE(c, !0);
                },
                f = function (d) {
                    aH.NE(c, !1);
                    if (b.X9())
                        D.S.Kd(d, D.l, "0.000000 VESTS", a, e);
                    else if (b.Uz == VH) {
                        var f = D.p.Ie(b.aP);
                        f && D.H.cancelUnstake(d, D.l, f, e);
                    }
                };
        D4.Mg("Confirm Cancel Power Down", d, function () {
            return D.t.DL(F1, !1, !1, f);
        });
    },
    K9: function (a, b) {
        var c = 0;
        $("#editRoutes")
                .find("tr")
                .each(function () {
                    var a = $(this).data("obj");
                    a && (c += a.percent);
                });
        var d = 1e4 - c;
        if (a) {
            if (!d) {
                D4.D9("The total percentage of all withdraw routes is already 100%!");
                return;
            }
            var e = "";
            b = d;
            var f = !1;
        } else
            (f = b.data("obj")), (e = f.to_account), (b = f.percent), (f = f.auto_vest), (d += b);
        var g = $(D.n.get("form_edit_withdraw_route", {from: D.l, to: e, percent: b / 100, slider: D.U.ZB()}));
        g.find("#route_to").prop("disabled", !a);
        g.find("#route_auto_vest").prop("checked", f);
        D4.JO(g, {
            title: (a ? "Add" : "Edit") + " Route",
            resizable: !1,
            width: 408,
            minHeight: 0,
            buttons: {
                Cancel: function () {
                    return D4.M5(g);
                },
                Ok: function () {
                    var a = g.find("#route_to").val(),
                            b = 100 * D.Q.Kn(g.find("#route_percent")),
                            c = g.find("#route_auto_vest").is(":checked");
                    if (a)
                        if (0 > b)
                            D4.D9("Please enter a valid percentage!");
                        else if (b > d)
                            D4.D9("The total percentage of all withdraw routes exceeds 100%!");
                        else {
                            var e = function (a) {
                                a &&
                                        (D4.D9("Route saved!"),
                                                D.C.Fs(),
                                                D4.M5(g),
                                                D4.M5($("#editRoutes")),
                                                setTimeout(function () {
                                                    return D.Y.Kf("outgoing");
                                                }, 1e3));
                            };
                            D.t.DL(F1, !1, !1, function (d) {
                                D.S.LM(d, D.l, a, b, c, e);
                            });
                        }
                    else
                        D4.D9("Please enter a target account!");
                },
            },
        });
        a = g.find("#route_percent");
        D.U.Kl(g, a, 0, d / 100, b / 100, 2);
        a.val(Bl(b / 100, 2));
    },
    Kf: function (a) {
        D.S.Kp(D.l, a, function (b) {
            var c = "incoming" == a,
                    d = [];
            d.push((c ? "From" : "To") + " Account");
            d.push("Percentage");
            d.push("Receive Vests");
            c || d.push("");
            for (var e = Ft.be("dataTable autoWidthCols notBold").append(Ft.Fj("th", d)), f = 0; f < b.length; f++) {
                var g = b[f];
                d = [];
                d.push(ak.ET(c ? g.from_account : g.to_account, !1, !0));
                d.push(g.percent / 100 + " %");
                d.push('<input class="isAutoVest" type="checkbox"' + (g.auto_vest ? " checked" : "") + " disabled>");
                c || d.push(Ft.Fh("button", {class: "editWithdrawRoute", title: "Edit Route"}, "Edit..."));
                e.append(Ft.Fj("td", d).data("obj", g));
            }
            var h = Ft.R4("", "editRoutes").append(e);
            h.find(".editWithdrawRoute")
                    .button()
                    .on("click", function () {
                        D.Y.K9(!1, $(this).parents("tr"));
                    });
            b = [
                {
                    id: "btnClose",
                    text: "Close",
                    click: function () {
                        D4.M5(h);
                    },
                },
            ];
            c ||
                    b.push({
                        id: "addWithdrawRoute",
                        text: "Add Route...",
                        click: function () {
                            D.Y.K9(!0);
                        },
                    });
            D4.JO(h, {title: T7.DR(a) + " Withdraw Routes", resizable: !0, width: 650, height: 400, minHeight: 0, buttons: b});
            h.css("padding-top", "5px !important");
        });
    },
};
D.W = {
    Fx: function (a) {
        return -1 < D.p.Fw.indexOf(a);
    },
    Ou: function (a, b) {
        D.t.DL(
                F1,
                !1,
                !1,
                function (c) {
                    D.S.Fv(c, D.l, a, !0, function (c) {
                        c && (D.p.Fw.push(a), D4.D9("Voted for Witness @" + a + "!"));
                        b(c);
                    });
                },
                function () {
                    b(!1);
                }
        );
    },
    Fy: function (a, b) {
        D.t.DL(
                F1,
                !1,
                !1,
                function (c) {
                    D.S.Fv(c, D.l, a, !1, function (c) {
                        c = D.p.Fw.indexOf(a);
                        -1 < c && D.p.Fw.splice(c, 1);
                        D4.D9("Witness Vote for @" + a + " removed!");
                        b(!0);
                    });
                },
                function () {
                    b(!1);
                }
        );
    },
    KZ: function () {
        D4.AX({title: "Proxy Account Name:", allowEmpty: !0}, function (a) {
            D.t.DL(F1, !1, !0, function (b) {
                D.S.F0(b, D.l, a, function (a) {
                    a && (D.C.Fs(), D4.D9("Proxy changed!"));
                });
            });
        });
    },
    jF: function () {
        -1 == D.p.jG &&
                D.S.jF(D.l, function (a) {
                    D.p.jG = a;
                    D.A.refresh();
                });
    },
    ky: function () {
        if (D.p.J6()) {
            var a = D.p.bN(),
                    b = a.signing_key;
            if (b) {
                var c = function (a) {
                    a && (D4.D9("Signing Key successfully changed!"), (D.V.EE = !0), D.C.Fs());
                };
                D4.AX({width: "600px", id: "dialogChangeSigningKey", title: "New Signing Key:", bY: b, autoFillButton: {text: "Disable Witness", value: Mh}}, function (d) {
                    d == Mh || D.S.MN(d)
                            ? b == d
                            ? D4.D9("The new Signing Key equals your current Signing Key!")
                            : D.t.DL(F1, !1, !1, function (b) {
                                D.S.k1(b, D.l, a.url, d, a.props, "0.000 HIVE", c);
                            })
                            : D4.D9("The new Signing Key has an invalid format!");
                });
            }
        }
    },
};
var UI_Home = function (a) {
    aH.mB(
            "styleHome",
            "\n .mainMenuLink {\n display: flex;\n flex-direction: column;\n float: left;\n margin: 20px 5px 20px 45px;\n text-align: center;\n }\n .mainMenuLink img {\n width : 132px;\n height : 132px;\n margin : 0 0 6px 0;\n }\n "
            );
    this.AI(a);
};
UI_Home.dN = function (a, b, c, d) {
    a.bf(bi);
    var e = a.eZ("Home", "Hive Blockchain Tools").am();
    a.ar(c + "Hive Blockchain Tools");
    a.bF(function () {
        d(function () {
            new UI_Home(e);
        });
    });
    a.bG();
};
UI_Home.prototype.AI = function (a) {
    a.empty().css("padding", "5px 0 25px 0");
    var b = D.s.kQ(),
            c = function (c, d, g) {
                var e = Ft.R5(d, c, {class: "mainMenuLink"}).on("click", function (a) {
                    a.preventDefault();
                    D.s.DQ(d, a.ctrlKey || b);
                });
                c = Ft.GB("img", {src: "res/img/menu/" + g, alt: c});
                e.prepend(c);
                a.append(e);
            },
            d = D.X.get(Jk);
    d = D.l ? D.l : d ? d : "fernandosoder";
    b || c("Dashboard", "/@" + d, "dashboard.png");
    c("Witness Overview", "/witnesses", "witnesses.png");
    c("Block Explorer", "/block-explorer", "block-explorer.png");
    c("Delegation History", "/delegation-history", "delegation-history.png");
    c("Transfer Search", "/transfer-search", "transfer-search.png");
    c("Account Creator", "/account-creator", "account-creator.png");
    c("Account Auths", "/account-authorities", "account-authorities.png");
    c("Account Recovery", "/account-recovery", "account-recovery.png");
    c("Key Generator", "/key-generator", "key-generator.png");
    c("Change Password", "/change-password", "change-password.png");
    c("Copy Votes", "/copy-votes", "copy-votes.png");
    c("Manual Vote", "/manual-vote", "manual-vote.png");
    c("Abuse Finder", "/abuse-finder", "abuse-finder.png");
    c("Proxy Info", "/proxy-info", "proxy-info.png");
    c("Witness Schedule", "/witness-schedule", "witness-schedule.png");
    c("Seed Nodes Check", "/seed-nodes-check", "seed-nodes-check.png");
};
var Ks = function (a, b) {
    this.account = a;
    this.token = b;
    this.div = this.Cy(b);
};
Ks.prototype.Cy = function (a) {
    var b = this,
            c = this.account.Vt(a.aP),
            d = Ft.R4(),
            e = Ft.be("dataTable smallSize mbNone"),
            f = Ft.R4("dialogForm", "", e);
    this.inputFrom = Ft.GB("input", {id: "inputTransferFrom", type: "text", disabled: "", value: D.l});
    this.inputTo = Ft.GB("input", {id: "inputTransferTo", type: "text"});
    this.hJ = new gt({
        id: "selectTransferMode",
        width: "100%",
        items: [
            {value: "balance", text: "To Balance"},
            {value: "vesting", text: "To Vesting (" + a.WC() + ")"},
        ],
        eI: function (a) {
            b.inputMemo.prop("disabled", "vesting" == a);
            b.e5.e8("vesting" != a);
            "vesting" == a && (b.inputMemo.val(""), b.e5.fA(!1));
        },
    }).e8(a.Uz != VG || a.X9());
    this.inputToken = Ft.GB("input", {id: "inputTransferToken", type: "text", disabled: "", value: a.Uk});
    this.inputAmount = Ft.GB("input", {id: "inputTransferAmount", type: "text"});
    this.inputMemo = Ft.GB("textarea", {id: "inputTransferMemo"}).on("change", function () {
        var a = b.inputMemo.val().trim();
        b.e5.e9() ||
                "#" != a.substr(0, 1) ||
                D4.EB(
                        "Confirm Encryption",
                        "Do you want to encrypt the memo of this transfer?",
                        function () {
                            b.inputMemo.val(a.substr(1, a.length - 1).trim());
                            b.e5.fA(!0);
                        },
                        function () {}
                );
    });
    this.e5 = new eL({id: "inputTransferEncryptMemo", width: "32px", padding: "5px 0"});
    this.btnExec = Ft.GB("button", {id: "btnTransferExecute"}, "Transfer");
    this.btnUseAvailableAmount = Ft.GB("button", {id: "btnTransferUseAvailableAmount"}, "<<&nbsp;&nbsp;Available Amount");
    e.append(
            Ft.Fj("td", ["From Account", this.inputFrom]),
            Ft.Fj("td", ["To Account", this.inputTo]),
            Ft.Fj("td", ["Mode", this.hJ.an()]),
            Ft.Fj("td", ["Token", this.inputToken]),
            Ft.Fj("td", ["Amount", d]),
            Ft.Fj("td", ["Memo", this.inputMemo]),
            Ft.Fj("td", ["Encrypt Memo", this.e5.an()]),
            Ft.Fj("td", ["", this.btnExec])
            );
    this.inputAmount.css({float: "left", width: "50%"});
    d.append(this.inputAmount, this.btnUseAvailableAmount);
    this.btnUseAvailableAmount
            .css("float", "right")
            .button()
            .on("click", function () {
                b.inputAmount.val(c).trigger("change");
            });
    this.inputMemo.css("width", "100%");
    this.inputAmount.on("change", function () {
        var c = b.inputAmount.val();
        c && ((c = AQ(c)), !c || isNaN(c) ? b.inputAmount.val("") : b.inputAmount.val(Or(c, a.da())));
    });
    this.btnExec
            .css("float", "right")
            .button()
            .on("click", function () {
                return b.NF(a);
            });
    return f;
};
Ks.prototype.an = function () {
    return this.div;
};
Ks.prototype.mH = function () {
    var a = this;
    D4.JO(this.div, {
        title: "Transfer" + (this.token.Uz == VH ? " (Hive-Engine)" : ""),
        width: 600,
        height: "auto",
        resizable: !1,
        open: function (b) {
            a.dlg = b;
        },
    });
};
Ks.prototype.NF = function (a) {
    var b = a.aP,
            c = a.da(),
            d = 1 / (0 < c ? Math.pow(10, c) : 1);
    b = this.account.Vt(b);
    var e = this.inputFrom.val(),
            f = this.inputTo.val().trim(),
            g = this.inputToken.val();
    c = Or(AQ(this.inputAmount.val()), c);
    var h = this.hJ.bt(),
            k = this.inputMemo.val().trim(),
            l = this.e5.e9();
    !c || isNaN(c) || c < d || c > b ? D4.D9("Please enter a valid amount!") : f && h && g && this.Dp(a, e, f, h, g, c, k, l);
};
Ks.prototype.Dp = function (a, b, c, d, e, f, g, h) {
    var k = this,
            l = f + " " + e,
            m = function () {},
            n = function (a) {
                a && (D4.D9("Transfer done!"), D4.M5(k.dlg), D.C.Fs());
            },
            p = function (h) {
                a.Uz == VG ? ("balance" == d ? D.S.FT(h, b, c, l, g, n) : D.S.FS(h, b, c, l, n)) : a.Uz == VH && ("balance" == d ? D.H.transfer(h, b, c, e, f, g, n) : D.H.stake(h, b, c, e, f, n));
            },
            q = function () {
                D.t.DL(F1, !1, !1, p, m);
            },
            r = function () {
                var a = {from: b, to: ak.ET(c), mode: "To " + ("balance" == d ? "Balance" : "Vesting"), amount: l};
                "balance" == d && (a.memo = g);
                a = ak.AN(a, "", !1, !1, !1);
                D4.Mg("Confirm Transfer", a, q, m);
            };
    D.S.aY(
            c,
            function (a) {
                h
                        ? D.t.DL(K8, !0, !0, function (b) {
                            g = NV.encodeMemo(b, a.memo_key, "#" + g);
                            r();
                        })
                        : r();
            },
            function () {
                D4.D9("Account could not be found: " + c);
            }
    );
};
var Wk = function () {
    this.Y1 = this.Fo = !1;
    this.KU = this.Bx = 0;
    this.CK = this.TY = null;
    this.cc = !0;
    this.DN = 0;
    this.h8 = [
        [this.AF, 10, "Loading 'Vesting Fund Data'..."],
        [this.NH, 15, "Loading 'Chain Properties'..."],
        [this.AE, 20, "Loading 'Median Price Data'..."],
        [this.En, 30, "Loading 'Price Ticker'..."],
        [this.Br, 40, "Loading 'Reward Fund Data'..."],
        [D.S.Nq, 45, "Loading 'RC Parameters'..."],
        [D.S.hz, 47, "Loading 'RC Pool'..."],
    ];
};
Wk.prototype.I9 = function () {
    return !(this.Y1 && D.R.J5);
};
Wk.prototype.CI = function () {
    var a = this;
    this.CH();
    this.CK = setInterval(function () {
        a.I9() ? Pn("[!] cancel refresh: still loading sums") : a.Ju();
    }, 1e3 * D.G.get(BS));
};
Wk.prototype.CH = function () {
    this.CK && (clearInterval(this.CK), (this.Fo = !1));
};
Wk.prototype.CL = function (a) {
    a = parseInt(a);
    if (!a || 30 > a)
        a = 30;
    D.G.set(BS, a, !0);
    this.CI();
};
Wk.prototype.Ju = function (a, b, c) {
    var d = this;
    if (this.Fo) {
        var e = this.Bx ? moment().diff(this.Bx, "seconds") : 0;
        if (90 > e) {
            console.log("[!] cancel refresh / diff: " + e);
            return;
        }
    }
    this.Fo = !0;
    this.Bx = moment();
    e = D.Z.Qv.followers.length ? Number(D.Z.Qv.followers[0][0]) : 0;
    var f = D.Z.Qv.mentions.length ? Number(D.Z.Qv.mentions[0][0]) : 0,
            g = function () {
                d.Fo = !1;
                d.Y1 = !0;
                void 0 !== b && b();
            },
            h = function () {
                d.Fo = !1;
                Pn("[!] refresh failed");
                void 0 !== c && c();
            },
            k = function () {
                var b = 0,
                        c = function () {
                            var e = d.h8[b];
                            a && D.s.KV(e[1], e[2]);
                            e[0](
                                    function () {
                                        b++;
                                        try {
                                            b < d.h8.length ? c() : (a && (D.s.KV(50, "Loading 'Account Data'..."), d.OY()), D.l && d.Js(a, g, h));
                                        } catch (e) {
                                            console.log(e);
                                        }
                                    },
                                    function () {
                                        return h();
                                    }
                            );
                        };
                c();
            };
    D.Z.He(
            HU,
            {user: D.l, ids: D.Z.Qt(), last_follow: e, last_mention: f},
            function (a) {
                D.Z.HP = a.data;
                D.Z.C3();
                D.Z.Qu(D.Z.HP.history, "mentions");
                D.Z.Qu(D.Z.HP.history, "followers");
                "none" != D.G.get(Gb) &&
                        setTimeout(function () {
                            return D.N.Hg();
                        }, 5e3);
                k();
            },
            function () {
                k();
                D.A.refresh();
            }
    );
};
Wk.prototype.OY = function () {
    $("#transferFrom,#keyGenAccountName").val(D.l);
    $("head title").text("HiveTasks ~ @" + D.l);
    $("#creatorLink").attr("href", D.G.Y2() + "/@steemchiller");
    $("#createNewAccountMasterKey").val("");
};
Wk.prototype.WJ = function (a, b) {
    var c = a.aP,
            d = AQ(b.quantity),
            e = d - AQ(b.quantityLeft),
            f = D.B.DE(moment.unix(b.nextTransactionTimestamp / 1e3).local());
    D.p.Vb(c, d);
    D.p.Xu(c, e);
    D.p.Vu(c, (d / a.mf) * 7);
    D.p.WE(c, f);
    D.p.YV(c, b.txID);
};
Wk.prototype.WI = function (a) {
    var b = this,
            c = D.p.XD,
            d = function () {
                void 0 !== a && a();
            };
    if (c.Uz != VH)
        d();
    else {
        var e = function () {
            return setTimeout(function () {
                return b.WI(a);
            }, 5e3);
        },
                f = function (a) {
                    a && b.WJ(c, a);
                    d();
                };
        D.H.findOne(
                "market",
                "metrics",
                {symbol: c.Uk},
                function (a) {
                    a ? (c.V6(a.lastPrice), D.p.YU(c.aP) ? D.H.UX(D.l, c.Uk, f, e) : d()) : d();
                },
                e
                );
    }
};
Wk.prototype.aL = function (a) {
    var b = this,
            c = function () {
                void 0 !== a && a();
            },
            d = function () {
                b.cc = !1;
                void 0 !== a && a();
            };
    if (D.p.XD.Uz == VH || this.cc) {
        var e = function (a) {
            var c, e;
            for (e in a) {
                var f = a[e];
                var g = Uf.XJ(VH, e);
                if ((c = D.o.get(g)))
                    (c = c.da() ? Math.pow(10, c.da()) : 1), D.p.Vk(g, "Upvote", f.voting_power, f.last_vote_time), D.p.Vk(g, "Downvote", f.downvoting_power, f.last_downvote_time), D.p.VJ(g, f.pending_token / c);
            }
            b.WI(d);
        },
                f = function (a) {
                    for (var b, d, f = 0; f < a.length; f++)
                        (b = a[f]),
                                (d = Uf.XJ(VH, b.symbol)),
                                D.o.V9(VH, b.symbol, !0),
                                void 0 === b.delegationsOut && ((b.delegationsOut = 0), (b.delegationsIn = 0)),
                                isNaN(b.pendingUnstake) && (b.pendingUnstake = 0),
                                isNaN(b.stake) && (b.stake = 0),
                                D.p.Vr(d, b.balance),
                                D.p.VM(d, AQ(b.stake) + AQ(b.delegationsOut)),
                                D.p.VO(d, b.delegationsOut),
                                D.p.VN(d, b.delegationsIn),
                                D.p.Vb(d, b.pendingUnstake),
                                b.pendingUnstake || (D.p.Xu(d, 0), D.p.WE(d, ""));
                    D.j.Ud(D.l, e, c);
                },
                g = function () {
                    D.H.VD(D.l, "", f, c);
                },
                h = function (a) {
                    if (a)
                        for (var d, e, f = 0; f < a.length; f++)
                            (d = a[f]), (e = D.o.V9(VH, d.symbol, !0)), b.WJ(e, d);
                    D.j.VB(
                            function () {
                                D.A.VA();
                                g();
                            },
                            function () {
                                D.A.VA();
                                c();
                            }
                    );
                };
        D.j.X7 ? g() : D.H.WK(D.l, h, c);
    } else
        d();
};
Wk.prototype.Js = function (a, b, c) {
    var d = this;
    D.G.get(l3) && this.aL();
    var e = function () {
        D.L.refresh();
        D.O.EC(b, c);
        D.d.HA();
        d.J2(!1);
    },
            f = function () {
                a && D.s.KV(90, "Loading 'Account Operations'...");
                D.A.refresh(D.p.getData());
                setTimeout(
                        function () {
                            return D.O.Am(e, c);
                        },
                        a ? 1 : 5e3
                        );
            },
            g = function () {
                a && D.s.KV(85, "Loading 'Follower Data'...");
                d.Jt(a, f, c);
            };
    this.Ae(
            !0,
            a,
            function () {
                a && D.s.KV(75, "Loading 'Account Data'...");
                D.X.get(Jk, "") != D.l && D.X.set(Jk, D.l);
                D.A.Jq();
                D.A.Ax();
                d.DX(a, g, c);
            },
            c
            );
};
Wk.prototype.Ae = function (a, b, c, d) {
    var e = this,
            f = function () {
                b && D.s.KV(70, "Loading 'Account Data'...");
                if (b) {
                    var a = $("#headerRecentPostsTitle");
                    a.text("Loading Posts...");
                    setTimeout(function () {
                        D.P.refresh(function () {
                            return a.text("Posts");
                        });
                    }, 3e3);
                    c();
                } else
                    D.P.refresh(c);
            },
            g = function () {
                e.KY(f, d);
            },
            h = [D.l];
    D.l != Zo && h.push(Zo);
    D.S.Cq(
            h,
            function (a) {
                b && D.s.KV(60, "Loading 'Account Data'...");
                for (var c = 0; c < a.length; c++) {
                    var e = a[c];
                    e.name == D.l && D.p.M3(e, g, d);
                    e.name == Zo && D.o.U3.Zm(e.sbd_balance);
                }
            },
            function (b) {
                b && aI.Qc(b) ? ((D.C.Fo = !1), D.s.KV(0, "Account could not be found!"), a && ((b = b.join(", ")), D4.D9("Accounts (" + b + ") could not be found!"), D.C.AH())) : void 0 !== d && d();
            }
    );
};
Wk.prototype.DX = function (a, b, c) {
    var d = moment();
    if (D.V.Bw && 15 > d.diff(D.V.Bw, "minutes"))
        return b();
    var e = function (a) {
        D.V.FA = a.hf_version;
        D.V.E9 = D.B.DE(moment.utc(a.live_time).local());
        b();
    },
            f = function (b) {
                a && D.s.KV(80, "Loading 'Hardfork Data'...");
                D.V.E8 = b;
                D.S.DJ(e, c);
            },
            g = function (a) {
                D.V.Bw = d;
                D.V.FB = a;
                D.V.E8 ? b() : D.S.DI(f, c);
            },
            h = function (b) {
                a && D.s.KV(60, "Loading 'Witness Data'...");
                D.V.FC = b;
                D.S.Co(g, c);
            };
    D.V.FC ? D.S.Co(g, c) : D.S.Cp(h, c);
};
Wk.prototype.KY = function (a, b) {
    var c = function (b) {
        var c = D.A.getTabs().fO("tabWitnessDetails");
        b ? D.p.aK(b) : ((D.V.EE = !1), D.p.aK(null));
        c[b ? "removeClass" : "addClass"]("qDisabled");
        void 0 !== a && a();
    };
    D.V.EE ? D.S.Di(D.l, c, b) : void 0 !== a && a();
};
Wk.prototype.Jt = function (a, b, c) {
    var d = this,
            e = moment();
    if (!D.l || (this.DN && 3 > e.diff(this.DN, "minutes")))
        return b();
    D.S.Ct(
            D.l,
            function (a) {
                D.F.Hw = a.follower_count;
                D.F.Hx = a.following_count;
                d.DN = e;
                b();
            },
            c
            );
};
Wk.prototype.AE = function (a, b) {
    var c = !1,
            d = function (b) {
                c && D.Z.kP(Hl, b);
                D.V.Bn = AQ(b.base) / AQ(b.quote);
                D.V.JW = D.V.Bn * D.V.G6;
                D.V.JV = (D.V.G5 / D.V.JW) * 100;
                b = D.V.kw;
                var d = D.V.kx;
                D.V.JX = D.V.JV >= d ? 0 : D.V.JV > b ? 1 - ((100 / (d - b)) * (D.V.JV - b)) / 100 : 1;
                a();
            };
    D.Z.Hp(Hl, d, function () {
        c = !0;
        D.S.He("get_current_median_history_price", !0, [], d, b);
    });
};
Wk.prototype.AF = function (a, b) {
    D.S.He(
            "get_dynamic_global_properties",
            !0,
            [],
            function (b) {
                var c = D.o.U3;
                c.X0(b.pending_rewarded_vesting_shares);
                c.Xy(b.pending_rewarded_vesting_steem);
                c.Ui(b.total_vesting_fund_steem);
                c.Uj(b.total_vesting_shares);
                c.Ux();
                D.V.Gz != b.last_irreversible_block_num && (D.V.G2 = moment());
                D.V.Gz = b.last_irreversible_block_num;
                D.V.Tv = b.head_block_number;
                D.V.OW = moment.utc(b.time).local();
                D.V.Gx = b.maximum_block_size;
                D.V.G4 = AQ(b.current_supply);
                D.V.G5 = AQ(b.current_sbd_supply);
                D.V.G6 = AQ(b.virtual_supply);
                D.V.Tp = b.sbd_interest_rate;
                D.V.Tw = b.delegation_return_period;
                D.V.Tx = b.reverse_auction_seconds;
                D.V.Ty = b.current_witness;
                D.V.kv = b.sbd_print_rate / 100;
                D.V.kw = b.sbd_start_percent / 100;
                D.V.kx = b.sbd_stop_percent / 100;
                a();
            },
            b
            );
};
Wk.prototype.Br = function (a, b) {
    var c = !1,
            d = function (b) {
                c && D.Z.kP(Hm, b);
                var d = D.o.U3;
                d.Ug(b.reward_balance);
                d.Xz(b.recent_claims);
                d.Xf(b.author_reward_curve);
                d.Xi(b.curation_reward_curve);
                d.Xl(parseFloat(b.content_constant));
                d.Xo(b.percent_curation_rewards / 1e4);
                d.Xr(1 - b.percent_curation_rewards / 1e4);
                d.Uu();
                a();
            };
    D.Z.Hp(Hm, d, function () {
        c = !0;
        D.S.He("get_reward_fund", !0, ["post"], d, b);
    });
};
Wk.prototype.NH = function (a, b) {
    var c = !1,
            d = function (b) {
                c && D.Z.kP(Ob, b);
                D.V.Mp = b.account_creation_fee;
                D.V.OZ = b.account_subsidy_budget;
                D.V.Oa = b.account_subsidy_decay;
                a(b);
            };
    D.Z.Hp(Ob, d, function () {
        c = !0;
        D.S.Ow("condenser_api", "get_chain_properties", [], d, b);
    });
};
Wk.prototype.En = function (a, b) {
    var c = !1,
            d = function (b) {
                c && D.Z.kP(Hs, b);
                D.V.Eh.Ei = parseFloat(b.lowest_ask);
                D.V.Eh.Ej = parseFloat(b.highest_bid);
                D.V.Eh.Ek = parseFloat(b.percent_change);
                D.V.Eh.El = AQ(b.steem_volume);
                D.V.Eh.Em = AQ(b.sbd_volume);
                a();
            };
    D.Z.Hp(Hs, d, function () {
        c = !0;
        D.S.He("get_ticker", !0, [], d, b);
    });
};
Wk.prototype.J2 = function (a) {
    var b = this;
    MG() ||
            -1 == this.KU ||
            (this.KU && 15 > moment.utc().diff(this.KU, "minutes")) ||
            $.ajax({
                url: MG() ? HT + "download/version/" : FE + "/version/",
                success: function (c) {
                    b.KU = moment.utc();
                    var d = parseInt($("head").data("version")),
                            e = parseInt(c),
                            f = function () {
                                MG() ? aH.DQ(HT + "download/", !0) : window.location.reload(!0);
                            };
                    c = function () {
                        if (-1 != b.KU) {
                            var a = Ft.R4("", "updateHint").append(fv(MG() ? "update_hint_local" : "update_hint", [d, e]));
                            D4.Mg(
                                    "Update available!",
                                    a[0].outerHTML,
                                    function () {
                                        return f();
                                    },
                                    function () {
                                        b.KU = -1;
                                    }
                            );
                        }
                    };
                    d && e && d != e && (a ? f() : setTimeout(c, 15e3));
                },
                error: function () {
                    console.log("Error loading version from server");
                },
            });
};
Wk.prototype.AH = function () {
    var a = this,
            b = {
                width: "400px",
                title: "Hive Account Name:",
                bX: "account_name",
                bZ: D.t.bS(),
                onOpen: function (a) {
                    var b = $("<span/>").css({float: "left", padding: "8px 6px", color: "#aaa"}).text("( + Ctrl: new tab )");
                    a.parents(".ui-dialog").find(".ui-dialog-buttonpane").append(b);
                },
            };
    D4.AX(
            b,
            function (a, b, e) {
                (a = a
                        .trim()
                        .replace("@", "")
                        .replace(/\u2013/g, "-")
                        .toLowerCase()) && D.s.DQ(FE + "/@" + a, void 0 !== e && e.ctrlKey);
            },
            function () {
                D.R.J5 || a.AH();
            }
    );
};
Wk.prototype.Fs = function (a, b, c) {
    var d = this,
            e = function () {
                void 0 !== b && b();
            },
            f = function () {
                void 0 !== c && c();
            };
    setTimeout(
            function () {
                D.s.kQ() ? d.Ju(!1, e, f) : D.s.Ju(e, f);
            },
            void 0 === a ? 3e3 : a
            );
};
var fD = function (a) {
    this.RV = a;
    this.AI(a);
};
fD.prototype.getTabs = function () {
    return this.fe;
};
fD.prototype.AI = function (a) {
    var b = new WO(),
            c = ak.gi({id: "tabsAccountBalances"}).gj([
        {
            id: "tabAccountBalancesMain",
            title: "HIVE",
            gp: function (a) {
                return aH.BV(a.find(".mainTable"), 3e3);
            },
        },
        {
            id: "tabAccountBalancesTokens",
            title: "Tokens",
            content: b.an(),
            go: function () {
                D.G.get(l3) && b.KV("Loading Tokens...");
            },
            gp: function () {
                D.G.get(l3)
                        ? ((D.C.cc = !0),
                                D.C.aL(function () {
                                    return b.XC(D.o, D.p);
                                }))
                        : (D.p.l4(VH), D.o.l4(VH), b.XC(D.o, D.p));
            },
        },
    ]);
    c.fQ().append(D.A.Wc, D.A.bP);
    a.append(c.an());
    this.fe = c;
};
var TL = function (a) {
    aH.mB("styleMarketInfoPairs", "\n #tabMarketInfoPairs table tr:not(.headerRow) td,\n #tabMarketInfoPairs table tr:not(.headerRow) td * {\n font-size: var(--font-size-medium);\n }\n ");
    this.TB = a;
    this.Io = this.bK();
};
TL.prototype.an = function () {
    return this.Io;
};
TL.prototype.bK = function () {
    return Ft.be("dataTable autoWidthCols qNoWrap", "", [
        Ft.Fj(
                "th",
                [
                    {html: "Pair", attr: {"data-sort-col": "id", "data-sort-asc": "1"}},
                    {html: "Change", attr: {"data-sort-col": "change", "data-sort-asc": "1"}},
                    {html: "Price", attr: {"data-sort-col": "last-price", "data-sort-asc": "1"}},
                    {html: "Open", attr: {"data-sort-col": "open-price", "data-sort-asc": "1"}},
                    {html: "Low", attr: {"data-sort-col": "low-price", "data-sort-asc": "1"}},
                    {html: "High", attr: {"data-sort-col": "high-price", "data-sort-asc": "1"}},
                    {html: "Volume", attr: {"data-sort-col": "volume", "data-sort-asc": "1"}},
                ],
                {class: "headerRow"}
        ),
        Ft.Fj("th", [{html: '<input type="text" value="" placeholder="Filter...">', attr: {colspan: "7", "data-filter-cols": "id"}}], {class: "headerRow filterRow"}),
    ]);
};
TL.prototype.XC = function () {
    var a = this.TB.Sv(),
            b = this.Io,
            c = [],
            d = ["BTCNGN", "BTCIDRT", "BTCBKRW"];
    Ft.gT(b);
    for (var e, f, g, h = 0; h < a.length; h++)
        (e = a[h]),
                !e.S0() ||
                -1 < d.indexOf(e.dd()) ||
                ((f = e.S8()),
                        (f = 1e9 < f ? Bl(f / 1e9, 1) + " B" : 1e6 < f ? Bl(f / 1e6, 1) + " M" : Bl(f / 1e3, 1) + " K"),
                        (g = e.TA()),
                        (g = Ft.Fh("span", {class: 0 <= g ? "numPositive" : "numNegative"}, (0 <= g ? "+" : "-") + T7.LJ() + Bl(g * (0 <= g ? 1 : -1), 2) + " %")),
                        c.push(
                                Ft.Fj("td", [e.dd(), g, Bl(e.S0(), 7), Bl(e.S2(), 7), Bl(e.S4(), 7), Bl(e.S6(), 7), f], {
                                    "data-id": e.dd(),
                                    "data-change": e.TA(),
                                    "data-last-price": e.S0(),
                                    "data-open-price": e.S2(),
                                    "data-low-price": e.S4(),
                                    "data-high-price": e.S6(),
                                    "data-volume": e.S8(),
                                })
                                ));
    b.append(c);
    b7.LA(b, "id");
    b7.Jw(b);
};
var XF = function (a) {
    this.account = a;
    this.JA = this.EX = this.EW = !1;
};
XF.prototype.AI = function (a) {
    var b = this,
            c = function () {
                return b.LW();
            };
    a = ak
            .gi({id: "tabsDelegations"})
            .gj([
                {id: "tabIncomingDelegations", title: "Incoming", gp: c},
                {id: "tabOutgoingDelegations", title: "Outgoing", gp: c},
                {id: "tabExpiringDelegations", title: "Expiring", gp: c},
            ])
            .appendTo(a);
    c = Ft.R7("tabsButtonRight", "btnAddDelegation", "Delegate...", "", function () {
        return b.F7(b.account.XD, "", 0);
    });
    a.fQ().append(c);
    this.fe = a;
    this.tabIncomingDelegations = a.fX(0);
    this.tabOutgoingDelegations = a.fX(1);
    this.tabExpiringDelegations = a.fX(2);
    this.mc();
};
XF.prototype.mc = function () {
    var a = this.tabIncomingDelegations.empty();
    new b7({
        id: "tableIncomingDelegations",
        class: "delegationsTable dataTable notBold",
        headers: ["Delegator", "Amount", "Vesting Shares", "Delegation Time"],
        widths: ["28%", "18%", "24%", "30%"],
        aligns: ["L", "R", "R", "R"],
        sortCols: ["account", "vests", "vests", "date"],
        sortDirs: ["A", "A", "A", "D"],
    })
            .cE(4, "0 50px 0 0")
            .appendTo(a);
    a = this.tabOutgoingDelegations.empty();
    new b7({
        id: "tableOutgoingDelegations",
        class: "delegationsTable dataTable notBold",
        headers: "Delegatee;Amount;Vesting Shares;Delegation Time;;".split(";"),
        widths: "28% 20% 25% 25%  ".split(" "),
        aligns: "LRRRCC".split(""),
        sortCols: "account vests vests date  ".split(" "),
        sortDirs: "A A A D  ".split(" "),
    })
            .cE(4, "0 20px 0 0")
            .cE(5, "0 5px")
            .cE(6, "0 5px")
            .appendTo(a);
    a = this.tabExpiringDelegations.empty();
    new b7({
        id: "tableExpiringDelegations",
        class: "delegationsTable dataTable notBold",
        headers: ["Delegator", "Amount", "Vesting Shares", "Expiration Time"],
        widths: ["28%", "18%", "24%", "30%"],
        aligns: ["L", "R", "R", "R"],
        sortCols: ["account", "vests", "vests", "date"],
        sortDirs: ["A", "A", "A", "A"],
    })
            .cE(4, "0 50px 0 0")
            .appendTo(a);
};
XF.prototype.dY = function (a, b) {
    for (var c = [], d, e, f = 0; f < a.length; f++)
        (d = a[f]),
                (e = d.updated ? d.updated : d.created ? d.created : d.completeTimestamp),
                (e = moment
                        .unix(e / 1e3)
                        .utc()
                        .format(KR)),
                (d = {delegator: d.from ? d.from : d.account, delegatee: d.to, vesting_shares: d.quantity}),
                (d[b] = e),
                c.push(d);
    return c;
};