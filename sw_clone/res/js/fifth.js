
XF.prototype.gl = function () {
    var a = this.fe.an().find(".delegationsTable");
    Ft.fU(a, "Loading...");
};
XF.prototype.Af = function (a, b, c, d) {
    for (
            var e = this,
            f = [],
            g = a.WC(),
            h = function () {
                var b = $(this).parents("tr");
                e.F7(a, b.data("account"), b.data("vests"));
            },
            k = function () {
                var b = $(this).parents("tr");
                e.Mf(a, b.data("account"), b.data("vests"));
            },
            l,
            m,
            n,
            p,
            q = 0;
            q < c.length;
            q++
            )
        (l = c[q]),
                (m = AQ(l.vesting_shares)),
                (n = a.U1(m, a.da())),
                (p = l[d ? "delegatee" : "delegator"]),
                (l = D.B.CG(l.min_delegation_time)),
                (n = [ak.EU(p), Bl(n, 3) + " " + g, Bl((m / 1e6).toFixed(3), 3) + " MVests", D.B.DE(l, !1)]),
                (m = [p, m, m, l.unix()]),
                d && n.push(Ft.R7("editDelegation", "", "Edit...", "Edit delegation...", h), Ft.R7("removeDelegation", "", "X", "Remove delegation...", k)),
                f.push([n, m]);
    g = g8(b);
    c.length ? g.b9(f) : g.cB("No " + (d ? "outgoing" : "incoming") + " delegations found.");
    b7.LA(b, "account");
};
XF.prototype.Ag = function (a, b) {
    var c = this;
    if (!((b && this.EW) || (!b && this.EX))) {
        this.gl();
        var d = function (a) {
            c.fe.gZ(b ? "tabIncomingDelegations" : "tabOutgoingDelegations", (b ? "Incoming" : "Outgoing") + " (" + a + ")");
        },
                e = $(b ? "#tableIncomingDelegations" : "#tableOutgoingDelegations");
        if (b) {
            this.EW = !0;
            var f = function (b) {
                c.Af(a, e, b, !1);
                c.EW = !1;
                d(b.length);
            },
                    g = function (a) {
                        for (var b = [], c, d = 0; d < a.rows.length; d++)
                            (c = a.rows[d]),
                                    b.push({
                                        delegator: c[0],
                                        vesting_shares: c[1],
                                        min_delegation_time: moment
                                                .unix(Number(c[2]) + HM)
                                                .utc()
                                                .format(KR),
                                    });
                        f(b);
                    },
                    h = function (a) {
                        a = c.dY(a, "min_delegation_time");
                        f(a);
                    },
                    k = function () {
                        c.EW = !1;
                    };
            a.X9() ? D.Z.He(HY, {user: D.l}, g, k) : a.dX() && D.H.VC(D.l, a.Uk, "IN", h, k);
        } else {
            this.EX = !0;
            var l = function (b) {
                c.Af(a, e, b, !0);
                c.EX = !1;
                d(b.length);
            };
            g = function (a) {
                a = c.dY(a, "min_delegation_time");
                l(a);
            };
            h = function () {
                c.EX = !1;
            };
            a.X9() ? D.S.XH(D.l, l, h) : a.dX() && D.H.VC(D.l, a.Uk, "OUT", g, h);
        }
    }
};
XF.prototype.JB = function (a) {
    var b = this;
    if (!this.JA) {
        this.JA = !0;
        this.gl();
        var c = a.da(),
                d = a.WC(),
                e = $("#tableExpiringDelegations"),
                f = function (f) {
                    for (var g = [], h = f.length, k, p, q, r, t = 0; t < h; t++)
                        (k = f[t]), (p = AQ(k.vesting_shares)), (q = k.delegator), (r = D.B.CG(k.expiration)), (k = [ak.EU(q), Bl(a.U1(p), c) + " " + d, Bl(p / 1e6, 3) + " MVests", D.B.DE(r, !1)]), (p = [q, p, p, r.unix()]), g.push([k, p]);
                    f = g8(e);
                    g.length ? f.b9(g) : f.cB("No expiring delegations found.");
                    b.fe.gZ("tabExpiringDelegations", "Expiring (" + h + ")");
                    b.JA = !1;
                    b7.LA(e, "date");
                },
                g = function (a) {
                    a = b.dY(a, "expiration");
                    f(a);
                },
                h = function () {
                    b.JA = !1;
                };
        a.X9() ? D.S.XG(D.l, f, h) : a.dX() && D.H.VE(D.l, a.Uk, g, h);
    }
};
XF.prototype.F7 = function (a, b, c) {
    var d = this,
            e = this,
            f = a.WC(),
            g = a.da(),
            h = a.dZ(),
            k = D.p.VR(a.aP) + c,
            l = a.U1(k, g),
            m = this.dV(a, {from_account: D.l, available_tokens: Bl(l, g), to_account: b, amount_vests: Bl(c, h), amount_tokens: Bl(a.U1(c), g)}),
            n = m.find("#deleg_from_account"),
            p = m.find("#deleg_to_account"),
            q = m.find("#deleg_amount_tokens"),
            r = m.find("#deleg_amount_vests"),
            t = m.find("#deleg_available_tokens");
    p.val() || (p.prop("disabled", !1), p.focus());
    q.on("input", function () {
        var b = D.Q.Kn(q);
        isNaN(b) ? (b = 0) : !isNaN(b) && 0 > b && ((b *= -1), q.val(b));
        b = a.U2(b);
        0 <= b && r.val(Bl(b, h));
    });
    p.on("change", function () {
        var b = $(this).val().replace("@", ""),
                c = D.p.VR(a.aP);
        c = a.U1(c, a.da());
        t.val(Bl(c, a.da()));
        var d = function (c) {
            for (var d, e = 0; e < c.length; e++)
                (d = c[e]), d.delegatee == b && ((d = D.p.VR(a.aP) + AQ(d.vesting_shares)), (d = a.U1(d, a.da())), t.val(Bl(d, a.da())));
        };
        c = function (a) {
            a = e.dY(a);
            d(a);
        };
        var f = function (a) {};
        a.X9() ? D.S.XH(D.l, d, f) : a.dX() && D.H.VC(D.l, a.Uk, "OUT", c, f);
    });
    D4.JO(m, {
        title: 0 < c ? "Edit Delegation" : "Delegate " + f,
        resizable: !1,
        width: 408,
        minHeight: 0,
        buttons: {
            Cancel: function () {
                return D4.M5(m);
            },
            Ok: function () {
                var b = n.val(),
                        e = p.val().replace("@", ""),
                        l = D.Q.Kn(r),
                        t = l ? D.Q.Kn(q) : 0;
                if (e)
                    if (0 > l)
                        D4.D9("Please enter a valid amount!");
                    else if (l > k)
                        D4.D9("You do not have enough " + f + " to delegate this amount!");
                    else {
                        var A = 0 < l ? Bl((100 / k) * l, 2) + "% of your available " + f : "0%";
                        t = d.dW(a, {from: b, to: ak.ET(e), amount: Bl(t, g) + (l ? "" : " (remove delegation)"), percentage: A});
                        var E = function (b) {
                            b &&
                                    (D.C.Fs(),
                                            D4.D9("Delegation updated!"),
                                            D4.M5(m),
                                            setTimeout(
                                                    function () {
                                                        return d.Ag(a, !1);
                                                    },
                                                    a.dX() ? 1e4 : 3e3
                                                    ));
                        },
                                B = function (a) {},
                                C = function (d) {
                                    if (a.X9())
                                        D.S.FU(d, b, e, l.toFixed(h) + " VESTS", E, B);
                                    else if (a.dX())
                                        D.H[0 < l - c ? "delegate" : "undelegate"](d, b, e, a.Uk, Math.abs(l).toFixed(h), E, B);
                                };
                        D4.Mg("Confirm" + (l ? "" : " Remove") + " Delegation", t, function () {
                            return D.t.DL(F1, !1, !1, C);
                        });
                    }
                else
                    D4.D9("There is no target account defined!");
            },
        },
    });
};
XF.prototype.Mf = function (a, b, c) {
    var d = this,
            e = a.dZ(),
            f = function (b) {
                b &&
                        (D.C.Fs(),
                                D4.D9("Delegation removed!"),
                                setTimeout(
                                        function () {
                                            return d.Ag(a, !1);
                                        },
                                        a.dX() ? 1e4 : 3e3
                                        ));
            },
            g = function (a) {},
            h = function (d) {
                a.X9() ? D.S.FU(d, D.l, b, (0).toFixed(e) + " VESTS", f, g) : a.dX() && D.H.undelegate(d, D.l, b, a.Uk, c.toFixed(e), f, g);
            };
    D4.EB("Remove Delegation?", "Do you really want to remove your delegation to '" + b + "' ?", function () {
        return D.t.DL(F1, !1, !1, h);
    });
};
XF.prototype.dV = function (a, b) {
    a = a.WC();
    return Ft.R4("dialogForm").append(
            Ft.be("dataTable").append(
            Ft.Fj("td", ["From Account", Ft.GB("input", {id: "deleg_from_account", type: "text", value: b.from_account, disabled: ""})]),
            Ft.Fj("td", ["Available " + a, Ft.GB("input", {id: "deleg_available_tokens", type: "text", value: b.available_tokens, disabled: ""})]),
            Ft.Fj("td", ["To Account", Ft.GB("input", {id: "deleg_to_account", type: "text", value: b.to_account, disabled: ""})]),
            Ft.Fj("td", ["Amount (Vests)", Ft.GB("input", {id: "deleg_amount_vests", type: "text", value: b.amount_vests, disabled: ""})]),
            Ft.Fj("td", ["Amount (" + a + ")", Ft.GB("input", {id: "deleg_amount_tokens", type: "text", value: b.amount_tokens})])
            )
            );
};
XF.prototype.dW = function (a, b) {
    a = a.WC();
    return Ft.be("dataTable").append(Ft.Fj("td", ["From", b.from]), Ft.Fj("td", ["To", b.to]), Ft.Fj("td", ["Amount (" + a + ")", b.amount]), Ft.Fj("td", ["Amount (%)", b.percentage]));
};
XF.prototype.LW = function () {
    var a = this.account.XD,
            b = this.fe.gk();
    "tabIncomingDelegations" == b ? this.Ag(a, !0) : "tabOutgoingDelegations" == b ? this.Ag(a, !1) : this.JB(a);
};
var fE = function (a) {
    this.RV = a;
    this.AI(a);
};
fE.prototype.AI = function (a) {
    var b = this;
    this.fe = ak
            .gi({
                id: "tabsAccountDetails",
                MI: function (a, d) {
                    "tabAccountAuthorities" == d && b.lP();
                },
            })
            .gj([
                {id: "tabAccountGeneral", title: "Account"},
                {id: "tabAccountProfile", title: "Profile"},
                {id: "tabAccountAuthorities", title: "Authorities"},
                {id: "tabAccountResourceCredits", title: "Resource Credits", gn: "auto"},
                {id: "tabAccountWitnessVotes", title: "Witness Votes", gn: "auto"},
            ])
            .appendTo(a)
            .fW("tabAccountWitnessVotes", Ft.be("dataTable notBold", "tableAccountWitnessVotes"));
};
fE.prototype.lP = function () {
    for (var a = Ft.R4(), b = D.p.aR, c = ["posting", "active", "owner"], d = 0; d < c.length; d++) {
        var e = c[d],
                f = Ft.R4("bigText headerText textBox textBoxPanel bold", "", T7.DR(e)).css("margin", "15px 0 7px 0");
        a.append(f, ak.AN(b[e]));
    }
    this.fe.fW("tabAccountAuthorities", a);
};
var bl = function () {
    this.H3 = this.CT = !1;
    this.Ht = [];
    this.Hu = [];
    this.Hv = [];
    this.Jz = [];
    this.J0 = this.Hx = this.Hw = 0;
    this.J1 = 11;
    this.CS = null;
};
bl.prototype.AI = function (a) {
    var b = this;
    Ft.mB(
            a,
            "\n #filterFollowersName {\n width: 246px;\n margin-left: 12px;\n }\n #filterFollowersMode {\n width: 225px;\n margin-left: 10px;\n }\n #followersNav {\n position: absolute;\n top: 75px;\n right: 19px;\n display: none;\n }\n #tableFollowers tr td:nth-child(1) {\n width: auto !important;\n vertical-align: middle;\n }\n #tableFollowers tr td:nth-child(2) {\n width: 30% !important;\n }\n #tableFollowers tr td:nth-child(3) {\n width: 65% !important;\n padding-top: 5px;\n padding-bottom: 5px;\n }\n #tableFollowers .accOpen span {\n margin-left: 4px;\n }\n "
            );
    var c = Ft.dc("text", "", "filterFollowersName")
            .on("change", function () {
                return b.Jw(0);
            })
            .on("input", function () {
                b.CS && clearTimeout(b.CS);
                b.CS = setTimeout(function () {
                    return b.Jw(0);
                }, 750);
            }),
            d = new gt({
                id: "filterFollowersMode",
                items: [
                    {value: "new_followers", text: "New (last 7 days)"},
                    {value: "follower", text: "Followers"},
                    {value: "following", text: "Following"},
                    {value: "follower_not_following", text: "Followers, not following"},
                    {value: "following_not_follower", text: "Following, not followers"},
                    {value: "ignored", text: "Ignored (muted)"},
                ],
                eI: function () {
                    return b.Jw(0);
                },
            }),
            e = Ft.Fi("span", "right", "", ["Mode:", d.an()]),
            f = Ft.Fi("span", "", "followersNav", [
                Ft.R7("", "btnShowPrevFollowers", "&lt;&lt;", "", function () {
                    return b.kY();
                }),
                Ft.R7("", "btnShowNextFollowers", "&gt;&gt;", "", function () {
                    return b.mb();
                }),
            ]);
    e = Ft.R4("textBox withMarginBottom", "", ["Search By Name:", c, e, f]);
    f = Ft.be("dataTable mainTable notBold", "tableFollowers");
    a.append(e, f);
    this.hJ = d;
    this.hK = c;
};
bl.prototype.Ds = function (a) {
    return -1 < this.Hu.indexOf(a);
};
bl.prototype.Dt = function (a) {
    return -1 < this.Ht.indexOf(a);
};
bl.prototype.Du = function (a) {
    return -1 < this.Hv.indexOf(a);
};
bl.prototype.Dr = function (a, b) {
    return Ft.Fj("td", [ak.DF(a), ak.ET(a, !0, !1, !1) + (b && this.Du(a) ? " (muted)" : ""), b ? '<button class="toggleFollowing">' + (this.Ds(a) ? "Unfollow" : "Follow") + "</button>" : ""], {"data-name": a})[0].outerHTML;
};
bl.prototype.EO = function (a) {
    var b = this,
            c = function () {
                var a = $(this).parents("tr").data("name"),
                        c = !b.Ds(a),
                        f = (c ? "Now" : "No longer") + " following " + a + "!",
                        g = function (d) {
                            d && (D4.D9(f), (D.V.Bw = 0), b.Fn(a, c));
                            aH.NE($(".toggleFollowing"), !0);
                        };
                D.t.DL(F2, !1, !1, function (b) {
                    aH.NE($(".toggleFollowing"), !1);
                    D.S.C8(b, a, c, g);
                });
            };
    a.find(".toggleFollowing").each(function () {
        var a = $(this);
        if (void 0 === a.button("instance"))
            a.button().on("click", c);
    });
};
bl.prototype.Fn = function (a, b) {
    var c = this.Hu.indexOf(a);
    b && -1 == c ? (this.Hu.push(a), this.Hu.sort(), (this.H3 = !0)) : !b && -1 < c && (this.Hu.splice(c, 1), (this.H3 = !0));
    $("#tableFollowers")
            .find("tr[data-name='" + a + "'] .toggleFollowing")
            .text(b ? "Unfollow" : "Follow");
};
bl.prototype.Hh = function (a) {
    -1 == this.Ht.indexOf(a) && (this.Ht.push(a), this.Ht.sort());
};
bl.prototype.Jy = function () {
    var a = this.hJ.bt();
    a = {
        name: this.hK.val().trim().toLowerCase(),
        mode: a,
        modeFollower: "follower" == a,
        modeFollowing: "following" == a,
        bp: "ignored" == a,
        bm: "follower_not_following" == a,
        bn: "following_not_follower" == a,
        bo: "new_followers" == a,
    };
    a.itemsId = a.modeFollower || a.bm ? "Ht" : a.modeFollowing || a.bn ? "Hu" : a.bp ? "Hv" : "";
    return a;
};
bl.prototype.Dv = function (a) {
    var b = this.Jy();
    if (b.bo)
        $("#followersNav").hide(), this.Hd();
    else {
        var c = $("#tableFollowers").hide();
        $("#followersNav").show();
        aH.NE($("#btnShowPrevFollowers,#btnShowNextFollowers"), !0);
        0 >= a && ((a = 0), aH.NE($("#btnShowPrevFollowers"), !1));
        a >= this.Jz.length - 1 && ((a = this.Jz.length - 1), aH.NE($("#btnShowNextFollowers"), !1));
        this.J0 = a;
        var d = Math.min(this.Jz.length, a + this.J1) - 1;
        d == this.Jz.length - 1 && aH.NE($("#btnShowNextFollowers"), !1);
        b = !b.bp;
        var e = "";
        if (0 <= d)
            for (; a <= d; a++)
                e += this.Dr(this.Jz[a], b);
        c.html("<tbody>" + e + "</tbody>");
        this.EO(c);
        c.show();
    }
};
bl.prototype.Hc = function (a, b, c, d) {
    var e = this,
            f = $("#tableFollowers"),
            g = this.Jy();
    d || Ft.gT(f);
    f.find("#showMoreNewFollowers").remove();
    for (var h = "", k, l, m = 0; m < a.length; m++)
        (k = a[m]),
                (l = k[1]),
                this.YC(g, l) &&
                ((k = D.B.DE(moment.unix(Number(k[0]) + HM), !0, !0).split(",")),
                        k[0] != h && (f.append(Ft.Fj("td", [{html: (0 < m || d ? "<br>" : "") + "<strong>" + k[0] + "</strong>", attr: {colspan: 3}}])), (h = k[0])),
                        f.append(Ft.Fj("td", [k[1], ak.EU(l) + (this.Du(l) ? " (muted)" : ""), '<button class="toggleFollowing">' + (this.Ds(l) ? "Unfollow" : "Follow") + "</button>"], {"data-name": l})));
    this.EO(f);
    var n = Ft.GB("button", {}, "Show more...");
    n.button().on("click", function () {
        n.button("disable").button("option", "label", "Loading...");
        e.Hd(b - c, c);
    });
    a = Ft.Fj("td", [{html: "<br>", attr: {colspan: 3}}], {id: "showMoreNewFollowers"});
    a.find("td").append(n);
    f.append(a);
};
bl.prototype.Hd = function (a, b) {
    var c = this;
    if (void 0 === a) {
        a = D.B.HO();
        b = 7;
        var d = !1;
    } else
        d = !0;
    !d && D.Z.HP
            ? this.Hc(D.Z.Qv.followers, a, b, d)
            : D.Z.He(Ha, {user: D.l, start: a, days: b}, function (e) {
                return c.Hc(e.rows, a, b, d);
            });
};
bl.prototype.mb = function () {
    this.Dv(this.J0 + this.J1);
};
bl.prototype.kY = function () {
    this.Dv(this.J0 - this.J1);
};
bl.prototype.YC = function (a, b) {
    return (a.name && b && -1 == b.indexOf(a.name)) || (a.bm && this.Ds(b)) || (a.bn && this.Dt(b)) ? !1 : !0;
};
bl.prototype.Jw = function () {
    if (!this.CT) {
        this.J0 = 0;
        this.Jz = [];
        var a = this.Jy();
        if (!a.bo)
            for (var b = this[a.itemsId], c, d = 0; d < b.length; d++)
                (c = b[d]), this.YC(a, c) && this.Jz.push(c);
        this.Dv(0);
    }
};
bl.prototype.gl = function () {
    $("#tableFollowers").html('<tbody><tr><td colspan="2">Loading...</td></tr></tbody>').show();
};
bl.prototype.CU = function () {
    var a = this;
    if (!this.CT) {
        this.CT = !0;
        this.Hv = [];
        var b = 0 < this.Ht.length,
                c = 0 < this.Hu.length,
                d = function () {
                    D.S.C6(
                            D.l,
                            function (b) {
                                a.Hv = b;
                                a.CT = !1;
                                a.Jw(0);
                            },
                            function (a) {}
                    );
                },
                e = function (c) {
                    c && (a.H3 = !1);
                    if (b) {
                        if (D.Z.HP) {
                            c = D.Z.Qv.followers;
                            for (var e = 0; e < c.length; e++)
                                a.Hh(c[e][1]);
                        }
                        d();
                    } else
                        D.Z.Cv(D.l, function (b) {
                            a.Ht = b;
                            d();
                        });
                };
        this.gl();
        c
                ? e(this.H3)
                : D.Z.Cw(D.l, function (b) {
                    a.Hu = b;
                    e(!0);
                });
    }
};
var fC = function () {};
fC.prototype.AI = function (a) {
    aH.mB("styleMarketInfo", "\n #tabsMarketInfo .ui-tabs-nav li {\n width: 170px;\n }\n #tabMarketInfoSteem .dataTable tr td:nth-child(1) {\n width: 27.5%;\n }\n #tabMarketInfoSteem .dataTable tr td:nth-child(2) {\n width: 72.5%;\n }\n ");
    var b = new TL(D.TB),
            c = new TM(D.TC);
    ak.gi({id: "tabsMarketInfo"})
            .gj([
                {id: "tabMarketInfoSteem", title: "HIVE / HBD"},
                {
                    id: "tabMarketInfoPairs",
                    title: "Crypto Pairs",
                    content: b.an(),
                    go: function () {
                        return b.XC();
                    },
                },
                {
                    id: "tabMarketInfoRates",
                    title: "Currency Rates",
                    content: c.an(),
                    go: function () {
                        return c.XC();
                    },
                },
            ])
            .appendTo(a);
};
var bz = function () {};
bz.prototype.AI = function (a) {
    this.table = Ft.be("dataTable autoWidthCols notBold");
    this.table.appendTo(a);
};
bz.prototype.gl = function () {
    Ft.gT(this.table);
};
bz.prototype.HQ = function (a, b, c, d) {
    var e = function () {
        var a = $(this).parents("tr");
        D.M.IN(a.data("author"), a.data("permlink"));
    },
            f = this.table;
    d || this.gl();
    f.find("#showMoreMentions").remove();
    for (var g = "", h, k, l = 0; l < a.length; l++)
        (h = a[l]),
                D.p.TR(h[1]) ||
                ((k = D.B.DE(moment.unix(Number(h[0]) + HM), !0, !0).split(",")),
                        k[0] != g && (f.append(Ft.Fj("td", [{html: (0 < l || d ? "<br>" : "") + "<strong>" + k[0] + "</strong>", attr: {colspan: 5}}])), (g = k[0])),
                        f.append(Ft.Fj("td", [k[1], 1 == h[3] ? "Comment" : "Post", ak.EU(h[1]), ak.bs(h[1], h[2]), Ft.kc("small mentionPreview", "", "", "Preview...", e)], {"data-author": h[1], "data-permlink": h[2]})));
    a.length || f.append(Ft.Fj("td", [{html: "<br><strong>No mentions found ( " + D.B.DD(D.B.Hf(b - c)) + " - " + D.B.DD(D.B.Hf(b)) + " )</strong>", attr: {colspan: 5}}]));
    a = Ft.GB("button", {}, "Show older mentions...");
    a.button().on("click", function () {
        aH.NE($(this), !1);
        $(this).button("option", "label", "Loading...");
        D.M.HR(b - c, c);
    });
    d = Ft.Fj("td", [{html: "<br>", attr: {colspan: 4}}], {id: "showMoreMentions"});
    d.find("td").append(a);
    f.append(d);
};
bz.prototype.HR = function (a, b) {
    if (void 0 === a) {
        a = D.B.HO();
        b = 7;
        var c = !1;
    } else
        c = !0;
    !c && D.Z.HP
            ? D.M.HQ(D.Z.Qv.mentions, a, b, c)
            : D.Z.He(HV, {user: D.l, start: a, days: b}, function (d) {
                D.M.HQ(d.rows, a, b, c);
            });
};
bz.prototype.IN = function (a, b) {
    D.S.H9(a, b, !0, function (c) {
        for (
                var d = 0,
                e = "@" + D.l,
                f = [],
                g = new RegExp(e, "gi"),
                h = aJ
                .GT(c.title + " " + c.body, 0)
                .replace(/(?:<hr>)+/g, " ")
                .replace(/\*{3,}/g, "")
                .replace(/#{1,}/g, "")
                .replace(/`+/g, ""),
                k = h.toLowerCase();
                ;
                ) {
            d = k.indexOf(e, d);
            if (-1 == d)
                if (f.length || "@" != e.substr(0, 1))
                    break;
                else {
                    e = e.substr(1, e.length - 1);
                    continue;
                }
            c = h.substr(d - (125 <= d ? 125 : d), e.length + 250);
            c = c.replace(g, ak.bs(a, b, e));
            f.push(c);
            d += e.length + 125;
        }
        f.length ? D4.EA(f.join("<hr>"), "Mention Preview", {width: 750, paddingX: 10, paddingY: 10}) : D4.D9("No mention was found in the post text.");
    });
};
var TM = function (a) {
    aH.mB(
            "styleMarketInfoRates",
            "\n #tabMarketInfoRates table tr th:nth-child(1) {\n width: 20.6%;\n }\n #tabMarketInfoRates table tr th:nth-child(2) {\n width: 50%;\n }\n #tabMarketInfoRates table tr th:nth-child(3),\n #tabMarketInfoRates table tr td:nth-child(3),\n #tabMarketInfoPairs table tr th:nth-child(2),\n #tabMarketInfoPairs table tr td:nth-child(2),\n #tabMarketInfoPairs table tr th:nth-child(3),\n #tabMarketInfoPairs table tr td:nth-child(3),\n #tabMarketInfoPairs table tr th:nth-child(4),\n #tabMarketInfoPairs table tr td:nth-child(4),\n #tabMarketInfoPairs table tr th:nth-child(5),\n #tabMarketInfoPairs table tr td:nth-child(5),\n #tabMarketInfoPairs table tr th:nth-child(6),\n #tabMarketInfoPairs table tr td:nth-child(6),\n #tabMarketInfoPairs table tr th:nth-child(7),\n #tabMarketInfoPairs table tr td:nth-child(7) {\n text-align: right;\n }\n "
            );
    this.TC = a;
    this.Io = this.bK();
};
TM.prototype.an = function () {
    return this.Io;
};
TM.prototype.bK = function () {
    return Ft.be("dataTable fixed", "", [
        Ft.Fj(
                "th",
                [
                    {html: "Currency Code", attr: {"data-sort-col": "id", "data-sort-asc": "1"}},
                    {html: "Name", attr: {"data-sort-col": "name", "data-sort-asc": "1"}},
                    {html: "USD Rate", attr: {"data-sort-col": "rate", "data-sort-asc": "1"}},
                ],
                {class: "headerRow"}
        ),
        Ft.Fj("th", [{html: '<input type="text" value="" placeholder="Filter...">', attr: {colspan: "3", "data-filter-cols": "id,name"}}], {class: "headerRow filterRow"}),
    ]);
};
TM.prototype.XC = function () {
    var a = this.TC.Sr("fiat"),
            b = this.Io,
            c = [];
    Ft.gT(b);
    for (var d, e = 0; e < a.length; e++)
        (d = a[e]), c.push(Ft.Fj("td", [d.dd(), d.getName(), Bl(d.Sq(), 6) + T7.LJ() + "$"], {"data-id": d.dd(), "data-name": d.getName(), "data-rate": d.Sq()}));
    b.append(c);
    b7.LA(b, "id");
    b7.Jw(b);
};
var B1 = 0,
        B0 = 1,
        DB = 2,
        Dk = 3,
        J3 = [B1, B0, DB, Dk],
        kp = "cached_rewards",
        kq = "YYYY-MM-DDTHH:00:00",
        kr = 25e4,
        ks = 10,
        b3 = function () {
            this.Aq = !1;
            this.kg = !0;
            this.reset();
        };
b3.prototype.reset = function () {
    this.Eb = this.J5 = !1;
    this.ki = [];
    this.Jv = [];
    this.KM = this.QX = this.KL = this.KN = this.Ef = this.Ee = 0;
    this.Ed = this.Bq();
    this.Ec = this.Bq();
    this.kt = 0;
    this.refresh();
};
b3.prototype.Ac = function (a) {
    for (var b = 0; b < this.Jv.length; b++)
        if (this.Jv[b].date == a)
            return b;
    return -1;
};
b3.prototype.add = function (a, b) {
    var c = this.kh(a, !1);
    if (c) {
        var d = c.type;
        if (b)
            this.J4(this.Ec[d], c);
        else {
            b = D.B.DC(a.ts);
            var e = this.Ac(b);
            -1 < e ? this.J4(this.Jv[e][d], c) : ((e = this.Bq()), this.J4(e[d], c), (e.date = b), (e.ts = a.ts), this.Jv.push(e));
            a = moment.utc(a.timestamp);
            a >= D.O.EH ? (this.J4(this.Ed[d], c), this.J4(this.Ec[d], c)) : !D.R.Eb && a >= D.O.EG && this.J4(this.Ec[d], c);
            this.Aq = !0;
        }
    }
};
b3.prototype.kh = function (a, b) {
    var c = a.data,
            d;
    if (a.op == Az) {
        var e = B0;
        var f = AQ(c.reward);
        c = d = 0;
    } else if (a.op == A3)
        (e = DB), (f = AQ(c.vesting_payout)), (d = AQ(c.sbd_payout)), (c = AQ(c.steem_payout)), (D.V.J7 = !0);
    else if (a.op == A4)
        (e = Dk), (f = AQ(c.vesting_shares)), (c = d = 0);
    else if (a.op == A0)
        (e = B1), (f = AQ(c.vesting_payout)), (d = AQ(c.sbd_payout)), (c = AQ(c.steem_payout));
    else
        return console.log("Reward type '" + a.op + "' not handled!"), null;
    e = {type: e, vests: f, sbd: d, ls: c};
    b && (e.date = a.ts.format(kq));
    return e;
};
b3.prototype.Bq = function () {
    for (var a = {}, b = 0; b < J3.length; b++)
        a[J3[b]] = {Ey: 0, Ez: 0, steemSum: 0};
    return a;
};
b3.prototype.J4 = function (a, b) {
    a.Ey += b.vests;
    a.Ez += b.sbd;
    a.steemSum += b.ls;
};
b3.prototype.kk = function (a, b) {
    a.Ey -= b.vests;
    a.Ez -= b.sbd;
    a.steemSum -= b.ls;
};
b3.prototype.Ea = function (a, b, c) {
    return "Ey" == c ? D.o.AL(a[b][c]) : a[b][c];
};
b3.prototype.kf = function () {
    return kp + "." + D.l;
};
b3.prototype.kj = function (a) {
    for (var b = this.ki, c = 0; c < b.length; c++) {
        var d = b[c];
        if (d.type == a.type && d.date == a.date) {
            d.vests += a.vests;
            d.sbd += a.sbd;
            d.ls += a.ls;
            return;
        }
    }
    b.push(a);
};
b3.prototype.kl = function () {
    for (var a = this.ki, b = moment.utc().subtract(30, "days"), c, d, e = a.length - 1; 0 <= e; e--)
        (c = a[e]), (d = moment.utc(c.date)), d < b && (this.kk(this.Ec[c.type], c), a.splice(e, 1));
};
b3.prototype.kd = function (a, b, c) {
    for (var d = [], e = 0; e < this.ki.length; e++) {
        var f = this.ki[e];
        d.push([f.type, moment.utc(f.date).unix(), f.vests, f.sbd, f.ls]);
    }
    a = JSON.stringify({dateFrom: b.unix(), dateTo: c.unix(), views: a, items: d});
    a.length > kr || D.X.set(this.kf(), a);
};
b3.prototype.ke = function (a, b) {
    a = D.X.get(this.kf());
    if (!a)
        return null;
    if ((a = T7.DU(a)))
        for (a.dateFrom = moment.unix(a.dateFrom).utc(), a.dateTo = moment.unix(a.dateTo).utc(), this.ki = [], b = 0; b < a.items.length; b++) {
            var c = a.items[b];
            if (5 == c.length) {
                var d = moment.unix(c[1]).utc();
                this.ki.push({type: c[0], date: d.format(kq), vests: c[2], sbd: c[3], ls: c[4]});
            }
        }
    return a;
};
b3.prototype.kn = function () {
    var a = D.X.ko("startsWith", kp + "."),
            b = !D.X.get("rewards_reset", 0);
    b && D.X.set("rewards_reset", 1);
    for (var c = [], d, e = 0; e < a.length; e++)
        if (((d = a[e]), b))
            D.X.remove(d);
        else {
            var f = T7.DU(D.X.get(d));
            f && c.push({key: d, views: f.views});
        }
    if (c.length > ks)
        for (
                c.sort(function (a, b) {
                return a.views > b.views ? - 1 : a.views < b.views ? 1 : 0;
                }),
                c.splice(0, ks),
                a = 0;
                a < c.length;
                a++
                )
            D.X.remove(c[a].key);
};
b3.prototype.Bs = function (a) {
    var b = this;
    this.kn();
    this.kt = moment.utc().hour();
    if (!a && D.O.DA())
        (this.Eb = !1), this.refresh();
    else {
        var c = D.l,
                d = D.O.EG,
                e = D.O.EI,
                f = this.kg ? this.ke(d, e) : null;
        a = f && f.dateTo >= d ? f.dateTo : d;
        var g = f ? f.views : 0;
        f = function (a) {
            if (c == D.l) {
                for (var f, h = a.length - 1; 0 <= h; h--)
                    (f = a[h]), f.op == A3 && f.data.benefactor != c && a.splice(h, 1);
                for (f = 0; f < a.length; f++)
                    b.kj(b.kh(a[f], !0));
                for (f = 0; f < b.ki.length; f++)
                    (a = b.ki[f]), b.J4(b.Ec[a.type], a);
                b.kl();
                b.kg && b.kd(g + 1, d, e);
                b.Eb = !0;
                b.refresh();
            }
        };
        var h = [Az, A4, A0, A3],
                k = void 0 !== D.O.Lh ? D.O.Lh : -1,
                l = e.diff(a, "minutes"),
                m = Math.max(1, D.O.Ji.length / 7 / 24 / 60),
                n = Math.max(100, Math.min(1e4, parseInt(m * l)));
        Pn("diff mins", l);
        Pn("estimated new ops", parseInt(m * l));
        Pn("from", a.toString());
        Pn("to", e.toString());
        a.toString() == e.toString() ? (Pn("same date"), f([])) : D.S.Bv(D.l, k, n, a, e, h, !1, f);
    }
};
b3.prototype.refresh = function () {
    var a = this;
    this.Aq = !1;
    var b = D.G.get(GC),
            c = $("#tableRecentRewards");
    aI.Bu(this.Jv, "date", !1);
    this.Jv.length || (c.find("td").html("&nbsp;"), this.Eb || c.find("tr:nth-child(2)").find(".colTitle").text("Loading..."));
    for (
            var d = 0, e, f, g, h, k, l, m, n, p, q = this.Jv.length - 1;
            0 <= q &&
            !((f = this.Jv[q]),
                    (g = D.B.DD(f.ts)),
                    (h = D.o.AL(f[B1].Ey, 3)),
                    (k = D.o.AL(f[B0].Ey, 3)),
                    (l = D.o.AL(f[DB].Ey, 3)),
                    (m = D.o.AL(f[Dk].Ey, 3)),
                    (n = f[B1].Ez),
                    (f = f[B1].steemSum),
                    (e = h + k + l + m),
                    (p = D.Q.GA(n, e + f, b, !1)),
                    g == D.V.E6 ? (g = "Today") : g == D.V.E5 && (g = "Yesterday"),
                    (e = $(c.find("tr")[d + 1])),
                    e.find(".colTitle").text(g),
                    this.TZ(e, ".colCurationHP", k),
                    this.TZ(e, ".colAuthorHP", h),
                    this.TZ(e, ".colAuthorHBD", n),
                    this.TZ(e, ".colAuthorHIVE", f),
                    this.TZ(e, ".colBenefHP", l),
                    this.TZ(e, ".colProducerHP", m),
                    this.TZ(e, ".colSum", p),
                    d++,
                    7 <= d);
            q--
            )
        ;
    e = $("#rowRewardsAll");
    e.find(".colAuthorHP").text(D.B.EQ(this.Ee));
    e.find(".colCurationHP").text(D.B.EQ(this.Ef));
    this.J5
            ? this.EZ(this.Ed, "#rowRewardsWeek")
            : ($("#tableRecentRewards,#tableAllTimeRewards")
                    .find("td")
                    .each(function () {
                        var a = $(this);
                        0 < a.index() && a.text("");
                    }),
                    $("#rowRewardsMonth,#rowRewardsWeek").find(".colCurationHP").text("Loading..."));
    this.Eb
            ? ((b = moment.utc().hour()), this.kt != b && (Pn("hour changed!"), this.kl(!0), (this.kt = b)), this.EZ(this.Ec, "#rowRewardsMonth"))
            : D.O.DA()
            ? ($("#rowRewardsMonth .colCurationHP").text("[ disabled ]"),
                    $("#rowRewardsMonth .colAuthorHP").html('<button id="refreshMonthSum" title="Refresh totals for the last 30 days">Refresh</button>'),
                    $("#refreshMonthSum")
                    .button()
                    .on("click", function () {
                        $("#refreshMonthSum").remove();
                        $("#rowRewardsMonth .colCurationHP").text("Loading...");
                        a.Bs(!0);
                    }))
            : $("#rowRewardsMonth .colCurationHP").text("Loading...");
    $("#rowRewardsWeek .colProducerHP").text(this.J5 ? D.B.EQ(this.Ea(this.Ed, Dk, "Ey")) : "-");
    $("#rowRewardsMonth .colProducerHP").text(this.Eb ? D.B.EQ(this.Ea(this.Ec, Dk, "Ey")) : "-");
    this.J8();
    b = $("#tabAccountStats").find("tr[data-key='voting_csi'] td:nth-child(2)");
    b.length && b.html(D.J.Gc());
};
b3.prototype.J8 = function () {
    $(".colProducerHP")[D.p.J6() ? "show" : "hide"]();
    $(".colBenefHP")[D.V.J7 && !D.p.J6() ? "show" : "hide"]();
};
b3.prototype.TZ = function (a, b, c) {
    a.find(b).text(D.B.EQ(c));
};
b3.prototype.EZ = function (a, b) {
    b = $(b);
    var c = this.Ea(a, B1, "Ey"),
            d = this.Ea(a, B1, "Ez"),
            e = this.Ea(a, B1, "steemSum"),
            f = this.Ea(a, B0, "Ey"),
            g = this.Ea(a, DB, "Ey"),
            h = this.Ea(a, DB, "Ez");
    a = this.Ea(a, Dk, "Ey");
    h = D.Q.GA(d + h, c + f + g + e + a, D.G.get(GC), !1);
    this.TZ(b, ".colCurationHP", f);
    this.TZ(b, ".colAuthorHP", c);
    this.TZ(b, ".colAuthorHBD", d);
    this.TZ(b, ".colAuthorHIVE", e);
    this.TZ(b, ".colBenefHP", g);
    this.TZ(b, ".colProducerHP", a);
    this.TZ(b, ".colSum", h);
};
b3.ig = function () {
    return Ft.Fj("th", [
        {attr: {class: "colTitle"}, html: "Rewards"},
        {attr: {class: "colCurationHP"}, html: "Curation HP"},
        {attr: {class: "colAuthorHP"}, html: "Author HP"},
        {attr: {class: "colAuthorHIVE"}, html: "HIVE"},
        {attr: {class: "colAuthorHBD"}, html: "HBD"},
        {attr: {class: "colBenefHP"}, html: "Benef. HP"},
        {attr: {class: "colProducerHP"}, html: "Prod. HP"},
        {attr: {class: "colSum"}, html: "Total " + D.G.get(GC)},
    ]);
};
b3.ih = function (a, b, c) {
    b = Ft.Fj("td", [
        {attr: {class: "colTitle"}, html: b},
        {attr: {class: "colCurationHP"}, html: c},
        {attr: {class: "colAuthorHP"}},
        {attr: {class: "colAuthorHIVE"}},
        {attr: {class: "colAuthorHBD"}},
        {attr: {class: "colBenefHP"}},
        {attr: {class: "colProducerHP"}},
        {attr: {class: "colSum"}},
    ]);
    a && b.attr("id", a);
    return b;
};
b3.ik = function (a) {
    return Ft.be("dataTable autoWidthCols", a, [b3.ig()]);
};
b3.ij = function () {
    for (
            var a = b3.ik("tableAllTimeRewards"),
            b = [
                ["rowRewardsAll", "All Time"],
                ["rowRewardsMonth", "Last 30 Days"],
                ["rowRewardsWeek", "Last 7 Days"],
            ],
            c = 0;
            c < b.length;
            c++
            )
        a.append(b3.ih(b[c][0], b[c][1], "Loading..."));
    return a;
};
b3.ii = function () {
    for (var a = b3.ik("tableRecentRewards"), b = 0; 7 > b; b++)
        a.append(b3.ih("", 0 == b ? "Loading..." : "&nbsp;", ""));
    return a;
};
var WO = function () {
    aH.mB(
            "styleAccountTokens",
            "\n #tableTokens tr td:nth-child(1) {\n width: 6%;\n padding-bottom: 1px;\n }\n #tableTokens tr th:nth-child(2),\n #tableTokens tr td:nth-child(2) {\n text-align: center;\n width: auto;\n }\n #tableTokens tr td:nth-child(3) {\n width: 20%;\n }\n #tableTokens tr td:nth-child(4) {\n width: 20%;\n }\n #tableTokens tr td:nth-child(5) {\n width: 20%;\n }\n #tableTokens tr td:nth-child(6) {\n width: 19%;\n }\n #tableTokens tr td:nth-child(7) {\n width: 10%;\n }\n #tableTokens tr td:nth-child(4),\n #tableTokens tr th:nth-child(4),\n #tableTokens tr td:nth-child(5),\n #tableTokens tr th:nth-child(5),\n #tableTokens tr td:nth-child(6),\n #tableTokens tr th:nth-child(6),\n #tableTokens tr td:nth-child(7),\n #tableTokens tr th:nth-child(7) {\n text-align: right;\n }\n #tableTokens img {\n width: 28px;\n height: 28px;\n }\n "
            );
    this.fT = this.bK();
};
WO.prototype.an = function () {
    return this.fT;
};
WO.prototype.bK = function () {
    return Ft.be("dataTable", "tableTokens").append(
            Ft.Fj(
                    "th",
                    [
                        "",
                        {attr: {"data-sort-col": "type", "data-sort-asc": "1"}, html: "T"},
                        {attr: {"data-sort-col": "symbol", "data-sort-asc": "1"}, html: "Symbol"},
                        {attr: {"data-sort-col": "balance", "data-sort-asc": "1"}, html: "Balance"},
                        {attr: {"data-sort-col": "staked", "data-sort-asc": "1"}, html: "Staked"},
                        {attr: {"data-sort-col": "rewards", "data-sort-asc": "1"}, html: "Rewards"},
                        {attr: {"data-sort-col": "value", "data-sort-asc": "1"}, html: D.G.get(GC)},
                    ],
                    {class: "headerRow"}
            )
            );
};
WO.prototype.KV = function (a) {
    Ft.fU(this.fT, a);
};
WO.l5 = function () {
    var a = g8("#tabsAccountBalances");
    a && a.fS(0);
};
WO.prototype.XC = function (a, b) {
    var c = this.fT,
            d = D.G.get(GC),
            e = b.aN,
            f = [],
            g = [];
    for (t in e)
        f.push(t);
    f.sort();
    e = function (a, b) {
        return Ft.R5("#", b, {class: "switchToSEToken", title: "Switch to '" + a.WT + "'"}).on("click", function (b) {
            b.preventDefault();
            b = a.aP;
            g8("#switchToken").aM(b);
            D.A.WS(b);
            WO.l5();
        });
    };
    for (var h, k, l, m, n, p, q, r = 0; r < f.length; r++) {
        h = f[r];
        var t = a.get(h);
        if (t.Uz == VH || t.X9())
            if (
                    ((k = t.Uk),
                            (l = 3 > t.da() ? 3 : t.da()),
                            (m = b.Vt(h)),
                            (n = b.V0(h)),
                            (h = b.VK(h)),
                            t.X9() ? ((n = t.U1(n, t.da())), (h += t.U1(b.VK(VT), t.da())), (p = b.Vt(IQ) + b.VK(IQ)), (q = m + n + h)) : ((p = 0), (q = t.V7(m + n + h))),
                            m || n || h)
                    )
                (p = D.Q.GA(p, q, d, !1)),
                        g.push(
                                Ft.Fj("td", [e(t, Ft.Fh("img", {src: t.WP})), t.X9() ? "" : t.Uz, e(t, k), m ? Bl(m, l) : "-", n ? Bl(n, l) : "-", h ? Bl(h, l) : "-", Bl(p, 2)], {
                                    "data-type": t.Uz,
                                    "data-symbol": k,
                                    "data-balance": m,
                                    "data-staked": n,
                                    "data-rewards": h,
                                    "data-value": p,
                                })
                                );
    }
    Ft.gT(this.fT);
    c.append(g);
    b7.LA(c, "type");
    b7.Jw(c);
};
var BX = "a",
        BY = "b",
        BW = "c",
        CC = "d",
        B9 = "d1",
        CB = "d2",
        ip = "d3",
        io = "d4",
        Dj = "e",
        BZ = "f",
        Gv = "g",
        Mq = {a: "tabAccountStats", b: "tabAccountBalances", d: "tabAccountDetails", e: "tabWitnessDetails", f: "tabMarketInfo", g: "tabSystemInfo"},
        Eu = {
            a: "effective_power vote_amount vp_at_100 rc_status lf_1 reputation followers post_count vote_count voting_csi".split(" "),
            b: "account_value lf_1 reward_balance account_balance savings_balance vesting_balance lf_2 vesting_shares received_vesting_shares delegated_vesting_shares lf_3 to_withdraw withdrawn vesting_withdraw_rate next_vesting_withdrawal".split(
                    " "
                    ),
            c: "id name recovery_account reset_account witness_proxy lf_1 actions lf_2 public_keys lf_3 various lf_4 sbd_interest lf_5 savings".split(" "),
            d: "witness_votes owner active posting memo_key json_metadata".split(" "),
            d1: ["sbd_seconds", "sbd_seconds_last_update", "sbd_last_interest_payment"],
            d2: ["mined", "can_vote", "tags_usage", "guest_bloggers", "withdraw_routes"],
            d3: ["savings_sbd_seconds", "savings_sbd_seconds_last_update", "savings_sbd_last_interest_payment", "savings_withdraw_requests"],
            d4: "created last_vote_time last_root_post last_post last_account_update last_account_recovery last_owner_update".split(" "),
            e: "id rank created owner url signing_key total_missed running_version hardfork_version_vote hardfork_time_vote rewards_last_30_days rewards_last_7_days props sbd_exchange_rate last_sbd_exchange_update last_confirmed_block_num last_aslot last_work pow_worker".split(
                    " "
                    ),
            f: "internal_steem_price internal_volume_24h internal_median_price lf_1 external_steem_price external_volume_24h lf_2 lf_small external_sbd_price external_sbd_volume lf_3 current_supply virtual_supply sbd_debt_ratio print_rates lf_4 steem_per_mvests".split(
                    " "
                    ),
            g: "total_vesting_fund total_reward_fund pending_rewards total_sps_fund lf_1 head_block last_irreversible_block last_parsed_block maximum_block_size lf_2 account_count claimable_per_day account_creation_fee lf_3 reverse_auction_time delegation_return_time lf_4 hf_info".split(
                    " "
                    ),
        },
        cC = function (a) {
            this.account = a;
            this.lastData = 0;
            this.Mr = !0;
            this.Fo = !1;
            this.IC = {};
            this.bO = {};
            this.Z9 = "Upvote";
            aH.mB(
                    "styleAccountOverview",
                    "\n #panelTop {\n display: flex;\n flex-flow: row wrap;\n position: relative;\n margin-top: 10px;\n padding: 0 2px;\n border-top-left-radius: 140px;\n }\n #panelTop .dataTable th {\n padding: 4px 7px;\n }\n #accountStatus {\n margin: 15px 0 0 10px;\n }\n #voteAmounts {\n width: 158px;\n }\n #voteAmounts .dataTable {\n margin: 0;\n }\n #voteAmounts .dataTable tr td:nth-child(1) {\n padding-left: 0;\n text-align: right;\n }\n #voteAmounts .dataTable tr td:nth-child(2) {\n padding-left: 7px;\n padding-right: 0;\n text-align: left;\n }\n #voteAmounts .dataTable td {\n white-space: nowrap;\n }\n #voteAmounts .dataTable th {\n text-align: center;\n }\n #steemLinks {\n flex-grow: 1;\n margin-left: 10px !important;\n }\n #voteAmounts,\n #steemLinks {\n height: 250px;\n margin: 8px 16px 12px 12px;\n padding: 5px 0;\n }\n .adMediumRect {\n width: 308px;\n height: 258px;\n margin: 12px 12px 12px 0;\n padding: 0px;\n border-radius: var(--border-radius-small);\n background: #4d79c2;\n box-shadow: var(--table-box-shadow);\n border: 5px solid var(--table-bg);\n }\n .adMediumRect:hover {\n background: #5d89d2;\n\n }\n .adMediumRect .adLink {\n display: inline-block;\n width: 100%;\n height: 240px;\n text-align: center;\n color: #fafafa;\n }\n .adMediumRect .adTitle {\n display: inline-block;\n width: 100%;\n height: 205px;\n font-weight: bold;\n overflow: hidden;\n }\n .adTitle strong {\n color: #8affb6;\n }\n .adMediumRect .adHint {\n display: inline-block;\n width: 100%;\n font-size: 16px;\n line-height: 26px;\n }\n #btnGoHome {\n display: inline-block;\n position: absolute;\n left: -1px;\n top: 3px;\n margin-left: 4px;\n padding: 4px;\n width: 45px;\n height: 45px;\n z-index: 100;\n border-radius: var(--border-radius-big);\n border: 1px solid #e0e0e0;\n cursor: pointer;\n }\n #btnGoHome:hover {\n background-color: #eee;\n border-color: #ccc;\n }\n #btnGoHome img {\n width: 35px;\n height: 35px;\n }\n\n #tabAccountDetails .dataTable.mainTable {\n width: 99.8%;\n }\n #tabAccountStats .dataTable {\n margin-bottom: 15px;\n }\n #tabAccountBalances .dataTable.mainTable {\n margin-bottom: var(--margin-big);\n }\n #tabAccountBalancesMain .numCol {\n min-width: 95px;\n }\n #tabAccountBalancesMain .dataTable tr td:nth-child(1) {\n width: 28%;\n }\n #tabAccountBalancesMain .dataTable tr td:nth-child(2) {\n width: 72%;\n }\n #tabWitnessDetails .dataTable tr td:nth-child(1) {\n width: 32%\n }\n #tabsAccount.qVertical .withMarginTop {\n margin-top: 16px !important;\n }\n #tabsAccount .dataTable {\n border-radius: 0;\n }\n #tabAccountStats .dataTable:nth-child(1) tr td:nth-child(1) {\n width: 22.5%;\n }\n #tabAccountStats .dataTable:nth-child(1) tr td:nth-child(2) {\n width: 77.5%;\n }\n #tableAccountWitnessVotes.dataTable tr td:nth-child(2) {\n width: 49.5%;\n }\n #tabAccountMentions .dataTable tr td:nth-child(3) {\n min-width: 195px;\n }\n #tabAccountMentions .dataTable tr td:nth-child(4) {\n max-width: 405px;\n }\n #tabAccountMentions td {\n vertical-align: top;\n }\n\n .tabBtn {\n position: absolute;\n right: 0;\n height: 30px;\n padding: 0;\n margin: -15px 10px 0 0;\n }\n .tabBtnSmall {\n margin-right: 15px;\n width: 50px;\n }\n .tabsButtonRight {\n float: right;\n width: 184px;\n height: 36px;\n margin-left: 3px;\n border-radius: var(--border-radius-small);\n }\n #switchToken {\n float: right;\n width: 130px;\n margin: -5px -1px 0 4px;\n font-weight: normal;\n }\n #switchAccount {\n float: right;\n width: 183px;\n margin: -5px -7px 0 4px;\n }\n #switchManaType {\n position: absolute;\n z-index: 1;\n left: 123px;\n top: 182px;\n }\n #editRoutes {\n padding-top: 5px !important;\n }\n #editRoutes .editWithdrawRoute {\n padding: 5px 12px;\n }\n #btnClaimRewards,\n #btnTransfer,\n #btnConvertHBD,\n #btnAddToSavings,\n #btnGetFromSavings,\n #btnPowerUp,\n #btnPowerDown,\n #btnCancelPowerDown,\n #btnPowerDownIncomingRoutes,\n #btnPowerDownOutgoingRoutes {\n width: 182px;\n }\n #btnSetRecoveryAccount,\n #btnSetProxy {\n width: 33%;\n }\n #btnSimulateHP,\n #btnSimulateVotePayout,\n #btnShowIncomingVotesDetails,\n #btnShowOutgoingVotesDetails {\n width: 135px;\n }\n #btnChangeSigningKey {\n width: 42%;\n }\n\n .colCurationHP,\n .colAuthorHP,\n .colAuthorHBD,\n .colAuthorHIVE,\n .colBenefHP,\n .colProducerHP,\n .colSum {\n text-align: right !important;\n padding-left: 0 !important;\n }\n .colSum {\n font-weight: bold;\n }\n .colAuthorHBD {\n min-width: 55px;\n }\n #tableAllTimeRewards tr td:nth-child(1) {\n width: 19% !important;\n }\n #refreshMonthSum {\n padding: 0px 10px;\n height: 30px;\n }\n .dataTable tr[data-key='lf_small'] td {\n padding: 1px;\n }\n "
                    );
            this.e0();
            this.g0();
            this.Kt(this.account);
            this.IB(this.account);
        };
cC.dN = function (a, b, c, d) {
    a.bf(1135);
    if (D.G.get(l3)) {
        var e = 0,
                f = function (a) {
                    D.A.VA();
                    a ||
                            (1 == e && D4.D9("Hive-Engine API is not reachable!<br>Will try again in 60 seconds..."),
                                    setTimeout(function () {
                                        return g();
                                    }, 6e4));
                };
        var g = function () {
            e++;
            D.H.Uc(
                    function () {
                        return f(!0);
                    },
                    function () {
                        return f(!1);
                    }
            );
        };
        g();
    }
    setInterval(function () {
        return D.TE.En();
    }, 6e4);
    D.TE.En();
    var h = function () {
        D.U.OF();
        D.C.CL(D.G.get(BS));
        d();
    },
            k = function () {
                Pn("[!] refresh failed, trying again...");
                setTimeout(function () {
                    return l();
                }, 3e3);
            };
    var l = function () {
        D.C.Ju(!0, h, k);
    };
    l();
};
cC.prototype.jj = function () {
    this.II();
    for (
            var a = function (a, b) {
                return a.AI(b);
            },
            b = [this, D.G],
            c = 0;
            c < b.length;
            c++
            )
        b[c].AI(void 0);
    a(D.D, $("#contentAccountOperations"));
    a(D.F, $("#tabAccountFollowers"));
    a(D.c, $("#tabAccountOrders"));
    a(D.M, $("#tabAccountMentions"));
    a(D.E, $("#tabAccountDelegations"));
    a(D.g, $("#tabMarketInfo"));
    D.P.AI(void 0);
    D.U.DV();
};
cC.prototype.AI = function () {
    var a = this,
            b = $("#contentAccount");
    $("#switchAccount")
            .button()
            .on("click", function (a) {
                a.stopPropagation();
                a.preventDefault();
                D.C.AH();
            });
    $("#accountName,#accountFeed,#accountWallet").on("click", function (a) {
        return a.stopPropagation();
    });
    this.fe = b = ak
            .gh({
                id: "tabsAccount",
                height: "580px",
                MI: function (b, c) {
                    return a.MI(b, c);
                },
                fP: function (b, c) {
                    return a.fP(b, c);
                },
            })
            .gj([
                {id: "tabAccountStats", title: "Stats"},
                {id: "tabAccountBalances", title: "Balances"},
                {id: "tabAccountDetails", title: "Account Details"},
                {id: "tabWitnessDetails", title: "Witness Details"},
                {id: "tabAccountDelegations", title: "Delegations", clsTab: "withMarginTop"},
                {id: "tabAccountFollowers", title: "Followers"},
                {id: "tabAccountMentions", title: "Mentions"},
                {id: "tabAccountOrders", title: "Orders"},
                {id: "tabMarketInfo", title: "Market Info", clsTab: "withMarginTop"},
                {id: "tabSystemInfo", title: "System Info"},
                {id: "tabSettings", title: "Settings"},
            ])
            .appendTo(b);
    var c = b.fX(2);
    new fE(c);
    b = b.fX(1);
    this.fi = new fD(b);
    this.fG();
};
cC.prototype.e0 = function () {
    for (
            var a = Ft.GB("aside", {id: "btnGoHome", title: "Go Home..."}, Ft.GB("img", {src: "res/img/home.png", alt: "Home"})).on("click", function (a) {
        a.preventDefault();
        D.s.dO(i0, a.ctrlKey);
    }),
            b = Ft.R4("", "voteAmounts", Ft.be("dataTable autoWidthCols", "", Ft.Fi("tr", "headerRow", "", Ft.GB("th", {colspan: "2"}, "Vote&nbsp;Amounts")))),
            c = "https://d.buzz https://hive.blog https://hive-engine.com https://peakd.com https://d.tube https://hivetasks.com/support".split(" "),
            d = Ft.be("dataTable", "", Ft.Fi("tr", "headerRow", "", Ft.GB("th", {}, "Hive Links"))),
            e = Ft.R4("", "steemLinks", d),
            f = 0;
            f < c.length;
            f++
            ) {
        var g = c[f];
        d.append(Ft.Fj("td", ["..." != g ? Ft.R5(g, g, {target: "_blank"}) : g]));
    }
    c = Ft.R4("", "accountStatus");
    d = Ft.R4("adMediumRect");
    b = Ft.ea("mainPanel clearfix", "panelTop", [c, b, e, d]);
    D.s.cW.prepend(a, b);
};
cC.prototype.g1 = function () {
    var a = function (a, b, e) {
        return Ft.R5("#", e, {id: a, class: "accountLink", target: "_blank", title: b});
    },
            b = T7.LJ(2) + "|" + T7.LJ(2);
    return Ft.R4()
            .append(
                    a("accountName", "Visit Account Blog", "Profile"),
                    b,
                    a("accountFeed", "Visit Account Feed", "Feed"),
                    b,
                    a("accountWallet", "Visit Account Wallet", "Wallet"),
                    Ft.R7("", "switchAccount", "Switch Account..."),
                    Ft.mJ("", "switchToken")
                    )
            .html();
};
cC.prototype.g0 = function () {
    var a = this;
    Ft.ea("mainPanel")
            .attr("data-module", Nc)
            .append(this.ea("Account", this.g1()), this.ea("AccountOperations", "Account Operations"), this.ea("RecentPosts", "Posts"), this.ea("ComingRewards", "Coming Rewards"), this.ea("Tools", "Tools"))
            .appendTo(D.s.cW);
    var b = new gt({
        id: "switchToken",
        menuWidth: "317px",
        menuHeight: "450px",
        items: [{value: VI, text: "HIVE"}],
        eI: function (b) {
            return a.WS(b);
        },
    }),
            c = b
            .an()
            .on("click", function (a) {
                a.stopPropagation();
            })
            .on("dblclick", function (a) {
                a.stopPropagation();
                a.preventDefault();
                b.aM(VI);
            });
    $("#switchToken").replaceWith(c);
    c = $("#contentTools").addClass("clearfix");
    new UI_Home(c);
    this.VA();
};
cC.prototype.ea = function (a, b, c) {
    return Ft.ea("sectionContainer", "", [Ft.ai("sectionHeader", "header" + a, [Ft.eU("tabIcon"), b]), Ft.ea("sectionContent", "content" + a, c)]);
};
cC.prototype.II = function () {
    var a = D.p,
            b = $("#accountStatus");
    b.empty().data(
            "vp_control",
            new L2(b[0], {
                mj: !0,
                mi: function (b) {
                    b *= 100;
                    this.aM("$ " + D.B.EQ(a.XD.Y5(a.Ve(), "Upvote" == D.A.Z9 ? b : a.Vm("Upvote"), 100, a.Yx())));
                    D.A.AD(b);
                    null != D.V.HE && clearTimeout(D.V.HE);
                    D.V.HE = setTimeout(function () {
                        D.A.Ax();
                        D.A.AD(a.Vm(D.A.Z9));
                    }, 3e3);
                },
            })
            );
    this.aD(b);
};
cC.prototype.aD = function (a) {
    var b = this,
            c = Ft.GB("span", {id: "switchManaType", class: "mediumImageButton", "data-mode": this.Z9, title: "Toggle Upvote/Downvote"})
            .button()
            .on("click", function () {
                var a = "Upvote" == b.Z9 ? "Downvote" : "Upvote";
                c.attr("data-mode", a);
                b.Z9 = a;
                b.refresh();
            });
    a.append(c);
};
cC.prototype.Ku = function (a) {
    var b = this,
            c = D.p.XD,
            d = c.WC();
    0 < D.p.Vg() || a
            ? (D.p.Vh(0), this.Kv.text("Simulate " + d + "..."), this.refresh())
            : ((a = {title: d + " Amount:", bY: c.U1(D.p.Vd(), c.da()), bW: "number", mp: 1}),
                    D4.AX(a, function (a) {
                        isNaN(a) || 1 > a || 1e8 < a ? D4.D9("Please enter a number between 1 and 100,000,000!") : ((a = c.U2(a, c.X9() ? 5 : c.da())), 0 < a && (D.p.Vh(a), b.Kv.text("Restore " + d), b.refresh()));
                    }));
};
cC.prototype.fG = function () {
    this.fe.an().find("#tabAccountBalances,#tabAccountDetails,#tabAccountDelegations,#tabAccountOrders,#tabMarketInfo,#tabSystemInfo").addClass("noMaxHeight").find(".tabContent").css({"max-height": "528px", "overflow-y": "auto"});
};
cC.prototype.VA = function () {
    var a = g8("#switchToken");
    if (a) {
        var b = D.G.get(l3);
        a.e8(b);
        b || a.aM(VI);
        var c = D.o.mh(),
                d = D.o.VP(),
                e = [],
                f = [{id: "root", text: "Base"}];
        b && f.push({id: "se_tribes", text: "Hive-Engine Tribes"}, {id: "se_tokens", text: "Hive-Engine Tokens"});
        for (b = 0; b < f.length; b++) {
            e.push({text: f[b].text, isGroup: !0});
            for (var g = 0; g < d.length; g++) {
                var h = d[g],
                        k = c[h],
                        l = k.Uz == VG ? 0 : k.V8() ? 1 : 2;
                b != l || (k.Uz == VG && !k.X9()) || e.push({value: h, text: k.Uk});
            }
        }
        a.g4(e);
    }
};
cC.prototype.getTabs = function () {
    return this.fe;
};
cC.prototype.gk = function () {
    return this.fe.gk();
};
cC.prototype.fj = function (a) {
    this.fe.fR(a);
    aH.KP("#panelTop");
};
cC.prototype.MI = function (a, b) {
    "tabAccountFollowers" == b
            ? D.F.CU()
            : "tabAccountDelegations" == b
            ? D.E.LW()
            : "tabAccountMentions" == b
            ? D.M.HR()
            : ("tabAccountBalances" == b
                    ? (D.C.cc = !0)
                    : "tabMarketInfo" == b
                    ? D.TE.En(!0)
                    : "tabAccountOrders" == b &&
                    Py([
                        [D.c, "MX"],
                        [D.c, "Oi"],
                        [D.c, "Yd"],
                    ]),
                    D.A.refresh());
    aH.BV(a.find("table"), 250);
};
cC.prototype.fP = function (a, b) {
    "tabAccountFollowers" == b ? D.F.gl() : "tabAccountDelegations" == b ? D.E.gl() : "tabAccountMentions" == b ? D.M.gl() : "tabWitnessDetails" == b && D.W.jF();
};
cC.prototype.Kt = function (a) {
    var b = this;
    this.LO = $(D.U.ZC("voteSlider", "voteSliderValue", "$ 0.00"));
    this.ZD = Ft.R7("tabBtn", "btnSimulateVotePayout", "Sim. Payout...", "Simulate payout for vote preview...", function () {
        return b.Yw();
    });
    this.Kv = Ft.R7("tabBtn", "btnSimulateHP", "Simulate HP...", "", function () {
        return b.Ku();
    });
    this.Kw = Ft.R7("tabBtn", "btnShowIncomingVotesDetails", "Inc. Votes...", "Show incoming votes...", function () {
        return cI.Gm(!0, !0, 7);
    });
    this.Kx = Ft.R7("tabBtn", "btnShowOutgoingVotesDetails", "Out. Votes...", "Show outgoing votes...", function () {
        return cI.Gm(!1, !0, 7);
    });
    this.Op = Ft.R7("tabBtn", "btnSetRecoveryAccount", "Change Recovery Account...", "", function () {
        return f3.Pw();
    });
    this.Ky = Ft.R7("tabBtn", "btnSetProxy", "Change Witness Proxy...", "", function () {
        return D.W.KZ();
    });
    this.Bm = Ft.R7("tabBtn", "btnTransfer", "Transfer...", "", function () {
        var b = function (b) {
            new Ks(a, b).mH();
        };
        if (a.XD.X9()) {
            var d = a.Vt(VI),
                    e = a.Vt(IQ);
            d && e
                    ? D4.Os("Transfer", "Do you want to transfer HIVE or HBD?", ["HIVE", "HBD"], function (a) {
                        b("HIVE" == a ? D.o.U3 : D.o.Ya);
                    })
                    : b(d ? D.o.U3 : D.o.Ya);
        } else
            b(a.XD);
    });
    this.LC = Ft.R7("tabBtn", "btnConvertHBD", "Convert HBD...", "", function () {
        return D.Y.LD();
    });
    this.Ok = Ft.R7("tabBtn", "btnAddToSavings", "Move To Savings...", "", function () {
        return D.e.Om();
    }).button("disable");
    this.Ol = Ft.R7("tabBtn", "btnGetFromSavings", "Withdraw Savings...", "", function () {
        return D.e.On();
    }).button("disable");
    this.Kz = Ft.R7("tabBtn", "btnPowerUp", "Power Up...", "", function () {
        return D.Y.Ka();
    });
    this.K0 = Ft.R7("tabBtn", "btnPowerDown", "Power Down...", "", function () {
        return D.Y.Kk();
    });
    this.K1 = Ft.R7("tabBtn", "btnCancelPowerDown", "Stop Power Down...", "", function () {
        return D.Y.Kc(!0);
    });
    this.K2 = Ft.R7("tabBtn", "btnPowerDownOutgoingRoutes", "Outgoing Routes...", "", function () {
        return D.Y.Kf("outgoing");
    });
    this.K3 = Ft.R7("tabBtn", "btnPowerDownIncomingRoutes", "Incoming Routes...", "", function () {
        return D.Y.Kf("incoming");
    });
    this.K4 = Ft.R7("tabBtn", "btnClaimRewards", "Claim Rewards", "", function () {
        return a.Kb(!1);
    });
    this.Wc = Ft.R7("tabsButtonRight", "btnClaimAllRewards", "Claim All Rewards", "", function () {
        return a.Kb(!0);
    });
    this.bP = Ft.R7("tabsButtonRight", "btnStakeCustomTokens", "Stake Tokens...", "", function () {
        return a.Ws();
    });
    this.K5 = Ft.R7("tabBtn tabBtnSmall", "btnOpenInternalMarket", "&gt;&gt;", "Open Internal Market", function () {
        return D.A.fj("tabAccountOrders");
    });
    this.K6 = Ft.R7("tabBtn tabBtnSmall", "btnOpenMarketSteem", "&gt;&gt;", "", function () {
        return aH.DQ(b.K6.data("url"), !0);
    });
    this.K7 = Ft.R7("tabBtn tabBtnSmall", "btnOpenMarketSbd", "&gt;&gt;", "", function () {
        return aH.DQ(b.K7.data("url"), !0);
    });
    this.Zx = Ft.R7("tabBtn tabBtnSmall", "btnShowProposals", "&gt;&gt;", "Show Worker Proposals...", function () {
        return D.s.dO(Zh, !0);
    });
    this.kz = Ft.R7("tabBtn tabBtnSmall", "btnChangeSigningKey", "Change Signing Key...", "", function () {
        return D.W.ky();
    });
    this.Ov = Ft.R7("", "btnAddCustomWitness", "Vote For Witness...", "", function () {
        30 <= a.Fw.length
                ? D4.D9("You have already voted for 30 witnesses!")
                : D4.AX({title: "Witness Name:"}, function (b) {
                    (b = b.replace("@", "")) &&
                            (-1 < a.Fw.indexOf(b)
                                    ? D4.D9("You have already voted for witness " + b + "!")
                                    : D.W.Ou(b, function (a) {
                                        D.C.Fs();
                                    }));
                });
    });
};
cC.prototype.IB = function (a) {
    var b = this;
    this.IC[BX] = function (c, e, f) {
        f = a.Qj();
        f = "<span><strong>" + f[0] + "</strong>." + f[1] + "</span>";
        var d = a.Ve();
        e = "<strong>" + D.Q.OJ(e, d) + "</strong>" + (0 < a.Vg() ? " ( simulated )" : "&nbsp;" + D.Q.OK(e, c));
        D.R.Ee = c.posting_rewards / 1e3;
        D.R.Ef = c.curation_rewards / 1e3;
        c.effective_power = e;
        c.vote_amount = "";
        c.vp_at_100 = D.B.Fd(a.Vm(b.Z9), 100);
        c.rc_status = a.M4.current_rc_status + Lf + a.M4.current_rc + " RC";
        c.lf_1 = "";
        c.reputation = f;
        c.followers = Bl(D.F.Hw) + Lf + Bl(D.F.Hx) + " following";
        D.Z.HP
                ? ((c.post_count = Bl(D.Z.HP.account.posts) + " posts" + Lf + Bl(D.Z.HP.account.comments) + " comments" + Lf + Bl(D.Z.HP.account.replies) + " replies"),
                        (c.vote_count = Bl(D.Z.HP.account.votes) + " votes" + Lf + Bl(D.Z.HP.account.voted) + " votes received"))
                : (c.vote_count = "[ NA ]");
        c.voting_csi = D.J.Gc();
    };
    this.IC[BY] = function (c, e, f) {
        var d = e.Up,
                h = D.G.get(GC),
                k = a.Vz(),
                l = a.V1(),
                m = a.VK(VT),
                n = a.Vy() + (f ? e.U1(m, e.da()) : 0),
                p = f ? a.VK(IQ) : 0;
        m = f ? a.Vt(IQ) : 0;
        var q = f ? a.Vq(VI) : 0,
                r = f ? a.Vq(IQ) : 0,
                t = f ? AQ(c.vesting_balance) : 0,
                u = p + m + r;
        l = e.U1(l, e.da()) + k + q + t + n;
        f || (l = e.V7(l));
        c.account_value = aH.FD([D.Q.GA(u, l, "USD", !0), D.Q.GA(u, l, "USD" != h ? h : "EUR", !0)]);
        c.lf_1 = "";
        aH.NE(b.K4, a.WY(e.aP));
        aH.NE(b.Wc, a.WY());
        aH.NE(b.bP, a.Wt());
        aH.NE(b.Bm, (f && 0 < m) || 0 < k);
        aH.NE(b.Ok, f && 0 < k + m);
        aH.NE(b.Ol, f && 0 < q + r);
        aH.NE(b.K2, f);
        aH.NE(b.K3, f);
        h = Ft.Fh("span", {id: "claimRewardsAmount"}, aH.FD([Bl(n, e.da()) + " " + e.Uk, f ? Bl(p, 3) + " HBD" : null]));
        c.reward_balance = h;
        c.account_balance = aH.FD([Bl(k, e.da()) + " " + e.Uk, f ? Bl(m, 3) + " HBD" : null]);
        c.savings_balance = aH.FD(f ? [Bl(q, 3) + " HIVE", Bl(r, 3) + " HBD"] : [""]);
        c.vesting_balance = aH.FD(f ? [Bl(t, 3) + " HIVE"] : [""]);
        c.lf_2 = "";
        c.vesting_shares = d ? e.Ak(a.V1()) : "( staking disabled )";
        c.received_vesting_shares = d ? e.Ak(a.V3()) : "-";
        c.delegated_vesting_shares = d ? e.Ak(a.V5()) : "-";
        c.lf_3 = "";
        c.to_withdraw = d ? e.Ak(a.YX()) : "-";
        c.withdrawn = d ? e.Ak(a.YW()) : "-";
        c.vesting_withdraw_rate = d ? e.Ak(a.Vw()) : "-";
        c.next_vesting_withdrawal = d ? a.WH() : "-";
    };
    this.IC[BZ] = function (a, b, c) {
        b = D.TE.X8("HIVE", "USD");
        c = D.TE.X8("HBD", "USD");
        var d = b && c ? ((D.V.G5 * c) / (D.V.G4 * b)) * 100 : 0;
        var e = D.V.Eh.Ek;
        a.internal_steem_price = aH.FD(
                [T7.LJ() + "<strong>Ask:</strong>" + T7.LJ(3) + Bl(D.V.Eh.Ei, 5) + " HBD", T7.LJ() + "<strong>Bid:</strong>" + T7.LJ(3) + Bl(D.V.Eh.Ej, 5) + " HBD", (0 <= e ? "+" : "-") + T7.LJ() + Bl(e * (0 <= e ? 1 : -1), 2) + " %"],
                ["", "", '<span class="' + (0 <= e ? "numPositive" : "numNegative") + '"/>']
                );
        a.internal_median_price = aH.FD([Bl(D.V.Bn, 5) + " $", ""]);
        a.internal_volume_24h = aH.FD([Bl(D.V.Eh.El, 3) + " HIVE", Bl(D.V.Eh.Em, 3) + " HBD"]);
        a.lf_1 = "";
        var f = D.G.get(GC);
        "USD" == f && (f = "EUR");
        e = D.TE.TA("HIVEBTC", !0);
        a.external_steem_price = aH.FD(
                [Bl(b, 5) + " USD", Bl(D.TE.X8("HIVE", f), 5) + " " + f, (0 <= e ? "+" : "-") + T7.LJ() + Bl(e * (0 <= e ? 1 : -1), 2) + " %"],
                ["", "", '<span class="' + (0 <= e ? "numPositive" : "numNegative") + '"/>']
                );
        a.external_volume_24h = aH.FD([Bl(D.TE.S8("HIVEBTC"), 3) + " USD"]);
        a.lf_2 = "";
        a.lf_small = "";
        e = D.TE.TA("HBDBTC", !1);
        a.external_sbd_price = aH.FD(
                [Bl(c, 5) + " USD", Bl(D.TE.X8("HBD", f), 5) + " " + f, (0 <= e ? "+" : "-") + T7.LJ() + Bl(e * (0 <= e ? 1 : -1), 2) + " %"],
                ["", "", '<span class="' + (0 <= e ? "numPositive" : "numNegative") + '"/>']
                );
        a.external_sbd_volume = aH.FD([Bl(D.TE.S8("HBDBTC"), 3) + " USD"]);
        a.lf_3 = "";
        a.current_supply = aH.FD([Bl(D.V.G4, 3) + " HIVE", Bl(D.V.G5, 3) + " HBD"]);
        a.virtual_supply = aH.FD([Bl(D.V.G6, 3) + " HIVE"]);
        a.sbd_debt_ratio = aH.FD([Bl(D.V.JV, 3) + T7.LJ() + "%", Bl(d, 3) + T7.LJ() + "% (" + T7.LJ() + "projected" + T7.LJ() + ")"]);
        a.print_rates = aH.FD([Bl(D.V.kv, 3) + T7.LJ() + "% HBD", Bl(100 - D.V.kv, 3) + T7.LJ() + "% HIVE"]);
        a.lf_4 = "";
        a.steem_per_mvests = aH.FD([Bl(D.o.AL(1e6, 3), 3) + " HIVE"]);
    };
    this.IC[Gv] = function (a, c, f) {
        a.total_vesting_fund = c.Um ? c.Ak(c.Um) : "";
        a.total_reward_fund = aH.FD(c.Un ? [Bl(c.Un, c.da()) + " " + c.Uk, c.X9() ? Bl(c.X4 / 1e12, 3) + " T" + T7.LJ(2) + "Recent" + T7.LJ() + "Claims" : ""] : []);
        a.pending_rewards = aH.FD(c.Un ? [Bl(c.Us, c.da()) + " " + c.Uk, c.X9() ? Bl(c.Ur / 1e6, 3) + " MVests" : ""] : []);
        a.total_sps_fund = aH.FD(c.Zn ? [Bl(c.Zn, c.da()) + " HBD", Bl(c.Zn / 100, c.da()) + " HBD&nbsp;Daily"] : []);
        a.lf_1 = "";
        a.head_block = aH.FD([Bl(D.V.Tv), D.B.DE(D.V.OW, !1, !1, !0)]) + b2 + D.V.Ty;
        a.last_irreversible_block = aH.FD([Bl(D.V.Gz)]);
        a.last_parsed_block = aH.FD([Bl(b.jm())]);
        a.maximum_block_size = aH.FD([Bl(D.V.Gx) + " Bytes"]);
        a.lf_2 = "";
        a.account_count = aH.FD([Bl(D.V.FB) + " Accounts", Bl(D.V.FC) + " Witnesses"]);
        a.claimable_per_day = aH.FD([Bl(2.88 * D.V.OZ) + " Accounts"]);
        a.account_creation_fee = aH.FD([D.V.Mp]);
        a.lf_3 = "";
        a.reverse_auction_time = aH.FD([D.V.Tx / 60 + " Minutes"]);
        a.delegation_return_time = aH.FD([D.V.Tw / 60 / 60 / 24 + " Days"]);
        a.lf_4 = "";
        a.hf_info = D.V.E8 != D.V.FA && "0.0.0" != D.V.FA ? aH.FD([D.V.E8, D.V.FA + " " + D.V.E9]) : aH.FD([D.V.E8, "-"]);
    };
    this.IC[BW] = function (c, e, f) {
        e = a.jA && a.jA != c.recovery_account ? "pending ( " + c.recovery_account + " -> " + a.jA + " )" : ak.ET(c.recovery_account);
        c.name = ak.ET(c.name);
        c.witness_proxy = ak.ET(c.proxy);
        c.recovery_account = e;
        c.reset_account = ak.ET(c.reset_account);
        c.lf_1 = "";
        c.actions = ak.AN(T7.DU(b.M2(c, Eu[io])));
        c.lf_2 = "";
        e = a.Tg;
        c.public_keys = ak.AN(T7.DU({owner_key: e.owner, active_key: e.active, posting_key: e.posting, memo_key: e.memo}));
        c.lf_3 = "";
        c.various = ak.AN(T7.DU(b.M2(c, Eu[CB])));
        c.lf_4 = "";
        c.sbd_interest = ak.AN(T7.DU(b.M2(c, Eu[B9])));
        c.lf_5 = "";
        c.savings = ak.AN(T7.DU(b.M2(c, Eu[ip])));
    };
    this.IC[CC] = function (c, e, f) {
        D.A.Ov.detach();
        e = $("#tableAccountWitnessVotes");
        e.find("tr").remove();
        if (c.witness_votes.length)
            for (f = 0; f < c.witness_votes.length; f++) {
                var d = Ft.Fj("td", [ak.EU(c.witness_votes[f]), Ft.Fh("button", {class: "remWitnessVote", "data-witness": c.witness_votes[f]}, "Remove"), ""]);
                0 == f && d.find("td:last").append(b.Ov);
                e.append(d);
            }
        else
            (c = Ft.Fj("td", ["", "", ""])), c.find("td:last").append(b.Ov), e.append(c);
        $(".remWitnessVote")
                .button()
                .on("click", function () {
                    var a = $(this).data("witness");
                    D.W.Fy(a, function (a) {
                        a && D.C.Fs();
                    });
                });
        g8("#tabsAccountDetails").gZ("tabAccountWitnessVotes", "Witness Votes (" + a.Fw.length + ")");
    };
    this.IC[Dj] = function (b, c, f) {
        b.rank = a.jG;
        b.rewards_last_7_days = '<span id="weekRewardsWitness">' + (D.R.J5 ? D.B.EQ(D.R.Ea(D.R.Ed, Dk, "Ey")) + " HP" : "-") + "</span>";
        b.rewards_last_30_days = '<span id="monthRewardsWitness">' + (D.R.Eb ? D.B.EQ(D.R.Ea(D.R.Ec, Dk, "Ey")) + " HP" : "-") + "</span>";
        b.owner = ak.ET(b.owner);
        b.url = '<a href="' + b.url + '" target="_blank">' + b.url + "</a>";
        b.props = ak.AN(b.props, "simple autoWidth");
        b.sbd_exchange_rate = ak.AN(b.sbd_exchange_rate, "simple autoWidth");
    };
    var c = this.bO;
    c.effective_power = this.Kv;
    c.vote_count = this.Kw;
    c.voting_csi = this.Kx;
    c.reward_balance = this.K4;
    c.account_balance = this.Bm;
    c.savings_balance = this.Ok;
    c.vesting_balance = this.Ol;
    c.vesting_shares = this.Kz;
    c.received_vesting_shares = this.K0;
    c.delegated_vesting_shares = this.K1;
    c.to_withdraw = this.K2;
    c.withdrawn = this.K3;
    c.recovery_account = this.Op;
    c.witness_proxy = this.Ky;
    c.internal_steem_price = this.K5;
    c.external_steem_price = this.K6;
    c.external_sbd_price = this.K7;
    c.vesting_withdraw_rate = this.LC;
    c.vote_amount = this.ZD;
    c.total_sps_fund = this.Zx;
    c.total_missed = this.kz;
};
cC.prototype.jm = function () {
    return D.Z.HP ? D.Z.HP.stats.last_parsed_block : 0;
};
cC.prototype.WS = function (a) {
    a = D.o.get(a);
    this.Ku(!0);
    $("#btnSimulateHP").text("Simulate " + a.WC() + "...");
    D.p.aQ(a ? a : D.o.U3);
    this.WN(a);
};
cC.prototype.WN = function (a) {
    var b = this.gk();
    this.fi.getTabs().gZ("tabAccountBalancesMain", a.Uk);
    a.Uz == VH && D.C.WI();
    "tabDelegations" == b && D.E.LW();
    this.Mr = !0;
    this.refresh();
};
cC.prototype.Aa = function (a, b) {
    -1 < CE.indexOf(b) ? (a[b] = D.B.DE(D.B.CG(a[b]))) : aI.Df(a[b]) && (a[b] = Bl(a[b]));
};
cC.prototype.M2 = function (a, b) {
    for (var c = {}, d, e = 0; e < b.length; e++)
        (d = b[e]), (c[d] = a[d]), this.Aa(c, d);
    return c;
};
cC.prototype.Ad = function (a, b) {
    var c = {},
            d = Eu[a],
            e = this.account.XD;
    this.IC[a](b, e, e.X9());
    for (a = 0; a < d.length; a++)
        (c[d[a]] = b[d[a]]), this.Aa(c, d[a]);
    return c;
};
cC.prototype.AZ = function (a, b, c, d) {
    var e = this.gk();
    if (this.Mr || e == Mq[a])
        a == CC ? this.im(c) : this.in(a, b, c, d);
};
cC.prototype.im = function (a) {
    this.in(BW, $("#tabAccountGeneral"), a);
    var b = this.account;
    a = this.Ad(CC, a);
    var c = T7.DU(a.json_metadata);
    c && $("#tabAccountProfile").html(ak.AN(c, "mainTable autoWidth"));
    !$("#tabAccountResourceCredits").html() && c && c.profile && c.profile.profile_image && ((c = D.B.DS(c.profile.profile_image)), c.length && (D.V.KS = c[0]));
    $("#tabAccountResourceCredits")
            .empty()
            .append(ak.AN(T7.DU(b.M4), "mainTable withMarginBottom"), ak.AN(T7.DU(b.ND), "mainTable withMarginBottom"), ak.AN(T7.DU(b.Xw), "mainTable withMarginBottom"));
    delete a.json_metadata;
};
cC.prototype.iu = function (a) {
    ak.gi({id: "tabsRewards", height: "auto"})
            .gj([
                {id: "tabRewardsSummary", title: "Rewards Summary", content: b3.ij()},
                {id: "tabRewardsRecent", title: "Recent Rewards", content: b3.ii()},
            ])
            .appendTo(a);
};
cC.prototype.in = function (a, b, c, d) {
    c = this.Ad(a, c);
    var e = b.find(".mainTable");
    e.length || ((e = Ft.be("dataTable mainTable fixed withMarginBottom")), b.empty().append(e), d && e.addClass(d));
    a != BX || aH.QU("#tableAllTimeRewards") || this.iu(b);
    a = ["vote_amount"];
    for (var f in c)
        (b = e.find("tr[data-key='" + f + "']")),
                b.length
                ? -1 == a.indexOf(f) && ((b = b.find("td:nth-child(2)")), (d = b.data("value")), (void 0 !== d && d == c[f]) || b.data("value", c[f]).html(c[f]))
                : (e.append(Ft.Fj("td", [ak.Dc(f), c[f], ""], {"data-key": f})), this.Gk(f));
    aH.BV(e);
};
cC.prototype.Gk = function (a) {
    var b = $("tr[data-key='" + a + "']");
    b.length && ("vote_amount" == a && b.find("td:nth-child(2)").append(this.LO), (b = b.find("td:nth-child(3)")), b.length && void 0 !== this.bO[a] && (a = this.bO[a]) && !b.find("#" + a.attr("id")).length && b.append(a));
};
cC.prototype.F5 = function (a) {
    var b = a.XD,
            c = b.X9();
    b = b.Up;
    var d = 0 < a.Vw();
    aH.NE(this.Kz, b && a.Vz());
    aH.NE(this.K0, b && !d && a.V1());
    aH.NE(this.K1, b && d);
    aH.NE(this.LC, c && 0 < a.Vt(IQ));
    if (D.V.LK) {
        b = D.G.get(GR);
        for (c = 0; c < GW.length; c++)
            if (GW[c].name.toLowerCase() == b) {
                b = GW[c].name;
                d = GW[c].Ig + GW[c].Ii;
                this.K6.data("url", GW[c].Ig + GW[c].Ih);
                this.K6.attr("title", "Show HIVE on " + b + "...");
                this.K7.data("url", d);
                this.K7.attr("title", "Show HBD on " + b + "...");
                break;
            }
        D.V.LK = !1;
    }
    this.AD(a.Vm(this.Z9));
};
cC.prototype.Ax = function () {
    var a = $("#accountStatus").data("vp_control");
    if (a) {
        var b = D.p,
                c = b.XD,
                d = b.Ve(),
                e = b.Yx(),
                f = b.Vm(this.Z9);
        b = b.Vm("Upvote");
        c = c.Y5(d, b, 100, e);
        a.aM("$ " + D.B.EQ(c));
        a.L0(f / 100);
    }
};
cC.prototype.Jq = function () {
    var a = $("#accountName"),
            b = D.G.EL(),
            c = "@" + D.l,
            d = c + " (" + D.p.Qj()[0] + ")";
    a.text() != d &&
            ((c = b.url + "/" + c),
                    a
                    .text(d)
                    .attr("href", c)
                    .attr("title", "Visit Account on " + b.title),
                    $("#accountFeed")
                    .attr("href", b.ca ? c + "/" + b.ca : "https://hive.blog/@" + D.l + "/feed")
                    .attr("title", "Visit Feed on " + (b.ca ? b.title : "Hive.blog")),
                    $("#accountWallet")
                    .attr("href", c + "/" + b.cb)
                    .attr("title", "Visit Wallet on " + b.title));
};
cC.prototype.LN = function (a, b) {
    var c = $("#voteAmounts table"),
            d = D.p,
            e = d.XD;
    d = d.Yx();
    if (!c.find("td").length)
        for (var f = 0; f < NN.length; f++)
            c.append(Ft.Fj("td", [NN[f] + " %", "$ 0.00"]));
    for (f = 0; f < NN.length; f++)
        c.find("tr:nth-child(" + (f + 2) + ") td:nth-child(2)").text("$ " + D.B.EQ(e.Y5(a, b, NN[f], d)));
};
cC.prototype.AD = function (a) {
    var b = D.p.Ve(),
            c = this.Z9,
            d = "Upvote" == c ? a : D.p.Vm("Upvote");
    this.LN(b, d);
    D.U.AG(".voteSlider", d);
    b = $("tr[data-key='vp_at_100']");
    b.length && ((a = parseInt(a)), (c = D.p.Vm(c)), (a = a == parseInt(c) ? 100 : a), b.find(":nth-child(1)").text("VP ~> " + a + " %"), b.find(":nth-child(2)").html(a >= c ? D.B.Fd(c, a) : "Now"));
};
cC.prototype.Yw = function () {
    var a = this,
            b = D.p.Yx(),
            c = function (b, c) {
                b = AQ(b);
                if (isNaN(b) || 0 > b || 200 < b)
                    return c && D4.D9("Please enter a number between 0 and " + Bl(200) + "!"), !1;
                D.p.Yw(b);
                a.refresh();
                return !0;
            },
            d = Ft.GB("input", {type: "text", value: b}).on("input change", function () {
        c(d.val(), !1);
    }),
            e = Ft.GB("table", {class: "dataTable"}).append(Ft.Fj("td", ["Payout Amount ($)", d]), Ft.Fj("td", ["&nbsp;", D.U.ZB()])),
            f = Ft.R4("dialogForm", "", e);
    f.find(".percentageSlider");
    D4.JO(f, {
        title: "Set Simulated Payout",
        resizable: !1,
        width: 408,
        minHeight: 0,
        buttons: {
            Cancel: function () {
                c(b, !1);
                D4.M5(f);
            },
            Ok: function () {
                var a = d.val();
                c(a, !0) && (D.G.set(Yz, parseFloat(a), !0), D4.M5(f));
            },
        },
    });
    D.U.Kl(f, d, 0, 200, b, 2);
};
cC.prototype.AY = function (a) {
    this.lastData = jQuery.extend(!0, {}, a);
    this.AZ(BX, $("#tabAccountStats"), a);
    this.AZ(BY, $("#tabAccountBalancesMain"), a, "mediumSize");
    this.AZ(BZ, $("#tabMarketInfoSteem"), a);
    this.AZ(Gv, $("#tabSystemInfo"), a);
    this.AZ(CC, $("#tabAccountDetails"), a);
    this.account.J6() && ((a = jQuery.extend(!0, {}, this.account.bN())), this.AZ(Dj, $("#tabWitnessDetails"), a));
    this.F5(this.account);
    this.Mr = !1;
};
cC.prototype.refresh = function (a) {
    this.Fo
            ? setTimeout(this.refresh, 3e3)
            : ((this.Fo = !0),
                    void 0 !== a && (this.lastData = a),
                    this.lastData && (this.AY(this.lastData), this.Ax()),
                    (this.Fo = !1),
                    D.V.Tv &&
                    D.V.Tv < this.jm() &&
                    setTimeout(function () {
                        D4.D9("The current node's head block is < the last parsed block!<br>Switching to other node...", 5e3);
                        D.d.hP(function () {});
                    }, 5e3));
};
var eR = function () {
    this.Tf = this.Te = this.Td = this.Tc = this.IZ = this.IX = this.KO = this.IW = this.E7 = 0;
    this.Ik = this.FO = null;
    var a = $("#contentComingRewards");
    this.AI(a);
};
eR.prototype.AI = function (a) {
    Ft.mB(
            a,
            "\n #comingRewards,\n #comingCurationRewards {\n max-height: 550px;\n }\n #comingRewardsInfo,\n #comingCurationRewardsInfo {\n padding: 10px 15px;\n margin-bottom: 5px;\n }\n #comingRewardsSum,\n #comingCurationRewardsSum {\n float: right;\n font-weight: bold;\n margin-right: 10px;\n text-align: right;\n }\n .comingRewardsSumInfo,\n #comingRewardsSumDetails,\n #comingCurationRewardsSumDetails {\n font-weight: normal;\n }\n #comingRewards tr .sumPayout,\n #comingCurationRewards tr .sumPayout {\n font-weight: bold;\n padding-right: 16px;\n }\n #comingRewards tr .sumPayout,\n #comingRewards .sumHBD,\n #comingRewards .sumHIVE,\n #comingRewards .sumHP,\n #comingCurationRewards tr .sumPayout,\n #comingCurationRewards .sumHP,\n #comingCurationRewards .voteAmount,\n #comingCurationRewards .voteWeight,\n #comingCurationRewards .voteEfficiency {\n text-align: right;\n }\n #comingRewards tr[data-payout-declined='true'] .sumPayout,\n #comingCurationRewards tr[data-payout-declined='true'] .sumPayout {\n text-decoration: line-through;\n }\n\n #comingRewards .dataTable tr th:nth-child(1),\n #comingRewards .dataTable tr td:nth-child(1),\n #comingCurationRewards .dataTable tr th:nth-child(1),\n #comingCurationRewards .dataTable tr td:nth-child(1) {\n width: 4%;\n padding-left: 0;\n padding-right: 0;\n text-align: center;\n }\n #comingRewards .dataTable tr th:nth-child(2),\n #comingRewards .dataTable tr td:nth-child(2) {\n width: 5%;\n text-align: center;\n }\n #comingRewards .dataTable tr th:nth-child(3),\n #comingRewards .dataTable tr td:nth-child(3) {\n width: 49%;\n }\n #comingRewards .dataTable tr th:nth-child(4),\n #comingRewards .dataTable tr td:nth-child(4) {\n width: 10%;\n }\n #comingRewards .dataTable tr th:nth-child(5),\n #comingRewards .dataTable tr td:nth-child(5) {\n width: 8%;\n }\n #comingRewards .dataTable tr th:nth-child(6),\n #comingRewards .dataTable tr td:nth-child(6) {\n width: 8%;\n }\n #comingRewards .dataTable tr th:nth-child(7),\n #comingRewards .dataTable tr td:nth-child(7) {\n width: 8%;\n }\n #comingRewards .dataTable tr th:nth-child(8),\n #comingRewards .dataTable tr td:nth-child(8) {\n width: 10%;\n }\n\n #comingCurationRewards .dataTable tr th:nth-child(2),\n #comingCurationRewards .dataTable tr td:nth-child(2) {\n width: 3%;\n text-align: center;\n }\n #comingCurationRewards .dataTable tr th:nth-child(3),\n #comingCurationRewards .dataTable tr td:nth-child(3) {\n width: 23%;\n }\n\n #comingCurationRewards .dataTable tr th:nth-child(4),\n #comingCurationRewards .dataTable tr td:nth-child(4) {\n width: 14%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(5),\n #comingCurationRewards .dataTable tr td:nth-child(5) {\n width: 10%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(6),\n #comingCurationRewards .dataTable tr td:nth-child(6) {\n width: 12%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(7),\n #comingCurationRewards .dataTable tr td:nth-child(7) {\n width: 8%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(8),\n #comingCurationRewards .dataTable tr td:nth-child(8) {\n width: 8%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(9),\n #comingCurationRewards .dataTable tr td:nth-child(9) {\n width: 8%;\n }\n #comingCurationRewards .dataTable tr th:nth-child(10),\n #comingCurationRewards .dataTable tr td:nth-child(10) {\n width: 10%;\n }\n #comingRewards .dataTable tr td,\n #comingRewards .dataTable tr td *,\n #comingCurationRewards .dataTable tr td,\n #comingCurationRewards .dataTable tr td *\n {\n font-size: var(--font-size-medium);\n }\n\n #comingRewardsStatus,\n #comingCurationRewardsStatus {\n float: left;\n width: 370px;\n margin-left: 15px;\n }\n #comingRewardsStatus .hProgressBarLabel,\n #comingCurationRewardsStatus .hProgressBarLabel {\n top: 3px;\n }\n "
            );
    var b = this;
    a = ak
            .gi({id: "comingRewardsTabs"})
            .gj([
                {id: "tabComingAuthorRewards", title: "Author Rewards", gn: "auto"},
                {id: "tabComingCurationRewards", title: "Curation Rewards", gn: "auto"},
                {id: "tabComingBeneficiaryRewards", title: "Benef. Rewards", gn: "auto"},
            ])
            .appendTo(a);
    this.gm = new eL({id: "gm", class: "tabsButtonRight", text: "Hide Dust Payouts", title: "Hide posts with a payout amount < min. payout", width: "185px", padding: "10px 0"}).appendTo(a.fQ());
    this.eS = a.fX(0);
    this.eT = a.fX(1);
    this.mr = a.fX(2);
    a.fV(2).addClass("qDisabled");
    a = Ft.R7("left", "getComingRewards", "Refresh", "", function () {
        var a = $(this);
        aH.NE(a, !1);
        b.At(function () {
            return aH.NE(a, !0);
        });
    });
    var c = Ft.R7("left", "getComingCurationRewards", "Refresh", "", function () {
        var a = $(this);
        aH.NE(a, !1);
        b.IU(function () {
            return aH.NE(a, !0);
        });
    });
    this.eS.append([
        Ft.R4("text", "comingRewardsInfo", [
            Ft.eU("", "comingRewardsSum"),
            "To see the current list of your coming author rewards,<br>",
            'please click the "Refresh" button and wait for the process to finish:',
            "<br><br>",
            Ft.R4("clearfix", "", [a, Ft.R4("hProgressBar", "comingRewardsStatus", Ft.R4("hProgressBarLabel"))]),
        ]),
        Ft.R4("scrollY", "comingRewards"),
    ]);
    this.eT.append([
        Ft.R4("text", "comingCurationRewardsInfo", [
            Ft.eU("", "comingCurationRewardsSum"),
            "To see the current list of your coming curation rewards,<br>",
            'please click on the "Refresh" button and wait for the process to finish:',
            "<br><br>",
            Ft.R4("clearfix", "", [c, Ft.R4("hProgressBar", "comingCurationRewardsStatus", Ft.R4("hProgressBarLabel"))]),
        ]),
        Ft.R4("scrollY", "comingCurationRewards"),
    ]);
};
eR.prototype.As = function (a, b) {
    var c = this,
            d = a.find("tr:not(.headerRow)").length,
            e = a.find("tr:not(.headerRow)[data-done='false']"),
            f = this.FO;
    f && f.progressbar("value", d ? parseInt((100 / d) * a.find("tr[data-done='true']").length) : 100);
    if (!e.length)
        return d || a.html('<tr><td colspan="7">No coming author rewards found!</tr>'), f && f.progressbar("value", 100), 1 == D.V.JX && a.find(".sumHIVE").hide(), b7.LA(a, "payout-time"), b();
    var g = $(e[0]),
            h = moment.utc().subtract(7, "days"),
            k = this.gm.e9();
    D.S.Bp(
            g.data("author"),
            g.data("permlink"),
            !0,
            !1,
            function (d) {
                if (d.ep >= h) {
                    g.attr("data-done", "true");
                    g.attr("data-payout-declined", String(d.XM()));
                    g.data("item", d);
                    d.E0()
                            ? g.find(".showVotesChart").each(function () {
                        $(this)
                                .button()
                                .on("click", function (a) {
                                    a.preventDefault();
                                    a = $(this).parents("tr");
                                    Wj.B7(a.data("author"), a.data("permlink"), a.data("item"));
                                });
                    })
                            : g.find(".showVotesChart").remove();
                    g.find(".sumPayout").html(D.B.EQ(d.Et) + T7.LJ() + "$");
                    d.Et &&
                            (g.find(".sumHP").html(Bl(d.JZ, 3)),
                                    1 > D.V.JX && g.find(".sumHIVE").html(Bl(d.Ja, 3)),
                                    g.find(".sumHBD").html(Bl(d.JY, 3)),
                                    g.attr("data-sp", d.JZ).attr("data-steem", d.Ja).attr("data-sbd", d.JY).attr("data-stu", d.Et));
                    d.XM() || d.To() || ((c.E7 += d.Et), (c.IW += d.JZ), (c.KO += d.Ja), (c.IX += d.JY), (c.KN += d.Mi), (c.KL += d.Mj), (c.QX += d.Ml), (c.KM += d.Mk));
                    var e = D.Q.GA(c.IX, c.KO + c.IW, D.G.get(GC), !0),
                            f = "";
                    c.KL && (f += Bl(c.KL, 3) + T7.LJ() + "HP");
                    c.QX && (f += (f ? "," + T7.LJ() : "") + Bl(c.QX, 3) + T7.LJ() + "HIVE");
                    c.KM && (f += (f ? "," + T7.LJ() : "") + Bl(c.KM, 3) + T7.LJ() + "HBD");
                    f && (f = Ft.Fh("span", {class: "comingRewardsSumInfo"}, "- " + f + Lf + "Beneficiaries"));
                    var l = "";
                    c.KN && (l += Bl(c.KN, 3) + T7.LJ() + "HP");
                    var q = Ft.Fh("span", {class: "comingRewardsSumInfo"}, "- " + l + Lf + "Curators");
                    $("#comingRewardsSum").html(
                            D.B.EQ(c.E7) +
                            T7.LJ() +
                            "$<br>" +
                            (l ? q + "<br>" : "") +
                            (f ? f + "<br>" : "") +
                            "<hr>" +
                            Bl(c.IW, 3) +
                            T7.LJ() +
                            "HP" +
                            Lf +
                            (c.KO ? Bl(c.KO, 3) + T7.LJ() + "HIVE" + Lf : "") +
                            Bl(c.IX, 3) +
                            T7.LJ() +
                            "HBD<br>" +
                            Ft.Fh("span", {id: "comingRewardsSumDetails"}, "~ " + e)
                            );
                } else
                    g.remove();
                k && d.To() && g.remove();
                c.As(a, b);
            },
            function () {
                setTimeout(function () {
                    return c.As(a, b);
                }, 3e3);
            }
    );
};
eR.prototype.At = function (a) {
    this.IX = this.KO = this.IW = this.E7 = this.KM = this.QX = this.KL = this.KN = 0;
    var b = moment.utc().subtract(7, "days"),
            c = $("#comingRewards"),
            d = Ft.be("dataTable fixed").append(
            Ft.Fj(
                    "th",
                    [
                        "",
                        {html: "Type", attr: {"data-sort-col": "type", "data-sort-asc": "1"}},
                        {html: "Post", attr: {"data-sort-col": "permlink", "data-sort-asc": "1"}},
                        {html: "Payout in", attr: {"data-sort-col": "payout-time", "data-sort-asc": "1"}},
                        {html: "HP", attr: {class: "sumHP", "data-sort-col": "sp", "data-sort-asc": "1"}},
                        {html: "HIVE", attr: {class: "sumHIVE", "data-sort-col": "steem", "data-sort-asc": "1"}},
                        {html: "HBD", attr: {class: "sumHBD", "data-sort-col": "sbd", "data-sort-asc": "1"}},
                        {html: "STU", attr: {class: "sumPayout", "data-sort-col": "stu", "data-sort-asc": "1"}},
                    ],
                    {class: "headerRow"}
            )
            ),
            e = D.O.getItems({op: [A6, A9], min_date: b, incoming: !1, outgoing: !0, sort: "ts", sort_desc: !0, max_items: 5e4});
    e.reverse();
    for (var f, g, h, k, l = 0; l < e.length; l++)
        (f = e[l]),
                (g = f.data),
                (h = aG.DT(moment.utc(f.timestamp), b, !0)),
                125 < g.permlink.length && g.permlink.substring(0, 125),
                (k = g.parent_author ? "C" : "P"),
                d.find("tr[data-permlink='" + g.permlink + "']").length ||
                d.append(
                        Ft.Fj(
                                "td",
                                [
                                    '<button class="imageButton showVotesChart" title="Show Votes..."><span/></button>',
                                    k,
                                    ak.IJ(g.author, g.permlink, 130),
                                    h,
                                    {html: "", attr: {class: "sumHP"}},
                                    {html: "", attr: {class: "sumHIVE"}},
                                    {html: "", attr: {class: "sumHBD"}},
                                    {html: "", attr: {class: "sumPayout"}},
                                ],
                                {
                                    "data-done": "false",
                                    "data-author": g.author,
                                    "data-permlink": g.permlink,
                                    "data-payout-declined": "false",
                                    "data-type": k,
                                    "data-payout-time": f.timestamp,
                                    "data-sp": 0,
                                    "data-steem": 0,
                                    "data-sbd": 0,
                                    "data-stu": 0,
                                }
                        )
                        );
    e.length ? (this.FO || (this.FO = D.U.Ta($("#comingRewardsStatus"))), this.FO.fadeIn(), this.As(d, a)) : (d.html('<tr><td colspan="7">No coming author rewards found!</tr>'), a());
    c.empty().append(d);
};
eR.prototype.IT = function (a, b) {
    var c = this,
            d = a.find("tr:not(.headerRow)").length,
            e = a.find("tr:not(.headerRow)[data-done='false']"),
            f = this.Ik,
            g = this.gm.e9(),
            h = moment.utc().subtract(7, "days"),
            k = $(e[0]),
            l = e.length;
    if (!l)
        return d ? aH.Da(a, !0, "id") : a.html('<tr><td colspan="6">No coming curation rewards found!</tr>'), f && f.progressbar("value", 100), b7.LA(a, "payout-time"), a.show(), b();
    D.S.Bp(
            k.data("author"),
            k.data("permlink"),
            !0,
            !1,
            function (e) {
                if (e.ep >= h) {
                    var m = e.Xd() ? "P" : "C";
                    k.data("item", e).attr("data-done", "true").attr("data-payout-declined", String(e.XM())).attr("data-payout-time", e.ep).attr("data-type", m);
                    e.E0() &&
                            k.find(".showVotesChart").each(function () {
                        $(this)
                                .button()
                                .on("click", function (a) {
                                    a.preventDefault();
                                    a = $(this).parents("tr");
                                    Wj.B7(a.data("author"), a.data("permlink"), a.data("item"));
                                });
                    });
                    var p = e.E1(D.l);
                    if (p && 0 < p.rshares) {
                        var q = D.Q.GA(0, p.Mi, "USD", !1),
                                r = D.Q.GA(p.JY, p.JZ + p.Ja, "USD", !1);
                        q = r ? (100 / r) * q : 0;
                        r = p.percent / 1e4;
                        c.Tc += q;
                        c.Td += 1;
                        c.Te += q * r;
                        c.Tf += 1 * r;
                        k.data("id", e.bt("id"))
                                .attr("data-vote-time", moment.utc(p.time).diff(e.ep, "seconds"))
                                .attr("data-vote-weight", p.percent)
                                .attr("data-vote-amount", p.amount)
                                .attr("data-vote-efficiency", q)
                                .attr("data-reward-sp", p.Mi);
                        k.find(".timeRemaining").html(aG.DT(e.ep, h, !0));
                        k.find(".postType").html(m);
                        k.find(".voteTime").html(aG.DT(moment.utc(p.time), e.ep, !0, !0));
                        k.find(".voteWeight").html(Bl(p.percent / 100, 2) + T7.LJ() + "%");
                        k.find(".voteAmount").html(D.B.EQ(p.amount) + T7.LJ() + "$");
                        k.find(".voteEfficiency").html(Bl(q, 2) + T7.LJ() + "%");
                        k.find(".sumPayout").html(Bl(p.Mi, 3));
                        !e.XM() && p.Mi >= Tz && (c.IZ += p.Mi);
                        m = D.Q.GA(0, c.IZ, D.G.get(GC), !0);
                        $("#comingCurationRewardsSum").html(
                                Bl(c.IZ, 3) + T7.LJ() + "HP<br>" + Ft.Fh("span", {id: "comingCurationRewardsSumDetails"}, "~ " + m) + "<hr>Avg. Efficiency | " + Bl(c.Tc / c.Td, 2) + " %<br>Weighted Avg. | " + Bl(c.Te / c.Tf, 2) + " %"
                                );
                        g && p.Mi < Tz && k.remove();
                    } else
                        k.remove();
                } else
                    k.remove();
                g && e.To() && k.remove();
                l--;
                0 < l && f && f.progressbar("value", parseInt((100 / d) * (d - l)));
                c.IT(a, b);
            },
            function () {
                setTimeout(function () {
                    return c.IT(a, b);
                }, 3e3);
            }
    );
};
eR.prototype.IU = function (a) {
    this.Tf = this.Te = this.Td = this.Tc = this.IZ = 0;
    var b = moment.utc().subtract(7, "days"),
            c = $("#comingCurationRewards");
    b = D.O.getItems({op: [Ay], min_date: b, incoming: !1, outgoing: !0, sort: "ts", sort_desc: !0, max_items: 5e4});
    var d = [];
    b.reverse();
    for (
            var e = Ft.be("dataTable fixed").append(
            Ft.Fj(
                    "th",
                    [
                        "",
                        {html: "T", attr: {"data-sort-col": "type", "data-sort-asc": "1", title: "Type"}},
                        {html: "Post", attr: {"data-sort-col": "permlink", "data-sort-asc": "1"}},
                        {html: "Author", attr: {"data-sort-col": "author", "data-sort-asc": "1"}},
                        {html: "Payout in", attr: {"data-sort-col": "payout-time", "data-sort-asc": "1"}},
                        {html: "Voted after", attr: {class: "voteTime", "data-sort-col": "vote-time", "data-sort-asc": "0"}},
                        {html: "Weight", attr: {class: "voteWeight", "data-sort-col": "vote-weight", "data-sort-asc": "1"}},
                        {html: "Amount", attr: {class: "voteAmount", "data-sort-col": "vote-amount", "data-sort-asc": "1"}},
                        {html: "Eff.", attr: {class: "voteEfficiency", "data-sort-col": "vote-efficiency", "data-sort-asc": "1", title: "Efficiency"}},
                        {html: "Reward HP", attr: {class: "sumPayout", "data-sort-col": "reward-sp", "data-sort-asc": "1"}},
                    ],
                    {class: "headerRow"}
            )
            ),
            f = "",
            g,
            h,
            k = 0;
            k < b.length;
            k++
            )
        (g = b[k]),
                (g = g.data),
                0 >= g.weight ||
                -1 < d.indexOf(g.permlink) ||
                ((h = g.permlink),
                        50 <= h.length && (h = h.substr(0, 50) + "..."),
                        d.push(g.permlink),
                        (f += Ft.Fj(
                                "td",
                                [
                                    '<button class="imageButton showVotesChart" title="Show Votes..."><span/></button>',
                                    {html: "", attr: {class: "postType"}},
                                    ak.bs(g.author, g.permlink, h, !0),
                                    ak.ET(g.author, !0, !1, !0),
                                    {html: "", attr: {class: "timeRemaining"}},
                                    {html: "", attr: {class: "voteTime"}},
                                    {html: "", attr: {class: "voteWeight"}},
                                    {html: "", attr: {class: "voteAmount"}},
                                    {html: "", attr: {class: "voteEfficiency"}},
                                    {html: "", attr: {class: "sumPayout"}},
                                ],
                                {
                                    "data-done": "false",
                                    "data-author": g.author,
                                    "data-permlink": g.permlink,
                                    "data-payout-declined": "false",
                                    "data-payout-time": 0,
                                    "data-type": "",
                                    "data-vote-time": 0,
                                    "data-vote-weight": 0,
                                    "data-vote-amount": 0,
                                    "data-vote-efficiency": 0,
                                    "data-reward-sp": 0,
                                }
                        )[0].outerHTML));
    e.append(f);
    b.length ? (e.hide(), this.Ik || (this.Ik = D.U.Ta($("#comingCurationRewardsStatus"))), this.Ik.fadeIn(), this.IT(e, a)) : (e.html('<tr><td colspan="6">No coming curation rewards found!</tr>'), a());
    c.empty().append(e);
};
var Sk = function (a) {
    this.opItem = a;
    this.Yg = !0;
    this.ZL = D.G.get(gW);
    this.GB(a);
};
Sk.prototype.GB = function (a) {
    var b = this,
            c = Ft.GB("div", {class: "opItem minimized", tabindex: 0, "data-id": a.J9, "data-ts": a.timestamp, "data-op": a.op, "data-incoming": a.incoming ? 1 : 0, "data-extras": a.extras});
    g9(c, this);
    this.headerDiv = Ft.GB("div", {class: "opItemHeader", tabindex: 0}, '<span class="opIcon opIconArrow"></span>' + a.title + a.icon + a.details + a.date).on("click", function (a) {
        b.Sg(!b.Yg, a.ctrlKey);
        b.Sh(!0);
    });
    var d;
    void 0 !== a.data.body ? (d = a.data.body) : a.op == Ay && (d = D.P.Ts(a.data.author, a.data.permlink));
    d && this.headerDiv.attr("title", d.replace(/<br>/gi, "\n"));
    this.Iq = Ft.GB("div", {class: "opItemContent"}, ak.AN(a.data, "fixed")).hide();
    c.append(this.headerDiv, this.Iq);
    this.Io = c;
};