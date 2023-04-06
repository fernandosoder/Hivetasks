var fa = function (a) {
    Fs.lY(a, "#transferSearchResult *{font-size:14px}#transferSearchResult tr td:nth-child(2),#transferSearchResult tr td:nth-child(3){min-width:185px}#transferSearchResult tr th:nth-child(4),#transferSearchResult tr td:nth-child(4){text-align:right}#transferSearchResult tr td:nth-child(6){width:224px;padding-top:5px;padding-bottom:0}#transferSearchResult tr td:nth-child(6) *{font-size:12px}.transferSearchMemo{height:22px;display:inline-block;overflow:hidden}");
    this.AJ(a)
};
fa.ct = function (a, b, c, d) {
    a.bA(bC);
    b = a.d1("TransferSearch", "Hive Transfer Search").aI();
    b = new fa(b);
    a.aN(c + "Hive Transfer Search");
    a.ak(function () {
        Pa([
            [D.C, "AG"]
        ], function () {
            d(function () {})
        })
    });
    a.al();
    return b
};
fa.prototype.AJ = function (a) {
    var b = this,
            c = Fs.Rf("textBox withMarginBottom qNoWrap", "transferSearchFilter");
    this.oG = Fs.a9("dataTable autoWidthCols notBold", "transferSearchResult", Fs.Ar("Date From To Amount Unit Memo".split(" "), {
        "class": "headerRow"
    }));
    var d = Fs.Rf("", "", this.oG).css("overflow-x", "hidden");
    a.append(c, d);
    var e = Fs.c6("userFromDblClick", "editTransferSearchFrom"),
            f = Fs.c6("userFromDblClick", "editTransferSearchTo"),
            g = Fs.c6("", "editTransferSearchAmount"),
            h = Fs.c6("", "editTransferSearchRequestId",
                    "", !0),
            k = Fs.c6("", "editTransferSearchMemo").attr("maxlength", "32"),
            l = Fs.c6("", "editTransferSearchDateFrom"),
            m = Fs.c6("", "editTransferSearchDateTo"),
            n = new gL({
                items: [{
                        value: Bf,
                        text: "Normal Transfer"
                    }, {
                        value: BC,
                        text: "Transfer To Vesting"
                    }, {
                        value: BD,
                        text: "Transfer To Savings"
                    }, {
                        value: Be,
                        text: "Transfer From Savings"
                    }, {
                        value: Oj,
                        text: "Cancel Transfer From Savings"
                    }, {
                        value: BN,
                        text: "Withdraw Vesting"
                    }],
                dj: function (a) {
                    a = [Be, Oj].includes(a);
                    h.prop("disabled", !a);
                    a || h.val("")
                }
            }),
            p = new gL({
                width: "55px",
                items: [{
                        text: "="
                    },
                    {
                        text: ">="
                    }, {
                        text: "<="
                    }
                ]
            }),
            q = new gL({
                width: "90px",
                items: [{
                        value: "HIVE",
                        text: "HIVE"
                    }, {
                        value: "HBD",
                        text: "HBD"
                    }, {
                        value: "VESTS",
                        text: "VESTS"
                    }, {
                        value: "HP",
                        text: "HP"
                    }]
            }),
            r = new gL({
                items: [{
                        value: "time",
                        text: "Date"
                    }, {
                        value: "amount",
                        text: "Amount"
                    }]
            }),
            t = new gL({
                items: [{
                        value: "DESC",
                        text: "Desc."
                    }, {
                        value: "ASC",
                        text: "Asc."
                    }]
            });
    this.gg = Fs.Ri("", "transferSearchRefresh", "Search", "", function () {
        var a = l.val().trim(),
                c = m.val().trim(),
                d = e.val().trim(),
                u = f.val().trim(),
                v = k.val().trim();
        h.val().trim();
        var x = g.val().trim(),
                B = q.bO();
        x && "HP" === B && (x = D.o.FN(x, 6), B = "VESTS");
        var z = {
            type: n.bO(),
            orderBy: r.bO(),
            orderDir: t.bO()
        };
        d && (z.from = d);
        u && (z.to = u);
        a && (z.fromTime = moment(a).utc().unix());
        c && (z.toTime = moment(c).utc().add("24", "hours").subtract("1", "seconds").unix());
        B && x && (z.unit = B, z.amount = x, z.amountOp = p.bO());
        v && (z.memo = v);
        b.Ep(z, 0)
    }).css("margin-top", "7px");
    a = h4.h1([{
            html: l,
            grow: 1
        }, h4.h2("-", "auto", "7px 8px"), {
            html: m,
            grow: 1
        }]);
    d = h4.h1([{
            html: r.aJ(),
            grow: 1
        }, h4.h2("", "10px", "7px 0"), {
            html: t.aJ(),
            grow: 1
        }]);
    var u = h4.h1([{
            html: p.aJ(),
            grow: 0
        }, h4.h2("", "10px", "7px 0"), {
            html: g,
            grow: 1
        }, h4.h2("", "8px", "7px 0"), {
            html: q.aJ(),
            grow: 0
        }]),
            v = {
                margin: "0 0 10px 0"
            };
    c.append(h4.h1([h4.h3("Type", n.aJ(), 1, 15), h4.h3("Order By", d, 1, 0)], v), h4.h1([h4.h3("From", e, 1, 15), h4.h3("To", f, 1, 0)], v), h4.h1([h4.h3("Memo Id", k, 1, 15), h4.h3("Request Id", h, 1, 0)], v), h4.h1([h4.h3("Date Range", a, 1, 15), h4.h3("Amount", u, 1, 0)], v), this.gg);
    $([l, m]).each(function () {
        $(this).datepicker({
            dateFormat: D.B.Hy(),
            changeMonth: !0,
            changeYear: !0
        })
    })
};
fa.prototype.Ep = function (a, b) {
    var c = this,
            d = this.oG;
    0 === b && Fs.fv(d);
    Zn.Ms(this.gg, !1);
    D.Z.Ep(a, 250, b, function (e) {
        Zn.Ms(c.gg, !0);
        d.find("#transferSearchShowMore,.exportTable").remove();
        var f = e.rows;
        e = e.cols;
        for (var g = [], h = 0; h < f.length; h++) {
            var k = f[h],
                    l = k[e.from],
                    m = k[e.to],
                    n = moment.unix(k[e.time]).local();
            e.request_id && Zp.GT(k[e.request_id]);
            var p = e.memo ? Zp.GT(k[e.memo]) : "";
            !p.startsWith("#") || m !== D.l && l !== D.l || (p = '<a href="#" class="encryptedMemo" title="Click to decrypt" data-memo="' + p + '" data-incoming="' +
                    (m === D.l ? "1" : "0") + '">[ encrypted message ]</a>');
            var q = k[e.unit];
            k = k[e.amount];
            "VESTS" === q && (q = "HP", k = D.o.AM(k, 3));
            g.push(Fs.Aq([D.B.DH(n, !1), aG.EV(l, !0), m ? aG.EV(m, !0) : "-", Bm(k, 3), q, Fs.Fh("span", {
                    "class": "transferSearchMemo",
                    title: p + "\n\n(Click to view full memo)"
                }, p)], {
                "data-amount": parseFloat(k),
                "data-unit": q
            }))
        }
        d.append(g);
        $(".transferSearchMemo").off("click").on("click", function () {
            $(this).find(".encryptedMemo").length || D6.EB($(this).text(), "Memo", {
                paddingX: 10,
                paddingY: 10
            })
        });
        D.U.OH();
        if (f.length) {
            var r = {
                HIVE: 0,
                HBD: 0,
                HP: 0
            };
            e = "";
            d.find("tr:not(.headerRow):not(.footerRow)").each(function () {
                var a = $(this),
                        b = a.data("amount");
                a = a.data("unit");
                r[a] += b
            });
            for (var t in r)
                r[t] && (e += (e ? LJ : "") + Bm(r[t], 3) + " " + t);
            d.append(Fs.Aq([Th.Kx(13) + "Totals:", {
                    attr: {
                        colspan: 5
                    },
                    html: e
                }], {
                "class": "footerRow noExport"
            }));
            d.append(Fs.Aq([{
                    html: '<button id="transferSearchShowMore">Show more...</button>',
                    attr: {
                        colspan: 1
                    }
                }, {
                    html: '<button class="exportTable">Export to file...</button>',
                    attr: {
                        colspan: 5
                    }
                }], {
                "class": "noExport"
            }));
            var u = d.find("#transferSearchShowMore");
            u.button().on("click", function () {
                Zn.Ms(u, !1);
                c.Ep(a, b + 250)
            });
            250 > f.length && Zn.Ms(u, !1);
            d.find(".exportTable").button().on("click", function () {
                Zn.J7("hiveworld-export-transfers.csv", $(this).parents("table"))
            })
        }
    }, function () {
        Zn.Ms(c.gg, !0)
    })
};
