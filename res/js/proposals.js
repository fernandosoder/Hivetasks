var ZF = function (a) {
    Fs.lY(a, "#tableProposals tr td:nth-child(3){font-weight:bold}#tableProposals tr th:nth-child(3),#tableProposals tr td:nth-child(3),#tableProposals tr th:nth-child(7),#tableProposals tr td:nth-child(7){text-align:right}#tableProposals tr th:nth-child(1),#tableProposals tr td:nth-child(1),#tableProposals tr th:nth-child(2),#tableProposals tr td:nth-child(2){width:50px;padding:7px;text-align:center;padding-left:0;padding-right:0}#tableProposals tr th:nth-child(3),#tableProposals tr td:nth-child(3){width:120px;font-weight:bold}#tableProposals tr th:nth-child(4),#tableProposals tr td:nth-child(4){width:auto}#tableProposals tr th:nth-child(5),#tableProposals tr td:nth-child(5){width:185px;vertical-align:middle}#tableProposals tr th:nth-child(6),#tableProposals tr td:nth-child(6){width:155px}#tableProposals tr th:nth-child(7),#tableProposals tr td:nth-child(7){width:165px}#tableProposals img{width:32px;height:32px;margin-top:4px}#tableProposals tr:not(.headerRow){cursor:pointer}.buttonVoteProposal{width:32px;height:32px;padding:16px;background-position:center !important;background-size:cover !important}#tableProposals tr[data-checked='0'] .buttonVoteProposal{visibility:hidden}");
        this.AJ(a);
};
ZF.ct = function (a, b, c, d) {
    a.bA(bC);
    a.J9(50, "Loading Proposals...");
    b = a.d1("Proposals");
    var e = b.d6();
    b = b.aI();
    var f = new ZF(b);
    a.aN(c + "Worker Proposals");
    a.ak(function () {
        var a = D.o.Ub,
                b = function (a) {
                    f.ZG(a);
                    d()
                },
                c = function () {};
        Pa([
            [D.C, "AG"],
            function (b) {
                D.b.Z4(ZK, !1, function (c) {
                    a.ZI(c.hbd_balance);
                    b()
                }, c)
            }
        ], function () {
            var d = Bm(a.ZJ, a.c5()) + " HBD",
                    f = Bm(a.ZJ / 100, a.c5()) + " HBD";
            e.empty().append("Worker Proposals", Fs.GB("span", {
                "class": "right"
            }, "Total HPS Fund: " + d + " / Currently Available: " + f));
            D.S.ZB([-1],
                    1E3, "by_total_votes", "descending", "votable", b, c)
        })
    });
    a.al();
    return f
};
ZF.prototype.AJ = function (a) {
    this.Q7 = a;
    this.gR = this.Zb();
    a.append(this.gR)
};
ZF.prototype.Zb = function () {
    return Fs.a9("dataTable notBold", "tableProposals").append(Fs.Ar(";;Votes (HP);Subject;Creator / Receiver;Begin / End;Daily / Total Pay".split(";"), {
        "class": "headerRow"
    }))
};
ZF.ZN = function () {
    return Fs.a9("dataTable fixed notBold", "", Fs.Ar([{
            html: "Voter",
            attr: {
                "data-sort-col": "voter",
                "data-sort-asc": "0"
            }
        }, {
            html: "Own HP",
            attr: {
                "class": "alignRight",
                "data-sort-col": "own-vests",
                "data-sort-asc": "0"
            }
        }, {
            html: "Proxied HP",
            attr: {
                "class": "alignRight",
                "data-sort-col": "proxied-vests",
                "data-sort-asc": "0"
            }
        }, {
            html: "Influence",
            attr: {
                "class": "alignRight",
                "data-sort-col": "influence",
                "data-sort-asc": "0"
            }
        }]))
};
ZF.prototype.ZG = function (a) {
    var b, c = moment(),
            d = this.gR;
    Fs.fv(d);
    for (var e = b = 0; e < a.length; e++) {
        var f = a[e];
        if (0 === f.proposal_id) {
            b = D.o.Ub.UZ(f.total_votes / 1E6);
            break
        }
    }
    for (e = 0; e < a.length; e++) {
        f = a[e];
        var g = Zp.GT(f.subject);
        var h = D.B.CK(f.start_date);
        var k = D.B.CK(f.end_date);
        var l = k.diff(h, "days");
        var m = Bm(AQ(f.daily_pay), 3) + " HBD";
        l = Bm(AQ(f.daily_pay) * l, 3) + " HBD";
        var n = D.o.Ub.UZ(f.total_votes / 1E6);
        var p = Fs.GB("a", {
            "class": "linkShowProposalVotes",
            title: "Show votes of this proposal"
        }, Bm(n / 1E6, 3) + " M");
        g = $(aG.bN(f.creator, f.permlink, g)).attr("title", "Open post on " + D.G.ZU());
        n = c >= h && c <= k ? n >= b ? "green" : "yellow" : "red";
        n = Fs.GB("img", {
            "class": "imageProposalStatus",
            src: Lm(s6 + "status-" + n + ".png")
        });
        var q = Fs.GB("button", {
            "class": "buttonVoteProposal",
            title: "Vote/Unvote Proposal"
        });
        f = Fs.Aq([n, q, p, g, aG.EU(f.creator, !0, !0, !0) + (f.creator != f.receiver ? "<br>" + aG.EU(f.receiver, !0, !0, !0) : ""), D.B.DH(h) + "<br>" + D.B.DH(k), 0 < f.proposal_id ? m + "<br>" + l : "-"], {
            "data-row-index": e,
            "data-checked": 0,
            "data-voted": 0,
            title: "Show the content of this proposal"
        });
        d.append(f)
    }
    d.find("tr:not(.headerRow)").on("click", function () {
        var b = $(this).data("row-index");
        b = a[b];
        var c = Zp.GT(b.subject);
        new f6({
            author: b.creator,
            permlink: b.permlink,
            title: c
        })
    });
    d.find("a, button").on("click", function (a) {
        a.stopPropagation()
    });
    d.find(".buttonVoteProposal").button().on("click", function (b) {
        if (D.t.am(!0)) {
            var c = $(this).parents("tr");
            b = c.data("row-index");
            var d = 1 == c.attr("data-voted"),
                    e = a[b],
                    f = function (a) {
                        a && (D6.EA("Done!"), c.attr("data-voted", d ? 0 : 1));
                        PP("result", a)
                    };
            D.t.DO(F1, !1, !1, function (a) {
                D.S.Y8(a, D.l, [e.proposal_id], !d, f)
            })
        }
    });
    d.find(".linkShowProposalVotes").on("click", function (b) {
        b.stopPropagation();
        b = $(this).parents("tr").data("row-index");
        ZF.ZQ(a[b])
    });
    this.eL(d, a)
};
ZF.prototype.eL = function (a, b) {
    var c = this,
            d = a.find("tr[data-checked='0']");
    if (d.length) {
        var e = $(d.toArray()[0]);
        d = e.data("row-index");
        d = b[d];
        var f = function (d) {
            e.attr("data-checked", "1");
            d && e.attr("data-voted", "1");
            c.eL(a, b)
        };
        D.l ? D.b.bQ(d.proposal_id, D.l, f, function () {
            setTimeout(function () {
                c.eL(a, b)
            }, 5E3)
        }) : f(!1)
    }
};
ZF.ZS = function (a) {
    var b = 0,
            c;
    for (c in a) {
        var d = a[c];
        d = "" != d.proxy ? 0 : d.lr + d.lq;
        b += d
    }
    return b
};
ZF.ZO = function (a, b, c) {
    b = Fs.Rf("textBox");
    var d = ZF.ZN(),
            e = ZF.ZS(c),
            f = 0,
            g = 0,
            h = Object.keys(c).length,
            k = 0,
            l;
    for (l in c) {
        var m = c[l];
        var n = m.lr;
        var p = m.lq;
        var q = m.nX;
        var r = m.nW;
        var t = q ? 0 : n + p;
        var u = 100 / e * (n + p);
        var v = Bm(u, 2) + " %";
        var w = Bm(D.o.Ub.UZ(n), 3) + " HP";
        var y = Bm(D.o.Ub.UZ(p), 3) + " HP";
        g += n + p;
        f += t;
        q && (r ? (v = "( " + v + " )", w = "( " + w + " )", y = "( " + y + " )") : k++);
        t = Fs.GB(q && !r ? "del" : "span", {}, w);
        y = Fs.GB(q && !r ? "del" : "span", {}, y);
        v = Fs.GB(q && !r ? "del" : "span", {}, v);
        if (q) {
            q = "Vote proxied:";
            for (w = 0; w < m.nY.length; w++)
                q +=
                        "\n=> " + m.nY[w] + (r || w != m.nY.length - 1 ? "" : " (who didn't vote)");
            t.attr("title", q);
            y.attr("title", q)
        }
        d.append(Fs.Aq([aG.EU(l, !0, !0, !0), {
                html: t,
                attr: {
                    class: "alignRight"
                }
            }, {
                html: y,
                attr: {
                    class: "alignRight"
                }
            }, {
                html: v,
                attr: {
                    class: "alignRight"
                }
            }], {
            "data-voter": l,
            "data-own-vests": n,
            "data-proxied-vests": p,
            "data-influence": u
        }))
    }
    c = Bm(D.o.Ub.UZ(f / 1E6), 3);
    f = Bm(D.o.Ub.UZ((g - f) / 1E6), 3);
    h = "This proposal received " + h + " direct votes with an effective amount of <strong>" + c + " M HP</strong>.";
    k && (h += "<br>" + k + " vote" + (1 <
            k ? "s" : "") + " ( <strong>" + f + " M HP</strong> ) " + (1 < k ? "have" : "has") + " no effect, because the voter" + (1 < k ? "s" : "'s") + " witness proxy didn't vote.");
    b.html(h);
    a.empty().append(b, d);
    bc.Ko(d, "influence")
};
ZF.Y7 = function (a) {
    a = "Proposal Votes | " + Zp.GT(a.subject);
    var b = Fs.Rf();
    D6.I1(b, {
        title: a,
        width: 700,
        minHeight: 0,
        padding: "4px 0",
        resizable: !1,
        centered: !1,
        buttons: [],
        open: function () {
            Fs.lf();
            b.parents(".ui-dialog").focus()
        },
        close: function () {
            Fs.ZR()
        }
    });
    return b
};
ZF.ZQ = function (a) {
    var b = ZF.Y7(a);
    b.html("&nbsp;&nbsp;Loading Votes...");
    D.b.kg(a.proposal_id, function (c) {
        return ZF.ZO(b, a, c)
    })
};
var ng = function (a) {
    this.AJ(a)
};
ng.ct = function (a, b, c, d) {
    a.bA(bB);
    b = a.d1("UITest", "UI Test").aI();
    b = new ng(b);
    a.aN(c + "UI Test");
    a.ak(function () {
        Pa([], function () {
            d(function () {})
        })
    });
    a.al();
    return b
};
ng.prototype.AJ = function (a) {
    var b = new mR({
        nE: "tableIncomingDelegations",
        pc: "dataTable notBold",
        Er: 15,
        mw: {
            delegatee: {
                width: "28%",
                ms: function (a, b) {
                    return aG.EV(b, !0)
                }
            },
            amount_sp: {
                title: "Amount",
                mt: "vesting_shares",
                width: "18%",
                type: "number",
                precision: 3,
                mT: !1,
                ms: function (a, b) {
                    return b / 1E3
                }
            },
            amount_vests: {
                title: "Vesting Shares",
                mt: "vesting_shares",
                width: "24%",
                type: "number",
                precision: 6,
                mT: !1
            },
            time: {
                title: "Delegation Time",
                mt: "min_delegation_time",
                width: "30%",
                mT: !1,
                ms: function (a, b) {
                    return D.B.DH(D.B.CK(b), !1)
                }
            },
            btn_edit: {
                title: "",
                mS: !1,
                mT: !1,
                ms: function (a, d) {
                    return Fs.Ri("editDelegation", "", "Edit...", "Edit delegation...", function () {
                        PP(b.bO(a, "delegatee"))
                    })
                }
            }
        }
    });
    a.append(b.aJ());
    PP("start");
    b.be(D.testRows)
};