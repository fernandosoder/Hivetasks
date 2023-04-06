var fX = function (a) {
    this.AJ(a)
};
fX.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("DelegationHistory", "Hive Delegation History").aI();
    b = new fX(b);
    a.aN(c + "Hive Delegation History");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {})
        })
    });
    a.al();
    return b
};
fX.prototype.AJ = function (a) {
    var b = this,
            c = Fs.c7("text", "userFromDblClick"),
            d = Fs.c7("text", "userFromDblClick"),
            e = Fs.c7("text"),
            f = Fs.c7("text"),
            g = h4.h1([{
                    html: e,
                    grow: 1
                }, h4.h2("-", "auto", "7px 8px"), {
                    html: f,
                    grow: 1
                }]),
            h = new gL({
                items: [{
                        value: "time",
                        text: "Date"
                    }, {
                        value: "vests",
                        text: "Amount"
                    }]
            }),
            k = new gL({
                items: [{
                        value: "DESC",
                        text: "Desc."
                    }, {
                        value: "ASC",
                        text: "Asc."
                    }]
            }),
            l = h4.h1([{
                    html: h.aJ(),
                    grow: 2
                }, h4.h2("", "8px", "7px 0"), {
                    html: k.aJ(),
                    grow: 1
                }]);
    this.gg = Fs.Ri("", "delegationHistoryRefresh", "Search", "", function () {
        var a =
                c.val().trim(),
                g = d.val().trim(),
                l = e.val().trim(),
                m = f.val().trim(),
                n = {
                    orderBy: h.bO(),
                    orderDir: k.bO()
                };
        a && (n.from = a);
        g && (n.to = g);
        l && (n.fromTime = moment(l).utc().unix());
        m && (n.toTime = moment(m).utc().add("24", "hours").subtract("1", "seconds").unix());
        b.Hm(n, 0)
    }).css("margin-top", "7px");
    var m = Fs.Rf("textBox withMarginBottom qNoWrap", "delegationHistoryFilter");
    this.oG = Fs.a9("dataTable autoWidth notBold", "delegationHistoryResult", Fs.Ar(["Date", "Delegator", "Delegatee", "Amount HP", "MVests"], {
        "class": "headerRow"
    }));
    var n = {
        margin: "0 0 10px 0"
    };
    m.append(h4.h1([h4.h3("Delegator", c, 1, 15), h4.h3("Delegatee", d, 1, 0)], n), h4.h1([h4.h3("Date Range", g, 1, 15), h4.h3("Order By", l, 1, 0)], n), this.gg);
    Fs.lY(a, "#delegationHistoryResult{width:100% !important}#delegationHistoryResult tr th:nth-child(4),#delegationHistoryResult tr td:nth-child(4),#delegationHistoryResult tr th:nth-child(5),#delegationHistoryResult tr td:nth-child(5){text-align:right}#delegationHistoryResult tr td:nth-child(1){width:160px !important}#delegationHistoryResult tr td:nth-child(5){width:130px}");
    a.append(m, this.oG);
    $([e, f]).each(function () {
        $(this).datepicker({
            dateFormat: D.B.Hy(),
            changeMonth: !0,
            changeYear: !0
        })
    })
};
fX.prototype.Hm = function (a, b) {
    var c = this,
            d = this,
            e = this.oG;
    Zn.Ms(this.gg, !1);
    D.Z.Hm(a, 250, b, function (f) {
        Zn.Ms(c.gg, !0);
        e.find("#delegationHistoryShowMore, .exportTable").remove();
        0 === b && Fs.fv(e);
        var g = f.cols;
        f = f.rows;
        for (var h = [], k = 0; k < f.length; k++) {
            var l = f[k],
                    m = AQ(l[g.vests]),
                    n = moment.unix(l[g.time]).local();
            h.push(Fs.Aq([D.B.DH(n, !1), aG.EV(l[g.from], !0), aG.EV(l[g.to], !0), Bm(D.o.AM(m, 3), 3), Bm((m / 1E6).toFixed(3), 3)]))
        }
        f.length && (h.push(Fs.Aq([{
                html: '<button id="delegationHistoryShowMore">Show more...</button>',
                attr: {
                    colspan: 1
                }
            }, {
                html: '<button class="exportTable">Export to file...</button>',
                attr: {
                    colspan: 4
                }
            }], {
            "class": "noExport"
        })), e.append(h), g = e.find("#delegationHistoryShowMore").button().on("click", function () {
            Zn.Ms($(this), !1);
            d.Hm(a, b + 250)
        }), 250 > f.length && Zn.Ms(g, !1), e.find(".exportTable").button().on("click", function () {
            Zn.J7("hiveworld-export-delegations.csv", $(this).parents("table"))
        }))
    }, function () {
        Zn.Ms(c.gg, !0)
    })
};
